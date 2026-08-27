// src/lib/fitness/sessionExport.ts
// CONTRATO DE SESIÓN AG-FIT → AG-NUTRI (TAREAS_USUARIO: estimador kcal, ciclo 2).
//
// SessionSnapshot es el puente que NUTRI consumirá para su estimador
// kcal = f(METs o trabajo mecánico serie×rep×carga, duración, masa corporal,
// intensidad). Mapeo del contrato acordado (es) → identificadores (en):
//
//   fecha            → SessionSnapshot.dateIso
//   programa         → SessionSnapshot.program
//   día              → SessionSnapshot.day
//   ejercicios[]     → SessionSnapshot.exercises[]
//   id               → SessionSnapshotExercise.id
//   series           → SessionSnapshotExercise.sets
//   reps             → SessionSnapshotExercise.reps        (media real)
//   carga?           → SessionSnapshotExercise.loadKg?     (media real; undefined si bodyweight)
//   rpe?             → SessionSnapshotExercise.rpe?        (media real)
//   duraciónMin?     → SessionSnapshotExercise.durationMin? (series cronometradas)
//   duraciónTotalMin → SessionSnapshot.durationTotalMin
//
// REGLA DURA B8 aplicada al contrato: ningún número sin fuente. Si un dato no
// fue registrado por el usuario (carga bodyweight, RPE omitido, duración no
// medida), el campo queda `undefined`/`0` — NUTRI NO debe inventarlo.

import { parseEsShortDate } from './programCalendar';

/** Serie completada tal y como la persiste FitAppWorkoutLogger (completedSets). */
export interface LoggedCompletedSet {
  weight: number;
  reps: number;
  rpe?: number;
  /** Segundos bajo tensión si la serie fue por tiempo (iso/carry). Reservado. */
  durationSec?: number;
}

/** Entrada de ejercicio aceptada por el builder (ambas fuentes reales). */
export interface SessionExportExerciseInput {
  name: string;
  /** ID realizado (override aplicado) — tiene precedencia. */
  performedExerciseId?: string;
  /** ID prescrito en el programa. */
  prescribedExerciseId?: string;
  /** Fuente principal: logger real (fitapp_workout_history → completedSets). */
  completedSets?: LoggedCompletedSet[];
  /**
   * Fallback legacy: forma escrita por TodayRoutineStack al historial
   * (pesos por serie + rango de reps prescrito; sin RPE ni sets individuales).
   */
  weightsPerSet?: (number | string)[];
  repRange?: string;
}

/** Entrada de sesión aceptada por el builder. */
export interface SessionExportInput {
  sessionId?: string;
  programId?: string;
  routineTitle?: string;
  /** Nombre del día entrenado (activeDay.name). */
  dayName?: string;
  /** ID del día en el programa (fallback de etiqueta si falta dayName). */
  dayId?: string;
  /** Fecha ISO preferente (la sesión guiada la conoce en el momento de guardar). */
  dateIso?: string;
  /** Fecha display es-ES del logger ("vie 22 ago") — fallback parseable. */
  dateDisplayEs?: string;
  durationMinutes?: number;
  exercises: SessionExportExerciseInput[];
}

/** Ejercicio agregado dentro del snapshot exportable. */
export interface SessionSnapshotExercise {
  /** ID canónico del ejercicio realizado (performed > prescribed > name). */
  id: string;
  /** Series efectivas registradas. */
  sets: number;
  /** Media de reps de las series válidas (1 decimal); 0 si ninguna aplica. */
  reps: number;
  /** Carga media kg de las series con peso > 0; undefined si bodyweight/sin registrar. */
  loadKg?: number;
  /** RPE medio de las series que lo registran; undefined si ninguna. */
  rpe?: number;
  /** Minutos acumulados en series cronometradas; undefined si ninguna. */
  durationMin?: number;
}

/**
 * Snapshot exportable de una sesión completada. Contrato estable consumido por
 * AG-NUTRI (estimador kcal): los campos ausentes significan "no registrado",
 * jamás un cero encubierto.
 */
export interface SessionSnapshot {
  /** Fecha ISO (YYYY-MM-DD); '' si la fuente no permite derivarla con honestidad. */
  dateIso: string;
  /** Programa/rutina realizada — título legible ('Sesión' si se desconoce). */
  program: string;
  /** Día concreto de la sesión; 'Sesión' si se desconoce. */
  day: string;
  /** Ejercicios con datos reales (los sin registro se omiten). */
  exercises: SessionSnapshotExercise[];
  /** Duración total real en minutos; 0 = no medida. */
  durationTotalMin: number;
}

const round1 = (n: number): number => Math.round(n * 10) / 10;

