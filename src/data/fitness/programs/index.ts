// src/data/fitness/programs/index.ts - Unified Catalog Export
import type { TrainingProgram } from './types';
import { minMaxProgram } from './minMax';
import { powerbuildingProgram } from './powerbuilding';
import { bodybuildingTransformationProgram } from './bodybuildingTransformation';
import { gluteHypertrophyProgram } from './gluteHypertrophy';
import { calisthenicsProgram } from './calisthenics';
import { thenxPrograms } from './thenxPrograms';
import { thenxMasterRoutines } from './thenxMasterRoutines';

export * from './types';
export { minMaxProgram } from './minMax';
export { powerbuildingProgram } from './powerbuilding';
export { bodybuildingTransformationProgram } from './bodybuildingTransformation';
export { gluteHypertrophyProgram } from './gluteHypertrophy';
export { calisthenicsProgram } from './calisthenics';
export { calisthenicsSkillTree } from './calisthenicsPaths';
export { thenxPrograms } from './thenxPrograms';
export { thenxMasterRoutines } from './thenxMasterRoutines';

// Map title property if missing from name
const normalizedThenxPrograms: TrainingProgram[] = thenxPrograms.map((p: any) => ({
  ...p,
  title: p.title || p.name || 'Programa Thenx',
  source: p.source || 'Chris Heria / Thenx',
  durationWeeks: p.durationWeeks || p.weeks?.length || 1,
  split: p.split || ['Calistenia', 'Fuerza', 'Habilidad'],
  methodology: p.methodology || ['Progreso en Calistenia', 'Overcoming Gravity', 'Thenx System'],
  equipment: p.equipment || ['Barra de Dominadas', 'Anillas', 'Suelo', 'Paralelas']
}));

const normalizedMasterRoutines: TrainingProgram[] = thenxMasterRoutines.map((p: any) => ({
  ...p,
  title: p.title || p.name || 'Master Workout Thenx',
  source: p.source || 'Chris Heria / Thenx',
  durationWeeks: p.durationWeeks || 1,
  split: p.split || ['Habilidad'],
  methodology: p.methodology || ['Master Workout', 'Heria Technique'],
  equipment: p.equipment || ['Calistenia']
}));

export const allPrograms: TrainingProgram[] = [
  minMaxProgram,
  powerbuildingProgram,
  bodybuildingTransformationProgram,
  gluteHypertrophyProgram,
  calisthenicsProgram,
  ...normalizedThenxPrograms,
  ...normalizedMasterRoutines
];

export function getProgramById(id: string): TrainingProgram {
  const found = allPrograms.find((p) => p.id === id);
  return found || minMaxProgram;
}
