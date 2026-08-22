// src/data/fitness/nutrition/types.ts — Contratos del módulo de nutrición deportiva (AG-NUTRI)
// Dominio OWN de AG-NUTRI. Ningún número en UI sin ruleId + cita (ver rag/nutrition.json).

export type Sex = 'male' | 'female';

export type Goal = 'deficit' | 'maintenance' | 'surplus';

export type ActivityLevel = 'light' | 'moderate' | 'heavy';

export type Confidence = 'explicit' | 'inferred' | 'qualitative';

/** Cita de una regla del RAG (rag/nutrition.json). */
export interface RuleCitation {
  ruleId: string;
  /** Título corto de la fuente (p.ej. "NSCA Essentials 4ª ed (2016)"). */
  source: string;
  /** Cita capítulo/página exacta (página impresa). */
  locator: string;
  /** Enunciado parafraseado de la regla. */
  statement: string;
  confidence: Confidence;
}

/** Target numérico con su(s) regla(s) de soporte. */
export interface TargetResult {
  /** Etiqueta legible del target (p.ej. "Energía diaria"). */
  label: string;
  /** Valor central recomendado. */
  value: number;
  /** Rango citado (mínimo). */
  min?: number;
  /** Rango citado (máximo). */
  max?: number;
  unit: string;
  /** Detalle de cálculo para mostrar bajo el número. */
  detail: string;
  /** ¿Por qué? → reglas que sustentan el target. */
  why: RuleCitation[];
}

/** Franja del día tipo (sin recetas: solo macros y timing). */
export interface DaySlot {
  id: string;
  label: string;
  /** Hora orientativa (formato libre, alineado al grid del usuario). */
  time: string;
  /** Objetivo principal de la franja en una línea. */
  focus: string;
  /** Detalle numérico de la franja (con citas en cada línea). */
  lines: Array<{ text: string; why: RuleCitation[] }>;
}

/** Inputs locales del usuario (persistidos en 'nutrition-local-v1' hasta que exista UserState de CORE). */
export interface NutritionInputs {
  weightKg: number;
  sex: Sex;
  goal: Goal;
  /** Horas de entrenamiento por semana (todas las sesiones). */
  trainingHoursPerWeek: number;
  /** Edad opcional (ajusta dosis de proteína post-entreno ≥40 g en 50+). */
  ageYears?: number;
}
