// src/lib/ai/__tests__/contextQA.test.ts — Asistente contextual anti-alucinación (AG-INTE).
//
// Contrato verificado: recuperación determinista sobre rag/*.json, respuesta
// extractiva con citas (o silencio), facts de estado REALES leídos del store y
// determinismo total (misma pregunta → misma salida).

import { describe, it, expect, beforeEach } from 'vitest';
import {
  retrieveContext,
  buildAppStateFacts,
  answerContextually,
  askWithContext,
} from '../contextQA';
import { useCareerStore } from '../../../data/career/careerStore';
import { applicationsSeed } from '../../../data/career/applicationsSeed';

describe('retrieveContext — recuperación determinista sobre los RAG', () => {
  it('fitness: "volume semanal series duras" → chunks de fitness con score>0 y NADA de design', () => {
    const res = retrieveContext('volume semanal series duras');
    expect(res.length).toBeGreaterThan(0);
    expect(res[0].domain).toBe('fitness');
    expect(res[0].score).toBeGreaterThan(0);
    expect(res.some((r) => r.domain === 'design')).toBe(false);
  });

  it('design: "grid 8pt" → top chunk de design visual (vis-grid-systems)', () => {
    const res = retrieveContext('grid 8pt');
    expect(res[0].domain).toBe('design');
    expect(res[0].chunk.id).toBe('vis-grid-systems');
    expect(res[0].score).toBeGreaterThanOrEqual(4);
  });
});

describe('answerContextually — citation-or-silence', () => {
  beforeEach(() => {
    // Reset determinista al seed real del tracker (mismo patrón que careerStore.test).
    useCareerStore.setState({ applications: applicationsSeed.map((a) => ({ ...a })) });
  });

  it('pregunta sin sentido → insufficient, "evidencia insuficiente" y CERO contenido inventado', () => {
    const res = answerContextually('qqsin sentido xyz123');
    expect(res.confidence).toBe('insufficient');
    expect(res.answer.toLowerCase()).toContain('evidencia insuficiente');
    expect(res.citations).toHaveLength(0);
    expect(res.stateFacts).toHaveLength(0);
  });

  it('pregunta con evidencia → grounded, 2-4 chunks resumidos con citas chunkId/sourceId', () => {
    const res = answerContextually('volume semanal series duras');
    expect(res.confidence).toBe('grounded');
    expect(res.citations.length).toBeGreaterThanOrEqual(2);
    expect(res.citations.length).toBeLessThanOrEqual(4);
    expect(res.citations.every((c) => c.chunkId.length > 0 && c.sourceId.length > 0)).toBe(true);
    // La respuesta cita las fuentes que recupera (anti-alucinación).
    for (const c of res.citations) expect(res.answer).toContain(`[${c.sourceId}`);
  });

  it('pregunta laboral → stateFacts incluye el conteo REAL de aplicaciones del store', () => {
    const active = useCareerStore
      .getState()
      .applications.filter((a) => a.stage !== 'Cerrado').length;
    const res = answerContextually(
      'estado de mi pipeline laboral: cuantas aplicaciones activas tengo',
    );
    expect(res.confidence).not.toBe('insufficient');
    expect(res.stateFacts.some((f) => f.includes(`${active} aplicaciones activas`))).toBe(true);
  });

  it('determinismo: misma pregunta → misma salida exacta (respuesta, citas, facts)', () => {
    const a = answerContextually('grid 8pt');
    const b = answerContextually('grid 8pt');
    expect(JSON.stringify(a)).toBe(JSON.stringify(b));
  });
});

describe('buildAppStateFacts — estado vivo, nunca inventado', () => {
  it('todos los facts tienen texto no vacío y origen "app:*"', () => {
    for (const f of buildAppStateFacts()) {
      expect(f.fact.trim().length).toBeGreaterThan(0);
      expect(f.source.startsWith('app:')).toBe(true);
    }
  });
});

describe('askWithContext — fallback local sin worker', () => {
  it('sin PUBLIC_WORKER_URL responde exactamente igual que el extractivo local', async () => {
    const local = answerContextually('grid 8pt');
    const res = await askWithContext('grid 8pt');
    expect(res.answer).toBe(local.answer);
    expect(res.citations).toEqual(local.citations);
    expect(res.confidence).toBe(local.confidence);
  });

  it('sin evidencia no consulta al worker: devuelve el silencio local', async () => {
    const res = await askWithContext('qqsin sentido xyz123');
    expect(res.confidence).toBe('insufficient');
    expect(res.citations).toHaveLength(0);
  });
});
