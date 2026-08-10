// src/data/notion/schema.ts - Esquemas formales de las 9 bases de datos MVP de Notion

export type AreaStatus = 'Activo' | 'En espera' | 'Archivado';
export type ProjectStatus = 'Idea' | 'Activo' | 'En espera' | 'Terminado' | 'Archivado';
export type TaskStatus = 'Bandeja' | 'Próxima' | 'En curso' | 'Esperando' | 'Hecho' | 'Cancelado';
export type PriorityLevel = 'Alta' | 'Media' | 'Baja';
export type EnergyRequirement = 'Alta' | 'Media' | 'Baja';

export type CareerAppStatus =
  | 'Prospecto'
  | 'Preparar'
  | 'Aplicado'
  | 'Seguimiento'
  | 'Entrevista'
  | 'Oferta'
  | 'Rechazado'
  | 'Cerrado';

export type CareerAssetType = 'CV' | 'Carta' | 'Portfolio' | 'Case Study' | 'Demo Reel';
export type CareerAssetStatus = 'Borrador' | 'En revisión' | 'Aprobado' | 'Archivado';

export type PRType = '1RM' | 'MaxReps' | 'MaxWeight' | 'HoldTime' | 'Volume';

// 1. Areas
export interface NotionAreaPropertyMap {
  Nombre: string;
  Icono?: string;
  Estado: AreaStatus;
  Orden: number;
  DescripcionBreve?: string;
}

// 2. Projects
export interface NotionProjectPropertyMap {
  Nombre: string;
  AreaId: string; // Relación con DB Areas
  Estado: ProjectStatus;
  Objetivo?: string;
  SiguienteAccion?: string;
  Prioridad: PriorityLevel;
  FechaObjetivo?: string;
  RepositorioId?: string; // Relación opcional con repo
  Notas?: string;
}

// 3. Tasks
export interface NotionTaskPropertyMap {
  Titulo: string;
  ProjectId?: string; // Relación con DB Projects
  AreaId: string;    // Relación con DB Areas
  Estado: TaskStatus;
  Prioridad: PriorityLevel;
  Bloque?: string;   // Franja horaria (ej: "09:20-11:40")
  Fecha?: string;
  DuracionEstimadaMin?: number;
  ProximaAccion?: string;
  EnergiaRequerida?: EnergyRequirement;
  Regla10Min: boolean;
  SuficientementeBueno: boolean;
  UrlReferencia?: string;
  Creado: string;
  Actualizado: string;
}

// 4. Daily Plan
export interface NotionDailyPlanPropertyMap {
  Fecha: string; // Key de fecha YYYY-MM-DD
  Top3TaskIds: string[]; // Relación múltiple con DB Tasks
  BloqueA?: string;
  BloqueB?: string;
  Energia?: EnergyRequirement;
  SuenoHoras?: number;
  CheckInAM: boolean;
  CierrePM: boolean;
  Notas?: string;
}

// 5. Career Applications
export interface NotionCareerAppPropertyMap {
  Empresa: string;
  Rol: string;
  Estado: CareerAppStatus;
  Url?: string;
  UbicacionRemoto?: string;
  FechaAplicacion?: string;
  ProximaAccion?: string;
  FechaSeguimiento?: string;
  CvVersion?: string;
  PortfolioVersion?: string;
  ProyectoDestacado?: string;
  Contacto?: string;
  Fuente?: string;
  Notas?: string;
  ConsentimientoEnvio: boolean;
}

// 6. Career Assets
export interface NotionCareerAssetPropertyMap {
  Nombre: string;
  Tipo: CareerAssetType;
  Version: string;
  RolObjetivo?: string;
  Url?: string;
  Estado: CareerAssetStatus;
  UltimaRevision?: string;
  AprobadoParaEnviar: boolean;
}

// 7. Fitness Sessions (Resumen acumulado)
export interface NotionFitnessSessionPropertyMap {
  Fecha: string;
  Programa: string;
  Semana: number;
  Dia: string;
  SesionId: string;
  Completada: boolean;
  RpeSesion?: number;
  Notas?: string;
  FuenteCaptura: 'AppLocal' | 'ManualNotion';
}

// 8. Fitness Measurements
export interface NotionFitnessMeasurementPropertyMap {
  Fecha: string;
  PesoCorporalKg?: number;
  PorcentajeGrasa?: number;
  PerimetrosCm?: Record<string, number>;
  EnergiaSubjetiva?: EnergyRequirement;
  SuenoHoras?: number;
  PrehabCompletado: boolean;
  Notas?: string;
}

// 9. Fitness PR Snapshots
export interface NotionFitnessPRPropertyMap {
  Fecha: string;
  EjercicioCanonico: string;
  Variante?: string;
  TipoPR: PRType;
  Valor: number;
  Unidad: 'kg' | 'reps' | 'seg' | 'volumen';
  SesionId?: string;
  Verificado: boolean;
}
