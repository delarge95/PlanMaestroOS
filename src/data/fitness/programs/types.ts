// src/data/fitness/programs/types.ts - Fitness Program Data Contract
export type EffortTarget = {
  type: 'rir' | 'rpe';
  early?: string;
  last?: string;
};

export type ExercisePrescription = {
  id?: string;
  exerciseId: string;               // ID canónico de la base FitApp
  displayName: string;              // Nombre exacto mostrado en el PDF (p. ej. 'Barbell Incline Press')
  lastSetIntensityTechnique?: string; // 'N/A', 'Drop set', 'Myo-reps', 'Lengthened Partials'
  intensityTechnique?: string;        // Alias técnico
  warmupSets: number | string;      // Rango o número exacto del PDF (p. ej., '2-4', '1-2', '0-1')
  workingSets: number | string;     // Número de series efectivas
  targetReps?: string;              // Rango de repeticiones (p. ej. '6-8')
  repRange?: string;                // Legacy alias
  rirPerSet?: string[];             // RIR/RPE individual por cada serie (p. ej. ['2', '1'])
  earlySetRpe?: string;             // RPE/RIR de primeras series
  lastSetRpe?: string;            // RPE/RIR de última serie
  effort?: EffortTarget;            // Objeto de esfuerzo (legacy alias)
  restPeriod?: string;              // Tiempo de descanso (p. ej. '3-5 min')
  rest?: string;                    // Legacy alias
  substitutionOption1?: string;     // Sustitución opción 1 recomendada por la rutina (PDF)
  substitutionOption2?: string;     // Sustitución opción 2 recomendada por la rutina (PDF)
  substituteOptions?: string[];     // Alternativas Nivel 1 y 2
  substituteExerciseIds?: string[]; // Legacy alias
  notes: string;                    // Notas técnicas y operativas exactas del PDF
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
  id?: string;
  name?: string;
  week?: number;
  weekNumber?: number;
  block?: string;
  title?: string;
  isIntro?: boolean;
  isDeload?: boolean;
  notes?: string;
  days?: WorkoutDay[];
  schedule?: any[];
};

export type WorkoutProgram = {
  id: string;
  name?: string;
  title?: string;
  type?: string;
  category?: string;
  source?: string;
  pdfUrl?: string;
  programGuideUrl?: string;
  durationWeeks?: number;
  split?: string[];
  methodology?: string[];
  equipment?: string[];
  weeks?: any[];
  schedule?: any[];
  optionalDay?: any;
};

export type TrainingProgram = {
  id: string;
  title: string;
  name?: string;
  type?: 'program' | 'week' | 'day';
  category?: string;
  source: string;
  pdfUrl?: string;
  programGuideUrl?: string;
  durationWeeks: number;
  split: string[];
  methodology: string[];
  equipment: string[];
  weeks: ProgramWeek[];
  optionalDay?: any;
};
