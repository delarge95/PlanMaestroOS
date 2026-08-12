// src/lib/fitness/analyticsUtils.ts

export type Metric = 'volume' | 'e1rm' | 'maxWeight' | 'sets' | 'reps';
export type FilterType = 'all' | 'exercise' | 'muscleGroup';
export type Granularity = 'week' | 'day';
export type ChartType = 'bar' | 'line';

export interface FlatLogEntry {
  weekId: string;
  dayId: string;
  exName: string;
  timestamp?: string;
  reps: number;
  weight: number;
  programId?: string;
}

export interface ChartDataPoint {
  label: string;
  value: number;
  timestamp?: string;
  metaKey?: string;
  isMax?: boolean;
  isMin?: boolean;
}

export const MUSCLE_GROUP_MAP: Record<string, string[]> = {
  Legs: ['Quadriceps', 'Hamstrings', 'Glutes', 'Calves', 'Adductors'],
  Chest: ['Pectoral Region', 'Pectoralis Major', 'Pectoralis Minor'],
  Back: ['Latissimus Dorsi', 'Trapezius', 'Rhomboids', 'Erector Spinae', 'Teres Major'],
  Shoulders: ['Anterior Deltoid', 'Lateral Deltoid', 'Posterior Deltoid', 'Rotator Cuff'],
  Arms: ['Biceps Brachii', 'Brachialis', 'Triceps Brachii', 'Brachioradialis', 'Wrist Flexors'],
  Core: ['Rectus Abdominis', 'Obliques', 'Iliopsoas']
};

export function getCleanExerciseName(name: string): string {
  if (!name) return '';
  return name.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
}

/**
 * Cálculo del 1RM Estimado usando la fórmula Epley
 */
export function calculateE1RM(weight: number, reps: number): number {
  if (weight <= 0 || reps <= 0) return 0;
  if (reps === 1) return weight;
  return Math.round(weight * (1 + reps / 30) * 10) / 10;
}
