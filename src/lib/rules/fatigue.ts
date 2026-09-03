// fatigue — presupuesto RPE×min + interferencia (archivo 38). Puro.
// Destino: src/lib/rules/fitness/fatigue.ts

export type LoadDomain = 'strength' | 'skills' | 'cardio' | 'mma' | 'dance' | 'mobility';

export interface LoadSession {
  dateIso: string;
  domain: LoadDomain;
  avgRpe: number; // 1..10
  minutes: number;
  /** Horas desde la última sesión de fuerza (para I1). null = desconocido. */
  hoursSinceStrength?: number | null;
  toFailure?: boolean;
}

export interface FatigueEval {
  status: 'ok' | 'warning' | 'violation';
  totalLoad: number;
  ceiling: number;
  findings: string[];
}

export const DEFAULT_WEEKLY_CEILING = 2500;

const loadOf = (s: LoadSession): number => Math.max(0, s.avgRpe) * Math.max(0, s.minutes);

export function evaluateWeekFatigue(sessions: LoadSession[], ceiling = DEFAULT_WEEKLY_CEILING): FatigueEval {
  const findings: string[] = [];
  let status: FatigueEval['status'] = 'ok';
  const totalLoad = sessions.reduce((s, x) => s + loadOf(x), 0);

  if (totalLoad > ceiling) {
    status = 'violation';
    findings.push(`Load ${Math.round(totalLoad)} sobre techo ${ceiling}: semana de descarga −50% (I5).`);
  }

  for (const s of sessions) {
    // I1: cardio intenso pegado a fuerza
    if (s.domain === 'cardio' && s.avgRpe >= 7 && s.hoursSinceStrength !== null && s.hoursSinceStrength !== undefined && s.hoursSinceStrength < 6) {
      if (status === 'ok') status = 'warning';
      findings.push(`Cardio RPE ${s.avgRpe} a ${s.hoursSinceStrength}h de fuerza: separa ≥6h o baja a Zona 2 (I1).`);
    }
    // I3: skills al fallo
    if (s.domain === 'skills' && (s.toFailure || s.avgRpe >= 10)) {
      status = 'violation';
      findings.push(`Skill al fallo el ${s.dateIso}: prohibido — técnica primero (I3).`);
    }
  }

  // I2: skills programados con fatiga acumulada del día (>60% techo prorrateado ≈ 215/día)
  const byDay = new Map<string, number>();
  for (const s of sessions) byDay.set(s.dateIso, (byDay.get(s.dateIso) ?? 0) + loadOf(s));
  for (const s of sessions) {
    if (s.domain === 'skills' && (byDay.get(s.dateIso) ?? 0) > 1500 / 7) {
      if (status === 'ok') status = 'warning';
      findings.push(`Skills el ${s.dateIso} con fatiga alta: mover al inicio o a mañana (I2).`);
      break;
    }
  }

  return { status, totalLoad: Math.round(totalLoad), ceiling, findings };
}

/** Autocalibración del techo: adherencia <70% dos microciclos → −15%. */
export function recalibrateCeiling(ceiling: number, adherenceLast2: [number, number]): number {
  if (adherenceLast2[0] < 0.7 && adherenceLast2[1] < 0.7) return Math.round(ceiling * 0.85);
  return ceiling;
}
