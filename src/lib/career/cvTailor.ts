// src/lib/career/cvTailor.ts — Personalización automática del CV por aplicación.
//
// Principio: la VARIANTE (doc-17) da el enfoque base; el ESTUDIO de la empresa
// (CompanyResearch) y el rol de la aplicación ajustan keywords/énfasis; el
// usuario puede sobreescribir cualquier campo (IA/automatización = borrador,
// decisión humana final, §0.3).
//
// Puro y determinista: sin DOM, sin red — testeable.

import type { CvVariant } from '../../data/career/cv/cvTypes';
import { cvVariants } from '../../data/career/cv/cvVariants';
import type { CompanyResearch } from '../../data/career/careerContracts';

/** Kit de aplicación: personalización de CV + brief de portafolio por aplicación. */
export interface ApplicationKit {
  applicationId: string;
  /** Variante elegida (sugerida automáticamente o cambiada a mano). */
  variantId: string;
  /** Origen de la variante: match explícito de rol, parcial, o fallback. */
  variantConfidence: 'explicit' | 'partial' | 'fallback';
  /** Resumen que reemplaza al de la variante (edición humana). */
  summaryOverride?: string;
  /** Keywords extra (del estudio/oferta) — se fusionan con las de la variante. */
  extraKeywords: string[];
  /** Skills a enfatizar por delante (p.ej. extraídas del stack de la empresa). */
  emphasisExtra: string[];
  /** Proyecto que encabeza el CV (por defecto, el orden de la variante). */
  leadProjectId?: string;
  /** Frase de apertura del brief de portafolio para ESTA empresa. */
  briefLead?: string;
  /** Ángulo por proyecto (projectId → 1 frase: por qué importa a esta empresa). */
  briefAngles: Record<string, string>;
  updatedAtIso: string;
}

/** Diccionario técnico reconocible en textos de ofertas/estudios (minúsculas). */
export const TECH_KEYWORDS: readonly string[] = [
  'unity', 'unreal', 'unreal engine', 'c#', 'c++', 'python', 'typescript', 'javascript',
  'react', 'three.js', 'webgl', 'webgpu', 'wasm', 'webassembly', 'blender', 'houdini',
  'maya', 'zbrush', 'substance', 'marmoset', 'rizomuv', 'cad', 'solidworks', 'fusion 360',
  'digital twin', 'simulation', 'xr', 'ar', 'vr', 'opengl', 'vulkan', 'directx',
  'shader', 'shader graph', 'urp', 'hdrp', 'retopology', 'uv', 'baking', 'optimization',
  'langgraph', 'langchain', 'fastapi', 'redis', 'postgresql', 'docker', 'git',
  'technical art', 'technical artist', 'pipeline', 'webgl deployment', 'runtime ui',
  'usability', 'sus', 'nasa-tlx', 'lumen', 'nanite', 'procedural', 'automation',
  'interactive 3d', 'product visualization', 'configurator', 'assembly', 'inspection',
];

const normalize = (s: string) => s.toLowerCase().replace(/\s+/g, ' ').trim();

/**
 * Extrae keywords técnicas conocidas de un texto libre (stack, oferta, notas).
 * Determinista: solo vocabulario del diccionario — nada inventado.
 */
