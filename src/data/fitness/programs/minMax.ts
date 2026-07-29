// src/data/fitness/programs/minMax.ts - Jeff Nippard Min-Max Program (12 Weeks)
import type { TrainingProgram } from './types';
import { resolveExerciseId } from '../exerciseResolver';

const minMaxDaysTemplate = [
  {
    id: 'minmax-d1',
    title: 'Upper 1 (Empuje & Pecho)',
    order: 1,
    exercises: [
      {
        id: 'mm-d1-ex1',
        exerciseId: resolveExerciseId('Barbell Incline Press'),
        displayName: 'Barbell Incline Press',
        warmupSets: '2',
        workingSets: 2,
        repRange: '6-8',
        rest: '3-5 min',
        effort: { type: 'rir' as const, early: '1', last: '0' },
        substituteExerciseIds: [resolveExerciseId('DB Incline Press'), resolveExerciseId('Smith Machine Incline Press')],
        notes: 'Banca a 30°. Pausa de 1s en la parte inferior manteniendo tensión.',
        sourceRef: { programId: 'min-max', block: '1', week: 1, day: 'Upper 1' }
      },
      {
        id: 'mm-d1-ex2',
        exerciseId: resolveExerciseId('Pec Deck'),
        displayName: 'Pec Deck / Aperturas',
        warmupSets: '1',
        workingSets: 2,
        repRange: '6-8',
        rest: '1-2 min',
        effort: { type: 'rir' as const, early: '0', last: '0' },
        substituteExerciseIds: [resolveExerciseId('DB Flye'), resolveExerciseId('Cable Flye')],
        notes: 'Pausa 1s en la contracción peak.',
        sourceRef: { programId: 'min-max', block: '1', week: 1, day: 'Upper 1' }
      },
      {
        id: 'mm-d1-ex3',
        exerciseId: resolveExerciseId('Pull-Up (Wide Grip)'),
        displayName: 'Pull-Up (Wide Grip)',
        warmupSets: '1',
        workingSets: 2,
        repRange: '6-8',
        rest: '2-3 min',
        effort: { type: 'rir' as const, early: '1', last: '0' },
        substituteExerciseIds: [resolveExerciseId('Lat Pulldown'), resolveExerciseId('Chin-Up')],
        notes: 'Agarre prono 1.5x ancho de hombros. Excéntrica controlada de 3s.',
        sourceRef: { programId: 'min-max', block: '1', week: 1, day: 'Upper 1' }
      },
      {
        id: 'mm-d1-ex4',
        exerciseId: resolveExerciseId('Triceps Pressdown'),
        displayName: 'Triceps Pressdown',
        warmupSets: '1',
        workingSets: 2,
        repRange: '6-8',
        rest: '1-2 min',
        effort: { type: 'rir' as const, early: '0', last: '0' },
        substituteExerciseIds: [resolveExerciseId('Close-Grip Bench Press')],
        notes: 'Cuerda o barra. Fijar codos al costado del cuerpo.',
        sourceRef: { programId: 'min-max', block: '1', week: 1, day: 'Upper 1' }
      },
      {
        id: 'mm-d1-ex5',
        exerciseId: resolveExerciseId('EZ-Bar Preacher Curl'),
        displayName: 'EZ-Bar Preacher Curl',
        warmupSets: '1',
        workingSets: 2,
        repRange: '6-8',
        rest: '1-2 min',
        effort: { type: 'rir' as const, early: '0', last: '0' },
        substituteExerciseIds: [resolveExerciseId('DB Preacher Curl')],
        notes: 'Tríceps pegados al pad. Rango completo y estricto.',
        sourceRef: { programId: 'min-max', block: '1', week: 1, day: 'Upper 1' }
      }
    ]
  },
  {
    id: 'minmax-d2',
    title: 'Lower 1 (Cuádriceps & Rodilla)',
    order: 2,
    exercises: [
      {
        id: 'mm-d2-ex1',
        exerciseId: resolveExerciseId('Lying Leg Curl'),
        displayName: 'Lying Leg Curl',
        warmupSets: '1',
        workingSets: 2,
        repRange: '6-8',
        rest: '1-2 min',
        effort: { type: 'rir' as const, early: '0', last: '0' },
        substituteExerciseIds: [resolveExerciseId('Seated Leg Curl')],
        notes: 'Máximo estiramiento en la posición baja.',
        sourceRef: { programId: 'min-max', block: '1', week: 1, day: 'Lower 1' }
      },
      {
        id: 'mm-d2-ex2',
        exerciseId: resolveExerciseId('Squat (Your Choice)'),
        displayName: 'Back Squat / Sentadilla',
        warmupSets: '3',
        workingSets: 2,
        repRange: '6-8',
        rest: '3-5 min',
        effort: { type: 'rir' as const, early: '1', last: '0' },
        substituteExerciseIds: [resolveExerciseId('Barbell Lunge'), resolveExerciseId('DB Lunge')],
        notes: 'Profundidad paralela o más. Controlar el descenso.',
        sourceRef: { programId: 'min-max', block: '1', week: 1, day: 'Lower 1' }
      },
      {
        id: 'mm-d2-ex3',
        exerciseId: resolveExerciseId('Spanish Squats'),
        displayName: 'Spanish Squats (Prehab Rodilla)',
        warmupSets: '1',
        workingSets: 2,
        repRange: '3-5x45s',
        rest: '1 min',
        effort: { type: 'rpe' as const, early: '7', last: '8' },
        substituteExerciseIds: [resolveExerciseId('Leg Extension')],
        notes: 'Isométrico analgésico de rodilla con banda o pared.',
        sourceRef: { programId: 'min-max', block: '1', week: 1, day: 'Lower 1' }
      },
      {
        id: 'mm-d2-ex4',
        exerciseId: resolveExerciseId('Standing Calf Raise'),
        displayName: 'Standing Calf Raise',
        warmupSets: '1',
        workingSets: 2,
        repRange: '8-10',
        rest: '1-2 min',
        effort: { type: 'rir' as const, early: '0', last: '0' },
        substituteExerciseIds: [resolveExerciseId('Leg Extension')],
        notes: 'Pausa de 1-2s en el estiramiento profundo.',
        sourceRef: { programId: 'min-max', block: '1', week: 1, day: 'Lower 1' }
      }
    ]
  },
  {
    id: 'minmax-d3',
    title: 'Upper 2 (Tracción & Espalda)',
    order: 3,
    exercises: [
      {
        id: 'mm-d3-ex1',
        exerciseId: resolveExerciseId('Close-Grip Lat Pulldown'),
        displayName: 'Lat Pulldown (Jalón al Pecho)',
        warmupSets: '2',
        workingSets: 2,
        repRange: '8-10',
        rest: '2-3 min',
        effort: { type: 'rir' as const, early: '1', last: '0' },
        substituteExerciseIds: [resolveExerciseId('Pull-Up')],
        notes: 'Llevar barra al pecho superior sin balancear el torso.',
        sourceRef: { programId: 'min-max', block: '1', week: 1, day: 'Upper 2' }
      },
      {
        id: 'mm-d3-ex2',
        exerciseId: resolveExerciseId('Chest-Supported T-Bar Row'),
        displayName: 'Remo en Anillas / T-Bar',
        warmupSets: '2',
        workingSets: 2,
        repRange: '8-10',
        rest: '2-3 min',
        effort: { type: 'rir' as const, early: '1', last: '0' },
        substituteExerciseIds: [resolveExerciseId('Pull-Up')],
        notes: 'Retracción escapular completa al final de cada repetición.',
        sourceRef: { programId: 'min-max', block: '1', week: 1, day: 'Upper 2' }
      },
      {
        id: 'mm-d3-ex3',
        exerciseId: resolveExerciseId('Machine Chest Press'),
        displayName: 'Fondos en Anillas / Press Pecho',
        warmupSets: '2',
        workingSets: 2,
        repRange: '8-10',
        rest: '3 min',
        effort: { type: 'rir' as const, early: '1', last: '0' },
        substituteExerciseIds: [resolveExerciseId('Barbell Incline Press')],
        notes: 'Pausa de 1 segundo en el estiramiento abajo.',
        sourceRef: { programId: 'min-max', block: '1', week: 1, day: 'Upper 2' }
      }
    ]
  },
  {
    id: 'minmax-d4',
    title: 'Lower 2 (Cadena Posterior & Bisagra)',
    order: 4,
    exercises: [
      {
        id: 'mm-d4-ex1',
        exerciseId: resolveExerciseId('Barbell RDL'),
        displayName: 'Barbell Romanian Deadlift (RDL)',
        warmupSets: '2',
        workingSets: 2,
        repRange: '6-8',
        rest: '2-3 min',
        effort: { type: 'rir' as const, early: '2', last: '1' },
        substituteExerciseIds: [resolveExerciseId('Machine Hip Thrust')],
        notes: 'Empujar caderas atrás manteniendo la barra rozando los muslos.',
        sourceRef: { programId: 'min-max', block: '1', week: 1, day: 'Lower 2' }
      },
      {
        id: 'mm-d4-ex2',
        exerciseId: resolveExerciseId('Machine Hip Thrust'),
        displayName: 'Hip Thrust de Glúteo',
        warmupSets: '2',
        workingSets: 2,
        repRange: '6-8',
        rest: '2-3 min',
        effort: { type: 'rir' as const, early: '1', last: '0' },
        substituteExerciseIds: [resolveExerciseId('Barbell RDL')],
        notes: 'Contracción máxima de 1 segundo en el punto alto.',
        sourceRef: { programId: 'min-max', block: '1', week: 1, day: 'Lower 2' }
      }
    ]
  },
  {
    id: 'minmax-d5',
    title: 'Arms & Delts (Brazos & Hombros)',
    order: 5,
    exercises: [
      {
        id: 'mm-d5-ex1',
        exerciseId: resolveExerciseId('Bayesian Cable Curl'),
        displayName: 'Biceps Curl (Preacher / Bayesian)',
        warmupSets: '1',
        workingSets: 2,
        repRange: '6-8',
        rest: '1-2 min',
        effort: { type: 'rir' as const, early: '0', last: '0' },
        substituteExerciseIds: [resolveExerciseId('EZ-Bar Preacher Curl')],
        notes: 'Estiramiento profundo y contracción estricta.',
        sourceRef: { programId: 'min-max', block: '1', week: 1, day: 'Arms & Delts' }
      },
      {
        id: 'mm-d5-ex2',
        exerciseId: resolveExerciseId('Overhead Cable Triceps Extension'),
        displayName: 'Extensión de Tríceps Copa',
        warmupSets: '1',
        workingSets: 2,
        repRange: '8-10',
        rest: '1-2 min',
        effort: { type: 'rir' as const, early: '0', last: '0' },
        substituteExerciseIds: [resolveExerciseId('Triceps Pressdown')],
        notes: 'Sentir estiramiento en la porción larga del tríceps.',
        sourceRef: { programId: 'min-max', block: '1', week: 1, day: 'Arms & Delts' }
      }
    ]
  }
];

