// rag/anatomy/scripts/cobertura-3d.mjs
// AG-ANATOM — pendiente usuario: "lista de todas las partes que no se encuentra
// en el modelo 3D para ver cómo solucionarlo". Cruza el grafo (267 estructuras)
// contra las piezas del compuesto (1380) y clasifica el motivo:
//  A) mapeada y presente en el compuesto
//  B) sin mapping en el grafo pero con candidato por nombre (parte de otra pieza)
//  C) sin mapping ni candidato → requiere GLB adicional (capa/región ausente)
// Uso: npx tsx rag/anatomy/scripts/cobertura-3d.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const graph = await import(pathToFileURL(`${ROOT}/src/data/fitness/anatomyGraph.ts`).href);
const plan = JSON.parse(readFileSync(`${ROOT}/rag/anatomy/extracciones/merge-analysis.json`, 'utf8'));

const piezas = plan.plan.composite;
const norm = (s) => (s || '').normalize('NFD').replace(/[\u0300-\u036f\u200b\u200c\ufeff]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const tokens = (s) => norm(s).split(' ').filter((t) => t.length > 3);

// índice de piezas compuestas por tokens
const piezaTokens = piezas.map((p) => ({ p, t: new Set(tokens(p.name)) }));

function candidato(structure) {
  const toks = tokens(structure.nameEn);
  if (!toks.length) return null;
  let best = null, bestScore = 0;
  for (const { p, t } of piezaTokens) {
    let inter = 0;
    for (const tk of toks) if (t.has(tk)) inter++;
    const score = inter / toks.length;
    if (score > bestScore) { bestScore = score; best = p; }
  }
  return bestScore >= 0.5 ? { pieza: `${best.model}:${best.name}`, score: +bestScore.toFixed(2) } : null;
}

const filas = [];
for (const s of graph.ANATOMY_STRUCTURES) {
  const modelos = Object.keys(s.modelMeshes ?? {}).filter((m) => (s.modelMeshes[m]?.length ?? 0) > 0);
  const mapped = modelos.length > 0;
  const cand = mapped ? null : candidato(s);
  filas.push({
    id: s.id, kind: s.kind, nameEs: s.nameEs, nameEn: s.nameEn, zone: s.zone,
    estado: mapped ? 'mapeada' : cand ? 'sin mapping propio — candidato parcial' : 'sin geometría en los GLB',
    modelos,
    candidato: cand ? `${cand.pieza} (${cand.score})` : null,
  });
}

const sinMapear = filas.filter((f) => f.estado !== 'mapeada');
const porZona = {};
for (const f of sinMapear) (porZona[f.zone] ??= []).push(f);

let md = `# Cobertura 3D — estructuras del grafo vs compuesto\n\n> Generado por cobertura-3d.mjs. Grafo: ${filas.length} estructuras · compuesto: ${piezas.length} piezas.\n> Mapeadas: **${filas.length - sinMapear.length}** · Sin equivalente directo: **${sinMapear.length}**\n\n`;
md += `## Resumen por zona (sin equivalente directo)\n\n| Zona | Sin mapping | Con candidato parcial | Sin geometría |\n|---|---|---|---|\n`;
for (const [z, list] of Object.entries(porZona)) {
  md += `| ${z} | ${list.length} | ${list.filter((f) => f.candidato).length} | ${list.filter((f) => !f.candidato).length} |\n`;
}
md += `\n## Detalle de estructuras sin equivalente directo\n\n| Estructura | Tipo | Zona | Estado | Candidato parcial (pieza que podría contenerla) |\n|---|---|---|---|---|\n`;
for (const f of sinMapear) {
  md += `| ${f.nameEs} (${f.nameEn}) | ${f.kind} | ${f.zone} | ${f.estado} | ${f.candidato ?? '—'} |\n`;
}
md += `\n## Motivos y soluciones propuestas\n\n`;
md += `1. **Músculos de torso/cabeza/cuello sin capa propia**: los GLB actuales cubren miembros + cráneo + columna; no existe GLB de musculatura torácica/abdominal/cervical anterior. Solución: incorporar GLB de torso (mismo atlas) o aceptar la cobertura actual por región (los huesos/ligamentos de esas zonas SÍ están).\n`;
md += `2. **"Candidato parcial"**: el nombre de la estructura aparece dentro de una pieza compuesta (p.ej. una cabeza de un músculo fundido en la malla del vientre, o una estructura dentro de la vaina de otra). Solución: verificar visualmente y, si procede, añadir el mapping a esa pieza (el visor la resaltaría junto con su portadora) o dejar sin mapping por honestidad.\n`;
md += `3. **Nervios/tendones sin capa**: los GLB de extremidades SÍ traen capas nerviosas/tendinosas; los que faltan pertenecen a regiones sin modelo (torso/cabeza) — mismo motivo que (1).\n`;
writeFileSync(`${ROOT}/rag/anatomy/extracciones/cobertura-3d.md`, md);
writeFileSync(`${ROOT}/rag/anatomy/extracciones/cobertura-3d.json`, JSON.stringify({ generado: new Date().toISOString(), filas }, null, 1));
console.log(`OK → cobertura-3d.md | mapeadas ${filas.length - sinMapear.length}/${filas.length} · sin equivalente ${sinMapear.length}`);
