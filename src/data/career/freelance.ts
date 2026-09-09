// src/data/career/freelance.ts — Capa freelance B2B para agencias con
// clientes industriales (WebGL / Web 3D).
//
// §0.1: nada inventado. La evidencia de cada offering son proyectos reales
// (links públicos verificados en cvData/portafolio). Los precios NO se
// hardcodean: cada offering ancla al cotizador (/cotizador) por tier de
// complejidad. Los segmentos de agencias son categorías + strings de
// búsqueda — las empresas concretas se investigan con el panel de research.

import { cvBase } from './cv/cvData';

export interface EvidenceLink {
  label: string;
  url: string;
  /** Proyecto del CV que respalda el offering (id en cvBase.projects). */
  projectId: string;
}

export interface FreelanceOffering {
  id: string;
  name: string;
  /** Qué recibe el cliente (agencia) — entregable concreto. */
  deliverable: string;
  /** Para qué perfil de cliente industrial sirve. */
  bestFor: string;
  /** Tier de complejidad en el cotizador: rango típico de este servicio. */
  tierRange: { from: 'XS' | 'S' | 'M' | 'L' | 'XL'; to: 'XS' | 'S' | 'M' | 'L' | 'XL' };
  /** Evidencia real que lo respalda. */
  evidence: EvidenceLink[];
  /** Palabras clave que una agencia buscaría (para el pitch). */
  keywords: string[];
}

/** Links públicos de evidencia (reales, usados ya en el portafolio público). */
const LINKS = {
  twinsightDemo: 'https://delarge95.github.io/WebGL-Thesis-Proposal/',
  github: 'https://github.com/delarge95',
  artstation: 'https://www.artstation.com/alexanderwoodcocksalomon3',
  cotizador: '/cotizador',
} as const;

export const FREELANCE_OFFERINGS: FreelanceOffering[] = [
  {
    id: 'product-viewer-webgl',
    name: 'Visor WebGL de producto / ensamblaje',
    deliverable: 'Visor 3D interactivo en navegador: selección de componentes, despiece, información técnica por pieza, listo para embeber en la web del cliente final.',
    bestFor: 'Agencias con clientes industriales que quieren mostrar maquinaria, equipos o ensamblajes en la web sin descargas ni plugins.',
    tierRange: { from: 'S', to: 'L' },
    evidence: [{ label: 'TwinSight X500 — demo en vivo', url: LINKS.twinsightDemo, projectId: 'twinsight-x500' }],
    keywords: ['WebGL', 'Unity WebGL', 'interactive 3D', 'product visualization', 'assembly viewer'],
  },
  {
    id: 'digital-twin',
    name: 'Gemelo digital ligero (inspección)',
    deliverable: 'Réplica interactiva de un activo físico con estados, inspección visual (corte, modos visuales) y paneles técnicos — versión web de bajo coste frente a un gemelo full-scale.',
    bestFor: 'Clientes industriales con documentación CAD pesada que necesitan entrenamiento, soporte o ventas con el activo en 3D.',
    tierRange: { from: 'M', to: 'XL' },
    evidence: [{ label: 'TwinSight X500 — caso completo', url: LINKS.twinsightDemo, projectId: 'twinsight-x500' }],
    keywords: ['digital twin', 'CAD-to-realtime', 'inspection', 'technical visualization'],
  },
  {
    id: 'web-3d-configurator',
    name: 'Configurador 3D web',
    deliverable: 'Configurador interactivo (nivel de detalle, materiales, variantes) con precio/feedback en vivo — experiencia de cotización visual para el cliente final.',
    bestFor: 'Agencias de productos configurables (industrial, mobiliario, equipamiento) que quieren presupuestos visuales.',
    tierRange: { from: 'M', to: 'XL' },
    evidence: [{ label: 'Cotizador WebGL en producción (este sistema)', url: LINKS.cotizador, projectId: 'twinsight-x500' }],
    keywords: ['3D configurator', 'WebGL', 'interactive quote', 'visual commerce'],
  },
  {
    id: 'cad-optimization',
    name: 'Optimización CAD → real-time',
    deliverable: 'Conversión y optimización de geometría CAD para web/real-time: limpieza, retopología, UVs, baking — medible en reducción de triángulos y rendimiento.',
    bestFor: 'Estudios/agencias que reciben CAD del cliente y no logran que corra en navegador o en tiempo real.',
    tierRange: { from: 'S', to: 'L' },
    evidence: [{ label: 'TwinSight: 6.5M → ~95K triángulos (verificar cifra final)', url: LINKS.twinsightDemo, projectId: 'twinsight-x500' }],
    keywords: ['CAD cleanup', 'retopology', 'mesh optimization', 'Blender', 'real-time'],
  },
  {
    id: 'pipeline-audit',
    name: 'Auditoría de pipeline 3D',
    deliverable: 'Diagnóstico del flujo de assets del cliente (DCC→engine→web) con plan de optimización por escrito y métricas de referencia.',
    bestFor: 'Equipos internos o agencias con cuellos de botella de assets y sin TD dedicado.',
    tierRange: { from: 'XS', to: 'S' },
    evidence: [
      { label: 'GitHub — proyectos y tooling', url: LINKS.github, projectId: 'ara-framework' },
      { label: 'ArtStation — breakdown de pipeline', url: LINKS.artstation, projectId: 'blender-portrait' },
    ],
    keywords: ['3D pipeline', 'technical art', 'optimization audit', 'tooling'],
  },
];

