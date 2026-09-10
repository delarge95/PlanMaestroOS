// src/data/career/serviceSheet.ts — Hoja de oferta de servicios (one-pager B2B).
//
// Hermana del generador de CVs: misma disciplina §0.1 (datos reales, notas
// editoriales fuera del documento impreso) y mismo flujo print→PDF.
// Usos: muestra de producto temporal + puerta de entrada al cotizador
// interactivo y a la demo TwinSight X500.

import { FREELANCE_OFFERINGS, type FreelanceOffering } from './freelance';
import { cvBase } from './cv/cvData';

/** Links públicos del ecosistema (URLs reales verificables). */
export const SERVICE_LINKS = {
  /** Demo en vivo del visor WebGL (portafolio público). */
  twinsightDemo: 'https://delarge95.github.io/WebGL-Thesis-Proposal/',
  /** Cotizador interactivo web (deploy real del usuario — dominio propio). */
  cotizador: 'https://services.alexwoodcock.me/cotizador/',
  linkedin: 'https://www.linkedin.com/in/alexander-woodcock-0132382a6/',
  github: 'https://github.com/delarge95',
  artstation: 'https://www.artstation.com/alexanderwoodcocksalomon3',
} as const;

export interface ServiceSheetData {
  fullName: string;
  title: string;
  location: string;
  /** Frase de posicionamiento (una línea, B2B). */
  tagline: string;
  offerings: Array<{ name: string; deliverable: string; tier: string }>;
  evidenceTitle: string;
  evidenceBullets: string[];
  /** Bloque de llamada a la acción con links. */
  cta: { cotizador: string; twinsight: string };
  links: Array<{ label: string; url: string }>;
}

/** Versión corta del deliverable (1 línea) para la hoja. */
function shortDeliverable(o: FreelanceOffering): string {
  const first = o.deliverable.split(/[—.]/)[0].trim();
  return first.length > 10 ? first : o.deliverable.slice(0, 90);
}

export function buildServiceSheet(highlightOfferingId?: string): ServiceSheetData {
  const sorted = highlightOfferingId
    ? [...FREELANCE_OFFERINGS].sort((a, b) => (a.id === highlightOfferingId ? -1 : b.id === highlightOfferingId ? 1 : 0))
    : FREELANCE_OFFERINGS;

  return {
    fullName: cvBase.profile.fullName,
    title: 'Real-Time 3D Developer · WebGL & Technical Visualization',
    location: 'Colombia · Remote contractor/B2B',
    tagline:
      'Interactive WebGL experiences for industrial products: viewers, digital twins and web 3D configurators — from raw CAD to browser-ready.',
    offerings: sorted.map((o) => ({
      name: o.name,
      deliverable: shortDeliverable(o),
      tier: `${o.tierRange.from}–${o.tierRange.to}`,
    })),
    evidenceTitle: 'TwinSight X500 — Unity WebGL technical visualization',
    evidenceBullets: [
      'Browser-based drone assembly inspection: component selection, exploded view, cross-section, visual modes and technical UI.',
      'CAD-to-realtime pipeline: CAD-derived geometry optimized from over 6.5M to ~95,617 triangles. [verify final number]',
      'Validated with SUS, NASA-TLX Raw and Think-Aloud usability methods.',
    ],
    cta: { cotizador: SERVICE_LINKS.cotizador, twinsight: SERVICE_LINKS.twinsightDemo },
    links: [
      { label: 'LinkedIn', url: SERVICE_LINKS.linkedin },
      { label: 'GitHub', url: SERVICE_LINKS.github },
      { label: 'ArtStation', url: SERVICE_LINKS.artstation },
    ],
  };
}
