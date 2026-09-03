// Jobs con ENTRADAS REALES (hoy: console.log + 'Epic Games' quemado).
// Destino: worker/src/jobs/*. Puros y testeados; el runner fino añade IO.

export interface TaskLite {
  id: string;
  title: string;
  status: string; // 'Hecho' cierra
  dueDateIso?: string;
  area: string;
}

export interface MorningInput {
  dateIso: string;
  overdue: TaskLite[];
  todayCalendar: string[];
  energy: 'high' | 'medium' | 'low' | 'crisis';
  vocabDue: number;
  topCareerAction?: string;
}

export interface MorningDraft {
  mode: 'normal' | 'min_viable';
  top3: Array<{ domain: 'career' | 'fitness' | 'languages'; title: string; minutes: number }>;
  reason: string;
}

export function buildMorningPlan(input: MorningInput): MorningDraft {
  if (input.energy === 'low' || input.energy === 'crisis') {
    return {
      mode: 'min_viable',
      top3: [
        { domain: 'career', title: input.topCareerAction ?? 'Guardar 1 vacante en pipeline', minutes: 10 },
        { domain: 'fitness', title: 'Movilidad suave + 1 serie MEV', minutes: 15 },
        { domain: 'languages', title: '5 tarjetas de repaso', minutes: 3 },
      ],
      reason: `Energía ${input.energy}: consistencia mínima, sin culpa.`,
    };
  }
  return {
    mode: 'normal',
    top3: [
      { domain: 'career', title: input.topCareerAction ?? `Liquidar ${input.overdue.length} vencidas`, minutes: 35 },
      { domain: 'fitness', title: input.todayCalendar[0] ?? 'Sesión del día', minutes: 60 },
      { domain: 'languages', title: `Repasar ${Math.min(input.vocabDue, 15)} tarjetas`, minutes: 15 },
    ],
    reason: 'Biometría en rango: bloque de rendimiento.',
  };
}

export interface StuckTask {
  id: string;
  title: string;
  daysStuck: number;
}

/** Tareas con dueDate vencida hace >thresholdDays y status != Hecho. */
export function detectStuckTasks(tasks: TaskLite[], nowIso: string, thresholdDays = 7): StuckTask[] {
  const now = Date.parse(nowIso);
  return tasks
    .filter((t) => t.status !== 'Hecho' && t.dueDateIso)
    .map((t) => ({ id: t.id, title: t.title, daysStuck: Math.floor((now - Date.parse(t.dueDateIso!)) / 86_400_000) }))
    .filter((t) => t.daysStuck > thresholdDays);
}

export interface CompanyResearchInput {
  companyId: string;
  name: string;
  stack: string[];
  fitScore: number;
  fitReasons: string[];
}

export function buildCareerResearchBrief(c: CompanyResearchInput): string {
  return [
    `Empresa: ${c.name} (fit ${c.fitScore}/10).`,
    `Stack: ${c.stack.join(', ')}.`,
    `Razones: ${c.fitReasons.join('; ')}.`,
    'Siguiente: borrador de outreach (draft-cold-email) con 1 proyecto de máximo encaje.',
  ].join('\n');
}
