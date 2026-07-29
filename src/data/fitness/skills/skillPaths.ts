// src/data/fitness/skills/skillPaths.ts - Canonical Skill Paths
import type { SkillPath } from './types';

export const skillPaths: SkillPath[] = [
  // TRACCIÓN
  {
    id: 'path-pull-basic',
    title: 'Dominada Básica & Tracción',
    domain: 'pull',
    goal: 'Dominar la tracción vertical estricta hasta barbilla sobre barra',
    shortDescription: 'Progresión desde colgado activo y remo invertido hasta dominada estricta.',
    equipment: ['bar', 'rings', 'band'],
    stepIds: ['pull-step-1', 'pull-step-2', 'pull-step-3', 'pull-step-4', 'pull-step-5'],
    featured: true,
    sourceDocumentId: 'overcoming-gravity-2'
  },
  {
    id: 'path-pull-row',
    title: 'Remo Horizontal & Tracción Posterior',
    domain: 'pull',
    goal: 'Desarrollar fuerza de tracción horizontal y estabilidad escapular',
    shortDescription: 'Remo invertido en banco/anillas para densidad de espalda media.',
    equipment: ['rings', 'bar'],
    stepIds: ['row-step-1', 'row-step-2', 'row-step-3', 'row-step-4'],
    featured: false,
    sourceDocumentId: 'overcoming-gravity-2'
  },
  {
    id: 'path-pull-muscleup',
    title: 'Muscle-Up & Transición Dinámica',
    domain: 'pull',
    goal: 'Transición explosiva desde tracción alta a fondo sobre barra o anillas',
    shortDescription: 'Habilidad avanzada que requiere dominadas altas y fuerza de agarre.',
    equipment: ['bar', 'rings'],
    stepIds: ['mu-step-1', 'mu-step-2', 'mu-step-3'],
    featured: false,
    sourceDocumentId: 'overcoming-gravity-2'
  },
  {
    id: 'path-pull-frontlever',
    title: 'Front Lever (Habilidad Estática)',
    domain: 'pull',
    goal: 'Sostenimiento horizontal de cuerpo tenso suspendido en barra/anillas',
    shortDescription: 'Aislamiento horizontal de dorsal ancho y contracción de core.',
    equipment: ['bar', 'rings'],
    stepIds: ['fl-step-1', 'fl-step-2', 'fl-step-3'],
    featured: false,
    sourceDocumentId: 'overcoming-gravity-2'
  },

  // EMPUJE
  {
    id: 'path-push-basic',
    title: 'Flexión & Empuje Horizontal',
    domain: 'push',
    goal: 'Dominar la flexión de brazos estricta en suelo y anillas',
    shortDescription: 'Progresión desde flexión inclinada hasta flexiones en anillas y declinadas.',
    equipment: ['floor', 'rings', 'parallettes'],
    stepIds: ['push-step-1', 'push-step-2', 'push-step-3', 'push-step-4'],
    featured: true,
    sourceDocumentId: 'overcoming-gravity-2'
  },
  {
    id: 'path-push-dips',
    title: 'Fondos en Paralelas & Anillas',
    domain: 'push',
    goal: 'Fuerza de empuje vertical para tríceps y pectorales inferiores',
    shortDescription: 'Progresión desde soporte estático hasta fondos en anillas profundos.',
    equipment: ['parallettes', 'rings', 'bar'],
    stepIds: ['dip-step-1', 'dip-step-2', 'dip-step-3', 'dip-step-4'],
    featured: false,
    sourceDocumentId: 'overcoming-gravity-2'
  },
  {
    id: 'path-push-handstand',
    title: 'Pino (Handstand) & Empuje Vertical',
    domain: 'push',
    goal: 'Alineación corporal en inversión sobre manos y empuje vertical',
    shortDescription: 'Alineación escapular, equilibrio de muñecas y pino asistido.',
    equipment: ['floor', 'parallettes'],
    stepIds: ['hs-step-1', 'hs-step-2', 'hs-step-3'],
    featured: false,
    sourceDocumentId: 'overcoming-gravity-2'
  },

  // CORE
  {
    id: 'path-core-hollow',
    title: 'Hollow Body & Compresión Abdominal',
    domain: 'core',
    goal: 'Construir rigidez de tronco y basculación pélvica posterior',
    shortDescription: 'Base fundamental para todas las palancas y habilidades gimnásticas.',
    equipment: ['floor'],
    stepIds: ['core-step-1', 'core-step-2', 'core-step-3'],
    featured: true,
    sourceDocumentId: 'overcoming-gravity-2'
  },
  {
    id: 'path-core-lsit',
    title: 'L-Sit & Compresión de Cadera',
    domain: 'core',
    goal: 'Sostenimiento en L sobre paralelas o suelo',
    shortDescription: 'Compresión activa de flexores de cadera y soporte de tríceps.',
    equipment: ['floor', 'parallettes'],
    stepIds: ['lsit-step-1', 'lsit-step-2', 'lsit-step-3'],
    featured: false,
    sourceDocumentId: 'overcoming-gravity-2'
  },
  {
    id: 'path-core-dragon',
    title: 'Dragon Flag',
    domain: 'core',
    goal: 'Palanca abdominal completa en banco o suelo',
    shortDescription: 'Extensión de torso rígido manteniendo apoyo sobre escápulas.',
    equipment: ['floor', 'bar'],
    stepIds: ['dragon-step-1', 'dragon-step-2'],
    featured: false,
    sourceDocumentId: 'overcoming-gravity-2'
  },

  // PIERNA
  {
    id: 'path-legs-pistol',
    title: 'Pistol Squat & Fuerza Unilateral',
    domain: 'legs',
    goal: 'Sentadilla a una pierna en rango completo sin asistencia',
    shortDescription: 'Equilibrio, movilidad de tobillo y fuerza de cuádriceps unilateral.',
    equipment: ['floor', 'box'],
    stepIds: ['leg-step-1', 'leg-step-2', 'leg-step-3', 'leg-step-4'],
    featured: true,
    sourceDocumentId: 'overcoming-gravity-2'
  },

  // SOPORTE Y ANILLAS
  {
    id: 'path-support-rings',
    title: 'Soporte en Anillas (Ring Support Hold)',
    domain: 'support',
    goal: 'Estabilidad de hombro y soporte rígido sobre anillas con rotación externa',
    shortDescription: 'Prerrequisito de seguridad antes de fondos avanzados en anillas.',
    equipment: ['rings'],
    stepIds: ['supp-step-1', 'supp-step-2', 'supp-step-3'],
    featured: true,
    sourceDocumentId: 'overcoming-gravity-2'
  },

  // MOVILIDAD Y CAPACIDAD
  {
    id: 'path-mobility-wrist',
    title: 'Acondicionamiento de Muñeca & Escápula',
    domain: 'mobility',
    goal: 'Preparación de tejidos conectivos y movilidad de soporte',
    shortDescription: 'Calentamiento transversal para muñecas, codos y escápulas.',
    equipment: ['floor', 'band'],
    stepIds: ['mob-step-1', 'mob-step-2', 'mob-step-3'],
    featured: true,
    sourceDocumentId: 'overcoming-gravity-2'
  }
];
