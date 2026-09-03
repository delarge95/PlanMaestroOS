// painLog — seguimiento 7 días + regla de derivación (archivo 18 §18.4).
// Regla: empeora 2 días seguidos O sin mejora en 7 días → derivación (no más auto-ajuste).

export interface PainEntry {
  dateIso: string; // YYYY-MM-DD
  zone: string;
  eva: number; // 0..10
}

export type PainTrend = 'improving' | 'stable' | 'worsening' | 'insufficient-data';

/** Upsert por (fecha, zona). Tope 30 entradas por zona (como clinicalStore). */
export function logPain(log: PainEntry[], entry: PainEntry): PainEntry[] {
  const next = log.filter((e) => !(e.dateIso === entry.dateIso && e.zone === entry.zone));
  next.push(entry);
  const byZone = new Map<string, PainEntry[]>();
  for (const e of next) byZone.set(e.zone, [...(byZone.get(e.zone) ?? []), e]);
  const out: PainEntry[] = [];
  for (const list of byZone.values()) {
    out.push(...list.sort((a, b) => a.dateIso.localeCompare(b.dateIso)).slice(-30));
  }
  return out.sort((a, b) => a.dateIso.localeCompare(b.dateIso) || a.zone.localeCompare(b.zone));
}

export function zoneSeries(log: PainEntry[], zone: string): PainEntry[] {
  return log.filter((e) => e.zone === zone).sort((a, b) => a.dateIso.localeCompare(b.dateIso));
}

/** Tendencia con los últimos 3 registros: 2 deltas del mismo signo deciden. */
export function painTrend(log: PainEntry[], zone: string): PainTrend {
  const s = zoneSeries(log, zone);
  if (s.length < 3) return 'insufficient-data';
  const d1 = s[s.length - 2].eva - s[s.length - 3].eva;
  const d2 = s[s.length - 1].eva - s[s.length - 2].eva;
  if (d1 > 0 && d2 > 0) return 'worsening';
  if (d1 < 0 && d2 < 0) return 'improving';
  return 'stable';
}

export interface ReferralDecision {
  refer: boolean;
  reason: string;
}

/** Derivación: 2 días empeorando, o 7 días sin mejora (último EVA >= primero), o EVA >= 8. */
export function referralDue(log: PainEntry[], zone: string): ReferralDecision {
  const s = zoneSeries(log, zone);
  if (s.length === 0) return { refer: false, reason: 'sin registros' };
  const last = s[s.length - 1];
  if (last.eva >= 8) return { refer: true, reason: `EVA ${last.eva} >= 8: derivación inmediata` };
  if (painTrend(log, zone) === 'worsening') {
    return { refer: true, reason: 'Empeora 2 días seguidos: derivación, fin del auto-ajuste' };
  }
  if (s.length >= 7) {
    const week = s.slice(-7);
    if (week[week.length - 1].eva >= week[0].eva) {
      return { refer: true, reason: 'Sin mejora en 7 días: derivación profesional' };
    }
  }
  return { refer: false, reason: 'en seguimiento' };
}
