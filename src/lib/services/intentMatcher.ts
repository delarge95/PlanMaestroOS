import type { Currency, LevelId, QuoteInput } from '../../data/services';
import { getServiceById } from '../../data/services';

export interface IntentResult {
  /** IDs de servicios detectados en el mensaje */
  serviceIds: string[];
  /** ID de paquete sugerido si el mensaje encaja mejor con un preset */
  packageId?: string;
  /** Preguntas de aclaración que el bot debe hacer */
  clarificaciones: string[];
  /** Nivel sugerido por las palabras clave detectadas */
  nivelSugerido?: LevelId;
  /** Etiquetas humanas para mostrar al cliente */
  etiquetasDetectadas: string[];
}

const SINONIMOS: Array<{ keywords: string[]; serviceId: string; etiqueta: string }> = [
  { keywords: ['cad', 'step', 'iges', 'solidworks', 'fusion', 'inventor', 'ensamblaje', 'piezas', 'tornilleria', 'plano tecnico'], serviceId: 'f1-cad-webgl-ready', etiqueta: 'Conversión CAD → WebGL' },
  { keywords: ['drone', 'dron', 'maquina', 'motor', 'bomba', 'turbina', 'valvula', 'compresor'], serviceId: 'f1-cad-webgl-ready', etiqueta: 'Modelo industrial 3D interactivo' },
  { keywords: ['render', 'renderizar', 'imagen 3d', 'foto 3d', 'estatico', 'key visual', 'hero image'], serviceId: 'a1-render-estatico', etiqueta: 'Render 3D estático' },
  { keywords: ['animacion', 'animar', 'video 3d', 'spot', 'loop', 'micro-loop', 'giro', 'rotacion', 'turntable', 'cinematica'], serviceId: 'a2-render-animacion', etiqueta: 'Animación 3D renderizada' },
  { keywords: ['configurador', 'configurar', 'variantes', 'colores', 'materiales', 'personalizacion'], serviceId: 'c3-webapp-3d', etiqueta: 'Configurador web 3D' },
  { keywords: ['visor', 'visualizador', 'three.js', 'babylon', 'webgl', 'embeber', 'embed', 'navegar modelo'], serviceId: 'c2-visor-custom', etiqueta: 'Visor 3D custom para web' },
  { keywords: ['spline', 'sketchfab', 'model-viewer', 'embebido ligero'], serviceId: 'c1-visor-embebido', etiqueta: 'Visor embebido low-code' },
  { keywords: ['explosionada', 'despiece', 'exploded', 'cutaway', 'seccion', 'armado', 'desarmar'], serviceId: 'b6-mecanicas-especificas', etiqueta: 'Vista explosionada / despiece' },
  { keywords: ['chat', 'chatbot', 'asistente', 'rag', 'inteligencia artificial', 'ia', 'llm', 'bot'], serviceId: 'e1-chat-rag-web', etiqueta: 'Chat IA con RAG en tu sitio' },
  { keywords: ['automatizar', 'automatizacion', 'proceso interno', 'workflow', 'eficiencia', 'productividad'], serviceId: 'e3-ia-procesos-internos', etiqueta: 'Automatización IA interna' },
  { keywords: ['scrollytelling', 'scroll', 'experiencia web', 'landing 3d', 'storytelling'], serviceId: 'c4-scrollytelling', etiqueta: 'Scrollytelling 3D' },
  { keywords: ['minijuego', 'juego', 'gamificacion', 'jugar'], serviceId: 'c6-minijuego', etiqueta: 'Minijuego WebGL' },
  { keywords: ['textura', 'texturas', 'pbr', 'material', 'mapa'], serviceId: 'f2-generacion-texturas', etiqueta: 'Texturas y materiales PBR' },
  { keywords: ['shader', 'toon', 'holograma', 'estilizado', 'npr'], serviceId: 'b5-shaders-estilizados', etiqueta: 'Shaders estilizados' },
  { keywords: ['rig', 'rigging', 'personaje', 'esqueleto', 'deformacion'], serviceId: 'b8-rigging-animacion', etiqueta: 'Rigging y animación' },
  { keywords: ['optimizar', 'pesado', 'lento', 'performance', 'fps', 'draw calls', 'reducir peso'], serviceId: 'b7-optimizacion-rt-ready', etiqueta: 'Optimización de asset 3D' },
  { keywords: ['unity', 'unity webgl', 'build unity'], serviceId: 'c7-unity-webgl', etiqueta: 'Build Unity WebGL optimizado' },
  { keywords: ['gemelo', 'digital twin', 'telemetria', 'sensores', 'datos vivos', 'iot'], serviceId: 'f3-digital-twin', etiqueta: 'Gemelo visual con datos vivos' },
];

const PALABRAS_PRESET: Record<string, string> = {
  'catalogo': 'PK-CAD-WEBGL',
  'catalogo completo': 'PK-CAD-WEBGL',
  'todos mis productos': 'PK-CAD-WEBGL',
  'mis productos': 'PK-CAD-WEBGL',
  'productos en web': 'PK-CAD-WEBGL',
  'conversión': 'PK-CAD-WEBGL',
  'conversion cad': 'PK-CAD-WEBGL',
  'cad a webgl': 'PK-CAD-WEBGL',
  'cad webgl': 'PK-CAD-WEBGL',
  'gemelo digital': 'PK-CAD-TWIN',
  'digital twin': 'PK-CAD-TWIN',
  'lanzar producto': 'PK-LANZAMIENTO',
  'lanzamiento': 'PK-LANZAMIENTO',
  'film + web': 'PK-LANZAMIENTO',
  'micro-loop': 'PK-MICRO-LOOP',
  'micro loops': 'PK-MICRO-LOOP',
};

