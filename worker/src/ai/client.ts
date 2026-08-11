// worker/src/ai/client.ts - Cliente IA aislado en worker (privado, nunca expuesto en bundle web)

import { AI_ACTIONS, type AiActionName } from './actions';
import { logAiCall } from '../lib/audit';

export interface AiWorkerRequestOptions {
  action: AiActionName;
  payload?: any;
  sourcesUsed?: string[];
}

export interface AiWorkerResponse {
  draftId: string;
  action: AiActionName;
  content: string;
  sourcesUsed: string[];
  tokensUsed: number;
  timestampIso: string;
  betaNotice?: string;
}

export async function processAiActionInWorker(options: AiWorkerRequestOptions): Promise<AiWorkerResponse> {
  const { action, payload, sourcesUsed = [] } = options;

  const actionConfig = AI_ACTIONS[action];
  if (!actionConfig) {
    throw new Error(`Acción de IA no permitida: "${action}". No está en la whitelist.`);
  }

  // Simulación de llamada segura a Gemini API con timeout y límites
  const mockContent = `[Borrador Worker - ${action}]\nPropuesta: 1. Dividir la tarea en 2 pasos de 10 min. 2. Enfocarse en el objetivo principal sin distracciones.`;
  const tokensUsed = Math.min(actionConfig.maxTokens, 120);

  logAiCall(action, tokensUsed, false);

  return {
    draftId: `draft-${Date.now()}`,
    action,
    content: mockContent,
    sourcesUsed: sourcesUsed.length > 0 ? sourcesUsed : ['Sistema Operativo Plan Maestro', 'Historial del usuario'],
    tokensUsed,
    timestampIso: new Date().toISOString(),
    betaNotice: 'Beta — respuestas sin verificación de fuentes'
  };
}
