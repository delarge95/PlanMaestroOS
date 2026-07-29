// src/data/fitness/programs/minMax.ts - Official Jeff Nippard Min-Max Program (12 Weeks)
import type { TrainingProgram, ProgramWeek } from './types';

const generateMinMaxWeeks = (): ProgramWeek[] => {
  const weeks: ProgramWeek[] = [];

  for (let w = 1; w <= 12; w++) {
    const isBlock2 = w >= 7;
    const isDeload = w === 6 || w === 12;
    const earlyRpe = isDeload ? '6-7' : isBlock2 ? 'RIR 0 / Fallo' : 'RIR 1';
    const lastRpe = isDeload ? '7' : isBlock2 ? 'Fallo + Drop Set' : 'RIR 0';

    weeks.push({
      weekNumber: w,
      title: w <= 5 ? `Bloque 1: Acumulación Base RIR 1 (Semana ${w})` : w === 6 ? `Semana 6: Descarga Activa (Deload)` : w <= 11 ? `Bloque 2: Máxima Intensidad RIR 0 & Drop Sets (Semana ${w})` : `Semana 12: Deload Final & Test`,
      isDeload,
      days: [
        {
          id: `mm-w${w}-d1`,
          name: 'Día 1: Upper 1 (Empuje & Pecho)',
          targetMuscles: ['Pectorales', 'Dorsales', 'Tríceps', 'Bíceps'],
          exercises: [
            {
              exerciseId: '45° Incline Barbell Press',
              displayName: 'Incline Barbell Press (Press Inclinado)',
              warmupSets: 2,
              workingSets: 2,
              targetReps: '6-8',
              restPeriod: '3-5 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Dumbbell Incline Press', 'Smith Machine Incline Press'],
              notes: 'Banca inclinada a 30°. Pausa de 1s abajo con máxima tensión en pectoral superior.'
            },
            {
              exerciseId: 'Pec Deck Flye',
              displayName: 'Pec Deck / DB Flye',
              warmupSets: 1,
              workingSets: 2,
              targetReps: '6-8',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              intensityTechnique: isBlock2 ? 'Lengthened Partials (Parciales en Estiramiento)' : undefined,
              substituteOptions: ['Pec Deck Flye', 'Low-to-High Cable Flye'],
              notes: 'Pausa de 1 segundo en el estiramiento profundo.'
            },
            {
              exerciseId: 'Pull-Up',
              displayName: 'Pull-Up (Wide-Grip)',
              warmupSets: 1,
              workingSets: 2,
              targetReps: '6-8',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Pull-Up', 'Wide-Grip Lat Pulldown'],
              notes: 'Agarre prono amplio. Excéntrica de 3 segundos.'
            },
            {
              exerciseId: 'Cable Tricep Pushdown (V-Bar)',
              displayName: 'Triceps Pressdown',
              warmupSets: 1,
              workingSets: 2,
              targetReps: '6-8',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Cable Tricep Pushdown (V-Bar)', 'Chest Dip'],
              notes: 'Fijar codos al costado del cuerpo.'
            },
            {
              exerciseId: 'EZ-Bar Preacher Curl',
              displayName: 'EZ-Bar Preacher Curl',
              warmupSets: 1,
              workingSets: 2,
              targetReps: '6-8',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['EZ-Bar Preacher Curl', 'DB Alternating Curl'],
              notes: 'Tríceps fijos sobre el respaldo sin impulso.'
            }
          ]
        },
        {
          id: `mm-w${w}-d2`,
          name: 'Día 2: Lower 1 (Sentadilla & Prehab Rodilla)',
          targetMuscles: ['Cuádriceps', 'Isquiotibiales', 'Pantorrillas'],
          exercises: [
            {
              exerciseId: 'Lying Leg Curl',
              displayName: 'Lying Leg Curl',
              warmupSets: 1,
              workingSets: 2,
              targetReps: '6-8',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Lying Leg Curl', 'Seated Leg Curl'],
              notes: 'Máximo estiramiento en la posición inicial.'
            },
            {
              exerciseId: 'Back Squat',
              displayName: 'Back Squat (Sentadilla Trasera)',
              warmupSets: 3,
              workingSets: 2,
              targetReps: '6-8',
              restPeriod: '3-5 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Barbell Lunge', 'Leg Press (45°)'],
              notes: 'Profundidad limpia a paralela.'
            },
            {
              exerciseId: 'Spanish Squats',
              displayName: 'Spanish Squats (Soporte Rotuliano)',
              warmupSets: 1,
              workingSets: 2,
              targetReps: '3-5 x 45s holds',
              restPeriod: '1 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Spanish Squats', 'Leg Extension'],
              notes: 'Isométrico para salud del tendón rotuliano.'
            },
            {
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: 1,
              workingSets: 2,
              targetReps: '8-10',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Standing Calf Raise', 'Leg Press Calf Press'],
              notes: 'Pausa de 1-2s en el estiramiento.'
            }
          ]
        },
        {
          id: `mm-w${w}-d3`,
          name: 'Día 3: Upper 2 (Tracción & Espalda Media)',
          targetMuscles: ['Dorsales', 'Trapecios', 'Hombro Posterior'],
          exercises: [
            {
              exerciseId: 'Wide-Grip Lat Pulldown',
              displayName: 'Close-Grip / Wide-Grip Lat Pulldown',
              warmupSets: 2,
              workingSets: 2,
              targetReps: '8-10',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Wide-Grip Lat Pulldown', 'Pull-Up'],
              notes: 'Tracción al pecho superior.'
            },
            {
              exerciseId: 'Chest-Supported Dumbbell Row',
              displayName: 'Chest-Supported T-Bar / DB Row',
              warmupSets: 2,
              workingSets: 2,
              targetReps: '8-10',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Chest-Supported Dumbbell Row', 'Barbell Row'],
              notes: 'Retracción escapular sostenida.'
            },
            {
              exerciseId: 'Chest Press Machine',
              displayName: 'Chest Press Machine / Dip',
              warmupSets: 2,
              workingSets: 2,
              targetReps: '8-10',
              restPeriod: '3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Chest Press Machine', 'Barbell Bench Press'],
              notes: 'Pausa de 1s abajo.'
            }
          ]
        },
        {
          id: `mm-w${w}-d4`,
          name: 'Día 4: Lower 2 (Bisagra de Cadera & Glúteo)',
          targetMuscles: ['Isquiotibiales', 'Glúteos'],
          exercises: [
            {
              exerciseId: 'Barbell RDL',
              displayName: 'Barbell Romanian Deadlift (RDL)',
              warmupSets: 2,
              workingSets: 2,
              targetReps: '6-8',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Barbell RDL', 'Barbell Hip Thrust'],
              notes: 'Bisagra pélvica limpia.'
            },
            {
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust',
              warmupSets: 2,
              workingSets: 2,
              targetReps: '6-8',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Barbell Hip Thrust', 'Machine Hip Abduction'],
              notes: 'Bloqueo arriba sintiendo contracción de glúteos.'
            }
          ]
        },
        {
          id: `mm-w${w}-d5`,
          name: 'Día 5: Arms & Delts (Aislamiento)',
          targetMuscles: ['Bíceps', 'Tríceps', 'Deltoides Lateral'],
          exercises: [
            {
              exerciseId: 'DB Incline Curl',
              displayName: 'Bayesian / Incline DB Curl',
              warmupSets: 1,
              workingSets: 2,
              targetReps: '6-8',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['DB Incline Curl', 'EZ-Bar Preacher Curl'],
              notes: 'Estiramiento profundo.'
            },
            {
              exerciseId: 'DB French Press',
              displayName: 'Overhead Cable / DB Triceps Extension',
              warmupSets: 1,
              workingSets: 2,
              targetReps: '8-10',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['DB French Press', 'Cable Tricep Pushdown (V-Bar)'],
              notes: 'Extensión por encima de la cabeza.'
            }
          ]
        }
      ]
    });
  }

  return weeks;
};

export const minMaxProgram: TrainingProgram = {
  id: 'min-max',
  title: 'The Min-Max Program',
  source: 'Jeff Nippard (2024)',
  pdfUrl: '/library/fitness/the-min-max-program.pdf',
  durationWeeks: 12,
  split: ['Upper 1', 'Lower 1', 'Upper 2', 'Lower 2', 'Arms & Delts'],
  methodology: [
    'Mínimo Volumen / Máxima Intensidad',
    '1-2 Hard Sets a RIR 0-1',
    'Bloque 1 (Acumulación) + Bloque 2 (Fallo & Técnicas)'
  ],
  equipment: ['Barbell', 'Dumbbells', 'Cables', 'Machines'],
  weeks: generateMinMaxWeeks()
};
