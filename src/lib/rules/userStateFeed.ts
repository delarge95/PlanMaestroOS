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
    const year = parsed.monthIdx >= new Date().getMonth() - 1 ? new Date().getFullYear() : new Date().getFullYear();
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

/** Bio-feedback clínico → DailyLogs (mapeo documentado en la cabecera). */
export function biofeedbackToDailyLogs(entries: RawBioFeedback[]): DailyLog[] {
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
  return [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date));
}

/** Ensambla el UserState desde las fuentes reales. */
export function buildUserState(input: {
  workoutHistory: RawLoggedWorkout[];
  biofeedback: RawBioFeedback[];
  nowIso?: string;
}): UserState {
  const state = createEmptyUserState(input.nowIso);
  state.sessions = workoutsToSessions(input.workoutHistory);
  state.dailyLogs = biofeedbackToDailyLogs(input.biofeedback);
  return state;
}

/** Readers de stores reales (browser only; null en SSR). */
export function readRealUserStateSources(): {
  workoutHistory: RawLoggedWorkout[];
  biofeedback: RawBioFeedback[];
} | null {
  if (typeof window === 'undefined') return null;
  let workoutHistory: RawLoggedWorkout[] = [];
  try {
    const raw = window.localStorage.getItem('fitapp_workout_history');
    if (raw) {
      const parsed: unknown = JSON.parse(raw);
      if (Array.isArray(parsed)) workoutHistory = parsed as RawLoggedWorkout[];
    }
  } catch {
    workoutHistory = [];
  }
  let biofeedback: RawBioFeedback[] = [];
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires -- lectura puntual del store clínico real
    const { useClinicalStore } = require('../../data/clinical/clinicalStore') as
      typeof import('../../data/clinical/clinicalStore');
    biofeedback = useClinicalStore.getState().biofeedback ?? [];
  } catch {
    biofeedback = [];
  }
  return { workoutHistory, biofeedback };
}
