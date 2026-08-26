import type { LevelId } from '../../data/services';

export type ControlKind = 'slider-piezas' | 'slider-detalle' | 'slider-segundos' | 'stepper-cantidad';

export interface ControlSpec {
  kind: ControlKind;
  preguntaEs: string;
  min: number;
  max: number;
  step: number;
  unidadEs: (v: number) => string;
  /** Umbrales donde cambia el nivel sugerido (para ticks y snap) */
  umbrales?: Array<{ hasta: number; nivel: LevelId; etiquetaEs: string }>;
  visual:
    | { kind: 'svg-layers'; assetId: 'drone' }
    | { kind: 'poly-detail' }
    | { kind: 'image-sequence'; secuencia: 'turntable' | 'explode' };
}

export interface RubricQuestion {
  dimId: string;
  preguntaEs: string;
  opciones: Array<{ valorEs: string; delta: -1 | 0 | 1; ayudaEs?: string }>;
}

export interface ServiceUxSpec {
  serviceId: string;
  controles: ControlSpec[];
  preguntasRubrica: string[]; // ids de RUBRICA_CUALITATIVA aplicables, en orden de aparición
}

const PIEZAS: ControlSpec = {
  kind: 'slider-piezas',
  preguntaEs: '¿Cuántos modelos necesitas convertir?',
  min: 1,
  max: 150,
  step: 1,
  unidadEs: (v) => `≈ ${v} ${v === 1 ? 'modelo' : 'modelos'}`,
  umbrales: [
    { hasta: 15, nivel: 'N1', etiquetaEs: 'sencillos' },
    { hasta: 60, nivel: 'N2', etiquetaEs: 'mixtos' },
    { hasta: 150, nivel: 'N3', etiquetaEs: 'complejos' },
    { hasta: 9999, nivel: 'N4', etiquetaEs: 'industrial' },
  ],
  visual: { kind: 'svg-layers', assetId: 'drone' },
};

const DETALLE: ControlSpec = {
  kind: 'slider-detalle',
  preguntaEs: '¿Cuánto detalle debe verse al acercarte?',
  min: 0,
  max: 2,
  step: 1,
  unidadEs: (v) => ['Low poly', 'Detalle medio', 'High poly'][v] ?? '',
  visual: { kind: 'poly-detail' },
};

const SEGUNDOS: ControlSpec = {
  kind: 'slider-segundos',
  preguntaEs: '¿De cuántos segundos necesita la animación?',
  min: 2,
  max: 90,
  step: 1,
  unidadEs: (v) => `${v} s`,
  umbrales: [
    { hasta: 3, nivel: 'XS', etiquetaEs: 'micro-loop' },
    { hasta: 12, nivel: 'N1', etiquetaEs: 'corto' },
    { hasta: 35, nivel: 'N2', etiquetaEs: 'estándar' },
    { hasta: 70, nivel: 'N3', etiquetaEs: 'extendido' },
    { hasta: 999, nivel: 'N4', etiquetaEs: 'cinemático' },
  ],
  visual: { kind: 'image-sequence', secuencia: 'turntable' },
};

const CANTIDAD_MICRO = (max: number): ControlSpec => ({
  kind: 'stepper-cantidad',
  preguntaEs: '¿Cuántos necesitas?',
  min: 1,
  max,
  step: 1,
  unidadEs: (v) => `${v} unidades`,
  visual: { kind: 'image-sequence', secuencia: 'explode' },
});

export const UX_SPECS: Record<string, ServiceUxSpec> = {
  'f1-cad-webgl-ready': {
    serviceId: 'f1-cad-webgl-ready',
    controles: [PIEZAS],
    preguntasRubrica: ['geometria-pieza', 'densidad-funcional', 'dependencia-tecnica'],
  },
  'a2-render-animacion': {
    serviceId: 'a2-render-animacion',
    controles: [SEGUNDOS],
    preguntasRubrica: ['acabado-visual'],
  },
  'b1-asset-rt-estatico': {
    serviceId: 'b1-asset-rt-estatico',
    controles: [DETALLE],
    preguntasRubrica: ['geometria-pieza', 'acabado-visual'],
  },
  'b2-asset-rt-estatico-interactuable': {
    serviceId: 'b2-asset-rt-estatico-interactuable',
    controles: [DETALLE],
    preguntasRubrica: ['geometria-pieza', 'acabado-visual'],
  },
  'b3-asset-rt-animado-no-interactuable': {
    serviceId: 'b3-asset-rt-animado-no-interactuable',
    controles: [DETALLE],
    preguntasRubrica: ['geometria-pieza'],
  },
  'b4-asset-rt-animado-interactuable': {
    serviceId: 'b4-asset-rt-animado-interactuable',
    controles: [DETALLE],
    preguntasRubrica: ['geometria-pieza', 'dependencia-tecnica'],
  },
  'c2-visor-custom': {
    serviceId: 'c2-visor-custom',
    controles: [],
    preguntasRubrica: ['dependencia-tecnica'],
  },
  'c3-webapp-3d': {
    serviceId: 'c3-webapp-3d',
    controles: [],
    preguntasRubrica: ['dependencia-tecnica'],
  },
};

export function getUxSpec(serviceId: string): ServiceUxSpec | undefined {
  return UX_SPECS[serviceId];
}

export const DISCLAIMER_ESTIMACION =
  'Rango orientativo, no cotización. La cifra firme se cierra en un SOW.';

export const DISCLAIMER_BYOK = 'Consumo de APIs por cuenta del cliente (BYOK).';

export const PREGUNTAS_RUBRICA: Record<string, RubricQuestion> = {
  'geometria-pieza': {
    dimId: 'geometria-pieza',
    preguntaEs: '¿Cómo son tus piezas, en general?',
    opciones: [
      { valorEs: 'Mayormente rectas y simples', delta: 0 },
      { valorEs: 'Varias con curvas o detalles', delta: 1, ayudaEs: 'Si dominan más del 30 % del conjunto' },
      { valorEs: 'Orgánicas (tela, cableado, esculpido)', delta: 1 },
    ],
  },
  'densidad-funcional': {
    dimId: 'densidad-funcional',
    preguntaEs: '¿Las piezas tienen mecánica real?',
    opciones: [
      { valorEs: 'No, son pasivas', delta: 0 },
      { valorEs: 'Sí: roscas, engranajes o articulaciones', delta: 1, ayudaEs: 'Cada rosca real añade 2–4 h aunque el nivel no cambie' },
    ],
  },
  'acabado-visual': {
    dimId: 'acabado-visual',
    preguntaEs: '¿Desde qué distancia se verá?',
    opciones: [
      { valorEs: 'Lejos / thumbnail / viewport', delta: -1 },
      { valorEs: 'Marketing estándar', delta: 0 },
      { valorEs: 'Muy de cerca (hero, macro, cristal)', delta: 1 },
    ],
  },
  'dependencia-tecnica': {
    dimId: 'dependencia-tecnica',
    preguntaEs: '¿Dónde va a correr?',
    opciones: [
      { valorEs: 'Desktop web estándar', delta: 0 },
      { valorEs: 'Móvil exigente / peso muy limitado', delta: 1 },
    ],
  },
};
