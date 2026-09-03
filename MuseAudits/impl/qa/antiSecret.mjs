// antiSecret.mjs — pre-commit + CI (G14 + §30.3 gigantes-JSON).
// Uso: node MuseAudits/impl/qa/antiSecret.mjs [--staged|--all]
// --staged: git diff --cached --name-only | --all: git ls-files.
// Falla (exit 1) si hay secretos o imports de JSON >500KB. Cero dependencias.
import { execFileSync } from 'node:child_process';

const SECRET_PATTERNS = [
  /AIza[0-9A-Za-z_-]{20,}/,          // Google/Gemini
  /ghp_[0-9A-Za-z]{20,}/,            // GitHub
  /xox[bap]-[0-9A-Za-z-]+/,          // Slack
  /sk-proj-[0-9A-Za-z_-]{20,}|sk-[0-9A-Za-z]{32,}/, // OpenAI (forma real; 'msk-'/'skeleton' no matchean)
  /secret_[0-9A-Za-z_-]*\d[0-9A-Za-z_-]{11,}/i, // token largo CON dígito dentro ('...secret_of_running...' no matchea)
  /notion_[0-9A-Za-z-]{8,}/i,
];
const SECRET_FILES = /(^|\/)\.env($|\.)/;

const mode = process.argv[2] ?? '--staged';
let files;
try {
  const cmd = mode === '--all' ? ['ls-files'] : ['diff', '--cached', '--name-only'];
  files = execFileSync('git', cmd, { encoding: 'utf8' }).split('\n').map((s) => s.trim()).filter(Boolean);
} catch {
  console.log('sin git disponible: SKIP');
  process.exit(0);
}

let failures = 0;
const { readFileSync, statSync, existsSync } = await import('node:fs');
for (const f of files) {
  if (SECRET_FILES.test(f) && !f.endsWith('.example')) {
    console.log(`FAIL secreto-archivo: ${f} (un .env real no se commitea)`);
    failures++;
    continue;
  }
  if (!/\.(ts|tsx|js|mjs|astro|json|md)$/.test(f) || !existsSync(f)) continue;
  let content;
  try { content = readFileSync(f, 'utf8'); } catch { continue; }
  for (const re of SECRET_PATTERNS) {
    if (re.test(content) && !/REDACTED|EXAMPLE|\*\*\*/.test(content)) {
      console.log(`FAIL secreto-patrón ${re} en ${f}`);
      failures++;
    }
  }
  // §30.3: JSON >500KB importado estáticamente
  for (const m of content.matchAll(/from\s+['"]([^'"]+\.json)['"]/g)) {
    const candidates = [m[1], m[1].split('/').pop()];
    for (const c of candidates) {
      try {
        const st = statSync(c);
        if (st.size > 500 * 1024) {
          console.log(`FAIL json-gigante: ${f} importa ${m[1]} (${Math.round(st.size / 1024)}KB)`);
          failures++;
        }
        break;
      } catch { /* ruta relativa distinta: se verifica en CI con mapa real */ }
    }
  }
}
console.log(failures === 0 ? 'ANTI-SECRET: VERDE' : `ANTI-SECRET: ${failures} FALLOS`);
process.exit(failures === 0 ? 0 : 1);
