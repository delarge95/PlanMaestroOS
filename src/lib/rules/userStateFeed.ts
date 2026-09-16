/**
 * userStateFeed.ts — Alimenta el contrato UserState desde los stores reales.
 *
 * Corte vertical del sistema de reglas (Fase 3): funciones PURAS que reciben
 * los datos crudos persistidos y devuelven un `UserState` válido; los readers
 * de stores van aparte para poder testear sin DOM.
 *
 * Mapeos honestos (REGLA DURA §0.1 — ningún dato inventado):
 * - Sesiones: localStorage `fitapp_workout_history` (forma LoggedWorkout del
 *   logger). Serie sin peso (>0) no aporta hard sets de carga pero SÍ cuenta
 *   como serie efectiva bodyweight (sets++). Fecha display es-ES → ISO vía
 *   parseEsShortDate; sin fecha → se descarta la sesión (no se fabrica).
 * - Bio-feedback clínico → DailyLog: sleepHours directo; pain→generalPain;
 *   anxiety→stress es PROXY documentado (inferred). `energy` no está en el
 *   contrato DailyLog: viaja en `context.domain.energyToday`.
 * - Wearable WHOOP (ACCESORIO opcional, ENCARGO-WEARABLE): si hay entry del
 *   wearable para una fecha, su `sleepHours` medido es PREFERENTE y el
 *   self-report del clinicalStore queda como fallback. Sin wearable, TODO
 *   funciona igual (REGLA DURA §0.1). HRV/RHR/z-score viajan en
 *   `context.domain` (vía buildWearableDomainContext) para las reglas
 *   wearable-aware.
 * - Patrón de movimiento por heurística de nombre (inferred); el canónico
 *   vendrá del anatomyGraph (ticket futuro).
 */

import type {
  DailyLog,
  MovementPattern,
  SessionExercise,
  TrainingSession,
  UserState,
} from '../../data/contracts/userState';
import { createEmptyUserState } from '../../data/contracts/userState';
import { parseEsShortDate } from '../fitness/programCalendar';
import { isDue } from '../languages/spacedRepetition';
import { getHrvTrend } from '../wearable/wearableStore';

/** Serie completada tal como la persiste el logger. */
export interface RawLoggedSet {
  weight: number;
  reps: number;
  rpe?: number;
}

/** Ejercicio loggeado tal como lo persiste el logger. */
export interface RawLoggedExercise {
  name?: string;
  completedSets?: RawLoggedSet[];
}

/** Entrada del historial `fitapp_workout_history`. */
export interface RawLoggedWorkout {
  id?: string;
  date?: string; // display es-ES ("vie 22 ago")
  routineTitle?: string;
  durationMinutes?: number;
  totalVolumeKg?: number;
  exercises?: RawLoggedExercise[];
}

/** Entrada de bio-feedback del clinicalStore. */
export interface RawBioFeedback {
  dateIso: string;
  energy: number;
  anxiety: number;
  pain: number;
  sleepHours: number;
}

/**
 * Entrada diaria del wearable WHOOP (structural — compatible con
 * WearableDailyEntry del wearableStore sin acoplar el contrato).
 */
export interface RawWearableDaily {
  dateIso: string;
  sleepHours?: number;
  hrvRmssdMs?: number;
  restingHr?: number;
  strain?: number;
  batteryPct?: number;
  skinTempOffsetC?: number;
  source?: string;
}

/** Heurística de patrón por nombre (documentada como inferred). */
export function classifyPattern(name: string): MovementPattern {
  const n = name.toLowerCase();
  const has = (...ks: string[]) => ks.some((k) => n.includes(k));
  if (has('squat', 'sentadilla', 'lunge', 'zancada', 'pistol', 'step-up')) return 'squat';
  if (has('deadlift', 'romo', 'rdl', 'hip thrust', 'hinge', 'good morning', 'nordic')) return 'hinge';
  if (has('press de banca', 'bench', 'push-up', 'push up', 'flexión', 'planche', 'dip', 'press banca', 'floor press')) return 'horizontal-push';
  if (has('overhead', 'ohp', 'military', 'handstand', 'hspu', 'pike press', 'press militar')) return 'vertical-push';
  if (has('row', 'remo', 'australian')) return 'horizontal-pull';
  if (has('pull-up', 'pull up', 'dominada', 'chin', 'front lever', 'lat pulldown')) return 'vertical-pull';
  if (has('plank', 'plancha', 'hollow', 'l-sit', 'leg raise', 'crunch', 'core', 'ab')) return 'core';
  if (has('carry', 'farmer', 'yoke')) return 'carry';
  if (has('curl', 'extension', 'lateral raise', 'elevación', 'fly', 'raise', 'crunch de')) return 'isolation';
  if (has('run', 'correr', 'bike', 'spinning', 'rower', 'caminata', 'walk', 'cardio', 'jump rope', 'comba')) return 'cardio';
  if (has('mobility', 'stretch', 'movilidad', 'estiram')) return 'mobility';
  return 'isolation';
}

