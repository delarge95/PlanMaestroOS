// src/store/appStore.ts
// AUDIT-08: Estado global persistente con Zustand + persist middleware + safe rehydration
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { EnergyLevel } from '../data/canonicalDomainModel';

const VALID_ENERGY_LEVELS: EnergyLevel[] = ['high', 'medium', 'low', 'crisis'];

interface AppState {
  // Clinical
  currentEnergy: EnergyLevel;
  clinicalActiveTab: string;
  isFocusActive: boolean;

  // Schedules
  schedulesActiveTab: string;

  // Actions
  setCurrentEnergy: (level: EnergyLevel) => void;
  setClinicalActiveTab: (tab: string) => void;
  setFocusActive: (active: boolean) => void;
  setSchedulesActiveTab: (tab: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currentEnergy: 'medium' as EnergyLevel,
      clinicalActiveTab: 'now',
      isFocusActive: false,
      schedulesActiveTab: 'daily',

      setCurrentEnergy: (level: EnergyLevel) => {
        const safeLevel = VALID_ENERGY_LEVELS.includes(level) ? level : 'medium';
        set({ currentEnergy: safeLevel });
      },
      setClinicalActiveTab: (tab: string) => set({ clinicalActiveTab: tab || 'now' }),
      setFocusActive: (active: boolean) => set({ isFocusActive: Boolean(active) }),
      setSchedulesActiveTab: (tab: string) => set({ schedulesActiveTab: tab || 'daily' }),
    }),
    {
      name: 'plan-maestro-state-v2',
      version: 2,
      // AUDIT-08: Safe migration & rehydration in case localStorage is corrupted or outdated
      migrate: (persistedState: unknown) => {
        const state = (persistedState ?? {}) as Partial<AppState>;
        const energy: EnergyLevel = (state.currentEnergy && VALID_ENERGY_LEVELS.includes(state.currentEnergy))
          ? state.currentEnergy
          : 'medium';

        return {
          currentEnergy: energy,
          clinicalActiveTab: typeof state.clinicalActiveTab === 'string' ? state.clinicalActiveTab : 'now',
          schedulesActiveTab: typeof state.schedulesActiveTab === 'string' ? state.schedulesActiveTab : 'daily',
          isFocusActive: false
        };
      },
      // AUDIT-08: Solo persiste estado navegacional; isFocusActive NO persiste
      partialize: (state: AppState) => ({
        currentEnergy: state.currentEnergy,
        clinicalActiveTab: state.clinicalActiveTab,
        schedulesActiveTab: state.schedulesActiveTab,
      }),
    }
  )
);
