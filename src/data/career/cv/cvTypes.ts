// src/data/career/cv/cvTypes.ts — Modelo de datos del generador de CVs.
//
// Fuente única de verdad: docs laborales 17 (base + variantes) y 01 (perfil).
// Regla §0.1: nada inventado — los campos que el doc-17 marca «[verify]» o
// «[por confirmar]» viajan con su flag `needsVerification` para que la UI
// los muestre como pendientes y NUNCA como hechos cerrados.

export interface CvLink {
  label: string;
  url: string;
  /** true = placeholder pendiente de confirmar (doc-17 §2). */
  needsVerification?: boolean;
}

export interface CvProfile {
  fullName: string;
  baseTitle: string;
  location: string;
  availability: string;
  links: CvLink[];
}

export interface CvSkillGroup {
  group: string;
  items: string[];
}

export interface CvProject {
  id: string;
  name: string;
  /** Línea de contexto (rol/stack) bajo el título. */
  meta: string;
  /** Bullets de la versión corta base (doc-17 §3). */
  bullets: string[];
  /** true = proyecto opcional según el doc (incluir solo si es demostrable). */
  optional?: boolean;
}

export interface CvExperience {
  id: string;
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export interface CvEducation {
  id: string;
  degree: string;
  institution: string;
  period?: string;
  bullets: string[];
}

export interface CvLanguageEntry {
  language: string;
  level: string;
}

export interface CvTrainingEntry {
  name: string;
  /** Nota de wording obligatorio del doc-17 §12 (no certificaciones). */
  wordingNote?: string;
}

export interface CvBaseData {
  profile: CvProfile;
  summaryBase: string;
  skills: CvSkillGroup[];
  projects: CvProject[];
  experience: CvExperience[];
  education: CvEducation[];
  languages: CvLanguageEntry[];
  training: CvTrainingEntry[];
}

/**
 * Variante de CV (doc-17 §4–§8): qué título, resumen, énfasis y bullets
 * usar para una familia de roles. Los bullets de proyecto SON de la
 * variante (no se mezclan con los base salvo fallback).
 */
export interface CvVariant {
  id: string;
  name: string;
  targetRoles: string[];
  headerTitle: string;
  summary: string;
  skillsEmphasis: string[];
  skillsDeemphasize: string[];
  /** projectId → bullets específicos de la variante. */
  projectBullets: Record<string, string[]>;
  /** Orden de proyectos para esta variante (ids); los base restantes van detrás. */
  projectOrder?: string[];
  keywords: string[];
  /** Ruta secundaria (doc-17 §8: «use selectively»). */
  secondaryRoute?: boolean;
}
