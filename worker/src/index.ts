// worker/src/index.ts - Router del Worker de IA & Jobs

import { processAiActionInWorker } from './ai/client';
import { getAuditLogs } from './lib/audit';
import type { AiActionName } from './ai/actions';

export async function handleWorkerRequest(req: { action: AiActionName; payload?: any; sourcesUsed?: string[] }) {
  if (!req.action) {
    throw new Error('Falta acción requerida en el cuerpo del request.');
  }

  const result = await processAiActionInWorker({
    action: req.action,
    payload: req.payload,
    sourcesUsed: req.sourcesUsed
  });

  return result;
}

export { getAuditLogs };
