// src/lib/fitness/guidedSessionEngine.ts
// B9 — Motor PURO del modo guiado set-a-set. Sin DOM ni storage: el componente
// (guided/GuidedSessionRunner.tsx) solo pinta estado y despacha acciones.
// Fuentes READ: programs (prescripciones), activeProgramStore (overrides),
// exerciseResolver/exerciseDatabase (video + techniquePoints). HoyRoutineStack
// NO se toca (REGLA DE ORO: aditivo).

export const REST_FALLBACK_SEC = 90;

/**
 * Parseo robusto de prescription.restPeriod ("3-5 min", "2 min", "1.5 min",
 * "90 seg") a segundos. Convención: en un rango se toma el extremo ALTO
 * (descanso completo); sin unidad, ≤10 se interpreta en minutos y >10 en
 * segundos. Resultado clampeado a [15, 600].
 */
export function parseRestPeriodSeconds(raw?: string | number, fallbackSec: number = REST_FALLBACK_SEC): number {
  if (raw === undefined || raw === null || raw === '') return fallbackSec;
  const text = String(raw);
  const numbers = text.match(/\d+(?:[.,]\d+)?/g);
  if (!numbers || numbers.length === 0) return fallbackSec;
  let value = Number(numbers[numbers.length - 1].replace(',', '.'));
  if (!isFinite(value) || value <= 0) return fallbackSec;
  if (/seg|sec|\bs\b/i.test(text)) {
    // segundos explícitos
  } else if (/min/i.test(text) || value <= 10) {
    value *= 60;
  }
  return Math.min(600, Math.max(15, Math.round(value)));
}

/** Ejercicio del plan guiado con TODO lo que la pantalla necesita (resuelto una vez). */
export interface GuidedPlanExercise {
  prescriptionId: string;
  /** ID efectivo tras override (clave en exerciseDatabase). */
  exerciseKey: string;
  displayName: string;
  youtubeLink?: string;
  secondaryVideoLink?: string;
  techniquePoints: string[];
  /** Etiqueta de esfuerzo por serie (p.ej. "RIR 2", "RPE 8"); índice = serie-1. */
  effortPerSet: string[];
  targetRepsLabel: string;
  restSec: number;
  notes?: string;
}

export interface GuidedPlan {
  programId: string;
  programTitle: string;
  weekNumber: number;
  dayId: string;
  dayName: string;
  exercises: GuidedPlanExercise[];
}

interface PrescLike {
  id?: string;
  exerciseId: string;
  displayName?: string;
  workingSets: number | string;
  targetReps?: string;
  repRange?: string;
  rirPerSet?: string[];
  earlySetRpe?: string;
  lastSetRpe?: string;
  effort?: { early?: string; last?: string };
  restPeriod?: string;
  rest?: string;
  notes?: string;
}

interface DetailsLike {
  name?: string;
  youtubeLink?: string;
  secondaryVideoLink?: string;
  techniquePoints?: string[];
}

const toInt = (v: number | string | undefined, fallback: number): number => {
  const n = typeof v === 'number' ? v : parseInt(String(v ?? ''), 10);
  return isFinite(n) && n > 0 ? n : fallback;
};

/** Normaliza etiquetas de esfuerzo ("RIR 2" / "2" → "RIR 2") para mostrar por serie. */
function normalizeEffortLabel(raw: string | undefined): string | null {
  if (!raw) return null;
  const t = String(raw).trim();
  if (/^rpe\s*\d+/i.test(t)) return `RPE ${t.replace(/^rpe\s*/i, '')}`;
  if (/^rir\s*\d+/i.test(t)) return `RIR ${t.replace(/^rir\s*/i, '')}`;
  return /^\d+(\.\d+)?$/.test(t) ? `RIR ${t}` : t;
}

/**
 * Construye el plan guiado desde el día activo REAL del programa (misma fuente
 * que TodayRoutineStack: prescripciones + overrides aplicados).
 * `resolve` inyecta getExerciseDetails (evita acoplar el motor a la BD).
 */
