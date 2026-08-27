// src/data/languages/english/__tests__/englishCourse.test.ts
import { describe, it, expect } from 'vitest';
import { englishCourse } from '../../englishCourse';

describe('English Course Structure (AG-EN Tarea 3)', () => {
  it('tiene el id y título canónicos', () => {
    expect(englishCourse.id).toBe('english-pro');
    expect(englishCourse.language).toBe('en');
    expect(englishCourse.title).toContain('Inglés Profesional');
  });

  it('contiene 4 unidades estructuradas', () => {
    expect(englishCourse.units.length).toBe(4);
    const unitIds = englishCourse.units.map(u => u.id);
    expect(unitIds).toEqual(['u-tech', 'u-emp', 'u-precision', 'u-star']);
  });

  it('preserva las lecciones originales les-en-1 y les-en-2 (Regla de oro §0.9)', () => {
    const allLessons = englishCourse.units.flatMap(u => u.lessons);
    const lesson1 = allLessons.find(l => l.id === 'les-en-1');
    const lesson2 = allLessons.find(l => l.id === 'les-en-2');
    expect(lesson1).toBeDefined();
    expect(lesson2).toBeDefined();
    expect(lesson1?.title).toBe('Elevator Pitch & High-Impact Self Introduction');
    expect(lesson2?.title).toBe('Shader Performance & Memory Optimization Specs');
  });

  it('todas las lecciones tienen contenido, tiempo estimado y ejercicios válidos', () => {
    const allLessons = englishCourse.units.flatMap(u => u.lessons);
    expect(allLessons.length).toBeGreaterThanOrEqual(12);

    for (const lesson of allLessons) {
      expect(lesson.id.length).toBeGreaterThan(0);
      expect(lesson.title.length).toBeGreaterThan(0);
      expect(lesson.content.length).toBeGreaterThan(0);
      expect(lesson.estimatedMinutes).toBeGreaterThan(0);

      for (const ex of lesson.exercises) {
        expect(ex.id.length).toBeGreaterThan(0);
        expect(['fill_in_blank', 'order_sentence', 'multiple_choice']).toContain(ex.type);
        expect(ex.prompt.length).toBeGreaterThan(0);
        expect(ex.correctAnswer.length).toBeGreaterThan(0);
        if (ex.type === 'multiple_choice') {
          expect(ex.options).toBeDefined();
          expect(ex.options!.length).toBeGreaterThanOrEqual(2);
          expect(ex.options).toContain(ex.correctAnswer);
        }
      }
    }
  });
});
