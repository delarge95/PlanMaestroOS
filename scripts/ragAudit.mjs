// ragAudit.mjs — audita rag/*.json contra el contrato v4 (formato LOTE-1/ADR-8).
// Reporta por dominio: sources, chunks, % sin locator, TODO-cita, >1200 chars,
// ids duplicados. Solo lee. Uso: node .../ragAudit.mjs  (desde la raíz del repo)
// Cero dependencias.
import { readFileSync, existsSync } from 'node:fs';

const DOMAINS = ['anatomy', 'cardio', 'career', 'clinical', 'english', 'fitness', 'german', 'nutrition', 'portfolio'];
let totalIssues = 0;

for (const d of DOMAINS) {
  const path = `rag/${d}.json`;
  if (!existsSync(path)) {
    console.log(`${d}: SIN JSON (ver archivo 14: core|gastronomy también faltan)`);
    continue;
  }
  const doc = JSON.parse(readFileSync(path, 'utf8'));
  const chunks = doc.chunks ?? doc.documents ?? [];
  const ids = new Set();
  let dupes = 0, noLocator = 0, todoCita = 0, tooLong = 0, noSource = 0;
  for (const c of chunks) {
    const id = c.id ?? '?';
    if (ids.has(id)) dupes++;
    ids.add(id);
    const loc = c.locator ?? {};
    if (!loc.chapter && !loc.page && !loc.section) noLocator++;
    const sid = c.sourceId ?? '';
    if (!sid || /TODO/i.test(sid)) todoCita++;
    if ((c.summary ?? '').length > 1200) tooLong++;
    if (!c.sourceId) noSource++;
  }
  const issues = dupes + noLocator + todoCita + tooLong;
  totalIssues += issues;
  const pct = (n) => (chunks.length === 0 ? '-' : `${Math.round((n / chunks.length) * 100)}%`);
  console.log(
    `${d}: ${(doc.sources ?? []).length} src / ${chunks.length} chunks | ` +
    `sin-locator ${pct(noLocator)} | todo-cita ${pct(todoCita)} | >1200 ${pct(tooLong)} | dupes ${dupes}` +
    (issues === 0 ? '  OK' : '  <-- REVISAR'),
  );
}
console.log(totalIssues === 0 ? '\nRAG: VERDE' : `\nRAG: ${totalIssues} issues (ver detalle arriba)`);
