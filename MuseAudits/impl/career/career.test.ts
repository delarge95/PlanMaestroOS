import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { fitScore, stackOverlap } from './fitScore.js';
import { composeVariant } from './composeVariant.js';
import { applyExpiry, attackOrder, freshness } from './jobFeed.js';
import { rankCourses } from './courseROI.js';

describe('career', () => {
  it('stackOverlap normaliza y mide cobertura del stack pedido', () => {
    assert.equal(stackOverlap(['Unity', 'C#'], ['unity', 'c#', 'hlsl']), 2 / 3);
    assert.equal(stackOverlap([], ['unity']), 0);
  });

  it('fitScore suma 10 con desglose citado', () => {
    const r = fitScore(
      { stack: ['unity', 'c#', 'hlsl'], seniority: 'mid', remoteOk: true, timezone: 'UTC-5', languages: ['es', 'en'] },
      { id: 'co:x', stack: ['unity', 'c#', 'hlsl'], seniority: 'mid', remotePolicy: 'remote', workingLanguage: 'en', recentSignal: true },
    );
    assert.equal(r.score, 10);
    assert.equal(r.reasons.length, 5);
    assert.ok(r.reasons.every((x) => x.cite.length > 0));
  });

  it('fitScore penaliza seniority lejano y presencial', () => {
    const r = fitScore(
      { stack: ['unity'], seniority: 'junior', remoteOk: true, timezone: 'UTC-5', languages: ['es'] },
      { id: 'co:y', stack: ['unity', 'unreal'], seniority: 'senior', remotePolicy: 'onsite', workingLanguage: 'en', recentSignal: false },
    );
    assert.ok(r.score < 5);
  });

  it('composeVariant ordena proyectos y nunca inventa datos', () => {
    const v = composeVariant(
      { id: 'co:x', name: 'X', stack: ['unity', 'hlsl'] },
      'unity-technical-artist',
      [
        { id: 'p1', title: 'Web', stack: ['react'], bullets: ['b1'], demoUrl: '[DEMO_URL_PENDIENTE]' },
        { id: 'p2', title: 'ShaderLab', stack: ['unity', 'hlsl'], bullets: ['b2'], demoUrl: 'https://real.demo/x' },
      ],
      ['unity', 'hlsl', 'react'],
      ['email', 'teléfono'],
    );
    assert.deepEqual(v.projectIds, ['p2', 'p1']);
    assert.equal(v.skillOrder[0], 'unity');
    assert.ok(v.headline.includes('PLACEHOLDER'));
    assert.deepEqual(v.placeholders, ['email', 'teléfono']);
  });

  it('jobFeed: fresh<=72h, aging<=7d, stale archiva', () => {
    const now = '2026-09-04T12:00:00Z';
    const jobs = [
      { id: 'j1', companyId: 'c', title: 'A', url: 'u', publishedAtIso: '2026-09-03T12:00:00Z', status: 'nueva' as const },
      { id: 'j2', companyId: 'c', title: 'B', url: 'u', publishedAtIso: '2026-08-20T12:00:00Z', status: 'nueva' as const },
    ];
    assert.equal(freshness(jobs[0], now), 'fresh');
    const { jobs: out, archivedIds } = applyExpiry(jobs, now);
    assert.deepEqual(archivedIds, ['j2']);
    assert.equal(out[1].status, 'archivada');
    assert.deepEqual(attackOrder(out, now).map((j) => j.id), ['j1']);
  });

  it('courseROI prioriza demanda×brecha/horas y bloquea sin artefacto 14d', () => {
    const ranked = rankCourses(
      [
        { id: 'c1', title: 'HLSL', hours: 10, teaches: ['hlsl'], producesArtifactDays: 7 },
        { id: 'c2', title: 'Lento', hours: 10, teaches: ['hlsl'], producesArtifactDays: 30 },
      ],
      [{ skillId: 'hlsl', postingCount: 18, portfolioGap: 1 }],
    );
    assert.equal(ranked[0].courseId, 'c1');
    assert.equal(ranked[0].roi, 1.8);
    assert.match(ranked[1].blockedReason ?? '', /14 días/);
  });
});
