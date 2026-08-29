// src/lib/ai/requestAiAction.ts - Único punto de contacto del cliente web con el Worker privado de IA

import type { AiActionName } from '../../../worker/src/ai/actions';
import { requestAiDraft, type AiDraftResponse } from './workerClient';

export type { AiDraftResponse };

export async function requestAiAction(
  action: AiActionName,
  payload?: unknown,
  sourcesUsed?: string[]
): Promise<AiDraftResponse> {
  return requestAiDraft(action, payload, sourcesUsed);
}

