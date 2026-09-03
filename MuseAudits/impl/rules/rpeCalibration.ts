// rpeCalibration — punto ciego A de Gemini (paradoja del RPE subjetivo).
// Regla seed: cada 4 semanas, 1 serie de comprobación al fallo técnico en un
// monoarticular seguro para recalibrar RIR percibido vs real.
// Destino: src/lib/rules/fitness/rpeCalibration.ts (formato DomainRule espejo).

export interface CalibrationState {
  lastCalibrationIso: string | null;
  todayIso: string;
  plannedMonoarticular: boolean; // hay slot seguro hoy (polea/banda)
}

export interface CalibrationEval {
  status: 'ok' | 'warning' | 'not-applicable';
  weeksSince: number | null;
  message: string;
}

export const RPE_CALIBRATION_WEEKS = 4;

export function weeksBetween(aIso: string, bIso: string): number {
  return Math.floor((Date.parse(bIso) - Date.parse(aIso)) / (7 * 86_400_000));
}

export function evaluateRpeCalibration(s: CalibrationState): CalibrationEval {
  if (s.lastCalibrationIso === null) {
    return {
      status: 'warning',
      weeksSince: null,
      message: 'Sin calibración registrada: programa 1 serie al fallo técnico en monoarticular seguro.',
    };
  }
  const w = weeksBetween(s.lastCalibrationIso, s.todayIso);
  if (w >= RPE_CALIBRATION_WEEKS && s.plannedMonoarticular) {
    return {
      status: 'warning',
      weeksSince: w,
      message: `Hace ${w} semanas sin calibrar RPE: serie de comprobación hoy (RIR real vs percibido).`,
    };
  }
  return { status: 'ok', weeksSince: w, message: `RPE calibrado hace ${w} semanas.` };
}

export const RPE_CALIBRATION_RULE_META = {
  id: 'fit:rpe-calibration',
  description: 'Recalibración periódica del RPE/RIR con serie al fallo técnico (monoarticular seguro).',
  sourceRef: { docId: 'nippard-fundamentals-hypertrophy', chapter: 'RPE/RIR' },
  confidence: 'inferred' as const,
  evidenceTier: 'expert-book' as const,
};
