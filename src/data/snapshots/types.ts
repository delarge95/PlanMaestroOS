// src/data/snapshots/types.ts - Contratos de Snapshots Saneados para Plan Maestro OS

export interface SnapshotMetadata {
  generatedAt: string;       // Timestamp ISO 8601 de generación
  schemaVersion: string;     // Versión del contrato de datos (ej. "1.0.0")
  environment: 'development' | 'production' | 'staging';
  sanitized: true;           // Flag obligatorio: afirma que los datos sensibles fueron removidos
  source: 'notion-api' | 'local-fallback' | 'ci-build';
}

export interface SanitizedAgendaItem {
  id: string;
  title: string;
  timeBlock: string;         // Franja horaria ej: "09:20–11:40"
  priority: 'top1' | 'top2' | 'top3' | 'routine';
  domain: 'fitness' | 'career' | 'clinical' | 'german' | 'general';
  status: 'planned' | 'in_progress' | 'completed' | 'rescheduled';
}

export interface SanitizedAgendaSnapshot {
  metadata: SnapshotMetadata;
  items: SanitizedAgendaItem[];
}

export interface SanitizedFitnessSnapshot {
  metadata: SnapshotMetadata;
  activePrograms: string[];
  completedSessionsCount: number;
  totalVolumeKg: number;
  lastUpdated: string;
}

export interface SanitizedCareerSnapshot {
  metadata: SnapshotMetadata;
  activeApplicationsCount: number;
  pipelineStats: {
    categoryA: number;
    categoryB: number;
    categoryC: number;
    interviewsCount: number;
  };
  lastUpdated: string;
}

export interface MasterSnapshotBundle {
  agenda: SanitizedAgendaSnapshot;
  fitness: SanitizedFitnessSnapshot;
  career: SanitizedCareerSnapshot;
}
