// src/data/career/__tests__/companyTargets.test.ts — Datos doc-11 normalizados (AG-CAREER T2).
import { describe, it, expect } from 'vitest';
import {
  companyTargets,
  jobBoards,
  recruiterChannels,
  communityChannels,
  searchStrings,
  applicationDisqualifiers
} from '../companyTargets';

describe('companyTargets (doc-11)', () => {
  it('contiene las 120 empresas del doc-11 con ids c11-<n> estables', () => {
    expect(companyTargets).toHaveLength(120);
    expect(companyTargets[0].id).toBe('c11-1');
    expect(companyTargets.map((c) => c.doc11Number)).not.toContain(0);
  });

  it('todas las empresas citan su fuente doc-11 §sección', () => {
    for (const c of companyTargets) {
      expect(c.source).toBe('doc-11');
      expect(c.sourceRef).toMatch(/^doc-11 §/);
    }
  });

  it('tier derivado del scoring: A → Top Priority, B → Standard, resto → Watchlist', () => {
    for (const c of companyTargets) {
      if (c.priority === 'A') expect(c.tier).toBe('Top Priority');
      else if (c.priority === 'B') expect(c.tier).toBe('Standard');
      else expect(c.tier).toBe('Watchlist');
    }
  });

  it('la cola de primera ola tiene 20 A1 y 16 A2 (doc-11 §First-wave verification queue)', () => {
    expect(companyTargets.filter((c) => c.wave === 'A1')).toHaveLength(20);
    expect(companyTargets.filter((c) => c.wave === 'A2')).toHaveLength(16);
    // Treeview Studio y Active Theory (targets reales del tracker) son A1
    expect(companyTargets.find((c) => c.name === 'Treeview Studio')?.wave).toBe('A1');
    expect(companyTargets.find((c) => c.name === 'Active Theory')?.wave).toBe('A1');
  });

  it('los targets reales del tracker existen en la base doc-11 (trazabilidad cruzada)', () => {
    const names = companyTargets.map((c) => c.name.toLowerCase());
    expect(names).toContain('treeview studio');
    expect(names).toContain('active theory');
  });

  it('scores dentro de rango 1-5', () => {
    for (const c of companyTargets) {
      for (const v of Object.values(c.scores)) {
        expect(v).toBeGreaterThanOrEqual(1);
        expect(v).toBeLessThanOrEqual(5);
      }
    }
  });
});

describe('canales doc-11', () => {
  it('job boards: 31 con URL y fuente citada', () => {
    expect(jobBoards).toHaveLength(31);
    for (const b of jobBoards) {
      expect(b.url).toMatch(/^https?:\/\//);
      expect(b.sourceRef).toBe('doc-11 §Job boards');
    }
  });

  it('recruiters: 20 con fuente citada', () => {
    expect(recruiterChannels).toHaveLength(20);
    expect(recruiterChannels.every((r) => r.sourceRef.startsWith('doc-11 §'))).toBe(true);
  });

  it('comunidades: 26 con fuente citada', () => {
    expect(communityChannels).toHaveLength(26);
    expect(communityChannels.every((c) => c.sourceRef.startsWith('doc-11 §'))).toBe(true);
  });

  it('search strings: 42 cadenas reutilizables del doc-11', () => {
    expect(searchStrings.length).toBeGreaterThanOrEqual(40);
    expect(searchStrings).toContain('Unity Technical Artist remote');
  });

  it('descalificadores: 6 reglas duras antes de aplicar', () => {
    expect(applicationDisqualifiers).toHaveLength(6);
    expect(applicationDisqualifiers.some((d) => d.includes('security clearance'))).toBe(true);
  });
});
