import { LAUNCH_PROGRAM, LEGACY_RATE_CARD_V0, RATE_CARD_COP_V1 } from './rateCard';
import { PACKAGES } from './packages';
import {
  LEVEL_IDS,
  type Currency,
  type EstimateResult,
  type LevelId,
  type QuoteInput,
  type QuoteLine,
  type QuoteResult,
  type RateCard,
  type ServiceDefinition,
} from './types';

export function ceilTo(value: number, step: number): number {
  return Math.ceil(value / step) * step;
}

export function floorTo(value: number, step: number): number {
  return Math.floor(value / step) * step;
}

function tramoStepUsd(value: number): number {
  if (value < 500) return 10;
  if (value <= 2000) return 50;
  return 100;
}

function tramoStepCop(): number {
  return 1000;
}

export function roundLegacy(value: number, isMax: boolean, currency: Currency = 'USD'): number {
  const step = currency === 'COP' ? tramoStepCop() : tramoStepUsd(value);
  return isMax ? ceilTo(value, step) : floorTo(value, step);
}

export function cardFor(currency: Currency): RateCard {
  return currency === 'COP' ? RATE_CARD_COP_V1 : LEGACY_RATE_CARD_V0;
}

export interface EstimateOptions {
  card?: RateCard;
  includeOptionalIds?: string[];
  currency?: Currency;
}

export function estimateService(
  service: ServiceDefinition,
  level: LevelId,
  options: EstimateOptions = {},
): EstimateResult {
  const currency = options.currency ?? 'USD';
  const card = options.card ?? cardFor(currency);
  const included = new Set(options.includeOptionalIds ?? []);
  const band = card.bands[level];

  let hoursMin = 0;
  let hoursMax = 0;
  const lines = [];

  for (const subtask of service.subtasks) {
    if (subtask.optional && !included.has(subtask.id)) continue;
    if (subtask.appliesFrom && LEVEL_IDS.indexOf(level) < LEVEL_IDS.indexOf(subtask.appliesFrom)) {
      continue;
    }
    const range = subtask.hours[level];
    hoursMin += range.min;
    hoursMax += range.max;

    const rawCostMin = range.min * band.minUsdPerHour;
    const rawCostMax = range.max * band.maxUsdPerHour;
    const costMin =
      card.roundingMode === 'ceil-both'
        ? ceilTo(rawCostMin, card.roundingStepUsd)
        : roundLegacy(rawCostMin, false, currency);
    const costMax =
      card.roundingMode === 'ceil-both'
        ? ceilTo(rawCostMax, card.roundingStepUsd)
        : roundLegacy(rawCostMax, true, currency);

    lines.push({
      subtaskId: subtask.id,
      hoursMin: range.min,
      hoursMax: range.max,
      costMin,
      costMax,
    });
  }

  return finalize(hoursMin, hoursMax, band, card, {
    serviceId: service.id,
    level,
    lines,
  });
}

export function estimateWithLevels(
  service: ServiceDefinition,
  levelBySubtaskId: Record<string, LevelId>,
  options: EstimateOptions = {},
): EstimateResult {
  const currency = options.currency ?? 'USD';
  const card = options.card ?? cardFor(currency);
  const included = new Set(options.includeOptionalIds ?? []);

  let hoursMin = 0;
  let hoursMax = 0;
  let rawMin = 0;
  let rawMax = 0;
  const lines = [];

  for (const subtask of service.subtasks) {
    if (subtask.optional && !included.has(subtask.id)) continue;
    const level = levelBySubtaskId[subtask.id];
    if (!level) continue;
    const range = subtask.hours[level];
    const band = card.bands[level];
    hoursMin += range.min;
    hoursMax += range.max;
    rawMin += range.min * band.minUsdPerHour;
    rawMax += range.max * band.maxUsdPerHour;
    lines.push({
      subtaskId: subtask.id,
      hoursMin: range.min,
      hoursMax: range.max,
      costMin:
        card.roundingMode === 'ceil-both'
          ? ceilTo(range.min * band.minUsdPerHour, card.roundingStepUsd)
          : roundLegacy(range.min * band.minUsdPerHour, false, currency),
      costMax:
        card.roundingMode === 'ceil-both'
          ? ceilTo(range.max * band.maxUsdPerHour, card.roundingStepUsd)
          : roundLegacy(range.max * band.maxUsdPerHour, true, currency),
    });
  }

  const costMin =
    card.roundingMode === 'ceil-both' ? ceilTo(rawMin, card.roundingStepUsd) : roundLegacy(rawMin, false, currency);
  const costMax =
    card.roundingMode === 'ceil-both' ? ceilTo(rawMax, card.roundingStepUsd) : roundLegacy(rawMax, true, currency);

  return {
    serviceId: service.id,
    level: 'mixed',
    hoursMin,
    hoursMax,
    costMin: Math.max(costMin, card.minProjectUsd),
    costMax: Math.max(costMax, card.minProjectUsd),
    lines,
  };
}

