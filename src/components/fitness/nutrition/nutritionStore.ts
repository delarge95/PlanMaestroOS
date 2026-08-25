// src/components/fitness/nutrition/nutritionStore.ts — Inputs locales del módulo nutrición (AG-NUTRI)
// Persistencia: zustand persist → localStorage, clave 'nutrition-local-v1' (v3: + perfil hormonal femenino).
// TODO(migración): cuando CORE entregue UserState (src/data/contracts/userState.ts), migrar
// weightKg/sex/goal/trainingHoursPerWeek, actividades y perfil a las vistas derivadas de sesiones reales
// (export/import JSON del adaptador IndexedDB, mapa: nutrition-local-v1 → nutrition* en UserState).

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Goal, NutritionInputs, Sex } from '../../../data/fitness/nutrition/types';
import type { BurnedActivityInput } from '../../../data/fitness/nutrition/kcalEstimator';
import type { FemaleProfile } from '../../../data/fitness/nutrition/femalePhysiology';

export const NUTRITION_STORAGE_KEY = 'nutrition-local-v1';

const FEMALE_PROFILES_VALID: FemaleProfile[] = ['none', 'ciclo-regular', 'ciclo-irregular', 'perimenopausia', 'menopausia'];

export interface LoggedActivity {
  id: string;
  /** Fecha local YYYY-MM-DD del día al que se imputa la actividad. */
  dateIso: string;
  entry: BurnedActivityInput;
}

/** Estado persistible (sin acciones). */
interface NutritionPersisted {
  weightKg: number;
  sex: Sex;
  goal: Goal;
  trainingHoursPerWeek: number;
  ageYears: number | undefined;
  activities: LoggedActivity[];
  femaleProfile: FemaleProfile;
}

interface NutritionState extends NutritionPersisted {
  setInputs: (partial: Partial<Omit<NutritionPersisted, never>>) => void;
  addActivity: (entry: BurnedActivityInput, dateIso?: string) => void;
  removeActivity: (id: string) => void;
  reset: () => void;
}

const DEFAULTS: NutritionPersisted = {
  weightKg: 70,
  sex: 'male',
  goal: 'maintenance',
  trainingHoursPerWeek: 6,
  ageYears: undefined,
  activities: [],
  femaleProfile: 'none',
};

function sanitize(partial: Partial<NutritionPersisted>): Partial<NutritionPersisted> {
  const out: Partial<NutritionPersisted> = {};
  if (typeof partial.weightKg === 'number' && partial.weightKg >= 30 && partial.weightKg <= 250) out.weightKg = partial.weightKg;
  if (partial.sex === 'male' || partial.sex === 'female') out.sex = partial.sex as Sex;
  if (partial.goal === 'deficit' || partial.goal === 'maintenance' || partial.goal === 'surplus') out.goal = partial.goal as Goal;
  if (typeof partial.trainingHoursPerWeek === 'number' && partial.trainingHoursPerWeek >= 0 && partial.trainingHoursPerWeek <= 40) {
    out.trainingHoursPerWeek = partial.trainingHoursPerWeek;
  }
  if (typeof partial.ageYears === 'number' && partial.ageYears >= 14 && partial.ageYears <= 100) out.ageYears = partial.ageYears;
  if (Array.isArray(partial.activities)) {
    out.activities = partial.activities.filter(
      (a) => a && typeof a.id === 'string' && typeof a.dateIso === 'string' && Boolean(a.entry)
    );
  } else if (partial.activities === undefined) {
    delete out.activities;
  }
  if (typeof partial.femaleProfile === 'string' && FEMALE_PROFILES_VALID.includes(partial.femaleProfile as FemaleProfile)) {
    out.femaleProfile = partial.femaleProfile as FemaleProfile;
  }
  return out;
}

function mergePersisted(persisted: unknown): NutritionPersisted {
  const raw = (persisted ?? {}) as Partial<NutritionPersisted>;
  const clean = sanitize(raw);
  return {
    ...DEFAULTS,
    ...clean,
    ageYears: typeof clean.ageYears === 'number' ? clean.ageYears : undefined,
    activities: Array.isArray(clean.activities) ? clean.activities : [],
    femaleProfile: clean.femaleProfile ?? 'none',
  };
}

export const useNutritionStore = create<NutritionState>()(
  persist(
    (set) => ({
      ...DEFAULTS,
      setInputs: (partial) =>
        set((state) => {
          const next = sanitize({ ...state, ...partial });
          return { ...next } as Partial<NutritionState>;
        }),
      addActivity: (entry, dateIso) =>
        set((state) => ({
          activities: [
            ...state.activities,
            { id: `act_${Date.now()}_${Math.floor(Math.random() * 1e4)}`, dateIso: dateIso ?? todayLocalIso(), entry },
          ],
        })),
      removeActivity: (id) => set((state) => ({ activities: state.activities.filter((a) => a.id !== id) })),
      reset: () => set({ ...DEFAULTS }),
    }),
    {
      name: NUTRITION_STORAGE_KEY,
      version: 3,
      migrate: (persistedState: unknown) => mergePersisted(persistedState),
      merge: (persistedState: unknown, currentState: NutritionState) => ({
        ...currentState,
        ...mergePersisted(persistedState),
      }),
      partialize: (state: NutritionState): NutritionPersisted => ({
        weightKg: state.weightKg,
        sex: state.sex,
        goal: state.goal,
        trainingHoursPerWeek: state.trainingHoursPerWeek,
        ageYears: state.ageYears,
        activities: state.activities,
        femaleProfile: state.femaleProfile,
      }),
    }
  )
);

export function todayLocalIso(now: Date = new Date()): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
