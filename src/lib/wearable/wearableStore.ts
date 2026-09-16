/**
 * wearableStore.ts — Ingesta LOCAL de daily metrics de la banda WHOOP
 * (vía bridge Android OpenStrap/edge → worker /wearable/ingest → este store).
 *
 * PRINCIPIO (ENCARGO-WEARABLE §0): el wearable es un ACCESORIO, nunca una
 * dependencia. Sin datos aquí, la app funciona idéntica (self-report del
 * clinicalStore como fallback en userStateFeed).
 *
 * - Persistencia: zustand persist, clave `wearable-daily-v1`, versión 1.
 * - `daily`: Record<dateIso, WearableDailyEntry> con máximo MAX_DAILY_ENTRIES
 *   (90 días); al superarlo se borra el más viejo (FIFO).
 * - Helpers PUROS (`getLatestEntry`, `getEntryForDate`, `getHrvTrend`, `isFreshData`)
 *   reciben el Record y una fecha de referencia opcional → deterministas y
 *   testeables sin DOM. Las variantes del store delegan en ellos.
 *
 * Rangos de validación idénticos a los del worker (worker/src/notion/proxy.ts
 * `WEARABLE_RANGES`): mantener ambos en sync al cambiar.
 */

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

/** Identificador del bridge Android OpenStrap/edge (export → ingest). */
export const WEARABLE_SOURCE_OPENSTRAP = 'openstrap-edge';

/** Clave de persistencia (contrato con userStateFeed — no renombrar). */
export const WEARABLE_STORAGE_KEY = 'wearable-daily-v1';

/** Máximo de días retenidos (FIFO: al superar se borra el más viejo). */
export const MAX_DAILY_ENTRIES = 90;

/** Métricas diarias normalizadas de la banda (formato del bridge). */
export interface WearableDailyEntry {
  dateIso: string; // YYYY-MM-DD (clave única — upsert)
  sleepHours?: number; // horas de sueño
  hrvRmssdMs?: number; // HRV nocturno RMSSD en ms
  restingHr?: number; // RHR en bpm
  strain?: number; // strain local 0-21 (método open-source, no el oficial)
  batteryPct?: number; // batería de la banda 0-100
  skinTempOffsetC?: number; // offset de temperatura corporal
  source: string; // identificador del bridge ('openstrap-edge')
  ingestedAtIso?: string; // cuándo llegó al store
}

/** Rangos plausibles por campo (iguales que el worker). */
const WEARABLE_RANGES: Record<string, { min: number; max: number }> = {
  sleepHours: { min: 0, max: 24 },
  hrvRmssdMs: { min: 0, max: 500 },
  restingHr: { min: 20, max: 220 },
  strain: { min: 0, max: 21 },
  batteryPct: { min: 0, max: 100 },
  skinTempOffsetC: { min: -5, max: 5 },
};

const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/** Resultado de ingesta (sin alert/confirm: el UI decide cómo mostrarlo). */
export interface IngestResult {
  ok: boolean;
  error?: string;
}

/** Valida UNA entrada contra el contrato (fecha, source, rangos). */
export function validateWearableEntry(entry: Partial<WearableDailyEntry>): IngestResult {
  if (!entry || typeof entry !== 'object') return { ok: false, error: 'Entrada inválida' };
  if (typeof entry.dateIso !== 'string' || !ISO_DATE_RE.test(entry.dateIso)) {
    return { ok: false, error: 'dateIso debe tener formato YYYY-MM-DD' };
  }
  if (typeof entry.source !== 'string' || !entry.source.trim()) {
    return { ok: false, error: 'source es obligatorio (identificador del bridge)' };
  }
  const hasMetric = Object.keys(WEARABLE_RANGES).some(
    (k) => (entry as Record<string, unknown>)[k] !== undefined,
  );
  if (!hasMetric) return { ok: false, error: 'La entrada no trae ninguna métrica' };
  for (const [field, range] of Object.entries(WEARABLE_RANGES)) {
    const v = (entry as Record<string, unknown>)[field];
    if (v === undefined) continue;
    if (typeof v !== 'number' || !Number.isFinite(v) || v < range.min || v > range.max) {
      return { ok: false, error: `${field} debe ser número finito en [${range.min}, ${range.max}]` };
    }
  }
  return { ok: true };
}

// ——————————————————— helpers puros (sin DOM) ———————————————————

/** Forma mínima que consumen los helpers de tendencia (structural). */
export interface WearableSample {
  dateIso: string;
  hrvRmssdMs?: number;
  restingHr?: number;
}

