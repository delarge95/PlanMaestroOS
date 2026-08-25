import { describe, it, expect } from 'vitest';
import { germanCourse } from '../../germanCourse';
import { germanUnitsVocabulary } from '../units';
import { initialVocabulary } from '../../vocabulary';

// Validador propio AG-DE (ficha §3.5): integridad del currículo A1.1.
describe('Currículo alemán — integridad', () => {
  it('tiene 4+ unidades ordenadas con ids y orders únicos', () => {
    expect(germanCourse.units.length).toBeGreaterThanOrEqual(4);
    expect(germanCourse.language).toBe('de');
    const ids = germanCourse.units.map((u) => u.id);
    expect(new Set(ids).size).toBe(ids.length);
    const orders = germanCourse.units.map((u) => u.order);
    expect(new Set(orders).size).toBe(orders.length);
    expect([...orders].sort((a, b) => a - b)).toEqual(orders); // ascendente
  });

  it('cada lección tiene teoría (content), ejercicios, minutos y fuente citada', () => {
    for (const unit of germanCourse.units) {
      for (const lesson of unit.lessons) {
        expect(lesson.content.length, `${lesson.id} sin content`).toBeGreaterThan(0);
        // las lecciones kind 'vocabulary' practican en VocabularySession (SM-2):
        // su «ejercicio» es la cola de repaso, no requieren ejercicios propios
        if (lesson.kind !== 'vocabulary') {
          expect(lesson.exercises.length, `${lesson.id} sin ejercicios`).toBeGreaterThan(0);
        }
        expect(lesson.estimatedMinutes, `${lesson.id} sin minutos`).toBeGreaterThan(0);
        expect(lesson.sourcePdfUrl, `${lesson.id} sin sourcePdfUrl`).toContain('Grammatik_Aktiv');
        // trazabilidad: cita de fuente o marcador explícito «por verificar»
        const cited = lesson.content.some((c) => /Fuente|TRANSCRIPCIÓN|PLANTILLA|Tarjetas/.test(c));
        expect(cited, `${lesson.id} sin cita/propósito declarado`).toBe(true);
      }
      // las lecciones de vocabulario son catálogo: su cola vive en el banco SR
    }
  });

  it('cada ejercicio es resoluble (respuesta correcta presente y válida)', () => {
    for (const unit of germanCourse.units) {
      for (const lesson of unit.lessons) {
        for (const ex of lesson.exercises) {
          expect(ex.correctAnswer.trim().length, `${ex.id} sin respuesta`).toBeGreaterThan(0);
          if (ex.type === 'multiple_choice' || ex.type === 'order_sentence') {
            expect(Array.isArray(ex.options), `${ex.id} sin opciones`).toBe(true);
            expect(
              ex.options!.some((o) => o.trim() === ex.correctAnswer.trim()),
              `${ex.id}: la respuesta no está entre las opciones`
            ).toBe(true);
          }
          if (ex.type === 'fill_in_blank') {
            expect(ex.options ?? []).toHaveLength(0); // respuesta libre
            expect(/\b______\b|___/.test(ex.prompt), `${ex.id} sin hueco en el prompt`).toBe(true);
          }
        }
      }
    }
  });

  it('ids de lección únicos en TODO el curso (el progreso persiste por id)', () => {
    const lessonIds = germanCourse.units.flatMap((u) => u.lessons.map((l) => l.id));
    expect(new Set(lessonIds).size).toBe(lessonIds.length);
  });

  it('preserva las lecciones originales del hub (regla de oro #9)', () => {
    const lessonIds = germanCourse.units.flatMap((u) => u.lessons.map((l) => l.id));
    expect(lessonIds).toContain('les-de-1');
    expect(lessonIds).toContain('les-de-2');
  });

  describe('vocabulario del currículo', () => {
    it('cada ítem tiene nivel A1, tema, ejemplo y lenguaje de', () => {
      expect(germanUnitsVocabulary.length).toBeGreaterThanOrEqual(30);
      for (const item of germanUnitsVocabulary) {
        expect(item.level).toBe('A1');
        expect(item.topic.length).toBeGreaterThan(0);
        expect(item.example?.length ?? 0).toBeGreaterThan(3);
        expect(item.language).toBe('de');
        expect(item.easeFactor).toBeGreaterThan(0);
      }
    });

    it('ids de vocabulario únicos y fusionados con la semilla original', () => {
      const ids = initialVocabulary.map((v) => v.id);
      expect(new Set(ids).size).toBe(ids.length);
      expect(ids).toContain('v1'); // semilla original intacta
      expect(initialVocabulary.filter((v) => v.language === 'de').length).toBe(initialVocabulary.length);
    });
  });
});
