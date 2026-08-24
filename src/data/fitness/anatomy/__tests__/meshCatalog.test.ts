// src/data/fitness/anatomy/__tests__/meshCatalog.test.ts
// AG-ANATOM ciclo 3 — TAREA 4: tests del catálogo por tipo de los meshes reales.
// El catálogo da kind a TODOS los nombres runtime de cada modelo (los filtros de
// capa del visor lo usan como fallback cuando el mesh no tiene estructura dueña
// en anatomyGraph) y clasifica la geometría auxiliar como 'aux' (oculta).
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { getMeshKind, auxMeshesOf, MESH_KIND_OVERRIDES, type MeshKind } from '../meshCatalog';

const INVENTORY = JSON.parse(
  readFileSync(
    join(dirname(fileURLToPath(import.meta.url)), '../../../../../rag/anatomy/extracciones/mesh-names.json'),
    'utf8',
  ),
) as Record<string, { names: string[]; aux: string[] }>;

describe('meshCatalog — muestras por modelo', () => {
  it('clasifica nombres representativos', () => {
    const real: Array<[string, string, MeshKind]> = [
      // upper-limb
      ['upper-limb', 'Humerusr', 'bone'],
      ['upper-limb', 'Median_nerver', 'nerve'],
      ['upper-limb', 'Radial_arteryr', 'vessel'],
      ['upper-limb', 'Trapezius_muscler', 'muscle'],
      ['upper-limb', 'Common_tendon_of_biceps_brachiir', 'tendon'],
      ['upper-limb', 'Antebrachial_fasciar', 'fascia'],
      ['upper-limb', 'Vertebra_L3_art_cart', 'cartilage'],
      // lower-limb
      ['lower-limb', 'Gluteus_maximus_muscler', 'muscle'],
      ['lower-limb', 'Anterior_cruciate_ligamentr', 'ligament'],
      ['lower-limb', 'Tibialis_posterior_tendon_sheathr', 'tendon'],
      ['lower-limb', 'Ishciofemoral_ligamentr', 'ligament'], // typo del modelo + glued-r
      ['lower-limb', 'Art_cart_of_patellar', 'cartilage'],
      ['lower-limb', 'Femurr', 'bone'],
      ['lower-limb', 'Femoral_arteryr', 'vessel'],
      ['lower-limb', 'Tibial_nerver', 'nerve'],
      ['lower-limb', 'Bursa_of_piriformisr', 'other'],
      // hand
      ['hand', 'Scaphoid', 'bone'],
      ['hand', 'Median_nerve', 'nerve'],
      ['hand', 'Synovial_sheaths_of_fingers', 'tendon'],
      ['hand', 'Flexor_retinaculum_of_wrist', 'ligament'],
      ['hand', 'Opponens_pollicis_muscle', 'muscle'],
      // contenedores de categoría (visibilidad jerárquica)
      ['hand', 'Bones', 'bone'],
      ['hand', 'Muscles', 'muscle'],
      ['hand', 'Nerves', 'nerve'],
      ['lower-limb', 'Bursae', 'other'],
      // cráneos / esqueleto / vértebras
      ['colored-skull-base', 'Frontal_bone', 'bone'],
      ['colored-skull-base', 'Lower_first_premolars', 'bone'],
      ['overview-skeleton', 'Clavicler', 'bone'], // glued-r: "Clavicle.r"
      ['overview-skeleton', 'Costal_cart_of_1st_ribr', 'cartilage'],
      ['vertebrae', 'Cervical_vertebra_(C4)', 'bone'],
    ];
    for (const [model, name, kind] of real) {
      expect(getMeshKind(model, name), `${model}/${name}`).toBe(kind);
    }
  });

  it('geometría auxiliar (Circle/Plane/Vert/mesh.NNN) → aux aunque no esté en el catálogo', () => {
    expect(getMeshKind('lower-limb', 'Circle_007')).toBe('aux');
    expect(getMeshKind('upper-limb', 'Vert_015')).toBe('aux');
    expect(getMeshKind('overview-skeleton', 'mesh')).toBe('aux');
    expect(getMeshKind('hand', 'Plane_001')).toBe('aux');
  });

  it('overrides manuales ganan al catálogo generado', () => {
    const model = 'vertebrae';
    const name = 'Cervical_vertebra_(C4)';
    const prev = MESH_KIND_OVERRIDES[model];
    MESH_KIND_OVERRIDES[model] = { [name]: 'cartilage' };
    expect(getMeshKind(model, name)).toBe('cartilage');
    MESH_KIND_OVERRIDES[model] = prev;
    expect(getMeshKind(model, name)).toBe('bone');
  });
});

describe('meshCatalog — cobertura de clasificación por modelo', () => {
  const MIN_CLASSIFIED: Record<string, number> = {
    'colored-skull-base': 0.98, 'exploded-skull': 0.98, 'overview-colored-skull': 0.98,
    'overview-skeleton': 0.98, vertebrae: 0.98,
    hand: 0.95, 'lower-limb': 0.88, 'upper-limb': 0.93,
  };
  it('clasifica (≠ other) el grueso de los nombres de cada modelo', () => {
    for (const [model, inv] of Object.entries(INVENTORY)) {
      const classified = inv.names.filter((n) => {
        const k = getMeshKind(model, n);
        return k !== 'other' && k !== 'aux';
      }).length;
      const ratio = classified / inv.names.length;
      expect(ratio, `${model}: ${classified}/${inv.names.length} clasificados`).toBeGreaterThanOrEqual(MIN_CLASSIFIED[model] ?? 0.85);
    }
  });

  it('auxMeshesOf devuelve la lista de auxiliares del inventario', () => {
    for (const [model, inv] of Object.entries(INVENTORY)) {
      expect(auxMeshesOf(model).length, model).toBe(inv.aux.length);
    }
  });
});
