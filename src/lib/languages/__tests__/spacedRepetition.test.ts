import { describe, it, expect } from 'vitest';
import {
  EASE_DEFAULT,
  EASE_MAX,
  EASE_MIN,
  initialScheduling,
  isDue,
  getNextInterval,
  scheduleReview,
  updateEaseFactor,
  updateVocabularyReview
} from '../spacedRepetition';
import type { VocabularyItem } from '../../../data/languages/types';

// NOTA DE MIGRACIÓN (AG-DE): los dos primeros tests preservan los invariantes de la
// API original (progresión con 'good' y reinicio con fallo), actualizados de la
// escalera fija (1→3→7→14→30) al contrato SM-2 real (multiplicativo por easeFactor).
describe('Spaced Repetition — SM-2', () => {
  it('progression on consecutive good reviews with default ease: 1 -> 3 -> 8 -> 20 -> 50', () => {
    expect(getNextInterval(1, 'good')).toBe(3);
    expect(getNextInterval(3, 'good')).toBe(8);
    expect(getNextInterval(8, 'good')).toBe(20);
    expect(getNextInterval(20, 'good')).toBe(50);
  });

  it('resets to relearn step (0 days = due today) on review fail (legacy alias)', () => {
    expect(getNextInterval(14, 'review')).toBe(0);
    expect(getNextInterval(50, 'again')).toBe(0);
  });

  // --- easeFactor ---
  describe('updateEaseFactor', () => {
    it('applies the SM-2 delta per quality (EF 2.5 base)', () => {
      expect(updateEaseFactor(2.5, 'easy')).toBeCloseTo(2.6);
      expect(updateEaseFactor(2.5, 'good')).toBeCloseTo(2.5); // delta 0
      expect(updateEaseFactor(2.5, 'hard')).toBeCloseTo(2.36); // -0.14
      expect(updateEaseFactor(2.5, 'again')).toBeCloseTo(2.18); // -0.32
    });

    it('clamps ease to [1.3, 2.8] on both ends', () => {
      expect(updateEaseFactor(EASE_MAX, 'easy')).toBe(EASE_MAX);
      expect(updateEaseFactor(EASE_MAX + 10, 'easy')).toBeLessThanOrEqual(EASE_MAX);
      let ease = EASE_MIN;
      for (let i = 0; i < 50; i++) ease = updateEaseFactor(ease, 'again');
      expect(ease).toBe(EASE_MIN);
    });

    it('recovers ease after failures but never below/above bounds', () => {
      let ease = EASE_DEFAULT;
      for (let i = 0; i < 10; i++) ease = updateEaseFactor(ease, 'hard');
      for (let i = 0; i < 10; i++) ease = updateEaseFactor(ease, 'easy');
      expect(ease).toBeGreaterThan(EASE_MIN);
      expect(ease).toBeLessThanOrEqual(EASE_MAX);
    });

    it('treats invalid ease values as default 2.5', () => {
      expect(updateEaseFactor(NaN, 'good')).toBeCloseTo(EASE_DEFAULT);
      expect(updateEaseFactor(0, 'good')).toBeCloseTo(EASE_DEFAULT);
      expect(updateEaseFactor(-1, 'easy')).toBeCloseTo(2.6);
    });
  });

  // --- getNextInterval (multiplicativo) ---
  describe('getNextInterval', () => {
    it('graduates from relearning step to 1 day on good', () => {
      expect(getNextInterval(0, 'good')).toBe(1);
    });

    it('never shrinks below prev+1 on good (monotonic growth)', () => {
      // con el ease mínimo, round(1 × 1.3) = 1 < 2 → gana el suelo prev+1
      expect(getNextInterval(1, 'good', EASE_MIN)).toBe(2);
      // y con ease mínimo el crecimiento multiplicativo sigue garantizado en intervalos grandes
      expect(getNextInterval(30, 'good', EASE_MIN)).toBe(39); // round(30 × 1.3)
    });

    it('hard grows slowly via HARD_FACTOR and at least 1 day', () => {
      expect(getNextInterval(10, 'hard', 2.5)).toBe(12); // round(10 * 1.2)
      expect(getNextInterval(0, 'hard', 2.5)).toBeGreaterThanOrEqual(1);
    });

    it('easy applies ease × EASY_BONUS and jumps at least +2 days', () => {
      // ease tras easy: 2.6 → round(10 * 2.6 * 1.3) = 34; max(12, 34)
      expect(getNextInterval(10, 'easy', 2.5)).toBe(34);
      expect(getNextInterval(1, 'easy', 2.5)).toBeGreaterThanOrEqual(3);
    });

    it('uses the updated ease (post-review), not the pre-review one', () => {
      // again primero para bajar el ease a 2.18 → good: round(4 * 2.18) = 9
      const lowEase = updateEaseFactor(2.5, 'again');
      expect(lowEase).toBeCloseTo(2.18);
      expect(getNextInterval(4, 'good', lowEase)).toBe(Math.round(4 * 2.18));
    });
  });

  // --- scheduleReview (estado completo) ---
  describe('scheduleReview', () => {
    it('updates ease, interval, repetitions and lastReviewed in one pass', () => {
      const now = new Date('2026-08-25T10:00:00Z');
      const next = scheduleReview(initialScheduling(), 'good', now);
      expect(next.easeFactor).toBeCloseTo(2.5);
      expect(next.intervalDays).toBe(3);
      expect(next.repetitions).toBe(1);
      expect(next.lastReviewed).toBe('2026-08-25');
    });

    it('resets repetitions to 0 on again but keeps counting on other qualities', () => {
      const now = new Date('2026-08-25T10:00:00Z');
      const state = { easeFactor: 2.5, intervalDays: 8, repetitions: 3 };
      expect(scheduleReview(state, 'again', now).repetitions).toBe(0);
      expect(scheduleReview(state, 'good', now).repetitions).toBe(4);
    });

    it('defaults now to a real date (ISO YYYY-MM-DD)', () => {
      const next = scheduleReview(initialScheduling(), 'good');
      expect(next.lastReviewed).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });

  describe('initialScheduling', () => {
    it('starts a new card at 1 day / 0 reps with default or custom ease', () => {
      expect(initialScheduling()).toEqual({ easeFactor: 2.5, intervalDays: 1, repetitions: 0 });
      expect(initialScheduling(2.1).easeFactor).toBe(2.1);
    });
  });

  // --- updateVocabularyReview (compatibilidad VocabularyItem) ---
  describe('updateVocabularyReview', () => {
    const item: VocabularyItem = {
      id: 'v-test',
      language: 'de',
      term: 'der Tisch',
      translation: 'la mesa',
      example: 'Das Buch liegt auf dem Tisch.',
      topic: 'Casa',
      level: 'A1',
      easeFactor: 2.5,
      intervalDays: 3
    };

    it('preserves identity fields and updates only SR fields', () => {
      const now = new Date('2026-08-25T10:00:00Z');
      const updated = updateVocabularyReview(item, 'good', now);
      expect(updated.id).toBe(item.id);
      expect(updated.term).toBe(item.term);
      expect(updated.translation).toBe(item.translation);
      expect(updated.example).toBe(item.example);
      expect(updated.topic).toBe(item.topic);
      expect(updated.level).toBe(item.level);
      expect(updated.intervalDays).toBe(8);
      expect(updated.easeFactor).toBeCloseTo(2.5);
      expect(updated.lastReviewed).toBe('2026-08-25');
    });

    it('accepts the legacy quality alias without breaking consumers', () => {
      const updated = updateVocabularyReview(item, 'review');
      expect(updated.intervalDays).toBe(0);
      expect(updated.easeFactor).toBeCloseTo(2.18);
    });

    it('handles items without intervalDays (undefined → treated as new card)', () => {
      const bare: VocabularyItem = { ...item, intervalDays: undefined };
      expect(updateVocabularyReview(bare, 'good').intervalDays).toBe(3);
    });
  });

  // --- isDue (cola de repaso) ---
  describe('isDue', () => {
    const now = new Date('2026-08-25T10:00:00Z');

    it('a never-reviewed card is always due (new learning)', () => {
      expect(isDue({ lastReviewed: undefined, intervalDays: 30 }, now)).toBe(true);
    });

    it('is not due before the interval elapses and due at/after the boundary', () => {
      // convención Anki: vence en lastReviewed + interval (23 + 3 = día 26)
      expect(isDue({ lastReviewed: '2026-08-22', intervalDays: 3 }, now)).toBe(true); // 3 días completos
      expect(isDue({ lastReviewed: '2026-08-23', intervalDays: 3 }, now)).toBe(false); // vence mañana
      expect(isDue({ lastReviewed: '2026-08-20', intervalDays: 3 }, now)).toBe(true);
    });

    it('an interval of 0 (relearn step) is due the same day', () => {
      expect(isDue({ lastReviewed: '2026-08-25', intervalDays: 0 }, now)).toBe(true);
    });
  });
});
