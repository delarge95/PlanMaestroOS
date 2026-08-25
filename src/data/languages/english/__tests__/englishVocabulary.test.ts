// src/data/languages/english/__tests__/englishVocabulary.test.ts
// Validador AG-EN (tarea 1): integridad del banco técnico EN convertido del T2A.

import { describe, it, expect } from 'vitest';
import { englishTechnicalVocabulary } from '../vocabulary';
import {
  validateEnglishVocabulary,
  ENGLISH_TECH_CATEGORIES
} from '../validateVocabulary';

describe('Glosario técnico EN (T2A → VocabularyItem)', () => {
  it('convierte las 128 entradas curadas sin pérdida', () => {
    expect(englishTechnicalVocabulary).toHaveLength(128);
  });

  it('todo ítem pasa el validador propio (categoría válida + ejemplo no vacío)', () => {
    const result = validateEnglishVocabulary();
    expect(result.issues).toEqual([]);
    expect(result.ok).toBe(true);
  });

  it('ids únicos y estables con esquema en-tech-<nnn>', () => {
    const ids = englishTechnicalVocabulary.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(id).toMatch(/^en-tech-\d{3}$/);
  });

  it('cada ítem es tarjeta SR válida: language en, nivel B2|C1, easeFactor > 0', () => {
    for (const item of englishTechnicalVocabulary) {
      expect(item.language).toBe('en');
      expect(['B2', 'C1']).toContain(item.level);
      expect(item.easeFactor).toBeGreaterThan(0);
      expect(item.example?.length ?? 0).toBeGreaterThan(0);
    }
  });

  it('las 4 categorías del curado están representadas', () => {
    const topics = new Set(englishTechnicalVocabulary.map((i) => i.topic));
    for (const category of ENGLISH_TECH_CATEGORIES) expect(topics.has(category)).toBe(true);
  });
});
