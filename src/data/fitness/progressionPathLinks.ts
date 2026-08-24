// src/data/fitness/progressionPathLinks.ts
// B4 (AG-FIT): puente progresiones (progressionsData, sistema THENX/OG) →
// rutas de habilidad (skillPaths, sistema SkillsWorkspace de /app/fitness/skills).
// La tarjeta de "Progresión activa" de Hoy enlaza a la RUTA enfocada (NO a la
// base de datos de habilidades).
import { skillPaths } from './skills/skillPaths';

/** Mapa explícito groupId → skillPathId (curado a mano). */
const GROUP_TO_PATH: Record<string, string> = {
  'core-compression': 'path-core-hollow',
  'front-lever': 'path-pull-frontlever',
  'back-lever': 'path-pull-basic',
  'muscle-up': 'path-pull-muscleup',
  'planche': 'path-push-basic',
  'hspu': 'path-push-handstand',
  'pistol-squat': 'path-legs-pistol',
  'ring-support': 'path-support-rings',
  'rings': 'path-support-rings',
  'one-arm-pull': 'path-pull-row'
};

/** Fallback por keyword sobre el título del grupo (Inglés/Español). */
const TITLE_KEYWORDS: Array<[RegExp, string]> = [
  [/front\s*lever/i, 'path-pull-frontlever'],
  [/back\s*lever/i, 'path-pull-basic'],
  [/muscle[\s-]*up/i, 'path-pull-muscleup'],
  [/planche/i, 'path-push-basic'],
  [/hand\s*stand|hspu/i, 'path-push-handstand'],
  [/pistol|pierna|leg/i, 'path-legs-pistol'],
  [/anilla|ring|support/i, 'path-support-rings'],
  [/core|compress|l-?sit|dragon/i, 'path-core-hollow'],
  [/pull|tracci/i, 'path-pull-basic'],
  [/push|empuje|dip/i, 'path-push-dips'],
  [/wrist|movil/i, 'path-mobility-wrist']
];

/**
 * Devuelve el skillPathId enfocable para un grupo de progresión, o null si no
// hay correspondencia razonable (p.ej. programas semanales mw-* de THENX).
 */
export function progressionGroupToPathId(groupId: string, groupTitle = ''): string | null {
  const direct = GROUP_TO_PATH[groupId];
  if (direct && skillPaths.some((p) => p.id === direct)) return direct;

  for (const [re, pathId] of TITLE_KEYWORDS) {
    if (re.test(groupTitle) || re.test(groupId)) {
      if (skillPaths.some((p) => p.id === pathId)) return pathId;
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// B7 (AG-FIT): puente progresión → rutina master del catálogo (tg-master-*).
// Los grupos de progressionsData con masterWorkout THENX tienen una rutina
// equivalente en thenxMasterRoutines (catálogo "Rutinas → Catálogo"). Este
// mapeo alimenta el botón "Activar rutina" + enlace al detalle en la caja de
// cada progresión, y el enlace de vuelta desde el Sheet del catálogo.
// ---------------------------------------------------------------------------

export interface ProgressionRoutineLink {
  /** ID de la rutina en el catálogo (thenxMasterRoutines, clave de getProgramById). */
  routineId: string;
  /** Etiqueta corta para UI (display only; el catálogo muestra el título real). */
  label: string;
}

/**
 * Mapa curado groupId → rutina tg-master del catálogo.
 * Nota: progressionsData guarda `masterWorkout.routineId` con el formato
 * obsoleto "routine-master-N"; el catálogo usa "tg-master-N". Este mapa
 * apunta directamente al ID vigente (integridad garantizada por test:
 * src/data/fitness/__tests__/progressionPathLinks.test.ts).
 */
const GROUP_TO_ROUTINE: Record<string, ProgressionRoutineLink> = {
  'front-lever': { routineId: 'tg-master-68', label: 'Front Lever — Master Workout' },
  'planche': { routineId: 'tg-master-74', label: 'Full Planche — Master Workout' },
  'hspu': { routineId: 'tg-master-53', label: 'Handstand — Master Workout' },
  'muscle-up': { routineId: 'tg-master-55', label: 'Muscle Up — Master Workout' },
  '94-8.0 Advanced Isometrics': { routineId: 'tg-master-94', label: '90 Degree Hold — Master Workout' },
  '97-9.0 Core Compression & Levers': { routineId: 'tg-master-97', label: 'Dragon Flag — Master Workout' },
  '132-10.0 Unilateral Pulling Strength': { routineId: 'tg-master-132', label: 'One Arm Pull Up — Master Workout' },
  '57-11.0 Lateral Chain Strength': { routineId: 'tg-master-57', label: 'Human Flag — Master Workout' },
  '96-12.0 Unilateral Pushing Strength': { routineId: 'tg-master-96', label: 'One Arm Push Up — Master Workout' },
  '133-13.0 Active Core & Flexibility': { routineId: 'tg-master-133', label: 'Toes to Bar — Master Workout' },
  '131-14.0 Bar Transitions': { routineId: 'tg-master-131', label: 'Pull Over — Master Workout' }
};

/** Fallback por keyword del título (grupos futuros sin entrada explícita). */
const ROUTINE_TITLE_KEYWORDS: Array<[RegExp, ProgressionRoutineLink]> = [
  [/front\s*lever/i, GROUP_TO_ROUTINE['front-lever']],
  [/planche/i, GROUP_TO_ROUTINE['planche']],
  [/hand\s*stand|hspu/i, GROUP_TO_ROUTINE['hspu']],
  [/muscle[\s-]*up/i, GROUP_TO_ROUTINE['muscle-up']],
  [/90\s*degree/i, GROUP_TO_ROUTINE['94-8.0 Advanced Isometrics']],
  [/dragon\s*flag/i, GROUP_TO_ROUTINE['97-9.0 Core Compression & Levers']],
  [/one\s*arm\s*pull/i, GROUP_TO_ROUTINE['132-10.0 Unilateral Pulling Strength']],
  [/human\s*flag|lateral\s*chain/i, GROUP_TO_ROUTINE['57-11.0 Lateral Chain Strength']],
  [/one\s*arm\s*push/i, GROUP_TO_ROUTINE['96-12.0 Unilateral Pushing Strength']],
  [/toes\s*to\s*bar/i, GROUP_TO_ROUTINE['133-13.0 Active Core & Flexibility']],
  [/pull\s*over|bar\s*transition/i, GROUP_TO_ROUTINE['131-14.0 Bar Transitions']]
];

/**
 * Rutina tg-master asociada a un grupo de progresión, o null si no hay
 * correspondencia (p.ej. back-lever, core-compression, pistol-squat).
 */
export function progressionGroupToRoutine(
  groupId: string,
  groupTitle = ''
): ProgressionRoutineLink | null {
  const direct = GROUP_TO_ROUTINE[groupId];
  if (direct) return direct;

  for (const [re, link] of ROUTINE_TITLE_KEYWORDS) {
    if (re.test(groupTitle) || re.test(groupId)) return link;
  }
  return null;
}

/** URL del catálogo con el detalle de una rutina abierto en Sheet (B6/B7). */
export function routineCatalogUrl(routineId: string): string {
  return `/app/fitness?tab=routines&routine=${encodeURIComponent(routineId)}`;
}

/** ¿Es una rutina master de THENX (con progresión asociada en /app/fitness/skills)? */
export function isThenxMasterRoutineId(routineId: string): boolean {
  return routineId.startsWith('tg-master-');
}
