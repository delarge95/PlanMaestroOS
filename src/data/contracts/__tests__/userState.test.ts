import { describe, it, expect } from 'vitest';
import {
  USER_STATE_VERSION,
  createEmptyUserState,
  getWeekStartIso,
  weekKeyFor,
  addDaysIso,
  sessionsInWeek,
  patternVolumeFromSessions,
  painByZoneInRange,
  deriveWeekAggregates,
  computeDeltas,
  computeStreaks,
  latestMetric,
  type UserState,
  type TrainingSession,
  type PainEntry,
} from '../userState';

/** Fixture: semana del lunes 2026-08-17 al domingo 2026-08-23. */
const MON = '2026-08-17';

function session(overrides: Partial<TrainingSession> = {}): TrainingSession {
  return {
    id: 's1',
    date: MON,
    focus: 'full-body',
    durationMin: 60,
    exercises: [
      { exerciseId: 'pull-up', pattern: 'vertical-pull', sets: 4, reps: 8, loadKg: 0, rpe: 8 },
      { exerciseId: 'bench-push-up', pattern: 'horizontal-push', sets: 3, reps: 12, loadKg: 0, rpe: 7 },
    ],
    sessionRpe: 8,
    totalVolumeKg: 100,
    ...overrides,
  };
}

function buildState(parts: Partial<UserState> = {}): UserState {
  return { ...createEmptyUserState('2026-08-22T12:00:00Z'), ...parts };
}

describe('userState.v1 — utilidades de fecha', () => {
  it('getWeekStartIso devuelve el lunes de la semana', () => {
    expect(getWeekStartIso('2026-08-22')).toBe(MON); // sábado → lunes
    expect(getWeekStartIso('2026-08-17')).toBe(MON); // lunes → sí mismo
    expect(getWeekStartIso('2026-08-23')).toBe(MON); // domingo → lunes
    expect(getWeekStartIso('2026-08-24')).toBe('2026-08-24'); // lunes siguiente
  });

  it('getWeekStartIso acepta datetimes ISO', () => {
    expect(getWeekStartIso('2026-08-22T23:59:59Z')).toBe(MON);
  });

  it('weekKeyFor produce claves ISO estables', () => {
    expect(weekKeyFor(MON)).toBe('2026-W34');
    expect(weekKeyFor('2026-08-23')).toBe('2026-W34');
    expect(weekKeyFor('2026-08-24')).toBe('2026-W35');
  });

  it('addDaysIso cruza fin de mes', () => {
    expect(addDaysIso('2026-08-31', 1)).toBe('2026-09-01');
    expect(addDaysIso(MON, -7)).toBe('2026-08-10');
  });
});

describe('userState.v1 — estado base', () => {
  it('createEmptyUserState es válido y versionado', () => {
    const s = createEmptyUserState();
    expect(s.version).toBe(USER_STATE_VERSION);
    expect(s.profile.conditions).toEqual([]);
    expect(s.profile.screening.redFlags).toEqual([]);
    expect(s.profile.equipment).toEqual([]);
    expect(s.dailyLogs).toEqual([]);
    expect(s.sessions).toEqual([]);
    expect(s.pain).toEqual([]);
    expect(s.skills).toEqual([]);
    expect(s.metrics).toEqual([]);
  });
});

