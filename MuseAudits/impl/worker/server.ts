// Router mínimo del worker con el contrato único (archivo 22).
// Compatible Cloudflare (export default { fetch }) y Node (handleRequest).
// Sin key -> 501 con app 100% funcional. Destino: worker/src/server.ts
import {
  NO_KEY_501,
  WORKER_CONTRACT_VERSION,
  type AiDraft,
  type DraftRequest,
  type MorningPlanRequest,
  type SyncPushRequest,
  type WorkerError,
  type WorkerOk,
} from './contract.js';
import { PROMPTS, type AiActionName } from './prompts.js';

export interface AiClient {
  complete: (action: AiActionName, prompt: string, maxTokens: number) => Promise<{ content: string; tokensUsed: number }>;
}

export interface WorkerEnv {
  workerKey?: string;
  geminiKey?: string;
  ai?: AiClient;
}

function unauthorized(): WorkerError {
  return { ok: false as const, status: 401 as const, error: 'x-pm-key inválida' };
}

export async function handleRequest(req: Request, env: WorkerEnv): Promise<Response> {
  const url = new URL(req.url);
  const key = req.headers.get('x-pm-key');

  if (url.pathname === '/ai/draft' && req.method === 'POST') {
    if (!env.geminiKey || !env.ai) return json(NO_KEY_501, 501);
    if (key !== env.workerKey) return json(unauthorized(), 401);
    const body = (await req.json()) as DraftRequest;
    const spec = PROMPTS[body.task as AiActionName];
    if (!spec || !Array.isArray(body.contextChunkIds)) {
      return json({ ok: false, status: 422, error: 'task o contextChunkIds inválidos' } satisfies WorkerError, 422);
    }
    const out = await env.ai.complete(body.task as AiActionName, spec.user({}), spec.maxTokens);
    const draft: AiDraft = {
      id: `draft-${Date.now()}`,
      domain: body.domain,
      task: body.task,
      content: out.content,
      sourcesUsed: body.contextChunkIds.map((id) => ({ docId: id, citation: 'ver chunk' })),
      tokensUsed: out.tokensUsed,
      createdAtIso: new Date().toISOString(),
      requiresApproval: spec.requiresApproval,
    };
    const res: WorkerOk<AiDraft> = { ok: true, data: draft };
    return json(res, 200);
  }

  if (url.pathname === '/sync/push' && req.method === 'POST') {
    if (key !== env.workerKey) return json(unauthorized(), 401);
    const body = (await req.json()) as SyncPushRequest;
    if (!body.entity || !body.payload) {
      return json({ ok: false, status: 422, error: 'entity/payload requeridos' } satisfies WorkerError, 422);
    }
    const res: WorkerOk<{ jobId: string; contract: number }> = {
      ok: true,
      data: { jobId: `job-${Date.now()}`, contract: WORKER_CONTRACT_VERSION },
    };
    return json(res, 200);
  }

  if (url.pathname === '/jobs/morning-plan' && req.method === 'GET') {
    if (key !== env.workerKey) return json(unauthorized(), 401);
    const dateIso = url.searchParams.get('dateIso') ?? new Date().toISOString().slice(0, 10);
    const req2: MorningPlanRequest = { dateIso };
    const res: WorkerOk<MorningPlanRequest> = { ok: true, data: req2 };
    return json(res, 200);
  }

  return json({ ok: false, status: 422, error: 'ruta desconocida' } satisfies WorkerError, 422);
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });
}

export default { fetch: handleRequest };
