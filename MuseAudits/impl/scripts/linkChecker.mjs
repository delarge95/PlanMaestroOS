// linkChecker.mjs — verifica URLs vivas (demos, careers, portfolio).
// Uso:
//   node .../linkChecker.mjs --seeds MuseAudits/impl/career/companySeeds.ts
//   node .../linkChecker.mjs --urls urls.json   (json: [{label, url}])
// Solo GET/HEAD con timeout; no modifica nada. Cero dependencias.
import { readFileSync } from 'node:fs';

const args = process.argv.slice(2);
const get = (flag) => {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
};

let targets = [];
const seedsPath = get('--seeds');
if (seedsPath) {
  const src = readFileSync(seedsPath, 'utf8');
  const names = [...src.matchAll(/name:\s*'([^']+)'/g)].map((m) => m[1]);
  const urls = [...src.matchAll(/careersUrl:\s*'([^']+)'/g)].map((m) => m[1]);
  targets = urls.map((url, i) => ({ label: names[i] ?? url, url }));
}
const urlsFile = get('--urls');
if (urlsFile) {
  targets.push(...JSON.parse(readFileSync(urlsFile, 'utf8')));
}
if (targets.length === 0) {
  console.log('uso: --seeds <companySeeds.ts> | --urls <[{label,url}].json>');
  process.exit(2);
}

async function probe({ label, url }) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 15000);
  try {
    let res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: ctrl.signal });
    if (res.status >= 400) res = await fetch(url, { redirect: 'follow', signal: ctrl.signal });
    return { label, url, status: res.status, ok: res.status < 400 };
  } catch (err) {
    return { label, url, status: 0, ok: false, error: String(err).split('\n')[0] };
  } finally {
    clearTimeout(t);
  }
}

let bad = 0;
for (const t of targets) {
  const r = await probe(t);
  console.log(r.ok ? `ok   ${r.status} ${r.label}` : `MUERTA ${r.status} ${r.label} ${r.url} ${r.error ?? ''}`);
  if (!r.ok) bad++;
}
console.log(bad === 0 ? `\nLINKS: ${targets.length}/${targets.length} VIVOS` : `\nLINKS: ${bad} MUERTOS de ${targets.length}`);
process.exit(bad === 0 ? 0 : 1);
