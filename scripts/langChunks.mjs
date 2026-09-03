// langChunks.mjs — catálogos EN/DE (JSON) -> chunks v4 (archivo 20 §20.1).
// Entrada: [{id, ...campos}] + --field resumen (default: se compone de los campos).
// Uso: npx tsx .../langChunks.mjs --in vocab.json --domain english --prefix en- [--out dir]
// Valida con chunkValidate; falla si hay TODO-cita/duplicados/>1200. Requiere tsx.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { validateChunks } from '../rag/chunkValidate.js';

const args = process.argv.slice(2);
const get = (f) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : undefined; };
const inFile = get('--in');
const domain = get('--domain');
const prefix = get('--prefix');
if (!inFile || !domain || !prefix) {
  console.log('uso: --in catalog.json --domain english|german --prefix en-|de- [--out dir] [--topic vocabulary]');
  process.exit(2);
}
const topic = get('--topic') ?? 'vocabulary';
const items = JSON.parse(readFileSync(inFile, 'utf8'));
const list = Array.isArray(items) ? items : items.items ?? [];
const chunks = list.map((it, i) => {
  const id = String(it.id ?? `${prefix}${i}`);
  const summary = [`Término: ${it.term ?? it.title ?? id}`, it.definition ? `Definición: ${it.definition}` : '',
    it.example ? `Ejemplo: ${it.example}` : '', it.translation ? `ES: ${it.translation}` : '']
    .filter(Boolean).join('\n').slice(0, 1200);
  return {
    id: id.startsWith(prefix) ? id : `${prefix}${id}`,
    sourceId: String(it.sourceId ?? `internal-curated-${domain}`),
    topic, tags: [domain, topic, String(it.level ?? it.category ?? 'general')],
    locator: { section: String(it.unit ?? `item-${i}`) },
    summary,
  };
});
const { ok, errors } = validateChunks(prefix, chunks);
if (!ok) {
  console.log(`CHUNKS INVÁLIDOS (${errors.length}):`);
  for (const e of errors.slice(0, 20)) console.log(`  - ${e}`);
  process.exit(1);
}
const md = chunks.map((c) => [
  `<!-- chunk id:${c.id} topic:${c.topic} tags:${c.tags.join(',')} section:${c.locator.section} entities: -->`,
  c.summary, '',
].join('\n')).join('\n');
const out = get('--out');
if (out) {
  mkdirSync(out, { recursive: true });
  const dest = join(out, `${domain}--catalog--chunks.md`);
  writeFileSync(dest, md + `\n<!-- stats: ${chunks.length} chunks -->\n`);
  console.log(`${chunks.length} chunks -> ${dest}`);
} else {
  console.log(md.slice(0, 2000));
  console.log(`\n... (${chunks.length} chunks válidos)`);
}
