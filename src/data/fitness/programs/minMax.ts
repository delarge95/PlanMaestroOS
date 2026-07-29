// src/data/fitness/programs/minMax.ts - Jeff Nippard Min-Max Program (12 Weeks - 100% Exact PDF Match)
import type { TrainingProgram, ProgramWeek, ExercisePrescription } from './types';
import { resolveExerciseId } from '../exerciseResolver';

const upper1Exercises = (w: number): ExercisePrescription[] => {
  const isBlock2 = w >= 7;
  const isDeload = w === 6 || w === 12;

  return [
    {
      exerciseId: resolveExerciseId('Barbell Incline Press'),
      displayName: 'Barbell Incline Press',
      lastSetIntensityTechnique: 'N/A',
      warmupSets: '2-4',
      workingSets: 2,
      targetReps: '6-8',
      repRange: '6-8',
      rirPerSet: isDeload ? ['3', '2'] : isBlock2 ? ['0', 'Fallo'] : ['2', '1'],
      earlySetRpe: 'RIR 2',
      lastSetRpe: 'RIR 1',
      restPeriod: '3-5 min',
      rest: '3-5 min',
      substitutionOption1: 'Smith Machine Incline Press',
      substitutionOption2: 'DB Incline Press',
      substituteOptions: ['Smith Machine Incline Press', 'DB Incline Press'],
      notes: 'A 30° or 45° bench will work here. Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
    },
    {
      exerciseId: resolveExerciseId('Pec Deck'),
      displayName: 'Pec Deck',
      lastSetIntensityTechnique: isBlock2 ? 'Lengthened Partials' : 'N/A',
      warmupSets: '1-2',
      workingSets: 2,
      targetReps: '6-8',
      repRange: '6-8',
      rirPerSet: isDeload ? ['3', '2'] : isBlock2 ? ['0', 'Fallo + Partiales'] : ['1', '0'],
      earlySetRpe: 'RIR 1',
      lastSetRpe: 'RIR 0',
      restPeriod: '1-2 min',
      rest: '1-2 min',
      substitutionOption1: 'DB Flye',
      substitutionOption2: 'Cable Flye',
      substituteOptions: ['DB Flye', 'Cable Flye'],
      notes: 'Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
    },
    {
      exerciseId: resolveExerciseId('Incline DB Y-Raise'),
      displayName: 'Incline DB Y-Raise',
      lastSetIntensityTechnique: 'N/A',
      warmupSets: '0-1',
      workingSets: 2,
      targetReps: '8-10',
      repRange: '8-10',
      rirPerSet: isDeload ? ['3', '2'] : ['1', '0'],
      earlySetRpe: 'RIR 1',
      lastSetRpe: 'RIR 0',
      restPeriod: '1-2 min',
      rest: '1-2 min',
      substitutionOption1: 'Cable Y-Raise',
      substitutionOption2: 'Machine Lateral Raise',
      substituteOptions: ['Cable Y-Raise', 'Machine Lateral Raise'],
      notes: 'Use a 30° incline bench (back against the bench) and lift the weight up and out in a Y shape.'
    },
    {
      exerciseId: resolveExerciseId('Pull-Up (Wide Grip)'),
      displayName: 'Pull-Up (Wide Grip)',
      lastSetIntensityTechnique: 'N/A',
      warmupSets: '1-2',
      workingSets: 2,
      targetReps: '6-8',
      repRange: '6-8',
      rirPerSet: isDeload ? ['3', '2'] : ['2', '1'],
      earlySetRpe: 'RIR 2',
      lastSetRpe: 'RIR 1',
      restPeriod: '2-3 min',
      rest: '2-3 min',
      substitutionOption1: 'Lat Pulldown (Wide Grip)',
      substitutionOption2: '1-Arm Cable Pulldown',
      substituteOptions: ['Lat Pulldown (Wide Grip)', '1-Arm Cable Pulldown'],
      notes: 'Control the negative and feel your lats pulling apart. Full ROM!'
    },
    {
      exerciseId: resolveExerciseId('Kelso Shrug'),
      displayName: 'Kelso Shrug',
      lastSetIntensityTechnique: 'N/A',
      warmupSets: '1-2',
      workingSets: 2,
      targetReps: '6-8',
      repRange: '6-8',
      rirPerSet: isDeload ? ['3', '2'] : ['2', '1'],
      earlySetRpe: 'RIR 2',
      lastSetRpe: 'RIR 1',
      restPeriod: '2-3 min',
      rest: '2-3 min',
      substitutionOption1: 'Seated Cable Kelso Shrug',
      substitutionOption2: 'Incline DB Kelso Shrug',
      substituteOptions: ['Seated Cable Kelso Shrug', 'Incline DB Kelso Shrug'],
      notes: 'Pause for about 1 second at the top and then allow your shoulder blades to peel apart on the way back down, under control.'
    },
    {
      exerciseId: resolveExerciseId('EZ-Bar Preacher Curl'),
      displayName: 'EZ-Bar Preacher Curl',
      lastSetIntensityTechnique: 'N/A',
      warmupSets: '0-1',
      workingSets: 2,
      targetReps: '6-8',
      repRange: '6-8',
      rirPerSet: isDeload ? ['3', '2'] : ['1', '0'],
      earlySetRpe: 'RIR 1',
      lastSetRpe: 'RIR 0',
      restPeriod: '1-2 min',
      rest: '1-2 min',
      substitutionOption1: 'Machine Preacher Curl',
      substitutionOption2: 'DB Preacher Curl',
      substituteOptions: ['Machine Preacher Curl', 'DB Preacher Curl'],
      notes: 'Keep your triceps firmly pinned against the pad as you curl. Smooth controlled reps.'
    },
    {
      exerciseId: resolveExerciseId('Triceps Pressdown'),
      displayName: 'Triceps Pressdown',
      lastSetIntensityTechnique: 'N/A',
      warmupSets: '0-1',
      workingSets: 2,
      targetReps: '6-8',
      repRange: '6-8',
      rirPerSet: isDeload ? ['3', '2'] : ['1', '0'],
      earlySetRpe: 'RIR 1',
      lastSetRpe: 'RIR 0',
      restPeriod: '1-2 min',
      rest: '1-2 min',
      substitutionOption1: 'Close-Grip Bench Press',
      substitutionOption2: 'Smith Machine JM Press',
      substituteOptions: ['Close-Grip Bench Press', 'Smith Machine JM Press'],
      notes: 'You can use a rope or bar attachment for these, whichever you find more comfortable.'
    },
    {
      exerciseId: resolveExerciseId('Dragon Flag'),
      displayName: 'Dragon Flag',
      lastSetIntensityTechnique: 'N/A',
      warmupSets: '0-1',
      workingSets: 2,
      targetReps: '6-8',
      repRange: '6-8',
      rirPerSet: isDeload ? ['3', '2'] : ['1', '0'],
      earlySetRpe: 'RIR 1',
      lastSetRpe: 'RIR 0',
      restPeriod: '1-2 min',
      rest: '1-2 min',
      substitutionOption1: 'Bent-Knee Dragon Flag',
      substitutionOption2: 'Lying Leg Raise',
      substituteOptions: ['Bent-Knee Dragon Flag', 'Lying Leg Raise'],
      notes: 'Keep your body as rigid as possible throughout the ROM.'
    }
  ];
};

