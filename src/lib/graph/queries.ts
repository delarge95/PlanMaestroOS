// Las 5 queries de aceptación del archivo 16 §16.4 — funciones puras.
// Sin estas 5 en verde, el grafo no existe aunque haya JSON.
import type { LifeGraphEngine } from './engine';
import type { GraphNode } from '../../data/contracts/graph';

export interface FitReason {
  factor: string;
  points: number;
  cite: string;
}

/** 1. whatLoads(muscleId): ejercicios ordenados por peso-evidencia. */
export function whatLoads(engine: LifeGraphEngine, muscleId: string): GraphNode[] {
  const scored = engine
    .incomingEdges(muscleId, 'loads')
    .map((e) => ({ node: engine.getNode(e.from)!, w: e.weight ?? 1 }))
    .filter((s) => s.node && s.node.kind === 'Exercise');
  return scored.sort((a, b) => b.w - a.w).map((s) => s.node);
}

/** 2. whatStresses(structureId): ejercicios vetados si EVA >= umbral. */
export function whatStresses(
  engine: LifeGraphEngine,
  structureId: string,
  eva: number,
  vetoThreshold = 4,
): { banned: GraphNode[]; substitutes: GraphNode[] } {
  const { contraindicatedExerciseIds } = engine.propagateInjuryImpact(structureId);
  const banned = contraindicatedExerciseIds
    .map((id) => engine.getNode(id)!)
    .filter(Boolean);
  if (eva < vetoThreshold) return { banned: [], substitutes: [] };
  const substitutes = banned.flatMap((b) =>
    engine.findSubstitutes(b.id, new Set([structureId]), 2),
  );
  return { banned, substitutes: [...new Map(substitutes.map((s) => [s.id, s])).values()] };
}

/** 4. unlockPath(skillId): cadena requires invertida + siguiente unlock. */
export function unlockPath(
  engine: LifeGraphEngine,
  skillId: string,
): { prerequisites: GraphNode[]; next: GraphNode[] } {
  return {
    prerequisites: engine.incoming(skillId, 'requires'),
    next: engine.outgoing(skillId, 'unlocks'),
  };
}

export interface FeedGoal {
  goal: 'deficit' | 'mantenimiento' | 'volumen';
}

/** 5. feedFor(goal): recetas + sesiones que apuntan al objetivo. */
export function feedFor(
  engine: LifeGraphEngine,
  goal: FeedGoal['goal'],
): { recipes: GraphNode[]; sessions: GraphNode[] } {
  const recipes: GraphNode[] = [];
  const sessions: GraphNode[] = [];
  for (const edge of allEdges(engine)) {
    if (edge.kind !== 'targets') continue;
    const node = engine.getNode(edge.from);
    if (!node) continue;
    if (edge.to !== `goal:${goal}`) continue;
    if (node.kind === 'Recipe') recipes.push(node);
    if (node.kind === 'Session') sessions.push(node);
  }
  return { recipes, sessions };
}

function allEdges(engine: LifeGraphEngine): Array<{ from: string; to: string; kind: string }> {
  const out: Array<{ from: string; to: string; kind: string }> = [];
  const g = engine.toJSON();
  for (const e of g.edges) out.push({ from: e.from, to: e.to, kind: e.kind });
  return out;
}

// 3. fitScore vive en career/fitScore.ts (necesita perfil + empresa).
// Aquí el puente: convierte reasons en arista 'fits' lista para el grafo.
export function fitsEdge(
  projectId: string,
  companyId: string,
  score0to10: number,
  reasons: FitReason[],
): { from: string; to: string; kind: 'fits'; weight: number; cite: string } {
  return {
    from: projectId,
    to: companyId,
    kind: 'fits',
    weight: Math.max(0, Math.min(1, score0to10 / 10)),
    cite: reasons.map((r) => `${r.factor}+${r.points}`).join(';'),
  };
}