/**
 * Convierte la fecha display es-ES del logger ("vie 22 ago") a ISO.
 * El display no trae año: se infiere como el año actual y, si la fecha
 * resultante cae en el futuro (> mañana), se retrocede un año (sesión
 * de diciembre consultada en enero). Heurística documentada; devuelve ''
 * si no se puede parsear — nunca una fecha fabricada sin base.
 */
export function esDisplayDateToIso(dateDisplayEs?: string, now: Date = new Date()): string {
  const parsed = parseEsShortDate(dateDisplayEs);
  if (!parsed) return '';
  const year = now.getFullYear();
  const candidate = new Date(Date.UTC(year, parsed.monthIdx, parsed.day, 12));
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  if (candidate.getTime() > tomorrow.getTime()) {
    candidate.setUTCFullYear(year - 1);
  }
  return candidate.toISOString().slice(0, 10);
}

/** Serie inválida = sin reps, sin carga y sin tiempo (no aporta nada real). */
function isSetUsable(s: LoggedCompletedSet): boolean {
  return (Number(s.reps) || 0) > 0 || (Number(s.weight) || 0) > 0 || (Number(s.durationSec) || 0) > 0;
}

function aggregateFromCompletedSets(sets: LoggedCompletedSet[]): Omit<SessionSnapshotExercise, 'id'> {
  const usable = sets.filter(isSetUsable);
  const repValues = usable.map((s) => Number(s.reps)).filter((r) => r > 0);
  const loadValues = usable.map((s) => Number(s.weight)).filter((w) => w > 0);
  const rpeValues = usable.map((s) => Number(s.rpe) || 0).filter((r) => r > 0);
  const timedSec = usable.map((s) => Number(s.durationSec) || 0).filter((d) => d > 0);

  const mean = (arr: number[]): number => arr.reduce((a, b) => a + b, 0) / arr.length;

  return {
    sets: usable.length,
    reps: repValues.length ? round1(mean(repValues)) : 0,
    ...(loadValues.length ? { loadKg: round1(mean(loadValues)) } : {}),
    ...(rpeValues.length ? { rpe: round1(mean(rpeValues)) } : {}),
    ...(timedSec.length ? { durationMin: round1(timedSec.reduce((a, b) => a + b, 0) / 60) } : {})
  };
}

/** Fallback legacy de TodayRoutineStack: pesos por serie + rango prescrito. */
function aggregateFromLegacyWeights(
  weightsPerSet: (number | string)[],
  repRange?: string
): Omit<SessionSnapshotExercise, 'id'> {
  const loads = weightsPerSet.map((w) => Number(w) || 0).filter((w) => w > 0);
  const firstRep = repRange ? parseInt(String(repRange), 10) : NaN;
  return {
    sets: loads.length,
    reps: !isNaN(firstRep) && firstRep > 0 ? firstRep : 0,
    ...(loads.length ? { loadKg: round1(loads.reduce((a, b) => a + b, 0) / loads.length) } : {})
  };
}

/**
 * Construye el SessionSnapshot exportable desde los datos REALES de una
 * sesión (logger con completedSets o entrada legacy del stack de Hoy).
 * Pure: sin DOM, sin storage, sin fechas del sistema salvo la heurística
 * de `dateDisplayEs` (inyectable vía `now`).
 */
export function buildSessionSnapshot(input: SessionExportInput, now: Date = new Date()): SessionSnapshot {
  const exercises: SessionSnapshotExercise[] = [];

  for (const ex of input.exercises || []) {
    const id = ex.performedExerciseId || ex.prescribedExerciseId || ex.name;
    if (!id) continue;

    let agg: Omit<SessionSnapshotExercise, 'id'> | null = null;
    if (Array.isArray(ex.completedSets) && ex.completedSets.length > 0) {
      agg = aggregateFromCompletedSets(ex.completedSets);
    } else if (Array.isArray(ex.weightsPerSet)) {
      agg = aggregateFromLegacyWeights(ex.weightsPerSet, ex.repRange);
    }

    // Sin series reales registradas → el ejercicio no se exporta.
    if (!agg || agg.sets <= 0) continue;
    exercises.push({ id, ...agg });
  }

  const durationMinutes = Number(input.durationMinutes) || 0;
  const dateIso =
    input.dateIso && /^\d{4}-\d{2}-\d{2}$/.test(input.dateIso)
      ? input.dateIso
      : esDisplayDateToIso(input.dateDisplayEs, now);

  return {
    dateIso,
    program: input.routineTitle?.trim() || 'Sesión',
    day: input.dayName?.trim() || input.dayId?.trim() || 'Sesión',
    exercises,
    durationTotalMin: durationMinutes > 0 ? Math.round(durationMinutes) : 0
  };
}
