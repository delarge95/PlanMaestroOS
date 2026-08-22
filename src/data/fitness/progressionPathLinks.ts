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
