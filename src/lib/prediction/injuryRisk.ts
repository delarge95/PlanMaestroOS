// src/lib/prediction/injuryRisk.ts — M3: riesgo de lesión (puro, sin DOM).
//
// Fórmulas citadas en rag/prediction.json:
//   ACWR [pred-acwr-gabbett]: aguda(7d) / crónica(28d÷4). Sweet 0.8-1.3, >1.5 danger.
//   Monotonía [pred-foster-srpe]: media diaria / std diaria (7d). >2.0 = riesgo.
//   Score compuesto: cada bandera suma puntos (0-100). Bandera, no diagnóstico.

export interface DailyLoad {
  dateIso: string; // YYYY-MM-DD
  /** Carga de entrenamiento del día: Σ(RPE × minutos) o tonelaje. */
  load: number;
}

export interface InjuryRiskInput {
  /** Últimos 28 días de cargas diarias (ordenadas o no — el módulo ordena). */
  dailyLoads: DailyLoad[];
  /** Opcional: HRV z-score de hoy (del wearable). < −2 suma bandera. */
  hrvZScore?: number;
}

export interface InjuryRiskResult {
  /** 0-100 (mayor = más riesgo). Solo suma si hay datos suficientes. */
  score: number;
  level: 'bajo' | 'moderado' | 'alto' | 'insuficiente';
  acwr: number | null;
  monotonía: number | null;
  flags: string[];
  basis: string;
}

const dayDiff = (a: string, b: string) =>
  Math.round((new Date(b + 'T12:00:00').getTime() - new Date(a + 'T12:00:00').getTime()) / 86400000);

function std(nums: number[]): number {
  if (nums.length < 2) return 0;
  const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
  return Math.sqrt(nums.reduce((s, n) => s + (n - mean) ** 2, 0) / (nums.length - 1));
}

/** Calcula el riesgo compuesto. Determinista. */
export function calculateInjuryRisk(input: InjuryRiskInput): InjuryRiskResult {
  const basis = 'ACWR (Gabbett) + monotonía (Foster) + HRV z [pred-acwr-gabbett + pred-foster-srpe] — bandera de riesgo, no diagnóstico';

  const sorted = [...input.dailyLoads].sort((a, b) => a.dateIso.localeCompare(b.dateIso));
  if (sorted.length < 10) {
    return { score: 0, level: 'insuficiente', acwr: null, monotonía: null, flags: ['Menos de 10 días de datos'], basis };
  }

  const last = sorted[sorted.length - 1].dateIso;

  // Aguda: últimos 7 días (incluye hoy)
  const acute = sorted.filter((d) => dayDiff(d.dateIso, last) < 7).reduce((s, d) => s + d.load, 0);
  // Crónica: últimos 28 días
  const chronic28 = sorted.filter((d) => dayDiff(d.dateIso, last) < 28).reduce((s, d) => s + d.load, 0);
  const chronicWeekly = chronic28 / 4;
  const acwr = chronicWeekly > 0 ? acute / chronicWeekly : null;

  // Monotonía: últimos 7 días
  const last7 = sorted.filter((d) => dayDiff(d.dateIso, last) < 7).map((d) => d.load);
  const mean7 = last7.reduce((a, b) => a + b, 0) / (last7.length || 1);
  const std7 = std(last7);
  const monotonía = std7 > 0 ? mean7 / std7 : null;

  let score = 0;
  const flags: string[] = [];

  if (acwr !== null) {
    if (acwr > 1.5) { score += 60; flags.push(`ACWR ${acwr.toFixed(2)} > 1.5 — danger zone [pred-acwr-gabbett]`); }
    else if (acwr > 1.3) { score += 20; flags.push(`ACWR ${acwr.toFixed(2)} > 1.3 — fuera de sweet spot`); }
    else if (acwr < 0.8) { score += 15; flags.push(`ACWR ${acwr.toFixed(2)} < 0.8 — undertraining`); }
    else { flags.push(`ACWR ${acwr.toFixed(2)} en sweet spot 0.8-1.3`); }
  }

  if (monotonía !== null) {
    if (monotonía > 2.0) { score += 30; flags.push(`Monotonía ${monotonía.toFixed(2)} > 2.0 — riesgo overtraining [pred-foster-srpe]`); }
    else { flags.push(`Monotonía ${monotonía.toFixed(2)} OK (< 2.0)`); }
  }

  if (input.hrvZScore !== undefined && input.hrvZScore < -2) {
    score += 30;
    flags.push(`HRV z-score ${input.hrvZScore.toFixed(1)} < −2 — marcador de sobreentrenamiento`);
  } else if (input.hrvZScore !== undefined && input.hrvZScore < -1) {
    score += 15;
    flags.push(`HRV z-score ${input.hrvZScore.toFixed(1)} < −1 — levemente deprimida`);
  }

  score = Math.min(100, score);
  const level = score >= 60 ? 'alto' : score >= 30 ? 'moderado' : 'bajo';

  return { score, level, acwr, monotonía, flags, basis };
}
