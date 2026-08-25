import type { HoursByLevel, ServiceDefinition, Subtask } from './types';

const h = (min: number, max: number) => ({ min, max });
const lvl = (n1: [number, number], n2: [number, number], n3: [number, number], n4: [number, number]): HoursByLevel => ({
  N1: h(n1[0], n1[1]),
  N2: h(n2[0], n2[1]),
  N3: h(n3[0], n3[1]),
  N4: h(n4[0], n4[1]),
});

const st = (id: string, nameEs: string, hours: HoursByLevel, extra: Partial<Subtask> = {}): Subtask => ({
  id,
  nameEs,
  hours,
  ...extra,
});

const DOC_02 = 'docs/servicios/02_catalogo_render_assets_rt.md';

const a1Subtasks: Subtask[] = [
  st('a1-intake', 'Intake/brief + referencias', lvl([0.5, 1], [1, 2], [2, 3], [3, 5])),
  st('a1-setup', 'Setup escena (cámara, luz, HDRI, composición)', lvl([1, 2], [2, 4], [4, 8], [8, 16])),
  st('a1-materiales', 'Materiales/texturizado', lvl([1, 3], [3, 6], [6, 12], [12, 24])),
  st('a1-render', 'Render + iteraciones (2 rondas incl.)', lvl([1, 2], [2, 4], [4, 8], [8, 12])),
  st('a1-post', 'Post-producción (color, retoque, formatos)', lvl([0.5, 1], [1, 2], [2, 4], [4, 8])),
];

const a2Subtasks: Subtask[] = [
  st('a2-storyboard', 'Brief/storyboard/animatic', lvl([1, 2], [3, 5], [5, 10], [10, 20])),
  st('a2-layout', 'Layout escena + cámaras', lvl([1, 2], [2, 5], [5, 10], [10, 20])),
  st('a2-animacion', 'Animación (keyframe/procedural)', lvl([2, 4], [4, 10], [10, 25], [25, 60])),
  st('a2-materiales', 'Materiales/iluminación', lvl([1, 3], [3, 6], [6, 12], [12, 24])),
  st('a2-fx', 'FX/simulaciones', lvl([0, 0], [0, 6], [6, 20], [20, 50]), { optional: true }),
  st('a2-render', 'Render + QC técnico', lvl([1, 2], [2, 5], [5, 12], [12, 30])),
  st('a2-post', 'Edición/post/entrega', lvl([1, 2], [2, 4], [4, 8], [8, 16])),
];

export const B_CORE_SUBTASKS: Subtask[] = [
  st('b-intake', 'Intake/QC de referencias y specs técnicas', lvl([0.5, 1], [1, 2], [2, 3], [3, 5])),
  st('b-modelado', 'Blockout/modelado hi→low (hard-surface u orgánico)', lvl([2, 4], [4, 10], [10, 25], [25, 80])),
  st('b-uv', 'UV unwrap', lvl([1, 2], [2, 4], [4, 8], [8, 16])),
  st('b-baking', 'Baking de mapas (AO/normal/etc.)', lvl([0.5, 1], [1, 3], [3, 6], [6, 12])),
  st('b-texturizado', 'Texturizado PBR', lvl([1, 3], [3, 6], [6, 14], [14, 30])),
  st('b-optimizacion', 'Optimización (LODs, draw calls, Draco/meshopt)', lvl([0.5, 1], [1, 3], [3, 6], [6, 12])),
  st('b-qa', 'QA en motor target + export final', lvl([0.5, 1], [1, 2], [2, 4], [4, 8])),
];

export const DELTA_INTERACTIVIDAD: Subtask = st(
  'delta-interaccion',
  'Interactividad básica (hotspots/highlight/selección)',
  lvl([2, 4], [4, 8], [8, 16], [16, 32]),
);

export const DELTA_ANIM_LOOP: Subtask = st(
  'delta-anim-loop',
  'Animación en loop (rig simple o blendshapes + clip idle)',
  lvl([4, 8], [8, 16], [16, 35], [35, 80]),
);

export const DELTA_ANIM_INTERACTIVA: Subtask = st(
  'delta-anim-interactiva',
  'Animación interactiva (estados, input, transiciones)',
  lvl([8, 15], [15, 30], [30, 70], [70, 150]),
);

