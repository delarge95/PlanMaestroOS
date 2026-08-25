// src/components/fitness/anatomy/__tests__/composite.test.ts
// AG-ANATOM ciclo 5 â€” lÃ³gica pura del modelo compuesto.

import { describe, it, expect } from 'vitest';
import {
  DEFAULT_LAYERS,
  FOCUS_LABELS,
  VERTEBRAE_PIECES,
  focusFromLegacyModel,
  nextPhaseSelection,
  phaseLabel,
  pieceKey,
  pieceVisible,
  highlightColor,
  layerDef,
  type CompositeKind,
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

describe('pieceVisible', () => {
  const base = { focus: 'full' as const, layers: new Set<CompositeKind>(DEFAULT_LAYERS), hidden: new Set<string>(), isolated: new Set<string>() };

  it('vista completa + capa activa + sin dedup â†’ visible', () => {
    expect(pieceVisible(piece({}), base)).toBe(true);
  });

  it('capa inactiva â†’ oculto (p.ej. mostrar solo mÃºsculo y tendÃ³n)', () => {
    expect(pieceVisible(piece({ kind: 'artery' }), base)).toBe(false);
    expect(pieceVisible(piece({ kind: 'muscle' }), { ...base, layers: new Set<CompositeKind>(['muscle', 'tendon']) })).toBe(true);
    expect(pieceVisible(piece({ kind: 'bone' }), { ...base, layers: new Set<CompositeKind>(['muscle', 'tendon']) })).toBe(false);
  });

  it('focus por regiÃ³n filtra las demÃ¡s regiones', () => {
    const upper = { ...base, focus: 'upper' as const };
    expect(pieceVisible(piece({ region: 'upper' }), upper)).toBe(true);
    expect(pieceVisible(piece({ region: 'lower' }), upper)).toBe(false);
  });

  it('focus vÃ©rtebras: solo las 3 piezas del modelo vertebrae', () => {
    const vert = { ...base, focus: 'vertebrae' as const };
    expect(pieceVisible(piece({ name: 'Cervical vertebra (C4)', region: 'upper' }), vert)).toBe(true);
    expect(pieceVisible(piece({ name: 'Femurr', region: 'lower' }), vert)).toBe(false);
    expect(VERTEBRAE_PIECES.size).toBe(3);
  });

  it('hiddenByDup (representada por especialista) â†’ oculta por defecto', () => {
    expect(pieceVisible(piece({ hiddenByDup: 'lower-limb:Femurr' }), base)).toBe(false);
  });

  it('oculta manual gana sobre todo salvo aislamiento', () => {
    const key = pieceKey('overview-skeleton', 'X');
    expect(pieceVisible(piece({}), { ...base, hidden: new Set([key]) })).toBe(false);
    expect(pieceVisible(piece({}), { ...base, hidden: new Set([key]), isolated: new Set([key]) })).toBe(true);
  });

  it('aislamiento: solo las piezas aisladas son visibles', () => {
    const st = { ...base, isolated: new Set(['lower-limb:Femurr']) };
    expect(pieceVisible(piece({ model: 'lower-limb', name: 'Femurr', region: 'lower' }), st)).toBe(true);
    expect(pieceVisible(piece({}), st)).toBe(false);
  });
});

describe('nextPhaseSelection â€” selecciÃ³n por fases', () => {
  it('click en otra estructura â†’ fase 1 (estructura entera)', () => {
    const next = nextPhaseSelection({ current: { structureId: null, phasePiece: null }, clickedPieceKey: 'upper-limb:Triceps', clickedStructureId: 'mus-triceps', structurePieceCount: 3 });
    expect(next).toEqual({ structureId: 'mus-triceps', phasePiece: null });
  });

  it('2Âº click sobre cabeza de la misma estructura multi-pieza â†’ fase 2 (solo esa cabeza)', () => {
    const next = nextPhaseSelection({ current: { structureId: 'mus-triceps', phasePiece: null }, clickedPieceKey: 'upper-limb:Long head of triceps brachii', clickedStructureId: 'mus-triceps', structurePieceCount: 3 });
    expect(next).toEqual({ structureId: 'mus-triceps', phasePiece: 'upper-limb:Long head of triceps brachii' });
  });

  it('click en OTRA cabeza sigue en fase 2 (cambia la cabeza)', () => {
    const next = nextPhaseSelection({ current: { structureId: 'mus-triceps', phasePiece: 'upper-limb:Long head of triceps brachii' }, clickedPieceKey: 'upper-limb:Lateral head of triceps brachii', clickedStructureId: 'mus-triceps', structurePieceCount: 3 });
    expect(next.phasePiece).toBe('upper-limb:Lateral head of triceps brachii');
  });

  it('click en la misma cabeza de fase 2 â†’ vuelve a fase 1', () => {
    const next = nextPhaseSelection({ current: { structureId: 'mus-triceps', phasePiece: 'upper-limb:Long head of triceps brachii' }, clickedPieceKey: 'upper-limb:Long head of triceps brachii', clickedStructureId: 'mus-triceps', structurePieceCount: 3 });
    expect(next).toEqual({ structureId: 'mus-triceps', phasePiece: null });
  });

  it('estructura de UNA pieza: no hay fase 2', () => {
    const next = nextPhaseSelection({ current: { structureId: 'bone-femur', phasePiece: null }, clickedPieceKey: 'lower-limb:Femurr', clickedStructureId: 'bone-femur', structurePieceCount: 1 });
    expect(next.phasePiece).toBeNull();
  });

  it('pieza sin dueÃ±a â†’ selecciÃ³n directa de pieza', () => {
    const next = nextPhaseSelection({ current: { structureId: 'mus-x', phasePiece: null }, clickedPieceKey: 'lower-limb:Adductor canal.r', clickedStructureId: null, structurePieceCount: 0 });
    expect(next.phasePiece).toBe('lower-limb:Adductor canal.r');
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
  it('total y regiones cuadran con el anÃ¡lisis', () => {
    expect(COMPOSITE_PIECES.length).toBe(COMPOSITE_STATS.total);
    expect(COMPOSITE_PIECES.length).toBe(1380);
    const sum = Object.values(COMPOSITE_STATS.porRegion).reduce((a, b) => a + b, 0);
    expect(sum).toBe(COMPOSITE_STATS.total);
  });

  it('todas las piezas tienen modelo/kind/regiÃ³n vÃ¡lidos', () => {
    const models = new Set(['overview-skeleton', 'lower-limb', 'upper-limb', 'hand', 'colored-skull-base']);
    const regions = new Set(['axial', 'skull', 'upper', 'lower', 'hand']);
    for (const p of COMPOSITE_PIECES) {
      expect(models.has(p.model), p.name).toBe(true);
      expect(regions.has(p.region), p.name).toBe(true);
      expect(p.kind.length, p.name).toBeGreaterThan(0);
    }
  });

  it('las claves model:name son Ãºnicas', () => {
    const keys = new Set(COMPOSITE_PIECES.map((p) => pieceKey(p.model, p.name)));
    expect(keys.size).toBe(COMPOSITE_PIECES.length);
  });

  it('explosiÃ³n: todos los pares explodedâ†’base existen en el plan', () => {
    const keys = new Set(COMPOSITE_PIECES.map((p) => pieceKey(p.model, p.name)));
    const pairs = Object.entries(EXPLODE_PAIRS);
    expect(pairs.length).toBeGreaterThanOrEqual(28);
    for (const [exp, base] of pairs) {
      expect(keys.has(pieceKey('colored-skull-base', base)), base).toBe(true);
    }
  });

  it('capas por defecto y colores de capa definidos', () => {
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
