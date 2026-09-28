/**
 * schema.ts — Esquema RAG v4 y validador (AG-CORE, Ola 1).
 *
 * Contrato §4 de docs/agents/PLAN_MULTIAGENTE.md: cada dominio produce
 * `rag/<domain>.json` con `sources[]` (evidencia/autoridad) y `chunks[]`
 * (parafrasis citada). Este módulo es la única definición del esquema:
 * builder, validador CLI y consumo runtime lo comparten.
 *
 * Nota: `evidenceTier` usa el mismo vocabulario que `src/lib/rules`
 * ('rct', no 'rtc' como aparece por error en el ejemplo del plan).
 */

/** Dominios conocidos (el plan §4 + 'core' para docs de arquitectura + dominios de mandatos de usuario). */
export const RAG_DOMAINS = [
  'fitness', 'anatomy', 'nutrition', 'cardio', 'career', 'german', 'english',
  'clinical', 'portfolio', 'gastronomy', 'core', 'design', 'wearable', 'prediction',
] as const;


export type RagDomain = (typeof RAG_DOMAINS)[number];

export const RAG_VERSION = '4.0.0' as const;

export type SourceType = 'book' | 'paper' | 'md' | 'pdf' | 'dataset';

/** Igual vocabulario que EvidenceTier de src/lib/rules (resolución de conflictos §0.8). */
export type RagEvidenceTier = 'meta-analysis' | 'rct' | 'observational' | 'expert-book' | 'internal-doc';

/** Matriz de autoridad: en qué temas manda esta fuente y con qué prioridad (1 = máxima). */
export interface RagAuthority {
  domains: string[];
  priority: number;
}

export interface RagSource {
  /** Id estable ('overcoming-gravity-2', 'doc-24-offer-scorecard'). */
  id: string;
  title: string;
  author: string;
  year: number | null;
  /** Edición SIEMPRE (las páginas cambian entre ediciones). */
  edition: string;
  type: SourceType;
  evidenceTier: RagEvidenceTier;
  authority: RagAuthority;
}

export interface RagLocator {
  chapter?: number | string;
  page?: number;
  /** Para fuentes sin página (md interno): sección/heading exacto. */
  section?: string;
}

export interface RagChunk {
  id: string;
  sourceId: string;
  /** Taxonomía del dominio ('volume', 'protein-timing', 'declension'…). */
  topic: string;
  tags: string[];
  /** Cita exacta: chapter, page o section obligatorio (al menos uno). */
  locator: RagLocator;
  /** Paráfrasis propia, sin copyright. */
  summary: string;
  /** Entidades del grafo ('exercise:planche', 'muscle:pec-major'…). */
  entities: string[];
  /** ruleIds alimentadas por este chunk. */
  rules: string[];
}

export interface RagDocument {
  domain: RagDomain;
  version: typeof RAG_VERSION;
  sources: RagSource[];
  chunks: RagChunk[];
}

export interface RagIndexEntry {
  version: string;
  sources: number;
  chunks: number;
}

/** rag/index.json: inventario de todos los rag/<domain>.json construidos. */
export interface RagIndex {
  version: typeof RAG_VERSION;
  domains: Record<string, RagIndexEntry>;
}

// ——————————————————————————— validador ———————————————————————————

export interface ValidationOptions {
  /** Límite de caracteres del summary (parafrasis, no transcripción). Default 1200. */
  maxSummaryChars?: number;
}

export interface ValidationResult {
  ok: boolean;
  errors: string[];
  warnings: string[];
}

const SOURCE_TYPES: readonly SourceType[] = ['book', 'paper', 'md', 'pdf', 'dataset'];
const EVIDENCE_TIERS: readonly RagEvidenceTier[] = [
  'meta-analysis', 'rct', 'observational', 'expert-book', 'internal-doc',
];

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((v) => typeof v === 'string' && v.trim().length > 0);
}

function hasLocator(locator: RagLocator | undefined): boolean {
  if (!locator) return false;
  return locator.chapter !== undefined || locator.page !== undefined || locator.section !== undefined;
}

/**
 * Valida un documento RAG completo contra el esquema v4.
 * Determinista: solo inspecciona el documento, sin I/O.
 */
