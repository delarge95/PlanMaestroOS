// src/data/fitness/skills/types.ts - Canonical Skill Graph Types
export type SkillDomain = 'pull' | 'push' | 'core' | 'legs' | 'support' | 'mobility';
export type SkillKind = 'strength' | 'static' | 'dynamic' | 'mobility' | 'capacity';

export type SkillStatus =
  | 'available'        // Puede practicarse
  | 'in-progress'      // Elegida como activa
  | 'ready-to-review'  // Evidencia suficiente de dominio
  | 'unlocked'         // Paso completado / habilitado
  | 'paused';          // Pausada libremente

export type SkillStep = {
  id: string;
  pathId: string;
  order: number;
  title: string;
  fitAppExerciseId: string;
  kind: SkillKind;
  equipment: Array<'bar' | 'rings' | 'floor' | 'parallettes' | 'band' | 'box' | 'none'>;

  prerequisiteIds: string[];
  regressionIds: string[];
  nextIds: string[];

  practice: {
    metric: 'reps' | 'seconds' | 'sets' | 'quality';
    defaultSets: number;
    target: string;
    restSeconds?: number;
    frequencyHint?: string;
  };

  readiness: {
    technical: string[];
    volume: string[];
    tolerance: string[];
  };

  safety: {
    watchFor: string[];
    stopIf: string[];
  };

  preparationIds: string[];
  source: {
    documentId: 'overcoming-gravity-2';
    pageRefs: number[];
    verified: boolean;
  };
};

export type SkillPath = {
  id: string;
  title: string;
  domain: SkillDomain;
  goal: string;
  shortDescription: string;
  equipment: string[];
  stepIds: string[];
  featured: boolean;
  sourceDocumentId: 'overcoming-gravity-2';
};

export type PracticeSessionRecord = {
  id: string;
  stepId: string;
  timestamp: string;
  setsCompleted: number;
  targetAchieved: string;
  discomfortLevel: number; // 0-10
  perceivedEffort: number; // 1-10
  qualityScore: 'excelente' | 'buena' | 'regular' | 'deficiente';
  notes?: string;
};
