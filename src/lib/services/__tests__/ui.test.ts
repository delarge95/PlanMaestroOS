import { describe, expect, it } from 'vitest';
import { GOALS, buildQuoteInput, formatMoney, suggestedLevelFromPieces, suggestedLevelFromSeconds } from '../ui';

describe('formateo dual moneda', () => {
  it('USD usa formato en-US', () => {
    expect(formatMoney('USD', 1250)).toBe('$1,250');
  });
  it('COP usa separador de miles con punto y sin decimales', () => {
    const out = formatMoney('COP', 1250000);
    expect(out).toContain('.');
    expect(out.startsWith('$')).toBe(true);
    expect(out).not.toContain(',00');
  });
});

describe('nivel sugerido por drivers', () => {
  it('piezas → umbrales ≤15 / 15–60 / 60–150 / 150+', () => {
    expect(suggestedLevelFromPieces(5)).toBe('N1');
    expect(suggestedLevelFromPieces(15)).toBe('N1');
    expect(suggestedLevelFromPieces(16)).toBe('N2');
    expect(suggestedLevelFromPieces(60)).toBe('N2');
    expect(suggestedLevelFromPieces(61)).toBe('N3');
    expect(suggestedLevelFromPieces(150)).toBe('N3');
    expect(suggestedLevelFromPieces(151)).toBe('N4');
  });
  it('segundos → XS para micro-loops de 2–3 s', () => {
    expect(suggestedLevelFromSeconds(2)).toBe('XS');
    expect(suggestedLevelFromSeconds(3)).toBe('XS');
    expect(suggestedLevelFromSeconds(10)).toBe('N1');
    expect(suggestedLevelFromSeconds(30)).toBe('N2');
    expect(suggestedLevelFromSeconds(60)).toBe('N3');
    expect(suggestedLevelFromSeconds(90)).toBe('N4');
  });
});

describe('objetivo → familia/preset', () => {
  it('archivos CAD redirigen al preset PK-CAD-WEBGL', () => {
    const cad = GOALS.find((g) => g.id === 'cad');
    expect(cad?.pushPresetId).toBe('PK-CAD-WEBGL');
  });
});

describe('buildQuoteInput', () => {
  const baseState = {
    screen: 'preset-config' as const,
    currency: 'USD' as const,
    presetId: 'PK-CAD-WEBGL',
    wizard: { levelBase: 'N2' as const, qualitativeDeltas: {}, addons: [] },
    modifiers: { firstClientLaunch: true },
    quantity: 1,
    pieces: 7,
    seconds: 10,
    detail: 1 as const,
  };

  it('preset CAD mapea piezas → cantidad del componente F1 (override)', () => {
    const input = buildQuoteInput(baseState);
    expect(input.kind).toBe('package');
    if (input.kind !== 'package') return;
    const override = input.componentesOverride?.find((c) => c.serviceId === 'f1-cad-webgl-ready');
    expect(override?.cantidad).toBe(7);
  });

  it('servicio suelto aplica rúbrica cualitativa al nivel base', () => {
    const input = buildQuoteInput({
      ...baseState,
      screen: 'summary',
      presetId: undefined,
      wizard: { levelBase: 'N1', qualitativeDeltas: { 'geometria-pieza': 1 }, addons: [] },
    });
    expect(input.kind).toBe('service');
    if (input.kind !== 'service') return;
    expect(input.level).toBe('N2');
  });

  it('A2 usa segundos para fijar nivel (micro-loop → XS)', () => {
    const input = buildQuoteInput({
      ...baseState,
      screen: 'summary',
      presetId: undefined,
      wizard: { serviceId: 'a2-render-animacion', levelBase: 'N2', qualitativeDeltas: {}, addons: [] },
      seconds: 3,
    });
    if (input.kind !== 'service') return;
    expect(input.level).toBe('XS');
  });
});
