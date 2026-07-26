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
  substitutions?: string[];
}

export interface ExerciseMap {
  [key: string]: ExerciseInfo;
}
