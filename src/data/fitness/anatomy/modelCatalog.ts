// src/data/fitness/anatomy/modelCatalog.ts
// Catálogo de modelos GLB (pesos según inventario tarea 1).
// GENERADO por rag/anatomy/scripts/build-anatomy-data.mjs — NO editar a mano.
// Regenerar: node rag/anatomy/scripts/build-anatomy-data.mjs

import type { AnatomyModelInfo } from './types';

export const ANATOMY_MODELS: AnatomyModelInfo[] = [
  { key: 'colored-skull-base', file: '/models/anatomy/colored-skull-base.glb', label: "Cráneo coloreado", sizeMb: 1.1, meshCount: 29, description: "Cráneo con 29 piezas coloreadas por hueso/diente." },
  { key: 'exploded-skull', file: '/models/anatomy/exploded-skull.glb', label: "Cráneo explosionado", sizeMb: 1.15, meshCount: 29, exploded: true, description: "Piezas del cráneo separadas radialmente (ya ven así del archivo)." },
  { key: 'hand', file: '/models/anatomy/hand.glb', label: "Mano", sizeMb: 3.1, meshCount: 223, description: "Mano derecha: huesos, músculos intrínsecos y vainas tendinosas." },
  { key: 'lower-limb', file: '/models/anatomy/lower-limb.glb', label: "Miembro inferior", sizeMb: 5.9, meshCount: 452, description: "Pierna derecha completa: cadera, muslo, pierna y pie con músculos, tendones, nervios y ligamentos." },
  { key: 'overview-colored-skull', file: '/models/anatomy/overview-colored-skull.glb', label: "Cráneo (vista general)", sizeMb: 1.08, meshCount: 29, description: "Variante overview del cráneo coloreado." },
  { key: 'overview-skeleton', file: '/models/anatomy/overview-skeleton.glb', label: "Esqueleto completo", sizeMb: 3.26, meshCount: 144, description: "Vista general del esqueleto: cráneo, columna completa, tórax y extremidades derechas." },
  { key: 'upper-limb', file: '/models/anatomy/upper-limb.glb', label: "Miembro superior", sizeMb: 6.59, meshCount: 532, description: "Brazo derecho completo: huesos, músculos por cabezas, tendones, nervios y ligamentos." },
  { key: 'vertebrae', file: '/models/anatomy/vertebrae.glb', label: "Vértebras aisladas", sizeMb: 0.2, meshCount: 3, description: "Vértebras C4, T7 y L3 aisladas para inspección." },
];
