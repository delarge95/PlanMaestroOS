import { describe, it, expect } from 'vitest';
import { calculatePlatesAndLoad } from '../loadCalculator';

describe('Load Calculator', () => {
  it('should calculate target weight and plates per side correctly', () => {
    const result = calculatePlatesAndLoad(100, 10, 20); // 100kg PR, RPE 10 -> 100kg target, 40kg per side (2x 20kg plates)
    expect(result.targetWeightKg).toBe(100);
    expect(result.weightPerSideKg).toBe(40);
    expect(result.platesPerSide).toEqual([{ plateKg: 20, countPerSide: 2 }]);
  });

  it('should handle minimum bar weight fallback when target is small', () => {
    const result = calculatePlatesAndLoad(10, 6, 20);
    expect(result.targetWeightKg).toBe(20);
    expect(result.weightPerSideKg).toBe(0);
    expect(result.platesPerSide).toEqual([]);
  });
});
