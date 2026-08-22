// src/data/fitness/anatomy/anatomyGraph.test.ts
// AG-ANATOM — tests de integridad del grafo anatómico (tarea 3).
import { describe, expect, it } from 'vitest';
import {
  ANATOMY_STRUCTURES,
  anatomyGraphStats,
  anatomyViewerUrl,
  findExercisesForMuscle,
  getMuscles,
  getStructuresByZone,
  getStructuresForModel,
  resolveHighlightNames,
  searchStructures,
} from '../anatomyGraph';
import { BODY_ZONES } from './types';
import { MESH_INDEX } from './meshIndex';
import type { AnatomyStructure } from './types';

const validZones = new Set<string>(BODY_ZONES);
const kinds = new Set(['muscle', 'tendon', 'nerve', 'joint', 'bone', 'ligament']);

describe('integridad de entidades', () => {
  it('todas las entidades tienen id único y prefijo por kind', () => {
    const ids = new Set<string>();
    for (const s of ANATOMY_STRUCTURES) {
      expect(ids.has(s.id), `id duplicado: ${s.id}`).toBe(false);
      ids.add(s.id);
      expect(kinds.has(s.kind), `kind inválido en ${s.id}`).toBe(true);
      const prefix = { muscle: 'mus', tendon: 'ten', nerve: 'ner', joint: 'art', bone: 'bone', ligament: 'lig' }[s.kind];
      expect(s.id.startsWith(prefix + '-'), `prefijo ${prefix}- esperado en ${s.id}`).toBe(true);
    }
  });

  it('toda entidad tiene zone válida, nameEn/nameEs y sourceRefs', () => {
    for (const s of ANATOMY_STRUCTURES) {
      expect(validZones.has(s.zone), `zone inválida ${s.zone} en ${s.id}`).toBe(true);
      for (const z of s.zones ?? []) expect(validZones.has(z), `zone secundaria inválida ${z} en ${s.id}`).toBe(true);
      expect(s.nameEn.length).toBeGreaterThan(2);
      expect(s.nameEs.length).toBeGreaterThan(2);
      expect(s.sourceRefs.length).toBeGreaterThan(0);
    }
  });

  it('ningún músculo queda sin origen/inserción/inervación/acción', () => {
    for (const m of getMuscles()) {
      expect(m.origin.trim().length, `origen vacío en ${m.id}`).toBeGreaterThan(1);
      expect(m.insertion.trim().length, `inserción vacía en ${m.id}`).toBeGreaterThan(1);
      expect(m.innervation.trim().length, `inervación vacía en ${m.id}`).toBeGreaterThan(1); // p. ej. "T12"
      expect(m.action.length, `acción vacía en ${m.id}`).toBeGreaterThan(0);
      expect(m.actionTags.length, `actionTags vacías en ${m.id}`).toBeGreaterThan(0);
    }
  });
});

describe('mapping estructura ↔ modelo GLB', () => {
  it('todo nombre de modelMeshes existe en el índice del modelo (nodo o mesh)', () => {
    for (const s of ANATOMY_STRUCTURES) {
      for (const [model, names] of Object.entries(s.modelMeshes)) {
        const idx = MESH_INDEX[model];
        expect(idx, `modelo desconocido ${model} en ${s.id}`).toBeDefined();
        const nodes = new Set(idx!.nodes);
        const meshes = new Set(idx!.meshes);
        for (const n of names) {
          expect(
            nodes.has(n) || meshes.has(n),
            `${s.id}: "${n}" no existe como nodo/mesh de ${model}`,
          ).toBe(true);
        }
      }
    }
  });

  it('los modelos clave tienen estructuras mapeadas', () => {
    const minima: Record<string, number> = {
      'upper-limb': 5, 'lower-limb': 5, 'hand': 5, 'overview-skeleton': 5,
      'vertebrae': 3, // el modelo trae solo C4/T7/L3
    };
    for (const [model, min] of Object.entries(minima)) {
      expect(getStructuresForModel(model).length, `sin estructuras para ${model}`).toBeGreaterThanOrEqual(min);
    }
  });

  it('resolveHighlightNames devuelve los nombres del modelo pedido', () => {
    const bic = getMuscles().find((m) => m.id === 'mus-biceps-brachii');
    expect(bic).toBeDefined();
    const names = resolveHighlightNames(bic!, 'upper-limb');
    expect(names.length).toBeGreaterThan(0);
    expect(names.some((n) => n.toLowerCase().includes('biceps'))).toBe(true);
  });
});

describe('zonas y búsqueda', () => {
  it('las zonas del usuario tienen contenido', () => {
    for (const zone of ['shoulder', 'knee', 'hip', 'cervical', 'core', 'ankle-foot'] as const) {
      expect(getStructuresByZone(zone).length, `zona ${zone} vacía`).toBeGreaterThan(0);
    }
  });

  it('searchStructures encuentra por nombre ES y EN', () => {
    expect(searchStructures('bíceps').some((s) => s.kind === 'muscle')).toBe(true);
    expect(searchStructures('Achilles').some((s) => s.kind === 'tendon')).toBe(true);
  });
});

describe('vinculación con ejercicios (READ exerciseDatabase)', () => {
  const find = (id: string): AnatomyStructure => {
    const s = ANATOMY_STRUCTURES.find((x) => x.id === id);
    if (!s) throw new Error(`estructura ${id} no encontrada`);
    return s;
  };

  it('pectoral mayor enlaza con ejercicios de empuje', () => {
    const ex = findExercisesForMuscle(find('mus-pectoralis-major') as any);
    expect(ex.length).toBeGreaterThan(0);
    expect(ex.some((e) => /press/i.test(e.name))).toBe(true);
  });

  it('cuádriceps enlaza con sentadillas', () => {
    const ex = findExercisesForMuscle(find('mus-rectus-femoris') as any);
    expect(ex.some((e) => /squat/i.test(e.name))).toBe(true);
  });

  it('anatomyViewerUrl solo cuando hay mapping 3D', () => {
    expect(anatomyViewerUrl(find('mus-biceps-brachii'))).toContain('/app/fitness/anatomy?model=');
    const sinModelo = ANATOMY_STRUCTURES.find((s) => Object.keys(s.modelMeshes).length === 0);
    if (sinModelo) expect(anatomyViewerUrl(sinModelo)).toBeUndefined();
  });
});

describe('estadísticas', () => {
  it('reporta cobertura esperada de la semilla', () => {
    const st = anatomyGraphStats();
    expect(st.muscles).toBeGreaterThanOrEqual(146);
    expect(st.tendons).toBe(20);
    expect(st.nerves).toBe(22);
    expect(st.joints).toBe(19);
    expect(st.models).toBe(8);
    expect(st.with3dMapping).toBeGreaterThan(150);
    // regla §0: todo lo no citado queda marcado pending
    expect(st.pendingCitation).toBeGreaterThan(0);
  });
});
