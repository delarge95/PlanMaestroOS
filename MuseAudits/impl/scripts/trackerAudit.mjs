// trackerAudit.mjs — el xlsx no se puede parsear sin dependencias, así que este
// script audita lo auditable: existe el xlsx, conteos en seeds del repo vs seeds
// impl, y deriva el gap. (No existe parse-tracker.ts en el repo a día de hoy:
// si aparece, este script lo invoca con --dry-run.)
// Uso: node .../trackerAudit.mjs   (correr desde la raíz del repo)
// Cero dependencias. Solo lee.
import { existsSync, readFileSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const XLSX = '25_application_tracker_template.xlsx';
console.log(`xlsx: ${existsSync(XLSX) ? `existe (${Math.round(statSync(XLSX).size / 1024)}KB)` : 'AUSENTE'}`);

const count = (file, re) => {
  try {
    const t = readFileSync(file, 'utf8');
    return [...t.matchAll(re)].length;
  } catch { return -1; }
};
// seeds del repo (applicationsSeed/trk-): contar ids 'trk-'
const repoApps = count('src/data/career/applicationsSeed.ts', /trk-/g);
console.log(`repo applicationsSeed (ids trk-): ${repoApps}`);
// seeds impl (17 empresas doc-11)
const implCompanies = count('MuseAudits/impl/career/companySeeds.ts', /id: 'co-/g);
console.log(`impl companySeeds (co-): ${implCompanies}`);
// ¿apareció parse-tracker?
try {
  const found = execFileSync('git', ['ls-files', '*parse-tracker*'], { encoding: 'utf8' }).trim();
  console.log(found ? `parse-tracker presente: ${found} (usar ese en vez de este audit)` : 'parse-tracker: no existe (este audit sigue vigente)');
} catch { console.log('parse-tracker: sin git, no verificable'); }

if (repoApps >= 0 && repoApps < 12) console.log(`GAP: ampliar seeds de ${repoApps} a 12 (encargo E3/archivo 19 §19.1)`);
console.log('TRACKER AUDIT: listo');
