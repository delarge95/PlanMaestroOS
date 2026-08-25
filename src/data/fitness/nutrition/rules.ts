// src/data/fitness/nutrition/rules.ts â€” Acceso tipado al RAG de nutriciÃ³n (rag/nutrition.json, formato v4)
// Desde el ciclo 2 NO existe array rules[] legacy: las reglas viven como chunks
// (rag/nutrition/fuentes/<sourceId>--rules.md) con sus valores numÃ©ricos codificados
// en `entities` (num:ruta=valor, unit:, confidence:, tier:, cond:clave=valor).
// Este mÃ³dulo compila un Ã­ndice derivado chunksâ†’RagRule una vez al cargar; los
// valores de cÃ¡lculo SIEMPRE se leen del JSON reconstruido (fuente Ãºnica de verdad).

import ragJson from '../../../../rag/nutrition.json';
import type { Confidence, RuleCitation } from './types';

export interface RagLocator {
  chapter: number;
  page: number;
}

export interface RagRule {
  id: string;
  sourceId: string;
  topic: string;
  tags?: string[];
  statement: string;
  values: Record<string, number | Record<string, number>> | null;
  unit?: string;
  conditions?: Record<string, unknown>;
  confidence: Confidence;
  evidenceTier: string;
  locator: RagLocator;
}

export interface RagSource {
  id: string;
  title: string;
  author: string;
  year: number | null;
  edition: string;
  type: string;
  evidenceTier: string;
}

interface RawChunk {
  id: string;
  sourceId: string;
  topic: string;
  tags?: string[];
  summary: string;
  entities?: string[];
  locator: { chapter?: number | string; page?: number; section?: string | number };
}

interface RagFileShape {
  domain: string;
  version: string;
  sources: RagSource[];
  chunks: RawChunk[];
}

export const nutritionRag = ragJson as unknown as RagFileShape;

const SOURCE_SHORT: Record<string, string> = {
  'nsca-est-4ed': 'NSCA Essentials 4Âª ed (2016)',
  'maughan-nutrition-in-sport': 'Maughan, Nutrition in Sport (IOC, 2000)',
  'sportnutrition-3g-2022': 'Sport Nutrition, 3G E-learning (2022)',
};

function setByPath(target: Record<string, unknown>, path: string, value: number): void {
  const parts = path.split('.');
  let node = target;
  for (let i = 0; i < parts.length - 1; i += 1) {
    const key = parts[i];
    if (typeof node[key] !== 'object' || node[key] === null) {
      node[key] = {};
    }
    node = node[key] as Record<string, unknown>;
  }
  node[parts[parts.length - 1]] = value;
}

/** Convierte un chunk de regla (generado por migrate-rules-to-chunks.ts) en RagRule. */
function chunkToRule(chunk: RawChunk): RagRule | null {
  if (
    typeof chunk.locator.chapter !== 'number' ||
    typeof chunk.locator.page !== 'number' ||
    typeof chunk.summary !== 'string'
  ) {
    return null;
  }

  let hasValues = false;
  const values: Record<string, unknown> = {};
  let unit: string | undefined;
  let confidence: Confidence = 'qualitative';
  let evidenceTier = '';
  const conditions: Record<string, unknown> = {};

  for (const entity of chunk.entities ?? []) {
    const eq = entity.indexOf('=');
    const [prefixRaw, value] = eq === -1 ? [entity, undefined] : [entity.slice(0, eq), entity.slice(eq + 1)];
    if (prefixRaw.startsWith('num:') && value !== undefined) {
      const path = prefixRaw.slice(4).replace(/^root\./, '');
      setByPath(values, path, Number(value));
      hasValues = true;
    } else if (prefixRaw.startsWith('unit:') && value !== undefined) {
      unit = value;
    } else if (prefixRaw.startsWith('confidence:') && value !== undefined) {
      confidence = (['explicit', 'inferred', 'qualitative'].includes(value) ? value : 'qualitative') as Confidence;
    } else if (prefixRaw.startsWith('tier:') && value !== undefined) {
      evidenceTier = value;
    } else if (prefixRaw.startsWith('cond:') && value !== undefined) {
      conditions[prefixRaw.slice(5)] = value;
    }
  }

  return {
    id: chunk.id,
    sourceId: chunk.sourceId,
    topic: chunk.topic,
    tags: chunk.tags,
    statement: chunk.summary,
    values: hasValues ? (values as RagRule['values']) : null,
    unit,
    conditions: Object.keys(conditions).length > 0 ? conditions : undefined,
    confidence,
    evidenceTier,
    locator: { chapter: chunk.locator.chapter, page: chunk.locator.page },
  };
}

