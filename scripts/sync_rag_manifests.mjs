// Añade a rag/<domain>/manifest.json toda fuente de rag/<domain>/fuentes/*.md que falte (misión control).
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
for (const d of ['fitness', 'nutrition', 'cardio', 'anatomy', 'clinical', 'german']) {
  const dir = join('rag', d, 'fuentes');
  if (!existsSync(dir)) continue;
  const mPath = join('rag', d, 'manifest.json');
  let manifest = existsSync(mPath) ? JSON.parse(readFileSync(mPath, 'utf8')) : { domain: d, sources: [] };
  const have = new Set(manifest.sources.map(s => s.id));
  let added = 0;
  for (const f of readdirSync(dir).filter(x => x.endsWith('.md'))) {
    const id = f.replace(/\.md$/, '').split('--')[0];
    if (have.has(id)) continue;
    const isPaper = id.startsWith('paper-');
    manifest.sources.push({
      id, title: id.replace(/-/g, ' '), author: '', year: null,
      edition: isPaper ? '' : 'n/d',
      type: isPaper ? 'paper' : 'book',
      evidenceTier: isPaper ? 'observational' : 'expert-book',
      authority: { domains: [d], priority: 5 },
    });
    have.add(id); added++;
  }
  if (added) { writeFileSync(mPath, JSON.stringify(manifest, null, 2) + '\n'); console.log(`${d}: +${added} fuentes en manifest`); }
}
