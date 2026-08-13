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

/**
 * Fuzzy multi-result exercise lookup.
 * Handles:
 *  - "Step N - Name" prefix patterns (Heria workout step names)
 *  - Trailing whitespace
 *  - Case-insensitive exact and partial matching
 *  - Token-based multi-match (returns multiple candidates when ambiguous)
 *
 * @param name      Exercise name from progressions data (may be aliased or dirty)
 * @param maxResults Maximum number of candidates to return (default 3)
 * @returns Array of matching ExerciseEntry (empty if nothing found)
 */
export function findExerciseMatches(name: string, maxResults = 3): ExerciseEntry[] {
  if (!name) return [];

  // 1. Clean input: trim, normalize whitespace, strip "Step N - " prefix
  const cleaned = name
    .trim()
    .replace(/^step\s+\d+\s*[-–]\s*/i, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

  const cleanedLower = cleaned.toLowerCase();

  // 2. Exact match (original or cleaned)
  if (allExercisesMap[name]) {
    return [{ name, discipline: allExercisesMap[name].category || 'General', ...allExercisesMap[name] }];
  }
  if (allExercisesMap[cleaned]) {
    return [{ name: cleaned, discipline: allExercisesMap[cleaned].category || 'General', ...allExercisesMap[cleaned] }];
  }

  // 3. Case-insensitive exact match
  const exactKey = Object.keys(allExercisesMap).find(k => k.toLowerCase() === cleanedLower);
  if (exactKey) {
    return [{ name: exactKey, discipline: allExercisesMap[exactKey].category || 'General', ...allExercisesMap[exactKey] }];
  }

  // 4. Token-based matching — remove stopwords & require min length
  const STOPWORDS = new Set(['the', 'a', 'an', 'on', 'to', 'of', 'and', 'or', 'in', 'at', 'by', 'up', 'for', 'with']);
  const tokens = cleanedLower
    .split(/\s+/)
    .map(t => t.replace(/[^a-z0-9]/g, ''))
    .filter(t => t.length >= 3 && !STOPWORDS.has(t));

  if (tokens.length === 0) return [];

  // Score each database key: count how many tokens match
  const scored: Array<{ key: string; score: number }> = [];
  for (const key of Object.keys(allExercisesMap)) {
    const keyLower = key.toLowerCase();
    const matchCount = tokens.filter(t => keyLower.includes(t)).length;
    if (matchCount > 0) {
      // Boost score if ALL tokens match; penalize very long names (less specific)
      const allMatch = tokens.every(t => keyLower.includes(t));
      const score = allMatch
        ? matchCount * 2 + (1 / key.length)   // Strong match
        : matchCount * 0.5 + (1 / key.length); // Partial match
      scored.push({ key, score });
    }
  }

  // Sort by score descending, limit results
  const topMatches = scored
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(({ key }) => ({
      name: key,
      discipline: allExercisesMap[key].category || 'General',
      ...allExercisesMap[key]
    }));

  return topMatches;
}

