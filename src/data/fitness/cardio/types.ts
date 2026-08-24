// src/data/fitness/cardio/types.ts — Contratos de la sección Cardio (AG-CARDIO)
// Regla dura: NINGÚN número en UI sin cita (sourceId + locator). Ver rag/cardio.json.

export type DisciplineId = 'running' | 'biking' | 'spinning' | 'walking';

export type ApproachId = 'fat-burn' | 'muscular-endurance' | 'max-speed' | 'power-hit';

export type Difficulty = 'principiante' | 'intermedio' | 'avanzado';

export type Confidence = 'explicit' | 'inferred' | 'qualitative';

/** Cita obligatoria para cualquier cifra mostrada. */
export interface Citation {
  /** sourceId del rag/cardio/manifest (p.ej. 'daniels-running-formula-4ed'). */
  sourceId: string;
  /** Capítulo/página/tabla exacta. */
  locator: string;
  /** Título corto legible de la fuente. */
  sourceTitle: string;
  statement: string;
  confidence: Confidence;
}

/** Intensidad de un bloque: zona Daniels, %FTP, %HRmax o METs — siempre con cita. */
export interface IntensitySpec {
  /** Descripción corta legible (p.ej. "Zona E · 59–74% VO2max"). */
  label: string;
  /** %HRmax opcional (rango). */
  pctHrMax?: [number, number];
  /** %FTP opcional (rango, solo bici/spinning). */
  pctFtp?: [number, number];
  /** METs de referencia del bloque (para estimador kcal). */
  mets?: number;
  why: Citation[];
}

/** Bloque de una sesión (calentamiento / intervalo / recuperación / enfriamiento...). */
export interface SessionBlock {
  id: string;
  /** Tipo de bloque. */
  kind: 'warmup' | 'work' | 'recovery' | 'cooldown';
  name: string;
  /** Duración en minutos (bloque completo o por repetición según `structure`). */
  durationMin: number;
  /** Repeticiones del bloque (intervalos). */
  repeats?: number;
  /** Duración de la recuperación entre repeticiones, si aplica. */
  restMin?: number;
  intensity: IntensitySpec;
  /** Cómo modificar el bloque de forma segura (con límites citados). */
  modification?: { guidance: string; why: Citation[] };
}

export interface CardioPreset {
  id: string;
  disciplineId: DisciplineId;
  approachId: ApproachId;
  name: string;
  /** Duración total en minutos. */
  totalMin: number;
  difficulty: Difficulty;
  /** Resumen de una línea. */
  summary: string;
  /** Sesión desglosada bloque a bloque. */
  blocks: SessionBlock[];
  /** METs promedio ponderado por duración (para estimador kcal de AG-NUTRI). */
  avgMets: number;
  /** Justificación científica del preset completo. */
  why: Citation[];
  /** Los presets son plantillas: SIEMPRE editables como copia local. */
  editable: true;
}

export interface Discipline {
  id: DisciplineId;
  name: string;
  /** METs de referencia a intensidad moderada (cita obligatoria). */
  typicalMets: { value: number; why: Citation[] };
  /** Rango METs según intensidad. */
  metsRange: [number, number];
  description: string;
  why: Citation[];
}

export interface Approach {
  id: ApproachId;
  name: string;
  /** Descripción científica del enfoque. */
  description: string;
  /** Cuándo usar este enfoque. */
  whenToUse: string;
  why: Citation[];
}

/** Preset aplanado consumible por el estimador kcal de AG-NUTRI (contrato de export). */
export interface PresetWithMet {
  presetId: string;
  name: string;
  disciplineId: DisciplineId;
  totalMin: number;
  /** METs promedio ponderado por bloques. */
  avgMets: number;
  metsSource: string;
  citation: { sourceId: string; locator: string };
}
