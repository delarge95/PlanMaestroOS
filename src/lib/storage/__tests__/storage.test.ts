/**
 * Tests del adaptador IndexedDB + migración localStorage (AG-CORE).
 * Usa una implementación fake inyectada por fábrica (sin globals).
 */
import { describe, it, expect } from 'vitest';
import { createKvStore } from '../idb';
import { migrateLocalStorage } from '../migrateLocalStorage';

// ————————————————————— Fake IndexedDB —————————————————————

class FakeRequest<T> {
  result!: T;
  error: DOMException | null = null;
  onsuccess: ((this: IDBRequest<T>, ev: Event) => unknown) | null = null;
  onerror: ((this: IDBRequest<T>, ev: Event) => unknown) | null = null;
  readyState: IDBRequestReadyState = 'pending';
  source!: any;
  transaction!: any;
  constructor(result: T) {
    queueMicrotask(() => {
      this.result = result;
      this.readyState = 'done';
      this.onsuccess?.call(this as any, {} as Event);
    });
  }
}

class FakeObjectStore {
  constructor(private data: Map<string, unknown>) {}
  get(key: IDBValidKey): any {
    return new FakeRequest(this.data.get(String(key)));
  }
  put(value: any, key?: IDBValidKey): any {
    this.data.set(String(key), value);
    return new FakeRequest(key as IDBValidKey);
  }
  delete(key: IDBValidKey): any {
    this.data.delete(String(key));
    return new FakeRequest(undefined);
  }
  getAllKeys(): any {
    return new FakeRequest([...this.data.keys()]);
  }
  getAll(): any {
    return new FakeRequest([...this.data.values()]);
  }
  clear(): any {
    this.data.clear();
    return new FakeRequest(undefined);
  }
  index(): never { throw new Error('not implemented'); }
  add(): never { throw new Error('not implemented'); }
  createIndex(): never { throw new Error('not implemented'); }
  deleteIndex(): never { throw new Error('not implemented'); }
  openCursor(): never { throw new Error('not implemented'); }
  count(): any { return new FakeRequest(this.data.size); }
  keyPath: any = null;
  indexNames: any = [];
  name: any = 'kv';
  transaction: any = null;
  autoIncrement: any = false;
}

class FakeTransaction {
  oncomplete: ((this: IDBTransaction, ev: Event) => unknown) | null = null;
  onerror: ((this: IDBTransaction, ev: Event) => unknown) | null = null;
  onabort: ((this: IDBTransaction, ev: Event) => unknown) | null = null;
  db: any;
  mode: any;
  error: any = null;
  objectStoreNames: any;
  constructor(private data: Map<string, unknown>, db: any, mode: string) {
    this.db = db;
    this.mode = mode;
    this.objectStoreNames = { contains: () => true };
    queueMicrotask(() => this.oncomplete?.call(this as any, {} as Event));
  }
  objectStore(): any {
    return new FakeObjectStore(this.data);
  }
  abort(): void {}
  commit(): void {}
}

class FakeDB {
  private stores = new Set<string>();
  constructor(private data: Map<string, unknown>, public name: string, public version: number) {}
  objectStoreNames = { contains: (n: string) => this.stores.has(n) } as unknown as DOMStringList;
  createObjectStore(name: string): any {
    this.stores.add(name);
    return new FakeObjectStore(this.data);
  }
  transaction(storeName: string, mode: IDBTransactionMode): any {
    if (!this.stores.has(storeName)) throw new Error(`store "${storeName}" no existe`);
    return new FakeTransaction(this.data, this, mode);
  }
  close(): void {}
  deleteObjectStore(): void {}
  addEventListener(): void {}
  removeEventListener(): void {}
  dispatchEvent(): boolean { return false; }
  onabort: any = null;
  onclose: any = null;
  onerror: any = null;
  onversionchange: any = null;
}

/** Request manual (para open): se resuelve explícitamente, no auto-fire. */
class ManualRequest<T> {
  result!: T;
  error: DOMException | null = null;
  onsuccess: ((this: IDBRequest<T>, ev: Event) => unknown) | null = null;
  onerror: ((this: IDBRequest<T>, ev: Event) => unknown) | null = null;
  readyState: IDBRequestReadyState = 'pending';
  source!: any;
  transaction!: any;
  resolve(value: T): void {
    queueMicrotask(() => {
      this.result = value;
      this.readyState = 'done';
      const onUpgrade = (this as unknown as { onupgradeneeded?: (ev: { target: unknown }) => void }).onupgradeneeded;
      if (typeof onUpgrade === 'function') onUpgrade.call(this as unknown as IDBRequest<T>, { target: this });
      this.onsuccess?.call(this as any, {} as Event);
    });
  }
}

