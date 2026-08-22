// src/components/fitness/nutrition/nutritionStore.ts — Inputs locales del módulo nutrición (AG-NUTRI)
// Persistencia: zustand persist → localStorage, clave 'nutrition-local-v1'.
// TODO(migración): cuando CORE entregue UserState (src/data/contracts/userState.ts), migrar
// weightKg/sex/goal/trainingHoursPerWeek a las vistas derivadas de sesiones reales y deprecar esta clave
// (export/import JSON del adaptador IndexedDB, mapa: nutrition-local-v1 → nutritionInputs).

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Goal, NutritionInputs, Sex } from '../../../data/fitness/nutrition/types';

export const NUTRITION_STORAGE_KEY = 'nutrition-local-v1';

interface NutritionState extends NutritionInputs {
  setInputs: (partial: Partial<NutritionInputs>) => void;
  reset: () => void;
}

const DEFAULTS: NutritionInputs = {
  weightKg: 70,
  sex: 'male',
  goal: 'maintenance',
  trainingHoursPerWeek: 6,
  ageYears: undefined,
};

const sanitize = (partial: Partial<NutritionInputs>): Partial<NutritionInputs> => {
  const out: Partial<NutritionInputs> = {};
  if (typeof partial.weightKg === 'number' && partial.weightKg >= 30 && partial.weightKg <= 250) out.weightKg = partial.weightKg;
  if (partial.sex === 'male' || partial.sex === 'female') out.sex = partial.sex as Sex;
  if (partial.goal === 'deficit' || partial.goal === 'maintenance' || partial.goal === 'surplus') out.goal = partial.goal as Goal;
  if (typeof partial.trainingHoursPerWeek === 'number' && partial.trainingHoursPerWeek >= 0 && partial.trainingHoursPerWeek <= 40) {
    out.trainingHoursPerWeek = partial.trainingHoursPerWeek;
  }
  if (typeof partial.ageYears === 'number' && partial.ageYears >= 14 && partial.ageYears <= 100) out.ageYears = partial.ageYears;
  return out;
};

export const useNutritionStore = create<NutritionState>()(
  persist(
    (set) => ({
      ...DEFAULTS,
      setInputs: (partial) => set(sanitize(partial)),
      reset: () => set({ ...DEFAULTS }),
    }),
    {
      name: NUTRITION_STORAGE_KEY,
      version: 1,
      migrate: (persistedState: unknown) => {
        const state = (persistedState ?? {}) as Partial<NutritionInputs>;
        return { ...DEFAULTS, ...sanitize(state) };
      },
      partialize: (state: NutritionState) => ({
        weightKg: state.weightKg,
        sex: state.sex,
        goal: state.goal,
        trainingHoursPerWeek: state.trainingHoursPerWeek,
        ageYears: state.ageYears,
      }),
    }
  )
);
