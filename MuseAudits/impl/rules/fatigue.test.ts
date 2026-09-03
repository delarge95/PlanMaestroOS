import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { evaluateWeekFatigue, recalibrateCeiling } from './fatigue.js';

describe('fatigue', () => {
  it('semana normal en ok; sobre techo en violation I5', () => {
    const ok = evaluateWeekFatigue([
      { dateIso: 'd1', domain: 'strength', avgRpe: 8, minutes: 60 },
      { dateIso: 'd2', domain: 'cardio', avgRpe: 5, minutes: 45, hoursSinceStrength: 24 },
    ]);
    assert.equal(ok.status, 'ok');
    const big = evaluateWeekFatigue([
      { dateIso: 'd1', domain: 'strength', avgRpe: 9, minutes: 300 },
    ]);
    assert.equal(big.status, 'violation');
    assert.match(big.findings.join(), /I5/);
  });

  it('I1 cardio intenso <6h de fuerza; I3 skill al fallo', () => {
    const r = evaluateWeekFatigue([
      { dateIso: 'd1', domain: 'cardio', avgRpe: 8, minutes: 30, hoursSinceStrength: 3 },
      { dateIso: 'd2', domain: 'skills', avgRpe: 10, minutes: 20, toFailure: true },
    ]);
    assert.equal(r.status, 'violation');
    assert.ok(r.findings.some((f) => f.includes('I1')));
    assert.ok(r.findings.some((f) => f.includes('I3')));
  });

  it('techo se recalibra −15% con adherencia baja doble', () => {
    assert.equal(recalibrateCeiling(2500, [0.6, 0.5]), 2125);
    assert.equal(recalibrateCeiling(2500, [0.9, 0.5]), 2500);
  });
});
