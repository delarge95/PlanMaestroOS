// src/data/career/careerServiceAdapter.ts - Servicio y Adaptador para Carrera per Documento 06

import type {
  CareerApplication,
  PortfolioAsset,
  CareerAIDraft,
  GitHubRepoEvidence,
  AiRequestContract
} from './careerContracts';

export interface CareerMetrics {
  applicationsThisWeek: number;
  avgDaysToFollowUp: number;
  approvedAssetsCount: number;
  activePipelineCount: number;
}

const MOCK_APPLICATIONS: CareerApplication[] = [
  {
    id: 'app_studio_x',
    company: 'Studio X Animation & Games',
    role: 'Unity Technical Artist (Junior)',
    stage: 'Aplicado',
    singleNextAction: 'Enviar mensaje de seguimiento por LinkedIn a Lead Tech Artist',
    followUpDateIso: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    appliedDateIso: new Date(Date.now() - 86400000 * 3).toISOString().split('T')[0],
    cvVersionSent: 'v2.1 Technical Artist',
    coverLetterVersionSent: 'v1.0 Studio X tailored',
    sourceUrl: 'https://linkedin.com/jobs/view/12345',
    remoteType: 'Remoto LATAM',
    fitMatrix: {
      matchPercentage: 88,
      matchingSkills: ['C# / Unity', 'Blender Optimization', 'HLSL Shaders'],
      gapsToAddress: ['Experiencia previa en AAA (compensar con Caso TwinSight)'],
      portfolioEvidence: ['TwinSight X500 Real-Time Demo', 'Blender-to-Unity CAD Tool']
    }
  },
  {
    id: 'app_digital_twin',
    company: 'Digital Twin Interactive',
    role: 'WebGL Real-Time Developer',
    stage: 'Prospecto',
    singleNextAction: 'Investigar stack de shaders y preparar borrador de CV adaptado',
    followUpDateIso: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
    remoteType: 'Remoto Global',
    fitMatrix: {
      matchPercentage: 92,
      matchingSkills: ['Astro / React', 'Three.js / WebGL', 'Optimization'],
      gapsToAddress: ['Pruebas de estrés a 60 FPS en móviles antiguos'],
      portfolioEvidence: ['Plan Maestro OS Web App', 'TwinSight WebGL Viewer']
    }
  }
];

const MOCK_ASSETS: PortfolioAsset[] = [
  {
    id: 'asset_cv_en',
    title: 'CV Technical Artist & WebGL (Inglés)',
    category: 'CV',
    version: 'v2.1',
    githubRepoUrl: 'https://github.com/delarge95/PlanMaestroOS',
    isApproved: true,
    lastUpdatedIso: new Date().toISOString()
  },
  {
    id: 'asset_twinsight_case',
    title: 'Caso de Estudio: TwinSight X500 CAD a WebGL',
    category: 'CaseStudy',
    version: 'v1.0',
    liveDemoUrl: 'https://delarge95.github.io/PlanMaestroOS/app/',
    githubRepoUrl: 'https://github.com/delarge95/PlanMaestroOS',
    isApproved: true,
    lastUpdatedIso: new Date().toISOString()
  }
];

const MOCK_GITHUB_EVIDENCE: GitHubRepoEvidence[] = [
  {
    repoName: 'PlanMaestroOS',
    publicUrl: 'https://github.com/delarge95/PlanMaestroOS',
    techStack: ['TypeScript', 'Astro', 'React', 'Zustand', 'Vite'],
    releaseStatus: 'v1.0.0 Active Production',
    relevantCaseStudyTitle: 'Caso de Estudio TwinSight X500 & Plan Maestro OS'
  }
];

const MOCK_AI_DRAFTS: CareerAIDraft[] = [
  {
    id: 'draft_studio_x_followup',
    applicationId: 'app_studio_x',
    company: 'Studio X Animation & Games',
    role: 'Unity Technical Artist (Junior)',
    requestContract: {
      action: 'draft-follow-up',
      allowedSources: ['Studio X Job Post', 'LinkedIn Profile', 'TwinSight Case Study'],
      targetRole: 'Unity Technical Artist',
      approvalRequired: true,
      retention: 'minimal'
    },
    draftText: 'Hola team de Studio X, comparto mi caso de estudio de optimización 3D donde reduje modelos CAD de 6.5M a 95k polígonos manteniendo 60 FPS.',
    unverifiedClaimsFlagged: ['Métrica de 60 FPS en gama baja requiere demo en vivo'],
    createdIso: new Date().toISOString(),
    status: 'Revisar'
  }
];

export function getCareerApplications(): CareerApplication[] {
  return MOCK_APPLICATIONS;
}

export function getPortfolioAssets(): PortfolioAsset[] {
  return MOCK_ASSETS;
}

export function getGitHubEvidence(): GitHubRepoEvidence[] {
  return MOCK_GITHUB_EVIDENCE;
}

export function getCareerAIDrafts(): CareerAIDraft[] {
  return MOCK_AI_DRAFTS;
}

export function getCareerMetrics(): CareerMetrics {
  return {
    applicationsThisWeek: 2,
    avgDaysToFollowUp: 4,
    approvedAssetsCount: MOCK_ASSETS.filter((a) => a.isApproved).length,
    activePipelineCount: MOCK_APPLICATIONS.filter((a) => a.stage !== 'Cerrado').length
  };
}

export function createAiRequestContract(
  action: AiRequestContract['action'],
  allowedSources: string[],
  targetRole?: string
): AiRequestContract {
  return {
    action,
    allowedSources,
    targetRole,
    approvalRequired: true,
    retention: 'minimal'
  };
}