function finalize(
  hoursMin: number,
  hoursMax: number,
  band: { minUsdPerHour: number; maxUsdPerHour: number },
  card: RateCard,
  base: { serviceId: string; level: LevelId | 'mixed'; lines: EstimateResult['lines'] },
): EstimateResult {
  const currency = card.currency;
  const subtotalMin =
    card.roundingMode === 'ceil-both'
      ? ceilTo(hoursMin * band.minUsdPerHour, card.roundingStepUsd)
      : roundLegacy(hoursMin * band.minUsdPerHour, false, currency);
  const subtotalMax =
    card.roundingMode === 'ceil-both'
      ? ceilTo(hoursMax * band.maxUsdPerHour, card.roundingStepUsd)
      : roundLegacy(hoursMax * band.maxUsdPerHour, true, currency);

  return {
    ...base,
    hoursMin,
    hoursMax,
    costMin: Math.max(subtotalMin, card.minProjectUsd),
    costMax: Math.max(subtotalMax, card.minProjectUsd),
  };
}

export { LEGACY_RATE_CARD_V0, RATE_CARD_COP_V1, RATE_CARD_V1 };

export interface ComputeQuoteOptions {
  getService(id: string): ServiceDefinition | undefined;
  batchDiscountPct?: (units: number) => number;
}

const PISO_PROYECTO: Record<Currency, number> = { USD: 100, COP: 400000 };

export function computeQuote(input: QuoteInput, opts: ComputeQuoteOptions): QuoteResult {
  const notesEs: string[] = [];
  const currency = input.currency;
  const card = cardFor(currency);
  const qty = Math.max(1, input.quantity ?? 1);
  const lines: QuoteLine[] = [];
  let hoursMin = 0;
  let hoursMax = 0;
  let rawSubMin = 0;
  let rawSubMax = 0;

  const accumulate = (refId: string, labelEs: string, est: EstimateResult, times: number) => {
    const levelKey = est.level === 'mixed' ? null : est.level;
    const band = levelKey ? card.bands[levelKey] : null;
    for (let u = 1; u <= times; u++) {
      for (const l of est.lines) {
        const rawM = l.hoursMin * (band?.minUsdPerHour ?? 0);
        const rawX = l.hoursMax * (band?.maxUsdPerHour ?? 0);
        rawSubMin += rawM;
        rawSubMax += rawX;
        lines.push({
          refId: `${refId}#${u}`,
          labelEs: `${labelEs} · ${l.subtaskId}`,
          hoursMin: l.hoursMin,
          hoursMax: l.hoursMax,
          costMin: l.costMin,
          costMax: l.costMax,
        });
      }
    }
    hoursMin += est.hoursMin * times;
    hoursMax += est.hoursMax * times;
    if (times > 1) notesEs.push(`Lote ${refId}: ×${times} — descuento aplicado sobre el subtotal global (01 §5), nunca dentro de las horas.`);
  };

  if (input.kind === 'service') {
    const svc = opts.getService(input.serviceId);
    if (!svc) throw new Error(`servicio desconocido: ${input.serviceId}`);
    accumulate(svc.id, svc.nameEs, estimateService(svc, input.level, { currency }), qty);
  } else {
    const pkg = PACKAGES.find((p) => p.id === input.packageId);
    if (!pkg) throw new Error(`paquete desconocido: ${input.packageId}`);
    for (const comp of pkg.componentes) {
      const svc = opts.getService(comp.serviceId);
      if (!svc) throw new Error(`servicio desconocido en paquete: ${comp.serviceId}`);
      const level = input.levelByComponent?.[comp.serviceId] ?? input.defaultLevel ?? comp.nivel;
      accumulate(svc.id, svc.nameEs, estimateService(svc, level, { currency }), comp.cantidad ?? 1);
    }
  }

  const subtotalMin = roundLegacy(rawSubMin, false, currency);
  const subtotalMax = roundLegacy(rawSubMax, true, currency);

  const m = input.modifiers ?? {};
  let pct = 0;
  if (m.firstClientLaunch && LAUNCH_PROGRAM.activo) {
    pct -= LAUNCH_PROGRAM.discountPct;
    notesEs.push(`Lanzamiento primeros clientes −${LAUNCH_PROGRAM.discountPct}%. ${LAUNCH_PROGRAM.alcanceEs}`);
  }
  if (m.recurringClient) pct -= 5;
  if (m.batchUnits && m.batchUnits > 1) {
    pct += opts.batchDiscountPct ? opts.batchDiscountPct(m.batchUnits) : -15;
  }
  if (m.critical24h) pct += 50;
  else if (m.urgent72h) pct += 25;

  const factor = 1 + pct / 100;
  const totalMin = Math.max(roundLegacy(subtotalMin * factor, false, currency), PISO_PROYECTO[currency]);
  const totalMax = Math.max(roundLegacy(subtotalMax * factor, true, currency), totalMin);

  if (m.firstClientLaunch) notesEs.push(`Programa primeros clientes activo: −${LAUNCH_PROGRAM.discountPct}% aplicado al subtotal.`);
  notesEs.push('Rango orientativo, no cotización. La cifra firme se cierra en SOW (01 §9).');

  return {
    input,
    currency,
    hoursMin,
    hoursMax,
    subtotalMin,
    subtotalMax,
    discountPctApplied: pct,
    totalMin,
    totalMax,
    lines,
    notesEs,
  };
}
