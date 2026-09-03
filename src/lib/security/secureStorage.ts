// secureStorage — cifrado en reposo WebCrypto (Gemini-07 §3.1, adoptado CON FIX).
// FIX vs Gemini: su btoa(String.fromCharCode(...combined)) revienta la pila con
// payloads >~100KB. Aquí encode/decode por chunks de 8KB.
// Funciona en navegador y en Node 22 (globalThis.crypto). Sin dependencias.
// Destino: src/lib/storage/secureStorage.ts

const ITERATIONS = 100_000;

function subtle(): SubtleCrypto {
  const c = globalThis.crypto?.subtle;
  if (!c) throw new Error('WebCrypto no disponible');
  return c;
}

/** base64 por chunks (no revienta la pila). */
export function bytesToB64(bytes: Uint8Array): string {
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x2000) {
    s += String.fromCharCode(...bytes.subarray(i, i + 0x2000));
  }
  return btoa(s);
}

export function b64ToBytes(b64: string): Uint8Array {
  const s = atob(b64);
  const out = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
  return out;
}

async function deriveKey(passphrase: string, salt: Uint8Array): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const base = await subtle().importKey('raw', enc.encode(passphrase), { name: 'PBKDF2' }, false, ['deriveKey']);
  return subtle().deriveKey(
    { name: 'PBKDF2', salt: salt as BufferSource, iterations: ITERATIONS, hash: 'SHA-256' },
    base,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt'],
  );
}

/** Empaqueta salt(16) + iv(12) + ciphertext en un solo b64. */
export async function encryptPayload(data: unknown, passphrase: string): Promise<string> {
  const salt = globalThis.crypto.getRandomValues(new Uint8Array(16));
  const iv = globalThis.crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(passphrase, salt);
  const ct = await subtle().encrypt(
    { name: 'AES-GCM', iv: iv as BufferSource },
    key,
    new TextEncoder().encode(JSON.stringify(data)),
  );
  const combined = new Uint8Array(16 + 12 + ct.byteLength);
  combined.set(salt, 0);
  combined.set(iv, 16);
  combined.set(new Uint8Array(ct), 28);
  return bytesToB64(combined);
}

export async function decryptPayload<T>(packed: string, passphrase: string): Promise<T> {
  const raw = b64ToBytes(packed);
  const salt = raw.slice(0, 16);
  const iv = raw.slice(16, 28);
  const ct = raw.slice(28);
  const key = await deriveKey(passphrase, salt);
  const pt = await subtle().decrypt({ name: 'AES-GCM', iv: iv as BufferSource }, key, ct as BufferSource);
  return JSON.parse(new TextDecoder().decode(pt)) as T;
}
