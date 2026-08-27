// src/data/fitness/anatomy/types.ts
// AG-ANATOM — contratos del grafo anatómico (ficha §3.2B).
// Los datos viven en muscles.ts/tendons.ts/nerves.ts/joints.ts/bones.ts/ligaments.ts
// (generados por rag/anatomy/scripts/build-anatomy-data.mjs desde las fichas JSON
// recuperadas por AG-BIB + inventario GLB). Las consultas viven en anatomyGraph.ts.

/** Regiones corporales para navegación (UI Músculos + visor 3D). */
export type BodyZone =
  | 'head-jaw'
  | 'cervical'
  | 'shoulder'
  | 'chest'
  | 'back'
  | 'arm'
  | 'forearm-hand'
  | 'core'
  | 'spine'
  | 'hip'
  | 'thigh'
  | 'knee'
  | 'lower-leg'
  | 'ankle-foot';

export const BODY_ZONES: BodyZone[] = [
  'head-jaw',
  'cervical',
  'shoulder',
  'chest',
  'back',
  'arm',
  'forearm-hand',
  'core',
  'spine',
  'hip',
  'thigh',
  'knee',
  'lower-leg',
  'ankle-foot',
];

export const BODY_ZONE_LABELS_ES: Record<BodyZone, string> = {
  'head-jaw': 'Cabeza / Mandíbula',
  cervical: 'Cuello / Cervical',
  shoulder: 'Hombro',
  chest: 'Pecho',
  back: 'Espalda alta / Escápula',
  arm: 'Brazo / Codo',
  'forearm-hand': 'Antebrazo / Muñeca / Mano',
  core: 'Core / Abdomen',
  spine: 'Columna',
  hip: 'Cadera / Glúteo',
  thigh: 'Muslo',
  knee: 'Rodilla',
  'lower-leg': 'Pierna (bajo rodilla)',
  'ankle-foot': 'Tobillo / Pie',
};

export type StructureKind = 'muscle' | 'tendon' | 'nerve' | 'joint' | 'bone' | 'ligament';

/**
 * Cita de fuente. Mientras no se verifique contra Gray's/Moore/Norkin (extracción
 * Gemini pendiente), la ficha se registra con `pending: true` (TODO-cita) — regla §0:
 * ningún dato anatómico sin trazabilidad o marcado explícito como placeholder.
 */
export interface SourceRef {
  sourceId: string;
  locator?: string;
  note?: string;
  /** true = dato importado de fichas recuperadas, aún no verificado contra la bíblia citada. */
  pending?: boolean;
}

/** Referencia de sourceRef a la exportación del chat de fichas (AG-BIB, 2026-08-22). */
export const FICHAS_SOURCE: SourceRef = {
  sourceId: 'chat-1787414859303-atlas-anatomico-fichas',
  note: 'Fichas JSON de atlas anatómico recuperadas por AG-BIB (biblioteca/extracciones/). Verificación capítulo/página contra Gray\'s/Moore/MacIntosh PENDIENTE (plan Gemini, rag/anatomy/extracciones/plan-extraccion.md).',
  pending: true,
};

/** Mapping estructura → nombres de nodo/mesh dentro de cada modelo GLB. */
export type ModelMeshes = Record<string, string[]>;

export interface AnatomyStructureBase {
  /** Slug estable: mus-|ten-|ner-|art-|bone-|lig- + kebab(nameEn). */
  id: string;
  /** ID del dataset original (MUS-001, TEN-004, ART-PAT…) para relaciones cruzadas. */
  legacyId?: string;
  kind: StructureKind;
  /** Nombre científico normalizado en inglés (cruza con exerciseDatabase). */
  nameEn: string;
  /** Nombre común en español (principal en UI). */
  nameEs: string;
  synonyms: string[];
  /** Zona principal de navegación. */
  zone: BodyZone;
  /** Zonas secundarias (un isquio es hip Y knee). */
  zones?: BodyZone[];
  modelMeshes: ModelMeshes;
  sourceRefs: SourceRef[];
}

