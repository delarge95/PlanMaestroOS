import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { parseHrMeasurement, rmssd } from './bleHeartRate.js';

function packet(flags: number, bytes: number[]): DataView {
  return new DataView(new Uint8Array([flags, ...bytes]).buffer);
}

describe('ble', () => {
  it('HR uint8 simple (Polar H10 típico)', () => {
    const s = parseHrMeasurement(packet(0x06, [72]));
    assert.equal(s.hr, 72);
    assert.equal(s.contact, true);
    assert.deepEqual(s.rrMs, []);
  });

  it('HR uint16 + energy + 2 RR', () => {
    // flags 0x1F: 16bit + contact + energy + RR; hr=1000? no: hr real 130
    const lo = 130 & 0xff, hi = 130 >> 8;
    const rr1 = Math.round(0.85 * 1024), rr2 = Math.round(0.9 * 1024);
    const bytes = [lo, hi, 0x10, 0x00, rr1 & 0xff, rr1 >> 8, rr2 & 0xff, rr2 >> 8];
    const s = parseHrMeasurement(packet(0x1f, bytes));
    assert.equal(s.hr, 130);
    assert.equal(s.energyExpendedKj, 16);
    assert.equal(s.rrMs.length, 2);
    assert.ok(rmssd(s.rrMs)! > 0);
  });

  it('HR imposible lanza; RMSSD necesita 2+ intervalos', () => {
    assert.throws(() => parseHrMeasurement(packet(0x00, [10])));
    assert.equal(rmssd([800]), null);
    assert.equal(rmssd([800, 850, 820]), 41.2);
  });
});
