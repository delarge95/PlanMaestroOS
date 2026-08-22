import { describe, it, expect } from 'vitest';
import {
  evaluateRules,
  evaluateRule,
  withRisk,
  withinBounds,
  type DomainRule,
  type RuleContext,
} from '../index';
import {
  createEmptyUserState,
  deriveWeekAggregates,
  type UserState,
  type TrainingSession,
} from '../../../data/contracts/userState';

// ---------------------------------------------------------------------------
// Contexto fixture: semana del lunes 2026-08-17
// ---------------------------------------------------------------------------
const MON = '2026-08-17';

function buildContext(stateOverrides: Partial<UserState> = {}, domain?: Record<string, unknown>): RuleContext {
  const state: UserState = { ...createEmptyUserState(), ...stateOverrides };
  return {
    userState: state,
    week: deriveWeekAggregates(state, MON),
    previousWeek: deriveWeekAggregates(state, '2026-08-10'),
    todayIso: '2026-08-22',
    domain,
  };
}

function sessionWith(sets: number, overrides: Partial<TrainingSession> = {}): TrainingSession {
  return {
    id: 's',
    date: MON,
    focus: 'push',
    durationMin: 50,
    exercises: [{ exerciseId: 'pull-up', pattern: 'vertical-pull', sets, reps: 8, loadKg: 0 }],
    ...overrides,
  };
}

// ---------------------------------------------------------------------------
// Reglas fixture (nada de lógica de dominio real: solo números demo)
// ---------------------------------------------------------------------------
const volumeRule: DomainRule = {
  id: 'fit:test-volume',
  domain: 'fitness',
  description: 'Regla fixture: 10–20 series duras/semana',
  type: 'volume',
  metric: 'hardSetsPerWeek',
  optimalRange: { min: 10, max: 20 },
  riskThresholds: {
    warning: { min: 6, max: 24 },
    violation: { min: 0, max: 30 },
  },
  appliesWhen: (ctx) => (ctx.userState.profile.trainingAge ?? 0) >= 1,
  resolveValue: (ctx) => ctx.week.byPattern.find((p) => p.pattern === 'vertical-pull')?.hardSets,
  confidence: 'explicit',
  evidenceTier: 'meta-analysis',
  sourceRef: { docId: 'fixture-book', chapter: 3, page: 45 },
};

const sleepRule: DomainRule = {
  id: 'core:test-sleep',
  domain: 'core',
  description: 'Regla fixture: dormir ≥7h',
  type: 'lifestyle',
  metric: 'sleepHoursAvg',
  optimalRange: { min: 7 },
  appliesWhen: () => true,
  resolveValue: (ctx) => ctx.week.avgSleepHours,
  confidence: 'explicit',
  evidenceTier: 'observational',
  sourceRef: { docId: 'fixture-sleep-doc' },
};

const painRule: DomainRule = {
  id: 'fit:test-pain',
  domain: 'fitness',
  description: 'Regla fixture: dolor de hombro ≥7 ⇒ violación',
  type: 'pain',
  metric: 'painScale',
  riskThresholds: { violation: { min: 0, max: 6 } },
  appliesWhen: (ctx) => ctx.userState.pain.length > 0,
  resolveValue: (ctx) =>
    Math.max(0, ...ctx.week.painByZone.filter((z) => z.bodyZone === 'shoulder').map((z) => z.maxSeverity)),
  confidence: 'explicit',
  evidenceTier: 'expert-book',
  sourceRef: { docId: 'fixture-tendon', page: 210 },
};

describe('withinBounds', () => {
  it('respeta rangos semiabiertos', () => {
    expect(withinBounds(5, { min: 1, max: 10 })).toBe(true);
    expect(withinBounds(1, { min: 1, max: 10 })).toBe(true);
    expect(withinBounds(10, { min: 1, max: 10 })).toBe(true);
    expect(withinBounds(0, { min: 1, max: 10 })).toBe(false);
    expect(withinBounds(11, { min: 1, max: 10 })).toBe(false);
    expect(withinBounds(999, { min: 1 })).toBe(true);
    expect(withinBounds(-1, { max: 0 })).toBe(true);
  });
});

