// worker/src/index.ts - Router del Worker de IA & Jobs

import { processAiActionInWorker } from './ai/client';
import { getAuditLogs } from './lib/audit';
import type { AiActionName } from './ai/actions';

export interface WorkerRequestOptions {
  action: AiActionName;
  payload?: any;
  sourcesUsed?: string[];
  headers?: Record<string, string>;
}

export async function handleWorkerRequest(req: WorkerRequestOptions) {
  const apiKey = req.headers?.['x-pm-key'] || req.headers?.['X-PM-Key'];
  const expectedKey = (typeof process !== 'undefined' ? process.env?.WORKER_SECRET_KEY : undefined) || 'pm-local-secret-key';

  if (apiKey !== expectedKey) {
    throw new Error('401 Unauthorized: Header x-pm-key inválido o ausente.');
  }

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

