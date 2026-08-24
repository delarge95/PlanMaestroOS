// src/data/fitness/anatomyGraph.ts
// AG-ANATOM — grafo anatómico central (ficha §3.2B, entrega Fase 1).
// Entidades Muscle/Tendon/Nerve/Joint/Bone/Ligament alimentadas por
// src/data/fitness/anatomy/** (generadas desde las fichas JSON recuperadas por
// AG-BIB + inventario GLB) y conectadas a exerciseDatabase (READ de AG-FIT).
//
// Regla §0: toda afirmación anatómica lleva sourceRefs; lo aún no verificado
// contra Gray's/Moore/Norkin queda marcado pending (TODO-cita).

import type {
  AnatomyStructure,
  AnatomyModelInfo,
  BodyZone,
  JointEntry,
  LigamentEntry,
  MuscleEntry,
  NerveEntry,
  StructureKind,
  TendonEntry,
  BoneEntry,
} from './anatomy/types';
import { BODY_ZONES, BODY_ZONE_LABELS_ES } from './anatomy/types';
import { MUSCLES } from './anatomy/muscles';
import { TENDONS } from './anatomy/tendons';
import { NERVES } from './anatomy/nerves';
import { JOINTS } from './anatomy/joints';
import { BONES } from './anatomy/bones';
import { LIGAMENTS } from './anatomy/ligaments';
import { ANATOMY_MODELS } from './anatomy/modelCatalog';
import { MESH_INDEX } from './anatomy/meshIndex';
import { exerciseDatabase } from '../exercises/exerciseData';

export { BODY_ZONES, BODY_ZONE_LABELS_ES, ANATOMY_MODELS, MESH_INDEX };
export type {
  AnatomyStructure, AnatomyModelInfo, BodyZone, MuscleEntry, TendonEntry,
  NerveEntry, JointEntry, BoneEntry, LigamentEntry, StructureKind,
};

// ── Índices ───────────────────────────────────────────────────────────────────

export const ANATOMY_STRUCTURES: AnatomyStructure[] = [
  ...MUSCLES, ...TENDONS, ...NERVES, ...JOINTS, ...BONES, ...LIGAMENTS,
];

const byId = new Map<string, AnatomyStructure>(ANATOMY_STRUCTURES.map((s) => [s.id, s]));
const byLegacy = new Map<string, AnatomyStructure>(
  ANATOMY_STRUCTURES.filter((s) => s.legacyId).map((s) => [s.legacyId as string, s]),
);

export function getStructureById(id: string): AnatomyStructure | undefined {
  return byId.get(id) ?? byLegacy.get(id);
}

export function getStructuresByZone(zone: BodyZone, kinds?: StructureKind[]): AnatomyStructure[] {
  return ANATOMY_STRUCTURES.filter(
    (s) => (s.zone === zone || s.zones?.includes(zone)) && (!kinds || kinds.includes(s.kind)),
  );
}

export function getStructuresByKind(kind: StructureKind): AnatomyStructure[] {
  return ANATOMY_STRUCTURES.filter((s) => s.kind === kind);
}

export function getMuscles(zone?: BodyZone): MuscleEntry[] {
  return zone ? (getStructuresByZone(zone, ['muscle']) as MuscleEntry[]) : MUSCLES;
}

export function getTendons(zone?: BodyZone): TendonEntry[] {
  return zone ? (getStructuresByZone(zone, ['tendon']) as TendonEntry[]) : TENDONS;
}

export function getNerves(zone?: BodyZone): NerveEntry[] {
  return zone ? (getStructuresByZone(zone, ['nerve']) as NerveEntry[]) : NERVES;
}

export function getJoints(zone?: BodyZone): JointEntry[] {
  return zone ? (getStructuresByZone(zone, ['joint']) as JointEntry[]) : JOINTS;
}

export function getLigaments(zone?: BodyZone): LigamentEntry[] {
  return zone ? (getStructuresByZone(zone, ['ligament']) as LigamentEntry[]) : LIGAMENTS;
}

export function getBones(zone?: BodyZone): BoneEntry[] {
  return zone ? (getStructuresByZone(zone, ['bone']) as BoneEntry[]) : BONES;
}

