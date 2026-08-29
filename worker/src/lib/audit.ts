// worker/src/lib/audit.ts - Audit Logging para llamadas de IA (§0.3 del Plan Multi-Agente)

export interface AiAuditLogEntry {
  id: string;
  timestampIso: string;
  agent: string;
  action: string;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  costUsd: number;
  sourcesUsed: string[];
  approved?: boolean;
}

const auditLogs: AiAuditLogEntry[] = [];

/**
 * Calcula el costo estimado en USD para llamadas Gemini 1.5 Flash
 * Prompt: $0.075 / 1M tokens ($0.000000075 / token)
 * Completion: $0.30 / 1M tokens ($0.00000030 / token)
 */
export function estimateGeminiCost(promptTokens: number, completionTokens: number): number {
  const cost = promptTokens * 0.000000075 + completionTokens * 0.0000003;
  return Number(cost.toFixed(8));
}

export interface LogAiCallOptions {
  agent?: string;
  action: string;
  promptTokens?: number;
  completionTokens?: number;
  costUsd?: number;
  sourcesUsed?: string[];
  approved?: boolean;
}

export function logAiCall(options: LogAiCallOptions): AiAuditLogEntry {
  const promptTokens = options.promptTokens ?? 0;
  const completionTokens = options.completionTokens ?? 0;
  const totalTokens = promptTokens + completionTokens;
  const costUsd = options.costUsd ?? estimateGeminiCost(promptTokens, completionTokens);

  const entry: AiAuditLogEntry = {
    id: `audit-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    timestampIso: new Date().toISOString(),
    agent: options.agent || 'AG-CORE',
    action: options.action,
    promptTokens,
    completionTokens,
    totalTokens,
    costUsd,
    sourcesUsed: options.sourcesUsed ?? [],
    approved: options.approved ?? false,
  };

  auditLogs.push(entry);
  console.log(
    `[AI Worker Audit] Agent: ${entry.agent} | Action: ${entry.action} | Tokens: ${entry.totalTokens} (P:${promptTokens}/C:${completionTokens}) | Cost: $${entry.costUsd} | Time: ${entry.timestampIso}`
  );
  return entry;
}

export function getAuditLogs(): AiAuditLogEntry[] {
  return [...auditLogs];
}

export function clearAuditLogs(): void {
  auditLogs.length = 0;
}
