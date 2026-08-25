// src/data/services/serviceCatalog.ts — AG-SERV
// Catálogo de familias, tareas y subtareas con horas por tier (S/M/L/XL).
// Fuente humana: docs/servicios/CATALOGO_SERVICIOS.md — los IDs son estables (no renombrar).

import type { CadPieceClass, Family, ServiceTask, Subtask } from "./types";

export const FAMILIES: readonly Family[] = [
  { id: "A", name: "Render 3D offline", summary: "Render estático y animación para product viz, arquitectura y arte." },
  { id: "B", name: "Assets realtime WebGL/videojuegos", summary: "Pipeline de assets optimizados para tiempo real, estáticos/animados, interactuables o no." },
  { id: "C", name: "Web 3D e integración", summary: "Visores embebidos, three.js/babylon custom, Unity WebGL, scrollytelling, minijuegos, catálogos, web apps." },
  { id: "D", name: "3D sobre footage real", summary: "VFX y compositing: integración de modelo 3D en foto/video con tracking y matching." },
  { id: "E", name: "Integración de IA", summary: "Asistentes en sitio, automatización indirecta y consultoría/implementación IA en empresas." },
  { id: "F", name: "Activos, FX y recurrentes", summary: "Texturas, FX genérico, optimization doctor, consultoría puntual y retainers." },
];

