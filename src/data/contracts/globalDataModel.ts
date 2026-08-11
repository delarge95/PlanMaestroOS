// src/data/contracts/globalDataModel.ts - Modelo de Datos Global per Roadmap Documento 03

export interface EntityHeader {
  externalId: string;
  notionPageId?: string;
  createdAtIso: string;
  updatedAtIso: string;
  archived?: boolean;
}

// 1. AREA
export interface AreaEntity {
  header: EntityHeader;
  name: string;
  slug: 'agenda' | 'fitness' | 'carrera' | 'tesis' | 'idiomas' | 'clinico' | 'gastronomia';
  colorHex: string;
}

// 2. PROJECT
export interface ProjectEntity {
  header: EntityHeader;
  areaExternalId: string;
  title: string;
  description: string;
  githubRepoUrl?: string;
  status: 'Idea' | 'EnProgreso' | 'Pausado' | 'Completado' | 'Archivado';
  priority: 'Alta' | 'Media' | 'Baja';
}

// 3. TASK
export interface TaskEntity {
  header: EntityHeader;
  areaExternalId: string;
  projectExternalId?: string;
  title: string;
  singleNextAction: string;
  estimatedMinutes: number;
  priority: 'Alta' | 'Media' | 'Baja';
  dueDateIso?: string;
  status: 'PorHacer' | 'EnCurso' | 'Bloqueado' | 'Completado';
}

// 4. TRAINING PROGRAM
export interface TrainingProgramEntity {
  header: EntityHeader;
  title: string;
  description: string;
  totalWeeks: number;
  daysPerWeek: number;
  isActive: boolean;
}

// 5. WORKOUT SESSION
export interface WorkoutSessionEntity {
  header: EntityHeader;
  programExternalId: string;
  weekNumber: number;
  dayTitle: string;
  sessionRpe?: number;
  totalVolumeKg: number;
  durationMinutes: number;
  completedAtIso: string;
}

// 6. SKILL PATH
export interface SkillPathEntity {
  header: EntityHeader;
  discipline: 'Calistenia' | 'Movilidad' | 'MMA' | 'Boxeo' | 'Flexibilidad';
  title: string;
  currentStepTitle: string;
  targetTolerance: string;
}

// 7. CAREER APPLICATION
export interface CareerApplicationEntity {
  header: EntityHeader;
  company: string;
  role: string;
  pipelineStage: 'Prospecto' | 'Investigar' | 'Preparar' | 'Revisar' | 'Aplicado' | 'Seguimiento' | 'Entrevista' | 'Oferta' | 'Cerrado';
  singleNextAction: string;
  followUpDateIso: string;
  sourceUrl?: string;
}

// 8. LANGUAGE COURSE
export interface LanguageCourseEntity {
  header: EntityHeader;
  language: 'de' | 'en';
  cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'Technical';
  currentUnitTitle: string;
  vocabularyCount: number;
}

// 9. RECIPE
export interface RecipeEntity {
  header: EntityHeader;
  title: string;
  prepTimeMinutes: number;
  targetCaloricCategory: 'Deficit' | 'Mantenimiento' | 'Superavit';
  sourceUrl?: string;
  originalNotes: string;
}

// 10. NOTE / REFERENCE
export interface NoteReferenceEntity {
  header: EntityHeader;
  title: string;
  obsidianNoteUri?: string;
  publicWebUrl?: string;
  category: 'Clinical' | 'Fitness' | 'Career' | 'Languages' | 'Research';
  summaryText: string;
}
