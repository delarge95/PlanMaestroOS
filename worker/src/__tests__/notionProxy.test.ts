// worker/src/__tests__/notionProxy.test.ts — Endpoints Notion del worker.
// Sin red: solo los caminos que no dependen de fetch externo.

import { describe, expect, it } from 'vitest';
import { handleNotionStatus, handleNotionFitnessSession, handleNotionCareerApp, STAGE_TO_NOTION } from '../notion/proxy';

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

describe('handleNotionCareerApp', () => {
  it('sin token/DB: 503 claro', async () => {
    const res = await handleNotionCareerApp({ company: 'X', role: 'Y', stage: 'Aplicado' }, undefined);
    expect(res.status).toBe(503);
  });

  it('payload sin company: 400 sin tocar red', async () => {
    const res = await handleNotionCareerApp({ role: 'Y' }, { NOTION_TOKEN: 'x', NOTION_CAREER_DB_ID: 'db' });
    expect(res.status).toBe(400);
  });

  it('mapeo de stages: Investigar/Revisar se pliegan a Preparar, el resto 1:1', () => {
    expect(STAGE_TO_NOTION.Investigar).toBe('Preparar');
    expect(STAGE_TO_NOTION.Revisar).toBe('Preparar');
    expect(STAGE_TO_NOTION['Seguimiento']).toBe('Seguimiento');
    expect(Object.keys(STAGE_TO_NOTION)).toHaveLength(9);
  });
});
