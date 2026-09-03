import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { COMPANY_SEEDS, remotePoints } from './companySeeds.js';
import { fitScore } from './fitScore.js';

describe('companySeeds', () => {
  it('8 A + 9 B, URLs reales doc-11, stacks marcados inferred', () => {
    assert.equal(COMPANY_SEEDS.length, 17);
    assert.equal(COMPANY_SEEDS.filter((c) => c.priority === 'A').length, 8);
    assert.ok(COMPANY_SEEDS.every((c) => c.careersUrl.startsWith('https://')));
    assert.ok(COMPANY_SEEDS.every((c) => c.stackSource === 'inferred'));
    const ids = COMPANY_SEEDS.map((c) => c.id);
    assert.equal(new Set(ids).size, ids.length);
  });

  it('TwinSight (three/webgl) encaja alto con configuradoras', () => {
    const profile = { stack: ['three.js', 'webgl', 'typescript', 'unity'], seniority: 'mid' as const, remoteOk: true, timezone: 'UTC-5', languages: ['es', 'en'] as Array<'es' | 'en'> };
    const emersya = COMPANY_SEEDS.find((c) => c.id === 'co-emersya')!;
    const r = fitScore(profile, { ...emersya, seniority: 'mid', remotePolicy: 'hybrid', recentSignal: true });
    assert.ok(r.score >= 7, `score ${r.score}`);
  });

  it('remote unknown = prior neutral 1', () => {
    assert.deepEqual(remotePoints('unknown', true), { points: 1, cite: 'remote desconocido: prior neutral 1 (verificar en research)' });
    assert.equal(remotePoints('remote', true).points, 2);
  });
});
