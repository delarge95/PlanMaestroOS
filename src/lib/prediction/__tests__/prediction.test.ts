import { describe, expect, it } from 'vitest';
import { epley, brzycki, predictOneRm, bestOneRm, predictOneRmFromHistory } from '../oneRm';
import { calculateInjuryRisk, type DailyLoad } from '../injuryRisk';

describe('oneRm — fórmulas', () => {
  it('Epley: 100kg × 5 reps → 116.7', () => {
    expect(epley(100, 5)).toBeCloseTo(116.67, 1);
  });

  it('Brzycki: 100kg × 5 reps → 112.5', () => {
    expect(brzycki(100, 5)).toBeCloseTo(112.5, 1);
  });

  it('Epley corre más alto que Brzycki (2-4% a 5 reps)', () => {
    expect(epley(100, 5)).toBeGreaterThan(brzycki(100, 5));
  });
});

describe('predictOneRm', () => {
  it('5 reps × 100kg RIR 0 → ~114kg, confianza alta', () => {
    const r = predictOneRm({ weightKg: 100, reps: 5, rir: 0 });
    expect(r).not.toBeNull();
    expect(r!.confidence).toBe('alta');
    expect(r!.estimatedKg).toBeGreaterThan(110);
    expect(r!.estimatedKg).toBeLessThan(120);
  });

  it('RIR ajusta: 5 reps RIR 2 = 7 reps efectivas → 1RM mayor', () => {
    const sinRir = predictOneRm({ weightKg: 100, reps: 5, rir: 0 })!;
    const conRir = predictOneRm({ weightKg: 100, reps: 5, rir: 2 })!;
    expect(conRir.estimatedKg).toBeGreaterThan(sinRir.estimatedKg);
    expect(conRir.effectiveReps).toBe(7);
  });

  it('>15 reps efectivas → null (fuera de rango fiable)', () => {
    expect(predictOneRm({ weightKg: 50, reps: 20, rir: 0 })).toBeNull();
  });

  it('peso 0 o negativo → null', () => {
    expect(predictOneRm({ weightKg: 0, reps: 5 })).toBeNull();
    expect(predictOneRm({ weightKg: -5, reps: 5 })).toBeNull();
  });

  it('declara base como estimado', () => {
    const r = predictOneRm({ weightKg: 100, reps: 3 })!;
    expect(r.basis).toMatch(/estimado/);
  });
});

describe('bestOneRm', () => {
  it('elige el set de mayor confianza (menos reps)', () => {
    const best = bestOneRm([
      { weightKg: 100, reps: 8, rir: 2 }, // media
      { weightKg: 110, reps: 3, rir: 1 }, // alta
      { weightKg: 80, reps: 12, rir: 0 }, // baja
    ]);
    expect(best!.confidence).toBe('alta');
    expect(best!.effectiveReps).toBe(4);
  });

  it('lista vacía → null', () => {
    expect(bestOneRm([])).toBeNull();
  });
});

describe('predictOneRmFromHistory', () => {
  it('agrega por nombre de ejercicio y ordena por peso descendente', () => {
    const results = predictOneRmFromHistory([
      { name: 'Leg Press', completedSets: [{ weight: 200, reps: 8, rpe: 8 }] },
      { name: 'Curl', completedSets: [{ weight: 30, reps: 10, rpe: 9 }] },
      { name: 'Leg Press', completedSets: [{ weight: 210, reps: 6, rpe: 9 }] },
    ]);
    expect(results).toHaveLength(2);
    expect(results[0].name).toBe('Leg Press');
    expect(results[0].result.estimatedKg).toBeGreaterThan(results[1].result.estimatedKg);
  });

  it('sets sin peso o sin reps se ignoran', () => {
    const results = predictOneRmFromHistory([
      { name: 'Plank', completedSets: [{ weight: 0, reps: 60 }] },
    ]);
    expect(results).toHaveLength(0);
  });
});

// ——————————————————— M3 InjuryRisk ———————————————————

function genDays(n: number, load: number): DailyLoad[] {
  return Array.from({ length: n }, (_, i) => {
    const d = new Date('2026-09-17T12:00:00');
    d.setDate(d.getDate() - i);
    return { dateIso: d.toISOString().slice(0, 10), load };
  });
}

describe('calculateInjuryRisk', () => {
  it('datos insuficientes → level insuficiente', () => {
    const r = calculateInjuryRisk({ dailyLoads: genDays(5, 500) });
    expect(r.level).toBe('insuficiente');
    expect(r.acwr).toBeNull();
  });

  it('carga constante 28d → ACWR ≈ 1.0, riesgo bajo', () => {
    const r = calculateInjuryRisk({ dailyLoads: genDays(28, 500) });
    expect(r.level).toBe('bajo');
    expect(r.acwr).toBeCloseTo(1.0, 1);
    // Carga perfectamente constante → std 0 → monotonía null (división por 0 std)
    expect(r.flags.some((f) => f.includes('sweet spot'))).toBe(true);
  });

  it('spike reciente (ACWR 2.0) → riesgo alto', () => {
    const days = [...genDays(28, 300)];
    // genDays(0)=hoy → los índices 0-6 son los MÁS RECIENTES (aguda)
    for (let i = 0; i < 7; i++) days[i].load = 900;
    const r = calculateInjuryRisk({ dailyLoads: days });
    expect(r.acwr!).toBeGreaterThan(1.5);
    expect(r.level).toBe('alto');
    expect(r.flags.some((f) => f.includes('danger zone'))).toBe(true);
  });

  it('HRV muy deprimida suma bandera y eleva el score', () => {
    const base = calculateInjuryRisk({ dailyLoads: genDays(28, 500) });
    const withHrv = calculateInjuryRisk({ dailyLoads: genDays(28, 500), hrvZScore: -2.5 });
    expect(withHrv.score).toBeGreaterThan(base.score);
    expect(withHrv.flags.some((f) => f.includes('HRV'))).toBe(true);
  });

  it('declara base como bandera, no diagnóstico', () => {
    const r = calculateInjuryRisk({ dailyLoads: genDays(28, 500) });
    expect(r.basis).toMatch(/no diagnóstico/);
  });
});
