// src/data/fitness/programs/bodybuildingTransformationProgram.ts - 100% Complete Faithful FitApp Export
import type { TrainingProgram } from './types';

export const bodybuildingTransformationProgram: TrainingProgram = {
  "id": "bodybuildingTransformation",
  "title": "Bodybuilding Transformation System (5 Días/Semana)",
  "source": "Jeff Nippard (2022)",
  "pdfUrl": "/library/fitness/bodybuilding-transformation-system.pdf",
  "durationWeeks": 13,
  "split": [
    "Día 1: Upper (Fuerza)",
    "Día 2: Lower (Fuerza)",
    "Día 3: Pull (Hipertrofia)",
    "Día 4: Push (Hipertrofia)",
    "Día 5: Legs (Hipertrofia)"
  ],
  "methodology": [
    "Enfoque de Alta Intensidad RPE 8-10 y Fallo Técnico",
    "Estructura Fiel de 5 Días (Upper/Lower/PPL)",
    "Optimización Mecánica de Ejercicios"
  ],
  "equipment": [
    "Barbell",
    "Dumbbells",
    "Cables",
    "Machines"
  ],
  "weeks": [
    {
      "weekNumber": 1,
      "title": "Week 1: Foundation Block",
      "isDeload": false,
      "days": [
        {
          "id": "bodybuildingTransformation-w1-d1",
          "name": "Day 1: Upper (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w1-d1-ex1",
              "exerciseId": "45┬░ Incline Barbell Press",
              "displayName": "45┬░ Incline Barbell Press",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "3-5 min",
              "notes": "Early set. 1 second pause at the bottom of each rep while maintaining tension on the pecs. Substitutions: 45┬░ Incline DB Press, 45┬░ Incline Machine Press."
            },
            {
              "id": "bodybuildingTransformation-w1-d1-ex2",
              "exerciseId": "Cable Crossover Ladder",
              "displayName": "Cable Crossover Ladder",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early set. Do one set with low cable position, one set with medium-height cable position. If you only have one set, choose one. Substitutions: Pec Deck, Bottom-Half DB Flye."
            },
            {
              "id": "bodybuildingTransformation-w1-d1-ex3",
              "exerciseId": "Wide-Grip Pull-Up",
              "displayName": "Wide-Grip Pull-Up",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "2-3 min",
              "notes": "Early set. 1.5x shoulder width overhand grip. Slow 2-3 second negative. Feel your lats pulling apart on the way down. Substitutions: Wide-Grip Lat Pulldown, Dual-Handle Lat Pulldown."
            },
            {
              "id": "bodybuildingTransformation-w1-d1-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early set. Focus on squeezing your lateral delt to move the weight. Substitutions: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w1-d1-ex5",
              "exerciseId": "Pendlay Deficit Row",
              "displayName": "Pendlay Deficit Row",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "2-3 min",
              "notes": "Early set. Stand on a bumper plate. Focus on getting a big stretch and touch your stomach/chest on each rep! Substitutions: Smith Machine Row, Single-Arm DB Row."
            },
            {
              "id": "bodybuildingTransformation-w1-d1-ex6",
              "exerciseId": "Overhead Cable Triceps Extension (Bar)",
              "displayName": "Overhead Cable Triceps Extension (Bar)",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early set. Optionally pause for 0.5-1 second in the stretched aspect of each rep. Substitutions: Overhead Cable Triceps Extension (Rope), DB Skull Crusher."
            },
            {
              "id": "bodybuildingTransformation-w1-d1-ex7",
              "exerciseId": "Bayesian Cable Curl",
              "displayName": "Bayesian Cable Curl",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early set. If you have a left-right bicep size imbalance, do these 1 arm at a time, starting with the weaker arm. Substitutions: Seated Super-Bayesian High Cable Curl, Incline DB Stretch Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w1-d2",
          "name": "Day 2: Lower (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w1-d2-ex1",
              "exerciseId": "Lying Leg Curl",
              "displayName": "Lying Leg Curl",
              "warmupSets": "2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Set the machine so that you get the biggest stretch possible at the bottom. Prevent your butt from popping up as you curl. Substitutions: Seated Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w1-d2-ex2",
              "exerciseId": "Smith Machine Squat",
              "displayName": "Smith Machine Squat",
              "warmupSets": "2-4",
              "workingSets": 1,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "3-5 min",
              "notes": "Early Set. Bring feet forward ~3-6 inches to allow for a more upright squat. Substitutions: DB Bulgarian Split Squat, High-Bar Back Squat."
            },
            {
              "id": "bodybuildingTransformation-w1-d2-ex3",
              "exerciseId": "Barbell RDL",
              "displayName": "Barbell RDL",
              "warmupSets": "2-4",
              "workingSets": 1,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "2-3 min",
              "notes": "Early Set. To keep tension on the hamstrings, stop about 75% of the way to full lockout on each rep. Substitutions: DB RDL, Snatch-Grip RDL."
            },
            {
              "id": "bodybuildingTransformation-w1-d2-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Use a 2-3 second negative. Feel your quads pulling apart on the negative. Substitutions: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w1-d2-ex5",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early Set. 1-2 second pause at the bottom of each rep. Substitutions: Seated Calf Raise, Leg Press Calf Press."
            },
            {
              "id": "bodybuildingTransformation-w1-d2-ex6",
              "exerciseId": "Cable Crunch",
              "displayName": "Cable Crunch",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Round your lower back as you crunch. Maintain a mind-muscle connection with your 6-pack. Substitutions: Decline Weighted Crunch, Machine Crunch."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w1-d3",
          "name": "Day 3: Pull (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w1-d3-ex1",
              "exerciseId": "Neutral-Grip Lat Pulldown",
              "displayName": "Neutral-Grip Lat Pulldown",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Do these pulldowns with the handle more out in front of you, more like a cross between pullover and a pulldown. Substitutions: Neutral-Grip Pull-Up, Dual-Handle Lat Pulldown."
            },
            {
              "id": "bodybuildingTransformation-w1-d3-ex2",
              "exerciseId": "Chest-Supported Machine Row",
              "displayName": "Chest-Supported Machine Row",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Flare elbows out at roughly 45┬░ and squeeze your shoulder blades together hard at the top of each rep. Substitutions: Chest-Supported T-Bar Row, Incline Chest-Supported DB Row."
            },
            {
              "id": "bodybuildingTransformation-w1-d3-ex3",
              "exerciseId": "Neutral-Grip Seated Cable Row",
              "displayName": "Neutral-Grip Seated Cable Row",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Focus on squeezing your shoulder blades together, driving your elbows down and back. Substitutions: Helms Row, Meadows Row."
            },
            {
              "id": "bodybuildingTransformation-w1-d3-ex4",
              "exerciseId": "1-Arm 45┬░ Cable Rear Delt Flye",
              "displayName": "1-Arm 45┬░ Cable Rear Delt Flye",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Pause for 1-2 seconds in the squeeze of each rep. Contract the rear delts hard! Substitutions: Rope Face Pull, Reverse Pec Deck."
            },
            {
              "id": "bodybuildingTransformation-w1-d3-ex5",
              "exerciseId": "Machine Shrug",
              "displayName": "Machine Shrug",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Brief pause at the top of the bottom of ROM. Think about pulling your shoulders up to your ears! Substitutions: Cable Paused Shrug-In, DB Shrug."
            },
            {
              "id": "bodybuildingTransformation-w1-d3-ex6",
              "exerciseId": "EZ-Bar Cable Curl",
              "displayName": "EZ-Bar Cable Curl",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Set up the cable at the lowest position. Maintain constant tension on the biceps. Slow, controlled reps! Substitutions: EZ-Bar Curl, DB Curl."
            },
            {
              "id": "bodybuildingTransformation-w1-d3-ex7",
              "exerciseId": "Machine Preacher Curl",
              "displayName": "Machine Preacher Curl",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Smooth, controlled reps. Mind-muscle connection with the biceps. Substitutions: EZ-Bar Preacher Curl, DB Preacher Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w1-d4",
          "name": "Day 4: Push (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w1-d4-ex1",
              "exerciseId": "Barbell Bench Press",
              "displayName": "Barbell Bench Press",
              "warmupSets": "2-4",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "3-5 min",
              "notes": "Early Set. Set up a comfortable arch, quick pause on the chest and explode up on each rep. Substitutions: Machine Chest Press, DB Bench Press."
            },
            {
              "id": "bodybuildingTransformation-w1-d4-ex2",
              "exerciseId": "Machine Shoulder Press",
              "displayName": "Machine Shoulder Press",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Ensure that your elbows break at least 90┬░. Mind-muscle connection with your delts. Smooth, controlled reps. Substitutions: Cable Shoulder Press, Seated DB Shoulder Press."
            },
            {
              "id": "bodybuildingTransformation-w1-d4-ex3",
              "exerciseId": "Bottom-Half DB Flye",
              "displayName": "Bottom-Half DB Flye",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early Set. All reps and sets are to be performed in the bottom half of the ROM. Focus on feeling a deep stretch in your pecs at the bottom of each rep. Substitutions: Bottom-Half Seated Cable Flye, Low-to-High Cable Crossover."
            },
            {
              "id": "bodybuildingTransformation-w1-d4-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Focus on squeezing your lateral delt to move the weight. Substitutions: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w1-d4-ex5",
              "exerciseId": "Overhead Cable Triceps Extension (Bar)",
              "displayName": "Overhead Cable Triceps Extension (Bar)",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Optionally pause for 0.5-1 second in the stretched aspect of each rep. Substitutions: Overhead Cable Triceps Extension (Rope), DB Skull Crusher."
            },
            {
              "id": "bodybuildingTransformation-w1-d4-ex6",
              "exerciseId": "Cable Triceps Kickback",
              "displayName": "Cable Triceps Kickback",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Choose upright or bent over position. Substitutions: DB Triceps Kickback, Bench Dip."
            },
            {
              "id": "bodybuildingTransformation-w1-d4-ex7",
              "exerciseId": "Roman Chair Leg Raise",
              "displayName": "Roman Chair Leg Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-20",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Allow your lower back to round as you curl your legs up. Go until you hit the listed RPE with controlled form. Substitutions: Hanging Leg Raise, Modified Candlestick."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w1-d5",
          "name": "Day 5: Legs (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w1-d5-ex1",
              "exerciseId": "Leg Press",
              "displayName": "Leg Press",
              "warmupSets": "2-4",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Feet lower on the platform for more quad focus. Get as deep as you can without excessive back rounding. Substitutions: Smith Machine Static Lunge, DB Walking Lunge."
            },
            {
              "id": "bodybuildingTransformation-w1-d5-ex2",
              "exerciseId": "Seated Leg Curl",
              "displayName": "Seated Leg Curl",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Lean forward over the machine to get a maximum stretch in your hamstrings. Substitutions: Lying Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w1-d5-ex3",
              "exerciseId": "DB Bulgarian Split Squat",
              "displayName": "DB Bulgarian Split Squat",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Lower all the way down until your front thigh is parallel to the ground. Drive through your front heel on the way up. Substitutions: DB Step-Up, Goblet Squat."
            },
            {
              "id": "bodybuildingTransformation-w1-d5-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Set the seat back as far as it will go while still feeling comfortable. Use a 2-3 second negative. Substitutions: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w1-d5-ex5",
              "exerciseId": "Machine Hip Adduction",
              "displayName": "Machine Hip Adduction",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Mind-muscle connection with your inner thighs. Push them hard! Substitutions: Cable Hip Adduction, Copenhagen Hip Adduction."
            },
            {
              "id": "bodybuildingTransformation-w1-d5-ex6",
              "exerciseId": "Machine Hip Abduction",
              "displayName": "Machine Hip Abduction",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "If possible, use pads to increase the range of motion on the machine. Lean forward and grab onto the machine rails to stretch the glutes further. Substitutions: Cable Hip Abduction, Lateral Band Walk."
            },
            {
              "id": "bodybuildingTransformation-w1-d5-ex7",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Early Set. 1-2 second pause at the bottom of each rep. Instead of just going up onto your toes, think about rolling your ankle back and forth on the balls of your feet. Substitutions: Seated Calf Raise, Leg Press Calf Press."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 2,
      "title": "Week 2: Foundation Block",
      "isDeload": false,
      "days": [
        {
          "id": "bodybuildingTransformation-w2-d1",
          "name": "Day 1: Upper (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w2-d1-ex1",
              "exerciseId": "45┬░ Incline Barbell Press",
              "displayName": "45┬░ Incline Barbell Press",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Early sets. Notes from W1 apply. Substitutions: 45┬░ Incline DB Press, 45┬░ Incline Machine Press."
            },
            {
              "id": "bodybuildingTransformation-w2-d1-ex2",
              "exerciseId": "Cable Crossover Ladder",
              "displayName": "Cable Crossover Ladder",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: Pec Deck, Bottom-Half DB Flye."
            },
            {
              "id": "bodybuildingTransformation-w2-d1-ex3",
              "exerciseId": "Wide-Grip Pull-Up",
              "displayName": "Wide-Grip Pull-Up",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early sets. Notes from W1 apply. Substitutions: Wide-Grip Lat Pulldown, Dual-Handle Lat Pulldown."
            },
            {
              "id": "bodybuildingTransformation-w2-d1-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w2-d1-ex5",
              "exerciseId": "Pendlay Deficit Row",
              "displayName": "Pendlay Deficit Row",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: Smith Machine Row, Single-Arm DB Row."
            },
            {
              "id": "bodybuildingTransformation-w2-d1-ex6",
              "exerciseId": "Overhead Cable Triceps Extension (Bar)",
              "displayName": "Overhead Cable Triceps Extension (Bar)",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: Overhead Cable Triceps Extension (Rope), DB Skull Crusher."
            },
            {
              "id": "bodybuildingTransformation-w2-d1-ex7",
              "exerciseId": "Bayesian Cable Curl",
              "displayName": "Bayesian Cable Curl",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: Seated Super-Bayesian High Cable Curl, Incline DB Stretch Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w2-d2",
          "name": "Day 2: Lower (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w2-d2-ex1",
              "exerciseId": "Lying Leg Curl",
              "displayName": "Lying Leg Curl",
              "warmupSets": "2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Seated Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w2-d2-ex2",
              "exerciseId": "Smith Machine Squat",
              "displayName": "Smith Machine Squat",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Early Sets. Notes from W1 apply. Substitutions: DB Bulgarian Split Squat, High-Bar Back Squat."
            },
            {
              "id": "bodybuildingTransformation-w2-d2-ex3",
              "exerciseId": "Barbell RDL",
              "displayName": "Barbell RDL",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Sets. Notes from W1 apply. Substitutions: DB RDL, Snatch-Grip RDL."
            },
            {
              "id": "bodybuildingTransformation-w2-d2-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w2-d2-ex5",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Seated Calf Raise, Leg Press Calf Press."
            },
            {
              "id": "bodybuildingTransformation-w2-d2-ex6",
              "exerciseId": "Cable Crunch",
              "displayName": "Cable Crunch",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Decline Weighted Crunch, Machine Crunch."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w2-d3",
          "name": "Day 3: Pull (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w2-d3-ex1",
              "exerciseId": "Neutral-Grip Lat Pulldown",
              "displayName": "Neutral-Grip Lat Pulldown",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Neutral-Grip Pull-Up, Dual-Handle Lat Pulldown."
            },
            {
              "id": "bodybuildingTransformation-w2-d3-ex2",
              "exerciseId": "Chest-Supported Machine Row",
              "displayName": "Chest-Supported Machine Row",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Sets. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Chest-Supported T-Bar Row, Incline Chest-Supported DB Row."
            },
            {
              "id": "bodybuildingTransformation-w2-d3-ex3",
              "exerciseId": "Neutral-Grip Seated Cable Row",
              "displayName": "Neutral-Grip Seated Cable Row",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Helms Row, Meadows Row."
            },
            {
              "id": "bodybuildingTransformation-w2-d3-ex4",
              "exerciseId": "1-Arm 45┬░ Cable Rear Delt Flye",
              "displayName": "1-Arm 45┬░ Cable Rear Delt Flye",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Rope Face Pull, Reverse Pec Deck."
            },
            {
              "id": "bodybuildingTransformation-w2-d3-ex5",
              "exerciseId": "Machine Shrug",
              "displayName": "Machine Shrug",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Cable Paused Shrug-In, DB Shrug."
            },
            {
              "id": "bodybuildingTransformation-w2-d3-ex6",
              "exerciseId": "EZ-Bar Cable Curl",
              "displayName": "EZ-Bar Cable Curl",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: EZ-Bar Curl, DB Curl."
            },
            {
              "id": "bodybuildingTransformation-w2-d3-ex7",
              "exerciseId": "Machine Preacher Curl",
              "displayName": "Machine Preacher Curl",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets of 3-5 reps. Substitutions: EZ-Bar Preacher Curl, DB Preacher Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w2-d4",
          "name": "Day 4: Push (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w2-d4-ex1",
              "exerciseId": "Barbell Bench Press",
              "displayName": "Barbell Bench Press",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Early Sets. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Machine Chest Press, DB Bench Press."
            },
            {
              "id": "bodybuildingTransformation-w2-d4-ex2",
              "exerciseId": "Machine Shoulder Press",
              "displayName": "Machine Shoulder Press",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Cable Shoulder Press, Seated DB Shoulder Press."
            },
            {
              "id": "bodybuildingTransformation-w2-d4-ex3",
              "exerciseId": "Bottom-Half DB Flye",
              "displayName": "Bottom-Half DB Flye",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Bottom-Half Seated Cable Flye, Low-to-High Cable Crossover."
            },
            {
              "id": "bodybuildingTransformation-w2-d4-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w2-d4-ex5",
              "exerciseId": "Overhead Cable Triceps Extension (Bar)",
              "displayName": "Overhead Cable Triceps Extension (Bar)",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Overhead Cable Triceps Extension (Rope), DB Skull Crusher."
            },
            {
              "id": "bodybuildingTransformation-w2-d4-ex6",
              "exerciseId": "Cable Triceps Kickback",
              "displayName": "Cable Triceps Kickback",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets of 3-5 reps. Substitutions: DB Triceps Kickback, Bench Dip."
            },
            {
              "id": "bodybuildingTransformation-w2-d4-ex7",
              "exerciseId": "Roman Chair Leg Raise",
              "displayName": "Roman Chair Leg Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-20",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Hanging Leg Raise, Modified Candlestick."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w2-d5",
          "name": "Day 5: Legs (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w2-d5-ex1",
              "exerciseId": "Leg Press",
              "displayName": "Leg Press",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Sets. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Smith Machine Static Lunge, DB Walking Lunge."
            },
            {
              "id": "bodybuildingTransformation-w2-d5-ex2",
              "exerciseId": "Seated Leg Curl",
              "displayName": "Seated Leg Curl",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Lying Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w2-d5-ex3",
              "exerciseId": "DB Bulgarian Split Squat",
              "displayName": "DB Bulgarian Split Squat",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: DB Step-Up, Goblet Squat."
            },
            {
              "id": "bodybuildingTransformation-w2-d5-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w2-d5-ex5",
              "exerciseId": "Machine Hip Adduction",
              "displayName": "Machine Hip Adduction",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Cable Hip Adduction, Copenhagen Hip Adduction."
            },
            {
              "id": "bodybuildingTransformation-w2-d5-ex6",
              "exerciseId": "Machine Hip Abduction",
              "displayName": "Machine Hip Abduction",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Cable Hip Abduction, Lateral Band Walk."
            },
            {
              "id": "bodybuildingTransformation-w2-d5-ex7",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Seated Calf Raise, Leg Press Calf Press."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 3,
      "title": "Week 3: Foundation Block",
      "isDeload": false,
      "days": [
        {
          "id": "bodybuildingTransformation-w3-d1",
          "name": "Day 1: Upper (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w3-d1-ex1",
              "exerciseId": "45┬░ Incline Barbell Press",
              "displayName": "45┬░ Incline Barbell Press",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Early sets. Notes from W1 apply. Substitutions: 45┬░ Incline DB Press, 45┬░ Incline Machine Press."
            },
            {
              "id": "bodybuildingTransformation-w3-d1-ex2",
              "exerciseId": "Cable Crossover Ladder",
              "displayName": "Cable Crossover Ladder",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: Pec Deck, Bottom-Half DB Flye."
            },
            {
              "id": "bodybuildingTransformation-w3-d1-ex3",
              "exerciseId": "Wide-Grip Pull-Up",
              "displayName": "Wide-Grip Pull-Up",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early sets. Notes from W1 apply. Substitutions: Wide-Grip Lat Pulldown, Dual-Handle Lat Pulldown."
            },
            {
              "id": "bodybuildingTransformation-w3-d1-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w3-d1-ex5",
              "exerciseId": "Pendlay Deficit Row",
              "displayName": "Pendlay Deficit Row",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: Smith Machine Row, Single-Arm DB Row."
            },
            {
              "id": "bodybuildingTransformation-w3-d1-ex6",
              "exerciseId": "Overhead Cable Triceps Extension (Bar)",
              "displayName": "Overhead Cable Triceps Extension (Bar)",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: Overhead Cable Triceps Extension (Rope), DB Skull Crusher."
            },
            {
              "id": "bodybuildingTransformation-w3-d1-ex7",
              "exerciseId": "Bayesian Cable Curl",
              "displayName": "Bayesian Cable Curl",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: Seated Super-Bayesian High Cable Curl, Incline DB Stretch Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w3-d2",
          "name": "Day 2: Lower (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w3-d2-ex1",
              "exerciseId": "Lying Leg Curl",
              "displayName": "Lying Leg Curl",
              "warmupSets": "2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Seated Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w3-d2-ex2",
              "exerciseId": "Smith Machine Squat",
              "displayName": "Smith Machine Squat",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Early Sets. Notes from W1 apply. Substitutions: DB Bulgarian Split Squat, High-Bar Back Squat."
            },
            {
              "id": "bodybuildingTransformation-w3-d2-ex3",
              "exerciseId": "Barbell RDL",
              "displayName": "Barbell RDL",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Sets. Notes from W1 apply. Substitutions: DB RDL, Snatch-Grip RDL."
            },
            {
              "id": "bodybuildingTransformation-w3-d2-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w3-d2-ex5",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Seated Calf Raise, Leg Press Calf Press."
            },
            {
              "id": "bodybuildingTransformation-w3-d2-ex6",
              "exerciseId": "Cable Crunch",
              "displayName": "Cable Crunch",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Decline Weighted Crunch, Machine Crunch."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w3-d3",
          "name": "Day 3: Pull (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w3-d3-ex1",
              "exerciseId": "Neutral-Grip Lat Pulldown",
              "displayName": "Neutral-Grip Lat Pulldown",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Neutral-Grip Pull-Up, Dual-Handle Lat Pulldown."
            },
            {
              "id": "bodybuildingTransformation-w3-d3-ex2",
              "exerciseId": "Chest-Supported Machine Row",
              "displayName": "Chest-Supported Machine Row",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Sets. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Chest-Supported T-Bar Row, Incline Chest-Supported DB Row."
            },
            {
              "id": "bodybuildingTransformation-w3-d3-ex3",
              "exerciseId": "Neutral-Grip Seated Cable Row",
              "displayName": "Neutral-Grip Seated Cable Row",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Helms Row, Meadows Row."
            },
            {
              "id": "bodybuildingTransformation-w3-d3-ex4",
              "exerciseId": "1-Arm 45┬░ Cable Rear Delt Flye",
              "displayName": "1-Arm 45┬░ Cable Rear Delt Flye",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Rope Face Pull, Reverse Pec Deck."
            },
            {
              "id": "bodybuildingTransformation-w3-d3-ex5",
              "exerciseId": "Machine Shrug",
              "displayName": "Machine Shrug",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Cable Paused Shrug-In, DB Shrug."
            },
            {
              "id": "bodybuildingTransformation-w3-d3-ex6",
              "exerciseId": "EZ-Bar Cable Curl",
              "displayName": "EZ-Bar Cable Curl",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: EZ-Bar Curl, DB Curl."
            },
            {
              "id": "bodybuildingTransformation-w3-d3-ex7",
              "exerciseId": "Machine Preacher Curl",
              "displayName": "Machine Preacher Curl",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets of 3-5 reps. Substitutions: EZ-Bar Preacher Curl, DB Preacher Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w3-d4",
          "name": "Day 4: Push (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w3-d4-ex1",
              "exerciseId": "Barbell Bench Press",
              "displayName": "Barbell Bench Press",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Early Sets. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Machine Chest Press, DB Bench Press."
            },
            {
              "id": "bodybuildingTransformation-w3-d4-ex2",
              "exerciseId": "Machine Shoulder Press",
              "displayName": "Machine Shoulder Press",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Cable Shoulder Press, Seated DB Shoulder Press."
            },
            {
              "id": "bodybuildingTransformation-w3-d4-ex3",
              "exerciseId": "Bottom-Half DB Flye",
              "displayName": "Bottom-Half DB Flye",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Bottom-Half Seated Cable Flye, Low-to-High Cable Crossover."
            },
            {
              "id": "bodybuildingTransformation-w3-d4-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w3-d4-ex5",
              "exerciseId": "Overhead Cable Triceps Extension (Bar)",
              "displayName": "Overhead Cable Triceps Extension (Bar)",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Overhead Cable Triceps Extension (Rope), DB Skull Crusher."
            },
            {
              "id": "bodybuildingTransformation-w3-d4-ex6",
              "exerciseId": "Cable Triceps Kickback",
              "displayName": "Cable Triceps Kickback",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets of 3-5 reps. Substitutions: DB Triceps Kickback, Bench Dip."
            },
            {
              "id": "bodybuildingTransformation-w3-d4-ex7",
              "exerciseId": "Roman Chair Leg Raise",
              "displayName": "Roman Chair Leg Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-20",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Hanging Leg Raise, Modified Candlestick."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w3-d5",
          "name": "Day 5: Legs (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w3-d5-ex1",
              "exerciseId": "Leg Press",
              "displayName": "Leg Press",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Sets. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Smith Machine Static Lunge, DB Walking Lunge."
            },
            {
              "id": "bodybuildingTransformation-w3-d5-ex2",
              "exerciseId": "Seated Leg Curl",
              "displayName": "Seated Leg Curl",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Lying Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w3-d5-ex3",
              "exerciseId": "DB Bulgarian Split Squat",
              "displayName": "DB Bulgarian Split Squat",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: DB Step-Up, Goblet Squat."
            },
            {
              "id": "bodybuildingTransformation-w3-d5-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w3-d5-ex5",
              "exerciseId": "Machine Hip Adduction",
              "displayName": "Machine Hip Adduction",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Cable Hip Adduction, Copenhagen Hip Adduction."
            },
            {
              "id": "bodybuildingTransformation-w3-d5-ex6",
              "exerciseId": "Machine Hip Abduction",
              "displayName": "Machine Hip Abduction",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Cable Hip Abduction, Lateral Band Walk."
            },
            {
              "id": "bodybuildingTransformation-w3-d5-ex7",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Seated Calf Raise, Leg Press Calf Press."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 4,
      "title": "Week 4: Foundation Block",
      "isDeload": true,
      "days": [
        {
          "id": "bodybuildingTransformation-w4-d1",
          "name": "Day 1: Upper (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w4-d1-ex1",
              "exerciseId": "45┬░ Incline Barbell Press",
              "displayName": "45┬░ Incline Barbell Press",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Early sets. Notes from W1 apply. Substitutions: 45┬░ Incline DB Press, 45┬░ Incline Machine Press."
            },
            {
              "id": "bodybuildingTransformation-w4-d1-ex2",
              "exerciseId": "Cable Crossover Ladder",
              "displayName": "Cable Crossover Ladder",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: Pec Deck, Bottom-Half DB Flye."
            },
            {
              "id": "bodybuildingTransformation-w4-d1-ex3",
              "exerciseId": "Wide-Grip Pull-Up",
              "displayName": "Wide-Grip Pull-Up",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early sets. Notes from W1 apply. Substitutions: Wide-Grip Lat Pulldown, Dual-Handle Lat Pulldown."
            },
            {
              "id": "bodybuildingTransformation-w4-d1-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w4-d1-ex5",
              "exerciseId": "Pendlay Deficit Row",
              "displayName": "Pendlay Deficit Row",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: Smith Machine Row, Single-Arm DB Row."
            },
            {
              "id": "bodybuildingTransformation-w4-d1-ex6",
              "exerciseId": "Overhead Cable Triceps Extension (Bar)",
              "displayName": "Overhead Cable Triceps Extension (Bar)",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: Overhead Cable Triceps Extension (Rope), DB Skull Crusher."
            },
            {
              "id": "bodybuildingTransformation-w4-d1-ex7",
              "exerciseId": "Bayesian Cable Curl",
              "displayName": "Bayesian Cable Curl",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: Seated Super-Bayesian High Cable Curl, Incline DB Stretch Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w4-d2",
          "name": "Day 2: Lower (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w4-d2-ex1",
              "exerciseId": "Lying Leg Curl",
              "displayName": "Lying Leg Curl",
              "warmupSets": "2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Seated Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w4-d2-ex2",
              "exerciseId": "Smith Machine Squat",
              "displayName": "Smith Machine Squat",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Early Sets. Notes from W1 apply. Substitutions: DB Bulgarian Split Squat, High-Bar Back Squat."
            },
            {
              "id": "bodybuildingTransformation-w4-d2-ex3",
              "exerciseId": "Barbell RDL",
              "displayName": "Barbell RDL",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Sets. Notes from W1 apply. Substitutions: DB RDL, Snatch-Grip RDL."
            },
            {
              "id": "bodybuildingTransformation-w4-d2-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w4-d2-ex5",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Seated Calf Raise, Leg Press Calf Press."
            },
            {
              "id": "bodybuildingTransformation-w4-d2-ex6",
              "exerciseId": "Cable Crunch",
              "displayName": "Cable Crunch",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Decline Weighted Crunch, Machine Crunch."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w4-d3",
          "name": "Day 3: Pull (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w4-d3-ex1",
              "exerciseId": "Neutral-Grip Lat Pulldown",
              "displayName": "Neutral-Grip Lat Pulldown",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Neutral-Grip Pull-Up, Dual-Handle Lat Pulldown."
            },
            {
              "id": "bodybuildingTransformation-w4-d3-ex2",
              "exerciseId": "Chest-Supported Machine Row",
              "displayName": "Chest-Supported Machine Row",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Sets. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Chest-Supported T-Bar Row, Incline Chest-Supported DB Row."
            },
            {
              "id": "bodybuildingTransformation-w4-d3-ex3",
              "exerciseId": "Neutral-Grip Seated Cable Row",
              "displayName": "Neutral-Grip Seated Cable Row",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Helms Row, Meadows Row."
            },
            {
              "id": "bodybuildingTransformation-w4-d3-ex4",
              "exerciseId": "1-Arm 45┬░ Cable Rear Delt Flye",
              "displayName": "1-Arm 45┬░ Cable Rear Delt Flye",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Rope Face Pull, Reverse Pec Deck."
            },
            {
              "id": "bodybuildingTransformation-w4-d3-ex5",
              "exerciseId": "Machine Shrug",
              "displayName": "Machine Shrug",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Cable Paused Shrug-In, DB Shrug."
            },
            {
              "id": "bodybuildingTransformation-w4-d3-ex6",
              "exerciseId": "EZ-Bar Cable Curl",
              "displayName": "EZ-Bar Cable Curl",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: EZ-Bar Curl, DB Curl."
            },
            {
              "id": "bodybuildingTransformation-w4-d3-ex7",
              "exerciseId": "Machine Preacher Curl",
              "displayName": "Machine Preacher Curl",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets of 3-5 reps. Substitutions: EZ-Bar Preacher Curl, DB Preacher Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w4-d4",
          "name": "Day 4: Push (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w4-d4-ex1",
              "exerciseId": "Barbell Bench Press",
              "displayName": "Barbell Bench Press",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Early Sets. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Machine Chest Press, DB Bench Press."
            },
            {
              "id": "bodybuildingTransformation-w4-d4-ex2",
              "exerciseId": "Machine Shoulder Press",
              "displayName": "Machine Shoulder Press",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Cable Shoulder Press, Seated DB Shoulder Press."
            },
            {
              "id": "bodybuildingTransformation-w4-d4-ex3",
              "exerciseId": "Bottom-Half DB Flye",
              "displayName": "Bottom-Half DB Flye",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Bottom-Half Seated Cable Flye, Low-to-High Cable Crossover."
            },
            {
              "id": "bodybuildingTransformation-w4-d4-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w4-d4-ex5",
              "exerciseId": "Overhead Cable Triceps Extension (Bar)",
              "displayName": "Overhead Cable Triceps Extension (Bar)",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Overhead Cable Triceps Extension (Rope), DB Skull Crusher."
            },
            {
              "id": "bodybuildingTransformation-w4-d4-ex6",
              "exerciseId": "Cable Triceps Kickback",
              "displayName": "Cable Triceps Kickback",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets of 3-5 reps. Substitutions: DB Triceps Kickback, Bench Dip."
            },
            {
              "id": "bodybuildingTransformation-w4-d4-ex7",
              "exerciseId": "Roman Chair Leg Raise",
              "displayName": "Roman Chair Leg Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-20",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Hanging Leg Raise, Modified Candlestick."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w4-d5",
          "name": "Day 5: Legs (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w4-d5-ex1",
              "exerciseId": "Leg Press",
              "displayName": "Leg Press",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Sets. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Smith Machine Static Lunge, DB Walking Lunge."
            },
            {
              "id": "bodybuildingTransformation-w4-d5-ex2",
              "exerciseId": "Seated Leg Curl",
              "displayName": "Seated Leg Curl",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Lying Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w4-d5-ex3",
              "exerciseId": "DB Bulgarian Split Squat",
              "displayName": "DB Bulgarian Split Squat",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: DB Step-Up, Goblet Squat."
            },
            {
              "id": "bodybuildingTransformation-w4-d5-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w4-d5-ex5",
              "exerciseId": "Machine Hip Adduction",
              "displayName": "Machine Hip Adduction",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Cable Hip Adduction, Copenhagen Hip Adduction."
            },
            {
              "id": "bodybuildingTransformation-w4-d5-ex6",
              "exerciseId": "Machine Hip Abduction",
              "displayName": "Machine Hip Abduction",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Cable Hip Abduction, Lateral Band Walk."
            },
            {
              "id": "bodybuildingTransformation-w4-d5-ex7",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Seated Calf Raise, Leg Press Calf Press."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 5,
      "title": "Week 5: Foundation Block",
      "isDeload": false,
      "days": [
        {
          "id": "bodybuildingTransformation-w5-d1",
          "name": "Day 1: Upper (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w5-d1-ex1",
              "exerciseId": "45┬░ Incline Barbell Press",
              "displayName": "45┬░ Incline Barbell Press",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Early sets. Notes from W1 apply. Substitutions: 45┬░ Incline DB Press, 45┬░ Incline Machine Press."
            },
            {
              "id": "bodybuildingTransformation-w5-d1-ex2",
              "exerciseId": "Cable Crossover Ladder",
              "displayName": "Cable Crossover Ladder",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: Pec Deck, Bottom-Half DB Flye."
            },
            {
              "id": "bodybuildingTransformation-w5-d1-ex3",
              "exerciseId": "Wide-Grip Pull-Up",
              "displayName": "Wide-Grip Pull-Up",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early sets. Notes from W1 apply. Substitutions: Wide-Grip Lat Pulldown, Dual-Handle Lat Pulldown."
            },
            {
              "id": "bodybuildingTransformation-w5-d1-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w5-d1-ex5",
              "exerciseId": "Pendlay Deficit Row",
              "displayName": "Pendlay Deficit Row",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: Smith Machine Row, Single-Arm DB Row."
            },
            {
              "id": "bodybuildingTransformation-w5-d1-ex6",
              "exerciseId": "Overhead Cable Triceps Extension (Bar)",
              "displayName": "Overhead Cable Triceps Extension (Bar)",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: Overhead Cable Triceps Extension (Rope), DB Skull Crusher."
            },
            {
              "id": "bodybuildingTransformation-w5-d1-ex7",
              "exerciseId": "Bayesian Cable Curl",
              "displayName": "Bayesian Cable Curl",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early set. Notes from W1 apply. Substitutions: Seated Super-Bayesian High Cable Curl, Incline DB Stretch Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w5-d2",
          "name": "Day 2: Lower (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w5-d2-ex1",
              "exerciseId": "Lying Leg Curl",
              "displayName": "Lying Leg Curl",
              "warmupSets": "2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Seated Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w5-d2-ex2",
              "exerciseId": "Smith Machine Squat",
              "displayName": "Smith Machine Squat",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Early Sets. Notes from W1 apply. Substitutions: DB Bulgarian Split Squat, High-Bar Back Squat."
            },
            {
              "id": "bodybuildingTransformation-w5-d2-ex3",
              "exerciseId": "Barbell RDL",
              "displayName": "Barbell RDL",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Sets. Notes from W1 apply. Substitutions: DB RDL, Snatch-Grip RDL."
            },
            {
              "id": "bodybuildingTransformation-w5-d2-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w5-d2-ex5",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Seated Calf Raise, Leg Press Calf Press."
            },
            {
              "id": "bodybuildingTransformation-w5-d2-ex6",
              "exerciseId": "Cable Crunch",
              "displayName": "Cable Crunch",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Decline Weighted Crunch, Machine Crunch."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w5-d3",
          "name": "Day 3: Pull (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w5-d3-ex1",
              "exerciseId": "Neutral-Grip Lat Pulldown",
              "displayName": "Neutral-Grip Lat Pulldown",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Neutral-Grip Pull-Up, Dual-Handle Lat Pulldown."
            },
            {
              "id": "bodybuildingTransformation-w5-d3-ex2",
              "exerciseId": "Chest-Supported Machine Row",
              "displayName": "Chest-Supported Machine Row",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Sets. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Chest-Supported T-Bar Row, Incline Chest-Supported DB Row."
            },
            {
              "id": "bodybuildingTransformation-w5-d3-ex3",
              "exerciseId": "Neutral-Grip Seated Cable Row",
              "displayName": "Neutral-Grip Seated Cable Row",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Helms Row, Meadows Row."
            },
            {
              "id": "bodybuildingTransformation-w5-d3-ex4",
              "exerciseId": "1-Arm 45┬░ Cable Rear Delt Flye",
              "displayName": "1-Arm 45┬░ Cable Rear Delt Flye",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Rope Face Pull, Reverse Pec Deck."
            },
            {
              "id": "bodybuildingTransformation-w5-d3-ex5",
              "exerciseId": "Machine Shrug",
              "displayName": "Machine Shrug",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Cable Paused Shrug-In, DB Shrug."
            },
            {
              "id": "bodybuildingTransformation-w5-d3-ex6",
              "exerciseId": "EZ-Bar Cable Curl",
              "displayName": "EZ-Bar Cable Curl",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: EZ-Bar Curl, DB Curl."
            },
            {
              "id": "bodybuildingTransformation-w5-d3-ex7",
              "exerciseId": "Machine Preacher Curl",
              "displayName": "Machine Preacher Curl",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets of 3-5 reps. Substitutions: EZ-Bar Preacher Curl, DB Preacher Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w5-d4",
          "name": "Day 4: Push (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w5-d4-ex1",
              "exerciseId": "Barbell Bench Press",
              "displayName": "Barbell Bench Press",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Early Sets. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Machine Chest Press, DB Bench Press."
            },
            {
              "id": "bodybuildingTransformation-w5-d4-ex2",
              "exerciseId": "Machine Shoulder Press",
              "displayName": "Machine Shoulder Press",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Cable Shoulder Press, Seated DB Shoulder Press."
            },
            {
              "id": "bodybuildingTransformation-w5-d4-ex3",
              "exerciseId": "Bottom-Half DB Flye",
              "displayName": "Bottom-Half DB Flye",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Bottom-Half Seated Cable Flye, Low-to-High Cable Crossover."
            },
            {
              "id": "bodybuildingTransformation-w5-d4-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w5-d4-ex5",
              "exerciseId": "Overhead Cable Triceps Extension (Bar)",
              "displayName": "Overhead Cable Triceps Extension (Bar)",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Overhead Cable Triceps Extension (Rope), DB Skull Crusher."
            },
            {
              "id": "bodybuildingTransformation-w5-d4-ex6",
              "exerciseId": "Cable Triceps Kickback",
              "displayName": "Cable Triceps Kickback",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets of 3-5 reps. Substitutions: DB Triceps Kickback, Bench Dip."
            },
            {
              "id": "bodybuildingTransformation-w5-d4-ex7",
              "exerciseId": "Roman Chair Leg Raise",
              "displayName": "Roman Chair Leg Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-20",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Hanging Leg Raise, Modified Candlestick."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w5-d5",
          "name": "Day 5: Legs (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w5-d5-ex1",
              "exerciseId": "Leg Press",
              "displayName": "Leg Press",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Sets. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Smith Machine Static Lunge, DB Walking Lunge."
            },
            {
              "id": "bodybuildingTransformation-w5-d5-ex2",
              "exerciseId": "Seated Leg Curl",
              "displayName": "Seated Leg Curl",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Lying Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w5-d5-ex3",
              "exerciseId": "DB Bulgarian Split Squat",
              "displayName": "DB Bulgarian Split Squat",
              "warmupSets": "2-3",
              "workingSets": 1,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: DB Step-Up, Goblet Squat."
            },
            {
              "id": "bodybuildingTransformation-w5-d5-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w5-d5-ex5",
              "exerciseId": "Machine Hip Adduction",
              "displayName": "Machine Hip Adduction",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Cable Hip Adduction, Copenhagen Hip Adduction."
            },
            {
              "id": "bodybuildingTransformation-w5-d5-ex6",
              "exerciseId": "Machine Hip Abduction",
              "displayName": "Machine Hip Abduction",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Last Set Intensity: Failure. Notes from W1 apply. Substitutions: Cable Hip Abduction, Lateral Band Walk."
            },
            {
              "id": "bodybuildingTransformation-w5-d5-ex7",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1-2",
              "workingSets": 1,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Early Set. Notes from W1 apply. Substitutions: Seated Calf Raise, Leg Press Calf Press."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 6,
      "title": "Week 6: Ramping Block",
      "isDeload": false,
      "days": [
        {
          "id": "bodybuildingTransformation-w6-d1",
          "name": "Day 1: Upper (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w6-d1-ex1",
              "exerciseId": "45┬░ Incline DB Press",
              "displayName": "45┬░ Incline DB Press",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 6-7",
              "restPeriod": "3-5 min",
              "notes": "Last set at RPE ~7-8. 1 second pause at bottom. Subs: 45┬░ Incline Barbell Press, 45┬░ Incline Machine Press."
            },
            {
              "id": "bodybuildingTransformation-w6-d1-ex2",
              "exerciseId": "Pec Deck",
              "displayName": "Pec Deck",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. Focus on bringing elbows together. Subs: Cable Crossover Ladder, Bottom-Half DB Flye."
            },
            {
              "id": "bodybuildingTransformation-w6-d1-ex3",
              "exerciseId": "Dual-Handle Lat Pulldown",
              "displayName": "Dual-Handle Lat Pulldown",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 6-7",
              "restPeriod": "2-3 min",
              "notes": "Last set at RPE ~7-8. Lean back ~15┬░, drive elbows down. Subs: Wide-Grip Lat Pulldown, Wide-Grip Pull-Up."
            },
            {
              "id": "bodybuildingTransformation-w6-d1-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. Squeeze lateral delt. Subs: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w6-d1-ex5",
              "exerciseId": "Smith Machine Row",
              "displayName": "Smith Machine Row",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "2-3 min",
              "notes": "Last set at RPE ~8-9. Squeeze shoulder blades, elbows at ~45┬░. Subs: Pendlay Deficit Row, Single-Arm DB Row."
            },
            {
              "id": "bodybuildingTransformation-w6-d1-ex6",
              "exerciseId": "Overhead Cable Triceps Extension (Bar)",
              "displayName": "Overhead Cable Triceps Extension (Bar)",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. Optional 0.5-1s pause. Subs: Overhead Cable Triceps Extension (Rope), DB Skull Crusher."
            },
            {
              "id": "bodybuildingTransformation-w6-d1-ex7",
              "exerciseId": "Bayesian Cable Curl",
              "displayName": "Bayesian Cable Curl",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. Imbalance protocol applies. Subs: Seated Super-Bayesian High Cable Curl, Incline DB Stretch Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w6-d2",
          "name": "Day 2: Lower (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w6-d2-ex1",
              "exerciseId": "Lying Leg Curl",
              "displayName": "Lying Leg Curl",
              "warmupSets": "2",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. Get biggest stretch. Subs: Seated Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w6-d2-ex2",
              "exerciseId": "Smith Machine Static Lunge w/ Elevated Front Foot",
              "displayName": "Smith Machine Static Lunge w/ Elevated Front Foot",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 6-7",
              "restPeriod": "3-5 min",
              "notes": "Last set at RPE ~7-8. Elevate front foot on small box. Subs: DB Bulgarian Split Squat, High-Bar Back Squat."
            },
            {
              "id": "bodybuildingTransformation-w6-d2-ex3",
              "exerciseId": "45┬░ Hyperextension",
              "displayName": "45┬░ Hyperextension",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 6-7",
              "restPeriod": "2-3 min",
              "notes": "Last set at RPE ~7-8. Squeeze glutes hard at top. Subs: Glute-Ham Raise, Cable Pull-Through."
            },
            {
              "id": "bodybuildingTransformation-w6-d2-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. Set seat back far. 2-3s negative. Subs: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w6-d2-ex5",
              "exerciseId": "Leg Press Calf Press",
              "displayName": "Leg Press Calf Press",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. 1-2s pause at bottom. Subs: Seated Calf Raise, Standing Calf Raise."
            },
            {
              "id": "bodybuildingTransformation-w6-d2-ex6",
              "exerciseId": "Machine Crunch",
              "displayName": "Machine Crunch",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. Round lower back. Subs: Decline Weighted Crunch, Cable Crunch."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w6-d3",
          "name": "Day 3: Pull (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w6-d3-ex1",
              "exerciseId": "Lean-Back Lat Pulldown",
              "displayName": "Lean-Back Lat Pulldown",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 6-7",
              "restPeriod": "2-3 min",
              "notes": "Last set at RPE ~7-8. Lean back ~15-30┬░. Subs: Lean-Back Machine Pulldown, Pull-Up."
            },
            {
              "id": "bodybuildingTransformation-w6-d3-ex2",
              "exerciseId": "Chest-Supported T-Bar Row",
              "displayName": "Chest-Supported T-Bar Row",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 6-7",
              "restPeriod": "2-3 min",
              "notes": "Last set at RPE ~7-8. Flare elbows 45┬░, squeeze blades. Subs: Chest-Supported Machine Row, Incline Chest-Supported DB Row."
            },
            {
              "id": "bodybuildingTransformation-w6-d3-ex3",
              "exerciseId": "Dual-Handle Elbows-Out Cable Row",
              "displayName": "Dual-Handle Elbows-Out Cable Row",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "2-3 min",
              "notes": "Last set at RPE ~8-9. Flare elbows out ~45┬░. Subs: Arm-Out Single-Arm DB Row, Meadows Row."
            },
            {
              "id": "bodybuildingTransformation-w6-d3-ex4",
              "exerciseId": "1-Arm 45┬░ Cable Rear Delt Flye",
              "displayName": "1-Arm 45┬░ Cable Rear Delt Flye",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. 1-2s pause in squeeze. Subs: Rope Face Pull, Reverse Pec Deck."
            },
            {
              "id": "bodybuildingTransformation-w6-d3-ex5",
              "exerciseId": "Cable Paused Shrug-In",
              "displayName": "Cable Paused Shrug-In",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. Shrug up and in. 1-2s pause top & bottom. Subs: Machine Shrug, DB Shrug."
            },
            {
              "id": "bodybuildingTransformation-w6-d3-ex6",
              "exerciseId": "Cable Rope Hammer Curl",
              "displayName": "Cable Rope Hammer Curl",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. Squeeze rope hard. Subs: DB Hammer Curl, Hammer Preacher Curl."
            },
            {
              "id": "bodybuildingTransformation-w6-d3-ex7",
              "exerciseId": "DB Concentration Curl",
              "displayName": "DB Concentration Curl",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Smooth, controlled reps. Subs: Concentration Cable Curl, DB Preacher Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w6-d4",
          "name": "Day 4: Push (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w6-d4-ex1",
              "exerciseId": "Machine Chest Press",
              "displayName": "Machine Chest Press",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 6-7",
              "restPeriod": "3-5 min",
              "notes": "Last set at RPE ~7-8. 1s pause at bottom. Subs: Barbell Bench Press, DB Bench Press."
            },
            {
              "id": "bodybuildingTransformation-w6-d4-ex2",
              "exerciseId": "Seated DB Shoulder Press",
              "displayName": "Seated DB Shoulder Press",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 6-7",
              "restPeriod": "2-3 min",
              "notes": "Last set at RPE ~7-8. Elbows break 90┬░. Subs: Cable Shoulder Press, Machine Shoulder Press."
            },
            {
              "id": "bodybuildingTransformation-w6-d4-ex3",
              "exerciseId": "Bottom-Half Seated Cable Flye",
              "displayName": "Bottom-Half Seated Cable Flye",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. Bottom half ROM, deep stretch. Subs: Bottom-Half DB Flye, Low-to-High Cable Crossover."
            },
            {
              "id": "bodybuildingTransformation-w6-d4-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. Squeeze lateral delt. Subs: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w6-d4-ex5",
              "exerciseId": "EZ-Bar Skull Crusher",
              "displayName": "EZ-Bar Skull Crusher",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. Optional 0.5-1s pause. Subs: DB Skull Crusher, Katana Triceps Extension."
            },
            {
              "id": "bodybuildingTransformation-w6-d4-ex6",
              "exerciseId": "Triceps Pressdown (Bar)",
              "displayName": "Triceps Pressdown (Bar)",
              "warmupSets": "1",
              "workingSets": 1,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8-9",
              "lastSetRpe": "RPE 8-9",
              "restPeriod": "1-2 min",
              "notes": "Squeeze triceps to move weight. Subs: Triceps Pressdown (Rope), DB Triceps Kickback."
            },
            {
              "id": "bodybuildingTransformation-w6-d4-ex7",
              "exerciseId": "Ab Wheel Rollout",
              "displayName": "Ab Wheel Rollout",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. Progressively increase ROM. Subs: Swiss Ball Rollout, Long-Lever Plank."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w6-d5",
          "name": "Day 5: Legs (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w6-d5-ex1",
              "exerciseId": "Hack Squat",
              "displayName": "Hack Squat",
              "warmupSets": "2-4",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 6-7",
              "restPeriod": "2-3 min",
              "notes": "Last set at RPE ~7-8. Controlled negative, explode positive. Subs: Leg Press, DB Walking Lunge."
            },
            {
              "id": "bodybuildingTransformation-w6-d5-ex2",
              "exerciseId": "Seated Leg Curl",
              "displayName": "Seated Leg Curl",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. Lean forward for max stretch. Subs: Lying Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w6-d5-ex3",
              "exerciseId": "Walking Lunge",
              "displayName": "Walking Lunge",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 6-7",
              "lastSetRpe": "RPE 6-7",
              "restPeriod": "2-3 min",
              "notes": "Last set at RPE ~7-8. Medium strides, minimize back leg contribution. Subs: Smith Machine Static Lunge, DB Static Lunge."
            },
            {
              "id": "bodybuildingTransformation-w6-d5-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. Set seat back. 2-3s negative. Subs: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w6-d5-ex5",
              "exerciseId": "Machine Hip Adduction",
              "displayName": "Machine Hip Adduction",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. Mind-muscle connection. Subs: Cable Hip Adduction, Copenhagen Hip Adduction."
            },
            {
              "id": "bodybuildingTransformation-w6-d5-ex6",
              "exerciseId": "Machine Hip Abduction",
              "displayName": "Machine Hip Abduction",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. Use pads to increase ROM. Subs: Cable Hip Adduction, Lateral Band Walk."
            },
            {
              "id": "bodybuildingTransformation-w6-d5-ex7",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Last set at RPE ~8-9. 1-2s pause at bottom. Subs: Seated Calf Raise, Leg Press Calf Press."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 7,
      "title": "Week 7: Ramping Block",
      "isDeload": false,
      "days": [
        {
          "id": "bodybuildingTransformation-w7-d1",
          "name": "Day 1: Upper (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w7-d1-ex1",
              "exerciseId": "45┬░ Incline DB Press",
              "displayName": "45┬░ Incline DB Press",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. 1 second pause at bottom. Subs: 45┬░ Incline Barbell Press, 45┬░ Incline Machine Press."
            },
            {
              "id": "bodybuildingTransformation-w7-d1-ex2",
              "exerciseId": "Pec Deck",
              "displayName": "Pec Deck",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Focus on bringing elbows together. Subs: Cable Crossover Ladder, Bottom-Half DB Flye."
            },
            {
              "id": "bodybuildingTransformation-w7-d1-ex3",
              "exerciseId": "Dual-Handle Lat Pulldown",
              "displayName": "Dual-Handle Lat Pulldown",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Lean back ~15┬░, drive elbows down. Subs: Wide-Grip Lat Pulldown, Wide-Grip Pull-Up."
            },
            {
              "id": "bodybuildingTransformation-w7-d1-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Squeeze lateral delt. Subs: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w7-d1-ex5",
              "exerciseId": "Smith Machine Row",
              "displayName": "Smith Machine Row",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure + LLPs. Take all sets to failure. On odd weeks (7,9,11), extend last set with Lengthened Partials. Subs: Pendlay Deficit Row, Single-Arm DB Row."
            },
            {
              "id": "bodybuildingTransformation-w7-d1-ex6",
              "exerciseId": "Overhead Cable Triceps Extension (Bar)",
              "displayName": "Overhead Cable Triceps Extension (Bar)",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Optional 0.5-1s pause. Subs: Overhead Cable Triceps Extension (Rope), DB Skull Crusher."
            },
            {
              "id": "bodybuildingTransformation-w7-d1-ex7",
              "exerciseId": "Bayesian Cable Curl",
              "displayName": "Bayesian Cable Curl",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Imbalance protocol applies. Subs: Seated Super-Bayesian High Cable Curl, Incline DB Stretch Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w7-d2",
          "name": "Day 2: Lower (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w7-d2-ex1",
              "exerciseId": "Lying Leg Curl",
              "displayName": "Lying Leg Curl",
              "warmupSets": "2",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure + LLPs. Take all sets to failure. On odd weeks (7,9,11), extend last set with LLPs. Subs: Seated Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w7-d2-ex2",
              "exerciseId": "Smith Machine Static Lunge w/ Elevated Front Foot",
              "displayName": "Smith Machine Static Lunge w/ Elevated Front Foot",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Elevate front foot on small box. Subs: DB Bulgarian Split Squat, High-Bar Back Squat."
            },
            {
              "id": "bodybuildingTransformation-w7-d2-ex3",
              "exerciseId": "45┬░ Hyperextension",
              "displayName": "45┬░ Hyperextension",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Squeeze glutes hard at top. Subs: Glute-Ham Raise, Cable Pull-Through."
            },
            {
              "id": "bodybuildingTransformation-w7-d2-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Set seat back far. 2-3s negative. Subs: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w7-d2-ex5",
              "exerciseId": "Leg Press Calf Press",
              "displayName": "Leg Press Calf Press",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Static Stretch (30s). Take last set to failure, then hold a deep stretch for 30s. Subs: Seated Calf Raise, Standing Calf Raise."
            },
            {
              "id": "bodybuildingTransformation-w7-d2-ex6",
              "exerciseId": "Machine Crunch",
              "displayName": "Machine Crunch",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Round lower back. Subs: Decline Weighted Crunch, Cable Crunch."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w7-d3",
          "name": "Day 3: Pull (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w7-d3-ex1",
              "exerciseId": "Lean-Back Lat Pulldown",
              "displayName": "Lean-Back Lat Pulldown",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Lean back ~15-30┬░. Subs: Lean-Back Machine Pulldown, Pull-Up."
            },
            {
              "id": "bodybuildingTransformation-w7-d3-ex2",
              "exerciseId": "Chest-Supported T-Bar Row",
              "displayName": "Chest-Supported T-Bar Row",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Flare elbows 45┬░, squeeze blades. Subs: Chest-Supported Machine Row, Incline Chest-Supported DB Row."
            },
            {
              "id": "bodybuildingTransformation-w7-d3-ex3",
              "exerciseId": "Dual-Handle Elbows-Out Cable Row",
              "displayName": "Dual-Handle Elbows-Out Cable Row",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure + LLPs. Take all sets to failure. On odd weeks (7,9,11), extend last set with LLPs. Flare elbows out ~45┬░. Subs: Arm-Out Single-Arm DB Row, Meadows Row."
            },
            {
              "id": "bodybuildingTransformation-w7-d3-ex4",
              "exerciseId": "1-Arm 45┬░ Cable Rear Delt Flye",
              "displayName": "1-Arm 45┬░ Cable Rear Delt Flye",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. 1-2s pause in squeeze. Subs: Rope Face Pull, Reverse Pec Deck."
            },
            {
              "id": "bodybuildingTransformation-w7-d3-ex5",
              "exerciseId": "Cable Paused Shrug-In",
              "displayName": "Cable Paused Shrug-In",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Shrug up and in. 1-2s pause top & bottom. Subs: Machine Shrug, DB Shrug."
            },
            {
              "id": "bodybuildingTransformation-w7-d3-ex6",
              "exerciseId": "Cable Rope Hammer Curl",
              "displayName": "Cable Rope Hammer Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Squeeze rope hard. Subs: DB Hammer Curl, Hammer Preacher Curl."
            },
            {
              "id": "bodybuildingTransformation-w7-d3-ex7",
              "exerciseId": "DB Concentration Curl",
              "displayName": "DB Concentration Curl",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Subs: Concentration Cable Curl, DB Preacher Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w7-d4",
          "name": "Day 4: Push (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w7-d4-ex1",
              "exerciseId": "Machine Chest Press",
              "displayName": "Machine Chest Press",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. 1s pause at bottom. Subs: Barbell Bench Press, DB Bench Press."
            },
            {
              "id": "bodybuildingTransformation-w7-d4-ex2",
              "exerciseId": "Seated DB Shoulder Press",
              "displayName": "Seated DB Shoulder Press",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Elbows break 90┬░. Subs: Cable Shoulder Press, Machine Shoulder Press."
            },
            {
              "id": "bodybuildingTransformation-w7-d4-ex3",
              "exerciseId": "Bottom-Half Seated Cable Flye",
              "displayName": "Bottom-Half Seated Cable Flye",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Bottom half ROM, deep stretch. Subs: Bottom-Half DB Flye, Low-to-High Cable Crossover."
            },
            {
              "id": "bodybuildingTransformation-w7-d4-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Squeeze lateral delt. Subs: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w7-d4-ex5",
              "exerciseId": "EZ-Bar Skull Crusher",
              "displayName": "EZ-Bar Skull Crusher",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Optional 0.5-1s pause. Subs: DB Skull Crusher, Katana Triceps Extension."
            },
            {
              "id": "bodybuildingTransformation-w7-d4-ex6",
              "exerciseId": "Triceps Pressdown (Bar)",
              "displayName": "Triceps Pressdown (Bar)",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Squeeze triceps. Subs: Triceps Pressdown (Rope), DB Triceps Kickback."
            },
            {
              "id": "bodybuildingTransformation-w7-d4-ex7",
              "exerciseId": "Ab Wheel Rollout",
              "displayName": "Ab Wheel Rollout",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Progressively increase ROM. Subs: Swiss Ball Rollout, Long-Lever Plank."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w7-d5",
          "name": "Day 5: Legs (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w7-d5-ex1",
              "exerciseId": "Hack Squat",
              "displayName": "Hack Squat",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Controlled negative, explode positive. Subs: Leg Press, DB Walking Lunge."
            },
            {
              "id": "bodybuildingTransformation-w7-d5-ex2",
              "exerciseId": "Seated Leg Curl",
              "displayName": "Seated Leg Curl",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure + LLPs. Take all sets to failure. On odd weeks (7,9,11), extend last set with LLPs. Lean forward for max stretch. Subs: Lying Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w7-d5-ex3",
              "exerciseId": "Walking Lunge",
              "displayName": "Walking Lunge",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Medium strides. Subs: Smith Machine Static Lunge, DB Static Lunge."
            },
            {
              "id": "bodybuildingTransformation-w7-d5-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Set seat back. 2-3s negative. Subs: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w7-d5-ex5",
              "exerciseId": "Machine Hip Adduction",
              "displayName": "Machine Hip Adduction",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Mind-muscle connection. Subs: Cable Hip Adduction, Copenhagen Hip Adduction."
            },
            {
              "id": "bodybuildingTransformation-w7-d5-ex6",
              "exerciseId": "Machine Hip Abduction",
              "displayName": "Machine Hip Abduction",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Use pads to increase ROM. Subs: Cable Hip Adduction, Lateral Band Walk."
            },
            {
              "id": "bodybuildingTransformation-w7-d5-ex7",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Static Stretch (30s). Take last set to failure, then hold a deep stretch for 30s. 1-2s pause at bottom. Subs: Seated Calf Raise, Leg Press Calf Press."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 8,
      "title": "Week 8: Ramping Block",
      "isDeload": true,
      "days": [
        {
          "id": "bodybuildingTransformation-w8-d1",
          "name": "Day 1: Upper (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w8-d1-ex1",
              "exerciseId": "45┬░ Incline DB Press",
              "displayName": "45┬░ Incline DB Press",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. 1 second pause at bottom. Subs: 45┬░ Incline Barbell Press, 45┬░ Incline Machine Press."
            },
            {
              "id": "bodybuildingTransformation-w8-d1-ex2",
              "exerciseId": "Pec Deck",
              "displayName": "Pec Deck",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Focus on bringing elbows together. Subs: Cable Crossover Ladder, Bottom-Half DB Flye."
            },
            {
              "id": "bodybuildingTransformation-w8-d1-ex3",
              "exerciseId": "Dual-Handle Lat Pulldown",
              "displayName": "Dual-Handle Lat Pulldown",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Lean back ~15┬░, drive elbows down. Subs: Wide-Grip Lat Pulldown, Wide-Grip Pull-Up."
            },
            {
              "id": "bodybuildingTransformation-w8-d1-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Squeeze lateral delt. Subs: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w8-d1-ex5",
              "exerciseId": "Smith Machine Row",
              "displayName": "Smith Machine Row",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. On odd weeks (7,9,11), extend last set with Lengthened Partials. Subs: Pendlay Deficit Row, Single-Arm DB Row."
            },
            {
              "id": "bodybuildingTransformation-w8-d1-ex6",
              "exerciseId": "Overhead Cable Triceps Extension (Bar)",
              "displayName": "Overhead Cable Triceps Extension (Bar)",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Optional 0.5-1s pause. Subs: Overhead Cable Triceps Extension (Rope), DB Skull Crusher."
            },
            {
              "id": "bodybuildingTransformation-w8-d1-ex7",
              "exerciseId": "Bayesian Cable Curl",
              "displayName": "Bayesian Cable Curl",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Imbalance protocol applies. Subs: Seated Super-Bayesian High Cable Curl, Incline DB Stretch Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w8-d2",
          "name": "Day 2: Lower (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w8-d2-ex1",
              "exerciseId": "Lying Leg Curl",
              "displayName": "Lying Leg Curl",
              "warmupSets": "2",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. On odd weeks (7,9,11), extend last set with LLPs. Subs: Seated Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w8-d2-ex2",
              "exerciseId": "Smith Machine Static Lunge w/ Elevated Front Foot",
              "displayName": "Smith Machine Static Lunge w/ Elevated Front Foot",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Elevate front foot on small box. Subs: DB Bulgarian Split Squat, High-Bar Back Squat."
            },
            {
              "id": "bodybuildingTransformation-w8-d2-ex3",
              "exerciseId": "45┬░ Hyperextension",
              "displayName": "45┬░ Hyperextension",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Squeeze glutes hard at top. Subs: Glute-Ham Raise, Cable Pull-Through."
            },
            {
              "id": "bodybuildingTransformation-w8-d2-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Set seat back far. 2-3s negative. Subs: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w8-d2-ex5",
              "exerciseId": "Leg Press Calf Press",
              "displayName": "Leg Press Calf Press",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Static Stretch (30s). Take last set to failure, then hold a deep stretch for 30s. Subs: Seated Calf Raise, Standing Calf Raise."
            },
            {
              "id": "bodybuildingTransformation-w8-d2-ex6",
              "exerciseId": "Machine Crunch",
              "displayName": "Machine Crunch",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Round lower back. Subs: Decline Weighted Crunch, Cable Crunch."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w8-d3",
          "name": "Day 3: Pull (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w8-d3-ex1",
              "exerciseId": "Lean-Back Lat Pulldown",
              "displayName": "Lean-Back Lat Pulldown",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Lean back ~15-30┬░. Subs: Lean-Back Machine Pulldown, Pull-Up."
            },
            {
              "id": "bodybuildingTransformation-w8-d3-ex2",
              "exerciseId": "Chest-Supported T-Bar Row",
              "displayName": "Chest-Supported T-Bar Row",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Flare elbows 45┬░, squeeze blades. Subs: Chest-Supported Machine Row, Incline Chest-Supported DB Row."
            },
            {
              "id": "bodybuildingTransformation-w8-d3-ex3",
              "exerciseId": "Dual-Handle Elbows-Out Cable Row",
              "displayName": "Dual-Handle Elbows-Out Cable Row",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. On odd weeks (7,9,11), extend last set with LLPs. Flare elbows out ~45┬░. Subs: Arm-Out Single-Arm DB Row, Meadows Row."
            },
            {
              "id": "bodybuildingTransformation-w8-d3-ex4",
              "exerciseId": "1-Arm 45┬░ Cable Rear Delt Flye",
              "displayName": "1-Arm 45┬░ Cable Rear Delt Flye",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. 1-2s pause in squeeze. Subs: Rope Face Pull, Reverse Pec Deck."
            },
            {
              "id": "bodybuildingTransformation-w8-d3-ex5",
              "exerciseId": "Cable Paused Shrug-In",
              "displayName": "Cable Paused Shrug-In",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Shrug up and in. 1-2s pause top & bottom. Subs: Machine Shrug, DB Shrug."
            },
            {
              "id": "bodybuildingTransformation-w8-d3-ex6",
              "exerciseId": "Cable Rope Hammer Curl",
              "displayName": "Cable Rope Hammer Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Squeeze rope hard. Subs: DB Hammer Curl, Hammer Preacher Curl."
            },
            {
              "id": "bodybuildingTransformation-w8-d3-ex7",
              "exerciseId": "DB Concentration Curl",
              "displayName": "DB Concentration Curl",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Subs: Concentration Cable Curl, DB Preacher Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w8-d4",
          "name": "Day 4: Push (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w8-d4-ex1",
              "exerciseId": "Machine Chest Press",
              "displayName": "Machine Chest Press",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. 1s pause at bottom. Subs: Barbell Bench Press, DB Bench Press."
            },
            {
              "id": "bodybuildingTransformation-w8-d4-ex2",
              "exerciseId": "Seated DB Shoulder Press",
              "displayName": "Seated DB Shoulder Press",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Elbows break 90┬░. Subs: Cable Shoulder Press, Machine Shoulder Press."
            },
            {
              "id": "bodybuildingTransformation-w8-d4-ex3",
              "exerciseId": "Bottom-Half Seated Cable Flye",
              "displayName": "Bottom-Half Seated Cable Flye",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Bottom half ROM, deep stretch. Subs: Bottom-Half DB Flye, Low-to-High Cable Crossover."
            },
            {
              "id": "bodybuildingTransformation-w8-d4-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Squeeze lateral delt. Subs: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w8-d4-ex5",
              "exerciseId": "EZ-Bar Skull Crusher",
              "displayName": "EZ-Bar Skull Crusher",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Optional 0.5-1s pause. Subs: DB Skull Crusher, Katana Triceps Extension."
            },
            {
              "id": "bodybuildingTransformation-w8-d4-ex6",
              "exerciseId": "Triceps Pressdown (Bar)",
              "displayName": "Triceps Pressdown (Bar)",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Squeeze triceps. Subs: Triceps Pressdown (Rope), DB Triceps Kickback."
            },
            {
              "id": "bodybuildingTransformation-w8-d4-ex7",
              "exerciseId": "Ab Wheel Rollout",
              "displayName": "Ab Wheel Rollout",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Progressively increase ROM. Subs: Swiss Ball Rollout, Long-Lever Plank."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w8-d5",
          "name": "Day 5: Legs (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w8-d5-ex1",
              "exerciseId": "Hack Squat",
              "displayName": "Hack Squat",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Controlled negative, explode positive. Subs: Leg Press, DB Walking Lunge."
            },
            {
              "id": "bodybuildingTransformation-w8-d5-ex2",
              "exerciseId": "Seated Leg Curl",
              "displayName": "Seated Leg Curl",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. On odd weeks (7,9,11), extend last set with LLPs. Lean forward for max stretch. Subs: Lying Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w8-d5-ex3",
              "exerciseId": "Walking Lunge",
              "displayName": "Walking Lunge",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Medium strides. Subs: Smith Machine Static Lunge, DB Static Lunge."
            },
            {
              "id": "bodybuildingTransformation-w8-d5-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Set seat back. 2-3s negative. Subs: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w8-d5-ex5",
              "exerciseId": "Machine Hip Adduction",
              "displayName": "Machine Hip Adduction",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Mind-muscle connection. Subs: Cable Hip Adduction, Copenhagen Hip Adduction."
            },
            {
              "id": "bodybuildingTransformation-w8-d5-ex6",
              "exerciseId": "Machine Hip Abduction",
              "displayName": "Machine Hip Abduction",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Use pads to increase ROM. Subs: Cable Hip Adduction, Lateral Band Walk."
            },
            {
              "id": "bodybuildingTransformation-w8-d5-ex7",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Static Stretch (30s). Take last set to failure, then hold a deep stretch for 30s. 1-2s pause at bottom. Subs: Seated Calf Raise, Leg Press Calf Press."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 9,
      "title": "Week 9: Ramping Block",
      "isDeload": false,
      "days": [
        {
          "id": "bodybuildingTransformation-w9-d1",
          "name": "Day 1: Upper (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w9-d1-ex1",
              "exerciseId": "45┬░ Incline DB Press",
              "displayName": "45┬░ Incline DB Press",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. 1 second pause at bottom. Subs: 45┬░ Incline Barbell Press, 45┬░ Incline Machine Press."
            },
            {
              "id": "bodybuildingTransformation-w9-d1-ex2",
              "exerciseId": "Pec Deck",
              "displayName": "Pec Deck",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Focus on bringing elbows together. Subs: Cable Crossover Ladder, Bottom-Half DB Flye."
            },
            {
              "id": "bodybuildingTransformation-w9-d1-ex3",
              "exerciseId": "Dual-Handle Lat Pulldown",
              "displayName": "Dual-Handle Lat Pulldown",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Lean back ~15┬░, drive elbows down. Subs: Wide-Grip Lat Pulldown, Wide-Grip Pull-Up."
            },
            {
              "id": "bodybuildingTransformation-w9-d1-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Squeeze lateral delt. Subs: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w9-d1-ex5",
              "exerciseId": "Smith Machine Row",
              "displayName": "Smith Machine Row",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure + LLPs. Take all sets to failure. On odd weeks (7,9,11), extend last set with Lengthened Partials. Subs: Pendlay Deficit Row, Single-Arm DB Row."
            },
            {
              "id": "bodybuildingTransformation-w9-d1-ex6",
              "exerciseId": "Overhead Cable Triceps Extension (Bar)",
              "displayName": "Overhead Cable Triceps Extension (Bar)",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Optional 0.5-1s pause. Subs: Overhead Cable Triceps Extension (Rope), DB Skull Crusher."
            },
            {
              "id": "bodybuildingTransformation-w9-d1-ex7",
              "exerciseId": "Bayesian Cable Curl",
              "displayName": "Bayesian Cable Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Imbalance protocol applies. Subs: Seated Super-Bayesian High Cable Curl, Incline DB Stretch Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w9-d2",
          "name": "Day 2: Lower (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w9-d2-ex1",
              "exerciseId": "Lying Leg Curl",
              "displayName": "Lying Leg Curl",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure + LLPs. Take all sets to failure. On odd weeks (7,9,11), extend last set with LLPs. Subs: Seated Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w9-d2-ex2",
              "exerciseId": "Smith Machine Static Lunge w/ Elevated Front Foot",
              "displayName": "Smith Machine Static Lunge w/ Elevated Front Foot",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Elevate front foot on small box. Subs: DB Bulgarian Split Squat, High-Bar Back Squat."
            },
            {
              "id": "bodybuildingTransformation-w9-d2-ex3",
              "exerciseId": "45┬░ Hyperextension",
              "displayName": "45┬░ Hyperextension",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Squeeze glutes hard at top. Subs: Glute-Ham Raise, Cable Pull-Through."
            },
            {
              "id": "bodybuildingTransformation-w9-d2-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Set seat back far. 2-3s negative. Subs: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w9-d2-ex5",
              "exerciseId": "Leg Press Calf Press",
              "displayName": "Leg Press Calf Press",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Static Stretch (30s). Take last set to failure, then hold a deep stretch for 30s. Subs: Seated Calf Raise, Standing Calf Raise."
            },
            {
              "id": "bodybuildingTransformation-w9-d2-ex6",
              "exerciseId": "Machine Crunch",
              "displayName": "Machine Crunch",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Round lower back. Subs: Decline Weighted Crunch, Cable Crunch."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w9-d3",
          "name": "Day 3: Pull (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w9-d3-ex1",
              "exerciseId": "Lean-Back Lat Pulldown",
              "displayName": "Lean-Back Lat Pulldown",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Lean back ~15-30┬░. Subs: Lean-Back Machine Pulldown, Pull-Up."
            },
            {
              "id": "bodybuildingTransformation-w9-d3-ex2",
              "exerciseId": "Chest-Supported T-Bar Row",
              "displayName": "Chest-Supported T-Bar Row",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Flare elbows 45┬░, squeeze blades. Subs: Chest-Supported Machine Row, Incline Chest-Supported DB Row."
            },
            {
              "id": "bodybuildingTransformation-w9-d3-ex3",
              "exerciseId": "Dual-Handle Elbows-Out Cable Row",
              "displayName": "Dual-Handle Elbows-Out Cable Row",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure + LLPs. Take all sets to failure. On odd weeks (7,9,11), extend last set with LLPs. Flare elbows out ~45┬░. Subs: Arm-Out Single-Arm DB Row, Meadows Row."
            },
            {
              "id": "bodybuildingTransformation-w9-d3-ex4",
              "exerciseId": "1-Arm 45┬░ Cable Rear Delt Flye",
              "displayName": "1-Arm 45┬░ Cable Rear Delt Flye",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. 1-2s pause in squeeze. Subs: Rope Face Pull, Reverse Pec Deck."
            },
            {
              "id": "bodybuildingTransformation-w9-d3-ex5",
              "exerciseId": "Cable Paused Shrug-In",
              "displayName": "Cable Paused Shrug-In",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Shrug up and in. 1-2s pause top & bottom. Subs: Machine Shrug, DB Shrug."
            },
            {
              "id": "bodybuildingTransformation-w9-d3-ex6",
              "exerciseId": "Cable Rope Hammer Curl",
              "displayName": "Cable Rope Hammer Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Squeeze rope hard. Subs: DB Hammer Curl, Hammer Preacher Curl."
            },
            {
              "id": "bodybuildingTransformation-w9-d3-ex7",
              "exerciseId": "DB Concentration Curl",
              "displayName": "DB Concentration Curl",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Subs: Concentration Cable Curl, DB Preacher Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w9-d4",
          "name": "Day 4: Push (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w9-d4-ex1",
              "exerciseId": "Machine Chest Press",
              "displayName": "Machine Chest Press",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. 1s pause at bottom. Subs: Barbell Bench Press, DB Bench Press."
            },
            {
              "id": "bodybuildingTransformation-w9-d4-ex2",
              "exerciseId": "Seated DB Shoulder Press",
              "displayName": "Seated DB Shoulder Press",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Elbows break 90┬░. Subs: Cable Shoulder Press, Machine Shoulder Press."
            },
            {
              "id": "bodybuildingTransformation-w9-d4-ex3",
              "exerciseId": "Bottom-Half Seated Cable Flye",
              "displayName": "Bottom-Half Seated Cable Flye",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Bottom half ROM, deep stretch. Subs: Bottom-Half DB Flye, Low-to-High Cable Crossover."
            },
            {
              "id": "bodybuildingTransformation-w9-d4-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Squeeze lateral delt. Subs: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w9-d4-ex5",
              "exerciseId": "EZ-Bar Skull Crusher",
              "displayName": "EZ-Bar Skull Crusher",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Optional 0.5-1s pause. Subs: DB Skull Crusher, Katana Triceps Extension."
            },
            {
              "id": "bodybuildingTransformation-w9-d4-ex6",
              "exerciseId": "Triceps Pressdown (Bar)",
              "displayName": "Triceps Pressdown (Bar)",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Squeeze triceps. Subs: Triceps Pressdown (Rope), DB Triceps Kickback."
            },
            {
              "id": "bodybuildingTransformation-w9-d4-ex7",
              "exerciseId": "Ab Wheel Rollout",
              "displayName": "Ab Wheel Rollout",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Progressively increase ROM. Subs: Swiss Ball Rollout, Long-Lever Plank."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w9-d5",
          "name": "Day 5: Legs (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w9-d5-ex1",
              "exerciseId": "Hack Squat",
              "displayName": "Hack Squat",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Controlled negative, explode positive. Subs: Leg Press, DB Walking Lunge."
            },
            {
              "id": "bodybuildingTransformation-w9-d5-ex2",
              "exerciseId": "Seated Leg Curl",
              "displayName": "Seated Leg Curl",
              "warmupSets": "1-2",
              "workingSets": 4,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure + LLPs. Take all sets to failure. On odd weeks (7,9,11), extend last set with LLPs. Lean forward for max stretch. Subs: Lying Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w9-d5-ex3",
              "exerciseId": "Walking Lunge",
              "displayName": "Walking Lunge",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Medium strides. Subs: Smith Machine Static Lunge, DB Static Lunge."
            },
            {
              "id": "bodybuildingTransformation-w9-d5-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Set seat back. 2-3s negative. Subs: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w9-d5-ex5",
              "exerciseId": "Machine Hip Adduction",
              "displayName": "Machine Hip Adduction",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Mind-muscle connection. Subs: Cable Hip Adduction, Copenhagen Hip Adduction."
            },
            {
              "id": "bodybuildingTransformation-w9-d5-ex6",
              "exerciseId": "Machine Hip Abduction",
              "displayName": "Machine Hip Abduction",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Use pads to increase ROM. Subs: Cable Hip Adduction, Lateral Band Walk."
            },
            {
              "id": "bodybuildingTransformation-w9-d5-ex7",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Static Stretch (30s). Take last set to failure, then hold a deep stretch for 30s. 1-2s pause at bottom. Subs: Seated Calf Raise, Leg Press Calf Press."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 10,
      "title": "Week 10A: Ramping Block",
      "isDeload": false,
      "days": [
        {
          "id": "bodybuildingTransformation-w10-d1",
          "name": "Day 1: Upper (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w10-d1-ex1",
              "exerciseId": "45┬░ Incline DB Press",
              "displayName": "45┬░ Incline DB Press",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. 1 second pause at bottom. Subs: 45┬░ Incline Barbell Press, 45┬░ Incline Machine Press."
            },
            {
              "id": "bodybuildingTransformation-w10-d1-ex2",
              "exerciseId": "Pec Deck",
              "displayName": "Pec Deck",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Focus on bringing elbows together. Subs: Cable Crossover Ladder, Bottom-Half DB Flye."
            },
            {
              "id": "bodybuildingTransformation-w10-d1-ex3",
              "exerciseId": "Dual-Handle Lat Pulldown",
              "displayName": "Dual-Handle Lat Pulldown",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Lean back ~15┬░, drive elbows down. Subs: Wide-Grip Lat Pulldown, Wide-Grip Pull-Up."
            },
            {
              "id": "bodybuildingTransformation-w10-d1-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Squeeze lateral delt. Subs: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w10-d1-ex5",
              "exerciseId": "Smith Machine Row",
              "displayName": "Smith Machine Row",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Subs: Pendlay Deficit Row, Single-Arm DB Row."
            },
            {
              "id": "bodybuildingTransformation-w10-d1-ex6",
              "exerciseId": "Overhead Cable Triceps Extension (Bar)",
              "displayName": "Overhead Cable Triceps Extension (Bar)",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Optional 0.5-1s pause. Subs: Overhead Cable Triceps Extension (Rope), DB Skull Crusher."
            },
            {
              "id": "bodybuildingTransformation-w10-d1-ex7",
              "exerciseId": "Bayesian Cable Curl",
              "displayName": "Bayesian Cable Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Imbalance protocol applies. Subs: Seated Super-Bayesian High Cable Curl, Incline DB Stretch Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w10-d2",
          "name": "Day 2: Lower (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w10-d2-ex1",
              "exerciseId": "Lying Leg Curl",
              "displayName": "Lying Leg Curl",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Subs: Seated Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w10-d2-ex2",
              "exerciseId": "Smith Machine Static Lunge w/ Elevated Front Foot",
              "displayName": "Smith Machine Static Lunge w/ Elevated Front Foot",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Elevate front foot on small box. Subs: DB Bulgarian Split Squat, High-Bar Back Squat."
            },
            {
              "id": "bodybuildingTransformation-w10-d2-ex3",
              "exerciseId": "45┬░ Hyperextension",
              "displayName": "45┬░ Hyperextension",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Squeeze glutes hard at top. Subs: Glute-Ham Raise, Cable Pull-Through."
            },
            {
              "id": "bodybuildingTransformation-w10-d2-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Set seat back far. 2-3s negative. Subs: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w10-d2-ex5",
              "exerciseId": "Leg Press Calf Press",
              "displayName": "Leg Press Calf Press",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Static Stretch (30s). Take last set to failure, then hold a deep stretch for 30s. Subs: Seated Calf Raise, Standing Calf Raise."
            },
            {
              "id": "bodybuildingTransformation-w10-d2-ex6",
              "exerciseId": "Machine Crunch",
              "displayName": "Machine Crunch",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Round lower back. Subs: Decline Weighted Crunch, Cable Crunch."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w10-d3",
          "name": "Day 3: Pull (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w10-d3-ex1",
              "exerciseId": "Lean-Back Lat Pulldown",
              "displayName": "Lean-Back Lat Pulldown",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Lean back ~15-30┬░. Subs: Lean-Back Machine Pulldown, Pull-Up."
            },
            {
              "id": "bodybuildingTransformation-w10-d3-ex2",
              "exerciseId": "Chest-Supported T-Bar Row",
              "displayName": "Chest-Supported T-Bar Row",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Flare elbows 45┬░, squeeze blades. Subs: Chest-Supported Machine Row, Incline Chest-Supported DB Row."
            },
            {
              "id": "bodybuildingTransformation-w10-d3-ex3",
              "exerciseId": "Dual-Handle Elbows-Out Cable Row",
              "displayName": "Dual-Handle Elbows-Out Cable Row",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Flare elbows out ~45┬░. Subs: Arm-Out Single-Arm DB Row, Meadows Row."
            },
            {
              "id": "bodybuildingTransformation-w10-d3-ex4",
              "exerciseId": "1-Arm 45┬░ Cable Rear Delt Flye",
              "displayName": "1-Arm 45┬░ Cable Rear Delt Flye",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. 1-2s pause in squeeze. Subs: Rope Face Pull, Reverse Pec Deck."
            },
            {
              "id": "bodybuildingTransformation-w10-d3-ex5",
              "exerciseId": "Cable Paused Shrug-In",
              "displayName": "Cable Paused Shrug-In",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Shrug up and in. 1-2s pause top & bottom. Subs: Machine Shrug, DB Shrug."
            },
            {
              "id": "bodybuildingTransformation-w10-d3-ex6",
              "exerciseId": "Cable Rope Hammer Curl",
              "displayName": "Cable Rope Hammer Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Squeeze rope hard. Subs: DB Hammer Curl, Hammer Preacher Curl."
            },
            {
              "id": "bodybuildingTransformation-w10-d3-ex7",
              "exerciseId": "DB Concentration Curl",
              "displayName": "DB Concentration Curl",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Subs: Concentration Cable Curl, DB Preacher Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w10-d4",
          "name": "Day 4: Push (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w10-d4-ex1",
              "exerciseId": "Machine Chest Press",
              "displayName": "Machine Chest Press",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. 1s pause at bottom. Subs: Barbell Bench Press, DB Bench Press."
            },
            {
              "id": "bodybuildingTransformation-w10-d4-ex2",
              "exerciseId": "Seated DB Shoulder Press",
              "displayName": "Seated DB Shoulder Press",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Elbows break 90┬░. Subs: Cable Shoulder Press, Machine Shoulder Press."
            },
            {
              "id": "bodybuildingTransformation-w10-d4-ex3",
              "exerciseId": "Bottom-Half Seated Cable Flye",
              "displayName": "Bottom-Half Seated Cable Flye",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Bottom half ROM, deep stretch. Subs: Bottom-Half DB Flye, Low-to-High Cable Crossover."
            },
            {
              "id": "bodybuildingTransformation-w10-d4-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Squeeze lateral delt. Subs: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w10-d4-ex5",
              "exerciseId": "EZ-Bar Skull Crusher",
              "displayName": "EZ-Bar Skull Crusher",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Optional 0.5-1s pause. Subs: DB Skull Crusher, Katana Triceps Extension."
            },
            {
              "id": "bodybuildingTransformation-w10-d4-ex6",
              "exerciseId": "Triceps Pressdown (Bar)",
              "displayName": "Triceps Pressdown (Bar)",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Squeeze triceps. Subs: Triceps Pressdown (Rope), DB Triceps Kickback."
            },
            {
              "id": "bodybuildingTransformation-w10-d4-ex7",
              "exerciseId": "Ab Wheel Rollout",
              "displayName": "Ab Wheel Rollout",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Progressively increase ROM. Subs: Swiss Ball Rollout, Long-Lever Plank."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w10-d5",
          "name": "Day 5: Legs (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w10-d5-ex1",
              "exerciseId": "Hack Squat",
              "displayName": "Hack Squat",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Controlled negative, explode positive. Subs: Leg Press, DB Walking Lunge."
            },
            {
              "id": "bodybuildingTransformation-w10-d5-ex2",
              "exerciseId": "Seated Leg Curl",
              "displayName": "Seated Leg Curl",
              "warmupSets": "1-2",
              "workingSets": 4,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Lean forward for max stretch. Subs: Lying Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w10-d5-ex3",
              "exerciseId": "Walking Lunge",
              "displayName": "Walking Lunge",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Medium strides. Subs: Smith Machine Static Lunge, DB Static Lunge."
            },
            {
              "id": "bodybuildingTransformation-w10-d5-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Set seat back. 2-3s negative. Subs: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w10-d5-ex5",
              "exerciseId": "Machine Hip Adduction",
              "displayName": "Machine Hip Adduction",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Mind-muscle connection. Subs: Cable Hip Adduction, Copenhagen Hip Adduction."
            },
            {
              "id": "bodybuildingTransformation-w10-d5-ex6",
              "exerciseId": "Machine Hip Abduction",
              "displayName": "Machine Hip Abduction",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Use pads to increase ROM. Subs: Cable Hip Adduction, Lateral Band Walk."
            },
            {
              "id": "bodybuildingTransformation-w10-d5-ex7",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Static Stretch (30s). Take last set to failure, then hold a deep stretch for 30s. 1-2s pause at bottom. Subs: Seated Calf Raise, Leg Press Calf Press."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 11,
      "title": "Week 10B: Ramping Block (Alternative)",
      "isDeload": false,
      "days": [
        {
          "id": "bodybuildingTransformation-w11-d1",
          "name": "Day 1: Upper (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w11-d1-ex1",
              "exerciseId": "45┬░ Incline DB Press",
              "displayName": "45┬░ Incline DB Press",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. 1 second pause at bottom. Subs: 45┬░ Incline Barbell Press, 45┬░ Incline Machine Press."
            },
            {
              "id": "bodybuildingTransformation-w11-d1-ex2",
              "exerciseId": "Pec Deck",
              "displayName": "Pec Deck",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Focus on bringing elbows together. Subs: Cable Crossover Ladder, Bottom-Half DB Flye."
            },
            {
              "id": "bodybuildingTransformation-w11-d1-ex3",
              "exerciseId": "Dual-Handle Lat Pulldown",
              "displayName": "Dual-Handle Lat Pulldown",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Lean back ~15┬░, drive elbows down. Subs: Wide-Grip Lat Pulldown, Wide-Grip Pull-Up."
            },
            {
              "id": "bodybuildingTransformation-w11-d1-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Squeeze lateral delt. Subs: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w11-d1-ex5",
              "exerciseId": "Smith Machine Row",
              "displayName": "Smith Machine Row",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Subs: Pendlay Deficit Row, Single-Arm DB Row."
            },
            {
              "id": "bodybuildingTransformation-w11-d1-ex6",
              "exerciseId": "Overhead Cable Triceps Extension (Bar)",
              "displayName": "Overhead Cable Triceps Extension (Bar)",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Optional 0.5-1s pause. Subs: Overhead Cable Triceps Extension (Rope), DB Skull Crusher."
            },
            {
              "id": "bodybuildingTransformation-w11-d1-ex7",
              "exerciseId": "Bayesian Cable Curl",
              "displayName": "Bayesian Cable Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Imbalance protocol applies. Subs: Seated Super-Bayesian High Cable Curl, Incline DB Stretch Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w11-d2",
          "name": "Day 2: Lower (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w11-d2-ex1",
              "exerciseId": "Lying Leg Curl",
              "displayName": "Lying Leg Curl",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Subs: Seated Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w11-d2-ex2",
              "exerciseId": "Smith Machine Static Lunge w/ Elevated Front Foot",
              "displayName": "Smith Machine Static Lunge w/ Elevated Front Foot",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Elevate front foot on small box. Subs: DB Bulgarian Split Squat, High-Bar Back Squat."
            },
            {
              "id": "bodybuildingTransformation-w11-d2-ex3",
              "exerciseId": "45┬░ Hyperextension",
              "displayName": "45┬░ Hyperextension",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Squeeze glutes hard at top. Subs: Glute-Ham Raise, Cable Pull-Through."
            },
            {
              "id": "bodybuildingTransformation-w11-d2-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Set seat back far. 2-3s negative. Subs: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w11-d2-ex5",
              "exerciseId": "Leg Press Calf Press",
              "displayName": "Leg Press Calf Press",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Static Stretch (30s). Take last set to failure, then hold a deep stretch for 30s. Subs: Seated Calf Raise, Standing Calf Raise."
            },
            {
              "id": "bodybuildingTransformation-w11-d2-ex6",
              "exerciseId": "Machine Crunch",
              "displayName": "Machine Crunch",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Round lower back. Subs: Decline Weighted Crunch, Cable Crunch."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w11-d3",
          "name": "Day 3: Pull (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w11-d3-ex1",
              "exerciseId": "Lean-Back Lat Pulldown",
              "displayName": "Lean-Back Lat Pulldown",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Lean back ~15-30┬░. Subs: Lean-Back Machine Pulldown, Pull-Up."
            },
            {
              "id": "bodybuildingTransformation-w11-d3-ex2",
              "exerciseId": "Chest-Supported T-Bar Row",
              "displayName": "Chest-Supported T-Bar Row",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Flare elbows 45┬░, squeeze blades. Subs: Chest-Supported Machine Row, Incline Chest-Supported DB Row."
            },
            {
              "id": "bodybuildingTransformation-w11-d3-ex3",
              "exerciseId": "Dual-Handle Elbows-Out Cable Row",
              "displayName": "Dual-Handle Elbows-Out Cable Row",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Flare elbows out ~45┬░. Subs: Arm-Out Single-Arm DB Row, Meadows Row."
            },
            {
              "id": "bodybuildingTransformation-w11-d3-ex4",
              "exerciseId": "1-Arm 45┬░ Cable Rear Delt Flye",
              "displayName": "1-Arm 45┬░ Cable Rear Delt Flye",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. 1-2s pause in squeeze. Subs: Rope Face Pull, Reverse Pec Deck."
            },
            {
              "id": "bodybuildingTransformation-w11-d3-ex5",
              "exerciseId": "Cable Paused Shrug-In",
              "displayName": "Cable Paused Shrug-In",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Shrug up and in. 1-2s pause top & bottom. Subs: Machine Shrug, DB Shrug."
            },
            {
              "id": "bodybuildingTransformation-w11-d3-ex6",
              "exerciseId": "Cable Rope Hammer Curl",
              "displayName": "Cable Rope Hammer Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Squeeze rope hard. Subs: DB Hammer Curl, Hammer Preacher Curl."
            },
            {
              "id": "bodybuildingTransformation-w11-d3-ex7",
              "exerciseId": "DB Concentration Curl",
              "displayName": "DB Concentration Curl",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Subs: Concentration Cable Curl, DB Preacher Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w11-d4",
          "name": "Day 4: Push (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w11-d4-ex1",
              "exerciseId": "Machine Chest Press",
              "displayName": "Machine Chest Press",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. 1s pause at bottom. Subs: Barbell Bench Press, DB Bench Press."
            },
            {
              "id": "bodybuildingTransformation-w11-d4-ex2",
              "exerciseId": "Seated DB Shoulder Press",
              "displayName": "Seated DB Shoulder Press",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Elbows break 90┬░. Subs: Cable Shoulder Press, Machine Shoulder Press."
            },
            {
              "id": "bodybuildingTransformation-w11-d4-ex3",
              "exerciseId": "Bottom-Half Seated Cable Flye",
              "displayName": "Bottom-Half Seated Cable Flye",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Bottom half ROM, deep stretch. Subs: Bottom-Half DB Flye, Low-to-High Cable Crossover."
            },
            {
              "id": "bodybuildingTransformation-w11-d4-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Squeeze lateral delt. Subs: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w11-d4-ex5",
              "exerciseId": "EZ-Bar Skull Crusher",
              "displayName": "EZ-Bar Skull Crusher",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Optional 0.5-1s pause. Subs: DB Skull Crusher, Katana Triceps Extension."
            },
            {
              "id": "bodybuildingTransformation-w11-d4-ex6",
              "exerciseId": "Triceps Pressdown (Bar)",
              "displayName": "Triceps Pressdown (Bar)",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Squeeze triceps. Subs: Triceps Pressdown (Rope), DB Triceps Kickback."
            },
            {
              "id": "bodybuildingTransformation-w11-d4-ex7",
              "exerciseId": "Ab Wheel Rollout",
              "displayName": "Ab Wheel Rollout",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Progressively increase ROM. Subs: Swiss Ball Rollout, Long-Lever Plank."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w11-d5",
          "name": "Day 5: Legs (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w11-d5-ex1",
              "exerciseId": "Hack Squat",
              "displayName": "Hack Squat",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Controlled negative, explode positive. Subs: Leg Press, DB Walking Lunge."
            },
            {
              "id": "bodybuildingTransformation-w11-d5-ex2",
              "exerciseId": "Seated Leg Curl",
              "displayName": "Seated Leg Curl",
              "warmupSets": "1-2",
              "workingSets": 4,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Lean forward for max stretch. Subs: Lying Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w11-d5-ex3",
              "exerciseId": "Walking Lunge",
              "displayName": "Walking Lunge",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Medium strides. Subs: Smith Machine Static Lunge, DB Static Lunge."
            },
            {
              "id": "bodybuildingTransformation-w11-d5-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Set seat back. 2-3s negative. Subs: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w11-d5-ex5",
              "exerciseId": "Machine Hip Adduction",
              "displayName": "Machine Hip Adduction",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Mind-muscle connection. Subs: Cable Hip Adduction, Copenhagen Hip Adduction."
            },
            {
              "id": "bodybuildingTransformation-w11-d5-ex6",
              "exerciseId": "Machine Hip Abduction",
              "displayName": "Machine Hip Abduction",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Use pads to increase ROM. Subs: Cable Hip Adduction, Lateral Band Walk."
            },
            {
              "id": "bodybuildingTransformation-w11-d5-ex7",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Static Stretch (30s). Take last set to failure, then hold a deep stretch for 30s. 1-2s pause at bottom. Subs: Seated Calf Raise, Leg Press Calf Press."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 12,
      "title": "Week 11: Ramping Block",
      "isDeload": true,
      "days": [
        {
          "id": "bodybuildingTransformation-w12-d1",
          "name": "Day 1: Upper (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w12-d1-ex1",
              "exerciseId": "45┬░ Incline DB Press",
              "displayName": "45┬░ Incline DB Press",
              "warmupSets": "2-3",
              "workingSets": 4,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. 1 second pause at bottom. Subs: 45┬░ Incline Barbell Press, 45┬░ Incline Machine Press."
            },
            {
              "id": "bodybuildingTransformation-w12-d1-ex2",
              "exerciseId": "Pec Deck",
              "displayName": "Pec Deck",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Focus on bringing elbows together. Subs: Cable Crossover Ladder, Bottom-Half DB Flye."
            },
            {
              "id": "bodybuildingTransformation-w12-d1-ex3",
              "exerciseId": "Dual-Handle Lat Pulldown",
              "displayName": "Dual-Handle Lat Pulldown",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Lean back ~15┬░, drive elbows down. Subs: Wide-Grip Lat Pulldown, Wide-Grip Pull-Up."
            },
            {
              "id": "bodybuildingTransformation-w12-d1-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Squeeze lateral delt. Subs: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w12-d1-ex5",
              "exerciseId": "Smith Machine Row",
              "displayName": "Smith Machine Row",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure + LLPs. Take all sets to failure. Extend last set with Lengthened Partials (LLPs). Subs: Pendlay Deficit Row, Single-Arm DB Row."
            },
            {
              "id": "bodybuildingTransformation-w12-d1-ex6",
              "exerciseId": "Overhead Cable Triceps Extension (Bar)",
              "displayName": "Overhead Cable Triceps Extension (Bar)",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Optional 0.5-1s pause. Subs: Overhead Cable Triceps Extension (Rope), DB Skull Crusher."
            },
            {
              "id": "bodybuildingTransformation-w12-d1-ex7",
              "exerciseId": "Bayesian Cable Curl",
              "displayName": "Bayesian Cable Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all working sets to failure. Imbalance protocol applies. Subs: Seated Super-Bayesian High Cable Curl, Incline DB Stretch Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w12-d2",
          "name": "Day 2: Lower (Strength Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w12-d2-ex1",
              "exerciseId": "Lying Leg Curl",
              "displayName": "Lying Leg Curl",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure + LLPs. Take all sets to failure. Extend last set with Lengthened Partials (LLPs). Subs: Seated Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w12-d2-ex2",
              "exerciseId": "Smith Machine Static Lunge w/ Elevated Front Foot",
              "displayName": "Smith Machine Static Lunge w/ Elevated Front Foot",
              "warmupSets": "2-4",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Elevate front foot on small box. Subs: DB Bulgarian Split Squat, High-Bar Back Squat."
            },
            {
              "id": "bodybuildingTransformation-w12-d2-ex3",
              "exerciseId": "45┬░ Hyperextension",
              "displayName": "45┬░ Hyperextension",
              "warmupSets": "2-4",
              "workingSets": 4,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Squeeze glutes hard at top. Subs: Glute-Ham Raise, Cable Pull-Through."
            },
            {
              "id": "bodybuildingTransformation-w12-d2-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Set seat back far. 2-3s negative. Subs: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w12-d2-ex5",
              "exerciseId": "Leg Press Calf Press",
              "displayName": "Leg Press Calf Press",
              "warmupSets": "1-2",
              "workingSets": 4,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Static Stretch (30s). Take last set to failure, then hold a deep stretch for 30s. Subs: Seated Calf Raise, Standing Calf Raise."
            },
            {
              "id": "bodybuildingTransformation-w12-d2-ex6",
              "exerciseId": "Machine Crunch",
              "displayName": "Machine Crunch",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Round lower back. Subs: Decline Weighted Crunch, Cable Crunch."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w12-d3",
          "name": "Day 3: Pull (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w12-d3-ex1",
              "exerciseId": "Lean-Back Lat Pulldown",
              "displayName": "Lean-Back Lat Pulldown",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Lean back ~15-30┬░. Subs: Lean-Back Machine Pulldown, Pull-Up."
            },
            {
              "id": "bodybuildingTransformation-w12-d3-ex2",
              "exerciseId": "Chest-Supported T-Bar Row",
              "displayName": "Chest-Supported T-Bar Row",
              "warmupSets": "2-3",
              "workingSets": 4,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Flare elbows 45┬░, squeeze blades. Subs: Chest-Supported Machine Row, Incline Chest-Supported DB Row."
            },
            {
              "id": "bodybuildingTransformation-w12-d3-ex3",
              "exerciseId": "Dual-Handle Elbows-Out Cable Row",
              "displayName": "Dual-Handle Elbows-Out Cable Row",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure + LLPs. Take all sets to failure. Extend last set with Lengthened Partials (LLPs). Flare elbows out ~45┬░. Subs: Arm-Out Single-Arm DB Row, Meadows Row."
            },
            {
              "id": "bodybuildingTransformation-w12-d3-ex4",
              "exerciseId": "1-Arm 45┬░ Cable Rear Delt Flye",
              "displayName": "1-Arm 45┬░ Cable Rear Delt Flye",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. 1-2s pause in squeeze. Subs: Rope Face Pull, Reverse Pec Deck."
            },
            {
              "id": "bodybuildingTransformation-w12-d3-ex5",
              "exerciseId": "Cable Paused Shrug-In",
              "displayName": "Cable Paused Shrug-In",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Shrug up and in. 1-2s pause top & bottom. Subs: Machine Shrug, DB Shrug."
            },
            {
              "id": "bodybuildingTransformation-w12-d3-ex6",
              "exerciseId": "Cable Rope Hammer Curl",
              "displayName": "Cable Rope Hammer Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Squeeze rope hard. Subs: DB Hammer Curl, Hammer Preacher Curl."
            },
            {
              "id": "bodybuildingTransformation-w12-d3-ex7",
              "exerciseId": "DB Concentration Curl",
              "displayName": "DB Concentration Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Subs: Concentration Cable Curl, DB Preacher Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w12-d4",
          "name": "Day 4: Push (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w12-d4-ex1",
              "exerciseId": "Machine Chest Press",
              "displayName": "Machine Chest Press",
              "warmupSets": "2-4",
              "workingSets": 4,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3-5 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. 1s pause at bottom. Subs: Barbell Bench Press, DB Bench Press."
            },
            {
              "id": "bodybuildingTransformation-w12-d4-ex2",
              "exerciseId": "Seated DB Shoulder Press",
              "displayName": "Seated DB Shoulder Press",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Elbows break 90┬░. Subs: Cable Shoulder Press, Machine Shoulder Press."
            },
            {
              "id": "bodybuildingTransformation-w12-d4-ex3",
              "exerciseId": "Bottom-Half Seated Cable Flye",
              "displayName": "Bottom-Half Seated Cable Flye",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Bottom half ROM, deep stretch. Subs: Bottom-Half DB Flye, Low-to-High Cable Crossover."
            },
            {
              "id": "bodybuildingTransformation-w12-d4-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Squeeze lateral delt. Subs: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w12-d4-ex5",
              "exerciseId": "EZ-Bar Skull Crusher",
              "displayName": "EZ-Bar Skull Crusher",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Optional 0.5-1s pause. Subs: DB Skull Crusher, Katana Triceps Extension."
            },
            {
              "id": "bodybuildingTransformation-w12-d4-ex6",
              "exerciseId": "Triceps Pressdown (Bar)",
              "displayName": "Triceps Pressdown (Bar)",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Squeeze triceps. Subs: Triceps Pressdown (Rope), DB Triceps Kickback."
            },
            {
              "id": "bodybuildingTransformation-w12-d4-ex7",
              "exerciseId": "Ab Wheel Rollout",
              "displayName": "Ab Wheel Rollout",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Progressively increase ROM. Subs: Swiss Ball Rollout, Long-Lever Plank."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w12-d5",
          "name": "Day 5: Legs (Hypertrophy Focus)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w12-d5-ex1",
              "exerciseId": "Hack Squat",
              "displayName": "Hack Squat",
              "warmupSets": "2-4",
              "workingSets": 4,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Controlled negative, explode positive. Subs: Leg Press, DB Walking Lunge."
            },
            {
              "id": "bodybuildingTransformation-w12-d5-ex2",
              "exerciseId": "Seated Leg Curl",
              "displayName": "Seated Leg Curl",
              "warmupSets": "1-2",
              "workingSets": 4,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure + LLPs. Take all sets to failure. Extend last set with Lengthened Partials (LLPs). Lean forward for max stretch. Subs: Lying Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w12-d5-ex3",
              "exerciseId": "Walking Lunge",
              "displayName": "Walking Lunge",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Medium strides. Subs: Smith Machine Static Lunge, DB Static Lunge."
            },
            {
              "id": "bodybuildingTransformation-w12-d5-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Myo-reps. Activation set to failure, then 3-5 mini-sets. Set seat back. 2-3s negative. Subs: Reverse Nordic, Sissy Squat."
            },
            {
              "id": "bodybuildingTransformation-w12-d5-ex5",
              "exerciseId": "Machine Hip Adduction",
              "displayName": "Machine Hip Adduction",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Mind-muscle connection. Subs: Cable Hip Adduction, Copenhagen Hip Adduction."
            },
            {
              "id": "bodybuildingTransformation-w12-d5-ex6",
              "exerciseId": "Machine Hip Abduction",
              "displayName": "Machine Hip Abduction",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Failure. Take all sets to failure. Use pads to increase ROM. Subs: Cable Hip Adduction, Lateral Band Walk."
            },
            {
              "id": "bodybuildingTransformation-w12-d5-ex7",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 min",
              "notes": "Last Set Intensity: Static Stretch (30s). Take last set to failure, then hold a deep stretch for 30s. 1-2s pause at bottom. Subs: Seated Calf Raise, Leg Press Calf Press."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 13,
      "title": "Week 12: Deload",
      "isDeload": false,
      "days": [
        {
          "id": "bodybuildingTransformation-w13-d1",
          "name": "Day 1: Upper",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w13-d1-ex1",
              "exerciseId": "45┬░ Incline DB Press",
              "displayName": "45┬░ Incline DB Press",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "2-3 min",
              "notes": "Deload: Reduce volume and intensity. RPE 7-8. Subs: 45┬░ Incline Barbell Press, 45┬░ Incline Machine Press."
            },
            {
              "id": "bodybuildingTransformation-w13-d1-ex2",
              "exerciseId": "Pec Deck",
              "displayName": "Pec Deck",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Deload: Reduce volume and intensity. RPE 7-8. Subs: Cable Crossover Ladder, Bottom-Half DB Flye."
            },
            {
              "id": "bodybuildingTransformation-w13-d1-ex3",
              "exerciseId": "Dual-Handle Lat Pulldown",
              "displayName": "Dual-Handle Lat Pulldown",
              "warmupSets": "1-2",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "2-3 min",
              "notes": "Deload: Reduce volume and intensity. RPE 7-8. Subs: Wide-Grip Lat Pulldown, Wide-Grip Pull-Up."
            },
            {
              "id": "bodybuildingTransformation-w13-d1-ex4",
              "exerciseId": "High-Cable Lateral Raise",
              "displayName": "High-Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Deload: Reduce volume and intensity. RPE 7-8. Subs: High-Cable Cuffed Lateral Raise, Lean-In DB Lateral Raise."
            },
            {
              "id": "bodybuildingTransformation-w13-d1-ex5",
              "exerciseId": "Smith Machine Row",
              "displayName": "Smith Machine Row",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "2-3 min",
              "notes": "Deload: Reduce volume and intensity. RPE 7-8. Subs: Pendlay Deficit Row, Single-Arm DB Row."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w13-d2",
          "name": "Day 2: Lower",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w13-d2-ex1",
              "exerciseId": "Lying Leg Curl",
              "displayName": "Lying Leg Curl",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Deload: Reduce volume and intensity. RPE 7-8. Subs: Seated Leg Curl, Nordic Ham Curl."
            },
            {
              "id": "bodybuildingTransformation-w13-d2-ex2",
              "exerciseId": "Smith Machine Static Lunge w/ Elevated Front Foot",
              "displayName": "Smith Machine Static Lunge w/ Elevated Front Foot",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "2-3 min",
              "notes": "Deload: Reduce volume and intensity. RPE 7-8. Subs: DB Bulgarian Split Squat, High-Bar Back Squat."
            },
            {
              "id": "bodybuildingTransformation-w13-d2-ex3",
              "exerciseId": "45┬░ Hyperextension",
              "displayName": "45┬░ Hyperextension",
              "warmupSets": "2",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "2-3 min",
              "notes": "Deload: Reduce volume and intensity. RPE 7-8. Subs: Glute-Ham Raise, Cable Pull-Through."
            },
            {
              "id": "bodybuildingTransformation-w13-d2-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Deload: Reduce volume and intensity. RPE 7-8. Subs: Reverse Nordic, Sissy Squat."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w13-d3",
          "name": "Day 3: Pull",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w13-d3-ex1",
              "exerciseId": "Lean-Back Lat Pulldown",
              "displayName": "Lean-Back Lat Pulldown",
              "warmupSets": "2",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "2-3 min",
              "notes": "Deload: Reduce volume and intensity. RPE 7-8. Subs: Lean-Back Machine Pulldown, Pull-Up."
            },
            {
              "id": "bodybuildingTransformation-w13-d3-ex2",
              "exerciseId": "Chest-Supported T-Bar Row",
              "displayName": "Chest-Supported T-Bar Row",
              "warmupSets": "2",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "2-3 min",
              "notes": "Deload: Reduce volume and intensity. RPE 7-8. Subs: Chest-Supported Machine Row, Incline Chest-Supported DB Row."
            },
            {
              "id": "bodybuildingTransformation-w13-d3-ex3",
              "exerciseId": "Cable Rope Hammer Curl",
              "displayName": "Cable Rope Hammer Curl",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Deload: Reduce volume and intensity. RPE 7-8. Subs: DB Hammer Curl, Hammer Preacher Curl."
            }
          ]
        },
        {
          "id": "bodybuildingTransformation-w13-d4",
          "name": "Day 4: Push",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "bodybuildingTransformation-w13-d4-ex1",
              "exerciseId": "Machine Chest Press",
              "displayName": "Machine Chest Press",
              "warmupSets": "2-3",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "2-3 min",
              "notes": "Deload: Reduce volume and intensity. RPE 7-8. Subs: Barbell Bench Press, DB Bench Press."
            },
            {
              "id": "bodybuildingTransformation-w13-d4-ex2",
              "exerciseId": "Seated DB Shoulder Press",
              "displayName": "Seated DB Shoulder Press",
              "warmupSets": "2",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "2-3 min",
              "notes": "Deload: Reduce volume and intensity. RPE 7-8. Subs: Cable Shoulder Press, Machine Shoulder Press."
            },
            {
              "id": "bodybuildingTransformation-w13-d4-ex3",
              "exerciseId": "EZ-Bar Skull Crusher",
              "displayName": "EZ-Bar Skull Crusher",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7-8",
              "lastSetRpe": "RPE 7-8",
              "restPeriod": "1-2 min",
              "notes": "Deload: Reduce volume and intensity. RPE 7-8. Subs: DB Skull Crusher, Katana Triceps Extension."
            }
          ]
        }
      ]
    }
  ]
};
