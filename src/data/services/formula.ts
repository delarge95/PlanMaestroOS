import type { Currency, LevelId, QuoteResult, RateClass } from './types';
import { getRateCard, LAUNCH_DISCOUNT } from './rateCard';
import { SERVICES } from './catalogCore';
import type { ServiceDef } from './catalogCore';

function floorTo(v: number, step: number) { return Math.floor(v / step) * step; }
function ceilTo(v: number, step: number) { return Math.ceil(v / step) * step; }

export function getServiceById(id: string): ServiceDef | undefined {
  return SERVICES.find((s) => s.id === id);
}

export function computeQuote(
  serviceId: string,
  level: LevelId,
  currency: Currency,
  opts: { firstClientLaunch?: boolean; recurringClient?: boolean; batchUnits?: number; launchPct?: number } = {},
): QuoteResult | null {
  const svc = SERVICES.find((s) => s.id === serviceId);
  if (!svc) return null;

  const card = getRateCard(currency);
  let hMin = 0, hMax = 0, rawMin = 0, rawMax = 0;

  for (const st of svc.subtasks) {
    if (st.optional) continue;
    const range = st.hours[level];
    if (!range) continue;
    const rate = card.rates[st.rateClass as RateClass];
    if (!rate) continue;
    hMin += range.min;
    hMax += range.max;
    rawMin += range.min * rate.min;
    rawMax += range.max * rate.max;
  }

  const notes: string[] = ['Rango orientativo, no cotizacion.'];
  const step = card.roundStep(rawMin);
  const subtotalMin = floorTo(rawMin, step);
  const subtotalMax = ceilTo(rawMax, step);

  let pct = 0;
  if (opts.firstClientLaunch && LAUNCH_DISCOUNT.activo) {
    pct -= opts.launchPct ?? LAUNCH_DISCOUNT.defaultPct;
  }
  if (opts.recurringClient) pct -= 5;
  if (opts.batchUnits && opts.batchUnits > 1) pct -= 15;

  const factor = 1 + pct / 100;
  const totalMin = Math.max(floorTo(subtotalMin * factor, step), card.minProject);
  const totalMax = Math.max(ceilTo(subtotalMax * factor, step), totalMin);

  return {
    serviceId: svc.id, serviceName: svc.nameEs, level, currency,
    hoursMin: hMin, hoursMax: hMax,
    subtotalMin, subtotalMax, discountPct: pct,
    totalMin, totalMax,
    entregaDias: svc.entregaDiasEs,
    entregables: svc.entregablesEs ?? [],
    notesEs: notes,
    noIncluye: svc.noIncluyeEs ?? [],
  };
}

export { LAUNCH_DISCOUNT, SERVICES, getRateCard };
