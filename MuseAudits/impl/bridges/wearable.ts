// wearable — contrato WearableDay + fusión con registro manual (archivo 21 §21.3).
// Principio: el sensor confirma, no sustituye (manual no-nulo gana; sensor rellena huecos).
// Destino: src/data/contracts/wearable.ts + userStateFeed.wearableToDailyLogs

export interface WearableDay {
  dateIso: string; // YYYY-MM-DD
  steps?: number;
  restingHr?: number;
  hrv?: number; // ms (RMSSD)
  sleepMin?: number;
  sleepScore?: number; // 0..100
  weightKg?: number;
  vo2max?: number;
}

export interface DailyLogLite {
  dateIso: string;
  steps?: number;
  restingHr?: number;
  hrv?: number;
  sleepMin?: number;
  weightKg?: number;
  source: 'manual' | 'sensor' | 'merged';
}

function num(v: unknown): number | undefined {
  return typeof v === 'number' && Number.isFinite(v) && v >= 0 ? v : undefined;
}

/** Valida rangos fisiológicos plausibles; devuelve día limpio o null. */
export function validateWearableDay(d: WearableDay): WearableDay | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(d.dateIso)) return null;
  const out: WearableDay = { dateIso: d.dateIso };
  const steps = num(d.steps);
  if (steps !== undefined && steps <= 100_000) out.steps = Math.round(steps);
  const rhr = num(d.restingHr);
  if (rhr !== undefined && rhr >= 30 && rhr <= 110) out.restingHr = rhr;
  const hrv = num(d.hrv);
  if (hrv !== undefined && hrv <= 300) out.hrv = hrv;
  const sleep = num(d.sleepMin);
  if (sleep !== undefined && sleep <= 1440) out.sleepMin = Math.round(sleep);
  const score = num(d.sleepScore);
  if (score !== undefined && score <= 100) out.sleepScore = Math.round(score);
  const w = num(d.weightKg);
  if (w !== undefined && w >= 30 && w <= 300) out.weightKg = Math.round(w * 10) / 10;
  const v = num(d.vo2max);
  if (v !== undefined && v >= 15 && v <= 90) out.vo2max = v;
  return out;
}

/** Fusión manual+sensors por fecha: manual gana campo a campo. */
export function mergeDailyLogs(manual: DailyLogLite[], sensor: WearableDay[]): DailyLogLite[] {
  const byDate = new Map<string, DailyLogLite>();
  for (const m of manual) byDate.set(m.dateIso, { ...m, source: 'manual' });
  for (const sRaw of sensor) {
    const s = validateWearableDay(sRaw);
    if (!s) continue;
    const prev = byDate.get(s.dateIso);
    if (!prev) {
      byDate.set(s.dateIso, {
        dateIso: s.dateIso, steps: s.steps, restingHr: s.restingHr,
        hrv: s.hrv, sleepMin: s.sleepMin, weightKg: s.weightKg, source: 'sensor',
      });
    } else {
      byDate.set(s.dateIso, {
        dateIso: s.dateIso,
        steps: prev.steps ?? s.steps,
        restingHr: prev.restingHr ?? s.restingHr,
        hrv: prev.hrv ?? s.hrv,
        sleepMin: prev.sleepMin ?? s.sleepMin,
        weightKg: prev.weightKg ?? s.weightKg,
        source: prev.source === 'manual' ? 'merged' : prev.source,
      });
    }
  }
  return [...byDate.values()].sort((a, b) => a.dateIso.localeCompare(b.dateIso));
}
