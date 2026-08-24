// rag/anatomy/scripts/coverage-report.ts
// AG-ANATOM ciclo 3 — TAREA 5b: validación instrumentada por modelo.
// Imprime % de meshes clasificados (meshCatalog) y % de estructuras
// seleccionables (anatomyGraph.modelMeshes con nombres runtime verificados).
// Uso: npx tsx rag/anatomy/scripts/coverage-report.ts
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { MUSCLES } from '../../../src/data/fitness/anatomy/muscles';
import { TENDONS } from '../../../src/data/fitness/anatomy/tendons';
import { NERVES } from '../../../src/data/fitness/anatomy/nerves';
import { JOINTS } from '../../../src/data/fitness/anatomy/joints';
import { BONES } from '../../../src/data/fitness/anatomy/bones';
import { LIGAMENTS } from '../../../src/data/fitness/anatomy/ligaments';

const ROOT = process.cwd();
const INV = JSON.parse(readFileSync(join(ROOT, 'rag/anatomy/extracciones/mesh-names.json'), 'utf8')) as Record<
  string,
  { names: string[]; containers: Record<string, string[]> }
>;
const STRUCTURES = [...MUSCLES, ...TENDONS, ...NERVES, ...JOINTS, ...BONES, ...LIGAMENTS] as Array<{
  id: string;
  kind: string;
  modelMeshes: Record<string, string[]>;
}>;

// meshes "dueños": nombres con estructura del grafo
const owned = new Map<string, Set<string>>();
for (const s of STRUCTURES) {
  for (const [m, names] of Object.entries(s.modelMeshes)) {
    const set = owned.get(m) ?? new Set<string>();
    for (const n of names) set.add(n);
    owned.set(m, set);
  }
}

// clasificados: nombres con kind != other/aux en el catálogo generado
const catalogSrc = readFileSync(join(ROOT, 'src/data/fitness/anatomy/meshCatalog.ts'), 'utf8');
const GENERATED = JSON.parse(catalogSrc.match(/GENERATED_CATALOG[^=]*= (\{.*\});/s)![1]) as Record<string, Record<string, string>>;

console.log('Cobertura por modelo (nombres runtime reales):\n');
console.log('| Modelo | Nombres | Estructuras seleccionables | Nombres con dueño | % nombres con dueño | Clasificados (≠other/aux) | % clasificado |');
console.log('|---|---|---|---|---|---|---|');
for (const [model, inv] of Object.entries(INV)) {
  const total = inv.names.length;
  const own = owned.get(model)?.size ?? 0;
  const selectable = STRUCTURES.filter((s) => (s.modelMeshes[model]?.length ?? 0) > 0).length;
  const classified = Object.values(GENERATED[model] ?? {}).filter((k) => k !== 'other' && k !== 'aux').length;
  console.log(`| ${model} | ${total} | ${selectable} | ${own} | ${((own / total) * 100).toFixed(1)}% | ${classified} | ${((classified / total) * 100).toFixed(1)}% |`);
}
const withMapping = STRUCTURES.filter((s) => Object.keys(s.modelMeshes).length > 0).length;
const totalMappings = STRUCTURES.reduce((n, s) => n + Object.values(s.modelMeshes).reduce((m, v) => m + v.length, 0), 0);
console.log(`\nGrafo: ${STRUCTURES.length} estructuras · ${withMapping} con mapping 3D (${((withMapping / STRUCTURES.length) * 100).toFixed(1)}%) · ${totalMappings} mapeos estructura→mesh (todos verificados por meshMapping.test.ts).`);
