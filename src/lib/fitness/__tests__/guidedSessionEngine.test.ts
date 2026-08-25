import { describe, it, expect } from 'vitest';
import {
  parseRestPeriodSeconds,
  buildGuidedPlan,
  createGuidedSession,
  currentStep,
  recordSetAndAdvance,
  skipRest,
  tickRest,
  addExtraSetToCurrent,
  finishEarly,
  collectedLogsByExercise,
  sessionExportInputFromState,
  completedWorkoutFromState,
  totalSetsFor
} from '../guidedSessionEngine';
import { buildSessionSnapshot } from '../sessionExport';

describe('parseRestPeriodSeconds (prescription.restPeriod → segundos)', () => {
  it('rangos en minutos toman el extremo alto', () => {
    expect(parseRestPeriodSeconds('3-5 min')).toBe(300);
    expect(parseRestPeriodSeconds('1-2 min')).toBe(120);
    expect(parseRestPeriodSeconds('2-4 min')).toBe(240);
  });
  it('valores simples y decimales en minutos', () => {
    expect(parseRestPeriodSeconds('2 min')).toBe(120);
    expect(parseRestPeriodSeconds('1.5 min')).toBe(90);
  });
  it('segundos explícitos y números pelados grandes', () => {
    expect(parseRestPeriodSeconds('90 seg')).toBe(90);
    expect(parseRestPeriodSeconds('120')).toBe(120);
  });
  it('fallback honesto y clamp', () => {
    expect(parseRestPeriodSeconds(undefined)).toBe(90);
    expect(parseRestPeriodSeconds('')).toBe(90);
    expect(parseRestPeriodSeconds('sin unidad rara')).toBe(90);
    const clampedLow = parseRestPeriodSeconds('0.1 min');
    expect(clampedLow).toBeGreaterThanOrEqual(15);
    expect(parseRestPeriodSeconds('30 min')).toBeLessThanOrEqual(600);
  });
});

const DETAILS = {
  'Barbell Incline Press': {
    name: '45° Incline Barbell Press',
    youtubeLink: 'https://www.youtube.com/watch?v=abc12345678',
    techniquePoints: ['Escápulas retraídas', 'Barra a la línea del pezón']
  },
  'Pull-Up': { name: 'Pull-Up', techniquePoints: ['Barra completa'] },
  'Face Pull': { name: 'Face Pull' }
};

function makePlan() {
  return buildGuidedPlan({
    program: { id: 'min-max', title: 'The Min-Max Program' },
    weekNumber: 2,
    day: { id: 'mm-w2-d1', name: 'Día 1 Upper' },
    overrides: { 'p-incline': 'Barbell Incline Press' },
    resolve: (key) => DETAILS[key as keyof typeof DETAILS] || {},
    prescriptions: [
      {
        id: 'p-incline',
        exerciseId: 'Incline Press',
        displayName: 'Barbell Incline Press',
        workingSets: 3,
        targetReps: '6-8',
        restPeriod: '3-5 min',
        earlySetRpe: 'RIR 1'
      },
      {
        id: 'p-pull',
        exerciseId: 'Pull-Up',
        workingSets: 2,
        repRange: '8-10',
        rirPerSet: ['2', '1'],
        rest: '2 min'
      },
      {
        id: 'p-face',
        exerciseId: 'Face Pull',
        workingSets: 2,
        targetReps: '12-15',
        lastSetRpe: 'RPE 9',
        restPeriod: '60 seg',
        notes: 'Codos altos'
      }
    ]
  });
}

describe('buildGuidedPlan', () => {
  it('resuelve override, video, cues, esfuerzo por serie y descanso', () => {
    const plan = makePlan();
    expect(plan.programTitle).toBe('The Min-Max Program');
    expect(plan.dayName).toBe('Día 1 Upper');
    expect(plan.exercises).toHaveLength(3);

    const incline = plan.exercises[0];
    expect(incline.exerciseKey).toBe('Barbell Incline Press'); // override aplicado
    expect(incline.displayName).toBe('45° Incline Barbell Press');
    expect(incline.youtubeLink).toContain('youtube.com');
    expect(incline.techniquePoints).toHaveLength(2);
    expect(incline.effortPerSet).toEqual(['RIR 1', 'RIR 1', 'RIR 1']);
    expect(incline.restSec).toBe(300);

    const pull = plan.exercises[1];
    expect(pull.effortPerSet).toEqual(['RIR 2', 'RIR 1']);
    expect(pull.restSec).toBe(120);

    const face = plan.exercises[2];
    expect(face.effortPerSet).toEqual(['RIR 2', 'RPE 9']); // última serie con lastSetRpe
    expect(face.restSec).toBe(60);
    expect(face.notes).toBe('Codos altos');
  });
});

