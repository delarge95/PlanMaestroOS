import type { ExerciseInfo, ExerciseMap } from '../types';

import { bandsAndAccessoriesExercises } from './bandsAndAccessories';
import { cablesExercises } from './cables';
import { calisthenicsExercises } from './calisthenics';
import { freeWeightsExercises } from './freeWeights';
import { machinesExercises } from './machines';
import { mobilityWarmupPrehabExercises } from './mobilityWarmupPrehab';
import { olympicAndPowerExercises } from './olympicAndPower';
import { sledAndStrongmanExercises } from './sledAndStrongman';
import { trxExercises } from './trx';
import { weightedCalisthenicsExercises } from './weightedCalisthenics';

export interface ExerciseEntry extends ExerciseInfo {
  name: string;
  discipline: string;
}

export const EXERCISE_CATEGORIES = [
  'Todos',
  'Calisthenics',
  'Free Weights',
  'TRX',
  'Cables',
  'Machines',
  'Bands & Accessories',
  'Mobility & Prehab',
  'Olympic & Power',
  'Sled & Strongman',
  'Weighted Calisthenics'
] as const;

// Combine all datasets
export const allExercisesMap: ExerciseMap = {
  ...calisthenicsExercises,
  ...freeWeightsExercises,
  ...trxExercises,
  ...cablesExercises,
  ...machinesExercises,
  ...bandsAndAccessoriesExercises,
  ...mobilityWarmupPrehabExercises,
  ...olympicAndPowerExercises,
  ...sledAndStrongmanExercises,
  ...weightedCalisthenicsExercises
};

export const exerciseDatabase = allExercisesMap;
export { exerciseGroups } from './exerciseData';

export const allExercisesList: ExerciseEntry[] = Object.entries(allExercisesMap).map(([name, info]) => ({
  name,
  discipline: info.category || 'General',
  ...info
}));

/**
 * Search exercise by exact or fuzzy name match
 */
export function findExerciseByName(name: string): ExerciseEntry | null {
  if (!name) return null;
  const cleanName = name.toLowerCase().trim();
  
  // Exact match
  if (allExercisesMap[name]) {
    return { name, discipline: allExercisesMap[name].category || 'General', ...allExercisesMap[name] };
  }
  
  // Case-insensitive exact match
  const matchKey = Object.keys(allExercisesMap).find(k => k.toLowerCase() === cleanName);
  if (matchKey) {
    return { name: matchKey, discipline: allExercisesMap[matchKey].category || 'General', ...allExercisesMap[matchKey] };
  }

  // Partial substring match
  const partialKey = Object.keys(allExercisesMap).find(k => k.toLowerCase().includes(cleanName) || cleanName.includes(k.toLowerCase()));
  if (partialKey) {
    return { name: partialKey, discipline: allExercisesMap[partialKey].category || 'General', ...allExercisesMap[partialKey] };
  }

  return null;
}

/**
 * Filter exercises by category and search term
 */
export function filterExercises(category: string, search: string): ExerciseEntry[] {
  let list = allExercisesList;

  if (category && category !== 'Todos') {
    const catLower = category.toLowerCase();
    list = list.filter(e => 
      e.category.toLowerCase().includes(catLower) || 
      e.discipline.toLowerCase().includes(catLower)
    );
  }

  if (search && search.trim()) {
    const q = search.toLowerCase().trim();
    list = list.filter(e => 
      e.name.toLowerCase().includes(q) ||
      e.subcategory?.toLowerCase().includes(q) ||
      e.muscles.strength.some(m => m.toLowerCase().includes(q))
    );
  }

  return list;
}
