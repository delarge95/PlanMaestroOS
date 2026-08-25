// src/data/services/rateCard.ts — AG-SERV
// Rate card v1. Derivación citada desde 03_salary_benchmark_and_remote_colombia.md (READ).
// Cambiar precios = nueva versión citando fuente; v1 es el baseline de calibración.

import type { RateClass, RateClassId } from "./types";

export const RATE_CARD_VERSION = "v1";
export const RATE_CARD_CURRENCY = "USD";

export const RATE_CLASSES: readonly RateClass[] = [
  {
    id: "ART",
    label: "Arte & Diseño",
    minUsdPerHour: 25,
    maxUsdPerHour: 38,
    derivationRef:
      "doc-03: freelance global USD 20-50/h; 3D Artist US promedio 82k/ano (~39.5/h) ajustado a contractor LATAM",
  },
  {
    id: "RT",
    label: "Realtime & Dev",
    minUsdPerHour: 28,
    maxUsdPerHour: 45,
    derivationRef:
      "doc-03: Middle Unity Developer Colombia USD 27-35/h (Lemon.io); banda freelance global 20-50/h",
  },
  {
    id: "AI",
    label: "IA & Automatización",
    minUsdPerHour: 35,
    maxUsdPerHour: 55,
    derivationRef:
      "doc-03: Python dev LATAM mid ~46k/ano empleado + prima IA en freelance (extremo alto banda global)",
  },
  {
    id: "TL",
    label: "Dirección Técnica",
    minUsdPerHour: 32,
    maxUsdPerHour: 48,
    derivationRef:
      "doc-03: senior LATAM 55-70k/ano empleado (~26-34/h) x prima contractor 1.25-1.5x",
  },
];

export function getRateClass(id: RateClassId): RateClass {
  const rate = RATE_CLASSES.find((r) => r.id === id);
  if (!rate) {
    throw new Error(`RateClass desconocida: ${id}`);
  }
  return rate;
}
