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

/**
 * Empresa objetivo normalizada del doc-11 (AG-CAREER T2).
 * Extiende CompanyRecord con los campos de las tablas del doc-11
 * (identidad, viabilidad de contratación y scoring), todos citados.
 */
export interface CompanyTarget extends CompanyRecord {
  /** Nº de fila en las tablas del doc-11 (id estable de cita). */
  doc11Number: number;
  region: string;
  category: string;
  /** Prioridad cruda del doc-11 §Scoring table: A | B | C | Watchlist. */
  priority: string;
  /** Cola de primera ola: A1 (verificar primero) | A2 (alto encaje, más fricción) | null. */
  wave: 'A1' | 'A2' | null;
  typicalRoles: string;
  remoteSignal: string;
  contractorSignal: string;
  language: string;
  salaryTier: string;
  authNote: string;
  scores: { fit: number; probability: number; compensation: number; portfolio: number };
  whyFirst: string;
  verificationFocus: string;
  mainUpside: string;
  mainFriction: string;
}

/** Job board priorizado (doc-11 §Job boards). */
export interface JobBoard {
  name: string;
  url: string;
  category: string;
  searchTerms: string;
  remote: string;
  contract: string;
  region: string;
  signal: string;
  noise: string;
  frequency: string;
  notes: string;
  sourceRef: string;
}

/** Recruiter / agencia / plataforma contratista (doc-11 §Recruiters). */
export interface RecruiterChannel {
  name: string;
  url: string;
  region: string;
  specialization: string;
  relevantRoles: string;
  contractor: string;
  remote: string;
  notes: string;
  sourceRef: string;
}

/** Comunidad (foro/Discord/asociación) del ecosistema (doc-11 §Communities). */
export interface CommunityChannel {
  name: string;
  url: string;
  platform: string;
  category: string;
  whyUseful: string;
  jobs: string;
  feedback: string;
  networking: string;
  sourceRef: string;
}

export const initialCompanies: CompanyRecord[] = companiesSeed;
