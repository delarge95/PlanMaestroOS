import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { b64ToBytes, bytesToB64, decryptPayload, encryptPayload } from './secureStorage.js';
import { aggregatePain, scrubForLLM } from './sanitize.js';
import { assertCanSend, canSend } from './dataMatrix.js';

describe('security', () => {
  it('base64 por chunks hace roundtrip en payload grande (200KB)', () => {
    const big = new Uint8Array(200_000).map((_, i) => i % 256);
    assert.deepEqual(b64ToBytes(bytesToB64(big)), big);
  });

  it('cifrado AES-GCM roundtrip + passphrase errónea falla', async () => {
    const data = { zone: 'hombro', eva: 5, notas: ' Ünïcödé ✓ ' };
    const packed = await encryptPayload(data, 'frase-correcta');
    assert.deepEqual(await decryptPayload<typeof data>(packed, 'frase-correcta'), data);
    await assert.rejects(() => decryptPayload(packed, 'otra-frase'));
  });

  it('scrub tokeniza PII y bloquea salud cruda', () => {
    const r = scrubForLLM('Escríbeme a juan@mail.com o al +57 300 123 4567');
    assert.equal(r.blocked, false);
    assert.equal(r.replacements, 2);
    assert.match(r.clean, /\[EMAIL\].*\[TEL\]/);
    const b = scrubForLLM('Mi diagnóstico: X, dosis 20mg');
    assert.equal(b.blocked, true);
  });

  it('aggregatePain solo deja zona+EVA acotados', () => {
    assert.equal(aggregatePain('Hombro Anterior Derecho', 6.7), 'dolor hombro anterior derecho EVA 7/10');
    assert.equal(aggregatePain('x', 99), 'dolor x EVA 10/10');
  });

  it('matriz: salud mental jamás sale; proyectos sí; dolor solo agregado', () => {
    assert.equal(canSend('mental-health', 'worker-ai'), 'deny');
    assert.equal(canSend('mental-health', 'notion'), 'deny');
    assert.equal(canSend('projects', 'worker-ai'), 'allow');
    assert.equal(canSend('pain-injury', 'worker-ai'), 'aggregates-only');
    assert.throws(() => assertCanSend('sexual-physio', 'sheets'));
  });
});