/** Convierte el historial crudo del logger en TrainingSessions (sin inventar). */
export function workoutsToSessions(history: RawLoggedWorkout[]): TrainingSession[] {
  const sessions: TrainingSession[] = [];
  for (const w of history) {
    const parsed = w.date ? parseEsShortDate(w.date) : null;
    if (!parsed) continue; // sin fecha fiable → fuera (no se fabrica)
    // La fecha display no trae año: un mes "futuro" (p.ej. diciembre visto en
    // septiembre) pertenece al año anterior; el resto, al año en curso.
    const now = new Date();
    const year = parsed.monthIdx > now.getMonth() ? now.getFullYear() - 1 : now.getFullYear();
    const dateIso = `${year}-${String(parsed.monthIdx + 1).padStart(2, '0')}-${String(parsed.day).padStart(2, '0')}`;

    const exercises: SessionExercise[] = [];
    let rpeSum = 0;
    let rpeCount = 0;
    for (const ex of w.exercises ?? []) {
      const name = (ex.name ?? '').trim();
      if (!name || !ex.completedSets?.length) continue;
      const validSets = ex.completedSets.filter((s) => Number(s.reps) > 0);
      if (!validSets.length) continue;
      const loadKg = validSets.reduce((m, s) => Math.max(m, Number(s.weight) || 0), 0);
      const reps = Math.round(validSets.reduce((a, s) => a + Number(s.reps), 0) / validSets.length);
      const exRpe = validSets.filter((s) => s.rpe).map((s) => Number(s.rpe));
      if (exRpe.length) {
        const avg = exRpe.reduce((a, b) => a + b, 0) / exRpe.length;
        rpeSum += avg;
        rpeCount += 1;
      }
      exercises.push({
        exerciseId: name,
        pattern: classifyPattern(name),
        sets: validSets.length,
        reps,
        loadKg,
        rpe: exRpe.length ? Math.round((rpeSum / Math.max(rpeCount, 1)) * 10) / 10 : undefined,
      });
    }
    if (!exercises.length) continue;
    sessions.push({
      id: w.id ?? `${dateIso}-${w.routineTitle ?? 'sesion'}`,
      date: dateIso,
      focus: w.routineTitle ?? 'entrenamiento',
      exercises,
      sessionRpe: rpeCount ? Math.round((rpeSum / rpeCount) * 10) / 10 : undefined,
      durationMin: Number(w.durationMinutes) || 0,
      totalVolumeKg: Number(w.totalVolumeKg) || undefined,
    });
  }
  return sessions.sort((a, b) => a.date.localeCompare(b.date));
}

/**
 * Bio-feedback clínico → DailyLogs (mapeo documentado en la cabecera).
 * Con `wearableDaily`, el sleepHours MEDIDO del wearable es preferente por
 * fecha (el self-report queda como fallback); las fechas con solo wearable
 * también generan DailyLog (sueño objetivo sin auto-reporte).
 */
export function biofeedbackToDailyLogs(entries: RawBioFeedback[], wearableDaily?: RawWearableDaily[]): DailyLog[] {
  const byDate = new Map<string, DailyLog>();
  for (const e of entries) {
    if (!e.dateIso) continue;
    byDate.set(e.dateIso, {
      date: e.dateIso,
      sleepHours: Number(e.sleepHours) || undefined,
      // proxy documentado (inferred): ansiedad clínica ≈ estrés percibido del contrato
      stress: Number.isFinite(e.anxiety) ? e.anxiety : undefined,
      generalPain: Number.isFinite(e.pain) ? e.pain : undefined,
      illness: false,
    });
  }
  if (wearableDaily?.length) {
    for (const w of wearableDaily) {
      if (!w?.dateIso) continue;
      const measured = Number(w.sleepHours);
      const log = byDate.get(w.dateIso);
      if (log) {
        // Preferencia del medido (solo si es un número válido >0; si no, fallback)
        if (Number.isFinite(measured) && measured > 0) log.sleepHours = measured;
      } else if (Number.isFinite(measured) && measured > 0) {
        byDate.set(w.dateIso, { date: w.dateIso, sleepHours: measured, illness: false });
      }
    }
  }
  return [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date));
}

