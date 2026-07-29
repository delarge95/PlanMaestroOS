// src/data/fitness/programs/types.ts - Fitness Program Data Contract
export type EffortTarget = {
  type: 'rir' | 'rpe';
  early?: string;
  last?: string;
};

export type ExercisePrescription = {
  id?: string;
  exerciseId: string;             // ID canónico de la base FitApp
  displayName: string;            // Nombre mostrado en la UI
  warmupSets: number | string;    // Número o rango '1-2'
  workingSets: number | string;   // Número de series efectivas
  targetReps?: string;            // e.g. '8-10'
  repRange?: string;              // e.g. '8-10' (legacy alias)
  restPeriod?: string;            // e.g. '2-3 min'
  rest?: string;                  // e.g. '2-3 min' (legacy alias)
  earlySetRpe?: string;           // RPE/RIR de primeras series
  lastSetRpe?: string;            // RPE/RIR de última serie
  effort?: EffortTarget;          // Objeto de esfuerzo (legacy alias)
  intensityTechnique?: string;    // Técnica especial de última serie
  substituteOptions?: string[];   // Alternativas Nivel 1 y 2
  substituteExerciseIds?: string[]; // Alternativas (legacy alias)
  notes?: string;                 // Notas técnicas y operativas del PDF
  sourceRef?: { programId: string; block: string; week: number; day: string };
};

export type WorkoutDay = {
  id: string;
  title?: string;
  name?: string;
  order?: number;
  targetMuscles?: string[];
  exercises: ExercisePrescription[];
};

export type ProgramWeek = {
  week?: number;
  weekNumber?: number;
  block?: string;
  title?: string;
  isIntro?: boolean;
  isDeload?: boolean;
  days: WorkoutDay[];
};

export type TrainingProgram = {
  id: string;
  title: string;
  source: string;
  pdfUrl?: string;
  durationWeeks: number;
  split: string[];
  methodology: string[];
  equipment: string[];
  weeks: ProgramWeek[];
};
