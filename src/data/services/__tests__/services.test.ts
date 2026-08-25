import { describe, expect, it } from 'vitest';
import {
  CATALOG_CORE,
  DELTA_ANIM_LOOP,
  LEGACY_RATE_CARD_V0,
  LEVEL_IDS,
  RATE_CARD_V1,
  B_CORE_SUBTASKS,
  estimateService,
  estimateWithLevels,
} from '../index';
import type { ServiceDefinition } from '../types';

const ALL_SERVICES: ServiceDefinition[] = [
  ...CATALOG_CORE,
  {
    id: '_fixture-b3-compuesto',
    family: 'asset-rt',
    nameEs: 'fixture',
    unitEs: 'fixture',
    driversEs: [],
    confidence: 'explicit',
    subtasks: [...B_CORE_SUBTASKS, DELTA_ANIM_LOOP],
    sourceDoc: 'test-fixture',
  },
];

describe('integridad del catálogo', () => {
  it('ids de servicio únicos', () => {
    const ids = ALL_SERVICES.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(ALL_SERVICES.map((s) => [s.id, s] as const))('%s: subtasks válidas en los 4 niveles', (_id, svc) => {
    const subIds = svc.subtasks.map((st) => st.id);
    expect(new Set(subIds).size).toBe(subIds.length);
    for (const st of svc.subtasks) {
      for (const level of LEVEL_IDS) {
        const range = st.hours[level];
        expect(range).toBeDefined();
        expect(range.min).toBeGreaterThanOrEqual(0);
        expect(range.min).toBeLessThanOrEqual(range.max);
      }
    }
    expect(svc.sourceDoc.length).toBeGreaterThan(0);
    expect(svc.nameEs.length).toBeGreaterThan(0);
  });
});

describe('motor con rate card v1 canónica', () => {
  it('A1 @N1: 4–9 h × 20–28 → subtotal 80–252 → ceil50 → $100–300', () => {
    const r = estimateService(CATALOG_CORE[0]!, 'N1', { card: RATE_CARD_V1 });
    expect(r.hoursMin).toBe(4);
    expect(r.hoursMax).toBe(9);
    expect(r.costMin).toBe(100);
    expect(r.costMax).toBe(300);
  });

  it('A2 excluye FX opcional por defecto y lo incluye al pedirlo desde N3', () => {
    const sinFx = estimateService(
      CATALOG_CORE.find((s) => s.id === 'a2-render-animacion')!,
      'N3',
    );
    expect(sinFx.hoursMin).toBe(35);
    expect(sinFx.hoursMax).toBe(77);

    const conFx = estimateService(
      CATALOG_CORE.find((s) => s.id === 'a2-render-animacion')!,
      'N3',
      { includeOptionalIds: ['a2-fx'] },
    );
    expect(conFx.hoursMin).toBe(41);
    expect(conFx.hoursMax).toBe(97);
  });

  it('A2 @N1 nunca incluye FX (appliesFrom N2)', () => {
    const r = estimateService(
      CATALOG_CORE.find((s) => s.id === 'a2-render-animacion')!,
      'N1',
      { includeOptionalIds: ['a2-fx'] },
    );
    expect(r.hoursMax).toBe(15);
  });

  it('todos los resultados son múltiplos de 50 y >= mínimo de proyecto', () => {
    for (const svc of ALL_SERVICES) {
      for (const level of LEVEL_IDS) {
        const r = estimateService(svc, level, { card: RATE_CARD_V1 });
        expect(r.costMin % RATE_CARD_V1.roundingStepUsd).toBe(0);
        expect(r.costMax % RATE_CARD_V1.roundingStepUsd).toBe(0);
        expect(r.costMax).toBeGreaterThanOrEqual(r.costMin);
        expect(r.costMin).toBeLessThanOrEqual(r.costMax);
        expect(r.hoursMin).toBeLessThanOrEqual(r.hoursMax);
      }
    }
  });
});

describe('verificación cruzada contra números publicados (rate card legacy v0)', () => {
  it('A1 @N1 reproduce $100–270', () => {
    const r = estimateService(CATALOG_CORE[0]!, 'N1', { card: LEGACY_RATE_CARD_V0 });
    expect([r.costMin, r.costMax]).toEqual([100, 270]);
  });

  it('B1 @N1: motor da $150–390; doc 02 publica $400 (desviación documentada en README)', () => {
    const b1 = CATALOG_CORE.find((s) => s.id === 'b1-asset-rt-estatico')!;
    const r = estimateService(b1, 'N1', { card: LEGACY_RATE_CARD_V0 });
    expect(r.hoursMin).toBe(6);
    expect(r.hoursMax).toBe(13);
    expect([r.costMin, r.costMax]).toEqual([150, 390]);
  });

  it('B4 @N1 (núcleo + delta interactiva 14–28 h) reproduce $350–850', () => {
    const b4 = CATALOG_CORE.find((s) => s.id === 'b4-asset-rt-animado-interactuable')!;
    const r = estimateService(b4, 'N1', { card: LEGACY_RATE_CARD_V0 });
    expect(r.hoursMin).toBe(14);
    expect(r.hoursMax).toBe(28);
    expect([r.costMin, r.costMax]).toEqual([350, 850]);
  });

  it('F1 ⭐ @N2: motor da $330–1250; doc 02 publica $1230 (desviación)', () => {
    const f1 = CATALOG_CORE.find((s) => s.id === 'f1-cad-webgl-ready')!;
    const r = estimateService(f1, 'N2', { card: LEGACY_RATE_CARD_V0 });
    expect(r.hoursMin).toBe(12);
    expect(r.hoursMax).toBe(35);
    expect([r.costMin, r.costMax]).toEqual([330, 1250]);
  });

  it('B7 @N4: motor da $1750–4900; doc 02 publica $1700 (desviación)', () => {
    const b7 = CATALOG_CORE.find((s) => s.id === 'b7-optimizacion-rt-ready')!;
    const r = estimateService(b7, 'N4', { card: LEGACY_RATE_CARD_V0 });
    expect([r.costMin, r.costMax]).toEqual([1750, 4900]);
  });
});

describe('estimación por subtarea con niveles mixtos', () => {
  it('suma horas por nivel elegido y marca mixed', () => {
    const b2 = CATALOG_CORE.find((s) => s.id === 'b2-asset-rt-estatico-interactuable')!;
    const r = estimateWithLevels(b2, {
      'b-intake': 'N3',
      'b-modelado': 'N3',
      'b-uv': 'N2',
      'b-baking': 'N2',
      'b-texturizado': 'N3',
      'b-optimizacion': 'N2',
      'b-qa': 'N2',
      'delta-interaccion': 'N2',
    });
    expect(r.level).toBe('mixed');
    expect(r.lines.length).toBe(8);
    expect(r.hoursMin).toBe(27);
    expect(r.hoursMax).toBe(62);
    expect(r.costMin).toBeLessThanOrEqual(r.costMax);
  });
});
