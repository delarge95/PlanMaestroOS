import { CATALOG_CORE, RATE_CARD_V1, LEVEL_IDS, estimateService } from '../src/data/services/index';

let errors = 0;
const fail = (msg: string) => {
  console.error(`  ✗ ${msg}`);
  errors += 1;
};

console.log('validateServices — integridad del catálogo espejo\n');

const ids = new Set<string>();
for (const svc of CATALOG_CORE) {
  if (ids.has(svc.id)) fail(`id duplicado: ${svc.id}`);
  ids.add(svc.id);

  const subIds = new Set<string>();
  for (const st of svc.subtasks) {
    if (subIds.has(st.id)) fail(`${svc.id}: subtask duplicada ${st.id}`);
    subIds.add(st.id);
    for (const level of LEVEL_IDS) {
      const range = st.hours[level];
      if (!range) {
        fail(`${svc.id}/${st.id}: falta nivel ${level}`);
        continue;
      }
      if (range.min < 0 || range.max < range.min) {
        fail(`${svc.id}/${st.id}@${level}: rango inválido ${range.min}–${range.max}`);
      }
    }
  }
}

console.log(`Servicios: ${CATALOG_CORE.length}\n`);
for (const svc of CATALOG_CORE) {
  const row = LEVEL_IDS.map((level) => {
    const r = estimateService(svc, level);
    return `${level} ${r.hoursMin}–${r.hoursMax}h → $${r.costMin}–${r.costMax}`;
  }).join(' | ');
  console.log(`• ${svc.id}\n    ${row}`);
}

console.log(`\nBandas: ${RATE_CARD_V1.version} (${RATE_CARD_V1.status})`);
if (errors > 0) {
  console.error(`\nFALLOS: ${errors}`);
  process.exit(1);
}
console.log('\nOK: catálogo íntegro.');
