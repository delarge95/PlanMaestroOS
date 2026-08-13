// src/lib/fitness/muscleMatchEngine.ts
// Muscle-similarity scoring engine for finding real exercise substitutions.
// Substitutions must share primary strength muscles (highest priority)
// and secondary stability muscles.

import type { ExerciseMap } from '../../data/types';

// ── Synonym normalization ──────────────────────────────────────────────────────
// Maps varied naming conventions to canonical forms for comparison
const MUSCLE_SYNONYMS: Record<string, string> = {
  // Deltoids
  'anterior deltoids': 'deltoids',
  'lateral deltoids': 'deltoids',
  'posterior deltoids': 'deltoids',
  'deltoid group': 'deltoids',
  'shoulder': 'deltoids',
  'shoulders': 'deltoids',
  // Lats
  'latissimus dorsi': 'lats',
  'latissimus dorsi & teres major': 'lats',
  'lats & teres major': 'lats',
  // Core
  'core & abdominals': 'core',
  'abdominals': 'core',
  'abs': 'core',
  'abdominal': 'core',
  // Chest
  'pectoralis major': 'pectorals',
  'pectorals': 'pectorals',
  'pecs': 'pectorals',
  'pectoral region': 'pectorals',
  'chest': 'pectorals',
  // Traps
  'trapezius': 'trapezius',
  'trapezius & rhomboids': 'trapezius',
  'scapular & thoracic muscles': 'trapezius',
  // Glutes
  'gluteus medius': 'glutes',
  'gluteus maximus': 'glutes',
  // Serratus
  'serratus anterior': 'serratus',
  // Erector
  'erector spinae': 'erector spinae',
  'spinal erectors': 'erector spinae',
  // Triceps
  'triceps brachii': 'triceps',
  'triceps brachii group': 'triceps',
  // Biceps
  'biceps brachii': 'biceps',
  // Hamstrings
  'hamstrings': 'hamstrings',
  // Quads
  'quadriceps': 'quadriceps',
  'quads': 'quadriceps',
  // Hip flexors
  'hip flexors': 'hip flexors',
  'iliopsoas': 'hip flexors',
  // Forearms
  'forearm group': 'forearms',
  'wrist flexors': 'forearms',
  'brachioradialis': 'forearms',
  // Rhomboids
  'rhomboids': 'rhomboids'
};

function normalizeMuscle(muscle: string): string {
  const lower = muscle.toLowerCase().trim();
  return MUSCLE_SYNONYMS[lower] || lower;
}

function normalizeMuscles(muscles: string[]): Set<string> {
  return new Set(muscles.map(normalizeMuscle));
}

/**
 * Compute muscle overlap score between two exercises.
 * Scoring:
 *   - Each shared strength muscle = 2 points
 *   - Each shared stability muscle = 1 point
 *   - Normalized by (union_strength * 2 + union_stability)
 *
 * @returns score 0-1
 */
export function computeMuscleOverlap(
  strengthA: string[],
  stabilityA: string[],
  strengthB: string[],
  stabilityB: string[]
): number {
  const sA = normalizeMuscles(strengthA);
  const stA = normalizeMuscles(stabilityA);
  const sB = normalizeMuscles(strengthB);
  const stB = normalizeMuscles(stabilityB);

  let score = 0;
  let maxScore = 0;

  // Strength: 2 pts each
  const strengthUnion = new Set([...sA, ...sB]);
  strengthUnion.forEach(m => {
    maxScore += 2;
    if (sA.has(m) && sB.has(m)) score += 2;
  });

  // Stability: 1 pt each
  const stabilityUnion = new Set([...stA, ...stB]);
  stabilityUnion.forEach(m => {
    maxScore += 1;
    if (stA.has(m) && stB.has(m)) score += 1;
  });

  if (maxScore === 0) return 0;
  return score / maxScore;
}

export interface SimilarExerciseResult {
  name: string;
  score: number;          // 0-1, higher = more similar
  sharedStrength: string[];
  sharedStability: string[];
}

/**
 * Find the most muscularly similar exercises to a target exercise.
 *
 * @param targetName     Name of the target exercise (excluded from results)
 * @param targetStrength Primary strength muscles of target
 * @param targetStability Stability muscles of target
 * @param database        Full exercise database to search
 * @param maxResults      Max results to return (default 6)
 * @param minScore        Minimum similarity threshold (default 0.25)
 */
export function findSimilarExercises(
  targetName: string,
  targetStrength: string[],
  targetStability: string[],
  database: ExerciseMap,
  maxResults = 6,
  minScore = 0.25
): SimilarExerciseResult[] {
  const targetSt = normalizeMuscles(targetStrength);
  const targetStab = normalizeMuscles(targetStability);

  const results: SimilarExerciseResult[] = [];

  for (const [name, info] of Object.entries(database)) {
    if (name === targetName) continue;

    const dbStrength = info.muscles?.strength || [];
    const dbStability = info.muscles?.stability || [];

    const score = computeMuscleOverlap(
      targetStrength, targetStability,
      dbStrength, dbStability
    );

    if (score >= minScore) {
      const dbSt = normalizeMuscles(dbStrength);
      const dbStab = normalizeMuscles(dbStability);

      results.push({
        name,
        score,
        sharedStrength: [...targetSt].filter(m => dbSt.has(m)),
        sharedStability: [...targetStab].filter(m => dbStab.has(m))
      });
    }
  }

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults);
}
