// src/data/fitness/programs/powerbuildingProgram.ts - 100% Complete Faithful FitApp Export
import type { TrainingProgram } from './types';

export const powerbuildingProgram: TrainingProgram = {
  "id": "powerbuilding",
  "title": "Powerbuilding System (4 Días/Semana)",
  "source": "Jeff Nippard (2020)",
  "pdfUrl": "/library/fitness/powerbuilding-system.pdf",
  "durationWeeks": 12,
  "split": [
    "Día 1: Full Body 1 (Squat, OHP)",
    "Día 2: Full Body 2 (Deadlift, Bench)",
    "Día 3: Full Body 3 (Squat, Dip)",
    "Día 4: Full Body 4 (Deadlift, Bench)"
  ],
  "methodology": [
    "Combinación de Fuerza %1RM + RPE e Hipertrofia",
    "Estructura de 4 Días por Semana Fiel a FitApp",
    "Periodización y Deloads Estratégicos"
  ],
  "equipment": [
    "Barbell",
    "Dumbbells",
    "Bench",
    "Dip Station"
  ],
  "weeks": [
    {
      "weekNumber": 1,
      "title": "Week 1",
      "isDeload": false,
      "days": [
        {
          "id": "powerbuilding-w1-d1",
          "name": "Full Body 1: Squat, OHP",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w1-d1-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "4",
              "workingSets": 1,
              "targetReps": "5",
              "earlySetRpe": "RPE 7.5",
              "lastSetRpe": "RPE 7.5",
              "restPeriod": "3-4 MIN",
              "notes": "Focus on technique and explosive power!"
            },
            {
              "id": "powerbuilding-w1-d1-ex2",
              "exerciseId": "Overhead Press",
              "displayName": "Overhead Press",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "8",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "2-3 MIN",
              "notes": "Reset each rep (don't touch-and-press)"
            },
            {
              "id": "powerbuilding-w1-d1-ex3",
              "exerciseId": "Glute Ham Raise",
              "displayName": "Glute Ham Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "1-2 MIN",
              "notes": "Keep your hips straight, do nordic ham curls if no GHR machine"
            },
            {
              "id": "powerbuilding-w1-d1-ex4",
              "exerciseId": "Helms Row",
              "displayName": "Helms Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Strict form. Drive elbows out and back at 45 degree angle"
            },
            {
              "id": "powerbuilding-w1-d1-ex5",
              "exerciseId": "Hammer Curl",
              "displayName": "Hammer Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 MIN",
              "notes": "Keep elbows locked in place, squeeze the dumbbell handle hard!"
            }
          ]
        },
        {
          "id": "powerbuilding-w1-d2",
          "name": "Full Body 2: Deadlift, Bench",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w1-d2-ex1",
              "exerciseId": "Deadlift",
              "displayName": "Deadlift",
              "warmupSets": "4",
              "workingSets": 3,
              "targetReps": "4",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-5 MIN",
              "notes": "Conventional or sumo: use whatever stance you are stronger with"
            },
            {
              "id": "powerbuilding-w1-d2-ex2",
              "exerciseId": "Barbell Bench Press",
              "displayName": "Barbell Bench Press",
              "warmupSets": "4",
              "workingSets": 1,
              "targetReps": "3",
              "earlySetRpe": "RPE 8.5",
              "lastSetRpe": "RPE 8.5",
              "restPeriod": "4-5 MIN",
              "notes": "Top Set. Leave 1 (maybe 2) reps in the tank. Hard set."
            },
            {
              "id": "powerbuilding-w1-d2-ex3",
              "exerciseId": "Hip Abduction",
              "displayName": "Hip Abduction",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Machine, band or weighted, 1 second isometric hold at the top of each rep"
            },
            {
              "id": "powerbuilding-w1-d2-ex4",
              "exerciseId": "Weighted Pull-Up",
              "displayName": "Weighted Pull-Up",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "5-8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "3-4 MIN",
              "notes": "1.5x shoulder width grip, pull your chest to the bar"
            },
            {
              "id": "powerbuilding-w1-d2-ex5",
              "exerciseId": "Floor Skull Crusher",
              "displayName": "Floor Skull Crusher",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Arc the bar back behind your head, soft touch on the floor behind you"
            },
            {
              "id": "powerbuilding-w1-d2-ex6",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "1-2 second pause at the bottom of each rep, full ROM"
            }
          ]
        },
        {
          "id": "powerbuilding-w1-d3",
          "name": "Full Body 3: Squat, Dip",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w1-d3-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "4",
              "workingSets": 3,
              "targetReps": "4",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-4 MIN",
              "notes": "Maintain tight pressure in your upper back against the bar"
            },
            {
              "id": "powerbuilding-w1-d3-ex2",
              "exerciseId": "Weighted Dip",
              "displayName": "Weighted Dip",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2-3 MIN",
              "notes": "Do dumbbell floor press if no access to dip handles"
            },
            {
              "id": "powerbuilding-w1-d3-ex3",
              "exerciseId": "Hanging Leg Raise",
              "displayName": "Hanging Leg Raise",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Knees to chest, controlled reps, straighten legs more to increase difficulty"
            },
            {
              "id": "powerbuilding-w1-d3-ex4",
              "exerciseId": "Lat Pull-Over",
              "displayName": "Lat Pull-Over",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Can use a DB, cable/rope or band, stretch and squeeze lats!"
            },
            {
              "id": "powerbuilding-w1-d3-ex5",
              "exerciseId": "Incline Dumbbell Curl",
              "displayName": "Incline Dumbbell Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Do each arm one at a time rather than alternating, start with your weak arm"
            },
            {
              "id": "powerbuilding-w1-d3-ex6",
              "exerciseId": "Face Pull",
              "displayName": "Face Pull",
              "warmupSets": "0",
              "workingSets": 4,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Can use cable/rope or band, retract your shoulder blades as you pull"
            }
          ]
        },
        {
          "id": "powerbuilding-w1-d4",
          "name": "Full Body 4: Deadlift, Bench",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w1-d4-ex1",
              "exerciseId": "Pause Deadlift",
              "displayName": "Pause Deadlift",
              "warmupSets": "4",
              "workingSets": 4,
              "targetReps": "2",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-4 MIN",
              "notes": "3 second pause right after the plates come off the ground"
            },
            {
              "id": "powerbuilding-w1-d4-ex2",
              "exerciseId": "Pause Barbell Bench Press",
              "displayName": "Pause Barbell Bench Press",
              "warmupSets": "3",
              "workingSets": 3,
              "targetReps": "5",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "2-3 MIN",
              "notes": "2-3 second pause on the chest"
            },
            {
              "id": "powerbuilding-w1-d4-ex3",
              "exerciseId": "Chest-Supported T-Bar Row or Pendlay Row",
              "displayName": "Chest-Supported T-Bar Row or Pendlay Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "1-2 MIN",
              "notes": "Be mindful of lower back fatigue. Stay light, minimize cheating"
            },
            {
              "id": "powerbuilding-w1-d4-ex4",
              "exerciseId": "Nordic Ham Curl",
              "displayName": "Nordic Ham Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "See video demos page, can sub for lying leg curl"
            },
            {
              "id": "powerbuilding-w1-d4-ex5",
              "exerciseId": "Dumbbell Shrug",
              "displayName": "Dumbbell Shrug",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Feel a stretch on the traps at the bottom, squeeze hard at the top"
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 2,
      "title": "Week 2",
      "isDeload": false,
      "days": [
        {
          "id": "powerbuilding-w2-d1",
          "name": "Lower #1",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w2-d1-ex1",
              "exerciseId": "Deadlift",
              "displayName": "Deadlift",
              "warmupSets": "4",
              "workingSets": 3,
              "targetReps": "3",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-5 MIN",
              "notes": "Brace your lats, chest tall, pull the slack out of the bar before lifting"
            },
            {
              "id": "powerbuilding-w2-d1-ex2",
              "exerciseId": "Sumo Box Squat or Pause High-Bar Squat",
              "displayName": "Sumo Box Squat or Pause High-Bar Squat",
              "warmupSets": "2",
              "workingSets": 2,
              "targetReps": "8",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "If you squat high-bar, do sumo box squat. If you squat low-bar, do pause high-bar (2 sec pause)"
            },
            {
              "id": "powerbuilding-w2-d1-ex3",
              "exerciseId": "Leg Curl",
              "displayName": "Leg Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Do lying leg curl machine or nordic ham curl if no machine access"
            },
            {
              "id": "powerbuilding-w2-d1-ex4",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "1-2 second pause at the bottom of each rep, full squeeze at the top"
            },
            {
              "id": "powerbuilding-w2-d1-ex5",
              "exerciseId": "Hanging Leg Raise",
              "displayName": "Hanging Leg Raise",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Knees to chest, controlled reps, straighten legs more to increase difficulty"
            }
          ]
        },
        {
          "id": "powerbuilding-w2-d2",
          "name": "Upper #1",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w2-d2-ex1",
              "exerciseId": "Barbell Bench Press",
              "displayName": "Barbell Bench Press",
              "warmupSets": "4",
              "workingSets": 1,
              "targetReps": "2",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "4-5 MIN",
              "notes": "Top Set. Leave ~2 reps in the tank. Hard set."
            },
            {
              "id": "powerbuilding-w2-d2-ex2",
              "exerciseId": "Chin-Up",
              "displayName": "Chin-Up",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2-3 MIN",
              "notes": "Underhand grip, pull your chest to the bar, add weight if needed to hit RPE"
            },
            {
              "id": "powerbuilding-w2-d2-ex3",
              "exerciseId": "Overhead Press",
              "displayName": "Overhead Press",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "4",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "2-3 MIN",
              "notes": "Squeeze your glutes to keep your torso upright, press up and slightly back"
            },
            {
              "id": "powerbuilding-w2-d2-ex4",
              "exerciseId": "Chest-Supported Dumbbell Row",
              "displayName": "Chest-Supported Dumbbell Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Lie on an incline bench and do rows - pull with lats!"
            },
            {
              "id": "powerbuilding-w2-d2-ex5",
              "exerciseId": "A1: Face Pull",
              "displayName": "A1: Face Pull",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Can use cable/rope or band, retract your shoulder blades as you pull"
            },
            {
              "id": "powerbuilding-w2-d2-ex6",
              "exerciseId": "A2: Dumbbell Lateral Raise",
              "displayName": "A2: Dumbbell Lateral Raise",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Arc the dumbbell out, mind-muscle connection with middle fibers"
            },
            {
              "id": "powerbuilding-w2-d2-ex7",
              "exerciseId": "B1: Concentration Bicep Curl",
              "displayName": "B1: Concentration Bicep Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Pin your elbow against your upper leg or the back of a bench"
            },
            {
              "id": "powerbuilding-w2-d2-ex8",
              "exerciseId": "B2: Triceps Pressdown",
              "displayName": "B2: Triceps Pressdown",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Can do with cables or bands, squeeze triceps to move the weight"
            }
          ]
        },
        {
          "id": "powerbuilding-w2-d3",
          "name": "Lower #2",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w2-d3-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "4",
              "workingSets": 3,
              "targetReps": "6",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-4 MIN",
              "notes": "Sit back and down, keep your upper back tight to the bar"
            },
            {
              "id": "powerbuilding-w2-d3-ex2",
              "exerciseId": "Snatch-Grip Romanian Deadlift",
              "displayName": "Snatch-Grip Romanian Deadlift",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "Wide grip, mind-muscle connection with hamstrings"
            },
            {
              "id": "powerbuilding-w2-d3-ex3",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Use bands if no machine access, mind-muscle connection with quads"
            },
            {
              "id": "powerbuilding-w2-d3-ex4",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "0",
              "workingSets": 4,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Emphasize the mind-muscle connection"
            },
            {
              "id": "powerbuilding-w2-d3-ex5",
              "exerciseId": "Banded Lateral Walk or Hip Abduction",
              "displayName": "Banded Lateral Walk or Hip Abduction",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Point toes slightly outward, mind-muscle connection with glutes"
            },
            {
              "id": "powerbuilding-w2-d3-ex6",
              "exerciseId": "V Sit-Up",
              "displayName": "V Sit-Up",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Think about squeezing your upper and lower abs together"
            }
          ]
        },
        {
          "id": "powerbuilding-w2-d4",
          "name": "Upper #2",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w2-d4-ex1",
              "exerciseId": "Close-Grip Bench Press",
              "displayName": "Close-Grip Bench Press",
              "warmupSets": "3",
              "workingSets": 3,
              "targetReps": "12",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "Shoulder width grip, tuck your elbows in closer to your torso"
            },
            {
              "id": "powerbuilding-w2-d4-ex2",
              "exerciseId": "Pendlay Row",
              "displayName": "Pendlay Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "Be mindful of lower back fatigue. Stay light, minimize cheating"
            },
            {
              "id": "powerbuilding-w2-d4-ex3",
              "exerciseId": "Weighted Dip",
              "displayName": "Weighted Dip",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "6",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "Do dumbbell floor press if no access to dip handles"
            },
            {
              "id": "powerbuilding-w2-d4-ex4",
              "exerciseId": "Eccentric-Accentuated Pull-Up",
              "displayName": "Eccentric-Accentuated Pull-Up",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "AMRAP",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 MIN",
              "notes": "3 second negative on every rep, maintain controlled form for all reps"
            },
            {
              "id": "powerbuilding-w2-d4-ex5",
              "exerciseId": "A1. Incline Shrug",
              "displayName": "A1. Incline Shrug",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Lie face down against an incline bench and do shrugs - full ROM and squeeze!"
            },
            {
              "id": "powerbuilding-w2-d4-ex6",
              "exerciseId": "A2. Upright Row",
              "displayName": "A2. Upright Row",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Can use cables/rope, bands or dumbbells. Stop ROM once elbows reach shoulder height."
            },
            {
              "id": "powerbuilding-w2-d4-ex7",
              "exerciseId": "B1: Barbbell Curl",
              "displayName": "B1: Barbbell Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Focus on the mind-muscle connection"
            },
            {
              "id": "powerbuilding-w2-d4-ex8",
              "exerciseId": "B2. Skull Crusher",
              "displayName": "B2. Skull Crusher",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "30SEC",
              "notes": "Barbell or EZ bar, do these on a bench, constant tension on triceps"
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 3,
      "title": "Week 3",
      "isDeload": false,
      "days": [
        {
          "id": "powerbuilding-w3-d1",
          "name": "Full Body 1: Squat, OHP",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w3-d1-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "4",
              "workingSets": 1,
              "targetReps": "8",
              "earlySetRpe": "RPE 8.5",
              "lastSetRpe": "RPE 8.5",
              "restPeriod": "3-4 MIN",
              "notes": "Top Set. Leave 1 (maybe 2) reps in the tank. Push it!"
            },
            {
              "id": "powerbuilding-w3-d1-ex2",
              "exerciseId": "Overhead Press",
              "displayName": "Overhead Press",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "8",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "2-3 MIN",
              "notes": "Reset each rep (don't touch-and-press)"
            },
            {
              "id": "powerbuilding-w3-d1-ex3",
              "exerciseId": "Glute Ham Raise",
              "displayName": "Glute Ham Raise",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "1-2 MIN",
              "notes": "Keep your hips straight, do nordic ham curls if no GHR machine"
            },
            {
              "id": "powerbuilding-w3-d1-ex4",
              "exerciseId": "Helms Row",
              "displayName": "Helms Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Strict form. Drive elbows out and back at 45 degree angle"
            },
            {
              "id": "powerbuilding-w3-d1-ex5",
              "exerciseId": "Hammer Curl",
              "displayName": "Hammer Curl",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 MIN",
              "notes": "Keep elbows locked in place, squeeze the dumbbell handle hard!"
            }
          ]
        },
        {
          "id": "powerbuilding-w3-d2",
          "name": "Full Body 2: Deadlift, Bench",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w3-d2-ex1",
              "exerciseId": "Deadlift",
              "displayName": "Deadlift",
              "warmupSets": "4",
              "workingSets": 4,
              "targetReps": "2",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-5 MIN",
              "notes": "Conventional or sumo: use whatever stance you are stronger with"
            },
            {
              "id": "powerbuilding-w3-d2-ex2",
              "exerciseId": "Barbell Bench Press",
              "displayName": "Barbell Bench Press",
              "warmupSets": "3",
              "workingSets": 1,
              "targetReps": "6",
              "earlySetRpe": "RPE 8.5",
              "lastSetRpe": "RPE 8.5",
              "restPeriod": "4-5 MIN",
              "notes": "Top Set. Leave 1 (maybe 2) reps in the tank. Push it!"
            },
            {
              "id": "powerbuilding-w3-d2-ex3",
              "exerciseId": "Hip Abduction",
              "displayName": "Hip Abduction",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Machine, band or weighted, 1 second isometric hold at the top of each rep"
            },
            {
              "id": "powerbuilding-w3-d2-ex4",
              "exerciseId": "Weighted Pull-Up",
              "displayName": "Weighted Pull-Up",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "5-8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "3-4 MIN",
              "notes": "1.5x shoulder width grip, pull your chest to the bar"
            },
            {
              "id": "powerbuilding-w3-d2-ex5",
              "exerciseId": "Floor Skull Crusher",
              "displayName": "Floor Skull Crusher",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Arc the bar back behind your head, soft touch on the floor behind you"
            },
            {
              "id": "powerbuilding-w3-d2-ex6",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "8",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "1-2 second pause at the bottom of each rep, full ROM"
            }
          ]
        },
        {
          "id": "powerbuilding-w3-d3",
          "name": "Full Body 3: Squat, Dip",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w3-d3-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "4",
              "workingSets": 4,
              "targetReps": "4",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-4 MIN",
              "notes": "Maintain tight pressure in your upper back against the bar"
            },
            {
              "id": "powerbuilding-w3-d3-ex2",
              "exerciseId": "Weighted Dip",
              "displayName": "Weighted Dip",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2-3 MIN",
              "notes": "Do dumbbell floor press if no access to dip handles"
            },
            {
              "id": "powerbuilding-w3-d3-ex3",
              "exerciseId": "Hanging Leg Raise",
              "displayName": "Hanging Leg Raise",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Knees to chest, controlled reps, straighten legs more to increase difficulty"
            },
            {
              "id": "powerbuilding-w3-d3-ex4",
              "exerciseId": "Lat Pull-Over",
              "displayName": "Lat Pull-Over",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Can use a DB, cable/rope or band, stretch and squeeze lats!"
            },
            {
              "id": "powerbuilding-w3-d3-ex5",
              "exerciseId": "Incline Dumbbell Curl",
              "displayName": "Incline Dumbbell Curl",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Do each arm one at a time rather than alternating, start with your weak arm"
            },
            {
              "id": "powerbuilding-w3-d3-ex6",
              "exerciseId": "Face Pull",
              "displayName": "Face Pull",
              "warmupSets": "0",
              "workingSets": 4,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Can use cable/rope or band, retract your shoulder blades as you pull"
            }
          ]
        },
        {
          "id": "powerbuilding-w3-d4",
          "name": "Full Body 4: Deadlift, Bench",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w3-d4-ex1",
              "exerciseId": "Pause Deadlift",
              "displayName": "Pause Deadlift",
              "warmupSets": "4",
              "workingSets": 4,
              "targetReps": "2",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-4 MIN",
              "notes": "3 second pause right after the plates come off the ground"
            },
            {
              "id": "powerbuilding-w3-d4-ex2",
              "exerciseId": "Pause Barbell Bench Press",
              "displayName": "Pause Barbell Bench Press",
              "warmupSets": "3",
              "workingSets": 4,
              "targetReps": "5",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "2-3 MIN",
              "notes": "2-3 second pause on the chest"
            },
            {
              "id": "powerbuilding-w3-d4-ex3",
              "exerciseId": "Chest-Supported T-Bar Row or Pendlay Row",
              "displayName": "Chest-Supported T-Bar Row or Pendlay Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "1-2 MIN",
              "notes": "Be mindful of lower back fatigue. Stay light, minimize cheating"
            },
            {
              "id": "powerbuilding-w3-d4-ex4",
              "exerciseId": "Nordic Ham Curl",
              "displayName": "Nordic Ham Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Bend forward at hips during the concentric and minimize contribution from hands"
            },
            {
              "id": "powerbuilding-w3-d4-ex5",
              "exerciseId": "Dumbbell Shrug",
              "displayName": "Dumbbell Shrug",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Feel a stretch on the traps at the bottom, squeeze hard at the top"
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 4,
      "title": "Week 4",
      "isDeload": true,
      "days": [
        {
          "id": "powerbuilding-w4-d1",
          "name": "Lower #1",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w4-d1-ex1",
              "exerciseId": "Deadlift",
              "displayName": "Deadlift",
              "warmupSets": "4",
              "workingSets": 1,
              "targetReps": "2",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "4-5 MIN",
              "notes": "Top Set! Aim for near PR. Keep form tight."
            },
            {
              "id": "powerbuilding-w4-d1-ex2",
              "exerciseId": "Sumo Box Squat or Pause High-Bar Squat",
              "displayName": "Sumo Box Squat or Pause High-Bar Squat",
              "warmupSets": "2",
              "workingSets": 2,
              "targetReps": "8",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "If you squat high-bar, do sumo box squat. If you squat low-bar, do pause high-bar (2 sec pause)"
            },
            {
              "id": "powerbuilding-w4-d1-ex3",
              "exerciseId": "Leg Curl",
              "displayName": "Leg Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Do lying leg curl machine or nordic ham curl if no machine access"
            },
            {
              "id": "powerbuilding-w4-d1-ex4",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "1-2 second pause at the bottom of each rep, full squeeze at the top"
            },
            {
              "id": "powerbuilding-w4-d1-ex5",
              "exerciseId": "Hanging Leg Raise",
              "displayName": "Hanging Leg Raise",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Knees to chest, controlled reps, straighten legs more to increase difficulty"
            }
          ]
        },
        {
          "id": "powerbuilding-w4-d2",
          "name": "Upper #1",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w4-d2-ex1",
              "exerciseId": "Flat-Back Bench Press",
              "displayName": "Flat-Back Bench Press",
              "warmupSets": "3",
              "workingSets": 3,
              "targetReps": "10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "3-4 MIN",
              "notes": "Shoulder blades still retracted and depressed. Slight arch in upper back. Minimize leg drive."
            },
            {
              "id": "powerbuilding-w4-d2-ex2",
              "exerciseId": "Chin-Up",
              "displayName": "Chin-Up",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2-3 MIN",
              "notes": "Underhand grip, pull your chest to the bar, add weight if needed to hit RPE"
            },
            {
              "id": "powerbuilding-w4-d2-ex3",
              "exerciseId": "Overhead Press / Push Press",
              "displayName": "Overhead Press / Push Press",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "3/3",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "2-3 MIN",
              "notes": "First 3 reps strict military press (no leg drive), last 3 reps push press (use leg drive)"
            },
            {
              "id": "powerbuilding-w4-d2-ex4",
              "exerciseId": "Chest-Supported Dumbbell Row",
              "displayName": "Chest-Supported Dumbbell Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Lie on an incline bench and do rows - pull with lats!"
            },
            {
              "id": "powerbuilding-w4-d2-ex5",
              "exerciseId": "A1: Face Pull",
              "displayName": "A1: Face Pull",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Can use cable/rope or band, retract your shoulder blades as you pull"
            },
            {
              "id": "powerbuilding-w4-d2-ex6",
              "exerciseId": "A2: Dumbbell Lateral Raise",
              "displayName": "A2: Dumbbell Lateral Raise",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Arc the dumbbell out, mind-muscle connection with middle fibers"
            },
            {
              "id": "powerbuilding-w4-d2-ex7",
              "exerciseId": "B1: Concentration Bicep Curl",
              "displayName": "B1: Concentration Bicep Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Pin your elbow against your upper leg or the back of a bench"
            },
            {
              "id": "powerbuilding-w4-d2-ex8",
              "exerciseId": "B2: Triceps Pressdown",
              "displayName": "B2: Triceps Pressdown",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Can do with cables or bands, squeeze triceps to move the weight"
            }
          ]
        },
        {
          "id": "powerbuilding-w4-d3",
          "name": "Lower #2",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w4-d3-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "4",
              "workingSets": 3,
              "targetReps": "6",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-4 MIN",
              "notes": "Sit back and down, keep your upper back tight to the bar"
            },
            {
              "id": "powerbuilding-w4-d3-ex2",
              "exerciseId": "5\" Block Pull",
              "displayName": "5\" Block Pull",
              "warmupSets": "3",
              "workingSets": 2,
              "targetReps": "4",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2-3 MIN",
              "notes": "Do block pulls from a 5\" block (can stack 45lb + 10lb bumper plates as blocks)"
            },
            {
              "id": "powerbuilding-w4-d3-ex3",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Use bands if no machine access, mind-muscle connection with quads"
            },
            {
              "id": "powerbuilding-w4-d3-ex4",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "0",
              "workingSets": 4,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Emphasize the mind-muscle connection"
            },
            {
              "id": "powerbuilding-w4-d3-ex5",
              "exerciseId": "Banded Lateral Walk or Hip Abduction",
              "displayName": "Banded Lateral Walk or Hip Abduction",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Point toes slightly outward, mind-muscle connection with glutes"
            },
            {
              "id": "powerbuilding-w4-d3-ex6",
              "exerciseId": "V Sit-Up",
              "displayName": "V Sit-Up",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Think about squeezing your upper and lower abs together"
            }
          ]
        },
        {
          "id": "powerbuilding-w4-d4",
          "name": "Upper #2",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w4-d4-ex1",
              "exerciseId": "Weighted Dip",
              "displayName": "Weighted Dip",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "6",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "Do incline dumbbell press if no access to dip handles"
            },
            {
              "id": "powerbuilding-w4-d4-ex2",
              "exerciseId": "Pendlay Row",
              "displayName": "Pendlay Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "Be mindful of lower back fatigue. Stay light, minimize cheating"
            },
            {
              "id": "powerbuilding-w4-d4-ex3",
              "exerciseId": "Deficit Push-Up",
              "displayName": "Deficit Push-Up",
              "warmupSets": "2",
              "workingSets": 2,
              "targetReps": "AMRAP",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "As many reps as possible. Use perfect push-up handles or dumbbells to create a deficit"
            },
            {
              "id": "powerbuilding-w4-d4-ex4",
              "exerciseId": "Eccentric-Accentuated Pull-Up",
              "displayName": "Eccentric-Accentuated Pull-Up",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "AMRAP",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 MIN",
              "notes": "3 second negative on every rep, maintain controlled form for all reps"
            },
            {
              "id": "powerbuilding-w4-d4-ex5",
              "exerciseId": "A1. Incline Shrug",
              "displayName": "A1. Incline Shrug",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Lie face down against an incline bench and do shrugs - full ROM and squeeze!"
            },
            {
              "id": "powerbuilding-w4-d4-ex6",
              "exerciseId": "A2. Bent Over Reverse Dumbbell Flye",
              "displayName": "A2. Bent Over Reverse Dumbbell Flye",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Mind-muscle connection with rear delts, sweep the weight out"
            },
            {
              "id": "powerbuilding-w4-d4-ex7",
              "exerciseId": "B1: Barbbell Curl",
              "displayName": "B1: Barbbell Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Focus on the mind-muscle connection"
            },
            {
              "id": "powerbuilding-w4-d4-ex8",
              "exerciseId": "B2. Skull Crusher",
              "displayName": "B2. Skull Crusher",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Barbell or EZ bar, do these on a bench, constant tension on triceps"
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 5,
      "title": "Week 5",
      "isDeload": false,
      "days": [
        {
          "id": "powerbuilding-w5-d1",
          "name": "Full Body 1: Squat, OHP",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w5-d1-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "4",
              "workingSets": 1,
              "targetReps": "3",
              "earlySetRpe": "RPE 8.5",
              "lastSetRpe": "RPE 8.5",
              "restPeriod": "3-4 MIN",
              "notes": "Top Set. Leave 1 (maybe 2) reps in the tank. Aim for near 3 rep PR."
            },
            {
              "id": "powerbuilding-w5-d1-ex2",
              "exerciseId": "Overhead Press",
              "displayName": "Overhead Press",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "8",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "2-3 MIN",
              "notes": "Reset each rep (don't touch-and-press)"
            },
            {
              "id": "powerbuilding-w5-d1-ex3",
              "exerciseId": "Glute Ham Raise",
              "displayName": "Glute Ham Raise",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Keep your hips straight, do nordic ham curls if no GHR machine"
            },
            {
              "id": "powerbuilding-w5-d1-ex4",
              "exerciseId": "Helms Row",
              "displayName": "Helms Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Strict form. Drive elbows out and back at 45 degree angle"
            },
            {
              "id": "powerbuilding-w5-d1-ex5",
              "exerciseId": "Hammer Curl",
              "displayName": "Hammer Curl",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 MIN",
              "notes": "Keep elbows locked in place, squeeze the dumbbell handle hard!"
            }
          ]
        },
        {
          "id": "powerbuilding-w5-d2",
          "name": "Full Body 2: Deadlift, Bench",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w5-d2-ex1",
              "exerciseId": "Deadlift",
              "displayName": "Deadlift",
              "warmupSets": "4",
              "workingSets": 3,
              "targetReps": "3",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-5 MIN",
              "notes": "Brace your lats, chest tall, pull the slack out of the bar before lifting"
            },
            {
              "id": "powerbuilding-w5-d2-ex2",
              "exerciseId": "Barbell Bench Press",
              "displayName": "Barbell Bench Press",
              "warmupSets": "3",
              "workingSets": 1,
              "targetReps": "4",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "4-5 MIN",
              "notes": "Top Set. Leave 1 rep in the tank. Aim for near 4 rep PR."
            },
            {
              "id": "powerbuilding-w5-d2-ex3",
              "exerciseId": "Hip Abduction",
              "displayName": "Hip Abduction",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Machine, band or weighted, 1 second isometric hold at the top of each rep"
            },
            {
              "id": "powerbuilding-w5-d2-ex4",
              "exerciseId": "Weighted Pull-Up",
              "displayName": "Weighted Pull-Up",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "5-8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "3-4 MIN",
              "notes": "1.5x shoulder width grip, pull your chest to the bar"
            },
            {
              "id": "powerbuilding-w5-d2-ex5",
              "exerciseId": "Floor Skull Crusher",
              "displayName": "Floor Skull Crusher",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Arc the bar back behind your head, soft touch on the floor behind you"
            },
            {
              "id": "powerbuilding-w5-d2-ex6",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "8",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "1-2 second pause at the bottom of each rep, full ROM"
            }
          ]
        },
        {
          "id": "powerbuilding-w5-d3",
          "name": "Full Body 3: Squat, Dip",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w5-d3-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "4",
              "workingSets": 3,
              "targetReps": "6",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-4 MIN",
              "notes": "Maintain tight pressure in your upper back against the bar"
            },
            {
              "id": "powerbuilding-w5-d3-ex2",
              "exerciseId": "Weighted Dip",
              "displayName": "Weighted Dip",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2-3 MIN",
              "notes": "Do dumbbell floor press if no access to dip handles"
            },
            {
              "id": "powerbuilding-w5-d3-ex3",
              "exerciseId": "Hanging Leg Raise",
              "displayName": "Hanging Leg Raise",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Knees to chest, controlled reps, straighten legs more to increase difficulty"
            },
            {
              "id": "powerbuilding-w5-d3-ex4",
              "exerciseId": "Lat Pull-Over",
              "displayName": "Lat Pull-Over",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Can use a DB, cable/rope or band, stretch and squeeze lats!"
            },
            {
              "id": "powerbuilding-w5-d3-ex5",
              "exerciseId": "Incline Dumbbell Curl",
              "displayName": "Incline Dumbbell Curl",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Do each arm one at a time rather than alternating, start with your weak arm"
            },
            {
              "id": "powerbuilding-w5-d3-ex6",
              "exerciseId": "Face Pull",
              "displayName": "Face Pull",
              "warmupSets": "0",
              "workingSets": 4,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Can use cable/rope or band, retract your shoulder blades as you pull"
            }
          ]
        },
        {
          "id": "powerbuilding-w5-d4",
          "name": "Full Body 4: Deadlift, Bench",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w5-d4-ex1",
              "exerciseId": "Pause Deadlift",
              "displayName": "Pause Deadlift",
              "warmupSets": "4",
              "workingSets": 4,
              "targetReps": "2",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-4 MIN",
              "notes": "3 second pause right after the plates come off the ground"
            },
            {
              "id": "powerbuilding-w5-d4-ex2",
              "exerciseId": "Pause Barbell Bench Press",
              "displayName": "Pause Barbell Bench Press",
              "warmupSets": "3",
              "workingSets": 3,
              "targetReps": "6",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "2-3 MIN",
              "notes": "2-3 second pause on the chest"
            },
            {
              "id": "powerbuilding-w5-d4-ex3",
              "exerciseId": "Chest-Supported T-Bar Row or Pendlay Row",
              "displayName": "Chest-Supported T-Bar Row or Pendlay Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "1-2 MIN",
              "notes": "Be mindful of lower back fatigue. Stay light, minimize cheating"
            },
            {
              "id": "powerbuilding-w5-d4-ex4",
              "exerciseId": "Nordic Ham Curl",
              "displayName": "Nordic Ham Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Bend forward at hips during the concentric and minimize contribution from hands"
            },
            {
              "id": "powerbuilding-w5-d4-ex5",
              "exerciseId": "Dumbbell Shrug",
              "displayName": "Dumbbell Shrug",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 MIN",
              "notes": "Feel a stretch on the traps at the bottom, squeeze hard at the top"
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 6,
      "title": "Week 6 [Semi-Deload]",
      "isDeload": false,
      "days": [
        {
          "id": "powerbuilding-w6-d1",
          "name": "Lower #1",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w6-d1-ex1",
              "exerciseId": "Deadlift",
              "displayName": "Deadlift",
              "warmupSets": "4",
              "workingSets": 3,
              "targetReps": "4",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-5 MIN",
              "notes": "Brace your lats, chest tall, pull the slack out of the bar before lifting"
            },
            {
              "id": "powerbuilding-w6-d1-ex2",
              "exerciseId": "Sumo Box Squat or Pause High-Bar Squat",
              "displayName": "Sumo Box Squat or Pause High-Bar Squat",
              "warmupSets": "2",
              "workingSets": 2,
              "targetReps": "8",
              "earlySetRpe": "RPE 5",
              "lastSetRpe": "RPE 5",
              "restPeriod": "2-3 MIN",
              "notes": "If you squat high-bar, do sumo box squat. If you squat low-bar, do pause high-bar (2 sec pause)"
            },
            {
              "id": "powerbuilding-w6-d1-ex3",
              "exerciseId": "Leg Curl",
              "displayName": "Leg Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "1-2 MIN",
              "notes": "Do lying leg curl machine or nordic ham curl if no machine access"
            },
            {
              "id": "powerbuilding-w6-d1-ex4",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "1-2 MIN",
              "notes": "1-2 second pause at the bottom of each rep, full squeeze at the top"
            },
            {
              "id": "powerbuilding-w6-d1-ex5",
              "exerciseId": "Hanging Leg Raise",
              "displayName": "Hanging Leg Raise",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Knees to chest, controlled reps, straighten legs more to increase difficulty"
            }
          ]
        },
        {
          "id": "powerbuilding-w6-d2",
          "name": "Upper #1",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w6-d2-ex1",
              "exerciseId": "Barbell Bench Press",
              "displayName": "Barbell Bench Press",
              "warmupSets": "3",
              "workingSets": 2,
              "targetReps": "7",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-4 MIN",
              "notes": "Set up a comfortable arch, slight pause on the chest, explode up"
            },
            {
              "id": "powerbuilding-w6-d2-ex2",
              "exerciseId": "Chin-Up",
              "displayName": "Chin-Up",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "Underhand grip, pull your chest to the bar, add weight if needed to hit RPE"
            },
            {
              "id": "powerbuilding-w6-d2-ex3",
              "exerciseId": "Overhead Press",
              "displayName": "Overhead Press",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "4",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "1-2 MIN",
              "notes": "Squeeze your glutes to keep your torso upright, press up and slightly back"
            },
            {
              "id": "powerbuilding-w6-d2-ex4",
              "exerciseId": "Chest-Supported Dumbbell Row",
              "displayName": "Chest-Supported Dumbbell Row",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "3-4 MIN",
              "notes": "Lie on an incline bench and do rows - pull with lats!"
            },
            {
              "id": "powerbuilding-w6-d2-ex5",
              "exerciseId": "A1: Face Pull",
              "displayName": "A1: Face Pull",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "30SEC",
              "notes": "Can use cable/rope or band, retract your shoulder blades as you pull"
            },
            {
              "id": "powerbuilding-w6-d2-ex6",
              "exerciseId": "A2: Dumbbell Lateral Raise",
              "displayName": "A2: Dumbbell Lateral Raise",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "30SEC",
              "notes": "Arc the dumbbell out, mind-muscle connection with middle fibers"
            },
            {
              "id": "powerbuilding-w6-d2-ex7",
              "exerciseId": "B1: Concentration Bicep Curl",
              "displayName": "B1: Concentration Bicep Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "30SEC",
              "notes": "Pin your elbow against your upper leg or the back of a bench"
            },
            {
              "id": "powerbuilding-w6-d2-ex8",
              "exerciseId": "B2: Triceps Pressdown",
              "displayName": "B2: Triceps Pressdown",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "30SEC",
              "notes": "Can do with cables or bands, squeeze triceps to move the weight"
            }
          ]
        },
        {
          "id": "powerbuilding-w6-d3",
          "name": "Lower #2",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w6-d3-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "4",
              "workingSets": 1,
              "targetReps": "1",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "4-5 MIN",
              "notes": "Only heavy set this week! Perfect technique!"
            },
            {
              "id": "powerbuilding-w6-d3-ex2",
              "exerciseId": "Low-Bar Back Squat",
              "displayName": "Low-Bar Back Squat",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "7",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-4 MIN",
              "notes": "Sit back and down, keep your upper back tight to the bar"
            },
            {
              "id": "powerbuilding-w6-d3-ex3",
              "exerciseId": "Snatch-Grip Romanian Deadlift",
              "displayName": "Snatch-Grip Romanian Deadlift",
              "warmupSets": "2",
              "workingSets": 2,
              "targetReps": "10",
              "earlySetRpe": "RPE 6",
              "lastSetRpe": "RPE 6",
              "restPeriod": "2-3 MIN",
              "notes": "Wide grip, mind-muscle connection with hamstrings"
            },
            {
              "id": "powerbuilding-w6-d3-ex4",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Use bands if no machine access, mind-muscle connection with quads"
            },
            {
              "id": "powerbuilding-w6-d3-ex5",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Emphasize the mind-muscle connection"
            },
            {
              "id": "powerbuilding-w6-d3-ex6",
              "exerciseId": "Banded Lateral Walk or Hip Abduction",
              "displayName": "Banded Lateral Walk or Hip Abduction",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Point toes slightly outward, mind-muscle connection with glutes"
            },
            {
              "id": "powerbuilding-w6-d3-ex7",
              "exerciseId": "V Sit-Up",
              "displayName": "V Sit-Up",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Think about squeezing your upper and lower abs together"
            }
          ]
        },
        {
          "id": "powerbuilding-w6-d4",
          "name": "Upper #2",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w6-d4-ex1",
              "exerciseId": "Barbell Floor Press",
              "displayName": "Barbell Floor Press",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "8",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "Control the eccentric (don't let your elbows slam into the ground), be explosive on the way up"
            },
            {
              "id": "powerbuilding-w6-d4-ex2",
              "exerciseId": "Pendlay Row",
              "displayName": "Pendlay Row",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "Be mindful of lower back fatigue. Stay light, minimize cheating"
            },
            {
              "id": "powerbuilding-w6-d4-ex3",
              "exerciseId": "Weighted Dip",
              "displayName": "Weighted Dip",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "6",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "Do incline dumbbell press if no access to dip handles"
            },
            {
              "id": "powerbuilding-w6-d4-ex4",
              "exerciseId": "Neutral Grip Pull-Up",
              "displayName": "Neutral Grip Pull-Up",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "Avoid failure, focus on good technique and maintaining consistent tempo"
            },
            {
              "id": "powerbuilding-w6-d4-ex5",
              "exerciseId": "A1. Incline Shrug",
              "displayName": "A1. Incline Shrug",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "30SEC",
              "notes": "Lie face down against an incline bench and do shrugs - full ROM and squeeze!"
            },
            {
              "id": "powerbuilding-w6-d4-ex6",
              "exerciseId": "A2. Upright Row",
              "displayName": "A2. Upright Row",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "30SEC",
              "notes": "Can use cables/rope, bands or dumbbells. Stop ROM once elbows reach shoulder height."
            },
            {
              "id": "powerbuilding-w6-d4-ex7",
              "exerciseId": "B1: Barbbell Curl",
              "displayName": "B1: Barbbell Curl",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "30SEC",
              "notes": "Focus on the mind-muscle connection"
            },
            {
              "id": "powerbuilding-w6-d4-ex8",
              "exerciseId": "B2. Skull Crusher",
              "displayName": "B2. Skull Crusher",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "30SEC",
              "notes": "Barbell or EZ bar, do these on a bench, constant tension on triceps"
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 7,
      "title": "Week 7",
      "isDeload": false,
      "days": [
        {
          "id": "powerbuilding-w7-d1",
          "name": "Full Body 1: Squat, OHP",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w7-d1-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "4",
              "workingSets": 1,
              "targetReps": "3",
              "earlySetRpe": "RPE 8.5",
              "lastSetRpe": "RPE 8.5",
              "restPeriod": "4-5 MIN",
              "notes": "Try to add some weight from Week 5 or improve bar speed at same weight"
            },
            {
              "id": "powerbuilding-w7-d1-ex2",
              "exerciseId": "Overhead Press",
              "displayName": "Overhead Press",
              "warmupSets": "2",
              "workingSets": 4,
              "targetReps": "8",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "2-3 MIN",
              "notes": "Reset each rep (don't touch-and-press)"
            },
            {
              "id": "powerbuilding-w7-d1-ex3",
              "exerciseId": "Glute Ham Raise",
              "displayName": "Glute Ham Raise",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Keep your hips straight, do nordic ham curls if no GHR machine"
            },
            {
              "id": "powerbuilding-w7-d1-ex4",
              "exerciseId": "Helms Row",
              "displayName": "Helms Row",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Strict form. Drive elbows out and back at 45 degree angle"
            },
            {
              "id": "powerbuilding-w7-d1-ex5",
              "exerciseId": "Hammer Curl",
              "displayName": "Hammer Curl",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 MIN",
              "notes": "Keep elbows locked in place, squeeze the dumbbell handle hard!"
            }
          ]
        },
        {
          "id": "powerbuilding-w7-d2",
          "name": "Full Body 2: Deadlift, Bench",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w7-d2-ex1",
              "exerciseId": "Pause Deadlift",
              "displayName": "Pause Deadlift",
              "warmupSets": "4",
              "workingSets": 4,
              "targetReps": "2",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-4 MIN",
              "notes": "3 second pause right after the plates come off the ground"
            },
            {
              "id": "powerbuilding-w7-d2-ex2",
              "exerciseId": "Barbell Bench Press",
              "displayName": "Barbell Bench Press",
              "warmupSets": "4",
              "workingSets": 1,
              "targetReps": "3",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "4-5 MIN",
              "notes": "Top Set. Leave 1 rep in the tank. Aim for near 3 rep PR."
            },
            {
              "id": "powerbuilding-w7-d2-ex3",
              "exerciseId": "Hip Abduction",
              "displayName": "Hip Abduction",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Machine, band or weighted, 1 second isometric hold at the top of each rep"
            },
            {
              "id": "powerbuilding-w7-d2-ex4",
              "exerciseId": "Weighted Pull-Up",
              "displayName": "Weighted Pull-Up",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "3-5",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "3-4 MIN",
              "notes": "1.5x shoulder width grip, pull your chest to the bar"
            },
            {
              "id": "powerbuilding-w7-d2-ex5",
              "exerciseId": "Floor Skull Crusher",
              "displayName": "Floor Skull Crusher",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Arc the bar back behind your head, soft touch on the floor behind you"
            },
            {
              "id": "powerbuilding-w7-d2-ex6",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "8",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "1-2 second pause at the bottom of each rep, full ROM"
            }
          ]
        },
        {
          "id": "powerbuilding-w7-d3",
          "name": "Full Body 3: Squat, Dip",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w7-d3-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "4",
              "workingSets": 4,
              "targetReps": "6",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-4 MIN",
              "notes": "Maintain tight pressure in your upper back against the bar"
            },
            {
              "id": "powerbuilding-w7-d3-ex2",
              "exerciseId": "Weighted Dip",
              "displayName": "Weighted Dip",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2-3 MIN",
              "notes": "Do dumbbell floor press if no access to dip handles"
            },
            {
              "id": "powerbuilding-w7-d3-ex3",
              "exerciseId": "Hanging Leg Raise",
              "displayName": "Hanging Leg Raise",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Knees to chest, controlled reps, straighten legs more to increase difficulty"
            },
            {
              "id": "powerbuilding-w7-d3-ex4",
              "exerciseId": "Lat Pull-Over",
              "displayName": "Lat Pull-Over",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Can use a DB, cable/rope or band, stretch and squeeze lats!"
            },
            {
              "id": "powerbuilding-w7-d3-ex5",
              "exerciseId": "Incline Dumbbell Curl",
              "displayName": "Incline Dumbbell Curl",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Do each arm one at a time rather than alternating, start with your weak arm"
            },
            {
              "id": "powerbuilding-w7-d3-ex6",
              "exerciseId": "Face Pull",
              "displayName": "Face Pull",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Can use cable/rope or band, retract your shoulder blades as you pull"
            }
          ]
        },
        {
          "id": "powerbuilding-w7-d4",
          "name": "Full Body 4: Deadlift, Bench",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w7-d4-ex1",
              "exerciseId": "Deadlift",
              "displayName": "Deadlift",
              "warmupSets": "4",
              "workingSets": 1,
              "targetReps": "3",
              "earlySetRpe": "RPE 8.5",
              "lastSetRpe": "RPE 8.5",
              "restPeriod": "4-5 MIN",
              "notes": "Work up to a heavy triple with a load that hits RPE 8-9"
            },
            {
              "id": "powerbuilding-w7-d4-ex2",
              "exerciseId": "Pause Barbell Bench Press",
              "displayName": "Pause Barbell Bench Press",
              "warmupSets": "3",
              "workingSets": 4,
              "targetReps": "6",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "2-3 MIN",
              "notes": "2-3 second pause on the chest"
            },
            {
              "id": "powerbuilding-w7-d4-ex3",
              "exerciseId": "Chest-Supported T-Bar Row or Pendlay Row",
              "displayName": "Chest-Supported T-Bar Row or Pendlay Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "Be mindful of lower back fatigue. Stay light, minimize cheating"
            },
            {
              "id": "powerbuilding-w7-d4-ex4",
              "exerciseId": "Nordic Ham Curl",
              "displayName": "Nordic Ham Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Bend forward at hips during the concentric and minimize contribution from hands"
            },
            {
              "id": "powerbuilding-w7-d4-ex5",
              "exerciseId": "Dumbbell Shrug",
              "displayName": "Dumbbell Shrug",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Feel a stretch on the traps at the bottom, squeeze hard at the top"
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 8,
      "title": "Week 8",
      "isDeload": true,
      "days": [
        {
          "id": "powerbuilding-w8-d1",
          "name": "Lower #1",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w8-d1-ex1",
              "exerciseId": "Deadlift",
              "displayName": "Deadlift",
              "warmupSets": "4",
              "workingSets": 3,
              "targetReps": "5",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-5 MIN",
              "notes": "Brace your lats, chest tall, pull the slack out of the bar before lifting"
            },
            {
              "id": "powerbuilding-w8-d1-ex2",
              "exerciseId": "Sumo Box Squat or Pause High-Bar Squat",
              "displayName": "Sumo Box Squat or Pause High-Bar Squat",
              "warmupSets": "2",
              "workingSets": 2,
              "targetReps": "8",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "If you squat high-bar, do sumo box squat. If you squat low-bar, do pause high-bar (2 sec pause)"
            },
            {
              "id": "powerbuilding-w8-d1-ex3",
              "exerciseId": "Leg Curl",
              "displayName": "Leg Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Do lying leg curl machine or nordic ham curl if no machine access"
            },
            {
              "id": "powerbuilding-w8-d1-ex4",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "1-2 second pause at the bottom of each rep, full squeeze at the top"
            },
            {
              "id": "powerbuilding-w8-d1-ex5",
              "exerciseId": "Hanging Leg Raise",
              "displayName": "Hanging Leg Raise",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Knees to chest, controlled reps, straighten legs more to increase difficulty"
            }
          ]
        },
        {
          "id": "powerbuilding-w8-d2",
          "name": "Upper #1",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w8-d2-ex1",
              "exerciseId": "Flat-Back Bench Press",
              "displayName": "Flat-Back Bench Press",
              "warmupSets": "3",
              "workingSets": 3,
              "targetReps": "10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "3-4 MIN",
              "notes": "Shoulder blades still retracted and depressed. Slight arch in upper back. Minimize leg drive."
            },
            {
              "id": "powerbuilding-w8-d2-ex2",
              "exerciseId": "Chin-Up",
              "displayName": "Chin-Up",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2-3 MIN",
              "notes": "Underhand grip, pull your chest to the bar, add weight if needed to hit RPE"
            },
            {
              "id": "powerbuilding-w8-d2-ex3",
              "exerciseId": "Overhead Press / Push Press",
              "displayName": "Overhead Press / Push Press",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "3/3",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "1-2 MIN",
              "notes": "First 3 reps strict military press (no leg drive), last 3 reps push press (use leg drive)"
            },
            {
              "id": "powerbuilding-w8-d2-ex4",
              "exerciseId": "Chest-Supported Dumbbell Row",
              "displayName": "Chest-Supported Dumbbell Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "3-4 MIN",
              "notes": "Lie on an incline bench and do rows - pull with lats!"
            },
            {
              "id": "powerbuilding-w8-d2-ex5",
              "exerciseId": "A1: Face Pull",
              "displayName": "A1: Face Pull",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Can use cable/rope or band, retract your shoulder blades as you pull"
            },
            {
              "id": "powerbuilding-w8-d2-ex6",
              "exerciseId": "A2: Dumbbell Lateral Raise",
              "displayName": "A2: Dumbbell Lateral Raise",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Arc the dumbbell out, mind-muscle connection with middle fibers"
            },
            {
              "id": "powerbuilding-w8-d2-ex7",
              "exerciseId": "B1: Concentration Bicep Curl",
              "displayName": "B1: Concentration Bicep Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Pin your elbow against your upper leg or the back of a bench"
            },
            {
              "id": "powerbuilding-w8-d2-ex8",
              "exerciseId": "B2: Triceps Pressdown",
              "displayName": "B2: Triceps Pressdown",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Can do with cables or bands, squeeze triceps to move the weight"
            }
          ]
        },
        {
          "id": "powerbuilding-w8-d3",
          "name": "Lower #2",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w8-d3-ex1",
              "exerciseId": "Low-Bar Back Squat",
              "displayName": "Low-Bar Back Squat",
              "warmupSets": "4",
              "workingSets": 3,
              "targetReps": "7",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-4 MIN",
              "notes": "Sit back and down, keep your upper back tight to the bar"
            },
            {
              "id": "powerbuilding-w8-d3-ex2",
              "exerciseId": "3\" Block Pull",
              "displayName": "3\" Block Pull",
              "warmupSets": "3",
              "workingSets": 2,
              "targetReps": "4",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "4-5 MIN",
              "notes": "Do block pulls from a 3\" block (can use 25lb + 10lb bumpers as blocks)"
            },
            {
              "id": "powerbuilding-w8-d3-ex3",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Use bands if no machine access, mind-muscle connection with quads"
            },
            {
              "id": "powerbuilding-w8-d3-ex4",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "0",
              "workingSets": 4,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Emphasize the mind-muscle connection"
            },
            {
              "id": "powerbuilding-w8-d3-ex5",
              "exerciseId": "Banded Lateral Walk or Hip Abduction",
              "displayName": "Banded Lateral Walk or Hip Abduction",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Point toes slightly outward, mind-muscle connection with glutes"
            },
            {
              "id": "powerbuilding-w8-d3-ex6",
              "exerciseId": "V Sit-Up",
              "displayName": "V Sit-Up",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Think about squeezing your upper and lower abs together"
            }
          ]
        },
        {
          "id": "powerbuilding-w8-d4",
          "name": "Upper #2",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w8-d4-ex1",
              "exerciseId": "Dumbbell Incline Press",
              "displayName": "Dumbbell Incline Press",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2-3 MIN",
              "notes": "45┬░ incline, keep shoulder blades retracted and depressed"
            },
            {
              "id": "powerbuilding-w8-d4-ex2",
              "exerciseId": "Pendlay Row",
              "displayName": "Pendlay Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "Be mindful of lower back fatigue. Stay light, minimize cheating"
            },
            {
              "id": "powerbuilding-w8-d4-ex3",
              "exerciseId": "Weighted Dip",
              "displayName": "Weighted Dip",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "6",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "Do dumbbell floor press if no access to dip handles"
            },
            {
              "id": "powerbuilding-w8-d4-ex4",
              "exerciseId": "Eccentric-Accentuated Pull-Up",
              "displayName": "Eccentric-Accentuated Pull-Up",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "AMRAP",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2-3 MIN",
              "notes": "3 second negative on every rep, maintain controlled form for all reps"
            },
            {
              "id": "powerbuilding-w8-d4-ex5",
              "exerciseId": "A1. Incline Shrug",
              "displayName": "A1. Incline Shrug",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Lie face down against an incline bench and do shrugs - full ROM and squeeze!"
            },
            {
              "id": "powerbuilding-w8-d4-ex6",
              "exerciseId": "A2. Bent Over Reverse Dumbbell Flye",
              "displayName": "A2. Bent Over Reverse Dumbbell Flye",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Mind-muscle connection with rear delts, sweep the weight out"
            },
            {
              "id": "powerbuilding-w8-d4-ex7",
              "exerciseId": "B1: Barbbell Curl",
              "displayName": "B1: Barbbell Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Focus on the mind-muscle connection"
            },
            {
              "id": "powerbuilding-w8-d4-ex8",
              "exerciseId": "B2. Skull Crusher",
              "displayName": "B2. Skull Crusher",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "30SEC",
              "notes": "Barbell or EZ bar, do these on a bench, constant tension on triceps"
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 9,
      "title": "Week 9",
      "isDeload": false,
      "days": [
        {
          "id": "powerbuilding-w9-d1",
          "name": "Full Body 1: Squat, OHP",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w9-d1-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "4",
              "workingSets": 1,
              "targetReps": "2",
              "earlySetRpe": "RPE 8.5",
              "lastSetRpe": "RPE 8.5",
              "restPeriod": "4-5 MIN",
              "notes": "Top Set. Leave 1 (maybe 2) reps in the tank. Aim for near 2 rep PR."
            },
            {
              "id": "powerbuilding-w9-d1-ex2",
              "exerciseId": "Squat Walk-Out (DO NOT SQUAT)",
              "displayName": "Squat Walk-Out (DO NOT SQUAT)",
              "warmupSets": "0",
              "workingSets": 1,
              "targetReps": "10-SEC",
              "earlySetRpe": "RPE NO REPS",
              "lastSetRpe": "RPE NO REPS",
              "restPeriod": "4-5 MIN",
              "notes": "Do not squat. Walk the weight out, hold and walk back in. Set the safety pins high and have a spotter."
            },
            {
              "id": "powerbuilding-w9-d1-ex3",
              "exerciseId": "Overhead Press",
              "displayName": "Overhead Press",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "6",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "2-3 MIN",
              "notes": "Reset each rep (don't touch-and-press)"
            },
            {
              "id": "powerbuilding-w9-d1-ex4",
              "exerciseId": "Glute Ham Raise",
              "displayName": "Glute Ham Raise",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "1-2 MIN",
              "notes": "Keep your hips straight, do nordic ham curls if no GHR machine"
            },
            {
              "id": "powerbuilding-w9-d1-ex5",
              "exerciseId": "Helms Row",
              "displayName": "Helms Row",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Strict form. Drive elbows out and back at 45 degree angle"
            },
            {
              "id": "powerbuilding-w9-d1-ex6",
              "exerciseId": "Hammer Curl",
              "displayName": "Hammer Curl",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1-2 MIN",
              "notes": "Keep elbows locked in place, squeeze the dumbbell handle hard!"
            }
          ]
        },
        {
          "id": "powerbuilding-w9-d2",
          "name": "Full Body 2: Deadlift, Bench",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w9-d2-ex1",
              "exerciseId": "Deadlift",
              "displayName": "Deadlift",
              "warmupSets": "4",
              "workingSets": 3,
              "targetReps": "4",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-5 MIN",
              "notes": "Semi-Deload. Focus on technique and bar speed leading into max week."
            },
            {
              "id": "powerbuilding-w9-d2-ex2",
              "exerciseId": "Barbell Bench Press",
              "displayName": "Barbell Bench Press",
              "warmupSets": "4",
              "workingSets": 1,
              "targetReps": "2",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "4-5 MIN",
              "notes": "Top Set. Aim for a near 2 rep PR"
            },
            {
              "id": "powerbuilding-w9-d2-ex3",
              "exerciseId": "Hip Abduction",
              "displayName": "Hip Abduction",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Machine, band or weighted, 1 second isometric hold at the top of each rep"
            },
            {
              "id": "powerbuilding-w9-d2-ex4",
              "exerciseId": "Weighted Pull-Up",
              "displayName": "Weighted Pull-Up",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "3-5",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "1.5x shoulder width grip, pull your chest to the bar"
            },
            {
              "id": "powerbuilding-w9-d2-ex5",
              "exerciseId": "Floor Skull Crusher",
              "displayName": "Floor Skull Crusher",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Arc the bar back behind your head, soft touch on the floor behind you"
            },
            {
              "id": "powerbuilding-w9-d2-ex6",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "8",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "1-2 second pause at the bottom of each rep, full ROM"
            }
          ]
        },
        {
          "id": "powerbuilding-w9-d3",
          "name": "Full Body 3: Squat, Dip",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w9-d3-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "4",
              "workingSets": 3,
              "targetReps": "4",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-4 MIN",
              "notes": "Maintain tight pressure in your upper back against the bar"
            },
            {
              "id": "powerbuilding-w9-d3-ex2",
              "exerciseId": "Weighted Dip",
              "displayName": "Weighted Dip",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2-3 MIN",
              "notes": "Do dumbbell floor press if no access to dip handles"
            },
            {
              "id": "powerbuilding-w9-d3-ex3",
              "exerciseId": "Hanging Leg Raise",
              "displayName": "Hanging Leg Raise",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Knees to chest, controlled reps, straighten legs more to increase difficulty"
            },
            {
              "id": "powerbuilding-w9-d3-ex4",
              "exerciseId": "Lat Pull-Over",
              "displayName": "Lat Pull-Over",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Can use a DB, cable/rope or band, stretch and squeeze lats!"
            },
            {
              "id": "powerbuilding-w9-d3-ex5",
              "exerciseId": "Incline Dumbbell Curl",
              "displayName": "Incline Dumbbell Curl",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Do each arm one at a time rather than alternating, start with your weak arm"
            },
            {
              "id": "powerbuilding-w9-d3-ex6",
              "exerciseId": "Face Pull",
              "displayName": "Face Pull",
              "warmupSets": "0",
              "workingSets": 4,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Can use cable/rope or band, retract your shoulder blades as you pull"
            }
          ]
        },
        {
          "id": "powerbuilding-w9-d4",
          "name": "Full Body 4: Deadlift, Bench",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w9-d4-ex1",
              "exerciseId": "Pause Deadlift",
              "displayName": "Pause Deadlift",
              "warmupSets": "4",
              "workingSets": 4,
              "targetReps": "2",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-4 MIN",
              "notes": "3 second pause right after the plates come off the ground"
            },
            {
              "id": "powerbuilding-w9-d4-ex2",
              "exerciseId": "Pause Barbell Bench Press",
              "displayName": "Pause Barbell Bench Press",
              "warmupSets": "3",
              "workingSets": 3,
              "targetReps": "5",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "2-3 MIN",
              "notes": "2-3 second pause on the chest"
            },
            {
              "id": "powerbuilding-w9-d4-ex3",
              "exerciseId": "Chest-Supported T-Bar Row or Pendlay Row",
              "displayName": "Chest-Supported T-Bar Row or Pendlay Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "1-2 MIN",
              "notes": "Be mindful of lower back fatigue. Stay light, minimize cheating"
            },
            {
              "id": "powerbuilding-w9-d4-ex4",
              "exerciseId": "Nordic Ham Curl",
              "displayName": "Nordic Ham Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Bend forward at hips during the concentric and minimize contribution from hands"
            },
            {
              "id": "powerbuilding-w9-d4-ex5",
              "exerciseId": "Dumbbell Shrug",
              "displayName": "Dumbbell Shrug",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1-2 MIN",
              "notes": "Feel a stretch on the traps at the bottom, squeeze hard at the top"
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 10,
      "title": "Week 10A: Max Testing",
      "isDeload": false,
      "days": [
        {
          "id": "powerbuilding-w10-d1",
          "name": "Squat Test",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w10-d1-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "4",
              "workingSets": 1,
              "targetReps": "AMRAP",
              "earlySetRpe": "RPE 9.5",
              "lastSetRpe": "RPE 9.5",
              "restPeriod": "4-5 MIN",
              "notes": "As many reps as possible. Always use a spotter and good form. Aim to 3+ reps"
            },
            {
              "id": "powerbuilding-w10-d1-ex2",
              "exerciseId": "Single-Arm Lat Pulldown",
              "displayName": "Single-Arm Lat Pulldown",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2-3 MIN",
              "notes": "Perform with bands if no lat pulldown, drive elbows down and in"
            },
            {
              "id": "powerbuilding-w10-d1-ex3",
              "exerciseId": "Incline Dumbbell Curl",
              "displayName": "Incline Dumbbell Curl",
              "warmupSets": "0",
              "workingSets": 4,
              "targetReps": "12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Focus on the mind-muscle connection"
            },
            {
              "id": "powerbuilding-w10-d1-ex4",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "1-2 second pause at the bottom of each rep, full squeeze at the top"
            }
          ]
        },
        {
          "id": "powerbuilding-w10-d2",
          "name": "Bench Test",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w10-d2-ex1",
              "exerciseId": "Barbell Bench Press",
              "displayName": "Barbell Bench Press",
              "warmupSets": "4",
              "workingSets": 1,
              "targetReps": "AMRAP",
              "earlySetRpe": "RPE 9.5",
              "lastSetRpe": "RPE 9.5",
              "restPeriod": "4-5 MIN",
              "notes": "As many reps as possible. Always use a spotter and good form. Aim to 3+ reps"
            },
            {
              "id": "powerbuilding-w10-d2-ex2",
              "exerciseId": "Leg Curl",
              "displayName": "Leg Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2-3 MIN",
              "notes": "Do lying leg curl machine or nordic ham curl if no machine access"
            },
            {
              "id": "powerbuilding-w10-d2-ex3",
              "exerciseId": "Dumbbell Lateral Raise",
              "displayName": "Dumbbell Lateral Raise",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Arc the dumbbell out, mind-muscle connection with middle fibers"
            },
            {
              "id": "powerbuilding-w10-d2-ex4",
              "exerciseId": "Triceps Pressdown",
              "displayName": "Triceps Pressdown",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Can do with cables or bands, squeeze triceps to move the weight"
            }
          ]
        },
        {
          "id": "powerbuilding-w10-d3",
          "name": "Deadlift Test",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w10-d3-ex1",
              "exerciseId": "Deadlift",
              "displayName": "Deadlift",
              "warmupSets": "4",
              "workingSets": 1,
              "targetReps": "AMRAP",
              "earlySetRpe": "RPE 9.5",
              "lastSetRpe": "RPE 9.5",
              "restPeriod": "4-5 MIN",
              "notes": "As many reps as possible. Always use good form. Aim to 3+ reps"
            },
            {
              "id": "powerbuilding-w10-d3-ex2",
              "exerciseId": "Overhead Press",
              "displayName": "Overhead Press",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "10",
              "earlySetRpe": "RPE 6",
              "lastSetRpe": "RPE 6",
              "restPeriod": "2-3 MIN",
              "notes": "Reset each rep (don't touch-and-press)"
            },
            {
              "id": "powerbuilding-w10-d3-ex3",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "1-2 MIN",
              "notes": "Use bands if no machine access, mind-muscle connection with quads"
            },
            {
              "id": "powerbuilding-w10-d3-ex4",
              "exerciseId": "Bicycle Crunch",
              "displayName": "Bicycle Crunch",
              "warmupSets": "0",
              "workingSets": 4,
              "targetReps": "15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Focus on rounding your back as you crunch hard!"
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 11,
      "title": "Week 10B: Max Testing",
      "isDeload": false,
      "days": [
        {
          "id": "powerbuilding-w11-d1",
          "name": "Squat Test",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w11-d1-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "5",
              "workingSets": 3,
              "targetReps": "1",
              "earlySetRpe": "RPE 9.5",
              "lastSetRpe": "RPE 9.5",
              "restPeriod": "4-5 MIN",
              "notes": "Aim for a new PR. Start with 100% and increase by ~2.5% every attempt until you hit a 9.5 RPE. Use a spotter and good form!"
            },
            {
              "id": "powerbuilding-w11-d1-ex2",
              "exerciseId": "Single-Arm Lat Pulldown",
              "displayName": "Single-Arm Lat Pulldown",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2-3 MIN",
              "notes": "Perform with bands if no lat pulldown, drive elbows down and in"
            },
            {
              "id": "powerbuilding-w11-d1-ex3",
              "exerciseId": "Incline Dumbbell Curl",
              "displayName": "Incline Dumbbell Curl",
              "warmupSets": "0",
              "workingSets": 4,
              "targetReps": "12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Focus on the mind-muscle connection"
            },
            {
              "id": "powerbuilding-w11-d1-ex4",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "1-2 second pause at the bottom of each rep, full squeeze at the top"
            }
          ]
        },
        {
          "id": "powerbuilding-w11-d2",
          "name": "Bench Test",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w11-d2-ex1",
              "exerciseId": "Barbell Bench Press",
              "displayName": "Barbell Bench Press",
              "warmupSets": "5",
              "workingSets": 3,
              "targetReps": "1",
              "earlySetRpe": "RPE 9.5",
              "lastSetRpe": "RPE 9.5",
              "restPeriod": "4-5 MIN",
              "notes": "Aim for a new PR. Start with 100% and increase by ~2.5% every attempt until you hit a 9.5 RPE. Use a spotter and good form!"
            },
            {
              "id": "powerbuilding-w11-d2-ex2",
              "exerciseId": "Leg Curl",
              "displayName": "Leg Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2-3 MIN",
              "notes": "Do lying leg curl machine or nordic ham curl if no machine access"
            },
            {
              "id": "powerbuilding-w11-d2-ex3",
              "exerciseId": "Dumbbell Lateral Raise",
              "displayName": "Dumbbell Lateral Raise",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Arc the dumbbell out, mind-muscle connection with middle fibers"
            },
            {
              "id": "powerbuilding-w11-d2-ex4",
              "exerciseId": "Triceps Pressdown",
              "displayName": "Triceps Pressdown",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Can do with cables or bands, squeeze triceps to move the weight"
            }
          ]
        },
        {
          "id": "powerbuilding-w11-d3",
          "name": "Deadlift Test",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w11-d3-ex1",
              "exerciseId": "Deadlift",
              "displayName": "Deadlift",
              "warmupSets": "5",
              "workingSets": 3,
              "targetReps": "1",
              "earlySetRpe": "RPE 9.5",
              "lastSetRpe": "RPE 9.5",
              "restPeriod": "4-5 MIN",
              "notes": "Aim for a new PR. Start with 100% and increase by ~2.5% every attempt. 5-min rest between attempts. Use good form!"
            },
            {
              "id": "powerbuilding-w11-d3-ex2",
              "exerciseId": "Overhead Press",
              "displayName": "Overhead Press",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "10",
              "earlySetRpe": "RPE 6",
              "lastSetRpe": "RPE 6",
              "restPeriod": "2-3 MIN",
              "notes": "Reset each rep (don't touch-and-press)"
            },
            {
              "id": "powerbuilding-w11-d3-ex3",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "1-2 MIN",
              "notes": "Use bands if no machine access, mind-muscle connection with quads"
            },
            {
              "id": "powerbuilding-w11-d3-ex4",
              "exerciseId": "Bicycle Crunch",
              "displayName": "Bicycle Crunch",
              "warmupSets": "0",
              "workingSets": 4,
              "targetReps": "15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Focus on rounding your back as you crunch hard!"
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 12,
      "title": "Week 11 [Deload]",
      "isDeload": true,
      "days": [
        {
          "id": "powerbuilding-w12-d1",
          "name": "Lower #1",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w12-d1-ex1",
              "exerciseId": "Deadlift",
              "displayName": "Deadlift",
              "warmupSets": "4",
              "workingSets": 2,
              "targetReps": "3",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-5 MIN",
              "notes": "Brace your lats, chest tall, pull the slack out of the bar before lifting"
            },
            {
              "id": "powerbuilding-w12-d1-ex2",
              "exerciseId": "Sumo Box Squat or Pause High-Bar Squat",
              "displayName": "Sumo Box Squat or Pause High-Bar Squat",
              "warmupSets": "2",
              "workingSets": 2,
              "targetReps": "6",
              "earlySetRpe": "RPE 5",
              "lastSetRpe": "RPE 5",
              "restPeriod": "2-3 MIN",
              "notes": "If you squat high-bar, do sumo box squat. If you squat low-bar, do pause high-bar (2 sec pause)"
            },
            {
              "id": "powerbuilding-w12-d1-ex3",
              "exerciseId": "Leg Curl",
              "displayName": "Leg Curl",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 6",
              "lastSetRpe": "RPE 6",
              "restPeriod": "1-2 MIN",
              "notes": "Do lying leg curl machine or nordic ham curl if no machine access"
            },
            {
              "id": "powerbuilding-w12-d1-ex4",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 6",
              "lastSetRpe": "RPE 6",
              "restPeriod": "1-2 MIN",
              "notes": "1-2 second pause at the bottom of each rep, full squeeze at the top"
            },
            {
              "id": "powerbuilding-w12-d1-ex5",
              "exerciseId": "Hanging Leg Raise",
              "displayName": "Hanging Leg Raise",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 6",
              "lastSetRpe": "RPE 6",
              "restPeriod": "1-2 MIN",
              "notes": "Knees to chest, controlled reps, straighten legs more to increase difficulty"
            }
          ]
        },
        {
          "id": "powerbuilding-w12-d2",
          "name": "Upper #1",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w12-d2-ex1",
              "exerciseId": "Barbell Bench Press",
              "displayName": "Barbell Bench Press",
              "warmupSets": "3",
              "workingSets": 2,
              "targetReps": "6",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-4 MIN",
              "notes": "Set up a comfortable arch, slight pause on the chest, explode up"
            },
            {
              "id": "powerbuilding-w12-d2-ex2",
              "exerciseId": "Assisted Chin-Up",
              "displayName": "Assisted Chin-Up",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "Underhand grip, pull your chest to the bar, add weight if needed to hit RPE"
            },
            {
              "id": "powerbuilding-w12-d2-ex3",
              "exerciseId": "Overhead Press",
              "displayName": "Overhead Press",
              "warmupSets": "2",
              "workingSets": 2,
              "targetReps": "4",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "2-3 MIN",
              "notes": "Squeeze your glutes to keep your torso upright, press up and slightly back"
            },
            {
              "id": "powerbuilding-w12-d2-ex4",
              "exerciseId": "Chest-Supported Dumbbell Row",
              "displayName": "Chest-Supported Dumbbell Row",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "1-2 MIN",
              "notes": "Lie on an incline bench and do rows - pull with lats!"
            },
            {
              "id": "powerbuilding-w12-d2-ex5",
              "exerciseId": "A1: Face Pull",
              "displayName": "A1: Face Pull",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "30SEC",
              "notes": "Can use cable/rope or band, retract your shoulder blades as you pull"
            },
            {
              "id": "powerbuilding-w12-d2-ex6",
              "exerciseId": "A2: Dumbbell Lateral Raise",
              "displayName": "A2: Dumbbell Lateral Raise",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "30SEC",
              "notes": "Arc the dumbbell out, mind-muscle connection with middle fibers"
            },
            {
              "id": "powerbuilding-w12-d2-ex7",
              "exerciseId": "B1: Concentration Bicep Curl",
              "displayName": "B1: Concentration Bicep Curl",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "30SEC",
              "notes": "Pin your elbow against your upper leg or the back of a bench"
            },
            {
              "id": "powerbuilding-w12-d2-ex8",
              "exerciseId": "B2: Triceps Pressdown",
              "displayName": "B2: Triceps Pressdown",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "30SEC",
              "notes": "Can do with cables or bands, squeeze triceps to move the weight"
            }
          ]
        },
        {
          "id": "powerbuilding-w12-d3",
          "name": "Lower #2",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w12-d3-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "4",
              "workingSets": 2,
              "targetReps": "6",
              "earlySetRpe": "RPE 8.0",
              "lastSetRpe": "RPE 8.0",
              "restPeriod": "3-4 MIN",
              "notes": "Sit back and down, keep your upper back tight to the bar"
            },
            {
              "id": "powerbuilding-w12-d3-ex2",
              "exerciseId": "Snatch-Grip Romanian Deadlift",
              "displayName": "Snatch-Grip Romanian Deadlift",
              "warmupSets": "2",
              "workingSets": 2,
              "targetReps": "8",
              "earlySetRpe": "RPE 6",
              "lastSetRpe": "RPE 6",
              "restPeriod": "2-3 MIN",
              "notes": "Wide grip, mind-muscle connection with hamstrings"
            },
            {
              "id": "powerbuilding-w12-d3-ex3",
              "exerciseId": "Leg Extension",
              "displayName": "Leg Extension",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "1-2 MIN",
              "notes": "Use bands if no machine access, mind-muscle connection with quads"
            },
            {
              "id": "powerbuilding-w12-d3-ex4",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Emphasize the mind-muscle connection"
            },
            {
              "id": "powerbuilding-w12-d3-ex5",
              "exerciseId": "Banded Lateral Walk or Hip Abduction",
              "displayName": "Banded Lateral Walk or Hip Abduction",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Point toes slightly outward, mind-muscle connection with glutes"
            },
            {
              "id": "powerbuilding-w12-d3-ex6",
              "exerciseId": "V Sit-Up",
              "displayName": "V Sit-Up",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1-2 MIN",
              "notes": "Think about squeezing your upper and lower abs together"
            }
          ]
        },
        {
          "id": "powerbuilding-w12-d4",
          "name": "Upper #2",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "powerbuilding-w12-d4-ex1",
              "exerciseId": "Close-Grip Bench Press",
              "displayName": "Close-Grip Bench Press",
              "warmupSets": "3",
              "workingSets": 3,
              "targetReps": "10",
              "earlySetRpe": "RPE 6",
              "lastSetRpe": "RPE 6",
              "restPeriod": "2-3 MIN",
              "notes": "Shoulder width grip, tuck your elbows in closer to your torso"
            },
            {
              "id": "powerbuilding-w12-d4-ex2",
              "exerciseId": "Chest-Supported Dumbbell Row",
              "displayName": "Chest-Supported Dumbbell Row",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "10",
              "earlySetRpe": "RPE 6",
              "lastSetRpe": "RPE 6",
              "restPeriod": "3-4 MIN",
              "notes": "Lie on an incline bench and do rows - pull with lats!"
            },
            {
              "id": "powerbuilding-w12-d4-ex3",
              "exerciseId": "Weighted Dip",
              "displayName": "Weighted Dip",
              "warmupSets": "2",
              "workingSets": 2,
              "targetReps": "6",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "2-3 MIN",
              "notes": "Do dumbbell floor press if no access to dip handles"
            },
            {
              "id": "powerbuilding-w12-d4-ex4",
              "exerciseId": "Single-Arm Lat Pulldown",
              "displayName": "Single-Arm Lat Pulldown",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "10",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2-3 MIN",
              "notes": "Perform with bands if no lat pulldown, drive elbows down and in"
            },
            {
              "id": "powerbuilding-w12-d4-ex5",
              "exerciseId": "A1. Incline Shrug",
              "displayName": "A1. Incline Shrug",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "30SEC",
              "notes": "Lie face down against an incline bench and do shrugs - full ROM and squeeze!"
            },
            {
              "id": "powerbuilding-w12-d4-ex6",
              "exerciseId": "A2. Upright Row",
              "displayName": "A2. Upright Row",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "30SEC",
              "notes": "Can use cables/rope, bands or dumbbells. Stop ROM once elbows reach shoulder height."
            },
            {
              "id": "powerbuilding-w12-d4-ex7",
              "exerciseId": "B1: Barbbell Curl",
              "displayName": "B1: Barbbell Curl",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "30SEC",
              "notes": "Focus on the mind-muscle connection"
            },
            {
              "id": "powerbuilding-w12-d4-ex8",
              "exerciseId": "B2. Skull Crusher",
              "displayName": "B2. Skull Crusher",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "30SEC",
              "notes": "Barbell or EZ bar, do these on a bench, constant tension on triceps"
            }
          ]
        }
      ]
    }
  ]
};
