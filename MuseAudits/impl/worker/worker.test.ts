import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { PROMPTS } from './prompts.js';
import { buildCareerResearchBrief, buildMorningPlan, detectStuckTasks } from './jobs.js';
import { handleRequest } from './server.js';

const req = (path: string, init?: RequestInit) => new Request(`https://w.local${path}`, init);

describe('worker', () => {
  it('9 prompts versionados, solo language-practice sin approval', () => {
    const keys = Object.keys(PROMPTS);
    assert.equal(keys.length, 9);
    for (const k of keys) {
      const p = PROMPTS[k as keyof typeof PROMPTS];
      assert.equal(p.version, 1);
      assert.ok(p.maxTokens >= 600 && p.maxTokens <= 2000);
      assert.ok(p.system.length > 10 && p.user({}).length > 10);
    }
    assert.equal(PROMPTS['language-practice'].requiresApproval, false);
    assert.ok(Object.values(PROMPTS).filter((p) => p.requiresApproval).length === 8);
  });

  it('tailor-cv prohíbe inventar en el system prompt', () => {
    assert.match(PROMPTS['tailor-cv'].system, /PROHIBIDO inventar/);
  });

  it('morning plan: crisis -> min_viable; normal usa calendario+vocab', () => {
    const low = buildMorningPlan({ dateIso: '2026-09-04', overdue: [], todayCalendar: [], energy: 'crisis', vocabDue: 30 });
    assert.equal(low.mode, 'min_viable');
    const ok = buildMorningPlan({ dateIso: '2026-09-04', overdue: [], todayCalendar: ['Lower 2'], energy: 'high', vocabDue: 30 });
    assert.equal(ok.mode, 'normal');
    assert.match(ok.top3[1].title, /Lower 2/);
    assert.match(ok.top3[2].title, /15 tarjetas/);
  });

  it('detectStuckTasks: >7 días y no Hecho', () => {
    const out = detectStuckTasks(
      [
        { id: 'a', title: 'Vieja', status: 'EnCurso', dueDateIso: '2026-08-20', area: 'x' },
        { id: 'b', title: 'Nueva', status: 'EnCurso', dueDateIso: '2026-09-03', area: 'x' },
        { id: 'c', title: 'Hecha', status: 'Hecho', dueDateIso: '2026-08-01', area: 'x' },
      ],
      '2026-09-04T12:00:00Z',
    );
    assert.deepEqual(out.map((t) => t.id), ['a']);
  });

  it('server: sin key IA -> 501; con key pero mala auth -> 401; draft ok con mock', async () => {
    const draftBody = { domain: 'career', task: 'summarize-job', contextChunkIds: ['doc-11'] };
    const r501 = await handleRequest(
      req('/ai/draft', { method: 'POST', body: JSON.stringify(draftBody) }),
      { workerKey: 'k' },
    );
    assert.equal(r501.status, 501);

    const r401 = await handleRequest(
      req('/ai/draft', { method: 'POST', headers: { 'x-pm-key': 'mala' }, body: JSON.stringify(draftBody) }),
      { workerKey: 'k', geminiKey: 'g', ai: { complete: async () => ({ content: 'x', tokensUsed: 1 }) } },
    );
    assert.equal(r401.status, 401);

    const r200 = await handleRequest(
      req('/ai/draft', { method: 'POST', headers: { 'x-pm-key': 'k' }, body: JSON.stringify(draftBody) }),
      { workerKey: 'k', geminiKey: 'g', ai: { complete: async () => ({ content: 'borrador', tokensUsed: 42 }) } },
    );
    assert.equal(r200.status, 200);
    const data = (await r200.json()) as { ok: boolean; data: { requiresApproval: boolean; tokensUsed: number } };
    assert.equal(data.ok, true);
    assert.equal(data.data.requiresApproval, true);
    assert.equal(data.data.tokensUsed, 42);
  });

  it('server: sync/push valida y morning-plan responde', async () => {
    const r422 = await handleRequest(
      req('/sync/push', { method: 'POST', headers: { 'x-pm-key': 'k' }, body: JSON.stringify({}) }),
      { workerKey: 'k' },
    );
    assert.equal(r422.status, 422);
    const rGet = await handleRequest(req('/jobs/morning-plan?dateIso=2026-09-04', { headers: { 'x-pm-key': 'k' } }), { workerKey: 'k' });
    assert.equal(rGet.status, 200);
  });

  it('career brief cita fit + siguiente paso', () => {
    const b = buildCareerResearchBrief({ companyId: 'c', name: 'X', stack: ['unity'], fitScore: 8, fitReasons: ['stack+4'] });
    assert.match(b, /fit 8\/10/);
    assert.match(b, /draft-cold-email/);
  });
});
