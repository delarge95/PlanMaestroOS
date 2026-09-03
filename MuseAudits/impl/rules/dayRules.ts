// nutritionRules + clinicalRules — seeds display-only/suggest (nunca auto-aplican).
// Nutrición: proteína/kcal/hidratación vs targets de kcalEstimator (31 §31.3).
// Clínico: paráfrasis conductual + disclaimer + derivación, jamás diagnóstico.
// Destinos: src/lib/rules/nutrition/*, src/lib/rules/clinical/*

export interface NutritionDay {
  proteinG: number;
  kcalIn: number;
  kcalOut: number; // TDEE + quemado
  waterMl: number;
  weightKg: number;
  goal: 'deficit' | 'mantenimiento' | 'volumen';
  femaleLuteal: boolean;
}

export interface SeedEval {
  ruleId: string;
  status: 'ok' | 'warning' | 'not-applicable';
  message: string;
}

export function evaluateNutritionDay(d: NutritionDay): SeedEval[] {
  const out: SeedEval[] = [];
  const protMin = d.weightKg * 1.6;
  out.push(d.proteinG < protMin
    ? { ruleId: 'nutri:protein-floor', status: 'warning', message: `Proteína ${d.proteinG}g bajo mínimo ${Math.round(protMin)}g (1.6g/kg).` }
    : { ruleId: 'nutri:protein-floor', status: 'ok', message: `Proteína ${d.proteinG}g en rango.` });
  const balance = d.kcalIn - d.kcalOut + (d.femaleLuteal ? 75 : 0);
  const tol = d.kcalOut * 0.1;
  const expect = d.goal === 'deficit' ? -500 : d.goal === 'volumen' ? 300 : 0;
  out.push(Math.abs(balance - expect) > tol + 300
    ? { ruleId: 'nutri:kcal-balance', status: 'warning', message: `Balance ${Math.round(balance)} kcal lejos del objetivo ${d.goal} (display-only, no auto-ajusta).` }
    : { ruleId: 'nutri:kcal-balance', status: 'ok', message: `Balance ${Math.round(balance)} kcal coherente con ${d.goal}.` });
  const waterMin = d.weightKg * 35;
  out.push(d.waterMl < waterMin
    ? { ruleId: 'nutri:hydration', status: 'warning', message: `Agua ${d.waterMl}ml bajo ${Math.round(waterMin)}ml (35ml/kg).` }
    : { ruleId: 'nutri:hydration', status: 'ok', message: 'Hidratación en rango.' });
  return out;
}

export interface ClinicalDay {
  ruminationMin: number;
  sleepHours: number;
  exposuresMissedDays: number;
}

export const CLINICAL_DISCLAIMER = 'Apoyo conductual, no diagnóstico ni tratamiento. Si empeora, derivación profesional.';

export function evaluateClinicalDay(d: ClinicalDay): SeedEval[] {
  return [
    d.ruminationMin > 10
      ? { ruleId: 'clin:rumination-cap', status: 'warning', message: `Rumia ${d.ruminationMin} min: protocolo 10 min + dividir en 3 pasos. ${CLINICAL_DISCLAIMER}` }
      : { ruleId: 'clin:rumination-cap', status: 'ok', message: 'Rumia contenida.' },
    d.sleepHours < 6
      ? { ruleId: 'clin:sleep-floor', status: 'warning', message: `Sueño ${d.sleepHours}h: hoy modo mínimo viable. ${CLINICAL_DISCLAIMER}` }
      : { ruleId: 'clin:sleep-floor', status: 'ok', message: 'Sueño suficiente.' },
    d.exposuresMissedDays >= 2
      ? { ruleId: 'clin:exposure-nudge', status: 'warning', message: `Exposición pendiente ${d.exposuresMissedDays} días: micro-paso de 10 min o mover sin culpa. ${CLINICAL_DISCLAIMER}` }
      : { ruleId: 'clin:exposure-nudge', status: 'ok', message: 'Exposición al día.' },
  ];
}