export function buildGuidedPlan(opts: {
  program: { id: string; title?: string; name?: string };
  weekNumber: number;
  day: { id: string; name?: string; title?: string };
  prescriptions: PrescLike[];
  overrides: Record<string, string>;
  resolve: (exerciseKey: string) => DetailsLike;
}): GuidedPlan {
  const exercises: GuidedPlanExercise[] = [];
  for (const presc of opts.prescriptions || []) {
    const pId = presc.id || presc.exerciseId;
    const overrideKey = pId ? opts.overrides[pId] : undefined;
    const key = overrideKey || presc.exerciseId;
    const details = opts.resolve(key);
    const targetSets = toInt(presc.workingSets, 3);

    const effortRaw: string[] = presc.rirPerSet || [];
    const early = normalizeEffortLabel(presc.earlySetRpe || presc.effort?.early) || 'RIR 2';
    const last = normalizeEffortLabel(presc.lastSetRpe || presc.effort?.last);
    const effortPerSet: string[] = [];
    for (let i = 0; i < Math.max(targetSets, effortRaw.length); i++) {
      effortPerSet.push(
        normalizeEffortLabel(effortRaw[i]) ||
        (last && i >= targetSets - 1 ? last : early)
      );
    }

    exercises.push({
      prescriptionId: pId,
      exerciseKey: key,
      displayName: overrideKey ? details.name || key : presc.displayName || details.name || key,
      youtubeLink: details.youtubeLink,
      secondaryVideoLink: details.secondaryVideoLink,
      techniquePoints: details.techniquePoints || [],
      effortPerSet,
      targetRepsLabel: presc.targetReps || presc.repRange || '8-10',
      restSec: parseRestPeriodSeconds(presc.restPeriod || presc.rest),
      notes: presc.notes || undefined
    });
  }

  return {
    programId: opts.program.id,
    programTitle: opts.program.title || opts.program.name || opts.program.id,
    weekNumber: opts.weekNumber,
    dayId: opts.day.id,
    dayName: opts.day.name || opts.day.title || 'Sesión',
    exercises
  };
}

/** Registro de UNA serie completada en modo guiado (null/undefined = no registrado). */
export interface GuidedSetLog {
  weightKg: number | null;
  reps: number | null;
  rpe?: number | null;
}

export type GuidedPhase = 'working' | 'resting' | 'finished';

export interface GuidedSessionState {
  plan: GuidedPlan;
  /** Índice de ejercicio actual (0-based). */
  exIdx: number;
  /** Serie actual DENTRO del ejercicio actual (0-based). */
  setIdx: number;
  phase: GuidedPhase;
  restTotalSec: number;
  restRemainingSec: number;
  /** Series registradas, clave `${exIdx}:${setIdx}`. */
  logs: Record<string, GuidedSetLog>;
  /** Series extra añadidas por el usuario sobre la prescripción, por exIdx. */
  extraSets: Record<number, number>;
  startedAtMs: number;
}

export const logKey = (exIdx: number, setIdx: number): string => `${exIdx}:${setIdx}`;

/** Series objetivo del ejercicio (prescripción + extras). */
export function totalSetsFor(state: GuidedSessionState, exIdx: number): number {
  const ex = state.plan.exercises[exIdx];
  if (!ex) return 0;
  return Math.max(ex.effortPerSet.length, 1) + (state.extraSets[exIdx] || 0);
}

export function createGuidedSession(plan: GuidedPlan, startedAtMs: number = Date.now()): GuidedSessionState {
  return {
    plan,
    exIdx: 0,
    setIdx: 0,
    phase: 'working',
    restTotalSec: 0,
    restRemainingSec: 0,
    logs: {},
    extraSets: {},
    startedAtMs
  };
}

export interface CurrentStep {
  exercise: GuidedPlanExercise;
  setNumber: number; // 1-based para pintar
  totalSets: number;
  effortLabel: string;
}

export function currentStep(state: GuidedSessionState): CurrentStep | null {
  if (state.phase === 'finished') return null;
  const exercise = state.plan.exercises[state.exIdx];
  if (!exercise) return null;
  const totalSets = totalSetsFor(state, state.exIdx);
  return {
    exercise,
    setNumber: state.setIdx + 1,
    totalSets,
    effortLabel: exercise.effortPerSet[state.setIdx] || exercise.effortPerSet[exercise.effortPerSet.length - 1] || 'RIR 2'
  };
}

/**
 * Registra la serie actual y AVANZA automáticamente:
 * serie→serie dentro del ejercicio (con descanso) y último serie→siguiente
 * ejercicio (descanso con el restPeriod del ejercicio recién terminado).
 * Al terminar todo el plan → fase 'finished'.
 */
export function recordSetAndAdvance(
  state: GuidedSessionState,
  log: GuidedSetLog
): GuidedSessionState {
  if (state.phase === 'finished') return state;
  const exercise = state.plan.exercises[state.exIdx];
  if (!exercise) return { ...state, phase: 'finished' };

  const logs = {
    ...state.logs,
    [logKey(state.exIdx, state.setIdx)]: log
  };

  const totalSets = totalSetsFor(state, state.exIdx);
  const nextSetIdx = state.setIdx + 1;
  if (nextSetIdx < totalSets) {
    return {
      ...state,
      logs,
      setIdx: nextSetIdx,
      phase: 'resting',
      restTotalSec: exercise.restSec,
      restRemainingSec: exercise.restSec
    };
  }

  const nextExIdx = state.exIdx + 1;
  if (nextExIdx < state.plan.exercises.length) {
    return {
      ...state,
      logs,
      exIdx: nextExIdx,
      setIdx: 0,
      phase: 'resting',
      restTotalSec: exercise.restSec,
      restRemainingSec: exercise.restSec
    };
  }

  return { ...state, logs, phase: 'finished', restTotalSec: 0, restRemainingSec: 0 };
}

