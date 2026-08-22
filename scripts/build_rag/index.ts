/**
 * index.ts — CLI del builder RAG v4 (AG-CORE, Ola 1).
 *
 * Uso:
 *   npx tsx scripts/build_rag/index.ts --domain fitness      # construye rag/fitness.json
 *   npx tsx scripts/build_rag/index.ts --domain fitness --check  # solo valida el JSON ya construido
 *   npx tsx scripts/build_rag/index.ts --index              # reconstruye rag/index.json
 *
 * Entrada por dominio (ver README.md):
 *   rag/<domain>/manifest.json   — opcional: bibliografía con evidenceTier/authority
 *   rag/<domain>/fuentes/*.md    — markdowns de extracción con bloques `<!-- chunk -->`
 *
 * Exit codes: 0 = OK (o con warnings), 1 = errores de validación/parseo/uso.
 * Nunca escribe un documento inválido.
 */

import { readdirSync, readFileSync, existsSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDocument, type RagManifest } from './build';
import {
  RAG_DOMAINS,
  RAG_VERSION,
  validateRagDocument,
  validateRagIndex,
  type RagDocument,
  type RagDomain,
  type RagIndex,
} from './schema';

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

interface CliArgs {
  domain?: string;
  check: boolean;
  index: boolean;
  root: string;
}

function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = { check: false, index: false, root: REPO_ROOT };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--domain') args.domain = argv[++i];
    else if (arg === '--check') args.check = true;
    else if (arg === '--index') args.index = true;
    else if (arg === '--root') args.root = resolve(argv[++i]);
    else {
      console.error(`Argumento desconocido: "${arg}" (usa --domain, --check, --index, --root).`);
      process.exit(1);
    }
  }
  return args;
}

function printIssues(errors: string[], warnings: string[]): void {
  for (const e of errors) console.error(`  ERROR: ${e}`);
  for (const w of warnings) console.warn(`  aviso: ${w}`);
}

function readJsonFile(path: string): unknown {
  return JSON.parse(readFileSync(path, 'utf-8')) as unknown;
}

function loadManifest(domainDir: string): { manifest?: RagManifest; error?: string } {
  const manifestPath = join(domainDir, 'manifest.json');
  if (!existsSync(manifestPath)) return {};
  try {
    const raw = readJsonFile(manifestPath) as { sources?: unknown };
    if (!Array.isArray(raw['sources'])) {
      return { error: `manifest.json inválido: "sources" debe ser un array.` };
    }
    return { manifest: raw as unknown as RagManifest };
  } catch (error) {
    return { error: `manifest.json no es JSON válido: ${error instanceof Error ? error.message : String(error)}` };
  }
}

function loadSourceFiles(domainDir: string): { files: Array<{ fileName: string; content: string }>; error?: string } {
  const fuentesDir = join(domainDir, 'fuentes');
  if (!existsSync(fuentesDir)) {
    return { files: [], error: `No existe ${fuentesDir} — crea los markdowns de extracción ahí (ver scripts/build_rag/README.md).` };
  }
  const mdFiles = readdirSync(fuentesDir)
    .filter((f) => f.toLowerCase().endsWith('.md'))
    .sort();
  if (mdFiles.length === 0) {
    return { files: [], error: `Sin markdowns en ${fuentesDir}.` };
  }
  return {
    files: mdFiles.map((fileName) => ({
      fileName,
      content: readFileSync(join(fuentesDir, fileName), 'utf-8'),
    })),
  };
}

function buildDomain(domain: string, root: string, check: boolean): boolean {
  const domainDir = join(root, 'rag', domain);

  // Modo --check: validar el JSON ya construido sin reconstruir.
  const artifact = join(root, 'rag', `${domain}.json`);
  if (check) {
    if (!existsSync(artifact)) {
      console.error(`No existe ${artifact}; constrúyelo primero sin --check.`);
      return false;
    }
    const validation = validateRagDocument(readJsonFile(artifact));
    printIssues(validation.errors, validation.warnings);
    console.log(validation.ok ? `OK: ${artifact} válido (esquema v${RAG_VERSION}).` : `FALLA: ${artifact} inválido.`);
    return validation.ok;
  }

  const { manifest, error: manifestError } = loadManifest(domainDir);
  if (manifestError) {
    console.error(manifestError);
    return false;
  }
  const { files, error: filesError } = loadSourceFiles(domainDir);
  if (filesError) {
    console.error(filesError);
    return false;
  }

  const result = buildDocument({ domain: domain as RagDomain, manifest, files });
  printIssues(result.errors, result.warnings);
  if (!result.ok) {
    console.error(`FALLA: "${domain}" no construido (${result.errors.length} errores).`);
    return false;
  }

  mkdirSync(join(root, 'rag'), { recursive: true });
  writeFileSync(artifact, `${JSON.stringify(result.doc, null, 2)}\n`, 'utf-8');
  console.log(`OK: ${artifact} — ${result.doc.sources.length} sources, ${result.doc.chunks.length} chunks.`);
  return true;
}

function buildIndex(root: string): boolean {
  const ragDir = join(root, 'rag');
  if (!existsSync(ragDir)) {
    console.error(`No existe ${ragDir}.`);
    return false;
  }
  const domainFiles = readdirSync(ragDir).filter((f) => f.endsWith('.json') && f !== 'index.json').sort();
  if (domainFiles.length === 0) {
    console.error('Sin rag/<domain>.json que indexar.');
    return false;
  }

  const domains: RagIndex['domains'] = {};
  let allOk = true;
  for (const file of domainFiles) {
    const path = join(ragDir, file);
    let doc: unknown;
    try {
      doc = readJsonFile(path);
    } catch (error) {
      console.error(`${path}: JSON inválido (${error instanceof Error ? error.message : String(error)}).`);
      allOk = false;
      continue;
    }
    const validation = validateRagDocument(doc);
    printIssues(validation.errors, validation.warnings);
    if (!validation.ok) {
      allOk = false;
      continue;
    }
    const d = doc as RagDocument;
    domains[d.domain] = { version: d.version, sources: d.sources.length, chunks: d.chunks.length };
  }
  if (!allOk) {
    console.error('FALLA: hay documentos inválidos; el índice no se escribe.');
    return false;
  }

  const index: RagIndex = { version: RAG_VERSION, domains };
  const validation = validateRagIndex(index);
  printIssues(validation.errors, validation.warnings);
  if (!validation.ok) return false;

  writeFileSync(join(ragDir, 'index.json'), `${JSON.stringify(index, null, 2)}\n`, 'utf-8');
  console.log(`OK: ${join(ragDir, 'index.json')} — ${Object.keys(domains).length} dominios.`);
  return true;
}

function main(): void {
  const args = parseArgs(process.argv.slice(2));

  if (args.index) {
    process.exit(buildIndex(args.root) ? 0 : 1);
  }
  if (!args.domain) {
    console.error('Uso: npx tsx scripts/build_rag/index.ts --domain <d> [--check] | --index');
    console.error(`Dominios: ${RAG_DOMAINS.join(', ')}`);
    process.exit(1);
  }
  if (!(RAG_DOMAINS as readonly string[]).includes(args.domain)) {
    console.error(`Dominio "${args.domain}" desconocido. Dominios: ${RAG_DOMAINS.join(', ')}`);
    process.exit(1);
  }
  process.exit(buildDomain(args.domain, args.root, args.check) ? 0 : 1);
}

main();
