export type LevelId = 'XS' | 'N1' | 'N2' | 'N3' | 'N4';

export const LEVEL_IDS: readonly LevelId[] = ['XS', 'N1', 'N2', 'N3', 'N4'] as const;

export const LEVEL_LABELS: Record<LevelId, string> = {
  XS: 'Micro',
  N1: 'Simple (S)',
  N2: 'Estándar (M)',
  N3: 'Complejo (L)',
  N4: 'Crítico (XL)',
};

export type Currency = 'USD' | 'COP';

export interface HourRange {
  min: number;
  max: number;
}

export type HoursByLevel = Record<LevelId, HourRange>;

export type Confidence = 'explicit' | 'inferred' | 'qualitative';

export type FamilyId =
  | 'render'
  | 'asset-rt'
  | 'web-3d'
  | 'vfx'
  | 'ia'
  | 'datos'
  | 'soporte';

export interface Subtask {
  id: string;
  nameEs: string;
  hours: HoursByLevel;
  optional?: boolean;
  appliesFrom?: LevelId;
}

export interface ServiceDefinition {
  id: string;
  family: FamilyId;
  nameEs: string;
  unitEs: string;
  driversEs: string[];
  confidence: Confidence;
  subtasks: Subtask[];
  sourceDoc: string;
  cotizador?: CotizadorMeta;
}

export interface Band {
  minUsdPerHour: number;
  maxUsdPerHour: number;
}

export type BandsByLevel = Record<LevelId, Band>;

export interface RateCard {
  version: string;
  status: string;
  currency: Currency;
  bands: BandsByLevel;
  roundingStepUsd: number;
  roundingMode: 'ceil-both' | 'tramos-floor-min-ceil-max';
  minProjectUsd: number;
  sourceRef: string;
}

export interface LegacyRateCard extends RateCard {
  roundingMode: 'tramos-floor-min-ceil-max';
}

export interface EstimateLine {
  subtaskId: string;
  hoursMin: number;
  hoursMax: number;
  costMin: number;
  costMax: number;
}

export interface EstimateResult {
  serviceId: string;
  level: LevelId | 'mixed';
  hoursMin: number;
  hoursMax: number;
  costMin: number;
  costMax: number;
  lines: EstimateLine[];
}

export interface DriverPrincipal {
  nombre: string;
  umbrales: string[];
}

export interface AddOnCotizador {
  id: string;
  refServicio?: string;
  delta?: string;
}

export interface CotizadorMeta {
  driverPrincipal: DriverPrincipal;
  addOns: AddOnCotizador[];
}

export interface QuoteModifiers {
  firstClientLaunch?: boolean;
  recurringClient?: boolean;
  batchUnits?: number;
  urgent72h?: boolean;
  critical24h?: boolean;
}

export interface QuoteInputBase {
  currency: Currency;
  modifiers?: QuoteModifiers;
}

export interface ServiceQuoteInput extends QuoteInputBase {
  kind: 'service';
  serviceId: string;
  level: LevelId;
  quantity?: number;
}

export interface PackageQuoteInput extends QuoteInputBase {
  kind: 'package';
  packageId: string;
  componentesOverride?: { serviceId: string; nivel: LevelId; cantidad?: number }[];
  levelByComponent?: Record<string, LevelId>;
  defaultLevel?: LevelId;
  quantity?: number;
}

export type QuoteInput = ServiceQuoteInput | PackageQuoteInput;

export interface QuoteLine {
  refId: string;
  labelEs: string;
  hoursMin: number;
  hoursMax: number;
  costMin: number;
  costMax: number;
}

export interface QuoteResult {
  input: QuoteInput;
  currency: Currency;
  hoursMin: number;
  hoursMax: number;
  subtotalMin: number;
  subtotalMax: number;
  discountPctApplied: number;
  totalMin: number;
  totalMax: number;
  lines: QuoteLine[];
  notesEs: string[];
}
