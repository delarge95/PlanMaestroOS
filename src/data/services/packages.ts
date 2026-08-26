import type { ComponentePaquete } from './types';

export interface PackageDef {
  id: string;
  nombreEs: string;
  descripcionEs: string;
  clienteObjetivoEs: string;
  componentes: ComponentePaquete[];
  batchPctAplicable?: boolean;
  entregablesEs?: string[];
}

export const PACKAGES: PackageDef[] = [
  {
    id: 'PK-CAD-WEBGL',
    nombreEs: 'Conversión CAD corporativa → WebGL',
    descripcionEs:
      'Convertimos el catálogo de modelos CAD de tu empresa a assets 3D web optimizados + visor interactivo para explorarlos. Ideal para mostrar maquinaria, productos o herramientas técnicas online.',
    clienteObjetivoEs: 'Empresas ingenieriles/industriales (directo o vía agencia)',
    componentes: [
      { serviceId: 'g1-discovery-scoping', nivel: 'N2' },
      { serviceId: 'f1-cad-webgl-ready', nivel: 'N2', cantidad: 5 },
      { serviceId: 'c2-visor-custom', nivel: 'N2' },
    ],
    batchPctAplicable: true,
    entregablesEs: [
      'Discovery con informe y SOW (50% acreditable)',
      'Hasta 5 modelos CAD convertidos a GLB optimizado',
      'Visor web interactivo con hotspots y controles',
      'Deploy en tu hosting',
    ],
  },
  {
    id: 'PK-CAD-TWIN',
    nombreEs: 'Gemelo visual industrial (piloto)',
    descripcionEs:
      'Asset gemelo desde CAD + capa de datos vivos (mock→real) + dashboard de estado sobre la escena 3D.',
    clienteObjetivoEs: 'Industria manufacturera / energética',
    componentes: [
      { serviceId: 'f1-cad-webgl-ready', nivel: 'N3' },
      { serviceId: 'c3-webapp-3d', nivel: 'N2' },
    ],
    entregablesEs: [
      'Modelo CAD convertido a asset RT optimizado',
      'Conexión a fuente de datos (API/WebSocket)',
      'Dashboard de estado/alertas sobre la escena',
    ],
  },
  {
    id: 'PK-LANZAMIENTO',
    nombreEs: 'Lanzamiento de producto (film + web)',
    descripcionEs:
      'Film de producto renderizado + toma hero integrada sobre foto real + asset RT interactivo embebido en landing page.',
    clienteObjetivoEs: 'Agencias de diseño con clientes consumer/industrial',
    componentes: [
      { serviceId: 'a2-render-animacion', nivel: 'N2' },
      { serviceId: 'd1-compositing-foto', nivel: 'N2' },
      { serviceId: 'b1-asset-rt-estatico', nivel: 'N2' },
      { serviceId: 'c1-visor-embebido', nivel: 'N2' },
    ],
    entregablesEs: [
      'Film de producto animado (~30 s)',
      'Hero image con modelo 3D integrado sobre foto real',
      'Asset 3D interactivo embebido en landing',
    ],
  },
  {
    id: 'PK-MICRO-LOOP',
    nombreEs: 'Pack de micro-loops de producto',
    descripcionEs:
      'Loops cortos (2–3 s) para e-commerce y redes sociales, producidos en lote desde el mismo setup.',
    clienteObjetivoEs: 'E-commerce / marketing digital / redes',
    componentes: [{ serviceId: 'a2-render-animacion', nivel: 'XS', cantidad: 4 }],
    batchPctAplicable: true,
    entregablesEs: [
      '4+ micro-loops de 2–3 s cada uno',
      'Formatos para web y redes (MP4/GIF/WebM)',
      'Setup reutilizable para futuros lotes',
    ],
  },
  {
    id: 'PK-CONFIGURADOR',
    nombreEs: 'Configurador de producto web',
    descripcionEs:
      'Configurador web donde tus clientes personalizan un producto 3D: materiales, colores, medidas. Con export/share de resultados.',
    clienteObjetivoEs: 'Manufactura bajo demanda / mobiliario / retail premium',
    componentes: [
      { serviceId: 'g1-discovery-scoping', nivel: 'N2' },
      { serviceId: 'f1-cad-webgl-ready', nivel: 'N2', cantidad: 3 },
      { serviceId: 'b2-asset-rt-estatico-interactuable', nivel: 'N2' },
      { serviceId: 'c3-webapp-3d', nivel: 'N2' },
    ],
    entregablesEs: [
      'Discovery con SOW',
      'Assets 3D configurables desde CAD',
      'Aplicación web con reglas de negocio',
      'Export/share de configuraciones',
    ],
  },
  {
    id: 'PK-IA-WEB',
    nombreEs: 'Asistente IA para tu sitio web',
    descripcionEs:
      'Chat IA entrenado con tu contenido que responde preguntas de tus visitantes. Incluye RAG, guardrails y widget embebido.',
    clienteObjetivoEs: 'Cualquier empresa con contenido web estructurado',
    componentes: [
      { serviceId: 'g1-discovery-scoping', nivel: 'N2' },
      { serviceId: 'e1-chat-rag-web', nivel: 'N2' },
    ],
    entregablesEs: [
      'Discovery con casos de uso definidos',
      'Asistente IA embebido en tu sitio',
      'RAG entrenado con tu contenido',
      'Casos de prueba documentados',
    ],
  },
];
