import { create } from 'zustand';
import { getServiceById, computeQuote } from '../../../data/services';
import type { LevelId, Currency, QuoteResult } from '../../../data/services';
import { getUxSpec, PREGUNTAS_RUBRICA } from '../../../lib/services/ux';

const LEVEL_ORDER: LevelId[] = ['XS', 'N1', 'N2', 'N3', 'N4'];

export interface QuoteState {
  serviceId: string | null;
  sliderValues: Record<string, number>;
  rubricAnswers: Record<string, string>;
  currency: Currency;
  firstClientLaunch: boolean;
  derivedLevel: LevelId | null;
  result: QuoteResult | null;
  selectService: (id: string) => void;
  setSlider: (controlId: string, value: number) => void;
  setRubric: (dimId: string, valueEs: string) => void;
  setCurrency: (c: Currency) => void;
  setLaunchDiscount: (active: boolean) => void;
  calculateQuote: () => void;
}

export const useQuoteStore = create<QuoteState>((set, get) => ({
  serviceId: null,
  sliderValues: {},
  rubricAnswers: {},
  currency: 'USD',
  firstClientLaunch: true,
  derivedLevel: null,
  result: null,

  selectService: (id) => set({ serviceId: id, sliderValues: {}, rubricAnswers: {}, derivedLevel: null, result: null }),

  setSlider: (controlId, value) => {
    set((s) => ({ sliderValues: { ...s.sliderValues, [controlId]: value } }));
    get().calculateQuote();
  },

  setRubric: (dimId, valueEs) => {
    set((s) => ({ rubricAnswers: { ...s.rubricAnswers, [dimId]: valueEs } }));
    get().calculateQuote();
  },

  setCurrency: (currency) => {
    set({ currency });
    get().calculateQuote();
  },

  setLaunchDiscount: (firstClientLaunch) => {
    set({ firstClientLaunch });
    get().calculateQuote();
  },

  calculateQuote: () => {
    const { serviceId, sliderValues, rubricAnswers, currency, firstClientLaunch } = get();
    if (!serviceId) return;

    const uxSpec = getUxSpec(serviceId);
    if (!uxSpec) return;

    let baseLevelIdx = 1;
    for (const ctrl of uxSpec.controles) {
      if (!ctrl.umbrales) continue;
      const val = sliderValues[ctrl.kind] ?? ctrl.min;
      const umbral = ctrl.umbrales.find((u) => val <= u.hasta);
      if (umbral) {
        const idx = LEVEL_ORDER.indexOf(umbral.nivel as LevelId);
        if (idx > baseLevelIdx) baseLevelIdx = idx;
      }
    }

    let deltaSum = 0;
    for (const dimId of uxSpec.preguntasRubrica) {
      const answer = rubricAnswers[dimId];
      if (!answer) continue;
      const question = PREGUNTAS_RUBRICA[dimId];
      if (!question) continue;
      const option = question.opciones.find((o) => o.valorEs === answer);
      if (option) deltaSum += option.delta;
    }

    const finalIdx = Math.max(0, Math.min(4, baseLevelIdx + deltaSum));
    const finalLevel = LEVEL_ORDER[finalIdx];

    const result = computeQuote(
      { kind: 'service', serviceId, level: finalLevel, currency, quantity: 1, modifiers: { firstClientLaunch } },
      { getService: getServiceById },
    );

    set({ derivedLevel: finalLevel, result });
  },
}));
