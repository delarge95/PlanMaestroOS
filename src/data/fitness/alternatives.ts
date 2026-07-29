// src/data/fitness/alternatives.ts - 3-Tier Exercise Substitution Engine per Audit 03
import { exerciseDatabase } from '../exercises';
import { resolveExerciseId } from './exerciseResolver';

export type Alternative = {
  exerciseId: string;
  name: string;
  reason: 'source-program' | 'plan-fitness' | 'fitapp-compatible';
  preserves: Array<'pattern' | 'primary-muscle' | 'range' | 'load-profile'>;
  note?: string;
};

// Layer 2: Approved substitutes from plan_fitness.md
const PLAN_FITNESS_SUBSTITUTES: Record<string, string[]> = {
  'ex-back-squat': ['ex-spanish-squats', 'ex-leg-extension'],
  'ex-incline-bench-press': ['ex-push-up', 'ex-pec-deck'],
  'ex-pull-up': ['ex-lat-pulldown', 'ex-ring-row'],
  'ex-romanian-deadlift': ['ex-hip-thrust', 'ex-lying-leg-curl']
};

/**
 * Returns prioritized 3-tier list of valid exercise alternatives.
 */
export function getExerciseAlternatives(
  currentExerciseId: string,
  sourceSubstitutes: string[] = []
): Alternative[] {
  const result: Alternative[] = [];
  const addedIds = new Set<string>([currentExerciseId]);

  const targetExercise = exerciseDatabase[currentExerciseId];

  // CAPA 1: Sustituciones del Programa Fuente
  for (const rawSubId of sourceSubstitutes) {
    const resolved = resolveExerciseId(rawSubId);
    if (!addedIds.has(resolved) && exerciseDatabase[resolved]) {
      addedIds.add(resolved);
      result.push({
        exerciseId: resolved,
        name: resolved,
        reason: 'source-program',
        preserves: ['pattern', 'primary-muscle'],
        note: 'Sustituto oficial prescrito en el PDF del programa.'
      });
    }
  }

  // CAPA 2: Alternativas Aprobadas en plan_fitness.md
  const planSubs = PLAN_FITNESS_SUBSTITUTES[currentExerciseId] || [];
  for (const rawSubId of planSubs) {
    const resolved = resolveExerciseId(rawSubId);
    if (!addedIds.has(resolved) && exerciseDatabase[resolved]) {
      addedIds.add(resolved);
      result.push({
        exerciseId: resolved,
        name: resolved,
        reason: 'plan-fitness',
        preserves: ['pattern', 'load-profile'],
        note: 'Sustituto aprobado en plan_fitness.md por salud biomecánica.'
      });
    }
  }

  // CAPA 3: Motor FitApp Compatible (Mismo subcategoría / Músculos primarios)
  if (targetExercise) {
    for (const [id, ex] of Object.entries(exerciseDatabase)) {
      if (
        !addedIds.has(id) &&
        ((ex.subcategory && ex.subcategory === targetExercise.subcategory) ||
          ex.category === targetExercise.category)
      ) {
        addedIds.add(id);
        result.push({
          exerciseId: id,
          name: id,
          reason: 'fitapp-compatible',
          preserves: ['primary-muscle'],
          note: `Compatible por categoría (${ex.subcategory || ex.category}).`
        });
        if (result.length >= 6) break;
      }
    }
  }

  return result;
}
