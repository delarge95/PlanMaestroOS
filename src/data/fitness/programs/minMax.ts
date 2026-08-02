// src/data/fitness/programs/minMax.ts - 100% Faithful Jeff Nippard Min-Max Program
import type { TrainingProgram } from './types';

export const minMaxProgram: TrainingProgram = {
  id: 'min-max',
  title: 'The Min-Max Program',
  source: 'Jeff Nippard (2024)',
  pdfUrl: '/library/fitness/the-min-max-program.pdf',
  durationWeeks: 12,
  split: ['Upper 1', 'Lower 1', 'Upper 2', 'Lower 2', 'Arms & Delts'],
  methodology: [
    'Máximo Estímulo por Serie (High-Intensity, Low-Volume)',
    'Sobrecarga Progresiva basada en RIR/RPE estricto',
    'Técnicas de Intensificación en Bloque 2 (Lengthened Partials, Drop Sets, Myo-reps)'
  ],
  equipment: ['Barbell', 'Dumbbells', 'Cable Machine', 'Machines', 'Bench'],
  weeks: [
    {
      weekNumber: 1,
      title: 'Semana 1 (Intro Week)',
      isDeload: false,
      days: [
        {
          id: 'mm-w1-d1',
          name: 'Día 1: Upper 1 (Empuje & Pecho)',
          targetMuscles: ['Pectorales', 'Deltoides', 'Espalda', 'Tríceps', 'Bíceps', 'Abs'],
          exercises: [
            {
              id: 'mm-w1-d1-ex1',
              exerciseId: 'Barbell Incline Press',
              displayName: 'Barbell Incline Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Incline Press', substitutionOption2: 'DB Incline Press',
              substituteOptions: ['Smith Machine Incline Press', 'DB Incline Press'],
              notes: 'A 30º or 45º bench will work here. Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w1-d1-ex2',
              exerciseId: 'Pec Deck',
              displayName: 'Pec Deck',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Flye', substitutionOption2: 'Cable Flye',
              substituteOptions: ['DB Flye', 'Cable Flye'],
              notes: 'Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w1-d1-ex3',
              exerciseId: 'Incline DB Y-Raise',
              displayName: 'Incline DB Y-Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Y-Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['Cable Y-Raise', 'Machine Lateral Raise'],
              notes: 'Use a 30º incline bench (back against the bench) and lift the weight up and out in a Y shape.'
            },
            {
              id: 'mm-w1-d1-ex4',
              exerciseId: 'Pull-Up (Wide Grip)',
              displayName: 'Pull-Up (Wide Grip)',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'Lat Pulldown (Wide Grip)', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Lat Pulldown (Wide Grip)', '1-Arm Cable Pulldown'],
              notes: 'Control the negative and feel your lats pulling apart. Full ROM!'
            },
            {
              id: 'mm-w1-d1-ex5',
              exerciseId: 'Kelso Shrug',
              displayName: 'Kelso Shrug',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'Seated Cable Kelso Shrug', substitutionOption2: 'Incline DB Kelso Shrug',
              substituteOptions: ['Seated Cable Kelso Shrug', 'Incline DB Kelso Shrug'],
              notes: 'Pause for about 1 second at the top and then allow your shoulder blades to peel apart on the way back down, under control.'
            },
            {
              id: 'mm-w1-d1-ex6',
              exerciseId: 'EZ-Bar Preacher Curl',
              displayName: 'EZ-Bar Preacher Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Machine Preacher Curl', substitutionOption2: 'DB Preacher Curl',
              substituteOptions: ['Machine Preacher Curl', 'DB Preacher Curl'],
              notes: 'Keep your triceps firmly pinned against the pad as you curl. Smooth controlled reps.'
            },
            {
              id: 'mm-w1-d1-ex7',
              exerciseId: 'Triceps Pressdown',
              displayName: 'Triceps Pressdown',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Close-Grip Bench Press', substitutionOption2: 'Smith Machine JM Press',
              substituteOptions: ['Close-Grip Bench Press', 'Smith Machine JM Press'],
              notes: 'You can use a rope or bar attachment for these, whichever you find more comfortable.'
            },
            {
              id: 'mm-w1-d1-ex8',
              exerciseId: 'Dragon Flag',
              displayName: 'Dragon Flag',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Bent-Knee Dragon Flag', substitutionOption2: 'Lying Leg Raise',
              substituteOptions: ['Bent-Knee Dragon Flag', 'Lying Leg Raise'],
              notes: 'Keep your body as rigid as possible throughout the ROM.'
            }
          ]
        },
        {
          id: 'mm-w1-d2',
          name: 'Día 2: Lower 1 (Cuádriceps & Rodilla)',
          targetMuscles: ['Cuádriceps', 'Isquiotibiales', 'Glúteos', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w1-d2-ex1',
              exerciseId: 'Lying Leg Curl',
              displayName: 'Lying Leg Curl',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Seated Leg Curl', substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Seated Leg Curl', 'Nordic Ham Curl'],
              notes: 'Set the machine so that you get the biggest stretch possible at the bottom. Prevent your butt from popping up as you curl.'
            },
            {
              id: 'mm-w1-d2-ex2',
              exerciseId: 'Squat (Your Choice)',
              displayName: 'Squat (Your Choice)',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 3', 'RIR 2'],
              restPeriod: '3-5 min',
              substituteOptions: [],
              notes: 'This can be a Barbell Back Squat, Barbell Front Squat, Pendulum Squat, Hack Squat, Belt Squat, or Smith Machine Squat.'
            },
            {
              id: 'mm-w1-d2-ex3',
              exerciseId: 'Smith Machine Lunge',
              displayName: 'Smith Machine Lunge',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 1'],
              restPeriod: '2-4 min', substitutionOption1: 'DB Lunge', substitutionOption2: 'Barbell Lunge',
              substituteOptions: ['DB Lunge', 'Barbell Lunge'],
              notes: 'Minimize contribution from your back leg!'
            },
            {
              id: 'mm-w1-d2-ex4',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w1-d2-ex5',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Hip Abduction', substitutionOption2: 'Standing Plate Abduction',
              substituteOptions: ['Cable Hip Abduction', 'Standing Plate Abduction'],
              notes: 'If possible, place foam pads in between the outside of your knees and the pads on the machine. This will increase your range of motion on the machine.'
            },
            {
              id: 'mm-w1-d2-ex6',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w1-d3',
          name: 'Día 3: Upper 2 (Tracción & Espalda)',
          targetMuscles: ['Dorsales', 'Espalda Alta', 'Pectorales', 'Deltoides', 'Abs'],
          exercises: [
            {
              id: 'mm-w1-d3-ex1',
              exerciseId: 'Close-Grip Lat Pulldown',
              displayName: 'Close-Grip Lat Pulldown',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'Close-Grip Pull-Up', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Close-Grip Pull-Up', '1-Arm Cable Pulldown'],
              notes: 'Lean back by ~15º and drive your elbows down as you squeeze your shoulder blades together. This should feel like a mix of lats and mid-traps.'
            },
            {
              id: 'mm-w1-d3-ex2',
              exerciseId: 'Chest-Supported T-Bar Row',
              displayName: 'Chest-Supported T-Bar Row',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'Chest-Supported Machine Row', substitutionOption2: 'Chest-Supported DB Row',
              substituteOptions: ['Chest-Supported Machine Row', 'Chest-Supported DB Row'],
              notes: 'Flare elbows out at roughly 45º and squeeze your shoulder blades together hard at the top of each rep.'
            },
            {
              id: 'mm-w1-d3-ex3',
              exerciseId: 'Machine Shrug',
              displayName: 'Machine Shrug',
              warmupSets: '1-2',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 1'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Shrug', substitutionOption2: 'Cable Shrug-In',
              substituteOptions: ['Barbell Shrug', 'Cable Shrug-In'],
              notes: 'Think about shrugging "up to your ears". Use straps, if possible.'
            },
            {
              id: 'mm-w1-d3-ex4',
              exerciseId: 'Machine Chest Press',
              displayName: 'Machine Chest Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Bench Press', substitutionOption2: 'DB Bench Press',
              substituteOptions: ['Smith Machine Bench Press', 'DB Bench Press'],
              notes: '1 second pause at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w1-d3-ex5',
              exerciseId: 'High-Cable Lateral Raise',
              displayName: 'High-Cable Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Lateral Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['DB Lateral Raise', 'Machine Lateral Raise'],
              notes: 'Set the cable at roughly hip height. Let your hand go slightly past your midline at the bottom of each rep to get a deep stretch on the side delt.'
            },
            {
              id: 'mm-w1-d3-ex6',
              exerciseId: '1-Arm Reverse Pec Deck',
              displayName: '1-Arm Reverse Pec Deck',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Lying Reverse DB Flye', substitutionOption2: 'Reverse Cable Crossover',
              substituteOptions: ['Lying Reverse DB Flye', 'Reverse Cable Crossover'],
              notes: 'Sweep the weight out to create the largest semi-circle possible with your arm.'
            },
            {
              id: 'mm-w1-d3-ex7',
              exerciseId: 'Cable Crunch',
              displayName: 'Cable Crunch',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Weighted Crunch', substitutionOption2: 'Machine Crunch',
              substituteOptions: ['Weighted Crunch', 'Machine Crunch'],
              notes: 'Round your lower back as you crunch. Maintain a mind-muscle connection with your 6-pack.'
            }
          ]
        },
        {
          id: 'mm-w1-d4',
          name: 'Día 4: Lower 2 (Cadena Posterior & Bisagra)',
          targetMuscles: ['Isquiotibiales', 'Glúteos', 'Cuádriceps', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w1-d4-ex1',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w1-d4-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Barbell RDL',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 3', 'RIR 2'],
              restPeriod: '2-3 min', substitutionOption1: 'DB RDL', substitutionOption2: 'Seated Cable Deadlift',
              substituteOptions: ['DB RDL', 'Seated Cable Deadlift'],
              notes: 'Stick your glutes straight back as you lower the bar straight down, centered over the middle of your foot. Get a nice deep stretch at the bottom, but keep your spine neutral (don\'t round forward).'
            },
            {
              id: 'mm-w1-d4-ex3',
              exerciseId: 'Machine Hip Thrust',
              displayName: 'Machine Hip Thrust',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'Barbell Hip Thrust', substitutionOption2: '45º Hyperextension',
              substituteOptions: ['Barbell Hip Thrust', '45º Hyperextension'],
              notes: 'Squeeze your glutes hard at the top and control the weight on the way down.'
            },
            {
              id: 'mm-w1-d4-ex4',
              exerciseId: 'Leg Press',
              displayName: 'Leg Press',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'Smith Machine Squat', substitutionOption2: 'Barbell Squat',
              substituteOptions: ['Smith Machine Squat', 'Barbell Squat'],
              notes: 'Feet lower on the platform for more quad focus. Get as deep as you can without excessive back rounding.'
            },
            {
              id: 'mm-w1-d4-ex5',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w1-d5',
          name: 'Día 5: Arms & Delts (Brazo & Hombro)',
          targetMuscles: ['Bíceps', 'Tríceps', 'Deltoides', 'Antebrazos'],
          exercises: [
            {
              id: 'mm-w1-d5-ex1',
              exerciseId: 'Bayesian Cable Curl',
              displayName: 'Bayesian Cable Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Incline DB Curl', substitutionOption2: 'Standing DB Curl',
              substituteOptions: ['Incline DB Curl', 'Standing DB Curl'],
              notes: 'As you curl, optionally lean forward to prevent the cable from hitting your wrist at the top. Control the negative and feel a deep stretch at the bottom of each rep.'
            },
            {
              id: 'mm-w1-d5-ex2',
              exerciseId: 'Overhead Cable Triceps Extension',
              displayName: 'Overhead Cable Triceps Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Overhead DB Triceps Extension', substitutionOption2: 'Skull Crusher',
              substituteOptions: ['Overhead DB Triceps Extension', 'Skull Crusher'],
              notes: 'Feel a deep stretch on the triceps throughout the entire negative.'
            },
            {
              id: 'mm-w1-d5-ex3',
              exerciseId: 'Modified Zottman Curl',
              displayName: 'Modified Zottman Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Hammer Curl', substitutionOption2: 'Preacher Hammer Curl',
              substituteOptions: ['DB Hammer Curl', 'Preacher Hammer Curl'],
              notes: 'Hammer curl on the way up and supinated curl (palms up) on the way down.'
            },
            {
              id: 'mm-w1-d5-ex4',
              exerciseId: 'Cable Triceps Kickback',
              displayName: 'Cable Triceps Kickback',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Seated Dip Machine', substitutionOption2: 'Close Grip Dip',
              substituteOptions: ['Seated Dip Machine', 'Close Grip Dip'],
              notes: 'Keep your upper arm behind your torso throughout the ROM.'
            },
            {
              id: 'mm-w1-d5-ex5',
              exerciseId: 'DB Wrist Curl',
              displayName: 'DB Wrist Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Curl',
              substituteOptions: ['Cable Wrist Curl'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w1-d5-ex6',
              exerciseId: 'DB Wrist Extension',
              displayName: 'DB Wrist Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Extension',
              substituteOptions: ['Cable Wrist Extension'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w1-d5-ex7',
              exerciseId: 'Alternating DB Curl',
              displayName: 'Alternating DB Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Curl', substitutionOption2: 'EZ-Bar Curl',
              substituteOptions: ['Barbell Curl', 'EZ-Bar Curl'],
              notes: 'Slow, controlled reps!'
            },
            {
              id: 'mm-w1-d5-ex8',
              exerciseId: 'Machine Lateral Raise',
              displayName: 'Machine Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'High-Cable Lateral Raise', substitutionOption2: 'DB Lateral Raise',
              substituteOptions: ['High-Cable Lateral Raise', 'DB Lateral Raise'],
              notes: 'Focus on squeezing your side delt to move the weight.'
            },
            {
              id: 'mm-w1-d5-ex9',
              exerciseId: 'Dead Hang (optional)',
              displayName: 'Dead Hang (optional)',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: 'N/A',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min',
              substituteOptions: [],
              notes: 'Try to add a few more seconds each week!'
            }
          ]
        }
      ]
    },
    {
      weekNumber: 2,
      title: 'Semana 2 (Bloque 1: Carga Progresiva)',
      isDeload: false,
      days: [
        {
          id: 'mm-w2-d1',
          name: 'Día 1: Upper 1 (Empuje & Pecho)',
          targetMuscles: ['Pectorales', 'Deltoides', 'Espalda', 'Tríceps', 'Bíceps', 'Abs'],
          exercises: [
            {
              id: 'mm-w2-d1-ex1',
              exerciseId: 'Barbell Incline Press',
              displayName: 'Barbell Incline Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Incline Press', substitutionOption2: 'DB Incline Press',
              substituteOptions: ['Smith Machine Incline Press', 'DB Incline Press'],
              notes: 'A 30º or 45º bench will work here. Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w2-d1-ex2',
              exerciseId: 'Pec Deck',
              displayName: 'Pec Deck',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Flye', substitutionOption2: 'Cable Flye',
              substituteOptions: ['DB Flye', 'Cable Flye'],
              notes: 'Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w2-d1-ex3',
              exerciseId: 'Incline DB Y-Raise',
              displayName: 'Incline DB Y-Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Y-Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['Cable Y-Raise', 'Machine Lateral Raise'],
              notes: 'Use a 30º incline bench (back against the bench) and lift the weight up and out in a Y shape.'
            },
            {
              id: 'mm-w2-d1-ex4',
              exerciseId: 'Pull-Up (Wide Grip)',
              displayName: 'Pull-Up (Wide Grip)',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Lat Pulldown (Wide Grip)', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Lat Pulldown (Wide Grip)', '1-Arm Cable Pulldown'],
              notes: 'Control the negative and feel your lats pulling apart. Full ROM!'
            },
            {
              id: 'mm-w2-d1-ex5',
              exerciseId: 'Kelso Shrug',
              displayName: 'Kelso Shrug',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Seated Cable Kelso Shrug', substitutionOption2: 'Incline DB Kelso Shrug',
              substituteOptions: ['Seated Cable Kelso Shrug', 'Incline DB Kelso Shrug'],
              notes: 'Pause for about 1 second at the top and then allow your shoulder blades to peel apart on the way back down, under control.'
            },
            {
              id: 'mm-w2-d1-ex6',
              exerciseId: 'EZ-Bar Preacher Curl',
              displayName: 'EZ-Bar Preacher Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Machine Preacher Curl', substitutionOption2: 'DB Preacher Curl',
              substituteOptions: ['Machine Preacher Curl', 'DB Preacher Curl'],
              notes: 'Keep your triceps firmly pinned against the pad as you curl. Smooth controlled reps.'
            },
            {
              id: 'mm-w2-d1-ex7',
              exerciseId: 'Triceps Pressdown',
              displayName: 'Triceps Pressdown',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Close-Grip Bench Press', substitutionOption2: 'Smith Machine JM Press',
              substituteOptions: ['Close-Grip Bench Press', 'Smith Machine JM Press'],
              notes: 'You can use a rope or bar attachment for these, whichever you find more comfortable.'
            },
            {
              id: 'mm-w2-d1-ex8',
              exerciseId: 'Dragon Flag',
              displayName: 'Dragon Flag',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Bent-Knee Dragon Flag', substitutionOption2: 'Lying Leg Raise',
              substituteOptions: ['Bent-Knee Dragon Flag', 'Lying Leg Raise'],
              notes: 'Keep your body as rigid as possible throughout the ROM.'
            }
          ]
        },
        {
          id: 'mm-w2-d2',
          name: 'Día 2: Lower 1 (Cuádriceps & Rodilla)',
          targetMuscles: ['Cuádriceps', 'Isquiotibiales', 'Glúteos', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w2-d2-ex1',
              exerciseId: 'Lying Leg Curl',
              displayName: 'Lying Leg Curl',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Seated Leg Curl', substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Seated Leg Curl', 'Nordic Ham Curl'],
              notes: 'Set the machine so that you get the biggest stretch possible at the bottom. Prevent your butt from popping up as you curl.'
            },
            {
              id: 'mm-w2-d2-ex2',
              exerciseId: 'Squat (Your Choice)',
              displayName: 'Squat (Your Choice)',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min',
              substituteOptions: [],
              notes: 'This can be a Barbell Back Squat, Barbell Front Squat, Pendulum Squat, Hack Squat, Belt Squat, or Smith Machine Squat.'
            },
            {
              id: 'mm-w2-d2-ex3',
              exerciseId: 'Smith Machine Lunge',
              displayName: 'Smith Machine Lunge',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-4 min', substitutionOption1: 'DB Lunge', substitutionOption2: 'Barbell Lunge',
              substituteOptions: ['DB Lunge', 'Barbell Lunge'],
              notes: 'Minimize contribution from your back leg!'
            },
            {
              id: 'mm-w2-d2-ex4',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w2-d2-ex5',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Hip Abduction', substitutionOption2: 'Standing Plate Abduction',
              substituteOptions: ['Cable Hip Abduction', 'Standing Plate Abduction'],
              notes: 'If possible, place foam pads in between the outside of your knees and the pads on the machine. This will increase your range of motion on the machine.'
            },
            {
              id: 'mm-w2-d2-ex6',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w2-d3',
          name: 'Día 3: Upper 2 (Tracción & Espalda)',
          targetMuscles: ['Dorsales', 'Espalda Alta', 'Pectorales', 'Deltoides', 'Abs'],
          exercises: [
            {
              id: 'mm-w2-d3-ex1',
              exerciseId: 'Close-Grip Lat Pulldown',
              displayName: 'Close-Grip Lat Pulldown',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Close-Grip Pull-Up', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Close-Grip Pull-Up', '1-Arm Cable Pulldown'],
              notes: 'Lean back by ~15º and drive your elbows down as you squeeze your shoulder blades together. This should feel like a mix of lats and mid-traps.'
            },
            {
              id: 'mm-w2-d3-ex2',
              exerciseId: 'Chest-Supported T-Bar Row',
              displayName: 'Chest-Supported T-Bar Row',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Chest-Supported Machine Row', substitutionOption2: 'Chest-Supported DB Row',
              substituteOptions: ['Chest-Supported Machine Row', 'Chest-Supported DB Row'],
              notes: 'Flare elbows out at roughly 45º and squeeze your shoulder blades together hard at the top of each rep.'
            },
            {
              id: 'mm-w2-d3-ex3',
              exerciseId: 'Machine Shrug',
              displayName: 'Machine Shrug',
              warmupSets: '1-2',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Shrug', substitutionOption2: 'Cable Shrug-In',
              substituteOptions: ['Barbell Shrug', 'Cable Shrug-In'],
              notes: 'Think about shrugging "up to your ears". Use straps, if possible.'
            },
            {
              id: 'mm-w2-d3-ex4',
              exerciseId: 'Machine Chest Press',
              displayName: 'Machine Chest Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Bench Press', substitutionOption2: 'DB Bench Press',
              substituteOptions: ['Smith Machine Bench Press', 'DB Bench Press'],
              notes: '1 second pause at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w2-d3-ex5',
              exerciseId: 'High-Cable Lateral Raise',
              displayName: 'High-Cable Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Lateral Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['DB Lateral Raise', 'Machine Lateral Raise'],
              notes: 'Set the cable at roughly hip height. Let your hand go slightly past your midline at the bottom of each rep to get a deep stretch on the side delt.'
            },
            {
              id: 'mm-w2-d3-ex6',
              exerciseId: '1-Arm Reverse Pec Deck',
              displayName: '1-Arm Reverse Pec Deck',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Lying Reverse DB Flye', substitutionOption2: 'Reverse Cable Crossover',
              substituteOptions: ['Lying Reverse DB Flye', 'Reverse Cable Crossover'],
              notes: 'Sweep the weight out to create the largest semi-circle possible with your arm.'
            },
            {
              id: 'mm-w2-d3-ex7',
              exerciseId: 'Cable Crunch',
              displayName: 'Cable Crunch',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Weighted Crunch', substitutionOption2: 'Machine Crunch',
              substituteOptions: ['Weighted Crunch', 'Machine Crunch'],
              notes: 'Round your lower back as you crunch. Maintain a mind-muscle connection with your 6-pack.'
            }
          ]
        },
        {
          id: 'mm-w2-d4',
          name: 'Día 4: Lower 2 (Cadena Posterior & Bisagra)',
          targetMuscles: ['Isquiotibiales', 'Glúteos', 'Cuádriceps', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w2-d4-ex1',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w2-d4-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Barbell RDL',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'DB RDL', substitutionOption2: 'Seated Cable Deadlift',
              substituteOptions: ['DB RDL', 'Seated Cable Deadlift'],
              notes: 'Stick your glutes straight back as you lower the bar straight down, centered over the middle of your foot. Get a nice deep stretch at the bottom, but keep your spine neutral (don\'t round forward).'
            },
            {
              id: 'mm-w2-d4-ex3',
              exerciseId: 'Machine Hip Thrust',
              displayName: 'Machine Hip Thrust',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Barbell Hip Thrust', substitutionOption2: '45º Hyperextension',
              substituteOptions: ['Barbell Hip Thrust', '45º Hyperextension'],
              notes: 'Squeeze your glutes hard at the top and control the weight on the way down.'
            },
            {
              id: 'mm-w2-d4-ex4',
              exerciseId: 'Leg Press',
              displayName: 'Leg Press',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Smith Machine Squat', substitutionOption2: 'Barbell Squat',
              substituteOptions: ['Smith Machine Squat', 'Barbell Squat'],
              notes: 'Feet lower on the platform for more quad focus. Get as deep as you can without excessive back rounding.'
            },
            {
              id: 'mm-w2-d4-ex5',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w2-d5',
          name: 'Día 5: Arms & Delts (Brazo & Hombro)',
          targetMuscles: ['Bíceps', 'Tríceps', 'Deltoides', 'Antebrazos'],
          exercises: [
            {
              id: 'mm-w2-d5-ex1',
              exerciseId: 'Bayesian Cable Curl',
              displayName: 'Bayesian Cable Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Incline DB Curl', substitutionOption2: 'Standing DB Curl',
              substituteOptions: ['Incline DB Curl', 'Standing DB Curl'],
              notes: 'As you curl, optionally lean forward to prevent the cable from hitting your wrist at the top. Control the negative and feel a deep stretch at the bottom of each rep.'
            },
            {
              id: 'mm-w2-d5-ex2',
              exerciseId: 'Overhead Cable Triceps Extension',
              displayName: 'Overhead Cable Triceps Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Overhead DB Triceps Extension', substitutionOption2: 'Skull Crusher',
              substituteOptions: ['Overhead DB Triceps Extension', 'Skull Crusher'],
              notes: 'Feel a deep stretch on the triceps throughout the entire negative.'
            },
            {
              id: 'mm-w2-d5-ex3',
              exerciseId: 'Modified Zottman Curl',
              displayName: 'Modified Zottman Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Hammer Curl', substitutionOption2: 'Preacher Hammer Curl',
              substituteOptions: ['DB Hammer Curl', 'Preacher Hammer Curl'],
              notes: 'Hammer curl on the way up and supinated curl (palms up) on the way down.'
            },
            {
              id: 'mm-w2-d5-ex4',
              exerciseId: 'Cable Triceps Kickback',
              displayName: 'Cable Triceps Kickback',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Seated Dip Machine', substitutionOption2: 'Close Grip Dip',
              substituteOptions: ['Seated Dip Machine', 'Close Grip Dip'],
              notes: 'Keep your upper arm behind your torso throughout the ROM.'
            },
            {
              id: 'mm-w2-d5-ex5',
              exerciseId: 'DB Wrist Curl',
              displayName: 'DB Wrist Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Curl',
              substituteOptions: ['Cable Wrist Curl'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w2-d5-ex6',
              exerciseId: 'DB Wrist Extension',
              displayName: 'DB Wrist Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Extension',
              substituteOptions: ['Cable Wrist Extension'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w2-d5-ex7',
              exerciseId: 'Alternating DB Curl',
              displayName: 'Alternating DB Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Curl', substitutionOption2: 'EZ-Bar Curl',
              substituteOptions: ['Barbell Curl', 'EZ-Bar Curl'],
              notes: 'Slow, controlled reps!'
            },
            {
              id: 'mm-w2-d5-ex8',
              exerciseId: 'Machine Lateral Raise',
              displayName: 'Machine Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'High-Cable Lateral Raise', substitutionOption2: 'DB Lateral Raise',
              substituteOptions: ['High-Cable Lateral Raise', 'DB Lateral Raise'],
              notes: 'Focus on squeezing your side delt to move the weight.'
            },
            {
              id: 'mm-w2-d5-ex9',
              exerciseId: 'Dead Hang (optional)',
              displayName: 'Dead Hang (optional)',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: 'N/A',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min',
              substituteOptions: [],
              notes: 'Try to add a few more seconds each week!'
            }
          ]
        }
      ]
    },
    {
      weekNumber: 3,
      title: 'Semana 3 (Bloque 1: Carga Progresiva)',
      isDeload: false,
      days: [
        {
          id: 'mm-w3-d1',
          name: 'Día 1: Upper 1 (Empuje & Pecho)',
          targetMuscles: ['Pectorales', 'Deltoides', 'Espalda', 'Tríceps', 'Bíceps', 'Abs'],
          exercises: [
            {
              id: 'mm-w3-d1-ex1',
              exerciseId: 'Barbell Incline Press',
              displayName: 'Barbell Incline Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Incline Press', substitutionOption2: 'DB Incline Press',
              substituteOptions: ['Smith Machine Incline Press', 'DB Incline Press'],
              notes: 'A 30º or 45º bench will work here. Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w3-d1-ex2',
              exerciseId: 'Pec Deck',
              displayName: 'Pec Deck',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Flye', substitutionOption2: 'Cable Flye',
              substituteOptions: ['DB Flye', 'Cable Flye'],
              notes: 'Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w3-d1-ex3',
              exerciseId: 'Incline DB Y-Raise',
              displayName: 'Incline DB Y-Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Y-Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['Cable Y-Raise', 'Machine Lateral Raise'],
              notes: 'Use a 30º incline bench (back against the bench) and lift the weight up and out in a Y shape.'
            },
            {
              id: 'mm-w3-d1-ex4',
              exerciseId: 'Pull-Up (Wide Grip)',
              displayName: 'Pull-Up (Wide Grip)',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Lat Pulldown (Wide Grip)', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Lat Pulldown (Wide Grip)', '1-Arm Cable Pulldown'],
              notes: 'Control the negative and feel your lats pulling apart. Full ROM!'
            },
            {
              id: 'mm-w3-d1-ex5',
              exerciseId: 'Kelso Shrug',
              displayName: 'Kelso Shrug',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Seated Cable Kelso Shrug', substitutionOption2: 'Incline DB Kelso Shrug',
              substituteOptions: ['Seated Cable Kelso Shrug', 'Incline DB Kelso Shrug'],
              notes: 'Pause for about 1 second at the top and then allow your shoulder blades to peel apart on the way back down, under control.'
            },
            {
              id: 'mm-w3-d1-ex6',
              exerciseId: 'EZ-Bar Preacher Curl',
              displayName: 'EZ-Bar Preacher Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Machine Preacher Curl', substitutionOption2: 'DB Preacher Curl',
              substituteOptions: ['Machine Preacher Curl', 'DB Preacher Curl'],
              notes: 'Keep your triceps firmly pinned against the pad as you curl. Smooth controlled reps.'
            },
            {
              id: 'mm-w3-d1-ex7',
              exerciseId: 'Triceps Pressdown',
              displayName: 'Triceps Pressdown',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Close-Grip Bench Press', substitutionOption2: 'Smith Machine JM Press',
              substituteOptions: ['Close-Grip Bench Press', 'Smith Machine JM Press'],
              notes: 'You can use a rope or bar attachment for these, whichever you find more comfortable.'
            },
            {
              id: 'mm-w3-d1-ex8',
              exerciseId: 'Dragon Flag',
              displayName: 'Dragon Flag',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Bent-Knee Dragon Flag', substitutionOption2: 'Lying Leg Raise',
              substituteOptions: ['Bent-Knee Dragon Flag', 'Lying Leg Raise'],
              notes: 'Keep your body as rigid as possible throughout the ROM.'
            }
          ]
        },
        {
          id: 'mm-w3-d2',
          name: 'Día 2: Lower 1 (Cuádriceps & Rodilla)',
          targetMuscles: ['Cuádriceps', 'Isquiotibiales', 'Glúteos', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w3-d2-ex1',
              exerciseId: 'Lying Leg Curl',
              displayName: 'Lying Leg Curl',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Seated Leg Curl', substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Seated Leg Curl', 'Nordic Ham Curl'],
              notes: 'Set the machine so that you get the biggest stretch possible at the bottom. Prevent your butt from popping up as you curl.'
            },
            {
              id: 'mm-w3-d2-ex2',
              exerciseId: 'Squat (Your Choice)',
              displayName: 'Squat (Your Choice)',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min',
              substituteOptions: [],
              notes: 'This can be a Barbell Back Squat, Barbell Front Squat, Pendulum Squat, Hack Squat, Belt Squat, or Smith Machine Squat.'
            },
            {
              id: 'mm-w3-d2-ex3',
              exerciseId: 'Smith Machine Lunge',
              displayName: 'Smith Machine Lunge',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-4 min', substitutionOption1: 'DB Lunge', substitutionOption2: 'Barbell Lunge',
              substituteOptions: ['DB Lunge', 'Barbell Lunge'],
              notes: 'Minimize contribution from your back leg!'
            },
            {
              id: 'mm-w3-d2-ex4',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w3-d2-ex5',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Hip Abduction', substitutionOption2: 'Standing Plate Abduction',
              substituteOptions: ['Cable Hip Abduction', 'Standing Plate Abduction'],
              notes: 'If possible, place foam pads in between the outside of your knees and the pads on the machine. This will increase your range of motion on the machine.'
            },
            {
              id: 'mm-w3-d2-ex6',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w3-d3',
          name: 'Día 3: Upper 2 (Tracción & Espalda)',
          targetMuscles: ['Dorsales', 'Espalda Alta', 'Pectorales', 'Deltoides', 'Abs'],
          exercises: [
            {
              id: 'mm-w3-d3-ex1',
              exerciseId: 'Close-Grip Lat Pulldown',
              displayName: 'Close-Grip Lat Pulldown',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Close-Grip Pull-Up', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Close-Grip Pull-Up', '1-Arm Cable Pulldown'],
              notes: 'Lean back by ~15º and drive your elbows down as you squeeze your shoulder blades together. This should feel like a mix of lats and mid-traps.'
            },
            {
              id: 'mm-w3-d3-ex2',
              exerciseId: 'Chest-Supported T-Bar Row',
              displayName: 'Chest-Supported T-Bar Row',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Chest-Supported Machine Row', substitutionOption2: 'Chest-Supported DB Row',
              substituteOptions: ['Chest-Supported Machine Row', 'Chest-Supported DB Row'],
              notes: 'Flare elbows out at roughly 45º and squeeze your shoulder blades together hard at the top of each rep.'
            },
            {
              id: 'mm-w3-d3-ex3',
              exerciseId: 'Machine Shrug',
              displayName: 'Machine Shrug',
              warmupSets: '1-2',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Shrug', substitutionOption2: 'Cable Shrug-In',
              substituteOptions: ['Barbell Shrug', 'Cable Shrug-In'],
              notes: 'Think about shrugging "up to your ears". Use straps, if possible.'
            },
            {
              id: 'mm-w3-d3-ex4',
              exerciseId: 'Machine Chest Press',
              displayName: 'Machine Chest Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Bench Press', substitutionOption2: 'DB Bench Press',
              substituteOptions: ['Smith Machine Bench Press', 'DB Bench Press'],
              notes: '1 second pause at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w3-d3-ex5',
              exerciseId: 'High-Cable Lateral Raise',
              displayName: 'High-Cable Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Lateral Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['DB Lateral Raise', 'Machine Lateral Raise'],
              notes: 'Set the cable at roughly hip height. Let your hand go slightly past your midline at the bottom of each rep to get a deep stretch on the side delt.'
            },
            {
              id: 'mm-w3-d3-ex6',
              exerciseId: '1-Arm Reverse Pec Deck',
              displayName: '1-Arm Reverse Pec Deck',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Lying Reverse DB Flye', substitutionOption2: 'Reverse Cable Crossover',
              substituteOptions: ['Lying Reverse DB Flye', 'Reverse Cable Crossover'],
              notes: 'Sweep the weight out to create the largest semi-circle possible with your arm.'
            },
            {
              id: 'mm-w3-d3-ex7',
              exerciseId: 'Cable Crunch',
              displayName: 'Cable Crunch',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Weighted Crunch', substitutionOption2: 'Machine Crunch',
              substituteOptions: ['Weighted Crunch', 'Machine Crunch'],
              notes: 'Round your lower back as you crunch. Maintain a mind-muscle connection with your 6-pack.'
            }
          ]
        },
        {
          id: 'mm-w3-d4',
          name: 'Día 4: Lower 2 (Cadena Posterior & Bisagra)',
          targetMuscles: ['Isquiotibiales', 'Glúteos', 'Cuádriceps', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w3-d4-ex1',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w3-d4-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Barbell RDL',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'DB RDL', substitutionOption2: 'Seated Cable Deadlift',
              substituteOptions: ['DB RDL', 'Seated Cable Deadlift'],
              notes: 'Stick your glutes straight back as you lower the bar straight down, centered over the middle of your foot. Get a nice deep stretch at the bottom, but keep your spine neutral (don\'t round forward).'
            },
            {
              id: 'mm-w3-d4-ex3',
              exerciseId: 'Machine Hip Thrust',
              displayName: 'Machine Hip Thrust',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Barbell Hip Thrust', substitutionOption2: '45º Hyperextension',
              substituteOptions: ['Barbell Hip Thrust', '45º Hyperextension'],
              notes: 'Squeeze your glutes hard at the top and control the weight on the way down.'
            },
            {
              id: 'mm-w3-d4-ex4',
              exerciseId: 'Leg Press',
              displayName: 'Leg Press',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Smith Machine Squat', substitutionOption2: 'Barbell Squat',
              substituteOptions: ['Smith Machine Squat', 'Barbell Squat'],
              notes: 'Feet lower on the platform for more quad focus. Get as deep as you can without excessive back rounding.'
            },
            {
              id: 'mm-w3-d4-ex5',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w3-d5',
          name: 'Día 5: Arms & Delts (Brazo & Hombro)',
          targetMuscles: ['Bíceps', 'Tríceps', 'Deltoides', 'Antebrazos'],
          exercises: [
            {
              id: 'mm-w3-d5-ex1',
              exerciseId: 'Bayesian Cable Curl',
              displayName: 'Bayesian Cable Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Incline DB Curl', substitutionOption2: 'Standing DB Curl',
              substituteOptions: ['Incline DB Curl', 'Standing DB Curl'],
              notes: 'As you curl, optionally lean forward to prevent the cable from hitting your wrist at the top. Control the negative and feel a deep stretch at the bottom of each rep.'
            },
            {
              id: 'mm-w3-d5-ex2',
              exerciseId: 'Overhead Cable Triceps Extension',
              displayName: 'Overhead Cable Triceps Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Overhead DB Triceps Extension', substitutionOption2: 'Skull Crusher',
              substituteOptions: ['Overhead DB Triceps Extension', 'Skull Crusher'],
              notes: 'Feel a deep stretch on the triceps throughout the entire negative.'
            },
            {
              id: 'mm-w3-d5-ex3',
              exerciseId: 'Modified Zottman Curl',
              displayName: 'Modified Zottman Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Hammer Curl', substitutionOption2: 'Preacher Hammer Curl',
              substituteOptions: ['DB Hammer Curl', 'Preacher Hammer Curl'],
              notes: 'Hammer curl on the way up and supinated curl (palms up) on the way down.'
            },
            {
              id: 'mm-w3-d5-ex4',
              exerciseId: 'Cable Triceps Kickback',
              displayName: 'Cable Triceps Kickback',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Seated Dip Machine', substitutionOption2: 'Close Grip Dip',
              substituteOptions: ['Seated Dip Machine', 'Close Grip Dip'],
              notes: 'Keep your upper arm behind your torso throughout the ROM.'
            },
            {
              id: 'mm-w3-d5-ex5',
              exerciseId: 'DB Wrist Curl',
              displayName: 'DB Wrist Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Curl',
              substituteOptions: ['Cable Wrist Curl'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w3-d5-ex6',
              exerciseId: 'DB Wrist Extension',
              displayName: 'DB Wrist Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Extension',
              substituteOptions: ['Cable Wrist Extension'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w3-d5-ex7',
              exerciseId: 'Alternating DB Curl',
              displayName: 'Alternating DB Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Curl', substitutionOption2: 'EZ-Bar Curl',
              substituteOptions: ['Barbell Curl', 'EZ-Bar Curl'],
              notes: 'Slow, controlled reps!'
            },
            {
              id: 'mm-w3-d5-ex8',
              exerciseId: 'Machine Lateral Raise',
              displayName: 'Machine Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'High-Cable Lateral Raise', substitutionOption2: 'DB Lateral Raise',
              substituteOptions: ['High-Cable Lateral Raise', 'DB Lateral Raise'],
              notes: 'Focus on squeezing your side delt to move the weight.'
            },
            {
              id: 'mm-w3-d5-ex9',
              exerciseId: 'Dead Hang (optional)',
              displayName: 'Dead Hang (optional)',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: 'N/A',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min',
              substituteOptions: [],
              notes: 'Try to add a few more seconds each week!'
            }
          ]
        }
      ]
    },
    {
      weekNumber: 4,
      title: 'Semana 4 (Bloque 1: Carga Progresiva)',
      isDeload: false,
      days: [
        {
          id: 'mm-w4-d1',
          name: 'Día 1: Upper 1 (Empuje & Pecho)',
          targetMuscles: ['Pectorales', 'Deltoides', 'Espalda', 'Tríceps', 'Bíceps', 'Abs'],
          exercises: [
            {
              id: 'mm-w4-d1-ex1',
              exerciseId: 'Barbell Incline Press',
              displayName: 'Barbell Incline Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Incline Press', substitutionOption2: 'DB Incline Press',
              substituteOptions: ['Smith Machine Incline Press', 'DB Incline Press'],
              notes: 'A 30º or 45º bench will work here. Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w4-d1-ex2',
              exerciseId: 'Pec Deck',
              displayName: 'Pec Deck',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Flye', substitutionOption2: 'Cable Flye',
              substituteOptions: ['DB Flye', 'Cable Flye'],
              notes: 'Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w4-d1-ex3',
              exerciseId: 'Incline DB Y-Raise',
              displayName: 'Incline DB Y-Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Y-Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['Cable Y-Raise', 'Machine Lateral Raise'],
              notes: 'Use a 30º incline bench (back against the bench) and lift the weight up and out in a Y shape.'
            },
            {
              id: 'mm-w4-d1-ex4',
              exerciseId: 'Pull-Up (Wide Grip)',
              displayName: 'Pull-Up (Wide Grip)',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Lat Pulldown (Wide Grip)', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Lat Pulldown (Wide Grip)', '1-Arm Cable Pulldown'],
              notes: 'Control the negative and feel your lats pulling apart. Full ROM!'
            },
            {
              id: 'mm-w4-d1-ex5',
              exerciseId: 'Kelso Shrug',
              displayName: 'Kelso Shrug',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Seated Cable Kelso Shrug', substitutionOption2: 'Incline DB Kelso Shrug',
              substituteOptions: ['Seated Cable Kelso Shrug', 'Incline DB Kelso Shrug'],
              notes: 'Pause for about 1 second at the top and then allow your shoulder blades to peel apart on the way back down, under control.'
            },
            {
              id: 'mm-w4-d1-ex6',
              exerciseId: 'EZ-Bar Preacher Curl',
              displayName: 'EZ-Bar Preacher Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Machine Preacher Curl', substitutionOption2: 'DB Preacher Curl',
              substituteOptions: ['Machine Preacher Curl', 'DB Preacher Curl'],
              notes: 'Keep your triceps firmly pinned against the pad as you curl. Smooth controlled reps.'
            },
            {
              id: 'mm-w4-d1-ex7',
              exerciseId: 'Triceps Pressdown',
              displayName: 'Triceps Pressdown',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Close-Grip Bench Press', substitutionOption2: 'Smith Machine JM Press',
              substituteOptions: ['Close-Grip Bench Press', 'Smith Machine JM Press'],
              notes: 'You can use a rope or bar attachment for these, whichever you find more comfortable.'
            },
            {
              id: 'mm-w4-d1-ex8',
              exerciseId: 'Dragon Flag',
              displayName: 'Dragon Flag',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Bent-Knee Dragon Flag', substitutionOption2: 'Lying Leg Raise',
              substituteOptions: ['Bent-Knee Dragon Flag', 'Lying Leg Raise'],
              notes: 'Keep your body as rigid as possible throughout the ROM.'
            }
          ]
        },
        {
          id: 'mm-w4-d2',
          name: 'Día 2: Lower 1 (Cuádriceps & Rodilla)',
          targetMuscles: ['Cuádriceps', 'Isquiotibiales', 'Glúteos', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w4-d2-ex1',
              exerciseId: 'Lying Leg Curl',
              displayName: 'Lying Leg Curl',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Seated Leg Curl', substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Seated Leg Curl', 'Nordic Ham Curl'],
              notes: 'Set the machine so that you get the biggest stretch possible at the bottom. Prevent your butt from popping up as you curl.'
            },
            {
              id: 'mm-w4-d2-ex2',
              exerciseId: 'Squat (Your Choice)',
              displayName: 'Squat (Your Choice)',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min',
              substituteOptions: [],
              notes: 'This can be a Barbell Back Squat, Barbell Front Squat, Pendulum Squat, Hack Squat, Belt Squat, or Smith Machine Squat.'
            },
            {
              id: 'mm-w4-d2-ex3',
              exerciseId: 'Smith Machine Lunge',
              displayName: 'Smith Machine Lunge',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-4 min', substitutionOption1: 'DB Lunge', substitutionOption2: 'Barbell Lunge',
              substituteOptions: ['DB Lunge', 'Barbell Lunge'],
              notes: 'Minimize contribution from your back leg!'
            },
            {
              id: 'mm-w4-d2-ex4',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w4-d2-ex5',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Hip Abduction', substitutionOption2: 'Standing Plate Abduction',
              substituteOptions: ['Cable Hip Abduction', 'Standing Plate Abduction'],
              notes: 'If possible, place foam pads in between the outside of your knees and the pads on the machine. This will increase your range of motion on the machine.'
            },
            {
              id: 'mm-w4-d2-ex6',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w4-d3',
          name: 'Día 3: Upper 2 (Tracción & Espalda)',
          targetMuscles: ['Dorsales', 'Espalda Alta', 'Pectorales', 'Deltoides', 'Abs'],
          exercises: [
            {
              id: 'mm-w4-d3-ex1',
              exerciseId: 'Close-Grip Lat Pulldown',
              displayName: 'Close-Grip Lat Pulldown',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Close-Grip Pull-Up', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Close-Grip Pull-Up', '1-Arm Cable Pulldown'],
              notes: 'Lean back by ~15º and drive your elbows down as you squeeze your shoulder blades together. This should feel like a mix of lats and mid-traps.'
            },
            {
              id: 'mm-w4-d3-ex2',
              exerciseId: 'Chest-Supported T-Bar Row',
              displayName: 'Chest-Supported T-Bar Row',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Chest-Supported Machine Row', substitutionOption2: 'Chest-Supported DB Row',
              substituteOptions: ['Chest-Supported Machine Row', 'Chest-Supported DB Row'],
              notes: 'Flare elbows out at roughly 45º and squeeze your shoulder blades together hard at the top of each rep.'
            },
            {
              id: 'mm-w4-d3-ex3',
              exerciseId: 'Machine Shrug',
              displayName: 'Machine Shrug',
              warmupSets: '1-2',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Shrug', substitutionOption2: 'Cable Shrug-In',
              substituteOptions: ['Barbell Shrug', 'Cable Shrug-In'],
              notes: 'Think about shrugging "up to your ears". Use straps, if possible.'
            },
            {
              id: 'mm-w4-d3-ex4',
              exerciseId: 'Machine Chest Press',
              displayName: 'Machine Chest Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Bench Press', substitutionOption2: 'DB Bench Press',
              substituteOptions: ['Smith Machine Bench Press', 'DB Bench Press'],
              notes: '1 second pause at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w4-d3-ex5',
              exerciseId: 'High-Cable Lateral Raise',
              displayName: 'High-Cable Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Lateral Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['DB Lateral Raise', 'Machine Lateral Raise'],
              notes: 'Set the cable at roughly hip height. Let your hand go slightly past your midline at the bottom of each rep to get a deep stretch on the side delt.'
            },
            {
              id: 'mm-w4-d3-ex6',
              exerciseId: '1-Arm Reverse Pec Deck',
              displayName: '1-Arm Reverse Pec Deck',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Lying Reverse DB Flye', substitutionOption2: 'Reverse Cable Crossover',
              substituteOptions: ['Lying Reverse DB Flye', 'Reverse Cable Crossover'],
              notes: 'Sweep the weight out to create the largest semi-circle possible with your arm.'
            },
            {
              id: 'mm-w4-d3-ex7',
              exerciseId: 'Cable Crunch',
              displayName: 'Cable Crunch',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Weighted Crunch', substitutionOption2: 'Machine Crunch',
              substituteOptions: ['Weighted Crunch', 'Machine Crunch'],
              notes: 'Round your lower back as you crunch. Maintain a mind-muscle connection with your 6-pack.'
            }
          ]
        },
        {
          id: 'mm-w4-d4',
          name: 'Día 4: Lower 2 (Cadena Posterior & Bisagra)',
          targetMuscles: ['Isquiotibiales', 'Glúteos', 'Cuádriceps', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w4-d4-ex1',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w4-d4-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Barbell RDL',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'DB RDL', substitutionOption2: 'Seated Cable Deadlift',
              substituteOptions: ['DB RDL', 'Seated Cable Deadlift'],
              notes: 'Stick your glutes straight back as you lower the bar straight down, centered over the middle of your foot. Get a nice deep stretch at the bottom, but keep your spine neutral (don\'t round forward).'
            },
            {
              id: 'mm-w4-d4-ex3',
              exerciseId: 'Machine Hip Thrust',
              displayName: 'Machine Hip Thrust',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Barbell Hip Thrust', substitutionOption2: '45º Hyperextension',
              substituteOptions: ['Barbell Hip Thrust', '45º Hyperextension'],
              notes: 'Squeeze your glutes hard at the top and control the weight on the way down.'
            },
            {
              id: 'mm-w4-d4-ex4',
              exerciseId: 'Leg Press',
              displayName: 'Leg Press',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Smith Machine Squat', substitutionOption2: 'Barbell Squat',
              substituteOptions: ['Smith Machine Squat', 'Barbell Squat'],
              notes: 'Feet lower on the platform for more quad focus. Get as deep as you can without excessive back rounding.'
            },
            {
              id: 'mm-w4-d4-ex5',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w4-d5',
          name: 'Día 5: Arms & Delts (Brazo & Hombro)',
          targetMuscles: ['Bíceps', 'Tríceps', 'Deltoides', 'Antebrazos'],
          exercises: [
            {
              id: 'mm-w4-d5-ex1',
              exerciseId: 'Bayesian Cable Curl',
              displayName: 'Bayesian Cable Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Incline DB Curl', substitutionOption2: 'Standing DB Curl',
              substituteOptions: ['Incline DB Curl', 'Standing DB Curl'],
              notes: 'As you curl, optionally lean forward to prevent the cable from hitting your wrist at the top. Control the negative and feel a deep stretch at the bottom of each rep.'
            },
            {
              id: 'mm-w4-d5-ex2',
              exerciseId: 'Overhead Cable Triceps Extension',
              displayName: 'Overhead Cable Triceps Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Overhead DB Triceps Extension', substitutionOption2: 'Skull Crusher',
              substituteOptions: ['Overhead DB Triceps Extension', 'Skull Crusher'],
              notes: 'Feel a deep stretch on the triceps throughout the entire negative.'
            },
            {
              id: 'mm-w4-d5-ex3',
              exerciseId: 'Modified Zottman Curl',
              displayName: 'Modified Zottman Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Hammer Curl', substitutionOption2: 'Preacher Hammer Curl',
              substituteOptions: ['DB Hammer Curl', 'Preacher Hammer Curl'],
              notes: 'Hammer curl on the way up and supinated curl (palms up) on the way down.'
            },
            {
              id: 'mm-w4-d5-ex4',
              exerciseId: 'Cable Triceps Kickback',
              displayName: 'Cable Triceps Kickback',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Seated Dip Machine', substitutionOption2: 'Close Grip Dip',
              substituteOptions: ['Seated Dip Machine', 'Close Grip Dip'],
              notes: 'Keep your upper arm behind your torso throughout the ROM.'
            },
            {
              id: 'mm-w4-d5-ex5',
              exerciseId: 'DB Wrist Curl',
              displayName: 'DB Wrist Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Curl',
              substituteOptions: ['Cable Wrist Curl'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w4-d5-ex6',
              exerciseId: 'DB Wrist Extension',
              displayName: 'DB Wrist Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Extension',
              substituteOptions: ['Cable Wrist Extension'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w4-d5-ex7',
              exerciseId: 'Alternating DB Curl',
              displayName: 'Alternating DB Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Curl', substitutionOption2: 'EZ-Bar Curl',
              substituteOptions: ['Barbell Curl', 'EZ-Bar Curl'],
              notes: 'Slow, controlled reps!'
            },
            {
              id: 'mm-w4-d5-ex8',
              exerciseId: 'Machine Lateral Raise',
              displayName: 'Machine Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'High-Cable Lateral Raise', substitutionOption2: 'DB Lateral Raise',
              substituteOptions: ['High-Cable Lateral Raise', 'DB Lateral Raise'],
              notes: 'Focus on squeezing your side delt to move the weight.'
            },
            {
              id: 'mm-w4-d5-ex9',
              exerciseId: 'Dead Hang (optional)',
              displayName: 'Dead Hang (optional)',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: 'N/A',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min',
              substituteOptions: [],
              notes: 'Try to add a few more seconds each week!'
            }
          ]
        }
      ]
    },
    {
      weekNumber: 5,
      title: 'Semana 5 (Bloque 1: Carga Progresiva)',
      isDeload: false,
      days: [
        {
          id: 'mm-w5-d1',
          name: 'Día 1: Upper 1 (Empuje & Pecho)',
          targetMuscles: ['Pectorales', 'Deltoides', 'Espalda', 'Tríceps', 'Bíceps', 'Abs'],
          exercises: [
            {
              id: 'mm-w5-d1-ex1',
              exerciseId: 'Barbell Incline Press',
              displayName: 'Barbell Incline Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Incline Press', substitutionOption2: 'DB Incline Press',
              substituteOptions: ['Smith Machine Incline Press', 'DB Incline Press'],
              notes: 'A 30º or 45º bench will work here. Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w5-d1-ex2',
              exerciseId: 'Pec Deck',
              displayName: 'Pec Deck',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Flye', substitutionOption2: 'Cable Flye',
              substituteOptions: ['DB Flye', 'Cable Flye'],
              notes: 'Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w5-d1-ex3',
              exerciseId: 'Incline DB Y-Raise',
              displayName: 'Incline DB Y-Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Y-Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['Cable Y-Raise', 'Machine Lateral Raise'],
              notes: 'Use a 30º incline bench (back against the bench) and lift the weight up and out in a Y shape.'
            },
            {
              id: 'mm-w5-d1-ex4',
              exerciseId: 'Pull-Up (Wide Grip)',
              displayName: 'Pull-Up (Wide Grip)',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Lat Pulldown (Wide Grip)', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Lat Pulldown (Wide Grip)', '1-Arm Cable Pulldown'],
              notes: 'Control the negative and feel your lats pulling apart. Full ROM!'
            },
            {
              id: 'mm-w5-d1-ex5',
              exerciseId: 'Kelso Shrug',
              displayName: 'Kelso Shrug',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Seated Cable Kelso Shrug', substitutionOption2: 'Incline DB Kelso Shrug',
              substituteOptions: ['Seated Cable Kelso Shrug', 'Incline DB Kelso Shrug'],
              notes: 'Pause for about 1 second at the top and then allow your shoulder blades to peel apart on the way back down, under control.'
            },
            {
              id: 'mm-w5-d1-ex6',
              exerciseId: 'EZ-Bar Preacher Curl',
              displayName: 'EZ-Bar Preacher Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Machine Preacher Curl', substitutionOption2: 'DB Preacher Curl',
              substituteOptions: ['Machine Preacher Curl', 'DB Preacher Curl'],
              notes: 'Keep your triceps firmly pinned against the pad as you curl. Smooth controlled reps.'
            },
            {
              id: 'mm-w5-d1-ex7',
              exerciseId: 'Triceps Pressdown',
              displayName: 'Triceps Pressdown',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Close-Grip Bench Press', substitutionOption2: 'Smith Machine JM Press',
              substituteOptions: ['Close-Grip Bench Press', 'Smith Machine JM Press'],
              notes: 'You can use a rope or bar attachment for these, whichever you find more comfortable.'
            },
            {
              id: 'mm-w5-d1-ex8',
              exerciseId: 'Dragon Flag',
              displayName: 'Dragon Flag',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Bent-Knee Dragon Flag', substitutionOption2: 'Lying Leg Raise',
              substituteOptions: ['Bent-Knee Dragon Flag', 'Lying Leg Raise'],
              notes: 'Keep your body as rigid as possible throughout the ROM.'
            }
          ]
        },
        {
          id: 'mm-w5-d2',
          name: 'Día 2: Lower 1 (Cuádriceps & Rodilla)',
          targetMuscles: ['Cuádriceps', 'Isquiotibiales', 'Glúteos', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w5-d2-ex1',
              exerciseId: 'Lying Leg Curl',
              displayName: 'Lying Leg Curl',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Seated Leg Curl', substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Seated Leg Curl', 'Nordic Ham Curl'],
              notes: 'Set the machine so that you get the biggest stretch possible at the bottom. Prevent your butt from popping up as you curl.'
            },
            {
              id: 'mm-w5-d2-ex2',
              exerciseId: 'Squat (Your Choice)',
              displayName: 'Squat (Your Choice)',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min',
              substituteOptions: [],
              notes: 'This can be a Barbell Back Squat, Barbell Front Squat, Pendulum Squat, Hack Squat, Belt Squat, or Smith Machine Squat.'
            },
            {
              id: 'mm-w5-d2-ex3',
              exerciseId: 'Smith Machine Lunge',
              displayName: 'Smith Machine Lunge',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-4 min', substitutionOption1: 'DB Lunge', substitutionOption2: 'Barbell Lunge',
              substituteOptions: ['DB Lunge', 'Barbell Lunge'],
              notes: 'Minimize contribution from your back leg!'
            },
            {
              id: 'mm-w5-d2-ex4',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w5-d2-ex5',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Hip Abduction', substitutionOption2: 'Standing Plate Abduction',
              substituteOptions: ['Cable Hip Abduction', 'Standing Plate Abduction'],
              notes: 'If possible, place foam pads in between the outside of your knees and the pads on the machine. This will increase your range of motion on the machine.'
            },
            {
              id: 'mm-w5-d2-ex6',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w5-d3',
          name: 'Día 3: Upper 2 (Tracción & Espalda)',
          targetMuscles: ['Dorsales', 'Espalda Alta', 'Pectorales', 'Deltoides', 'Abs'],
          exercises: [
            {
              id: 'mm-w5-d3-ex1',
              exerciseId: 'Close-Grip Lat Pulldown',
              displayName: 'Close-Grip Lat Pulldown',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Close-Grip Pull-Up', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Close-Grip Pull-Up', '1-Arm Cable Pulldown'],
              notes: 'Lean back by ~15º and drive your elbows down as you squeeze your shoulder blades together. This should feel like a mix of lats and mid-traps.'
            },
            {
              id: 'mm-w5-d3-ex2',
              exerciseId: 'Chest-Supported T-Bar Row',
              displayName: 'Chest-Supported T-Bar Row',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Chest-Supported Machine Row', substitutionOption2: 'Chest-Supported DB Row',
              substituteOptions: ['Chest-Supported Machine Row', 'Chest-Supported DB Row'],
              notes: 'Flare elbows out at roughly 45º and squeeze your shoulder blades together hard at the top of each rep.'
            },
            {
              id: 'mm-w5-d3-ex3',
              exerciseId: 'Machine Shrug',
              displayName: 'Machine Shrug',
              warmupSets: '1-2',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Shrug', substitutionOption2: 'Cable Shrug-In',
              substituteOptions: ['Barbell Shrug', 'Cable Shrug-In'],
              notes: 'Think about shrugging "up to your ears". Use straps, if possible.'
            },
            {
              id: 'mm-w5-d3-ex4',
              exerciseId: 'Machine Chest Press',
              displayName: 'Machine Chest Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Bench Press', substitutionOption2: 'DB Bench Press',
              substituteOptions: ['Smith Machine Bench Press', 'DB Bench Press'],
              notes: '1 second pause at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w5-d3-ex5',
              exerciseId: 'High-Cable Lateral Raise',
              displayName: 'High-Cable Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Lateral Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['DB Lateral Raise', 'Machine Lateral Raise'],
              notes: 'Set the cable at roughly hip height. Let your hand go slightly past your midline at the bottom of each rep to get a deep stretch on the side delt.'
            },
            {
              id: 'mm-w5-d3-ex6',
              exerciseId: '1-Arm Reverse Pec Deck',
              displayName: '1-Arm Reverse Pec Deck',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Lying Reverse DB Flye', substitutionOption2: 'Reverse Cable Crossover',
              substituteOptions: ['Lying Reverse DB Flye', 'Reverse Cable Crossover'],
              notes: 'Sweep the weight out to create the largest semi-circle possible with your arm.'
            },
            {
              id: 'mm-w5-d3-ex7',
              exerciseId: 'Cable Crunch',
              displayName: 'Cable Crunch',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Weighted Crunch', substitutionOption2: 'Machine Crunch',
              substituteOptions: ['Weighted Crunch', 'Machine Crunch'],
              notes: 'Round your lower back as you crunch. Maintain a mind-muscle connection with your 6-pack.'
            }
          ]
        },
        {
          id: 'mm-w5-d4',
          name: 'Día 4: Lower 2 (Cadena Posterior & Bisagra)',
          targetMuscles: ['Isquiotibiales', 'Glúteos', 'Cuádriceps', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w5-d4-ex1',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w5-d4-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Barbell RDL',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'DB RDL', substitutionOption2: 'Seated Cable Deadlift',
              substituteOptions: ['DB RDL', 'Seated Cable Deadlift'],
              notes: 'Stick your glutes straight back as you lower the bar straight down, centered over the middle of your foot. Get a nice deep stretch at the bottom, but keep your spine neutral (don\'t round forward).'
            },
            {
              id: 'mm-w5-d4-ex3',
              exerciseId: 'Machine Hip Thrust',
              displayName: 'Machine Hip Thrust',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Barbell Hip Thrust', substitutionOption2: '45º Hyperextension',
              substituteOptions: ['Barbell Hip Thrust', '45º Hyperextension'],
              notes: 'Squeeze your glutes hard at the top and control the weight on the way down.'
            },
            {
              id: 'mm-w5-d4-ex4',
              exerciseId: 'Leg Press',
              displayName: 'Leg Press',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Smith Machine Squat', substitutionOption2: 'Barbell Squat',
              substituteOptions: ['Smith Machine Squat', 'Barbell Squat'],
              notes: 'Feet lower on the platform for more quad focus. Get as deep as you can without excessive back rounding.'
            },
            {
              id: 'mm-w5-d4-ex5',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w5-d5',
          name: 'Día 5: Arms & Delts (Brazo & Hombro)',
          targetMuscles: ['Bíceps', 'Tríceps', 'Deltoides', 'Antebrazos'],
          exercises: [
            {
              id: 'mm-w5-d5-ex1',
              exerciseId: 'Bayesian Cable Curl',
              displayName: 'Bayesian Cable Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Incline DB Curl', substitutionOption2: 'Standing DB Curl',
              substituteOptions: ['Incline DB Curl', 'Standing DB Curl'],
              notes: 'As you curl, optionally lean forward to prevent the cable from hitting your wrist at the top. Control the negative and feel a deep stretch at the bottom of each rep.'
            },
            {
              id: 'mm-w5-d5-ex2',
              exerciseId: 'Overhead Cable Triceps Extension',
              displayName: 'Overhead Cable Triceps Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Overhead DB Triceps Extension', substitutionOption2: 'Skull Crusher',
              substituteOptions: ['Overhead DB Triceps Extension', 'Skull Crusher'],
              notes: 'Feel a deep stretch on the triceps throughout the entire negative.'
            },
            {
              id: 'mm-w5-d5-ex3',
              exerciseId: 'Modified Zottman Curl',
              displayName: 'Modified Zottman Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Hammer Curl', substitutionOption2: 'Preacher Hammer Curl',
              substituteOptions: ['DB Hammer Curl', 'Preacher Hammer Curl'],
              notes: 'Hammer curl on the way up and supinated curl (palms up) on the way down.'
            },
            {
              id: 'mm-w5-d5-ex4',
              exerciseId: 'Cable Triceps Kickback',
              displayName: 'Cable Triceps Kickback',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Seated Dip Machine', substitutionOption2: 'Close Grip Dip',
              substituteOptions: ['Seated Dip Machine', 'Close Grip Dip'],
              notes: 'Keep your upper arm behind your torso throughout the ROM.'
            },
            {
              id: 'mm-w5-d5-ex5',
              exerciseId: 'DB Wrist Curl',
              displayName: 'DB Wrist Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Curl',
              substituteOptions: ['Cable Wrist Curl'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w5-d5-ex6',
              exerciseId: 'DB Wrist Extension',
              displayName: 'DB Wrist Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Extension',
              substituteOptions: ['Cable Wrist Extension'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w5-d5-ex7',
              exerciseId: 'Alternating DB Curl',
              displayName: 'Alternating DB Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Curl', substitutionOption2: 'EZ-Bar Curl',
              substituteOptions: ['Barbell Curl', 'EZ-Bar Curl'],
              notes: 'Slow, controlled reps!'
            },
            {
              id: 'mm-w5-d5-ex8',
              exerciseId: 'Machine Lateral Raise',
              displayName: 'Machine Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'High-Cable Lateral Raise', substitutionOption2: 'DB Lateral Raise',
              substituteOptions: ['High-Cable Lateral Raise', 'DB Lateral Raise'],
              notes: 'Focus on squeezing your side delt to move the weight.'
            },
            {
              id: 'mm-w5-d5-ex9',
              exerciseId: 'Dead Hang (optional)',
              displayName: 'Dead Hang (optional)',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: 'N/A',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min',
              substituteOptions: [],
              notes: 'Try to add a few more seconds each week!'
            }
          ]
        }
      ]
    },
    {
      weekNumber: 6,
      title: 'Semana 6 (Bloque 1: Carga Progresiva)',
      isDeload: false,
      days: [
        {
          id: 'mm-w6-d1',
          name: 'Día 1: Upper 1 (Empuje & Pecho)',
          targetMuscles: ['Pectorales', 'Deltoides', 'Espalda', 'Tríceps', 'Bíceps', 'Abs'],
          exercises: [
            {
              id: 'mm-w6-d1-ex1',
              exerciseId: 'Barbell Incline Press',
              displayName: 'Barbell Incline Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Incline Press', substitutionOption2: 'DB Incline Press',
              substituteOptions: ['Smith Machine Incline Press', 'DB Incline Press'],
              notes: 'A 30º or 45º bench will work here. Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w6-d1-ex2',
              exerciseId: 'Pec Deck',
              displayName: 'Pec Deck',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Flye', substitutionOption2: 'Cable Flye',
              substituteOptions: ['DB Flye', 'Cable Flye'],
              notes: 'Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w6-d1-ex3',
              exerciseId: 'Incline DB Y-Raise',
              displayName: 'Incline DB Y-Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Y-Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['Cable Y-Raise', 'Machine Lateral Raise'],
              notes: 'Use a 30º incline bench (back against the bench) and lift the weight up and out in a Y shape.'
            },
            {
              id: 'mm-w6-d1-ex4',
              exerciseId: 'Pull-Up (Wide Grip)',
              displayName: 'Pull-Up (Wide Grip)',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Lat Pulldown (Wide Grip)', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Lat Pulldown (Wide Grip)', '1-Arm Cable Pulldown'],
              notes: 'Control the negative and feel your lats pulling apart. Full ROM!'
            },
            {
              id: 'mm-w6-d1-ex5',
              exerciseId: 'Kelso Shrug',
              displayName: 'Kelso Shrug',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Seated Cable Kelso Shrug', substitutionOption2: 'Incline DB Kelso Shrug',
              substituteOptions: ['Seated Cable Kelso Shrug', 'Incline DB Kelso Shrug'],
              notes: 'Pause for about 1 second at the top and then allow your shoulder blades to peel apart on the way back down, under control.'
            },
            {
              id: 'mm-w6-d1-ex6',
              exerciseId: 'EZ-Bar Preacher Curl',
              displayName: 'EZ-Bar Preacher Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Machine Preacher Curl', substitutionOption2: 'DB Preacher Curl',
              substituteOptions: ['Machine Preacher Curl', 'DB Preacher Curl'],
              notes: 'Keep your triceps firmly pinned against the pad as you curl. Smooth controlled reps.'
            },
            {
              id: 'mm-w6-d1-ex7',
              exerciseId: 'Triceps Pressdown',
              displayName: 'Triceps Pressdown',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Close-Grip Bench Press', substitutionOption2: 'Smith Machine JM Press',
              substituteOptions: ['Close-Grip Bench Press', 'Smith Machine JM Press'],
              notes: 'You can use a rope or bar attachment for these, whichever you find more comfortable.'
            },
            {
              id: 'mm-w6-d1-ex8',
              exerciseId: 'Dragon Flag',
              displayName: 'Dragon Flag',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Bent-Knee Dragon Flag', substitutionOption2: 'Lying Leg Raise',
              substituteOptions: ['Bent-Knee Dragon Flag', 'Lying Leg Raise'],
              notes: 'Keep your body as rigid as possible throughout the ROM.'
            }
          ]
        },
        {
          id: 'mm-w6-d2',
          name: 'Día 2: Lower 1 (Cuádriceps & Rodilla)',
          targetMuscles: ['Cuádriceps', 'Isquiotibiales', 'Glúteos', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w6-d2-ex1',
              exerciseId: 'Lying Leg Curl',
              displayName: 'Lying Leg Curl',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Seated Leg Curl', substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Seated Leg Curl', 'Nordic Ham Curl'],
              notes: 'Set the machine so that you get the biggest stretch possible at the bottom. Prevent your butt from popping up as you curl.'
            },
            {
              id: 'mm-w6-d2-ex2',
              exerciseId: 'Squat (Your Choice)',
              displayName: 'Squat (Your Choice)',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min',
              substituteOptions: [],
              notes: 'This can be a Barbell Back Squat, Barbell Front Squat, Pendulum Squat, Hack Squat, Belt Squat, or Smith Machine Squat.'
            },
            {
              id: 'mm-w6-d2-ex3',
              exerciseId: 'Smith Machine Lunge',
              displayName: 'Smith Machine Lunge',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-4 min', substitutionOption1: 'DB Lunge', substitutionOption2: 'Barbell Lunge',
              substituteOptions: ['DB Lunge', 'Barbell Lunge'],
              notes: 'Minimize contribution from your back leg!'
            },
            {
              id: 'mm-w6-d2-ex4',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w6-d2-ex5',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Hip Abduction', substitutionOption2: 'Standing Plate Abduction',
              substituteOptions: ['Cable Hip Abduction', 'Standing Plate Abduction'],
              notes: 'If possible, place foam pads in between the outside of your knees and the pads on the machine. This will increase your range of motion on the machine.'
            },
            {
              id: 'mm-w6-d2-ex6',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w6-d3',
          name: 'Día 3: Upper 2 (Tracción & Espalda)',
          targetMuscles: ['Dorsales', 'Espalda Alta', 'Pectorales', 'Deltoides', 'Abs'],
          exercises: [
            {
              id: 'mm-w6-d3-ex1',
              exerciseId: 'Close-Grip Lat Pulldown',
              displayName: 'Close-Grip Lat Pulldown',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Close-Grip Pull-Up', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Close-Grip Pull-Up', '1-Arm Cable Pulldown'],
              notes: 'Lean back by ~15º and drive your elbows down as you squeeze your shoulder blades together. This should feel like a mix of lats and mid-traps.'
            },
            {
              id: 'mm-w6-d3-ex2',
              exerciseId: 'Chest-Supported T-Bar Row',
              displayName: 'Chest-Supported T-Bar Row',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Chest-Supported Machine Row', substitutionOption2: 'Chest-Supported DB Row',
              substituteOptions: ['Chest-Supported Machine Row', 'Chest-Supported DB Row'],
              notes: 'Flare elbows out at roughly 45º and squeeze your shoulder blades together hard at the top of each rep.'
            },
            {
              id: 'mm-w6-d3-ex3',
              exerciseId: 'Machine Shrug',
              displayName: 'Machine Shrug',
              warmupSets: '1-2',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Shrug', substitutionOption2: 'Cable Shrug-In',
              substituteOptions: ['Barbell Shrug', 'Cable Shrug-In'],
              notes: 'Think about shrugging "up to your ears". Use straps, if possible.'
            },
            {
              id: 'mm-w6-d3-ex4',
              exerciseId: 'Machine Chest Press',
              displayName: 'Machine Chest Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Bench Press', substitutionOption2: 'DB Bench Press',
              substituteOptions: ['Smith Machine Bench Press', 'DB Bench Press'],
              notes: '1 second pause at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w6-d3-ex5',
              exerciseId: 'High-Cable Lateral Raise',
              displayName: 'High-Cable Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Lateral Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['DB Lateral Raise', 'Machine Lateral Raise'],
              notes: 'Set the cable at roughly hip height. Let your hand go slightly past your midline at the bottom of each rep to get a deep stretch on the side delt.'
            },
            {
              id: 'mm-w6-d3-ex6',
              exerciseId: '1-Arm Reverse Pec Deck',
              displayName: '1-Arm Reverse Pec Deck',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Lying Reverse DB Flye', substitutionOption2: 'Reverse Cable Crossover',
              substituteOptions: ['Lying Reverse DB Flye', 'Reverse Cable Crossover'],
              notes: 'Sweep the weight out to create the largest semi-circle possible with your arm.'
            },
            {
              id: 'mm-w6-d3-ex7',
              exerciseId: 'Cable Crunch',
              displayName: 'Cable Crunch',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Weighted Crunch', substitutionOption2: 'Machine Crunch',
              substituteOptions: ['Weighted Crunch', 'Machine Crunch'],
              notes: 'Round your lower back as you crunch. Maintain a mind-muscle connection with your 6-pack.'
            }
          ]
        },
        {
          id: 'mm-w6-d4',
          name: 'Día 4: Lower 2 (Cadena Posterior & Bisagra)',
          targetMuscles: ['Isquiotibiales', 'Glúteos', 'Cuádriceps', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w6-d4-ex1',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w6-d4-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Barbell RDL',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'DB RDL', substitutionOption2: 'Seated Cable Deadlift',
              substituteOptions: ['DB RDL', 'Seated Cable Deadlift'],
              notes: 'Stick your glutes straight back as you lower the bar straight down, centered over the middle of your foot. Get a nice deep stretch at the bottom, but keep your spine neutral (don\'t round forward).'
            },
            {
              id: 'mm-w6-d4-ex3',
              exerciseId: 'Machine Hip Thrust',
              displayName: 'Machine Hip Thrust',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Barbell Hip Thrust', substitutionOption2: '45º Hyperextension',
              substituteOptions: ['Barbell Hip Thrust', '45º Hyperextension'],
              notes: 'Squeeze your glutes hard at the top and control the weight on the way down.'
            },
            {
              id: 'mm-w6-d4-ex4',
              exerciseId: 'Leg Press',
              displayName: 'Leg Press',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Smith Machine Squat', substitutionOption2: 'Barbell Squat',
              substituteOptions: ['Smith Machine Squat', 'Barbell Squat'],
              notes: 'Feet lower on the platform for more quad focus. Get as deep as you can without excessive back rounding.'
            },
            {
              id: 'mm-w6-d4-ex5',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w6-d5',
          name: 'Día 5: Arms & Delts (Brazo & Hombro)',
          targetMuscles: ['Bíceps', 'Tríceps', 'Deltoides', 'Antebrazos'],
          exercises: [
            {
              id: 'mm-w6-d5-ex1',
              exerciseId: 'Bayesian Cable Curl',
              displayName: 'Bayesian Cable Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Incline DB Curl', substitutionOption2: 'Standing DB Curl',
              substituteOptions: ['Incline DB Curl', 'Standing DB Curl'],
              notes: 'As you curl, optionally lean forward to prevent the cable from hitting your wrist at the top. Control the negative and feel a deep stretch at the bottom of each rep.'
            },
            {
              id: 'mm-w6-d5-ex2',
              exerciseId: 'Overhead Cable Triceps Extension',
              displayName: 'Overhead Cable Triceps Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Overhead DB Triceps Extension', substitutionOption2: 'Skull Crusher',
              substituteOptions: ['Overhead DB Triceps Extension', 'Skull Crusher'],
              notes: 'Feel a deep stretch on the triceps throughout the entire negative.'
            },
            {
              id: 'mm-w6-d5-ex3',
              exerciseId: 'Modified Zottman Curl',
              displayName: 'Modified Zottman Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Hammer Curl', substitutionOption2: 'Preacher Hammer Curl',
              substituteOptions: ['DB Hammer Curl', 'Preacher Hammer Curl'],
              notes: 'Hammer curl on the way up and supinated curl (palms up) on the way down.'
            },
            {
              id: 'mm-w6-d5-ex4',
              exerciseId: 'Cable Triceps Kickback',
              displayName: 'Cable Triceps Kickback',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Seated Dip Machine', substitutionOption2: 'Close Grip Dip',
              substituteOptions: ['Seated Dip Machine', 'Close Grip Dip'],
              notes: 'Keep your upper arm behind your torso throughout the ROM.'
            },
            {
              id: 'mm-w6-d5-ex5',
              exerciseId: 'DB Wrist Curl',
              displayName: 'DB Wrist Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Curl',
              substituteOptions: ['Cable Wrist Curl'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w6-d5-ex6',
              exerciseId: 'DB Wrist Extension',
              displayName: 'DB Wrist Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Extension',
              substituteOptions: ['Cable Wrist Extension'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w6-d5-ex7',
              exerciseId: 'Alternating DB Curl',
              displayName: 'Alternating DB Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Curl', substitutionOption2: 'EZ-Bar Curl',
              substituteOptions: ['Barbell Curl', 'EZ-Bar Curl'],
              notes: 'Slow, controlled reps!'
            },
            {
              id: 'mm-w6-d5-ex8',
              exerciseId: 'Machine Lateral Raise',
              displayName: 'Machine Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'High-Cable Lateral Raise', substitutionOption2: 'DB Lateral Raise',
              substituteOptions: ['High-Cable Lateral Raise', 'DB Lateral Raise'],
              notes: 'Focus on squeezing your side delt to move the weight.'
            },
            {
              id: 'mm-w6-d5-ex9',
              exerciseId: 'Dead Hang (optional)',
              displayName: 'Dead Hang (optional)',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: 'N/A',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min',
              substituteOptions: [],
              notes: 'Try to add a few more seconds each week!'
            }
          ]
        }
      ]
    },
    {
      weekNumber: 7,
      title: 'Semana 7 (Deload Estratégico)',
      isDeload: true,
      days: [
        {
          id: 'mm-w7-d1',
          name: 'Día 1: Upper 1 (Empuje & Pecho)',
          targetMuscles: ['Pectorales', 'Deltoides', 'Espalda', 'Tríceps', 'Bíceps', 'Abs'],
          exercises: [
            {
              id: 'mm-w7-d1-ex1',
              exerciseId: 'Barbell Incline Press',
              displayName: 'Barbell Incline Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Incline Press', substitutionOption2: 'DB Incline Press',
              substituteOptions: ['Smith Machine Incline Press', 'DB Incline Press'],
              notes: 'A 30º or 45º bench will work here. Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w7-d1-ex2',
              exerciseId: 'Pec Deck',
              displayName: 'Pec Deck',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Flye', substitutionOption2: 'Cable Flye',
              substituteOptions: ['DB Flye', 'Cable Flye'],
              notes: 'Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w7-d1-ex3',
              exerciseId: 'Incline DB Y-Raise',
              displayName: 'Incline DB Y-Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Y-Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['Cable Y-Raise', 'Machine Lateral Raise'],
              notes: 'Use a 30º incline bench (back against the bench) and lift the weight up and out in a Y shape.'
            },
            {
              id: 'mm-w7-d1-ex4',
              exerciseId: 'Pull-Up (Wide Grip)',
              displayName: 'Pull-Up (Wide Grip)',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'Lat Pulldown (Wide Grip)', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Lat Pulldown (Wide Grip)', '1-Arm Cable Pulldown'],
              notes: 'Control the negative and feel your lats pulling apart. Full ROM!'
            },
            {
              id: 'mm-w7-d1-ex5',
              exerciseId: 'Kelso Shrug',
              displayName: 'Kelso Shrug',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'Seated Cable Kelso Shrug', substitutionOption2: 'Incline DB Kelso Shrug',
              substituteOptions: ['Seated Cable Kelso Shrug', 'Incline DB Kelso Shrug'],
              notes: 'Pause for about 1 second at the top and then allow your shoulder blades to peel apart on the way back down, under control.'
            },
            {
              id: 'mm-w7-d1-ex6',
              exerciseId: 'EZ-Bar Preacher Curl',
              displayName: 'EZ-Bar Preacher Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Machine Preacher Curl', substitutionOption2: 'DB Preacher Curl',
              substituteOptions: ['Machine Preacher Curl', 'DB Preacher Curl'],
              notes: 'Keep your triceps firmly pinned against the pad as you curl. Smooth controlled reps.'
            },
            {
              id: 'mm-w7-d1-ex7',
              exerciseId: 'Triceps Pressdown',
              displayName: 'Triceps Pressdown',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Close-Grip Bench Press', substitutionOption2: 'Smith Machine JM Press',
              substituteOptions: ['Close-Grip Bench Press', 'Smith Machine JM Press'],
              notes: 'You can use a rope or bar attachment for these, whichever you find more comfortable.'
            },
            {
              id: 'mm-w7-d1-ex8',
              exerciseId: 'Dragon Flag',
              displayName: 'Dragon Flag',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Bent-Knee Dragon Flag', substitutionOption2: 'Lying Leg Raise',
              substituteOptions: ['Bent-Knee Dragon Flag', 'Lying Leg Raise'],
              notes: 'Keep your body as rigid as possible throughout the ROM.'
            }
          ]
        },
        {
          id: 'mm-w7-d2',
          name: 'Día 2: Lower 1 (Cuádriceps & Rodilla)',
          targetMuscles: ['Cuádriceps', 'Isquiotibiales', 'Glúteos', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w7-d2-ex1',
              exerciseId: 'Lying Leg Curl',
              displayName: 'Lying Leg Curl',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Seated Leg Curl', substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Seated Leg Curl', 'Nordic Ham Curl'],
              notes: 'Set the machine so that you get the biggest stretch possible at the bottom. Prevent your butt from popping up as you curl.'
            },
            {
              id: 'mm-w7-d2-ex2',
              exerciseId: 'Squat (Your Choice)',
              displayName: 'Squat (Your Choice)',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 3', 'RIR 2'],
              restPeriod: '3-5 min',
              substituteOptions: [],
              notes: 'This can be a Barbell Back Squat, Barbell Front Squat, Pendulum Squat, Hack Squat, Belt Squat, or Smith Machine Squat.'
            },
            {
              id: 'mm-w7-d2-ex3',
              exerciseId: 'Smith Machine Lunge',
              displayName: 'Smith Machine Lunge',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 1'],
              restPeriod: '2-4 min', substitutionOption1: 'DB Lunge', substitutionOption2: 'Barbell Lunge',
              substituteOptions: ['DB Lunge', 'Barbell Lunge'],
              notes: 'Minimize contribution from your back leg!'
            },
            {
              id: 'mm-w7-d2-ex4',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w7-d2-ex5',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Hip Abduction', substitutionOption2: 'Standing Plate Abduction',
              substituteOptions: ['Cable Hip Abduction', 'Standing Plate Abduction'],
              notes: 'If possible, place foam pads in between the outside of your knees and the pads on the machine. This will increase your range of motion on the machine.'
            },
            {
              id: 'mm-w7-d2-ex6',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w7-d3',
          name: 'Día 3: Upper 2 (Tracción & Espalda)',
          targetMuscles: ['Dorsales', 'Espalda Alta', 'Pectorales', 'Deltoides', 'Abs'],
          exercises: [
            {
              id: 'mm-w7-d3-ex1',
              exerciseId: 'Close-Grip Lat Pulldown',
              displayName: 'Close-Grip Lat Pulldown',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'Close-Grip Pull-Up', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Close-Grip Pull-Up', '1-Arm Cable Pulldown'],
              notes: 'Lean back by ~15º and drive your elbows down as you squeeze your shoulder blades together. This should feel like a mix of lats and mid-traps.'
            },
            {
              id: 'mm-w7-d3-ex2',
              exerciseId: 'Chest-Supported T-Bar Row',
              displayName: 'Chest-Supported T-Bar Row',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'Chest-Supported Machine Row', substitutionOption2: 'Chest-Supported DB Row',
              substituteOptions: ['Chest-Supported Machine Row', 'Chest-Supported DB Row'],
              notes: 'Flare elbows out at roughly 45º and squeeze your shoulder blades together hard at the top of each rep.'
            },
            {
              id: 'mm-w7-d3-ex3',
              exerciseId: 'Machine Shrug',
              displayName: 'Machine Shrug',
              warmupSets: '1-2',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 1'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Shrug', substitutionOption2: 'Cable Shrug-In',
              substituteOptions: ['Barbell Shrug', 'Cable Shrug-In'],
              notes: 'Think about shrugging "up to your ears". Use straps, if possible.'
            },
            {
              id: 'mm-w7-d3-ex4',
              exerciseId: 'Machine Chest Press',
              displayName: 'Machine Chest Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Bench Press', substitutionOption2: 'DB Bench Press',
              substituteOptions: ['Smith Machine Bench Press', 'DB Bench Press'],
              notes: '1 second pause at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w7-d3-ex5',
              exerciseId: 'High-Cable Lateral Raise',
              displayName: 'High-Cable Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Lateral Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['DB Lateral Raise', 'Machine Lateral Raise'],
              notes: 'Set the cable at roughly hip height. Let your hand go slightly past your midline at the bottom of each rep to get a deep stretch on the side delt.'
            },
            {
              id: 'mm-w7-d3-ex6',
              exerciseId: '1-Arm Reverse Pec Deck',
              displayName: '1-Arm Reverse Pec Deck',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Lying Reverse DB Flye', substitutionOption2: 'Reverse Cable Crossover',
              substituteOptions: ['Lying Reverse DB Flye', 'Reverse Cable Crossover'],
              notes: 'Sweep the weight out to create the largest semi-circle possible with your arm.'
            },
            {
              id: 'mm-w7-d3-ex7',
              exerciseId: 'Cable Crunch',
              displayName: 'Cable Crunch',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Weighted Crunch', substitutionOption2: 'Machine Crunch',
              substituteOptions: ['Weighted Crunch', 'Machine Crunch'],
              notes: 'Round your lower back as you crunch. Maintain a mind-muscle connection with your 6-pack.'
            }
          ]
        },
        {
          id: 'mm-w7-d4',
          name: 'Día 4: Lower 2 (Cadena Posterior & Bisagra)',
          targetMuscles: ['Isquiotibiales', 'Glúteos', 'Cuádriceps', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w7-d4-ex1',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w7-d4-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Barbell RDL',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 3', 'RIR 2'],
              restPeriod: '2-3 min', substitutionOption1: 'DB RDL', substitutionOption2: 'Seated Cable Deadlift',
              substituteOptions: ['DB RDL', 'Seated Cable Deadlift'],
              notes: 'Stick your glutes straight back as you lower the bar straight down, centered over the middle of your foot. Get a nice deep stretch at the bottom, but keep your spine neutral (don\'t round forward).'
            },
            {
              id: 'mm-w7-d4-ex3',
              exerciseId: 'Machine Hip Thrust',
              displayName: 'Machine Hip Thrust',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'Barbell Hip Thrust', substitutionOption2: '45º Hyperextension',
              substituteOptions: ['Barbell Hip Thrust', '45º Hyperextension'],
              notes: 'Squeeze your glutes hard at the top and control the weight on the way down.'
            },
            {
              id: 'mm-w7-d4-ex4',
              exerciseId: 'Leg Press',
              displayName: 'Leg Press',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'Smith Machine Squat', substitutionOption2: 'Barbell Squat',
              substituteOptions: ['Smith Machine Squat', 'Barbell Squat'],
              notes: 'Feet lower on the platform for more quad focus. Get as deep as you can without excessive back rounding.'
            },
            {
              id: 'mm-w7-d4-ex5',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w7-d5',
          name: 'Día 5: Arms & Delts (Brazo & Hombro)',
          targetMuscles: ['Bíceps', 'Tríceps', 'Deltoides', 'Antebrazos'],
          exercises: [
            {
              id: 'mm-w7-d5-ex1',
              exerciseId: 'Bayesian Cable Curl',
              displayName: 'Bayesian Cable Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Incline DB Curl', substitutionOption2: 'Standing DB Curl',
              substituteOptions: ['Incline DB Curl', 'Standing DB Curl'],
              notes: 'As you curl, optionally lean forward to prevent the cable from hitting your wrist at the top. Control the negative and feel a deep stretch at the bottom of each rep.'
            },
            {
              id: 'mm-w7-d5-ex2',
              exerciseId: 'Overhead Cable Triceps Extension',
              displayName: 'Overhead Cable Triceps Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Overhead DB Triceps Extension', substitutionOption2: 'Skull Crusher',
              substituteOptions: ['Overhead DB Triceps Extension', 'Skull Crusher'],
              notes: 'Feel a deep stretch on the triceps throughout the entire negative.'
            },
            {
              id: 'mm-w7-d5-ex3',
              exerciseId: 'Modified Zottman Curl',
              displayName: 'Modified Zottman Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Hammer Curl', substitutionOption2: 'Preacher Hammer Curl',
              substituteOptions: ['DB Hammer Curl', 'Preacher Hammer Curl'],
              notes: 'Hammer curl on the way up and supinated curl (palms up) on the way down.'
            },
            {
              id: 'mm-w7-d5-ex4',
              exerciseId: 'Cable Triceps Kickback',
              displayName: 'Cable Triceps Kickback',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Seated Dip Machine', substitutionOption2: 'Close Grip Dip',
              substituteOptions: ['Seated Dip Machine', 'Close Grip Dip'],
              notes: 'Keep your upper arm behind your torso throughout the ROM.'
            },
            {
              id: 'mm-w7-d5-ex5',
              exerciseId: 'DB Wrist Curl',
              displayName: 'DB Wrist Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Curl',
              substituteOptions: ['Cable Wrist Curl'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w7-d5-ex6',
              exerciseId: 'DB Wrist Extension',
              displayName: 'DB Wrist Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Extension',
              substituteOptions: ['Cable Wrist Extension'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w7-d5-ex7',
              exerciseId: 'Alternating DB Curl',
              displayName: 'Alternating DB Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Curl', substitutionOption2: 'EZ-Bar Curl',
              substituteOptions: ['Barbell Curl', 'EZ-Bar Curl'],
              notes: 'Slow, controlled reps!'
            },
            {
              id: 'mm-w7-d5-ex8',
              exerciseId: 'Machine Lateral Raise',
              displayName: 'Machine Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'High-Cable Lateral Raise', substitutionOption2: 'DB Lateral Raise',
              substituteOptions: ['High-Cable Lateral Raise', 'DB Lateral Raise'],
              notes: 'Focus on squeezing your side delt to move the weight.'
            },
            {
              id: 'mm-w7-d5-ex9',
              exerciseId: 'Dead Hang (optional)',
              displayName: 'Dead Hang (optional)',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: 'N/A',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min',
              substituteOptions: [],
              notes: 'Try to add a few more seconds each week!'
            }
          ]
        }
      ]
    },
    {
      weekNumber: 8,
      title: 'Semana 8 (Bloque 2: Intensificación)',
      isDeload: false,
      days: [
        {
          id: 'mm-w8-d1',
          name: 'Día 1: Upper 1 (Empuje & Pecho)',
          targetMuscles: ['Pectorales', 'Deltoides', 'Espalda', 'Tríceps', 'Bíceps', 'Abs'],
          exercises: [
            {
              id: 'mm-w8-d1-ex1',
              exerciseId: 'Barbell Incline Press',
              displayName: 'Barbell Incline Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Incline Press', substitutionOption2: 'DB Incline Press',
              substituteOptions: ['Smith Machine Incline Press', 'DB Incline Press'],
              notes: 'A 30º or 45º bench will work here. Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w8-d1-ex2',
              exerciseId: 'Pec Deck',
              displayName: 'Pec Deck',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '1-2 min', substitutionOption1: 'DB Flye', substitutionOption2: 'Cable Flye',
              substituteOptions: ['DB Flye', 'Cable Flye'],
              notes: 'Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w8-d1-ex3',
              exerciseId: 'Incline DB Y-Raise',
              displayName: 'Incline DB Y-Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Y-Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['Cable Y-Raise', 'Machine Lateral Raise'],
              notes: 'Use a 30º incline bench (back against the bench) and lift the weight up and out in a Y shape.'
            },
            {
              id: 'mm-w8-d1-ex4',
              exerciseId: 'Pull-Up (Wide Grip)',
              displayName: 'Pull-Up (Wide Grip)',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '2-3 min', substitutionOption1: 'Lat Pulldown (Wide Grip)', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Lat Pulldown (Wide Grip)', '1-Arm Cable Pulldown'],
              notes: 'Control the negative and feel your lats pulling apart. Full ROM!'
            },
            {
              id: 'mm-w8-d1-ex5',
              exerciseId: 'Kelso Shrug',
              displayName: 'Kelso Shrug',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Seated Cable Kelso Shrug', substitutionOption2: 'Incline DB Kelso Shrug',
              substituteOptions: ['Seated Cable Kelso Shrug', 'Incline DB Kelso Shrug'],
              notes: 'Pause for about 1 second at the top and then allow your shoulder blades to peel apart on the way back down, under control.'
            },
            {
              id: 'mm-w8-d1-ex6',
              exerciseId: 'EZ-Bar Preacher Curl',
              displayName: 'EZ-Bar Preacher Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Myo-reps',
              restPeriod: '1-2 min', substitutionOption1: 'Machine Preacher Curl', substitutionOption2: 'DB Preacher Curl',
              substituteOptions: ['Machine Preacher Curl', 'DB Preacher Curl'],
              notes: 'Keep your triceps firmly pinned against the pad as you curl. Smooth controlled reps.'
            },
            {
              id: 'mm-w8-d1-ex7',
              exerciseId: 'Triceps Pressdown',
              displayName: 'Triceps Pressdown',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Myo-reps',
              restPeriod: '1-2 min', substitutionOption1: 'Close-Grip Bench Press', substitutionOption2: 'Smith Machine JM Press',
              substituteOptions: ['Close-Grip Bench Press', 'Smith Machine JM Press'],
              notes: 'You can use a rope or bar attachment for these, whichever you find more comfortable.'
            },
            {
              id: 'mm-w8-d1-ex8',
              exerciseId: 'Dragon Flag',
              displayName: 'Dragon Flag',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Bent-Knee Dragon Flag', substitutionOption2: 'Lying Leg Raise',
              substituteOptions: ['Bent-Knee Dragon Flag', 'Lying Leg Raise'],
              notes: 'Keep your body as rigid as possible throughout the ROM.'
            }
          ]
        },
        {
          id: 'mm-w8-d2',
          name: 'Día 2: Lower 1 (Cuádriceps & Rodilla)',
          targetMuscles: ['Cuádriceps', 'Isquiotibiales', 'Glúteos', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w8-d2-ex1',
              exerciseId: 'Lying Leg Curl',
              displayName: 'Lying Leg Curl',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Seated Leg Curl', substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Seated Leg Curl', 'Nordic Ham Curl'],
              notes: 'Set the machine so that you get the biggest stretch possible at the bottom. Prevent your butt from popping up as you curl.'
            },
            {
              id: 'mm-w8-d2-ex2',
              exerciseId: 'Squat (Your Choice)',
              displayName: 'Squat (Your Choice)',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min',
              substituteOptions: [],
              notes: 'This can be a Barbell Back Squat, Barbell Front Squat, Pendulum Squat, Hack Squat, Belt Squat, or Smith Machine Squat.'
            },
            {
              id: 'mm-w8-d2-ex3',
              exerciseId: 'Smith Machine Lunge',
              displayName: 'Smith Machine Lunge',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-4 min', substitutionOption1: 'DB Lunge', substitutionOption2: 'Barbell Lunge',
              substituteOptions: ['DB Lunge', 'Barbell Lunge'],
              notes: 'Minimize contribution from your back leg!'
            },
            {
              id: 'mm-w8-d2-ex4',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w8-d2-ex5',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Hip Abduction', substitutionOption2: 'Standing Plate Abduction',
              substituteOptions: ['Cable Hip Abduction', 'Standing Plate Abduction'],
              notes: 'If possible, place foam pads in between the outside of your knees and the pads on the machine. This will increase your range of motion on the machine.'
            },
            {
              id: 'mm-w8-d2-ex6',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w8-d3',
          name: 'Día 3: Upper 2 (Tracción & Espalda)',
          targetMuscles: ['Dorsales', 'Espalda Alta', 'Pectorales', 'Deltoides', 'Abs'],
          exercises: [
            {
              id: 'mm-w8-d3-ex1',
              exerciseId: 'Close-Grip Lat Pulldown',
              displayName: 'Close-Grip Lat Pulldown',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '2-3 min', substitutionOption1: 'Close-Grip Pull-Up', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Close-Grip Pull-Up', '1-Arm Cable Pulldown'],
              notes: 'Lean back by ~15º and drive your elbows down as you squeeze your shoulder blades together. This should feel like a mix of lats and mid-traps.'
            },
            {
              id: 'mm-w8-d3-ex2',
              exerciseId: 'Chest-Supported T-Bar Row',
              displayName: 'Chest-Supported T-Bar Row',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '2-3 min', substitutionOption1: 'Chest-Supported Machine Row', substitutionOption2: 'Chest-Supported DB Row',
              substituteOptions: ['Chest-Supported Machine Row', 'Chest-Supported DB Row'],
              notes: 'Flare elbows out at roughly 45º and squeeze your shoulder blades together hard at the top of each rep.'
            },
            {
              id: 'mm-w8-d3-ex3',
              exerciseId: 'Machine Shrug',
              displayName: 'Machine Shrug',
              warmupSets: '1-2',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Shrug', substitutionOption2: 'Cable Shrug-In',
              substituteOptions: ['Barbell Shrug', 'Cable Shrug-In'],
              notes: 'Think about shrugging "up to your ears". Use straps, if possible.'
            },
            {
              id: 'mm-w8-d3-ex4',
              exerciseId: 'Machine Chest Press',
              displayName: 'Machine Chest Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Weighted Static Hold (30 sec)',
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Bench Press', substitutionOption2: 'DB Bench Press',
              substituteOptions: ['Smith Machine Bench Press', 'DB Bench Press'],
              notes: '1 second pause at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w8-d3-ex5',
              exerciseId: 'High-Cable Lateral Raise',
              displayName: 'High-Cable Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Lateral Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['DB Lateral Raise', 'Machine Lateral Raise'],
              notes: 'Set the cable at roughly hip height. Let your hand go slightly past your midline at the bottom of each rep to get a deep stretch on the side delt.'
            },
            {
              id: 'mm-w8-d3-ex6',
              exerciseId: '1-Arm Reverse Pec Deck',
              displayName: '1-Arm Reverse Pec Deck',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Lying Reverse DB Flye', substitutionOption2: 'Reverse Cable Crossover',
              substituteOptions: ['Lying Reverse DB Flye', 'Reverse Cable Crossover'],
              notes: 'Sweep the weight out to create the largest semi-circle possible with your arm.'
            },
            {
              id: 'mm-w8-d3-ex7',
              exerciseId: 'Cable Crunch',
              displayName: 'Cable Crunch',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Weighted Crunch', substitutionOption2: 'Machine Crunch',
              substituteOptions: ['Weighted Crunch', 'Machine Crunch'],
              notes: 'Round your lower back as you crunch. Maintain a mind-muscle connection with your 6-pack.'
            }
          ]
        },
        {
          id: 'mm-w8-d4',
          name: 'Día 4: Lower 2 (Cadena Posterior & Bisagra)',
          targetMuscles: ['Isquiotibiales', 'Glúteos', 'Cuádriceps', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w8-d4-ex1',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w8-d4-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Barbell RDL',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'DB RDL', substitutionOption2: 'Seated Cable Deadlift',
              substituteOptions: ['DB RDL', 'Seated Cable Deadlift'],
              notes: 'Stick your glutes straight back as you lower the bar straight down, centered over the middle of your foot. Get a nice deep stretch at the bottom, but keep your spine neutral (don\'t round forward).'
            },
            {
              id: 'mm-w8-d4-ex3',
              exerciseId: 'Machine Hip Thrust',
              displayName: 'Machine Hip Thrust',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Barbell Hip Thrust', substitutionOption2: '45º Hyperextension',
              substituteOptions: ['Barbell Hip Thrust', '45º Hyperextension'],
              notes: 'Squeeze your glutes hard at the top and control the weight on the way down.'
            },
            {
              id: 'mm-w8-d4-ex4',
              exerciseId: 'Leg Press',
              displayName: 'Leg Press',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Smith Machine Squat', substitutionOption2: 'Barbell Squat',
              substituteOptions: ['Smith Machine Squat', 'Barbell Squat'],
              notes: 'Feet lower on the platform for more quad focus. Get as deep as you can without excessive back rounding.'
            },
            {
              id: 'mm-w8-d4-ex5',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w8-d5',
          name: 'Día 5: Arms & Delts (Brazo & Hombro)',
          targetMuscles: ['Bíceps', 'Tríceps', 'Deltoides', 'Antebrazos'],
          exercises: [
            {
              id: 'mm-w8-d5-ex1',
              exerciseId: 'Bayesian Cable Curl',
              displayName: 'Bayesian Cable Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Incline DB Curl', substitutionOption2: 'Standing DB Curl',
              substituteOptions: ['Incline DB Curl', 'Standing DB Curl'],
              notes: 'As you curl, optionally lean forward to prevent the cable from hitting your wrist at the top. Control the negative and feel a deep stretch at the bottom of each rep.'
            },
            {
              id: 'mm-w8-d5-ex2',
              exerciseId: 'Overhead Cable Triceps Extension',
              displayName: 'Overhead Cable Triceps Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Overhead DB Triceps Extension', substitutionOption2: 'Skull Crusher',
              substituteOptions: ['Overhead DB Triceps Extension', 'Skull Crusher'],
              notes: 'Feel a deep stretch on the triceps throughout the entire negative.'
            },
            {
              id: 'mm-w8-d5-ex3',
              exerciseId: 'Modified Zottman Curl',
              displayName: 'Modified Zottman Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Hammer Curl', substitutionOption2: 'Preacher Hammer Curl',
              substituteOptions: ['DB Hammer Curl', 'Preacher Hammer Curl'],
              notes: 'Hammer curl on the way up and supinated curl (palms up) on the way down.'
            },
            {
              id: 'mm-w8-d5-ex4',
              exerciseId: 'Cable Triceps Kickback',
              displayName: 'Cable Triceps Kickback',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '1-2 min', substitutionOption1: 'Seated Dip Machine', substitutionOption2: 'Close Grip Dip',
              substituteOptions: ['Seated Dip Machine', 'Close Grip Dip'],
              notes: 'Keep your upper arm behind your torso throughout the ROM.'
            },
            {
              id: 'mm-w8-d5-ex5',
              exerciseId: 'DB Wrist Curl',
              displayName: 'DB Wrist Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Curl',
              substituteOptions: ['Cable Wrist Curl'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w8-d5-ex6',
              exerciseId: 'DB Wrist Extension',
              displayName: 'DB Wrist Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Extension',
              substituteOptions: ['Cable Wrist Extension'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w8-d5-ex7',
              exerciseId: 'Alternating DB Curl',
              displayName: 'Alternating DB Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Curl', substitutionOption2: 'EZ-Bar Curl',
              substituteOptions: ['Barbell Curl', 'EZ-Bar Curl'],
              notes: 'Slow, controlled reps!'
            },
            {
              id: 'mm-w8-d5-ex8',
              exerciseId: 'Machine Lateral Raise',
              displayName: 'Machine Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Myo-reps',
              restPeriod: '1-2 min', substitutionOption1: 'High-Cable Lateral Raise', substitutionOption2: 'DB Lateral Raise',
              substituteOptions: ['High-Cable Lateral Raise', 'DB Lateral Raise'],
              notes: 'Focus on squeezing your side delt to move the weight.'
            },
            {
              id: 'mm-w8-d5-ex9',
              exerciseId: 'Dead Hang (optional)',
              displayName: 'Dead Hang (optional)',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: 'N/A',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min',
              substituteOptions: [],
              notes: 'Try to add a few more seconds each week!'
            }
          ]
        }
      ]
    },
    {
      weekNumber: 9,
      title: 'Semana 9 (Bloque 2: Intensificación)',
      isDeload: false,
      days: [
        {
          id: 'mm-w9-d1',
          name: 'Día 1: Upper 1 (Empuje & Pecho)',
          targetMuscles: ['Pectorales', 'Deltoides', 'Espalda', 'Tríceps', 'Bíceps', 'Abs'],
          exercises: [
            {
              id: 'mm-w9-d1-ex1',
              exerciseId: 'Barbell Incline Press',
              displayName: 'Barbell Incline Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Incline Press', substitutionOption2: 'DB Incline Press',
              substituteOptions: ['Smith Machine Incline Press', 'DB Incline Press'],
              notes: 'A 30º or 45º bench will work here. Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w9-d1-ex2',
              exerciseId: 'Pec Deck',
              displayName: 'Pec Deck',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '1-2 min', substitutionOption1: 'DB Flye', substitutionOption2: 'Cable Flye',
              substituteOptions: ['DB Flye', 'Cable Flye'],
              notes: 'Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w9-d1-ex3',
              exerciseId: 'Incline DB Y-Raise',
              displayName: 'Incline DB Y-Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Y-Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['Cable Y-Raise', 'Machine Lateral Raise'],
              notes: 'Use a 30º incline bench (back against the bench) and lift the weight up and out in a Y shape.'
            },
            {
              id: 'mm-w9-d1-ex4',
              exerciseId: 'Pull-Up (Wide Grip)',
              displayName: 'Pull-Up (Wide Grip)',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '2-3 min', substitutionOption1: 'Lat Pulldown (Wide Grip)', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Lat Pulldown (Wide Grip)', '1-Arm Cable Pulldown'],
              notes: 'Control the negative and feel your lats pulling apart. Full ROM!'
            },
            {
              id: 'mm-w9-d1-ex5',
              exerciseId: 'Kelso Shrug',
              displayName: 'Kelso Shrug',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Seated Cable Kelso Shrug', substitutionOption2: 'Incline DB Kelso Shrug',
              substituteOptions: ['Seated Cable Kelso Shrug', 'Incline DB Kelso Shrug'],
              notes: 'Pause for about 1 second at the top and then allow your shoulder blades to peel apart on the way back down, under control.'
            },
            {
              id: 'mm-w9-d1-ex6',
              exerciseId: 'EZ-Bar Preacher Curl',
              displayName: 'EZ-Bar Preacher Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Myo-reps',
              restPeriod: '1-2 min', substitutionOption1: 'Machine Preacher Curl', substitutionOption2: 'DB Preacher Curl',
              substituteOptions: ['Machine Preacher Curl', 'DB Preacher Curl'],
              notes: 'Keep your triceps firmly pinned against the pad as you curl. Smooth controlled reps.'
            },
            {
              id: 'mm-w9-d1-ex7',
              exerciseId: 'Triceps Pressdown',
              displayName: 'Triceps Pressdown',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Myo-reps',
              restPeriod: '1-2 min', substitutionOption1: 'Close-Grip Bench Press', substitutionOption2: 'Smith Machine JM Press',
              substituteOptions: ['Close-Grip Bench Press', 'Smith Machine JM Press'],
              notes: 'You can use a rope or bar attachment for these, whichever you find more comfortable.'
            },
            {
              id: 'mm-w9-d1-ex8',
              exerciseId: 'Dragon Flag',
              displayName: 'Dragon Flag',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Bent-Knee Dragon Flag', substitutionOption2: 'Lying Leg Raise',
              substituteOptions: ['Bent-Knee Dragon Flag', 'Lying Leg Raise'],
              notes: 'Keep your body as rigid as possible throughout the ROM.'
            }
          ]
        },
        {
          id: 'mm-w9-d2',
          name: 'Día 2: Lower 1 (Cuádriceps & Rodilla)',
          targetMuscles: ['Cuádriceps', 'Isquiotibiales', 'Glúteos', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w9-d2-ex1',
              exerciseId: 'Lying Leg Curl',
              displayName: 'Lying Leg Curl',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Seated Leg Curl', substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Seated Leg Curl', 'Nordic Ham Curl'],
              notes: 'Set the machine so that you get the biggest stretch possible at the bottom. Prevent your butt from popping up as you curl.'
            },
            {
              id: 'mm-w9-d2-ex2',
              exerciseId: 'Squat (Your Choice)',
              displayName: 'Squat (Your Choice)',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min',
              substituteOptions: [],
              notes: 'This can be a Barbell Back Squat, Barbell Front Squat, Pendulum Squat, Hack Squat, Belt Squat, or Smith Machine Squat.'
            },
            {
              id: 'mm-w9-d2-ex3',
              exerciseId: 'Smith Machine Lunge',
              displayName: 'Smith Machine Lunge',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-4 min', substitutionOption1: 'DB Lunge', substitutionOption2: 'Barbell Lunge',
              substituteOptions: ['DB Lunge', 'Barbell Lunge'],
              notes: 'Minimize contribution from your back leg!'
            },
            {
              id: 'mm-w9-d2-ex4',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w9-d2-ex5',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Hip Abduction', substitutionOption2: 'Standing Plate Abduction',
              substituteOptions: ['Cable Hip Abduction', 'Standing Plate Abduction'],
              notes: 'If possible, place foam pads in between the outside of your knees and the pads on the machine. This will increase your range of motion on the machine.'
            },
            {
              id: 'mm-w9-d2-ex6',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w9-d3',
          name: 'Día 3: Upper 2 (Tracción & Espalda)',
          targetMuscles: ['Dorsales', 'Espalda Alta', 'Pectorales', 'Deltoides', 'Abs'],
          exercises: [
            {
              id: 'mm-w9-d3-ex1',
              exerciseId: 'Close-Grip Lat Pulldown',
              displayName: 'Close-Grip Lat Pulldown',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '2-3 min', substitutionOption1: 'Close-Grip Pull-Up', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Close-Grip Pull-Up', '1-Arm Cable Pulldown'],
              notes: 'Lean back by ~15º and drive your elbows down as you squeeze your shoulder blades together. This should feel like a mix of lats and mid-traps.'
            },
            {
              id: 'mm-w9-d3-ex2',
              exerciseId: 'Chest-Supported T-Bar Row',
              displayName: 'Chest-Supported T-Bar Row',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '2-3 min', substitutionOption1: 'Chest-Supported Machine Row', substitutionOption2: 'Chest-Supported DB Row',
              substituteOptions: ['Chest-Supported Machine Row', 'Chest-Supported DB Row'],
              notes: 'Flare elbows out at roughly 45º and squeeze your shoulder blades together hard at the top of each rep.'
            },
            {
              id: 'mm-w9-d3-ex3',
              exerciseId: 'Machine Shrug',
              displayName: 'Machine Shrug',
              warmupSets: '1-2',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Shrug', substitutionOption2: 'Cable Shrug-In',
              substituteOptions: ['Barbell Shrug', 'Cable Shrug-In'],
              notes: 'Think about shrugging "up to your ears". Use straps, if possible.'
            },
            {
              id: 'mm-w9-d3-ex4',
              exerciseId: 'Machine Chest Press',
              displayName: 'Machine Chest Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Weighted Static Hold (30 sec)',
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Bench Press', substitutionOption2: 'DB Bench Press',
              substituteOptions: ['Smith Machine Bench Press', 'DB Bench Press'],
              notes: '1 second pause at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w9-d3-ex5',
              exerciseId: 'High-Cable Lateral Raise',
              displayName: 'High-Cable Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Lateral Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['DB Lateral Raise', 'Machine Lateral Raise'],
              notes: 'Set the cable at roughly hip height. Let your hand go slightly past your midline at the bottom of each rep to get a deep stretch on the side delt.'
            },
            {
              id: 'mm-w9-d3-ex6',
              exerciseId: '1-Arm Reverse Pec Deck',
              displayName: '1-Arm Reverse Pec Deck',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Lying Reverse DB Flye', substitutionOption2: 'Reverse Cable Crossover',
              substituteOptions: ['Lying Reverse DB Flye', 'Reverse Cable Crossover'],
              notes: 'Sweep the weight out to create the largest semi-circle possible with your arm.'
            },
            {
              id: 'mm-w9-d3-ex7',
              exerciseId: 'Cable Crunch',
              displayName: 'Cable Crunch',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Weighted Crunch', substitutionOption2: 'Machine Crunch',
              substituteOptions: ['Weighted Crunch', 'Machine Crunch'],
              notes: 'Round your lower back as you crunch. Maintain a mind-muscle connection with your 6-pack.'
            }
          ]
        },
        {
          id: 'mm-w9-d4',
          name: 'Día 4: Lower 2 (Cadena Posterior & Bisagra)',
          targetMuscles: ['Isquiotibiales', 'Glúteos', 'Cuádriceps', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w9-d4-ex1',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w9-d4-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Barbell RDL',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'DB RDL', substitutionOption2: 'Seated Cable Deadlift',
              substituteOptions: ['DB RDL', 'Seated Cable Deadlift'],
              notes: 'Stick your glutes straight back as you lower the bar straight down, centered over the middle of your foot. Get a nice deep stretch at the bottom, but keep your spine neutral (don\'t round forward).'
            },
            {
              id: 'mm-w9-d4-ex3',
              exerciseId: 'Machine Hip Thrust',
              displayName: 'Machine Hip Thrust',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Barbell Hip Thrust', substitutionOption2: '45º Hyperextension',
              substituteOptions: ['Barbell Hip Thrust', '45º Hyperextension'],
              notes: 'Squeeze your glutes hard at the top and control the weight on the way down.'
            },
            {
              id: 'mm-w9-d4-ex4',
              exerciseId: 'Leg Press',
              displayName: 'Leg Press',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Smith Machine Squat', substitutionOption2: 'Barbell Squat',
              substituteOptions: ['Smith Machine Squat', 'Barbell Squat'],
              notes: 'Feet lower on the platform for more quad focus. Get as deep as you can without excessive back rounding.'
            },
            {
              id: 'mm-w9-d4-ex5',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w9-d5',
          name: 'Día 5: Arms & Delts (Brazo & Hombro)',
          targetMuscles: ['Bíceps', 'Tríceps', 'Deltoides', 'Antebrazos'],
          exercises: [
            {
              id: 'mm-w9-d5-ex1',
              exerciseId: 'Bayesian Cable Curl',
              displayName: 'Bayesian Cable Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Incline DB Curl', substitutionOption2: 'Standing DB Curl',
              substituteOptions: ['Incline DB Curl', 'Standing DB Curl'],
              notes: 'As you curl, optionally lean forward to prevent the cable from hitting your wrist at the top. Control the negative and feel a deep stretch at the bottom of each rep.'
            },
            {
              id: 'mm-w9-d5-ex2',
              exerciseId: 'Overhead Cable Triceps Extension',
              displayName: 'Overhead Cable Triceps Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Overhead DB Triceps Extension', substitutionOption2: 'Skull Crusher',
              substituteOptions: ['Overhead DB Triceps Extension', 'Skull Crusher'],
              notes: 'Feel a deep stretch on the triceps throughout the entire negative.'
            },
            {
              id: 'mm-w9-d5-ex3',
              exerciseId: 'Modified Zottman Curl',
              displayName: 'Modified Zottman Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Hammer Curl', substitutionOption2: 'Preacher Hammer Curl',
              substituteOptions: ['DB Hammer Curl', 'Preacher Hammer Curl'],
              notes: 'Hammer curl on the way up and supinated curl (palms up) on the way down.'
            },
            {
              id: 'mm-w9-d5-ex4',
              exerciseId: 'Cable Triceps Kickback',
              displayName: 'Cable Triceps Kickback',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '1-2 min', substitutionOption1: 'Seated Dip Machine', substitutionOption2: 'Close Grip Dip',
              substituteOptions: ['Seated Dip Machine', 'Close Grip Dip'],
              notes: 'Keep your upper arm behind your torso throughout the ROM.'
            },
            {
              id: 'mm-w9-d5-ex5',
              exerciseId: 'DB Wrist Curl',
              displayName: 'DB Wrist Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Curl',
              substituteOptions: ['Cable Wrist Curl'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w9-d5-ex6',
              exerciseId: 'DB Wrist Extension',
              displayName: 'DB Wrist Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Extension',
              substituteOptions: ['Cable Wrist Extension'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w9-d5-ex7',
              exerciseId: 'Alternating DB Curl',
              displayName: 'Alternating DB Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Curl', substitutionOption2: 'EZ-Bar Curl',
              substituteOptions: ['Barbell Curl', 'EZ-Bar Curl'],
              notes: 'Slow, controlled reps!'
            },
            {
              id: 'mm-w9-d5-ex8',
              exerciseId: 'Machine Lateral Raise',
              displayName: 'Machine Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Myo-reps',
              restPeriod: '1-2 min', substitutionOption1: 'High-Cable Lateral Raise', substitutionOption2: 'DB Lateral Raise',
              substituteOptions: ['High-Cable Lateral Raise', 'DB Lateral Raise'],
              notes: 'Focus on squeezing your side delt to move the weight.'
            },
            {
              id: 'mm-w9-d5-ex9',
              exerciseId: 'Dead Hang (optional)',
              displayName: 'Dead Hang (optional)',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: 'N/A',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min',
              substituteOptions: [],
              notes: 'Try to add a few more seconds each week!'
            }
          ]
        }
      ]
    },
    {
      weekNumber: 10,
      title: 'Semana 10 (Bloque 2: Intensificación)',
      isDeload: false,
      days: [
        {
          id: 'mm-w10-d1',
          name: 'Día 1: Upper 1 (Empuje & Pecho)',
          targetMuscles: ['Pectorales', 'Deltoides', 'Espalda', 'Tríceps', 'Bíceps', 'Abs'],
          exercises: [
            {
              id: 'mm-w10-d1-ex1',
              exerciseId: 'Barbell Incline Press',
              displayName: 'Barbell Incline Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Incline Press', substitutionOption2: 'DB Incline Press',
              substituteOptions: ['Smith Machine Incline Press', 'DB Incline Press'],
              notes: 'A 30º or 45º bench will work here. Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w10-d1-ex2',
              exerciseId: 'Pec Deck',
              displayName: 'Pec Deck',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '1-2 min', substitutionOption1: 'DB Flye', substitutionOption2: 'Cable Flye',
              substituteOptions: ['DB Flye', 'Cable Flye'],
              notes: 'Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w10-d1-ex3',
              exerciseId: 'Incline DB Y-Raise',
              displayName: 'Incline DB Y-Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Y-Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['Cable Y-Raise', 'Machine Lateral Raise'],
              notes: 'Use a 30º incline bench (back against the bench) and lift the weight up and out in a Y shape.'
            },
            {
              id: 'mm-w10-d1-ex4',
              exerciseId: 'Pull-Up (Wide Grip)',
              displayName: 'Pull-Up (Wide Grip)',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '2-3 min', substitutionOption1: 'Lat Pulldown (Wide Grip)', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Lat Pulldown (Wide Grip)', '1-Arm Cable Pulldown'],
              notes: 'Control the negative and feel your lats pulling apart. Full ROM!'
            },
            {
              id: 'mm-w10-d1-ex5',
              exerciseId: 'Kelso Shrug',
              displayName: 'Kelso Shrug',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Seated Cable Kelso Shrug', substitutionOption2: 'Incline DB Kelso Shrug',
              substituteOptions: ['Seated Cable Kelso Shrug', 'Incline DB Kelso Shrug'],
              notes: 'Pause for about 1 second at the top and then allow your shoulder blades to peel apart on the way back down, under control.'
            },
            {
              id: 'mm-w10-d1-ex6',
              exerciseId: 'EZ-Bar Preacher Curl',
              displayName: 'EZ-Bar Preacher Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Myo-reps',
              restPeriod: '1-2 min', substitutionOption1: 'Machine Preacher Curl', substitutionOption2: 'DB Preacher Curl',
              substituteOptions: ['Machine Preacher Curl', 'DB Preacher Curl'],
              notes: 'Keep your triceps firmly pinned against the pad as you curl. Smooth controlled reps.'
            },
            {
              id: 'mm-w10-d1-ex7',
              exerciseId: 'Triceps Pressdown',
              displayName: 'Triceps Pressdown',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Myo-reps',
              restPeriod: '1-2 min', substitutionOption1: 'Close-Grip Bench Press', substitutionOption2: 'Smith Machine JM Press',
              substituteOptions: ['Close-Grip Bench Press', 'Smith Machine JM Press'],
              notes: 'You can use a rope or bar attachment for these, whichever you find more comfortable.'
            },
            {
              id: 'mm-w10-d1-ex8',
              exerciseId: 'Dragon Flag',
              displayName: 'Dragon Flag',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Bent-Knee Dragon Flag', substitutionOption2: 'Lying Leg Raise',
              substituteOptions: ['Bent-Knee Dragon Flag', 'Lying Leg Raise'],
              notes: 'Keep your body as rigid as possible throughout the ROM.'
            }
          ]
        },
        {
          id: 'mm-w10-d2',
          name: 'Día 2: Lower 1 (Cuádriceps & Rodilla)',
          targetMuscles: ['Cuádriceps', 'Isquiotibiales', 'Glúteos', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w10-d2-ex1',
              exerciseId: 'Lying Leg Curl',
              displayName: 'Lying Leg Curl',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Seated Leg Curl', substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Seated Leg Curl', 'Nordic Ham Curl'],
              notes: 'Set the machine so that you get the biggest stretch possible at the bottom. Prevent your butt from popping up as you curl.'
            },
            {
              id: 'mm-w10-d2-ex2',
              exerciseId: 'Squat (Your Choice)',
              displayName: 'Squat (Your Choice)',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min',
              substituteOptions: [],
              notes: 'This can be a Barbell Back Squat, Barbell Front Squat, Pendulum Squat, Hack Squat, Belt Squat, or Smith Machine Squat.'
            },
            {
              id: 'mm-w10-d2-ex3',
              exerciseId: 'Smith Machine Lunge',
              displayName: 'Smith Machine Lunge',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-4 min', substitutionOption1: 'DB Lunge', substitutionOption2: 'Barbell Lunge',
              substituteOptions: ['DB Lunge', 'Barbell Lunge'],
              notes: 'Minimize contribution from your back leg!'
            },
            {
              id: 'mm-w10-d2-ex4',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w10-d2-ex5',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Hip Abduction', substitutionOption2: 'Standing Plate Abduction',
              substituteOptions: ['Cable Hip Abduction', 'Standing Plate Abduction'],
              notes: 'If possible, place foam pads in between the outside of your knees and the pads on the machine. This will increase your range of motion on the machine.'
            },
            {
              id: 'mm-w10-d2-ex6',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w10-d3',
          name: 'Día 3: Upper 2 (Tracción & Espalda)',
          targetMuscles: ['Dorsales', 'Espalda Alta', 'Pectorales', 'Deltoides', 'Abs'],
          exercises: [
            {
              id: 'mm-w10-d3-ex1',
              exerciseId: 'Close-Grip Lat Pulldown',
              displayName: 'Close-Grip Lat Pulldown',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '2-3 min', substitutionOption1: 'Close-Grip Pull-Up', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Close-Grip Pull-Up', '1-Arm Cable Pulldown'],
              notes: 'Lean back by ~15º and drive your elbows down as you squeeze your shoulder blades together. This should feel like a mix of lats and mid-traps.'
            },
            {
              id: 'mm-w10-d3-ex2',
              exerciseId: 'Chest-Supported T-Bar Row',
              displayName: 'Chest-Supported T-Bar Row',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '2-3 min', substitutionOption1: 'Chest-Supported Machine Row', substitutionOption2: 'Chest-Supported DB Row',
              substituteOptions: ['Chest-Supported Machine Row', 'Chest-Supported DB Row'],
              notes: 'Flare elbows out at roughly 45º and squeeze your shoulder blades together hard at the top of each rep.'
            },
            {
              id: 'mm-w10-d3-ex3',
              exerciseId: 'Machine Shrug',
              displayName: 'Machine Shrug',
              warmupSets: '1-2',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Shrug', substitutionOption2: 'Cable Shrug-In',
              substituteOptions: ['Barbell Shrug', 'Cable Shrug-In'],
              notes: 'Think about shrugging "up to your ears". Use straps, if possible.'
            },
            {
              id: 'mm-w10-d3-ex4',
              exerciseId: 'Machine Chest Press',
              displayName: 'Machine Chest Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Weighted Static Hold (30 sec)',
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Bench Press', substitutionOption2: 'DB Bench Press',
              substituteOptions: ['Smith Machine Bench Press', 'DB Bench Press'],
              notes: '1 second pause at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w10-d3-ex5',
              exerciseId: 'High-Cable Lateral Raise',
              displayName: 'High-Cable Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Lateral Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['DB Lateral Raise', 'Machine Lateral Raise'],
              notes: 'Set the cable at roughly hip height. Let your hand go slightly past your midline at the bottom of each rep to get a deep stretch on the side delt.'
            },
            {
              id: 'mm-w10-d3-ex6',
              exerciseId: '1-Arm Reverse Pec Deck',
              displayName: '1-Arm Reverse Pec Deck',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Lying Reverse DB Flye', substitutionOption2: 'Reverse Cable Crossover',
              substituteOptions: ['Lying Reverse DB Flye', 'Reverse Cable Crossover'],
              notes: 'Sweep the weight out to create the largest semi-circle possible with your arm.'
            },
            {
              id: 'mm-w10-d3-ex7',
              exerciseId: 'Cable Crunch',
              displayName: 'Cable Crunch',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Weighted Crunch', substitutionOption2: 'Machine Crunch',
              substituteOptions: ['Weighted Crunch', 'Machine Crunch'],
              notes: 'Round your lower back as you crunch. Maintain a mind-muscle connection with your 6-pack.'
            }
          ]
        },
        {
          id: 'mm-w10-d4',
          name: 'Día 4: Lower 2 (Cadena Posterior & Bisagra)',
          targetMuscles: ['Isquiotibiales', 'Glúteos', 'Cuádriceps', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w10-d4-ex1',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w10-d4-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Barbell RDL',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'DB RDL', substitutionOption2: 'Seated Cable Deadlift',
              substituteOptions: ['DB RDL', 'Seated Cable Deadlift'],
              notes: 'Stick your glutes straight back as you lower the bar straight down, centered over the middle of your foot. Get a nice deep stretch at the bottom, but keep your spine neutral (don\'t round forward).'
            },
            {
              id: 'mm-w10-d4-ex3',
              exerciseId: 'Machine Hip Thrust',
              displayName: 'Machine Hip Thrust',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Barbell Hip Thrust', substitutionOption2: '45º Hyperextension',
              substituteOptions: ['Barbell Hip Thrust', '45º Hyperextension'],
              notes: 'Squeeze your glutes hard at the top and control the weight on the way down.'
            },
            {
              id: 'mm-w10-d4-ex4',
              exerciseId: 'Leg Press',
              displayName: 'Leg Press',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Smith Machine Squat', substitutionOption2: 'Barbell Squat',
              substituteOptions: ['Smith Machine Squat', 'Barbell Squat'],
              notes: 'Feet lower on the platform for more quad focus. Get as deep as you can without excessive back rounding.'
            },
            {
              id: 'mm-w10-d4-ex5',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w10-d5',
          name: 'Día 5: Arms & Delts (Brazo & Hombro)',
          targetMuscles: ['Bíceps', 'Tríceps', 'Deltoides', 'Antebrazos'],
          exercises: [
            {
              id: 'mm-w10-d5-ex1',
              exerciseId: 'Bayesian Cable Curl',
              displayName: 'Bayesian Cable Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Incline DB Curl', substitutionOption2: 'Standing DB Curl',
              substituteOptions: ['Incline DB Curl', 'Standing DB Curl'],
              notes: 'As you curl, optionally lean forward to prevent the cable from hitting your wrist at the top. Control the negative and feel a deep stretch at the bottom of each rep.'
            },
            {
              id: 'mm-w10-d5-ex2',
              exerciseId: 'Overhead Cable Triceps Extension',
              displayName: 'Overhead Cable Triceps Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Overhead DB Triceps Extension', substitutionOption2: 'Skull Crusher',
              substituteOptions: ['Overhead DB Triceps Extension', 'Skull Crusher'],
              notes: 'Feel a deep stretch on the triceps throughout the entire negative.'
            },
            {
              id: 'mm-w10-d5-ex3',
              exerciseId: 'Modified Zottman Curl',
              displayName: 'Modified Zottman Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Hammer Curl', substitutionOption2: 'Preacher Hammer Curl',
              substituteOptions: ['DB Hammer Curl', 'Preacher Hammer Curl'],
              notes: 'Hammer curl on the way up and supinated curl (palms up) on the way down.'
            },
            {
              id: 'mm-w10-d5-ex4',
              exerciseId: 'Cable Triceps Kickback',
              displayName: 'Cable Triceps Kickback',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '1-2 min', substitutionOption1: 'Seated Dip Machine', substitutionOption2: 'Close Grip Dip',
              substituteOptions: ['Seated Dip Machine', 'Close Grip Dip'],
              notes: 'Keep your upper arm behind your torso throughout the ROM.'
            },
            {
              id: 'mm-w10-d5-ex5',
              exerciseId: 'DB Wrist Curl',
              displayName: 'DB Wrist Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Curl',
              substituteOptions: ['Cable Wrist Curl'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w10-d5-ex6',
              exerciseId: 'DB Wrist Extension',
              displayName: 'DB Wrist Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Extension',
              substituteOptions: ['Cable Wrist Extension'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w10-d5-ex7',
              exerciseId: 'Alternating DB Curl',
              displayName: 'Alternating DB Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Curl', substitutionOption2: 'EZ-Bar Curl',
              substituteOptions: ['Barbell Curl', 'EZ-Bar Curl'],
              notes: 'Slow, controlled reps!'
            },
            {
              id: 'mm-w10-d5-ex8',
              exerciseId: 'Machine Lateral Raise',
              displayName: 'Machine Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Myo-reps',
              restPeriod: '1-2 min', substitutionOption1: 'High-Cable Lateral Raise', substitutionOption2: 'DB Lateral Raise',
              substituteOptions: ['High-Cable Lateral Raise', 'DB Lateral Raise'],
              notes: 'Focus on squeezing your side delt to move the weight.'
            },
            {
              id: 'mm-w10-d5-ex9',
              exerciseId: 'Dead Hang (optional)',
              displayName: 'Dead Hang (optional)',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: 'N/A',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min',
              substituteOptions: [],
              notes: 'Try to add a few more seconds each week!'
            }
          ]
        }
      ]
    },
    {
      weekNumber: 11,
      title: 'Semana 11 (Bloque 2: Intensificación)',
      isDeload: false,
      days: [
        {
          id: 'mm-w11-d1',
          name: 'Día 1: Upper 1 (Empuje & Pecho)',
          targetMuscles: ['Pectorales', 'Deltoides', 'Espalda', 'Tríceps', 'Bíceps', 'Abs'],
          exercises: [
            {
              id: 'mm-w11-d1-ex1',
              exerciseId: 'Barbell Incline Press',
              displayName: 'Barbell Incline Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Incline Press', substitutionOption2: 'DB Incline Press',
              substituteOptions: ['Smith Machine Incline Press', 'DB Incline Press'],
              notes: 'A 30º or 45º bench will work here. Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w11-d1-ex2',
              exerciseId: 'Pec Deck',
              displayName: 'Pec Deck',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '1-2 min', substitutionOption1: 'DB Flye', substitutionOption2: 'Cable Flye',
              substituteOptions: ['DB Flye', 'Cable Flye'],
              notes: 'Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w11-d1-ex3',
              exerciseId: 'Incline DB Y-Raise',
              displayName: 'Incline DB Y-Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Y-Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['Cable Y-Raise', 'Machine Lateral Raise'],
              notes: 'Use a 30º incline bench (back against the bench) and lift the weight up and out in a Y shape.'
            },
            {
              id: 'mm-w11-d1-ex4',
              exerciseId: 'Pull-Up (Wide Grip)',
              displayName: 'Pull-Up (Wide Grip)',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '2-3 min', substitutionOption1: 'Lat Pulldown (Wide Grip)', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Lat Pulldown (Wide Grip)', '1-Arm Cable Pulldown'],
              notes: 'Control the negative and feel your lats pulling apart. Full ROM!'
            },
            {
              id: 'mm-w11-d1-ex5',
              exerciseId: 'Kelso Shrug',
              displayName: 'Kelso Shrug',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Seated Cable Kelso Shrug', substitutionOption2: 'Incline DB Kelso Shrug',
              substituteOptions: ['Seated Cable Kelso Shrug', 'Incline DB Kelso Shrug'],
              notes: 'Pause for about 1 second at the top and then allow your shoulder blades to peel apart on the way back down, under control.'
            },
            {
              id: 'mm-w11-d1-ex6',
              exerciseId: 'EZ-Bar Preacher Curl',
              displayName: 'EZ-Bar Preacher Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Myo-reps',
              restPeriod: '1-2 min', substitutionOption1: 'Machine Preacher Curl', substitutionOption2: 'DB Preacher Curl',
              substituteOptions: ['Machine Preacher Curl', 'DB Preacher Curl'],
              notes: 'Keep your triceps firmly pinned against the pad as you curl. Smooth controlled reps.'
            },
            {
              id: 'mm-w11-d1-ex7',
              exerciseId: 'Triceps Pressdown',
              displayName: 'Triceps Pressdown',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Myo-reps',
              restPeriod: '1-2 min', substitutionOption1: 'Close-Grip Bench Press', substitutionOption2: 'Smith Machine JM Press',
              substituteOptions: ['Close-Grip Bench Press', 'Smith Machine JM Press'],
              notes: 'You can use a rope or bar attachment for these, whichever you find more comfortable.'
            },
            {
              id: 'mm-w11-d1-ex8',
              exerciseId: 'Dragon Flag',
              displayName: 'Dragon Flag',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Bent-Knee Dragon Flag', substitutionOption2: 'Lying Leg Raise',
              substituteOptions: ['Bent-Knee Dragon Flag', 'Lying Leg Raise'],
              notes: 'Keep your body as rigid as possible throughout the ROM.'
            }
          ]
        },
        {
          id: 'mm-w11-d2',
          name: 'Día 2: Lower 1 (Cuádriceps & Rodilla)',
          targetMuscles: ['Cuádriceps', 'Isquiotibiales', 'Glúteos', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w11-d2-ex1',
              exerciseId: 'Lying Leg Curl',
              displayName: 'Lying Leg Curl',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Seated Leg Curl', substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Seated Leg Curl', 'Nordic Ham Curl'],
              notes: 'Set the machine so that you get the biggest stretch possible at the bottom. Prevent your butt from popping up as you curl.'
            },
            {
              id: 'mm-w11-d2-ex2',
              exerciseId: 'Squat (Your Choice)',
              displayName: 'Squat (Your Choice)',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min',
              substituteOptions: [],
              notes: 'This can be a Barbell Back Squat, Barbell Front Squat, Pendulum Squat, Hack Squat, Belt Squat, or Smith Machine Squat.'
            },
            {
              id: 'mm-w11-d2-ex3',
              exerciseId: 'Smith Machine Lunge',
              displayName: 'Smith Machine Lunge',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-4 min', substitutionOption1: 'DB Lunge', substitutionOption2: 'Barbell Lunge',
              substituteOptions: ['DB Lunge', 'Barbell Lunge'],
              notes: 'Minimize contribution from your back leg!'
            },
            {
              id: 'mm-w11-d2-ex4',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w11-d2-ex5',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Hip Abduction', substitutionOption2: 'Standing Plate Abduction',
              substituteOptions: ['Cable Hip Abduction', 'Standing Plate Abduction'],
              notes: 'If possible, place foam pads in between the outside of your knees and the pads on the machine. This will increase your range of motion on the machine.'
            },
            {
              id: 'mm-w11-d2-ex6',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w11-d3',
          name: 'Día 3: Upper 2 (Tracción & Espalda)',
          targetMuscles: ['Dorsales', 'Espalda Alta', 'Pectorales', 'Deltoides', 'Abs'],
          exercises: [
            {
              id: 'mm-w11-d3-ex1',
              exerciseId: 'Close-Grip Lat Pulldown',
              displayName: 'Close-Grip Lat Pulldown',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '2-3 min', substitutionOption1: 'Close-Grip Pull-Up', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Close-Grip Pull-Up', '1-Arm Cable Pulldown'],
              notes: 'Lean back by ~15º and drive your elbows down as you squeeze your shoulder blades together. This should feel like a mix of lats and mid-traps.'
            },
            {
              id: 'mm-w11-d3-ex2',
              exerciseId: 'Chest-Supported T-Bar Row',
              displayName: 'Chest-Supported T-Bar Row',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '2-3 min', substitutionOption1: 'Chest-Supported Machine Row', substitutionOption2: 'Chest-Supported DB Row',
              substituteOptions: ['Chest-Supported Machine Row', 'Chest-Supported DB Row'],
              notes: 'Flare elbows out at roughly 45º and squeeze your shoulder blades together hard at the top of each rep.'
            },
            {
              id: 'mm-w11-d3-ex3',
              exerciseId: 'Machine Shrug',
              displayName: 'Machine Shrug',
              warmupSets: '1-2',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Shrug', substitutionOption2: 'Cable Shrug-In',
              substituteOptions: ['Barbell Shrug', 'Cable Shrug-In'],
              notes: 'Think about shrugging "up to your ears". Use straps, if possible.'
            },
            {
              id: 'mm-w11-d3-ex4',
              exerciseId: 'Machine Chest Press',
              displayName: 'Machine Chest Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Weighted Static Hold (30 sec)',
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Bench Press', substitutionOption2: 'DB Bench Press',
              substituteOptions: ['Smith Machine Bench Press', 'DB Bench Press'],
              notes: '1 second pause at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w11-d3-ex5',
              exerciseId: 'High-Cable Lateral Raise',
              displayName: 'High-Cable Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Lateral Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['DB Lateral Raise', 'Machine Lateral Raise'],
              notes: 'Set the cable at roughly hip height. Let your hand go slightly past your midline at the bottom of each rep to get a deep stretch on the side delt.'
            },
            {
              id: 'mm-w11-d3-ex6',
              exerciseId: '1-Arm Reverse Pec Deck',
              displayName: '1-Arm Reverse Pec Deck',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Lying Reverse DB Flye', substitutionOption2: 'Reverse Cable Crossover',
              substituteOptions: ['Lying Reverse DB Flye', 'Reverse Cable Crossover'],
              notes: 'Sweep the weight out to create the largest semi-circle possible with your arm.'
            },
            {
              id: 'mm-w11-d3-ex7',
              exerciseId: 'Cable Crunch',
              displayName: 'Cable Crunch',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Weighted Crunch', substitutionOption2: 'Machine Crunch',
              substituteOptions: ['Weighted Crunch', 'Machine Crunch'],
              notes: 'Round your lower back as you crunch. Maintain a mind-muscle connection with your 6-pack.'
            }
          ]
        },
        {
          id: 'mm-w11-d4',
          name: 'Día 4: Lower 2 (Cadena Posterior & Bisagra)',
          targetMuscles: ['Isquiotibiales', 'Glúteos', 'Cuádriceps', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w11-d4-ex1',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w11-d4-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Barbell RDL',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'DB RDL', substitutionOption2: 'Seated Cable Deadlift',
              substituteOptions: ['DB RDL', 'Seated Cable Deadlift'],
              notes: 'Stick your glutes straight back as you lower the bar straight down, centered over the middle of your foot. Get a nice deep stretch at the bottom, but keep your spine neutral (don\'t round forward).'
            },
            {
              id: 'mm-w11-d4-ex3',
              exerciseId: 'Machine Hip Thrust',
              displayName: 'Machine Hip Thrust',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Barbell Hip Thrust', substitutionOption2: '45º Hyperextension',
              substituteOptions: ['Barbell Hip Thrust', '45º Hyperextension'],
              notes: 'Squeeze your glutes hard at the top and control the weight on the way down.'
            },
            {
              id: 'mm-w11-d4-ex4',
              exerciseId: 'Leg Press',
              displayName: 'Leg Press',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Smith Machine Squat', substitutionOption2: 'Barbell Squat',
              substituteOptions: ['Smith Machine Squat', 'Barbell Squat'],
              notes: 'Feet lower on the platform for more quad focus. Get as deep as you can without excessive back rounding.'
            },
            {
              id: 'mm-w11-d4-ex5',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w11-d5',
          name: 'Día 5: Arms & Delts (Brazo & Hombro)',
          targetMuscles: ['Bíceps', 'Tríceps', 'Deltoides', 'Antebrazos'],
          exercises: [
            {
              id: 'mm-w11-d5-ex1',
              exerciseId: 'Bayesian Cable Curl',
              displayName: 'Bayesian Cable Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Incline DB Curl', substitutionOption2: 'Standing DB Curl',
              substituteOptions: ['Incline DB Curl', 'Standing DB Curl'],
              notes: 'As you curl, optionally lean forward to prevent the cable from hitting your wrist at the top. Control the negative and feel a deep stretch at the bottom of each rep.'
            },
            {
              id: 'mm-w11-d5-ex2',
              exerciseId: 'Overhead Cable Triceps Extension',
              displayName: 'Overhead Cable Triceps Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Overhead DB Triceps Extension', substitutionOption2: 'Skull Crusher',
              substituteOptions: ['Overhead DB Triceps Extension', 'Skull Crusher'],
              notes: 'Feel a deep stretch on the triceps throughout the entire negative.'
            },
            {
              id: 'mm-w11-d5-ex3',
              exerciseId: 'Modified Zottman Curl',
              displayName: 'Modified Zottman Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Hammer Curl', substitutionOption2: 'Preacher Hammer Curl',
              substituteOptions: ['DB Hammer Curl', 'Preacher Hammer Curl'],
              notes: 'Hammer curl on the way up and supinated curl (palms up) on the way down.'
            },
            {
              id: 'mm-w11-d5-ex4',
              exerciseId: 'Cable Triceps Kickback',
              displayName: 'Cable Triceps Kickback',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '1-2 min', substitutionOption1: 'Seated Dip Machine', substitutionOption2: 'Close Grip Dip',
              substituteOptions: ['Seated Dip Machine', 'Close Grip Dip'],
              notes: 'Keep your upper arm behind your torso throughout the ROM.'
            },
            {
              id: 'mm-w11-d5-ex5',
              exerciseId: 'DB Wrist Curl',
              displayName: 'DB Wrist Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Curl',
              substituteOptions: ['Cable Wrist Curl'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w11-d5-ex6',
              exerciseId: 'DB Wrist Extension',
              displayName: 'DB Wrist Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Extension',
              substituteOptions: ['Cable Wrist Extension'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w11-d5-ex7',
              exerciseId: 'Alternating DB Curl',
              displayName: 'Alternating DB Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Curl', substitutionOption2: 'EZ-Bar Curl',
              substituteOptions: ['Barbell Curl', 'EZ-Bar Curl'],
              notes: 'Slow, controlled reps!'
            },
            {
              id: 'mm-w11-d5-ex8',
              exerciseId: 'Machine Lateral Raise',
              displayName: 'Machine Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Myo-reps',
              restPeriod: '1-2 min', substitutionOption1: 'High-Cable Lateral Raise', substitutionOption2: 'DB Lateral Raise',
              substituteOptions: ['High-Cable Lateral Raise', 'DB Lateral Raise'],
              notes: 'Focus on squeezing your side delt to move the weight.'
            },
            {
              id: 'mm-w11-d5-ex9',
              exerciseId: 'Dead Hang (optional)',
              displayName: 'Dead Hang (optional)',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: 'N/A',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min',
              substituteOptions: [],
              notes: 'Try to add a few more seconds each week!'
            }
          ]
        }
      ]
    },
    {
      weekNumber: 12,
      title: 'Semana 12 (Bloque 2: Intensificación)',
      isDeload: false,
      days: [
        {
          id: 'mm-w12-d1',
          name: 'Día 1: Upper 1 (Empuje & Pecho)',
          targetMuscles: ['Pectorales', 'Deltoides', 'Espalda', 'Tríceps', 'Bíceps', 'Abs'],
          exercises: [
            {
              id: 'mm-w12-d1-ex1',
              exerciseId: 'Barbell Incline Press',
              displayName: 'Barbell Incline Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Incline Press', substitutionOption2: 'DB Incline Press',
              substituteOptions: ['Smith Machine Incline Press', 'DB Incline Press'],
              notes: 'A 30º or 45º bench will work here. Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w12-d1-ex2',
              exerciseId: 'Pec Deck',
              displayName: 'Pec Deck',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '1-2 min', substitutionOption1: 'DB Flye', substitutionOption2: 'Cable Flye',
              substituteOptions: ['DB Flye', 'Cable Flye'],
              notes: 'Pause for 1 second at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w12-d1-ex3',
              exerciseId: 'Incline DB Y-Raise',
              displayName: 'Incline DB Y-Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Y-Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['Cable Y-Raise', 'Machine Lateral Raise'],
              notes: 'Use a 30º incline bench (back against the bench) and lift the weight up and out in a Y shape.'
            },
            {
              id: 'mm-w12-d1-ex4',
              exerciseId: 'Pull-Up (Wide Grip)',
              displayName: 'Pull-Up (Wide Grip)',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '2-3 min', substitutionOption1: 'Lat Pulldown (Wide Grip)', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Lat Pulldown (Wide Grip)', '1-Arm Cable Pulldown'],
              notes: 'Control the negative and feel your lats pulling apart. Full ROM!'
            },
            {
              id: 'mm-w12-d1-ex5',
              exerciseId: 'Kelso Shrug',
              displayName: 'Kelso Shrug',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Seated Cable Kelso Shrug', substitutionOption2: 'Incline DB Kelso Shrug',
              substituteOptions: ['Seated Cable Kelso Shrug', 'Incline DB Kelso Shrug'],
              notes: 'Pause for about 1 second at the top and then allow your shoulder blades to peel apart on the way back down, under control.'
            },
            {
              id: 'mm-w12-d1-ex6',
              exerciseId: 'EZ-Bar Preacher Curl',
              displayName: 'EZ-Bar Preacher Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Myo-reps',
              restPeriod: '1-2 min', substitutionOption1: 'Machine Preacher Curl', substitutionOption2: 'DB Preacher Curl',
              substituteOptions: ['Machine Preacher Curl', 'DB Preacher Curl'],
              notes: 'Keep your triceps firmly pinned against the pad as you curl. Smooth controlled reps.'
            },
            {
              id: 'mm-w12-d1-ex7',
              exerciseId: 'Triceps Pressdown',
              displayName: 'Triceps Pressdown',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Myo-reps',
              restPeriod: '1-2 min', substitutionOption1: 'Close-Grip Bench Press', substitutionOption2: 'Smith Machine JM Press',
              substituteOptions: ['Close-Grip Bench Press', 'Smith Machine JM Press'],
              notes: 'You can use a rope or bar attachment for these, whichever you find more comfortable.'
            },
            {
              id: 'mm-w12-d1-ex8',
              exerciseId: 'Dragon Flag',
              displayName: 'Dragon Flag',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Bent-Knee Dragon Flag', substitutionOption2: 'Lying Leg Raise',
              substituteOptions: ['Bent-Knee Dragon Flag', 'Lying Leg Raise'],
              notes: 'Keep your body as rigid as possible throughout the ROM.'
            }
          ]
        },
        {
          id: 'mm-w12-d2',
          name: 'Día 2: Lower 1 (Cuádriceps & Rodilla)',
          targetMuscles: ['Cuádriceps', 'Isquiotibiales', 'Glúteos', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w12-d2-ex1',
              exerciseId: 'Lying Leg Curl',
              displayName: 'Lying Leg Curl',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Seated Leg Curl', substitutionOption2: 'Nordic Ham Curl',
              substituteOptions: ['Seated Leg Curl', 'Nordic Ham Curl'],
              notes: 'Set the machine so that you get the biggest stretch possible at the bottom. Prevent your butt from popping up as you curl.'
            },
            {
              id: 'mm-w12-d2-ex2',
              exerciseId: 'Squat (Your Choice)',
              displayName: 'Squat (Your Choice)',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '3-5 min',
              substituteOptions: [],
              notes: 'This can be a Barbell Back Squat, Barbell Front Squat, Pendulum Squat, Hack Squat, Belt Squat, or Smith Machine Squat.'
            },
            {
              id: 'mm-w12-d2-ex3',
              exerciseId: 'Smith Machine Lunge',
              displayName: 'Smith Machine Lunge',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-4 min', substitutionOption1: 'DB Lunge', substitutionOption2: 'Barbell Lunge',
              substituteOptions: ['DB Lunge', 'Barbell Lunge'],
              notes: 'Minimize contribution from your back leg!'
            },
            {
              id: 'mm-w12-d2-ex4',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w12-d2-ex5',
              exerciseId: 'Machine Hip Abduction',
              displayName: 'Machine Hip Abduction',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Hip Abduction', substitutionOption2: 'Standing Plate Abduction',
              substituteOptions: ['Cable Hip Abduction', 'Standing Plate Abduction'],
              notes: 'If possible, place foam pads in between the outside of your knees and the pads on the machine. This will increase your range of motion on the machine.'
            },
            {
              id: 'mm-w12-d2-ex6',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w12-d3',
          name: 'Día 3: Upper 2 (Tracción & Espalda)',
          targetMuscles: ['Dorsales', 'Espalda Alta', 'Pectorales', 'Deltoides', 'Abs'],
          exercises: [
            {
              id: 'mm-w12-d3-ex1',
              exerciseId: 'Close-Grip Lat Pulldown',
              displayName: 'Close-Grip Lat Pulldown',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '2-3 min', substitutionOption1: 'Close-Grip Pull-Up', substitutionOption2: '1-Arm Cable Pulldown',
              substituteOptions: ['Close-Grip Pull-Up', '1-Arm Cable Pulldown'],
              notes: 'Lean back by ~15º and drive your elbows down as you squeeze your shoulder blades together. This should feel like a mix of lats and mid-traps.'
            },
            {
              id: 'mm-w12-d3-ex2',
              exerciseId: 'Chest-Supported T-Bar Row',
              displayName: 'Chest-Supported T-Bar Row',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '2-3 min', substitutionOption1: 'Chest-Supported Machine Row', substitutionOption2: 'Chest-Supported DB Row',
              substituteOptions: ['Chest-Supported Machine Row', 'Chest-Supported DB Row'],
              notes: 'Flare elbows out at roughly 45º and squeeze your shoulder blades together hard at the top of each rep.'
            },
            {
              id: 'mm-w12-d3-ex3',
              exerciseId: 'Machine Shrug',
              displayName: 'Machine Shrug',
              warmupSets: '1-2',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Shrug', substitutionOption2: 'Cable Shrug-In',
              substituteOptions: ['Barbell Shrug', 'Cable Shrug-In'],
              notes: 'Think about shrugging "up to your ears". Use straps, if possible.'
            },
            {
              id: 'mm-w12-d3-ex4',
              exerciseId: 'Machine Chest Press',
              displayName: 'Machine Chest Press',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 1', 'RIR 0'], lastSetIntensityTechnique: 'Weighted Static Hold (30 sec)',
              restPeriod: '3-5 min', substitutionOption1: 'Smith Machine Bench Press', substitutionOption2: 'DB Bench Press',
              substituteOptions: ['Smith Machine Bench Press', 'DB Bench Press'],
              notes: '1 second pause at the bottom of each rep while maintaining tension on the pecs.'
            },
            {
              id: 'mm-w12-d3-ex5',
              exerciseId: 'High-Cable Lateral Raise',
              displayName: 'High-Cable Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Lateral Raise', substitutionOption2: 'Machine Lateral Raise',
              substituteOptions: ['DB Lateral Raise', 'Machine Lateral Raise'],
              notes: 'Set the cable at roughly hip height. Let your hand go slightly past your midline at the bottom of each rep to get a deep stretch on the side delt.'
            },
            {
              id: 'mm-w12-d3-ex6',
              exerciseId: '1-Arm Reverse Pec Deck',
              displayName: '1-Arm Reverse Pec Deck',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Lying Reverse DB Flye', substitutionOption2: 'Reverse Cable Crossover',
              substituteOptions: ['Lying Reverse DB Flye', 'Reverse Cable Crossover'],
              notes: 'Sweep the weight out to create the largest semi-circle possible with your arm.'
            },
            {
              id: 'mm-w12-d3-ex7',
              exerciseId: 'Cable Crunch',
              displayName: 'Cable Crunch',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Weighted Crunch', substitutionOption2: 'Machine Crunch',
              substituteOptions: ['Weighted Crunch', 'Machine Crunch'],
              notes: 'Round your lower back as you crunch. Maintain a mind-muscle connection with your 6-pack.'
            }
          ]
        },
        {
          id: 'mm-w12-d4',
          name: 'Día 4: Lower 2 (Cadena Posterior & Bisagra)',
          targetMuscles: ['Isquiotibiales', 'Glúteos', 'Cuádriceps', 'Gemelos'],
          exercises: [
            {
              id: 'mm-w12-d4-ex1',
              exerciseId: 'Leg Extension',
              displayName: 'Leg Extension',
              warmupSets: '1-2',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Reverse Nordic', substitutionOption2: 'Sissy Squat',
              substituteOptions: ['Reverse Nordic', 'Sissy Squat'],
              notes: 'Set the seat back as far as it will go while still feeling comfortable. Grab the handles as hard as you can to pull your butt down into the seat (using straps can help here).'
            },
            {
              id: 'mm-w12-d4-ex2',
              exerciseId: 'Barbell RDL',
              displayName: 'Barbell RDL',
              warmupSets: '2-3',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 2', 'RIR 1'],
              restPeriod: '2-3 min', substitutionOption1: 'DB RDL', substitutionOption2: 'Seated Cable Deadlift',
              substituteOptions: ['DB RDL', 'Seated Cable Deadlift'],
              notes: 'Stick your glutes straight back as you lower the bar straight down, centered over the middle of your foot. Get a nice deep stretch at the bottom, but keep your spine neutral (don\'t round forward).'
            },
            {
              id: 'mm-w12-d4-ex3',
              exerciseId: 'Machine Hip Thrust',
              displayName: 'Machine Hip Thrust',
              warmupSets: '2-4',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 1', 'RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Barbell Hip Thrust', substitutionOption2: '45º Hyperextension',
              substituteOptions: ['Barbell Hip Thrust', '45º Hyperextension'],
              notes: 'Squeeze your glutes hard at the top and control the weight on the way down.'
            },
            {
              id: 'mm-w12-d4-ex4',
              exerciseId: 'Leg Press',
              displayName: 'Leg Press',
              warmupSets: '2-4',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'],
              restPeriod: '2-3 min', substitutionOption1: 'Smith Machine Squat', substitutionOption2: 'Barbell Squat',
              substituteOptions: ['Smith Machine Squat', 'Barbell Squat'],
              notes: 'Feet lower on the platform for more quad focus. Get as deep as you can without excessive back rounding.'
            },
            {
              id: 'mm-w12-d4-ex5',
              exerciseId: 'Standing Calf Raise',
              displayName: 'Standing Calf Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Lengthened Partials (Extend Set)',
              restPeriod: '1-2 min', substitutionOption1: 'Leg Press Calf Press', substitutionOption2: 'Donkey Calf Raise',
              substituteOptions: ['Leg Press Calf Press', 'Donkey Calf Raise'],
              notes: '1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet.'
            }
          ]
        },
        {
          id: 'mm-w12-d5',
          name: 'Día 5: Arms & Delts (Brazo & Hombro)',
          targetMuscles: ['Bíceps', 'Tríceps', 'Deltoides', 'Antebrazos'],
          exercises: [
            {
              id: 'mm-w12-d5-ex1',
              exerciseId: 'Bayesian Cable Curl',
              displayName: 'Bayesian Cable Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '6-8',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Incline DB Curl', substitutionOption2: 'Standing DB Curl',
              substituteOptions: ['Incline DB Curl', 'Standing DB Curl'],
              notes: 'As you curl, optionally lean forward to prevent the cable from hitting your wrist at the top. Control the negative and feel a deep stretch at the bottom of each rep.'
            },
            {
              id: 'mm-w12-d5-ex2',
              exerciseId: 'Overhead Cable Triceps Extension',
              displayName: 'Overhead Cable Triceps Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Overhead DB Triceps Extension', substitutionOption2: 'Skull Crusher',
              substituteOptions: ['Overhead DB Triceps Extension', 'Skull Crusher'],
              notes: 'Feel a deep stretch on the triceps throughout the entire negative.'
            },
            {
              id: 'mm-w12-d5-ex3',
              exerciseId: 'Modified Zottman Curl',
              displayName: 'Modified Zottman Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '8-10',
              rirPerSet: ['RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'DB Hammer Curl', substitutionOption2: 'Preacher Hammer Curl',
              substituteOptions: ['DB Hammer Curl', 'Preacher Hammer Curl'],
              notes: 'Hammer curl on the way up and supinated curl (palms up) on the way down.'
            },
            {
              id: 'mm-w12-d5-ex4',
              exerciseId: 'Cable Triceps Kickback',
              displayName: 'Cable Triceps Kickback',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '1-2 min', substitutionOption1: 'Seated Dip Machine', substitutionOption2: 'Close Grip Dip',
              substituteOptions: ['Seated Dip Machine', 'Close Grip Dip'],
              notes: 'Keep your upper arm behind your torso throughout the ROM.'
            },
            {
              id: 'mm-w12-d5-ex5',
              exerciseId: 'DB Wrist Curl',
              displayName: 'DB Wrist Curl',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Curl',
              substituteOptions: ['Cable Wrist Curl'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w12-d5-ex6',
              exerciseId: 'DB Wrist Extension',
              displayName: 'DB Wrist Extension',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min', substitutionOption1: 'Cable Wrist Extension',
              substituteOptions: ['Cable Wrist Extension'],
              notes: 'Smooth, controlled reps.'
            },
            {
              id: 'mm-w12-d5-ex7',
              exerciseId: 'Alternating DB Curl',
              displayName: 'Alternating DB Curl',
              warmupSets: '0-1',
              workingSets: 1,
              targetReps: '6-8',
              rirPerSet: ['RIR 0'], lastSetIntensityTechnique: 'Two Drop Sets (~25% per)',
              restPeriod: '1-2 min', substitutionOption1: 'Barbell Curl', substitutionOption2: 'EZ-Bar Curl',
              substituteOptions: ['Barbell Curl', 'EZ-Bar Curl'],
              notes: 'Slow, controlled reps!'
            },
            {
              id: 'mm-w12-d5-ex8',
              exerciseId: 'Machine Lateral Raise',
              displayName: 'Machine Lateral Raise',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: '8-10',
              rirPerSet: ['RIR 0', 'RIR 0'], lastSetIntensityTechnique: 'Myo-reps',
              restPeriod: '1-2 min', substitutionOption1: 'High-Cable Lateral Raise', substitutionOption2: 'DB Lateral Raise',
              substituteOptions: ['High-Cable Lateral Raise', 'DB Lateral Raise'],
              notes: 'Focus on squeezing your side delt to move the weight.'
            },
            {
              id: 'mm-w12-d5-ex9',
              exerciseId: 'Dead Hang (optional)',
              displayName: 'Dead Hang (optional)',
              warmupSets: '0-1',
              workingSets: 2,
              targetReps: 'N/A',
              rirPerSet: ['RIR 0', 'RIR 0'],
              restPeriod: '1-2 min',
              substituteOptions: [],
              notes: 'Try to add a few more seconds each week!'
            }
          ]
        }
      ]
    }
  ]
};

export default minMaxProgram;
