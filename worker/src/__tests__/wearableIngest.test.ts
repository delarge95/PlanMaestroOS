// worker/src/__tests__/wearableIngest.test.ts
// Tests del endpoint POST /wearable/ingest (ENCARGO-WEARABLE F2 recortada):
// valida el payload del bridge WHOOP (OpenStrap/edge), auth x-pm-key y NO
// escribe en Notion (solo OK + ingestedAtIso — la persistencia es local).

import { describe, it, expect } from 'vitest';
import worker from '../index';

const BASE_URL = 'http://localhost:8787';
const SECRET_KEY = 'pm-local-secret-key';

function makeRequest(
  path: string,
  options: { method?: string; body?: unknown; auth?: boolean } = {},
): Request {
  const method = options.method ?? (options.body !== undefined ? 'POST' : 'GET');
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (options.auth !== false) headers['x-pm-key'] = SECRET_KEY;
  return new Request(`${BASE_URL}${path}`, {
    method,
    headers,
    body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
  });
}

describe('POST /wearable/ingest (bridge WHOOP)', () => {
  it('payload válido → 200 { ok: true, ingestedAtIso } SIN tocar Notion', async () => {
    const res = await worker.fetch(
      makeRequest('/wearable/ingest', {
        body: {
          dateIso: '2026-09-16',
          sleepHours: 7.2,
          hrvRmssdMs: 42,
          restingHr: 52,
          strain: 8.4,
          batteryPct: 76,
          skinTempOffsetC: 0.3,
          source: 'openstrap-edge',
        },
      }),
    );
    expect(res.status).toBe(200);
    const data = (await res.json()) as { ok: boolean; ingestedAtIso: string };
    expect(data.ok).toBe(true);
    expect(data.ingestedAtIso).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
  });

  it('payload mínimo (dateIso + source) → 200 (métricas opcionales)', async () => {
    const res = await worker.fetch(
      makeRequest('/wearable/ingest', { body: { dateIso: '2026-09-16', source: 'openstrap-edge' } }),
    );
    expect(res.status).toBe(200);
    expect(((await res.json()) as { ok: boolean }).ok).toBe(true);
  });

  it('dateIso mal formato → 400', async () => {
    const res = await worker.fetch(
      makeRequest('/wearable/ingest', { body: { dateIso: '16/09/2026', source: 'openstrap-edge' } }),
    );
    expect(res.status).toBe(400);
    expect(((await res.json()) as { error: string }).error).toContain('dateIso');
  });

  it('sin source → 400', async () => {
    const res = await worker.fetch(
      makeRequest('/wearable/ingest', { body: { dateIso: '2026-09-16' } }),
    );
    expect(res.status).toBe(400);
    expect(((await res.json()) as { error: string }).error).toContain('source');
  });

  it('métrica fuera de rango plausible (strain 25) → 400', async () => {
    const res = await worker.fetch(
      makeRequest('/wearable/ingest', {
        body: { dateIso: '2026-09-16', strain: 25, source: 'openstrap-edge' },
      }),
    );
    expect(res.status).toBe(400);
    expect(((await res.json()) as { error: string }).error).toContain('strain');
  });

  it('sin x-pm-key → 401', async () => {
    const res = await worker.fetch(
      makeRequest('/wearable/ingest', {
        auth: false,
        body: { dateIso: '2026-09-16', source: 'openstrap-edge' },
      }),
    );
    expect(res.status).toBe(401);
  });
});
