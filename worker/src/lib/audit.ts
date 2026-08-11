// worker/src/lib/audit.ts - Audit Logging para llamadas de IA

export interface AiAuditLogEntry {
  id: string;
  action: string;
  timestampIso: string;
  tokensUsed: number;
  approved?: boolean;
}

const auditLogs: AiAuditLogEntry[] = [];

export function logAiCall(action: string, tokensUsed: number, approved = false): AiAuditLogEntry {
  const entry: AiAuditLogEntry = {
    id: `audit-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    action,
    timestampIso: new Date().toISOString(),
    tokensUsed,
    approved
  };
  auditLogs.push(entry);
  console.log(`[AI Worker Audit] Action: ${action} | Tokens: ${tokensUsed} | Time: ${entry.timestampIso}`);
  return entry;
}

export function getAuditLogs(): AiAuditLogEntry[] {
  return [...auditLogs];
}
