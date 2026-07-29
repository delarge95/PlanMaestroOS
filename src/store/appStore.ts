// src/store/appStore.ts
// AUDIT-08: Estado global persistente con Zustand
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { EnergyLevel } from '../data/canonicalDomainModel';

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
      currentEnergy: 'medium',
      clinicalActiveTab: 'now',
      isFocusActive: false,
      schedulesActiveTab: 'daily',

      setCurrentEnergy: (level) => set({ currentEnergy: level }),
      setClinicalActiveTab: (tab) => set({ clinicalActiveTab: tab }),
      setFocusActive: (active) => set({ isFocusActive: active }),
      setSchedulesActiveTab: (tab) => set({ schedulesActiveTab: tab }),
    }),
    {
      name: 'plan-maestro-state', // clave en localStorage
      partialize: (state) => ({
        currentEnergy: state.currentEnergy,
        clinicalActiveTab: state.clinicalActiveTab,
        schedulesActiveTab: state.schedulesActiveTab,
        // isFocusActive deliberadamente NO persiste → siempre arranca desactivado
      }),
    }
  )
);