/**
 * Fragmento wearable para `context.domain` (INPUT OPCIONAL del motor de
 * reglas). Requiere entry de HOY; el z-score compara el HRV de hoy contra el
 * baseline de los 7 días PREVIOS (hoy excluido — "hoy vs baseline" honesto).
 * Sin datos → objeto vacío: cero cambios visibles (accesorio, no dependencia).
 */
export function buildWearableDomainContext(
  wearableDaily: RawWearableDaily[] | undefined,
  todayIso: string,
): Record<string, unknown> {
  const fragment: Record<string, unknown> = {};
  if (!wearableDaily?.length || !/^\d{4}-\d{2}-\d{2}$/.test(todayIso)) return fragment;

  const today = wearableDaily.find((w) => w.dateIso === todayIso);
  if (!today) return fragment; // sin entry de HOY → sin overrides ni métricas

  if (typeof today.hrvRmssdMs === 'number' && Number.isFinite(today.hrvRmssdMs)) {
    fragment.hrvRmssdMs = today.hrvRmssdMs;
  }
  if (typeof today.restingHr === 'number' && Number.isFinite(today.restingHr)) {
    fragment.restingHr = today.restingHr;
  }
  if (typeof today.strain === 'number' && Number.isFinite(today.strain)) {
    fragment.strain = today.strain;
  }
  if (today.source) fragment.wearableSource = today.source;
  if (typeof today.sleepHours === 'number' && Number.isFinite(today.sleepHours) && today.sleepHours > 0) {
    fragment.wearableSleepHours = today.sleepHours;
  }

  // Record para getHrvTrend (clave única por fecha; hoy gana si hay duplicados)
  const daily: Record<string, { dateIso: string; hrvRmssdMs?: number; restingHr?: number }> = {};
  for (const w of wearableDaily) {
    if (!w?.dateIso) continue;
    daily[w.dateIso] = { dateIso: w.dateIso, hrvRmssdMs: w.hrvRmssdMs, restingHr: w.restingHr };
  }

  // Baseline HRV: 7 días TERMINANDO AYER (hoy fuera del baseline)
  const [y, m, d] = todayIso.split('-').map(Number);
  const yesterday = new Date(Date.UTC(y!, m! - 1, d! - 1));
  const yesterdayIso = `${yesterday.getUTCFullYear()}-${String(yesterday.getUTCMonth() + 1).padStart(2, '0')}-${String(yesterday.getUTCDate()).padStart(2, '0')}`;
  const trend = getHrvTrend(daily, 7, yesterdayIso);
  if (typeof fragment.hrvRmssdMs === 'number' && trend.stdDev > 0) {
    fragment.hrvZScore = Math.round(((fragment.hrvRmssdMs as number) - trend.mean) * 100 / trend.stdDev) / 100;
  }

  // Baseline RHR: media de los 7 días previos (para fit:rhr-elevated)
  const rhrWindow = Object.values(daily).filter(
    (e) => typeof e.restingHr === 'number' && e.dateIso >= addDaysIsoLocal(todayIso, -7) && e.dateIso < todayIso,
  );
  if (typeof fragment.restingHr === 'number' && rhrWindow.length >= 2) {
    fragment.restingHrBaseline7d =
      Math.round((rhrWindow.reduce((a, e) => a + (e.restingHr as number), 0) / rhrWindow.length) * 100) / 100;
  }
  return fragment;
}

/** addDaysIso local (fecha suelta ± días). */
function addDaysIsoLocal(dateIso: string, days: number): string {
  const [y, m, d] = dateIso.split('-').map(Number);
  const t = new Date(Date.UTC(y!, m! - 1, d!));
  t.setUTCDate(t.getUTCDate() + days);
  return `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, '0')}-${String(t.getUTCDate()).padStart(2, '0')}`;
}

/** Ensambla el UserState desde las fuentes reales. */
export function buildUserState(input: {
  workoutHistory: RawLoggedWorkout[];
  biofeedback: RawBioFeedback[];
  cardioSessions?: RawLoggedWorkout[];
  /** Entradas del wearable WHOOP (opcional — accesorio, no dependencia). */
  wearableDaily?: RawWearableDaily[];
  nowIso?: string;
}): UserState {
  const state = createEmptyUserState(input.nowIso);
  state.sessions = workoutsToSessions(input.workoutHistory);
  if (input.cardioSessions?.length) {
    state.sessions = [...state.sessions, ...workoutsToSessions(input.cardioSessions)];
  }
  state.dailyLogs = biofeedbackToDailyLogs(input.biofeedback, input.wearableDaily);
  return state;
}

