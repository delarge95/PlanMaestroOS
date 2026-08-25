// src/data/fitness/nutrition/femalePhysiology.test.ts — Tests de ajustes por perfil hormonal (AG-NUTRI ciclo 2)
import { describe, expect, it } from 'vitest';
import { FEMALE_DISCLAIMER, FEMALE_PROFILES, femaleNotesFor } from './femalePhysiology';

describe('femaleNotesFor', () => {
  it('perfil none → sin notas', () => {
    expect(femaleNotesFor('none')).toHaveLength(0);
  });

  it('ciclo regular → nota lútea con cifras citadas y autorregulación', () => {
    const notes = femaleNotesFor('ciclo-regular');
    expect(notes).toHaveLength(1);
    const all = notes.flatMap((n) => n.lines.map((l) => l.text)).join(' ');
    expect(all).toContain('+40 a +50 kcal/día');
    expect(all).toContain('+50 a +100');
    expect(all.toLowerCase()).toContain('autorregulación');
    for (const line of notes[0].lines) {
      expect(line.why.length).toBeGreaterThan(0);
    }
  });

  it('menopausia → rango proteico 1.2–1.5 g/kg traducido a g/día con el peso', () => {
    const notes = femaleNotesFor('menopausia', { weightKg: 70 });
    const all = notes.flatMap((n) => n.lines.map((l) => l.text)).join(' ');
    expect(all).toContain('84–105 g/día'); // 70 × 1.2 / 70 × 1.5
    expect(all).toContain('ASMI');
  });

  it('avisa cuando el objetivo actual queda por debajo del rango citado', () => {
    const notes = femaleNotesFor('perimenopausia', { weightKg: 70, currentProteinMidGPerKg: 1.0 });
    const all = notes.flatMap((n) => n.lines.map((l) => l.text)).join(' ');
    expect(all).toContain('POR DEBAJO');
    expect(femaleNotesFor('menopausia', { currentProteinMidGPerKg: 1.35 }).map(String).join(' ')).not.toContain('POR DEBAJO');
  });

  it('ciclo irregular añade nota de derivación a profesional', () => {
    const notes = femaleNotesFor('ciclo-irregular');
    const titles = notes.map((n) => n.title).join(' ');
    expect(titles).toContain('Derivación');
  });

  it('todas las citas apuntan a chunks existentes en el RAG (no lanzan)', () => {
    for (const profile of FEMALE_PROFILES.map((p) => p.value)) {
      for (const note of femaleNotesFor(profile)) {
        for (const line of note.lines) {
          expect(() => line.why).not.toThrow();
          for (const c of line.why) {
            expect(c.ruleId).toMatch(/^fem-hormones-/);
            expect(c.locator.trim().length).toBeGreaterThan(0);
          }
        }
      }
    }
  });

  it('el disclaimer declara efecto pequeño + autorregulación + no-consejo-médico', () => {
    expect(FEMALE_DISCLAIMER).toContain('EFECTO PEQUEÑO');
    expect(FEMALE_DISCLAIMER).toContain('autorregulación');
    expect(FEMALE_DISCLAIMER).toContain('consejo médico');
  });
});
