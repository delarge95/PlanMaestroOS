// src/data/fitness/cardio/cardioStore.ts — Copias locales de presets editados (AG-CARDIO)
// Persistencia: zustand persist → localStorage 'cardio-presets-v1'.
// NUNCA sobrescribe los presets originales (CARDIO_PRESETS es fuente estática).

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CardioPreset } from './types';

export const CARDIO_STORAGE_KEY = 'cardio-presets-v1';

export interface LocalPreset extends CardioPreset {
  /** Id del preset original del que deriva. */
  basePresetId: string;
  updatedAt: number;
}

interface CardioState {
  /** Copias locales por basePresetId (1 edición por preset original). */
  local: Record<string, LocalPreset>;
  saveLocal: (preset: CardioPreset, basePresetId: string) => void;
  removeLocal: (basePresetId: string) => void;
}

/** Saneado defensivo al rehidratar: solo campos con tipo esperado. */
function sanitizePreset(p: unknown): LocalPreset | null {
  if (!p || typeof p !== 'object') return null;
  const c = p as Partial<LocalPreset>;
  if (typeof c.id !== 'string' || typeof c.basePresetId !== 'string' || !Array.isArray(c.blocks)) return null;
  return c as LocalPreset;
}

export const useCardioStore = create<CardioState>()(
  persist(
    (set) => ({
      local: {},
      saveLocal: (preset, basePresetId) =>
        set((s) => ({
          local: {
            ...s.local,
            [basePresetId]: { ...preset, basePresetId, updatedAt: Date.now() },
          },
        })),
      removeLocal: (basePresetId) =>
        set((s) => {
          const next = { ...s.local };
          delete next[basePresetId];
          return { local: next };
        }),
    }),
    {
      name: CARDIO_STORAGE_KEY,
      version: 1,
      migrate: (persisted) => {
        const state = (persisted ?? {}) as Partial<CardioState>;
        const local: Record<string, LocalPreset> = {};
        if (state.local && typeof state.local === 'object') {
          for (const [k, v] of Object.entries(state.local)) {
            const p = sanitizePreset(v);
            if (p) local[k] = p;
          }
        }
        return { local } as CardioState;
      },
      partialize: (s) => ({ local: s.local }),
    }
  )
);
