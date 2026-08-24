// src/data/career/companies.ts - Base de Datos e Historial Inmutable de Empresas
//
// Los datos REALES viven en companiesSeed.ts (auto-generado del tracker xlsx) y
// se enriquecen con el doc-11 en companyTargets.ts (Tarea 2). `initialCompanies`
// mantiene compatibilidad apuntando a esos datos reales (mocks eliminados).

import { companiesSeed } from './companiesSeed';

export interface CompanyTimelineEvent {
  id: string;
  dateIso: string;
  type: 'message' | 'cv_sent' | 'reply' | 'interview' | 'outcome';
  note: string;
}

export interface CompanyRecord {
  id: string;
  name: string;
  website: string;
  tier: 'Top Priority' | 'Standard' | 'Watchlist';
  archived: boolean;
  timeline: CompanyTimelineEvent[];
  /** Procedencia del registro (trazabilidad). */
  source?: 'tracker-xlsx' | 'doc-11' | 'manual';
  /** Fuente citada para los datos enriquecidos (p. ej. "doc-11 §Tier-A"). */
  sourceRef?: string;
}

export const initialCompanies: CompanyRecord[] = companiesSeed;
