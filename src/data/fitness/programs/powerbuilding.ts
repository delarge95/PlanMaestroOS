// src/data/fitness/programs/powerbuilding.ts - Powerbuilding System Program
import type { TrainingProgram } from './types';
import { resolveExerciseId } from '../exerciseResolver';

const powerbuildingDaysTemplate = [
  {
    id: 'pb-d1',
    title: 'Full Body 1: Squat & OHP (Fuerza)',
    order: 1,
    exercises: [
      {
        id: 'pb-d1-ex1',
        exerciseId: resolveExerciseId('Back Squat'),
        displayName: 'Back Squat (Sentadilla Trasera)',
        warmupSets: '4',
        workingSets: 3,
        repRange: '5 / 8',
        rest: '3-4 min',
        effort: { type: 'rpe' as const, early: '7.5', last: '8.5' },
        substituteExerciseIds: [resolveExerciseId('Spanish Squats')],
        notes: 'Top Set: 1x5 RPE 8. Back-off: 2x8 al 70%. Velocidad explosiva.',
        sourceRef: { programId: 'powerbuilding', block: '1', week: 1, day: 'Full Body 1' }
      },
      {
        id: 'pb-d1-ex2',
        exerciseId: resolveExerciseId('Overhead Press'),
        displayName: 'Overhead Press (Press Militar)',
        warmupSets: '2',
        workingSets: 3,
        repRange: '8',
        rest: '2-3 min',
        effort: { type: 'rpe' as const, early: '7.0', last: '8.0' },
        substituteExerciseIds: [resolveExerciseId('Barbell Incline Press')],
        notes: 'Resetear en cada repetición. Mantener torso tenso.',
        sourceRef: { programId: 'powerbuilding', block: '1', week: 1, day: 'Full Body 1' }
      }
    ]
  },
  {
    id: 'pb-d2',
    title: 'Full Body 2: Deadlift & Bench (Fuerza)',
    order: 2,
    exercises: [
      {
        id: 'pb-d2-ex1',
        exerciseId: resolveExerciseId('Deadlift'),
        displayName: 'Deadlift (Peso Muerto)',
        warmupSets: '4',
        workingSets: 3,
        repRange: '4',
        rest: '3-5 min',
        effort: { type: 'rpe' as const, early: '7.5', last: '8.5' },
        substituteExerciseIds: [resolveExerciseId('Barbell RDL')],
        notes: 'Tensar dorsales antes del despegue.',
        sourceRef: { programId: 'powerbuilding', block: '1', week: 1, day: 'Full Body 2' }
      },
      {
        id: 'pb-d2-ex2',
        exerciseId: resolveExerciseId('Barbell Bench Press'),
        displayName: 'Bench Press (Press de Banca)',
        warmupSets: '4',
        workingSets: 3,
        repRange: '3 / 10',
        rest: '4 min',
        effort: { type: 'rpe' as const, early: '8.0', last: '8.5' },
        substituteExerciseIds: [resolveExerciseId('Machine Chest Press')],
        notes: 'Top set 1x3 al 82.5%. 2 series de 10 reps con 1s de pausa.',
        sourceRef: { programId: 'powerbuilding', block: '1', week: 1, day: 'Full Body 2' }
      }
    ]
  }
];

export const powerbuildingProgram: TrainingProgram = {
  id: 'powerbuilding',
  title: 'Powerbuilding System (Fuerza & Hipertrofia)',
  source: 'Powerbuilding_System_Jeff_Nippard.pdf',
  durationWeeks: 8,
  split: ['Full Body 1', 'Full Body 2', 'Full Body 3'],
  methodology: ['Top Set + Back-off', 'RPE progresivo', 'Combinación de levantamientos básicos y accesorios'],
  equipment: ['Barra', 'Discos', 'Banco', 'Anillas'],
  weeks: Array.from({ length: 8 }, (_, index) => {
    const weekNum = index + 1;
    const isDeload = weekNum === 4 || weekNum === 8;

    return {
      week: weekNum,
      block: `Bloque ${weekNum <= 4 ? '1' : '2'}`,
      isDeload,
      days: powerbuildingDaysTemplate.map((d) => ({
        ...d,
        id: `pb-w${weekNum}-${d.id}`,
        exercises: d.exercises.map((ex) => ({
          ...ex,
          id: `pb-w${weekNum}-${ex.id}`,
          effort: isDeload ? { type: 'rpe' as const, early: '6.0', last: '6.5' } : ex.effort,
          sourceRef: { programId: 'powerbuilding', block: `Bloque ${weekNum <= 4 ? '1' : '2'}`, week: weekNum, day: d.title }
        }))
      }))
    };
  })
};
