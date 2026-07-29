// src/data/fitness/activeProgramStore.ts - Persistent Active Program Store per Audit 03
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ActiveProgramState {
  programId: string;
  currentWeek: number;
  currentDayId: string;
  selectedExerciseOverrides: Record<string, string>; // prescriptionId -> substitute exerciseId
  startedAt: string;
  updatedAt: string;

  // Actions
  setActiveProgram: (programId: string, week?: number, dayId?: string) => void;
  setWeek: (week: number) => void;
  setDay: (dayId: string) => void;
  setExerciseOverride: (prescriptionId: string, overrideExerciseId: string) => void;
  clearExerciseOverride: (prescriptionId: string) => void;
  resetProgramState: () => void;
}

export const useActiveProgramStore = create<ActiveProgramState>()(
  persist(
    (set) => ({
      programId: 'min-max',
      currentWeek: 1,
      currentDayId: 'mm-w1-minmax-d1',
      selectedExerciseOverrides: {},
      startedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),

      setActiveProgram: (programId: string, week = 1, dayId = '') => {
        set({
          programId,
          currentWeek: week,
          currentDayId: dayId,
          updatedAt: new Date().toISOString()
        });
      },

      setWeek: (week: number) => {
        set({
          currentWeek: week,
          updatedAt: new Date().toISOString()
        });
      },

      setDay: (dayId: string) => {
        set({
          currentDayId: dayId,
          updatedAt: new Date().toISOString()
        });
      },

      setExerciseOverride: (prescriptionId: string, overrideExerciseId: string) => {
        set((state) => ({
          selectedExerciseOverrides: {
            ...state.selectedExerciseOverrides,
            [prescriptionId]: overrideExerciseId
          },
          updatedAt: new Date().toISOString()
        }));
      },

      clearExerciseOverride: (prescriptionId: string) => {
        set((state) => {
          const nextOverrides = { ...state.selectedExerciseOverrides };
          delete nextOverrides[prescriptionId];
          return {
            selectedExerciseOverrides: nextOverrides,
            updatedAt: new Date().toISOString()
          };
        });
      },

      resetProgramState: () => {
        set({
          programId: 'min-max',
          currentWeek: 1,
          currentDayId: 'mm-w1-minmax-d1',
          selectedExerciseOverrides: {},
          updatedAt: new Date().toISOString()
        });
      }
    }),
    {
      name: 'fitapp-active-program-v1',
      version: 1,
      partialize: (state) => ({
        programId: state.programId,
        currentWeek: state.currentWeek,
        currentDayId: state.currentDayId,
        selectedExerciseOverrides: state.selectedExerciseOverrides,
        startedAt: state.startedAt
      })
    }
  )
);
