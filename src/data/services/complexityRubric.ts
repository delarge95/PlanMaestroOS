import type { LevelId } from './types';

const LEVEL_ORDER: readonly LevelId[] = ['XS', 'N1', 'N2', 'N3', 'N4'];

export interface RubricOption {
  valorEs: string;
  deltaNiveles: 0 | 1;
  notaEs?: string;
}

export interface RubricDimension {
  id: string;
  dimensionEs: string;
  aplicaA: string[];
  opciones: RubricOption[];
}

export const RUBRICA_CUALITATIVA: RubricDimension[] = [
  {
    id: 'geometria-pieza',
    dimensionEs: 'Complejidad geométrica de las piezas',
    aplicaA: ['asset-rt', 'datos', 'render'],
    opciones: [
      { valorEs: 'Prismática / superficies duras tolerantes (cajas, placas, tubo recto)', deltaNiveles: 0 },
      { valorEs: 'Freeform moderada (carenas curvas, fillets múltiples, hélices)', deltaNiveles: 1, notaEs: 'Aplica si >30 % de las piezas relevantes la presentan' },
      { valorEs: 'Orgánica/continua (tela, líquido, esculpido, cables complejos)', deltaNiveles: 1, notaEs: 'Obligatoria: sube el nivel aunque sea una sola pieza' },
    ],
  },
  {
    id: 'acabado-visual',
    dimensionEs: 'Acabado visual requerido',
    aplicaA: ['render', 'asset-rt', 'vfx'],
    opciones: [
      { valorEs: 'Viewport / vista a distancia / thumbnail', deltaNiveles: -1, notaEs: 'Habilita nivel XS o baja uno' },
      { valorEs: 'Marketing estándar (PBR limpio, HDRI)', deltaNiveles: 0 },
      { valorEs: 'Close-up hero (macro, SSS, cristal, tela en primer plano)', deltaNiveles: 1 },
    ],
  },
  {
    id: 'densidad-funcional',
    dimensionEs: 'Densidad funcional por pieza',
    aplicaA: ['datos', 'asset-rt'],
    opciones: [
      { valorEs: 'Piezas pasivas (carcasa, tapa, panel)', deltaNiveles: 0 },
      { valorEs: 'Piezas con mecánica real (roscas verdaderas, engranajes dentados, articulaciones)', deltaNiveles: 1, notaEs: 'Rosca real ≈ +2–4 h por pieza aunque el nivel no cambie' },
    ],
  },
  {
    id: 'dependencia-tecnica',
    dimensionEs: 'Exigencia técnica del target',
    aplicaA: ['web-3d', 'asset-rt'],
    opciones: [
      { valorEs: 'Desktop web estándar', deltaNiveles: 0 },
      { valorEs: 'Móvil exigente / presupuesto de peso agresivo / 60 fps garantizados', deltaNiveles: 1, notaEs: 'Sube solo las subtareas de perf/QA' },
    ],
  },
];

export function aplicarRubrica(nivelBase: LevelId, deltas: number[]): LevelId {
  const total = deltas.reduce((a, b) => a + b, 0);
  if (total === 0) return nivelBase;
  const idx = LEVEL_ORDER.indexOf(nivelBase);
  const next = Math.min(LEVEL_ORDER.length - 1, Math.max(0, idx + total));
  return LEVEL_ORDER[next];
}
