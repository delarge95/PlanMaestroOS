// composeVariant — CV procedural (archivo 19 §19.3). Destino: src/lib/career/composeVariant.ts.
// REGLA DE ORO: cero invención. Todo dato no confirmado es [PLACEHOLDER explícito].
// (Rechaza el cvComposer de Gemini-13 §3: inventaba email, URLs, títulos y métricas.)

export type RoleSlug =
  | 'realtime-3d-unity'
  | 'technical-visualization'
  | 'unity-webgl'
  | 'unity-technical-artist'
  | 'tools-python-automation';

export interface ProjectLite {
  id: string;
  title: string;
  stack: string[];
  bullets: string[]; // solo bullets defendibles (doc-01)
  demoUrl: string; // URL real o '[DEMO_URL_PENDIENTE]'
}

export interface CompanyLite {
  id: string;
  name: string;
  stack: string[];
}

export interface CVVariant {
  role: RoleSlug;
  companyId: string;
  headline: string;
  summary: string;
  projectIds: string[]; // ordenados por fitScore desc
  skillOrder: string[]; // skills de la oferta primero
  placeholders: string[]; // lo que falta confirmar antes de exportar
  fitNote: string;
}

const ROLE_HEADLINES: Record<RoleSlug, string> = {
  'realtime-3d-unity': 'Real-Time 3D Developer (Unity) — [PLACEHOLDER_HEADLINE]',
  'technical-visualization': 'Technical Visualization Engineer — [PLACEHOLDER_HEADLINE]',
  'unity-webgl': 'Unity WebGL Developer — [PLACEHOLDER_HEADLINE]',
  'unity-technical-artist': 'Unity Technical Artist — [PLACEHOLDER_HEADLINE]',
  'tools-python-automation': 'Tools Developer (Python/Automation) — [PLACEHOLDER_HEADLINE]',
};

export function composeVariant(
  company: CompanyLite,
  role: RoleSlug,
  projects: ProjectLite[],
  candidateStack: string[],
  pendingConfirmations: string[],
): CVVariant {
  const norm = (s: string) => s.trim().toLowerCase();
  const coStack = new Set(company.stack.map(norm));

  const ranked = [...projects]
    .map((p) => ({
      p,
      hits: p.stack.filter((s) => coStack.has(norm(s))).length,
    }))
    .sort((a, b) => b.hits - a.hits);

  const skillOrder = [
    ...company.stack.filter((s) => candidateStack.map(norm).includes(norm(s))),
    ...candidateStack.filter((s) => !coStack.has(norm(s))),
  ];

  const top = ranked[0];
  return {
    role,
    companyId: company.id,
    headline: ROLE_HEADLINES[role],
    summary: `[PLACEHOLDER_SUMMARY] Candidato con encaje ${top ? top.hits : 0}/${company.stack.length} en stack para ${company.name} (${role}). Proyectos: ${ranked.map((r) => r.p.title).join(' · ') || '[SIN_PROYECTOS]'}.`,
    projectIds: ranked.map((r) => r.p.id),
    skillOrder,
    placeholders: [...pendingConfirmations],
    fitNote: `Generado proceduralmente. Exportar solo con placeholders resueltos (doc-36).`,
  };
}
