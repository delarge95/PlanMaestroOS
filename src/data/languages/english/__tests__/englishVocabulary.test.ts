// src/data/languages/english/__tests__/englishVocabulary.test.ts
import { describe, it, expect } from 'vitest';
import { englishTechnicalVocabulary } from '../vocabulary';

describe('English Technical Vocabulary Dataset (AG-EN Tarea 1)', () => {
  it('contiene exactamente 128 términos técnicos curados', () => {
    expect(englishTechnicalVocabulary.length).toBe(128);
  });

  it('todos los ítems tienen language "en" e id estructurado', () => {
    for (const item of englishTechnicalVocabulary) {
      expect(item.language).toBe('en');
      expect(item.id).toMatch(/^en-tech-\d{3}$/);
    }
  });

  it('todos los ítems tienen categorías técnicas válidas', () => {
    const validCategories = new Set(['realtime/graphics', 'unity/3d', 'web', 'ai/tooling']);
    for (const item of englishTechnicalVocabulary) {
      expect(validCategories.has(item.topic)).toBe(true);
    }
  });

  it('todos los ítems tienen term, translation (definición) y example no vacíos', () => {
    for (const item of englishTechnicalVocabulary) {
      expect(item.term.trim().length).toBeGreaterThan(0);
      expect(item.translation.trim().length).toBeGreaterThan(0);
      expect(item.example?.trim().length).toBeGreaterThan(0);
    }
  });

  it('los niveles corresponden a B2 o C1', () => {
    for (const item of englishTechnicalVocabulary) {
      expect(['B2', 'C1']).toContain(item.level);
    }
  });

  it('los parámetros de repetición espaciada están inicializados correctamente', () => {
    for (const item of englishTechnicalVocabulary) {
      expect(item.easeFactor).toBe(2.5);
      expect(item.intervalDays).toBe(1);
    }
  });
});
