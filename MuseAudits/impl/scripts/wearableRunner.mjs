// wearableRunner.mjs — CSV de báscula/banda -> WearableDay[] (archivo 21 §21.3).
// Uso: npx tsx .../wearableRunner.mjs --in datos.csv [--out days.json]
// Sin --out imprime resumen. Nunca escribe en el repo. Requiere tsx (importa TS).
import { readFileSync, writeFileSync } from 'node:fs';
import { importWearableCsv } from '../bridges/importWearableCsv.js';

const args = process.argv.slice(2);
const get = (f) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : undefined; };
const inFile = get('--in');
if (!inFile) {
  console.log('uso: --in datos.csv [--out days.json]');
  console.log('columnas: date[,steps,resting_hr,hrv,sleep_min,weight_kg,vo2max] (alias ES/EN)');
  process.exit(2);
}
const { days, errors } = importWearableCsv(readFileSync(inFile, 'utf8'));
console.log(`días válidos: ${days.length}, errores: ${errors.length}`);
for (const e of errors) console.log(`  línea ${e.line}: ${e.reason}`);
const out = get('--out');
if (out) {
  writeFileSync(out, JSON.stringify(days, null, 2));
  console.log(`-> ${out}`);
} else {
  console.log(JSON.stringify(days.slice(0, 5), null, 2) + (days.length > 5 ? `\n... (${days.length - 5} más)` : ''));
}