/** Estructuras con mapping al modelo dado (para el selector del visor 3D). */
export function getStructuresForModel(modelKey: string): AnatomyStructure[] {
  return ANATOMY_STRUCTURES.filter((s) => (s.modelMeshes[modelKey]?.length ?? 0) > 0);
}

/** Nombres de nodo/mesh a resaltar para una estructura en un modelo. */
export function resolveHighlightNames(structure: AnatomyStructure, modelKey: string): string[] {
  return structure.modelMeshes[modelKey] ?? [];
}

/** Busca texto libre contra nombre ES/EN/sinónimos. */
export function searchStructures(query: string, limit = 40): AnatomyStructure[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const out: AnatomyStructure[] = [];
  for (const s of ANATOMY_STRUCTURES) {
    const hay = [s.nameEs, s.nameEn, ...s.synonyms].join(' ').toLowerCase();
    if (hay.includes(q)) {
      out.push(s);
      if (out.length >= limit) break;
    }
  }
  return out;
}

// ── Acciones musculares (categorización "por acción" para la UI) ──────────────

export const MUSCLE_ACTION_LABELS_ES: Record<string, string> = {
  flexor: 'Flexores', extensor: 'Extensores', abductor: 'Abductores', adductor: 'Aductores',
  rotator: 'Rotadores', stabilizer: 'Estabilizadores', elevator: 'Elevadores', depressor: 'Depresores',
  protractor: 'Protrusores', retractor: 'Retrusores', pronator: 'Pronadores', supinator: 'Supinadores',
  invertor: 'Inversores', evertor: 'Eversores', respiratory: 'Respiratorios', masticator: 'Masticatorios',
};

export function getMusclesByAction(tag: string, zone?: BodyZone): MuscleEntry[] {
  return getMuscles(zone).filter((m) => m.actionTags.includes(tag));
}

// ── Vinculación con ejercicios (READ sobre exerciseDatabase de AG-FIT) ────────
// El vocabulario de músculos del dataset de ejercicios es informal ("Pectorals",
// "Lats", "Rear Delts", "Pecho"…): se normaliza con sinónimos propios de este grafo.

const normalize = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();

/** tokens del dataset de ejercicios que cargan cada familia muscular. */
const MUSCLE_TOKEN_SYNONYMS: Record<string, string[]> = {
  'pectoralis major': ['pectorals', 'pecho', 'chest'],
  'pectoralis minor': ['pectorals', 'pecho'],
  'deltoid': ['deltoids', 'deltoid', 'deltoides', 'shoulders'],
  'anterior deltoid': ['anterior deltoid', 'anterior deltoids'],
  'lateral deltoid': ['lateral deltoids', 'deltoides lateral'],
  'posterior deltoid': ['posterior deltoid', 'posterior deltoids', 'rear deltoids', 'rear delts', 'deltoides posterior'],
  'supraspinatus': ['rotator cuff'],
  'infraspinatus': ['rotator cuff', 'external rotators', 'rotator cuff external rotators'],
  'teres minor': ['rotator cuff', 'external rotators'],
  'subscapularis': ['rotator cuff'],
  'latissimus dorsi': ['lats', 'dorsales', 'latissimus dorsi teres major', 'mid back', 'upper back', 'espalda media'],
  'teres major': ['teres major', 'lats'],
  'trapezius': ['trapezius', 'upper trapezius', 'mid trapezius', 'mid trapezius', 'trapezius mid', 'trapezius upper', 'trapezius lower', 'trapezius lower and mid'],
  'rhomboids': ['rhomboids', 'scapular retractors', 'mid back'],
  'serratus anterior': ['serratus anterior', 'scapular muscles'],
  'biceps brachii': ['biceps', 'biceps brachii', 'biceps long head', 'biceps especially long head', 'biceps especially short head'],
  'brachialis': ['brachialis', 'biceps'],
  'triceps brachii': ['triceps', 'triceps brachii group', 'triceps long head', 'triceps lateral head', 'triceps lateral and medial head', 'triceps especially long head'],
  'brachioradialis': ['brachioradialis', 'forearms', 'forearm group', 'forearm grip'],
  'forearm flexors': ['forearm flexors', 'forearms', 'forearm group'],
  'forearm extensors': ['forearm extensors', 'forearms', 'forearm group'],
  'rectus abdominis': ['rectus abdominis', 'abdominales', 'core', 'lower abdominals', 'rectus abdominis lower'],
  'obliques': ['obliques', 'core'],
  'transversus abdominis': ['transverse abdominis', 'core'],
  'erector spinae': ['erector spinae', 'back extensors', 'espalda media'],
  'gluteus maximus': ['glutes', 'gluteus maximus', 'gluteos', 'gluteal region'],
  'gluteus medius': ['gluteus medius', 'glutes', 'gluteal region'],
  'gluteus minimus': ['gluteus minimus', 'glutes', 'gluteal region'],
  'tensor fasciae latae': ['tensor fasciae latae tfl', 'tensor fasciae latae', 'hip flexors'],
  'iliopsoas': ['hip flexors', 'iliopsoas'],
  'rectus femoris': ['quadriceps', 'cuadriceps', 'quadriceps femoris', 'quadriceps especially rectus femoris'],
  'vastus lateralis': ['quadriceps', 'cuadriceps', 'quadriceps femoris'],
  'vastus medialis': ['quadriceps', 'cuadriceps', 'quadriceps femoris'],
  'vastus intermedius': ['quadriceps', 'cuadriceps', 'quadriceps femoris'],
  'biceps femoris': ['hamstrings', 'hamstring group'],
  'semitendinosus': ['hamstrings', 'hamstring group'],
  'semimembranosus': ['hamstrings', 'hamstring group'],
  'adductor longus': ['adductors'],
  'adductor magnus': ['adductors'],
  'gracilis': ['adductors'],
  'gastrocnemius': ['gastrocnemius', 'calf group'],
  'soleus': ['soleus', 'calf group'],
  'tibialis anterior': ['tibialis'],
  'quadriceps femoris': ['quadriceps', 'cuadriceps', 'quadriceps femoris'],
  'hamstrings': ['hamstrings', 'hamstring group'],
  'rotator cuff': ['rotator cuff', 'rotator cuff external rotators', 'external rotators'],
};

