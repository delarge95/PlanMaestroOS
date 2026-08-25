// src/data/fitness/anatomy/anatomyHierarchy.ts
// AG-ANATOM — jerarquía anatómica EXPLÍCITA (ciclo 7, mandato usuario).
// Define los CONJUNTOS y SUBCONJUNTOS con criterio anatómico/kinesiológico,
// NO derivados de tokens de nombre.
//
// NIVELES:
//   Región (Miembro superior, Miembro inferior, …)
//   → Grupo anatómico (Hombro, Brazo, Muslo posterior, …)
//   → Estructura (mus-deltoideus-anterior, mus-triceps-brachii, …)
//   → Pieza (claves model:name del compuesto)
//
// La selección sigue esta jerarquía: 1er click = estructura, 2º click =
// grupo anatómico, 3º click = región. Doble click = aislar el nivel actual.

import type { BodyZone } from './types';

/**
 * Grupo anatómico: agrupa estructuras que funcionalmente pertenecen juntas.
 * p.ej. "Deltoideus" agrupa las 3 cabezas; "Manguito Rotador" agrupa
 * supraespinoso + infraespinoso + redondo menor + subescapular.
 */
export interface AnatomyGroup {
  /** id estable del grupo (para breadcrumb y aislamiento). */
  id: string;
  /** Nombre en español para la UI. */
  label: string;
  /** IDs de estructuras del grafo que pertenecen a este grupo. */
  structureIds: string[];
  /** Zona principal (para filtrado). */
  zone: BodyZone;
}

/**
 * Jerarquía anatómica: grupo → estructuras.
 * DEFINIDA MANUALMENTE con criterio anatómico/kinesiológico.
 * Los structureIds deben existir en ANATOMY_STRUCTURES.
 */
