import { LEGACY_RATE_CARD_V0, RATE_CARD_V1 } from './rateCard';
import {
  LEVEL_IDS,
  type EstimateResult,
  type LevelId,
  type RateCard,
  type ServiceDefinition,
} from './types';

export function ceilTo(value: number, step: number): number {
  return Math.ceil(value / step) * step;
}

export function floorTo(value: number, step: number): number {
  return Math.floor(value / step) * step;
}

function legacyTramoStep(value: number): number {
  if (value < 500) return 10;
  if (value <= 2000) return 50;
  return 100;
}

export function roundLegacy(value: number, isMax: boolean): number {
  const step = legacyTramoStep(value);
  return isMax ? ceilTo(value, step) : floorTo(value, step);
}

export interface EstimateOptions {
  card?: RateCard;
  includeOptionalIds?: string[];
}

export function estimateService(
  service: ServiceDefinition,
  level: LevelId,
  options: EstimateOptions = {},
): EstimateResult {
  const card = options.card ?? RATE_CARD_V1;
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
        : roundLegacy(rawCostMin, false);
    const costMax =
      card.roundingMode === 'ceil-both'
        ? ceilTo(rawCostMax, card.roundingStepUsd)
        : roundLegacy(rawCostMax, true);

    lines.push({
      subtaskId: subtask.id,
      hoursMin: range.min,
      hoursMax: range.max,
      costMin,
      costMax,
    });
  }

  const subtotalMin =
    card.roundingMode === 'ceil-both'
      ? ceilTo(hoursMin * band.minUsdPerHour, card.roundingStepUsd)
      : roundLegacy(hoursMin * band.minUsdPerHour, false);
  const subtotalMax =
    card.roundingMode === 'ceil-both'
      ? ceilTo(hoursMax * band.maxUsdPerHour, card.roundingStepUsd)
      : roundLegacy(hoursMax * band.maxUsdPerHour, true);

  return {
    serviceId: service.id,
    level,
    hoursMin,
    hoursMax,
    costMin: Math.max(subtotalMin, card.minProjectUsd),
    costMax: Math.max(subtotalMax, card.minProjectUsd),
    lines,
  };
}

export function estimateWithLevels(
  service: ServiceDefinition,
  levelBySubtaskId: Record<string, LevelId>,
  options: EstimateOptions = {},
): EstimateResult {
  const card = options.card ?? RATE_CARD_V1;
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
          : roundLegacy(range.min * band.minUsdPerHour, false),
      costMax:
        card.roundingMode === 'ceil-both'
          ? ceilTo(range.max * band.maxUsdPerHour, card.roundingStepUsd)
          : roundLegacy(range.max * band.maxUsdPerHour, true),
    });
  }

  const costMin =
    card.roundingMode === 'ceil-both' ? ceilTo(rawMin, card.roundingStepUsd) : roundLegacy(rawMin, false);
  const costMax =
    card.roundingMode === 'ceil-both' ? ceilTo(rawMax, card.roundingStepUsd) : roundLegacy(rawMax, true);

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

export { LEGACY_RATE_CARD_V0, RATE_CARD_V1 };
