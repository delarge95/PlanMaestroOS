import type { WorkoutLog, WorkoutProgram, WorkoutSet } from '../types';

const DEFAULT_START_DATE = new Date();
DEFAULT_START_DATE.setDate(DEFAULT_START_DATE.getDate() - 56); // 8 weeks ago

const WEIGHT_SEEDS: Record<string, number> = {
    'Back Squat': 120,
    'Pause Deadlift': 150,
    'Deadlift': 160,
    'Barbell Bench Press': 95,
    'Pause Barbell Bench Press': 90,
    'Overhead Press': 60,
    'Weighted Pull-Up': 25,
    'Weighted Dip': 35,
    'Helms Row': 45,
    'Lat Pull-Over': 25,
    'Glute Ham Raise': 40,
    'Hammer Curl': 22,
    'Hip Abduction': 30,
    'Standing Calf Raise': 60,
    'Nordic Ham Curl': 35,
    'Face Pull': 20,
    'Leg Curl': 45,
    'Leg Extension': 55,
    'Snatch-Grip Romanian Deadlift': 80,
    'Hanging Leg Raise': 10,
    'Incline Dumbbell Curl': 18,
    'Dumbbell Shrug': 35,
    'Close-Grip Bench Press': 70,
    'Pendlay Row': 85,
    'Eccentric-Accentuated Pull-Up': 20,
    'Incline Shrug': 25,
    'Upright Row': 30,
    'Triceps Pressdown': 32,
    'Concentration Bicep Curl': 16,
    'Dumbbell Lateral Raise': 12,
    'Sumo Box Squat or Pause High-Bar Squat': 105,
    'Chest-Supported Dumbbell Row': 36,
    'V Sit-Up': 8,
    'Banded Lateral Walk or Hip Abduction': 14,
};

const parseTargetReps = (setDef: any): number => {
    const repsStr = String(setDef?.reps || '8');
    const match = /\d+/.exec(repsStr);
    if (!match) {
        return 8;
    }
    return Number(match[0]);
};

const getSeedForExercise = (name: string, fallbackOffset: number): number => {
    if (WEIGHT_SEEDS[name]) return WEIGHT_SEEDS[name];
    if (/curl/i.test(name)) return 18 + fallbackOffset;
    if (/raise/i.test(name)) return 15 + fallbackOffset;
    if (/row/i.test(name)) return 50 + fallbackOffset;
    if (/press/i.test(name)) return 70 + fallbackOffset;
    if (/pull/i.test(name)) return 30 + fallbackOffset;
    if (/deadlift/i.test(name)) return 140 + fallbackOffset;
    if (/squat/i.test(name)) return 120 + fallbackOffset;
    return 35 + fallbackOffset;
};

export const generateDemoWorkoutLog = (program: WorkoutProgram): any => {
    const log: Record<string, any> = {};

    (program.weeks || []).forEach((week: any, weekIndex: number) => {
        const absoluteWeekOffset = weekIndex * 7;
        log[week.id] = {};

        const daysInWeek = [...(week.schedule || [])];
        if ((program as any).optionalDay) {
            daysInWeek.push((program as any).optionalDay);
        }

        daysInWeek.forEach((day: any, dayIndex: number) => {
            const dayDate = new Date(DEFAULT_START_DATE);
            dayDate.setDate(dayDate.getDate() + absoluteWeekOffset + dayIndex * 2);
            const dayId = day.id;
            log[week.id][dayId] = {};

            (day.exercises || []).slice(0, 4).forEach((exercise: any, exerciseIndex: number) => {
                const chosenExerciseName = exercise.name;
                const baseWeight = getSeedForExercise(chosenExerciseName, exerciseIndex * 3);
                const targetReps = parseTargetReps(exercise.sets[0] ?? { sets: 3, reps: '8' });

                const exerciseLog: Record<string, any> = {
                    chosenExercise: chosenExerciseName,
                };

                for (let setIndex = 0; setIndex < Math.min(3, exercise.sets[0]?.sets ?? 3); setIndex++) {
                    const progression = weekIndex * 2 + setIndex;
                    const weight = Math.round((baseWeight + progression) * 10) / 10;
                    const reps = Math.max(3, targetReps - (setIndex % 2));
                    const timestampDate = new Date(dayDate);
                    timestampDate.setHours(6 + exerciseIndex);
                    timestampDate.setMinutes(setIndex * 10);
                    const setKey = `0-${setIndex}`;
                    exerciseLog[setKey] = {
                        weight,
                        reps,
                        timestamp: timestampDate.toISOString(),
                    };
                }

                log[week.id][dayId][exercise.id] = exerciseLog;
            });
        });
    });

    return log;
};
