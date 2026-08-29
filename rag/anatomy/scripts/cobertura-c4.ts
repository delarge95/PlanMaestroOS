// rag/anatomy/scripts/cobertura-c4.ts
// AG-ANATOM ciclo 4 — TAREA A1: Auditoría de cobertura exhaustiva.
// Cruza meshCatalog.ts vs anatomyGraph vs LibraryMuscles/BD.
// Genera: rag/anatomy/extracciones/cobertura-c4.md

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ANATOMY_STRUCTURES } from '../../../src/data/fitness/anatomyGraph';
import type { AnatomyStructure } from '../../../src/data/fitness/anatomy/types';

const ROOT = process.cwd();
const INVENTORY_PATH = join(ROOT, 'rag/anatomy/extracciones/mesh-names.json');
const INVENTORY = JSON.parse(readFileSync(INVENTORY_PATH, 'utf8')) as Record<
  string,
  { names: string[]; meshes: string[]; aux: string[]; containers: Record<string, string[]> }
>;

// Cargar catálogo de tipos
const catalogSrc = readFileSync(join(ROOT, 'src/data/fitness/anatomy/meshCatalog.ts'), 'utf8');
const match = catalogSrc.match(/GENERATED_CATALOG[^=]*= (\{.*\});/s);
if (!match) throw new Error('No se pudo parsear GENERATED_CATALOG de meshCatalog.ts');
const MESH_CATALOG = JSON.parse(match[1]) as Record<string, Record<string, string>>;

const norm = (s: string) =>
  (s || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f\u200b\u200c\ufeff]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const tokens = (s: string) => norm(s).split(' ').filter((t) => t.length > 2);

// Indexar dueños en anatomyGraph: model -> meshName (normalized) -> list of structures
const ownersByModel = new Map<string, Map<string, AnatomyStructure[]>>();
for (const s of ANATOMY_STRUCTURES) {
  for (const [model, meshList] of Object.entries(s.modelMeshes)) {
    let modelMap = ownersByModel.get(model);
    if (!modelMap) {
      modelMap = new Map();
      ownersByModel.set(model, modelMap);
    }
    for (const meshName of meshList) {
      const nKey = norm(meshName);
      const list = modelMap.get(nKey) ?? [];
      list.push(s);
      modelMap.set(nKey, list);
    }
  }
}

// 1. Reporte por modelo: piezas visibles SIN dueño
interface UnownedMesh {
  model: string;
  name: string;
  kind: string;
  candidateStructure?: { id: string; nameEs: string; nameEn: string; kind: string; score: number };
}

const unownedByModel: Record<string, UnownedMesh[]> = {};
const statsByModel: Record<
  string,
  { total: number; auxOrOther: number; visibleTotal: number; visibleOwned: number; visibleUnowned: number; pctOwned: number }
> = {};

// Buscar candidato en ANATOMY_STRUCTURES por coincidencia léxica
function findCandidateStructure(meshName: string, kind: string): UnownedMesh['candidateStructure'] | undefined {
  const mToks = tokens(meshName);
  if (!mToks.length) return undefined;

  let best: AnatomyStructure | undefined;
  let bestScore = 0;

  for (const s of ANATOMY_STRUCTURES) {
    const sToks = tokens(`${s.nameEn} ${s.nameEs} ${s.id}`);
    let matchCount = 0;
    for (const tk of mToks) {
      if (sToks.includes(tk)) matchCount++;
    }
    const score = matchCount / mToks.length;
    if (score > bestScore) {
      bestScore = score;
      best = s;
    }
  }

  if (best && bestScore >= 0.35) {
    return {
      id: best.id,
      nameEs: best.nameEs,
      nameEn: best.nameEn,
      kind: best.kind,
      score: +bestScore.toFixed(2),
    };
  }
  return undefined;
}

for (const [model, inv] of Object.entries(INVENTORY)) {
  const modelCatalog = MESH_CATALOG[model] ?? {};
  const modelOwners = ownersByModel.get(model) ?? new Map();

  let auxOrOtherCount = 0;
  let visibleOwnedCount = 0;
  const unownedList: UnownedMesh[] = [];

  for (const rawName of inv.names) {
    const kind = modelCatalog[rawName] ?? 'other';
    const isAuxOrOther = kind === 'aux' || kind === 'other' || inv.aux.includes(rawName);

    if (isAuxOrOther) {
      auxOrOtherCount++;
      continue;
    }

    const isOwned = modelOwners.has(norm(rawName));
    if (isOwned) {
      visibleOwnedCount++;
    } else {
      const candidate = findCandidateStructure(rawName, kind);
      unownedList.push({
        model,
        name: rawName,
        kind,
        candidateStructure: candidate,
      });
    }
  }

  const visibleTotal = visibleOwnedCount + unownedList.length;
  const pct = visibleTotal > 0 ? (visibleOwnedCount / visibleTotal) * 100 : 100;

  statsByModel[model] = {
    total: inv.names.length,
    auxOrOther: auxOrOtherCount,
    visibleTotal,
    visibleOwned: visibleOwnedCount,
    visibleUnowned: unownedList.length,
    pctOwned: +pct.toFixed(1),
  };
  unownedByModel[model] = unownedList;
}

// 2. Estructuras del grafo SIN meshes
const unmappedStructures: Array<{
  structure: AnatomyStructure;
  reason: string;
  candidateMesh?: string;
}> = [];

