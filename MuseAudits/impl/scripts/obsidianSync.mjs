// obsidianSync.mjs — puente _obsidian <-> grafo (ADR-3, archivo 16).
// Lee:  _obsidian/notas/*.md con frontmatter (id/domain/kind/title + [[links]])
// Hace: --to-graph  -> KnowledgeGraph JSON a stdout (o --write)
//       --emit <graph.json> <outdir> -> un .md por nodo (solo con --write)
// Sin --write NUNCA escribe. Cero dependencias.
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, basename } from 'node:path';

const args = process.argv.slice(2);
const WRITE = args.includes('--write');
const get = (f) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : undefined; };

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  const fm = {};
  if (!m) return { fm, body: text };
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*"?([^"]*)"?\s*$/);
    if (kv) fm[kv[1]] = kv[2];
  }
  return { fm, body: text.slice(m[0].length) };
}

function linksIn(body) {
  return [...body.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)].map((m) => m[1].trim());
}

if (args.includes('--to-graph')) {
  const dir = get('--dir') ?? '_obsidian/notas';
  const nodes = [];
  const edges = [];
  if (existsSync(dir)) {
    for (const f of readdirSync(dir).filter((x) => x.endsWith('.md'))) {
      const { fm, body } = parseFrontmatter(readFileSync(join(dir, f), 'utf8'));
      if (!fm.id || !fm.kind) {
        console.error(`warn: ${f} sin id/kind, omitida`);
        continue;
      }
      nodes.push({ id: fm.id, kind: fm.kind, label: fm.title ?? basename(f, '.md'), ref: fm.docId ? { docId: fm.docId } : undefined });
      for (const t of linksIn(body)) edges.push({ from: fm.id, to: t, kind: 'derived_from' });
    }
  }
  const graph = { version: 1, builtAtIso: new Date().toISOString(), nodes, edges };
  const out = JSON.stringify(graph, null, 2);
  const dest = WRITE ? get('--write') : undefined;
  if (dest) { writeFileSync(dest, out); console.log(`grafo -> ${dest} (${nodes.length} nodos)`); }
  else console.log(out);
} else if (args.includes('--emit')) {
  const graph = JSON.parse(readFileSync(get('--emit'), 'utf8'));
  const outdir = get('--outdir') ?? '_obsidian/nodes';
  if (!WRITE) {
    console.log(`dry-run: emitiría ${graph.nodes.length} .md en ${outdir} (usar --write)`);
    process.exit(0);
  }
  mkdirSync(outdir, { recursive: true });
  for (const n of graph.nodes) {
    const md = `---\nid: "${n.id}"\ndomain: "knowledge"\nkind: "${n.kind}"\ntitle: "${n.label}"\n---\n\n# ${n.label}\n\n_Nodo del grafo. Editar con cuidado: el builder lo recompila._\n`;
    writeFileSync(join(outdir, `${n.id.replace(/[:/]/g, '-')}.md`), md);
  }
  console.log(`emitidos ${graph.nodes.length} .md en ${outdir}`);
} else {
  console.log('uso: --to-graph [--dir X] [--write out.json] | --emit graph.json [--outdir Y] [--write]');
  process.exit(2);
}