// índice token→ejercicios (se construye una vez)
const tokenIndex: Map<string, { name: string; strength: boolean }[]> = (() => {
  const idx = new Map<string, { name: string; strength: boolean }[]>();
  const add = (token: string, name: string, strength: boolean) => {
    const t = normalize(token);
    if (!t) return;
    const arr = idx.get(t) ?? [];
    if (!arr.some((e) => e.name === name && e.strength === strength)) arr.push({ name, strength });
    idx.set(t, arr);
  };
  for (const [name, info] of Object.entries(exerciseDatabase)) {
    for (const m of info.muscles?.strength ?? []) add(m, name, true);
    for (const m of info.muscles?.stability ?? []) add(m, name, false);
  }
  return idx;
})();

export interface ExerciseLink {
  name: string;
  strength: boolean;
}

const sortExerciseLinks = (links: ExerciseLink[]): ExerciseLink[] =>
  [...links.values()].sort((a, b) =>
    a.strength === b.strength ? a.name.localeCompare(b.name) : a.strength ? -1 : 1,
  );

/**
 * Tokens de exerciseDatabase típicos de cada zona corporal (tarea F2). Fallback
 * para estructuras sin match directo de nombre (tendones, ligamentos,
 * articulaciones, nervios): "ejercicios que la cargan" vía zona del grafo.
 */
