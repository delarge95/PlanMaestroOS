import { useMemo } from 'react';
import { computeQuote, getServiceById } from '../../../data/services';
import type { QuoteResult } from '../../../data/services';
import { useQuoteStore } from './useQuoteStore';

export function useQuote(): QuoteResult | null {
  const s = useQuoteStore();

  return useMemo(() => {
    if (s.screen === 'entry' || s.screen === 'presets' || s.screen === 'catalog') return null;
    try {
      const serviceId = s.presetId ?? s.serviceId;
      if (!serviceId) return null;

      const isPreset = s.presetId != null && getServiceById(s.presetId) == null;
      const kind = isPreset ? 'package' : 'service';

      const input: Record<string, unknown> = {
        kind,
        currency: s.currency,
        modifiers: {
          firstClientLaunch: s.firstClientLaunch,
          recurringClient: s.recurringClient,
          batchUnits: s.batchUnits,
          urgent72h: s.urgent72h,
          critical24h: s.critical24h,
        },
        quantity: s.quantity,
      };

      if (isPreset) {
        input.packageId = s.presetId;
        // Override cantidad del componente F1 si el usuario ajustó piezas
        if (s.pieces > 0 && s.pieces !== 10) {
          input.componentesOverride = [
            { serviceId: 'f1-cad-webgl-ready', nivel: 'N2', cantidad: s.pieces },
          ];
        }
      } else {
        input.serviceId = s.serviceId ?? 'f1-cad-webgl-ready';
        input.level = s.level;
      }

      return computeQuote(input as never, { getService: getServiceById });
    } catch {
      return null;
    }
  }, [s.screen, s.currency, s.presetId, s.serviceId, s.level, s.quantity,
      s.pieces, s.seconds, s.detail, JSON.stringify(s.qualitativeDeltas),
      JSON.stringify(s.addons), s.firstClientLaunch, s.recurringClient,
      s.batchUnits, s.urgent72h, s.critical24h]);
}
