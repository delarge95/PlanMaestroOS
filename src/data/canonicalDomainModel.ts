export type EnergyLevel = 'high' | 'medium' | 'low' | 'crisis';
export type DomainType = 'career' | 'fitness' | 'clinical' | 'german' | 'general';
export type EntityStatus = 'planned' | 'in_progress' | 'completed' | 'min_version' | 'deferred' | 'cancelled';

export interface SourceDocumentRef {
  title: string;
  filename: string;
  path: string;
  section?: string;
}

export interface CanonicalEntity {
  id: string;
  title: string;
  domain: DomainType;
  status: EntityStatus;
  phase: 'fase-1' | 'fase-2' | 'fase-3';
  tags: string[];
  originDocuments: SourceDocumentRef[];
  rationale: string;
  whyThisExists: string;
  energyRequired: EnergyLevel;
  durationMinutes: number;
  minViableVersion: string;
  normalVersion: string;
  extendedVersion: string;
  clinicalConstraints: string[];
  reviewCadence: 'daily' | 'weekly' | 'fortnightly' | 'monthly';
  lastUpdated: string;
}

export interface SetRecord {
  setNum: number;
  reps?: number;
  weight?: number; // kg
  rpe?: number;
  durationSeconds?: number;
  completed: boolean;
}

export interface ExerciseRecord {
  name: string;
  category?: string;
  restSec?: number;
  sets: SetRecord[];
}

export interface WorkoutSession {
  id: string;
  date: string; // ISO format
  routineTitle: string;
  durationMinutes: number;
  totalVolumeKg: number;
  exercises: ExerciseRecord[];
  perceivedEnergy: EnergyLevel; // Conexión directa con el modelo clínico TDAH
  painScore?: number; // 0-10 escala clínica de dolor articular (HSR)
  notes?: string;
}

export interface DayEnergyState {
  currentLevel: EnergyLevel;
  date: string;
  rationale: string;
}

export const DEFAULT_CANONICAL_ENTITIES: CanonicalEntity[] = [
  {
    id: 'ent_01',
    title: 'TwinSight MVP & Tesis Cierre',
    domain: 'career',
    status: 'in_progress',
    phase: 'fase-1',
    tags: ['#twinsight', '#tesis', '#unity'],
    originDocuments: [
      { title: '14_30_60_90_execution_plan.md', filename: '14_30_60_90_execution_plan.md', path: '14_30_60_90_execution_plan.md' },
      { title: '08B_twinsight_case_study.md', filename: '08B_twinsight_case_study_final_structure.md', path: '08B_twinsight_case_study_final_structure.md' }
    ],
    rationale: 'TwinSight es el entregable pivote para la sustentación inmediata y el caso de estudio del portafolio laboral.',
    whyThisExists: 'Demuestra capacidad como Technical Artist en WebGL y cierra la tesis universitaria.',
    energyRequired: 'high',
    durationMinutes: 120,
    minViableVersion: 'Escribir 1 párrafo de borrador feo ("Versión Mala") o corregir 1 shader durante 15 min.',
    normalVersion: '2 horas de trabajo profundo en Unity con captura de pantallas para el breakdown.',
    extendedVersion: '3 horas incluyendo edición de video demo y documentación técnica en GitHub.',
    clinicalConstraints: ['Regla de 10 min si hay parálisis', 'Límite de corte "Suficientemente Terminado > Ideal"'],
    reviewCadence: 'daily',
    lastUpdated: '2026-07-26'
  },
  {
    id: 'ent_02',
    title: 'Hábito Diario de Alemán A1 (13:30 - 14:00)',
    domain: 'german',
    status: 'planned',
    phase: 'fase-1',
    tags: ['#aleman', '#duolingo', '#habito'],
    originDocuments: [
      { title: '05_language_strategy_and_roi.md', filename: '05_language_strategy_and_roi.md', path: '05_language_strategy_and_roi.md' }
    ],
    rationale: 'Construir base de alemán A1 para movilidad a la UE (Alemania/Portugal).',
    whyThisExists: 'Garantizar hábito sostenido de 25 min sin fallar ningún día.',
    energyRequired: 'low',
    durationMinutes: 25,
    minViableVersion: '5 min de Duolingo en el teléfono.',
    normalVersion: '5 min Duolingo + 10 min lectura A1 + 10 min audio nativo.',
    extendedVersion: '35 min incluyendo práctica conversacional con IA.',
    clinicalConstraints: ['Bloque intocable a las 13:30', 'Cero acumulación si se pierde un día'],
    reviewCadence: 'daily',
    lastUpdated: '2026-07-26'
  },
  {
    id: 'ent_03',
    title: 'Sesión Gimnasio Min-Max + Calistenia Anillas',
    domain: 'fitness',
    status: 'planned',
    phase: 'fase-1',
    tags: ['#min-max', '#nippard', '#anillas', '#hsr'],
    originDocuments: [
      { title: 'plan_fitness.md', filename: 'plan_fitness.md', path: 'investigacion/plan_fitness.md' },
      { title: 'The Min-Max Program', filename: 'The_Min-Max_Program.pdf', path: 'investigacion/The_Min-Max_Program.pdf' }
    ],
    rationale: 'Estimulo hipertrófico y fuerza con bajo volumen y alta intención protegiendo hombro/codo izquierdo.',
    whyThisExists: 'Salud física, regulación dopaminérgica y prevención de recaídas articulares.',
    energyRequired: 'high',
    durationMinutes: 60,
    minViableVersion: '3 series de Spanish Squats + 2 series de fondos en anillas en casa (15 min).',
    normalVersion: 'Sesión completa de 45 min en gym con 1 serie efectiva por ejercicio RPE 7.',
    extendedVersion: 'Sesión de 60 min con trabajo de skills de Handstand.',
    clinicalConstraints: ['Usar anillas en empujes para rotación natural', 'Tempo HSR 3-0-3 obligatorio', 'Dolor < 3/10'],
    reviewCadence: 'weekly',
    lastUpdated: '2026-07-26'
  }
];
