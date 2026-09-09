/**
 * push-career-companies.mjs — Sube las empresas objetivo a la DB
 * "Career Applications" de Notion (estado inicial: Prospecto).
 *
 * Uso:
 *   node scripts/push-career-companies.mjs --dry   # solo muestra qué crearía
 *   node scripts/push-career-companies.mjs         # crea las páginas faltantes
 *
 * Entrada: scripts/data/companyTargets.json (ver docs/orquestacion).
 * Idempotente: deduplica por Empresa+Rol contra las páginas existentes.
 */

import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// ——————————————————— .env (sin dependencias) ———————————————————
function loadEnv() {
  const envPath = resolve(ROOT, '.env');
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, 'utf-8').split(/\r?\n/)) {
    const m = /^([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/.exec(line);
    if (m && process.env[m[1]] === undefined) process.env[m[1]] = m[2];
  }
}
loadEnv();

const NOTION_API = 'https://api.notion.com/v1';
const TOKEN = process.env.NOTION_TOKEN;
const DB_ID = process.env.NOTION_CAREER_DB_ID;

const DRY = process.argv.includes('--dry');

if (!TOKEN || !DB_ID) {
  console.error('Faltan NOTION_TOKEN o NOTION_CAREER_DB_ID en el entorno/.env.');
  process.exit(1);
}

const headers = {
  'Authorization': `Bearer ${TOKEN}`,
  'Notion-Version': '2022-06-28',
  'Content-Type': 'application/json',
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** fetch con reintento en 429 (respeta Retry-After) y backoff en 5xx. */
async function notionFetch(path, init = {}, attempt = 0) {
  const res = await fetch(`${NOTION_API}${path}`, { ...init, headers });
  if (res.status === 429 || res.status >= 500) {
    if (attempt >= 5) throw new Error(`${path} → ${res.status} tras 5 intentos`);
    const retryAfter = Number(res.headers.get('retry-after'));
    const waitMs = res.status === 429 && Number.isFinite(retryAfter) ? retryAfter * 1000 : 2 ** attempt * 1000;
    await sleep(waitMs);
    return notionFetch(path, init, attempt + 1);
  }
  return res;
}

const rt = (text) => ({ type: 'text', text: { content: String(text).slice(0, 1900) } });

/** Página existente → clave de deduplicación "empresa|rol". */
function pageKey(page) {
  const props = page.properties ?? {};
  const empresa = props['Empresa']?.title?.[0]?.plain_text ?? '';
  const rol = props['Rol']?.rich_text?.[0]?.plain_text ?? '';
  return `${empresa.trim().toLowerCase()}|${rol.trim().toLowerCase()}`;
}

async function fetchExistingKeys() {
  const keys = new Set();
  let cursor = undefined;
  do {
    const res = await notionFetch(`/databases/${DB_ID}/query`, {
      method: 'POST',
      body: JSON.stringify({ page_size: 100, ...(cursor ? { start_cursor: cursor } : {}) }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(`query falló: ${res.status} ${JSON.stringify(data).slice(0, 300)}`);
    for (const page of data.results ?? []) keys.add(pageKey(page));
    cursor = data.has_more ? data.next_cursor : undefined;
    await sleep(350); // Notion ~3 req/s
  } while (cursor);
  return keys;
}

function buildProperties(entry) {
  const notasParts = [];
  if (entry.prioridad) notasParts.push(`Prioridad ${entry.prioridad}.`);
  if (entry.ubicacionDetalle) notasParts.push(`${entry.ubicacionDetalle}.`);
  if (entry.notas) notasParts.push(entry.notas);

  const props = {
    'Empresa': { title: [rt(entry.empresa)] },
    'Rol': { rich_text: [rt(entry.rol)] },
    'Estado': { select: { name: 'Prospecto' } },
    'Fuente': { rich_text: [rt(entry.fuente)] },
    'Notas': { rich_text: [rt(notasParts.join(' '))] },
    'ConsentimientoEnvio': { checkbox: false },
  };
  if (entry.url) props['Url'] = { url: entry.url };
  if (['Remoto', 'Híbrido', 'Onsite'].includes(entry.ubicacionRemoto)) {
    props['UbicacionRemoto'] = { select: { name: entry.ubicacionRemoto } };
  }
  return props;
}

(async () => {
  const targetsPath = resolve(ROOT, 'scripts', 'data', 'companyTargets.json');
  if (!existsSync(targetsPath)) {
    console.error(`No existe ${targetsPath} — genera primero la extracción.`);
    process.exit(1);
  }
  const entries = JSON.parse(readFileSync(targetsPath, 'utf-8'));
  if (!Array.isArray(entries) || entries.length === 0) {
    console.error('companyTargets.json vacío o inválido.');
    process.exit(1);
  }

  console.log(`Targets en JSON: ${entries.length}. Consultando DB existente…`);
  const existing = await fetchExistingKeys();
  console.log(`Páginas ya en Notion: ${existing.size}.`);

  const pending = entries.filter((e) => {
    const key = `${String(e.empresa).trim().toLowerCase()}|${String(e.rol).trim().toLowerCase()}`;
    return !existing.has(key);
  });
  console.log(`A crear: ${pending.length} (deduplicadas).`);

  if (DRY || pending.length === 0) {
    for (const e of pending) console.log(`  [dry] ${e.empresa} — ${e.rol}`);
    process.exit(0);
  }

  let ok = 0;
  let fail = 0;
  for (const entry of pending) {
    try {
      const res = await notionFetch('/pages', {
        method: 'POST',
        body: JSON.stringify({
          parent: { database_id: DB_ID },
          properties: buildProperties(entry),
        }),
      });
      const data = await res.json();
      if (res.ok) {
        ok += 1;
        console.log(`OK  ${entry.empresa} — ${entry.rol}`);
      } else {
        fail += 1;
        console.error(`ERR ${entry.empresa} — ${entry.rol}: ${JSON.stringify(data).slice(0, 200)}`);
      }
    } catch (err) {
      fail += 1;
      console.error(`ERR ${entry.empresa} — ${entry.rol}: ${err.message}`);
    }
    await sleep(350);
  }

  console.log(`\nResumen: ${ok} creadas, ${fail} fallos, ${entries.length - pending.length} ya existían.`);
  process.exit(fail > 0 ? 1 : 0);
})();
