// src/data/fitness/programs/calisthenicsPaths.ts - Bodyweight Progression Trees per Audit 04
import { resolveExerciseId } from '../exerciseResolver';

export type SkillStep = {
  id: string;
  name: string;
  category: 'pull' | 'push' | 'core' | 'legs' | 'scapula-mobility';
  level: number; // 1 to 5
  prerequisites: string[];
  regressionIds: string[];
  progressionIds: string[];
  targetVolume: string; // e.g. '3x30s' or '3x8-10'
  advancementCriteria: string;
  exerciseId: string;
};

export const calisthenicsSkillTree: SkillStep[] = [
  // TRACCIÓN
  {
    id: 'cal-pull-1',
    name: 'Active Hang (Colgado Activo)',
    category: 'pull',
    level: 1,
    prerequisites: [],
    regressionIds: [],
    progressionIds: ['cal-pull-2'],
    targetVolume: '3x30s',
    advancementCriteria: 'Sostener 3x45s con escápulas deprimidas y sin dolor.',
    exerciseId: resolveExerciseId('Dead Hang')
  },
  {
    id: 'cal-pull-2',
    name: 'Ring Rows (Remos en Anillas)',
    category: 'pull',
    level: 2,
    prerequisites: ['cal-pull-1'],
    regressionIds: ['cal-pull-1'],
    progressionIds: ['cal-pull-3'],
    targetVolume: '3x8-10',
    advancementCriteria: 'Completar 3x10 reps estrictas tocando el pecho con las anillas.',
    exerciseId: resolveExerciseId('Archer Ring Rows')
  },
  {
    id: 'cal-pull-3',
    name: 'Pull-Up (Dominada Prona)',
    category: 'pull',
    level: 3,
    prerequisites: ['cal-pull-2'],
    regressionIds: ['cal-pull-2'],
    progressionIds: ['cal-pull-4'],
    targetVolume: '3x5-8',
    advancementCriteria: 'Completar 3x8 dominadas limpias con barbilla sobre la barra.',
    exerciseId: resolveExerciseId('Pull-Up (Wide Grip)')
  },

  // EMPUJE
  {
    id: 'cal-push-1',
    name: 'Incline Push-Up (Flexión Inclinada)',
    category: 'push',
    level: 1,
    prerequisites: [],
    regressionIds: [],
    progressionIds: ['cal-push-2'],
    targetVolume: '3x10-12',
    advancementCriteria: 'Completar 3x12 reps en superficie elevada con cuerpo rígido.',
    exerciseId: resolveExerciseId('Pseudo Planche Pushups')
  },
  {
    id: 'cal-push-2',
    name: 'Ring Dips (Fondos en Anillas)',
    category: 'push',
    level: 2,
    prerequisites: ['cal-push-1'],
    regressionIds: ['cal-push-1'],
    progressionIds: ['cal-push-3'],
    targetVolume: '3x6-8',
    advancementCriteria: 'Completar 3x8 fondos profundos sin rotación interna brusca.',
    exerciseId: resolveExerciseId('Machine Chest Press')
  },

  // CORE
  {
    id: 'cal-core-1',
    name: 'Hollow Body Hold',
    category: 'core',
    level: 1,
    prerequisites: [],
    regressionIds: [],
    progressionIds: ['cal-core-2'],
    targetVolume: '3x30s',
    advancementCriteria: 'Sostener 3x45s con zona lumbar pegada al suelo.',
    exerciseId: resolveExerciseId('Dragon Flag')
  },
  {
    id: 'cal-core-2',
    name: 'Hanging Leg Raise (Elevación de Piernas)',
    category: 'core',
    level: 2,
    prerequisites: ['cal-core-1'],
    regressionIds: ['cal-core-1'],
    progressionIds: [],
    targetVolume: '3x8-10',
    advancementCriteria: 'Elevar pies a 90° sin balanceo.',
    exerciseId: resolveExerciseId('Cable Crunch')
  },

  // PREHAB & MOBILITY
  {
    id: 'cal-prehab-1',
    name: 'Spanish Squat Isométrico (Rodilla)',
    category: 'scapula-mobility',
    level: 1,
    prerequisites: [],
    regressionIds: [],
    progressionIds: [],
    targetVolume: '3-5x45s',
    advancementCriteria: '45 segundos sin molestia rotuliana en escala 0-2.',
    exerciseId: resolveExerciseId('Spanish Squats')
  }
];