/** Readers de stores reales (browser only; null en SSR). */
export function readRealUserStateSources(): {
  workoutHistory: RawLoggedWorkout[];
  biofeedback: RawBioFeedback[];
  cardioSessions: RawLoggedWorkout[];
  wearableDaily: RawWearableDaily[];
  vocabDue: { language: string; count: number };
} | null {
  if (typeof window === 'undefined') return null;

  // Fitness logger (localStorage directo — zustand persist)
  let workoutHistory: RawLoggedWorkout[] = [];
  try {
    const raw = window.localStorage.getItem('fitapp_workout_history');
    if (raw) {
      const parsed: unknown = JSON.parse(raw);
      if (Array.isArray(parsed)) workoutHistory = parsed as RawLoggedWorkout[];
    }
  } catch { workoutHistory = []; }

  // Cardio sessions (localStorage directo si existe)
  let cardioSessions: RawLoggedWorkout[] = [];
  try {
    const raw = window.localStorage.getItem('cardio_session_history');
    if (raw) {
      const parsed: unknown = JSON.parse(raw);
      if (Array.isArray(parsed)) cardioSessions = parsed as RawLoggedWorkout[];
    }
  } catch { cardioSessions = []; }

  // Bio-feedback clínico (import estático — no require CJS)
  let biofeedback: RawBioFeedback[] = [];
  try {
    biofeedback = readClinicalBiofeedback();
  } catch { biofeedback = []; }

  // Wearable WHOOP (localStorage directo — zustand persist 'wearable-daily-v1')
  let wearableDaily: RawWearableDaily[] = [];
  try {
    wearableDaily = readWearableDaily();
  } catch { wearableDaily = []; }

  // Vocabulario vencido (para sugerencias de repaso)
  let vocabDue: { language: string; count: number } = { language: 'de', count: 0 };
  try {
    vocabDue = readVocabDue();
  } catch { /* sin store → 0 */ }

  return { workoutHistory, biofeedback, cardioSessions, wearableDaily, vocabDue };
}

/** Lee biofeedback del store clínico sin require() dinámico. */
function readClinicalBiofeedback(): RawBioFeedback[] {
  try {
    const raw = window.localStorage.getItem('clinical-state-v1');
    if (!raw) return [];
    const parsed = JSON.parse(raw) as { state?: { biofeedback?: RawBioFeedback[] } };
    return parsed.state?.biofeedback ?? [];
  } catch { return []; }
}

/**
 * Lee los daily metrics del wearable ('wearable-daily-v1', shape del persist
 * de zustand: { state: { daily: Record<dateIso, entry> } }). SIN wearable →
 * [] (la app sigue idéntica con self-report).
 */
export function readWearableDaily(): RawWearableDaily[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem('wearable-daily-v1');
    if (!raw) return [];
    const parsed = JSON.parse(raw) as { state?: { daily?: Record<string, RawWearableDaily> } };
    const daily = parsed.state?.daily;
    if (!daily || typeof daily !== 'object') return [];
    return Object.values(daily).filter(
      (e): e is RawWearableDaily => Boolean(e) && typeof e.dateIso === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(e.dateIso),
    );
  } catch { return []; }
}

/** Lee tarjetas de vocabulario vencidas desde el store de idiomas. */
function readVocabDue(): { language: string; count: number } {
  try {
    const raw = window.localStorage.getItem('languages-vocabulary-v1');
    if (!raw) return { language: 'de', count: 0 };
    // Shape persistido: byLanguage[lang].items: Record<id, SrScheduling>.
    // M1: SrScheduling no tiene dueDate — la Semántica canónica de "vencida"
    // es isDue() de spacedRepetition (lastReviewed + intervalDays).
    const parsed = JSON.parse(raw) as {
      state?: { byLanguage?: Record<string, { items?: Record<string, { lastReviewed?: string; intervalDays?: number }> }> };
    };
    const now = new Date();
    let count = 0;
    for (const [, lang] of Object.entries(parsed.state?.byLanguage ?? {})) {
      for (const [, item] of Object.entries(lang.items ?? {})) {
        if (isDue({ lastReviewed: item.lastReviewed, intervalDays: item.intervalDays ?? 0 }, now)) count++;
      }
    }
    return { language: 'de', count };
  } catch { return { language: 'de', count: 0 }; }
}
