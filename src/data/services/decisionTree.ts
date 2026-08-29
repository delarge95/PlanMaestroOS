/**
 * decisionTree.ts — Árbol de decisión del cotizador guiado.
 * Principio: preguntar LO QUE QUIERE LOGRAR (no técnico) → ramificar →
 * detalles técnicos SOLO en opciones avanzadas (expandible).
 */

export interface TreeOption {
  id: string;
  /** Texto que ve el cliente (NO técnico). */
  label: string;
  desc?: string;
  icon?: string;
  /** Servicios del catálogo que mapean a esta opción. */
  serviceIds?: string[];
  /** Preguntas del siguiente nivel (si hay más ramas). */
  children?: TreeQuestion[];
}

export interface TreeQuestion {
  id: string;
  /** Pregunta en lenguaje humano. */
  question: string;
  help?: string;
  /** Tipo de control: cards, slider, toggle, select. */
  type: 'cards' | 'slider' | 'toggle' | 'select';
  /** Opciones si es cards/select. */
  options?: TreeOption[];
  /** Configuración si es slider. */
  slider?: {
    min: number; max: number; step: number; unit: string;
    /** Preview 3D: qué modelo mostrar que cambie con el valor. */
    preview?: 'detail-level' | 'piece-count' | 'complexity';
    /** Mapeo valor → tier. */
    tierMap?: Array<{ max: number; tier: string }>;
  };
  /** Si es expandible como "opciones avanzadas". */
  advanced?: boolean;
}

export interface TreeBranch {
  id: string;
  title: string;
  subtitle: string;
  questions: TreeQuestion[];
}

// ═══════════════════════════════════════════════════════════════
// NIVEL 1: ¿Qué quieres lograr?
// ═══════════════════════════════════════════════════════════════
export const ROOT_OPTIONS: TreeOption[] = [
  {
    id: 'web-3d',
    label: 'Una web con 3D',
    desc: 'Quiero que mi página web tenga elementos 3D interactivos',
    icon: '🌐',
  },
  {
    id: 'video-anim',
    label: 'Un video o animación',
    desc: 'Necesito un video 3D, animación de producto o VFX',
    icon: '🎬',
  },
  {
    id: 'imagenes',
    label: 'Imágenes de producto',
    desc: 'Renders fotorrealistas para e-commerce, print o marketing',
    icon: '📸',
  },
  {
    id: 'ia',
    label: 'Inteligencia artificial',
    desc: 'Chatbot, automatización o integración de IA en mi negocio',
    icon: '🤖',
  },
  {
    id: 'no-se',
    label: 'No estoy seguro',
    desc: 'Muéstrame el catálogo completo con filtros',
    icon: '✨',
  },
];

