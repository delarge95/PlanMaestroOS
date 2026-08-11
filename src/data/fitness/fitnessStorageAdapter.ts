// src/data/fitness/fitnessStorageAdapter.ts - Almacenamiento Local Offline y Resumen per Documento 05

export interface ExerciseSubstitutionRecord {
  prescribedExercise: string;
  executedExercise: string;
  reason: string;
  dateIso: string;
}

export interface LocalPRRecord {
  id: string;
  canonicalExercise: string;
  variant: string;
  prType: 'MaxWeight' | 'MaxReps' | 'MaxVolume';
  value: number;
  unit: string;
  dateIso: string;
  sessionId: string;
}

export interface LocalCompletedWorkoutSession {
  sessionId: string;
  programId: string;
  programTitle: string;
  week: number;
  dayTitle: string;
  completedAtIso: string;
  durationMinutes: number;
  totalVolumeKg: number;
  sessionRpe: number;
  substitutions: ExerciseSubstitutionRecord[];
  prsAchieved: LocalPRRecord[];
  prehabDone: boolean;
  notes?: string;
  syncedToNotion: boolean;
}

const STORAGE_KEYS = {
  COMPLETED_SESSIONS: 'fit_completed_sessions_v1',
  SUBSTITUTIONS: 'fit_exercise_substitutions_v1',
  PRS: 'fit_personal_records_v1'
};

/**
 * Guarda una sesión completada localmente (100% offline).
 */
export function saveCompletedWorkoutSession(session: LocalCompletedWorkoutSession): void {
  if (typeof window === 'undefined') return;

  try {
    const existingSessions = getCompletedWorkoutSessions();
    const updated = [session, ...existingSessions.filter((s) => s.sessionId !== session.sessionId)];
    localStorage.setItem(STORAGE_KEYS.COMPLETED_SESSIONS, JSON.stringify(updated));

    // Guardar sustituciones
    if (session.substitutions.length > 0) {
      const existingSubs = getExerciseSubstitutions();
      localStorage.setItem(STORAGE_KEYS.SUBSTITUTIONS, JSON.stringify([...session.substitutions, ...existingSubs]));
    }

    // Guardar PRs
    if (session.prsAchieved.length > 0) {
      const existingPRs = getLocalPRs();
      localStorage.setItem(STORAGE_KEYS.PRS, JSON.stringify([...session.prsAchieved, ...existingPRs]));
    }
  } catch (err) {
    console.error('[FitnessStorageAdapter] Error guardando sesión en localStorage:', err);
  }
}

export function getCompletedWorkoutSessions(): LocalCompletedWorkoutSession[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.COMPLETED_SESSIONS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getExerciseSubstitutions(): ExerciseSubstitutionRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SUBSTITUTIONS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getLocalPRs(): LocalPRRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PRS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Exporta backup en JSON de todos los registros fitness locales.
 */
export function exportFitnessLocalDataJson(): string {
  return JSON.stringify({
    completedSessions: getCompletedWorkoutSessions(),
    substitutions: getExerciseSubstitutions(),
    personalRecords: getLocalPRs(),
    exportedAt: new Date().toISOString()
  }, null, 2);
}
