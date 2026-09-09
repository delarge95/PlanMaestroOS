// worker/src/ai/client.ts - Cliente IA aislado en worker (privado, nunca expuesto en bundle web)
// Estrategia dual: si hay GEMINI_API_KEY → llamada REAL a Gemini REST (geminiRest.ts);
// si no hay key o la llamada falla → fallback determinista (mock) marcado con `degraded: true`.
// NUNCA se lanza sin fallback: el worker siempre responde aunque Gemini falle.

import { AI_ACTIONS, isAllowedAiAction, type AiActionName } from './actions';
import { logAiCall, estimateGeminiCost } from '../lib/audit';
import { callGemini } from './geminiRest';

const WORKER_START_TIME = Date.now();
export const AVAILABLE_MODELS = [
  'gemini-1.5-flash',
  'gemini-1.5-pro',
  'gemini-2.0-flash-exp'
];
const DEFAULT_MODEL = 'gemini-1.5-flash';
const DEFAULT_TEMPERATURE = 0.4;

/** Subset del entorno que necesita el cliente (WorkerEnv de index.ts es estructuralmente compatible). */
export interface AiEnvLike {
  GEMINI_API_KEY?: string;
}

/**
 * Resuelve la API key de Gemini: primero el env del Worker (bindings de Cloudflare),
 * luego process.env (Node/tests). Vacío o solo espacios → undefined (modo mock).
 */
export function resolveApiKey(env?: AiEnvLike): string | undefined {
  const raw = env?.GEMINI_API_KEY ?? (typeof process !== 'undefined' ? process.env?.GEMINI_API_KEY : undefined);
  const key = typeof raw === 'string' ? raw.trim() : '';
  return key.length > 0 ? key : undefined;
}

/** Resuelve el modelo solicitado; si no está en la whitelist AVAILABLE_MODELS usa el default. */
function resolveModel(model?: string): string {
  if (model && AVAILABLE_MODELS.includes(model)) return model;
  if (model) {
    console.warn(`[AI Worker] Modelo "${model}" no está en AVAILABLE_MODELS; usando "${DEFAULT_MODEL}".`);
  }
  return DEFAULT_MODEL;
}

export interface AiDraftRequestOptions {
  action: AiActionName;
  payload?: any;
  sourcesUsed?: string[];
  agent?: string;
  model?: string;
  env?: AiEnvLike;
}

export interface AiDraftResponse {
  draftId: string;
  action: AiActionName;
  agent: string;
  content: string;
  sourcesUsed: string[];
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  costUsd: number;
  timestampIso: string;
  requiresApproval: boolean;
  status: 'draft';
  betaNotice?: string;
  model?: string;
  /** true → este resultado vino del fallback determinista (sin key o fallo de Gemini). */
  degraded?: true;
}

export interface AiExtractRequestOptions {
  schema: string;
  text: string;
  domain?: string;
  sourcesUsed?: string[];
  agent?: string;
  model?: string;
  env?: AiEnvLike;
}

export interface AiExtractResponse {
  id: string;
  extractedData: Record<string, any>;
  schema: string;
  sourcesUsed: string[];
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  costUsd: number;
  timestampIso: string;
  model?: string;
  /** true → este resultado vino del fallback determinista (sin key o fallo de Gemini). */
  degraded?: true;
}

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  content: string;
}

export interface AiChatRequestOptions {
  message: string;
  history?: ChatMessage[];
  context?: Record<string, any>;
  agent?: string;
  sourcesUsed?: string[];
  model?: string;
  env?: AiEnvLike;
}

export interface AiChatResponse {
  reply: string;
  sourcesUsed: string[];
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  costUsd: number;
  timestampIso: string;
  isDeterministicFallback: boolean;
  model?: string;
  /** true → este resultado vino del fallback determinista (sin key o fallo de Gemini). */
  degraded?: true;
}

export interface WorkerHealthResponse {
  status: 'ok';
  timestamp: string;
  models: string[];
  version: string;
  environment: string;
  uptimeSeconds: number;
}

// ── System prompts cortos del dominio (§0.3: borrador con revisión humana obligatoria) ──
const SYSTEM_PROMPT_DRAFT =
  'Eres un asistente del sistema personal Plan Maestro OS. Generas borradores concisos y accionables. ' +
  'Todo lo que produces es un BORRADOR que exige revisión y aprobación humana obligatoria antes de usarse. ' +
  'No inventes datos del usuario; si falta contexto, dilo explícitamente.';
