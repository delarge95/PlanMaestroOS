import { useMemo } from 'react';
import { computeQuote, getServiceById } from '../../../data/services';
import type { QuoteResult } from '../../../data/services';
import { buildQuoteInput } from '../../../lib/services/ui';
import { useQuoteStore } from './useQuoteStore';

export function useQuoteResult(): QuoteResult | null {
  const screen = useQuoteStore((s) => s.screen);
  const currency = useQuoteStore((s) => s.currency);
  const presetId = useQuoteStore((s) => s.presetId);
  const wizard = useQuoteStore((s) => s.wizard);
  const modifiers = useQuoteStore((s) => s.modifiers);
  const quantity = useQuoteStore((s) => s.quantity);
  const pieces = useQuoteStore((s) => s.pieces);
  const seconds = useQuoteStore((s) => s.seconds);

  return useMemo(() => {
    if (screen === 'entry' || screen === 'presets') return null;
    try {
      return computeQuote(
        buildQuoteInput({ screen, currency, presetId, wizard, modifiers, quantity, pieces, seconds }),
        { getService: getServiceById },
      );
    } catch {
      return null;
    }
  }, [screen, currency, presetId, JSON.stringify(wizard), JSON.stringify(modifiers), quantity, pieces, seconds]);
}
