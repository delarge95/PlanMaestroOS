// src/data/services/packages.ts — AG-SERV
// Paquetes comerciales v1 (doc §4). Rangos publicados SIEMPRE via estimatePackage().

import type { ServicePackage } from "./types";

export const PACKAGES: readonly ServicePackage[] = [
  {
    id: "PK-01",
    name: "Hero Renders",
    includes: "3 imágenes render misma escena (mix S/M), post incluida.",
    composition: [{ taskId: "A1", tier: "M" }],
    durationWeeks: "2",
    bundleDiscountPct: 10,
  },
  {
    id: "PK-02",
    name: "Turntable de Producto",
    includes: "Asset realtime estático + visor embebido en web.",
    composition: [
      { taskId: "B1", tier: "M" },
      { taskId: "C1", tier: "M" },
    ],
    durationWeeks: "3",
    bundleDiscountPct: 10,
  },
  {
    id: "PK-03",
    name: "Exploded Experience",
    includes: "CAD→WebGL + vista explosionada + callouts + visor custom.",
    composition: [
      { taskId: "B7", tier: "M" },
      { taskId: "B6", tier: "M" },
      { taskId: "C2", tier: "M" },
    ],
    durationWeeks: "5",
    bundleDiscountPct: 10,
  },
  {
    id: "PK-04",
    name: "Scrolly Landing",
    includes: "One-page scrollytelling con asset realtime y sincronización de cámara.",
    composition: [
      { taskId: "C4", tier: "M" },
      { taskId: "C2", tier: "M" },
      { taskId: "B1", tier: "M" },
    ],
    durationWeeks: "5",
    bundleDiscountPct: 10,
  },
  {
    id: "PK-05",
    name: "Minijuego Promo",
    includes: "Minijuego web con asset animado propio de la campaña.",
    composition: [
      { taskId: "C5", tier: "M" },
      { taskId: "B3", tier: "M" },
    ],
    durationWeeks: "6",
    bundleDiscountPct: 10,
  },
  {
    id: "PK-06",
    name: "Catálogo Interactivo",
    includes: "Catálogo con visor 3D por ítem + assets estáticos interactuables.",
    composition: [
      { taskId: "C6", tier: "M" },
      { taskId: "B2", tier: "M" },
    ],
    durationWeeks: "5",
    bundleDiscountPct: 10,
  },
  {
    id: "PK-07",
    name: "Asistente IA para tu Web",
    includes: "Chatbot con base de conocimiento, guardrails, widget y worker.",
    composition: [{ taskId: "E1", tier: "M" }],
    durationWeeks: "3",
    bundleDiscountPct: 10,
  },
  {
    id: "PK-08",
    name: "VFX Shot Pack",
    includes: "3 shots de integración 3D sobre footage (mix S/M), -10% pack.",
    composition: [{ taskId: "D1", tier: "M", count: 3, packDiscountPct: 10 }],
    durationWeeks: "6",
    bundleDiscountPct: 10,
  },
  {
    id: "PK-09",
    name: "Web App 3D MVP",
    includes: "Web app 3D recortada (tier M, backend ligero) con deploy y handoff.",
    composition: [{ taskId: "C7", tier: "M" }],
    durationWeeks: "6",
    bundleDiscountPct: 10,
  },
];

/** Retainers de bloque horario prepagado (F5): precio directo a clase RT mezcla, no pasa por subtareas. */
export const RETAINER_BLOCKS: readonly {
  hours: number;
  discountPct: number;
  priceUsd: { minUsd: number; maxUsd: number };
}[] = [
  { hours: 20, discountPct: 10, priceUsd: { minUsd: 450, maxUsd: 810 } },
  { hours: 40, discountPct: 12, priceUsd: { minUsd: 985, maxUsd: 1585 } },
  { hours: 80, discountPct: 15, priceUsd: { minUsd: 1900, maxUsd: 3060 } },
];
