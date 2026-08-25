import type { LegacyRateCard, RateCard } from './types';

export const RATE_CARD_V1: RateCard = {
  version: 'v1-draft-2026-08-25',
  status: 'draft-pending-user-validation',
  bands: {
    N1: { minUsdPerHour: 20, maxUsdPerHour: 28 },
    N2: { minUsdPerHour: 28, maxUsdPerHour: 40 },
    N3: { minUsdPerHour: 40, maxUsdPerHour: 60 },
    N4: { minUsdPerHour: 60, maxUsdPerHour: 85 },
  },
  roundingStepUsd: 50,
  roundingMode: 'ceil-both',
  minProjectUsd: 100,
  sourceRef: 'docs/servicios/01_modelo_cobro.md v1 §3 (anclas doc-03 + Research)',
};

export const LEGACY_RATE_CARD_V0: LegacyRateCard = {
  version: 'v0-legacy-2026-08-25',
  status: 'deprecated-superseded-by-v1-pending-regeneration',
  bands: {
    N1: { minUsdPerHour: 25, maxUsdPerHour: 30 },
    N2: { minUsdPerHour: 28, maxUsdPerHour: 35 },
    N3: { minUsdPerHour: 35, maxUsdPerHour: 45 },
    N4: { minUsdPerHour: 45, maxUsdPerHour: 55 },
  },
  roundingStepUsd: 10,
  roundingMode: 'tramos-floor-min-ceil-max',
  minProjectUsd: 0,
  sourceRef:
    'bandas legacy detectadas en docs/servicios/02–06 (ing. inversa apéndice deltas d3b3861); tramos 10 (<500) / 50 (500–2000) / 100 (>2000)',
};
