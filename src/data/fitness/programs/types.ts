// src/data/fitness/programs/types.ts - Fitness Program Data Contract per Audit 01
export type EffortTarget = {
  type: 'rir' | 'rpe';
  early?: string;
  last?: string;
};

export type ExercisePrescription = {
  id: string;
  exerciseId: string;             // ID canónico de la base FitApp
  displayName: string;            // nombre mostrado
  warmupSets: string;             // p. ej. '1-2'
  workingSets: number | 'NA';
  repRange: string;
  rest: string;
  effort: EffortTarget;
  intensityTechnique?: 'none' | 'drop-set' | 'myo-reps' | 'lengthened-partials' | 'static-hold';
  substituteExerciseIds: string[]; // sustitutos de la fuente y plan_fitness
  notes?: string;                 // nota operativa breve (<160 caracteres)
  sourceRef: { programId: string; block: string; week: number; day: string };
};

export type WorkoutDay = {
  id: string;
  title: string;
  order: number;
  exercises: ExercisePrescription[];
};

export type ProgramWeek = {
  week: number;
  block: string;
  isIntro?: boolean;
  isDeload?: boolean;
  days: WorkoutDay[];
};

export type TrainingProgram = {
  id: string;
  title: string;
  source: string;
  durationWeeks: number;
  split: string[];
  methodology: string[];
  equipment: string[];
  weeks: ProgramWeek[];
};