const SYSTEM_PROMPT_EXTRACT =
  'Eres un extractor de datos estructurados de Plan Maestro OS. Responde EXCLUSIVAMENTE con un JSON válido ' +
  'ajustado al esquema pedido, sin markdown ni explicaciones. Si un campo no está en el texto, usa null.';
const SYSTEM_PROMPT_CHAT =
  'Eres el asistente conversacional de Plan Maestro OS. Responde breve y útil, cita fuentes cuando las uses ' +
  'y di "NO SÉ" cuando falte información. Nunca des consejos médicos: deriva a profesionales.';

/**
 * Procesa un borrador con review humana obligatoria (§0.3).
 * Con GEMINI_API_KEY → llamada real a Gemini; si no (o si falla) → mock determinista `degraded`.
 */
export async function processAiDraft(options: AiDraftRequestOptions): Promise<AiDraftResponse> {
  const { action, payload, sourcesUsed = [], agent } = options;

  if (!isAllowedAiAction(action)) {
    throw new Error(`Acción de IA no permitida: "${action}". No está en la whitelist.`);
  }

  const actionConfig = AI_ACTIONS[action];
  const assignedAgent = agent || actionConfig.agent || 'AG-CORE';
  const model = resolveModel(options.model);
  const apiKey = resolveApiKey(options.env);
  const effectiveSources = sourcesUsed.length > 0 ? sourcesUsed : ['Sistema Operativo Plan Maestro', 'Historial del usuario'];

  if (apiKey) {
    try {
      // Llamada REAL a Gemini REST
      const result = await callGemini({
        apiKey,
        model,
        systemPrompt: SYSTEM_PROMPT_DRAFT,
        contents: [
          {
            role: 'user',
            text: `Acción: ${action}.\nContexto/entrada: ${JSON.stringify(payload ?? {})}.\nGenera el borrador solicitado.`,
          },
        ],
        maxOutputTokens: actionConfig.maxTokens,
        temperature: DEFAULT_TEMPERATURE,
      });

      const costUsd = estimateGeminiCost(result.promptTokens, result.completionTokens);
      logAiCall({
        agent: assignedAgent,
        action,
        promptTokens: result.promptTokens,
        completionTokens: result.completionTokens,
        costUsd,
        sourcesUsed: effectiveSources,
        approved: false
      });

      return {
        draftId: `draft-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        action,
        agent: assignedAgent,
        content: result.text,
        sourcesUsed: effectiveSources,
        promptTokens: result.promptTokens,
        completionTokens: result.completionTokens,
        totalTokens: result.promptTokens + result.completionTokens,
        costUsd,
        timestampIso: new Date().toISOString(),
        requiresApproval: actionConfig.requiresApproval,
        status: 'draft',
        betaNotice: 'Beta — borrador con aprobación humana requerida',
        model: result.model
      };
    } catch (err) {
      // Fallback: NUNCA lanzar sin fallback (el worker debe responder aunque Gemini falle)
      const reason = err instanceof Error ? err.message : String(err);
      console.warn(`[AI Worker] fallback a mock determinista para "${action}" (llamada Gemini fallida): ${reason}`);
      return buildMockDraft(action, assignedAgent, actionConfig.maxTokens, effectiveSources, model);
    }
  }

  console.log('[AI Worker] fallback a mock determinista para "%s" (sin GEMINI_API_KEY).', action);
  return buildMockDraft(action, assignedAgent, actionConfig.maxTokens, effectiveSources, model);
}

/** Mock determinista actual, marcado con degraded: true. */
function buildMockDraft(
  action: AiActionName,
  assignedAgent: string,
  maxTokens: number,
  effectiveSources: string[],
  model: string
): AiDraftResponse {
  // Simulación determinista (comportamiento previo conservado para tests sin key)
  const mockContent = `[Borrador Worker - ${action}]\nPropuesta: 1. Dividir la tarea en 2 pasos de 10 min. 2. Enfocarse en el objetivo principal sin distracciones.`;
  const promptTokens = 85;
  const completionTokens = Math.min(maxTokens, 120);
  const totalTokens = promptTokens + completionTokens;
  const costUsd = estimateGeminiCost(promptTokens, completionTokens);

  logAiCall({
    agent: assignedAgent,
    action,
    promptTokens,
    completionTokens,
    costUsd,
    sourcesUsed: effectiveSources,
    approved: false
  });

  return {
    draftId: `draft-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    action,
    agent: assignedAgent,
    content: mockContent,
    sourcesUsed: effectiveSources,
    promptTokens,
    completionTokens,
    totalTokens,
    costUsd,
    timestampIso: new Date().toISOString(),
    requiresApproval: true,
    status: 'draft',
    betaNotice: 'Beta — borrador con aprobación humana requerida',
    model,
    degraded: true
  };
}

/**
 * Extracción estructurada de entidades / esquemas JSON (§0.3).
 * Con GEMINI_API_KEY → llamada real que debe devolver JSON; si falla → mock determinista `degraded`.
 */
export async function processAiExtract(options: AiExtractRequestOptions): Promise<AiExtractResponse> {
  const { schema, text, domain = 'general', sourcesUsed = [], agent = 'AG-CORE' } = options;

  if (!text || text.trim().length === 0) {
    throw new Error('El texto para extracción no puede estar vacío.');
  }

  const model = resolveModel(options.model);
  const apiKey = resolveApiKey(options.env);
  const effectiveSources = sourcesUsed.length > 0 ? sourcesUsed : [`Extracción de documento [${domain}]`];
  const maxOutputTokens = AI_ACTIONS['extract-schema'].maxTokens;

  if (apiKey) {
    try {
      // Llamada REAL a Gemini REST
      const result = await callGemini({
        apiKey,
        model,
        systemPrompt: SYSTEM_PROMPT_EXTRACT,
        contents: [
          {
            role: 'user',
            text: `Esquema objetivo: ${schema}.\nDominio: ${domain}.\nTexto fuente:\n${text}`,
          },
        ],
        maxOutputTokens,
        temperature: DEFAULT_TEMPERATURE,
      });

      // El modelo debe responder JSON puro; toleramos fences de markdown
      const cleaned = result.text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
      const extractedData = JSON.parse(cleaned) as Record<string, any>;

      const costUsd = estimateGeminiCost(result.promptTokens, result.completionTokens);
      logAiCall({
        agent,
        action: `extract-${schema}`,
        promptTokens: result.promptTokens,
        completionTokens: result.completionTokens,
        costUsd,
        sourcesUsed: effectiveSources,
        approved: true
      });

      return {
        id: `extract-${Date.now()}`,
        extractedData,
        schema,
        sourcesUsed: effectiveSources,
        promptTokens: result.promptTokens,
        completionTokens: result.completionTokens,
        totalTokens: result.promptTokens + result.completionTokens,
        costUsd,
        timestampIso: new Date().toISOString(),
        model: result.model
      };
    } catch (err) {
      const reason = err instanceof Error ? err.message : String(err);
      console.warn(`[AI Worker] fallback a mock determinista para extract-${schema} (llamada Gemini fallida): ${reason}`);
      return buildMockExtract(schema, text, domain, effectiveSources, model);
    }
  }

  console.log('[AI Worker] fallback a mock determinista para extract-%s (sin GEMINI_API_KEY).', schema);
  return buildMockExtract(schema, text, domain, effectiveSources, model);
}

/** Mock determinista actual de extracción, marcado con degraded: true. */
function buildMockExtract(
  schema: string,
  text: string,
  domain: string,
  effectiveSources: string[],
  model: string
): AiExtractResponse {
  const promptTokens = Math.min(2000, Math.ceil(text.length / 4));
  const completionTokens = 150;
  const totalTokens = promptTokens + completionTokens;
  const costUsd = estimateGeminiCost(promptTokens, completionTokens);

  const extractedData = {
    schema,
    domain,
    extractedItems: [
      { key: 'summary', value: text.slice(0, 100).trim() },
      { key: 'confidence', value: 'explicit' }
    ]
  };

  logAiCall({
    agent: 'AG-CORE',
    action: `extract-${schema}`,
    promptTokens,
    completionTokens,
    costUsd,
    sourcesUsed: effectiveSources,
    approved: true
  });

  return {
    id: `extract-${Date.now()}`,
    extractedData,
    schema,
    sourcesUsed: effectiveSources,
    promptTokens,
    completionTokens,
    totalTokens,
    costUsd,
    timestampIso: new Date().toISOString(),
    model,
    degraded: true
  };
}

/**
 * Chat interactivo con citas y fallback determinista (§0.2).
 * Con GEMINI_API_KEY → llamada real con historial; si falla → mock determinista `degraded`.
 */
export async function processAiChat(options: AiChatRequestOptions): Promise<AiChatResponse> {
  const { message, history = [], context, agent = 'AG-ORQ', sourcesUsed = [] } = options;

  if (!message || message.trim().length === 0) {
    throw new Error('El mensaje no puede estar vacío.');
  }

  const model = resolveModel(options.model);
  const apiKey = resolveApiKey(options.env);
  const effectiveSources = sourcesUsed.length > 0 ? sourcesUsed : ['Plan Maestro OS RAG Dataset'];
  const maxOutputTokens = AI_ACTIONS['chat-advisor'].maxTokens;

  if (apiKey) {
    try {
      // Historial → contents de Gemini (solo roles válidos 'user'|'model')
      const contents = history
        .filter((m) => (m.role === 'user' || m.role === 'model') && m.content && m.content.trim().length > 0)
        .map((m) => ({ role: m.role, text: m.content }));
      contents.push({
        role: 'user',
        text: context ? `${message}\n\n(contexto disponible: ${JSON.stringify(context)})` : message,
      });

      // Llamada REAL a Gemini REST
      const result = await callGemini({
        apiKey,
        model,
        systemPrompt: SYSTEM_PROMPT_CHAT,
        contents,
        maxOutputTokens,
        temperature: DEFAULT_TEMPERATURE,
      });

      const costUsd = estimateGeminiCost(result.promptTokens, result.completionTokens);
      logAiCall({
        agent,
        action: 'chat-response',
        promptTokens: result.promptTokens,
        completionTokens: result.completionTokens,
        costUsd,
        sourcesUsed: effectiveSources,
        approved: true
      });

      return {
        reply: result.text,
        sourcesUsed: effectiveSources,
        promptTokens: result.promptTokens,
        completionTokens: result.completionTokens,
        totalTokens: result.promptTokens + result.completionTokens,
        costUsd,
        timestampIso: new Date().toISOString(),
        isDeterministicFallback: false,
        model: result.model
      };
    } catch (err) {
      const reason = err instanceof Error ? err.message : String(err);
      console.warn(`[AI Worker] fallback a mock determinista para chat (llamada Gemini fallida): ${reason}`);
      return buildMockChat(message, history, agent, effectiveSources, model);
    }
  }

  console.log('[AI Worker] fallback a mock determinista para chat (sin GEMINI_API_KEY).');
  return buildMockChat(message, history, agent, effectiveSources, model);
}

/** Mock determinista actual de chat, marcado con degraded: true. */
function buildMockChat(
  message: string,
  history: ChatMessage[],
  agent: string,
  effectiveSources: string[],
  model: string
): AiChatResponse {
  const promptTokens = Math.ceil(message.length / 4) + history.length * 20;
  const completionTokens = 90;
  const totalTokens = promptTokens + completionTokens;
  const costUsd = estimateGeminiCost(promptTokens, completionTokens);

  // Respuesta con fallback determinista y citas visibles
  const reply = `[Asistente IA Plan Maestro] En respuesta a tu consulta sobre "${message.slice(0, 40)}": Basado en el registro de hoy y las reglas de ${agent}, te sugiero mantener el foco en las prioridades activas.`;

  logAiCall({
    agent,
    action: 'chat-response',
    promptTokens,
    completionTokens,
    costUsd,
    sourcesUsed: effectiveSources,
    approved: true
  });

  return {
    reply,
    sourcesUsed: effectiveSources,
    promptTokens,
    completionTokens,
    totalTokens,
    costUsd,
    timestampIso: new Date().toISOString(),
    isDeterministicFallback: true,
    model,
    degraded: true
  };
}

/**
 * Estado del worker y modelos disponibles (§0.3).
 */
export function getWorkerHealth(): WorkerHealthResponse {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    models: AVAILABLE_MODELS,
    version: '1.0.0',
    environment: typeof process !== 'undefined' ? process.env?.NODE_ENV || 'production' : 'cloudflare-worker',
    uptimeSeconds: Math.floor((Date.now() - WORKER_START_TIME) / 1000)
  };
}

// Compatibilidad retroactiva
export const processAiActionInWorker = processAiDraft;
export type AiWorkerRequestOptions = AiDraftRequestOptions;
export type AiWorkerResponse = AiDraftResponse;