describe('userState.v1 — agregados semanales', () => {
  const state = buildState({
    sessions: [
      session(), // lunes: 4 vertical-pull + 3 horizontal-push, RPE 8, 60min
      session({
        id: 's2',
        date: '2026-08-19',
        focus: 'legs',
        sessionRpe: 7,
        durationMin: 45,
        totalVolumeKg: 200,
        exercises: [
          { exerciseId: 'squat', pattern: 'squat', sets: 5, reps: 5, loadKg: 60, rpe: 8 },
          { exerciseId: 'ring-row', pattern: 'horizontal-pull', sets: 3, reps: 10, loadKg: 0 },
        ],
      }),
      session({ id: 's3', date: '2026-08-25', focus: 'next-week' }), // fuera de la semana
    ],
    dailyLogs: [
      { date: MON, sleepHours: 7.5, sleepQuality: 4, stress: 3 },
      { date: '2026-08-18', sleepHours: 6.5, sleepQuality: 3, stress: 6 },
    ],
  });

  it('sessionsInWeek filtra por semana ISO (lunes a domingo)', () => {
    expect(sessionsInWeek(state, MON).map((s) => s.id)).toEqual(['s1', 's2']);
  });

  it('patternVolumeFromSessions suma series duras y sesiones por patrón', () => {
    const vols = patternVolumeFromSessions(sessionsInWeek(state, MON));
    const byPattern = Object.fromEntries(vols.map((v) => [v.pattern, v]));
    expect(byPattern['vertical-pull']).toEqual({ pattern: 'vertical-pull', hardSets: 4, sessions: 1 });
    expect(byPattern['horizontal-pull'].hardSets).toBe(3);
    expect(byPattern.squat.hardSets).toBe(5);
    expect(vols[0].hardSets).toBeGreaterThanOrEqual(vols[vols.length - 1].hardSets); // orden descendente
  });

  it('deriveWeekAggregates calcula todos los agregados de la semana', () => {
    const agg = deriveWeekAggregates(state, MON);
    expect(agg.weekStartIso).toBe(MON);
    expect(agg.sessions).toBe(2);
    expect(agg.hardSets).toBe(15); // 4+3+5+3
    expect(agg.avgSessionRpe).toBe(7.5);
    expect(agg.totalDurationMin).toBe(105);
    expect(agg.totalVolumeKg).toBe(300);
    expect(agg.avgSleepHours).toBe(7);
    expect(agg.avgStress).toBe(4.5);
    expect(agg.byPattern.length).toBe(4);
  });

  it('totalVolumeKg es undefined si alguna sesión no lo reporta', () => {
    const partial = buildState({
      sessions: [session(), session({ id: 's2', date: MON, totalVolumeKg: undefined })],
    });
    expect(deriveWeekAggregates(partial, MON).totalVolumeKg).toBeUndefined();
  });

  it('semana vacía devuelve agregados neutros', () => {
    const agg = deriveWeekAggregates(buildState(), MON);
    expect(agg.sessions).toBe(0);
    expect(agg.hardSets).toBe(0);
    expect(agg.avgSessionRpe).toBeUndefined();
    expect(agg.painByZone).toEqual([]);
  });
});

describe('userState.v1 — dolor por zona', () => {
  const pain: PainEntry[] = [
    { date: MON, bodyZone: 'shoulder', severity: 3, timing: 'during' },
    { date: '2026-08-18', bodyZone: 'shoulder', severity: 5, timing: 'after' },
    { date: '2026-08-19', bodyZone: 'knee', severity: 2, timing: 'persistent' },
    { date: '2026-08-26', bodyZone: 'knee', severity: 9, timing: 'persistent' }, // fuera
  ];

  it('painByZoneInRange agrega reportes, máximos y medias', () => {
    const zones = painByZoneInRange(pain, MON, '2026-08-24');
    const shoulder = zones.find((z) => z.bodyZone === 'shoulder')!;
    expect(shoulder.reports).toBe(2);
    expect(shoulder.maxSeverity).toBe(5);
    expect(shoulder.avgSeverity).toBe(4);
    expect(shoulder.lastReportIso).toBe('2026-08-18');
    const knee = zones.find((z) => z.bodyZone === 'knee')!;
    expect(knee.reports).toBe(1);
    expect(knee.maxSeverity).toBe(2);
  });

  it('painByZoneInRange aparece en los agregados semanales', () => {
    const state = buildState({ pain });
    const agg = deriveWeekAggregates(state, MON);
    expect(agg.painByZone.map((z) => z.bodyZone).sort()).toEqual(['knee', 'shoulder']);
  });
});

