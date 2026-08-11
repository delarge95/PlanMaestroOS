// src/data/career/portfolioProjects.ts - Datos de Proyectos de Portafolio y Simuladores

export interface PortfolioProjectItem {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  tags: string[];
  summary: string;
  order: number;
}

export const initialPortfolioProjects: PortfolioProjectItem[] = [
  {
    id: 'p1',
    title: 'TwinSight X500: Real-Time Shader Pipeline',
    category: 'TechArt',
    coverImage: '/assets/twinsight_cover.png',
    tags: ['HLSL', 'Unreal Engine 5', 'Shaders', 'VFX'],
    summary: 'Pipeline de renderizado en tiempo real optimizado para gemelos digitales industriales.',
    order: 1
  },
  {
    id: 'p2',
    title: 'Plan Maestro OS: Web App de Gestión & Neurodesarrollo',
    category: 'Fullstack',
    coverImage: '/assets/plan_maestro_cover.png',
    tags: ['Astro', 'React', 'TypeScript', 'Zustand'],
    summary: 'Sistema operativo personal y profesional para optimización ejecutiva TDAH/CBT.',
    order: 2
  },
  {
    id: 'p3',
    title: 'Procedural Terrain & Foliage System',
    category: '3D',
    coverImage: '/assets/procedural_terrain.png',
    tags: ['Houdini', 'UE5', 'PCG', 'Environment'],
    summary: 'Generación procedimental de biomas usando PCG y nodos personalizados de Houdini.',
    order: 3
  }
];
