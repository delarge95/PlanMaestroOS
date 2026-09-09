// worker/src/__tests__/workerRouter.test.ts - Tests del Worker IA (§0.3 del Plan Multi-Agente)

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import worker from '../index';
import { clearAuditLogs } from '../lib/audit';

const BASE_URL = 'http://localhost:8787';
const SECRET_KEY = 'pm-local-secret-key';

function makeRequest(
  path: string,
  options: {
    method?: string;
    body?: any;
    headers?: Record<string, string>;
    auth?: boolean | string;
  } = {}
): Request {
  const method = options.method || (options.body ? 'POST' : 'GET');
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (options.auth !== false) {
    const key = typeof options.auth === 'string' ? options.auth : SECRET_KEY;
    headers['x-pm-key'] = key;
  }

  return new Request(`${BASE_URL}${path}`, {
    method,
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
}

describe('Worker IA Router & Endpoints (§0.3)', () => {
  beforeEach(() => {
    clearAuditLogs();
    // Hermeticidad: fuerza el fallback determinista aunque la máquina tenga GEMINI_API_KEY
    // (estos tests NO deben hacer llamadas de red reales).
    vi.stubEnv('GEMINI_API_KEY', '');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('Test 1: GET /health responde 200 con status ok y lista de modelos disponibles', async () => {
    const req = makeRequest('/health', { auth: false });
    const res = await worker.fetch(req);

    expect(res.status).toBe(200);
    const data = (await res.json()) as any;
    expect(data.status).toBe('ok');
    expect(Array.isArray(data.models)).toBe(true);
    expect(data.models).toContain('gemini-1.5-flash');
    expect(data.models).toContain('gemini-1.5-pro');
    expect(data.version).toBe('1.0.0');
    expect(typeof data.uptimeSeconds).toBe('number');
  });

  it('Test 2: POST /api/ai/draft con payload válido genera draft con requiresApproval: true', async () => {
    const req = makeRequest('/api/ai/draft', {
      body: {
        action: 'morning-plan',
        payload: { date: '2026-08-29' },
        sourcesUsed: ['Notion Daily Tasks', 'Rutina de Calistenia'],
        agent: 'AG-CORE',
      },
    });

    const res = await worker.fetch(req);
    expect(res.status).toBe(200);

    const data = (await res.json()) as any;
    expect(data.action).toBe('morning-plan');
    expect(data.requiresApproval).toBe(true);
    expect(data.status).toBe('draft');
    expect(data.agent).toBe('AG-CORE');
    expect(data.sourcesUsed).toEqual(['Notion Daily Tasks', 'Rutina de Calistenia']);
    expect(data.promptTokens).toBeGreaterThan(0);
    expect(data.completionTokens).toBeGreaterThan(0);
    expect(data.totalTokens).toBe(data.promptTokens + data.completionTokens);
    expect(data.costUsd).toBeGreaterThan(0);
    expect(typeof data.draftId).toBe('string');
  });

  it('Test 3: POST /api/ai/draft sin auth responde 401 Unauthorized', async () => {
    const req = makeRequest('/api/ai/draft', {
      auth: false,
      body: { action: 'morning-plan' },
    });

    const res = await worker.fetch(req);
    expect(res.status).toBe(401);
    const data = (await res.json()) as any;
    expect(data.error).toContain('401 Unauthorized');
  });

  it('Test 3b: POST /api/ai/draft con key inválida responde 401', async () => {
    const req = makeRequest('/api/ai/draft', {
      auth: 'invalid-secret-key',
      body: { action: 'morning-plan' },
    });

    const res = await worker.fetch(req);
    expect(res.status).toBe(401);
  });

  it('Test 4: POST /api/ai/draft con acción no en whitelist responde 400/500 con mensaje claro', async () => {
    const req = makeRequest('/api/ai/draft', {
      body: { action: 'non-existent-dangerous-action' },
    });

    const res = await worker.fetch(req);
    expect(res.status).toBeGreaterThanOrEqual(400);
    const data = (await res.json()) as any;
    expect(data.error).toContain('No está en la whitelist');
  });

  it('Test 5: POST /api/ai/audit registra llamada y GET /api/ai/audit la devuelve con tokens y costo', async () => {
    // 1. Registrar entrada de auditoría vía POST
    const postReq = makeRequest('/api/ai/audit', {
      body: {
        agent: 'AG-FIT',
        action: 'fitness-analysis',
        promptTokens: 250,
        completionTokens: 100,
        sourcesUsed: ['Overcoming Gravity 2nd Ed.'],
        approved: true,
      },
    });

    const postRes = await worker.fetch(postReq);
    expect(postRes.status).toBe(201);
    const created = (await postRes.json()) as any;
    expect(created.agent).toBe('AG-FIT');
    expect(created.totalTokens).toBe(350);
    expect(created.costUsd).toBeGreaterThan(0);

    // 2. Consultar registros vía GET
    const getReq = makeRequest('/api/ai/audit', { method: 'GET' });
    const getRes = await worker.fetch(getReq);
    expect(getRes.status).toBe(200);

    const logs = (await getRes.json()) as any[];
    expect(Array.isArray(logs)).toBe(true);
    expect(logs.length).toBeGreaterThanOrEqual(1);

    const fitLog = logs.find((l) => l.action === 'fitness-analysis');
    expect(fitLog).toBeDefined();
    expect(fitLog.agent).toBe('AG-FIT');
    expect(fitLog.totalTokens).toBe(350);
    expect(fitLog.sourcesUsed).toEqual(['Overcoming Gravity 2nd Ed.']);
  });

  it('Test 6: POST /api/ai/extract devuelve datos estructurados con sources', async () => {
    const req = makeRequest('/api/ai/extract', {
      body: {
        schema: 'exercise-prescription',
        text: 'Press militar con barra: 4 series de 8 reps al 75% 1RM con 2 min descanso.',
        domain: 'fitness',
        sourcesUsed: ['Eric Helms Muscle and Strength Pyramid'],
      },
    });

    const res = await worker.fetch(req);
    expect(res.status).toBe(200);

    const data = (await res.json()) as any;
    expect(data.schema).toBe('exercise-prescription');
    expect(data.extractedData).toBeDefined();
    expect(data.sourcesUsed).toEqual(['Eric Helms Muscle and Strength Pyramid']);
    expect(data.totalTokens).toBeGreaterThan(0);
    expect(data.costUsd).toBeGreaterThan(0);
  });

  it('Test 7: POST /api/ai/chat devuelve respuesta con citations', async () => {
    const req = makeRequest('/api/ai/chat', {
      body: {
        message: '¿Cuál es el volumen óptimo semanal para pecho?',
        agent: 'AG-FIT',
        sourcesUsed: ['Israetel Renaissance Periodization 2020'],
      },
    });

    const res = await worker.fetch(req);
    expect(res.status).toBe(200);

    const data = (await res.json()) as any;
    expect(typeof data.reply).toBe('string');
    expect(data.reply.length).toBeGreaterThan(10);
    expect(data.sourcesUsed).toEqual(['Israetel Renaissance Periodization 2020']);
    expect(data.promptTokens).toBeGreaterThan(0);
    expect(data.completionTokens).toBeGreaterThan(0);
  });
});