class FakeFactory {
  private db: FakeDB | null = null;
  private data = new Map<string, unknown>();
  open(name: string, version?: number): any {
    const request = new ManualRequest<IDBDatabase>();
    if (this.db === null) {
      const db = new FakeDB(this.data, name, version ?? 1);
      this.db = db;
      request.resolve(db as unknown as IDBDatabase);
    } else {
      request.resolve(this.db as unknown as IDBDatabase);
    }
    return request;
  }
}

// ————————————————————— Tests —————————————————————

describe('createKvStore (fake IndexedDB)', () => {
  it('set/get con namespace lógico y del', async () => {
    const kv = await createKvStore(new FakeFactory() as any);
    expect(kv).not.toBeNull();
    await kv!.set('fitness', 'program', { id: 'min-max' });
    expect(await kv!.get('fitness', 'program')).toEqual({ id: 'min-max' });
    expect(await kv!.get('fitness', 'inexistente')).toBeUndefined();
    await kv!.del('fitness', 'program');
    expect(await kv!.get('fitness', 'program')).toBeUndefined();
  });

  it('keys() filtra por namespace', async () => {
    const kv = await createKvStore(new FakeFactory() as any);
    await kv!.set('app', 'a', 1);
    await kv!.set('fitness', 'b', 2);
    await kv!.set('fitness', 'c', 3);
    expect((await kv!.keys('fitness')).sort()).toEqual(['b', 'c']);
    expect(await kv!.keys('app')).toEqual(['a']);
  });

  it('exportAll/importAll roundtrip', async () => {
    const factory = new FakeFactory();
    const kv = await createKvStore(factory as any);
    await kv!.set('fitness', 'x', { week: 1 });
    await kv!.set('career', 'y', [1, 2]);
    const dump = await kv!.exportAll();
    expect(dump).toEqual({ fitness: { x: { week: 1 } }, career: { y: [1, 2] } });

    // En la misma "base": importar reemplaza todo.
    await kv!.set('career', 'z', 'viejo');
    await kv!.importAll(dump);
    expect(await kv!.get('career', 'z')).toBeUndefined();
    expect(await kv!.get('career', 'y')).toEqual([1, 2]);
  });
});

describe('migrateLocalStorage', () => {
  it('migra claves JSON al namespace correcto y es idempotente', async () => {
    const kv = await createKvStore(new FakeFactory() as any);
    const storage = new Map<string, string>([
      ['plan-maestro-state-v3', JSON.stringify({ state: { currentEnergy: 'medium' } })],
      ['fitapp-active-program-v1', JSON.stringify({ state: { programId: 'min-max' } })],
      ['plan_maestro_career_goals', 'texto-plano-no-json'],
    ]);
    const ls: { getItem: (k: string) => string | null } = {
      getItem: (k) => storage.get(k) ?? null,
    };

    const r1 = await migrateLocalStorage(kv!, ls);
    expect(r1.migrated.sort()).toEqual(['fitapp-active-program-v1', 'plan-maestro-state-v3', 'plan_maestro_career_goals']);
    expect(r1.errors).toEqual([]);
    expect(await kv!.get('app', 'plan-maestro-state-v3')).toEqual({ state: { currentEnergy: 'medium' } });
    expect(await kv!.get('career', 'plan_maestro_career_goals')).toBe('texto-plano-no-json'); // no-JSON se guarda tal cual

    // Segunda pasada: ya están migradas → no reescribe.
    const r2 = await migrateLocalStorage(kv!, ls);
    expect(r2.migrated).toEqual([]);

    // El original NO se toca (no destructivo).
    expect(storage.get('plan-maestro-state-v3')).toBeTruthy();
  });

  it('claves ausentes se reportan como skippedEmpty', async () => {
    const kv = await createKvStore(new FakeFactory() as any);
    const ls = { getItem: () => null };
    const r = await migrateLocalStorage(kv!, ls);
    expect(r.migrated).toEqual([]);
    expect(r.skippedEmpty.length).toBe(4);
  });
});
