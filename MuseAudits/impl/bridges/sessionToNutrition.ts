// sessionToNutrition — puente F1 (archivo 21 §21.1) como función pura.
// Hoy GuidedSessionRunner solo deja el snapshot para copiar a mano; esta función es
// lo que el guardado debe llamar ADEMÁS del historial: addActivity(toActivity(...)).
// Matemática en 31_matematica_formulas.md §3 (cota inferior + EPOC 10%).

export interface SnapshotExercise {
  id: string;
  sets: number;
  reps: number;
  loadKg?: number; // undefined = peso corporal
  rpe?: number;
  durationMin?: number;
}

export interface SessionSnapshotLite {
  dateIso: string;
  program: string;
  day: string;
  exercises: SnapshotExercise[];
  durationTotalMin: number;
}

export interface NutritionActivity {
  kind: 'strength' | 'met';
  minutes: number;
  kcal: number;
  citation: string;
  detail: string;
}

const REP_DISTANCE_M = 0.5; // default documentado (distancia media de rep)
const JOULES_PER_KCAL = 4184;
const EPOC_FACTOR = 1.1; // +10% (Maughan, inferred — ver §31)

/** Cota inferior honesta: trabajo mecánico + EPOC. Nunca inventa eficiencia. */
export function strengthKcal(ex: SnapshotExercise, bodyWeightKg?: number): number {
  const load = ex.loadKg ?? bodyWeightKg ?? 0;
  if (load <= 0 || ex.sets <= 0 || ex.reps <= 0) return 0;
  const joules = load * 9.81 * REP_DISTANCE_M * ex.sets * ex.reps;
  return (joules / JOULES_PER_KCAL) * EPOC_FACTOR;
}

export function sessionToActivity(
  snapshot: SessionSnapshotLite,
  bodyWeightKg?: number,
): NutritionActivity {
  const kcal = snapshot.exercises.reduce((s, e) => s + strengthKcal(e, bodyWeightKg), 0);
  return {
    kind: 'strength',
    minutes: snapshot.durationTotalMin,
    kcal: Math.round(kcal * 10) / 10,
    citation: 'kcalEstimator (METs/fuerza+EPOC, Maughan inferred)',
    detail: `${snapshot.program} ${snapshot.day}: ${snapshot.exercises.length} ejercicios`,
  };
}
