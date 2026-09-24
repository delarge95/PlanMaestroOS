// src/lib/prediction/oneRm.ts — M1: predicción de 1RM (puro, sin DOM).
//
// Fórmulas citadas en rag/prediction.json chunk [pred-1rm-epley-brzycki]:
//   Epley  : 1RM = peso × (1 + reps/30)          — más precisa 1-10 reps
//   Brzycki: 1RM = peso / (1.0278 − 0.0278×reps)  — 2-10 reps
// Ajuste por RIR [pred-1rm-rir-adjustment]: reps_efectivas = reps + RIR.
// Precisión por rango [pred-1rm-accuracy-table]: alta ≤6 reps, media 7-10,
// baja >10. El output SIEMPRE es "estimado" (±5% en el mejor caso).

export interface OneRmInput {
  /** Peso levantado en kg. */
  weightKg: number;
  /** Reps completadas. */
  reps: number;
  /** Reps en reserva al fallo (0 = fallo). Default 0. */
  rir?: number;
}

export interface OneRmResult {
  /** 1RM estimado (promedio Epley+Brzycki), redondeado a 0.5 kg. */
  estimatedKg: number;
  epleyKg: number;
  brzyckiKg: number;
  /** Reps efectivas usadas (reps + RIR). */
  effectiveReps: number;
  /** Alta ≤6, media 7-10, baja >10 — según [pred-1rm-accuracy-table]. */
  confidence: 'alta' | 'media' | 'baja';
  basis: string;
}

/** Epley: peso × (1 + reps/30). */
export function epley(weightKg: number, reps: number): number {
  return weightKg * (1 + reps / 30);
}

/** Brzycki: peso / (1.0278 − 0.0278 × reps). */
export function brzycki(weightKg: number, reps: number): number {
  return weightKg / (1.0278 - 0.0278 * reps);
}

function confidenceFor(effectiveReps: number): OneRmResult['confidence'] {
  if (effectiveReps <= 6) return 'alta';
  if (effectiveReps <= 10) return 'media';
  return 'baja';
}

const roundHalf = (n: number) => Math.round(n * 2) / 2;

/** Predice 1RM desde UN set. Retorna null si los inputs no permiten estimar. */
export function predictOneRm(input: OneRmInput): OneRmResult | null {
  const { weightKg, reps, rir = 0 } = input;
  const effectiveReps = reps + rir;
  if (weightKg <= 0 || reps <= 0 || effectiveReps > 15) return null; // fuera de rango fiable

  const ep = epley(weightKg, effectiveReps);
  const br = brzycki(weightKg, effectiveReps);
  if (!Number.isFinite(ep) || !Number.isFinite(br) || br <= 0) return null;

  return {
    estimatedKg: roundHalf((ep + br) / 2),
    epleyKg: roundHalf(ep),
    brzyckiKg: roundHalf(br),
    effectiveReps,
    confidence: confidenceFor(effectiveReps),
    basis: 'Promedio Epley+Brzycki con ajuste RIR [pred-1rm-epley-brzycki + pred-1rm-rir-adjustment] — estimado, no medición',
  };
}

/** Mejor 1RM estimado desde UNA lista de sets (elige el de mayor confianza). */
export function bestOneRm(sets: OneRmInput[]): OneRmResult | null {
  const results = sets.map(predictOneRm).filter((r): r is OneRmResult => r !== null);
  if (results.length === 0) return null;
  const order = { alta: 0, media: 1, baja: 2 } as const;
  return results.sort((a, b) => order[a.confidence] - order[b.confidence] || b.estimatedKg - a.estimatedKg)[0];
}

/**
 * 1RM agregado por ejercicio desde el historial crudo de la app.
 * Lee el shape canónico de fitapp_workout_history (completedSets con weight/reps).
 */
export function predictOneRmFromHistory(
  exercises: Array<{ name: string; completedSets?: Array<{ weight: number; reps: number; rpe?: number }> }>,
): Array<{ name: string; result: OneRmResult }> {
  const byName = new Map<string, OneRmInput[]>();
  for (const ex of exercises) {
    for (const set of ex.completedSets ?? []) {
      const w = Number(set.weight) || 0;
      const r = Number(set.reps) || 0;
      if (w <= 0 || r <= 0) continue;
      // RIR derivado de RPE (RPE 10 = RIR 0), clamp 0-5
      const rir = set.rpe != null ? Math.min(5, Math.max(0, Math.round(10 - set.rpe))) : 0;
      const list = byName.get(ex.name) ?? [];
      list.push({ weightKg: w, reps: r, rir });
      byName.set(ex.name, list);
    }
  }
  const out: Array<{ name: string; result: OneRmResult }> = [];
  for (const [name, sets] of byName) {
    const best = bestOneRm(sets);
    if (best) out.push({ name, result: best });
  }
  return out.sort((a, b) => b.result.estimatedKg - a.result.estimatedKg);
}