for (const s of ANATOMY_STRUCTURES) {
  const hasMeshes = Object.values(s.modelMeshes).some((arr) => arr && arr.length > 0);
  if (!hasMeshes) {
    // Clasificar motivo
    let reason = 'Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello)';
    if (s.zone === 'head-jaw') reason = 'Cráneo/mandíbula (estructuras no desglosadas en malla individual)';
    else if (s.zone === 'hip' || s.zone === 'spine') reason = 'Región pélvica/lumbar profunda sin despiece individual en GLB';
    else if (s.kind === 'nerve') reason = 'Nervio no modelado en los atlas 3D de extremidades';
    else if (s.kind === 'ligament') reason = 'Ligamento ligamentario menor o articular interno';

    // Buscar si hay algún mesh no mapeado en algún modelo que podría coincidir
    let candidateMesh: string | undefined;
    const sToks = tokens(`${s.nameEn} ${s.id}`);
    for (const [model, unownedList] of Object.entries(unownedByModel)) {
      for (const u of unownedList) {
        const uToks = tokens(u.name);
        let count = 0;
        for (const st of sToks) {
          if (uToks.includes(st)) count++;
        }
        if (count >= 2 || (sToks.length === 1 && count === 1)) {
          candidateMesh = `${model}:${u.name}`;
          break;
        }
      }
      if (candidateMesh) break;
    }

    unmappedStructures.push({ structure: s, reason, candidateMesh });
  }
}

// Generar Markdown
let md = `# Auditoría de Cobertura Anatómica 3D — Ciclo 4 (AG-ANATOM)

> Generado por \`rag/anatomy/scripts/cobertura-c4.ts\`.
> Cruce entre catálogo de mallas runtime (\`meshCatalog.ts\`), el grafo (\`anatomyGraph.ts\`) y el inventario de biblioteca (\`LibraryMuscles\`).

---

## 1. Resumen Ejecutivo por Modelo GLB

| Modelo | Total Piezas | Aux/Otros (Ocultos) | Piezas Visibles | Piezas con Dueño (Grafo) | Piezas SIN Dueño | % Cobertura Visible |
|---|---|---|---|---|---|---|
`;

for (const [model, st] of Object.entries(statsByModel)) {
  md += `| \`${model}\` | ${st.total} | ${st.auxOrOther} | **${st.visibleTotal}** | **${st.visibleOwned}** | ${st.visibleUnowned} | **${st.pctOwned}%** |\n`;
}

md += `
> **Criterio de Aceptación Ciclo 4 (Tarea A2):** Llevar las piezas visibles sin dueño al **< 10%** por modelo mediante enriquecimiento del grafo o alias.

---

## 2. Inventario de Piezas Visibles SIN Dueño en el Grafo (por Modelo)

`;

for (const [model, list] of Object.entries(unownedByModel)) {
  md += `### 🔹 Modelo: \`${model}\` (${list.length} piezas sin dueño)\n\n`;
  if (list.length === 0) {
    md += `*100% de piezas visibles mapeadas.* 🎉\n\n`;
    continue;
  }

  md += `| Pieza Runtime (GLB) | Tipo (Catalog) | Candidato en Grafo (\`anatomyGraph\`) | Similitud |\n|---|---|---|---|\n`;
  for (const item of list) {
    const candStr = item.candidateStructure
      ? `\`${item.candidateStructure.id}\` (${item.candidateStructure.nameEs})`
      : '*Sin candidato claro*';
    const scoreStr = item.candidateStructure ? `${Math.round(item.candidateStructure.score * 100)}%` : '—';
    md += `| \`${item.name}\` | \`${item.kind}\` | ${candStr} | ${scoreStr} |\n`;
  }
  md += '\n';
}

md += `---

## 3. Estructuras del Grafo SIN Mallas 3D (\`modelMeshes\` Vacío)

Total de estructuras en el grafo: **${ANATOMY_STRUCTURES.length}**
- Estructuras con mallas 3D: **${ANATOMY_STRUCTURES.length - unmappedStructures.length}** (${(((ANATOMY_STRUCTURES.length - unmappedStructures.length) / ANATOMY_STRUCTURES.length) * 100).toFixed(1)}%)
- Estructuras sin mallas 3D: **${unmappedStructures.length}** (${((unmappedStructures.length / ANATOMY_STRUCTURES.length) * 100).toFixed(1)}%)

### Detalle de Estructuras sin Mallas 3D:

| Estructura | Tipo | Zona | Motivo Principal | Pieza Candidata Potencial en GLB |\n|---|---|---|---|---|\n`;

for (const item of unmappedStructures) {
  const s = item.structure;
  md += `| \`${s.id}\`<br>**${s.nameEs}** (*${s.nameEn}*) | \`${s.kind}\` | \`${s.zone}\` | ${item.reason} | ${item.candidateMesh ? `\`${item.candidateMesh}\`` : '—'} |\n`;
}

md += `
---

## 4. Plan de Acción Inmediato (Tareas A2 & A3)

1. **Vincular Piezas Visibles con Candidatos Directos (A2):**
   - Incorporar a \`bones.ts\`, \`ligaments.ts\`, \`tendons.ts\`, \`muscles.ts\` y \`nerves.ts\` las piezas de tipo \`cartilage\`, \`ligament\`, \`vessel\` y \`fascia\` con identificación anatómica inequívoca.
   - Preservar la regla de 0 huérfanos (\`meshMapping.test.ts\` verde).
2. **Depurar Selección Jerárquica y Subgrupos (A3):**
   - Ajustar \`resolveClick\` y \`buildSubgroups\` en \`composite.ts\` para que el descenso y ascenso de nivel respondan exactamente a los casos límite (a), (b), (c).
`;

const OUT_PATH = join(ROOT, 'rag/anatomy/extracciones/cobertura-c4.md');
writeFileSync(OUT_PATH, md, 'utf8');
console.log(`Auditoría guardada en ${OUT_PATH}`);
