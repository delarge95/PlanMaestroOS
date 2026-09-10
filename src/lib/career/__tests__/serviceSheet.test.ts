// src/lib/career/__tests__/serviceSheet.test.ts — Hoja de oferta: honestidad y links.

import { describe, expect, it } from 'vitest';
import { buildServiceSheet, SERVICE_LINKS } from '../../../data/career/serviceSheet';

describe('buildServiceSheet', () => {
  it('trae los 5 servicios con tiers y la posición destacada primero', () => {
    const s = buildServiceSheet('cad-optimization');
    expect(s.offerings).toHaveLength(5);
    expect(s.offerings[0].name).toMatch(/CAD/);
    const base = buildServiceSheet();
    expect(base.offerings[0].name).not.toMatch(/CAD/); // sin highlight, orden natural
  });

  it('los links públicos son absolutos y no vacíos (van impresos en el PDF)', () => {
    expect(SERVICE_LINKS.cotizador).toBe('https://services.alexwoodcock.me/cotizador/');
    expect(SERVICE_LINKS.twinsightDemo).toMatch(/^https:\/\//);
    const s = buildServiceSheet();
    for (const l of s.links) expect(l.url).toMatch(/^https:\/\//);
  });

  it('la evidencia conserva la nota editorial en datos (§0.1) para que la UI avise', () => {
    const s = buildServiceSheet();
    expect(s.evidenceBullets.some((b) => /\[verify/i.test(b))).toBe(true);
  });
});
