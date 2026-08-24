// src/data/fitness/anatomy/__tests__/meshMapping.test.ts
// AG-ANATOM ciclo 3 — TAREA 2: test de integridad anti-regresión del mapping
// estructura ↔ GLB. Todo nombre en `structure.modelMeshes[model]` DEBE existir
// en el inventario real del modelo (rag/anatomy/extracciones/mesh-names.json,
// nombres RUNTIME según GLTFLoader — ver rag/anatomy/scripts/inventory-glb.mjs).
//
// Comparación normalizada (lowercase + trim). Sin esta barrera, el error del
// ciclo 2 (nombres inventados / crudos que no existen en los GLB) llegó a main
// silenciosamente: solo el 11% de los 722 mapeos coincidía.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { ANATOMY_STRUCTURES } from '../../anatomyGraph';

interface InventoryEntry {
  names: string[];
  meshes: string[];
  aux: string[];
  containers: Record<string, string[]>;
}

const INVENTORY_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  '../../../../../rag/anatomy/extracciones/mesh-names.json',
);
const INVENTORY = JSON.parse(readFileSync(INVENTORY_PATH, 'utf8')) as Record<string, InventoryEntry>;

const norm = (s: string) => s.toLowerCase().trim();
/** nombre normalizado → nombre real del inventario, por modelo */
const NORM_BY_MODEL = new Map<string, Map<string, string>>(
  Object.entries(INVENTORY).map(([model, inv]) => [
    model,
    new Map(inv.names.map((n) => [norm(n), n])),
  ]),
);

describe('integridad mapping estructura ↔ mesh-names.json (anti-regresión ciclo 3)', () => {
  it('cada modelo referenciado en modelMeshes existe en el inventario', () => {
    const unknown: string[] = [];
    for (const s of ANATOMY_STRUCTURES) {
      for (const model of Object.keys(s.modelMeshes)) {
        if (!INVENTORY[model]) unknown.push(`${s.id} → modelo desconocido "${model}"`);
      }
    }
    expect(unknown).toEqual([]);
  });

  it('TODO nombre de modelMeshes existe en mesh-names.json de ese modelo (0 huérfanos)', () => {
    const offenders: string[] = [];
    let checked = 0;
    for (const s of ANATOMY_STRUCTURES) {
      for (const [model, names] of Object.entries(s.modelMeshes)) {
        const known = NORM_BY_MODEL.get(model);
        if (!known) continue; // cubierto por el test anterior
        for (const name of names) {
          checked += 1;
          if (!known.has(norm(name))) offenders.push(`${s.id} [${model}] → "${name}"`);
        }
      }
    }
    const sample = offenders.slice(0, 40).join('\n  ');
    expect(
      offenders,
      `${offenders.length}/${checked} mapeos huérfanos (nombres que NO existen en el GLB real).` +
        ` Primers 40:\n  ${sample}`,
    ).toEqual([]);
  });

  it('los meshes auxiliares jamás se mapean (Circle/Plane/Vert/mesh → no seleccionables)', () => {
    const offenders: string[] = [];
    for (const s of ANATOMY_STRUCTURES) {
      for (const [model, names] of Object.entries(s.modelMeshes)) {
        const aux = new Set(INVENTORY[model]?.aux ?? []);
        for (const name of names) if (aux.has(name)) offenders.push(`${s.id} [${model}] → aux "${name}"`);
      }
    }
    expect(offenders).toEqual([]);
  });
});
