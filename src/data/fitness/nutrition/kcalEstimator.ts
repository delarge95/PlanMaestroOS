// src/data/fitness/nutrition/kcalEstimator.ts â€” Estimador de kcal quemadas (AG-NUTRI ciclo 2, mandato usuario)
// Motor PURO sin DOM ni stores. Tres vÃ­as:
//   a) Actividad por METs: kcal = METs Ã— pesoKg Ã— horas (ecuaciÃ³n estÃ¡ndar ACSM/Compendium;
//      los METs SIEMPRE llegan con cita â€” presets de AG-CARDIO vÃ­a getPresetsWithMet() o entrada manual citada).
//   b) SesiÃ³n de fuerza: trabajo mecÃ¡nico aproximado (series Ã— reps Ã— carga Ã— distancia estimada)
//      convertido a kcal como COTA INFERIOR (1 kcal = 4.184 kJ exactos) + factor EPOC citado
//      (nutri-mau-epoc: +5â€“15%). Confianza 'inferred' marcada en todo el mÃ©todo.
//   c) Balance del dÃ­a: quemado estimado vs objetivo calÃ³rico.
// Nada de cifras sin cita: cada estimate lleva why[] con ruleId/cita; las asunciones propias quedan en detail.

import type { Confidence, RuleCitation } from './types';
import { toCitation, toChunkCitation } from './rules';

const G = 9.81;
const KCAL_PER_KJ = 1 / 4.184;

export const DEFAULT_REP_DISTANCE_M = 0.5;

/** Fuente estructural mÃ­nima que expone getPresetsWithMet() de AG-CARDIO (READ por contrato). */
export interface MetActivitySource {
  label: string;
  mets: number;
  minutes: number;
  /** Cita obligatoria del valor METs (fuente+locator); sin ella la entrada es qualitative y se etiqueta. */
  citation?: { source: string; locator: string };
}

export interface StrengthSessionInput {
  label: string;
  series: number;
  repsPerSeries: number;
  loadKg: number;
  /** Distancia vertical estimada de la carga por repeticiÃ³n (m). Default documentado: 0.5 m. */
  distanceMetersPerRep?: number;
}

export type BurnedActivityInput =
  | ({ kind: 'met' } & MetActivitySource)
  | ({ kind: 'strength' } & StrengthSessionInput);

export interface KcalEstimate {
  label: string;
  kcal: number;
  min: number;
  max: number;
  confidence: Confidence;
  detail: string;
  why: RuleCitation[];
}

const round1 = (n: number): number => Math.round(n * 10) / 10;

function citationFrom(sourceIdOrSource: string, locator: string): RuleCitation {
  const viaRules = (() => {
    try {
      return toCitation(sourceIdOrSource);
    } catch {
      return undefined;
    }
  })();
  if (viaRules && viaRules.locator === locator) return viaRules;
  return {
    ruleId: sourceIdOrSource,
    source: sourceIdOrSource,
    locator,
    statement: 'Valor METs del preset/actividad, tomado de la fuente citada por su propio mÃ³dulo.',
    confidence: 'inferred',
  };
}

/** a) Actividad cardiosaludosa por METs: kcal = METs Ã— kg Ã— horas. Requiere cita del MET (o queda qualitative). */
export function estimateKcalFromMetActivity(input: MetActivitySource & { weightKg: number }): KcalEstimate {
  const hours = input.minutes / 60;
  const kcal = input.mets * input.weightKg * hours;
  const cited = Boolean(input.citation);
  const why: RuleCitation[] = input.citation
    ? [citationFrom(input.citation.source, input.citation.locator)]
    : [];
  return {
    label: input.label,
    kcal: round1(kcal),
    min: round1(kcal * 0.9),
    max: round1(kcal * 1.1),
    confidence: cited ? 'inferred' : 'qualitative',
    detail:
      `${input.mets} METs Ã— ${input.weightKg} kg Ã— ${hours.toFixed(2)} h. EcuaciÃ³n ACSM/Compendium.` +
      (cited ? ' METs citados por el mÃ³dulo de origen.' : ' âš ï¸ Entrada manual SIN fuente: solo orientativa.'),
    why,
  };
}

