// src/data/fitness/exerciseMap.ts - Mapeo y equivalencias verificadas a FitApp

import { verifiedExerciseMap, type VerifiedExerciseLink } from './skills/fitAppExerciseMap';

export { verifiedExerciseMap, type VerifiedExerciseLink };

export function isExerciseVerified(skillExerciseId: string): boolean {
  const match = verifiedExerciseMap[skillExerciseId];
  return Boolean(match && match.verified && match.fitAppExerciseId);
}

export function getVerifiedExerciseLink(skillExerciseId: string): VerifiedExerciseLink | null {
  return verifiedExerciseMap[skillExerciseId] || null;
}
