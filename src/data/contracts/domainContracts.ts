// src/data/contracts/domainContracts.ts - Contratos Agnósticos de Interfaz de Usuario per Documento 04

export type UIStateStatus = 'loading' | 'empty' | 'stale' | 'ready' | 'error';

export interface UIStateHeader {
  status: UIStateStatus;
  lastUpdatedIso: string;
  errorMessage?: string;
}

export interface TodayDomainView {
  uiState: UIStateHeader;
  activeBlock: string;
  primaryAction10Min: {
    title: string;
    targetArea: string;
    estimatedMinutes: number;
  };
  top3Tasks: Array<{
    id: string;
    title: string;
    area: string;
    priority: 'Alta' | 'Media' | 'Baja';
  }>;
  fitnessSummary: {
    activeRoutineTitle: string;
    sessionCompletedToday: boolean;
    nextWorkoutDayTitle?: string;
  };
  careerSummary: {
    pendingFollowUpsCount: number;
    activeApplicationsCount: number;
    nextFollowUpDate?: string;
  };
}

export interface CareerPipelineItem {
  id: string;
  company: string;
  role: string;
  status: 'Prospecto' | 'Aplicado' | 'Entrevista' | 'Oferta' | 'Rechazado';
  nextAction: string;
  followUpDateIso?: string;
  remoteType?: string;
}

export interface CareerAssetItem {
  id: string;
  title: string;
  category: 'CV' | 'Carta' | 'Portfolio' | 'CaseStudy';
  version: string;
  isApproved: boolean;
}

export interface CareerAIDraftItem {
  id: string;
  targetCompany: string;
  targetRole: string;
  draftContent: string;
  sourcesUsed: string[];
  requiresHumanApproval: boolean;
  isApproved?: boolean;
}

export interface CareerPipelineView {
  uiState: UIStateHeader;
  applications: CareerPipelineItem[];
  assets: CareerAssetItem[];
  aiDrafts: CareerAIDraftItem[];
}

export interface UpcomingDomainState {
  domainKey: 'thesis' | 'languages' | 'academy' | 'gastronomy';
  domainLabel: string;
  status: 'proximamente';
  shortDescription: string;
}

export const UPCOMING_DOMAINS_REGISTRY: UpcomingDomainState[] = [
  {
    domainKey: 'thesis',
    domainLabel: 'Tesis',
    status: 'proximamente',
    shortDescription: 'Defensa académica TwinSight X500 y repositorio científico.'
  },
  {
    domainKey: 'languages',
    domainLabel: 'Idiomas',
    status: 'proximamente',
    shortDescription: 'Ruta intensiva Alemán A1 y fluidez técnica en Inglés.'
  },
  {
    domainKey: 'academy',
    domainLabel: 'Academia',
    status: 'proximamente',
    shortDescription: 'Curaduría de cursos con artefactos de portafolio.'
  },
  {
    domainKey: 'gastronomy',
    domainLabel: 'Gastronomía',
    status: 'proximamente',
    shortDescription: 'Nutrición conductual y preparación de comidas preparadas.'
  }
];
