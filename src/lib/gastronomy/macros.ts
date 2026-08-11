// src/lib/gastronomy/macros.ts - Cálculo de Macros Totales por Día y Receta

import type { Recipe } from '../../data/gastronomy/types';

export interface DailyMacroSummary {
  totalKcal: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
}

export function calculateDailyMacros(recipes: Recipe[]): DailyMacroSummary {
  return recipes.reduce(
    (acc, r) => {
      if (r.macros) {
        acc.totalKcal += r.macros.kcal;
        acc.totalProtein += r.macros.protein;
        acc.totalCarbs += r.macros.carbs;
        acc.totalFat += r.macros.fat;
      }
      return acc;
    },
    { totalKcal: 0, totalProtein: 0, totalCarbs: 0, totalFat: 0 }
  );
}
