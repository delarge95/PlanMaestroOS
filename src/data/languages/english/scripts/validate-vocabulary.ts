// scripts propio AG-EN (tarea 1): npx tsx src/data/languages/english/scripts/validate-vocabulary.ts
// Exit 0 = banco válido; exit 1 = issues (lista el índice, campo y motivo).

import { validateEnglishVocabulary } from '../validateVocabulary';

const result = validateEnglishVocabulary();

if (!result.ok) {
  console.error(`FALLA: ${result.issues.length} issue(s) de catálogo (${result.totalItems} ítems).`);
  for (const i of result.issues) console.error(`  [${i.index}] ${i.itemId ?? '(sin id)'} · ${i.field}: ${i.message}`);
  process.exit(1);
}

console.log(`OK: ${result.totalItems} ítems EN válidos (categoría válida + ejemplo no vacío + ids en-tech-<nnn>).`);
