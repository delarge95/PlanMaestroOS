// src/components/fitness/anatomy/__tests__/composite.test.ts
// AG-ANATOM — lógica pura del modelo compuesto y la selección jerárquica.

import { describe, it, expect } from 'vitest';
import {
  DEFAULT_LAYERS,
  FOCUS_LABELS,
  VERTEBRAE_PIECES,
  buildSubgroups,
  focusFromLegacyModel,
  phaseLabel,
  pieceKey,
  pieceVisible,
  resolveClick,
  unitPieceKeys,
  highlightColor,
  layerDef,
  type Aabb,
  type CompositeKind,
  type SelectionPath,
} from '../composite';
import { COMPOSITE_PIECES, COMPOSITE_STATS, EXPLODE_PAIRS } from '../../../../data/fitness/anatomy/compositePlan';

const piece = (over: Partial<Parameters<typeof pieceVisible>[0]>) => ({
  model: 'overview-skeleton',
  name: 'X',
  region: 'axial' as const,
  kind: 'bone' as const,
  container: 'Bones',
  ...over,
});

const NO_BOX: Aabb = { min: [-10, -10, -10], max: [10, 10, 10] };

describe('pieceVisible', () => {
  const base = () => ({
    focus: 'full' as const,
    layers: new Set<CompositeKind>(DEFAULT_LAYERS),
    hidden: new Set<string>(),
    isolation: null,
  });

  it('vista completa + capa activa + sin dedup → visible', () => {
    expect(pieceVisible(piece({}), base(), NO_BOX)).toBe(true);
  });

  it('capa inactiva → oculto (p.ej. mostrar solo músculo y tendón)', () => {
    expect(pieceVisible(piece({ kind: 'artery' }), base(), NO_BOX)).toBe(false);
    const st = { ...base(), layers: new Set<CompositeKind>(['muscle', 'tendon'] as CompositeKind[]) };
    expect(pieceVisible(piece({ kind: 'muscle' }), st, NO_BOX)).toBe(true);
    expect(pieceVisible(piece({ kind: 'bone' }), st, NO_BOX)).toBe(false);
  });

  it('focus por región filtra las demás regiones', () => {
    const upper = { ...base(), focus: 'upper' as const };
    expect(pieceVisible(piece({ region: 'upper' }), upper, NO_BOX)).toBe(true);
    expect(pieceVisible(piece({ region: 'lower' }), upper, NO_BOX)).toBe(false);
  });

  it('focus vértebras: solo las 3 piezas del modelo vertebrae', () => {
    const vert = { ...base(), focus: 'vertebrae' as const };
    expect(pieceVisible(piece({ name: 'Cervical vertebra (C4)', region: 'upper' }), vert, NO_BOX)).toBe(true);
    expect(pieceVisible(piece({ name: 'Femurr', region: 'lower' }), vert, NO_BOX)).toBe(false);
    expect(VERTEBRAE_PIECES.size).toBe(3);
  });

  it('hiddenByDup (representada por especialista) → oculta por defecto', () => {
    expect(pieceVisible(piece({ hiddenByDup: 'lower-limb:Femurr' }), base(), NO_BOX)).toBe(false);
  });

  it('oculta manual', () => {
    const key = pieceKey('overview-skeleton', 'X');
    expect(pieceVisible(piece({}), { ...base(), hidden: new Set([key]) }, NO_BOX)).toBe(false);
  });

  it('aislamiento: solo las claves explícitas de la unidad son visibles', () => {
    const st = {
      ...base(),
      isolation: { keys: new Set([pieceKey('upper-limb', 'Triceps')]), label: 'Triceps' },
    };
    expect(pieceVisible(piece({ kind: 'muscle', model: 'upper-limb', name: 'Triceps' }), st)).toBe(true);
    expect(pieceVisible(piece({ kind: 'muscle', model: 'lower-limb', name: 'Soleus' }), st)).toBe(false);
    // kind NO incluido → no visible aunque la clave esté
    expect(pieceVisible(piece({ kind: 'bone' }), { ...base(), isolation: { keys: new Set(['m:bone-x']), label: 'x' } })).toBe(false);
  });
});

