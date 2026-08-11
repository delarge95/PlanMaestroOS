// src/data/career/applications.ts - Pipeline de Aplicaciones de Empleo

export type PipelineStage = 'Frío' | 'Tibio' | 'Caliente' | 'Aplicado' | 'Seguimiento' | 'Entrevista' | 'Cerrado';

export interface JobApplication {
  id: string;
  companyName: string;
  roleTitle: string;
  stage: PipelineStage;
  singleNextAction: string; // Regla dura: exactamente una única próxima acción
  followUpDateIso: string;
  updatedAtIso: string;
}

export function validateSingleNextAction(app: JobApplication): boolean {
  return typeof app.singleNextAction === 'string' && app.singleNextAction.trim().length > 0;
}

export const initialApplications: JobApplication[] = [
  {
    id: 'app-1',
    companyName: 'Epic Games',
    roleTitle: 'Tech Artist',
    stage: 'Entrevista',
    singleNextAction: 'Enviar confirmación de horario para entrevista técnica',
    followUpDateIso: '2026-08-12',
    updatedAtIso: '2026-08-11'
  },
  {
    id: 'app-2',
    companyName: 'Ubisoft',
    roleTitle: 'Graphics Engineer',
    stage: 'Seguimiento',
    singleNextAction: 'Hacer seguimiento por correo al Lead Recruiter',
    followUpDateIso: '2026-08-13',
    updatedAtIso: '2026-08-10'
  },
  {
    id: 'app-3',
    companyName: 'Riot Games',
    roleTitle: 'VFX Artist',
    stage: 'Caliente',
    singleNextAction: 'Enviar correo en frío con reel de shaders 30s',
    followUpDateIso: '2026-08-14',
    updatedAtIso: '2026-08-09'
  },
  {
    id: 'app-4',
    companyName: 'Crytek',
    roleTitle: 'Rendering Developer',
    stage: 'Frío',
    singleNextAction: 'Identificar contacto de ingeniería en LinkedIn',
    followUpDateIso: '2026-08-16',
    updatedAtIso: '2026-08-08'
  }
];
