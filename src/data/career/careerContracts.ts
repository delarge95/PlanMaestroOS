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

/** Estado de la investigación profunda de una empresa antes de aplicar. */
export type CompanyResearchStatus = 'pendiente' | 'en-curso' | 'completa';

/**
 * Investigación por empresa (doc-11 §identity/feasibility + doc-31 protocolo).
 * Campo libre por sección — la UI guía con placeholders, §0.1 prohíbe pre-rellenar.
 */
export interface CompanyResearch {
  /** Nombre exacto de la empresa (clave de emparejamiento con targets/apps). */
  companyName: string;
  status: CompanyResearchStatus;
  /** Qué producto/servicio real ofrecen y a quién. */
  products: string;
  /** Stack/motor conocido (Unity, Unreal, Three.js, pipeline propio…). */
  stack: string;
  /** Tamaño aprox. del equipo/estudio y estructura. */
  size: string;
  /** Proceso de contratación conocido (test, portfolio review, entrevistas). */
  hiringProcess: string;
  /** Contactos/canales (reclutador, TA lead, referido) con canal. */
  contacts: string;
  /** Cómo adaptar CV/carta a ESTA empresa (qué enfatizar, qué evitar). */
  tailoringNotes: string;
  /** Fit score propio 0–12 (regla tracker: ≥10 aplicar / 7–9 investigar / ≤6 descartar). */
  fitScoreUser?: number;
  /** URLs consultadas (una por línea; trazabilidad de la investigación). */
  sources: string[];
  updatedAtIso: string;
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