describe('userState.v1 — deltas semana contra semana', () => {
  it('computeDeltas calcula diferencias con la semana anterior', () => {
    const state = buildState({
      sessions: [
        session(), // semana actual: 7 sets
        session({ id: 'prev', date: '2026-08-11', sessionRpe: 6, durationMin: 30, totalVolumeKg: 50 }),
      ],
    });
    const d = computeDeltas(state, MON);
    expect(d.weekStartIso).toBe(MON);
    expect(d.sessions).toBe(0); // 1 esta semana - 1 la anterior
    expect(d.hardSets).toBe(0); // 7 - 7 (misma estructura)
    expect(d.avgSessionRpe).toBe(2);
    expect(d.totalDurationMin).toBe(30);
  });

  it('dos semanas sin datos → deltas undefined (no inventar NaN)', () => {
    const d = computeDeltas(buildState(), MON);
    expect(d.sessions).toBeUndefined();
    expect(d.hardSets).toBeUndefined();
    expect(d.byPattern).toBeUndefined();
  });

  it('delta por patrón solo incluye patrones que cambian', () => {
    const state = buildState({
      sessions: [
        session(), // vertical-pull 4, horizontal-push 3 (semana actual)
        session({
          id: 'prev',
          date: '2026-08-11',
          exercises: [{ exerciseId: 'pull-up', pattern: 'vertical-pull', sets: 2, reps: 8, loadKg: 0 }],
        }),
      ],
    });
    const d = computeDeltas(state, MON);
    expect(d.byPattern).toEqual({ 'vertical-pull': 2, 'horizontal-push': 3 });
  });
});

describe('userState.v1 — rachas', () => {
  const TODAY = '2026-08-22'; // sábado

  it('racha de logs diarios consecutivos, con gracia si hoy falta', () => {
    const state = buildState({
      dailyLogs: [
        { date: '2026-08-21', sleepHours: 7 },
        { date: '2026-08-20', sleepHours: 7 },
        { date: '2026-08-19', sleepHours: 7 },
        { date: '2026-08-17', sleepHours: 7 }, // hueco el 18 → rompe
      ],
    });
    expect(computeStreaks(state, TODAY).dailyLogDays).toBe(3); // 21,20,19 (hoy sin log aún → gracia)
  });

  it('hoy con log cuenta en la racha', () => {
    const state = buildState({ dailyLogs: [{ date: TODAY }, { date: '2026-08-21' }] });
    expect(computeStreaks(state, TODAY).dailyLogDays).toBe(2);
  });

  it('racha de semanas con sesión; semana actual vacía no rompe', () => {
    const state = buildState({
      sessions: [session({ id: 'a', date: '2026-08-05' }), session({ id: 'b', date: '2026-08-12' })],
    });
    const s = computeStreaks(state, TODAY); // semana del 22 sin sesiones aún
    expect(s.trainingWeeks).toBe(2);
  });

  it('rachas de skills por práctica diaria', () => {
    const state = buildState({
      skills: [
        { skillId: 'de:unit-1', currentStep: 'a1.2', practiceLog: [TODAY, '2026-08-21'] },
        { skillId: 'fit:planche', currentStep: 'tuck', practiceLog: ['2026-08-10'] },
        { skillId: 'en:vocab', currentStep: 'c1', practiceLog: [] },
      ],
    });
    const s = computeStreaks(state, TODAY);
    expect(s.skillDays['de:unit-1']).toBe(2);
    expect(s.skillDays['fit:planche']).toBeUndefined();
    expect(s.skillDays['en:vocab']).toBeUndefined();
  });
});

describe('userState.v1 — métricas', () => {
  it('latestMetric devuelve el valor más reciente por fecha', () => {
    const state = buildState({
      metrics: [
        { metricId: 'body-weight', date: '2026-08-01', value: 78, unit: 'kg' },
        { metricId: 'body-weight', date: '2026-08-15', value: 77.2, unit: 'kg' },
        { metricId: 'body-weight', date: '2026-08-08', value: 77.8, unit: 'kg' },
      ],
    });
    expect(latestMetric(state, 'body-weight')?.value).toBe(77.2);
    expect(latestMetric(state, 'waist-circumference')).toBeUndefined();
  });
});
