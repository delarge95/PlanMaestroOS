import { describe, it, expect } from 'vitest';
import { getNextInterval } from '../spacedRepetition';

describe('Spaced Repetition', () => {
  it('should advance interval progression on good review: 1 -> 3 -> 7 -> 14 -> 30', () => {
    expect(getNextInterval(1, 'good')).toBe(3);
    expect(getNextInterval(3, 'good')).toBe(7);
    expect(getNextInterval(7, 'good')).toBe(14);
    expect(getNextInterval(14, 'good')).toBe(30);
  });

  it('should reset interval to 1 day on review fail', () => {
    expect(getNextInterval(14, 'review')).toBe(1);
  });
});
