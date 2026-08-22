/**
 * migrateLocalStorage.ts — Migración localStorage → IndexedDB (AG-CORE, Ola 1).
 *
 * Mapa de las claves zustand persist existentes (detectadas en la baseline)
 * hacia su namespace lógico en la base `plan-maestro-os`. La migración es
 * NO DESTRUCTIVA: copia a IndexedDB y deja el original en localStorage;
 * la limpieza del legacy se hará manual cuando toda la app consuma el
 * adaptador (ver STATUS-core.md).
 */

import type { KvStore } from './idb';

export interface MigrationTarget {
  /** Namespace lógico en IndexedDB. */
  store: string;
  /** Clave destino (por defecto, la misma que la original). */
  key?: string;
}

/** Claves localStorage conocidas → destino IndexedDB. */
export const LOCALSTORAGE_MIGRATION_MAP: Record<string, MigrationTarget> = {
  'plan-maestro-state-v3': { store: 'app' },
  'fitapp-active-program-v1': { store: 'fitness' },
  'plan-maestro-skills-store-v1': { store: 'fitness' },
  'plan_maestro_career_goals': { store: 'career' },
};

export interface MigrationReport {
  migrated: string[];
  skippedEmpty: string[];
  errors: Array<{ key: string; error: string }>;
}

interface StorageLike {
  getItem(key: string): string | null;
}

/**
 * Copia cada clave del mapa desde localStorage a IndexedDB (si aún no
 * existía allí). Idempotente: las claves ya migradas no se reescriben.
 */
export async function migrateLocalStorage(
  kv: KvStore,
  storage: StorageLike = typeof localStorage !== 'undefined' ? localStorage : undefined as unknown as StorageLike,
  map: Record<string, MigrationTarget> = LOCALSTORAGE_MIGRATION_MAP,
): Promise<MigrationReport> {
  const report: MigrationReport = { migrated: [], skippedEmpty: [], errors: [] };
  if (!storage) return report;

  for (const [sourceKey, target] of Object.entries(map)) {
    const raw = storage.getItem(sourceKey);
    if (raw === null) {
      report.skippedEmpty.push(sourceKey);
      continue;
    }
    const destKey = target.key ?? sourceKey;
    try {
      const existing = await kv.get(target.store, destKey);
      if (existing !== undefined) continue; // ya migrada — idempotencia
      let value: unknown = raw;
      try {
        value = JSON.parse(raw);
      } catch {
        // valor no-JSON: se guarda como string tal cual
      }
      await kv.set(target.store, destKey, value);
      report.migrated.push(sourceKey);
    } catch (error) {
      report.errors.push({ key: sourceKey, error: error instanceof Error ? error.message : String(error) });
    }
  }
  return report;
}
