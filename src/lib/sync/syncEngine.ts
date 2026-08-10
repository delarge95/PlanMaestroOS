// src/lib/sync/syncEngine.ts - Motor de Sincronización, Idempotencia y Cola DLQ

import { createAuditEntry, sanitizeErrorMessage } from '../security/auditLogger';
import { defaultNotionRateLimiter } from '../security/syncPolicy';
import { validateAutomationPolicy, type ActionExecutionContext } from './automationPolicy';

export interface SyncJobOptions {
  jobId: string;
  idempotencyKey: string;
  actionContext: ActionExecutionContext;
  dryRun?: boolean;
  maxRetries?: number;
}

export interface SyncJobResult {
  jobId: string;
  idempotencyKey: string;
  success: boolean;
  dryRun: boolean;
  executedAt: string;
  attempts: number;
  data?: any;
  error?: string;
}

export interface DeadLetterRecord {
  jobId: string;
  idempotencyKey: string;
  failedAt: string;
  attempts: number;
  error: string;
  context: ActionExecutionContext;
}

export class SyncEngine {
  private executedKeys = new Set<string>();
  private deadLetterQueue: DeadLetterRecord[] = [];

  /**
   * Ejecuta un job de sincronización de manera idéntica y segura
   */
  async executeJob(
    options: SyncJobOptions,
    handler: (isDryRun: boolean) => Promise<any>
  ): Promise<SyncJobResult> {
    const { jobId, idempotencyKey, actionContext, dryRun = false, maxRetries = 3 } = options;
    const now = new Date().toISOString();

    // 1. Idempotencia: previene ejecuciones duplicadas del mismo job
    if (this.executedKeys.has(idempotencyKey)) {
      console.log(`[SyncEngine] Job '${jobId}' omitido por idempotencia (${idempotencyKey})`);
      return {
        jobId,
        idempotencyKey,
        success: true,
        dryRun,
        executedAt: now,
        attempts: 0,
        data: { skipped: true, reason: 'Idempotency key hit' }
      };
    }

    // 2. Validación de política de automatización
    const policyResult = validateAutomationPolicy(actionContext);
    if (!policyResult.allowed) {
      const errorMsg = `[Policy Denied] ${policyResult.reason}`;
      console.warn(`[SyncEngine] ${errorMsg}`);
      createAuditEntry({
        origin: 'worker_cron',
        entity: jobId,
        operation: 'sync',
        actor: actionContext.requestedBy,
        result: 'failed',
        retries: 0,
        errorSanitized: policyResult.reason
      });

      return {
        jobId,
        idempotencyKey,
        success: false,
        dryRun,
        executedAt: now,
        attempts: 0,
        error: errorMsg
      };
    }

    let attempt = 0;
    let lastError: any = null;

    while (attempt <= maxRetries) {
      attempt++;
      try {
        // Rate limit para Notion (~3 req/s)
        await defaultNotionRateLimiter.waitForSlot();

        console.log(`[SyncEngine] Ejecutando '${jobId}' (Intento ${attempt}/${maxRetries + 1}, dryRun=${dryRun})`);

        const resultData = await handler(dryRun);

        if (!dryRun) {
          this.executedKeys.add(idempotencyKey);
        }

        createAuditEntry({
          origin: 'worker_cron',
          entity: jobId,
          operation: 'sync',
          actor: actionContext.requestedBy,
          result: 'success',
          retries: attempt - 1
        });

        return {
          jobId,
          idempotencyKey,
          success: true,
          dryRun,
          executedAt: new Date().toISOString(),
          attempts: attempt,
          data: resultData
        };
      } catch (err: any) {
        lastError = err;
        const isRetryable = err.status === 429 || (err.status >= 500 && err.status < 600);

        console.error(`[SyncEngine] Error en job '${jobId}' (Intento ${attempt}):`, sanitizeErrorMessage(err.message || String(err)));

        if (attempt <= maxRetries && isRetryable) {
          // Exponential backoff con Jitter: (2^attempt * 200ms) + random(0-100ms)
          const delay = Math.pow(2, attempt) * 200 + Math.floor(Math.random() * 100);
          await new Promise((resolve) => setTimeout(resolve, delay));
        } else {
          break;
        }
      }
    }

    // 3. Fallo definitivo -> Enviar a Dead-Letter Queue
    const dlRecord: DeadLetterRecord = {
      jobId,
      idempotencyKey,
      failedAt: new Date().toISOString(),
      attempts: attempt,
      error: sanitizeErrorMessage(lastError?.message || String(lastError)) || 'Unknown Error',
      context: actionContext
    };

    this.deadLetterQueue.push(dlRecord);

    createAuditEntry({
      origin: 'worker_cron',
      entity: jobId,
      operation: 'sync',
      actor: actionContext.requestedBy,
      result: 'failed',
      retries: attempt,
      errorSanitized: dlRecord.error
    });

    return {
      jobId,
      idempotencyKey,
      success: false,
      dryRun,
      executedAt: new Date().toISOString(),
      attempts: attempt,
      error: dlRecord.error
    };
  }

  getDeadLetterQueue(): DeadLetterRecord[] {
    return [...this.deadLetterQueue];
  }

  clearIdempotencyCache() {
    this.executedKeys.clear();
  }
}

export const globalSyncEngine = new SyncEngine();
