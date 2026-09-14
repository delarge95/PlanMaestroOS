// src/data/career/applications.ts - Pipeline de Aplicaciones de Empleo
//
// CONTRATO (doc-01 manda): una aplicación tiene EXACTAMENTE una única próxima
// acción (`singleNextAction`). `validateSingleNextAction` es la regla dura que
// la UI debe hacer visible y bloqueante (Tarea 3 del ciclo 1 AG-CAREER).
//
// Los datos viven en applicationsSeed.ts (auto-generado del tracker xlsx real);
// `initialApplications` mantiene compatibilidad apuntando a esos datos reales.

import { applicationsSeed } from './applicationsSeed';

export type PipelineStage = 'Frío' | 'Tibio' | 'Caliente' | 'Aplicado' | 'Seguimiento' | 'Entrevista' | 'Cerrado';

/** Estados canónicos del tracker xlsx (hoja "Lists" → App Statuses). */
export type TrackerStatus =
  | 'Saved'
  | 'Applied'
  | 'Contacted'
  | 'Interview'
  | 'Test'
  | 'Offer'
  | 'Rejected'
  | 'No Fit'
  | 'Paused'
  | 'Watchlist';

/** Capa de targeting del tracker (A1 = encaje directo … C = lejano). */
export type TargetLayer = 'A1' | 'A2' | 'B1' | 'B2' | 'C';

/** Desglose del Fit Score del tracker: 7 componentes 0–2, total 0–14. */
export interface FitBreakdown {
  roleFit: number;
  portfolioMatch: number;
  remote: number;
  contract: number;
  authorization: number;
  salary: number;
  experience: number;
}

export interface JobApplication {
  id: string;
  companyName: string;
  roleTitle: string;
  stage: PipelineStage;
  singleNextAction: string; // Regla dura: exactamente una única próxima acción
  followUpDateIso: string;
  updatedAtIso: string;
  /** Campos del tracker real (xlsx). Opcionales para aplicaciones creadas a mano. */
  trackerStatus?: TrackerStatus;
  layer?: TargetLayer;
  roleFamily?: string;
  fitScore?: number;
  fitBreakdown?: FitBreakdown;
  portfolioAngle?: string;
  contactUrl?: string;
  /** Versión del CV enviada (id de variante + fecha, p.ej. 'unity-ta-v1 (2026-09-09)'). */
  cvVersionSent?: string;
  /** Id de página en Notion (Career Applications) tras el primer push — enables updates. */
  notionPageId?: string;
  notes?: string;
  source?: 'tracker-xlsx' | 'doc-11' | 'manual';
}

/** Semana del "Weekly Plan" de 16 semanas del tracker (tablero semanal doc-34). */
export interface WeeklyPlanWeek {
  week: number;
  startIso: string;
  phase: string;
  primaryGoal: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  status: string;
  completionPct: number;
  blocker: string;
  nextAction: string;
}

/**
 * Mapeo canónico TrackerStatus → columna del pipeline.
 * (Copia operativa en rag/career/scripts/parse-tracker.ts para la generación del seed.)
 * Paused queda en la columna fría: el estado real lo marca el badge trackerStatus.
 */
export const TRACKER_STATUS_TO_STAGE: Record<TrackerStatus, PipelineStage> = {
  Saved: 'Frío',
  Watchlist: 'Frío',
  Contacted: 'Tibio',
  Offer: 'Caliente',
  Applied: 'Aplicado',
  Interview: 'Entrevista',
  Test: 'Entrevista',
  Rejected: 'Cerrado',
  'No Fit': 'Cerrado',
  Paused: 'Frío'
};

/** Inverso aproximado: al mover de columna manualmente, el estado del tracker se sincroniza. */
export const STAGE_TO_DEFAULT_TRACKER_STATUS: Record<PipelineStage, TrackerStatus> = {
  'Frío': 'Saved',
  'Tibio': 'Contacted',
  'Caliente': 'Offer',
  'Aplicado': 'Applied',
  'Seguimiento': 'Contacted',
  'Entrevista': 'Interview',
  'Cerrado': 'Rejected'
};

export function validateSingleNextAction(app: JobApplication): boolean {
  return typeof app.singleNextAction === 'string' && app.singleNextAction.trim().length > 0;
}

/** Datos REALES del tracker xlsx (antes: mocks Epic/Ubisoft/Riot — eliminados). */
export const initialApplications: JobApplication[] = applicationsSeed;
