// src/data/fitness/activeProgramStore.ts - Persistent Active Program Store per Audit 03
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ActiveProgramState {
  programId: string; // Currently selected/inspected program ID in UI
  activeProgramIds: string[]; // List of all currently active program IDs
  currentWeek: number;
  currentDayId: string;
  selectedExerciseOverrides: Record<string, string>; // prescriptionId -> substitute exerciseId
  startedAt: string;
  updatedAt: string;

  // Actions
  setActiveProgram: (programId: string, week?: number, dayId?: string) => void;
  toggleActiveProgram: (programId: string) => void;
  isProgramActive: (programId: string) => boolean;
  setWeek: (week: number) => void;
  setDay: (dayId: string) => void;
  setExerciseOverride: (prescriptionId: string, overrideExerciseId: string) => void;
  clearExerciseOverride: (prescriptionId: string) => void;
  resetProgramState: () => void;
}

export const useActiveProgramStore = create<ActiveProgramState>()(
  persist(
    (set, get) => ({
      programId: 'min-max',
      activeProgramIds: ['min-max'],
      currentWeek: 1,
      currentDayId: 'mm-w1-minmax-d1',
      selectedExerciseOverrides: {},
      startedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),

      setActiveProgram: (programId: string, week = 1, dayId = '') => {
        set((state) => {
          const currentActive = state.activeProgramIds || ['min-max'];
          const nextActive = currentActive.includes(programId)
            ? currentActive
            : [...currentActive, programId];

          return {
            programId,
            activeProgramIds: nextActive,
            currentWeek: week,
            currentDayId: dayId,
            updatedAt: new Date().toISOString()
          };
        });
      },

      toggleActiveProgram: (programId: string) => {
        set((state) => {
          const currentActive = state.activeProgramIds || ['min-max'];
          const isAlreadyActive = currentActive.includes(programId);
          let nextActive: string[];

          if (isAlreadyActive) {
            // Keep at least one active program
            nextActive = currentActive.length > 1
              ? currentActive.filter((id) => id !== programId)
              : currentActive;
          } else {
            nextActive = [...currentActive, programId];
          }

          const nextInspectedProgram = nextActive.includes(state.programId)
            ? state.programId
            : nextActive[0];

          return {
            programId: nextInspectedProgram,
            activeProgramIds: nextActive,
            updatedAt: new Date().toISOString()
          };
        });
      },

      isProgramActive: (programId: string) => {
        const state = get();
        return (state.activeProgramIds || [state.programId]).includes(programId);
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
          activeProgramIds: ['min-max'],
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
        activeProgramIds: state.activeProgramIds,
        currentWeek: state.currentWeek,
        currentDayId: state.currentDayId,
        selectedExerciseOverrides: state.selectedExerciseOverrides,
        startedAt: state.startedAt
      })
    }
  )
);