const ZONE_EXERCISE_TOKENS: Partial<Record<BodyZone, string[]>> = {
  cervical: ['Neck Flexors', 'Neck Extensors', 'Cervical Spine Stabilizers', 'Upper Trapezius'],
  shoulder: ['Deltoid Group', 'Rotator Cuff', 'Anterior Deltoids', 'Posterior Deltoid', 'Lateral Deltoids', 'Scapular Stabilizers', 'Shoulder Girdle'],
  chest: ['Pectoralis Major', 'Pectorals', 'Serratus Anterior'],
  back: ['Latissimus Dorsi & Teres Major', 'Lats', 'Trapezius & Rhomboids', 'Trapezius', 'Rhomboids', 'Scapular & Thoracic Muscles'],
  arm: ['Triceps Brachii Group', 'Triceps', 'Biceps Brachii', 'Biceps', 'Brachialis'],
  'forearm-hand': ['Forearm Group', 'Forearms', 'Grip', 'Wrist Stabilizers', 'Hand Muscles'],
  core: ['Core', 'Rectus Abdominis', 'Obliques', 'Transverse Abdominis'],
  spine: ['Erector Spinae', 'Spinal Erectors', 'Lower Back'],
  hip: ['Glutes', 'Gluteal Region', 'Gluteus Medius', 'Hip Flexors', 'Adductors'],
  thigh: ['Quadriceps Femoris', 'Quadriceps', 'Hamstrings', 'Hamstring Group', 'Glutes'],
  knee: ['Quadriceps Femoris', 'Quadriceps', 'Hamstrings', 'Hamstring Group'],
  'lower-leg': ['Calf Group', 'Gastrocnemius', 'Soleus'],
  'ankle-foot': ['Calf Group', 'Soleus', 'Ankle Stabilizers', 'Ankle and Foot Stabilizers'],
};

/** Ejercicios del exerciseDatabase (READ) que cargan la zona corporal dada. */
export function findExercisesForZone(zone: BodyZone, limit = 12): ExerciseLink[] {
  const out = new Map<string, ExerciseLink>();
  for (const token of ZONE_EXERCISE_TOKENS[zone] ?? []) {
    for (const h of tokenIndex.get(normalize(token)) ?? []) {
      const prev = out.get(h.name);
      if (!prev) out.set(h.name, { name: h.name, strength: h.strength });
      else if (h.strength) prev.strength = true;
    }
  }
  return sortExerciseLinks(out).slice(0, limit);
}

/** Ejercicios del exerciseDatabase (READ) que cargan el músculo/estructura dada. */
export function findExercisesForMuscle(muscle: MuscleEntry | TendonEntry | AnatomyStructure, limit = 12): ExerciseLink[] {
  const en = normalize(muscle.nameEn);
  const tokens = new Set<string>([en, ...(MUSCLE_TOKEN_SYNONYMS[en] ?? [])]);
  for (const syn of muscle.synonyms) {
    const s = normalize(syn);
    if (s && s !== en) tokens.add(s);
  }
  const out = new Map<string, ExerciseLink>();
  for (const token of tokens) {
    const hits = tokenIndex.get(token) ?? [];
    for (const h of hits) {
      const prev = out.get(h.name);
      if (!prev) out.set(h.name, { name: h.name, strength: h.strength });
      else if (h.strength) prev.strength = true;
    }
  }
  return sortExerciseLinks(out).slice(0, limit);
}

/** Modelo GLB con más meshes de la estructura (para visor/miniatura). */
export function bestModelKeyForStructure(structure: AnatomyStructure): string | undefined {
  const models = Object.keys(structure.modelMeshes);
  if (!models.length) return undefined;
  return models.reduce((a, b) =>
    (structure.modelMeshes[b]?.length ?? 0) > (structure.modelMeshes[a]?.length ?? 0) ? b : a,
  );
}

/** URL del visor 3D con modelo+estructura preseleccionados. */
export function anatomyViewerUrl(structure: AnatomyStructure): string | undefined {
  const best = bestModelKeyForStructure(structure);
  if (!best) return undefined;
  return `/app/fitness/anatomy?model=${encodeURIComponent(best)}&structure=${encodeURIComponent(structure.id)}`;
}

// ── Estadísticas (footer UI + STATUS) ─────────────────────────────────────────

export function anatomyGraphStats() {
  const byKind = (k: StructureKind) => ANATOMY_STRUCTURES.filter((s) => s.kind === k).length;
  const withModel = ANATOMY_STRUCTURES.filter((s) => Object.keys(s.modelMeshes).length > 0).length;
  const pendingCitation = ANATOMY_STRUCTURES.filter((s) => s.sourceRefs.some((r) => r.pending || r.sourceId === 'TODO-cita')).length;
  return {
    muscles: byKind('muscle'), tendons: byKind('tendon'), nerves: byKind('nerve'),
    joints: byKind('joint'), bones: byKind('bone'), ligaments: byKind('ligament'),
    total: ANATOMY_STRUCTURES.length, with3dMapping: withModel, pendingCitation,
    models: ANATOMY_MODELS.length,
  };
}
