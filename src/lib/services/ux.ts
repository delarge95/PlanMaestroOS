import type { LevelId } from '../../data/services';

export type ControlKind = 'slider-piezas' | 'slider-detalle' | 'slider-segundos' | 'stepper-cantidad';

export interface ControlSpec {
  kind: ControlKind;
  preguntaEs: string;
  min: number;
  max: number;
  step: number;
  unidadEs: (v: number) => string;
  umbrales?: Array<{ hasta: number; nivel: LevelId; etiquetaEs: string }>;
  visual:
    | { kind: 'svg-layers'; assetId: string }
    | { kind: 'poly-detail' }
    | { kind: 'image-sequence'; secuencia: string };
}

export interface RubricQuestion {
  dimId: string;
  preguntaEs: string;
  opciones: Array<{ valorEs: string; delta: -1 | 0 | 1; ayudaEs?: string }>;
}

export interface ServiceUxSpec {
  serviceId: string;
  controles: ControlSpec[];
  preguntasRubrica: string[];
}

const PIEZAS = (max = 150): ControlSpec => ({
  kind: 'slider-piezas',
  preguntaEs: '¿Cuántas piezas tiene el ensamblaje?',
  min: 1,
  max,
  step: 1,
  unidadEs: (v) => `${v} ${v === 1 ? 'pieza' : 'piezas'}`,
  umbrales: [
    { hasta: 15, nivel: 'N1', etiquetaEs: 'sencillas' },
    { hasta: 60, nivel: 'N2', etiquetaEs: 'mixtas' },
    { hasta: 150, nivel: 'N3', etiquetaEs: 'complejas' },
    { hasta: 99999, nivel: 'N4', etiquetaEs: 'masivo' },
  ],
  visual: { kind: 'svg-layers', assetId: 'drone' },
});

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
  unidadEs: (v) => `${v} segundos`,
  umbrales: [
    { hasta: 3, nivel: 'XS', etiquetaEs: 'micro-loop 2–3 s' },
    { hasta: 12, nivel: 'N1', etiquetaEs: 'corto ~10 s' },
    { hasta: 35, nivel: 'N2', etiquetaEs: 'estándar ~30 s' },
    { hasta: 70, nivel: 'N3', etiquetaEs: 'extendido ~60 s' },
    { hasta: 9999, nivel: 'N4', etiquetaEs: 'cinemático 90+ s' },
  ],
  visual: { kind: 'image-sequence', secuencia: 'turntable' },
};

function spec(id: string, controles: ControlSpec[], rubrica: string[]): ServiceUxSpec {
  return { serviceId: id, controles, preguntasRubrica: rubrica };
}

const R_GEOM = ['geometria-pieza'];
const R_ACAB = ['acabado-visual'];
const R_TECH = ['dependencia-tecnica'];
const R_DENS = ['densidad-funcional'];
const R_FULL = ['geometria-pieza', 'acabado-visual'];
const R_COMP = ['geometria-pieza', 'dependencia-tecnica'];

export const UX_SPECS: Record<string, ServiceUxSpec> = {
  'a1-render-estatico':      spec('a1-render-estatico', [], [...R_ACAB]),
  'a2-render-animacion':     spec('a2-render-animacion', [SEGUNDOS], R_ACAB),
  'b1-asset-rt-estatico':    spec('b1-asset-rt-estatico', [DETALLE], R_FULL),
  'b2-asset-rt-estatico-interactuable': spec('b2-asset-rt-estatico-interactuable', [DETALLE], R_FULL),
  'b3-asset-rt-animado-no-interactuable': spec('b3-asset-rt-animado-no-interactuable', [DETALLE], R_GEOM),
  'b4-asset-rt-animado-interactuable': spec('b4-asset-rt-animado-interactuable', [DETALLE], R_COMP),
  'b5-shaders-estilizados':  spec('b5-shaders-estilizados', [], []),
  'b6-mecanicas-especificas':spec('b6-mecanicas-especificas', [PIEZAS(200)], R_DENS),
  'b7-optimizacion-rt-ready':spec('b7-optimizacion-rt-ready', [], []),
  'b8-rigging-animacion':    spec('b8-rigging-animacion', [], []),
  'f1-cad-webgl-ready':      spec('f1-cad-webgl-ready', [PIEZAS()], R_COMP),
  'f2-generacion-texturas':  spec('f2-generacion-texturas', [], []),
  'c1-visor-embebido':       spec('c1-visor-embebido', [], []),
  'c2-visor-custom':         spec('c2-visor-custom', [], R_TECH),
  'c3-webapp-3d':            spec('c3-webapp-3d', [], R_TECH),
  'c4-scrollytelling':       spec('c4-scrollytelling', [], R_TECH),
  'c6-minijuego':            spec('c6-minijuego', [], R_TECH),
  'c7-unity-webgl':          spec('c7-unity-webgl', [], []),
  'd1-compositing-foto':     spec('d1-compositing-foto', [], R_ACAB),
  'e1-chat-rag-web':         spec('e1-chat-rag-web', [], []),
  'e3-ia-procesos-internos': spec('e3-ia-procesos-internos', [], []),
  'f3-digital-twin':         spec('f3-digital-twin', [], R_TECH),
  'g1-discovery-scoping':    spec('g1-discovery-scoping', [], []),
};

// aliases para IDs alternativos usados en intent matcher
UX_SPECS['e2-ia-indirecta-web'] = spec('e2-ia-indirecta-web', [], []);
UX_SPECS['b6-despiece'] = UX_SPECS['b6-mecanicas-especificas'];

export function getUxSpec(serviceId: string): ServiceUxSpec | undefined {
  return UX_SPECS[serviceId];
}

export const DISCLAIMER_ESTIMACION = 'Rango orientativo, no cotización. La cifra firme se cierra en un SOW.';
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
