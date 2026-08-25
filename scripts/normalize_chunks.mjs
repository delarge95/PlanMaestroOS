// Normaliza cabeceras de chunks RAG en rag/<domain>/fuentes/*.md (misión control).
// - "page: Cap. N, pp. X-Y[; ...]" → chapter: N + page: X + section con citas extra
// - "page: pp. X-Y" / "page: p. X" → page: X
// - summaries > 1200 chars → recorte por oración con "[…]"
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
const DOMAINS = ['anatomy', 'cardio', 'fitness', 'nutrition', 'clinical', 'german', 'career', 'portfolio'];
let fixedHeaders = 0, trimmedSummaries = 0;
function normHeader(block) {
  const lines = block.split('\n');
  const out = [];
  let chapter = null, page = null; const extra = [];
  for (const line of lines) {
    if (/^page:/i.test(line)) {
      const m = /^page:\s*(?:Cap(?:\.|ítulo)?\s*(\d+[A-Za-z]?))?,?\s*(?:pp?\.\s*)?(\d+)(?:\s*[-–,]\s*\d+)?(.*)$/i.exec(line);
      if (m) {
        if (page === null) {
          chapter = m[1] !== undefined ? m[1] : null;
          page = Number(m[2]);
          const more = line.match(/Cap(?:\.|ítulo)?\s*\d+[A-Za-z]?\s*,\s*pp?\.\s*\d+(?:\s*[-–]\s*\d+)?/gi) || [];
          for (const x of more.slice(1)) extra.push(x.trim());
        }
        fixedHeaders++;
        continue;
      }
    }
    out.push(line);
  }
  if (page !== null) {
    const insertAt = out.findIndex(l => /^id:/i.test(l)) + 1;
    const nl = [];
    if (chapter) nl.push(`chapter: ${/^\d+$/.test(chapter) ? Number(chapter) : chapter}`);
    nl.push(`page: ${page}`);
    if (extra.length) nl.push(`section: "también ${extra.join('; ')}"`);
    out.splice(insertAt, 0, ...nl);
  }
  return out.join('\n');
}
function trimSummary(text) {
  if (text.length <= 1200) return text;
  const cut = text.slice(0, 1195);
  const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('; '), cut.lastIndexOf(', '));
  return (stop > 700 ? cut.slice(0, stop + 1) : cut).trim() + ' […]';
}
for (const d of DOMAINS) {
  const dir = join('rag', d, 'fuentes');
  let files; try { files = readdirSync(dir).filter(f => f.endsWith('.md')); } catch { continue; }
  for (const f of files) {
    const p = join(dir, f);
    let src = readFileSync(p, 'utf8');
    src = src.replace(/<!--\s*chunk\n([\s\S]*?)-->/g, (_, h) => `<!-- chunk\n${normHeader(h)}-->`);
    src = src.replace(/-->\n([\s\S]*?)(?=\n<!-- chunk|$)/g, (_, body) => {
      const t = trimSummary(body.trim());
      if (t !== body.trim()) trimmedSummaries++;
      return `-->\n${t}\n`;
    });
    writeFileSync(p, src, 'utf8');
  }
}
console.log('headers normalizados:', fixedHeaders, '| summaries recortados:', trimmedSummaries);
