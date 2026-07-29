// src/data/fitness/skills/skillStateStore.ts - Persistent Zustand Store for Skills
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { SkillStatus, PracticeSessionRecord } from './types';

export interface SkillState {
  activeStepId: string;
  stepStatuses: Record<string, SkillStatus>;
  practiceSessions: PracticeSessionRecord[];

  // Actions
  setActiveStep: (stepId: string) => void;
  setStepStatus: (stepId: string, status: SkillStatus) => void;
  addPracticeSession: (session: Omit<PracticeSessionRecord, 'id' | 'timestamp'>) => void;
  pauseSkill: (stepId: string) => void;
  resumeSkill: (stepId: string) => void;
}

export const useSkillStateStore = create<SkillState>()(
  persist(
    (set, get) => ({
      activeStepId: 'pull-step-1',
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
          const updatedStatuses = { ...state.stepStatuses };
          // Set old active step to available if it was in-progress
          if (state.activeStepId && updatedStatuses[state.activeStepId] === 'in-progress') {
            updatedStatuses[state.activeStepId] = 'available';
          }
          updatedStatuses[stepId] = 'in-progress';
          return { activeStepId: stepId, stepStatuses: updatedStatuses };
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