export const ANATOMY_GROUPS: AnatomyGroup[] = [
  // ── HOMBRO ────────────────────────────────────────────────────────────────
  { id: 'grp-deltoideus', label: 'Deltoideus', zone: 'shoulder', structureIds: [
    'mus-deltoideus-anterior', 'mus-deltoideus-medius', 'mus-deltoideus-posterior',
  ]},
  { id: 'grp-manguito-rotador', label: 'Manguito Rotador', zone: 'shoulder', structureIds: [
    'mus-supraspinatus', 'mus-infraspinatus', 'mus-teres-minor', 'mus-subscapularis',
  ]},
  { id: 'grp-pectoral-girdle-muscles', label: 'Cintura Escapular', zone: 'shoulder', structureIds: [
    'mus-trapezius', 'mus-serratus-anterior', 'mus-levator-scapulae',
    'mus-rhomboid-major', 'mus-rhomboid-minor', 'mus-pectoralis-minor',
  ]},

  // ── BRAZO ─────────────────────────────────────────────────────────────────
  { id: 'grp-biceps', label: 'Bíceps Braquial', zone: 'arm', structureIds: [
    'mus-biceps-brachii',
  ]},
  { id: 'grp-triceps', label: 'Tríceps Braquial', zone: 'arm', structureIds: [
    'mus-triceps-brachii',
  ]},
  { id: 'grp-brazo-anterior', label: 'Brazo anterior', zone: 'arm', structureIds: [
    'mus-biceps-brachii', 'mus-brachialis', 'mus-coracobrachialis',
  ]},
  { id: 'grp-brazo-posterior', label: 'Brazo posterior', zone: 'arm', structureIds: [
    'mus-triceps-brachii',
  ]},

  // ── ANTEBRAZO ─────────────────────────────────────────────────────────────
  { id: 'grp-antebrazo-flexores', label: 'Flexores del antebrazo', zone: 'forearm-hand', structureIds: [
    'mus-flexor-carpi-radialis', 'mus-flexor-carpi-ulnaris', 'mus-flexor-digitorum-superficialis',
    'mus-flexor-digitorum-profundus', 'mus-flexor-pollicis-longus', 'mus-pronator-teres',
    'mus-pronator-quadratus', 'mus-palmaris-longus',
  ]},
  { id: 'grp-antebrazo-extensores', label: 'Extensores del antebrazo', zone: 'forearm-hand', structureIds: [
    'mus-extensor-carpi-radialis-longus', 'mus-extensor-carpi-radialis-brevis',
    'mus-extensor-carpi-ulnaris', 'mus-extensor-digitorum', 'mus-extensor-digiti-minimi',
    'mus-extensor-pollicis-longus', 'mus-extensor-pollicis-brevis', 'mus-extensor-indicis',
    'mus-abductor-pollicis-longus', 'mus-supinator', 'mus-anconeus',
  ]},

  // ── PECHO ─────────────────────────────────────────────────────────────────
  { id: 'grp-pectoral', label: 'Pectoral', zone: 'chest', structureIds: [
    'mus-pectoralis-major', 'mus-pectoralis-minor',
  ]},

  // ── ESPALDA ───────────────────────────────────────────────────────────────
  { id: 'grp-espalda-superficial', label: 'Espalda superficial', zone: 'back', structureIds: [
    'mus-latissimus-dorsi', 'mus-trapezius',
  ]},

  // ── CADERA / GLÚTEO ───────────────────────────────────────────────────────
  { id: 'grp-gluteos', label: 'Glúteos', zone: 'hip', structureIds: [
    'mus-gluteus-maximus', 'mus-gluteus-medius', 'mus-gluteus-minimus',
  ]},
  { id: 'grp-rotadores-cadera', label: 'Rotadores profundos de cadera', zone: 'hip', structureIds: [
    'mus-piriformis', 'mus-obturator-internus', 'mus-superior-gemellus', 'mus-inferior-gemellus',
    'mus-quadratus-femoris',
  ]},

  // ── MUSLO ANTERIOR (CUÁDRICEPS) ────────────────────────────────────────────
  { id: 'grp-cuadriceps', label: 'Cuádriceps Femoral', zone: 'thigh', structureIds: [
    'mus-rectus-femoris', 'mus-vastus-lateralis', 'mus-vastus-medialis', 'mus-vastus-intermedius',
  ]},
  { id: 'grp-muslo-anterior-otros', label: 'Flexores de cadera', zone: 'thigh', structureIds: [
    'mus-psoas-major', 'mus-sartorius', 'mus-pectineus',
  ]},

  // ── MUSLO POSTERIOR (ISQUIOTIBIALES) ───────────────────────────────────────
  { id: 'grp-isquiotibiales', label: 'Isquiotibiales', zone: 'thigh', structureIds: [
    'mus-biceps-femoris', 'mus-semitendinosus', 'mus-semimembranosus',
  ]},
  { id: 'grp-muslo-medial', label: 'Aductores', zone: 'thigh', structureIds: [
    'mus-adductor-magnus', 'mus-adductor-longus', 'mus-adductor-brevis', 'mus-gracilis',
  ]},

  // ── PIERNA ────────────────────────────────────────────────────────────────
  { id: 'grp-triceps-surae', label: 'Tríceps Sural (gemelos + sóleo)', zone: 'lower-leg', structureIds: [
    'mus-gastrocnemius', 'mus-soleus',
  ]},
  { id: 'grp-pierna-posterior-profundo', label: 'Pierna posterior profunda', zone: 'lower-leg', structureIds: [
    'mus-tibialis-posterior', 'mus-flexor-digitorum-longus', 'mus-flexor-hallucis-longus',
  ]},
  { id: 'grp-pierna-anterior', label: 'Pierna anterior', zone: 'lower-leg', structureIds: [
    'mus-tibialis-anterior', 'mus-extensor-digitorum-longus', 'mus-extensor-hallucis-longus',
    'mus-fibularis-tertius',
  ]},
  { id: 'grp-fibulares', label: 'Fibulares (peroneos)', zone: 'lower-leg', structureIds: [
    'mus-fibularis-longus', 'mus-fibularis-brevis',
  ]},
];

/**
 * Índice: structureId → grupo(s) al que pertenece.
 * Una estructura puede pertenecer a varios grupos (p.ej. el bíceps está en
 * "Bíceps Braquial" y en "Brazo anterior").
 */
export function groupsForStructure(structureId: string): AnatomyGroup[] {
  return ANATOMY_GROUPS.filter((g) => g.structureIds.includes(structureId));
}

/** El grupo MÁS ESPECÍFICO (el que tiene menos estructuras) para una estructura. */
export function primaryGroup(structureId: string): AnatomyGroup | undefined {
  const matches = groupsForStructure(structureId);
  if (!matches.length) return undefined;
  return matches.reduce((a, b) => (a.structureIds.length <= b.structureIds.length ? a : b));
}
