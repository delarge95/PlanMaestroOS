import { describe, it, expect, beforeEach } from 'vitest';
import {
  VOCABULARY_STORAGE_KEY,
  computeStreakDays,
  getDueQueue,
  getSchedulingFor,
  initialLanguagesProgressState,
  useVocabularyStore
} from '../vocabularyStore';

const NOW = new Date('2026-08-25T10:00:00Z');
const day = (offset: number) => {
  const d = new Date(NOW.getTime() - offset * 86_400_000);
  return d.toISOString().split('T')[0];
};

describe('vocabularyStore — lógica pura', () => {
  describe('computeStreakDays', () => {
    it('returns 0 with no activity', () => {
      expect(computeStreakDays([], NOW)).toBe(0);
    });

    it('counts consecutive days ending today', () => {
      expect(computeStreakDays([day(0), day(1), day(2)], NOW)).toBe(3);
    });

    it('keeps the streak alive if last activity was yesterday (today not yet studied)', () => {
      expect(computeStreakDays([day(1), day(2), day(3)], NOW)).toBe(3);
    });

    it('breaks on a gap day', () => {
      expect(computeStreakDays([day(0), day(1), day(3)], NOW)).toBe(2);
      expect(computeStreakDays([day(4), day(5)], NOW)).toBe(0); // última actividad hace 5 días
    });

    it('tolerates duplicates and unsorted input', () => {
      expect(computeStreakDays([day(1), day(0), day(0), day(1)], NOW)).toBe(2);
    });
  });

  describe('getDueQueue', () => {
    const catalog = [
      { id: 'fresh' },
      { id: 'overdue-3' },
      { id: 'overdue-1' },
      { id: 'ontime' }
    ];

    const progress = {
      items: {
        'overdue-3': { easeFactor: 2.5, intervalDays: 3, repetitions: 1, lastReviewed: day(6) }, // retraso 3
        'overdue-1': { easeFactor: 2.5, intervalDays: 7, repetitions: 2, lastReviewed: day(8) }, // retraso 1
        ontime: { easeFactor: 2.5, intervalDays: 10, repetitions: 2, lastReviewed: day(1) } // faltan 9 días
      },
      completedLessons: []
    };

    it('puts overdue first sorted by delay desc, then new cards; hides not-due cards', () => {
      expect(getDueQueue(catalog, progress, NOW)).toEqual(['overdue-3', 'overdue-1', 'fresh']);
    });

    it('with empty progress every card is new', () => {
      expect(getDueQueue(catalog, undefined, NOW)).toEqual(['fresh', 'overdue-3', 'overdue-1', 'ontime']);
    });

    it('an interval of 0 (relearn) is due immediately', () => {
      const p = { items: { x: { easeFactor: 2.5, intervalDays: 0, repetitions: 0, lastReviewed: day(0) } }, completedLessons: [] };
      expect(getDueQueue([{ id: 'x' }], p, NOW)).toEqual(['x']);
    });
  });

  describe('getSchedulingFor', () => {
    it('returns a fresh SM-2 card when the item has no progress yet', () => {
      const s = getSchedulingFor(undefined, 'v1');
      expect(s).toEqual({ easeFactor: 2.5, intervalDays: 1, repetitions: 0 });
      expect(s.lastReviewed).toBeUndefined();
    });

    it('returns the persisted scheduling when present', () => {
      const st = { easeFactor: 2.2, intervalDays: 4, repetitions: 2, lastReviewed: day(1) };
      expect(getSchedulingFor({ items: { v1: st }, completedLessons: [] }, 'v1')).toBe(st);
    });
  });
});

describe('vocabularyStore — acciones', () => {
  beforeEach(() => {
    useVocabularyStore.setState(initialLanguagesProgressState());
  });

  it('recordReview applies SM-2 and stamps activity date (per language)', () => {
    useVocabularyStore.getState().recordReview('de', 'v1', 'good', NOW);
    const s = useVocabularyStore.getState();
    expect(s.byLanguage.de.items.v1).toMatchObject({ intervalDays: 3, repetitions: 1, lastReviewed: day(0) });
    expect(s.activityDates).toContain(day(0));
  });

  it('recordReview accumulates from previous state instead of resetting it', () => {
    const store = useVocabularyStore.getState();
    store.recordReview('de', 'v1', 'good', NOW);
    useVocabularyStore.getState().recordReview('de', 'v1', 'good', NOW);
    const item = useVocabularyStore.getState().byLanguage.de.items.v1;
    expect(item.repetitions).toBe(2);
    expect(item.intervalDays).toBeGreaterThan(3);
  });

  it('completeLesson records once and feeds the streak; setPlacement stores the unit', () => {
    const store = useVocabularyStore.getState();
    store.completeLesson('de', 'les-de-1', NOW);
    store.completeLesson('de', 'les-de-1', NOW);
    expect(useVocabularyStore.getState().byLanguage.de.completedLessons).toEqual(['les-de-1']);
    useVocabularyStore.getState().setPlacement('de', 'u2');
    expect(useVocabularyStore.getState().byLanguage.de.placementUnitId).toBe('u2');
    expect(useVocabularyStore.getState().activityDates).toEqual([day(0)]);
  });

  it('languages are isolated and resetLanguage only clears its own entry', () => {
    const store = useVocabularyStore.getState();
    store.recordReview('de', 'v1', 'easy', NOW);
    store.recordReview('en', 'w1', 'again', NOW);
    expect(Object.keys(useVocabularyStore.getState().byLanguage).sort()).toEqual(['de', 'en']);
    useVocabularyStore.getState().resetLanguage('de');
    const s = useVocabularyStore.getState();
    expect(s.byLanguage.de.items).toEqual({});
    expect(s.byLanguage.en.items.w1.intervalDays).toBe(0);
    expect(s.activityDates).toEqual([day(0)]); // la racha global sobrevive al reset
  });

  it('exposes the persist key contract', () => {
    expect(VOCABULARY_STORAGE_KEY).toBe('languages-vocabulary-v1');
  });

  it('logStudySession acumula sesiones con fecha por defecto de hoy', () => {
    const store = useVocabularyStore.getState();
    const before = store.studySessions.length;
    store.logStudySession({ language: 'de', minutes: 15, cardsReviewed: 12 });
    store.logStudySession({ language: 'en', minutes: 25, lessonsCompleted: 1, dateIso: '2026-09-01' });
    const after = useVocabularyStore.getState().studySessions;
    expect(after.length).toBe(before + 2);
    expect(after[after.length - 2]).toMatchObject({ language: 'de', minutes: 15, cardsReviewed: 12 });
    expect(after[after.length - 1]).toMatchObject({ language: 'en', dateIso: '2026-09-01', lessonsCompleted: 1 });
  });
});
