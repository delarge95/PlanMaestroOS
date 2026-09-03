import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { assertPublicSafe, graphSummaryHandler, todayHandler } from './publicApi.js';

describe('publicApi', () => {
  it('today valida fecha; summary responde; PII bloqueada', async () => {
    const bad = await (await todayHandler('ayer', { dateIso: 'x', mode: 'n', top3: [] })).json();
    assert.equal(bad.status, 422);
    const ok = await (await todayHandler('2026-09-04', { dateIso: '2026-09-04', mode: 'normal', top3: [] })).json();
    assert.equal(ok.ok, true);
    const g = await (await graphSummaryHandler({ nodes: 10, edges: 5, orphans: 0, builtAtIso: 'x' })).json();
    assert.equal((g.data as { nodes: number }).nodes, 10);
    assert.throws(() => assertPublicSafe(['top3', 'contacts']));
  });
});
