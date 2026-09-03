// chunkValidate — validador de chunks v4 (formato LOTE-1). Destino: scripts/validateChunks.ts
// Rechaza: summary >1200 chars, id sin prefijo de dominio, locator vacío,
// sourceRef TODO-cita (ADR-8: a cola de curación, jamás al grafo en silencio).

export interface ChunkLite {
  id: string;
  sourceId: string;
  topic: string;
  tags: string[];
  locator: { chapter?: string | number; page?: number; section?: string };
  summary: string;
}

export function validateChunk(domainPrefix: string, c: ChunkLite): string[] {
  const errors: string[] = [];
  if (!c.id.startsWith(domainPrefix)) errors.push(`id sin prefijo ${domainPrefix}: ${c.id}`);
  if (!c.sourceId || c.sourceId === 'TODO-cita' || c.sourceId.includes('TODO')) {
    errors.push(`sourceId inválido (TODO-cita): ${c.id}`);
  }
  if (!c.topic) errors.push(`topic vacío: ${c.id}`);
  if (!c.locator.chapter && !c.locator.page && !c.locator.section) {
    errors.push(`locator vacío: ${c.id}`);
  }
  if (!c.summary || c.summary.length === 0) errors.push(`summary vacío: ${c.id}`);
  if (c.summary.length > 1200) errors.push(`summary >1200 chars (${c.summary.length}): ${c.id}`);
  return errors;
}

export function validateChunks(domainPrefix: string, chunks: ChunkLite[]): { ok: boolean; errors: string[] } {
  const errors = chunks.flatMap((c) => validateChunk(domainPrefix, c));
  const ids = chunks.map((c) => c.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  for (const d of [...new Set(dupes)]) errors.push(`id duplicado: ${d}`);
  return { ok: errors.length === 0, errors };
}
