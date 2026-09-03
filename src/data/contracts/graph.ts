// Contrato del grafo — espejo de archivo 16 (destino: src/data/contracts/graph.ts).
// Regla: Rule -cites-> Document OBLIGATORIO; TODO-cita no entra (ADR-8).

export type NodeKind =
  | 'Exercise' | 'Muscle' | 'Joint' | 'Tendon' | 'Ligament' | 'Nerve' | 'Bursa' | 'Bone'
  | 'Rule' | 'Suggestion' | 'Document' | 'Video' | 'Application' | 'Company' | 'Skill'
  | 'Protocol' | 'Session' | 'Metric' | 'Recipe' | 'Course' | 'Project' | 'CVVariant';

export interface GraphNode {
  id: string;
  kind: NodeKind;
  label: string;
  ref?: { notionPageId?: string; externalId?: string; docId?: string };
}

export type EdgeKind =
  | 'loads' | 'stresses' | 'evaluates' | 'cites' | 'derived_from' | 'affects'
  | 'targets' | 'uses' | 'treats' | 'produces' | 'requires' | 'unlocks' | 'fits' | 'feeds'
  // Alias biomecánicos finos (Gemini G-ontología, mapeados a los canónicos):
  // loads_primary/loads_secondary -> 'loads' (weight distingue), stresses_tendon/
  // compresses_joint -> 'stresses', contraindicated_for -> 'stresses' (weight 0),
  // rehabilitates -> 'treats', requires_skill -> 'requires', teaches_skill -> 'feeds'.
  | 'loads_primary' | 'loads_secondary' | 'stresses_tendon' | 'compresses_joint'
  | 'contraindicated_for' | 'rehabilitates' | 'requires_skill' | 'teaches_skill';

export interface GraphEdge {
  from: string;
  to: string;
  kind: EdgeKind;
  /** 0..1: intensidad/confianza. En 'stresses' con lesión activa, 0 = vetado. */
  weight?: number;
  /** Cita obligatoria cuando kind === 'cites'. */
  cite?: string;
}

export interface KnowledgeGraph {
  version: 1;
  builtAtIso: string;
  nodes: GraphNode[];
  edges: GraphEdge[];
}

/** Normaliza alias finos al vocabulario canónico del archivo 16. */
export function canonicalEdge(kind: EdgeKind): EdgeKind {
  switch (kind) {
    case 'loads_primary':
    case 'loads_secondary':
      return 'loads';
    case 'stresses_tendon':
    case 'compresses_joint':
    case 'contraindicated_for':
      return 'stresses';
    case 'rehabilitates':
      return 'treats';
    case 'requires_skill':
      return 'requires';
    case 'teaches_skill':
      return 'feeds';
    default:
      return kind;
  }
}
