import { create } from 'zustand';
import type { Currency } from '../../../data/services';
import type { CotizadorState, Screen } from '../../../lib/services/ui';

interface Actions {
  go: (s: Screen) => void;
  setCurrency: (c: Currency) => void;
  selectPreset: (id: string | undefined) => void;
  setWizard: (patch: Partial<CotizadorState['wizard']>) => void;
  toggleQualitative: (dimId: string, delta: -1 | 0 | 1) => void;
  toggleAddon: (id: string) => void;
  setModifier: <K extends keyof CotizadorState['modifiers']>(k: K, v: CotizadorState['modifiers'][K]) => void;
  setQuantity: (n: number) => void;
  setPieces: (n: number) => void;
  setSeconds: (n: number) => void;
  setDetail: (d: 0 | 1 | 2) => void;
  reset: () => void;
}

export const useQuoteStore = create<CotizadorState & Actions>((set) => ({
  screen: 'entry',
  currency: 'USD',
  wizard: { levelBase: 'N2', qualitativeDeltas: {}, addons: [] },
  modifiers: { firstClientLaunch: true },
  quantity: 1,
  pieces: 10,
  seconds: 10,
  detail: 1,
  go: (screen) => set({ screen }),
  setCurrency: (currency) => set({ currency }),
  selectPreset: (presetId) => set({ presetId, screen: presetId ? 'preset-config' : 'presets' }),
  setWizard: (patch) => set((s) => ({ wizard: { ...s.wizard, ...patch } })),
  toggleQualitative: (dimId, delta) =>
    set((s) => ({ wizard: { ...s.wizard, qualitativeDeltas: { ...s.wizard.qualitativeDeltas, [dimId]: delta } } })),
  toggleAddon: (id) =>
    set((s) => ({
      wizard: {
        ...s.wizard,
        addons: s.wizard.addons.includes(id)
          ? s.wizard.addons.filter((a) => a !== id)
          : [...s.wizard.addons, id],
      },
    })),
  setModifier: (k, v) => set((s) => ({ modifiers: { ...s.modifiers, [k]: v } })),
  setQuantity: (quantity) => set({ quantity: Math.max(1, quantity) }),
  setPieces: (pieces) => set({ pieces: Math.max(1, Math.min(150, pieces)) }),
  setSeconds: (seconds) => set({ seconds: Math.max(2, Math.min(90, seconds)) }),
  setDetail: (detail) => set({ detail }),
  reset: () =>
    set({
      screen: 'entry',
      presetId: undefined,
      wizard: { levelBase: 'N2', qualitativeDeltas: {}, addons: [] },
      modifiers: { firstClientLaunch: true },
      quantity: 1,
    }),
}));
