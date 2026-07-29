// src/data/fitness/programs/bodybuildingTransformation.ts - Official Jeff Nippard Bodybuilding Transformation System (12 Weeks)
import type { TrainingProgram, ProgramWeek } from './types';

const generateBodybuildingWeeks = (): ProgramWeek[] => {
  const weeks: ProgramWeek[] = [];

  for (let w = 1; w <= 12; w++) {
    const isDeload = w === 6 || w === 12;
    const isIntense = w >= 7 && w <= 11;
    const earlyRpe = isDeload ? '6-7' : isIntense ? '8-9' : '7-8';
    const lastRpe = isDeload ? '7-8' : isIntense ? 'RIR 0 / Fallo' : '8-9';

    weeks.push({
      weekNumber: w,
      title: w <= 5 ? `Fase 1: Fundación & Hipertrofia Base (Semana ${w})` : w === 6 ? `Semana 6: Descarga Activa (Deload)` : w <= 11 ? `Fase 2: Máxima Intensidad & Extensión de Series (Semana ${w})` : `Semana 12: Deload Final & Test`,
      isDeload,
      days: [
        {
          id: `bb-w${w}-d1`,
          name: 'Día 1: Upper (Fuerza & Pecho/Espalda)',
          targetMuscles: ['Pecho', 'Espalda', 'Hombros', 'Brazos'],
          exercises: [
            {
              exerciseId: '45° Incline Barbell Press',
              displayName: '45° Incline Machine Press / Barbell Press',
              warmupSets: 3,
              workingSets: isDeload ? 2 : 3,
              targetReps: '6-8',
              restPeriod: '3-5 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['45° Incline DB Press', '45° Incline Barbell Press'],
              notes: 'Pausa de 1 segundo en el punto más bajo manteniendo tensión constante en pectorales superiores.'
            },
            {
              exerciseId: 'Low-to-High Cable Flye',
              displayName: 'Bottom-Half DB Flye / Cable Crossover',
              warmupSets: 1,
              workingSets: isDeload ? 2 : 3,
              targetReps: '8-10',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              intensityTechnique: isIntense ? 'Drop set en última serie' : undefined,
              substituteOptions: ['Pec Deck Flye', 'Cable Crossover Ladder'],
              notes: 'Énfasis en el máximo estiramiento en la porción inferior del movimiento.'
            },
            {
              exerciseId: 'Wide-Grip Lat Pulldown',
              displayName: 'Dual-Handle Lat Pulldown',
              warmupSets: 2,
              workingSets: 3,
              targetReps: '8-10',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Wide-Grip Lat Pulldown', 'Pull-Up'],
              notes: 'Agarre a 1.5x ancho de hombros. Excéntrica controlada de 2-3 segundos sintiendo el estiramiento dorsal.'
            },
            {
              exerciseId: 'Standing DB Lateral Raise',
              displayName: 'Lean-In DB Lateral Raise',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '10-12',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['High-Cable Cuffed Lateral Raise', 'Standing DB Lateral Raise'],
              notes: 'Enfocar la contracción directamente en la porción lateral del deltoides.'
            },
            {
              exerciseId: 'Chest-Supported Dumbbell Row',
              displayName: 'Single-Arm DB Row',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '6-8',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Smith Machine Row', 'Pendlay Row'],
              notes: 'Tracción sobre plataforma o banco. Estiramiento completo en la parte inferior sin compensar con la zona lumbar.'
            },
            {
              exerciseId: 'Cable Tricep Pushdown (V-Bar)',
              displayName: 'DB Skull Crusher / Overhead Cable Triceps Extension',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '8-10',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['DB French Press', 'Cable Tricep Pushdown (V-Bar)'],
              notes: 'Pausa de 0.5-1 segundo en estiramiento.'
            },
            {
              exerciseId: 'DB Incline Curl',
              displayName: 'Incline DB Stretch Curl',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '8-10',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['EZ-Bar Preacher Curl', 'DB Incline Curl'],
              notes: 'Si existe asimetría de brazos, comenzar con el brazo menos desarrollado y equiparar repeticiones.'
            }
          ]
        },
        {
          id: `bb-w${w}-d2`,
          name: 'Día 2: Lower (Fuerza & Pierna Completa)',
          targetMuscles: ['Cuádriceps', 'Isquiotibiales', 'Pantorrillas', 'Abs'],
          exercises: [
            {
              exerciseId: 'Back Squat',
              displayName: 'High-Bar Back Squat',
              warmupSets: 3,
              workingSets: isDeload ? 2 : 3,
              targetReps: '6-8',
              restPeriod: '3-5 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Smith Machine Squat', 'Leg Press (45°)'],
              notes: 'Colocar los pies con avance leve para mantener torso erguido y máxima tensión en cuádriceps.'
            },
            {
              exerciseId: 'Barbell RDL',
              displayName: 'Snatch-Grip Romanian Deadlift',
              warmupSets: 2,
              workingSets: 3,
              targetReps: '6-8',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Barbell RDL', 'Dumbbell RDL'],
              notes: 'Detener el movimiento al 75% del bloqueo para mantener tensión constante en isquiotibiales.'
            },
            {
              exerciseId: 'Lying Leg Curl',
              displayName: 'Nordic Ham Curl / Seated Leg Curl',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '8-10',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Lying Leg Curl', 'Seated Leg Curl'],
              notes: 'Ajustar la máquina para máximo estiramiento en la posición inicial.'
            },
            {
              exerciseId: 'Leg Extension',
              displayName: 'Sissy Squat / Leg Extension',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '10-12',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Leg Extension', 'Spanish Squats'],
              notes: 'Ajustar el respaldo atrayendo la cadera hacia el asiento. Excéntrica de 2-3 segundos.'
            },
            {
              exerciseId: 'Standing Calf Raise',
              displayName: 'Leg Press Calf Press / Standing Calf Raise',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '10-12',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Standing Calf Raise', 'Leg Press Calf Press'],
              notes: 'Pausa de 1-2 segundos en el punto de estiramiento inferior.'
            },
            {
              exerciseId: 'Cable Crunch',
              displayName: 'Machine Crunch / Cable Crunch',
              warmupSets: 0,
              workingSets: 3,
              targetReps: '12-15',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Cable Crunch', 'Decline Weighted Crunch'],
              notes: 'Flexionar la columna de forma controlada sintiendo la contracción del recto abdominal.'
            }
          ]
        },
        {
          id: `bb-w${w}-d3`,
          name: 'Día 3: Pull (Enfoque Espalda & Bíceps)',
          targetMuscles: ['Dorsales', 'Trapecios', 'Deltoides Posterior', 'Bíceps'],
          exercises: [
            {
              exerciseId: 'Wide-Grip Lat Pulldown',
              displayName: 'Dual-Handle Lat Pulldown',
              warmupSets: 2,
              workingSets: 3,
              targetReps: '8-10',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Close-Grip Lat Pulldown', 'Pull-Up'],
              notes: 'Enfoque en tracción vertical limpia con retracción escapular.'
            },
            {
              exerciseId: 'Chest-Supported Dumbbell Row',
              displayName: 'Incline Chest-Supported DB Row',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '8-10',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Chest-Supported Dumbbell Row', 'Barbell Row'],
              notes: 'Pecho firmemente apoyado contra el banco inclinable.'
            },
            {
              exerciseId: 'Reverse Pec Deck Flye',
              displayName: 'Reverse Pec Deck / Cable Rear Delt Flye',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '10-12',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Reverse Pec Deck Flye', 'Face Pull'],
              notes: 'Conducir con los codos hacia afuera en un ángulo de 45°.'
            },
            {
              exerciseId: 'Barbell Shrug',
              displayName: 'DB Shrug / Machine Shrug',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '10-12',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Barbell Shrug', 'Dumbbell Shrug'],
              notes: 'Pausa de 1 segundo en contracción máxima de trapecios superiores.'
            },
            {
              exerciseId: 'EZ-Bar Preacher Curl',
              displayName: 'DB Curl / EZ-Bar Preacher Curl',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '10-12',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['EZ-Bar Preacher Curl', 'DB Alternating Curl'],
              notes: 'Mantener codos inmóviles sin balanceo del torso.'
            }
          ]
        },
        {
          id: `bb-w${w}-d4`,
          name: 'Día 4: Push (Enfoque Pecho, Hombro & Tríceps)',
          targetMuscles: ['Pectorales', 'Deltoides Frontal/Lateral', 'Tríceps'],
          exercises: [
            {
              exerciseId: 'Barbell Bench Press',
              displayName: 'DB Bench Press / Barbell Bench Press',
              warmupSets: 3,
              workingSets: 3,
              targetReps: '8-10',
              restPeriod: '3-5 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Barbell Bench Press', 'Chest Press Machine'],
              notes: 'Arco estable, retracción escapular y empuje controlado.'
            },
            {
              exerciseId: 'Barbell Overhead Press (OHP) / Military Press',
              displayName: 'Seated DB Shoulder Press',
              warmupSets: 2,
              workingSets: 3,
              targetReps: '8-10',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Barbell Overhead Press (OHP) / Military Press', 'Machine Press'],
              notes: 'Rango de movimiento completo bajando mancuernas al nivel de barbilla.'
            },
            {
              exerciseId: 'Low-to-High Cable Flye',
              displayName: 'Low-to-High Cable Crossover',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '10-12',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Low-to-High Cable Flye', 'Pec Deck Flye'],
              notes: 'Cruzar ligeramente las manos al final de la contracción.'
            },
            {
              exerciseId: 'Standing DB Lateral Raise',
              displayName: 'Lean-In DB Lateral Raise',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '10-12',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Standing DB Lateral Raise', 'High-Cable Cuffed Lateral Raise'],
              notes: 'Elevación lateral estricta hasta la altura de los hombros.'
            },
            {
              exerciseId: 'Cable Tricep Pushdown (V-Bar)',
              displayName: 'DB Skull Crusher / Triceps Pressdown',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '10-12',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Cable Tricep Pushdown (V-Bar)', 'Chest Dip'],
              notes: 'Extensión completa sintiendo la tensión en la cabeza larga y lateral del tríceps.'
            }
          ]
        },
        {
          id: `bb-w${w}-d5`,
          name: 'Día 5: Legs (Enfoque Hipertrofia & Glúteos)',
          targetMuscles: ['Cuádriceps', 'Isquiotibiales', 'Glúteos', 'Pantorrillas'],
          exercises: [
            {
              exerciseId: 'Barbell Lunge',
              displayName: 'DB Walking Lunge',
              warmupSets: 2,
              workingSets: 3,
              targetReps: '8-10 por pierna',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Barbell Lunge', 'Leg Press (45°)'],
              notes: 'Pasos largos manteniendo rodilla estable y torso ligeramente inclinado hacia adelante.'
            },
            {
              exerciseId: 'Lying Leg Curl',
              displayName: 'Nordic Ham Curl / Lying Leg Curl',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '10-12',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Lying Leg Curl', 'Seated Leg Curl'],
              notes: 'Contracción sostenida de 1 segundo en el punto de flexión máxima.'
            },
            {
              exerciseId: 'Leg Extension',
              displayName: 'Goblet Squat / Leg Extension',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '10-12',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Leg Extension', 'Back Squat'],
              notes: 'Ajustar la carga para fallo muscular técnico al final de la última serie.'
            },
            {
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: 1,
              workingSets: 4,
              targetReps: '12-15',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Standing Calf Raise', 'Leg Press Calf Press'],
              notes: 'Rango de movimiento completo con pausa estricta abajo.'
            }
          ]
        }
      ]
    });
  }

  return weeks;
};

export const bodybuildingTransformationProgram: TrainingProgram = {
  id: 'bodybuilding-transformation',
  title: 'The Bodybuilding Transformation System',
  source: 'Jeff Nippard (2023)',
  pdfUrl: '/library/fitness/bodybuilding-transformation-system.pdf',
  durationWeeks: 12,
  split: ['Upper', 'Lower', 'Pull', 'Push', 'Legs'],
  methodology: [
    'Split de 5 Días (Fuerza + Hipertrofia)',
    'Early-set y Last-set RPE objetivo',
    'Sustitutos oficiales nivel 1 y nivel 2',
    'Técnicas de estiramiento bajo carga y parciales'
  ],
  equipment: ['Barbell', 'Dumbbells', 'Cables', 'Machines', 'Leg Press'],
  weeks: generateBodybuildingWeeks()
};