export const TASKS: readonly ServiceTask[] = [
  // ---------- Familia A ----------
  {
    id: "A1",
    familyId: "A",
    name: "Render 3D estático",
    deliverable: "Imagen(es) final(es) alta resolución + passes si se pactan.",
    subtasks: [
      { id: "A1.0", name: "Briefing técnico y referencias", rateClass: "TL", hoursByTier: { S: { min: 1, max: 2 }, M: { min: 2, max: 3 }, L: { min: 3, max: 5 }, XL: { min: 5, max: 8 } } },
      { id: "A1.1", name: "Setup/import/bloqueo de escena", rateClass: "ART", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 6 }, L: { min: 6, max: 12 }, XL: { min: 12, max: 20 } } },
      { id: "A1.2", name: "Modelado hard-surface por bloque", rateClass: "ART", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 10 }, L: { min: 10, max: 24 }, XL: { min: 24, max: 48 } }, drivers: ["omitir si el cliente aporta modelo"], optional: true },
      { id: "A1.3", name: "Lookdev + texturizado PBR", rateClass: "ART", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 8 }, L: { min: 8, max: 18 }, XL: { min: 18, max: 36 } } },
      { id: "A1.4", name: "Iluminación + cámaras", rateClass: "ART", hoursByTier: { S: { min: 1, max: 2 }, M: { min: 2, max: 5 }, L: { min: 5, max: 10 }, XL: { min: 10, max: 18 } } },
      { id: "A1.5", name: "Setup render + iteraciones", rateClass: "ART", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 6 }, L: { min: 6, max: 12 }, XL: { min: 12, max: 24 } } },
      { id: "A1.6", name: "Postproducción/compositing", rateClass: "ART", hoursByTier: { S: { min: 0.5, max: 1 }, M: { min: 1, max: 3 }, L: { min: 3, max: 6 }, XL: { min: 6, max: 12 } } },
    ],
    note: "Imagen adicional misma escena ≈ 20-40% de A1.4+A1.5+A1.6; escena nueva re-estima A1.1-A1.5.",
  },
  {
    id: "A2",
    familyId: "A",
    name: "Render de animación 3D",
    deliverable: "Video final (segundos definidos) + master ProRes/H.264.",
    subtasks: [
      { id: "A2.0", name: "Briefing + storyboard/animatic aprobado", rateClass: "TL", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 8 }, L: { min: 8, max: 16 }, XL: { min: 16, max: 30 } } },
      { id: "A2.1", name: "Layout de escena + cámaras", rateClass: "ART", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 6 }, L: { min: 6, max: 12 }, XL: { min: 12, max: 24 } } },
      { id: "A2.2", name: "Animación objeto/cámara (sin personajes)", rateClass: "ART", hoursByTier: { S: { min: 2, max: 5 }, M: { min: 5, max: 12 }, L: { min: 12, max: 28 }, XL: { min: 28, max: 60 } } },
      { id: "A2.3", name: "Rigging de personaje (si aplica)", rateClass: "ART", hoursByTier: { M: { min: 8, max: 16 }, L: { min: 16, max: 40 }, XL: { min: 40, max: 80 } }, optional: true },
      { id: "A2.4", name: "Animación de personaje (por clip)", rateClass: "ART", hoursByTier: { M: { min: 8, max: 16 }, L: { min: 16, max: 35 }, XL: { min: 35, max: 70 } }, optional: true },
      { id: "A2.5", name: "Simulaciones (telas/partículas/líquidos)", rateClass: "ART", hoursByTier: { M: { min: 4, max: 10 }, L: { min: 10, max: 25 }, XL: { min: 25, max: 50 } }, optional: true },
      { id: "A2.6", name: "Iluminación + render", rateClass: "ART", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 10 }, L: { min: 10, max: 22 }, XL: { min: 22, max: 45 } } },
      { id: "A2.7", name: "Compositing + edición + audio básico", rateClass: "ART", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 8 }, L: { min: 8, max: 16 }, XL: { min: 16, max: 32 } } },
    ],
  },
  // ---------- Familia B: módulos del pipeline realtime ----------
  {
    id: "B-PIPELINE",
    familyId: "B",
    name: "Módulos de pipeline asset realtime",
    note: "Definición de módulos BM1-BM12; las tareas B1-B4 los componen.",
    subtasks: [
      { id: "BM1", name: "Referencia + bloqueo", rateClass: "ART", hoursByTier: { S: { min: 1, max: 2 }, M: { min: 2, max: 4 }, L: { min: 4, max: 8 }, XL: { min: 8, max: 16 } } },
      { id: "BM2", name: "High-poly / sculpt", rateClass: "ART", hoursByTier: { S: { min: 0, max: 2 }, M: { min: 4, max: 10 }, L: { min: 10, max: 24 }, XL: { min: 24, max: 60 } }, drivers: ["omitible en hard-surface limpio"] },
      { id: "BM3", name: "Retopología low-poly", rateClass: "ART", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 10 }, L: { min: 10, max: 25 }, XL: { min: 25, max: 50 } } },
      { id: "BM4", name: "UVs", rateClass: "ART", hoursByTier: { S: { min: 0.5, max: 1.5 }, M: { min: 1.5, max: 4 }, L: { min: 4, max: 10 }, XL: { min: 10, max: 20 } } },
      { id: "BM5", name: "Bake de mapas", rateClass: "RT", hoursByTier: { S: { min: 0.5, max: 1.5 }, M: { min: 1.5, max: 4 }, L: { min: 4, max: 8 }, XL: { min: 8, max: 16 } } },
      { id: "BM6", name: "Texturizado PBR", rateClass: "ART", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 8 }, L: { min: 8, max: 18 }, XL: { min: 18, max: 40 } } },
      { id: "BM7", name: "Rigging", rateClass: "ART", hoursByTier: { M: { min: 6, max: 14 }, L: { min: 14, max: 35 }, XL: { min: 35, max: 70 } } },
      { id: "BM8", name: "Clips de animación", rateClass: "ART", hoursByTier: { M: { min: 3, max: 8 }, L: { min: 8, max: 20 }, XL: { min: 20, max: 45 } } },
      { id: "BM9", name: "LODs + optimización", rateClass: "RT", hoursByTier: { S: { min: 0.5, max: 1.5 }, M: { min: 1.5, max: 4 }, L: { min: 4, max: 10 }, XL: { min: 10, max: 24 } } },
      { id: "BM10", name: "Export glTF/engine + validación en target", rateClass: "RT", hoursByTier: { S: { min: 0.5, max: 1.5 }, M: { min: 1.5, max: 3 }, L: { min: 3, max: 6 }, XL: { min: 6, max: 12 } } },
      { id: "BM11", name: "QA visual + performance budget", rateClass: "TL", hoursByTier: { S: { min: 0.5, max: 1 }, M: { min: 1, max: 3 }, L: { min: 3, max: 6 }, XL: { min: 6, max: 12 } } },
      { id: "BM12", name: "Prep interactividad (jerarquía/pivotes/hotspots)", rateClass: "RT", hoursByTier: { S: { min: 0.5, max: 1.5 }, M: { min: 1.5, max: 4 }, L: { min: 4, max: 8 }, XL: { min: 8, max: 16 } } },
    ],
  },
  {
    id: "B1",
    familyId: "B",
    name: "Asset estático NO interactuable",
    deliverable: "Asset realtime optimizado (glTF/engine) sin animación ni interacción.",
    moduleIds: ["BM1", "BM2", "BM3", "BM4", "BM5", "BM6", "BM9", "BM10", "BM11"],
  },
  {
    id: "B2",
    familyId: "B",
    name: "Asset estático INTERACTUABLE",
    deliverable: "Asset inspeccionable: rotar/zoom/seleccionar partes; jerarquía semántica.",
    moduleIds: ["BM1", "BM2", "BM3", "BM4", "BM5", "BM6", "BM12", "BM9", "BM10", "BM11"],
  },
  {
    id: "B3",
    familyId: "B",
    name: "Asset animado NO interactuable",
    deliverable: "Asset realtime con clips de animación (turntable, NPC de fondo).",
    moduleIds: ["BM1", "BM2", "BM3", "BM4", "BM5", "BM6", "BM7", "BM8", "BM9", "BM10", "BM11"],
  },
  {
    id: "B4",
    familyId: "B",
    name: "Asset animado INTERACTUABLE",
    deliverable: "Asset riggeado + animado + preparado para interacción (personaje jugable, demostrador).",
    moduleIds: ["BM1", "BM2", "BM3", "BM4", "BM5", "BM6", "BM7", "BM8", "BM12", "BM9", "BM10", "BM11"],
  },
  {
    id: "B5",
    familyId: "B",
    name: "Shaders estilizados",
    deliverable: "Shader (toon, holograma, disolución, agua, outline) con params expuestos y fallbacks.",
    subtasks: [
      { id: "B5.1", name: "Definición de look", rateClass: "ART", hoursByTier: { S: { min: 1, max: 2 }, M: { min: 2, max: 4 }, L: { min: 4, max: 8 }, XL: { min: 8, max: 14 } } },
      { id: "B5.2", name: "Prototipo de shader", rateClass: "RT", hoursByTier: { S: { min: 3, max: 6 }, M: { min: 6, max: 14 }, L: { min: 14, max: 30 }, XL: { min: 30, max: 60 } } },
      { id: "B5.3", name: "Parámetros expuestos + variantes", rateClass: "RT", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 6 }, L: { min: 6, max: 12 }, XL: { min: 12, max: 20 } } },
      { id: "B5.4", name: "Optimización WebGL/mobile", rateClass: "RT", hoursByTier: { S: { min: 1, max: 2 }, M: { min: 2, max: 5 }, L: { min: 5, max: 10 }, XL: { min: 10, max: 18 } } },
      { id: "B5.5", name: "Fallbacks/degradación elegante", rateClass: "RT", hoursByTier: { S: { min: 0.5, max: 1 }, M: { min: 1, max: 3 }, L: { min: 3, max: 6 }, XL: { min: 6, max: 10 } } },
    ],
  },
  {
    id: "B6",
    familyId: "B",
    name: "Mecánicas específicas sobre modelo",
    deliverable: "Vista explosionada / corte / medición / callouts con UI de control.",
    subtasks: [
      { id: "B6.1", name: "Auditoría/preparación de jerarquía del asset", rateClass: "RT", hoursByTier: { S: { min: 1, max: 2 }, M: { min: 2, max: 5 }, L: { min: 5, max: 10 }, XL: { min: 10, max: 20 } } },
      { id: "B6.2", name: "Vista explosionada (curvas, estados, reversible)", rateClass: "RT", hoursByTier: { S: { min: 2, max: 5 }, M: { min: 5, max: 12 }, L: { min: 12, max: 25 }, XL: { min: 25, max: 45 } } },
      { id: "B6.3", name: "Corte seccional / x-ray / medición acotada", rateClass: "RT", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 10 }, L: { min: 10, max: 20 }, XL: { min: 20, max: 35 } } },
      { id: "B6.4", name: "Callouts/etiquetas 3D→2D", rateClass: "RT", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 6 }, L: { min: 6, max: 12 }, XL: { min: 12, max: 20 } } },
      { id: "B6.5", name: "UI de control integrada", rateClass: "RT", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 6 }, L: { min: 6, max: 12 }, XL: { min: 12, max: 24 } } },
    ],
  },
  {
    id: "B7",
    familyId: "B",
    name: "Conversión CAD → 3D WebGL-ready",
    deliverable: "Modelo web-ready con jerarquía por pieza, materiales y LODs validados en target.",
    subtasks: [
      { id: "B7.1", name: "Auditoría CAD", rateClass: "RT", hoursByTier: { S: { min: 0.5, max: 1.5 }, M: { min: 1.5, max: 4 }, L: { min: 4, max: 8 }, XL: { min: 8, max: 16 } }, drivers: ["formato STEP/IGES/native", "nº piezas", "topología", "movimiento requerido"] },
      { id: "B7.2", name: "Tessellation/import con tolerancia", rateClass: "RT", hoursByTier: { S: { min: 0.5, max: 2 }, M: { min: 2, max: 5 }, L: { min: 5, max: 12 }, XL: { min: 12, max: 24 } } },
      { id: "B7.3", name: "Limpieza geométrica", rateClass: "RT", hoursByTier: { S: { min: 0.5, max: 1.5 }, M: { min: 1.5, max: 6 }, L: { min: 6, max: 15 }, XL: { min: 15, max: 35 } } },
      { id: "B7.4", name: "Decimación a presupuesto de tris", rateClass: "RT", hoursByTier: { S: { min: 0.5, max: 1 }, M: { min: 1, max: 3 }, L: { min: 3, max: 8 }, XL: { min: 8, max: 18 } } },
      { id: "B7.5", name: "Jerarquía + pivotes por pieza", rateClass: "RT", hoursByTier: { S: { min: 0.5, max: 1.5 }, M: { min: 1.5, max: 4 }, L: { min: 4, max: 10 }, XL: { min: 10, max: 20 } } },
      { id: "B7.6", name: "UVs + bake", rateClass: "RT", hoursByTier: { S: { min: 0.5, max: 1.5 }, M: { min: 1.5, max: 5 }, L: { min: 5, max: 12 }, XL: { min: 12, max: 25 } } },
      { id: "B7.7", name: "Materiales (spec-driven o artístico)", rateClass: "ART", hoursByTier: { S: { min: 0.5, max: 2 }, M: { min: 2, max: 5 }, L: { min: 5, max: 12 }, XL: { min: 12, max: 25 } } },
      { id: "B7.8", name: "LODs + validación final en target", rateClass: "RT", hoursByTier: { S: { min: 0.5, max: 1 }, M: { min: 1, max: 3 }, L: { min: 3, max: 7 }, XL: { min: 7, max: 15 } } },
    ],
  },
  // ---------- Familia C ----------
  {
    id: "C1",
    familyId: "C",
    name: "Embedding con visor embebido (Spline/model-viewer/Sketchfab)",
    subtasks: [
      { id: "C1.1", name: "Selección de visor + licencias + límites", rateClass: "TL", hoursByTier: { S: { min: 0.5, max: 1.5 }, M: { min: 1.5, max: 3 }, L: { min: 2.5, max: 5 } } },
      { id: "C1.2", name: "Adaptación del asset al formato del visor", rateClass: "RT", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 8 }, L: { min: 8, max: 16 } } },
      { id: "C1.3", name: "Integración en página (responsive, lazy load, loading states)", rateClass: "RT", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 6 }, L: { min: 6, max: 12 } } },
      { id: "C1.4", name: "QA cross-browser/mobile", rateClass: "RT", hoursByTier: { S: { min: 0.5, max: 1 }, M: { min: 1, max: 3 }, L: { min: 3, max: 6 } } },
    ],
  },
  {
    id: "C2",
    familyId: "C",
    name: "Integración custom three.js / babylon.js",
    subtasks: [
      { id: "C2.1", name: "Setup proyecto/escena/pipeline de assets (DRACO/KTX2)", rateClass: "RT", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 8 }, L: { min: 8, max: 16 }, XL: { min: 16, max: 30 } } },
      { id: "C2.2", name: "Carga y gestión de assets + presupuesto de memoria", rateClass: "RT", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 6 }, L: { min: 6, max: 14 }, XL: { min: 14, max: 28 } } },
      { id: "C2.3", name: "Iluminación/environment/postprocessing", rateClass: "RT", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 8 }, L: { min: 8, max: 16 }, XL: { min: 16, max: 30 } } },
      { id: "C2.4", name: "Controles/interacción/raycasting", rateClass: "RT", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 10 }, L: { min: 10, max: 20 }, XL: { min: 20, max: 40 } } },
      { id: "C2.5", name: "Performance pass (instancing/culling/profiling)", rateClass: "RT", hoursByTier: { S: { min: 1, max: 2 }, M: { min: 2, max: 6 }, L: { min: 6, max: 14 }, XL: { min: 14, max: 28 } } },
      { id: "C2.6", name: "QA cross-device + hooks de analítica", rateClass: "TL", hoursByTier: { S: { min: 1, max: 2 }, M: { min: 2, max: 4 }, L: { min: 4, max: 8 }, XL: { min: 8, max: 16 } } },
    ],
  },
  {
    id: "C3",
    familyId: "C",
    name: "Unity WebGL embebido",
    subtasks: [
      { id: "C3.1", name: "Config de build WebGL (compresión/memoria)", rateClass: "RT", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 8 }, L: { min: 8, max: 16 } } },
      { id: "C3.2", name: "Loader UX personalizado", rateClass: "RT", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 6 }, L: { min: 6, max: 12 } } },
      { id: "C3.3", name: "Bridge JS↔Unity", rateClass: "RT", hoursByTier: { S: { min: 2, max: 5 }, M: { min: 5, max: 10 }, L: { min: 10, max: 20 }, XL: { min: 20, max: 40 } } },
      { id: "C3.4", name: "Hosting/CDN/caché de build", rateClass: "RT", hoursByTier: { S: { min: 1, max: 2 }, M: { min: 2, max: 5 }, L: { min: 5, max: 10 } } },
    ],
  },
  {
    id: "C4",
    familyId: "C",
    name: "Scrollytelling 3D",
    subtasks: [
      { id: "C4.1", name: "Storyboard técnico + plan de secciones", rateClass: "TL", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 8 }, L: { min: 8, max: 16 }, XL: { min: 16, max: 28 } } },
      { id: "C4.2", name: "Scroll controller + sincronización cámara/escena", rateClass: "RT", hoursByTier: { S: { min: 3, max: 6 }, M: { min: 6, max: 14 }, L: { min: 14, max: 28 }, XL: { min: 28, max: 50 } } },
      { id: "C4.3", name: "Progressive loading/preload UX", rateClass: "RT", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 6 }, L: { min: 6, max: 12 }, XL: { min: 12, max: 20 } } },
      { id: "C4.4", name: "Reduced-motion + accesibilidad fallback", rateClass: "RT", hoursByTier: { S: { min: 1, max: 2 }, M: { min: 2, max: 4 }, L: { min: 4, max: 8 } } },
    ],
  },
  {
    id: "C5",
    familyId: "C",
    name: "Minijuego 3D en web",
    subtasks: [
      { id: "C5.1", name: "GDD breve + mecánica core", rateClass: "TL", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 8 }, L: { min: 8, max: 14 }, XL: { min: 14, max: 24 } } },
      { id: "C5.2", name: "Gameplay loop implementado", rateClass: "RT", hoursByTier: { S: { min: 6, max: 12 }, M: { min: 12, max: 30 }, L: { min: 30, max: 70 }, XL: { min: 70, max: 140 } } },
      { id: "C5.3", name: "HUD/UI + estados de juego", rateClass: "RT", hoursByTier: { S: { min: 2, max: 5 }, M: { min: 5, max: 12 }, L: { min: 12, max: 24 }, XL: { min: 24, max: 45 } } },
      { id: "C5.4", name: "Score/persistencia/share", rateClass: "RT", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 6 }, L: { min: 6, max: 12 }, XL: { min: 12, max: 20 } }, optional: true },
      { id: "C5.5", name: "Controles mobile + game feel/tuning", rateClass: "RT", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 8 }, L: { min: 8, max: 18 }, XL: { min: 18, max: 35 } } },
    ],
  },
  {
    id: "C6",
    familyId: "C",
    name: "Catálogo interactivo / configurador de producto",
    subtasks: [
      { id: "C6.1", name: "Arquitectura de datos (headless CMS o JSON)", rateClass: "RT", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 10 }, L: { min: 10, max: 20 }, XL: { min: 20, max: 40 } } },
      { id: "C6.2", name: "Listado/grid + visor 3D por ítem", rateClass: "RT", hoursByTier: { S: { min: 3, max: 6 }, M: { min: 6, max: 14 }, L: { min: 14, max: 28 }, XL: { min: 28, max: 50 } } },
      { id: "C6.3", name: "Variantes/configurables + cálculo de precio", rateClass: "RT", hoursByTier: { M: { min: 6, max: 14 }, L: { min: 14, max: 30 }, XL: { min: 30, max: 60 } }, optional: true },
      { id: "C6.4", name: "Filtros/búsqueda/comparador", rateClass: "RT", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 10 }, L: { min: 10, max: 20 }, XL: { min: 20, max: 35 } } },
      { id: "C6.5", name: "CTA compra/contacto + e-commerce básica", rateClass: "RT", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 8 }, L: { min: 8, max: 16 }, XL: { min: 16, max: 30 } } },
    ],
  },
  {
    id: "C7",
    familyId: "C",
    name: "Web App 3D completa",
    subtasks: [
      { id: "C7.1", name: "Discovery/spec funcional + wireframes", rateClass: "TL", hoursByTier: { S: { min: 4, max: 8 }, M: { min: 8, max: 16 }, L: { min: 16, max: 32 }, XL: { min: 32, max: 64 } } },
      { id: "C7.2", name: "Sistema visual UI hi-fi", rateClass: "ART", hoursByTier: { S: { min: 4, max: 8 }, M: { min: 8, max: 16 }, L: { min: 16, max: 32 }, XL: { min: 32, max: 64 } } },
      { id: "C7.3", name: "Frontend core", rateClass: "RT", hoursByTier: { S: { min: 8, max: 16 }, M: { min: 16, max: 40 }, L: { min: 40, max: 90 }, XL: { min: 90, max: 180 } } },
      { id: "C7.4", name: "Capa 3D (combina C2)", rateClass: "RT", hoursByTier: { S: { min: 6, max: 12 }, M: { min: 12, max: 30 }, L: { min: 30, max: 70 }, XL: { min: 70, max: 150 } } },
      { id: "C7.5", name: "Backend/API/auth/CMS según alcance", rateClass: "RT", hoursByTier: { M: { min: 10, max: 24 }, L: { min: 24, max: 60 }, XL: { min: 60, max: 140 } }, optional: true },
      { id: "C7.6", name: "Analytics/SEO/performance audit", rateClass: "TL", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 8 }, L: { min: 8, max: 16 }, XL: { min: 16, max: 32 } } },
      { id: "C7.7", name: "Deploy CI + documentación + handoff", rateClass: "TL", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 8 }, L: { min: 8, max: 14 }, XL: { min: 14, max: 24 } } },
    ],
  },
  {
    id: "C8",
    familyId: "C",
    name: "Presentación web / microsite de pitch",
    subtasks: [
      { id: "C8.1", name: "Narrativa + estructura de contenido", rateClass: "TL", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 8 }, L: { min: 8, max: 14 }, XL: { min: 14, max: 22 } } },
      { id: "C8.2", name: "Diseño + build de secciones", rateClass: "RT", hoursByTier: { S: { min: 4, max: 8 }, M: { min: 8, max: 18 }, L: { min: 18, max: 36 }, XL: { min: 36, max: 60 } } },
      { id: "C8.3", name: "Motion/transiciones + responsive pulido", rateClass: "RT", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 10 }, L: { min: 10, max: 20 }, XL: { min: 20, max: 32 } } },
    ],
  },
  // ---------- Familia D ----------
  {
    id: "D1",
    familyId: "D",
    name: "Shot de integración 3D sobre footage real",
    deliverable: "Shot final compuesto (pricing POR SHOT).",
    subtasks: [
      { id: "D1.1", name: "Ingesta + análisis de escena", rateClass: "RT", hoursByTier: { S: { min: 0.5, max: 1.5 }, M: { min: 1.5, max: 4 }, L: { min: 4, max: 8 }, XL: { min: 8, max: 14 } } },
      { id: "D1.2", name: "Camera tracking/solve", rateClass: "RT", hoursByTier: { S: { min: 0.5, max: 1.5 }, M: { min: 1.5, max: 4 }, L: { min: 4, max: 10 }, XL: { min: 10, max: 18 } } },
      { id: "D1.3", name: "Geometría proxy / planos de escena", rateClass: "RT", hoursByTier: { M: { min: 2, max: 5 }, L: { min: 5, max: 12 }, XL: { min: 12, max: 24 } }, optional: true },
      { id: "D1.4", name: "Matching de iluminación", rateClass: "ART", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 8 }, L: { min: 8, max: 18 }, XL: { min: 18, max: 35 } } },
      { id: "D1.5", name: "Integración del modelo + animación del shot", rateClass: "ART", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 10 }, L: { min: 10, max: 22 }, XL: { min: 22, max: 45 } } },
      { id: "D1.6", name: "FX sobre el plano (simulación)", rateClass: "ART", hoursByTier: { M: { min: 4, max: 12 }, L: { min: 12, max: 28 }, XL: { min: 28, max: 55 } }, optional: true },
      { id: "D1.7", name: "Compositing de passes + grain/color match", rateClass: "ART", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 6 }, L: { min: 6, max: 14 }, XL: { min: 14, max: 28 } } },
      { id: "D1.8", name: "QC + entregas de versiones", rateClass: "TL", hoursByTier: { S: { min: 0.5, max: 1 }, M: { min: 1, max: 2 }, L: { min: 2, max: 4 }, XL: { min: 4, max: 8 } } },
    ],
  },
  // ---------- Familia E ----------
  {
    id: "E1",
    familyId: "E",
    name: "Chatbot / asistente IA en sitio web",
    subtasks: [
      { id: "E1.1", name: "Casos de uso, tono, guardrails", rateClass: "TL", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 8 }, L: { min: 8, max: 14 } } },
      { id: "E1.2", name: "Base de conocimiento RAG/embeddings", rateClass: "AI", hoursByTier: { S: { min: 3, max: 6 }, M: { min: 6, max: 14 }, L: { min: 14, max: 30 }, XL: { min: 30, max: 60 } } },
      { id: "E1.3", name: "Prompt engineering + set de pruebas", rateClass: "AI", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 10 }, L: { min: 10, max: 20 }, XL: { min: 20, max: 40 } } },
      { id: "E1.4", name: "Widget UI (streaming/historial/mobile)", rateClass: "RT", hoursByTier: { S: { min: 3, max: 6 }, M: { min: 6, max: 14 }, L: { min: 14, max: 26 }, XL: { min: 26, max: 45 } } },
      { id: "E1.5", name: "Worker/backend + control de costos", rateClass: "AI", hoursByTier: { S: { min: 3, max: 6 }, M: { min: 6, max: 12 }, L: { min: 12, max: 24 }, XL: { min: 24, max: 44 } } },
      { id: "E1.6", name: "Logging/observabilidad básica", rateClass: "AI", hoursByTier: { S: { min: 1, max: 2 }, M: { min: 2, max: 5 }, L: { min: 5, max: 10 }, XL: { min: 10, max: 16 } } },
    ],
  },
  {
    id: "E2",
    familyId: "E",
    name: "Automatización indirecta en sitio",
    subtasks: [
      { id: "E2.1", name: "Mapa del proceso + spec", rateClass: "TL", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 8 }, L: { min: 8, max: 16 }, XL: { min: 16, max: 28 } } },
      { id: "E2.2", name: "Implementación del flujo", rateClass: "AI", hoursByTier: { S: { min: 4, max: 8 }, M: { min: 8, max: 18 }, L: { min: 18, max: 40 }, XL: { min: 40, max: 80 } } },
      { id: "E2.3", name: "UI admin/config interna", rateClass: "RT", hoursByTier: { S: { min: 2, max: 5 }, M: { min: 5, max: 12 }, L: { min: 12, max: 24 }, XL: { min: 24, max: 40 } } },
      { id: "E2.4", name: "Evaluación + iteración con uso real", rateClass: "AI", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 8 }, L: { min: 8, max: 16 }, XL: { min: 16, max: 28 } } },
    ],
  },
  {
    id: "E3",
    familyId: "E",
    name: "IA dentro de empresa/agencia",
    subtasks: [
      { id: "E3.1", name: "Auditoría de procesos (workshops)", rateClass: "TL", hoursByTier: { S: { min: 4, max: 8 }, M: { min: 8, max: 16 }, L: { min: 16, max: 30 }, XL: { min: 30, max: 50 } } },
      { id: "E3.2", name: "Mapa de oportunidades + ROI priorizado", rateClass: "TL", hoursByTier: { S: { min: 2, max: 5 }, M: { min: 5, max: 10 }, L: { min: 10, max: 20 }, XL: { min: 20, max: 35 } } },
      { id: "E3.3", name: "Piloto end-to-end (1 flujo real)", rateClass: "AI", hoursByTier: { S: { min: 8, max: 16 }, M: { min: 16, max: 40 }, L: { min: 40, max: 80 }, XL: { min: 80, max: 160 } } },
      { id: "E3.4", name: "Integraciones con herramientas", rateClass: "AI", hoursByTier: { S: { min: 4, max: 8 }, M: { min: 8, max: 20 }, L: { min: 20, max: 45 }, XL: { min: 45, max: 90 } } },
      { id: "E3.5", name: "Capacitación + docs + handoff", rateClass: "TL", hoursByTier: { S: { min: 2, max: 4 }, M: { min: 4, max: 8 }, L: { min: 8, max: 16 }, XL: { min: 16, max: 28 } } },
      { id: "E3.6", name: "Mejora continua (retainer mensual)", rateClass: "AI", hoursByTier: { S: { min: 4, max: 8 }, M: { min: 8, max: 16 }, L: { min: 16, max: 32 }, XL: { min: 32, max: 64 } } },
    ],
  },
  // ---------- Familia F ----------
  {
    id: "F1",
    familyId: "F",
    name: "Generación de texturas y mapas",
    subtasks: [
      { id: "F1.1", name: "Tileable único", rateClass: "ART", hoursByTier: { S: { min: 1, max: 3 } } },
      { id: "F1.2", name: "Trim sheet", rateClass: "ART", hoursByTier: { M: { min: 3, max: 8 } }, optional: true },
      { id: "F1.3", name: "Librería de materiales", rateClass: "ART", hoursByTier: { L: { min: 8, max: 20 } }, optional: true },
      { id: "F1.4", name: "Sistema procedural", rateClass: "ART", hoursByTier: { XL: { min: 20, max: 45 } }, optional: true },
    ],
  },
  {
    id: "F2",
    familyId: "F",
    name: "FX genérico (partículas/simulación)",
    subtasks: [
      { id: "F2.1", name: "Efecto individual (offline o realtime VFX graph)", rateClass: "ART", hoursByTier: { S: { min: 2, max: 5 }, M: { min: 5, max: 14 }, L: { min: 14, max: 30 }, XL: { min: 30, max: 60 } } },
    ],
    note: "Packs con -15% desde el 3er efecto similar.",
  },
  {
    id: "F3",
    familyId: "F",
    name: "Optimization Doctor — rescate de assets existentes",
    subtasks: [
      { id: "F3.1", name: "Auditoría (reporte draw calls/memoria/tris)", rateClass: "RT", hoursByTier: { S: { min: 1, max: 3 }, M: { min: 3, max: 8 } } },
      { id: "F3.2", name: "Optimización ejecutada", rateClass: "RT", hoursByTier: { S: { min: 2, max: 5 }, M: { min: 5, max: 14 }, L: { min: 14, max: 30 }, XL: { min: 30, max: 70 } } },
    ],
  },
  {
    id: "F4",
    familyId: "F",
    name: "Consultoría técnica / auditorías puntuales",
    subtasks: [
      { id: "F4.1", name: "Auditoría de performance WebGL empaquetada", rateClass: "TL", hoursByTier: { S: { min: 3, max: 6 }, M: { min: 6, max: 12 }, L: { min: 12, max: 24 } } },
    ],
    note: "Hora suelta TL 32-48 USD fuera de paquete.",
  },
];

