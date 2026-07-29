// src/data/fitness/programs/calisthenics.ts - Calisthenics & Bodyweight Program
import type { TrainingProgram } from './types';
import { resolveExerciseId } from '../exerciseResolver';

const calisthenicsDaysTemplate = [
  {
    id: 'cal-d1',
    title: 'Día 1: Dominadas & Empuje Anillas',
    order: 1,
    exercises: [
      {
        id: 'cal-d1-ex1',
        exerciseId: resolveExerciseId('Pull-Up (Wide Grip)'),
        displayName: 'Pull-Up (Dominada Prona)',
        warmupSets: '2',
        workingSets: 3,
        repRange: '5-8',
        rest: '2-3 min',
        effort: { type: 'rir' as const, early: '1', last: '0' },
        substituteExerciseIds: [resolveExerciseId('Close-Grip Lat Pulldown')],
        notes: 'Excéntrica de 3s. Barbilla sobre la barra.',
        sourceRef: { programId: 'calisthenics', block: '1', week: 1, day: 'Día 1' }
      },
      {
        id: 'cal-d1-ex2',
        exerciseId: resolveExerciseId('Machine Chest Press'),
        displayName: 'Fondos en Anillas (Ring Dips)',
        warmupSets: '2',
        workingSets: 3,
        repRange: '6-8',
        rest: '2 min',
        effort: { type: 'rir' as const, early: '1', last: '0' },
        substituteExerciseIds: [resolveExerciseId('Barbell Incline Press')],
        notes: 'Rotación externa de hombro al bloquear arriba.',
        sourceRef: { programId: 'calisthenics', block: '1', week: 1, day: 'Día 1' }
      }
    ]
  }
];

export const calisthenicsProgram: TrainingProgram = {
  id: 'calisthenics-skills',
  title: 'Calistenia & Anillas (Steven Low)',
  source: 'Overcoming_Gravity_Steven_Low.pdf',
  durationWeeks: 8,
  split: ['Tracción & Empuje', 'Pierna & Core', 'Movilidad & Prehab'],
  methodology: ['Progresiones de peso corporal', 'Manejo de tensión conectiva', 'Support hold y alineación escapular'],
  equipment: ['Anillas', 'Barra de dominadas', 'Banda elástica'],
  weeks: Array.from({ length: 8 }, (_, index) => ({
    week: index + 1,
    block: 'Progresión Continua',
    isDeload: index === 3 || index === 7,
    days: calisthenicsDaysTemplate.map((d) => ({
      ...d,
      id: `cal-w${index + 1}-${d.id}`,
      exercises: d.exercises.map((ex) => ({
        ...ex,
        id: `cal-w${index + 1}-${ex.id}`,
        sourceRef: { programId: 'calisthenics-skills', block: 'Progresión Continua', week: index + 1, day: d.title }
      }))
    }))
  }))
};
