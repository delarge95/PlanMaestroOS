// worker/src/index.ts - Router del Worker de IA & Jobs (§0.3 del Plan Multi-Agente)

import {
  processAiDraft,
  processAiExtract,
  processAiChat,
  getWorkerHealth,
  processAiActionInWorker,
  type AiDraftRequestOptions,
  type AiExtractRequestOptions,
  type AiChatRequestOptions,
} from './ai/client';
import { getAuditLogs, logAiCall, clearAuditLogs, type LogAiCallOptions } from './lib/audit';
import type { AiActionName } from './ai/actions';

export interface WorkerEnv {
  WORKER_SECRET_KEY?: string;
  GEMINI_API_KEY?: string;
  NODE_ENV?: string;
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-pm-key, X-PM-Key',
};

function jsonResponse(data: any, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}

function errorResponse(message: string, status = 400): Response {
  return jsonResponse({ error: message, status }, status);
}

function checkAuth(request: Request, env?: WorkerEnv): boolean {
  const headerKey = request.headers.get('x-pm-key') || request.headers.get('X-PM-Key');
  const authHeader = request.headers.get('Authorization');
  const bearerKey = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;
  const providedKey = headerKey || bearerKey;

  const expectedKey =
    env?.WORKER_SECRET_KEY ||
    (typeof process !== 'undefined' ? process.env?.WORKER_SECRET_KEY : undefined) ||
    'pm-local-secret-key';

  return providedKey === expectedKey;
}

export default {
  async fetch(request: Request, env?: WorkerEnv, ctx?: any): Promise<Response> {
    const url = new URL(request.url);
    const method = request.method.toUpperCase();

    // Manejo de preflight CORS
    if (method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: CORS_HEADERS,
      });
    }

    // Ruta de salud / estado (pública para monitoreo)
    if (url.pathname === '/health' || url.pathname === '/') {
      if (method !== 'GET') return errorResponse('Método no permitido', 405);
      return jsonResponse(getWorkerHealth());
    }

    // Rutas protegidas de API
    if (!checkAuth(request, env)) {
      return errorResponse('401 Unauthorized: Header x-pm-key inválido o ausente.', 401);
    }

    try {
      if (url.pathname === '/api/ai/draft' && method === 'POST') {
        const body = (await request.json()) as AiDraftRequestOptions;
        if (!body.action) return errorResponse('Falta "action" en el cuerpo.');
        const result = await processAiDraft(body);
        return jsonResponse(result);
      }

      if (url.pathname === '/api/ai/extract' && method === 'POST') {
        const body = (await request.json()) as AiExtractRequestOptions;
        if (!body.schema || !body.text) return errorResponse('Faltan "schema" o "text" requeridos.');
        const result = await processAiExtract(body);
        return jsonResponse(result);
      }

      if (url.pathname === '/api/ai/chat' && method === 'POST') {
        const body = (await request.json()) as AiChatRequestOptions;
        if (!body.message) return errorResponse('Falta "message" requerido.');
        const result = await processAiChat(body);
        return jsonResponse(result);
      }

      if (url.pathname === '/api/ai/audit') {
        if (method === 'GET') {
          return jsonResponse(getAuditLogs());
        }
        if (method === 'POST') {
          const body = (await request.json()) as LogAiCallOptions;
          if (!body.action) return errorResponse('Falta "action" requerido.');
          const entry = logAiCall(body);
          return jsonResponse(entry, 201);
        }
        return errorResponse('Método no permitido', 405);
      }

      return errorResponse(`Ruta no encontrada: ${url.pathname}`, 404);
    } catch (err: any) {
      return errorResponse(err.message || 'Error interno del worker', 500);
    }
  },
};

// ── Invocación programática (compatibilidad Node/TS sin servidor HTTP) ────────
export interface WorkerRequestOptions {
  action: AiActionName;
  payload?: any;
  sourcesUsed?: string[];
  agent?: string;
  headers?: Record<string, string>;
}

export async function handleWorkerRequest(req: WorkerRequestOptions) {
  const apiKey = req.headers?.['x-pm-key'] || req.headers?.['X-PM-Key'];
  const expectedKey =
    (typeof process !== 'undefined' ? process.env?.WORKER_SECRET_KEY : undefined) || 'pm-local-secret-key';

  if (apiKey !== expectedKey) {
    throw new Error('401 Unauthorized: Header x-pm-key inválido o ausente.');
  }

  if (!req.action) {
    throw new Error('Falta acción requerida en el cuerpo del request.');
  }

  const result = await processAiDraft({
    action: req.action,
    payload: req.payload,
    sourcesUsed: req.sourcesUsed,
    agent: req.agent,
  });

  return result;
}

export { getAuditLogs, logAiCall, clearAuditLogs, processAiDraft, processAiExtract, processAiChat, getWorkerHealth };



