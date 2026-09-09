// src/lib/ai/workerClient.ts - Cliente IA para Astro con timeout, retry y fallback offline (§0.3 y §0.5)

import type { AiActionName } from '../../../worker/src/ai/actions';
import type {
  AiDraftResponse,
  AiExtractResponse,
  AiChatResponse,
  WorkerHealthResponse,
  ChatMessage,
} from '../../../worker/src/ai/client';

export type {
  AiActionName,
  AiDraftResponse,
  AiExtractResponse,
  AiChatResponse,
  WorkerHealthResponse,
  ChatMessage,
};

export interface WorkerClientOptions {
  workerUrl?: string;
  secretKey?: string;
  timeoutMs?: number;
  maxRetries?: number;
}

export interface ExtendedHealthResponse extends WorkerHealthResponse {
  isOfflineFallback?: boolean;
}

export class WorkerAiClient {
  private workerUrl: string;
  private secretKey: string;
  private timeoutMs: number;
  private maxRetries: number;

  constructor(options?: WorkerClientOptions) {
    const envUrl =
      typeof import.meta !== 'undefined' && (import.meta as any).env?.PUBLIC_WORKER_URL;
    const envKey =
      typeof import.meta !== 'undefined' && (import.meta as any).env?.PUBLIC_WORKER_SECRET_KEY;

    this.workerUrl = (options?.workerUrl || envUrl || 'http://localhost:8787').replace(/\/$/, '');
    this.secretKey = options?.secretKey || envKey || 'pm-local-secret-key';
    this.timeoutMs = options?.timeoutMs ?? 5000;
    this.maxRetries = options?.maxRetries ?? 2;
  }

  private async fetchWithRetry<T>(
    endpoint: string,
    body: any,
    options?: { timeoutMs?: number }
  ): Promise<{ data: T | null; error: string | null }> {
    const timeout = options?.timeoutMs ?? this.timeoutMs;
    let attempt = 0;

    while (attempt <= this.maxRetries) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeout);

      try {
        const res = await fetch(`${this.workerUrl}${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-pm-key': this.secretKey,
          },
          body: JSON.stringify(body),
          signal: controller.signal,
        });

        clearTimeout(timer);

        if (res.ok) {
          const data = (await res.json()) as T;
          return { data, error: null };
        }

        const errData = await res.json().catch(() => ({}));
        const errMsg = errData.error || `HTTP ${res.status}`;

        // Si es 4xx no reintentar (error de cliente / auth)
        if (res.status >= 400 && res.status < 500) {
          return { data: null, error: errMsg };
        }

        attempt++;
        if (attempt <= this.maxRetries) {
          await new Promise((r) => setTimeout(r, Math.pow(2, attempt) * 200));
        }
      } catch (err: any) {
        clearTimeout(timer);
        attempt++;
        if (attempt <= this.maxRetries) {
          await new Promise((r) => setTimeout(r, Math.pow(2, attempt) * 200));
        } else {
          return { data: null, error: err.name === 'AbortError' ? 'Timeout excedido' : err.message };
        }
      }
    }

    return { data: null, error: 'Reintentos agotados' };
  }

  /**
   * Solicita un borrador estructurado al Worker IA (§0.3).
   * Si el worker está offline, genera un borrador determinista (§0.5).
   */
  async requestDraft(
    action: AiActionName,
    payload?: unknown,
    sourcesUsed?: string[],
    agent?: string
  ): Promise<AiDraftResponse> {
    const effectiveSources = sourcesUsed?.length
      ? sourcesUsed
      : ['Sistema Operativo Plan Maestro', 'Ledger del usuario'];

    const res = await this.fetchWithRetry<AiDraftResponse>('/api/ai/draft', {
      action,
      payload,
      sourcesUsed: effectiveSources,
      agent,
    });

    if (res.data) {
      return res.data;
    }

    // Fallback determinista offline (Garantía §0.5: app 100% funcional sin LLM)
    return {
      draftId: `draft-fallback-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      action,
      agent: agent || 'AG-CORE',
      content: `[Borrador determinista local] Propuesta para "${action}": Se recomienda verificar el estado actual y avanzar en la siguiente acción planificada.`,
      sourcesUsed: effectiveSources,
      promptTokens: 0,
      completionTokens: 0,
      totalTokens: 0,
      costUsd: 0,
      timestampIso: new Date().toISOString(),
      requiresApproval: true,
      status: 'draft',
      betaNotice: 'Modo offline — borrador generado con motor determinista local',
    };
  }

