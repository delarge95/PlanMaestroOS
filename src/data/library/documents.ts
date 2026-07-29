// src/data/library/documents.ts - Unified Catalog of Library Documents
import type { LibraryDocument } from './types';

export const allLibraryDocuments: LibraryDocument[] = [
  // FITNESS FUENTES
  {
    id: 'overcoming-gravity-2',
    title: 'Overcoming Gravity — 2nd Edition',
    category: 'source',
    domain: 'fitness',
    mimeType: 'application/pdf',
    description: 'Manual técnico de calistenia, física del ejercicio y progresiones por Steven Low.',
    author: 'Steven Low',
    year: 2016,
    tags: ['Calistenia', 'Progresiones', 'Anillas', 'Fuerza'],
    access: 'repo-public',
    openUrl: '/library/fitness/overcoming-gravity-2nd-ed.pdf',
    isOpenable: true
  },
  {
    id: 'overcoming-tendonitis',
    title: 'Overcoming Tendonitis',
    category: 'source',
    domain: 'fitness',
    mimeType: 'application/pdf',
    description: 'Educación sobre gestión de carga, tolerancia al ejercicio y progresión.',
    author: 'Steven Low',
    year: 2019,
    tags: ['Prehab', 'Tolerancia', 'Tendón', 'Gestión de Carga'],
    access: 'repo-public',
    openUrl: '/library/fitness/overcoming-tendonitis.pdf',
    isOpenable: true
  },
  {
    id: 'the-min-max-program',
    title: 'The Min-Max Program',
    category: 'source',
    domain: 'fitness',
    mimeType: 'application/pdf',
    description: 'Programa Nippard 12 semanas bajo volumen alta intensidad (PDF oficial).',
    author: 'Jeff Nippard',
    year: 2024,
    tags: ['Min-Max', 'Hipertrofia', 'Nippard', 'RIR 0-1'],
    access: 'repo-public',
    openUrl: '/library/fitness/the-min-max-program.pdf',
    isOpenable: true
  },
  {
    id: 'powerbuilding-system',
    title: 'Powerbuilding System',
    category: 'source',
    domain: 'fitness',
    mimeType: 'application/pdf',
    description: 'Programa oficial de fuerza en básicos y desarrollo muscular por Jeff Nippard.',
    author: 'Jeff Nippard',
    year: 2023,
    tags: ['Powerbuilding', 'Squat', 'Bench', 'Deadlift'],
    access: 'repo-public',
    openUrl: '/library/fitness/powerbuilding-system.pdf',
    isOpenable: true
  },
  {
    id: 'bodybuilding-transformation-system',
    title: 'The Bodybuilding Transformation System',
    category: 'source',
    domain: 'fitness',
    mimeType: 'application/pdf',
    description: 'Sistema completo de hipertrofia muscular y periodización por Jeff Nippard.',
    author: 'Jeff Nippard',
    year: 2023,
    tags: ['Bodybuilding', 'Hipertrofia', 'Nippard', 'PPL'],
    access: 'repo-public',
    openUrl: '/library/fitness/bodybuilding-transformation-system.pdf',
    isOpenable: true
  },
  {
    id: 'glute-hypertrophy-program',
    title: 'Glute Hypertrophy Program',
    category: 'source',
    domain: 'fitness',
    mimeType: 'application/pdf',
    description: 'Especialización en cadena posterior y desarrollo de glúteo por Jeff Nippard.',
    author: 'Jeff Nippard',
    year: 2023,
    tags: ['Glute', 'Hip Thrust', 'Hipertrofia', 'Cadena Posterior'],
    access: 'repo-public',
    openUrl: '/library/fitness/glute-hypertrophy-program.pdf',
    isOpenable: true
  },

  // PLAN MAESTRO DOCUMENTOS
  {
    id: 'plan-maestro-v3',
    title: 'Plan Maestro OS — Blueprint v3',
    category: 'plan',
    domain: 'general',
    mimeType: 'text/markdown',
    description: 'Definición operativa de hábitos, arquitectura ejecutiva y rutinas de reentrada.',
    author: 'Alexander',
    year: 2026,
    tags: ['Plan Maestro', 'Estrategia', 'Blueprint'],
    access: 'repo-public',
    openUrl: '/app/master-plan',
    isOpenable: true
  },
  {
    id: 'plan-fitness-hybrid',
    title: 'Plan Fitness Híbrido & Rehabilitación',
    category: 'plan',
    domain: 'fitness',
    mimeType: 'text/markdown',
    description: 'Estrategia personal de fuerza, calistenia y salud musculotendinosa.',
    author: 'Alexander',
    year: 2026,
    tags: ['Plan Fitness', 'Salud Articular', 'Calistenia'],
    access: 'repo-public',
    openUrl: '/app/fitness',
    isOpenable: true
  }
];

export const fitnessLibraryDocuments: LibraryDocument[] = allLibraryDocuments.filter(
  (doc) => doc.domain === 'fitness'
);
