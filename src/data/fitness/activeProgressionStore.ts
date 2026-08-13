// src/data/fitness/activeProgressionStore.ts
// LocalStorage persistent store for active user progressions and step progress.
// Allows multiple active progressions simultaneously (e.g. Front Lever + Handstand).

const STORAGE_KEY = 'planmaestro_active_progressions_v1';

export interface ActiveProgressionState {
  activeGroupIds: string[];
  currentStepIndex: Record<string, number>;
  completedSteps: Record<string, number[]>;
}

const DEFAULT_STATE: ActiveProgressionState = {
  activeGroupIds: [],
  currentStepIndex: {},
  completedSteps: {}
};

type Listener = (state: ActiveProgressionState) => void;
const listeners = new Set<Listener>();

function loadState(): ActiveProgressionState {
  if (typeof window === 'undefined') return DEFAULT_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw);
    return {
      activeGroupIds: Array.isArray(parsed.activeGroupIds) ? parsed.activeGroupIds : [],
      currentStepIndex: parsed.currentStepIndex || {},
      completedSteps: parsed.completedSteps || {}
    };
  } catch (e) {
    console.warn('Error loading active progressions state', e);
    return DEFAULT_STATE;
  }
}

function saveState(state: ActiveProgressionState) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Error saving active progressions state', e);
  }
  listeners.forEach(fn => fn(state));
}

let currentState: ActiveProgressionState = loadState();

export function getActiveProgressionState(): ActiveProgressionState {
  return currentState;
}

export function subscribeActiveProgressionState(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function toggleActiveProgression(groupId: string): boolean {
  const active = new Set(currentState.activeGroupIds);
  const nowActive = !active.has(groupId);

  if (nowActive) {
    active.add(groupId);
    if (currentState.currentStepIndex[groupId] === undefined) {
      currentState.currentStepIndex[groupId] = 0;
    }
  } else {
    active.delete(groupId);
  }

  currentState = {
    ...currentState,
    activeGroupIds: Array.from(active)
  };

  saveState(currentState);
  return nowActive;
}

export function setProgressionStepIndex(groupId: string, stepIndex: number): void {
  currentState = {
    ...currentState,
    currentStepIndex: {
      ...currentState.currentStepIndex,
      [groupId]: Math.max(0, stepIndex)
    }
  };
  saveState(currentState);
}

export function completeProgressionStep(groupId: string, stepIndex: number, totalSteps: number): void {
  const currentCompleted = currentState.completedSteps[groupId] || [];
  const updatedCompleted = Array.from(new Set([...currentCompleted, stepIndex]));

  // Auto advance to next step if possible
  const nextStepIndex = Math.min(totalSteps - 1, stepIndex + 1);

  currentState = {
    ...currentState,
    currentStepIndex: {
      ...currentState.currentStepIndex,
      [groupId]: nextStepIndex
    },
    completedSteps: {
      ...currentState.completedSteps,
      [groupId]: updatedCompleted
    }
  };
  saveState(currentState);
}

export function isProgressionActive(groupId: string): boolean {
  return currentState.activeGroupIds.includes(groupId);
}

export function getProgressionStepIndex(groupId: string): number {
  return currentState.currentStepIndex[groupId] ?? 0;
}