/** Salta el descanso en curso (aviso incluido) → vuelve a 'working'. */
export function skipRest(state: GuidedSessionState): GuidedSessionState {
  if (state.phase !== 'resting') return state;
  return { ...state, phase: 'working', restRemainingSec: 0 };
}

/** Tick de 1s del cronómetro de descanso; al llegar a 0 vuelve a 'working'. */
export function tickRest(state: GuidedSessionState): GuidedSessionState {
  if (state.phase !== 'resting') return state;
  const remaining = state.restRemainingSec - 1;
  if (remaining > 0) return { ...state, restRemainingSec: remaining };
  return { ...state, restRemainingSec: 0, phase: 'working' };
}

/** El usuario añade una serie extra al ejercicio ACTUAL (como el "+ Agregar" del tracker). */
export function addExtraSetToCurrent(state: GuidedSessionState): GuidedSessionState {
  if (state.phase === 'finished') return state;
  return {
    ...state,
    extraSets: { ...state.extraSets, [state.exIdx]: (state.extraSets[state.exIdx] || 0) + 1 }
  };
}

/** Termina la sesión en este punto (lo ya registrado se conserva). */
export function finishEarly(state: GuidedSessionState): GuidedSessionState {
  return { ...state, phase: 'finished', restRemainingSec: 0, restTotalSec: 0 };
}

// ---------------------------------------------------------------------------
// Exportes finales (contrato tarea 1 + persistencia en historial del logger)
// ---------------------------------------------------------------------------

/** Series registradas agrupadas por ejercicio EN ORDEN del plan. */
export function collectedLogsByExercise(state: GuidedSessionState): { exercise: GuidedPlanExercise; exIdx: number; sets: GuidedSetLog[] }[] {
  const out: { exercise: GuidedPlanExercise; exIdx: number; sets: GuidedSetLog[] }[] = [];
  state.plan.exercises.forEach((exercise, exIdx) => {
    const totalSets = totalSetsFor(state, exIdx);
    const sets: GuidedSetLog[] = [];
    for (let s = 0; s < totalSets; s++) {
      const l = state.logs[logKey(exIdx, s)];
      if (l) sets.push(l);
    }
    if (sets.length > 0) out.push({ exercise, exIdx, sets });
  });
  return out;
}

/** Entrada para buildSessionSnapshot (contrato NUTRI) desde la sesión guiada. */
export function sessionExportInputFromState(state: GuidedSessionState, dateIso: string, durationMinutes?: number): import('./sessionExport').SessionExportInput {
  return {
    sessionId: `guided_${state.startedAtMs}`,
    programId: state.plan.programId,
    routineTitle: `${state.plan.programTitle} — ${state.plan.dayName}`,
    dayName: state.plan.dayName,
    dateIso,
    durationMinutes,
    exercises: collectedLogsByExercise(state).map(({ exercise, sets }) => ({
      performedExerciseId: exercise.exerciseKey,
      name: exercise.displayName,
      completedSets: sets.map((s) => ({
        weight: Number(s.weightKg) || 0,
        reps: Number(s.reps) || 0,
        ...(s.rpe ? { rpe: s.rpe } : {})
      }))
    }))
  };
}

/**
 * Entrada compatible con fitapp_workout_history (forma CompletedWorkout del
 * logger real): así la sesión guiada aparece en Progreso con datos reales.
 */
export function completedWorkoutFromState(state: GuidedSessionState, nowMs: number): {
  id: string;
  date: string;
  programId: string;
  week: number;
  dayId: string;
  routineTitle: string;
  durationMinutes: number;
  totalVolumeKg: number;
  exercises: { performedExerciseId: string; name: string; completedSets: { weight: number; reps: number; rpe?: number }[] }[];
} {
  const elapsedMin = Math.max(1, Math.round((nowMs - state.startedAtMs) / 60000));
  let totalVolumeKg = 0;
  const exercises: ReturnType<typeof completedWorkoutFromState>['exercises'] = [];

  for (const { exercise, sets } of collectedLogsByExercise(state)) {
    const usable = sets.filter((s) => (Number(s.reps) || 0) > 0 || (Number(s.weightKg) || 0) > 0);
    if (usable.length === 0) continue;
    const completedSets = usable.map((s) => {
      const w = Number(s.weightKg) || 0;
      const r = Number(s.reps) || 0;
      totalVolumeKg += w * r;
      return { weight: w, reps: r, ...(s.rpe ? { rpe: s.rpe } : {}) };
    });
    exercises.push({
      performedExerciseId: exercise.exerciseKey,
      name: exercise.displayName,
      completedSets
    });
  }

  return {
    id: 'w_' + state.startedAtMs,
    date: new Date(nowMs).toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' }),
    programId: state.plan.programId,
    week: state.plan.weekNumber,
    dayId: state.plan.dayId,
    routineTitle: `${state.plan.programTitle} — ${state.plan.dayName}`,
    durationMinutes: elapsedMin,
    totalVolumeKg: Math.round(totalVolumeKg),
    exercises
  };
}
