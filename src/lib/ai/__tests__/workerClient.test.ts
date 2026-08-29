// src/lib/ai/__tests__/workerClient.test.ts - Tests del Adapter Cliente IA en Astro (§0.3 y §0.5)

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  WorkerAiClient,
  requestAiDraft,
  requestAiExtraction,
  requestAiChat,
  checkWorkerHealth,
} from '../workerClient';

describe('WorkerAiClient — Adapter Astro con Offline Fallback (§0.5)', () => {
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  it('Test 8: entra en fallback determinista cuando el worker está offline o no responde', async () => {
    // Simular caída de red / worker offline
    globalThis.fetch = vi.fn().mockRejectedValue(new Error('Failed to fetch: Connection refused'));

    const client = new WorkerAiClient({
      workerUrl: 'http://localhost:9999',
      maxRetries: 0,
      timeoutMs: 100,
    });

    const draft = await client.requestDraft('morning-plan', { test: true }, ['Notion Tasks'], 'AG-CORE');

    expect(draft).toBeDefined();
    expect(draft.status).toBe('draft');
    expect(draft.requiresApproval).toBe(true);
    expect(draft.agent).toBe('AG-CORE');
    expect(draft.draftId).toContain('draft-fallback');
    expect(draft.betaNotice).toContain('Modo offline');
    expect(draft.sourcesUsed).toEqual(['Notion Tasks']);
  });

  it('requestExtraction genera fallback determinista estructurado en offline', async () => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    const client = new WorkerAiClient({ maxRetries: 0, timeoutMs: 100 });
    const extract = await client.requestExtraction('recipe-data', 'Receta de lentejas con verduras', 'gastronomy');

    expect(extract).toBeDefined();
    expect(extract.id).toContain('extract-fallback');
    expect(extract.extractedData.offlineFallback).toBe(true);
    expect(extract.schema).toBe('recipe-data');
    expect(extract.extractedData.summary).toContain('Receta de lentejas');
  });

  it('requestChat devuelve respuesta determinista local en offline', async () => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error('Network timeout'));

    const client = new WorkerAiClient({ maxRetries: 0, timeoutMs: 100 });
    const chat = await client.requestChat('¿Cómo planifico mi día?');

    expect(chat).toBeDefined();
    expect(chat.isDeterministicFallback).toBe(true);
    expect(chat.reply).toContain('[Modo Offline — Plan Maestro]');
    expect(chat.sourcesUsed).toContain('Reglas deterministas locales');
  });

  it('checkHealth reporta fallback offline seguro si el worker no responde', async () => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error('Worker unreachable'));

    const client = new WorkerAiClient({ maxRetries: 0, timeoutMs: 50 });
    const health = await client.checkHealth();

    expect(health.status).toBe('ok');
    expect(health.isOfflineFallback).toBe(true);
    expect(health.environment).toBe('client-offline-fallback');
  });

  it('conecta exitosamente cuando el worker responde correctamente (200 OK)', async () => {
    const mockWorkerDraft = {
      draftId: 'draft-remote-123',
      action: 'morning-plan',
      agent: 'AG-CORE',
      content: '[Remoto] Plan del día listo',
      sourcesUsed: ['Calendario Google', 'Notion'],
      promptTokens: 90,
      completionTokens: 110,
      totalTokens: 200,
      costUsd: 0.00003975,
      timestampIso: new Date().toISOString(),
      requiresApproval: true,
      status: 'draft',
    };

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => mockWorkerDraft,
    } as any);

    const client = new WorkerAiClient({ maxRetries: 0 });
    const draft = await client.requestDraft('morning-plan', {}, ['Notion'], 'AG-CORE');

    expect(draft.draftId).toBe('draft-remote-123');
    expect(draft.content).toContain('[Remoto] Plan del día listo');
    expect(draft.totalTokens).toBe(200);
    expect(draft.costUsd).toBe(0.00003975);
  });

  it('funciones wrapper exportadas funcionan correctamente', async () => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error('Offline'));

    const draft = await requestAiDraft('evening-review');
    expect(draft.action).toBe('evening-review');
    expect(draft.status).toBe('draft');

    const extract = await requestAiExtraction('schema-x', 'Contenido');
    expect(extract.schema).toBe('schema-x');

    const chat = await requestAiChat('Hola');
    expect(chat.isDeterministicFallback).toBe(true);

    const health = await checkWorkerHealth();
    expect(health.isOfflineFallback).toBe(true);
  });
});
