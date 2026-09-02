// src/data/fitness/nutrition/kcalEstimator.test.ts — Tests del estimador de kcal quemadas (AG-NUTRI ciclo 2)
import { describe, expect, it } from 'vitest';
import {
  DEFAULT_REP_DISTANCE_M,
  dailyBalance,
  estimateActivity,
  estimateDayBurn,
  estimateKcalFromMetActivity,
  estimateKcalFromStrengthSession,
  type MetActivitySource,
} from './kcalEstimator';
import { toChunkCitation } from './rules';

const PRESET_CITATION = { source: 'acsm-exercise-testing-prescription-10ed', locator: 'Cap. 6, Tabla 6.3 aplicada a 8 km/h (134 m/min)' };

describe('estimateKcalFromMetActivity', () => {
  it('aplica kcal = METs × kg × horas (8.7 METs, 70 kg, 60 min → 609 kcal)', () => {
    const input: MetActivitySource & { weightKg: number } = {
      label: 'Running zona E', mets: 8.7, minutes: 60, weightKg: 70, citation: PRESET_CITATION,
    };
    const est = estimateKcalFromMetActivity(input);
    expect(est.kcal).toBe(609);
    expect(est.confidence).toBe('inferred');
    expect(est.why).toHaveLength(1);
    expect(est.why[0].locator).toContain('Tabla 6.3');
  });

  it('escala con minutos y peso (8.7 METs, 80 kg, 30 min → 348 kcal)', () => {
    const est = estimateKcalFromMetActivity({
      label: 'Trote', mets: 8.7, minutes: 30, weightKg: 80, citation: PRESET_CITATION,
    });
    expect(est.kcal).toBe(348);
  });

  it('entrada manual sin fuente → qualitative y why vacío (nada de cifras sin cita en UI)', () => {
    const est = estimateKcalFromMetActivity({ label: 'Manual', mets: 6, minutes: 45, weightKg: 70 });
    expect(est.confidence).toBe('qualitative');
    expect(est.why).toHaveLength(0);
    expect(est.detail).toContain('SIN fuente');
  });
});

describe('estimateKcalFromStrengthSession', () => {
  it('usa trabajo mecánico como cota inferior + EPOC citado (+5–15%)', () => {
    const session = { label: 'Sentadilla 3×10@60', series: 3, repsPerSeries: 10, loadKg: 60 };
    const est = estimateKcalFromStrengthSession(session);
    const workKj = (3 * 10 * 60 * DEFAULT_REP_DISTANCE_M * 9.81) / 1000;
    const floorKcal = workKj / 4.184;
    expect(est.min).toBeCloseTo(floorKcal * 1.05, 1);
    expect(est.kcal).toBeCloseTo(floorKcal * 1.1, 1);
    expect(est.max).toBeCloseTo(floorKcal * 1.15, 1);
  });

  it('marca confidence inferred y cita nutri-mau-epoc', () => {
    const est = estimateKcalFromStrengthSession({ label: 'Press', series: 5, repsPerSeries: 5, loadKg: 80 });
    expect(est.confidence).toBe('inferred');
    expect(est.why.some((c) => c.ruleId === 'nutri-mau-epoc')).toBe(true);
  });

  it('documenta la asunción de distancia por repetición', () => {
    const est = estimateKcalFromStrengthSession({ label: 'X', series: 1, repsPerSeries: 1, loadKg: 100 });
    expect(est.detail).toContain(`${DEFAULT_REP_DISTANCE_M} m`);
  });
});

describe('estimateDayBurn / dailyBalance', () => {
  it('agrega items y rango min/max del día', () => {
    const burn = estimateDayBurn([
      { kind: 'met', label: 'Preset running', mets: 8.7, minutes: 60, citation: PRESET_CITATION },
      { kind: 'strength', label: 'Fuerza', series: 3, repsPerSeries: 10, loadKg: 60 },
    ], 70);
    expect(burn.items).toHaveLength(2);
    const expectedMin = burn.items.reduce((a, e) => a + e.min, 0);
    expect(burn.minKcal).toBeCloseTo(Math.round(expectedMin * 10) / 10, 1);
    expect(burn.totalKcal).toBeGreaterThan(600);
  });

  it('hasUnsourcedEntries=true si alguna entrada no tiene cita', () => {
    const burn = estimateDayBurn([
      { kind: 'met', label: 'Sin fuente', mets: 5, minutes: 20 },
    ], 70);
    expect(burn.hasUnsourcedEntries).toBe(true);
  });

  it('balance = objetivo − quemado, con contexto TDEE citado (Aragon ISSN)', () => {
    const burn = estimateDayBurn([
      { kind: 'met', label: 'Bici Z2', mets: 6.7, minutes: 90, citation: { source: 'allen-power-meter-3ed', locator: 'kJ≈kcal' } },
    ], 75);
    const balance = dailyBalance(2870, burn);
    expect(balance.remainingKcal).toBe(2870 - Math.round(burn.totalKcal));
    expect(balance.detail).toContain('TDEE');
    expect(balance.why.some((c) => c.ruleId === 'aragon-issn-thermic-effect-and-adaptive-thermogenesis')).toBe(true);
  });

  it('todo estimate despachado lleva locator o está marcado qualitative', () => {
    const entries = [
      { kind: 'met' as const, label: 'citada', mets: 7, minutes: 30, citation: PRESET_CITATION },
      { kind: 'strength' as const, label: 'fuerza', series: 4, repsPerSeries: 8, loadKg: 50 },
    ];
    for (const e of entries) {
      const est = estimateActivity(e, 70);
      if (est.confidence !== 'qualitative') {
        expect(est.why.length).toBeGreaterThan(0);
        for (const c of est.why) {
          expect(c.locator.trim().length).toBeGreaterThan(0);
        }
      }
    }
  });

  it('las citas del motor existen en el RAG (las helpers de cita no lanzan)', () => {
    expect(() => toChunkCitation('nutri-mau-epoc')).not.toThrow();
    expect(() => toChunkCitation('aragon-issn-thermic-effect-and-adaptive-thermogenesis')).not.toThrow();
  });
});
