// Contrato HTTP ÚNICO del worker (archivo 22 §22.1). Entierra el triple contrato:
// Bearer /api/v1/*  vs  x-pm-key /ai/action  vs  handleWorkerRequest() sin HTTP.
// Destino: worker/src/contract.ts (tipos) + server.ts (router).

export const WORKER_CONTRACT_VERSION = 1;

export type AidDomain = 'career' | 'fitness' | 'clinical' | 'languages' | 'gastronomy';

export interface DraftRequest {
  domain: AidDomain;
  task: string; // una de AI_ACTIONS (prompts.ts)
  contextChunkIds: string[]; // ids de rag/*.json, jamás texto libre de salud
}

export interface AiDraft {
  id: string;
  domain: AidDomain;
  task: string;
  content: string;
  sourcesUsed: Array<{ docId: string; citation: string }>;
  tokensUsed: number;
  createdAtIso: string;
  requiresApproval: boolean;
}

export interface SyncPushRequest {
  entity: 'task' | 'application' | 'session' | 'metric';
  payload: Record<string, unknown>;
}

export interface MorningPlanRequest {
  dateIso: string;
}

export type WorkerError = { ok: false; status: 401 | 501 | 422; error: string };
export type WorkerOk<T> = { ok: true; data: T };

export const NO_KEY_501: WorkerError = {
  ok: false,
  status: 501,
  error: 'IA no disponible: falta WORKER_SECRET_KEY / GEMINI_API_KEY. La app sigue 100% funcional.',
};
