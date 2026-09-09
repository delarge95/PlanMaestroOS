// src/lib/career/cvRender.ts — Render puro del CV (markdown ATS-friendly).
//
// Determinista: (base, variant, opciones) → string. Sin DOM, testeable.
// Estructura fiel al doc-17 §3/§14: una página, secciones en orden fijo,
// bullets de la variante cuando existen (fallback a los base del proyecto).

import type { CvBaseData, CvVariant } from '../../data/career/cv/cvTypes';

export interface CvRenderOptions {
  /** Incluir el proyecto opcional (ai-news-aggregator) — doc §3: solo si es demostrable. */
  includeOptionalProjects?: boolean;
  /** Incluir la línea de keywords (útil para páginas que parsean texto). */
  includeKeywords?: boolean;
  /** Incluir training no certificado (doc §12: wording obligatorio). */
  includeTraining?: boolean;
}

/**
 * Notas editoriales del doc-17 que NUNCA van al CV final — son instrucciones
 * para el autor, no contenido («[verify final number]», «[include only
 * if…]», «Expected [date]», «[adjust…]»). El aviso pendiente vive en la UI
 * de la app (CvGenerator), no en el documento exportado.
 */
const EDITORIAL_NOTE_RE = /\s*\[(?:verify[^\]]*|include only[^\]]*|adjust[^\]]*|date|por confirmar[^\]]*)\]/gi;

/** Detecta cuántas notas editoriales quedan en un texto (para el aviso de la UI). */
export function countEditorialNotes(text: string): number {
  return (text.match(EDITORIAL_NOTE_RE) ?? []).length;
}

/** Limpia las notas editoriales del doc-17 para render/export (CV limpio). */
export function stripEditorialNotes(text: string): string {
  return text
    .replace(EDITORIAL_NOTE_RE, '')
    // «Expected [date]» → «Expected graduation» (sin inventar fecha; la UI
    // recuerda confirmarla antes de enviar).
    .replace(/\bExpected\s*$/i, 'Expected graduation')
    .replace(/\s{2,}/g, ' ')
    .trimEnd();
}

/** Ordena proyectos: orden de la variante primero, luego el resto base. */
function orderedProjects(base: CvBaseData, variant: CvVariant, opts: CvRenderOptions) {
  const included = base.projects.filter((p) => !p.optional || opts.includeOptionalProjects);
  const order = variant.projectOrder ?? included.map((p) => p.id);
  const inOrder = order
    .map((id) => included.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const rest = included.filter((p) => !order.includes(p.id));
  return [...inOrder, ...rest];
}

export function renderCvMarkdown(
  base: CvBaseData,
  variant: CvVariant,
  options: CvRenderOptions = {},
): string {
  const opts: Required<CvRenderOptions> = {
    includeOptionalProjects: false,
    includeKeywords: false,
    includeTraining: false,
    ...options,
  };
  const lines: string[] = [];

  // Header
  lines.push(`# ${base.profile.fullName}`);
  lines.push(`## ${variant.headerTitle}`);
  lines.push('');
  lines.push(stripEditorialNotes(base.profile.location));
  const links = base.profile.links
    .filter((l) => !l.needsVerification || l.url)
    .map((l) => `${l.label}: ${l.url}`)
    .join(' | ');
  lines.push(links);
  lines.push('');

  // Summary (la de la variante; fallback a la base)
  lines.push('## Professional Summary');
  lines.push('');
  lines.push(stripEditorialNotes(variant.summary || base.summaryBase));
  lines.push('');

  // Skills: énfasis de la variante primero, luego grupos base
  lines.push('## Technical Skills');
  lines.push('');
  if (variant.skillsEmphasis.length > 0) {
    lines.push(`Emphasis: ${variant.skillsEmphasis.join(', ')}`);
    lines.push('');
  }
  for (const g of base.skills) {
    lines.push(`${g.group}: ${g.items.join(', ')}`);
  }
  lines.push('');

  // Projects con bullets de la variante (fallback a base)
  lines.push('## Selected Projects');
  lines.push('');
  for (const p of orderedProjects(base, variant, opts)) {
    const bullets = variant.projectBullets[p.id] ?? p.bullets;
    lines.push(`### ${p.name}`);
    lines.push('');
    lines.push(stripEditorialNotes(p.meta));
    lines.push('');
    for (const b of bullets) lines.push(`- ${stripEditorialNotes(b)}`);
    lines.push('');
  }

  // Experience
  lines.push('## Experience');
  lines.push('');
  for (const e of base.experience) {
    lines.push(`### ${e.role}`);
    lines.push('');
    lines.push(stripEditorialNotes(`${e.org} | ${e.period}`));
    lines.push('');
    for (const b of e.bullets) lines.push(`- ${stripEditorialNotes(b)}`);
    lines.push('');
  }

  // Education
  lines.push('## Education');
  lines.push('');
  for (const ed of base.education) {
    lines.push(`### ${ed.institution}`);
    lines.push('');
    lines.push(stripEditorialNotes(ed.period ? `${ed.degree} | ${ed.period}` : ed.degree));
    lines.push('');
    for (const b of ed.bullets) lines.push(`- ${stripEditorialNotes(b)}`);
    lines.push('');
  }

  // Languages
  lines.push('## Languages');
  lines.push('');
  for (const l of base.languages) lines.push(`- ${l.language} — ${stripEditorialNotes(l.level)}`);
  lines.push('');

  // Availability
  lines.push('## Availability');
  lines.push('');
  lines.push(stripEditorialNotes(base.profile.availability));
  lines.push('');

  if (opts.includeTraining && base.training.length > 0) {
    lines.push('## Courses and Training');
    lines.push('');
    lines.push('Selected non-certified training:');
    lines.push('');
    for (const t of base.training) lines.push(`- ${stripEditorialNotes(t.name)}`);
    if (base.training.some((t) => t.wordingNote)) {
      lines.push('');
      lines.push('Non-certified training used for skill development and portfolio production.');
    }
    lines.push('');
  }

  if (opts.includeKeywords && variant.keywords.length > 0) {
    lines.push('---');
    lines.push('');
    lines.push(`Keywords: ${variant.keywords.join(', ')}`);
    lines.push('');
  }

  return lines.join('\n');
}
