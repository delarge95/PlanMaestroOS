// src/data/career/careerContracts.ts - Contratos de datos de Carrera y flujos IA per Documento 06

export type CareerPipelineStage =
  | 'Prospecto'
  | 'Investigar'
  | 'Preparar'
  | 'Revisar'
  | 'Aplicado'
  | 'Seguimiento'
  | 'Entrevista'
  | 'Oferta'
  | 'Cerrado';

export interface FitAnalysisMatrix {
  matchPercentage: number;
  matchingSkills: string[];
  gapsToAddress: string[];
  portfolioEvidence: string[];
}

export interface CareerApplication {
  id: string;
  company: string;
  role: string;
  stage: CareerPipelineStage;
  singleNextAction: string;
  followUpDateIso: string;
  appliedDateIso?: string;
  cvVersionSent?: string;
  coverLetterVersionSent?: string;
  sourceUrl?: string;
  remoteType?: 'Remoto LATAM' | 'Remoto Global' | 'Híbrido' | 'Presencial';
  fitMatrix?: FitAnalysisMatrix;
}

export interface PortfolioAsset {
  id: string;
  title: string;
  category: 'CV' | 'Carta' | 'Portfolio' | 'CaseStudy';
  version: string;
  githubRepoUrl?: string;
  liveDemoUrl?: string;
  isApproved: boolean;
  lastUpdatedIso: string;
}

export type AiActionType =
  | 'summarize-job'
  | 'tailor-cv'
  | 'draft-cover-letter'
  | 'draft-follow-up';

export interface AiRequestContract {
  action: AiActionType;
  allowedSources: string[];
  targetRole?: string;
  approvalRequired: true;
  retention: 'minimal';
}

export interface CareerAIDraft {
  id: string;
  applicationId: string;
  company: string;
  role: string;
  requestContract: AiRequestContract;
  draftText: string;
  unverifiedClaimsFlagged: string[];
  createdIso: string;
  status: 'Revisar' | 'Aprobado' | 'Rechazado';
}

export interface GitHubRepoEvidence {
  repoName: string;
  publicUrl: string;
  techStack: string[];
  releaseStatus: string;
  relevantCaseStudyTitle: string;
}
