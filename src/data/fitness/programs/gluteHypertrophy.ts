// src/data/fitness/programs/gluteHypertrophy.ts - Glute Hypertrophy Program
import type { TrainingProgram } from './types';
import { resolveExerciseId } from '../exerciseResolver';

const gluteDaysTemplate = [
  {
    id: 'glute-d1',
    title: 'Lower Body 1 (Fuerza & Cadena Posterior)',
    order: 1,
    exercises: [
      {
        id: 'gl-d1-ex1',
        exerciseId: resolveExerciseId('Barbell Hip Thrust'),
        displayName: 'Barbell Hip Thrust',
        warmupSets: '2',
        workingSets: 3,
        repRange: '10-12',
        rest: '1.5-2 min',
        effort: { type: 'rpe' as const, early: '7.5', last: '8.5' },
        substituteExerciseIds: [resolveExerciseId('Machine Hip Thrust'), resolveExerciseId('Barbell RDL')],
        notes: 'Squeeze de 1-2 segundos en la máxima extensión de cadera.',
        sourceRef: { programId: 'glute-hypertrophy', block: '1', week: 1, day: 'Lower Body 1' }
      },
      {
        id: 'gl-d1-ex2',
        exerciseId: resolveExerciseId('Barbell RDL'),
        displayName: 'Romanian Deadlift (RDL)',
        warmupSets: '2',
        workingSets: 3,
        repRange: '8-10',
        rest: '1.5 min',
        effort: { type: 'rpe' as const, early: '7.5', last: '8.0' },
        substituteExerciseIds: [resolveExerciseId('Machine Hip Abduction')],
        notes: 'Enfoque en estiramiento de glúteos e isquios.',
        sourceRef: { programId: 'glute-hypertrophy', block: '1', week: 1, day: 'Lower Body 1' }
      }
    ]
  }
];

export const gluteHypertrophyProgram: TrainingProgram = {
  id: 'glute-hypertrophy',
  title: 'Glute Hypertrophy Program',
  source: 'Glute_Hypertrophy_Program.pdf',
  durationWeeks: 8,
  split: ['Lower Body 1', 'Lower Body 2', 'Lower Body 3'],
  methodology: ['Tensión Mecánica en Extensión de Cadera', 'Volumen Metabólico & Bombeo', 'Frecuencia 3x/semana'],
  equipment: ['Barra', 'Mancuernas', 'Máquina de Abducción', 'Poleas'],
  weeks: Array.from({ length: 8 }, (_, index) => {
    const weekNum = index + 1;
    const isMetabolic = weekNum >= 7;

    return {
      week: weekNum,
      block: `Bloque ${isMetabolic ? '2 (Metabólico)' : '1 (Carga)'}`,
      isDeload: false,
      days: gluteDaysTemplate.map((d) => ({
        ...d,
        id: `gl-w${weekNum}-${d.id}`,
        exercises: d.exercises.map((ex) => ({
          ...ex,
          id: `gl-w${weekNum}-${ex.id}`,
          sourceRef: { programId: 'glute-hypertrophy', block: `Bloque ${isMetabolic ? '2' : '1'}`, week: weekNum, day: d.title }
        }))
      }))
    };
  })
};