/** Fecha ISO local de hoy (YYYY-MM-DD); acepta Date para tests. */
export function localTodayIso(now: Date = new Date()): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** Entry más reciente por dateIso (undefined si no hay datos). */
export function getLatestEntry<T extends { dateIso: string }>(daily: Record<string, T>): T | undefined {
  const keys = Object.keys(daily).sort();
  const last = keys[keys.length - 1];
  return last ? daily[last] : undefined;
}

/** Entry de una fecha concreta (undefined si no existe). */
export function getEntryForDate<T extends { dateIso: string }>(daily: Record<string, T>, dateIso: string): T | undefined {
  return daily[dateIso];
}

/** Estadísticas de HRV de una ventana de días (para reglas y tendencias). */
export interface HrvTrend {
  /** Promedio RMSSD (ms) de la ventana (solo días con HRV). */
  mean: number;
  /** Desviación estándar muestral (n-1); 0 con <2 muestras. */
  stdDev: number;
  /** z-score del HRV MÁS RECIENTE respecto a la ventana; undefined sin baseline. */
  zScore?: number;
  /** HRV (ms) de la entrada más reciente; undefined sin datos. */
  latestMs?: number;
  /** nº de días con HRV dentro de la ventana. */
  sampleCount: number;
  /** días de la ventana usados. */
  windowDays: number;
}

/**
 * Tendencia de HRV de los últimos `days` días (por defecto 7) anclada en la
 * entrada más reciente (`referenceIso` opcional para tests/determinismo).
 * zScore = (último − media) / desviación muestral; undefined si no hay al
 * menos 2 muestras o desviación 0 (sin baseline no se inventa señal).
 */
export function getHrvTrend(
  daily: Record<string, WearableSample>,
  days = 7,
  referenceIso?: string,
): HrvTrend {
  const windowDays = Math.max(1, Math.floor(days));
  const anchor = referenceIso ?? getLatestEntry(daily)?.dateIso;
  if (!anchor) return { mean: 0, stdDev: 0, sampleCount: 0, windowDays };

  const minIso = addDaysIsoLocal(anchor, -(windowDays - 1));
  const values: { dateIso: string; ms: number }[] = [];
  for (const [dateIso, entry] of Object.entries(daily)) {
    if (dateIso < minIso || dateIso > anchor) continue;
    if (typeof entry.hrvRmssdMs === 'number' && Number.isFinite(entry.hrvRmssdMs)) {
      values.push({ dateIso, ms: entry.hrvRmssdMs });
    }
  }
  if (!values.length) return { mean: 0, stdDev: 0, sampleCount: 0, windowDays };

  const latest = values.reduce((acc, v) => (v.dateIso > acc.dateIso ? v : acc), values[0]!);
  const mean = values.reduce((a, v) => a + v.ms, 0) / values.length;
  let stdDev = 0;
  if (values.length >= 2) {
    const variance = values.reduce((a, v) => a + (v.ms - mean) ** 2, 0) / (values.length - 1);
    stdDev = Math.sqrt(variance);
  }
  const zScore = stdDev > 0 ? (latest.ms - mean) / stdDev : undefined;
  return {
    mean: Math.round(mean * 100) / 100,
    stdDev: Math.round(stdDev * 100) / 100,
    zScore: zScore === undefined ? undefined : Math.round(zScore * 100) / 100,
    latestMs: latest.ms,
    sampleCount: values.length,
    windowDays,
  };
}

/**
 * ¿Hay datos frescos (entrada de HOY o de AYER respecto a `referenceIso`)?
 * Alimenta el indicador UI: verde si true, gris "self-report" si false.
 */
export function isFreshData(
  daily: Record<string, WearableDailyEntry>,
  referenceIso?: string,
): boolean {
  const ref = referenceIso ?? localTodayIso();
  if (!ISO_DATE_RE.test(ref)) return false;
  const today = getEntryForDate(daily, ref);
  const yesterday = getEntryForDate(daily, addDaysIsoLocal(ref, -1));
  return Boolean(today ?? yesterday);
}

/** addDaysIso local (fecha suelta YYYY-MM-DD ± días, sin depender del contrato). */
function addDaysIsoLocal(dateIso: string, days: number): string {
  const [y, m, d] = dateIso.split('-').map(Number);
  const t = new Date(Date.UTC(y!, m! - 1, d!));
  t.setUTCDate(t.getUTCDate() + days);
  return `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, '0')}-${String(t.getUTCDate()).padStart(2, '0')}`;
}

/**
 * Normaliza un JSON exportado (OpenStrap/edge u otro bridge) a entradas
 * válidas. Acepta: 1 entrada, array de entradas, o { entries: [...] } /
 * { daily: [...] }. Descarta las inválidas (no inventa métricas).
 */
