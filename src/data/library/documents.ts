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
    id: 'doc-overcoming-gravity',
    title: 'Overcoming Gravity (2nd Edition) — Steven Low',
    kind: 'markdown',
    area: 'fitness',
    source: 'local',
    path: '/docs/fitness/overcoming_gravity.md',
    tags: ['Calistenia', 'Progresiones', 'Fuerza'],
    description: 'Guía sistemática de calistenia, progresiones de peso corporal y programación de fuerza.'
  },
  {
    id: 'doc-overcoming-tendonitis',
    title: 'Overcoming Tendonitis — Steven Low',
    kind: 'markdown',
    area: 'fitness',
    source: 'local',
    path: '/docs/fitness/overcoming_tendonitis.md',
    tags: ['Rehabilitación', 'Tendones', 'Prehab'],
    description: 'Protocolos de carga isométrica y excéntrica para el manejo y recuperación de tendinopatías.'
  },
  {
    id: 'doc-nippard-minmax',
    title: 'The Min-Max Program Guide — Jeff Nippard',
    kind: 'pdf',
    area: 'fitness',
    source: 'local',
    path: '/docs/fitness/nippard_minmax.pdf',
    tags: ['Powerbuilding', 'Hipertrofia', 'Gimnasio'],
    description: 'Programa oficial de 12 semanas enfocado en máximo estímulo con volumen mínimo efectivo.'
  },
  {
    id: 'doc-twinsight-arch',
    title: 'Arquitectura de Sistema TwinSight MVP',
    kind: 'markdown',
    area: 'laboral',
    source: 'notion',
    path: '/docs/career/twinsight_architecture.md',
    tags: ['WebGL', 'Unity', 'Graphics Engine'],
    description: 'Especificación de arquitectura de renderizado, shaders procedurales e integración WebGL.'
  },
  {
    id: 'doc-german-grammar-a1',
    title: 'Gramática Alemana A1 — Estructura & Verbos',
    kind: 'sheet',
    area: 'idiomas',
    source: 'drive',
    path: '/docs/languages/german_a1_cheat_sheet.pdf',
    tags: ['Alemán', 'Gramática', 'Präsens'],
    description: 'Resumen en tabla de conjugación verbal en presente y acusativo/dativo.'
  }
];

import type { LibraryDocument } from './types';

export const fitnessLibraryDocuments: LibraryDocument[] = [
  {
    id: 'doc-overcoming-gravity',
    title: 'Overcoming Gravity (2nd Edition) — Steven Low',
    category: 'source',
    domain: 'fitness',
    mimeType: 'text/markdown',
    description: 'Guía sistemática de calistenia, progresiones de peso corporal y programación de fuerza.',
    author: 'Steven Low',
    year: 2016,
    tags: ['Calistenia', 'Progresiones', 'Fuerza'],
    access: 'repo-public',
    isOpenable: true
  },
  {
    id: 'doc-overcoming-tendonitis',
    title: 'Overcoming Tendonitis — Steven Low',
    category: 'source',
    domain: 'fitness',
    mimeType: 'text/markdown',
    description: 'Protocolos de carga isométrica y excéntrica para el manejo y recuperación de tendinopatías.',
    author: 'Steven Low',
    year: 2019,
    tags: ['Rehabilitación', 'Tendones', 'Prehab'],
    access: 'repo-public',
    isOpenable: true
  },
  {
    id: 'doc-nippard-minmax',
    title: 'The Min-Max Program Guide — Jeff Nippard',
    category: 'plan',
    domain: 'fitness',
    mimeType: 'application/pdf',
    description: 'Programa oficial de 12 semanas enfocado en máximo estímulo con volumen mínimo efectivo.',
    author: 'Jeff Nippard',
    year: 2023,
    tags: ['Powerbuilding', 'Hipertrofia', 'Gimnasio'],
    access: 'repo-public',
    isOpenable: true
  }
];

export const allLibraryDocuments = libraryDocs;