export function extractTechKeywords(text: string): string[] {
  const t = ` ${normalize(text)} `;
  const found: string[] = [];
  for (const kw of TECH_KEYWORDS) {
    // Ordenar por longitud evita falsos positivos por solapamiento ('urp' dentro de otra palabra).
    const needle = normalize(kw);
    const boundary = new RegExp(`(^|[\\s,;:(/|])${escapeRegExp(needle)}([\\s,;:)/|]|$)`);
    if (boundary.test(t) && !found.includes(kw)) found.push(kw);
  }
  return found;
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Sugiere la variante de CV para un título de rol.
 * - explicit: el título contiene un targetRole de la variante (normalizado).
 * - partial: keywords compartidas entre el título y la variante.
 * - fallback: realtime-unity (variante principal del doc-17).
 */
export function suggestVariant(roleTitle: string): { variantId: string; confidence: 'explicit' | 'partial' | 'fallback' } {
  const title = normalize(roleTitle);
  if (!title) return { variantId: 'realtime-unity', confidence: 'fallback' };

  // 1) Match explícito contra targetRoles (contención en cualquier dirección).
  for (const v of cvVariants) {
    for (const role of v.targetRoles) {
      const r = normalize(role);
      if (title.includes(r) || r.includes(title)) {
        return { variantId: v.id, confidence: 'explicit' };
      }
    }
  }

  // 2) Score por keywords compartidas (empate ⇒ gana la variante MÁS
  //    específica: evaluada después en el orden de cvVariants, que va de
  //    la ruta principal a las especializadas).
  const titleKeywords = new Set(extractTechKeywords(roleTitle));
  let best: { variantId: string; score: number } | null = null;
  for (const v of cvVariants) {
    const vkw = new Set(v.keywords.map(normalize));
    let score = 0;
    for (const kw of titleKeywords) {
      if (vkw.has(kw)) score += 1;
      // Crédito parcial: keyword de la variante aparece dentro del título.
      else if (v.keywords.some((vk) => title.includes(normalize(vk)))) score += 0.5;
    }
    if (score > 0 && (!best || score >= best.score)) best = { variantId: v.id, score };
  }
  if (best) return { variantId: best.variantId, confidence: 'partial' };

  return { variantId: 'realtime-unity', confidence: 'fallback' };
}

/**
 * Borrador automático de tailoring desde la investigación de la empresa:
 * stack → énfasis; stack+productos+hiring → keywords extra.
 * Devuelve SOLO lo derivable del research (el usuario funde/ajusta encima).
 */
export function autoTailorFromResearch(research: CompanyResearch | undefined): {
  extraKeywords: string[];
  emphasisExtra: string[];
} {
  if (!research) return { extraKeywords: [], emphasisExtra: [] };
  const haystack = [research.stack, research.products, research.hiringProcess, research.tailoringNotes]
    .filter(Boolean)
    .join(' · ');
  const keywords = extractTechKeywords(haystack);
  // El stack manda como énfasis; keywords del resto completan.
  const emphasis = extractTechKeywords(research.stack);
  return {
    extraKeywords: [...new Set(keywords)],
    emphasisExtra: [...new Set(emphasis)],
  };
}

/**
 * Variante efectiva = variante base + overrides del kit (+ énfasis del study).
 * Determinista: mismo input ⇒ mismo output. No muta los originales.
 */
export function applyTailoring(
  variant: CvVariant,
  kit: ApplicationKit | undefined,
  research?: CompanyResearch,
): CvVariant {
  if (!kit && !research) return variant;

  const auto = autoTailorFromResearch(research);
  const extraKeywords = [...new Set([...(kit?.extraKeywords ?? []), ...auto.extraKeywords])];
  const emphasis = [...new Set([...(kit?.emphasisExtra ?? []), ...auto.emphasisExtra])];

  // Orden de proyectos: leadProjectId primero, luego el de la variante.
  let projectOrder = variant.projectOrder;
  if (kit?.leadProjectId) {
    const rest = (variant.projectOrder ?? []).filter((id) => id !== kit.leadProjectId);
    projectOrder = [kit.leadProjectId, ...rest];
  }

  return {
    ...variant,
    summary: kit?.summaryOverride?.trim() || variant.summary,
    skillsEmphasis: [...new Set([...emphasis, ...variant.skillsEmphasis])],
    keywords: [...new Set([...variant.keywords, ...extraKeywords])],
    projectOrder,
  };
}

/** Crea un kit vacío (o con sugerencia automática) para una aplicación. */
export function createDraftKit(
  applicationId: string,
  roleTitle: string,
  research?: CompanyResearch,
): ApplicationKit {
  const suggestion = suggestVariant(roleTitle);
  const auto = autoTailorFromResearch(research);
  return {
    applicationId,
    variantId: suggestion.variantId,
    variantConfidence: suggestion.confidence,
    extraKeywords: auto.extraKeywords,
    emphasisExtra: auto.emphasisExtra,
    briefAngles: {},
    updatedAtIso: new Date().toISOString().slice(0, 10),
  };
}
