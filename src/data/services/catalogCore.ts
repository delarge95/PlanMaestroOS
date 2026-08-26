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

export interface ServiceWithClarity extends ServiceDefinition {
  entregablesEs?: string[];
  noIncluyeEs?: string[];
  entregaDiasEs?: [number, number];
}

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

function svc(
  id: string,
  family: ServiceDefinition['family'],
  nameEs: string,
  unitEs: string,
  driversEs: string[],
  confidence: ServiceDefinition['confidence'],
  entregablesEs: string[],
  subtasks: Subtask[],
  sourceDoc: string,
  noIncluyeEs?: string[],
  entregaDiasEs?: [number, number],
): ServiceWithClarity {
  return {
    id, family, nameEs, unitEs, driversEs, confidence, subtasks, sourceDoc,
    entregablesEs, noIncluyeEs, entregaDiasEs,
  };
}

export const CATALOG_CORE: ServiceWithClarity[] = [
  svc('a1-render-estatico', 'render',
    'Render 3D estático',
    'imagen',
    ['complejidad del asset', 'nº de vistas', 'resolución final', 'tipo de materiales'],
    'explicit',
    ['Imagen final en alta resolución (PNG/TIFF/JPG)', 'Versiones en formatos solicitados', '2 rondas de revisión incluidas'],
    a1Subtasks, DOC_02,
    undefined, [1, 14]),

  svc('a2-render-animacion', 'render',
    'Render animación 3D',
    'clip (XS=loop 2–3 s · N1=~10 s · N2=~30 s)',
    ['duración total', 'sims/FX', 'rigging', 'resolución/fps'],
    'explicit',
    ['Video final en formato solicitado (MP4/MOV)', 'Versión sin audio si se requiere', '2 rondas de revisión incluidas'],
    a2Subtasks, DOC_02,
    ['Modelado desde cero (cotizar aparte)', 'Audio original'], [2, 56]),

  svc('b1-asset-rt-estatico', 'asset-rt',
    'Asset 3D realtime estático',
    'asset optimizado para motor',
    ['presupuesto poligonal', 'nº piezas', 'fuente (CAD/sculpt/fotos)'],
    'explicit',
    ['GLB/GLTF optimizado con Draco/KTX2', 'Texturas PBR (baseColor/normal/roughness/metallic)', 'LODs según acuerdo', 'Reporte de performance'],
    [...B_CORE_SUBTASKS], DOC_02,
    undefined, [1, 42]),

  svc('b2-asset-rt-estatico-interactuable', 'asset-rt',
    'Asset RT interactuable (hotspots/selección)',
    'asset + interactividad',
    ['nº hotspots', 'presupuesto poligonal'],
    'explicit',
    ['Todo lo de B1', 'Hotspots clicables con info por parte', 'Sistema de highlight/selección'],
    [...B_CORE_SUBTASKS, DELTA_INTERACTIVIDAD], DOC_02,
    undefined, [2, 49]),

  svc('b3-asset-rt-animado-no-interactuable', 'asset-rt',
    'Asset RT animado (loops)',
    'asset + clip loop',
    ['tipo de loop', 'rig necesario'],
    'explicit',
    ['Todo lo de B1', 'Clip(s) de animación loop integrado(s)'],
    [...B_CORE_SUBTASKS, DELTA_ANIM_LOOP], DOC_02,
    undefined, [2, 56]),

  svc('b4-asset-rt-animado-interactuable', 'asset-rt',
    'Asset RT animado interactuable',
    'asset + estados interactivos',
    ['estados/transiciones', 'input requerido'],
    'inferred',
    ['Todo lo de B1', 'Estados de animación controlables por el usuario', 'Transiciones entre estados'],
    [...B_CORE_SUBTASKS, DELTA_ANIM_INTERACTIVA], DOC_02,
    undefined, [4, 84]),

  svc('b5-shaders-estilizados', 'asset-rt',
    'Shaders estilizados tiempo real',
    'shader/sistema de materiales',
    ['nº efectos', 'target', 'integración pipeline'],
    'inferred',
    ['Shader implementado y documentado', 'Escena de ejemplo funcional', 'Parámetros expuestos para tuning'],
    [
      st('b5-brief', 'Brief/referencias + prueba de concepto visual', lvl(null, [1, 2], [2, 3], [3, 5], [5, 8])),
      st('b5-implementacion', 'Implementación shader (R&D)', lvl(null, [2, 5], [5, 12], [12, 30], [30, 70])),
      st('b5-tuning', 'Tuning de parámetros + variantes', lvl(null, [1, 2], [2, 5], [5, 12], [12, 25])),
      st('b5-perf', 'Optimización/perf móvil', lvl(null, [0.5, 2], [2, 4], [4, 10], [10, 20])),
      st('b5-docs', 'Documentación + escena ejemplo', lvl(null, [0.5, 1], [1, 3], [3, 6], [6, 12])),
    ], DOC_02,
    undefined, [1, 42]),

  svc('b6-mecanicas-especificas', 'asset-rt',
    'Vista explosionada / cutaway / medición',
    'mecánica sobre asset preparado',
    ['nº partes móviles', 'profundidad del despiece'],
    'inferred',
    ['Animación de despiece controlada por slider/steps', 'Etiquetado de partes', 'Integración en motor target'],
    [
      st('b6-preparacion', 'Análisis/preparación de despiece', lvl(null, [1, 3], [3, 6], [6, 15], [15, 40])),
      st('b6-explosion', 'Setup animación/explosión', lvl(null, [2, 4], [4, 10], [10, 25], [25, 60])),
      st('b6-ui', 'UI/controles (slider, steps, etiquetas)', lvl(null, [2, 4], [4, 8], [8, 18], [18, 40])),
      st('b6-integracion', 'Integración motor + perf', lvl(null, [1, 2], [2, 5], [5, 12], [12, 25])),
    ], DOC_02,
    ['El asset base NO está incluido (cotizar B1/B2/F1 primero)'], [2, 56]),

  svc('b7-optimizacion-rt-ready', 'asset-rt',
    'Optimización de assets existentes → RT-ready',
    'asset medio',
    ['estado de partida', 'poly count objetivo'],
    'qualitative',
    ['Asset optimizado y exportable', 'Informe antes/después (poly, peso, perf)', 'Recomendaciones de uso'],
    [
      st('b7-auditoria', 'Auditoría técnica', lvl(null, [0.5, 1], [1, 2], [2, 4], [4, 8])),
      st('b7-retopo', 'Retopo/rebuild parcial', lvl(null, [0, 2], [2, 6], [6, 15], [15, 40])),
      st('b7-rebake', 'Re-bake/texturas', lvl(null, [0.5, 2], [2, 5], [5, 12], [12, 25])),
      st('b7-lods', 'LODs/export', lvl(null, [0.5, 1], [1, 2], [2, 5], [5, 10])),
      st('b7-qa', 'QA motor', lvl(null, [0.5, 1], [1, 2], [2, 3], [3, 6])),
    ], DOC_02,
    undefined, [1, 28]),

  svc('b8-rigging-animacion', 'asset-rt',
    'Rigging & animación',
    '1 rig + 2 clips ~5 s',
    ['tipo de rig', 'nº de clips'],
    'inferred',
    ['Rig funcional', 'Clips de animación (lote de 2)', 'Pesos calibrados'],
    [
      st('b8-rig', 'Rig base', lvl(null, [2, 5], [5, 12], [12, 30], [30, 70])),
      st('b8-pesos', 'Pesos/deformación', lvl(null, [1, 3], [3, 8], [8, 20], [20, 45])),
      st('b8-clips', 'Clips de animación (lote de 2)', lvl(null, [2, 6], [6, 12], [12, 24], [24, 50])),
    ], DOC_02,
    undefined, [2, 42]),

  svc('f1-cad-webgl-ready', 'datos',
    'CAD → WebGL ready ⭐',
    'ensamblaje CAD',
    ['nº de piezas (driver principal)', 'complejidad geométrica', 'calidad del CAD origen'],
    'explicit',
    ['GLB/GLTF optimizado con Draco/KTX2', 'Jerarquía limpia con metadata por pieza', 'LODs según target', 'Texturas PBR técnicos', 'QA visor web + reporte performance'],
    [
      st('f1-ingesta', 'Ingesta CAD/QC', lvl([0.5, 1], [0.5, 1], [1, 3], [3, 6], [6, 15])),
      st('f1-retopo', 'Decimado/retopo por pieza', lvl([0.75, 1.5], [1, 3], [3, 10], [10, 30], [30, 100])),
      st('f1-uvs-baking', 'UVs + baking batch', lvl([0.5, 1.25], [1, 2], [2, 6], [6, 15], [15, 40])),
      st('f1-texturas', 'Texturas PBR técnicos', lvl([0.75, 1.5], [1, 3], [3, 8], [8, 20], [20, 45])),
      st('f1-metadata', 'Jerarquía/metadata por pieza', lvl([0.25, 0.75], [0.5, 1], [1, 3], [3, 8], [8, 20])),
      st('f1-lods', 'LODs + compresión', lvl([0.25, 0.75], [0.5, 1], [1, 3], [3, 8], [8, 18])),
      st('f1-qa', 'QA visor web + reporte perf', lvl([0.25, 0.75], [0.5, 1], [1, 2], [2, 5], [5, 12])),
    ], DOC_02,
    ['Vista explosionada (cotizar B6 aparte)', 'Animación (cotizar B8/B3 aparte)'], [1, 70]),

  svc('f2-generacion-texturas', 'datos',
    'Generación de texturas y mapas',
    'set PBR 4K',
    ['unicidad del material', 'tileable vs unique', 'NoAI'],
    'explicit',
    ['Set completo: albedo/normal/roughness/metallic/height/AO', 'Preview aplicado en contexto'],
    [
      st('f2-set', 'Diseño/generación + calibración PBR', lvl([0.5, 1], [1, 2], [2, 4], [4, 8], [8, 15])),
    ], DOC_02,
    undefined, [1, 5]),

  svc('c1-visor-embebido', 'web-3d',
    'Visor embebido low-code (Spline/model-viewer/Sketchfab)',
    'escena embebida',
    ['visor elegido', 'nº de escenas', 'hotspots soportados'],
    'explicit',
    ['Embed responsive en tu página', 'Lazy-load configurado', 'QA multi-navegador'],
    [
      st('c1-intake', 'Intake + QC del asset', lvl([0.5, 1], [1, 2], [2, 3], [3, 5], [4, 6])),
      st('c1-setup-embed', 'Setup/upload/embed/tuning/QA', lvl([2, 4], [2.5, 5], [5, 10], [10, 19], [20, 38])),
    ], DOC_03,
    undefined, [1, 14]),

  svc('c2-visor-custom', 'web-3d',
    'Visor custom three.js / Babylon.js',
    'visor web',
    ['hotspots/features', 'datos dinámicos vs hardcode', 'AR opcional'],
    'explicit',
    ['Visor web a medida con órbita/zoom/hotspots', 'Pipeline de carga optimizado', 'Responsive mobile-first', 'Analytics events'],
    [
      st('c2-spec', 'Spec técnica + pipeline carga', lvl([1.5, 3.5], [2.5, 6], [7, 13], [14, 28], [28, 56])),
      st('c2-interaccion-ui', 'Interacción + UI overlay', lvl([2.5, 6], [3.5, 9], [9, 18], [18, 38], [38, 76])),
      st('c2-perf-deploy', 'Perf móvil + QA + entrega', lvl([1, 2.5], [1.5, 5], [4, 9], [10, 22], [22, 49])),
    ], DOC_03,
    undefined, [2, 21]),

  svc('c3-webapp-3d', 'web-3d',
    'Web App 3D (configurador/herramienta técnica)',
    'aplicación web',
    ['variantes/reglas', 'fuente de datos', 'autenticación', 'SKUs'],
    'inferred',
    ['Aplicación web completa con estado real', 'Escena 3D configurable', 'Export/share de resultados', 'Deploy documentado'],
    [
      st('c3-discovery', 'Discovery/spec funcional', lvl([3, 6], [5, 11], [11, 26], [27, 57], [57, 112])),
      st('c3-core', 'Arquitectura + escena configurable', lvl([6, 12], [11, 23], [23, 58], [58, 124], [124, 244])),
      st('c3-qa-deploy', 'QA/E2E + perf + deploy/docs', lvl([3, 6], [5, 11], [11, 30], [29, 64], [64, 124])),
    ], DOC_03,
    ['Assets 3D (cotizar familia B/F1)', 'Auth multiusuario', 'Integraciones API/e-commerce'], [7, 112]),

  svc('c4-scrollytelling', 'web-3d',
    'Scrollytelling 3D',
    'página narrativa',
    ['secciones narrativas', 'complejidad escena'],
    'inferred',
    ['Página narrativa con escena 3D sincronizada a scroll', 'Binding scroll/eventos', 'Perf budget garantizado'],
    [
      st('c4-discovery', 'Discovery/scoping', lvl(null, [5, 8], [8, 14], [14, 24], [14, 24])),
      st('c4-arquitectura', 'Arquitectura + setup', lvl(null, [6, 10], [10, 18], [18, 32], [18, 32])),
      st('c4-escena', 'Escena base + montaje assets', lvl(null, [12, 25], [25, 50], [50, 90], [50, 90])),
      st('c4-binding', 'Binding scroll/eventos', lvl(null, [8, 16], [16, 32], [32, 60], [32, 60])),
      st('c4-perf', 'Perf budget + QA dispositivos', lvl(null, [5, 10], [10, 18], [18, 30], [18, 30])),
    ], DOC_03,
    ['Producción de assets RT (cotizar familia B)'], [7, 112]),

  svc('c5-catalogo-interactivo', 'web-3d',
    'Catálogo interactivo 3D',
    'catálogo navegable',
    ['nº SKUs/productos', 'filtros/búsqueda', 'datos dinámicos'],
    'inferred',
    ['Catálogo navegable con vista 3D por producto', 'Filtros y búsqueda', 'Fichas de producto integradas'],
    [
      st('c5-discovery', 'Discovery/scoping', lvl(null, [3, 6], [6, 10], [10, 18], [18, 28])),
      st('c5-arquitectura', 'Arquitectura + setup', lvl(null, [4, 8], [8, 14], [14, 26], [26, 44])),
      st('c5-escenas', 'Escenas 3D + montaje assets', lvl(null, [8, 16], [16, 34], [34, 68], [68, 120])),
      st('c5-datos-ui', 'Datos/filtros/UI responsive', lvl(null, [6, 13], [13, 26], [26, 48], [48, 82])),
      st('c5-perf-deploy', 'Perf + QA + deploy', lvl(null, [3, 6], [6, 12], [12, 24], [24, 40])),
    ], DOC_03,
    ['Assets 3D individuales (cotizar B/F1 por SKU)'], [7, 84]),

  svc('c6-minijuego', 'web-3d',
    'Minijuego WebGL',
    'juego embebido',
    ['mecánica core', 'plataforma', 'game feel'],
    'inferred',
    ['Minijuego WebGL jugable embebido', 'Game feel (input, feedback, audio básico)', 'Estados de juego/UI/HUD'],
    [
      st('c6-gdd', 'GDD corto y decisiones', lvl(null, [3, 6], [6, 12], [12, 22], [12, 22])),
      st('c6-core', 'Mecánica core + game loop', lvl(null, [10, 20], [20, 40], [40, 75], [40, 75])),
      st('c6-feel', 'Game feel', lvl(null, [5, 11], [11, 21], [21, 38], [21, 38])),
      st('c6-ui', 'UI/HUD/estados', lvl(null, [5, 11], [11, 19], [19, 33], [19, 33])),
      st('c6-opt', 'Optimización mobile + QA + deploy', lvl(null, [6, 13], [13, 24], [24, 45], [24, 45])),
    ], DOC_03,
    ['Backend/scores persistentes (integrar API externa)', 'Arte 2D/UI custom'], [7, 140]),

  svc('c7-unity-webgl', 'web-3d',
    'Build Unity WebGL optimizado',
    'build productivo',
    ['tamaño proyecto Unity', 'datos JS↔Unity', 'hosting destino'],
    'inferred',
    ['Build WebGL productivo optimizado', 'Loading screen custom', 'Bridge JS↔Unity bidireccional', 'Embed responsive con fallbacks'],
    [
      st('c7-auditoria', 'Auditoría + settings build', lvl(null, [4, 8], [8, 16], [16, 28], [16, 28])),
      st('c7-compresion', 'Compresión + loading screen', lvl(null, [4, 8], [8, 14], [14, 24], [14, 24])),
      st('c7-bridge', 'Bridge JS↔Unity', lvl(null, [6, 14], [14, 30], [30, 60], [30, 60])),
      st('c7-embed', 'Embed + QA dispositivos', lvl(null, [4, 9], [9, 18], [18, 30], [18, 30])),
    ], DOC_03,
    ['Desarrollo gameplay/mechanics nuevas dentro de Unity'], [3, 42]),

  svc('c8-presentaciones-web', 'web-3d',
    'Presentación web interactiva',
    'presentación web',
    ['nº slides', 'densidad elementos ricos', '3D sí/no'],
    'explicit',
    ['Presentación web navegable con slides', 'Gráficos animados', 'Video embebido', 'Bloque 3D opcional (C1/C2)'],
    [
      st('c8-narrativa', 'Estructura narrativa + plantilla', lvl(null, [2, 4], [4, 8], [8, 14], [14, 22])),
      st('c8-maquetacion', 'Maquetación slides + navegación', lvl(null, [3, 6], [6, 12], [12, 22], [22, 38])),
      st('c8-elementos', 'Elementos ricos (3D/video/gráficos)', lvl(null, [2, 5], [5, 12], [12, 26], [26, 50])),
      st('c8-qa', 'QA responsive + entrega', lvl(null, [1, 2], [2, 4], [4, 8], [8, 12])),
    ], DOC_03,
    undefined, [2, 28]),

  svc('c9-ar-web', 'web-3d',
    'AR web ligero (model-viewer / WebXR básico)',
    'experiencia AR',
    ['plataforma AR (iOS Quick Look / Android Scene Viewer)', 'calidad del asset fuente'],
    'explicit',
    ['Asset preparado para AR nativa (USDZ + GLB)', 'QR code para acceso', 'Fallback web 3D'],
    [
      st('c9-prep', 'Preparación USDZ/GLB compliant', lvl([1, 2], [2, 4], [4, 7], [7, 12], [7, 12])),
      st('c9-embed', 'Embed + QR + fallbacks', lvl([0.5, 1.5], [1, 3], [3, 6], [6, 10], [6, 10])),
      st('c9-qa', 'QA en dispositivos físicos', lvl([0.5, 1], [1, 2], [2, 4], [4, 6], [4, 6])),
    ], DOC_03,
    undefined, [1, 7]),

  svc('d1-compositing-foto', 'vfx',
    'Compositing 3D sobre fotografía',
    'imagen (toma única)',
    ['complejidad fondo', 'calidad foto', 'capas CG'],
    'explicit',
    ['Foto final con modelo 3D integrado', 'Lighting match', 'Grade/color QC'],
    [
      st('d1-analisis-solve', 'Análisis escena + resolución cámara', lvl([1.5, 3.5], [2.5, 6], [6, 13], [13, 26], [26, 47])),
      st('d1-integracion-comp', 'Layout + integración + comp final', lvl([2.5, 5.5], [4, 9], [9, 20], [20, 39], [39, 70])),
    ], DOC_04,
    undefined, [1, 14]),

  svc('d2-compositing-video', 'vfx',
    'Compositing 3D sobre video (por toma)',
    'toma ~5–10 s',
    ['movimiento cámara', 'motion blur', 'oclusiones', 'FX requeridos'],
    'explicit',
    ['Clip final con modelo 3D/FX integrados', 'Tracking/matchmove', 'Comp final con QC'],
    [
      st('d2-analisis', 'Análisis footage + plan toma', lvl(null, [1, 2], [2, 5], [5, 9], [9, 15])),
      st('d2-tracking', 'Tracking/matchmove', lvl(null, [1, 3], [3, 8], [8, 16], [16, 30])),
      st('d2-layout', 'Layout/planos 3D escena', lvl(null, [1, 3], [3, 7], [7, 14], [14, 25])),
      st('d2-integracion', 'Integración modelo + lighting match', lvl(null, [4, 8], [8, 18], [18, 36], [36, 70])),
      st('d2-comp', 'Composición final + QC', lvl(null, [1, 3], [3, 7], [7, 14], [14, 24])),
    ], DOC_04,
    undefined, [2, 42]),

  svc('d3-fx-standalone', 'vfx',
    'FX / simulación standalone',
    'efecto puntual',
    ['tipo de sim', 'iteraciones artísticas', 'reutilización futura'],
    'inferred',
    ['Efecto simulado/animado', 'Entrega integrada al pipeline del cliente'],
    [
      st('d3-brief', 'Brief/referencia efecto', lvl(null, [0.5, 1], [1, 2], [2, 4], [4, 6])),
      st('d3-rnd', 'Setup/R&D del efecto', lvl(null, [2, 4], [4, 10], [10, 22], [22, 50])),
      st('d3-sim', 'Simulación + iteraciones artísticas', lvl(null, [1, 3], [3, 8], [8, 18], [18, 40])),
      st('d3-render', 'Render/composición integrada', lvl(null, [1, 2], [2, 5], [5, 12], [12, 24])),
    ], DOC_04,
    undefined, [1, 28]),

  svc('e1-chat-rag-web', 'ia',
    'Asistente IA en sitio web (chat con RAG)',
    'asistente instalado',
    ['volumen/fuentes contenido', 'idiomas', 'acciones permitidas'],
    'explicit',
    ['Chat widget embebido en el sitio', 'RAG sobre contenido propio del cliente', 'Guardrails/disclaimers', 'Casos de prueba documentados'],
    [
      st('e1-discovery', 'Discovery/casos de uso + fuentes', lvl([2, 3], [3, 5], [5, 8], [8, 14], [8, 14])),
      st('e1-rag', 'Pipeline ingesta/embeddings/RAG', lvl([4, 8], [8, 16], [16, 30], [30, 60], [30, 60])),
      st('e1-prompts', 'Prompt engineering + guardrails', lvl([2, 4], [4, 8], [8, 14], [14, 26], [14, 26])),
      st('e1-widget', 'Widget UI + integración web', lvl([3, 6], [6, 12], [12, 24], [24, 44], [24, 44])),
      st('e1-eval', 'Evaluación con casos de prueba', lvl([2, 4], [4, 7], [7, 12], [12, 22], [12, 22])),
    ], DOC_04,
    ['Costos de API (BYOK)', 'Fine-tuning de modelos'], [3, 70]),

  svc('e2-ia-indirecta-web', 'ia',
    'IA indirecta en web (automatización visible)',
    'flujo automatizado',
    ['flujos a automatizar', 'calidad datos entrada'],
    'explicit',
    ['Formularios inteligentes / generadores / recomendadores', 'Integración en el sitio del cliente', 'QA/evaluación'],
    [
      st('e2-discovery', 'Discovery flujo/datos', lvl(null, [2, 3], [3, 6], [6, 11], [11, 18])),
      st('e2-flujo', 'Diseño flujo/prompts/reglas', lvl(null, [1, 3], [3, 6], [6, 12], [12, 22])),
      st('e2-implementacion', 'Implementación', lvl(null, [4, 8], [8, 20], [20, 42], [42, 80])),
      st('e2-datos', 'Integración de datos/APIs', lvl(null, [1, 3], [3, 9], [9, 20], [20, 40])),
      st('e2-qa', 'QA/evaluación + ajuste', lvl(null, [1, 3], [3, 7], [7, 14], [14, 26])),
    ], DOC_04,
    undefined, [2, 84]),

  svc('e3-ia-procesos-internos', 'ia',
    'IA en procesos internos (empresa/agencia)',
    'proceso automatizado',
    ['procesos candidatos', 'madurez digital'],
    'qualitative',
    ['Automatización(es) construida(s)', 'Capacitación del equipo', 'Documentación de uso'],
    [
      st('e3-auditoria', 'Auditoría procesos + oportunidades', lvl([3, 5], [5, 10], [10, 18], [18, 30], [18, 30])),
      st('e3-build', 'Build (automatizaciones/agentes/pipelines)', lvl([6, 14], [14, 40], [40, 90], [90, 180], [90, 180])),
      st('e3-capacitacion', 'Capacitación + documentación', lvl([2, 4], [4, 9], [9, 16], [16, 30], [16, 30])),
    ], DOC_04,
    undefined, [3, 140]),

  svc('e4-programa-adopcion-ia', 'ia',
    'Programa de adopción IA (diagnóstico → PoC → escala)',
    'programa estructurado',
    ['tamaño organización', 'nº casos de uso candidatos'],
    'qualitative',
    ['Diagnóstico + roadmap priorizado', 'PoC del caso #1 con medición', 'Plan gobernanza + capacitación equipos'],
    [
      st('e4-diagnostico', 'Diagnóstico + roadmap priorizado', lvl(null, [6, 10], [10, 18], [18, 32], [32, 55])),
      st('e4-poc', 'PoC caso #1', lvl(null, [8, 16], [16, 36], [36, 72], [72, 140])),
      st('e4-medicion', 'Plan medición + gobernanza', lvl(null, [2, 4], [4, 8], [8, 14], [14, 24])),
      st('e4-capacitacion', 'Capacitación + transferencia', lvl(null, [3, 6], [6, 12], [12, 24], [24, 45])),
    ], DOC_04,
    undefined, [14, 182]),

  svc('e5-auditoria-ia', 'ia',
    'Auditoría puntual de IA (quick wins)',
    'informe accionable',
    ['tamaño organización', 'acceso a stakeholders'],
    'inferred',
    ['Informe: dónde ayuda la IA hoy, quick wins priorizados', 'Qué NO conviene automatizar todavía'],
    [
      st('e5-entrevistas', 'Entrevistas + inventario procesos', lvl(null, [3, 5], [5, 8], [8, 12], [8, 12])),
      st('e5-informe', 'Informe oportunidades/riesgos/quick wins', lvl(null, [3, 5], [5, 9], [9, 14], [9, 14])),
      st('e5-presentacion', 'Presentación hallazgos', lvl(null, [1, 2], [2, 3], [3, 5], [3, 5])),
    ], DOC_04,
    undefined, [3, 21]),

  svc('f3-digital-twin', 'datos',
    'Visualización técnica con datos vivos (digital twin ligero)',
    'gemelo visual conectado',
    ['frecuencia de datos', 'formato fuente', 'alertas visuales'],
    'qualitative',
    ['Gemelo visual conectado a fuente de datos', 'Dashboard/alertas sobre escena 3D', 'QA extremo a extremo'],
    [
      st('f3-arq', 'Arquitectura de datos', lvl(null, [5, 9], [9, 16], [16, 28], [16, 28])),
      st('f3-conexion', 'Conexión datos vivos', lvl(null, [7, 15], [15, 27], [27, 48], [27, 48])),
      st('f3-dashboard', 'Dashboard/alertas visuales', lvl(null, [5, 11], [11, 20], [20, 36], [20, 36])),
      st('f3-qa', 'QA extremo a extremo', lvl(null, [3, 5], [5, 9], [9, 16], [9, 16])),
    ], DOC_04,
    ['Sensores/hardware IoT', 'Backend telemetría del cliente', 'ML predictivo'], [7, 70]),

  svc('g1-discovery-scoping', 'soporte',
    'Discovery & scoping de proyecto',
    'informe + SOW borrador (50% acreditable al contratar)',
    ['stakeholders', 'material de entrada', 'incertidumbre técnica'],
    'qualitative',
    ['Informe de discovery', 'SOW borrador con estimación trazable', 'Presentación al equipo'],
    [
      st('g1-trabajo', 'Intake/análisis/SOW estimación', lvl([2, 4.5], [2.5, 6], [6, 12], [12, 24], [12, 24])),
      st('g1-presentacion', 'Presentación y revisión con cliente', lvl([0.5, 1.5], [1, 2], [2, 4], [4, 8], [4, 8])),
    ], DOC_04,
    undefined, [2, 10]),

  svc('g2-auditoria-perf', 'soporte',
    'Auditoría de performance WebGL/app 3D',
    'auditoría + reporte',
    ['tamaño app', 'acceso a código/fuentes', 'plataformas objetivo'],
    'explicit',
    ['Reporte priorizado (quick wins vs estructural)', 'Perfilado completo (load/FPS/draw calls/memoria)', 'Sesión de lectura de resultados'],
    [
      st('g2-perfilado', 'Perfilado (load, FPS, draw calls, memoria, red)', lvl(null, [2, 4], [4, 9], [9, 18], [9, 18])),
      st('g2-analisis', 'Análisis de código/pipeline/assets', lvl(null, [2, 5], [5, 12], [12, 25], [12, 25])),
      st('g2-reporte', 'Reporte priorizado + sesión lectura', lvl(null, [1, 2], [2, 5], [5, 9], [5, 9])),
    ], DOC_04,
    undefined, [3, 14]),

  svc('g3-retainers', 'soporte',
    'Retainer mensual (soporte y evolución continua)',
    'bloque horas mensual',
    ['horas/mes', 'tipo de trabajo recurrente'],
    'explicit',
    ['Disponibilidad recurrente según plan', 'SLA de respuesta según tier', 'Horas rollean 50% máx al mes siguiente'],
    [
      st('g3-lite', 'Lite: 4 h/mes — vigilancia + fixes puntuales', lvl([4, 4], [4, 4], [4, 4], [4, 4], [4, 4])),
      st('g3-standard', 'Standard: 8 h/mes — iteración ligera continua', lvl([8, 8], [8, 8], [8, 8], [8, 8], [8, 8])),
      st('g3-pro', 'Pro: 16 h/mes — evolución activa de web app/gemelo', lvl([16, 16], [16, 16], [16, 16], [16, 16], [16, 16])),
      st('g3-business', 'Business: 40 h/mes — operación continua multi-servicio', lvl([40, 40], [40, 40], [40, 40], [40, 40], [40, 40])),
      st('g3-enterprise', 'Enterprise: 80 h/mes — demanda sostenida + G2-b prioritario', lvl([80, 80], [80, 80], [80, 80], [80, 80], [80, 80])),
    ], DOC_04,
    undefined, [0, 0]),
];