export const CATALOG_CORE: ServiceDefinition[] = [
  {
    id: 'a1-render-estatico',
    family: 'render',
    nameEs: 'Render 3D estático',
    unitEs: 'imagen',
    driversEs: [
      'complejidad del asset',
      'nº de vistas/variantes',
      'resolución final',
      'tipo de materiales (PBR estándar vs SSS/telas/líquidos)',
      'retoque post',
    ],
    confidence: 'explicit',
    subtasks: a1Subtasks,
    sourceDoc: DOC_02,
  },
  {
    id: 'a2-render-animacion',
    family: 'render',
    nameEs: 'Render animación 3D',
    unitEs: 'clip ~10 s 1080p 30 fps',
    driversEs: [
      'duración total',
      'sims/FX presentes',
      'personajes/rigging',
      'cámaras complejas',
      'resolución/fps',
      'audio',
    ],
    confidence: 'explicit',
    subtasks: a2Subtasks,
    sourceDoc: DOC_02,
  },
  {
    id: 'b1-asset-rt-estatico',
    family: 'asset-rt',
    nameEs: 'Asset RT estático no interactuable',
    unitEs: 'asset',
    driversEs: ['presupuesto poligonal', 'nº piezas', 'fuente (CAD/sculpt/fotos)', 'texturas'],
    confidence: 'explicit',
    subtasks: [...B_CORE_SUBTASKS],
    sourceDoc: DOC_02,
  },
  {
    id: 'b2-asset-rt-estatico-interactuable',
    family: 'asset-rt',
    nameEs: 'Asset RT estático interactuable',
    unitEs: 'asset + hotspots',
    driversEs: ['nº hotspots/partes seleccionables', 'presupuesto poligonal', 'texturas'],
    confidence: 'explicit',
    subtasks: [...B_CORE_SUBTASKS, DELTA_INTERACTIVIDAD],
    sourceDoc: DOC_02,
  },
  {
    id: 'b3-asset-rt-animado-no-interactuable',
    family: 'asset-rt',
    nameEs: 'Asset RT animado no interactuable',
    unitEs: 'asset + clip loop',
    driversEs: ['tipo de loop', 'rig necesario', 'presupuesto poligonal'],
    confidence: 'explicit',
    subtasks: [...B_CORE_SUBTASKS, DELTA_ANIM_LOOP],
    sourceDoc: DOC_02,
  },
  {
    id: 'b4-asset-rt-animado-interactuable',
    family: 'asset-rt',
    nameEs: 'Asset RT animado interactuable',
    unitEs: 'asset + estados interactivos',
    driversEs: ['nº estados/transiciones', 'input requerido', 'presupuesto poligonal'],
    confidence: 'inferred',
    subtasks: [...B_CORE_SUBTASKS, DELTA_ANIM_INTERACTIVA],
    sourceDoc: DOC_02,
  },
  {
    id: 'b5-shaders-estilizados',
    family: 'asset-rt',
    nameEs: 'Shaders estilizados tiempo real',
    unitEs: 'shader/sistema de materiales',
    driversEs: ['nº de efectos', 'target desktop/móvil', 'integración pipeline existente', 'documentación'],
    confidence: 'inferred',
    subtasks: [
      st('b5-brief', 'Brief/referencias + prueba de concepto visual', lvl([1, 2], [2, 3], [3, 5], [5, 8])),
      st('b5-implementacion', 'Implementación shader (R&D)', lvl([2, 5], [5, 12], [12, 30], [30, 70])),
      st('b5-tuning', 'Tuning de parámetros + variantes', lvl([1, 2], [2, 5], [5, 12], [12, 25])),
      st('b5-perf', 'Optimización/perf móvil', lvl([0.5, 2], [2, 4], [4, 10], [10, 20])),
      st('b5-docs', 'Documentación + escena ejemplo', lvl([0.5, 1], [1, 3], [3, 6], [6, 12])),
    ],
    sourceDoc: DOC_02,
  },
  {
    id: 'b6-mecanicas-especificas',
    family: 'asset-rt',
    nameEs: 'Mecánicas específicas sobre asset (vista explosionada/cutaway/medición)',
    unitEs: 'mecánica sobre asset preparado',
    driversEs: ['nº partes móviles', 'profundidad del despiece', 'UI asociada'],
    confidence: 'inferred',
    subtasks: [
      st('b6-preparacion', 'Análisis/preparación de despiece del asset', lvl([1, 3], [3, 6], [6, 15], [15, 40])),
      st('b6-explosion', 'Setup animación/explosión (curvas, etapas)', lvl([2, 4], [4, 10], [10, 25], [25, 60])),
      st('b6-ui', 'UI/controles (slider, steps, etiquetas)', lvl([2, 4], [4, 8], [8, 18], [18, 40])),
      st('b6-integracion', 'Integración motor + perf', lvl([1, 2], [2, 5], [5, 12], [12, 25])),
    ],
    sourceDoc: DOC_02,
  },
  {
    id: 'b7-optimizacion-rt-ready',
    family: 'asset-rt',
    nameEs: 'Optimización de assets existentes → RT-ready',
    unitEs: 'asset medio',
    driversEs: ['estado de partida (topología/UVs/materiales)', 'poly count objetivo', 'plataformas objetivo'],
    confidence: 'qualitative',
    subtasks: [
      st('b7-auditoria', 'Auditoría técnica (poly/tris, overdraw, texturas, draw calls)', lvl([0.5, 1], [1, 2], [2, 4], [4, 8])),
      st('b7-retopo', 'Retopo/rebuild parcial', lvl([0, 2], [2, 6], [6, 15], [15, 40])),
      st('b7-rebake', 'Re-bake/texturas', lvl([0.5, 2], [2, 5], [5, 12], [12, 25])),
      st('b7-lods', 'LODs/export', lvl([0.5, 1], [1, 2], [2, 5], [5, 10])),
      st('b7-qa', 'QA motor', lvl([0.5, 1], [1, 2], [2, 3], [3, 6])),
    ],
    sourceDoc: DOC_02,
  },
  {
    id: 'b8-rigging-animacion',
    family: 'asset-rt',
    nameEs: 'Rigging & animación (personajes/objetos)',
    unitEs: '1 rig + 2 clips ~5 s',
    driversEs: ['tipo de rig (props vs biped facial)', 'nº de clips', 'calidad de deformación'],
    confidence: 'inferred',
    subtasks: [
      st('b8-rig', 'Rig base (según complejidad)', lvl([2, 5], [5, 12], [12, 30], [30, 70])),
      st('b8-pesos', 'Pesos/deformación', lvl([1, 3], [3, 8], [8, 20], [20, 45])),
      st('b8-clips', 'Clips de animación (lote de 2)', lvl([2, 6], [6, 12], [12, 24], [24, 50])),
    ],
    sourceDoc: DOC_02,
  },
  {
    id: 'f1-cad-webgl-ready',
    family: 'datos',
    nameEs: 'CAD → WebGL ready (servicio insignia)',
    unitEs: 'ensamblaje CAD',
    driversEs: [
      'nº de piezas del ensamblaje (driver principal)',
      'complejidad geométrica (prismático vs freeform)',
      'calidad del CAD de origen',
      'necesidad de despiece posterior (encadena con B6)',
      'target web desktop vs móvil exigente',
    ],
    confidence: 'explicit',
    subtasks: [
      st('f1-ingesta', 'Ingesta CAD/QC (limpieza import, unidades, escala)', lvl([0.5, 1], [1, 3], [3, 6], [6, 15])),
      st('f1-retopo', 'Decimado/retopo por pieza', lvl([1, 3], [3, 10], [10, 30], [30, 100])),
      st('f1-uvs-baking', 'UVs + baking batch (AO/normal/curvature)', lvl([1, 2], [2, 6], [6, 15], [15, 40])),
      st('f1-texturas', 'Texturas/materiales PBR técnicos', lvl([1, 3], [3, 8], [8, 20], [20, 45])),
      st('f1-metadata', 'Jerarquía/nombres/metadata por pieza (IDs)', lvl([0.5, 1], [1, 3], [3, 8], [8, 20])),
      st('f1-lods', 'LODs + compresión (Draco/KTX2)', lvl([0.5, 1], [1, 3], [3, 8], [8, 18])),
      st('f1-qa', 'QA visor web + reporte de performance', lvl([0.5, 1], [1, 2], [2, 5], [5, 12])),
    ],
    sourceDoc: DOC_02,
  },
  {
    id: 'f2-generacion-texturas',
    family: 'datos',
    nameEs: 'Generación de texturas y mapas',
    unitEs: 'set PBR 4K',
    driversEs: ['unicidad del material', 'tileable vs unique bake', 'restricción NoAI'],
    confidence: 'explicit',
    subtasks: [
      st(
        'f2-set',
        'Diseño/generación del set + calibración PBR (seamless + preview en contexto)',
        lvl([1, 2], [2, 4], [4, 8], [8, 15]),
      ),
    ],
    sourceDoc: DOC_02,
  },
];