describe('máquina de estados set→ejercicio→fin', () => {
  it('serie intermedia → descanso con el restPeriod del ejercicio; avanza setIdx', () => {
    const s0 = createGuidedSession(makePlan(), 1_000_000);
    expect(s0.phase).toBe('working');
    expect(currentStep(s0)?.setNumber).toBe(1);

    const s1 = recordSetAndAdvance(s0, { weightKg: 80, reps: 8, rpe: 8 });
    expect(s1.phase).toBe('resting');
    expect(s1.exIdx).toBe(0);
    expect(s1.setIdx).toBe(1);
    expect(s1.restTotalSec).toBe(300);
    expect(currentStep(s1)?.setNumber).toBe(2);
  });

  it('última serie del ejercicio → siguiente ejercicio (descanso inter-ejercicio)', () => {
    let s = createGuidedSession(makePlan(), 1_000_000);
    for (let i = 0; i < 3; i++) s = recordSetAndAdvance(s, { weightKg: 80, reps: 8 });
    expect(s.phase).toBe('resting');
    expect(s.exIdx).toBe(1);
    expect(s.setIdx).toBe(0);
    expect(s.restRemainingSec).toBe(300); // descanso del ejercicio recién terminado
  });

  it('fin del plan → finished', () => {
    let s = createGuidedSession(makePlan(), 1_000_000);
    for (let i = 0; i < 7; i++) s = recordSetAndAdvance(s, { weightKg: null, reps: 10 }); // 3+2+2
    expect(s.phase).toBe('finished');
    expect(currentStep(s)).toBeNull();
  });

  it('tickRest agota el descanso y vuelve a working; skipRest salta directo', () => {
    let s = recordSetAndAdvance(createGuidedSession(makePlan(), 1), { weightKg: 50, reps: 8 });
    for (let t = 0; t < 299; t++) s = tickRest(s);
    expect(s.phase).toBe('resting');
    expect(s.restRemainingSec).toBe(1);
    s = tickRest(s);
    expect(s.phase).toBe('working');

    let s2 = recordSetAndAdvance(createGuidedSession(makePlan(), 1), { weightKg: 50, reps: 8 });
    s2 = skipRest(s2);
    expect(s2.phase).toBe('working');
    expect(skipRest(s2)).toBe(s2); // no-resting es no-op
  });

  it('addExtraSetToCurrent alarga el ejercicio actual', () => {
    let s = createGuidedSession(makePlan(), 1);
    expect(totalSetsFor(s, 0)).toBe(3);
    s = addExtraSetToCurrent(s);
    expect(totalSetsFor(s, 0)).toBe(4);
    for (let i = 0; i < 4; i++) s = recordSetAndAdvance(s, { weightKg: 80, reps: 8 });
    expect(s.exIdx).toBe(1);
  });

  it('finishEarly corta en cualquier punto conservando lo registrado', () => {
    let s = recordSetAndAdvance(createGuidedSession(makePlan(), 1), { weightKg: 80, reps: 6 });
    s = finishEarly(s);
    expect(s.phase).toBe('finished');
    expect(collectedLogsByExercise(s)).toHaveLength(1);
  });
});

describe('exportes finales (contrato NUTRI + historial logger)', () => {
  it('sessionExportInputFromState alimenta buildSessionSnapshot con datos reales', () => {
    let s = createGuidedSession(makePlan(), 1);
    s = recordSetAndAdvance(s, { weightKg: 80, reps: 8, rpe: 8 });
    s = recordSetAndAdvance(s, { weightKg: 82.5, reps: 6 });
    s = finishEarly(s);

    const input = sessionExportInputFromState(s, '2026-08-25', 34);
    expect(input.routineTitle).toBe('The Min-Max Program — Día 1 Upper');
    expect(input.exercises[0].performedExerciseId).toBe('Barbell Incline Press');
    expect(input.exercises[0].completedSets).toHaveLength(2);

    const snap = buildSessionSnapshot(input);
    expect(snap.dateIso).toBe('2026-08-25');
    expect(snap.durationTotalMin).toBe(34);
    expect(snap.exercises[0].loadKg).toBeCloseTo(81.3, 1);
  });

  it('completedWorkoutFromState produce entrada válida para fitapp_workout_history', () => {
    let s = createGuidedSession(makePlan(), 1_000_000);
    s = recordSetAndAdvance(s, { weightKg: 80, reps: 8, rpe: 8 });
    s = recordSetAndAdvance(s, { weightKg: 0, reps: 0 }); // basura: se descarta
    s = finishEarly(s);

    const workout = completedWorkoutFromState(s, 1_000_000 + 41 * 60 * 1000);
    expect(workout.id).toBe('w_1000000');
    expect(workout.programId).toBe('min-max');
    expect(workout.durationMinutes).toBe(41);
    expect(workout.totalVolumeKg).toBe(640); // solo la serie real
    expect(workout.exercises[0].completedSets).toEqual([{ weight: 80, reps: 8, rpe: 8 }]);
    expect(workout.exercises[0].name).toBe('45° Incline Barbell Press');
  });

  it('sesión sin registros → historial sin ejercicios (nada fabricado)', () => {
    const s = finishEarly(createGuidedSession(makePlan(), 1));
    const workout = completedWorkoutFromState(s, 60_000);
    expect(workout.exercises).toHaveLength(0);
    expect(workout.totalVolumeKg).toBe(0);
  });
});
