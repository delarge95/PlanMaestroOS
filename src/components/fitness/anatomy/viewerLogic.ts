// src/components/fitness/anatomy/viewerLogic.ts
// AG-ANATOM — lógica PURA del visor (ciclo 4, corrección de bugs de
// selección/aislamiento/capas). Extraída de AnatomyViewer.tsx para poder
// testearla sin WebGL. Sin dependencias de three ni del DOM.

/** Selección del visor: una estructura del grafo O una pieza suelta sin ficha. */
export type ViewerSelection =
  | { type: 'structure'; id: string }
  | { type: 'mesh'; name: string };

/**
 * Nombre de nodo/mesh listo para UI: elimina zero-width chars del export de
 * Blender ("Art_cart_of_talusr_\u200b") y sustituye underscores por espacios.
 * SOLO presentación: los datos y lookups usan el nombre runtime crudo.
 */
export function prettyMeshName(name: string): string {
  return name.replace(/[\u200b-\u200d\u2060\ufeff]/g, '').replace(/_/g, ' ').trim();
}

export interface OwnerIndexInput {
  id: string;
  modelMeshes: Record<string, string[]>;
}

export const DEFAULT_MESH_ALIASES: ReadonlyMap<string, string> = new Map([
  ['Deltoid_anterior_partr', 'Clavicular_part_of_deltoid_muscler'],
  ['Deltoid_lateral_partr', 'Acromial_part_of_deltoid_muscler'],
  ['Deltoid_posterior_partr', 'Spinal_part_of_deltoid_muscler'],
  ['Flexor_retinaculum_of_wrist', 'Flexor_retinaculum_of_wristr'],
]);

function structureRank(id: string): number {
  // Entidades anatómicas primarias tienen rango 1; articulaciones compuestas (art-*) rango 2
  if (id.startsWith('art-')) return 2;
  return 1;
}

/**
 * Índice nombre-runtime → id de estructura dueña, para el click en el visor.
 *
 * Correcciones:
 * 1. Normaliza alias: si un mapping apunta a un nombre de GEOMETRÍA en vez del
 *    de nodo (o viceversa), resuelve al nombre primario vía `aliasToPrimary`.
 * 2. Dueño PRIMARIO Y ESPECÍFICO: entidades primarias (huesos, músculos, ligamentos, tendones, nervios)
 *    tienen prioridad sobre articulaciones compuestas (art-*). Ante igual rango, gana la más específica
 *    (menor número de mallas), y en empate el orden del grafo.
 */
export function buildOwnerIndex(
  structures: OwnerIndexInput[],
  modelKey: string,
  aliasToPrimary: ReadonlyMap<string, string> = DEFAULT_MESH_ALIASES,
): Map<string, string> {
  const best = new Map<string, { id: string; rank: number; specificity: number; order: number }>();
  structures.forEach((s, order) => {
    const names = s.modelMeshes[modelKey] ?? [];
    const rank = structureRank(s.id);
    for (const raw of names) {
      const primary = aliasToPrimary.get(raw) ?? raw;
      for (const name of new Set([raw, primary])) {
        const prev = best.get(name);
        if (
          !prev ||
          rank < prev.rank ||
          (rank === prev.rank && names.length < prev.specificity) ||
          (rank === prev.rank && names.length === prev.specificity && order < prev.order)
        ) {
          best.set(name, { id: s.id, rank, specificity: names.length, order });
        }
      }
    }
  });

  // Mapear alias que apunten a una malla conocida
  for (const [alias, target] of aliasToPrimary) {
    if (!best.has(alias) && best.has(target)) {
      const targetOwner = best.get(target)!;
      best.set(alias, { ...targetOwner });
    }
  }

  const out = new Map<string, string>();
  for (const [name, v] of best) out.set(name, v.id);
  return out;
}

/**
 * Expande los nombres de mapping de una estructura a nombres de NODO
 * (alias de geometría → nodo). El visor decide visibilidad/highlight por
 * nombre de nodo: es el único garantizado en runtime.
 */
export function resolveSelectionNames(
  selection: ViewerSelection | null | undefined,
  modelKey: string,
  getStructure: (id: string) => { modelMeshes: Record<string, string[]> } | undefined,
  aliasToPrimary: ReadonlyMap<string, string> = new Map(),
): string[] {
  if (!selection) return [];
  if (selection.type === 'mesh') return [selection.name];
  const s = getStructure(selection.id);
  if (!s) return [];
  const names = s.modelMeshes[modelKey] ?? [];
  return names.map((n) => aliasToPrimary.get(n) ?? n);
}

/**
 * Visibilidad de UN mesh — decisión ÚNICA por pieza (ciclo 4): antes se
 * decidía por alias (el mismo mesh aparecía bajo nombre de nodo Y de geometría
 * y la última escritura ganaba, rompiendo filtros y aislamiento).
 * Prioridad: aislamiento > filtro de capa > vista completa (oculta solo 'aux').
 */
export function decideMeshVisibility(args: {
  name: string;
  kind: string;
  isoNames: ReadonlySet<string> | null;
  filterKinds: readonly string[] | null;
}): boolean {
  const { name, kind, isoNames, filterKinds } = args;
  if (isoNames) return isoNames.has(name);
  if (filterKinds) return filterKinds.includes(kind);
  return kind !== 'aux';
}
