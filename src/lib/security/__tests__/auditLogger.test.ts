// src/lib/security/__tests__/auditLogger.test.ts - Tests de Auditoría y Costos (§0.3)

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import {
  recordAiAudit,
  getAiAuditHistory,
  clearAiAuditHistory,
  calculateGeminiCost,
  exportAuditLogsJson,
  importAuditLogsJson,
  syncAuditWithWorker,
  createAuditEntry,
  sanitizeErrorMessage,
} from '../auditLogger';

describe('AI Audit Logger & Security (§0.3)', () => {
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    clearAiAuditHistory();
    vi.restoreAllMocks();
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  it('calcula costos correctamente para Gemini 1.5 Flash', () => {
    const cost = calculateGeminiCost(1000, 500);
    // 1000 * 0.000000075 + 500 * 0.00000030 = 0.000075 + 0.00015 = 0.000225
    expect(cost).toBeCloseTo(0.000225, 6);
  });

  it('registra llamadas de IA con estructura completa (§0.3)', () => {
    const entry = recordAiAudit({
      agent: 'AG-FIT',
      action: 'explain-progress',
      promptTokens: 120,
      completionTokens: 80,
      sourcesUsed: ['Helms 2019', 'Nippard 2022'],
      approved: false,
    });

    expect(entry.id).toBeDefined();
    expect(entry.agent).toBe('AG-FIT');
    expect(entry.action).toBe('explain-progress');
    expect(entry.totalTokens).toBe(200);
    expect(entry.costUsd).toBeGreaterThan(0);
    expect(entry.approved).toBe(false);
    expect(entry.sourcesUsed).toEqual(['Helms 2019', 'Nippard 2022']);

    const history = getAiAuditHistory();
    expect(history.length).toBe(1);
    expect(history[0].id).toBe(entry.id);
  });

  it('exporta e importa registros en formato JSON', () => {
    recordAiAudit({
      agent: 'AG-CAREER',
      action: 'tailor-cv',
      promptTokens: 500,
      completionTokens: 300,
      sourcesUsed: ['CV Template v2'],
      approved: true,
    });

    const json = exportAuditLogsJson();
    expect(typeof json).toBe('string');
    expect(json).toContain('tailor-cv');

    clearAiAuditHistory();
    expect(getAiAuditHistory().length).toBe(0);

    const imported = importAuditLogsJson(json);
    expect(imported).toBe(true);
    expect(getAiAuditHistory().length).toBe(1);
    expect(getAiAuditHistory()[0].action).toBe('tailor-cv');
  });

  it('saneamiento de secretos y tokens en mensajes de error', () => {
    const dirty = 'Error conectando con bearer eyJhbGciOiJI... y Gemini AIzaSyD9x8w7v6...';
    const clean = sanitizeErrorMessage(dirty);

    expect(clean).not.toContain('AIzaSyD9x8w7v6');
    expect(clean).toContain('[REDACTED_SECRET]');
  });

  it('createAuditEntry preserva compatibilidad con el motor de sync', () => {
    const syncEntry = createAuditEntry({
      origin: 'app_client',
      entity: 'task',
      operation: 'create',
      actor: 'user',
      result: 'success',
      retries: 0,
    });

    expect(syncEntry.jobId).toContain('job_');
    expect(syncEntry.timestamp).toBeDefined();
    expect(syncEntry.operation).toBe('create');
  });

  it('syncAuditWithWorker transmite los logs pendientes al endpoint /api/ai/audit', async () => {
    recordAiAudit({
      agent: 'AG-CORE',
      action: 'morning-plan',
      promptTokens: 100,
      completionTokens: 50,
      sourcesUsed: ['Notion'],
      approved: true,
    });

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 201,
      json: async () => ({ status: 'created' }),
    } as any);

    const res = await syncAuditWithWorker('http://localhost:8787', 'pm-local-secret-key');
    expect(res.syncedCount).toBe(1);
    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
  });
});