describe('buildSubgroups — subconjuntos por nombre', () => {
  it('triceps: 3 cabezas → 3 subconjuntos hoja', () => {
    const g = buildSubgroups('Triceps brachii', [
      ['m:Long head of triceps brachii', 'Long head of triceps brachii'],
      ['m:Lateral head of triceps brachii', 'Lateral head of triceps brachii'],
      ['m:Medial head of triceps brachii', 'Medial head of triceps brachii'],
    ]);
    expect(g.size).toBe(3);
    for (const list of g.values()) expect(list.length).toBe(1);
  });

  it('costillas: cada costilla su subconjunto', () => {
    const g = buildSubgroups('Rib', [['m:Rib (1st)', 'Rib (1st)'], ['m:Rib (2nd)', 'Rib (2nd)'], ['m:Rib (3rd)', 'Rib (3rd)']]);
    expect(g.size).toBe(3);
  });
});

describe('resolveClick — máquina de fases', () => {
  // triceps: 3 grupos hoja (1 pieza cada uno)
  const S = 'mus-triceps';
  const K = (n: string) => pieceKey('upper-limb', n);
  const tricepsGroups = buildSubgroups('Triceps brachii', [
    ['m:Long head of triceps brachii', 'Long head of triceps brachii'],
    ['m:Lateral head of triceps brachii', 'Lateral head of triceps brachii'],
    ['m:Medial head of triceps brachii', 'Medial head of triceps brachii'],
  ]);
  const long = K('Long head of triceps brachii');
  const lat = K('Lateral head of triceps brachii');
  const tricepsKeys = new Map([...tricepsGroups.entries()].map(([g, list]) => [g, list.map((n) => K(n))]));
  const longKey = 'long head';

  // caso multi-pieza: un subconjunto con 2 piezas (3 niveles reales)
  const multiGroups = new Map<string, string[]>([
    ['head', [K('a1'), K('a2')]],
    ['medial', [K('m')]],
  ]);

  it('click en otra estructura → conjunto (fase 1)', () => {
    const next = resolveClick({ current: null, clickedPieceKey: long, clickedStructureId: S, groups: tricepsKeys, clickedGroupKey: longKey });
    expect(next).toEqual({ structureId: S, groupKey: null, pieceKey: null });
  });

  it('grupo hoja de 1 pieza: 2º click selecciona la pieza directamente', () => {
    const next = resolveClick({ current: { structureId: S, groupKey: null, pieceKey: null }, clickedPieceKey: long, clickedStructureId: S, groups: tricepsKeys, clickedGroupKey: longKey });
    expect(next).toEqual({ structureId: S, groupKey: null, pieceKey: long });
  });

  it('subconjunto multi-pieza: 2º click baja al subconjunto', () => {
    const next = resolveClick({ current: { structureId: S, groupKey: null, pieceKey: null }, clickedPieceKey: K('a1'), clickedStructureId: S, groups: multiGroups, clickedGroupKey: 'head' });
    expect(next).toEqual({ structureId: S, groupKey: 'head', pieceKey: null });
  });

  it('3º click en pieza del subconjunto → pieza individual', () => {
    const next = resolveClick({ current: { structureId: S, groupKey: 'head', pieceKey: null }, clickedPieceKey: K('a1'), clickedStructureId: S, groups: multiGroups, clickedGroupKey: 'head' });
    expect(next).toEqual({ structureId: S, groupKey: 'head', pieceKey: K('a1') });
  });

  it('click en otra pieza del mismo subconjunto cambia la pieza', () => {
    const next = resolveClick({ current: { structureId: S, groupKey: 'head', pieceKey: K('a1') }, clickedPieceKey: K('a2'), clickedStructureId: S, groups: multiGroups, clickedGroupKey: 'head' });
    expect(next).toEqual({ structureId: S, groupKey: 'head', pieceKey: K('a2') });
  });

  it('click en la misma pieza → sube al subconjunto', () => {
    const next = resolveClick({ current: { structureId: S, groupKey: 'head', pieceKey: K('a1') }, clickedPieceKey: K('a1'), clickedStructureId: S, groups: multiGroups, clickedGroupKey: 'head' });
    expect(next).toEqual({ structureId: S, groupKey: 'head', pieceKey: null });
  });

  it('click en subconjunto hermano cambia de subconjunto', () => {
    const next = resolveClick({ current: { structureId: S, groupKey: 'head', pieceKey: K('a1') }, clickedPieceKey: K('m'), clickedStructureId: S, groups: multiGroups, clickedGroupKey: 'medial' });
    expect(next.pieceKey).toBe(K('m'));
    expect(next.groupKey).toBe('medial');
  });
});

