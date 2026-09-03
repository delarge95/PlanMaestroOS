import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { ALL_LANDMARKS, BATCH1_TORSO_PUSH, evaluateVolumeLandmarks } from './volumeRules.js';
import { evaluateClinicalDay, evaluateNutritionDay } from './dayRules.js';

describe('volume+day rules', () => {
  it('lote 1 trae 5 landmarks; MRV repetido=violation, MEV bajo=warning', () => {
    assert.equal(BATCH1_TORSO_PUSH.length, 5);
    const evals = evaluateVolumeLandmarks(BATCH1_TORSO_PUSH, [
      { muscle: 'pectoral', hardSets: 24, sessions: 2, weeksBelowMev: 0, weeksAboveMrv: 1 },
      { muscle: 'triceps', hardSets: 4, sessions: 2, weeksBelowMev: 1, weeksAboveMrv: 0 },
    ]);
    assert.ok(evals.some((e) => e.ruleId === 'fit:vol-pectoral-mrv' && e.status === 'violation'));
    assert.ok(evals.some((e) => e.ruleId === 'fit:vol-triceps-mev' && e.status === 'warning'));
    assert.ok(evals.some((e) => e.status === 'not-applicable'));
  });

  it('tabla completa: 15 músculos sin duplicados, rangos coherentes', () => {
    assert.equal(ALL_LANDMARKS.length, 15);
    const ids = ALL_LANDMARKS.map((m) => m.muscle);
    assert.equal(new Set(ids).size, 15);
    for (const m of ALL_LANDMARKS) {
      assert.ok(m.mevMin <= m.mavMin && m.mavMin <= m.mavMax && m.mavMax <= m.mrv, m.muscle);
      assert.ok(m.minFreq >= 1 && m.minFreq <= 3, m.muscle);
    }
  });
  it('nutrición: proteína/balance/agua con display-only', () => {
    const w = evaluateNutritionDay({ proteinG: 100, kcalIn: 2000, kcalOut: 2800, waterMl: 1500, weightKg: 80, goal: 'volumen', femaleLuteal: false });
    assert.ok(w.every((e) => e.status === 'warning'));
    assert.match(w[1].message, /display-only/);
    const ok = evaluateNutritionDay({ proteinG: 170, kcalIn: 3300, kcalOut: 3000, waterMl: 3000, weightKg: 80, goal: 'volumen', femaleLuteal: false });
    assert.ok(ok.every((e) => e.status === 'ok'));
  });

  it('clínico: siempre con disclaimer, jamás diagnostica', () => {
    const w = evaluateClinicalDay({ ruminationMin: 25, sleepHours: 5, exposuresMissedDays: 3 });
    assert.ok(w.every((e) => e.status === 'warning'));
    assert.ok(w.every((e) => e.message.includes('derivación')));
  });
});
