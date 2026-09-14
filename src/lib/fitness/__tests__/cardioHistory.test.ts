// src/lib/fitness/__tests__/cardioHistory.test.ts — Escritor de cardio_session_history (deuda T2).

import { describe, expect, it } from 'vitest';
import { getCardioHistory, logCardioSession } from '../cardioHistory';

describe('cardioHistory (sin browser → degradación elegante)', () => {
  it('getCardioHistory devuelve [] fuera del navegador', () => {
    expect(getCardioHistory()).toEqual([]);
  });

  it('logCardioSession devuelve null fuera del navegador (no explota)', () => {
    expect(logCardioSession({ type: 'Bici', minutes: 30 })).toBeNull();
  });
});