// ═══════════════════════════════════════════════════════════════
// RAMA: Web con 3D → ¿Qué tipo de experiencia?
// ═══════════════════════════════════════════════════════════════
export const WEB3D_BRANCHES: Record<string, TreeBranch> = {
  'ver-modelo': {
    id: 'ver-modelo',
    title: 'Mostrar un modelo 3D en tu web',
    subtitle: 'El visitante puede rotarlo y verlo desde todos los ángulos, sin instalar nada.',
    questions: [
      {
        id: 'modelo-existente',
        question: '¿Ya tienes el modelo 3D de tu producto?',
        type: 'cards',
        options: [
          {
            id: 'si-tengo',
            label: 'Sí, lo tengo',
            desc: 'Tengo el archivo en algún formato (CAD, Blender, STL, etc.)',
          },
          {
            id: 'no-crear',
            label: 'No, hay que crearlo',
            desc: 'Necesito que-modeles mi producto desde cero o desde referencias',
          },
        ],
      },
      {
        id: 'nivel-detalle',
        question: '¿Qué tan detallado necesitas el modelo?',
        help: 'Más detalle = más horas de modelado = más costo. Para la web, medio suele ser suficiente.',
        type: 'slider',
        slider: {
          min: 1, max: 3, step: 1, unit: 'nivel',
          preview: 'detail-level',
          tierMap: [
            { max: 1, tier: 'XS' },
            { max: 2, tier: 'M' },
            { max: 3, tier: 'XL' },
          ],
        },
      },
      {
        id: 'cantidad-piezas',
        question: '¿Cuántas piezas o partes tiene tu producto?',
        help: 'Un producto de una pieza es más simple que un ensamblaje de 20 partes.',
        type: 'slider',
        slider: {
          min: 1, max: 30, step: 1, unit: 'piezas',
          preview: 'piece-count',
          tierMap: [
            { max: 5, tier: 'S' },
            { max: 15, tier: 'M' },
            { max: 30, tier: 'XL' },
          ],
        },
      },
      // ── Opciones avanzadas (expandibles) ──
      {
        id: 'ops-avanzadas',
        question: 'Opciones técnicas (opcional)',
        help: 'Si no sabes qué poner, déjalo como está — usamos valores óptimos para web.',
        type: 'toggle',
        advanced: true,
      },
    ],
  },
  'interactivo': {
    id: 'interactivo',
    title: 'Experiencia 3D interactiva',
    subtitle: 'El visitante puede hacer cosas: cambiar colores, abrir partes, configurar el producto.',
    questions: [
      {
        id: 'tipo-interactividad',
        question: '¿Qué quieres que pueda hacer el visitante?',
        type: 'cards',
        options: [
          { id: 'rotar', label: 'Solo rotarlo y verlo', desc: 'Vista 360° sin más interacción' },
          { id: 'hotspots', label: 'Ver información de partes', desc: 'Click en una pieza → mostrar nombre, specs o descripción' },
          { id: 'configurar', label: 'Configurar el producto', desc: 'Cambiar colores, materiales, tamaños, opciones' },
          { id: 'desarmar', label: 'Desarmarlo / explorarlo', desc: 'Vista explosionada, abrir/cerrar partes, cortes' },
        ],
      },
      {
        id: 'plataforma',
        question: '¿Dónde lo vas a usar?',
        type: 'select',
        options: [
          { id: 'mi-web', label: 'Mi página web actual' },
          { id: 'landing', label: 'Una landing page nueva' },
          { id: 'feria', label: 'Pantalla táctil en feria/evento' },
          { id: 'app', label: 'Aplicación web completa' },
        ],
      },
    ],
  },
  'scrollytelling': {
    id: 'scrollytelling',
    title: 'Scrollytelling con 3D',
    subtitle: 'La historia de tu producto se cuenta al hacer scroll — el 3D anima y cambia.',
    questions: [
      {
        id: 'escenas',
        question: '¿Cuántas escenas o momentos tiene tu historia?',
        help: 'Cada escena es una "parada" del scroll donde el 3D muestra algo diferente.',
        type: 'slider',
        slider: {
          min: 3, max: 10, step: 1, unit: 'escenas',
          tierMap: [
            { max: 4, tier: 'S' },
            { max: 7, tier: 'L' },
            { max: 10, tier: 'XL' },
          ],
        },
      },
      {
        id: 'modelo-para-scroll',
        question: '¿Ya tienes el modelo 3D?',
        type: 'cards',
        options: [
          { id: 'si', label: 'Sí', desc: 'Tengo el archivo listo' },
          { id: 'no', label: 'No', desc: 'Hay que modelarlo' },
        ],
      },
    ],
  },
  'web-app': {
    id: 'web-app',
    title: 'Aplicación web 3D completa',
    subtitle: 'Una herramienta que usa 3D como interfaz: configuradores, visores técnicos, herramientas.',
    questions: [
      {
        id: 'tipo-app',
        question: '¿Qué tipo de aplicación necesitas?',
        type: 'cards',
        options: [
          { id: 'configurador', label: 'Configurador de producto', desc: 'El cliente personaliza y ve el resultado en 3D' },
          { id: 'catalogo', label: 'Catálogo 3D interactivo', desc: 'Lista de productos navegables en 3D' },
          { id: 'herramienta', label: 'Herramienta técnica', desc: 'Visor CAD, simulador, herramienta de diseño' },
          { id: 'juego', label: 'Minijuego o experiencia', desc: 'Algo lúdico para engagement' },
        ],
      },
    ],
  },
};

// ═══════════════════════════════════════════════════════════════
// NIVEL 2 (Web con 3D): ¿Qué tipo de experiencia?
// ═══════════════════════════════════════════════════════════════
export const WEB3D_LEVEL2: TreeOption[] = [
  {
    id: 'ver-modelo',
    label: 'Solo mostrarlo',
    desc: 'Un modelo 3D que se puede rotar en la web, sin más interacción',
    icon: '👁️',
  },
  {
    id: 'interactivo',
    label: 'Que sea interactivo',
    desc: 'Cambiar colores, ver información de partes, configurar el producto',
    icon: '🎮',
  },
  {
    id: 'scrollytelling',
    label: 'Contar una historia',
    desc: 'El 3D anima y cambia mientras el usuario hace scroll',
    icon: '📖',
  },
  {
    id: 'web-app',
    label: 'Aplicación completa',
    desc: 'Una herramienta web que usa 3D como interfaz principal',
    icon: '🖥️',
  },
];
