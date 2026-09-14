// src/lib/fitness/exerciseKcal.ts — Estimación de kcal por ejercicio de fuerza.
//
// Modelo MET (Compendium of Physical Activities, Ainsworth 2011 — valores de
// resistance training 3.5–6.0 MET) ajustado por dos variables que pide el
// usuario: ESFUERZO (RIR→RPE) y MASA MUSCULAR implicada (grandes grupos
// elevan el gasto). §0.1: estimación EXPLÍCITA (inferred), no medición.
//
//   kcal/min = MET × 3.5 × pesoKg / 200
//   duración = series × (reps × 4s + descanso) / 60

export type MuscleSize = 'large' | 'medium' | 'small';

/** Clasificación por grupos (heurística documentada; piernas/espalda = large). */
const LARGE = ['quadriceps', 'glute', 'hamstring', 'latissimus', 'chest', 'pector', 'back', 'leg', 'squat', 'deadlift', 'hip'];
const SMALL = ['biceps', 'triceps', 'forearm', 'wrist', 'calf', 'neck', 'finger', 'shrug', 'lateral', 'delt'];

export function classifyMuscleSize(muscleGroups: string[]): MuscleSize {
  const t = muscleGroups.join(' ').toLowerCase();
  if (LARGE.some((k) => t.includes(k))) return 'large';
  if (SMALL.some((k) => t.includes(k))) return 'small';
  return 'medium';
}

/** MET base del resistance training ajustado por esfuerzo percibido. */
export function metFromRpe(rpe: number): number {
  // RPE 6 → 3.5 MET (ligero) … RPE 10 → 6.0 MET (máximo), lineal por tramos.
  const clamped = Math.min(10, Math.max(4, rpe));
  return 3.5 + ((clamped - 6) / 4) * 2.5;
}

const SIZE_FACTOR: Record<MuscleSize, number> = { large: 1.15, medium: 1.0, small: 0.9 };

export interface ExerciseKcalSpec {
  series: number;
  reps: number;
  /** RPE 4–10 (se deriva de RIR: RPE = 10 − RIR). */
  rpe: number;
  muscleGroups: string[];
  /** Descanso entre series en segundos (default 120). */
  restSeconds?: number;
}

export interface ExerciseKcalInput extends ExerciseKcalSpec {
  /** Peso corporal del usuario (kg). */
  bodyWeightKg: number;
}

export interface ExerciseKcalResult {
  kcal: number;
  minutes: number;
  met: number;
  muscleSize: MuscleSize;
  basis: string;
}

/** kcal estimadas de UN ejercicio (serie×reps al RPE dado). */
export function estimateExerciseKcal(input: ExerciseKcalInput): ExerciseKcalResult {
  const rest = input.restSeconds ?? 120;
  const secondsPerRep = 4; // concéntrica+excéntrica estándar
  const minutes = (input.series * (input.reps * secondsPerRep + rest)) / 60;
  const size = classifyMuscleSize(input.muscleGroups);
  const met = metFromRpe(input.rpe) * SIZE_FACTOR[size];
  const kcal = (met * 3.5 * input.bodyWeightKg * minutes) / 200;
  return {
    kcal: Math.round(kcal * 10) / 10,
    minutes: Math.round(minutes * 10) / 10,
    met: Math.round(met * 10) / 10,
    muscleSize: size,
    basis: 'Compendium of Physical Activities (resistance training 3.5–6 MET) × factor de masa muscular — estimación inferred, no medición',
  };
}

/** Total de una sesión (suma de ejercicios) — inyecta el peso a cada spec. */
export function estimateSessionKcal(exercises: ExerciseKcalSpec[], bodyWeightKg: number): { kcal: number; minutes: number } {
  const results = exercises.map((e) => estimateExerciseKcal({ ...e, bodyWeightKg }));
  return {
    kcal: Math.round(results.reduce((n, r) => n + r.kcal, 0)),
    minutes: Math.round(results.reduce((n, r) => n + r.minutes, 0)),
  };
}