export interface AgencySegment {
  id: string;
  name: string;
  description: string;
  /** Strings de búsqueda listos para LinkedIn/Google — no inventamos empresas. */
  searchStrings: string[];
}

export const AGENCY_SEGMENTS: AgencySegment[] = [
  {
    id: 'industrial-marketing',
    name: 'Agencias de marketing industrial',
    description: 'Agencias B2B con clientes de manufactura/ingeniería que necesitan contenido 3D web para campañas y webs de producto.',
    searchStrings: [
      'industrial marketing agency 3D web',
      'agencia marketing industrial WebGL',
      'B2B industrial web agency 3D configurator',
    ],
  },
  {
    id: 'techviz-studios',
    name: 'Estudios de visualización técnica',
    description: 'Estudios boutique de technical visualization / digital twin que subcontractan sobrecarga de producción.',
    searchStrings: [
      'technical visualization studio unity webgl',
      'digital twin agency freelance',
      'product visualization studio industrial',
    ],
  },
  {
    id: 'engineering-consultancies',
    name: 'Consultoras de ingeniería con unidad digital',
    description: 'Consultoras que venden transformación digital a plantas/fábricas y necesitan la capa visual interactiva.',
    searchStrings: [
      'digital transformation consultancy manufacturing 3D',
      'industrial digital twin consultancy web viewer',
      'industrie 4.0 agentur 3d visualisierung',
    ],
  },
  {
    id: 'configurator-saas',
    name: 'SaaS de configuradores de producto',
    description: 'Plataformas de product configurators que integran partners de contenido 3D.',
    searchStrings: [
      '3D product configurator platform partner',
      'CPQ 3D visualization vendor',
      'configurator SaaS WebGL content partner',
    ],
  },
];

/** Pitch corto por offering — texto derivado de datos (sin inventar resultados). */
export function offeringPitch(o: FreelanceOffering): string {
  const project = cvBase.projects.find((p) => p.id === o.evidence[0]?.projectId);
  const evidenceName = project ? project.name.split(' — ')[0] : 'portafolio';
  return [
    `${o.name}: ${o.deliverable}`,
    ``,
    `Ideal para: ${o.bestFor}`,
    `Complejidad típica: tier ${o.tierRange.from}–${o.tierRange.to} (presupuesto rápido en el cotizador).`,
    `Evidencia: ${evidenceName}${o.evidence[0] && o.evidence[0].url.startsWith('http') ? ` — ${o.evidence[0].url}` : ''}.`,
    `Keywords: ${o.keywords.join(', ')}.`,
  ].join('\n');
}