describe('unitPieceKeys', () => {
  it('devuelve las piezas del nivel del path', () => {
    const groups = new Map([['long head', ['m:a', 'm:b']], ['other', ['m:c']]]);
    const p1: SelectionPath = { structureId: 's', groupKey: 'long head', pieceKey: null };
    expect(unitPieceKeys(p1, groups)).toEqual(['m:a', 'm:b']);
    const p2: SelectionPath = { structureId: 's', groupKey: 'long head', pieceKey: 'm:a' };
    expect(unitPieceKeys(p2, groups)).toEqual(['m:a']);
    const p3: SelectionPath = { structureId: 's', groupKey: null, pieceKey: null };
    expect(unitPieceKeys(p3, groups)).toEqual(['m:a', 'm:b', 'm:c']);
  });
});

describe('focus y compatibilidad de URLs', () => {
  it('focusFromLegacyModel mapea los modelos antiguos', () => {
    expect(focusFromLegacyModel('colored-skull-base')).toBe('skull');
    expect(focusFromLegacyModel('hand')).toBe('hand');
    expect(focusFromLegacyModel('upper-limb')).toBe('upper');
    expect(focusFromLegacyModel('lower-limb')).toBe('lower');
    expect(focusFromLegacyModel('vertebrae')).toBe('vertebrae');
    expect(focusFromLegacyModel('overview-skeleton')).toBe('full');
    expect(focusFromLegacyModel('no-existe')).toBeNull();
  });

  it('los 6 focus tienen etiqueta', () => {
    expect(Object.keys(FOCUS_LABELS).length).toBe(6);
  });
});

describe('plan de compuesto (datos generados)', () => {
  it('total y regiones cuadran con el análisis', () => {
    expect(COMPOSITE_PIECES.length).toBe(COMPOSITE_STATS.total);
    expect(COMPOSITE_PIECES.length).toBe(1380);
    const sum = Object.values(COMPOSITE_STATS.porRegion).reduce((a, b) => a + b, 0);
    expect(sum).toBe(COMPOSITE_STATS.total);
  });

  it('cráneo: TODAS las piezas del skeleton en región skull están ocultas por dedup (fix cráneo duplicado)', () => {
    const sk = COMPOSITE_PIECES.filter((p) => p.model === 'overview-skeleton' && p.region === 'skull');
    expect(sk.length).toBeGreaterThanOrEqual(25);
    for (const p of sk) expect(p.hiddenByDup, p.name).toBeTruthy();
  });

  it('todas las piezas tienen modelo/kind/región válidos y claves únicas', () => {
    const models = new Set(['overview-skeleton', 'lower-limb', 'upper-limb', 'hand', 'colored-skull-base']);
    const regions = new Set(['axial', 'skull', 'upper', 'lower', 'hand']);
    const keys = new Set<string>();
    for (const p of COMPOSITE_PIECES) {
      expect(models.has(p.model), p.name).toBe(true);
      expect(regions.has(p.region), p.name).toBe(true);
      keys.add(pieceKey(p.model, p.name));
    }
    expect(keys.size).toBe(COMPOSITE_PIECES.length);
  });

  it('explosión: los pares apuntan a piezas base existentes en el plan', () => {
    const keys = new Set(COMPOSITE_PIECES.map((p) => pieceKey(p.model, p.name)));
    const pairs = Object.entries(EXPLODE_PAIRS);
    expect(pairs.length).toBeGreaterThanOrEqual(28);
    for (const [, base] of pairs) expect(keys.has(pieceKey('colored-skull-base', base)), base).toBe(true);
  });

  it('capas por defecto y colores definidos', () => {
    expect(DEFAULT_LAYERS.length).toBe(5);
    for (const k of DEFAULT_LAYERS) expect(layerDef(k).label.length).toBeGreaterThan(0);
    expect(highlightColor('muscle')).not.toBe(layerDef('muscle').color);
  });
});

describe('phaseLabel', () => {
  it('limpia underscores y laterales', () => {
    expect(phaseLabel('Long head of triceps brachii')).toBe('Long head of triceps brachii');
    expect(phaseLabel('Adductor_minimus_overlay.r')).toBe('Adductor minimus overlay');
  });
});
