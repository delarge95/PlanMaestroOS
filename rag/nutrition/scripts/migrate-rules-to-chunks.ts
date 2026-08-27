/**
 * migrate-rules-to-chunks.ts — AG-NUTRI ciclo 2, tarea 1.
 *
 * Convierte el array legacy rules[] de rag/nutrition.json en bloques chunk v4
 * dentro de rag/nutrition/fuentes/<sourceId>--rules.md, para que un rebuild del
 * dominio (--domain nutrition) no pierda las reglas y el array legacy pueda
 * eliminarse definitivamente.
 *
 * Codificación estructural dentro del esquema v4:
 *   - Los VALORES NUMÉRICOS van en `entities` como entradas `num:<ruta>=<número>`
 *     (ruta con puntos para anidados, p.ej. num:male.light=38), junto con
 *     `unit:`, `confidence:`, `tier:` y `cond:<clave>=<valor>`.
 *   - El `summary` es el enunciado parafraseado (incluye los números en texto).
 *   - chunk.id = regla.id legacy (los ids son la referencia citada en UI/tests).
 *
 * Mapeo de fuente: los ids legacy usaban alias; el canónico es el del manifest:
 *   maughan-nis-2000 -> maughan-nutrition-in-sport
 *
 * Uso: npx tsx rag/nutrition/scripts/migrate-rules-to-chunks.ts
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAG_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const RAG_JSON = resolve(RAG_DIR, '..', 'nutrition.json');
const FUENTES_DIR = join(RAG_DIR, 'fuentes');

interface LegacyRule {
  id: string;
  sourceId: string;
  topic: string;
  tags?: string[];
  statement: string;
  values: Record<string, unknown> | null;
  unit?: string;
  conditions?: Record<string, unknown>;
  confidence: string;
  evidenceTier: string;
  locator: { chapter?: number | string; page?: number };
}

const SOURCE_ALIAS_TO_CANONICAL: Record<string, string> = {
  'maughan-nis-2000': 'maughan-nutrition-in-sport',
};

const FILE_HEADER = 'Reglas legacy del módulo nutrición migradas a chunks v4 (AG-NUTRI ciclo 2). Cada chunk conserva el id legacy de la regla; los valores numéricos están codificados en entities (num:ruta=valor) y parafraseados en el summary.';

function flattenValues(prefix: string, value: unknown, out: string[]): void {
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) throw new Error(`valor no finito en ${prefix}`);
    out.push(`num:${prefix}=${value}`);
    return;
  }
  if (value !== null && typeof value === 'object') {
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      flattenValues(`${prefix}.${key}`, child, out);
    }
    return;
  }
  throw new Error(`valor no numérico en ${prefix}: ${String(value)}`);
}

function ruleToChunkBlock(rule: LegacyRule): string {
  const entities: string[] = [];
  if (rule.values) flattenValues('root', rule.values, entities);
  if (rule.unit) entities.push(`unit:${rule.unit}`);
  entities.push(`confidence:${rule.confidence}`);
  entities.push(`tier:${rule.evidenceTier}`);
  if (rule.conditions) {
    for (const [key, value] of Object.entries(rule.conditions)) {
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        entities.push(`cond:${key}=${String(value)}`);
      }
    }
  }

  const metaLines: string[] = [];
  metaLines.push(`id: ${rule.id}`);
  metaLines.push(`topic: ${rule.topic}`);
  if (rule.tags && rule.tags.length > 0) metaLines.push(`tags: ${rule.tags.join(', ')}`);
  if (rule.locator.chapter !== undefined) metaLines.push(`chapter: ${rule.locator.chapter}`);
  if (rule.locator.page !== undefined) metaLines.push(`page: ${rule.locator.page}`);
  metaLines.push(`entities: ${entities.join(', ')}`);
  metaLines.push(`rules: ${rule.id}`);

  const summary = rule.statement.trim();
  if (summary.length > 1200) {
    throw new Error(`summary demasiado largo para ${rule.id} (${summary.length} chars)`);
  }

  return `<!-- chunk\n${metaLines.join('\n')}\n-->\n${summary}\n`;
}

function main(): void {
  const raw = JSON.parse(readFileSync(RAG_JSON, 'utf-8')) as { rules: LegacyRule[] };
  const rules = raw.rules;
  if (!Array.isArray(rules) || rules.length === 0) {
    throw new Error('rag/nutrition.json no tiene rules[] que migrar (¿ya migrado?).');
  }

  const bySource = new Map<string, LegacyRule[]>();
  const seenIds = new Set<string>();
  for (const rule of rules) {
    if (seenIds.has(rule.id)) throw new Error(`id duplicado en rules[]: ${rule.id}`);
    seenIds.add(rule.id);
    const canonical = SOURCE_ALIAS_TO_CANONICAL[rule.sourceId] ?? rule.sourceId;
    const bucket = bySource.get(canonical);
    if (bucket) bucket.push(rule);
    else bySource.set(canonical, [rule]);
  }

  for (const [sourceId, bucket] of [...bySource.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    const blocks = bucket.map(ruleToChunkBlock).join('\n');
    const content = `${FILE_HEADER}\n\n${blocks}`;
    const path = join(FUENTES_DIR, `${sourceId}--rules.md`);
    writeFileSync(path, content, 'utf-8');
    console.log(`OK: ${path} — ${bucket.length} chunks.`);
  }
  console.log(`Total migrado: ${rules.length} reglas → ${bySource.size} archivos de fuente.`);
}

main();
