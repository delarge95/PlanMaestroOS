// worker/src/__tests__/geminiRest.test.ts - Tests del cliente REST de Gemini y del fallback determinista
// Regla: NUNCA se hacen llamadas de red reales (fetch siempre stubbeado; key solo como string fake).

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { callGemini, type GeminiCallInput } from '../ai/geminiRest';
import { processAiDraft, resolveApiKey } from '../ai/client';
import { clearAuditLogs } from '../lib/audit';

/** Response fake mínima que satisface la interfaz usada por callGemini. */
function fakeResponse(body: unknown, status = 200): Response {
  const raw = typeof body === 'string' ? body : JSON.stringify(body);
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => JSON.parse(raw),
    text: async () => raw,
  } as unknown as Response;
}

describe('resolveApiKey (worker/src/ai/client.ts)', () => {
  afterEach(() => vi.unstubAllEnvs());

  it('prefiere el env del Worker sobre process.env', () => {
    vi.stubEnv('GEMINI_API_KEY', 'from-process-env');
    expect(resolveApiKey({ GEMINI_API_KEY: 'from-worker-env' })).toBe('from-worker-env');
  });

  it('lee process.env si no llega env del Worker', () => {
    vi.stubEnv('GEMINI_API_KEY', 'from-process-env');
    expect(resolveApiKey()).toBe('from-process-env');
  });

  it('cadena vacía o solo espacios → undefined (modo mock)', () => {
    expect(resolveApiKey({ GEMINI_API_KEY: '' })).toBeUndefined();
    expect(resolveApiKey({ GEMINI_API_KEY: '   ' })).toBeUndefined();
    expect(resolveApiKey({})).toBeUndefined();
  });
});

describe('processAiDraft sin GEMINI_API_KEY (fallback determinista)', () => {
  beforeEach(() => {
    clearAuditLogs();
    // Hermeticidad: aunque la máquina tenga key, estos tests fuerzan el modo mock
    vi.stubEnv('GEMINI_API_KEY', '');
  });
  afterEach(() => vi.unstubAllEnvs());

  it('devuelve el mock actual marcado con degraded: true', async () => {
    const result = await processAiDraft({
      action: 'morning-plan',
      payload: { date: '2026-09-09' },
      sourcesUsed: ['Notion Daily Tasks'],
    });

    expect(result.status).toBe('draft');
    expect(result.requiresApproval).toBe(true);
    expect(result.degraded).toBe(true);
    expect(result.content).toContain('[Borrador Worker - morning-plan]');
    expect(result.totalTokens).toBe(result.promptTokens + result.completionTokens);
    expect(result.costUsd).toBeGreaterThan(0);
    expect(typeof result.draftId).toBe('string');
  });
});

describe('callGemini (REST, fetch mockeado)', () => {
  beforeEach(() => clearAuditLogs());
  afterEach(() => vi.unstubAllGlobals());

  const baseInput: GeminiCallInput = {
    apiKey: 'test-key-123',
    model: 'gemini-1.5-flash',
    systemPrompt: 'Eres un asistente de prueba.',
    contents: [
      { role: 'user', text: 'Hola' },
      { role: 'model', text: '¿En qué ayudo?' },
      { role: 'user', text: 'Resume mi día' },
    ],
    maxOutputTokens: 800,
    temperature: 0.4,
  };

  it('arma la URL y el body correctos, y parsea texto + usageMetadata', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      fakeResponse({
        candidates: [
          { content: { parts: [{ text: 'Parte 1. ' }, { text: 'Parte 2.' }] }, finishReason: 'STOP' },
        ],
        usageMetadata: { promptTokenCount: 42, candidatesTokenCount: 17 },
      })
    );
    vi.stubGlobal('fetch', fetchMock);

    const result = await callGemini(baseInput);

    // URL: POST v1beta/models/{model}:generateContent?key={KEY}
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=test-key-123'
    );
    expect(init.method).toBe('POST');

    // Body: contents con roles/parts, systemInstruction y generationConfig
    const body = JSON.parse(init.body as string);
    expect(body.contents).toEqual([
      { role: 'user', parts: [{ text: 'Hola' }] },
      { role: 'model', parts: [{ text: '¿En qué ayudo?' }] },
      { role: 'user', parts: [{ text: 'Resume mi día' }] },
    ]);
    expect(body.systemInstruction).toEqual({ parts: [{ text: 'Eres un asistente de prueba.' }] });
    expect(body.generationConfig).toEqual({ maxOutputTokens: 800, temperature: 0.4 });

    // Resultado: texto concatenado + tokens reales de usageMetadata
    expect(result.text).toBe('Parte 1. Parte 2.');
    expect(result.promptTokens).toBe(42);
    expect(result.completionTokens).toBe(17);
    expect(result.model).toBe('gemini-1.5-flash');
  });

  it('con respuesta de error HTTP lanza Error con el status y el cuerpo', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(fakeResponse({ error: { message: 'quota exceeded' } }, 429))
    );

    await expect(callGemini(baseInput)).rejects.toThrow(/429/);
    await expect(callGemini(baseInput)).rejects.toThrow(/quota exceeded/);
  });

  it('con candidates vacíos lanza Error claro (sin texto utilizable)', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        fakeResponse({ candidates: [{ finishReason: 'SAFETY' }], usageMetadata: {} })
      )
    );

    await expect(callGemini(baseInput)).rejects.toThrow(/sin texto en la respuesta/);
  });
});

describe('processAiDraft con key pero Gemini caído (fallback sin lanzar)', () => {
  beforeEach(() => clearAuditLogs());
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  });

  it('fetch que rechaza (red caída) → responde con el mock degraded en vez de lanzar', async () => {
    vi.stubEnv('GEMINI_API_KEY', 'fake-key-for-tests');
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('ECONNREFUSED simulado')));

    const result = await processAiDraft({ action: 'propose-top3', env: { GEMINI_API_KEY: 'fake-key-for-tests' } });

    expect(result.degraded).toBe(true);
    expect(result.status).toBe('draft');
    expect(result.content).toContain('[Borrador Worker - propose-top3]');
    expect(result.requiresApproval).toBe(true);
  });
});

describe('processAiDraft con llamada real exitosa (fetch mockeado)', () => {
  beforeEach(() => clearAuditLogs());
  afterEach(() => vi.unstubAllGlobals());

  it('usa el texto y tokens de usageMetadata de Gemini, sin degraded', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      fakeResponse({
        candidates: [{ content: { parts: [{ text: 'Top 3 del día generado por Gemini' }] } }],
        usageMetadata: { promptTokenCount: 321, candidatesTokenCount: 45 },
      })
    );
    vi.stubGlobal('fetch', fetchMock);

    const result = await processAiDraft({
      action: 'morning-plan',
      payload: { date: '2026-09-09' },
      env: { GEMINI_API_KEY: 'fake-key-for-tests' },
    });

    expect(result.degraded).toBeUndefined();
    expect(result.content).toBe('Top 3 del día generado por Gemini');
    expect(result.promptTokens).toBe(321);
    expect(result.completionTokens).toBe(45);
    expect(result.totalTokens).toBe(366);
    expect(result.costUsd).toBeGreaterThan(0);
    expect(result.model).toBe('gemini-1.5-flash');
  });
});
