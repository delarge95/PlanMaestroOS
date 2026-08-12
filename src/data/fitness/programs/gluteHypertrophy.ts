// src/data/fitness/programs/gluteHypertrophyProgram.ts - 100% Complete Faithful FitApp Export
import type { TrainingProgram } from './types';

export const gluteHypertrophyProgram: TrainingProgram = {
  "id": "glute-hypertrophy",
  "title": "Glute Hypertrophy Program (5 Días/Semana)",
  "source": "Jeff Nippard (2023)",
  "pdfUrl": "/library/fitness/glute-hypertrophy-program.pdf",
  "durationWeeks": 8,
  "split": [
    "Día 1: Lower Body (Fuerza & Glúteo)",
    "Día 2: Upper Body (Hipertrofia)",
    "Día 3: Lower Body (Hipertrofia)",
    "Día 4: Upper Body + Glúteo (Metabólico)",
    "Día 5: Lower Body (Hipertrofia)"
  ],
  "methodology": [
    "Enfoque en Glúteo Máximo, Medio y Cadena Posterior",
    "Estructura Fiel de 5 Días por Semana (FitApp Original)",
    "Técnicas Metabólicas y Aislamiento"
  ],
  "equipment": [
    "Barbell",
    "Dumbbells",
    "Machines",
    "Resistance Bands"
  ],
  "weeks": [
    {
      "weekNumber": 1,
      "title": "Week 1: Accumulation Block",
      "isDeload": false,
      "days": [
        {
          "id": "glute-hypertrophy-w1-d1",
          "name": "Day 1: Lower Body (Strength)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w1-d1-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "pyramid",
              "workingSets": 3,
              "targetReps": "5",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "3.0 min",
              "notes": "Drive through heels, knees out. Wider stance, 15┬░ foot flare."
            },
            {
              "id": "glute-hypertrophy-w1-d1-ex2",
              "exerciseId": "Romanian Deadlift",
              "displayName": "Romanian Deadlift",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Set hips back until stretch is felt, then thrust hips forward and squeeze glutes hard at the top."
            },
            {
              "id": "glute-hypertrophy-w1-d1-ex3",
              "exerciseId": "A1: Seated Leg Curl",
              "displayName": "A1: Seated Leg Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "0.0 min",
              "notes": "Superset with A2. Full ROM, feel stretch on hamstrings."
            },
            {
              "id": "glute-hypertrophy-w1-d1-ex4",
              "exerciseId": "A2: Swiss Ball Leg Curl",
              "displayName": "A2: Swiss Ball Leg Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Keep glutes elevated, thighs in a straight line with upper body. Curl ball in toward your glutes."
            },
            {
              "id": "glute-hypertrophy-w1-d1-ex5",
              "exerciseId": "Machine Hip Abduction (Glutes Elevated)",
              "displayName": "Machine Hip Abduction (Glutes Elevated)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "25-30",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Keep glutes 2-6 inches elevated. Use a fast tempo and constant tension."
            },
            {
              "id": "glute-hypertrophy-w1-d1-ex6",
              "exerciseId": "Leg Raise Variation (Abs)",
              "displayName": "Leg Raise Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Can perform hanging, roman chair, or lying."
            },
            {
              "id": "glute-hypertrophy-w1-d1-ex7",
              "exerciseId": "Crunch Variation (Abs)",
              "displayName": "Crunch Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Can perform using a cable, weighted, or machine."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w1-d2",
          "name": "Day 2: Upper Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w1-d2-ex1",
              "exerciseId": "Seated Dumbbell Press",
              "displayName": "Seated Dumbbell Press",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2.0 min",
              "notes": "Keep shoulder blades retracted, stop ROM once elbows reach 90┬░."
            },
            {
              "id": "glute-hypertrophy-w1-d2-ex2",
              "exerciseId": "Close Grip Lat Pulldown",
              "displayName": "Close Grip Lat Pulldown",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2.0 min",
              "notes": "Pull through elbows, think of arms as \"connectors\", touch bar to chest."
            },
            {
              "id": "glute-hypertrophy-w1-d2-ex3",
              "exerciseId": "Close Grip Seated Cable Row",
              "displayName": "Close Grip Seated Cable Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Drive elbows down for lat focus over trap focus, pull to stomach."
            },
            {
              "id": "glute-hypertrophy-w1-d2-ex4",
              "exerciseId": "Lean Away Cable Lateral Raise",
              "displayName": "Lean Away Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Put cable between legs and lean away. Drive \"out\" with the back of your hand."
            },
            {
              "id": "glute-hypertrophy-w1-d2-ex5",
              "exerciseId": "Reverse Pec Deck",
              "displayName": "Reverse Pec Deck",
              "warmupSets": "1",
              "workingSets": 4,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Push handles \"out\", don't pull \"back\"."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w1-d3",
          "name": "Day 3: Lower Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w1-d3-ex1",
              "exerciseId": "Barbell Hip Thrust",
              "displayName": "Barbell Hip Thrust",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Wider stance, 15┬░ foot flare, squeeze glutes at top."
            },
            {
              "id": "glute-hypertrophy-w1-d3-ex2",
              "exerciseId": "Barbell Hip Thrust (Dropset)",
              "displayName": "Barbell Hip Thrust (Dropset)",
              "warmupSets": "0",
              "workingSets": 1,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Reduce load by ~40-50%, perform another 15-20 reps."
            },
            {
              "id": "glute-hypertrophy-w1-d3-ex3",
              "exerciseId": "A1: Cable Pullthrough",
              "displayName": "A1: Cable Pullthrough",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "0.0 min",
              "notes": "Superset with A2. Rope attachment, slight knee bend, set hips back for big stretch, explosively thrust forward."
            },
            {
              "id": "glute-hypertrophy-w1-d3-ex4",
              "exerciseId": "A2: Single Leg Hip Thrust",
              "displayName": "A2: Single Leg Hip Thrust",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "2.0 min",
              "notes": "Use preloaded barbell or hold plate. Constant tension on glutes."
            },
            {
              "id": "glute-hypertrophy-w1-d3-ex5",
              "exerciseId": "Cable Glute Kick Back",
              "displayName": "Cable Glute Kick Back",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Slight lean forward, push back then up in a slight arc. Hold upright for support."
            },
            {
              "id": "glute-hypertrophy-w1-d3-ex6",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Feet pointed straight ahead, 1 second pause at the bottom of each rep."
            },
            {
              "id": "glute-hypertrophy-w1-d3-ex7",
              "exerciseId": "Leg Raise Variation (Abs)",
              "displayName": "Leg Raise Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Can perform hanging, roman chair or lying."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w1-d4",
          "name": "Day 4: Upper Body + Glute (Metabolic)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w1-d4-ex1",
              "exerciseId": "Wide Grip Lat Pulldown",
              "displayName": "Wide Grip Lat Pulldown",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Lean back 30┬░, use slight momentum, last set to failure."
            },
            {
              "id": "glute-hypertrophy-w1-d4-ex2",
              "exerciseId": "1-Arm Dumbbell Row",
              "displayName": "1-Arm Dumbbell Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Pull dumbbell \"to back pocket\", stretch lats at bottom."
            },
            {
              "id": "glute-hypertrophy-w1-d4-ex3",
              "exerciseId": "Incline Dumbbell Chest Press",
              "displayName": "Incline Dumbbell Chest Press",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "45┬░ incline, mind-muscle connection with upper pecs."
            },
            {
              "id": "glute-hypertrophy-w1-d4-ex4",
              "exerciseId": "Dumbbell Raise Complex",
              "displayName": "Dumbbell Raise Complex",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "15+15+15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "15 side raises, 15 front raises, 15 rear delt flyes, no rest = 1 set."
            },
            {
              "id": "glute-hypertrophy-w1-d4-ex5",
              "exerciseId": "Banded Lateral Raise",
              "displayName": "Banded Lateral Raise",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "30",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Stand in middle of band, faster tempo, constant tension on delts."
            },
            {
              "id": "glute-hypertrophy-w1-d4-ex6",
              "exerciseId": "Banded Squat Bouncer",
              "displayName": "Banded Squat Bouncer",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "2/3 bottom ROM, band around knees, constant tension on glutes."
            },
            {
              "id": "glute-hypertrophy-w1-d4-ex7",
              "exerciseId": "Banded Abduction (Seated)",
              "displayName": "Banded Abduction (Seated)",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Band around knees, focus on driving knees out, feel glute medius."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w1-d5",
          "name": "Day 5: Lower Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w1-d5-ex1",
              "exerciseId": "Walking Lunge",
              "displayName": "Walking Lunge",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "20",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "1.5 min",
              "notes": "20 total strides. Use DBs or a barbell."
            },
            {
              "id": "glute-hypertrophy-w1-d5-ex2",
              "exerciseId": "Cable Glute Kick Back",
              "displayName": "Cable Glute Kick Back",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Slight lean forward, push back then up in a slight arc."
            },
            {
              "id": "glute-hypertrophy-w1-d5-ex3",
              "exerciseId": "Lower Back Extension",
              "displayName": "Lower Back Extension",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Slightly round lower back, 15┬░ foot flare, squeeze glutes at top of each rep."
            },
            {
              "id": "glute-hypertrophy-w1-d5-ex4",
              "exerciseId": "Banded Side Walk",
              "displayName": "Banded Side Walk",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "40",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "20 reps each direction, miniband around feet, slight bend at hips, short ~6 inch steps."
            },
            {
              "id": "glute-hypertrophy-w1-d5-ex5",
              "exerciseId": "Frog Pump",
              "displayName": "Frog Pump",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "30-50",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Hard glute squeeze at top, faster tempo, challenge yourself for more reps."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 2,
      "title": "Week 2: Accumulation Block",
      "isDeload": false,
      "days": [
        {
          "id": "glute-hypertrophy-w2-d1",
          "name": "Day 1: Lower Body (Strength)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w2-d1-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "pyramid",
              "workingSets": 3,
              "targetReps": "6",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "3.0 min",
              "notes": "Drive through heels, knees out. Wider stance, 15┬░ foot flare."
            },
            {
              "id": "glute-hypertrophy-w2-d1-ex2",
              "exerciseId": "Romanian Deadlift",
              "displayName": "Romanian Deadlift",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Set hips back until stretch is felt, then thrust hips forward and squeeze glutes hard at the top."
            },
            {
              "id": "glute-hypertrophy-w2-d1-ex3",
              "exerciseId": "A1: Seated Leg Curl",
              "displayName": "A1: Seated Leg Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "0.0 min",
              "notes": "Superset with A2. Full ROM, feel stretch on hamstrings."
            },
            {
              "id": "glute-hypertrophy-w2-d1-ex4",
              "exerciseId": "A2: Swiss Ball Leg Curl",
              "displayName": "A2: Swiss Ball Leg Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Keep glutes elevated, thighs in a straight line with upper body. Curl ball in toward your glutes."
            },
            {
              "id": "glute-hypertrophy-w2-d1-ex5",
              "exerciseId": "Machine Hip Abduction (Glutes Elevated)",
              "displayName": "Machine Hip Abduction (Glutes Elevated)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "25-30",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Keep glutes 2-6 inches elevated. Use a fast tempo and constant tension."
            },
            {
              "id": "glute-hypertrophy-w2-d1-ex6",
              "exerciseId": "Leg Raise Variation (Abs)",
              "displayName": "Leg Raise Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Can perform hanging, roman chair, or lying."
            },
            {
              "id": "glute-hypertrophy-w2-d1-ex7",
              "exerciseId": "Crunch Variation (Abs)",
              "displayName": "Crunch Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Can perform using a cable, weighted, or machine."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w2-d2",
          "name": "Day 2: Upper Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w2-d2-ex1",
              "exerciseId": "Seated Dumbbell Press",
              "displayName": "Seated Dumbbell Press",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2.0 min",
              "notes": "Keep shoulder blades retracted, stop ROM once elbows reach 90┬░."
            },
            {
              "id": "glute-hypertrophy-w2-d2-ex2",
              "exerciseId": "Close Grip Lat Pulldown",
              "displayName": "Close Grip Lat Pulldown",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "2.0 min",
              "notes": "Pull through elbows, think of arms as \"connectors\", touch bar to chest."
            },
            {
              "id": "glute-hypertrophy-w2-d2-ex3",
              "exerciseId": "Close Grip Seated Cable Row",
              "displayName": "Close Grip Seated Cable Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Drive elbows down for lat focus over trap focus, pull to stomach."
            },
            {
              "id": "glute-hypertrophy-w2-d2-ex4",
              "exerciseId": "Lean Away Cable Lateral Raise",
              "displayName": "Lean Away Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Put cable between legs and lean away. Drive \"out\" with the back of your hand."
            },
            {
              "id": "glute-hypertrophy-w2-d2-ex5",
              "exerciseId": "Reverse Pec Deck",
              "displayName": "Reverse Pec Deck",
              "warmupSets": "1",
              "workingSets": 4,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Push handles \"out\", don't pull \"back\"."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w2-d3",
          "name": "Day 3: Lower Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w2-d3-ex1",
              "exerciseId": "Barbell Hip Thrust",
              "displayName": "Barbell Hip Thrust",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Wider stance, 15┬░ foot flare, squeeze glutes at top."
            },
            {
              "id": "glute-hypertrophy-w2-d3-ex2",
              "exerciseId": "A1: Cable Pullthrough",
              "displayName": "A1: Cable Pullthrough",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "0.0 min",
              "notes": "Superset with A2. Rope attachment, slight knee bend, set hips back for big stretch, explosively thrust forward."
            },
            {
              "id": "glute-hypertrophy-w2-d3-ex3",
              "exerciseId": "A2: Single Leg Hip Thrust",
              "displayName": "A2: Single Leg Hip Thrust",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "2.0 min",
              "notes": "Use preloaded barbell or hold plate. Constant tension on glutes."
            },
            {
              "id": "glute-hypertrophy-w2-d3-ex4",
              "exerciseId": "Cable Glute Kick Back",
              "displayName": "Cable Glute Kick Back",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Slight lean forward, push back then up in a slight arc. Hold upright for support."
            },
            {
              "id": "glute-hypertrophy-w2-d3-ex5",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Feet pointed straight ahead, 1 second pause at the bottom of each rep."
            },
            {
              "id": "glute-hypertrophy-w2-d3-ex6",
              "exerciseId": "Leg Raise Variation (Abs)",
              "displayName": "Leg Raise Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Can perform hanging, roman chair or lying."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w2-d4",
          "name": "Day 4: Upper Body + Glute (Metabolic)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w2-d4-ex1",
              "exerciseId": "Wide Grip Lat Pulldown",
              "displayName": "Wide Grip Lat Pulldown",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Lean back 30┬░, use slight momentum, last set to failure."
            },
            {
              "id": "glute-hypertrophy-w2-d4-ex2",
              "exerciseId": "1-Arm Dumbbell Row",
              "displayName": "1-Arm Dumbbell Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Pull dumbbell \"to back pocket\", stretch lats at bottom."
            },
            {
              "id": "glute-hypertrophy-w2-d4-ex3",
              "exerciseId": "Incline Dumbbell Chest Press",
              "displayName": "Incline Dumbbell Chest Press",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "45┬░ incline, mind-muscle connection with upper pecs."
            },
            {
              "id": "glute-hypertrophy-w2-d4-ex4",
              "exerciseId": "Dumbbell Raise Complex",
              "displayName": "Dumbbell Raise Complex",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "15+15+15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "15 side raises, 15 front raises, 15 rear delt flyes, no rest = 1 set."
            },
            {
              "id": "glute-hypertrophy-w2-d4-ex5",
              "exerciseId": "Banded Lateral Raise",
              "displayName": "Banded Lateral Raise",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "30",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Stand in middle of band, faster tempo, constant tension on delts."
            },
            {
              "id": "glute-hypertrophy-w2-d4-ex6",
              "exerciseId": "Banded Squat Bouncer",
              "displayName": "Banded Squat Bouncer",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "2/3 bottom ROM, band around knees, constant tension on glutes."
            },
            {
              "id": "glute-hypertrophy-w2-d4-ex7",
              "exerciseId": "Banded Abduction (Seated)",
              "displayName": "Banded Abduction (Seated)",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Band around knees, focus on driving knees out, feel glute medius."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w2-d5",
          "name": "Day 5: Lower Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w2-d5-ex1",
              "exerciseId": "Walking Lunge",
              "displayName": "Walking Lunge",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "20",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "1.5 min",
              "notes": "20 total strides. Use DBs or a barbell."
            },
            {
              "id": "glute-hypertrophy-w2-d5-ex2",
              "exerciseId": "Cable Glute Kick Back",
              "displayName": "Cable Glute Kick Back",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Slight lean forward, push back then up in a slight arc."
            },
            {
              "id": "glute-hypertrophy-w2-d5-ex3",
              "exerciseId": "Lower Back Extension",
              "displayName": "Lower Back Extension",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Slightly round lower back, 15┬░ foot flare, squeeze glutes at top of each rep."
            },
            {
              "id": "glute-hypertrophy-w2-d5-ex4",
              "exerciseId": "Banded Side Walk",
              "displayName": "Banded Side Walk",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "40",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "20 reps each direction, miniband around feet, slight bend at hips, short ~6 inch steps."
            },
            {
              "id": "glute-hypertrophy-w2-d5-ex5",
              "exerciseId": "Frog Pump",
              "displayName": "Frog Pump",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "30-50",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Hard glute squeeze at top, faster tempo, challenge yourself for more reps."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 3,
      "title": "Week 3: Accumulation Block",
      "isDeload": false,
      "days": [
        {
          "id": "glute-hypertrophy-w3-d1",
          "name": "Day 1: Lower Body (Strength)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w3-d1-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "pyramid",
              "workingSets": 3,
              "targetReps": "6",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "3.0 min",
              "notes": "Drive through heels, knees out. Wider stance, 15┬░ foot flare."
            },
            {
              "id": "glute-hypertrophy-w3-d1-ex2",
              "exerciseId": "Romanian Deadlift",
              "displayName": "Romanian Deadlift",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Set hips back until stretch is felt, then thrust hips forward and squeeze glutes hard at the top."
            },
            {
              "id": "glute-hypertrophy-w3-d1-ex3",
              "exerciseId": "A1: Seated Leg Curl",
              "displayName": "A1: Seated Leg Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "0.0 min",
              "notes": "Superset with A2. Full ROM, feel stretch on hamstrings."
            },
            {
              "id": "glute-hypertrophy-w3-d1-ex4",
              "exerciseId": "A2: Swiss Ball Leg Curl",
              "displayName": "A2: Swiss Ball Leg Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Keep glutes elevated, thighs in a straight line with upper body. Curl ball in toward your glutes."
            },
            {
              "id": "glute-hypertrophy-w3-d1-ex5",
              "exerciseId": "Machine Hip Abduction (Glutes Elevated)",
              "displayName": "Machine Hip Abduction (Glutes Elevated)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "25-30",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Keep glutes 2-6 inches elevated. Use a fast tempo and constant tension."
            },
            {
              "id": "glute-hypertrophy-w3-d1-ex6",
              "exerciseId": "Leg Raise Variation (Abs)",
              "displayName": "Leg Raise Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Can perform hanging, roman chair, or lying."
            },
            {
              "id": "glute-hypertrophy-w3-d1-ex7",
              "exerciseId": "Crunch Variation (Abs)",
              "displayName": "Crunch Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Can perform using a cable, weighted, or machine."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w3-d2",
          "name": "Day 2: Upper Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w3-d2-ex1",
              "exerciseId": "Seated Dumbbell Press",
              "displayName": "Seated Dumbbell Press",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "2.0 min",
              "notes": "Keep shoulder blades retracted, stop ROM once elbows reach 90┬░."
            },
            {
              "id": "glute-hypertrophy-w3-d2-ex2",
              "exerciseId": "Close Grip Lat Pulldown",
              "displayName": "Close Grip Lat Pulldown",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "2.0 min",
              "notes": "Pull through elbows, think of arms as \"connectors\", touch bar to chest."
            },
            {
              "id": "glute-hypertrophy-w3-d2-ex3",
              "exerciseId": "Close Grip Seated Cable Row",
              "displayName": "Close Grip Seated Cable Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Drive elbows down for lat focus over trap focus, pull to stomach."
            },
            {
              "id": "glute-hypertrophy-w3-d2-ex4",
              "exerciseId": "Lean Away Cable Lateral Raise",
              "displayName": "Lean Away Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Put cable between legs and lean away. Drive \"out\" with the back of your hand."
            },
            {
              "id": "glute-hypertrophy-w3-d2-ex5",
              "exerciseId": "Reverse Pec Deck",
              "displayName": "Reverse Pec Deck",
              "warmupSets": "1",
              "workingSets": 4,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Push handles \"out\", don't pull \"back\"."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w3-d3",
          "name": "Day 3: Lower Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w3-d3-ex1",
              "exerciseId": "Barbell Hip Thrust",
              "displayName": "Barbell Hip Thrust",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Wider stance, 15┬░ foot flare, squeeze glutes at top."
            },
            {
              "id": "glute-hypertrophy-w3-d3-ex2",
              "exerciseId": "Barbell Hip Thrust (Dropset)",
              "displayName": "Barbell Hip Thrust (Dropset)",
              "warmupSets": "0",
              "workingSets": 1,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Reduce load by ~40-50%, perform another 15-20 reps."
            },
            {
              "id": "glute-hypertrophy-w3-d3-ex3",
              "exerciseId": "A1: Cable Pullthrough",
              "displayName": "A1: Cable Pullthrough",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "0.0 min",
              "notes": "Superset with A2. Rope attachment, slight knee bend, set hips back for big stretch, explosively thrust forward."
            },
            {
              "id": "glute-hypertrophy-w3-d3-ex4",
              "exerciseId": "A2: Single Leg Hip Thrust",
              "displayName": "A2: Single Leg Hip Thrust",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "2.0 min",
              "notes": "Use preloaded barbell or hold plate. Constant tension on glutes."
            },
            {
              "id": "glute-hypertrophy-w3-d3-ex5",
              "exerciseId": "Cable Glute Kick Back",
              "displayName": "Cable Glute Kick Back",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Slight lean forward, push back then up in a slight arc. Hold upright for support."
            },
            {
              "id": "glute-hypertrophy-w3-d3-ex6",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Feet pointed straight ahead, 1 second pause at the bottom of each rep."
            },
            {
              "id": "glute-hypertrophy-w3-d3-ex7",
              "exerciseId": "Leg Raise Variation (Abs)",
              "displayName": "Leg Raise Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Can perform hanging, roman chair or lying."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w3-d4",
          "name": "Day 4: Upper Body + Glute (Metabolic)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w3-d4-ex1",
              "exerciseId": "Wide Grip Lat Pulldown",
              "displayName": "Wide Grip Lat Pulldown",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Lean back 30┬░, use slight momentum, last set to failure."
            },
            {
              "id": "glute-hypertrophy-w3-d4-ex2",
              "exerciseId": "1-Arm Dumbbell Row",
              "displayName": "1-Arm Dumbbell Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Pull dumbbell \"to back pocket\", stretch lats at bottom."
            },
            {
              "id": "glute-hypertrophy-w3-d4-ex3",
              "exerciseId": "Incline Dumbbell Chest Press",
              "displayName": "Incline Dumbbell Chest Press",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "45┬░ incline, mind-muscle connection with upper pecs."
            },
            {
              "id": "glute-hypertrophy-w3-d4-ex4",
              "exerciseId": "Dumbbell Raise Complex",
              "displayName": "Dumbbell Raise Complex",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "15+15+15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "15 side raises, 15 front raises, 15 rear delt flyes, no rest = 1 set."
            },
            {
              "id": "glute-hypertrophy-w3-d4-ex5",
              "exerciseId": "Banded Lateral Raise",
              "displayName": "Banded Lateral Raise",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "30",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Stand in middle of band, faster tempo, constant tension on delts."
            },
            {
              "id": "glute-hypertrophy-w3-d4-ex6",
              "exerciseId": "Banded Squat Bouncer",
              "displayName": "Banded Squat Bouncer",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "2/3 bottom ROM, band around knees, constant tension on glutes."
            },
            {
              "id": "glute-hypertrophy-w3-d4-ex7",
              "exerciseId": "Banded Abduction (Seated)",
              "displayName": "Banded Abduction (Seated)",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Band around knees, focus on driving knees out, feel glute medius."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w3-d5",
          "name": "Day 5: Lower Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w3-d5-ex1",
              "exerciseId": "Walking Lunge",
              "displayName": "Walking Lunge",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "20 total strides. Use DBs or a barbell."
            },
            {
              "id": "glute-hypertrophy-w3-d5-ex2",
              "exerciseId": "Cable Glute Kick Back",
              "displayName": "Cable Glute Kick Back",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Slight lean forward, push back then up in a slight arc."
            },
            {
              "id": "glute-hypertrophy-w3-d5-ex3",
              "exerciseId": "Lower Back Extension",
              "displayName": "Lower Back Extension",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Slightly round lower back, 15┬░ foot flare, squeeze glutes at top of each rep."
            },
            {
              "id": "glute-hypertrophy-w3-d5-ex4",
              "exerciseId": "Banded Side Walk",
              "displayName": "Banded Side Walk",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "40",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "20 reps each direction, miniband around feet, slight bend at hips, short ~6 inch steps."
            },
            {
              "id": "glute-hypertrophy-w3-d5-ex5",
              "exerciseId": "Frog Pump",
              "displayName": "Frog Pump",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "30-50",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Hard glute squeeze at top, faster tempo, challenge yourself for more reps."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 4,
      "title": "Week 4: Accumulation Block",
      "isDeload": true,
      "days": [
        {
          "id": "glute-hypertrophy-w4-d1",
          "name": "Day 1: Lower Body (Strength)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w4-d1-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "pyramid",
              "workingSets": 3,
              "targetReps": "7",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "3.0 min",
              "notes": "Drive through heels, knees out. Wider stance, 15┬░ foot flare."
            },
            {
              "id": "glute-hypertrophy-w4-d1-ex2",
              "exerciseId": "Romanian Deadlift",
              "displayName": "Romanian Deadlift",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Set hips back until stretch is felt, then thrust hips forward and squeeze glutes hard at the top."
            },
            {
              "id": "glute-hypertrophy-w4-d1-ex3",
              "exerciseId": "A1: Seated Leg Curl",
              "displayName": "A1: Seated Leg Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "0.0 min",
              "notes": "Superset with A2. Full ROM, feel stretch on hamstrings."
            },
            {
              "id": "glute-hypertrophy-w4-d1-ex4",
              "exerciseId": "A2: Swiss Ball Leg Curl",
              "displayName": "A2: Swiss Ball Leg Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Keep glutes elevated, thighs in a straight line with upper body. Curl ball in toward your glutes."
            },
            {
              "id": "glute-hypertrophy-w4-d1-ex5",
              "exerciseId": "Machine Hip Abduction (Glutes Elevated)",
              "displayName": "Machine Hip Abduction (Glutes Elevated)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "25-30",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Keep glutes 2-6 inches elevated. Use a fast tempo and constant tension."
            },
            {
              "id": "glute-hypertrophy-w4-d1-ex6",
              "exerciseId": "Leg Raise Variation (Abs)",
              "displayName": "Leg Raise Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Can perform hanging, roman chair, or lying."
            },
            {
              "id": "glute-hypertrophy-w4-d1-ex7",
              "exerciseId": "Crunch Variation (Abs)",
              "displayName": "Crunch Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Can perform using a cable, weighted, or machine."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w4-d2",
          "name": "Day 2: Upper Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w4-d2-ex1",
              "exerciseId": "Seated Dumbbell Press",
              "displayName": "Seated Dumbbell Press",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "2.0 min",
              "notes": "Keep shoulder blades retracted, stop ROM once elbows reach 90┬░."
            },
            {
              "id": "glute-hypertrophy-w4-d2-ex2",
              "exerciseId": "Close Grip Lat Pulldown",
              "displayName": "Close Grip Lat Pulldown",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "2.0 min",
              "notes": "Pull through elbows, think of arms as \"connectors\", touch bar to chest."
            },
            {
              "id": "glute-hypertrophy-w4-d2-ex3",
              "exerciseId": "Close Grip Seated Cable Row",
              "displayName": "Close Grip Seated Cable Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Drive elbows down for lat focus over trap focus, pull to stomach."
            },
            {
              "id": "glute-hypertrophy-w4-d2-ex4",
              "exerciseId": "Lean Away Cable Lateral Raise",
              "displayName": "Lean Away Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Put cable between legs and lean away. Drive \"out\" with the back of your hand."
            },
            {
              "id": "glute-hypertrophy-w4-d2-ex5",
              "exerciseId": "Reverse Pec Deck",
              "displayName": "Reverse Pec Deck",
              "warmupSets": "1",
              "workingSets": 4,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Push handles \"out\", don't pull \"back\"."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w4-d3",
          "name": "Day 3: Lower Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w4-d3-ex1",
              "exerciseId": "Barbell Hip Thrust",
              "displayName": "Barbell Hip Thrust",
              "warmupSets": "2-3",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Wider stance, 15┬░ foot flare, squeeze glutes at top."
            },
            {
              "id": "glute-hypertrophy-w4-d3-ex2",
              "exerciseId": "A1: Cable Pullthrough",
              "displayName": "A1: Cable Pullthrough",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "0.0 min",
              "notes": "Superset with A2. Rope attachment, slight knee bend, set hips back for big stretch, explosively thrust forward."
            },
            {
              "id": "glute-hypertrophy-w4-d3-ex3",
              "exerciseId": "A2: Single Leg Hip Thrust",
              "displayName": "A2: Single Leg Hip Thrust",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "2.0 min",
              "notes": "Use preloaded barbell or hold plate. Constant tension on glutes."
            },
            {
              "id": "glute-hypertrophy-w4-d3-ex4",
              "exerciseId": "Cable Glute Kick Back",
              "displayName": "Cable Glute Kick Back",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Slight lean forward, push back then up in a slight arc. Hold upright for support."
            },
            {
              "id": "glute-hypertrophy-w4-d3-ex5",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Feet pointed straight ahead, 1 second pause at the bottom of each rep."
            },
            {
              "id": "glute-hypertrophy-w4-d3-ex6",
              "exerciseId": "Leg Raise Variation (Abs)",
              "displayName": "Leg Raise Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Can perform hanging, roman chair or lying."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w4-d4",
          "name": "Day 4: Upper Body + Glute (Metabolic)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w4-d4-ex1",
              "exerciseId": "Wide Grip Lat Pulldown",
              "displayName": "Wide Grip Lat Pulldown",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Lean back 30┬░, use slight momentum, last set to failure."
            },
            {
              "id": "glute-hypertrophy-w4-d4-ex2",
              "exerciseId": "1-Arm Dumbbell Row",
              "displayName": "1-Arm Dumbbell Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Pull dumbbell \"to back pocket\", stretch lats at bottom."
            },
            {
              "id": "glute-hypertrophy-w4-d4-ex3",
              "exerciseId": "Incline Dumbbell Chest Press",
              "displayName": "Incline Dumbbell Chest Press",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "45┬░ incline, mind-muscle connection with upper pecs."
            },
            {
              "id": "glute-hypertrophy-w4-d4-ex4",
              "exerciseId": "Dumbbell Raise Complex",
              "displayName": "Dumbbell Raise Complex",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "15+15+15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "15 side raises, 15 front raises, 15 rear delt flyes, no rest = 1 set."
            },
            {
              "id": "glute-hypertrophy-w4-d4-ex5",
              "exerciseId": "Banded Lateral Raise",
              "displayName": "Banded Lateral Raise",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "30",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Stand in middle of band, faster tempo, constant tension on delts."
            },
            {
              "id": "glute-hypertrophy-w4-d4-ex6",
              "exerciseId": "Banded Squat Bouncer",
              "displayName": "Banded Squat Bouncer",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "2/3 bottom ROM, band around knees, constant tension on glutes."
            },
            {
              "id": "glute-hypertrophy-w4-d4-ex7",
              "exerciseId": "Banded Abduction (Seated)",
              "displayName": "Banded Abduction (Seated)",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Band around knees, focus on driving knees out, feel glute medius."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w4-d5",
          "name": "Day 5: Lower Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w4-d5-ex1",
              "exerciseId": "Walking Lunge",
              "displayName": "Walking Lunge",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "30",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "30 total strides. Use DBs or a barbell."
            },
            {
              "id": "glute-hypertrophy-w4-d5-ex2",
              "exerciseId": "Cable Glute Kick Back",
              "displayName": "Cable Glute Kick Back",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Slight lean forward, push back then up in a slight arc."
            },
            {
              "id": "glute-hypertrophy-w4-d5-ex3",
              "exerciseId": "Lower Back Extension",
              "displayName": "Lower Back Extension",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Slightly round lower back, 15┬░ foot flare, squeeze glutes at top of each rep."
            },
            {
              "id": "glute-hypertrophy-w4-d5-ex4",
              "exerciseId": "Banded Side Walk",
              "displayName": "Banded Side Walk",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "40",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "20 reps each direction, miniband around feet, slight bend at hips, short ~6 inch steps."
            },
            {
              "id": "glute-hypertrophy-w4-d5-ex5",
              "exerciseId": "Frog Pump",
              "displayName": "Frog Pump",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "30-50",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Hard glute squeeze at top, faster tempo, challenge yourself for more reps."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 5,
      "title": "Week 5: Accumulation Block",
      "isDeload": false,
      "days": [
        {
          "id": "glute-hypertrophy-w5-d1",
          "name": "Day 1: Lower Body (Strength)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w5-d1-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "pyramid",
              "workingSets": 4,
              "targetReps": "7",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3.0 min",
              "notes": "Drive through heels, knees out. Wider stance, 15┬░ foot flare."
            },
            {
              "id": "glute-hypertrophy-w5-d1-ex2",
              "exerciseId": "Romanian Deadlift",
              "displayName": "Romanian Deadlift",
              "warmupSets": "1-2",
              "workingSets": 4,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Set hips back until stretch is felt, then thrust hips forward and squeeze glutes hard at the top."
            },
            {
              "id": "glute-hypertrophy-w5-d1-ex3",
              "exerciseId": "A1: Seated Leg Curl",
              "displayName": "A1: Seated Leg Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "0.0 min",
              "notes": "Superset with A2. Full ROM, feel stretch on hamstrings."
            },
            {
              "id": "glute-hypertrophy-w5-d1-ex4",
              "exerciseId": "A2: Swiss Ball Leg Curl",
              "displayName": "A2: Swiss Ball Leg Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Keep glutes elevated, thighs in a straight line with upper body. Curl ball in toward your glutes."
            },
            {
              "id": "glute-hypertrophy-w5-d1-ex5",
              "exerciseId": "Machine Hip Abduction (Glutes Elevated)",
              "displayName": "Machine Hip Abduction (Glutes Elevated)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "25-30",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Keep glutes 2-6 inches elevated. Use a fast tempo and constant tension."
            },
            {
              "id": "glute-hypertrophy-w5-d1-ex6",
              "exerciseId": "Leg Raise Variation (Abs)",
              "displayName": "Leg Raise Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Can perform hanging, roman chair, or lying."
            },
            {
              "id": "glute-hypertrophy-w5-d1-ex7",
              "exerciseId": "Crunch Variation (Abs)",
              "displayName": "Crunch Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Can perform using a cable, weighted, or machine."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w5-d2",
          "name": "Day 2: Upper Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w5-d2-ex1",
              "exerciseId": "Seated Dumbbell Press",
              "displayName": "Seated Dumbbell Press",
              "warmupSets": "2-3",
              "workingSets": 4,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2.0 min",
              "notes": "Keep shoulder blades retracted, stop ROM once elbows reach 90┬░."
            },
            {
              "id": "glute-hypertrophy-w5-d2-ex2",
              "exerciseId": "Close Grip Lat Pulldown",
              "displayName": "Close Grip Lat Pulldown",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2.0 min",
              "notes": "Pull through elbows, think of arms as \"connectors\", touch bar to chest."
            },
            {
              "id": "glute-hypertrophy-w5-d2-ex3",
              "exerciseId": "Close Grip Seated Cable Row",
              "displayName": "Close Grip Seated Cable Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Drive elbows down for lat focus over trap focus, pull to stomach."
            },
            {
              "id": "glute-hypertrophy-w5-d2-ex4",
              "exerciseId": "Lean Away Cable Lateral Raise",
              "displayName": "Lean Away Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.0 min",
              "notes": "Put cable between legs and lean away. Drive \"out\" with the back of your hand."
            },
            {
              "id": "glute-hypertrophy-w5-d2-ex5",
              "exerciseId": "Reverse Pec Deck",
              "displayName": "Reverse Pec Deck",
              "warmupSets": "1",
              "workingSets": 5,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.0 min",
              "notes": "Push handles \"out\", don't pull \"back\"."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w5-d3",
          "name": "Day 3: Lower Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w5-d3-ex1",
              "exerciseId": "Barbell Hip Thrust",
              "displayName": "Barbell Hip Thrust",
              "warmupSets": "2-3",
              "workingSets": 4,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Wider stance, 15┬░ foot flare, squeeze glutes at top."
            },
            {
              "id": "glute-hypertrophy-w5-d3-ex2",
              "exerciseId": "Barbell Hip Thrust (Dropset)",
              "displayName": "Barbell Hip Thrust (Dropset)",
              "warmupSets": "0",
              "workingSets": 1,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Reduce load by ~40-50%, perform another 15-20 reps."
            },
            {
              "id": "glute-hypertrophy-w5-d3-ex3",
              "exerciseId": "A1: Cable Pullthrough",
              "displayName": "A1: Cable Pullthrough",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "0.0 min",
              "notes": "Superset with A2. Rope attachment, slight knee bend, set hips back for big stretch, explosively thrust forward."
            },
            {
              "id": "glute-hypertrophy-w5-d3-ex4",
              "exerciseId": "A2: Single Leg Hip Thrust",
              "displayName": "A2: Single Leg Hip Thrust",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "2.0 min",
              "notes": "Use preloaded barbell or hold plate. Constant tension on glutes."
            },
            {
              "id": "glute-hypertrophy-w5-d3-ex5",
              "exerciseId": "Cable Glute Kick Back",
              "displayName": "Cable Glute Kick Back",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Slight lean forward, push back then up in a slight arc. Hold upright for support."
            },
            {
              "id": "glute-hypertrophy-w5-d3-ex6",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.0 min",
              "notes": "Feet pointed straight ahead, 1 second pause at the bottom of each rep."
            },
            {
              "id": "glute-hypertrophy-w5-d3-ex7",
              "exerciseId": "Leg Raise Variation (Abs)",
              "displayName": "Leg Raise Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Can perform hanging, roman chair or lying."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w5-d4",
          "name": "Day 4: Upper Body + Glute (Metabolic)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w5-d4-ex1",
              "exerciseId": "Wide Grip Lat Pulldown",
              "displayName": "Wide Grip Lat Pulldown",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Lean back 30┬░, use slight momentum, last set to failure."
            },
            {
              "id": "glute-hypertrophy-w5-d4-ex2",
              "exerciseId": "1-Arm Dumbbell Row",
              "displayName": "1-Arm Dumbbell Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Pull dumbbell \"to back pocket\", stretch lats at bottom."
            },
            {
              "id": "glute-hypertrophy-w5-d4-ex3",
              "exerciseId": "Incline Dumbbell Chest Press",
              "displayName": "Incline Dumbbell Chest Press",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "45┬░ incline, mind-muscle connection with upper pecs."
            },
            {
              "id": "glute-hypertrophy-w5-d4-ex4",
              "exerciseId": "Dumbbell Raise Complex",
              "displayName": "Dumbbell Raise Complex",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "15+15+15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "15 side raises, 15 front raises, 15 rear delt flyes, no rest = 1 set."
            },
            {
              "id": "glute-hypertrophy-w5-d4-ex5",
              "exerciseId": "Banded Lateral Raise",
              "displayName": "Banded Lateral Raise",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "30",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Stand in middle of band, faster tempo, constant tension on delts."
            },
            {
              "id": "glute-hypertrophy-w5-d4-ex6",
              "exerciseId": "Banded Squat Bouncer",
              "displayName": "Banded Squat Bouncer",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.0 min",
              "notes": "2/3 bottom ROM, band around knees, constant tension on glutes."
            },
            {
              "id": "glute-hypertrophy-w5-d4-ex7",
              "exerciseId": "Banded Abduction (Seated)",
              "displayName": "Banded Abduction (Seated)",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Band around knees, focus on driving knees out, feel glute medius."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w5-d5",
          "name": "Day 5: Lower Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w5-d5-ex1",
              "exerciseId": "Walking Lunge",
              "displayName": "Walking Lunge",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "30",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "30 total strides. Use DBs or a barbell."
            },
            {
              "id": "glute-hypertrophy-w5-d5-ex2",
              "exerciseId": "Cable Glute Kick Back",
              "displayName": "Cable Glute Kick Back",
              "warmupSets": "1",
              "workingSets": 4,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.0 min",
              "notes": "Slight lean forward, push back then up in a slight arc."
            },
            {
              "id": "glute-hypertrophy-w5-d5-ex3",
              "exerciseId": "Lower Back Extension",
              "displayName": "Lower Back Extension",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.0 min",
              "notes": "Slightly round lower back, 15┬░ foot flare, squeeze glutes at top of each rep."
            },
            {
              "id": "glute-hypertrophy-w5-d5-ex4",
              "exerciseId": "Banded Side Walk",
              "displayName": "Banded Side Walk",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "40",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "20 reps each direction, miniband around feet, slight bend at hips, short ~6 inch steps."
            },
            {
              "id": "glute-hypertrophy-w5-d5-ex5",
              "exerciseId": "Frog Pump",
              "displayName": "Frog Pump",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "30-50",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Hard glute squeeze at top, faster tempo, challenge yourself for more reps."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 6,
      "title": "Week 6: Accumulation Block",
      "isDeload": false,
      "days": [
        {
          "id": "glute-hypertrophy-w6-d1",
          "name": "Day 1: Lower Body (Strength)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w6-d1-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "pyramid",
              "workingSets": 4,
              "targetReps": "7",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "3.0 min",
              "notes": "Drive through heels, knees out. Wider stance, 15┬░ foot flare."
            },
            {
              "id": "glute-hypertrophy-w6-d1-ex2",
              "exerciseId": "Romanian Deadlift",
              "displayName": "Romanian Deadlift",
              "warmupSets": "1-2",
              "workingSets": 4,
              "targetReps": "6-8",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Set hips back until stretch is felt, then thrust hips forward and squeeze glutes hard at the top."
            },
            {
              "id": "glute-hypertrophy-w6-d1-ex3",
              "exerciseId": "A1: Seated Leg Curl",
              "displayName": "A1: Seated Leg Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "0.0 min",
              "notes": "Superset with A2. Full ROM, feel stretch on hamstrings."
            },
            {
              "id": "glute-hypertrophy-w6-d1-ex4",
              "exerciseId": "A2: Swiss Ball Leg Curl",
              "displayName": "A2: Swiss Ball Leg Curl",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Keep glutes elevated, thighs in a straight line with upper body. Curl ball in toward your glutes."
            },
            {
              "id": "glute-hypertrophy-w6-d1-ex5",
              "exerciseId": "Machine Hip Abduction (Glutes Elevated)",
              "displayName": "Machine Hip Abduction (Glutes Elevated)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "25-30",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Keep glutes 2-6 inches elevated. Use a fast tempo and constant tension."
            },
            {
              "id": "glute-hypertrophy-w6-d1-ex6",
              "exerciseId": "Leg Raise Variation (Abs)",
              "displayName": "Leg Raise Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Can perform hanging, roman chair, or lying."
            },
            {
              "id": "glute-hypertrophy-w6-d1-ex7",
              "exerciseId": "Crunch Variation (Abs)",
              "displayName": "Crunch Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Can perform using a cable, weighted, or machine."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w6-d2",
          "name": "Day 2: Upper Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w6-d2-ex1",
              "exerciseId": "Seated Dumbbell Press",
              "displayName": "Seated Dumbbell Press",
              "warmupSets": "2-3",
              "workingSets": 4,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2.0 min",
              "notes": "Keep shoulder blades retracted, stop ROM once elbows reach 90┬░."
            },
            {
              "id": "glute-hypertrophy-w6-d2-ex2",
              "exerciseId": "Close Grip Lat Pulldown",
              "displayName": "Close Grip Lat Pulldown",
              "warmupSets": "1-2",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "2.0 min",
              "notes": "Pull through elbows, think of arms as \"connectors\", touch bar to chest."
            },
            {
              "id": "glute-hypertrophy-w6-d2-ex3",
              "exerciseId": "Close Grip Seated Cable Row",
              "displayName": "Close Grip Seated Cable Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Drive elbows down for lat focus over trap focus, pull to stomach."
            },
            {
              "id": "glute-hypertrophy-w6-d2-ex4",
              "exerciseId": "Lean Away Cable Lateral Raise",
              "displayName": "Lean Away Cable Lateral Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.0 min",
              "notes": "Put cable between legs and lean away. Drive \"out\" with the back of your hand."
            },
            {
              "id": "glute-hypertrophy-w6-d2-ex5",
              "exerciseId": "Reverse Pec Deck",
              "displayName": "Reverse Pec Deck",
              "warmupSets": "1",
              "workingSets": 5,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.0 min",
              "notes": "Push handles \"out\", don't pull \"back\"."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w6-d3",
          "name": "Day 3: Lower Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w6-d3-ex1",
              "exerciseId": "Barbell Hip Thrust",
              "displayName": "Barbell Hip Thrust",
              "warmupSets": "2-3",
              "workingSets": 4,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Wider stance, 15┬░ foot flare, squeeze glutes at top."
            },
            {
              "id": "glute-hypertrophy-w6-d3-ex2",
              "exerciseId": "A1: Cable Pullthrough",
              "displayName": "A1: Cable Pullthrough",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "0.0 min",
              "notes": "Superset with A2. Rope attachment, slight knee bend, set hips back for big stretch, explosively thrust forward."
            },
            {
              "id": "glute-hypertrophy-w6-d3-ex3",
              "exerciseId": "A2: Single Leg Hip Thrust",
              "displayName": "A2: Single Leg Hip Thrust",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "2.0 min",
              "notes": "Use preloaded barbell or hold plate. Constant tension on glutes."
            },
            {
              "id": "glute-hypertrophy-w6-d3-ex4",
              "exerciseId": "Cable Glute Kick Back",
              "displayName": "Cable Glute Kick Back",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Slight lean forward, push back then up in a slight arc. Hold upright for support."
            },
            {
              "id": "glute-hypertrophy-w6-d3-ex5",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.0 min",
              "notes": "Feet pointed straight ahead, 1 second pause at the bottom of each rep."
            },
            {
              "id": "glute-hypertrophy-w6-d3-ex6",
              "exerciseId": "Leg Raise Variation (Abs)",
              "displayName": "Leg Raise Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Can perform hanging, roman chair or lying."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w6-d4",
          "name": "Day 4: Upper Body + Glute (Metabolic)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w6-d4-ex1",
              "exerciseId": "Wide Grip Lat Pulldown",
              "displayName": "Wide Grip Lat Pulldown",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "8-10",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Lean back 30┬░, use slight momentum, last set to failure."
            },
            {
              "id": "glute-hypertrophy-w6-d4-ex2",
              "exerciseId": "1-Arm Dumbbell Row",
              "displayName": "1-Arm Dumbbell Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Pull dumbbell \"to back pocket\", stretch lats at bottom."
            },
            {
              "id": "glute-hypertrophy-w6-d4-ex3",
              "exerciseId": "Incline Dumbbell Chest Press",
              "displayName": "Incline Dumbbell Chest Press",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "45┬░ incline, mind-muscle connection with upper pecs."
            },
            {
              "id": "glute-hypertrophy-w6-d4-ex4",
              "exerciseId": "Dumbbell Raise Complex",
              "displayName": "Dumbbell Raise Complex",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "15+15+15",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "15 side raises, 15 front raises, 15 rear delt flyes, no rest = 1 set."
            },
            {
              "id": "glute-hypertrophy-w6-d4-ex5",
              "exerciseId": "Banded Lateral Raise",
              "displayName": "Banded Lateral Raise",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "30",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.5 min",
              "notes": "Stand in middle of band, faster tempo, constant tension on delts."
            },
            {
              "id": "glute-hypertrophy-w6-d4-ex6",
              "exerciseId": "Banded Squat Bouncer",
              "displayName": "Banded Squat Bouncer",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.0 min",
              "notes": "2/3 bottom ROM, band around knees, constant tension on glutes."
            },
            {
              "id": "glute-hypertrophy-w6-d4-ex7",
              "exerciseId": "Banded Abduction (Seated)",
              "displayName": "Banded Abduction (Seated)",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Band around knees, focus on driving knees out, feel glute medius."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w6-d5",
          "name": "Day 5: Lower Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w6-d5-ex1",
              "exerciseId": "Walking Lunge",
              "displayName": "Walking Lunge",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "30",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "30 total strides. Use DBs or a barbell."
            },
            {
              "id": "glute-hypertrophy-w6-d5-ex2",
              "exerciseId": "Cable Glute Kick Back",
              "displayName": "Cable Glute Kick Back",
              "warmupSets": "1",
              "workingSets": 4,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.0 min",
              "notes": "Slight lean forward, push back then up in a slight arc."
            },
            {
              "id": "glute-hypertrophy-w6-d5-ex3",
              "exerciseId": "Lower Back Extension",
              "displayName": "Lower Back Extension",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 10",
              "lastSetRpe": "RPE 10",
              "restPeriod": "1.0 min",
              "notes": "Slightly round lower back, 15┬░ foot flare, squeeze glutes at top of each rep."
            },
            {
              "id": "glute-hypertrophy-w6-d5-ex4",
              "exerciseId": "Banded Side Walk",
              "displayName": "Banded Side Walk",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "40",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "20 reps each direction, miniband around feet, slight bend at hips, short ~6 inch steps."
            },
            {
              "id": "glute-hypertrophy-w6-d5-ex5",
              "exerciseId": "Frog Pump",
              "displayName": "Frog Pump",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "30-50",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Hard glute squeeze at top, faster tempo, challenge yourself for more reps."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 7,
      "title": "Week 7: Metabolic Focus Block",
      "isDeload": false,
      "days": [
        {
          "id": "glute-hypertrophy-w7-d1",
          "name": "Day 1: Lower Body (Strength)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w7-d1-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "pyramid",
              "workingSets": 2,
              "targetReps": "5",
              "earlySetRpe": "RPE 6",
              "lastSetRpe": "RPE 6",
              "restPeriod": "3.0 min",
              "notes": "Light weight, practice good form and control."
            },
            {
              "id": "glute-hypertrophy-w7-d1-ex2",
              "exerciseId": "Lying Leg Curl",
              "displayName": "Lying Leg Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Consistent speed and ROM across all reps."
            },
            {
              "id": "glute-hypertrophy-w7-d1-ex3",
              "exerciseId": "Swiss Ball Triple Threat",
              "displayName": "Swiss Ball Triple Threat",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15+15+15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Full ROM, feel stretch in hamstrings on eccentric."
            },
            {
              "id": "glute-hypertrophy-w7-d1-ex4",
              "exerciseId": "Elevated Glute Bridge",
              "displayName": "Elevated Glute Bridge",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "30",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Perform bodyweight, feet up on bench, squeeze glutes hard at top."
            },
            {
              "id": "glute-hypertrophy-w7-d1-ex5",
              "exerciseId": "Leg Raise Variation (Abs)",
              "displayName": "Leg Raise Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Challenge yourself!"
            },
            {
              "id": "glute-hypertrophy-w7-d1-ex6",
              "exerciseId": "Crunch Variation (Abs)",
              "displayName": "Crunch Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Challenge yourself!"
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w7-d2",
          "name": "Day 2: Lower Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w7-d2-ex1",
              "exerciseId": "Banded Sumo Walk",
              "displayName": "Banded Sumo Walk",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Bend at hips, wide stance, short steps moving forward."
            },
            {
              "id": "glute-hypertrophy-w7-d2-ex2",
              "exerciseId": "Banded Side Walk",
              "displayName": "Banded Side Walk",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "30",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "15 reps each direction, miniband around feet or full band around knees."
            },
            {
              "id": "glute-hypertrophy-w7-d2-ex3",
              "exerciseId": "Cable Glute Kickback",
              "displayName": "Cable Glute Kickback",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Slight lean forward, hold onto upright for support."
            },
            {
              "id": "glute-hypertrophy-w7-d2-ex4",
              "exerciseId": "Machine Hip Abduction (Glutes Elevated)",
              "displayName": "Machine Hip Abduction (Glutes Elevated)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "25-30",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Keep glutes 2-6 inches elevated, use a fast tempo, constant tension."
            },
            {
              "id": "glute-hypertrophy-w7-d2-ex5",
              "exerciseId": "Dumbbell Raise Complex",
              "displayName": "Dumbbell Raise Complex",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "15+15+15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "15 side raises, 15 front raises, 15 rear delt flyes = 1 set."
            },
            {
              "id": "glute-hypertrophy-w7-d2-ex6",
              "exerciseId": "Reverse Pec Deck",
              "displayName": "Reverse Pec Deck",
              "warmupSets": "0",
              "workingSets": 4,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Experiment with grip and feel rear delts engage."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w7-d3",
          "name": "Day 3: Lower Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w7-d3-ex1",
              "exerciseId": "Banded Side Lying Clams",
              "displayName": "Banded Side Lying Clams",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Band around knees, feet together, focus on activating glute medius."
            },
            {
              "id": "glute-hypertrophy-w7-d3-ex2",
              "exerciseId": "Single Leg Hip Thrust",
              "displayName": "Single Leg Hip Thrust",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Use preloaded barbell or hold plate, constant tension."
            },
            {
              "id": "glute-hypertrophy-w7-d3-ex3",
              "exerciseId": "A1: Banded Side Walk",
              "displayName": "A1: Banded Side Walk",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "30",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "0.0 min",
              "notes": "Superset with A2. 15 reps each direction."
            },
            {
              "id": "glute-hypertrophy-w7-d3-ex4",
              "exerciseId": "A2: Frog Pumps",
              "displayName": "A2: Frog Pumps",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Hard glute squeeze at top, faster tempo."
            },
            {
              "id": "glute-hypertrophy-w7-d3-ex5",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "1 second pause at the bottom."
            },
            {
              "id": "glute-hypertrophy-w7-d3-ex6",
              "exerciseId": "Leg Raise Variation (Abs)",
              "displayName": "Leg Raise Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Challenge yourself!"
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w7-d4",
          "name": "Day 4: Upper Body + Glute (Metabolic)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w7-d4-ex1",
              "exerciseId": "Lower Back Extension (Pumper)",
              "displayName": "Lower Back Extension (Pumper)",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Use only the middle 1/2 of ROM, constant tension on glutes."
            },
            {
              "id": "glute-hypertrophy-w7-d4-ex2",
              "exerciseId": "Banded Squat Bouncer",
              "displayName": "Banded Squat Bouncer",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "2/3 bottom ROM, constant tension."
            },
            {
              "id": "glute-hypertrophy-w7-d4-ex3",
              "exerciseId": "Banded Abduction (Seated)",
              "displayName": "Banded Abduction (Seated)",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Focus on driving knees out."
            },
            {
              "id": "glute-hypertrophy-w7-d4-ex4",
              "exerciseId": "Cable Glute Kickback",
              "displayName": "Cable Glute Kickback",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Slight lean forward, push back then up in a slight arc."
            },
            {
              "id": "glute-hypertrophy-w7-d4-ex5",
              "exerciseId": "Wide Grip Lat Pulldown",
              "displayName": "Wide Grip Lat Pulldown",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "1.5 min",
              "notes": "Lean back 30┬░, use slight momentum, lighter weight."
            },
            {
              "id": "glute-hypertrophy-w7-d4-ex6",
              "exerciseId": "1-Arm Dumbbell Row",
              "displayName": "1-Arm Dumbbell Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Pull dumbbell \"to back pocket\"."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w7-d5",
          "name": "Day 5: Lower Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w7-d5-ex1",
              "exerciseId": "Romanian Deadlift",
              "displayName": "Romanian Deadlift",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Use lighter weight, mind-muscle connection with hamstrings."
            },
            {
              "id": "glute-hypertrophy-w7-d5-ex2",
              "exerciseId": "Cable Pullthrough",
              "displayName": "Cable Pullthrough",
              "warmupSets": "1",
              "workingSets": 4,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Use rope attachment, feel big stretch in glutes, explosively thrust."
            },
            {
              "id": "glute-hypertrophy-w7-d5-ex3",
              "exerciseId": "Standing Cable Hip Abduction",
              "displayName": "Standing Cable Hip Abduction",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Hold onto upright for support, palpate glute medius to ensure activation."
            },
            {
              "id": "glute-hypertrophy-w7-d5-ex4",
              "exerciseId": "Banded Side Lying Clams",
              "displayName": "Banded Side Lying Clams",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Band around knees, feet together, focus on activating glute medius."
            },
            {
              "id": "glute-hypertrophy-w7-d5-ex5",
              "exerciseId": "Lean Away Cable Lateral Raise",
              "displayName": "Lean Away Cable Lateral Raise",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Put cable between legs, drive \"out\" not \"up\"."
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 8,
      "title": "Week 8: Metabolic Focus Block",
      "isDeload": true,
      "days": [
        {
          "id": "glute-hypertrophy-w8-d1",
          "name": "Day 1: Lower Body (Strength)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w8-d1-ex1",
              "exerciseId": "Back Squat",
              "displayName": "Back Squat",
              "warmupSets": "pyramid",
              "workingSets": 2,
              "targetReps": "5",
              "earlySetRpe": "RPE 6",
              "lastSetRpe": "RPE 6",
              "restPeriod": "3.0 min",
              "notes": "Light weight, practice good form and control."
            },
            {
              "id": "glute-hypertrophy-w8-d1-ex2",
              "exerciseId": "Lying Leg Curl",
              "displayName": "Lying Leg Curl",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Consistent speed and ROM across all reps."
            },
            {
              "id": "glute-hypertrophy-w8-d1-ex3",
              "exerciseId": "Swiss Ball Triple Threat",
              "displayName": "Swiss Ball Triple Threat",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15+15+15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Full ROM, feel stretch in hamstrings on eccentric."
            },
            {
              "id": "glute-hypertrophy-w8-d1-ex4",
              "exerciseId": "Elevated Glute Bridge",
              "displayName": "Elevated Glute Bridge",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "30",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Perform bodyweight, feet up on bench, squeeze glutes hard at top."
            },
            {
              "id": "glute-hypertrophy-w8-d1-ex5",
              "exerciseId": "Leg Raise Variation (Abs)",
              "displayName": "Leg Raise Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Challenge yourself!"
            },
            {
              "id": "glute-hypertrophy-w8-d1-ex6",
              "exerciseId": "Crunch Variation (Abs)",
              "displayName": "Crunch Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Challenge yourself!"
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w8-d2",
          "name": "Day 2: Lower Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w8-d2-ex1",
              "exerciseId": "Banded Sumo Walk",
              "displayName": "Banded Sumo Walk",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Bend at hips, wide stance, short steps moving forward."
            },
            {
              "id": "glute-hypertrophy-w8-d2-ex2",
              "exerciseId": "Banded Side Walk",
              "displayName": "Banded Side Walk",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "30",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "15 reps each direction, miniband around feet or full band around knees."
            },
            {
              "id": "glute-hypertrophy-w8-d2-ex3",
              "exerciseId": "Cable Glute Kickback",
              "displayName": "Cable Glute Kickback",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Slight lean forward, hold onto upright for support."
            },
            {
              "id": "glute-hypertrophy-w8-d2-ex4",
              "exerciseId": "Machine Hip Abduction (Glutes Elevated)",
              "displayName": "Machine Hip Abduction (Glutes Elevated)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "25-30",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Keep glutes 2-6 inches elevated, use a fast tempo, constant tension."
            },
            {
              "id": "glute-hypertrophy-w8-d2-ex5",
              "exerciseId": "Dumbbell Raise Complex",
              "displayName": "Dumbbell Raise Complex",
              "warmupSets": "1",
              "workingSets": 2,
              "targetReps": "15+15+15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "15 side raises, 15 front raises, 15 rear delt flyes = 1 set."
            },
            {
              "id": "glute-hypertrophy-w8-d2-ex6",
              "exerciseId": "Reverse Pec Deck",
              "displayName": "Reverse Pec Deck",
              "warmupSets": "0",
              "workingSets": 4,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.0 min",
              "notes": "Experiment with grip and feel rear delts engage."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w8-d3",
          "name": "Day 3: Lower Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w8-d3-ex1",
              "exerciseId": "Banded Side Lying Clams",
              "displayName": "Banded Side Lying Clams",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Band around knees, feet together, focus on activating glute medius."
            },
            {
              "id": "glute-hypertrophy-w8-d3-ex2",
              "exerciseId": "Single Leg Hip Thrust",
              "displayName": "Single Leg Hip Thrust",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Use preloaded barbell or hold plate, constant tension."
            },
            {
              "id": "glute-hypertrophy-w8-d3-ex3",
              "exerciseId": "A1: Banded Side Walk",
              "displayName": "A1: Banded Side Walk",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "30",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "0.0 min",
              "notes": "Superset with A2. 15 reps each direction."
            },
            {
              "id": "glute-hypertrophy-w8-d3-ex4",
              "exerciseId": "A2: Frog Pumps",
              "displayName": "A2: Frog Pumps",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "20",
              "earlySetRpe": "RPE 9",
              "lastSetRpe": "RPE 9",
              "restPeriod": "1.5 min",
              "notes": "Hard glute squeeze at top, faster tempo."
            },
            {
              "id": "glute-hypertrophy-w8-d3-ex5",
              "exerciseId": "Standing Calf Raise",
              "displayName": "Standing Calf Raise",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "1 second pause at the bottom."
            },
            {
              "id": "glute-hypertrophy-w8-d3-ex6",
              "exerciseId": "Leg Raise Variation (Abs)",
              "displayName": "Leg Raise Variation (Abs)",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Challenge yourself!"
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w8-d4",
          "name": "Day 4: Upper Body + Glute (Metabolic)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w8-d4-ex1",
              "exerciseId": "Lower Back Extension (Pumper)",
              "displayName": "Lower Back Extension (Pumper)",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Use only the middle 1/2 of ROM, constant tension on glutes."
            },
            {
              "id": "glute-hypertrophy-w8-d4-ex2",
              "exerciseId": "Banded Squat Bouncer",
              "displayName": "Banded Squat Bouncer",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "2/3 bottom ROM, constant tension."
            },
            {
              "id": "glute-hypertrophy-w8-d4-ex3",
              "exerciseId": "Banded Abduction (Seated)",
              "displayName": "Banded Abduction (Seated)",
              "warmupSets": "0",
              "workingSets": 2,
              "targetReps": "20-25",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Focus on driving knees out."
            },
            {
              "id": "glute-hypertrophy-w8-d4-ex4",
              "exerciseId": "Cable Glute Kickback",
              "displayName": "Cable Glute Kickback",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Slight lean forward, push back then up in a slight arc."
            },
            {
              "id": "glute-hypertrophy-w8-d4-ex5",
              "exerciseId": "Wide Grip Lat Pulldown",
              "displayName": "Wide Grip Lat Pulldown",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 7",
              "lastSetRpe": "RPE 7",
              "restPeriod": "1.5 min",
              "notes": "Lean back 30┬░, use slight momentum, lighter weight."
            },
            {
              "id": "glute-hypertrophy-w8-d4-ex6",
              "exerciseId": "1-Arm Dumbbell Row",
              "displayName": "1-Arm Dumbbell Row",
              "warmupSets": "1",
              "workingSets": 3,
              "targetReps": "10-12",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Pull dumbbell \"to back pocket\"."
            }
          ]
        },
        {
          "id": "glute-hypertrophy-w8-d5",
          "name": "Day 5: Lower Body (Hypertrophy)",
          "targetMuscles": [
            "Full Body"
          ],
          "exercises": [
            {
              "id": "glute-hypertrophy-w8-d5-ex1",
              "exerciseId": "Romanian Deadlift",
              "displayName": "Romanian Deadlift",
              "warmupSets": "2",
              "workingSets": 3,
              "targetReps": "20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.5 min",
              "notes": "Use lighter weight, mind-muscle connection with hamstrings."
            },
            {
              "id": "glute-hypertrophy-w8-d5-ex2",
              "exerciseId": "Cable Pullthrough",
              "displayName": "Cable Pullthrough",
              "warmupSets": "1",
              "workingSets": 4,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Use rope attachment, feel big stretch in glutes, explosively thrust."
            },
            {
              "id": "glute-hypertrophy-w8-d5-ex3",
              "exerciseId": "Standing Cable Hip Abduction",
              "displayName": "Standing Cable Hip Abduction",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "15-20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Hold onto upright for support, palpate glute medius to ensure activation."
            },
            {
              "id": "glute-hypertrophy-w8-d5-ex4",
              "exerciseId": "Banded Side Lying Clams",
              "displayName": "Banded Side Lying Clams",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "20",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Band around knees, feet together, focus on activating glute medius."
            },
            {
              "id": "glute-hypertrophy-w8-d5-ex5",
              "exerciseId": "Lean Away Cable Lateral Raise",
              "displayName": "Lean Away Cable Lateral Raise",
              "warmupSets": "0",
              "workingSets": 3,
              "targetReps": "12-15",
              "earlySetRpe": "RPE 8",
              "lastSetRpe": "RPE 8",
              "restPeriod": "1.0 min",
              "notes": "Put cable between legs, drive \"out\" not \"up\"."
            }
          ]
        }
      ]
    }
  ]
};
