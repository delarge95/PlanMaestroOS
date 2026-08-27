/**
 * Tests del corte vertical del sistema de reglas (Fase 3).
 * Cubre: userStateFeed (mapeos honestos), fitnessRules (evaluación con
 * fixtures citables), fromRuleEvaluations (puente a sugerencias).
 */
import { describe, it, expect } from 'vitest';
import {
  buildUserState,
  classifyPattern,
  workoutsToSessions,
  biofeedbackToDailyLogs,
} from '../userStateFeed';
import { FITNESS_SEED_RULES } from '../../../data/fitness/rules/fitnessRules';
import { evaluateRules, withRisk } from '../index';
import type { RuleContext } from '../types';
import { createEmptyUserState, deriveWeekAggregates } from '../../../data/contracts/userState';
import { fromRuleEvaluations } from '../../suggestions/fromRuleEvaluations';
import { createSuggestionEngine } from '../../suggestions';

describe('userStateFeed', () => {
  it('classifyPattern heurística cubre patrones comunes', () => {
    expect(classifyPattern('Barbell Bench Press')).toBe('horizontal-push');
    expect(classifyPattern('Pull-Up (Wide Grip)')).toBe('vertical-pull');
    expect(classifyPattern('Back Squat')).toBe('squat');
    expect(classifyPattern('Romanian Deadlift')).toBe('hinge');
    expect(classifyPattern('Plank')).toBe('core');
  });

  it('workoutsToSessions: convierte series, RPE medio y NO fabrica fecha', () => {
    const sessions = workoutsToSessions([
      {
        id: 'w1',
        date: 'vie 22 ago',
        routineTitle: 'Upper 1',
        durationMinutes: 65,
        exercises: [
          { name: 'Barbell Bench Press', completedSets: [{ weight: 60, reps: 8, rpe: 8 }, { weight: 60, reps: 7, rpe: 9 }] },
          { name: 'Pull-Up', completedSets: [{ weight: 0, reps: 8 }] }, // bodyweight: cuenta serie, sin carga
        ],
      },
      { id: 'w2', exercises: [{ name: 'Squat', completedSets: [{ weight: 80, reps: 5 }] }] }, // sin fecha → descartada
    ]);
    expect(sessions).toHaveLength(1);
    const s = sessions[0]!;
    expect(s.exercises).toHaveLength(2);
    expect(s.exercises[0]!.sets).toBe(2);
    expect(s.exercises[0]!.rpe).toBeCloseTo(8.5, 1);
    expect(s.exercises[1]!.loadKg).toBe(0);
    expect(s.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('biofeedbackToDailyLogs: mapeo documentado (pain→generalPain, anxiety→stress proxy)', () => {
    const logs = biofeedbackToDailyLogs([
      { dateIso: '2026-08-25', energy: 4, anxiety: 6, pain: 2, sleepHours: 6.5 },
    ]);
    expect(logs[0]!.sleepHours).toBe(6.5);
    expect(logs[0]!.generalPain).toBe(2);
    expect(logs[0]!.stress).toBe(6); // proxy inferred documentado
  });

  it('buildUserState ensambla y ordena por fecha', () => {
    const state = buildUserState({
      workoutHistory: [{ id: 'a', date: 'lun 18 ago', exercises: [{ name: 'Dip', completedSets: [{ weight: 10, reps: 6 }] }] }],
      biofeedback: [{ dateIso: '2026-08-17', energy: 5, anxiety: 3, pain: 0, sleepHours: 7 }],
      nowIso: '2026-08-25T10:00:00.000Z',
    });
    expect(state.sessions.length).toBeGreaterThan(0);
    expect(state.dailyLogs.length).toBe(1);
  });
});

describe('fitnessRules — evaluación con fixtures', () => {
  /** Contexto builder: semana con N series duras en un patrón + RPE + dolor. */
  function context(overrides?: {
    patternSets?: number;
    patternSessions?: number;
    weekSessions?: number;
    avgRpe?: number;
    generalPain?: number;
    prevPatternSets?: number;
  }): RuleContext {
    const st = createEmptyUserState('2026-08-25T10:00:00.000Z');
    if (overrides?.generalPain !== undefined) {
      st.dailyLogs = [{ date: '2026-08-25', generalPain: overrides.generalPain, illness: false }];
    }
    const mk = (sets: number, sessions: number, daysAgo = 0) => {
      const s = createEmptyUserState('2026-08-25T10:00:00.000Z');
      const perSession = Math.ceil(sets / sessions);
      s.sessions = Array.from({ length: sessions }, (_, i) => ({
        id: `s${i}`,
        date: `2026-08-${String(25 - daysAgo - i).padStart(2, '0')}`,
        focus: 'test',
        exercises: [
          {
            exerciseId: 'Bench Press',
            pattern: 'horizontal-push' as const,
            sets: perSession,
            reps: 8,
            loadKg: 60,
          },
        ],
        durationMin: 60,
      }));
      return s;
    };
    const sets = overrides?.patternSets ?? 12;
    const sessions = overrides?.patternSessions ?? 2;
    const weekState = mk(sets, sessions);
    return {
      userState: st,
      week: {
        ...deriveWeekAggregates(weekState, '2026-08-24'),
        sessions: overrides?.weekSessions ?? sessions,
        avgSessionRpe: overrides?.avgRpe,
      },
      previousWeek: overrides?.prevPatternSets !== undefined
        ? deriveWeekAggregates(mk(overrides.prevPatternSets, 2, 7), '2026-08-17')
        : undefined,
      todayIso: '2026-08-25',
    };
  }

  it('volumen bajo → warning de MEV con cita a Israetel', () => {
    const [ev] = withRisk(evaluateRules(FITNESS_SEED_RULES, context({ patternSets: 7 })))
      .filter((e) => e.ruleId === 'fit:volume-mev-per-pattern');
    expect(ev?.status).toBe('warning');
    expect(ev?.sourceRef).toMatchObject({ docId: 'israetel-scientific-principles-hypertrophy', chapter: 2, page: 61 });
  });

  it('volumen basura (>26 un patrón) → violation', () => {
    const [ev] = withRisk(evaluateRules(FITNESS_SEED_RULES, context({ patternSets: 28 })))
      .filter((e) => e.ruleId === 'fit:volume-mrv-per-pattern');
    expect(ev?.status).toBe('violation');
  });

  it('dolor 6/10 → warning con cita a OTend ch5 p85', () => {
    const [ev] = withRisk(evaluateRules(FITNESS_SEED_RULES, context({ patternSets: 12, generalPain: 6 })))
      .filter((e) => e.ruleId === 'fit:pain-session-ceiling');
    expect(ev?.status).toBe('warning');
    expect(ev?.sourceRef).toMatchObject({ docId: 'low-overcoming-tendonitis-2019', chapter: 5, page: 85 });
  });

  it('sin datos de dolor → not-applicable (nunca ok fabricado)', () => {
    const ev = evaluateRules(FITNESS_SEED_RULES, context({ patternSets: 12 }))
      .find((e) => e.ruleId === 'fit:pain-session-ceiling');
    expect(ev?.status).toBe('not-applicable');
  });

  it('rampa +60% semanal → warning de progresión', () => {
    const [ev] = withRisk(evaluateRules(FITNESS_SEED_RULES, context({ patternSets: 16, prevPatternSets: 10 })))
      .filter((e) => e.ruleId === 'fit:volume-ramp-weekly');
    expect(ev?.status).toBe('warning');
  });

  it('RPE medio 9.6 → warning de intensidad', () => {
    const [ev] = withRisk(evaluateRules(FITNESS_SEED_RULES, context({ patternSets: 12, avgRpe: 9.6 })))
      .filter((e) => e.ruleId === 'fit:session-rpe-ceiling');
    expect(ev?.status).toBe('warning');
  });
});

describe('fromRuleEvaluations + motor', () => {
  it('violations antes que warnings; trazabilidad intacta; cooldown aplica', () => {
    const candidates = fromRuleEvaluations(
      [
        {
          ruleId: 'fit:volume-mev-per-pattern', domain: 'fitness', status: 'warning',
          value: 7, message: 'Por debajo del mínimo.', confidence: 'explicit',
          evidenceTier: 'expert-book', sourceRef: { docId: 'israetel-scientific-principles-hypertrophy', chapter: 2, page: 61 },
        },
        {
          ruleId: 'fit:pain-session-ceiling', domain: 'fitness', status: 'violation',
          value: 7, message: 'Dolor alto.', confidence: 'explicit',
          evidenceTier: 'expert-book', sourceRef: { docId: 'low-overcoming-tendonitis-2019', chapter: 5, page: 85 },
        },
      ],
      '2026-W35',
    );
    expect(candidates).toHaveLength(2);
    const violation = candidates.find((c) => c.priority === 8);
    expect(violation?.ruleId).toBe('fit:pain-session-ceiling');
    expect(violation?.body).toContain('low-overcoming-tendonitis-2019');

    const engine = createSuggestionEngine({ maxActive: 3, cooldownsByType: { pain: 48 } });
    const now = '2026-08-25T10:00:00.000Z';
    for (const c of candidates) engine.propose(c, now);
    const active = engine.active(now);
    expect(active).toHaveLength(2);
    expect(active[0]!.priority).toBe(8); // violation primero

    engine.dismiss(active[0]!.id, 'not-now', now);
    expect(engine.active(now)).toHaveLength(1);
  });
});
