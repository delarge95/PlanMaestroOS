// src/store/appStore.ts
// AUDIT-08: Estado global persistente con Zustand + persist middleware
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
      currentEnergy: 'medium' as EnergyLevel,
      clinicalActiveTab: 'now',
      isFocusActive: false,
      schedulesActiveTab: 'daily',

      setCurrentEnergy: (level: EnergyLevel) => set({ currentEnergy: level }),
      setClinicalActiveTab: (tab: string) => set({ clinicalActiveTab: tab }),
      setFocusActive: (active: boolean) => set({ isFocusActive: active }),
      setSchedulesActiveTab: (tab: string) => set({ schedulesActiveTab: tab }),
    }),
    {
      name: 'plan-maestro-state-v2',
      // AUDIT-08: Solo persiste estado navegacional; isFocusActive NO persiste
      partialize: (state: AppState) => ({
        currentEnergy: state.currentEnergy,
        clinicalActiveTab: state.clinicalActiveTab,
        schedulesActiveTab: state.schedulesActiveTab,
      }),
    }
  )
);
