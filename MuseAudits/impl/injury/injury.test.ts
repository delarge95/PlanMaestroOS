import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { triage } from './triage.js';
import { LESION_RULES } from './lesionRules.js';
import { logPain, painTrend, referralDue } from './painLog.js';

const base = {
  zone: 'hombro-anterior',
  onset: 'gradual' as const,
  quality: 'dull' as const,
  eva: 5,
  morningStiffness: true,
  improvesWithWarmup: true,
  instability: false,
  swelling: false,
  tingling: false,
  redFlags: [] as string[],
};

describe('injury', () => {
  it('red-flag bloquea con doctor_now', () => {
    const r = triage({ ...base, redFlags: ['pérdida de fuerza progresiva'] });
    assert.equal(r.blocked, true);
    assert.equal(r.candidates[0].action, 'doctor_now');
  });

  it('patrón tendinoso clásico -> tendón alta + rehab_load', () => {
    const r = triage(base);
    assert.equal(r.blocked, false);
    assert.equal(r.candidates[0].tissue, 'tendon');
    assert.equal(r.candidates[0].action, 'rehab_load');
    assert.ok(r.candidates[0].citation.includes('tendonitis'));
    assert.ok(r.disclaimer.includes('no diagnóstico'));
  });

  it('hormigueo -> nervio + nerve_gliding', () => {
    const r = triage({ ...base, onset: 'gradual', quality: 'electric', tingling: true, morningStiffness: false, improvesWithWarmup: false });
    assert.equal(r.candidates[0].tissue, 'nerve');
  });

  it('traumático + inestabilidad -> ligamento + doctor', () => {
    const r = triage({ ...base, onset: 'traumatic', quality: 'sharp', instability: true, morningStiffness: false, improvesWithWarmup: false, eva: 8 });
    assert.equal(r.candidates[0].tissue, 'ligament');
    assert.equal(r.candidates[0].action, 'doctor_now');
  });

  it('reglas lesion: 7=violation, 5=warning sustitución, 2=warning tope, 0=ok', () => {
    const run = (eva: number) =>
      LESION_RULES.map((r) => r.evaluate({ todayIso: '2026-09-04', painToday: eva === 0 ? [] : [{ zone: 'hombro', eva, dateIso: '2026-09-04' }], plannedPatterns: ['push'] }));
    assert.equal(run(8)[0].status, 'violation');
    assert.equal(run(5)[1].status, 'warning');
    assert.equal(run(2)[2].status, 'warning');
    assert.ok(run(0).every((e) => e.status === 'not-applicable'));
    assert.ok(LESION_RULES.every((r) => r.sourceRef.docId.length > 0));
  });

  it('painLog: upsert, tendencia y derivación', () => {
    let log = [
      { dateIso: '2026-08-29', zone: 'rodilla', eva: 3 },
      { dateIso: '2026-08-30', zone: 'rodilla', eva: 4 },
      { dateIso: '2026-08-31', zone: 'rodilla', eva: 5 },
    ];
    assert.equal(painTrend(log, 'rodilla'), 'worsening');
    assert.equal(referralDue(log, 'rodilla').refer, true);
    log = logPain(log, { dateIso: '2026-08-31', zone: 'rodilla', eva: 2 });
    assert.equal(log.filter((e) => e.dateIso === '2026-08-31')[0].eva, 2);
    assert.equal(painTrend(log, 'rodilla'), 'stable');
    assert.equal(referralDue(log, 'rodilla').refer, false);
    const better = [
      { dateIso: '2026-08-29', zone: 'rodilla', eva: 5 },
      { dateIso: '2026-08-30', zone: 'rodilla', eva: 4 },
      { dateIso: '2026-08-31', zone: 'rodilla', eva: 2 },
    ];
    assert.equal(painTrend(better, 'rodilla'), 'improving');
  });
});
