/**
 * markdown.ts — Parser de los markdowns fuente al formato de chunks v4.
 *
 * Formato de extracción (compatible con el sub-prompt §0 de
 * docs/agents/PROMPTS_INICIALES.md): cada archivo `fuentes/*.md` pertenece
 * a UNA fuente y contiene bloques delimitados por comentarios HTML:
 *
 * ```md
 * <!-- chunk
 * id: og2-ch12-p148-volume
 * topic: volume
 * tags: hypertrophy, chest
 * chapter: 12
 * page: 148
 * entities: exercise:planche, muscle:pec-major
 * rules: fit:volume-10-20
 * -->
 * Paráfrasis del contenido con cita implícita por locator...
 *
 * <!-- chunk
 * ...
 * -->
 * ```
 *
 * - `id` es único en TODO el documento (prefijo por fuente recomendado).
 * - `chapter`/`page` admiten número o string; también `section` para docs sin página.
 * - `tags`/`entities`/`rules` son listas separadas por comas.
 * - El cuerpo entre `-->` y el siguiente `<!-- chunk` es el `summary`.
 *
 * El nombre del archivo determina la fuente: `<sourceId>.md` o
 * `<sourceId>--<slug>.md` (se corta en el primer `--`).
 */

import type { RagChunk, RagLocator } from './schema';

export interface ParsedMarkdown {
  /** sourceId derivado del nombre de archivo (hasta '--' o el stem completo). */
  sourceId: string;
  fileName: string;
  chunks: RagChunk[];
  /** Errores de parseo por bloque (índice de bloque → mensajes). */
  errors: string[];
}

const CHUNK_OPEN_RE = /<!--\s*chunk\s*\r?\n([\s\S]*?)-->/g;

function parseList(value: string | undefined): string[] {
  if (!value) return [];
  return value.split(',').map((s) => s.trim()).filter((s) => s.length > 0);
}

function parseMeta(metaBlock: string): Map<string, string> {
  const map = new Map<string, string>();
  for (const line of metaBlock.split(/\r?\n/)) {
    const match = /^([a-zA-Z]+)\s*:\s*(.*)$/.exec(line.trim());
    if (match) map.set(match[1].toLowerCase(), match[2].trim());
  }
  return map;
}

function parseLocator(meta: Map<string, string>): RagLocator {
  const locator: RagLocator = {};
  const chapter = meta.get('chapter');
  if (chapter !== undefined) {
    const n = Number(chapter);
    locator.chapter = Number.isFinite(n) && chapter.trim() !== '' ? n : chapter;
  }
  const page = meta.get('page');
  if (page !== undefined) {
    const n = Number(page);
    if (Number.isFinite(n)) {
      locator.page = n;
    } else {
      const match = /\d+/.exec(page);
      if (match) {
        locator.page = parseInt(match[0], 10);
      } else {
        locator.section = page;
      }
    }
  }
  const section = meta.get('section');
  if (section) locator.section = section;
  return locator;
}

/** Deriva el sourceId desde el nombre de archivo (sin extensión). */
export function sourceIdFromFileName(fileName: string): string {
  const stem = fileName.replace(/\.md$/i, '');
  const dashDash = stem.indexOf('--');
  return (dashDash > 0 ? stem.slice(0, dashDash) : stem).trim();
}

/**
 * Parsea el contenido de un markdown fuente. Puro: string → estructura.
 * Los bloques incompletos (sin id/topic/locator/summary) se reportan en
 * `errors` y NO generan chunk (mejor fallar en build que corromper el RAG).
 */
export function parseSourceMarkdown(fileName: string, content: string): ParsedMarkdown {
  const sourceId = sourceIdFromFileName(fileName);
  const chunks: RagChunk[] = [];
  const errors: string[] = [];

  const matches = [...content.matchAll(CHUNK_OPEN_RE)];
  if (matches.length === 0) {
    errors.push(`${fileName}: sin bloques "<!-- chunk ... -->" (¿archivo de extracción vacío?).`);
  }

  matches.forEach((match, index) => {
    const meta = parseMeta(match[1] ?? '');
    const block = `bloque #${index + 1}`;

    const id = meta.get('id') ?? '';
    const topic = meta.get('topic') ?? '';
    const summaryStart = (match.index ?? 0) + match[0].length;
    const nextOpen = content.indexOf('<!-- chunk', summaryStart);
    const summaryRaw = content.slice(summaryStart, nextOpen === -1 ? undefined : nextOpen).trim();
    const summary = summaryRaw.replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();

    if (!id) errors.push(`${fileName} ${block}: falta "id".`);
    if (!topic) errors.push(`${fileName} ${block}: falta "topic".`);
    if (!summary) errors.push(`${fileName} ${block}: summary vacío (cuerpo tras "-->").`);
    const locator = parseLocator(meta);
    if (locator.chapter === undefined && locator.page === undefined && locator.section === undefined) {
      errors.push(`${fileName} ${block}: locator sin chapter/page/section.`);
    }
    if (!id || !topic || !summary) return;

    chunks.push({
      id,
      sourceId,
      topic,
      tags: parseList(meta.get('tags')),
      locator,
      summary,
      entities: parseList(meta.get('entities')),
      rules: parseList(meta.get('rules')),
    });
  });

  return { sourceId, fileName, chunks, errors };
}
