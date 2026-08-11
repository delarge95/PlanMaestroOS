// worker/src/ai/actions.ts - Catálogo de acciones permitidas (Whitelist de IA)

export const AI_ACTIONS = {
  'summarize-job':      { maxTokens: 800,  requiresApproval: true },
  'tailor-cv':          { maxTokens: 2000, requiresApproval: true },
  'draft-cold-email':   { maxTokens: 1200, requiresApproval: true },
  'propose-top3':       { maxTokens: 600,  requiresApproval: true },
  'evening-review':     { maxTokens: 800,  requiresApproval: true },
  'language-practice':  { maxTokens: 900,  requiresApproval: false },
  'stuck-task':         { maxTokens: 800,  requiresApproval: true },
  'summarize-recipe':   { maxTokens: 800,  requiresApproval: true },
  'explain-progress':   { maxTokens: 800,  requiresApproval: true }
} as const;

export type AiActionName = keyof typeof AI_ACTIONS;
