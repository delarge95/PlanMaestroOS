// src/data/fitness/fitnessSyncAdapter.ts - Adaptador para resumir datos de entrenamiento local para Notion

import type {
  NotionFitnessSessionPropertyMap,
  NotionFitnessPRPropertyMap,
  NotionFitnessMeasurementPropertyMap
} from '../notion/schema';

import type { SyncedNotionEntity } from '../notion/contracts';
import { sanitizeNotesForPublicProjection } from '../notion/mappers';

export interface LocalWorkoutSessionData {
  sessionId: string;
  programId: string;
  programTitle: string;
  week: number;
  dayId: string;
  dayTitle: string;
  dateIso: string;
  durationMinutes: number;
  totalVolumeKg: number;
  sessionRpe?: number;
  notes?: string;
  performedSets: Array<{
    exerciseId: string;
    exerciseName: string;
    weightKg: number;
    reps: number;
    rpe: number;
    isPrCandidate?: boolean;
  }>;
}

export interface LocalHealthCheckIn {
  dateIso: string;
  bodyWeightKg?: number;
  bodyFatPercent?: number;
  energyLevel?: 'Alta' | 'Media' | 'Baja';
  sleepHours?: number;
  prehabDone: boolean;
  notes?: string;
}

/**
 * Transforma una sesión completa de alta frecuencia almacenada localmente
 * en un registro de resumen de sesión listo para sincronizar a Notion DB 7 (FitnessSessions).
 */
export function buildNotionFitnessSessionPayload(
  session: LocalWorkoutSessionData
): SyncedNotionEntity<NotionFitnessSessionPropertyMap> {
  return {
    header: {
      externalId: `fit_session_${session.sessionId}`,
      schemaVersion: '1.0.0',
      lastSyncedAt: new Date().toISOString(),
      syncStatus: 'pending_push',
      sourceOfTruth: 'app_local'
    },
    properties: {
      Fecha: session.dateIso.split('T')[0],
      Programa: session.programTitle,
      Semana: session.week,
      Dia: session.dayTitle,
      SesionId: session.sessionId,
      Completada: true,
      RpeSesion: session.sessionRpe || 8,
      Notas: sanitizeNotesForPublicProjection(
        session.notes || `Volumen: ${session.totalVolumeKg}kg · Duración: ${session.durationMinutes}min`
      ),
      FuenteCaptura: 'AppLocal'
    }
  };
}

/**
 * Extrae candidatos a récords personales (PRs) de una sesión y genera los payloads
 * para sincronizar a Notion DB 9 (FitnessPRSnapshots).
 */
export function buildNotionFitnessPRPayloads(
  session: LocalWorkoutSessionData
): Array<SyncedNotionEntity<NotionFitnessPRPropertyMap>> {
  const prPayloads: Array<SyncedNotionEntity<NotionFitnessPRPropertyMap>> = [];

  for (const setItem of session.performedSets) {
    if (setItem.isPrCandidate && setItem.weightKg > 0) {
      prPayloads.push({
        header: {
          externalId: `pr_${session.sessionId}_${setItem.exerciseId}`,
          schemaVersion: '1.0.0',
          lastSyncedAt: new Date().toISOString(),
          syncStatus: 'pending_push',
          sourceOfTruth: 'app_local'
        },
        properties: {
          Fecha: session.dateIso.split('T')[0],
          EjercicioCanonico: setItem.exerciseName,
          TipoPR: 'MaxWeight',
          Valor: setItem.weightKg,
          Unidad: 'kg',
          SesionId: session.sessionId,
          Verificado: true
        }
      });
    }
  }

  return prPayloads;
}

/**
 * Convierte un check-in diario de salud/prehab local en un payload para Notion DB 8 (FitnessMeasurements).
 */
export function buildNotionFitnessMeasurementPayload(
  checkIn: LocalHealthCheckIn
): SyncedNotionEntity<NotionFitnessMeasurementPropertyMap> {
  return {
    header: {
      externalId: `fit_meas_${checkIn.dateIso.split('T')[0]}`,
      schemaVersion: '1.0.0',
      lastSyncedAt: new Date().toISOString(),
      syncStatus: 'pending_push',
      sourceOfTruth: 'app_local'
    },
    properties: {
      Fecha: checkIn.dateIso.split('T')[0],
      PesoCorporalKg: checkIn.bodyWeightKg,
      PorcentajeGrasa: checkIn.bodyFatPercent,
      EnergiaSubjetiva: checkIn.energyLevel,
      SuenoHoras: checkIn.sleepHours,
      PrehabCompletado: checkIn.prehabDone,
      Notas: sanitizeNotesForPublicProjection(checkIn.notes)
    }
  };
}
