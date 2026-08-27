// src/data/career/portfolioBoardStore.ts — AG-PORT
// Live state of the doc-33 sprint production board (statuses per asset item).
// The DATASET baseline lives in portfolioChecklist.ts (all "pending": the sprint
// has not been executed); this store tracks the user's real progress on top of
// it and persists locally, following the repo convention (zustand persist, cf.
// src/data/fitness/prehabStateStore.ts). When CORE ships the IndexedDB adapter,
// this store swaps its persistence backend without changing its interface.

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  PORTFOLIO_ASSET_STATUSES,
  portfolioAssetChecklist,
  type PortfolioAssetItem,
  type PortfolioAssetStatus
} from './portfolioChecklist';

export type PortfolioBoardStatusMap = Record<string, PortfolioAssetStatus>;

interface PortfolioBoardStore {
  /** Live status per checklist id; ids absent from the map use the dataset default. */
  statuses: PortfolioBoardStatusMap;
  setAssetStatus: (id: string, status: PortfolioAssetStatus) => void;
  resetBoard: () => void;
}

const defaultStatuses = (): PortfolioBoardStatusMap =>
  Object.fromEntries(portfolioAssetChecklist.map((item) => [item.id, item.status]));

export const usePortfolioBoardStore = create<PortfolioBoardStore>()(
  persist(
    (set) => ({
      statuses: defaultStatuses(),
      setAssetStatus: (id, status) => {
        const exists = portfolioAssetChecklist.some((item) => item.id === id);
        const valid = PORTFOLIO_ASSET_STATUSES.includes(status);
        if (!exists || !valid) return;
        set((state) => ({ statuses: { ...state.statuses, [id]: status } }));
      },
      resetBoard: () => set({ statuses: defaultStatuses() })
    }),
    {
      name: 'portapp-sprint-board-v1',
      version: 1,
      partialize: (state) => ({ statuses: state.statuses })
    }
  )
);

/** Merge live statuses over the dataset defaults (covers ids missing from persisted maps). */
export function withBoardDefaults(statuses: PortfolioBoardStatusMap): PortfolioBoardStatusMap {
  return { ...defaultStatuses(), ...statuses };
}

export interface PortfolioBoardCard extends PortfolioAssetItem {
  effectiveStatus: PortfolioAssetStatus;
}

/** Board cards in dataset order, with the live status applied. */
export function selectBoardCards(statuses: PortfolioBoardStatusMap): PortfolioBoardCard[] {
  const merged = withBoardDefaults(statuses);
  return portfolioAssetChecklist.map((item) => ({
    ...item,
    effectiveStatus: merged[item.id]
  }));
}

/** Items grouped into the four board columns (dataset order preserved within each column). */
export function selectBoardColumns(statuses: PortfolioBoardStatusMap): Record<
  PortfolioAssetStatus,
  PortfolioBoardCard[]
> {
  const columns: Record<PortfolioAssetStatus, PortfolioBoardCard[]> = {
    pending: [],
    in_progress: [],
    review: [],
    done: []
  };
  for (const card of selectBoardCards(statuses)) {
    columns[card.effectiveStatus].push(card);
  }
  return columns;
}
