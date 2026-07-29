// src/data/fitness/programs/index.ts - Unified Catalog Export
import type { TrainingProgram } from './types';
import { minMaxProgram } from './minMax';
import { powerbuildingProgram } from './powerbuilding';
import { bodybuildingTransformationProgram } from './bodybuildingTransformation';
import { gluteHypertrophyProgram } from './gluteHypertrophy';
import { calisthenicsProgram } from './calisthenics';

export * from './types';
export { minMaxProgram } from './minMax';
export { powerbuildingProgram } from './powerbuilding';
export { bodybuildingTransformationProgram } from './bodybuildingTransformation';
export { gluteHypertrophyProgram } from './gluteHypertrophy';
export { calisthenicsProgram } from './calisthenics';
export { calisthenicsSkillTree } from './calisthenicsPaths';

export const allPrograms: TrainingProgram[] = [
  minMaxProgram,
  powerbuildingProgram,
  bodybuildingTransformationProgram,
  gluteHypertrophyProgram,
  calisthenicsProgram
];

export function getProgramById(id: string): TrainingProgram {
  const found = allPrograms.find((p) => p.id === id);
  return found || minMaxProgram;
}
