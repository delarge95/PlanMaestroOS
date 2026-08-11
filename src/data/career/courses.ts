// src/data/career/courses.ts - Datos de Cursos y Formación Profesional

export interface CourseItem {
  id: string;
  title: string;
  provider: string;
  status: 'active' | 'watchlist';
  priority: number;
  todayTask?: string;
  progressPercent: number;
  newsNote?: string;
}

export const initialCourses: CourseItem[] = [
  {
    id: 'c1',
    title: 'HLSL Shader Development in Unreal Engine 5',
    provider: 'Udemy / Ben Cloward',
    status: 'active',
    priority: 1,
    todayTask: 'Módulo 4: Custom Material Nodes & Custom HLSL Expression',
    progressPercent: 65
  },
  {
    id: 'c2',
    title: 'Houdini PCG & Procedural Systems for Games',
    provider: 'Rebelway',
    status: 'watchlist',
    priority: 2,
    progressPercent: 0,
    newsNote: 'Beca abierta para admisión Otoño 2026'
  },
  {
    id: 'c3',
    title: 'Alemán Intensivo A2.1',
    provider: 'Goethe Institut Online',
    status: 'active',
    priority: 1,
    todayTask: 'Lección 3: Wechselpräpositionen und Dativ/Akkusativ',
    progressPercent: 40
  }
];
