export type LevelId = 'N1' | 'N2' | 'N3' | 'N4';

export const LEVEL_IDS: readonly LevelId[] = ['N1', 'N2', 'N3', 'N4'] as const;

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
  bands: BandsByLevel;
  roundingStepUsd: number;
  roundingMode: 'ceil-both' | 'tramos-floor-min-ceil-max';
  minProjectUsd: number;
  sourceRef: string;
}

export interface LegacyRateCard extends RateCard {
  roundingMode: 'tramos-floor-min-ceil-max';
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
