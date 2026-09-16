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

  it('la evidencia trae las métricas REALES verificadas (U5: doc-01:274)', () => {
    const s = buildServiceSheet();
    expect(s.evidenceBullets.some((b) => b.includes('95,617'))).toBe(true);
    expect(s.evidenceBullets.some((b) => b.includes('91.88'))).toBe(true);
    expect(s.evidenceBullets.some((b) => /\[verify/i.test(b))).toBe(false);
  });
});