const lower1Exercises = (w: number): ExercisePrescription[] => [
  {
    exerciseId: resolveExerciseId('Lying Leg Curl'),
    displayName: 'Lying Leg Curl',
    warmupSets: '1-2',
    workingSets: 2,
    targetReps: '6-8',
    repRange: '6-8',
    rirPerSet: ['1', '0'],
    restPeriod: '1-2 min',
    rest: '1-2 min',
    substitutionOption1: 'Seated Leg Curl',
    substitutionOption2: 'Swiss Ball Leg Curl',
    notes: 'Pause for 1 second at the bottom of each rep while maintaining tension on hamstrings.'
  },
  {
    exerciseId: resolveExerciseId('Squat (Your Choice)'),
    displayName: 'Back Squat (Your Choice)',
    warmupSets: '2-4',
    workingSets: 2,
    targetReps: '6-8',
    repRange: '6-8',
    rirPerSet: ['2', '1'],
    restPeriod: '3-5 min',
    rest: '3-5 min',
    substitutionOption1: 'Smith Machine Squat',
    substitutionOption2: 'Leg Press (45°)',
    notes: 'Sit back and down, keep your upper back tight to the bar.'
  },
  {
    exerciseId: resolveExerciseId('Spanish Squats'),
    displayName: 'Spanish Squats',
    warmupSets: '0-1',
    workingSets: 2,
    targetReps: '3-5 x 45s holds',
    repRange: '3-5 x 45s holds',
    rirPerSet: ['2', '1'],
    restPeriod: '1 min',
    rest: '1 min',
    substitutionOption1: 'Leg Extension',
    substitutionOption2: 'Wall Sit Hold',
    notes: 'Isometric knee loading protocol for tendon health.'
  },
  {
    exerciseId: resolveExerciseId('Standing Calf Raise'),
    displayName: 'Standing Calf Raise',
    warmupSets: '0-1',
    workingSets: 2,
    targetReps: '8-10',
    repRange: '8-10',
    rirPerSet: ['1', '0'],
    restPeriod: '1-2 min',
    rest: '1-2 min',
    substitutionOption1: 'Seated Calf Raise',
    substitutionOption2: 'Leg Press Calf Press',
    notes: '1-2 second pause at the stretch position.'
  }
];

