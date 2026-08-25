// src/components/fitness/nutrition/nutritionStore.ts — Inputs locales del módulo nutrición (AG-NUTRI)
// Persistencia: zustand persist → localStorage, clave 'nutrition-local-v1' (v2: + registro de actividades del día).
// TODO(migración): cuando CORE entregue UserState (src/data/contracts/userState.ts), migrar
// weightKg/sex/goal/trainingHoursPerWeek y el log de actividades a las vistas derivadas de sesiones reales
// (export/import JSON del adaptador IndexedDB, mapa: nutrition-local-v1 → nutritionInputs + nutritionActivityLog).

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Goal, NutritionInputs, Sex } from '../../../data/fitness/nutrition/types';
import type { BurnedActivityInput } from '../../../data/fitness/nutrition/kcalEstimator';

export const NUTRITION_STORAGE_KEY = 'nutrition-local-v1';

export interface LoggedActivity {
  id: string;
  /** Fecha local YYYY-MM-DD del día al que se imputa la actividad. */
  dateIso: string;
  entry: BurnedActivityInput;
}

export function todayLocalIso(now: Date = new Date()): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

interface NutritionState extends NutritionInputs {
  activities: LoggedActivity[];
  setInputs: (partial: Partial<NutritionInputs>) => void;
  addActivity: (entry: BurnedActivityInput, dateIso?: string) => void;
  removeActivity: (id: string) => void;
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
      activities: [],
      setInputs: (partial) => set(sanitize(partial)),
      addActivity: (entry, dateIso) =>
        set((state) => ({
          activities: [...state.activities, { id: `act_${Date.now()}_${Math.floor(Math.random() * 1e4)}`, dateIso: dateIso ?? todayLocalIso(), entry }],
        })),
      removeActivity: (id) => set((state) => ({ activities: state.activities.filter((a) => a.id !== id) })),
      reset: () => set({ ...DEFAULTS }),
    }),
    {
      name: NUTRITION_STORAGE_KEY,
      version: 2,
      migrate: (persistedState: unknown) => {
        const state = (persistedState ?? {}) as Partial<NutritionState>;
        const legacyActivities = Array.isArray(state.activities)
          ? state.activities.filter((a) => a && typeof a.id === 'string' && typeof a.dateIso === 'string' && Boolean(a.entry))
          : [];
        return { ...DEFAULTS, ...sanitize(state), activities: legacyActivities };
      },
      partialize: (state: NutritionState) => ({
        weightKg: state.weightKg,
        sex: state.sex,
        goal: state.goal,
        trainingHoursPerWeek: state.trainingHoursPerWeek,
        ageYears: state.ageYears,
        activities: state.activities,
      }),
    }
  )
);