  /**
   * Solicita extracción estructurada (§0.3).
   */
  async requestExtraction(
    schema: string,
    text: string,
    domain = 'general',
    sourcesUsed?: string[]
  ): Promise<AiExtractResponse> {
    const effectiveSources = sourcesUsed?.length ? sourcesUsed : [`Documento [${domain}]`];

    const res = await this.fetchWithRetry<AiExtractResponse>('/api/ai/extract', {
      schema,
      text,
      domain,
      sourcesUsed: effectiveSources,
    });

    if (res.data) {
      return res.data;
    }

    // Fallback determinista offline
    return {
      id: `extract-fallback-${Date.now()}`,
      extractedData: {
        schema,
        domain,
        summary: text.slice(0, 100).trim(),
        offlineFallback: true,
      },
      schema,
      sourcesUsed: effectiveSources,
      promptTokens: 0,
      completionTokens: 0,
      totalTokens: 0,
      costUsd: 0,
      timestampIso: new Date().toISOString(),
    };
  }

  /**
   * Consulta al chat de asistencia con fallback determinista (§0.2).
   */
  async requestChat(
    message: string,
    history?: ChatMessage[],
    context?: Record<string, any>,
    agent = 'AG-ORQ'
  ): Promise<AiChatResponse> {
    const res = await this.fetchWithRetry<AiChatResponse>('/api/ai/chat', {
      message,
      history,
      context,
      agent,
    });

    if (res.data) {
      return res.data;
    }

    // Fallback determinista offline
    return {
      reply: `[Modo Offline — Plan Maestro] No hay conexión con el Worker IA. Respuesta determinista: Se han registrado tus notas sobre "${message.slice(0, 30)}...". Puedes continuar con tus sesiones y tareas normalmente.`,
      sourcesUsed: ['Reglas deterministas locales'],
      promptTokens: 0,
      completionTokens: 0,
      totalTokens: 0,
      costUsd: 0,
      timestampIso: new Date().toISOString(),
      isDeterministicFallback: true,
    };
  }

  /**
   * Comprueba el estado de salud del Worker IA.
   */
  async checkHealth(): Promise<ExtendedHealthResponse> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 2000);

    try {
      const res = await fetch(`${this.workerUrl}/health`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
      });
      clearTimeout(timer);
      if (res.ok) {
        return (await res.json()) as ExtendedHealthResponse;
      }
    } catch (_err) {
      clearTimeout(timer);
    }

    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      models: [],
      version: '1.0.0',
      environment: 'client-offline-fallback',
      uptimeSeconds: 0,
      isOfflineFallback: true,
    };
  }
}

// Singleton global
export const defaultWorkerAiClient = new WorkerAiClient();

// Funciones wrapper directas para consumo simple en componentes
export const requestAiDraft = (
  action: AiActionName,
  payload?: unknown,
  sourcesUsed?: string[],
  agent?: string
) => defaultWorkerAiClient.requestDraft(action, payload, sourcesUsed, agent);

export const requestAiExtraction = (
  schema: string,
  text: string,
  domain?: string,
  sourcesUsed?: string[]
) => defaultWorkerAiClient.requestExtraction(schema, text, domain, sourcesUsed);

export const requestAiChat = (
  message: string,
  history?: ChatMessage[],
  context?: Record<string, any>,
  agent?: string
) => defaultWorkerAiClient.requestChat(message, history, context, agent);

export const checkWorkerHealth = () => defaultWorkerAiClient.checkHealth();