export function validateRagDocument(doc: unknown, options: ValidationOptions = {}): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const maxSummaryChars = options.maxSummaryChars ?? 1200;

  if (typeof doc !== 'object' || doc === null) {
    return { ok: false, errors: ['El documento no es un objeto JSON.'], warnings };
  }
  const d = doc as Record<string, unknown>;

  if (!(RAG_DOMAINS as readonly string[]).includes(d['domain'] as string)) {
    errors.push(`domain "${String(d['domain'])}" inválido (esperado uno de: ${RAG_DOMAINS.join(', ')}).`);
  }
  if (d['version'] !== RAG_VERSION) {
    errors.push(`version "${String(d['version'])}" inválida (esperado "${RAG_VERSION}").`);
  }

  // — sources —
  const sources = d['sources'];
  if (!Array.isArray(sources)) {
    errors.push('sources debe ser un array.');
  } else {
    const seenSourceIds = new Set<string>();
    sources.forEach((s, i) => {
      const src = s as Record<string, unknown>;
      const label = `sources[${i}]`;
      if (typeof src['id'] !== 'string' || src['id'].trim() === '') {
        errors.push(`${label}.id vacío o ausente.`);
      } else if (seenSourceIds.has(src['id'])) {
        errors.push(`${label}.id duplicado: "${src['id']}".`);
      } else {
        seenSourceIds.add(src['id'] as string);
      }
      if (typeof src['title'] !== 'string' || src['title'].trim() === '') {
        errors.push(`${label} (${String(src['id'])}): title vacío.`);
      }
      if (!SOURCE_TYPES.includes(src['type'] as SourceType)) {
        errors.push(`${label} (${String(src['id'])}): type "${String(src['type'])}" inválido.`);
      }
      if (!EVIDENCE_TIERS.includes(src['evidenceTier'] as RagEvidenceTier)) {
        errors.push(`${label} (${String(src['id'])}): evidenceTier "${String(src['evidenceTier'])}" inválido.`);
      }
      const authority = src['authority'] as Record<string, unknown> | undefined;
      if (!authority || !isStringArray(authority['domains']) || (authority['domains'] as string[]).length === 0) {
        errors.push(`${label} (${String(src['id'])}): authority.domains debe ser un array no vacío.`);
      } else if (typeof authority['priority'] !== 'number' || !Number.isInteger(authority['priority']) || authority['priority'] < 1) {
        errors.push(`${label} (${String(src['id'])}): authority.priority debe ser un entero ≥ 1.`);
      }
      if (src['type'] === 'book' && (typeof src['edition'] !== 'string' || src['edition'].trim() === '')) {
        errors.push(`${label} (${String(src['id'])}): los libros exigen edition (las páginas cambian entre ediciones).`);
      }
    });
  }

  // — chunks —
  const chunks = d['chunks'];
  if (!Array.isArray(chunks)) {
    errors.push('chunks debe ser un array.');
  } else {
    const validSourceIds = new Set(
      Array.isArray(sources) ? (sources as Record<string, unknown>[]).map((s) => String(s['id'])) : [],
    );
    const seenChunkIds = new Set<string>();
    chunks.forEach((c, i) => {
      const ch = c as Record<string, unknown>;
      const label = `chunks[${i}]`;
      const chunkId = typeof ch['id'] === 'string' ? ch['id'] : '';
      if (chunkId.trim() === '') {
        errors.push(`${label}.id vacío o ausente.`);
      } else if (seenChunkIds.has(chunkId)) {
        errors.push(`${label}.id duplicado: "${chunkId}".`);
      } else {
        seenChunkIds.add(chunkId);
      }
      if (typeof ch['sourceId'] !== 'string' || !validSourceIds.has(ch['sourceId'] as string)) {
        errors.push(`${label} (${chunkId}): sourceId "${String(ch['sourceId'])}" no existe en sources.`);
      }
      if (typeof ch['topic'] !== 'string' || ch['topic'].trim() === '') {
        errors.push(`${label} (${chunkId}): topic vacío.`);
      }
      if (!hasLocator(ch['locator'] as RagLocator | undefined)) {
        errors.push(`${label} (${chunkId}): locator sin cita exacta (chapter, page o section).`);
      }
      const summary = ch['summary'];
      if (typeof summary !== 'string' || summary.trim() === '') {
        errors.push(`${label} (${chunkId}): summary vacío.`);
      } else if (summary.length > maxSummaryChars) {
        errors.push(`${label} (${chunkId}): summary de ${summary.length} chars > ${maxSummaryChars} (parafrasea, no transcribas).`);
      }
      for (const field of ['tags', 'entities', 'rules'] as const) {
        if (!isStringArray(ch[field])) {
          errors.push(`${label} (${chunkId}): ${field} debe ser array de strings no vacíos.`);
        }
      }
    });
    if (Array.isArray(sources) && Array.isArray(chunks)) {
      const usedSourceIds = new Set((chunks as Record<string, unknown>[]).map((c) => String(c['sourceId'])));
      for (const s of sources as Record<string, unknown>[]) {
        if (!usedSourceIds.has(String(s['id']))) {
          warnings.push(`source "${String(s['id'])}" declarada en manifest pero sin chunks (¿falta su markdown?).`);
        }
      }
    }
  }

  return { ok: errors.length === 0, errors, warnings };
}

/** Valida rag/index.json. */
export function validateRagIndex(index: unknown): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  if (typeof index !== 'object' || index === null) {
    return { ok: false, errors: ['El índice no es un objeto JSON.'], warnings };
  }
  const idx = index as Record<string, unknown>;
  if (idx['version'] !== RAG_VERSION) {
    errors.push(`version del índice inválida (esperado "${RAG_VERSION}").`);
  }
  const domains = idx['domains'];
  if (typeof domains !== 'object' || domains === null || Array.isArray(domains)) {
    errors.push('domains debe ser un objeto { <domain>: {version, sources, chunks} }.');
  } else {
    for (const [domain, entry] of Object.entries(domains as Record<string, unknown>)) {
      if (!(RAG_DOMAINS as readonly string[]).includes(domain)) {
        errors.push(`dominio desconocido en el índice: "${domain}".`);
      }
      const e = entry as Record<string, unknown>;
      if (typeof e['sources'] !== 'number' || typeof e['chunks'] !== 'number') {
        errors.push(`entrada de índice "${domain}": sources/chunks deben ser numéricos.`);
      }
    }
  }
  return { ok: errors.length === 0, errors, warnings };
}
