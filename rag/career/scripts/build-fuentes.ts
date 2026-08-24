/**
 * build-fuentes.ts — Conversión de los 47 md raíz (más Historic/Research) a
 * fuentes chunked para el RAG v4 de career (AG-CAREER, ciclo 1, Tarea 4).
 *
 * Entrada:
 *   - <repo>/*.md              → los 47 docs numerados del corpus laboral
 *   - <repo>/Historic/*.md     → docs históricos (index-only; doc-01 manda)
 *   - <repo>/Research/*.md     → investigación de agentes (index-only)
 *
 * Salida (sobrescribe):
 *   - rag/career/fuentes/<docId>.md   → bloques <!-- chunk --> con locator section
 *   - rag/career/manifest.json        → bibliografía con docIds estables
 *
 * Reglas:
 *   1. Chunking por headings (## con ### anidados), respetando el límite de
 *      1200 chars por summary (split por párrafos con sufijo -p2, -p3…).
 *   2. Los docs con owner AG-PORT (ver PORTFOLIO_OWNED) NO se chunkean aquí:
 *      solo un chunk índice que remite a rag/portfolio.json (evita duplicidad).
 *   3. docIds estables: doc-NN / doc-NNb (sufijos -alt / -complete para
 *      variantes), hist-<slug>, res-<slug>. NUNCA contienen '--'.
 *   4. Los summaries conservan el texto original: son documentos internos del
 *      propio usuario (la regla de paráfrasis aplica a fuentes externas).
 *
 * Uso: npx tsx rag/career/scripts/build-fuentes.ts
 * Después: npx tsx scripts/build_rag/index.ts --domain career && ... --index
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const FUENTES_DIR = resolve(REPO_ROOT, 'rag', 'career', 'fuentes');

const MAX_SUMMARY = 1150; // margen bajo el límite de 1200 del validador

// ————————————————————————————————————————————————————————————————
// Clasificación del corpus (tabla de ingesta §3.4 de PLAN_MULTIAGENTE.md)
// ————————————————————————————————————————————————————————————————

/** Docs con owner AG-PORT: solo chunk índice (contenido → rag/portfolio.json). */
const PORTFOLIO_OWNED_PREFIXES = [
  '07', '08', '08B', '17', '19', '19B', '20', '21', '21B',
  '28B', '28D', '28E', '29', '29B', '29C', '33', '36'
];

/** Taxonomía de topics por número de doc (contrato §3.4). */
const TOPIC_BY_DOC: Record<string, string> = {
  '00': 'positioning', '01': 'positioning', '02': 'positioning',
  '03': 'salary', '04': 'mobility', '05': 'languages-strategy', '06': 'education',
  '09': 'projects', '10': 'presence', '18': 'presence',
  '11': 'companies', '30': 'companies',
  '12': 'tracker', '26': 'tracker', '34': 'tracker',
  '22': 'outreach',
  '13': 'interviews', '23': 'interviews', '24': 'interviews', '35': 'interviews',
  '14': 'planning', '15': 'planning', '16': 'planning', '27': 'planning', '31': 'planning', '32': 'planning',
  '28': 'benchmarks', '28C': 'benchmarks'
};

function docPrefix(fileName: string): string {
  // "28D_artstation_portfolio_benchmark (1).md" → "28D"
  return fileName.match(/^(\d+[A-Z]?)[_ ]/)?.[1] ?? fileName.match(/^(\d+[A-Z]?)_/)?.[1] ?? '';
}

function docIdFor(fileName: string): string {
  const prefix = docPrefix(fileName);
  const lower = prefix.toLowerCase();
  if (fileName.includes(' (1)')) return `doc-${lower}-alt`;
  if (fileName.includes('_complete')) return `doc-${lower}-complete`;
  return `doc-${lower}`;
}

const isPortfolioOwned = (fileName: string): boolean =>
  PORTFOLIO_OWNED_PREFIXES.includes(docPrefix(fileName));

const slugify = (s: string): string =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-') || 'sin-titulo';

// ————————————————————————————————————————————————————————————————
// Chunking por headings
// ————————————————————————————————————————————————————————————————

interface Section {
  /** Ruta de headings (h1 > h2) para el locator. */
  path: string;
  body: string;
}

/** Divide el md en secciones por headings nivel 1/2 (los h3+ se anexan al padre). */
function splitByHeadings(md: string): Section[] {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const sections: Section[] = [];
  let h1 = '';
  let current: { title: string; buf: string[] } | null = null;

  const push = () => {
    if (!current) return;
    const body = current.buf.join('\n').trim();
    if (body) {
      sections.push({ path: [h1, current.title].filter(Boolean).join(' > '), body });
    }
  };

  for (const line of lines) {
    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading && (heading[1].length === 1 || heading[1].length === 2)) {
      push();
      if (heading[1].length === 1) {
        h1 = heading[2].trim();
        current = { title: 'intro', buf: [] };
      } else {
        current = { title: heading[2].trim(), buf: [] };
      }
      continue;
    }
    if (current) current.buf.push(line);
    else {
      // Contenido antes del primer heading.
      current = { title: 'intro', buf: [line] };
    }
  }
  push();
  return sections;
}

