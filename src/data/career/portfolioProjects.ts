// src/data/career/portfolioProjects.ts - Datos de Proyectos de Portafolio y Simuladores (AG-PORT)
// Real projects only, aligned with the public site (src/data/projects.ts) and the
// order recommended by doc-29C §19.2. No invented tech or metrics (PLAN_MULTIAGENTE §3.7).

export interface PortfolioProjectItem {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  tags: string[];
  summary: string;
  order: number;
  /** Portfolio positioning note with source citation. */
  positioning: string;
  source: string;
}

export const initialPortfolioProjects: PortfolioProjectItem[] = [
  {
    id: 'twinsight-x500',
    title: 'TwinSight X500: Unity WebGL Technical Visualization',
    category: 'Technical Art / Real-Time 3D',
    coverImage: '/assets/twinsight_cover.png',
    tags: ['Unity', 'C#', 'WebGL', 'URP', 'Blender', 'CAD Optimization'],
    summary: 'Visor interactivo Unity WebGL para inspección de ensamblaje del dron Holybro X500 V2: selección de componentes, exploded view, cross-section y modos visuales.',
    order: 1,
    positioning: 'Proyecto insignia — siempre primero en cada plataforma.',
    source: 'doc-29C §19.2'
  },
  {
    id: 'ara-framework',
    title: 'ARA Framework: AI Research Assistant',
    category: 'AI Tooling / Fullstack',
    coverImage: '/assets/ara_cover.png',
    tags: ['Python', 'LangGraph', 'AI Tooling'],
    summary: 'Framework de investigación multi-agente y automatización de herramientas de investigación.',
    order: 2,
    positioning: 'Proyecto #2 del portafolio (señal de tooling e IA).',
    source: 'doc-29C §19.2; doc-09'
  },
  {
    id: 'human-character-pipeline',
    title: 'Blender Portrait: Character Pipeline Study',
    category: '3D / Character Art',
    coverImage: '/assets/human_cover.png',
    tags: ['Blender', 'Sculpting', 'Grooming', 'Lookdev'],
    summary: 'Estudio de retrato hiperrealista: escultura, topología, UVs, materiales de piel y grooming con contexto CG Cookie.',
    order: 3,
    positioning: 'Secundario — evidencia de apoyo de fundamentos 3D, nunca prueba principal para roles Unity.',
    source: 'doc-29C §9.1, §19.2'
  },
  {
    id: 'plan-maestro-os',
    title: 'Plan Maestro OS: Personal Operating System',
    category: 'Fullstack Web App',
    coverImage: '/assets/plan_maestro_cover.png',
    tags: ['Astro', 'React', 'TypeScript', 'Zustand'],
    summary: 'Sistema operativo personal/profesional con motor de reglas determinista, RAG local y persistencia IndexedDB.',
    order: 4,
    positioning: 'Proyecto de apoyo — prueba de ingeniería de software fullstack (este mismo sitio/app).',
    source: 'doc-29C §19.2 (smaller supporting projects)'
  }
];
