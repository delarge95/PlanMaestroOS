// src/data/fitness/programs/gluteHypertrophy.ts - 100% Faithful FitApp Jeff Nippard Glute Hypertrophy Program
import type { TrainingProgram } from './types';

export const gluteHypertrophyProgram: TrainingProgram = {
  id: 'glute-hypertrophy',
  title: 'Glute Hypertrophy Program',
  source: 'Jeff Nippard (2023)',
  pdfUrl: '/library/fitness/glute-hypertrophy-program.pdf',
  durationWeeks: 8,
  split: ['Lower Body (Fuerza & Glúteo)', 'Lower Body (Hipertrofia Glúteo Mayor)', 'Lower Body (Densidad & Zancadas)'],
  methodology: [
    'Enfoque en Glúteo Máximo, Medio y Cadena Posterior',
    'Tensión Mecánica (Bloque 1) + Estrés Metabólico (Bloque 2)',
    'Técnicas de aislamiento específico y rotación externa'
  ],
  equipment: ['Barbell', 'Dumbbells', 'Machines', 'Resistance Bands'],
  weeks: [
    {
      weekNumber: 1,
      title: 'Semana 1 (Bloque de Acumulación & Carga)',
      isDeload: false,
      days: [
        {
          id: 'glute-w1-d1',
          name: 'Día 1: Lower Body (Fuerza & Glúteo)',
          targetMuscles: ['Glúteo Máximo', 'Cuádriceps', 'Isquiotibiales', 'Glúteo Medio'],
          exercises: [
            {
              id: 'glute-w1-d1-ex1',
              exerciseId: 'Back Squat',
              displayName: 'Back Squat',
              warmupSets: 'Pirámide',
              workingSets: 3,
              targetReps: '5',
              earlySetRpe: '75-80% 1RM',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '3.0 min',
              substitutionOption1: 'Safety Bar Squat',
              substitutionOption2: 'Goblet Squat',
              substituteOptions: ['Safety Bar Squat', 'Goblet Squat'],
              notes: 'Empujar con los talones, rodillas hacia afuera. Stance ancho con 15° de apertura.'
            },
            {
              id: 'glute-w1-d1-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Romanian Deadlift',
              warmupSets: '1-2',
              workingSets: 3,
              targetReps: '6-8',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB RDL',
              substitutionOption2: 'Snatch-Grip RDL',
              substituteOptions: ['DB RDL', 'Snatch-Grip RDL'],
              notes: 'Llevar caderas atrás hasta sentir estiramiento, luego apretar glúteos al subir.'
            },
            {
              id: 'glute-w1-d1-ex3',
              exerciseId: 'Seated Leg Curl',
              displayName: 'Seated Leg Curl',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '12-15',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.0 min',
              substitutionOption1: 'Lying Leg Curl',
              substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Lying Leg Curl', 'Nordic Ham Curl'],
              notes: 'Super serie inmediata con Swiss Ball Leg Curl. Rango completo.'
            },
            {
              id: 'glute-w1-d1-ex4',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0',
              workingSets: 3,
              targetReps: '25-30',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'Cable Hip Abduction',
              substitutionOption2: 'Banded Side Walk',
              substituteOptions: ['Cable Hip Abduction', 'Banded Side Walk'],
              notes: 'Glúteos elevados 5-10 cm del asiento. Tempo rápido y tensión constante.'
            }
          ]
        },
        {
          id: 'glute-w1-d2',
          name: 'Día 2: Lower Body (Hipertrofia Glúteo Mayor)',
          targetMuscles: ['Glúteo Máximo', 'Cadena Posterior'],
          exercises: [
            {
              id: 'glute-w1-d2-ex1',
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust',
              warmupSets: '2-3',
              workingSets: 3,
              targetReps: '10-12',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'Single Leg Hip Thrust',
              substitutionOption2: 'Machine Hip Thrust',
              substituteOptions: ['Single Leg Hip Thrust', 'Machine Hip Thrust'],
              notes: 'Postura ancha, 15° de rotación de pies. Squeeze fuerte de glúteos arriba.'
            },
            {
              id: 'glute-w1-d2-ex2',
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust (Drop Set)',
              warmupSets: '0',
              workingSets: 1,
              targetReps: '15-20',
              earlySetRpe: 'RPE 9.0',
              lastSetRpe: 'RIR 0',
              lastSetIntensityTechnique: 'Drop Set',
              restPeriod: '1.5 min',
              substitutionOption1: 'Banded Hip Thrust',
              substitutionOption2: 'Frog Pumps',
              substituteOptions: ['Banded Hip Thrust', 'Frog Pumps'],
              notes: 'Reducir peso un 40-50% e inmediatamente realizar 15-20 reps adicionales.'
            },
            {
              id: 'glute-w1-d2-ex3',
              exerciseId: 'Cable Pullthrough',
              displayName: 'Cable Pullthrough',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '10-12',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB Swing',
              substitutionOption2: 'Hyperextension 45°',
              substituteOptions: ['DB Swing', 'Hyperextension 45°'],
              notes: 'Cuerda en polea baja, flexión de cadera profunda y extensión explosiva.'
            },
            {
              id: 'glute-w1-d2-ex4',
              exerciseId: 'Cable Glute Kick Back',
              displayName: 'Cable Glute Kick Back',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '12-15',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'Banded Kickback',
              substitutionOption2: 'Donkey Kicks',
              substituteOptions: ['Banded Kickback', 'Donkey Kicks'],
              notes: 'Inclinación ligera hacia adelante. Empujar cadera atrás y arriba en arco.'
            }
          ]
        },
        {
          id: 'glute-w1-d3',
          name: 'Día 3: Lower Body (Densidad & Zancadas)',
          targetMuscles: ['Glúteos', 'Isquiotibiales', 'Cuádriceps'],
          exercises: [
            {
              id: 'glute-w1-d3-ex1',
              exerciseId: 'Barbell Lunge',
              displayName: 'Walking Lunge',
              warmupSets: '2',
              workingSets: 3,
              targetReps: '20-30 Zancadas',
              earlySetRpe: 'RPE 7.5',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB Static Lunge',
              substitutionOption2: 'Bulgarian Split Squat',
              substituteOptions: ['DB Static Lunge', 'Bulgarian Split Squat'],
              notes: 'Pasos de longitud media. Usar mancuernas o barra en los hombros.'
            },
            {
              id: 'glute-w1-d3-ex2',
              exerciseId: 'Barbell 45° Hyperextension',
              displayName: 'Lower Back Extension',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '15-20',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.0 min',
              substitutionOption1: 'Jefferson Curl',
              substitutionOption2: 'Glute Ham Raise',
              substituteOptions: ['Jefferson Curl', 'Glute Ham Raise'],
              notes: 'Espalda ligeramente redondeada y pies a 15°. Squeeze de glúteos arriba.'
            },
            {
              id: 'glute-w1-d3-ex3',
              exerciseId: 'Frog Pump',
              displayName: 'Frog Pump',
              warmupSets: '0',
              workingSets: 2,
              targetReps: '30-50',
              earlySetRpe: 'RPE 9.0',
              lastSetRpe: 'RIR 0',
              restPeriod: '1.0 min',
              substitutionOption1: 'Banded Abduction',
              substitutionOption2: 'Elevated Glute Bridge',
              substituteOptions: ['Banded Abduction', 'Elevated Glute Bridge'],
              notes: 'Tempo rápido y apretón máximo al llegar a la extensión.'
            }
          ]
        }
      ]
    },
    {
      weekNumber: 2,
      title: 'Semana 2 (Bloque de Acumulación & Carga)',
      isDeload: false,
      days: [
        {
          id: 'glute-w2-d1',
          name: 'Día 1: Lower Body (Fuerza & Glúteo)',
          targetMuscles: ['Glúteo Máximo', 'Cuádriceps', 'Isquiotibiales', 'Glúteo Medio'],
          exercises: [
            {
              id: 'glute-w2-d1-ex1',
              exerciseId: 'Back Squat',
              displayName: 'Back Squat',
              warmupSets: 'Pirámide',
              workingSets: 3,
              targetReps: '5',
              earlySetRpe: '75-80% 1RM',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '3.0 min',
              substitutionOption1: 'Safety Bar Squat',
              substitutionOption2: 'Goblet Squat',
              substituteOptions: ['Safety Bar Squat', 'Goblet Squat'],
              notes: 'Empujar con los talones, rodillas hacia afuera. Stance ancho con 15° de apertura.'
            },
            {
              id: 'glute-w2-d1-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Romanian Deadlift',
              warmupSets: '1-2',
              workingSets: 3,
              targetReps: '6-8',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB RDL',
              substitutionOption2: 'Snatch-Grip RDL',
              substituteOptions: ['DB RDL', 'Snatch-Grip RDL'],
              notes: 'Llevar caderas atrás hasta sentir estiramiento, luego apretar glúteos al subir.'
            },
            {
              id: 'glute-w2-d1-ex3',
              exerciseId: 'Seated Leg Curl',
              displayName: 'Seated Leg Curl',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '12-15',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.0 min',
              substitutionOption1: 'Lying Leg Curl',
              substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Lying Leg Curl', 'Nordic Ham Curl'],
              notes: 'Super serie inmediata con Swiss Ball Leg Curl. Rango completo.'
            },
            {
              id: 'glute-w2-d1-ex4',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0',
              workingSets: 3,
              targetReps: '25-30',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'Cable Hip Abduction',
              substitutionOption2: 'Banded Side Walk',
              substituteOptions: ['Cable Hip Abduction', 'Banded Side Walk'],
              notes: 'Glúteos elevados 5-10 cm del asiento. Tempo rápido y tensión constante.'
            }
          ]
        },
        {
          id: 'glute-w2-d2',
          name: 'Día 2: Lower Body (Hipertrofia Glúteo Mayor)',
          targetMuscles: ['Glúteo Máximo', 'Cadena Posterior'],
          exercises: [
            {
              id: 'glute-w2-d2-ex1',
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust',
              warmupSets: '2-3',
              workingSets: 3,
              targetReps: '10-12',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'Single Leg Hip Thrust',
              substitutionOption2: 'Machine Hip Thrust',
              substituteOptions: ['Single Leg Hip Thrust', 'Machine Hip Thrust'],
              notes: 'Postura ancha, 15° de rotación de pies. Squeeze fuerte de glúteos arriba.'
            },
            {
              id: 'glute-w2-d2-ex2',
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust (Drop Set)',
              warmupSets: '0',
              workingSets: 1,
              targetReps: '15-20',
              earlySetRpe: 'RPE 9.0',
              lastSetRpe: 'RIR 0',
              lastSetIntensityTechnique: 'Drop Set',
              restPeriod: '1.5 min',
              substitutionOption1: 'Banded Hip Thrust',
              substitutionOption2: 'Frog Pumps',
              substituteOptions: ['Banded Hip Thrust', 'Frog Pumps'],
              notes: 'Reducir peso un 40-50% e inmediatamente realizar 15-20 reps adicionales.'
            },
            {
              id: 'glute-w2-d2-ex3',
              exerciseId: 'Cable Pullthrough',
              displayName: 'Cable Pullthrough',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '10-12',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB Swing',
              substitutionOption2: 'Hyperextension 45°',
              substituteOptions: ['DB Swing', 'Hyperextension 45°'],
              notes: 'Cuerda en polea baja, flexión de cadera profunda y extensión explosiva.'
            },
            {
              id: 'glute-w2-d2-ex4',
              exerciseId: 'Cable Glute Kick Back',
              displayName: 'Cable Glute Kick Back',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '12-15',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'Banded Kickback',
              substitutionOption2: 'Donkey Kicks',
              substituteOptions: ['Banded Kickback', 'Donkey Kicks'],
              notes: 'Inclinación ligera hacia adelante. Empujar cadera atrás y arriba en arco.'
            }
          ]
        },
        {
          id: 'glute-w2-d3',
          name: 'Día 3: Lower Body (Densidad & Zancadas)',
          targetMuscles: ['Glúteos', 'Isquiotibiales', 'Cuádriceps'],
          exercises: [
            {
              id: 'glute-w2-d3-ex1',
              exerciseId: 'Barbell Lunge',
              displayName: 'Walking Lunge',
              warmupSets: '2',
              workingSets: 3,
              targetReps: '20-30 Zancadas',
              earlySetRpe: 'RPE 7.5',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB Static Lunge',
              substitutionOption2: 'Bulgarian Split Squat',
              substituteOptions: ['DB Static Lunge', 'Bulgarian Split Squat'],
              notes: 'Pasos de longitud media. Usar mancuernas o barra en los hombros.'
            },
            {
              id: 'glute-w2-d3-ex2',
              exerciseId: 'Barbell 45° Hyperextension',
              displayName: 'Lower Back Extension',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '15-20',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.0 min',
              substitutionOption1: 'Jefferson Curl',
              substitutionOption2: 'Glute Ham Raise',
              substituteOptions: ['Jefferson Curl', 'Glute Ham Raise'],
              notes: 'Espalda ligeramente redondeada y pies a 15°. Squeeze de glúteos arriba.'
            },
            {
              id: 'glute-w2-d3-ex3',
              exerciseId: 'Frog Pump',
              displayName: 'Frog Pump',
              warmupSets: '0',
              workingSets: 2,
              targetReps: '30-50',
              earlySetRpe: 'RPE 9.0',
              lastSetRpe: 'RIR 0',
              restPeriod: '1.0 min',
              substitutionOption1: 'Banded Abduction',
              substitutionOption2: 'Elevated Glute Bridge',
              substituteOptions: ['Banded Abduction', 'Elevated Glute Bridge'],
              notes: 'Tempo rápido y apretón máximo al llegar a la extensión.'
            }
          ]
        }
      ]
    },
    {
      weekNumber: 3,
      title: 'Semana 3 (Bloque de Acumulación & Carga)',
      isDeload: false,
      days: [
        {
          id: 'glute-w3-d1',
          name: 'Día 1: Lower Body (Fuerza & Glúteo)',
          targetMuscles: ['Glúteo Máximo', 'Cuádriceps', 'Isquiotibiales', 'Glúteo Medio'],
          exercises: [
            {
              id: 'glute-w3-d1-ex1',
              exerciseId: 'Back Squat',
              displayName: 'Back Squat',
              warmupSets: 'Pirámide',
              workingSets: 3,
              targetReps: '5',
              earlySetRpe: '75-80% 1RM',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '3.0 min',
              substitutionOption1: 'Safety Bar Squat',
              substitutionOption2: 'Goblet Squat',
              substituteOptions: ['Safety Bar Squat', 'Goblet Squat'],
              notes: 'Empujar con los talones, rodillas hacia afuera. Stance ancho con 15° de apertura.'
            },
            {
              id: 'glute-w3-d1-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Romanian Deadlift',
              warmupSets: '1-2',
              workingSets: 3,
              targetReps: '6-8',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB RDL',
              substitutionOption2: 'Snatch-Grip RDL',
              substituteOptions: ['DB RDL', 'Snatch-Grip RDL'],
              notes: 'Llevar caderas atrás hasta sentir estiramiento, luego apretar glúteos al subir.'
            },
            {
              id: 'glute-w3-d1-ex3',
              exerciseId: 'Seated Leg Curl',
              displayName: 'Seated Leg Curl',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '12-15',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.0 min',
              substitutionOption1: 'Lying Leg Curl',
              substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Lying Leg Curl', 'Nordic Ham Curl'],
              notes: 'Super serie inmediata con Swiss Ball Leg Curl. Rango completo.'
            },
            {
              id: 'glute-w3-d1-ex4',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0',
              workingSets: 3,
              targetReps: '25-30',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'Cable Hip Abduction',
              substitutionOption2: 'Banded Side Walk',
              substituteOptions: ['Cable Hip Abduction', 'Banded Side Walk'],
              notes: 'Glúteos elevados 5-10 cm del asiento. Tempo rápido y tensión constante.'
            }
          ]
        },
        {
          id: 'glute-w3-d2',
          name: 'Día 2: Lower Body (Hipertrofia Glúteo Mayor)',
          targetMuscles: ['Glúteo Máximo', 'Cadena Posterior'],
          exercises: [
            {
              id: 'glute-w3-d2-ex1',
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust',
              warmupSets: '2-3',
              workingSets: 3,
              targetReps: '10-12',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'Single Leg Hip Thrust',
              substitutionOption2: 'Machine Hip Thrust',
              substituteOptions: ['Single Leg Hip Thrust', 'Machine Hip Thrust'],
              notes: 'Postura ancha, 15° de rotación de pies. Squeeze fuerte de glúteos arriba.'
            },
            {
              id: 'glute-w3-d2-ex2',
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust (Drop Set)',
              warmupSets: '0',
              workingSets: 1,
              targetReps: '15-20',
              earlySetRpe: 'RPE 9.0',
              lastSetRpe: 'RIR 0',
              lastSetIntensityTechnique: 'Drop Set',
              restPeriod: '1.5 min',
              substitutionOption1: 'Banded Hip Thrust',
              substitutionOption2: 'Frog Pumps',
              substituteOptions: ['Banded Hip Thrust', 'Frog Pumps'],
              notes: 'Reducir peso un 40-50% e inmediatamente realizar 15-20 reps adicionales.'
            },
            {
              id: 'glute-w3-d2-ex3',
              exerciseId: 'Cable Pullthrough',
              displayName: 'Cable Pullthrough',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '10-12',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB Swing',
              substitutionOption2: 'Hyperextension 45°',
              substituteOptions: ['DB Swing', 'Hyperextension 45°'],
              notes: 'Cuerda en polea baja, flexión de cadera profunda y extensión explosiva.'
            },
            {
              id: 'glute-w3-d2-ex4',
              exerciseId: 'Cable Glute Kick Back',
              displayName: 'Cable Glute Kick Back',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '12-15',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'Banded Kickback',
              substitutionOption2: 'Donkey Kicks',
              substituteOptions: ['Banded Kickback', 'Donkey Kicks'],
              notes: 'Inclinación ligera hacia adelante. Empujar cadera atrás y arriba en arco.'
            }
          ]
        },
        {
          id: 'glute-w3-d3',
          name: 'Día 3: Lower Body (Densidad & Zancadas)',
          targetMuscles: ['Glúteos', 'Isquiotibiales', 'Cuádriceps'],
          exercises: [
            {
              id: 'glute-w3-d3-ex1',
              exerciseId: 'Barbell Lunge',
              displayName: 'Walking Lunge',
              warmupSets: '2',
              workingSets: 3,
              targetReps: '20-30 Zancadas',
              earlySetRpe: 'RPE 7.5',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB Static Lunge',
              substitutionOption2: 'Bulgarian Split Squat',
              substituteOptions: ['DB Static Lunge', 'Bulgarian Split Squat'],
              notes: 'Pasos de longitud media. Usar mancuernas o barra en los hombros.'
            },
            {
              id: 'glute-w3-d3-ex2',
              exerciseId: 'Barbell 45° Hyperextension',
              displayName: 'Lower Back Extension',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '15-20',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.0 min',
              substitutionOption1: 'Jefferson Curl',
              substitutionOption2: 'Glute Ham Raise',
              substituteOptions: ['Jefferson Curl', 'Glute Ham Raise'],
              notes: 'Espalda ligeramente redondeada y pies a 15°. Squeeze de glúteos arriba.'
            },
            {
              id: 'glute-w3-d3-ex3',
              exerciseId: 'Frog Pump',
              displayName: 'Frog Pump',
              warmupSets: '0',
              workingSets: 2,
              targetReps: '30-50',
              earlySetRpe: 'RPE 9.0',
              lastSetRpe: 'RIR 0',
              restPeriod: '1.0 min',
              substitutionOption1: 'Banded Abduction',
              substitutionOption2: 'Elevated Glute Bridge',
              substituteOptions: ['Banded Abduction', 'Elevated Glute Bridge'],
              notes: 'Tempo rápido y apretón máximo al llegar a la extensión.'
            }
          ]
        }
      ]
    },
    {
      weekNumber: 4,
      title: 'Semana 4 (Bloque de Acumulación & Carga)',
      isDeload: true,
      days: [
        {
          id: 'glute-w4-d1',
          name: 'Día 1: Lower Body (Fuerza & Glúteo)',
          targetMuscles: ['Glúteo Máximo', 'Cuádriceps', 'Isquiotibiales', 'Glúteo Medio'],
          exercises: [
            {
              id: 'glute-w4-d1-ex1',
              exerciseId: 'Back Squat',
              displayName: 'Back Squat',
              warmupSets: 'Pirámide',
              workingSets: 3,
              targetReps: '5',
              earlySetRpe: '75-80% 1RM',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '3.0 min',
              substitutionOption1: 'Safety Bar Squat',
              substitutionOption2: 'Goblet Squat',
              substituteOptions: ['Safety Bar Squat', 'Goblet Squat'],
              notes: 'Empujar con los talones, rodillas hacia afuera. Stance ancho con 15° de apertura.'
            },
            {
              id: 'glute-w4-d1-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Romanian Deadlift',
              warmupSets: '1-2',
              workingSets: 3,
              targetReps: '6-8',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB RDL',
              substitutionOption2: 'Snatch-Grip RDL',
              substituteOptions: ['DB RDL', 'Snatch-Grip RDL'],
              notes: 'Llevar caderas atrás hasta sentir estiramiento, luego apretar glúteos al subir.'
            },
            {
              id: 'glute-w4-d1-ex3',
              exerciseId: 'Seated Leg Curl',
              displayName: 'Seated Leg Curl',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '12-15',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.0 min',
              substitutionOption1: 'Lying Leg Curl',
              substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Lying Leg Curl', 'Nordic Ham Curl'],
              notes: 'Super serie inmediata con Swiss Ball Leg Curl. Rango completo.'
            },
            {
              id: 'glute-w4-d1-ex4',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0',
              workingSets: 3,
              targetReps: '25-30',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'Cable Hip Abduction',
              substitutionOption2: 'Banded Side Walk',
              substituteOptions: ['Cable Hip Abduction', 'Banded Side Walk'],
              notes: 'Glúteos elevados 5-10 cm del asiento. Tempo rápido y tensión constante.'
            }
          ]
        },
        {
          id: 'glute-w4-d2',
          name: 'Día 2: Lower Body (Hipertrofia Glúteo Mayor)',
          targetMuscles: ['Glúteo Máximo', 'Cadena Posterior'],
          exercises: [
            {
              id: 'glute-w4-d2-ex1',
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust',
              warmupSets: '2-3',
              workingSets: 3,
              targetReps: '10-12',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'Single Leg Hip Thrust',
              substitutionOption2: 'Machine Hip Thrust',
              substituteOptions: ['Single Leg Hip Thrust', 'Machine Hip Thrust'],
              notes: 'Postura ancha, 15° de rotación de pies. Squeeze fuerte de glúteos arriba.'
            },
            {
              id: 'glute-w4-d2-ex2',
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust (Drop Set)',
              warmupSets: '0',
              workingSets: 1,
              targetReps: '15-20',
              earlySetRpe: 'RPE 9.0',
              lastSetRpe: 'RIR 0',
              lastSetIntensityTechnique: 'Drop Set',
              restPeriod: '1.5 min',
              substitutionOption1: 'Banded Hip Thrust',
              substitutionOption2: 'Frog Pumps',
              substituteOptions: ['Banded Hip Thrust', 'Frog Pumps'],
              notes: 'Reducir peso un 40-50% e inmediatamente realizar 15-20 reps adicionales.'
            },
            {
              id: 'glute-w4-d2-ex3',
              exerciseId: 'Cable Pullthrough',
              displayName: 'Cable Pullthrough',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '10-12',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB Swing',
              substitutionOption2: 'Hyperextension 45°',
              substituteOptions: ['DB Swing', 'Hyperextension 45°'],
              notes: 'Cuerda en polea baja, flexión de cadera profunda y extensión explosiva.'
            },
            {
              id: 'glute-w4-d2-ex4',
              exerciseId: 'Cable Glute Kick Back',
              displayName: 'Cable Glute Kick Back',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '12-15',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'Banded Kickback',
              substitutionOption2: 'Donkey Kicks',
              substituteOptions: ['Banded Kickback', 'Donkey Kicks'],
              notes: 'Inclinación ligera hacia adelante. Empujar cadera atrás y arriba en arco.'
            }
          ]
        },
        {
          id: 'glute-w4-d3',
          name: 'Día 3: Lower Body (Densidad & Zancadas)',
          targetMuscles: ['Glúteos', 'Isquiotibiales', 'Cuádriceps'],
          exercises: [
            {
              id: 'glute-w4-d3-ex1',
              exerciseId: 'Barbell Lunge',
              displayName: 'Walking Lunge',
              warmupSets: '2',
              workingSets: 3,
              targetReps: '20-30 Zancadas',
              earlySetRpe: 'RPE 7.5',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB Static Lunge',
              substitutionOption2: 'Bulgarian Split Squat',
              substituteOptions: ['DB Static Lunge', 'Bulgarian Split Squat'],
              notes: 'Pasos de longitud media. Usar mancuernas o barra en los hombros.'
            },
            {
              id: 'glute-w4-d3-ex2',
              exerciseId: 'Barbell 45° Hyperextension',
              displayName: 'Lower Back Extension',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '15-20',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.0 min',
              substitutionOption1: 'Jefferson Curl',
              substitutionOption2: 'Glute Ham Raise',
              substituteOptions: ['Jefferson Curl', 'Glute Ham Raise'],
              notes: 'Espalda ligeramente redondeada y pies a 15°. Squeeze de glúteos arriba.'
            },
            {
              id: 'glute-w4-d3-ex3',
              exerciseId: 'Frog Pump',
              displayName: 'Frog Pump',
              warmupSets: '0',
              workingSets: 2,
              targetReps: '30-50',
              earlySetRpe: 'RPE 9.0',
              lastSetRpe: 'RIR 0',
              restPeriod: '1.0 min',
              substitutionOption1: 'Banded Abduction',
              substitutionOption2: 'Elevated Glute Bridge',
              substituteOptions: ['Banded Abduction', 'Elevated Glute Bridge'],
              notes: 'Tempo rápido y apretón máximo al llegar a la extensión.'
            }
          ]
        }
      ]
    },
    {
      weekNumber: 5,
      title: 'Semana 5 (Bloque de Acumulación & Carga)',
      isDeload: false,
      days: [
        {
          id: 'glute-w5-d1',
          name: 'Día 1: Lower Body (Fuerza & Glúteo)',
          targetMuscles: ['Glúteo Máximo', 'Cuádriceps', 'Isquiotibiales', 'Glúteo Medio'],
          exercises: [
            {
              id: 'glute-w5-d1-ex1',
              exerciseId: 'Back Squat',
              displayName: 'Back Squat',
              warmupSets: 'Pirámide',
              workingSets: 3,
              targetReps: '5',
              earlySetRpe: '75-80% 1RM',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '3.0 min',
              substitutionOption1: 'Safety Bar Squat',
              substitutionOption2: 'Goblet Squat',
              substituteOptions: ['Safety Bar Squat', 'Goblet Squat'],
              notes: 'Empujar con los talones, rodillas hacia afuera. Stance ancho con 15° de apertura.'
            },
            {
              id: 'glute-w5-d1-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Romanian Deadlift',
              warmupSets: '1-2',
              workingSets: 3,
              targetReps: '6-8',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB RDL',
              substitutionOption2: 'Snatch-Grip RDL',
              substituteOptions: ['DB RDL', 'Snatch-Grip RDL'],
              notes: 'Llevar caderas atrás hasta sentir estiramiento, luego apretar glúteos al subir.'
            },
            {
              id: 'glute-w5-d1-ex3',
              exerciseId: 'Seated Leg Curl',
              displayName: 'Seated Leg Curl',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '12-15',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.0 min',
              substitutionOption1: 'Lying Leg Curl',
              substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Lying Leg Curl', 'Nordic Ham Curl'],
              notes: 'Super serie inmediata con Swiss Ball Leg Curl. Rango completo.'
            },
            {
              id: 'glute-w5-d1-ex4',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0',
              workingSets: 3,
              targetReps: '25-30',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'Cable Hip Abduction',
              substitutionOption2: 'Banded Side Walk',
              substituteOptions: ['Cable Hip Abduction', 'Banded Side Walk'],
              notes: 'Glúteos elevados 5-10 cm del asiento. Tempo rápido y tensión constante.'
            }
          ]
        },
        {
          id: 'glute-w5-d2',
          name: 'Día 2: Lower Body (Hipertrofia Glúteo Mayor)',
          targetMuscles: ['Glúteo Máximo', 'Cadena Posterior'],
          exercises: [
            {
              id: 'glute-w5-d2-ex1',
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust',
              warmupSets: '2-3',
              workingSets: 3,
              targetReps: '10-12',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'Single Leg Hip Thrust',
              substitutionOption2: 'Machine Hip Thrust',
              substituteOptions: ['Single Leg Hip Thrust', 'Machine Hip Thrust'],
              notes: 'Postura ancha, 15° de rotación de pies. Squeeze fuerte de glúteos arriba.'
            },
            {
              id: 'glute-w5-d2-ex2',
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust (Drop Set)',
              warmupSets: '0',
              workingSets: 1,
              targetReps: '15-20',
              earlySetRpe: 'RPE 9.0',
              lastSetRpe: 'RIR 0',
              lastSetIntensityTechnique: 'Drop Set',
              restPeriod: '1.5 min',
              substitutionOption1: 'Banded Hip Thrust',
              substitutionOption2: 'Frog Pumps',
              substituteOptions: ['Banded Hip Thrust', 'Frog Pumps'],
              notes: 'Reducir peso un 40-50% e inmediatamente realizar 15-20 reps adicionales.'
            },
            {
              id: 'glute-w5-d2-ex3',
              exerciseId: 'Cable Pullthrough',
              displayName: 'Cable Pullthrough',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '10-12',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB Swing',
              substitutionOption2: 'Hyperextension 45°',
              substituteOptions: ['DB Swing', 'Hyperextension 45°'],
              notes: 'Cuerda en polea baja, flexión de cadera profunda y extensión explosiva.'
            },
            {
              id: 'glute-w5-d2-ex4',
              exerciseId: 'Cable Glute Kick Back',
              displayName: 'Cable Glute Kick Back',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '12-15',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'Banded Kickback',
              substitutionOption2: 'Donkey Kicks',
              substituteOptions: ['Banded Kickback', 'Donkey Kicks'],
              notes: 'Inclinación ligera hacia adelante. Empujar cadera atrás y arriba en arco.'
            }
          ]
        },
        {
          id: 'glute-w5-d3',
          name: 'Día 3: Lower Body (Densidad & Zancadas)',
          targetMuscles: ['Glúteos', 'Isquiotibiales', 'Cuádriceps'],
          exercises: [
            {
              id: 'glute-w5-d3-ex1',
              exerciseId: 'Barbell Lunge',
              displayName: 'Walking Lunge',
              warmupSets: '2',
              workingSets: 3,
              targetReps: '20-30 Zancadas',
              earlySetRpe: 'RPE 7.5',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB Static Lunge',
              substitutionOption2: 'Bulgarian Split Squat',
              substituteOptions: ['DB Static Lunge', 'Bulgarian Split Squat'],
              notes: 'Pasos de longitud media. Usar mancuernas o barra en los hombros.'
            },
            {
              id: 'glute-w5-d3-ex2',
              exerciseId: 'Barbell 45° Hyperextension',
              displayName: 'Lower Back Extension',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '15-20',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.0 min',
              substitutionOption1: 'Jefferson Curl',
              substitutionOption2: 'Glute Ham Raise',
              substituteOptions: ['Jefferson Curl', 'Glute Ham Raise'],
              notes: 'Espalda ligeramente redondeada y pies a 15°. Squeeze de glúteos arriba.'
            },
            {
              id: 'glute-w5-d3-ex3',
              exerciseId: 'Frog Pump',
              displayName: 'Frog Pump',
              warmupSets: '0',
              workingSets: 2,
              targetReps: '30-50',
              earlySetRpe: 'RPE 9.0',
              lastSetRpe: 'RIR 0',
              restPeriod: '1.0 min',
              substitutionOption1: 'Banded Abduction',
              substitutionOption2: 'Elevated Glute Bridge',
              substituteOptions: ['Banded Abduction', 'Elevated Glute Bridge'],
              notes: 'Tempo rápido y apretón máximo al llegar a la extensión.'
            }
          ]
        }
      ]
    },
    {
      weekNumber: 6,
      title: 'Semana 6 (Bloque de Acumulación & Carga)',
      isDeload: false,
      days: [
        {
          id: 'glute-w6-d1',
          name: 'Día 1: Lower Body (Fuerza & Glúteo)',
          targetMuscles: ['Glúteo Máximo', 'Cuádriceps', 'Isquiotibiales', 'Glúteo Medio'],
          exercises: [
            {
              id: 'glute-w6-d1-ex1',
              exerciseId: 'Back Squat',
              displayName: 'Back Squat',
              warmupSets: 'Pirámide',
              workingSets: 3,
              targetReps: '5',
              earlySetRpe: '75-80% 1RM',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '3.0 min',
              substitutionOption1: 'Safety Bar Squat',
              substitutionOption2: 'Goblet Squat',
              substituteOptions: ['Safety Bar Squat', 'Goblet Squat'],
              notes: 'Empujar con los talones, rodillas hacia afuera. Stance ancho con 15° de apertura.'
            },
            {
              id: 'glute-w6-d1-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Romanian Deadlift',
              warmupSets: '1-2',
              workingSets: 3,
              targetReps: '6-8',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB RDL',
              substitutionOption2: 'Snatch-Grip RDL',
              substituteOptions: ['DB RDL', 'Snatch-Grip RDL'],
              notes: 'Llevar caderas atrás hasta sentir estiramiento, luego apretar glúteos al subir.'
            },
            {
              id: 'glute-w6-d1-ex3',
              exerciseId: 'Seated Leg Curl',
              displayName: 'Seated Leg Curl',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '12-15',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.0 min',
              substitutionOption1: 'Lying Leg Curl',
              substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Lying Leg Curl', 'Nordic Ham Curl'],
              notes: 'Super serie inmediata con Swiss Ball Leg Curl. Rango completo.'
            },
            {
              id: 'glute-w6-d1-ex4',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0',
              workingSets: 3,
              targetReps: '25-30',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'Cable Hip Abduction',
              substitutionOption2: 'Banded Side Walk',
              substituteOptions: ['Cable Hip Abduction', 'Banded Side Walk'],
              notes: 'Glúteos elevados 5-10 cm del asiento. Tempo rápido y tensión constante.'
            }
          ]
        },
        {
          id: 'glute-w6-d2',
          name: 'Día 2: Lower Body (Hipertrofia Glúteo Mayor)',
          targetMuscles: ['Glúteo Máximo', 'Cadena Posterior'],
          exercises: [
            {
              id: 'glute-w6-d2-ex1',
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust',
              warmupSets: '2-3',
              workingSets: 3,
              targetReps: '10-12',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'Single Leg Hip Thrust',
              substitutionOption2: 'Machine Hip Thrust',
              substituteOptions: ['Single Leg Hip Thrust', 'Machine Hip Thrust'],
              notes: 'Postura ancha, 15° de rotación de pies. Squeeze fuerte de glúteos arriba.'
            },
            {
              id: 'glute-w6-d2-ex2',
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust (Drop Set)',
              warmupSets: '0',
              workingSets: 1,
              targetReps: '15-20',
              earlySetRpe: 'RPE 9.0',
              lastSetRpe: 'RIR 0',
              lastSetIntensityTechnique: 'Drop Set',
              restPeriod: '1.5 min',
              substitutionOption1: 'Banded Hip Thrust',
              substitutionOption2: 'Frog Pumps',
              substituteOptions: ['Banded Hip Thrust', 'Frog Pumps'],
              notes: 'Reducir peso un 40-50% e inmediatamente realizar 15-20 reps adicionales.'
            },
            {
              id: 'glute-w6-d2-ex3',
              exerciseId: 'Cable Pullthrough',
              displayName: 'Cable Pullthrough',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '10-12',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB Swing',
              substitutionOption2: 'Hyperextension 45°',
              substituteOptions: ['DB Swing', 'Hyperextension 45°'],
              notes: 'Cuerda en polea baja, flexión de cadera profunda y extensión explosiva.'
            },
            {
              id: 'glute-w6-d2-ex4',
              exerciseId: 'Cable Glute Kick Back',
              displayName: 'Cable Glute Kick Back',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '12-15',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'Banded Kickback',
              substitutionOption2: 'Donkey Kicks',
              substituteOptions: ['Banded Kickback', 'Donkey Kicks'],
              notes: 'Inclinación ligera hacia adelante. Empujar cadera atrás y arriba en arco.'
            }
          ]
        },
        {
          id: 'glute-w6-d3',
          name: 'Día 3: Lower Body (Densidad & Zancadas)',
          targetMuscles: ['Glúteos', 'Isquiotibiales', 'Cuádriceps'],
          exercises: [
            {
              id: 'glute-w6-d3-ex1',
              exerciseId: 'Barbell Lunge',
              displayName: 'Walking Lunge',
              warmupSets: '2',
              workingSets: 3,
              targetReps: '20-30 Zancadas',
              earlySetRpe: 'RPE 7.5',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB Static Lunge',
              substitutionOption2: 'Bulgarian Split Squat',
              substituteOptions: ['DB Static Lunge', 'Bulgarian Split Squat'],
              notes: 'Pasos de longitud media. Usar mancuernas o barra en los hombros.'
            },
            {
              id: 'glute-w6-d3-ex2',
              exerciseId: 'Barbell 45° Hyperextension',
              displayName: 'Lower Back Extension',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '15-20',
              earlySetRpe: 'RPE 7.5-8',
              lastSetRpe: 'RPE 8.5',
              restPeriod: '1.0 min',
              substitutionOption1: 'Jefferson Curl',
              substitutionOption2: 'Glute Ham Raise',
              substituteOptions: ['Jefferson Curl', 'Glute Ham Raise'],
              notes: 'Espalda ligeramente redondeada y pies a 15°. Squeeze de glúteos arriba.'
            },
            {
              id: 'glute-w6-d3-ex3',
              exerciseId: 'Frog Pump',
              displayName: 'Frog Pump',
              warmupSets: '0',
              workingSets: 2,
              targetReps: '30-50',
              earlySetRpe: 'RPE 9.0',
              lastSetRpe: 'RIR 0',
              restPeriod: '1.0 min',
              substitutionOption1: 'Banded Abduction',
              substitutionOption2: 'Elevated Glute Bridge',
              substituteOptions: ['Banded Abduction', 'Elevated Glute Bridge'],
              notes: 'Tempo rápido y apretón máximo al llegar a la extensión.'
            }
          ]
        }
      ]
    },
    {
      weekNumber: 7,
      title: 'Semana 7 (Bloque Metabólico & Bombeo)',
      isDeload: false,
      days: [
        {
          id: 'glute-w7-d1',
          name: 'Día 1: Lower Body (Fuerza & Glúteo)',
          targetMuscles: ['Glúteo Máximo', 'Cuádriceps', 'Isquiotibiales', 'Glúteo Medio'],
          exercises: [
            {
              id: 'glute-w7-d1-ex1',
              exerciseId: 'Back Squat',
              displayName: 'Back Squat',
              warmupSets: 'Pirámide',
              workingSets: 3,
              targetReps: '5',
              earlySetRpe: '75-80% 1RM',
              lastSetRpe: 'RIR 0 / Fallo',
              restPeriod: '3.0 min',
              substitutionOption1: 'Safety Bar Squat',
              substitutionOption2: 'Goblet Squat',
              substituteOptions: ['Safety Bar Squat', 'Goblet Squat'],
              notes: 'Empujar con los talones, rodillas hacia afuera. Stance ancho con 15° de apertura.'
            },
            {
              id: 'glute-w7-d1-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Romanian Deadlift',
              warmupSets: '1-2',
              workingSets: 3,
              targetReps: '6-8',
              earlySetRpe: 'RPE 8.5-9',
              lastSetRpe: 'RIR 0 / Fallo',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB RDL',
              substitutionOption2: 'Snatch-Grip RDL',
              substituteOptions: ['DB RDL', 'Snatch-Grip RDL'],
              notes: 'Llevar caderas atrás hasta sentir estiramiento, luego apretar glúteos al subir.'
            },
            {
              id: 'glute-w7-d1-ex3',
              exerciseId: 'Seated Leg Curl',
              displayName: 'Seated Leg Curl',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '12-15',
              earlySetRpe: 'RPE 8.5-9',
              lastSetRpe: 'RIR 0 / Fallo',
              restPeriod: '1.0 min',
              substitutionOption1: 'Lying Leg Curl',
              substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Lying Leg Curl', 'Nordic Ham Curl'],
              notes: 'Super serie inmediata con Swiss Ball Leg Curl. Rango completo.'
            },
            {
              id: 'glute-w7-d1-ex4',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0',
              workingSets: 3,
              targetReps: '25-30',
              earlySetRpe: 'RPE 8.5-9',
              lastSetRpe: 'RIR 0 / Fallo',
              restPeriod: '1.5 min',
              substitutionOption1: 'Cable Hip Abduction',
              substitutionOption2: 'Banded Side Walk',
              substituteOptions: ['Cable Hip Abduction', 'Banded Side Walk'],
              notes: 'Glúteos elevados 5-10 cm del asiento. Tempo rápido y tensión constante.'
            }
          ]
        },
        {
          id: 'glute-w7-d2',
          name: 'Día 2: Lower Body (Hipertrofia Glúteo Mayor)',
          targetMuscles: ['Glúteo Máximo', 'Cadena Posterior'],
          exercises: [
            {
              id: 'glute-w7-d2-ex1',
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust',
              warmupSets: '2-3',
              workingSets: 3,
              targetReps: '10-12',
              earlySetRpe: 'RPE 8.5-9',
              lastSetRpe: 'RIR 0 / Fallo',
              restPeriod: '1.5 min',
              substitutionOption1: 'Single Leg Hip Thrust',
              substitutionOption2: 'Machine Hip Thrust',
              substituteOptions: ['Single Leg Hip Thrust', 'Machine Hip Thrust'],
              notes: 'Postura ancha, 15° de rotación de pies. Squeeze fuerte de glúteos arriba.'
            },
            {
              id: 'glute-w7-d2-ex2',
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust (Drop Set)',
              warmupSets: '0',
              workingSets: 1,
              targetReps: '15-20',
              earlySetRpe: 'RPE 9.0',
              lastSetRpe: 'RIR 0',
              lastSetIntensityTechnique: 'Drop Set',
              restPeriod: '1.5 min',
              substitutionOption1: 'Banded Hip Thrust',
              substitutionOption2: 'Frog Pumps',
              substituteOptions: ['Banded Hip Thrust', 'Frog Pumps'],
              notes: 'Reducir peso un 40-50% e inmediatamente realizar 15-20 reps adicionales.'
            },
            {
              id: 'glute-w7-d2-ex3',
              exerciseId: 'Cable Pullthrough',
              displayName: 'Cable Pullthrough',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '10-12',
              earlySetRpe: 'RPE 8.5-9',
              lastSetRpe: 'RIR 0 / Fallo',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB Swing',
              substitutionOption2: 'Hyperextension 45°',
              substituteOptions: ['DB Swing', 'Hyperextension 45°'],
              notes: 'Cuerda en polea baja, flexión de cadera profunda y extensión explosiva.'
            },
            {
              id: 'glute-w7-d2-ex4',
              exerciseId: 'Cable Glute Kick Back',
              displayName: 'Cable Glute Kick Back',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '12-15',
              earlySetRpe: 'RPE 8.5-9',
              lastSetRpe: 'RIR 0 / Fallo',
              restPeriod: '1.5 min',
              substitutionOption1: 'Banded Kickback',
              substitutionOption2: 'Donkey Kicks',
              substituteOptions: ['Banded Kickback', 'Donkey Kicks'],
              notes: 'Inclinación ligera hacia adelante. Empujar cadera atrás y arriba en arco.'
            }
          ]
        },
        {
          id: 'glute-w7-d3',
          name: 'Día 3: Lower Body (Densidad & Zancadas)',
          targetMuscles: ['Glúteos', 'Isquiotibiales', 'Cuádriceps'],
          exercises: [
            {
              id: 'glute-w7-d3-ex1',
              exerciseId: 'Barbell Lunge',
              displayName: 'Walking Lunge',
              warmupSets: '2',
              workingSets: 3,
              targetReps: '20-30 Zancadas',
              earlySetRpe: 'RPE 7.5',
              lastSetRpe: 'RIR 0 / Fallo',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB Static Lunge',
              substitutionOption2: 'Bulgarian Split Squat',
              substituteOptions: ['DB Static Lunge', 'Bulgarian Split Squat'],
              notes: 'Pasos de longitud media. Usar mancuernas o barra en los hombros.'
            },
            {
              id: 'glute-w7-d3-ex2',
              exerciseId: 'Barbell 45° Hyperextension',
              displayName: 'Lower Back Extension',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '15-20',
              earlySetRpe: 'RPE 8.5-9',
              lastSetRpe: 'RIR 0 / Fallo',
              restPeriod: '1.0 min',
              substitutionOption1: 'Jefferson Curl',
              substitutionOption2: 'Glute Ham Raise',
              substituteOptions: ['Jefferson Curl', 'Glute Ham Raise'],
              notes: 'Espalda ligeramente redondeada y pies a 15°. Squeeze de glúteos arriba.'
            },
            {
              id: 'glute-w7-d3-ex3',
              exerciseId: 'Frog Pump',
              displayName: 'Frog Pump',
              warmupSets: '0',
              workingSets: 2,
              targetReps: '30-50',
              earlySetRpe: 'RPE 9.0',
              lastSetRpe: 'RIR 0',
              restPeriod: '1.0 min',
              substitutionOption1: 'Banded Abduction',
              substitutionOption2: 'Elevated Glute Bridge',
              substituteOptions: ['Banded Abduction', 'Elevated Glute Bridge'],
              notes: 'Tempo rápido y apretón máximo al llegar a la extensión.'
            }
          ]
        }
      ]
    },
    {
      weekNumber: 8,
      title: 'Semana 8 (Bloque Metabólico & Bombeo)',
      isDeload: false,
      days: [
        {
          id: 'glute-w8-d1',
          name: 'Día 1: Lower Body (Fuerza & Glúteo)',
          targetMuscles: ['Glúteo Máximo', 'Cuádriceps', 'Isquiotibiales', 'Glúteo Medio'],
          exercises: [
            {
              id: 'glute-w8-d1-ex1',
              exerciseId: 'Back Squat',
              displayName: 'Back Squat',
              warmupSets: 'Pirámide',
              workingSets: 3,
              targetReps: '5',
              earlySetRpe: '75-80% 1RM',
              lastSetRpe: 'RIR 0 / Fallo',
              restPeriod: '3.0 min',
              substitutionOption1: 'Safety Bar Squat',
              substitutionOption2: 'Goblet Squat',
              substituteOptions: ['Safety Bar Squat', 'Goblet Squat'],
              notes: 'Empujar con los talones, rodillas hacia afuera. Stance ancho con 15° de apertura.'
            },
            {
              id: 'glute-w8-d1-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Romanian Deadlift',
              warmupSets: '1-2',
              workingSets: 3,
              targetReps: '6-8',
              earlySetRpe: 'RPE 8.5-9',
              lastSetRpe: 'RIR 0 / Fallo',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB RDL',
              substitutionOption2: 'Snatch-Grip RDL',
              substituteOptions: ['DB RDL', 'Snatch-Grip RDL'],
              notes: 'Llevar caderas atrás hasta sentir estiramiento, luego apretar glúteos al subir.'
            },
            {
              id: 'glute-w8-d1-ex3',
              exerciseId: 'Seated Leg Curl',
              displayName: 'Seated Leg Curl',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '12-15',
              earlySetRpe: 'RPE 8.5-9',
              lastSetRpe: 'RIR 0 / Fallo',
              restPeriod: '1.0 min',
              substitutionOption1: 'Lying Leg Curl',
              substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Lying Leg Curl', 'Nordic Ham Curl'],
              notes: 'Super serie inmediata con Swiss Ball Leg Curl. Rango completo.'
            },
            {
              id: 'glute-w8-d1-ex4',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0',
              workingSets: 3,
              targetReps: '25-30',
              earlySetRpe: 'RPE 8.5-9',
              lastSetRpe: 'RIR 0 / Fallo',
              restPeriod: '1.5 min',
              substitutionOption1: 'Cable Hip Abduction',
              substitutionOption2: 'Banded Side Walk',
              substituteOptions: ['Cable Hip Abduction', 'Banded Side Walk'],
              notes: 'Glúteos elevados 5-10 cm del asiento. Tempo rápido y tensión constante.'
            }
          ]
        },
        {
          id: 'glute-w8-d2',
          name: 'Día 2: Lower Body (Hipertrofia Glúteo Mayor)',
          targetMuscles: ['Glúteo Máximo', 'Cadena Posterior'],
          exercises: [
            {
              id: 'glute-w8-d2-ex1',
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust',
              warmupSets: '2-3',
              workingSets: 3,
              targetReps: '10-12',
              earlySetRpe: 'RPE 8.5-9',
              lastSetRpe: 'RIR 0 / Fallo',
              restPeriod: '1.5 min',
              substitutionOption1: 'Single Leg Hip Thrust',
              substitutionOption2: 'Machine Hip Thrust',
              substituteOptions: ['Single Leg Hip Thrust', 'Machine Hip Thrust'],
              notes: 'Postura ancha, 15° de rotación de pies. Squeeze fuerte de glúteos arriba.'
            },
            {
              id: 'glute-w8-d2-ex2',
              exerciseId: 'Barbell Hip Thrust',
              displayName: 'Barbell Hip Thrust (Drop Set)',
              warmupSets: '0',
              workingSets: 1,
              targetReps: '15-20',
              earlySetRpe: 'RPE 9.0',
              lastSetRpe: 'RIR 0',
              lastSetIntensityTechnique: 'Drop Set',
              restPeriod: '1.5 min',
              substitutionOption1: 'Banded Hip Thrust',
              substitutionOption2: 'Frog Pumps',
              substituteOptions: ['Banded Hip Thrust', 'Frog Pumps'],
              notes: 'Reducir peso un 40-50% e inmediatamente realizar 15-20 reps adicionales.'
            },
            {
              id: 'glute-w8-d2-ex3',
              exerciseId: 'Cable Pullthrough',
              displayName: 'Cable Pullthrough',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '10-12',
              earlySetRpe: 'RPE 8.5-9',
              lastSetRpe: 'RIR 0 / Fallo',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB Swing',
              substitutionOption2: 'Hyperextension 45°',
              substituteOptions: ['DB Swing', 'Hyperextension 45°'],
              notes: 'Cuerda en polea baja, flexión de cadera profunda y extensión explosiva.'
            },
            {
              id: 'glute-w8-d2-ex4',
              exerciseId: 'Cable Glute Kick Back',
              displayName: 'Cable Glute Kick Back',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '12-15',
              earlySetRpe: 'RPE 8.5-9',
              lastSetRpe: 'RIR 0 / Fallo',
              restPeriod: '1.5 min',
              substitutionOption1: 'Banded Kickback',
              substitutionOption2: 'Donkey Kicks',
              substituteOptions: ['Banded Kickback', 'Donkey Kicks'],
              notes: 'Inclinación ligera hacia adelante. Empujar cadera atrás y arriba en arco.'
            }
          ]
        },
        {
          id: 'glute-w8-d3',
          name: 'Día 3: Lower Body (Densidad & Zancadas)',
          targetMuscles: ['Glúteos', 'Isquiotibiales', 'Cuádriceps'],
          exercises: [
            {
              id: 'glute-w8-d3-ex1',
              exerciseId: 'Barbell Lunge',
              displayName: 'Walking Lunge',
              warmupSets: '2',
              workingSets: 3,
              targetReps: '20-30 Zancadas',
              earlySetRpe: 'RPE 7.5',
              lastSetRpe: 'RIR 0 / Fallo',
              restPeriod: '1.5 min',
              substitutionOption1: 'DB Static Lunge',
              substitutionOption2: 'Bulgarian Split Squat',
              substituteOptions: ['DB Static Lunge', 'Bulgarian Split Squat'],
              notes: 'Pasos de longitud media. Usar mancuernas o barra en los hombros.'
            },
            {
              id: 'glute-w8-d3-ex2',
              exerciseId: 'Barbell 45° Hyperextension',
              displayName: 'Lower Back Extension',
              warmupSets: '1',
              workingSets: 3,
              targetReps: '15-20',
              earlySetRpe: 'RPE 8.5-9',
              lastSetRpe: 'RIR 0 / Fallo',
              restPeriod: '1.0 min',
              substitutionOption1: 'Jefferson Curl',
              substitutionOption2: 'Glute Ham Raise',
              substituteOptions: ['Jefferson Curl', 'Glute Ham Raise'],
              notes: 'Espalda ligeramente redondeada y pies a 15°. Squeeze de glúteos arriba.'
            },
            {
              id: 'glute-w8-d3-ex3',
              exerciseId: 'Frog Pump',
              displayName: 'Frog Pump',
              warmupSets: '0',
              workingSets: 2,
              targetReps: '30-50',
              earlySetRpe: 'RPE 9.0',
              lastSetRpe: 'RIR 0',
              restPeriod: '1.0 min',
              substitutionOption1: 'Banded Abduction',
              substitutionOption2: 'Elevated Glute Bridge',
              substituteOptions: ['Banded Abduction', 'Elevated Glute Bridge'],
              notes: 'Tempo rápido y apretón máximo al llegar a la extensión.'
            }
          ]
        }
      ]
    }
  ]
};

export default gluteHypertrophyProgram;
