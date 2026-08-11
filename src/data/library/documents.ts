// src/data/library/documents.ts

export type LibraryDoc = {
  id: string;
  title: string;
  kind: 'pdf' | 'markdown' | 'sheet';
  area: 'fitness' | 'laboral' | 'idiomas' | 'clinico' | 'gastronomia' | 'general';
  source: 'local' | 'drive' | 'notion';
  path: string;
  tags: string[];
  description?: string;
};

export const libraryDocs: LibraryDoc[] = [
  {
    id: 'doc-nippard-minmax-pdf',
    title: 'The Min-Max Program (PDF Oficial) — Jeff Nippard',
    kind: 'pdf',
    area: 'fitness',
    source: 'local',
    path: '/_pdf_biblia/Planeacion_Integral/investigacion/The_Min-Max_Program_-_Jeff_Nippard.pdf',
    tags: ['Jeff Nippard', 'Min-Max', 'Hipertrofia', 'Powerbuilding'],
    description: 'Programa oficial de 12 semanas enfocado en máximo estímulo con volumen mínimo efectivo.'
  },
  {
    id: 'doc-overcoming-gravity-pdf',
    title: 'Overcoming Gravity (2nd Edition) — Steven Low',
    kind: 'pdf',
    area: 'fitness',
    source: 'local',
    path: '/_pdf_biblia/Planeacion_Integral/investigacion/Overcoming Gravity_ A Systematic Approach to Gymnastics and -- Low, Steven -- 2, 2016.pdf',
    tags: ['Steven Low', 'Calistenia', 'Progresiones', 'Gimnasia'],
    description: 'Tratado de referencia de 600+ páginas en calistenia, biomecánica y programación de peso corporal.'
  },
  {
    id: 'doc-overcoming-tendonitis-pdf',
    title: 'Overcoming Tendonitis — Steven Low',
    kind: 'pdf',
    area: 'fitness',
    source: 'local',
    path: '/_pdf_biblia/Planeacion_Integral/investigacion/overcoming-tendonitis-a-systematic-approach-to-the-evidence-based-treatment-of-tendinopathy-4-pdf-free (1).pdf',
    tags: ['Rehabilitación', 'Tendones', 'HSR', 'Isométricos'],
    description: 'Guía científica de tratamiento para tendinopatías en hombro, codo, patelar y aquiles.'
  },
  {
    id: 'doc-nippard-glute-pdf',
    title: 'Glute Hypertrophy Program — Jeff Nippard',
    kind: 'pdf',
    area: 'fitness',
    source: 'local',
    path: '/_pdf_biblia/Planeacion_Integral/investigacion/jeffNippardGluteProgram.pdf',
    tags: ['Jeff Nippard', 'Glúteo', 'Cadena Posterior', 'Especialización'],
    description: 'Programa especializado en hipertrofia de cadena posterior, hip thrusts y abducción.'
  },
  {
    id: 'doc-powerbuilding-system-pdf',
    title: 'Powerbuilding System — Jeff Nippard',
    kind: 'pdf',
    area: 'fitness',
    source: 'local',
    path: '/_pdf_biblia/Planeacion_Integral/investigacion/PowerbuildingSystem.pdf',
    tags: ['Powerbuilding', 'Fuerza %1RM', 'Sentadilla/Banca/PM'],
    description: 'Combinación sistemática de progresión en 1RM + hipertrofia asistida.'
  },
  {
    id: 'doc-bodybuilding-transformation-pdf',
    title: 'The Bodybuilding Transformation System — Jeff Nippard',
    kind: 'pdf',
    area: 'fitness',
    source: 'local',
    path: '/_pdf_biblia/Planeacion_Integral/investigacion/TheBodyBuildingTransformationSystem.pdf',
    tags: ['Bodybuilding', 'Estética', 'Pico de Forma'],
    description: 'Sistema completo de transformación física e hipertrofia avanzada.'
  },
  {
    id: 'doc-plan-fitness-alexander',
    title: 'Plan Fitness Alexander (Calistenia Híbrida & Min-Max)',
    kind: 'markdown',
    area: 'fitness',
    source: 'local',
    path: '/_pdf_biblia/Planeacion_Integral/investigacion/plan_fitness.md',
    tags: ['Plan Maestro', 'Alexander', 'Híbrido', 'Rehab Hombro/Rodilla'],
    description: 'Documento marco integrador de entrenamiento personal, prevención de lesiones y fases.'
  },
  {
    id: 'doc-minmax-dataset-json',
    title: 'Min-Max Program Dataset JSON (Estructura de Datos)',
    kind: 'markdown',
    area: 'fitness',
    source: 'local',
    path: '/_pdf_biblia/Planeacion_Integral/investigacion/minmaxprogram.json',
    tags: ['JSON', 'Dataset', 'Rutinas FitApp'],
    description: 'Estructura JSON procesada de semanas, días y ejercicios del programa Min-Max.'
  }
];

import type { LibraryDocument } from './types';

export const fitnessLibraryDocuments: LibraryDocument[] = libraryDocs.map((doc) => ({
  id: doc.id,
  title: doc.title,
  category: doc.kind === 'pdf' ? 'plan' : 'source',
  domain: 'fitness',
  mimeType: doc.kind === 'pdf' ? 'application/pdf' : 'text/markdown',
  description: doc.description || doc.title,
  author: doc.tags[0] || 'Investigación FitApp',
  year: 2024,
  tags: doc.tags,
  access: 'repo-public',
  isOpenable: true
}));

export const allLibraryDocuments = libraryDocs;
