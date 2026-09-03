import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { mergeDailyLogs, validateWearableDay } from './wearable.js';
import { importWearableCsv } from './importWearableCsv.js';
import { sessionToActivity, strengthKcal } from './sessionToNutrition.js';
import { applyMinViable, morningBriefing } from './morningBriefing.js';
import { RenderScheduler } from './webglOnDemand.js';

describe('bridges', () => {
  it('wearable valida rangos y fusiona (manual gana)', () => {
    assert.equal(validateWearableDay({ dateIso: 'mal' }), null);
    assert.equal(validateWearableDay({ dateIso: '2026-09-04', restingHr: 200 })?.restingHr, undefined);
    const merged = mergeDailyLogs(
      [{ dateIso: '2026-09-04', weightKg: 80, source: 'manual' }],
      [{ dateIso: '2026-09-04', weightKg: 81, steps: 8000 }],
    );
    assert.equal(merged[0].weightKg, 80);
    assert.equal(merged[0].steps, 8000);
    assert.equal(merged[0].source, 'merged');
  });

  it('CSV flexible con alias ES/EN + errores por línea', () => {
    const { days, errors } = importWearableCsv(
      'fecha,pasos,peso\n2026-09-03,9000,80.5\nsin-fecha,100,70\n2026-09-04,,',
    );
    assert.equal(days.length, 1);
    assert.equal(days[0].steps, 9000);
    assert.equal(errors.length, 2);
  });

  it('fuerza: 0 sin carga; snapshot genera actividad citada', () => {
    assert.equal(strengthKcal({ id: 'x', sets: 3, reps: 10 }), 0);
    const kcal = strengthKcal({ id: 'press', sets: 4, reps: 8, loadKg: 60 });
    assert.ok(kcal > 2 && kcal < 8); // cota inferior honesta
    const act = sessionToActivity({
      dateIso: '2026-09-04', program: 'Min-Max', day: 'Lower 2',
      exercises: [{ id: 'sq', sets: 4, reps: 8, loadKg: 60 }], durationTotalMin: 55,
    }, 80);
    assert.equal(act.kind, 'strength');
    assert.ok(act.citation.length > 0);
  });

  it('briefing: crisis->min_viable; óptimo->extended; normal intermedio', () => {
    const base = { sleepHours: 7, energy: 'medium' as const, painMaxEva: 0, overdueCount: 2, vocabDue: 20 };
    assert.equal(morningBriefing({ ...base, energy: 'crisis' }).mode, 'min_viable');
    assert.equal(morningBriefing({ ...base, sleepHours: 5 }).mode, 'min_viable');
    assert.equal(morningBriefing({ ...base, painMaxEva: 8 }).mode, 'min_viable');
    assert.equal(morningBriefing({ ...base, energy: 'high', sleepHours: 8, painMaxEva: 0 }).mode, 'extended');
    assert.equal(morningBriefing(base).top3[2].minutes, 15);
  });

  it('minViable deja 1 serie por patrón', () => {
    const out = applyMinViable([
      { id: 'a', pattern: 'push', sets: 4 }, { id: 'b', pattern: 'push', sets: 4 }, { id: 'c', pattern: 'pull', sets: 3 },
    ]);
    assert.deepEqual(out.map((e) => e.id), ['a', 'c']);
    assert.ok(out.every((e) => e.sets === 1));
  });

  it('RenderScheduler duerme sin interacción', () => {
    const s = new RenderScheduler();
    assert.equal(s.shouldRender(), true); // primer frame
    assert.equal(s.shouldRender(), false);
    s.requestRender('orbit');
    assert.equal(s.shouldRender(), true);
    assert.equal(s.shouldRender(), false);
    s.setAnimating(true);
    assert.equal(s.shouldRender(), true);
    assert.equal(s.shouldRender(), true);
  });
});
