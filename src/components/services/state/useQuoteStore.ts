import { create } from 'zustand';
import type { Currency, LevelId } from '../../../data/services';

export type Screen = 'entry' | 'presets' | 'preset-config' | 'wizard' | 'catalog' | 'summary';

export interface QuoteState {
  screen: Screen;
  currency: Currency;
  presetId?: string;

  // Selección principal (wizard o preset)
  serviceId?: string;
  family?: string;
  level: LevelId;
  quantity: number;

  // Drivers cuantitativos
  pieces: number;
  seconds: number;
  detail: 0 | 1 | 2;

  // Rúbrica cualitativa (deltas por dimensión)
  qualitativeDeltas: Record<string, -1 | 0 | 1>;

  // Add-ons seleccionados
  addons: string[];

  // Modificadores globales
  firstClientLaunch: boolean;
  recurringClient: boolean;
  batchUnits?: number;
  urgent72h: boolean;
  critical24h: boolean;

  // Acciones
  go: (s: Screen) => void;
  setCurrency: (c: Currency) => void;
  selectPreset: (id?: string) => void;
  setService: (id: string, level: LevelId) => void;
  setFamily: (f: string) => void;
  setLevel: (l: LevelId) => void;
  setQuantity: (n: number) => void;
  setPieces: (n: number) => void;
  setSeconds: (n: number) => void;
  setDetail: (d: 0 | 1 | 2) => void;
  setQualitative: (dimId: string, delta: -1 | 0 | 1) => void;
  toggleAddon: (id: string) => void;
  toggleLaunch: () => void;
  toggleRecurring: () => void;
  setUrgency: (kind: 'none' | '72h' | '24h') => void;
  reset: () => void;
}

const initial = {
  screen: 'entry' as Screen,
  currency: 'USD' as Currency,
  presetId: undefined,
  serviceId: undefined,
  family: undefined,
  level: 'N2' as LevelId,
  quantity: 1,
  pieces: 10,
  seconds: 15,
  detail: 1 as const,
  qualitativeDeltas: {},
  addons: [],
  firstClientLaunch: true,
  recurringClient: false,
  batchUnits: undefined,
  urgent72h: false,
  critical24h: false,
};

export const useQuoteStore = create<QuoteState>((set) => ({
  ...initial,
  go: (screen) => set({ screen }),
  setCurrency: (currency) => set({ currency }),
  selectPreset: (presetId) => set({ presetId, screen: 'preset-config' }),
  setService: (serviceId, level) => set({ serviceId, level }),
  setFamily: (family) => set({ family }),
  setLevel: (level) => set({ level }),
  setQuantity: (quantity) => set({ quantity: Math.max(1, quantity) }),
  setPieces: (pieces) => set({ pieces: Math.max(1, Math.min(500, pieces)) }),
  setSeconds: (seconds) => set({ seconds: Math.max(2, Math.min(90, seconds)) }),
  setDetail: (detail) => set({ detail }),
  setQualitative: (dimId, delta) =>
    set((s) => ({ qualitativeDeltas: { ...s.qualitativeDeltas, [dimId]: delta } })),
  toggleAddon: (id) =>
    set((s) => ({
      addons: s.addons.includes(id)
        ? s.addons.filter((a) => a !== id)
        : [...s.addons, id],
    })),
  toggleLaunch: () => set((s) => ({ firstClientLaunch: !s.firstClientLaunch })),
  toggleRecurring: () => set((s) => ({ recurringClient: !s.recurringClient })),
  setUrgency: (kind) =>
    set({
      urgent72h: kind === '72h',
      critical24h: kind === '24h',
    }),
  reset: () => set({ ...initial, currency: useQuoteStore.getState().currency }),
}));
