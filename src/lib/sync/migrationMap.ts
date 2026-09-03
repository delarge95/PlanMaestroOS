// migrationMap — amplía migrateLocalStorage a las 12+2 keys reales (archivo 14 §14.2).
// Mata la huérfana plan_maestro_career_goals (RoadmapBoard/CourseTracker/NewsInbox
// migran a career-state-v1 en el archivo 19 §19.1). Destino: migrateLocalStorage.ts

export const MIGRATION_MAP: Record<string, { store: string }> = {
  'plan-maestro-state-v3': { store: 'app' },
  'fitapp-active-program-v1': { store: 'fitness' },
  'planmaestro_active_progressions_v1': { store: 'fitness' },
  'plan-maestro-skills-store-v1': { store: 'fitness' },
  'fitapp-prehab-state-v1': { store: 'fitness' },
  'fitapp_workout_history': { store: 'fitness' },
  'cardio-presets-v1': { store: 'fitness' },
  'cardio_session_history': { store: 'fitness' },
  'career-state-v1': { store: 'career' },
  'clinical-state-v1': { store: 'clinical' },
  'languages-vocabulary-v1': { store: 'languages' },
  'nutrition-local-v1': { store: 'nutrition' },
  'portapp-sprint-board-v1': { store: 'portfolio' },
  'portapp-launch-v1': { store: 'portfolio' },
  // 'plan_maestro_career_goals' ELIMINADA: huérfana (careerStore usa career-state-v1).
};

export interface MigrationPlan {
  keys: string[];
  retired: string[];
}

/** Plan puro: qué migrar y qué retirar. El IO lo hace el migrador existente. */
export function migrationPlan(existingKeys: string[]): MigrationPlan {
  const known = new Set(Object.keys(MIGRATION_MAP));
  return {
    keys: existingKeys.filter((k) => known.has(k)),
    retired: existingKeys.filter((k) => k === 'plan_maestro_career_goals'),
  };
}
