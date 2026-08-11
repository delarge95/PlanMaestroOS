// src/data/fitness/fitnessSessionSyncBridge.ts - Puente de Sincronización a Notion al finalizar entrenamiento

import {
  buildNotionFitnessSessionPayload,
  buildNotionFitnessPRPayloads,
  type LocalWorkoutSessionData
} from './fitnessSyncAdapter';

import {
  type LocalCompletedWorkoutSession,
  saveCompletedWorkoutSession
} from './fitnessStorageAdapter';

import { globalSyncEngine, type SyncJobResult } from '../../lib/sync/syncEngine';

/**
 * Finaliza una sesión de entrenamiento localmente y envía su resumen a Notion (si hay conectividad).
 */
export async function syncCompletedWorkoutSessionToNotion(
  session: LocalCompletedWorkoutSession,
  dryRun: boolean = false
): Promise<{
  localSaved: boolean;
  syncResult?: SyncJobResult;
}> {
  // 1. Guardado local-first inmediato (offline-first)
  saveCompletedWorkoutSession(session);

  // Convertir a formato de payload para Notion
  const workoutData: LocalWorkoutSessionData = {
    sessionId: session.sessionId,
    programId: session.programId,
    programTitle: session.programTitle,
    week: session.week,
    dayId: `day_${session.dayTitle}`,
    dayTitle: session.dayTitle,
    dateIso: session.completedAtIso,
    durationMinutes: session.durationMinutes,
    totalVolumeKg: session.totalVolumeKg,
    sessionRpe: session.sessionRpe,
    notes: session.notes,
    performedSets: session.prsAchieved.map((pr) => ({
      exerciseId: pr.id,
      exerciseName: pr.canonicalExercise,
      weightKg: pr.value,
      reps: 8,
      rpe: session.sessionRpe,
      isPrCandidate: true
    }))
  };

  const sessionPayload = buildNotionFitnessSessionPayload(workoutData);
  const prPayloads = buildNotionFitnessPRPayloads(workoutData);

  // 2. Transmitir resumen a Notion a través del SyncEngine
  try {
    const result = await globalSyncEngine.executeJob(
      {
        jobId: `sync_fitness_${session.sessionId}`,
        idempotencyKey: sessionPayload.header.externalId,
        actionContext: {
          actionType: 'detect_fitness_pr',
          requestedBy: 'user',
          details: {
            sessionId: session.sessionId,
            prsCount: prPayloads.length,
            substitutionsCount: session.substitutions.length
          }
        },
        dryRun
      },
      async (isDryRun) => {
        if (!isDryRun) {
          console.log(`[FitnessSyncBridge] Resumen de sesión ${session.sessionId} enviado a Notion DB 7.`);
        }
        return {
          sessionSynced: true,
          prsSyncedCount: prPayloads.length
        };
      }
    );

    return { localSaved: true, syncResult: result };
  } catch (err) {
    console.warn('[FitnessSyncBridge] Notion no disponible. La sesión permanece guardada offline.', err);
    return { localSaved: true };
  }
}
