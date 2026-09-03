import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { resolveConflict } from './evidence.js';
import { evaluateRpeCalibration } from './rpeCalibration.js';

describe('rules', () => {
  it('gana el tier mayor aunque el libro sea menos específico', () => {
    assert.equal(
      resolveConflict('hypertrophy',
        { docId: 'x', tier: 'observational' },
        { docId: 'y', tier: 'rct' }),
      'y',
    );
  });

  it('en empate gana la especialidad (calistenia -> Low)', () => {
    assert.equal(
      resolveConflict('calisthenics',
        { docId: 'nippard-fundamentals-hypertrophy', tier: 'expert-book' },
        { docId: 'low-overcoming-gravity-2ed', tier: 'expert-book' }),
      'low-overcoming-gravity-2ed',
    );
  });

  it('sin criterio honesto devuelve tie', () => {
    assert.equal(
      resolveConflict('general',
        { docId: 'a', tier: 'expert-book' },
        { docId: 'b', tier: 'expert-book' }),
      'tie',
    );
  });

  it('RPE: sin calibración -> warning; 5 semanas -> warning; 2 semanas -> ok', () => {
    assert.equal(evaluateRpeCalibration({ lastCalibrationIso: null, todayIso: '2026-09-04', plannedMonoarticular: true }).status, 'warning');
    assert.equal(evaluateRpeCalibration({ lastCalibrationIso: '2026-07-24', todayIso: '2026-09-04', plannedMonoarticular: true }).status, 'warning');
    assert.equal(evaluateRpeCalibration({ lastCalibrationIso: '2026-08-21', todayIso: '2026-09-04', plannedMonoarticular: true }).status, 'ok');
  });
});
