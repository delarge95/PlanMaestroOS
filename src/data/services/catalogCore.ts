import type { HoursByLevel, ServiceDefinition, Subtask } from './types';

const h = (min: number, max: number) => ({ min, max });

type Tup = [number, number];

const q = (v: number) => Math.max(0.25, Math.round(v * 4) / 4);

const lvl = (xs: Tup | null, n1: Tup, n2: Tup, n3: Tup, n4: Tup): HoursByLevel => ({
  XS: h(xs ? xs[0] : q(n1[0] * 0.5), xs ? xs[1] : q(n1[1] * 0.55)),
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
const DOC_03 = 'docs/servicios/03_catalogo_web_experiencias.md';
const DOC_04 = 'docs/servicios/04_catalogo_footage_ia_soporte.md';

const a1Subtasks: Subtask[] = [
  st('a1-intake', 'Intake/brief + referencias', lvl(null, [0.5, 1], [1, 2], [2, 3], [3, 5])),
  st('a1-setup', 'Setup escena (cámara, luz, HDRI, composición)', lvl(null, [1, 2], [2, 4], [4, 8], [8, 16])),
  st('a1-materiales', 'Materiales/texturizado', lvl(null, [1, 3], [3, 6], [6, 12], [12, 24])),
  st('a1-render', 'Render + iteraciones (2 rondas incl.)', lvl(null, [1, 2], [2, 4], [4, 8], [8, 12])),
  st('a1-post', 'Post-producción (color, retoque, formatos)', lvl(null, [0.5, 1], [1, 2], [2, 4], [4, 8])),
];

const a2Subtasks: Subtask[] = [
  st('a2-storyboard', 'Brief/storyboard/animatic', lvl([0.5, 1], [1, 2], [3, 5], [5, 10], [10, 20])),
  st('a2-layout', 'Layout escena + cámaras', lvl([0.25, 0.5], [1, 2], [2, 5], [5, 10], [10, 20])),
  st('a2-animacion', 'Animación (keyframe/procedural)', lvl([0.5, 1], [2, 4], [4, 10], [10, 25], [25, 60])),
  st('a2-materiales', 'Materiales/iluminación', lvl([0.25, 0.75], [1, 3], [3, 6], [6, 12], [12, 24])),
  st('a2-fx', 'FX/simulaciones', lvl([0, 0], [0, 0], [0, 6], [6, 20], [20, 50]), { optional: true }),
  st('a2-render', 'Render + QC técnico', lvl([0.5, 1], [1, 2], [2, 5], [5, 12], [12, 30])),
  st('a2-post', 'Edición/post/entrega', lvl([0.25, 0.75], [1, 2], [2, 4], [4, 8], [8, 16])),
];

export const B_CORE_SUBTASKS: Subtask[] = [
  st('b-intake', 'Intake/QC de referencias y specs técnicas', lvl(null, [0.5, 1], [1, 2], [2, 3], [3, 5])),
  st('b-modelado', 'Blockout/modelado hi→low (hard-surface u orgánico)', lvl(null, [2, 4], [4, 10], [10, 25], [25, 80])),
  st('b-uv', 'UV unwrap', lvl(null, [1, 2], [2, 4], [4, 8], [8, 16])),
  st('b-baking', 'Baking de mapas (AO/normal/etc.)', lvl(null, [0.5, 1], [1, 3], [3, 6], [6, 12])),
  st('b-texturizado', 'Texturizado PBR', lvl(null, [1, 3], [3, 6], [6, 14], [14, 30])),
  st('b-optimizacion', 'Optimización (LODs, draw calls, Draco/meshopt)', lvl(null, [0.5, 1], [1, 3], [3, 6], [6, 12])),
  st('b-qa', 'QA en motor target + export final', lvl(null, [0.5, 1], [1, 2], [2, 4], [4, 8])),
];

export const DELTA_INTERACTIVIDAD: Subtask = st(
  'delta-interaccion',
  'Interactividad básica (hotspots/highlight/selección)',
  lvl(null, [2, 4], [4, 8], [8, 16], [16, 32]),
);

export const DELTA_ANIM_LOOP: Subtask = st(
  'delta-anim-loop',
  'Animación en loop (rig simple o blendshapes + clip idle)',
  lvl(null, [4, 8], [8, 16], [16, 35], [35, 80]),
);

export const DELTA_ANIM_INTERACTIVA: Subtask = st(
  'delta-anim-interactiva',
  'Animación interactiva (estados, input, transiciones)',
  lvl(null, [8, 15], [15, 30], [30, 70], [70, 150]),
);

export const CATALOG_CORE: ServiceDefinition[] = [
  {
    id: 'a1-render-estatico',
    family: 'render',
    nameEs: 'Render 3D estático',
    unitEs: 'imagen',
    driversEs: ['complejidad del asset', 'nº de vistas/variantes', 'resolución final', 'tipo de materiales (PBR estándar vs SSS/telas/líquidos)', 'retoque post'],
    confidence: 'explicit',
    subtasks: a1Subtasks,
    sourceDoc: DOC_02,
  },
  {
    id: 'a2-render-animacion',
    family: 'render',
    nameEs: 'Render animación 3D',
    unitEs: 'clip ~10 s 1080p 30 fps (XS = loop 2–3 s)',
    driversEs: ['duración total', 'sims/FX presentes', 'personajes/rigging', 'cámaras complejas', 'resolución/fps', 'audio'],
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
      st('b5-brief', 'Brief/referencias + prueba de concepto visual', lvl(null, [1, 2], [2, 3], [3, 5], [5, 8])),
      st('b5-implementacion', 'Implementación shader (R&D)', lvl(null, [2, 5], [5, 12], [12, 30], [30, 70])),
      st('b5-tuning', 'Tuning de parámetros + variantes', lvl(null, [1, 2], [2, 5], [5, 12], [12, 25])),
      st('b5-perf', 'Optimización/perf móvil', lvl(null, [0.5, 2], [2, 4], [4, 10], [10, 20])),
      st('b5-docs', 'Documentación + escena ejemplo', lvl(null, [0.5, 1], [1, 3], [3, 6], [6, 12])),
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
      st('b6-preparacion', 'Análisis/preparación de despiece del asset', lvl(null, [1, 3], [3, 6], [6, 15], [15, 40])),
      st('b6-explosion', 'Setup animación/explosión (curvas, etapas)', lvl(null, [2, 4], [4, 10], [10, 25], [25, 60])),
      st('b6-ui', 'UI/controles (slider, steps, etiquetas)', lvl(null, [2, 4], [4, 8], [8, 18], [18, 40])),
      st('b6-integracion', 'Integración motor + perf', lvl(null, [1, 2], [2, 5], [5, 12], [12, 25])),
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
      st('b7-auditoria', 'Auditoría técnica (poly/tris, overdraw, texturas, draw calls)', lvl(null, [0.5, 1], [1, 2], [2, 4], [4, 8])),
      st('b7-retopo', 'Retopo/rebuild parcial', lvl(null, [0, 2], [2, 6], [6, 15], [15, 40])),
      st('b7-rebake', 'Re-bake/texturas', lvl(null, [0.5, 2], [2, 5], [5, 12], [12, 25])),
      st('b7-lods', 'LODs/export', lvl(null, [0.5, 1], [1, 2], [2, 5], [5, 10])),
      st('b7-qa', 'QA motor', lvl(null, [0.5, 1], [1, 2], [2, 3], [3, 6])),
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
      st('b8-rig', 'Rig base (según complejidad)', lvl(null, [2, 5], [5, 12], [12, 30], [30, 70])),
      st('b8-pesos', 'Pesos/deformación', lvl(null, [1, 3], [3, 8], [8, 20], [20, 45])),
      st('b8-clips', 'Clips de animación (lote de 2)', lvl(null, [2, 6], [6, 12], [12, 24], [24, 50])),
    ],
    sourceDoc: DOC_02,
  },
  {
    id: 'f1-cad-webgl-ready',
    family: 'datos',
    nameEs: 'CAD → WebGL ready (servicio insignia)',
    unitEs: 'ensamblaje CAD',
    driversEs: ['nº de piezas del ensamblaje (driver principal)', 'complejidad geométrica (prismático vs freeform)', 'calidad del CAD de origen', 'necesidad de despiece posterior (encadena con B6)', 'target web desktop vs móvil exigente'],
    confidence: 'explicit',
    cotizador: {
      driverPrincipal: {
        nombre: 'número de piezas del ensamblaje',
        umbrales: ['≤15 piezas simples/prismáticas', '15–60 piezas mixtas', '60–150 piezas o freeform moderado', '150+ piezas / freeform masivo / cableado'],
      },
      addOns: [
        { id: 'B6', refServicio: 'b6-mecanicas-especificas', delta: 'ver ficha B6' },
        { id: 'USDZ-AR', delta: '+10%' },
        { id: 'REPORTE-PERF', delta: '+5%' },
        { id: 'LOTE-MULTI', delta: '−15–25% por modelo adicional' },
      ],
    },
    subtasks: [
      st('f1-ingesta', 'Ingesta CAD/QC (limpieza import, unidades, escala)', lvl([0.5, 1], [0.5, 1], [1, 3], [3, 6], [6, 15])),
      st('f1-retopo', 'Decimado/retopo por pieza', lvl([0.75, 1.5], [1, 3], [3, 10], [10, 30], [30, 100])),
      st('f1-uvs-baking', 'UVs + baking batch (AO/normal/curvature)', lvl([0.5, 1.25], [1, 2], [2, 6], [6, 15], [15, 40])),
      st('f1-texturas', 'Texturas/materiales PBR técnicos', lvl([0.75, 1.5], [1, 3], [3, 8], [8, 20], [20, 45])),
      st('f1-metadata', 'Jerarquía/nombres/metadata por pieza (IDs)', lvl([0.25, 0.75], [0.5, 1], [1, 3], [3, 8], [8, 20])),
      st('f1-lods', 'LODs + compresión (Draco/KTX2)', lvl([0.25, 0.75], [0.5, 1], [1, 3], [3, 8], [8, 18])),
      st('f1-qa', 'QA visor web + reporte de performance', lvl([0.25, 0.75], [0.5, 1], [1, 2], [2, 5], [5, 12])),
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
      st('f2-set', 'Diseño/generación del set + calibración PBR (seamless + preview en contexto)', lvl([0.5, 1], [1, 2], [2, 4], [4, 8], [8, 15])),
    ],
    sourceDoc: DOC_02,
  },
  {
    id: 'c1-visor-embebido',
    family: 'web-3d',
    nameEs: 'Visor 3D embebido ligero (Spline / model-viewer / Sketchfab)',
    unitEs: 'escena embebida',
    driversEs: ['visor elegido (licencia/plan)', 'nº de escenas', 'hotspots soportados por el visor', 'personalización de UI posible'],
    confidence: 'explicit',
    subtasks: [
      st('c1-intake', 'Intake + QC del asset y del plan del visor', lvl([0.5, 1], [1, 2], [2, 3], [3, 5], [4, 6])),
      st('c1-setup-embed', 'Optimización/upload + embed responsive + tuning + QA browsers', lvl([2, 4], [2.5, 5], [5, 10], [10, 19], [20, 38])),
    ],
    sourceDoc: DOC_03,
  },
  {
    id: 'c2-visor-custom',
    family: 'web-3d',
    nameEs: 'Visor custom three.js / Babylon.js',
    unitEs: 'visor web',
    driversEs: ['nº hotspots/features', 'datos dinámicos (JSON/CMS) vs hardcode', 'AR opcional', 'i18n', 'UI provista o incluida'],
    confidence: 'explicit',
    subtasks: [
      st('c2-spec-carga', 'Spec técnica + pipeline de carga (GLB + Draco/KTX2)', lvl([1.5, 3.5], [2.5, 6], [7, 13], [14, 28], [28, 56])),
      st('c2-interaccion-ui', 'Interacción núcleo + UI overlay (info, controles, responsive)', lvl([2.5, 6], [3.5, 9], [9, 18], [18, 38], [38, 76])),
      st('c2-perf-deploy', 'Perf móvil + QA browsers + entrega/integración', lvl([1, 2.5], [1.5, 5], [4, 9], [10, 22], [22, 49])),
    ],
    sourceDoc: DOC_03,
  },
  {
    id: 'c3-webapp-3d',
    family: 'web-3d',
    nameEs: 'Web App 3D (configurador / herramienta técnica)',
    unitEs: 'aplicación web',
    driversEs: ['variantes/reglas de configuración', 'fuente de datos (CMS/API)', 'autenticación', 'nº SKUs/assets', 'integraciones terceros'],
    confidence: 'inferred',
    subtasks: [
      st('c3-discovery', 'Discovery/spec funcional + flujo/wireframe', lvl([3, 6], [5, 11], [11, 26], [27, 57], [57, 112])),
      st('c3-core', 'Arquitectura + escena 3D configurable + reglas', lvl([6, 12], [11, 23], [23, 58], [58, 124], [124, 244])),
      st('c3-qa-deploy', 'QA/E2E + perf + deploy/docs/handoff', lvl([3, 6], [5, 11], [11, 30], [29, 64], [64, 124])),
    ],
    sourceDoc: DOC_03,
  },
  {
    id: 'd1-compositing-foto',
    family: 'vfx',
    nameEs: 'Compositing 3D sobre fotografía',
    unitEs: 'imagen (toma única)',
    driversEs: ['complejidad del fondo', 'calidad de la foto', 'nº de capas CG', 'materiales reflectivos/translúcidos'],
    confidence: 'explicit',
    subtasks: [
      st('d1-analisis-solve', 'Análisis de escena + resolución de cámara', lvl([1.5, 3.5], [2.5, 6], [6, 13], [13, 26], [26, 47])),
      st('d1-integracion-comp', 'Layout + integración modelo + lighting match + comp final', lvl([2.5, 5.5], [4, 9], [9, 20], [20, 39], [39, 70])),
    ],
    sourceDoc: DOC_04,
  },
  {
    id: 'g1-discovery-scoping',
    family: 'soporte',
    nameEs: 'Discovery & scoping de proyecto',
    unitEs: 'informe + SOW borrador (50 % acreditable al contratar en 60 días)',
    driversEs: ['nº de stakeholders', 'estado del material de entrada', 'incertidumbre técnica'],
    confidence: 'qualitative',
    subtasks: [
      st('g1-trabajo', 'Intake/entrevistas + análisis técnico + SOW con estimación', lvl([2, 4.5], [2.5, 6], [6, 12], [12, 24], [24, 40])),
      st('g1-presentacion', 'Presentación y revisión con el cliente', lvl([0.5, 1.5], [1, 2], [2, 4], [4, 8], [8, 14])),
    ],
    sourceDoc: DOC_04,
  },
  {
    id: 'e1-chat-rag-web',
    family: 'ia',
    nameEs: 'Asistente IA en sitio web (chat con RAG)',
    unitEs: 'asistente instalado',
    driversEs: ['volumen/fuentes de contenido', 'idiomas', 'acciones permitidas'],
    confidence: 'explicit',
    subtasks: [
      st('e1-discovery', 'Discovery/casos de uso + fuentes', lvl([2, 3], [3, 5], [5, 8], [8, 14], [8, 14])),
      st('e1-rag', 'Pipeline ingesta/embeddings/RAG', lvl([4, 8], [8, 16], [16, 30], [30, 60], [30, 60])),
      st('e1-prompts', 'Prompt engineering + guardrails/disclaimers', lvl([2, 4], [4, 8], [8, 14], [14, 26], [14, 26])),
      st('e1-widget', 'Widget UI + integración web', lvl([3, 6], [6, 12], [12, 24], [24, 44], [24, 44])),
      st('e1-eval', 'Evaluación con casos de prueba + ajuste', lvl([2, 4], [4, 7], [7, 12], [12, 22], [12, 22])),
    ],
    sourceDoc: DOC_04,
  },
  {
    id: 'e3-ia-procesos-internos',
    family: 'ia',
    nameEs: 'IA en procesos internos (empresa/agencia)',
    unitEs: 'proceso automatizado',
    driversEs: ['nº de procesos candidatos', 'madurez digital del equipo', 'integraciones existentes'],
    confidence: 'qualitative',
    subtasks: [
      st('e3-auditoria', 'Auditoría de procesos + oportunidades', lvl([3, 5], [5, 10], [10, 18], [18, 30], [18, 30])),
      st('e3-build', 'Build (automatizaciones/agentes/pipelines)', lvl([6, 14], [14, 40], [40, 90], [90, 180], [90, 180])),
      st('e3-capacitacion', 'Capacitación + documentación', lvl([2, 4], [4, 9], [9, 16], [16, 30], [16, 30])),
    ],
    sourceDoc: DOC_04,
  },
  {
    id: 'c4-scrollytelling',
    family: 'web-3d',
    nameEs: 'Scrollytelling 3D',
    unitEs: 'página narrativa',
    driversEs: ['nº secciones narrativas', 'complejidad escena', 'assets RT incluidos o no'],
    confidence: 'inferred',
    subtasks: [
      st('c4-discovery', 'Discovery/scoping (obligatorio)', lvl(null, [5, 8], [8, 14], [14, 24], [14, 24])),
      st('c4-arquitectura', 'Arquitectura + setup', lvl(null, [6, 10], [10, 18], [18, 32], [18, 32])),
      st('c4-escena', 'Escena base + montaje assets', lvl(null, [12, 25], [25, 50], [50, 90], [50, 90])),
      st('c4-binding', 'Binding scroll/eventos', lvl(null, [8, 16], [16, 32], [32, 60], [32, 60])),
      st('c4-perf', 'Perf budget + QA dispositivos', lvl(null, [5, 10], [10, 18], [18, 30], [18, 30])),
    ],
    sourceDoc: DOC_03,
  },
  {
    id: 'c6-minijuego',
    family: 'web-3d',
    nameEs: 'Minijuego WebGL',
    unitEs: 'juego embebido',
    driversEs: ['mecánica core', 'plataforma objetivo', 'game feel requerido', 'backend/scores'],
    confidence: 'inferred',
    subtasks: [
      st('c6-gdd', 'GDD corto y decisiones de alcance', lvl(null, [3, 6], [6, 12], [12, 22], [12, 22])),
      st('c6-core', 'Mecánica core + game loop', lvl(null, [10, 20], [20, 40], [40, 75], [40, 75])),
      st('c6-feel', 'Game feel (input, feedback, audio)', lvl(null, [5, 11], [11, 21], [21, 38], [21, 38])),
      st('c6-ui', 'Estados juego/UI/HUD', lvl(null, [5, 11], [11, 19], [19, 33], [19, 33])),
      st('c6-opt', 'Optimización mobile + QA + deploy', lvl(null, [6, 13], [13, 24], [24, 45], [24, 45])),
    ],
    sourceDoc: DOC_03,
  },
  {
    id: 'c7-unity-webgl',
    family: 'web-3d',
    nameEs: 'Build Unity WebGL optimizado',
    unitEs: 'build productivo',
    driversEs: ['tamaño/complejidad del proyecto Unity', 'volumen de datos JS↔Unity', 'restricciones del hosting destino'],
    confidence: 'inferred',
    subtasks: [
      st('c7-auditoria', 'Auditoría del proyecto + settings build', lvl(null, [4, 8], [8, 16], [16, 28], [16, 28])),
      st('c7-compresion', 'Pipeline compresión + loading screen', lvl(null, [4, 8], [8, 14], [14, 24], [14, 24])),
      st('c7-bridge', 'Bridge JS↔Unity bidireccional', lvl(null, [6, 14], [14, 30], [30, 60], [30, 60])),
      st('c7-embed', 'Embed responsive + fallbacks + QA dispositivos', lvl(null, [4, 9], [9, 18], [18, 30], [18, 30])),
    ],
    sourceDoc: DOC_03,
  },
  {
    id: 'f3-digital-twin',
    family: 'datos',
    nameEs: 'Visualización técnica con datos vivos (digital twin ligero)',
    unitEs: 'gemelo visual conectado',
    driversEs: ['frecuencia de datos', 'formato fuente (API/WebSocket/MQTT)', 'alertas visuales requeridas'],
    confidence: 'qualitative',
    subtasks: [
      st('f3-arq', 'Arquitectura de datos (fuentes, frecuencia)', lvl(null, [5, 9], [9, 16], [16, 28], [16, 28])),
      st('f3-conexion', 'Conexión datos vivos (API/WS/MQTT)', lvl(null, [7, 15], [15, 27], [27, 48], [27, 48])),
      st('f3-dashboard', 'Dashboard/alertas visuales sobre escena', lvl(null, [5, 11], [11, 20], [20, 36], [20, 36])),
      st('f3-qa', 'QA extremo a extremo', lvl(null, [3, 5], [5, 9], [9, 16], [9, 16])),
    ],
    sourceDoc: DOC_04,
  },
];