export function parseWearableExport(json: unknown): WearableDailyEntry[] {
  let list: unknown = json;
  if (json && typeof json === 'object' && !Array.isArray(json)) {
    const obj = json as Record<string, unknown>;
    list = Array.isArray(obj['entries']) ? obj['entries'] : Array.isArray(obj['daily']) ? obj['daily'] : [json];
  }
  if (!Array.isArray(list)) return [];
  const out: WearableDailyEntry[] = [];
  for (const raw of list) {
    if (!raw || typeof raw !== 'object') continue;
    const r = raw as Record<string, unknown>;
    const entry: Partial<WearableDailyEntry> = {
      dateIso: typeof r['dateIso'] === 'string' ? r['dateIso'] : undefined,
      source: typeof r['source'] === 'string' && r['source'].trim() ? r['source'] : WEARABLE_SOURCE_OPENSTRAP,
    };
    for (const field of Object.keys(WEARABLE_RANGES)) {
      const v = r[field];
      if (typeof v === 'number' && Number.isFinite(v)) (entry as Record<string, unknown>)[field] = v;
    }
    if (validateWearableEntry(entry).ok) out.push(entry as WearableDailyEntry);
  }
  return out;
}

// ——————————————————— store zustand (persist local) ———————————————————

export interface WearableState {
  daily: Record<string, WearableDailyEntry>;
  /** Valida y persiste UNA entrada (upsert por dateIso + FIFO a 90 días). */
  ingestDaily: (entry: Partial<WearableDailyEntry>) => IngestResult;
  /** Ingresa en lote un export (import JSON del chip). */
  ingestMany: (entries: Partial<WearableDailyEntry>[]) => { ingested: number; skipped: number; error?: string };
  /** Borra todo (sin confirm(): quien llama decide). */
  clear: () => void;
}

/** Storage real en navegador; no-op en Node/tests/SSR (evita crash del persist). */
const NOOP_STORAGE: Storage = {
  length: 0,
  clear: () => {},
  getItem: () => null,
  key: () => null,
  removeItem: () => {},
  setItem: () => {},
};

function safeLocalStorage(): Storage {
  try {
    return typeof localStorage !== 'undefined' ? localStorage : NOOP_STORAGE;
  } catch {
    return NOOP_STORAGE;
  }
}

/** Recorta el Record a los MAX_DAILY_ENTRIES más recientes (FIFO). */
function trimFifo(daily: Record<string, WearableDailyEntry>): Record<string, WearableDailyEntry> {
  const keys = Object.keys(daily);
  if (keys.length <= MAX_DAILY_ENTRIES) return daily;
  const sorted = keys.sort(); // ISO ordena cronológico lexicográfico
  const drop = new Set(sorted.slice(0, keys.length - MAX_DAILY_ENTRIES));
  const next: Record<string, WearableDailyEntry> = {};
  for (const k of sorted) if (!drop.has(k)) next[k] = daily[k]!;
  return next;
}

export const useWearableStore = create<WearableState>()(
  persist(
    (set, get) => ({
      daily: {},

      ingestDaily: (entry) => {
        const check = validateWearableEntry(entry);
        if (!check.ok) return check;
        const valid = entry as WearableDailyEntry;
        set((state) => ({
          daily: trimFifo({
            ...state.daily,
            [valid.dateIso]: { ...valid, ingestedAtIso: new Date().toISOString() },
          }),
        }));
        return { ok: true };
      },

      ingestMany: (entries) => {
        let ingested = 0;
        let skipped = 0;
        let error: string | undefined;
        for (const e of entries) {
          const r = get().ingestDaily(e);
          if (r.ok) ingested += 1;
          else {
            skipped += 1;
            error ??= r.error; // primer error como resumen (no bloquea el lote)
          }
        }
        return { ingested, skipped, error };
      },

      clear: () => set({ daily: {} }),
    }),
    {
      name: WEARABLE_STORAGE_KEY,
      version: 1,
      storage: createJSONStorage(safeLocalStorage),
      partialize: (state) => ({ daily: state.daily }),
    },
  ),
);

/** getLatest() → entry más reciente del estado vivo del store. */
export function getLatest(): WearableDailyEntry | undefined {
  return getLatestEntry(useWearableStore.getState().daily);
}

/** getForDate(iso) → entry específico del estado vivo del store. */
export function getForDate(dateIso: string): WearableDailyEntry | undefined {
  return getEntryForDate(useWearableStore.getState().daily, dateIso);
}

/** getHrvTrend(days=7) → promedio y z-score de HRV del estado vivo. */
export function getHrvTrendLive(days = 7, referenceIso?: string): HrvTrend {
  return getHrvTrend(useWearableStore.getState().daily, days, referenceIso);
}

/** isFresh() → ¿hay datos de HOY o de AYER? (indicador UI). */
export function isFresh(referenceIso?: string): boolean {
  return isFreshData(useWearableStore.getState().daily, referenceIso);
}
