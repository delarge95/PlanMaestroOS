// src/data/career/goals.ts - Metas y Roadmap Profesional

export interface CareerGoal {
  id: string;
  title: string;
  area: 'TechArt' | '3D' | 'Fullstack' | 'Carrera';
  targetDate: string;
  timeframe: 'short' | 'medium' | 'long';
  linkedTaskCount: number;
}

export const initialCareerGoals: CareerGoal[] = [
  { id: 'g1', title: 'Publicar MVP TwinSight X500 en GitHub & Demo Web', area: 'TechArt', targetDate: '2026-08-31', timeframe: 'short', linkedTaskCount: 4 },
  { id: 'g2', title: 'Completar Portafolio ArtStation & LinkedIn Refinado', area: 'Carrera', targetDate: '2026-09-15', timeframe: 'short', linkedTaskCount: 3 },
  { id: 'g3', title: 'Aplicar a 15 vacantes objetivo Tech Art / Graphics', area: 'Carrera', targetDate: '2026-09-30', timeframe: 'short', linkedTaskCount: 5 },
  { id: 'g4', title: 'Crear Shaders Avanzados HLSL en Unreal Engine 5', area: '3D', targetDate: '2026-11-30', timeframe: 'medium', linkedTaskCount: 6 },
  { id: 'g5', title: 'Certificación Oficial Alemán A2 / B1', area: 'Carrera', targetDate: '2026-12-15', timeframe: 'medium', linkedTaskCount: 8 },
  { id: 'g6', title: 'Conseguir posición remota Senior Tech Artist', area: 'Carrera', targetDate: '2027-03-31', timeframe: 'long', linkedTaskCount: 12 }
];
