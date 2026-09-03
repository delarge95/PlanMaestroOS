// Prompts versionados por acción (las 9 de AI_ACTIONS). Destino: worker/src/ai/prompts/
// Reglas: la IA recibe NÚMEROS ya calculados + ids de chunks, nunca historiales
// crudos de salud; 'language-practice' es la única sin approval.

export type AiActionName =
  | 'summarize-job' | 'tailor-cv' | 'draft-cold-email' | 'propose-top3'
  | 'evening-review' | 'language-practice' | 'stuck-task' | 'summarize-recipe'
  | 'explain-progress';

export interface PromptSpec {
  version: 1;
  maxTokens: number;
  requiresApproval: boolean;
  system: string;
  user: (input: Record<string, unknown>) => string;
}

const CITATION_FOOTER =
  'Cita al final las fuentes usadas como [docId cap/pág]. Si falta contexto para afirmar algo, escribe NO SÉ en ese punto.';

export const PROMPTS: Record<AiActionName, PromptSpec> = {
  'summarize-job': {
    version: 1, maxTokens: 800, requiresApproval: true,
    system: 'Eres un analista laboral. Resume la vacante en 5 líneas: rol, stack, seniority, remoto, encaje.',
    user: (i) => `Vacante: ${String(i.title ?? '')}. Stack: ${String(i.stack ?? '')}. Mi stack: ${String(i.mine ?? '')}. ${CITATION_FOOTER}`,
  },
  'tailor-cv': {
    version: 1, maxTokens: 2000, requiresApproval: true,
    system: 'Redactas bullets de CV. PROHIBIDO inventar experiencia, métricas, fechas o URLs. Usa [PLACEHOLDER] donde falte dato.',
    user: (i) => `Rol: ${String(i.role ?? '')}. Empresa: ${String(i.company ?? '')}. Proyectos: ${String(i.projects ?? '')}. Bullets base: ${String(i.bullets ?? '')}. ${CITATION_FOOTER}`,
  },
  'draft-cold-email': {
    version: 1, maxTokens: 1200, requiresApproval: true,
    system: 'Borrador de outreach frío (doc-22). Tono profesional, <120 palabras, sin adulación.',
    user: (i) => `Para: ${String(i.contact ?? '')} en ${String(i.company ?? '')}. Mi proyecto relevante: ${String(i.project ?? '')}. ${CITATION_FOOTER}`,
  },
  'propose-top3': {
    version: 1, maxTokens: 600, requiresApproval: true,
    system: ' propones el Top3 del día (1 laboral, 1 físico, 1 idioma) desde el briefing calculado. No cambias planes clínicos.',
    user: (i) => `Briefing: ${JSON.stringify(i.briefing ?? {})}. ${CITATION_FOOTER}`,
  },
  'evening-review': {
    version: 1, maxTokens: 800, requiresApproval: true,
    system: 'Cierre del día: qué se logró, qué queda, propuesta de mañana. Tono de apoyo, cero culpa.',
    user: (i) => `Logrado: ${JSON.stringify(i.done ?? [])}. Pendiente: ${JSON.stringify(i.pending ?? [])}. ${CITATION_FOOTER}`,
  },
  'language-practice': {
    version: 1, maxTokens: 900, requiresApproval: false,
    system: 'Tutor A1/A2: corrige orden/gramática/vocabulario. Formato dicho->corrección->explicación ≤2 líneas.',
    user: (i) => `Idioma: ${String(i.lang ?? '')}. El usuario dijo: ${String(i.said ?? '')}. Nivel: ${String(i.level ?? '')}.`,
  },
  'stuck-task': {
    version: 1, maxTokens: 800, requiresApproval: true,
    system: 'Sugieres dividir (>7d estancada) en 3 pasos inicio/desarrollo/cierre o mover a mañana. Sin rojo, sin culpa.',
    user: (i) => `Tarea: ${String(i.title ?? '')}. Días estancada: ${String(i.days ?? '')}. ${CITATION_FOOTER}`,
  },
  'summarize-recipe': {
    version: 1, maxTokens: 800, requiresApproval: true,
    system: 'Resume recetas con redacción propia (no copiar libros): esencial primero, fuente+notas después.',
    user: (i) => `Receta: ${String(i.title ?? '')}. Fuente: ${String(i.source ?? '')}. Macros: ${String(i.macros ?? '')}. ${CITATION_FOOTER}`,
  },
  'explain-progress': {
    version: 1, maxTokens: 800, requiresApproval: true,
    system: 'Explicas métricas YA calculadas (volumen, adherencia, racha). No recalcules ni inventes números.',
    user: (i) => `Métricas: ${JSON.stringify(i.metrics ?? {})}. ${CITATION_FOOTER}`,
  },
};
