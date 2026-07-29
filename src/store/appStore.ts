// src/store/appStore.ts
// AUDIT-08 & Clinical Design: Estado global persistente con Zustand
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { EnergyLevel } from '../data/canonicalDomainModel';

const VALID_ENERGY_LEVELS: EnergyLevel[] = ['high', 'medium', 'low', 'crisis'];

interface AppState {
  // Clinical & Navigation
  currentEnergy: EnergyLevel;
  clinicalActiveTab: string;
  isFocusActive: boolean;

  // Simple Mode (Baja estimulación)
  isSimpleMode: boolean;

  // Schedules
  schedulesActiveTab: string;

  // Actions
  setCurrentEnergy: (level: EnergyLevel) => void;
  setClinicalActiveTab: (tab: string) => void;
  setFocusActive: (active: boolean) => void;
  setSimpleMode: (enabled: boolean) => void;
  toggleSimpleMode: () => void;
  setSchedulesActiveTab: (tab: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currentEnergy: 'medium' as EnergyLevel,
      clinicalActiveTab: 'now',
      isFocusActive: false,
      isSimpleMode: false,
      schedulesActiveTab: 'daily',

      setCurrentEnergy: (level: EnergyLevel) => {
        const safeLevel = VALID_ENERGY_LEVELS.includes(level) ? level : 'medium';
        set({ currentEnergy: safeLevel });
      },
      setClinicalActiveTab: (tab: string) => set({ clinicalActiveTab: tab || 'now' }),
      setFocusActive: (active: boolean) => set({ isFocusActive: Boolean(active) }),
      setSimpleMode: (enabled: boolean) => set({ isSimpleMode: Boolean(enabled) }),
      toggleSimpleMode: () => set((state) => ({ isSimpleMode: !state.isSimpleMode })),
      setSchedulesActiveTab: (tab: string) => set({ schedulesActiveTab: tab || 'daily' }),
    }),
    {
      name: 'plan-maestro-state-v3',
      version: 3,
      migrate: (persistedState: unknown) => {
        const state = (persistedState ?? {}) as Partial<AppState>;
        const energy: EnergyLevel = (state.currentEnergy && VALID_ENERGY_LEVELS.includes(state.currentEnergy))
          ? state.currentEnergy
          : 'medium';

        return {
          currentEnergy: energy,
          clinicalActiveTab: typeof state.clinicalActiveTab === 'string' ? state.clinicalActiveTab : 'now',
          schedulesActiveTab: typeof state.schedulesActiveTab === 'string' ? state.schedulesActiveTab : 'daily',
          isSimpleMode: Boolean(state.isSimpleMode),
          isFocusActive: false
        };
      },
      partialize: (state: AppState) => ({
        currentEnergy: state.currentEnergy,
        clinicalActiveTab: state.clinicalActiveTab,
        schedulesActiveTab: state.schedulesActiveTab,
        isSimpleMode: state.isSimpleMode
      }),
    }
  )
);
