// src/lib/languages/spacedRepetition.ts - Repetición Espaciada Simple (1d, 3d, 7d, 14d, 30d)

import type { VocabularyItem } from '../../data/languages/types';

const INTERVALS = [1, 3, 7, 14, 30];

export function getNextInterval(currentInterval = 1, quality: 'good' | 'review'): number {
  if (quality === 'review') return 1;
  const idx = INTERVALS.indexOf(currentInterval);
  if (idx === -1 || idx === INTERVALS.length - 1) return 30;
  return INTERVALS[idx + 1];
}

export function updateVocabularyReview(item: VocabularyItem, quality: 'good' | 'review'): VocabularyItem {
  const nextInterval = getNextInterval(item.intervalDays || 1, quality);
  return {
    ...item,
    intervalDays: nextInterval,
    lastReviewed: new Date().toISOString().split('T')[0]
  };
}
