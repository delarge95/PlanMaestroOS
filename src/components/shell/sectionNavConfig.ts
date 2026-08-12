// src/components/shell/sectionNavConfig.ts

export interface NavItemConfig {
  href: string;
  label: string;
  end?: boolean;
}

export const SECTION_NAV: Record<string, NavItemConfig[]> = {
  today: [
    { href: '/app/today', label: 'Hoy', end: true },
    { href: '/app/today/plan', label: 'Plan' },
  ],
  fitness: [
    { href: '/app/fitness', label: 'Hoy', end: true },
    { href: '/app/fitness/library', label: 'Base de datos' },
    { href: '/app/fitness/progress', label: 'Progreso' },
  ],
  'fitness.library': [
    { href: '/app/fitness/library/catalog', label: 'Rutinas' },
    { href: '/app/fitness/library/skills', label: 'Progresiones' },
    { href: '/app/fitness/library/data', label: 'Ejercicios' },
    { href: '/app/fitness/library/muscles', label: 'Músculos' },
  ],
  career: [
    { href: '/app/career', label: 'Hoy', end: true },
    { href: '/app/career/roadmap', label: 'Roadmap' },
    { href: '/app/career/portfolio', label: 'Portafolio y CV' },
    { href: '/app/career/projects', label: 'Proyectos' },
    { href: '/app/career/jobs', label: 'Empleo' },
    { href: '/app/career/learning', label: 'Cursos' },
    { href: '/app/career/news', label: 'Noticias' },
  ],
  clinical: [
    { href: '/app/clinical', label: 'Hoy', end: true },
    { href: '/app/clinical/protocols', label: 'Protocolos' },
    { href: '/app/clinical/unblock', label: 'Desbloqueo' },
  ],
  languages: [
    { href: '/app/languages', label: 'Hoy', end: true },
    { href: '/app/languages/german', label: 'Alemán' },
    { href: '/app/languages/english', label: 'Inglés' },
  ],
  gastronomy: [
    { href: '/app/gastronomy', label: 'Hoy', end: true },
    { href: '/app/gastronomy/recipes', label: 'Recetas' },
    { href: '/app/gastronomy/queue', label: 'Ver más tarde' },
  ],
};
