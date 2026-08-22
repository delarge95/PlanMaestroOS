/**
 * build.ts — Ensamblado del documento RAG v4 desde manifest + markdowns.
 *
 * Función pura `buildDocument` (fácil de testear); el CLI (index.ts) hace
 * el I/O de disco. Reglas de entrada:
 *
 * - `manifest.json` (OPCIONAL): `{ "sources": RagSource[] }` con la
 *   bibliografía completa (evidenceTier, authority, edición…).
 * - Sin manifest, cada markdown registra su fuente automáticamente como
 *   `type: 'md'`, `evidenceTier: 'internal-doc'` (con warning) — suficiente
 *   para arrancar sin biblioteca extraída todavía.
 * - Con manifest, todo sourceId de archivo DEBE estar declarado (protección
 *   de typos) y las fuentes declaradas sin chunks generan warning.
 *
 * El documento resultante SIEMPRE se valida antes de escribirse a disco.
 */

import type { RagChunk, RagDocument, RagDomain, RagSource } from './schema';
import { validateRagDocument, RAG_VERSION } from './schema';
import { parseSourceMarkdown, sourceIdFromFileName } from './markdown';

export interface RagManifest {
  domain?: string;
  sources: RagSource[];
}

export interface SourceFile {
  fileName: string;
  content: string;
}

export interface BuildResult {
  ok: boolean;
  doc: RagDocument;
  /** Errores de parseo de markdown o de esquema. */
  errors: string[];
  warnings: string[];
}

function autoSource(domain: RagDomain, fileName: string): RagSource {
  return {
    id: sourceIdFromFileName(fileName),
    title: fileName.replace(/\.md$/i, '').replace(/--/g, ' · '),
    author: '',
    year: null,
    edition: '',
    type: 'md',
    evidenceTier: 'internal-doc',
    authority: { domains: [domain], priority: 99 },
  };
}

/**
 * Ensambla (y valida) un RagDocument. Determinista respecto a `input`.
 * El orden de sources/chunks sigue el orden de declaración/archivo.
 */
export function buildDocument(input: {
  domain: RagDomain;
  manifest?: RagManifest;
  files: SourceFile[];
}): BuildResult {
  const { domain, manifest, files } = input;
  const errors: string[] = [];
  const warnings: string[] = [];

  if (manifest?.domain && manifest.domain !== domain) {
    errors.push(`manifest.domain "${manifest.domain}" ≠ --domain "${domain}".`);
  }

  // — sources —
  const sources: RagSource[] = [];
  const sourcesById = new Map<string, RagSource>();
  if (manifest) {
    for (const s of manifest.sources) {
      if (sourcesById.has(s.id)) errors.push(`manifest: source id duplicado "${s.id}".`);
      sources.push(s);
      sourcesById.set(s.id, s);
    }
  }

  // — parseo de markdowns —
  const chunks: RagChunk[] = [];
  const seenChunkIds = new Set<string>();
  for (const file of files) {
    const parsed = parseSourceMarkdown(file.fileName, file.content);
    errors.push(...parsed.errors);

    const source = sourcesById.get(parsed.sourceId);
    if (!source) {
      if (manifest) {
        errors.push(`${file.fileName}: sourceId "${parsed.sourceId}" no declarado en manifest.json (¿typo?).`);
      } else {
        const generated = autoSource(domain, file.fileName);
        sources.push(generated);
        sourcesById.set(generated.id, generated);
        warnings.push(
          `${file.fileName}: sin manifest; fuente "${generated.id}" auto-registrada como internal-doc md.`,
        );
      }
    }

    for (const chunk of parsed.chunks) {
      if (seenChunkIds.has(chunk.id)) {
        errors.push(`chunk id duplicado en el documento: "${chunk.id}".`);
        continue;
      }
      seenChunkIds.add(chunk.id);
      chunks.push(chunk);
    }
  }

  const doc: RagDocument = {
    domain,
    version: RAG_VERSION,
    sources,
    chunks,
  };

  const validation = validateRagDocument(doc);
  errors.push(...validation.errors);
  warnings.push(...validation.warnings);

  return { ok: errors.length === 0 && validation.ok, doc, errors, warnings };
}
