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

/**
 * Índice nombre-runtime → id de estructura dueña, para el click en el visor.
 *
 * Dos correcciones del ciclo 4:
 * 1. Normaliza alias: si un mapping apunta a un nombre de GEOMETRÍA en vez del
 *    de nodo (p.ej. 'Flexor_retinaculum_of_wrist' en upper-limb), resuelve al
 *    nombre de nodo vía `aliasToPrimary` (geometryName → nodeName) para que el
 *    click sobre la pieza (que devuelve nombre de NODO) encuentre al dueño.
 * 2. Dueño MÁS ESPECÍFICO: ante varias estructuras que mapean la misma pieza
 *    (el hueso 'Femurr' lo mapean también la cadera y la rodilla), gana el
 *    mapping más pequeño (el hueso, 1 pieza < articulación, 2-3 piezas).
 *    Empate → orden del grafo (músculos antes que tendones, huesos antes que
 *    ligamentos).
 */
export function buildOwnerIndex(
  structures: OwnerIndexInput[],
  modelKey: string,
  aliasToPrimary: ReadonlyMap<string, string> = new Map(),
): Map<string, string> {
  const best = new Map<string, { id: string; specificity: number; order: number }>();
  structures.forEach((s, order) => {
    const names = s.modelMeshes[modelKey] ?? [];
    for (const raw of names) {
      const primary = aliasToPrimary.get(raw) ?? raw;
      for (const name of new Set([raw, primary])) {
        const prev = best.get(name);
        if (!prev || names.length < prev.specificity) {
          best.set(name, { id: s.id, specificity: names.length, order });
        }
      }
    }
  });
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
