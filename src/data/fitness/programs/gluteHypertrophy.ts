// src/data/fitness/programs/gluteHypertrophy.ts - Official Jeff Nippard Glute Hypertrophy Program (8 Weeks)
import type { TrainingProgram, ProgramWeek } from './types';

const generateGluteWeeks = (): ProgramWeek[] => {
  const weeks: ProgramWeek[] = [];

  for (let w = 1; w <= 8; w++) {
    const isMetabolic = w >= 7;
    const earlyRpe = isMetabolic ? '8.5-9' : '7.5-8';
    const lastRpe = isMetabolic ? 'RIR 0 / Fallo' : '8.5';

    weeks.push({
      weekNumber: w,
      title: w <= 6 ? `Bloque 1: Carga Progresiva & Tensión Mecánica (Semana ${w})` : `Bloque 2: Estrés Metabólico & Drop Sets (Semana ${w})`,
      isDeload: w === 4,
      days: [
        {
          id: `glute-w${w}-d1`,
          name: 'Día 1: Lower Body (Enfoque Hip Thrust & Glúteo Máximo)',
          targetMuscles: ['Glúteo Máximo', 'Cuádriceps', 'Isquiotibiales'],
          exercises: [
            {
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust (Thrust con Barra)',
              warmupSets: 3,
              workingSets: 4,
              targetReps: isMetabolic ? '12-15' : '8-10',
              restPeriod: '3.0 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Barbell Hip Thrust', 'Machine Hip Abduction'],
              notes: 'Empujar con los talones, mantener barbilla hacia abajo y retroversión pélvica arriba sosteniendo 1-2 segundos.'
            },
            {
              exerciseId: 'Back Squat',
              displayName: 'Wide-Stance Back Squat',
              warmupSets: 3,
              workingSets: 3,
              targetReps: '6-8',
              restPeriod: '3.0 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Smith Machine Squat', 'Leg Press (45°)'],
              notes: 'Postura más amplia (1.5x hombros) con 15° de rotación externa de pies para mayor reclutamiento de glúteos.'
            },
            {
              exerciseId: 'Barbell RDL',
              displayName: 'Romanian Deadlift (RDL)',
              warmupSets: 2,
              workingSets: 3,
              targetReps: '6-8',
              restPeriod: '2.0 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Barbell RDL', 'Dumbbell RDL'],
              notes: 'Llevar la cadera hacia atrás hasta sentir estiramiento en isquiotibiales y apretar glúteos al bloquear.'
            },
            {
              exerciseId: 'Lying Leg Curl',
              displayName: 'Seated Leg Curl / Swiss Ball Leg Curl',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '12-15',
              restPeriod: '1.5 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Lying Leg Curl', 'Seated Leg Curl'],
              notes: 'Mantener la cadera elevada y en línea recta con el torso.'
            },
            {
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction (Glúteo Medio)',
              warmupSets: 0,
              workingSets: 3,
              targetReps: '25-30',
              restPeriod: '1.5 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              intensityTechnique: isMetabolic ? 'Drop set triple' : undefined,
              substituteOptions: ['Machine Hip Abduction', 'Standing DB Lateral Raise'],
              notes: 'Inclinarse ligeramente hacia adelante para aislar el glúteo medio y superior.'
            }
          ]
        },
        {
          id: `glute-w${w}-d2`,
          name: 'Día 2: Upper Body & Core Support',
          targetMuscles: ['Dorsales', 'Pectorales', 'Hombros', 'Core'],
          exercises: [
            {
              exerciseId: 'Barbell Bench Press',
              displayName: 'Dumbbell Bench Press',
              warmupSets: 2,
              workingSets: 3,
              targetReps: '8-10',
              restPeriod: '2.0 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Barbell Bench Press', 'Chest Press Machine'],
              notes: 'Retracción escapular estable.'
            },
            {
              exerciseId: 'Wide-Grip Lat Pulldown',
              displayName: 'Lat Pulldown (Dorsales)',
              warmupSets: 2,
              workingSets: 3,
              targetReps: '10-12',
              restPeriod: '2.0 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Wide-Grip Lat Pulldown', 'Pull-Up'],
              notes: 'Llevar la barra al pecho superior.'
            },
            {
              exerciseId: 'Standing DB Lateral Raise',
              displayName: 'DB Lateral Raise',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '12-15',
              restPeriod: '1.0 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Standing DB Lateral Raise', 'Face Pull'],
              notes: 'Movimiento fluido sin impulso.'
            },
            {
              exerciseId: 'Cable Crunch',
              displayName: 'Plank / Cable Crunch',
              warmupSets: 0,
              workingSets: 3,
              targetReps: '45-60s',
              restPeriod: '1.0 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Cable Crunch', 'Dragon Flag'],
              notes: 'Tensión abdominal constante.'
            }
          ]
        },
        {
          id: `glute-w${w}-d3`,
          name: 'Día 3: Lower Body (Enfoque Cadena Posterior & Zancadas)',
          targetMuscles: ['Glúteos', 'Isquiotibiales', 'Cuádriceps'],
          exercises: [
            {
              exerciseId: 'Barbell Lunge',
              displayName: 'DB Walking Lunge (Zancadas)',
              warmupSets: 2,
              workingSets: 3,
              targetReps: '10-12 por pierna',
              restPeriod: '2.0 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Barbell Lunge', 'Leg Press (45°)'],
              notes: 'Torso ligeramente inclinado 15° hacia adelante para maximizar tensión en glúteo.'
            },
            {
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Banded Hip Thrust / Single-Leg Hip Thrust',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '15-20',
              restPeriod: '1.5 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Barbell Hip Thrust', 'Machine Hip Abduction'],
              notes: 'Usar banda elástica sobre las rodillas manteniendo las caderas niveladas.'
            },
            {
              exerciseId: 'Barbell 45° Hyperextension',
              displayName: '45° Hyperextension (Enfoque Glúteo)',
              warmupSets: 1,
              workingSets: 3,
              targetReps: '12-15',
              restPeriod: '1.5 min',
              earlySetRpe: earlyRpe,
              lastSetRpe: lastRpe,
              substituteOptions: ['Barbell 45° Hyperextension', 'Barbell RDL'],
              notes: 'Redondear ligeramente la espalda alta y meter la barbilla para enfocar en glúteos en lugar de lumbares.'
            }
          ]
        }
      ]
    });
  }

  return weeks;
};

export const gluteHypertrophyProgram: TrainingProgram = {
  id: 'glute-hypertrophy',
  title: 'Glute Hypertrophy Program',
  source: 'Jeff Nippard (2023)',
  pdfUrl: '/library/fitness/glute-hypertrophy-program.pdf',
  durationWeeks: 8,
  split: ['Lower #1 (Glute/Squat)', 'Upper Body', 'Lower #2 (Posterior/Lunges)'],
  methodology: [
    'Enfoque en Glúteo Máximo, Medio y Cadena Posterior',
    'Tensión Mecánica (Bloque 1) + Estrés Metabólico (Bloque 2)',
    'Técnicas de aislamiento específico y rotación externa'
  ],
  equipment: ['Barbell', 'Dumbbells', 'Machines', 'Resistance Bands'],
  weeks: generateGluteWeeks()
};
