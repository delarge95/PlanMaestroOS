export type Confidence = 'explicit' | 'inferred' | 'qualitative';

export interface NivelCotizable {
  horasMin: number;
  horasMax: number;
  costoMin: number;
  costoMax: number;
  entregaDias: [number, number];
}

export interface DriverPrincipal {
  nombre: string;
  umbrales: string[];
}

export interface AddOn {
  id: string;
  refServicio?: string;
  delta: string;
}

export interface ServicioCotizable {
  id: string;
  familia: string;
  nombre: string;
  unidad: string;
  niveles: NivelCotizable[];
  driverPrincipal: DriverPrincipal;
  confidenceDefault: Confidence;
  addOns: AddOn[];
  modificadores: string[];
}

export interface ResultadoValidacion {
  ok: boolean;
  errores: string[];
  avisos: string[];
}
