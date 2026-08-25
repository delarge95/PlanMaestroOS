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

export const COTIZADOR_F1 = {
  id: 'F1',
  driverPrincipal: {
    nombre: 'nÃºmero de piezas del ensamblaje',
    umbrales: [
      'â‰¤15 piezas simples/prismÃ¡ticas',
      '15â€“60 piezas mixtas',
      '60â€“150 piezas o freeform moderado',
      '150+ piezas / freeform masivo / cableado',
    ],
  },
  addOns: [
    { id: 'B6', refServicio: 'b6-mecanicas-especificas', delta: 'ver ficha B6' },
    { id: 'USDZ-AR', delta: '+10%' },
    { id: 'REPORTE-PERF', delta: '+5%' },
    { id: 'LOTE-MULTI', delta: 'âˆ’15â€“25% por modelo adicional' },
  ],
} as const;