/**
 * b) SesiÃ³n de fuerza por trabajo mecÃ¡nico (cota inferior) + EPOC citado.
 * Trabajo (kJ) = series Ã— reps Ã— carga(kg) Ã— distancia(m) Ã— g / 1000.
 * La conversiÃ³n directa Jâ†’kcal IGNORA eficiencia muscular y coste basal: es un piso deliberado.
 * Rango: EPOC +5â€“15% (Maughan chX, nutri-mau-epoc, confidence inferred).
 */
export function estimateKcalFromStrengthSession(input: StrengthSessionInput): KcalEstimate {
  const distance = input.distanceMetersPerRep ?? DEFAULT_REP_DISTANCE_M;
  const workKj = (input.series * input.repsPerSeries * input.loadKg * distance * G) / 1000;
  const floorKcal = Math.max(workKj * KCAL_PER_KJ, 0);
  return {
    label: input.label,
    kcal: round1(floorKcal * 1.1),
    min: round1(floorKcal * 1.05),
    max: round1(floorKcal * 1.15),
    confidence: 'inferred',
    detail:
      `Trabajo mecÃ¡nico: ${input.series}Ã—${input.repsPerSeries} reps Ã— ${input.loadKg} kg Ã— ${distance} m â‰ˆ ` +
      `${round1(workKj)} kJ (${Math.round(workKj * 1000)} J). Convertido como cota inferior (sin eficiencia muscular ni basal) ` +
      `y ajustado con EPOC +5â€“15%. MÃ©todo propio aproximado.`,
    why: [toCitation('nutri-mau-epoc')],
  };
}

/** Despacha según el tipo de entrada. El peso se aplica al ESTIMAR, no vive en la entrada persistida. */
export function estimateActivity(entry: BurnedActivityInput, weightKg: number): KcalEstimate {
  if (entry.kind === 'strength') {
    return estimateKcalFromStrengthSession(entry);
  }
  const { label, mets, minutes, citation } = entry;
  return estimateKcalFromMetActivity({ label, mets, minutes, citation, weightKg });
}

export interface DayBurnEstimate {
  totalKcal: number;
  minKcal: number;
  maxKcal: number;
  items: Array<KcalEstimate & { confidence: Confidence }>;
  /** true si alguna entrada careció de fuente (UI debe etiquetar el total como orientativo). */
  hasUnsourcedEntries: boolean;
}

/** Suma del día con rango agregado (min con min, max con max). */
export function estimateDayBurn(entries: BurnedActivityInput[], weightKg: number): DayBurnEstimate {
  const items = entries.map((e) => estimateActivity(e, weightKg));
  const sum = (pick: (e: KcalEstimate) => number): number =>
    round1(items.reduce((acc, e) => acc + pick(e), 0));
  return {
    totalKcal: sum((e) => e.kcal),
    minKcal: sum((e) => e.min),
    maxKcal: sum((e) => e.max),
    items,
    hasUnsourcedEntries: items.some((e) => e.confidence === 'qualitative'),
  };
}

export interface DailyBalanceResult {
  burnedKcal: number;
  targetKcal: number;
  /** kcal restantes para cerrar el objetivo del dÃ­a (negativo = superado el objetivo). */
  remainingKcal: number;
  detail: string;
  why: RuleCitation[];
}

/** c) Balance objetivo vs quemado estimado (contexto TDEE citado a Aragon ISSN 2017). */
export function dailyBalance(targetKcal: number, burn: DayBurnEstimate): DailyBalanceResult {
  const remaining = Math.round(targetKcal - burn.totalKcal);
  return {
    burnedKcal: burn.totalKcal,
    targetKcal: Math.round(targetKcal),
    remainingKcal: remaining,
    detail:
      `Objetivo ${Math.round(targetKcal)} kcal âˆ’ quemado estimado ${burn.totalKcal} kcal ` +
      `(rango ${burn.minKcal}â€“${burn.maxKcal}) = ${remaining} kcal restantes. El gasto por ejercicio es solo una parte del TDEE ` +
      `(EAT â‰ˆ5â€“15%; NEAT y TEF dominan el dÃ­a completo), asÃ­ que este balance NO sustituye la evoluciÃ³n semanal del peso.`,
    why: [toChunkCitation('aragon-issn-thermic-effect-and-adaptive-thermogenesis')],
  };
}
