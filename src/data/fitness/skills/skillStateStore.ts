// src/data/fitness/skills/skillStateStore.ts - Persistent Zustand Store for Skills
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { SkillStatus, PracticeSessionRecord } from './types';

export interface SkillState {
  activeStepId: string;
  activeStepIds: string[];
  stepStatuses: Record<string, SkillStatus>;
  practiceSessions: PracticeSessionRecord[];

  // Actions
  setActiveStep: (stepId: string) => void;
  changeActiveStepForPath: (oldStepId: string, newStepId: string) => void;
  toggleActiveSkill: (stepId: string) => void;
  setStepStatus: (stepId: string, status: SkillStatus) => void;
  addPracticeSession: (session: Omit<PracticeSessionRecord, 'id' | 'timestamp'>) => void;
  pauseSkill: (stepId: string) => void;
  resumeSkill: (stepId: string) => void;
}

export const useSkillStateStore = create<SkillState>()(
  persist(
    (set, get) => ({
      activeStepId: 'pull-step-1',
      activeStepIds: ['pull-step-1'],
      stepStatuses: {
        'pull-step-1': 'in-progress',
        'push-step-1': 'available',
        'core-step-1': 'available',
        'leg-step-1': 'available',
        'supp-step-1': 'available',
        'mob-step-1': 'available'
      },
      practiceSessions: [],

      setActiveStep: (stepId: string) => {
        set((state) => {
          const currentActive = state.activeStepIds || [state.activeStepId || 'pull-step-1'];
          const nextActive = currentActive.includes(stepId) ? currentActive : [...currentActive, stepId];
          const updatedStatuses = { ...state.stepStatuses, [stepId]: 'in-progress' as SkillStatus };
          return { activeStepId: stepId, activeStepIds: nextActive, stepStatuses: updatedStatuses };
        });
      },

      changeActiveStepForPath: (oldStepId: string, newStepId: string) => {
        set((state) => {
          const currentActive = state.activeStepIds || [state.activeStepId || 'pull-step-1'];
          const nextActive = currentActive.map((id) => (id === oldStepId ? newStepId : id));
          if (!nextActive.includes(newStepId)) {
            nextActive.push(newStepId);
          }
          const updatedStatuses = { ...state.stepStatuses, [newStepId]: 'in-progress' as SkillStatus };
          return {
            activeStepId: newStepId,
            activeStepIds: nextActive,
            stepStatuses: updatedStatuses
          };
        });
      },

      toggleActiveSkill: (stepId: string) => {
        set((state) => {
          const currentActive = state.activeStepIds || [state.activeStepId || 'pull-step-1'];
          const isAlreadyActive = currentActive.includes(stepId);
          let nextActive: string[];
          const updatedStatuses = { ...state.stepStatuses };

          if (isAlreadyActive) {
            nextActive = currentActive.length > 1 ? currentActive.filter((id) => id !== stepId) : currentActive;
            if (currentActive.length > 1) {
              updatedStatuses[stepId] = 'available';
            }
          } else {
            nextActive = [...currentActive, stepId];
            updatedStatuses[stepId] = 'in-progress';
          }

          const nextMainActive = nextActive.includes(state.activeStepId) ? state.activeStepId : nextActive[0];

          return {
            activeStepId: nextMainActive,
            activeStepIds: nextActive,
            stepStatuses: updatedStatuses
          };
        });
      },

      setStepStatus: (stepId: string, status: SkillStatus) => {
        set((state) => ({
          stepStatuses: { ...state.stepStatuses, [stepId]: status }
        }));
      },

      addPracticeSession: (sessionData) => {
        const newRecord: PracticeSessionRecord = {
          ...sessionData,
          id: `session-${Date.now()}`,
          timestamp: new Date().toISOString()
        };

        set((state) => ({
          practiceSessions: [newRecord, ...state.practiceSessions]
        }));
      },

      pauseSkill: (stepId: string) => {
        set((state) => ({
          stepStatuses: { ...state.stepStatuses, [stepId]: 'paused' }
        }));
      },

      resumeSkill: (stepId: string) => {
        set((state) => ({
          stepStatuses: { ...state.stepStatuses, [stepId]: 'in-progress' }
        }));
      }
    }),
    {
      name: 'plan-maestro-skills-store-v1',
      storage: createJSONStorage(() => localStorage)
    }
  )
);
