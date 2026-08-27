// scripts propio AG-EN (tarea 1): npx tsx src/data/languages/english/scripts/validate-vocabulary.ts
// Exit 0 = banco válido; exit 1 = issues (lista el índice, campo y motivo).

import { validateEnglishVocabulary, validateConversionTraceability } from '../validateVocabulary';

const result = validateEnglishVocabulary();
const trace = validateConversionTraceability();

if (!result.ok || trace.length > 0) {
  console.error(`FALLA: ${result.issues.length} issue(s) de catálogo + ${trace.length} de trazabilidad (${result.totalItems} ítems).`);
  for (const i of result.issues) console.error(`  [${i.index}] ${i.itemId ?? '(sin id)'} · ${i.field}: ${i.message}`);
  for (const i of trace) console.error(`  [${i.index}] trazabilidad · ${i.field}: ${i.message}`);
  process.exit(1);
}

console.log(`OK: ${result.totalItems} ítems EN válidos (categoría válida + ejemplo no vacío + trazabilidad T2A).`);
