/**
 * idb.ts — Adaptador IndexedDB mínimo (AG-CORE, Ola 1).
 *
 * Sin dependencias externas (Dexie queda como opción futura si la
 * complejidad crece). Diseño:
 *
 * - Una única base `plan-maestro-os` con UN objectStore físico `kv`
 *   (`createObjectStore('kv')` en `onupgradeneeded`); el espacio lógico se
 *   namespacea con claves `<store>:<key>` (p. ej. `fitness:fitapp-active-program-v1`).
 *   Esto mantiene el wrapper pequeño y el export/import trivial.
 * - `idbFactory` inyectable para tests (por defecto `globalThis.indexedDB`).
 * - Todas las operaciones devuelven promesas; en entornos sin IndexedDB
 *   (SSR) `createKvStore()` devuelve `null` y el llamador cae a localStorage.
 */

const DB_NAME = 'plan-maestro-os';
const DB_VERSION = 1;
const STORE = 'kv';

export interface KvStore {
  get<T = unknown>(store: string, key: string): Promise<T | undefined>;
  set(store: string, key: string, value: unknown): Promise<void>;
  del(store: string, key: string): Promise<void>;
  /** Todas las claves de un namespace lógico (sin prefijo). */
  keys(store: string): Promise<string[]>;
  /** Volcado completo agrupado por namespace: { [store]: { [key]: value } }. */
  exportAll(): Promise<Record<string, Record<string, unknown>>>;
  /** Reemplaza el contenido con un volcado previo (de `exportAll`). */
  importAll(dump: Record<string, Record<string, unknown>>): Promise<void>;
  close(): void;
}

interface MinimalIDBDatabase {
  transaction(storeName: string, mode: IDBTransactionMode): IDBTransaction;
  close(): void;
}

interface MinimalIDBFactory {
  open(name: string, version?: number): IDBRequest<IDBDatabase>;
}

function reqAsPromise<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function txAsPromise(tx: IDBTransaction): Promise<void> {
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
}

const physicalKey = (store: string, key: string) => `${store}:${key}`;

/** Abre la base (creando `kv` si es la primera vez). `null` si no hay IndexedDB. */
export async function openKvDb(factory?: MinimalIDBFactory): Promise<{
  db: MinimalIDBDatabase;
} | null> {
  const idb = factory ?? (globalThis as { indexedDB?: MinimalIDBFactory }).indexedDB;
  if (!idb) return null;

  const openRequest = idb.open(DB_NAME, DB_VERSION);
  openRequest.onupgradeneeded = () => {
    const db = openRequest.result;
    if (!db.objectStoreNames.contains(STORE)) {
      db.createObjectStore(STORE);
    }
  };
  const db = await reqAsPromise(openRequest);
  return { db };
}

export async function createKvStore(factory?: MinimalIDBFactory): Promise<KvStore | null> {
  const opened = await openKvDb(factory);
  if (!opened) return null;
  const { db } = opened;

  const objectStore = (mode: IDBTransactionMode) => db.transaction(STORE, mode).objectStore(STORE);

  return {
    async get<T = unknown>(store: string, key: string): Promise<T | undefined> {
      const value = await reqAsPromise(objectStore('readonly').get(physicalKey(store, key)));
      return value as T | undefined;
    },
    async set(store: string, key: string, value: unknown): Promise<void> {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).put(value, physicalKey(store, key));
      await txAsPromise(tx);
    },
    async del(store: string, key: string): Promise<void> {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).delete(physicalKey(store, key));
      await txAsPromise(tx);
    },
    async keys(store: string): Promise<string[]> {
      const all = await reqAsPromise(objectStore('readonly').getAllKeys());
      const prefix = `${store}:`;
      return all
        .filter((k) => typeof k === 'string' && k.startsWith(prefix))
        .map((k) => (k as string).slice(prefix.length));
    },
    async exportAll(): Promise<Record<string, Record<string, unknown>>> {
      const os = objectStore('readonly');
      const [allKeys, allValues] = await Promise.all([
        reqAsPromise(os.getAllKeys()),
        reqAsPromise(os.getAll()),
      ]);
      const dump: Record<string, Record<string, unknown>> = {};
      allKeys.forEach((rawKey, i) => {
        if (typeof rawKey !== 'string') return;
        const sep = rawKey.indexOf(':');
        if (sep <= 0) return;
        const store = rawKey.slice(0, sep);
        const key = rawKey.slice(sep + 1);
        (dump[store] ??= {})[key] = allValues[i];
      });
      return dump;
    },
    async importAll(dump: Record<string, Record<string, unknown>>): Promise<void> {
      const tx = db.transaction(STORE, 'readwrite');
      const os = tx.objectStore(STORE);
      os.clear();
      for (const [store, entries] of Object.entries(dump)) {
        for (const [key, value] of Object.entries(entries)) {
          os.put(value, physicalKey(store, key));
        }
      }
      await txAsPromise(tx);
    },
    close(): void {
      (db as IDBDatabase).close();
    },
  };
}