/** Ãndice derivado compilado: todos los chunks que representan reglas (locator cap+page), indexados por id. */
function compileRuleIndex(): Map<string, RagRule> {
  const index = new Map<string, RagRule>();
  for (const chunk of nutritionRag.chunks) {
    const rule = chunkToRule(chunk);
    if (rule) index.set(rule.id, rule);
  }
  return index;
}

const RULE_INDEX = compileRuleIndex();

/** Reglas derivadas de chunks (compat: mismo consumo que el antiguo rules[] del JSON). */
export const nutritionRules: RagRule[] = [...RULE_INDEX.values()];

/** Vista compatible del RAG: rules[] ahora es DERIVADO de chunks, nunca leÃ­do del JSON. */
export const nutritionRagView = { ...nutritionRag, rules: nutritionRules };

export function getRule(ruleId: string): RagRule | undefined {
  return RULE_INDEX.get(ruleId);
}

/** Cita tolerante desde CUALQUIER chunk (aunque no sea una regla con cap+page). */
export function toChunkCitation(chunkId: string): RuleCitation {
  const chunk = nutritionRag.chunks.find((c) => c.id === chunkId);
  if (!chunk) {
    throw new Error(`[nutrition] Chunk "${chunkId}" no existe en rag/nutrition.json`);
  }
  const loc = chunk.locator;
  let locator: string;
  if (typeof loc.chapter !== 'undefined' && typeof loc.page !== 'undefined') {
    locator = `cap. ${loc.chapter}, p. ${loc.page}`;
  } else if (typeof loc.page !== 'undefined') {
    locator = `p. ${loc.page}`;
  } else if (typeof loc.section === 'string' && loc.section.trim().length > 0) {
    locator = `Â§ ${loc.section}`;
  } else {
    locator = chunk.sourceId;
  }
  return {
    ruleId: chunk.id,
    source: SOURCE_SHORT[chunk.sourceId] ?? chunk.sourceId,
    locator,
    statement: chunk.summary,
    confidence: 'inferred',
  };
}

/** Regla obligatoria: si el RAG pierde una regla usada por la UI, queremos fallar en pruebas, no en runtime. */
export function requireRule(ruleId: string): RagRule {
  const rule = getRule(ruleId);
  if (!rule) {
    throw new Error(`[nutrition] Regla "${ruleId}" no existe en rag/nutrition.json`);
  }
  return rule;
}

/** Convierte una regla RAG en cita para UI. */
export function toCitation(ruleId: string): RuleCitation {
  const rule = requireRule(ruleId);
  return {
    ruleId: rule.id,
    source: SOURCE_SHORT[rule.sourceId] ?? rule.sourceId,
    locator: `cap. ${rule.locator.chapter}, p. ${rule.locator.page}`,
    statement: rule.statement,
    confidence: rule.confidence,
  };
}

/** Valor numÃ©rico de una regla (values.value | values.min/max u objeto por sexo/nivel). */
export function ruleNumber(ruleId: string, key?: string): number {
  const rule = requireRule(ruleId);
  if (!rule.values) {
    throw new Error(`[nutrition] Regla "${ruleId}" sin valores numÃ©ricos`);
  }
  if (key !== undefined) {
    const nested = rule.values[key];
    if (typeof nested !== 'number') {
      throw new Error(`[nutrition] Regla "${ruleId}" sin clave numÃ©rica "${key}"`);
    }
    return nested;
  }
  const v = rule.values as Record<string, number>;
  if (typeof v.value === 'number') return v.value;
  if (typeof v.min === 'number') return v.min; // valor central se calcula aparte
  throw new Error(`[nutrition] Regla "${ruleId}" sin value/min directo`);
}
