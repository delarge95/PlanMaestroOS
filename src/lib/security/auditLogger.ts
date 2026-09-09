// src/lib/security/auditLogger.ts - Registro de Auditoría Saneado & AI Audit Logger (§0.3 del Plan Multi-Agente)

export interface AuditLogEntry {
  jobId: string;
  origin: 'notion' | 'github' | 'app_client' | 'worker_cron';
  entity: string;
  operation: 'create' | 'update' | 'delete' | 'sync' | 'ai_prompt';
  actor: string;
  timestamp: string;
  result: 'success' | 'failed' | 'rate_limited';
  retries: number;
  errorSanitized?: string;
}

/**
 * Estructura de registro de auditoría de IA según §0.3 del Plan Multi-Agente
 */
export interface AiAuditEntry {
  id: string;
  timestamp: string;
  agent: string;
  action: string;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  costUsd: number;
  sourcesUsed: string[];
  approved: boolean;
  model?: string;
  errorSanitized?: string;
}

/**
 * Palabras clave sensibles que deben eliminarse de cualquier mensaje de error o entrada de log
 */
const SENSITIVE_PATTERNS = [
  /secret_[a-zA-Z0-9_\-]+/gi,
  /bearer\s+[a-zA-Z0-9_\-\.]+/gi,
  /notion_[a-zA-Z0-9_\-]+/gi,
  /ghp_[a-zA-Z0-9_\-]+/gi,
  /AIzaSy[a-zA-Z0-9_\-]+/gi, // Gemini API keys
];

export function sanitizeErrorMessage(message?: string): string | undefined {
  if (!message) return undefined;
  let clean = message;
  for (const pattern of SENSITIVE_PATTERNS) {
    clean = clean.replace(pattern, '[REDACTED_SECRET]');
  }
  return clean;
}

export function createAuditEntry(
  rawEntry: Omit<AuditLogEntry, 'jobId' | 'timestamp'>
): AuditLogEntry {
  const jobId = `job_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const timestamp = new Date().toISOString();

  return {
    ...rawEntry,
    jobId,
    timestamp,
    errorSanitized: sanitizeErrorMessage(rawEntry.errorSanitized),
  };
}

// ── In-Memory Store de Auditoría IA (§0.3) ──────────────────────────────────

const aiAuditStore: AiAuditEntry[] = [];

/**
 * Calcula costo estimado en USD para Gemini 1.5 Flash
 */
export function calculateGeminiCost(promptTokens: number, completionTokens: number): number {
  const cost = promptTokens * 0.000000075 + completionTokens * 0.0000003;
  return Number(cost.toFixed(8));
}

export function recordAiAudit(
  entry: Omit<AiAuditEntry, 'id' | 'timestamp' | 'totalTokens' | 'costUsd'> & {
    id?: string;
    timestamp?: string;
    costUsd?: number;
  }
): AiAuditEntry {
  const promptTokens = entry.promptTokens || 0;
  const completionTokens = entry.completionTokens || 0;
  const totalTokens = promptTokens + completionTokens;
  const costUsd = entry.costUsd ?? calculateGeminiCost(promptTokens, completionTokens);

  const fullEntry: AiAuditEntry = {
    id: entry.id || `audit-cli-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    timestamp: entry.timestamp || new Date().toISOString(),
    agent: entry.agent || 'AG-CORE',
    action: entry.action,
    promptTokens,
    completionTokens,
    totalTokens,
    costUsd,
    sourcesUsed: entry.sourcesUsed || [],
    approved: entry.approved ?? false,
    model: entry.model,
    errorSanitized: sanitizeErrorMessage(entry.errorSanitized),
  };

  aiAuditStore.push(fullEntry);
  return fullEntry;
}

export function getAiAuditHistory(): AiAuditEntry[] {
  return [...aiAuditStore];
}

export function clearAiAuditHistory(): void {
  aiAuditStore.length = 0;
}

export function exportAuditLogsJson(): string {
  return JSON.stringify(aiAuditStore, null, 2);
}

export function importAuditLogsJson(json: string): boolean {
  try {
    const data = JSON.parse(json);
    if (!Array.isArray(data)) return false;
    for (const item of data) {
      if (item && typeof item === 'object' && item.action) {
        recordAiAudit(item);
      }
    }
    return true;
  } catch (_e) {
    return false;
  }
}

/**
 * Sincroniza logs locales de auditoría con el endpoint `/api/ai/audit` del Worker IA
 */
export async function syncAuditWithWorker(
  workerUrl?: string,
  secretKey?: string
): Promise<{ syncedCount: number; error?: string }> {
  const targetUrl = (
    workerUrl ||
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.PUBLIC_WORKER_URL) ||
    'http://localhost:8787'
  ).replace(/\/$/, '');
  const key =
    secretKey ||
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.PUBLIC_WORKER_SECRET_KEY) ||
    'pm-local-secret-key';

  try {
    let synced = 0;
    for (const log of aiAuditStore) {
      const res = await fetch(`${targetUrl}/api/ai/audit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-pm-key': key,
        },
        body: JSON.stringify({
          agent: log.agent,
          action: log.action,
          promptTokens: log.promptTokens,
          completionTokens: log.completionTokens,
          costUsd: log.costUsd,
          sourcesUsed: log.sourcesUsed,
          approved: log.approved,
        }),
      });
      if (res.ok) synced++;
    }
    return { syncedCount: synced };
  } catch (err: any) {
    return { syncedCount: 0, error: err.message || 'Error de sincronización con Worker' };
  }
}