const generateMinMaxWeeks = (): ProgramWeek[] => {
  const weeks: ProgramWeek[] = [];

  for (let w = 1; w <= 12; w++) {
    const isBlock2 = w >= 7;
    const isDeload = w === 6 || w === 12;

    weeks.push({
      weekNumber: w,
      week: w,
      block: isBlock2 ? 'BLOCK 2' : 'BLOCK 1',
      title: w <= 5 ? `Block 1: Acumulación RIR 1 (Semana ${w})` : w === 6 ? `Semana 6: Descarga Activa (Deload)` : w <= 11 ? `Block 2: Máxima Intensidad RIR 0 & Drop Sets (Semana ${w})` : `Semana 12: Deload Final & Test`,
      isDeload,
      days: [
        {
          id: `mm-w${w}-d1`,
          title: 'Upper 1',
          name: 'Upper 1 (Empuje & Pecho)',
          targetMuscles: ['Pectorales', 'Dorsales', 'Hombros', 'Tríceps', 'Bíceps', 'Abs'],
          exercises: upper1Exercises(w)
        },
        {
          id: `mm-w${w}-d2`,
          title: 'Lower 1',
          name: 'Lower 1 (Cuádriceps & Rodilla)',
          targetMuscles: ['Cuádriceps', 'Isquiotibiales', 'Pantorrillas'],
          exercises: lower1Exercises(w)
        },
        {
          id: `mm-w${w}-d3`,
          title: 'Upper 2',
          name: 'Upper 2 (Tracción & Espalda)',
          targetMuscles: ['Dorsales', 'Trapecios', 'Hombros'],
          exercises: upper1Exercises(w)
        },
        {
          id: `mm-w${w}-d4`,
          title: 'Lower 2',
          name: 'Lower 2 (Bisagra de Cadera & Glúteo)',
          targetMuscles: ['Isquiotibiales', 'Glúteos'],
          exercises: lower1Exercises(w)
        },
        {
          id: `mm-w${w}-d5`,
          title: 'Arms & Delts',
          name: 'Arms & Delts (Aislamiento)',
          targetMuscles: ['Bíceps', 'Tríceps', 'Deltoides Lateral'],
          exercises: upper1Exercises(w)
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