describe('evaluateRules — estados', () => {
  it('ok cuando el valor cae dentro del rango óptimo', () => {
    const ctx = buildContext({
      profile: { ...createEmptyUserState().profile, trainingAge: 3, conditions: [], screening: { redFlags: [] }, equipment: [] },
      sessions: [sessionWith(14)],
    });
    const [ev] = evaluateRules([volumeRule], ctx);
    expect(ev.status).toBe('ok');
    expect(ev.value).toBe(14);
    expect(ev.ruleId).toBe('fit:test-volume');
    expect(ev.message).toContain('fixture-book');
    expect(ev.message).toContain('cap. 3');
    expect(ev.message).toContain('p. 45');
  });

  it('warning cuando el valor cae fuera del rango seguro pero no de la violación', () => {
    const ctx = buildContext({
      profile: { ...createEmptyUserState().profile, trainingAge: 3, conditions: [], screening: { redFlags: [] }, equipment: [] },
      sessions: [sessionWith(23)], // > 24 no, > 20 sí
    });
    const [ev] = evaluateRules([volumeRule], ctx);
    expect(ev.status).toBe('warning');
  });

  it('violation cuando supera el umbral de violación (prioridad sobre warning)', () => {
    const ctx = buildContext({
      profile: { ...createEmptyUserState().profile, trainingAge: 3, conditions: [], screening: { redFlags: [] }, equipment: [] },
      sessions: [sessionWith(31)],
    });
    const [ev] = evaluateRules([volumeRule], ctx);
    expect(ev.status).toBe('violation');
  });

  it('not-applicable cuando appliesWhen es false (guarda de población)', () => {
    const ctx = buildContext({ sessions: [sessionWith(31)] }); // trainingAge undefined
    const [ev] = evaluateRules([volumeRule], ctx);
    expect(ev.status).toBe('not-applicable');
    expect(ev.value).toBeUndefined();
  });

  it('not-applicable cuando no hay datos (resolveValue → undefined)', () => {
    const ctx = buildContext(); // sin logs
    const [ev] = evaluateRules([sleepRule], ctx);
    expect(ev.status).toBe('not-applicable');
    expect(ev.value).toBeUndefined();
  });

  it('sin riskThresholds: fuera del óptimo ⇒ warning por defecto', () => {
    const ctx = buildContext({ dailyLogs: [{ date: MON, sleepHours: 5 }] });
    const [ev] = evaluateRules([sleepRule], ctx);
    expect(ev.status).toBe('warning');
    expect(ev.value).toBe(5);
  });

  it('violation con only-violation thresholds (dolor)', () => {
    const ctx = buildContext({
      pain: [{ date: MON, bodyZone: 'shoulder', severity: 8, timing: 'during' }],
    });
    const [ev] = evaluateRules([painRule], ctx);
    expect(ev.status).toBe('violation');
    expect(ev.value).toBe(8);
  });

  it('dolor por debajo del umbral ⇒ ok aunque no haya optimalRange', () => {
    const ctx = buildContext({
      pain: [{ date: MON, bodyZone: 'shoulder', severity: 2, timing: 'after' }],
    });
    const [ev] = evaluateRules([painRule], ctx);
    expect(ev.status).toBe('ok');
  });
});

describe('evaluateRules — contrato del motor', () => {
  it('mantiene el orden del catálogo y devuelve trazabilidad completa', () => {
    const ctx = buildContext({
      dailyLogs: [{ date: MON, sleepHours: 8 }],
      pain: [{ date: MON, bodyZone: 'shoulder', severity: 1, timing: 'after' }],
    });
    const evs = evaluateRules([volumeRule, sleepRule, painRule], ctx);
    expect(evs.map((e) => e.ruleId)).toEqual(['fit:test-volume', 'core:test-sleep', 'fit:test-pain']);
    for (const ev of evs) {
      expect(ev.domain).toBeTruthy();
      expect(ev.confidence).toBeTruthy();
      expect(ev.evidenceTier).toBeTruthy();
      expect(ev.sourceRef.docId).toBeTruthy();
      expect(typeof ev.message).toBe('string');
    }
  });

  it('es determinista: misma entrada ⇒ misma salida', () => {
    const ctx = buildContext({
      profile: { ...createEmptyUserState().profile, trainingAge: 2, conditions: [], screening: { redFlags: [] }, equipment: [] },
      sessions: [sessionWith(12)],
    });
    expect(evaluateRules([volumeRule, sleepRule], ctx)).toEqual(evaluateRules([volumeRule, sleepRule], ctx));
  });

  it('messages personalizados por estado tienen prioridad', () => {
    const custom: DomainRule = {
      ...sleepRule,
      id: 'fit:custom-msg',
      messages: { warning: 'Duerme más (mensaje custom).' },
    };
    const ctx = buildContext({ dailyLogs: [{ date: MON, sleepHours: 4 }] });
    const [ev] = evaluateRules([custom], ctx);
    expect(ev.status).toBe('warning');
    expect(ev.message).toBe('Duerme más (mensaje custom).');
  });

  it('el contexto domain transporta datos propios del dominio', () => {
    const usesDomain: DomainRule = {
      ...sleepRule,
      id: 'nutri:test-protein',
      domain: 'nutrition',
      metric: 'proteinGPerKg',
      // Rango propio (no hereda el {min:7} de la regla de sueño):
      optimalRange: { min: 1.2, max: 2.2 },
      riskThresholds: undefined,
      appliesWhen: (ctx) => typeof ctx.domain?.['weightKg'] === 'number',
      resolveValue: (ctx) => {
        const weight = ctx.domain?.['weightKg'];
        const protein = ctx.domain?.['proteinG'];
        return typeof weight === 'number' && typeof protein === 'number'
          ? Math.round((protein / weight) * 10) / 10
          : undefined;
      },
    };
    const withWeight = buildContext({}, { weightKg: 80, proteinG: 160 });
    const [evOk] = evaluateRules([usesDomain], withWeight);
    expect(evOk.status).toBe('ok');
    expect(evOk.value).toBe(2);

    const withoutWeight = buildContext({}, {});
    const [evNa] = evaluateRules([usesDomain], withoutWeight);
    expect(evNa.status).toBe('not-applicable');
  });
});

describe('withRisk', () => {
  it('filtra solo warning y violation', () => {
    const ctx = buildContext({
      dailyLogs: [{ date: MON, sleepHours: 5 }], // sleep warning
      pain: [{ date: MON, bodyZone: 'shoulder', severity: 1, timing: 'after' }], // pain ok
    });
    const evs = evaluateRules([sleepRule, painRule], ctx);
    expect(evs.length).toBe(2);
    const risky = withRisk(evs);
    expect(risky.length).toBe(1);
    expect(risky[0].ruleId).toBe('core:test-sleep');
  });
});

describe('evaluateRule (regla individual)', () => {
  it('produce el mismo resultado que a través del catálogo', () => {
    const ctx = buildContext({ dailyLogs: [{ date: MON, sleepHours: 6 }] });
    expect(evaluateRule(sleepRule, ctx)).toEqual(evaluateRules([sleepRule], ctx)[0]);
  });
});
