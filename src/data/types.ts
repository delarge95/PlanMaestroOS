export interface MobilityRequirement {
  muscle: string;
  level: 'Low' | 'Moderate' | 'High';
  description?: string;
}

export interface MusclesInfo {
  strength: string[];
  stability?: string[];
  mobility?: MobilityRequirement[];
}

export interface ExerciseInfo {
  image?: string;
  category: string;
  subcategory?: string;
  attachments?: string[];
  muscles: MusclesInfo;
  techniquePoints: string[];
  youtubeLink?: string;
  secondaryVideoLink?: string;
  videoOption1?: string;
  videoOption2?: string;
  substitutions?: string[];
}

export interface ExerciseMap {
  [key: string]: ExerciseInfo;
}

export interface WorkoutSet {
  reps: number;
  weight: number;
  completed: boolean;
}

export interface WorkoutLog {
  id?: string;
  dateIso?: string;
  routineTitle?: string;
  sets?: WorkoutSet[];
}

export interface SpecificMuscle {
  name?: string;
  description?: string;
  subMuscles?: string[];
  exercises?: string[];
  [key: string]: any;
}

export interface MuscleGroupInfo {
  name?: string;
  latinName?: string;
  function?: string;
  muscles?: { [key: string]: SpecificMuscle };
  [key: string]: any;
}

export interface WorkoutProgram {
  id: string;
  title: string;
  weeks?: any[];
}
