// worker/src/ai/actions.ts - Catálogo de acciones permitidas (Whitelist de IA)

export const AI_ACTIONS = {
  'summarize-job':      { maxTokens: 800,  requiresApproval: true,  agent: 'AG-CAREER' },
  'tailor-cv':          { maxTokens: 2000, requiresApproval: true,  agent: 'AG-CAREER' },
  'draft-cold-email':   { maxTokens: 1200, requiresApproval: true,  agent: 'AG-CAREER' },
  'propose-top3':       { maxTokens: 600,  requiresApproval: true,  agent: 'AG-CORE' },
  'morning-plan':       { maxTokens: 800,  requiresApproval: true,  agent: 'AG-CORE' },
  'evening-review':     { maxTokens: 800,  requiresApproval: true,  agent: 'AG-CORE' },
  'language-practice':  { maxTokens: 900,  requiresApproval: false, agent: 'AG-EN' },
  'stuck-task':         { maxTokens: 800,  requiresApproval: true,  agent: 'AG-CORE' },
  'summarize-recipe':   { maxTokens: 800,  requiresApproval: true,  agent: 'AG-GASTRO' },
  'explain-progress':   { maxTokens: 800,  requiresApproval: true,  agent: 'AG-FIT' },
  'fitness-analysis':   { maxTokens: 1200, requiresApproval: true,  agent: 'AG-FIT' },
  'clinical-summary':   { maxTokens: 1000, requiresApproval: true,  agent: 'AG-CLIN' },
  'extract-schema':     { maxTokens: 2000, requiresApproval: false, agent: 'AG-CORE' },
  'chat-advisor':       { maxTokens: 1000, requiresApproval: false, agent: 'AG-ORQ' },
} as const;

export type AiActionName = keyof typeof AI_ACTIONS;

export function isAllowedAiAction(action: string): action is AiActionName {
  return Object.prototype.hasOwnProperty.call(AI_ACTIONS, action);
}

