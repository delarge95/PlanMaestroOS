// Builder + validador puros (destino: scripts/build_graph.ts + validateGraph.ts).
// Entrada: nodos/aristas semilla; salida: KnowledgeGraph + reporte. Sin IO aquí
// para que sea testeable; el script fino de repo añade fs + globs.
import { LifeGraphEngine } from './engine';
import type { KnowledgeGraph } from '../../data/contracts/graph';

export interface BuildReport {
  counts: Record<string, number>;
  orphans: string[];
  citesWithoutDoc: string[];
  ok: boolean;
}

/** Nodos sin aristas (aislados) con tolerancia del 5% (archivo 16 §16.3). */
export function buildGraph(nodes: KnowledgeGraph['nodes'], edges: KnowledgeGraph['edges']): {
  graph: KnowledgeGraph;
  report: BuildReport;
} {
  const engine = new LifeGraphEngine();
  for (const n of nodes as KnowledgeGraph["nodes"]) engine.addNode(n);
  for (const e of edges as KnowledgeGraph["edges"]) engine.addEdge(e);
  const graph = engine.toJSON();

  const touched = new Set<string>();
  for (const e of edges as KnowledgeGraph["edges"]) {
    touched.add(e.from);
    touched.add(e.to);
  }
  const orphans = nodes.map((n) => n.id).filter((id) => !touched.has(id));
  const citesWithoutDoc = edges
    .filter((e) => e.kind === 'cites' && !e.cite)
    .map((e) => `${e.from}->${e.to}`);

  const counts: Record<string, number> = {};
  for (const n of nodes as KnowledgeGraph["nodes"]) counts[n.kind] = (counts[n.kind] ?? 0) + 1;

  const orphanRatio = nodes.length === 0 ? 0 : orphans.length / nodes.length;
  return {
    graph,
    report: { counts, orphans, citesWithoutDoc, ok: orphanRatio <= 0.05 && citesWithoutDoc.length === 0 },
  };
}
