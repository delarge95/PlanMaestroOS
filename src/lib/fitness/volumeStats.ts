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