export const minMaxProgram: TrainingProgram = {
  id: 'min-max',
  title: 'The Min-Max Program (Jeff Nippard)',
  source: 'The_Min-Max_Program_-_Jeff_Nippard.pdf',
  durationWeeks: 12,
  split: ['Upper 1', 'Lower 1', 'Upper 2', 'Lower 2', 'Arms & Delts'],
  methodology: ['Mínimo Volumen / Máxima Intensidad', '1-2 Hard Sets a RIR 0-1', 'Bloque 1 (Acumulación) + Bloque 2 (Fallo & Técnicas)'],
  equipment: ['Barra', 'Mancuernas', 'Poleas', 'Anillas'],
  weeks: Array.from({ length: 12 }, (_, index) => {
    const weekNum = index + 1;
    const isBlock2 = weekNum >= 7;
    const isDeload = weekNum === 6 || weekNum === 12;
    const blockLabel = `Bloque ${isBlock2 ? '2' : '1'}`;

    return {
      week: weekNum,
      block: blockLabel,
      isIntro: weekNum === 1,
      isDeload,
      days: minMaxDaysTemplate.map((d) => ({
        ...d,
        id: `mm-w${weekNum}-${d.id}`,
        exercises: d.exercises.map((ex) => ({
          ...ex,
          id: `mm-w${weekNum}-${ex.id}`,
          intensityTechnique: isBlock2 && !isDeload ? ('drop-set' as const) : ('none' as const),
          effort: isDeload
            ? { type: 'rir' as const, early: '3', last: '2' }
            : isBlock2
            ? { type: 'rir' as const, early: '0', last: '0' }
            : ex.effort,
          sourceRef: { programId: 'min-max', block: blockLabel, week: weekNum, day: d.title }
        }))
      }))
    };
  })
};
