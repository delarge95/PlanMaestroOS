// src/data/gastronomy/plans.ts - Planes Dietarios por Objetivo

import { initialRecipes } from './recipes';
import type { Recipe } from './types';

export interface MealPlan {
  id: string;
  title: string;
  objective: 'Déficit' | 'Mantenimiento' | 'Volumen';
  fitnessGoal?: string; // Reservado para conexión futura con módulo fitness
  weeklyAssignments: Record<string, Recipe[]>;
}

export const initialMealPlans: MealPlan[] = [
  {
    id: 'plan-1',
    title: 'Plan Hipertrofia & Rendimiento Min-Max',
    objective: 'Volumen',
    fitnessGoal: 'Hypertrophy Phase 1',
    weeklyAssignments: {
      Lunes: [initialRecipes[0], initialRecipes[1]],
      Martes: [initialRecipes[0]],
      Miércoles: [initialRecipes[1]],
      Jueves: [initialRecipes[0]],
      Viernes: [initialRecipes[1]]
    }
  }
];