/** Limpia el cuerpo: quita comentarios HTML (chunkeadores previos) e imágenes. */
function cleanBody(body: string): string {
  return body
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Parte el cuerpo en trozos ≤ limit chars por párrafos. */
function splitParagraphs(body: string, limit: number): string[] {
  if (body.length <= limit) return [body];
  const paragraphs = body.split(/\n\n+/);
  const parts: string[] = [];
  let buf = '';
  for (const p of paragraphs) {
    const candidate = buf ? `${buf}\n\n${p}` : p;
    if (candidate.length > limit && buf) {
      parts.push(buf);
      buf = p.length > limit ? p.slice(0, limit - 1) : p;
    } else {
      buf = candidate.length > limit ? p.slice(0, limit - 1) : candidate;
    }
  }
  if (buf) parts.push(buf);
  return parts;
}

interface ChunkBlock {
  id: string;
  topic: string;
  tags: string[];
  section: string;
  summary: string;
}

function chunkDoc(docId: string, topic: string, md: string): ChunkBlock[] {
  const chunks: ChunkBlock[] = [];
  let sectionIndex = 0;
  for (const section of splitByHeadings(md)) {
    const body = cleanBody(section.body);
    if (body.length < 30) continue; // secciones vacías/nav
    sectionIndex += 1;
    const parts = splitParagraphs(body, MAX_SUMMARY);
    parts.forEach((part, partIdx) => {
      chunks.push({
        id: partIdx === 0 ? `${docId}-s${sectionIndex}` : `${docId}-s${sectionIndex}-p${partIdx + 1}`,
        topic,
        tags: [docId, topic],
        section: `${section.path}${parts.length > 1 ? ` (parte ${partIdx + 1}/${parts.length})` : ''}`,
        summary: part
      });
    });
  }
  return chunks;
}

/** Chunk índice para docs de otro owner (AG-PORT) o históricos/research. */
function indexChunk(params: {
  docId: string;
  topic: string;
  note: string;
  fileName: string;
  md: string;
}): ChunkBlock {
  const headings = splitByHeadings(params.md)
    .slice(0, 12)
    .map((s) => s.path.split(' > ').slice(1).join(' › ') || s.path)
    .filter((s) => s && s !== 'intro');
  const headingList = headings.length
    ? `\n\nSecciones principales:\n${headings.map((h) => `- ${h}`).join('\n')}`
    : '';
  const firstLines = cleanBody(params.md).slice(0, 350);
  return {
    id: `${params.docId}-index`,
    topic: params.topic,
    tags: [params.docId, params.topic, 'index'],
    section: 'Índice (chunk único)',
    summary: `${params.note}\n\nDocumento: ${params.fileName}${headingList}\n\nApertura: ${firstLines}${cleanBody(params.md).length > 350 ? '…' : ''}`
  };
}

// ————————————————————————————————————————————————————————————————
// Emisión de bloques al formato fuentes/*.md
// ————————————————————————————————————————————————————————————————

function emitBlocks(blocks: ChunkBlock[]): string {
  return blocks
    .map((b) => {
      const meta = [
        `id: ${b.id}`,
        `topic: ${b.topic}`,
        `tags: ${b.tags.join(', ')}`,
        `section: ${b.section.replace(/\n/g, ' ')}`,
        'entities:',
        'rules:'
      ].join('\n');
      return `<!-- chunk\n${meta}\n-->\n${b.summary}`;
    })
    .join('\n\n');
}

interface ManifestSource {
  id: string;
  title: string;
  author: string;
  year: number;
  edition: string;
  type: 'md';
  evidenceTier: 'internal-doc';
  authority: { domains: string[]; priority: number };
}

// ————————————————————————————————————————————————————————————————
// Proceso principal
// ————————————————————————————————————————————————————————————————-

mkdirSync(FUENTES_DIR, { recursive: true });

const rootMds = readdirSync(REPO_ROOT).filter(
  (f) => f.toLowerCase().endsWith('.md') && /^\d/.test(f)
);
if (rootMds.length === 0) throw new Error('No se encontraron docs numerados en la raíz');

const manifest: ManifestSource[] = [];
let chunkedDocs = 0;
let portfolioIndexDocs = 0;
let totalChunks = 0;

// 1. Corpus raíz (47 docs)
for (const fileName of rootMds.sort()) {
  const docId = docIdFor(fileName);
  const md = readFileSync(join(REPO_ROOT, fileName), 'utf8');
  const portfolioOwned = isPortfolioOwned(fileName);
  const topic = portfolioOwned ? 'portfolio' : (TOPIC_BY_DOC[docPrefix(fileName)] ?? 'misc');

  const blocks = portfolioOwned
    ? [
        indexChunk({
          docId,
          topic,
          note:
            'Documento con owner AG-PORT: su contenido se ingiere en rag/portfolio.json. ' +
            'Este chunk es SOLO un índice de remisión para el RAG de career (evita duplicidad de ingesta).',
          fileName,
          md
        })
      ]
    : chunkDoc(docId, topic, md);

  if (blocks.length === 0) throw new Error(`${fileName}: chunking produjo 0 bloques`);
  writeFileSync(join(FUENTES_DIR, `${docId}.md`), emitBlocks(blocks), 'utf8');
  totalChunks += blocks.length;
  portfolioOwned ? portfolioIndexDocs++ : chunkedDocs++;

  manifest.push({
    id: docId,
    title: fileName.replace(/\.md$/i, ''),
    author: 'Plan Maestro OS — investigación laboral (Alexander Woodcock)',
    year: 2026,
    edition: 'v1',
    type: 'md',
    evidenceTier: 'internal-doc',
    authority: {
      domains: [topic, 'career'],
      priority: docId === 'doc-01' ? 1 : portfolioOwned ? 3 : 2 // doc-01 = source of truth del perfil
    }
  });
}

// 2. Historic (9 docs) — index-only, doc-01 manda en contradicciones
const historicDir = join(REPO_ROOT, 'Historic');
for (const fileName of readdirSync(historicDir).filter((f) => f.toLowerCase().endsWith('.md')).sort()) {
  const docId = `hist-${slugify(fileName.replace(/\.md$/i, '')).slice(0, 48)}`;
  const md = readFileSync(join(historicDir, fileName), 'utf8');
  const block = indexChunk({
    docId,
    topic: 'historic',
    note:
      'Documento HISTÓRICO (marcado desactualizado por el propio corpus). En caso de contradicción ' +
      'manda el doc-01 (source of truth) y la brecha se registra en el gap register (doc-16). Chunk índice único.',
    fileName: `Historic/${fileName}`,
    md
  });
  writeFileSync(join(FUENTES_DIR, `${docId}.md`), emitBlocks([block]), 'utf8');
  totalChunks += 1;
  manifest.push({
    id: docId,
    title: `Historic/${fileName.replace(/\.md$/i, '')}`,
    author: 'Plan Maestro OS — histórico',
    year: 2025,
    edition: 'v0',
    type: 'md',
    evidenceTier: 'internal-doc',
    authority: { domains: ['historic', 'career'], priority: 4 }
  });
}

// 3. Research (solo .md; los PDF quedan referenciados en STATUS-career.md)
const researchDir = join(REPO_ROOT, 'Research');
for (const fileName of readdirSync(researchDir).filter((f) => f.toLowerCase().endsWith('.md')).sort()) {
  const docId = `res-${slugify(fileName.replace(/\.md$/i, '')).slice(0, 48)}`;
  const md = readFileSync(join(researchDir, fileName), 'utf8');
  const block = indexChunk({
    docId,
    topic: 'research',
    note:
      'Documento de investigación de agentes (Research/). Material de soporte: verificar contra los docs ' +
      'numerados antes de usar como fuente operativa. Chunk índice único.',
    fileName: `Research/${fileName}`,
    md
  });
  writeFileSync(join(FUENTES_DIR, `${docId}.md`), emitBlocks([block]), 'utf8');
  totalChunks += 1;
  manifest.push({
    id: docId,
    title: `Research/${fileName.replace(/\.md$/i, '')}`,
    author: 'Plan Maestro OS — agentes de investigación',
    year: 2026,
    edition: 'v1',
    type: 'md',
    evidenceTier: 'internal-doc',
    authority: { domains: ['research', 'career'], priority: 4 }
  });
}

// 4. Manifest
writeFileSync(
  join(REPO_ROOT, 'rag', 'career', 'manifest.json'),
  `${JSON.stringify({ domain: 'career', sources: manifest }, null, 2)}\n`,
  'utf8'
);

console.log(`Docs raíz: ${rootMds.length} (${chunkedDocs} chunkeados, ${portfolioIndexDocs} index-only por owner AG-PORT)`);
console.log(`Historic: 9 · Research md: ${manifest.filter((m) => m.id.startsWith('res-')).length}`);
console.log(`Total fuentes: ${manifest.length} · Total chunks: ${totalChunks}`);
console.log(`OK → ${FUENTES_DIR} + rag/career/manifest.json`);
