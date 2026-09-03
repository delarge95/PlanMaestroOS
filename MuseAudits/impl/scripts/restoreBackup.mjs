// restoreBackup.mjs — verifica un backup (nunca lo aplica: aplicar es browser-side).
// Uso: npx tsx .../restoreBackup.mjs --in backup.json [--allow fitness,career]
// Informa versión, stores, tamaños y si pasaría el filtro. Requiere tsx.
import { readFileSync } from 'node:fs';
import { restoreBackup } from '../sync/backupService.js';

const args = process.argv.slice(2);
const get = (f) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : undefined; };
const inFile = get('--in');
if (!inFile) {
  console.log('uso: --in backup.json [--allow fitness,career]');
  process.exit(2);
}
const allow = get('--allow');
const r = restoreBackup(readFileSync(inFile, 'utf8'), allow ? new Set(allow.split(',')) : undefined);
if (!r.ok) {
  console.log(`BACKUP INVÁLIDO: ${r.reason}`);
  process.exit(1);
}
const b = r.backup;
console.log(`backup v${b.version} ${b.createdAtIso} trigger=${b.trigger}`);
for (const [k, v] of Object.entries(b.sizes)) console.log(`  ${k}: ${v} bytes`);
console.log('Restaurable: SÍ (aplicar desde la UI con el mismo allow-list)');
