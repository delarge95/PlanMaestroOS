// morningBriefing + minViable — ritual mañana (archivos 17/08, Gemini-08 rescate).
// Puro y testeado. El worker job buildMorningPlan consume esta forma.

export type Energy = 'high' | 'medium' | 'low' | 'crisis';

export interface BriefingInput {
  sleepHours: number;
  energy: Energy;
  painMaxEva: number;
  overdueCount: number;
  sessionToday?: string;
  vocabDue: number;
  careerAction?: string;
}

export interface Briefing {
  mode: 'normal' | 'extended' | 'min_viable';
  reason: string;
  top3: Array<{ domain: 'career' | 'fitness' | 'languages'; title: string; minutes: number }>;
  nudge: string;
}

export function morningBriefing(i: BriefingInput): Briefing {
  if (i.energy === 'low' || i.energy === 'crisis' || i.sleepHours < 5.5 || i.painMaxEva >= 7) {
    return {
      mode: 'min_viable',
      reason: `Modo mínimo viable (energía ${i.energy}, sueño ${i.sleepHours}h, EVA ${i.painMaxEva}).`,
      top3: [
        { domain: 'career', title: i.careerAction ?? 'Guardar 1 vacante en pipeline', minutes: 10 },
        { domain: 'fitness', title: 'Movilidad suave + 1 serie MEV por patrón', minutes: 15 },
        { domain: 'languages', title: '5 tarjetas de repaso', minutes: 3 },
      ],
      nudge: 'Hoy el objetivo es consistencia mínima. Mañana se empuja fuerte.',
    };
  }
  const extended = i.energy === 'high' && i.sleepHours >= 7.5 && i.painMaxEva <= 1;
  return {
    mode: extended ? 'extended' : 'normal',
    reason: extended ? 'Biometría óptima: día extendido.' : 'Día normal de rendimiento.',
    top3: [
      { domain: 'career', title: i.careerAction ?? `Liquidar ${i.overdueCount} vencidas`, minutes: extended ? 50 : 35 },
      { domain: 'fitness', title: i.sessionToday ?? 'Sesión del día', minutes: extended ? 75 : 60 },
      { domain: 'languages', title: `Repasar ${Math.min(i.vocabDue, 15)} tarjetas`, minutes: 15 },
    ],
    nudge: extended ? 'Día de empujar: volumen alto con técnica perfecta.' : 'Ejecuta el plan, registra todo.',
  };
}

export interface SessionExerciseLite {
  id: string;
  pattern: string;
  sets: number;
}

/** Rescate de inercia: 1 serie MEV por patrón principal (Israetel/Nippard). */
export function applyMinViable(exercises: SessionExerciseLite[]): SessionExerciseLite[] {
  const seen = new Set<string>();
  return exercises
    .filter((e) => {
      if (seen.has(e.pattern)) return false;
      seen.add(e.pattern);
      return true;
    })
    .map((e) => ({ ...e, sets: 1 }));
}
