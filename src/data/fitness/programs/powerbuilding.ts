// src/data/fitness/programs/powerbuilding.ts - Official Jeff Nippard Powerbuilding System (10 Weeks)
import type { TrainingProgram, ProgramWeek } from './types';

const generatePowerbuildingWeeks = (): ProgramWeek[] => {
  const weeks: ProgramWeek[] = [];

  for (let w = 1; w <= 10; w++) {
    const isDeload = w === 5 || w === 10;
    const isPeak = w === 9;
    const earlyRpe = isDeload ? '6-7' : isPeak ? '9' : '7.5-8.5';
    const lastRpe = isDeload ? '7' : isPeak ? '9.5' : '8.5';

    weeks.push({
      weekNumber: w,
      title: w <= 4 ? `Bloque 1: Fuerza Base & Hipertrofia (Semana ${w})` : w === 5 ? `Semana 5: Descarga de Mitad de Ciclo (Deload)` : w <= 8 ? `Bloque 2: Intensificación & Carga Pesada (Semana ${w})` : w === 9 ? `Semana 9: Pico de Fuerza (Peaking 1RM)` : `Semana 10: Deload Final & Test`,
      isDeload,
      days: [
        {
          id: `pb-w${w}-d1`,
          name: 'Día 1: Lower #1 (Squat & Peso Muerto Fuerza)',
          targetMuscles: ['Cuádriceps', 'Isquiotibiales', 'Espalda Baja', 'Abs'],
          exercises: [
            {
              exerciseId: 'Back Squat',
              displayName: 'Back Squat (Sentadilla Trasera)',
              warmupSets: 4,
              workingSets: isDeload ? 2 : 3,
              targetReps: isPeak ? '1-2' : '4-6',
              restPeriod: '3-4 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Smith Machine Squat', 'Leg Press (45°)'],
              notes: 'Top Set: 1x4 RPE 8.5 (o %1RM indicado). Mantener tensión en torso y profundidad constante.'
            },
            {
              exerciseId: 'Barbell RDL',
              displayName: 'Snatch-Grip Romanian Deadlift',
              warmupSets: 2,
              workingSets: 3,
              targetReps: '8-10',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Barbell RDL', 'Dumbbell RDL'],
              notes: 'Agarre amplio snatch-grip. Enfoque en tensión constante de isquiotibiales y glúteos.'
            },
            {
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension (Cuádriceps)',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '12-15',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Leg Extension', 'Spanish Squats'],
              notes: 'Contracción muscular constante.'
            },
            {
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: 0,
              workingSets: 4,
              targetReps: '15-20',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Standing Calf Raise', 'Leg Press Calf Press'],
              notes: 'Pausa de 1 segundo en flexión estirada.'
            }
          ]
        },
        {
          id: `pb-w${w}-d2`,
          name: 'Día 2: Upper #1 (Bench Press & Remo Fuerza)',
          targetMuscles: ['Pectorales', 'Dorsales', 'Hombros', 'Tríceps'],
          exercises: [
            {
              exerciseId: 'Barbell Bench Press',
              displayName: 'Barbell Bench Press (Press de Banca)',
              warmupSets: 3,
              workingSets: isDeload ? 2 : 3,
              targetReps: isPeak ? '1-2' : '5-6',
              restPeriod: '3-4 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Chest Press Machine', 'Dumbbell Incline Press'],
              notes: 'Top set pesado RPE 8.5 seguido de series back-off con pausa de 1 segundo en pecho.'
            },
            {
              exerciseId: 'Chest-Supported Dumbbell Row',
              displayName: 'Pendlay Row / Chest-Supported Row',
              warmupSets: 2,
              workingSets: 3,
              targetReps: '8-10',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Chest-Supported Dumbbell Row', 'Wide-Grip Lat Pulldown'],
              notes: 'Minimizar impulso corporal. Tracción estricta con dorsales y espalda media.'
            },
            {
              exerciseId: 'Chest Dip',
              displayName: 'Weighted Dip / DB Floor Press',
              warmupSets: 2,
              workingSets: 3,
              targetReps: '6-8',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Chest Dip', 'Barbell Incline Press'],
              notes: 'Adicionar peso si el RPE es inferior a 8.'
            },
            {
              exerciseId: 'Pull-Up',
              displayName: 'Eccentric-Accentuated Pull-Up',
              warmupSets: 1,
              workingSets: 2,
              targetReps: 'AMRAP (Al fallo)',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Pull-Up', 'Wide-Grip Lat Pulldown'],
              notes: 'Excéntrica de 3 segundos en cada repetición manteniendo forma estricta.'
            }
          ]
        },
        {
          id: `pb-w${w}-d3`,
          name: 'Día 3: Lower #2 (Deadlift & Accesorio de Pierna)',
          targetMuscles: ['Isquiotibiales', 'Glúteos', 'Cuádriceps', 'Core'],
          exercises: [
            {
              exerciseId: 'Deadlift',
              displayName: 'Conventional / Sumo Deadlift',
              warmupSets: 4,
              workingSets: isDeload ? 2 : 3,
              targetReps: isPeak ? '1-2' : '3-5',
              restPeriod: '4-5 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Barbell RDL', 'Conventional Deadlift'],
              notes: 'Usar la postura (convencional o sumo) donde se tenga mayor palanca mecánica.'
            },
            {
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust',
              warmupSets: 2,
              workingSets: 3,
              targetReps: '8-10',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Barbell Hip Thrust', 'Machine Hip Abduction'],
              notes: 'Bloqueo completo con retroversión pélvica y máxima contracción de glúteos.'
            },
            {
              exerciseId: 'Lying Leg Curl',
              displayName: 'Lying Leg Curl',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '10-12',
              restPeriod: '1-2 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Lying Leg Curl', 'Seated Leg Curl'],
              notes: 'Excéntrica suave.'
            }
          ]
        },
        {
          id: `pb-w${w}-d4`,
          name: 'Día 4: Upper #2 (OHP & Accesorios de Hipertrofia)',
          targetMuscles: ['Hombros', 'Pecho Superior', 'Bíceps', 'Tríceps'],
          exercises: [
            {
              exerciseId: 'Barbell Overhead Press (OHP) / Military Press',
              displayName: 'Overhead Press (OHP)',
              warmupSets: 3,
              workingSets: 3,
              targetReps: '6-8',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Barbell Overhead Press (OHP) / Military Press', 'Seated DB Press'],
              notes: 'Resetear barra en cada repetición sin rebotar en el pecho.'
            },
            {
              exerciseId: '45° Incline Barbell Press',
              displayName: 'Close-Grip Bench Press',
              warmupSets: 2,
              workingSets: 3,
              targetReps: '10-12',
              restPeriod: '2-3 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['45° Incline Barbell Press', 'Chest Dip'],
              notes: 'Agarre al ancho de hombros cerrando codos hacia el torso.'
            },
            {
              exerciseId: 'EZ-Bar Preacher Curl',
              displayName: 'Barbell / EZ-Bar Curl',
              warmupSets: 0,
              workingSets: 3,
              targetReps: '12-15',
              restPeriod: '1 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['EZ-Bar Preacher Curl', 'DB Alternating Curl'],
              notes: 'Enfoque en la tensión y bombeo muscular.'
            },
            {
              exerciseId: 'Cable Tricep Pushdown (V-Bar)',
              displayName: 'Skull Crusher',
              warmupSets: 0,
              workingSets: 3,
              targetReps: '8-10',
              restPeriod: '1 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Cable Tricep Pushdown (V-Bar)', 'DB French Press'],
              notes: 'Tensión constante en tríceps sobre banco plano.'
            }
          ]
        }
      ]
    });
  }

  return weeks;
};

export const powerbuildingProgram: TrainingProgram = {
  id: 'powerbuilding',
  title: 'Powerbuilding System (Fuerza & Hipertrofia)',
  source: 'Jeff Nippard (2020)',
  pdfUrl: '/library/fitness/powerbuilding-system.pdf',
  durationWeeks: 10,
  split: ['Lower #1', 'Upper #1', 'Lower #2', 'Upper #2'],
  methodology: [
    'Combinación de Fuerza %1RM + RPE y Hipertrofia',
    'Top Sets Pesados + Back-off Sets',
    'Fase de Peaking para 1RM en Semana 9'
  ],
  equipment: ['Barbell', 'Dumbbells', 'Bench', 'Dip Station'],
  weeks: generatePowerbuildingWeeks()
};
