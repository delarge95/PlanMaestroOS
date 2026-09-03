import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { LifeGraphEngine } from './engine.js';
import { feedFor, fitsEdge, unlockPath, whatLoads, whatStresses } from './queries.js';
import { buildGraph } from './build.js';
import type { GraphEdge, GraphNode } from './types.js';

function seed(): LifeGraphEngine {
  const e = new LifeGraphEngine();
  const nodes: GraphNode[] = [
    { id: 'ex:bench-press', kind: 'Exercise', label: 'Press banca' },
    { id: 'ex:floor-press', kind: 'Exercise', label: 'Floor press neutro' },
    { id: 'ex:band-row', kind: 'Exercise', label: 'Remo con banda' },
    { id: 'mu:pec-major', kind: 'Muscle', label: 'Pectoral mayor' },
    { id: 'mu:triceps', kind: 'Muscle', label: 'Tríceps' },
    { id: 'jo:shoulder', kind: 'Joint', label: 'Hombro' },
    { id: 'te:supraspinatus', kind: 'Tendon', label: 'Supraespinoso' },
    { id: 'pr:band-er', kind: 'Protocol', label: 'Rotación externa banda' },
    { id: 'sk:muscle-up', kind: 'Skill', label: 'Muscle-up' },
    { id: 'sk:pull-up', kind: 'Skill', label: 'Dominada' },
    { id: 're:pollo-arroz', kind: 'Recipe', label: 'Pollo+arroz' },
    { id: 'goal:volumen', kind: 'Metric', label: 'Objetivo volumen' },
  ];
  for (const n of nodes) e.addNode(n);
  const edges: GraphEdge[] = [
    { from: 'ex:bench-press', to: 'mu:pec-major', kind: 'loads', weight: 0.9 },
    { from: 'ex:floor-press', to: 'mu:pec-major', kind: 'loads', weight: 0.7 },
    { from: 'ex:floor-press', to: 'mu:triceps', kind: 'loads', weight: 0.6 },
    { from: 'ex:bench-press', to: 'jo:shoulder', kind: 'compresses_joint', weight: 1 },
    { from: 'ex:bench-press', to: 'te:supraspinatus', kind: 'stresses_tendon', weight: 1 },
    { from: 'pr:band-er', to: 'te:supraspinatus', kind: 'rehabilitates' },
    { from: 'sk:pull-up', to: 'sk:muscle-up', kind: 'requires' },
    { from: 're:pollo-arroz', to: 'goal:volumen', kind: 'targets' },
  ];
  for (const ed of edges) e.addEdge(ed);
  return e;
}

describe('graph engine', () => {
  it('whatLoads ordena por peso-evidencia', () => {
    const ids = whatLoads(seed(), 'mu:pec-major').map((n) => n.id);
    assert.deepEqual(ids, ['ex:bench-press', 'ex:floor-press']);
  });

  it('propagateInjuryImpact veta banca y sugiere prehab', () => {
    const eng = seed();
    const r = eng.propagateInjuryImpact('te:supraspinatus');
    assert.ok(r.contraindicatedExerciseIds.includes('ex:bench-press'));
    assert.ok(r.suggestedRehabProtocolIds.includes('pr:band-er'));
  });

  it('findSubstitutes propone floor-press (mismo músculo, sin estrés)', () => {
    const eng = seed();
    const subs = eng.findSubstitutes('ex:bench-press', new Set(['te:supraspinatus', 'jo:shoulder']));
    assert.ok(subs.some((s) => s.id === 'ex:floor-press'));
  });

  it('whatStresses con EVA<4 no veta; con EVA>=4 veta+sustituye', () => {
    const eng = seed();
    assert.equal(whatStresses(eng, 'te:supraspinatus', 2).banned.length, 0);
    const hi = whatStresses(eng, 'te:supraspinatus', 6);
    assert.ok(hi.banned.length > 0 && hi.substitutes.length > 0);
  });

  it('unlockPath: dominada es prerrequisito de muscle-up', () => {
    const { prerequisites } = unlockPath(seed(), 'sk:muscle-up');
    assert.ok(prerequisites.some((p) => p.id === 'sk:pull-up'));
  });

  it('feedFor(volumen) trae la receta', () => {
    assert.ok(feedFor(seed(), 'volumen').recipes.some((r) => r.id === 're:pollo-arroz'));
  });

  it('fitsEdge normaliza score a weight 0..1 con razones citadas', () => {
    const edge = fitsEdge('prj:twinsight', 'co:epic', 8, [{ factor: 'stack', points: 4, cite: 'doc-11' }]);
    assert.equal(edge.weight, 0.8);
    assert.match(edge.cite, /stack/);
  });

  it('buildGraph: cita sin doc y huérfanos >5% hacen ok=false', () => {
    const eng = seed();
    const g = eng.toJSON();
    const nodes: GraphNode[] = [
      ...g.nodes,
      { id: 'doc:x', kind: 'Document', label: 'Doc X' },
      { id: 'ex:lonely', kind: 'Exercise', label: 'Huérfano' },
    ];
    const edges: GraphEdge[] = [
      ...g.edges,
      { from: 'ex:bench-press', to: 'doc:x', kind: 'cites' }, // sin cite -> inválida
    ];
    const { report } = buildGraph(nodes, edges);
    assert.equal(report.citesWithoutDoc.length, 1);
    assert.equal(report.ok, false);
    assert.ok(report.orphans.includes('ex:lonely'));
  });

  it('addEdge con nodo inexistente lanza', () => {
    const eng = seed();
    assert.throws(() =>
      eng.addEdge({ from: 'ex:ghost', to: 'mu:pec-major', kind: 'loads' }),
    );
  });
});
