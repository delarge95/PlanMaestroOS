// Motor del grafo en memoria — puro, sin IO. Fusión: API de LifeGraphEngine
// (Gemini-13 §1, adoptada) sobre el contrato canónico del archivo 16 (Muse).
import { canonicalEdge, type GraphEdge, type GraphNode, type KnowledgeGraph } from './types.js';

interface AdjEntry {
  targetId: string;
  edge: GraphEdge;
}

export class LifeGraphEngine {
  private nodes = new Map<string, GraphNode>();
  private adjacency = new Map<string, AdjEntry[]>();
  private reverse = new Map<string, AdjEntry[]>();

  addNode(node: GraphNode): void {
    this.nodes.set(node.id, node);
    if (!this.adjacency.has(node.id)) this.adjacency.set(node.id, []);
    if (!this.reverse.has(node.id)) this.reverse.set(node.id, []);
  }

  addEdge(edge: GraphEdge): void {
    if (!this.nodes.has(edge.from) || !this.nodes.has(edge.to)) {
      throw new Error(`Edge references non-existing node: ${edge.from} -> ${edge.to}`);
    }
    this.adjacency.get(edge.from)!.push({ targetId: edge.to, edge });
    this.reverse.get(edge.to)!.push({ targetId: edge.from, edge });
  }

  getNode(id: string): GraphNode | undefined {
    return this.nodes.get(id);
  }

  get size(): number {
    return this.nodes.size;
  }

  /** Vecinos salientes, opcionalmente filtrados por relación (canónica). */
  outgoing(nodeId: string, relation?: string): GraphNode[] {
    return (this.adjacency.get(nodeId) ?? [])
      .filter((e) => !relation || canonicalEdge(e.edge.kind) === relation)
      .map((e) => this.nodes.get(e.targetId)!)
      .filter(Boolean);
  }

  /** Vecinos entrantes, opcionalmente filtrados por relación (canónica). */
  incoming(nodeId: string, relation?: string): GraphNode[] {
    return (this.reverse.get(nodeId) ?? [])
      .filter((e) => !relation || canonicalEdge(e.edge.kind) === relation)
      .map((e) => this.nodes.get(e.targetId)!)
      .filter(Boolean);
  }

  incomingEdges(nodeId: string, relation?: string): GraphEdge[] {
    return (this.reverse.get(nodeId) ?? [])
      .filter((e) => !relation || canonicalEdge(e.edge.kind) === relation)
      .map((e) => e.edge);
  }

  /**
   * Propagación de lesión (Gemini-13 §1 + archivo 16 query 2):
   * ejercicios que estresan la estructura + protocolos que la tratan.
   */
  propagateInjuryImpact(injuredStructureId: string): {
    contraindicatedExerciseIds: string[];
    suggestedRehabProtocolIds: string[];
  } {
    const contra = new Set<string>();
    const rehab = new Set<string>();
    for (const { targetId, edge } of this.reverse.get(injuredStructureId) ?? []) {
      const rel = canonicalEdge(edge.kind);
      const node = this.nodes.get(targetId);
      if (!node) continue;
      if (rel === 'stresses' && node.kind === 'Exercise' && (edge.weight ?? 1) > 0) {
        contra.add(targetId);
      }
      if (rel === 'treats' && node.kind === 'Protocol') rehab.add(targetId);
    }
    return {
      contraindicatedExerciseIds: [...contra],
      suggestedRehabProtocolIds: [...rehab],
    };
  }

  /**
   * Sustitutos sanos: mismo patrón motor (arista loads al mismo músculo con
   * weight mayor) que NO estresen ninguna estructura del conjunto vetado.
   */
  findSubstitutes(exerciseId: string, bannedStructureIds: Set<string>, max = 3): GraphNode[] {
    const muscles = new Set(this.outgoing(exerciseId, 'loads').map((n) => n.id));
    if (muscles.size === 0) return [];
    const scored: Array<{ node: GraphNode; score: number }> = [];
    for (const node of this.nodes.values()) {
      if (node.kind !== 'Exercise' || node.id === exerciseId) continue;
      const loads = this.outgoing(node.id, 'loads');
      const overlap = loads.filter((m) => muscles.has(m.id)).length;
      if (overlap === 0) continue;
      const stresses = this.outgoing(node.id, 'stresses').map((s) => s.id);
      if (stresses.some((s) => bannedStructureIds.has(s))) continue;
      scored.push({ node, score: overlap });
    }
    return scored
      .sort((a, b) => b.score - a.score)
      .slice(0, max)
      .map((s) => s.node);
  }

  toJSON(): KnowledgeGraph {
    const edges: GraphEdge[] = [];
    for (const list of this.adjacency.values()) for (const e of list) edges.push(e.edge);
    return {
      version: 1,
      builtAtIso: new Date().toISOString(),
      nodes: [...this.nodes.values()],
      edges,
    };
  }

  static fromJSON(g: KnowledgeGraph): LifeGraphEngine {
    const eng = new LifeGraphEngine();
    for (const n of g.nodes) eng.addNode(n);
    for (const e of g.edges) eng.addEdge(e);
    return eng;
  }
}
