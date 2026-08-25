export { RATE_CARD_V1, LEGACY_RATE_CARD_V0 } from './rateCard';
export { estimateService, estimateWithLevels, ceilTo, floorTo, roundLegacy } from './formula';
export {
  CATALOG_CORE,
  B_CORE_SUBTASKS,
  DELTA_INTERACTIVIDAD,
  DELTA_ANIM_LOOP,
  DELTA_ANIM_INTERACTIVA,
} from './catalogCore';
export * from './types';

import type { ServiceDefinition } from './types';
import { CATALOG_CORE } from './catalogCore';

export const SERVICE_CATALOG: readonly ServiceDefinition[] = CATALOG_CORE;

export function getServiceById(id: string): ServiceDefinition | undefined {
  return SERVICE_CATALOG.find((service) => service.id === id);
}
