// src/data/services/types.ts — AG-SERV
// Contratos del catálogo de servicios. Fuente narrativa: docs/servicios/00_METODOLOGIA.md + catálogos 01-07.

export type ComplexityTier = "S" | "M" | "L" | "XL";

export const COMPLEXITY_TIERS: readonly ComplexityTier[] = ["S", "M", "L", "XL"];

export type RateClassId = "ART" | "RT" | "AI" | "TL";

export interface HourRange {
  min: number;
  max: number;
}

export interface CostRange {
  minUsd: number;
  maxUsd: number;
}

export interface RateClass {
  id: RateClassId;
  label: string;
  minUsdPerHour: number;
  maxUsdPerHour: number;
  derivationRef: string;
}

/** undefined en un tier = ese tier no aplica para la subtarea */
export type HoursByTier = Partial<Record<ComplexityTier, HourRange>>;

export interface Subtask {
  id: string;
  name: string;
  rateClass: RateClassId;
  hoursByTier: HoursByTier;
  drivers?: readonly string[];
  /** Las opcionales se omiten si el tier no les aplica sin invalidar la tarea (p. ej. rig en proyecto sin personaje). */
  optional?: boolean;
}

/** Las tareas compuestas (pipeline realtime B1-B4) referencian módulos por id. */
export interface ServiceTask {
  id: string;
  familyId: string;
  name: string;
  deliverable?: string;
  moduleIds?: readonly string[];
  subtasks?: readonly Subtask[];
  note?: string;
}

export interface Family {
  id: string;
  name: string;
  summary: string;
}

export interface CadPieceClass {
  id: "primitiva" | "curva" | "compleja";
  label: string;
  definition: string;
  hoursPerPiece: HourRange;
  rateClass: RateClassId;
}

export interface CadPieceCount {
  pieceClassId: CadPieceClass["id"];
  quantity: number;
}

export interface PackageCompositionEntry {
  taskId: string;
  tier: ComplexityTier;
  count?: number;
  /** descuento por pack sobre esta entrada (p. ej. 3er shot en adelante) */
  packDiscountPct?: number;
}

export interface ServicePackage {
  id: string;
  name: string;
  composition: readonly PackageCompositionEntry[];
  includes: string;
  durationWeeks: string;
  bundleDiscountPct: number;
}

export interface Estimate {
  hours: HourRange;
  costUsd: CostRange;
}

export interface PackageEstimate {
  raw: Estimate;
  published: Estimate;
}
