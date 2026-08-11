// src/lib/fitness/loadCalculator.ts - Calculador de Cargas, RPE y Discos por Lado

export interface PlateBreakdown {
  plateKg: number;
  countPerSide: number;
}

export interface LoadCalculationResult {
  targetWeightKg: number;
  barbellWeightKg: number;
  weightPerSideKg: number;
  platesPerSide: PlateBreakdown[];
  warmupSuggested: {
    setNumber: number;
    reps: string;
    weightKg: number;
    notes: string;
  }[];
}

const AVAILABLE_PLATES_KG = [20, 15, 10, 5, 2.5, 1.25];

export function calculatePlatesAndLoad(
  prWeightKg: number,
  rpeTarget: number, // 6..10
  barbellWeightKg = 20
): LoadCalculationResult {
  // Estimación de porcentaje en base a RPE objetivo para 8 reps
  // RPE 10 -> 100% 8RM (~80% 1RM), RPE 8 -> 92% 8RM, etc.
  const rpeMultiplierMap: Record<number, number> = {
    10: 1.0,
    9.5: 0.975,
    9: 0.95,
    8.5: 0.925,
    8: 0.90,
    7.5: 0.875,
    7: 0.85,
    6: 0.80
  };

  const multiplier = rpeMultiplierMap[rpeTarget] || 0.85;
  const rawTarget = Math.max(barbellWeightKg, prWeightKg * multiplier);

  // Redondear al múltiplo de 2.5 kg más cercano
  const targetWeightKg = Math.round(rawTarget / 2.5) * 2.5;
  const weightPerSideKg = Math.max(0, (targetWeightKg - barbellWeightKg) / 2);

  const platesPerSide: PlateBreakdown[] = [];
  let remainingPerSide = weightPerSideKg;

  for (const plate of AVAILABLE_PLATES_KG) {
    const count = Math.floor(remainingPerSide / plate);
    if (count > 0) {
      platesPerSide.push({ plateKg: plate, countPerSide: count });
      remainingPerSide = Math.round((remainingPerSide - count * plate) * 100) / 100;
    }
  }

  const warmupSuggested = [
    { setNumber: 1, reps: '10–12', weightKg: barbellWeightKg, notes: 'Movilidad & Barra sola' },
    { setNumber: 2, reps: '6–8', weightKg: Math.round((barbellWeightKg + (targetWeightKg - barbellWeightKg) * 0.5) / 2.5) * 2.5, notes: '50% Carga efectiva' },
    { setNumber: 3, reps: '3–4', weightKg: Math.round((barbellWeightKg + (targetWeightKg - barbellWeightKg) * 0.75) / 2.5) * 2.5, notes: '75% Carga efectiva' }
  ];

  return {
    targetWeightKg,
    barbellWeightKg,
    weightPerSideKg,
    platesPerSide,
    warmupSuggested
  };
}
