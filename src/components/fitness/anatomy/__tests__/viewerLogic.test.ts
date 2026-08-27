// src/components/fitness/anatomy/__tests__/viewerLogic.test.ts
// AG-ANATOM ciclo 4 — tests de la lógica pura del visor (bugs de
// aislamiento/capas/click reportados por el usuario y corregidos aquí).

import { describe, it, expect } from 'vitest';
import {
  prettyMeshName,
  buildOwnerIndex,
  resolveSelectionNames,
  decideMeshVisibility,
  type ViewerSelection,
} from '../viewerLogic';

describe('prettyMeshName', () => {
  it('elimina zero-width chars del export de Blender', () => {
    expect(prettyMeshName('Art_cart_of_talusr_\u200b')).toBe('Art cart of talusr');
  });

  it('sustituye underscores por espacios y recorta', () => {
    expect(prettyMeshName('Flexor_retinaculum_of_wrist')).toBe('Flexor retinaculum of wrist');
  });

  it('no toca nombres limpios', () => {
    expect(prettyMeshName('Femurr')).toBe('Femurr');
  });
});

describe('buildOwnerIndex', () => {
  const aliasToPrimary = new Map([['Flexor_retinaculum_of_wrist', 'Flexor_retinaculum_of_wristr']]);

  it('resuelve el dueño por nombre de NODO aunque el mapping use alias de geometría', () => {
    const idx = buildOwnerIndex(
      [{ id: 'lig-flexor-retinaculum', modelMeshes: { 'upper-limb': ['Flexor_retinaculum_of_wrist'] } }],
      'upper-limb',
      aliasToPrimary,
    );
    // el click devuelve el nombre de nodo; el índice debe contenerlo
    expect(idx.get('Flexor_retinaculum_of_wristr')).toBe('lig-flexor-retinaculum');
    expect(idx.get('Flexor_retinaculum_of_wrist')).toBe('lig-flexor-retinaculum');
  });

  it('el dueño es la estructura más específica (hueso 1 pieza > articulación 3 piezas)', () => {
    const idx = buildOwnerIndex(
      [
        { id: 'art-rodilla', modelMeshes: { 'lower-limb': ['Femurr', 'Patellar', 'Tibiar'] } },
        { id: 'bone-femur', modelMeshes: { 'lower-limb': ['Femurr'] } },
      ],
      'lower-limb',
    );
    expect(idx.get('Femurr')).toBe('bone-femur');
    expect(idx.get('Tibiar')).toBe('art-rodilla');
  });

  it('a igual especificidad gana el orden del grafo (primero listado)', () => {
    const idx = buildOwnerIndex(
      [
        { id: 'mus-a', modelMeshes: { m: ['Pieza'] } },
        { id: 'ten-b', modelMeshes: { m: ['Pieza'] } },
      ],
      'm',
    );
    expect(idx.get('Pieza')).toBe('mus-a');
  });
});

describe('resolveSelectionNames', () => {
  const structures = new Map<string, { modelMeshes: Record<string, string[]> }>([
    ['art-muñeca', { modelMeshes: { 'upper-limb': ['Radiusr', 'Ulnar'] } }],
  ]);
  const getStructure = (id: string) => structures.get(id);

  it('estructura → nombres de mapping del modelo pedido', () => {
    const sel: ViewerSelection = { type: 'structure', id: 'art-muñeca' };
    expect(resolveSelectionNames(sel, 'upper-limb', getStructure)).toEqual(['Radiusr', 'Ulnar']);
  });

  it('normaliza alias de geometría a nombre de nodo', () => {
    const structures2 = new Map([
      ['lig-fr', { modelMeshes: { 'upper-limb': ['Flexor_retinaculum_of_wrist'] } }],
    ]);
    const names = resolveSelectionNames(
      { type: 'structure', id: 'lig-fr' },
      'upper-limb',
      (id) => structures2.get(id),
      new Map([['Flexor_retinaculum_of_wrist', 'Flexor_retinaculum_of_wristr']]),
    );
    expect(names).toEqual(['Flexor_retinaculum_of_wristr']);
  });

  it('pieza suelta → [nombre]; sin selección → []', () => {
    expect(resolveSelectionNames({ type: 'mesh', name: 'X' }, 'm', getStructure)).toEqual(['X']);
    expect(resolveSelectionNames(null, 'm', getStructure)).toEqual([]);
  });

  it('estructura inexistente o sin mapping en este modelo → []', () => {
    expect(resolveSelectionNames({ type: 'structure', id: 'no-existe' }, 'm', getStructure)).toEqual([]);
    expect(resolveSelectionNames({ type: 'structure', id: 'art-muñeca' }, 'lower-limb', getStructure)).toEqual([]);
  });
});

describe('decideMeshVisibility', () => {
  it('aislamiento: solo los nombres aislados son visibles (aunque el kind encaje en el filtro)', () => {
    const iso = new Set(['Femurr']);
    expect(decideMeshVisibility({ name: 'Femurr', kind: 'bone', isoNames: iso, filterKinds: null })).toBe(true);
    expect(decideMeshVisibility({ name: 'Tibiar', kind: 'bone', isoNames: iso, filterKinds: null })).toBe(false);
  });

  it('filtro de capa por kind', () => {
    expect(decideMeshVisibility({ name: 'Bicepsr', kind: 'muscle', isoNames: null, filterKinds: ['muscle'] })).toBe(true);
    expect(decideMeshVisibility({ name: 'Femurr', kind: 'bone', isoNames: null, filterKinds: ['muscle'] })).toBe(false);
  });

  it('vista completa: solo oculta aux', () => {
    expect(decideMeshVisibility({ name: 'Femurr', kind: 'bone', isoNames: null, filterKinds: null })).toBe(true);
    expect(decideMeshVisibility({ name: 'Circle_007', kind: 'aux', isoNames: null, filterKinds: null })).toBe(false);
    expect(decideMeshVisibility({ name: 'Bursae', kind: 'other', isoNames: null, filterKinds: null })).toBe(true);
  });
});