/** Excedente por pieza para B7 cuando el volumen domina el esfuerzo. */
export const CAD_PIECE_CLASSES: readonly CadPieceClass[] = [
  { id: "primitiva", label: "Primitiva", definition: "extrusiones simples, tornillería, placas", hoursPerPiece: { min: 0.1, max: 0.25 }, rateClass: "RT" },
  { id: "curva", label: "Curva", definition: "superficies curvas/NURBS, fillets complejos", hoursPerPiece: { min: 0.25, max: 0.6 }, rateClass: "RT" },
  { id: "compleja", label: "Compleja/articulada", definition: "engranajes, mecanismos, piezas con movimiento", hoursPerPiece: { min: 0.6, max: 1.5 }, rateClass: "RT" },
];

/** Umbrales de descuento por volumen sobre el excedente por pieza (B7). */
export const CAD_VOLUME_DISCOUNTS: readonly { fromPiece: number; discountPct: number }[] = [
  { fromPiece: 41, discountPct: 10 },
  { fromPiece: 101, discountPct: 20 },
];

/** Anclas del ejemplo "slider de drone" (doc §B7) — placeholders visuales hasta tener assets propios. */
export const DRONE_ANCHORS: readonly { label: string; description: string; tier: "S" | "M" | "L" | "XL"; pieces: { pieceClassId: CadPieceClass["id"]; quantity: number }[] }[] = [
  { label: "Slider mínimo", description: "Drone quad mini estilo juguete, estático, 12k tris, materiales planos", tier: "S", pieces: [{ pieceClassId: "primitiva", quantity: 7 }] },
  { label: "Slider medio", description: "Drone consumer con hélices/tren removibles, texturas PBR estándar", tier: "M", pieces: [{ pieceClassId: "primitiva", quantity: 15 }, { pieceClassId: "curva", quantity: 10 }] },
  { label: "Slider alto", description: "Drone cinematográfico con gimbal articulado, preparado para explosión, LODs", tier: "L", pieces: [{ pieceClassId: "primitiva", quantity: 30 }, { pieceClassId: "curva", quantity: 35 }, { pieceClassId: "compleja", quantity: 15 }] },
  { label: "Slider máximo", description: "Familia/flota con accesorios configurables, pipeline paramétrico", tier: "XL", pieces: [{ pieceClassId: "primitiva", quantity: 70 }, { pieceClassId: "curva", quantity: 55 }, { pieceClassId: "compleja", quantity: 30 }] },
];
