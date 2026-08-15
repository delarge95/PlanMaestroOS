// src/lib/security/auditLogger.ts - Registro de Auditoría Saneado

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
 * Palabras clave sensibles que deben eliminarse de cualquier mensaje de error o entrada de log
 */
const SENSITIVE_PATTERNS = [
  /(notion_|ntn_|secret_)[a-zA-Z0-9_\-]+/gi,
  /(bearer|basic)\s+[a-zA-Z0-9_\-\.\+\/=]+/gi,
  /(gh[pousr]_|github_pat_)[a-zA-Z0-9_\-]+/gi,
  /sk-(proj-)?[a-zA-Z0-9_\-]+/gi, // OpenAI API keys
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
    errorSanitized: sanitizeErrorMessage(rawEntry.errorSanitized)
  };
}
