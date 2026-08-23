// src/lib/fitness/volumeStats.ts - Cálculo de Volumen por Músculo desde Logs de Sesiones Ejecutadas

export interface SetLogItem {
  exerciseId: string;
  exerciseName: string;
  targetMuscleGroup: string;
  weightKg: number;
  reps: number;
  isWarmup?: boolean;
}

export interface SessionLog {
  sessionId: string;
  dateIso: string;
  routineTitle: string;
  durationMinutes: number;
  sets: SetLogItem[];
}

export interface MuscleVolumeSummary {
  muscleGroup: string;
  totalSets: number;
  totalVolumeKg: number;
}

export function calculateMuscleVolumeFromLogs(sessions: SessionLog[]): MuscleVolumeSummary[] {
  const muscleMap: Record<string, { totalSets: number; totalVolumeKg: number }> = {};

  for (const session of sessions) {
    for (const setItem of session.sets) {
      if (setItem.isWarmup) continue;
      const group = setItem.targetMuscleGroup || 'General';
      if (!muscleMap[group]) {
        muscleMap[group] = { totalSets: 0, totalVolumeKg: 0 };
      }
      muscleMap[group].totalSets += 1;
      muscleMap[group].totalVolumeKg += setItem.weightKg * setItem.reps;
    }
  }

  return Object.entries(muscleMap).map(([muscleGroup, stats]) => ({
    muscleGroup,
    totalSets: stats.totalSets,
    totalVolumeKg: stats.totalVolumeKg
  }));
}

// ---------------------------------------------------------------------------
// B8 (AG-FIT): adaptadores sobre el historial REAL (fitapp_workout_history).
// FitAppWorkoutLogger guarda CompletedWorkout (exercises[].completedSets);
// estos helpers los convierten a las formas que consumen las stats sin
// inventar ningún número: si falta un dato, simplemente no se agrega.
// ---------------------------------------------------------------------------

/** Forma mínima del historial persistido por el logger (fitapp_workout_history). */
export interface LoggedSet {
  weight: number;
  reps: number;
  rpe?: number;
}

export interface LoggedWorkout {
  id: string;
  /** Fecha display es-ES del logger (p.ej. "vie 22 ago") — no es ISO. */
  date?: string;
  routineTitle?: string;
  durationMinutes?: number;
  totalVolumeKg?: number;
  exercises?: { name: string; completedSets?: LoggedSet[] }[];
}

/** Convierte una sesión loggeada en SessionLog (sin datos → sin sets). */
export function loggedWorkoutToSessionLog(
  workout: LoggedWorkout,
  resolveMuscleGroup?: (exerciseName: string) => string | undefined
): SessionLog {
  const sets: SetLogItem[] = [];
  for (const ex of workout.exercises || []) {
    const muscleGroup = resolveMuscleGroup?.(ex.name);
    for (const s of ex.completedSets || []) {
      const weightKg = Number(s.weight) || 0;
      const reps = Number(s.reps) || 0;
      if (weightKg <= 0 || reps <= 0) continue; // bodyweight/sin registrar: no fabricar
      sets.push({
        exerciseId: ex.name,
        exerciseName: ex.name,
        targetMuscleGroup: muscleGroup || 'General',
        weightKg,
        reps
      });
    }
  }
  return {
    sessionId: workout.id,
    dateIso: '',
    routineTitle: workout.routineTitle || 'Sesión',
    durationMinutes: workout.durationMinutes || 0,
    sets
  };
}

export interface ExerciseRecord {
  exerciseName: string;
  maxWeightKg: number;
  /** 1RM estimado (Epley) de la mejor serie. */
  bestE1rmKg: number;
  bestSet: { weightKg: number; reps: number };
}

/** Récords reales por ejercicio desde sets loggeados (máx carga + Epley 1RM). */
export function exerciseRecordsFromLogs(sessions: SessionLog[]): ExerciseRecord[] {
  const byExercise = new Map<string, ExerciseRecord>();
  for (const session of sessions) {
    for (const set of session.sets) {
      if (set.isWarmup) continue;
      const e1rm = set.weightKg * (1 + set.reps / 30); // Epley
      const current = byExercise.get(set.exerciseName);
      if (!current) {
        byExercise.set(set.exerciseName, {
          exerciseName: set.exerciseName,
          maxWeightKg: set.weightKg,
          bestE1rmKg: e1rm,
          bestSet: { weightKg: set.weightKg, reps: set.reps }
        });
      } else {
        if (set.weightKg > current.maxWeightKg) current.maxWeightKg = set.weightKg;
        if (e1rm > current.bestE1rmKg) {
          current.bestE1rmKg = e1rm;
          current.bestSet = { weightKg: set.weightKg, reps: set.reps };
        }
      }
    }
  }
  return [...byExercise.values()].sort((a, b) => b.bestE1rmKg - a.bestE1rmKg);
}
