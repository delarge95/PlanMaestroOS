// worker/src/__tests__/notionProxy.test.ts — Endpoints Notion del worker.
// Sin red: solo los caminos que no dependen de fetch externo.

import { describe, expect, it } from 'vitest';
import { handleNotionStatus, handleNotionFitnessSession } from '../notion/proxy';

describe('handleNotionStatus', () => {
  it('sin token: configured=false SIN llamar a la red', async () => {
    const res = await handleNotionStatus(undefined);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.configured).toBe(false);
    expect(data.reachable).toBe(false);
    expect(data.dbs).toEqual({ tasks: false, career: false, sessions: false, measurements: false });
    // Nunca expone secretos
    expect(JSON.stringify(data)).not.toMatch(/secret|ntn_|Bearer/i);
  });
});

describe('handleNotionFitnessSession', () => {
  it('sin token/DB: 503 con error claro (app sigue funcional)', async () => {
    const res = await handleNotionFitnessSession({ sessionId: 'w_1', dateIso: '2026-09-09' }, undefined);
    expect(res.status).toBe(503);
    const data = await res.json();
    expect(data.ok).toBe(false);
    expect(data.error).toMatch(/no configurados/);
  });

  it('payload inválido (dateIso mal formado): 400 sin tocar la red', async () => {
    const res = await handleNotionFitnessSession(
      { sessionId: 'w_1', dateIso: '09/09/2026' },
      { NOTION_TOKEN: 'x', NOTION_SESSIONS_DB_ID: 'db' },
    );
    expect(res.status).toBe(400);
  });
});