export interface MuscleEntry extends AnatomyStructureBase {
  kind: 'muscle';
  origin: string;
  insertion: string;
  innervation: string;
  action: string[];
  /** Etiquetas de acción normalizadas para filtrar (flexor, extensor, abductor…). */
  actionTags: string[];
  biomechanicalRole: string;
  aesthetics?: string;
  /** Ejercicios citados por la ficha (texto libre ES). */
  trainingExercises: string[];
  /** Errores/ejercicios de riesgo citados por la ficha. */
  riskExercises: string[];
  synergists: string[]; // ids de músculos (mus-*)
  antagonists: string[]; // ids de músculos (mus-*)
  /** true si aparece en la BD de músculos de entrenamiento existente (muscleData). */
  primaryForTraining: boolean;
  wikiEn?: string;
}

export interface TendonEntry extends AnatomyStructureBase {
  kind: 'tendon';
  insertion: string;
  /** Músculos que lo forman (ids mus-*). */
  muscles: string[];
  injuries: string;
  rehab: string[];
  risks: string[];
  wikiEn?: string;
}

export interface NerveEntry extends AnatomyStructureBase {
  kind: 'nerve';
  /** Sitio típico de atrapamiento/compresión (texto de la ficha). */
  entrapmentSite: string;
  innervates: string;
  symptoms: string;
  lesionContext: string;
  rehab: string[];
  risks: string[];
  /** Estructuras relacionadas (ids legados ART-/MUS- resueltos a slugs). */
  relatedStructures: string[];
  wikiEn?: string;
}

/**
 * Rango de movimiento de UN movimiento/eje articular, verificado contra fuente
 * (Levangie & Norkin 6ª ed — pendiente #4 del STATUS, ciclo 4). La capa de
 * texto del PDF no conserva páginas estables: el locator cita capítulo (y
 * sección cuando aplica), convención ya usada por los chunks `njs6-*` del RAG.
 */
export interface JointRomEntry {
  /** Movimiento (p.ej. "Flexión", "Rotación externa", "Apertura bucal"). */
  motion: string;
  /** Valor con unidad tal cual la fuente (p.ej. "100°–120°", "40–50 mm"). */
  value: string;
  /** Condición de medición (p.ej. "con rodilla flexionada", "codo a 90°"). */
  condition?: string;
  sourceRefs: SourceRef[];
}

export interface JointEntry extends AnatomyStructureBase {
  kind: 'joint';
  jointType: string;
  bones: string;
  movements: string;
  /** ROM numérico por eje: pendiente de verificación Norkin/Levangie (TODO-cita). */
  romNote?: string;
  /** ROM verificado por movimiento con cita (jointRom.ts; ciclo 4). */
  rom?: JointRomEntry[];
  stabilizers: string;
  lesions: string;
  rehab: string[];
  /** Movimientos/ejercicios de riesgo bajo carga (ficha). */
  riskyUnderLoad: string[];
  relatedStructures: string[];
  wikiEn?: string;
}

export interface BoneEntry extends AnatomyStructureBase {
  kind: 'bone';
  /** Nota funcional breve (relevancia para entrenamiento). */
  note?: string;
}

export interface LigamentEntry extends AnatomyStructureBase {
  kind: 'ligament';
  /** Articulación a la que estabiliza (id art-*). */
  jointId?: string;
  note?: string;
}

export type AnatomyStructure =
  | MuscleEntry
  | TendonEntry
  | NerveEntry
  | JointEntry
  | BoneEntry
  | LigamentEntry;

export interface AnatomyModelInfo {
  key: string;
  file: string;
  label: string;
  /** MB según inventario GLB. */
  sizeMb: number;
  meshCount: number;
  /** El modelo trae piezas ya desplazadas (explosionadas). */
  exploded?: boolean;
  description: string;
}
