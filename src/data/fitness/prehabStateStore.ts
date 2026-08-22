// src/data/fitness/prehabStateStore.ts
// A5 (AG-FIT): estado persistido del prehab activo. El banner "Prehab activo"
// se DERIVA de este estado (+ prehabProtocols para el copy), no de un flag
// local con texto fijo. Cuando CORE entregue UserState.pain, este store
// delegará la fuente (molestias por zona) manteniendo la misma interfaz.
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { prehabProtocols, type PrehabProtocol } from './prehabProtocols';

export interface PrehabStateStore {
  /** Zonas con protocolo activo (keys de prehabProtocols: knee, shoulder, ...) */
  activeZoneIds: string[];
  /** ISO date (YYYY-MM-DD) del último cierre del banner (persistido, no flag local) */
  bannerDismissedOn: string | null;

  setZoneActive: (zoneId: string, active: boolean) => void;
  dismissBannerToday: () => void;
}

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export const usePrehabStateStore = create<PrehabStateStore>()(
  persist(
    (set) => ({
      // Default real actual: rodilla (Spanish Squats isométricos, plan_fitness.md#prehab)
      activeZoneIds: ['knee'],
      bannerDismissedOn: null,

      setZoneActive: (zoneId, active) => {
        set((state) => {
          const exists = zoneId in prehabProtocols;
          if (!exists) return state;
          const next = active
            ? Array.from(new Set([...state.activeZoneIds, zoneId]))
            : state.activeZoneIds.filter((z) => z !== zoneId);
          return { activeZoneIds: next };
        });
      },

      dismissBannerToday: () => {
        set({ bannerDismissedOn: todayIso() });
      }
    }),
    {
      name: 'fitapp-prehab-state-v1',
      version: 1,
      partialize: (state) => ({
        activeZoneIds: state.activeZoneIds,
        bannerDismissedOn: state.bannerDismissedOn
      })
    }
  )
);

/** Protocolos activos derivados del estado persistido (orden estable por zona). */
export function getActivePrehabProtocols(activeZoneIds: string[]): PrehabProtocol[] {
  return activeZoneIds
    .filter((z) => z in prehabProtocols)
    .map((z) => prehabProtocols[z]);
}

/** ¿El banner de hoy ya fue cerrado? (comparación por fecha, no flag en memoria) */
export function isBannerDismissedToday(dismissedOn: string | null): boolean {
  return dismissedOn === todayIso();
}