const NIVEL_KEYWORDS: Array<{ words: string[]; nivel: LevelId }> = [
  { words: ['simple', 'basico', 'rapido', 'economico', 'low poly', 'thumbnail', 'mini'], nivel: 'XS' },
  { words: ['medio', 'estandar', 'normal', 'equilibrado'], nivel: 'N2' },
  { words: ['complejo', 'detallado', 'close-up', 'hero', 'macro', 'premium'], nivel: 'N3' },
  { words: ['muy detallado', 'cinematografico', 'imax', 'fotorrealista', 'high-end'], nivel: 'N4' },
];

export function matchIntent(mensaje: string): IntentResult {
  const lower = mensaje.toLowerCase();
  const detected = new Map<string, string>();
  let packageId: string | undefined;
  let nivelSugerido: LevelId | undefined;

  for (const [phrase, pid] of Object.entries(PALABRAS_PRESET)) {
    if (lower.includes(phrase)) { packageId = pid; break; }
  }

  for (const entry of SINONIMOS) {
    for (const kw of entry.keywords) {
      if (lower.includes(kw)) {
        detected.set(entry.serviceId, entry.etiqueta);
        break;
      }
    }
  }

  for (const nk of NIVEL_KEYWORDS) {
    for (const w of nk.words) {
      if (lower.includes(w)) { nivelSugerido = nk.nivel; break; }
    }
    if (nivelSugerido) break;
  }

  const serviceIds = [...detected.keys()];
  const etiquetas = [...new Set(detected.values())];
  const clarificaciones: string[] = [];

  if (serviceIds.length === 0 && !packageId) {
    clarificaciones.push('No estoy seguro de qué servicio encaja. ¿Puedes contarme más? Por ejemplo: ¿tienes archivos CAD?, ¿es para una página web?, ¿necesitas un video o imagen?',);
  } else if (serviceIds.length > 3) {
    clarificaciones.push('Detecté varios servicios posibles. Te recomiendo empezar por un paquete o usar el cotizador paso a paso para afinar.');
  }
  if (serviceIds.some((id) => id.startsWith('e')) && !lower.includes('byok') && !lower.includes('api key')) {
    clarificaciones.push('Los servicios de IA funcionan con BYOK: tú provees la cuenta del proveedor de IA y nosotros la integración. El consumo es aparte.');
  }
  if ((serviceIds.includes('f1-cad-webgl-ready')) && !lower.includes('piezas') && !lower.includes('cuantas')) {
    clarificaciones.push('Para afinar la estimación: ¿aproximadamente cuántas piezas tiene el ensamblaje CAD?');
  }

  return { serviceIds, packageId, clarificaciones, nivelSugerido, etiquetasDetectadas: etiquetas };
}

export function generarRespuestaBot(intent: IntentResult): {
  texto: string;
  quoteInput?: QuoteInput;
  sugerencias?: string[];
} {
  if (intent.packageId && intent.serviceIds.length === 0) {
    return {
      texto: `Perfecto, eso encaja con nuestro paquete **${intent.packageId}**. Te lo muestro en el cotizador con los valores por defecto. Puedes ajustar los sliders ahí.`,
      quoteInput: { kind: 'package', packageId: intent.packageId, currency: 'USD' },
      sugerencias: ['Ver desglose', 'Ajustar cantidad'],
    };
  }

  if (intent.serviceIds.length === 1) {
    const svc = getServiceById(intent.serviceIds[0]);
    if (!svc) return { texto: 'Hmm, no encontré ese servicio. ¿Puedes reformular?' };
    const level: LevelId = intent.nivelSugerido ?? 'N2';
    return {
      texto: `Eso corresponde a **${svc.nameEs}**. Con nivel ${level}, te preparo una estimación. Ajusta los detalles en el cotizador si quieres afinar.`,
      quoteInput: { kind: 'service', serviceId: svc.id, level, currency: 'USD' },
      sugerencias: intent.clarificaciones,
    };
  }

  if (intent.serviceIds.length > 1) {
    const names = intent.etiquetasDetectadas.join(', ');
    return {
      texto: `Detecté ${intent.etiquetasDetectadas.length > 1 ? 'varios servicios' : 'un servicio'}: ${names}. Te sugiero usar el wizard desde cero para combinarlos, o elegir un paquete si aplica.`,
      sugerencias: intent.clarificaciones,
    };
  }

  return {
    texto:
      'Hola 👋 Soy el asistente de AG-SERV. Cuéntame qué necesitas — por ejemplo: "quiero convertir mis archivos CAD a WebGL", "necesito renders de mi producto" o "busco un configurador web". También puedes usar los presets o el cotizador paso a paso.',
    sugerencias: [
      'Quiero convertir archivos CAD a 3D web',
      'Necesito renders de mi producto',
      'Busco un configurador web 3D',
    ],
  };
}
