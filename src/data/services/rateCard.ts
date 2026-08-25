import type { LegacyRateCard, RateCard } from './types';

export const RATE_CARD_V1: RateCard = {
  version: 'v1-corredor-calibracion-draft-2026-08-25',
  status: 'not-operativo-corredor-amplio-de-calibracion-ver-01-v1.1',
  currency: 'USD',
  bands: {
    XS: { minUsdPerHour: 18, maxUsdPerHour: 24 },
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
  version: 'v0-operativa-2026-08-25',
  status: 'operativa-per-01-v1.1-bandas-de-todos-los-precios-publicados',
  currency: 'USD',
  bands: {
    XS: { minUsdPerHour: 18, maxUsdPerHour: 24 },
    N1: { minUsdPerHour: 25, maxUsdPerHour: 30 },
    N2: { minUsdPerHour: 28, maxUsdPerHour: 35 },
    N3: { minUsdPerHour: 35, maxUsdPerHour: 45 },
    N4: { minUsdPerHour: 45, maxUsdPerHour: 55 },
  },
  roundingStepUsd: 10,
  roundingMode: 'tramos-floor-min-ceil-max',
  minProjectUsd: 0,
  sourceRef:
    'bandas operativas 01 v1.1/v1.2 §3 (XS añadido v1.3); tramos 10 (<500) / 50 (500–2000) / 100 (>2000)',
};

export const RATE_CARD_COP_V1: LegacyRateCard = {
  version: 'cop-v1-nacional-2026-08-25',
  status: 'operativa-mercado-nacional-colombia-pendiente-validacion-ofertas-locales',
  currency: 'COP',
  bands: {
    XS: { minUsdPerHour: 25000, maxUsdPerHour: 35000 },
    N1: { minUsdPerHour: 35000, maxUsdPerHour: 50000 },
    N2: { minUsdPerHour: 50000, maxUsdPerHour: 70000 },
    N3: { minUsdPerHour: 70000, maxUsdPerHour: 95000 },
    N4: { minUsdPerHour: 95000, maxUsdPerHour: 130000 },
  },
  roundingStepUsd: 1000,
  roundingMode: 'tramos-floor-min-ceil-max',
  minProjectUsd: 0,
  sourceRef:
    'mercado nacional colombiano: salario mid dev COL ≈ COP 8–12M/mes (doc-03 §empleo local) → freelance local compite por debajo del contratista internacional; confidence inferred hasta validar con ofertas reales',
};

export const TRM_REFERENCIA = {
  usdCop: 4000,
  fecha: '2026-08-25',
  reglaEs:
    'Solo informativa para conversión de presentación. Los precios COP se fijan contra el mercado nacional (más económicos), jamás derivados de la conversión USD.',
} as const;

export const LAUNCH_PROGRAM = {
  id: 'primeros-clientes',
  discountPct: 25,
  alcanceEs:
    'Primeros 5 proyectos cerrados o hasta 2026-12-31 (lo que ocurra primero). Acumulable solo con lote; no acumula con urgencia ni con recurrente.',
  activo: true,
} as const;
