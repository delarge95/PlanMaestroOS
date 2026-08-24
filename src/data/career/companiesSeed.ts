// AUTO-GENERADO por rag/career/scripts/parse-tracker.ts — NO editar a mano.
// Fuente: _roadmap_laboral/tracker/Tracker_Estrategia_Laboral_Alexander_v1.xlsx (hojas Applications / Weekly Plan / Lists).
// Regla de importación: cada campo proviene 1:1 del tracker; singleNextAction se deriva de notes/portfolioAngle cuando la fila no trae texto.

import type { CompanyRecord } from './companies';

/** Empresas REALES derivadas de las aplicaciones del tracker ( timelines arrancan con el evento de importación ). */
export const companiesSeed: CompanyRecord[] = [
  {
    id: 'trk-comp-1',
    name: "Treeview Studio",
    website: '',
    tier: 'Watchlist',
    archived: false,
    source: 'tracker-xlsx',
    timeline: [
      { id: 'trk-comp-1-e1', dateIso: "2026-06-17", type: 'message', note: "Importada del tracker (estado: Saved — Verify remote/contractor route)" }
    ]
  },
  {
    id: 'trk-comp-2',
    name: "Active Theory",
    website: '',
    tier: 'Watchlist',
    archived: false,
    source: 'tracker-xlsx',
    timeline: [
      { id: 'trk-comp-2-e1', dateIso: "2026-06-17", type: 'message', note: "Importada del tracker (estado: Saved — Creative tech but avoid pure marketing)" }
    ]
  },
  {
    id: 'trk-comp-3',
    name: "Product Visualization Target",
    website: '',
    tier: 'Watchlist',
    archived: false,
    source: 'tracker-xlsx',
    timeline: [
      { id: 'trk-comp-3-e1', dateIso: "2026-06-17", type: 'message', note: "Importada del tracker (estado: Saved — Replace with real company)" }
    ]
  }
];
