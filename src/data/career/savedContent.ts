// src/data/career/savedContent.ts - Noticias e Hilos Guardados

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  dateIso: string;
  category: 'IA' | '3D / Tech Art' | 'Desarrollo y diseño' | 'Carrera';
  url: string;
  status: 'inbox' | 'saved' | 'read' | 'dismissed';
}

export const initialNews: NewsItem[] = [
  {
    id: 'n1',
    title: 'Unreal Engine 5.5 Render Hardware Ray Tracing Improvements',
    source: '80.lv',
    dateIso: '2026-08-09',
    category: '3D / Tech Art',
    url: 'https://80.lv',
    status: 'inbox'
  },
  {
    id: 'n2',
    title: 'NVIDIA DLSS 4 Neural Rendering & Real-Time Shaders',
    source: 'NVIDIA Developer Blog',
    dateIso: '2026-08-08',
    category: 'IA',
    url: 'https://developer.nvidia.com',
    status: 'inbox'
  },
  {
    id: 'n3',
    title: 'Guía de Negociación Salarial para Tech Artists Remotos',
    source: 'GamesIndustry.biz',
    dateIso: '2026-08-05',
    category: 'Carrera',
    url: 'https://gamesindustry.biz',
    status: 'saved'
  }
];
