// src/components/fitness/anatomy/composite.ts
// AG-ANATOM — lógica PURA del modelo compuesto y su UX (ciclo 5, mandato
// usuario: capas multi-seleccionables, selección por fases, aislamiento múltiple,
// ocultar/desocultar, color por tipo, focus por región). Testeable sin WebGL.

import type { CompositeKind, CompositeRegion } from '../../../data/fitness/anatomy/compositePlan';

export type { CompositeKind, CompositeRegion };

// ── Focus por región ─────────────────────────────────────────────────────────

export type CompositeFocus = 'full' | 'skull' | 'hand' | 'upper' | 'lower' | 'vertebrae';

export const FOCUS_LABELS: Record<CompositeFocus, string> = {
  full: 'Completo',
  skull: 'Cráneo',
  hand: 'Mano',
  upper: 'Miembro superior',
  lower: 'Miembro inferior',
  vertebrae: 'Vértebras aisladas',
};

/** Modelo deep-link legacy (?model=) → focus equivalente (compatibilidad URLs). */
export function focusFromLegacyModel(model: string | null | undefined): CompositeFocus | null {
  switch (model) {
    case 'colored-skull-base':
    case 'exploded-skull':
    case 'overview-colored-skull':
      return 'skull';
    case 'hand':
      return 'hand';
    case 'upper-limb':
      return 'upper';
    case 'lower-limb':
      return 'lower';
    case 'vertebrae':
      return 'vertebrae';
    case 'overview-skeleton':
      return 'full';
    default:
      return null;
  }
}

/** Piezas del modelo vertebrae (focus "Vértebras aisladas": solo esas, de cualquier fuente). */
export const VERTEBRAE_PIECES = new Set(
  ['Cervical vertebra (C4)', 'Thoracic vertebra (T7)', 'Lumbar vertebra (L3)'].map((n) => n.toLowerCase()),
);

// ── Capas (multi-seleccionables) ─────────────────────────────────────────────

export interface LayerDef {
  kind: CompositeKind;
  label: string;
  /** color de identidad de la capa (tinte base + highlight) */
  color: number;
}

/** Orden de aparición en la UI. Colores pensados sobre fondo oscuro. */
export const LAYER_DEFS: LayerDef[] = [
  { kind: 'bone', label: 'Huesos', color: 0xe8e0d0 },
  { kind: 'muscle', label: 'Músculos', color: 0xc9564a },
  { kind: 'tendon', label: 'Tendones', color: 0xe0b34d },
  { kind: 'ligament', label: 'Ligamentos', color: 0x9a7fd1 },
  { kind: 'nerve', label: 'Nervios', color: 0xf2d24b },
  { kind: 'artery', label: 'Arterias', color: 0xd94f4f },
  { kind: 'vein', label: 'Venas', color: 0x4f7fd9 },
  { kind: 'cartilage', label: 'Cartílagos', color: 0x7fd0c0 },
  { kind: 'bursa', label: 'Bursas', color: 0xd9925b },
  { kind: 'fascia', label: 'Fascia', color: 0xb8a6d9 },
  { kind: 'overlay', label: 'Superficie', color: 0xc9c9c9 },
  { kind: 'other', label: 'Otras', color: 0x9aa4b0 },
];

const LAYER_MAP = new Map(LAYER_DEFS.map((l) => [l.kind, l]));

export function layerDef(kind: CompositeKind): LayerDef {
  return LAYER_MAP.get(kind) ?? LAYER_DEFS[LAYER_DEFS.length - 1];
}

/** Capas activas por defecto: esquelético + muscular + tendinoso + ligamentoso + nervioso. */
export const DEFAULT_LAYERS: CompositeKind[] = ['bone', 'muscle', 'tendon', 'ligament', 'nerve'];

// ── Claves de pieza ──────────────────────────────────────────────────────────

/** Clave única de pieza en el compuesto: `model:name`. */
export function pieceKey(model: string, name: string): string {
  return `${model}:${name}`;
}

/** Estado de selección (fases incluidas) sobre piezas. */
export interface PieceSelection {
  /** estructura del grafo seleccionada (fase 1), si existe dueña. */
  structureId: string | null;
  /** pieza individual seleccionada en fase 2 (clave model:name). */
  phasePiece: string | null;
}

export interface VisibilityState {
  focus: CompositeFocus;
  layers: ReadonlySet<CompositeKind>;
  /** claves de pieza ocultas manualmente (model:name). */
  hidden: ReadonlySet<string>;
  /** claves aisladas (model:name) — si no está vacío, SOLO esas se ven. */
  isolated: ReadonlySet<string>;
}

/**
 * Visibilidad de UNA pieza del compuesto (decisión única por pieza).
 * Prioridad: aislamiento > oculta manual > capas > focus > dedup.
 */
export function pieceVisible(
  piece: { model: string; name: string; region: CompositeRegion; kind: CompositeKind; hiddenByDup?: string },
  state: VisibilityState,
): boolean {
  const key = pieceKey(piece.model, piece.name);
  // aislamiento: solo las aisladas (el resto, oculto)
  if (state.isolated.size > 0) return state.isolated.has(key);
  if (state.hidden.has(key)) return false;
  // focus: región del focus; vertebrae = solo las 3 vértebras del modelo aislado
  if (state.focus !== 'full') {
    if (state.focus === 'vertebrae') {
      if (!VERTEBRAE_PIECES.has(piece.name.toLowerCase())) return false;
    } else if (piece.region !== state.focus) return false;
  }
  // capas
  if (!state.layers.has(piece.kind)) return false;
  // dedup: representada por un especialista
  if (piece.hiddenByDup) return false;
  return true;
}

// ── Selección por fases ──────────────────────────────────────────────────────

/**
 * Resuelve la selección tras un click sobre una pieza.
 * - La pieza pertenece a otra estructura → fase 1 (estructura entera).
 * - La pieza pertenece a la estructura YA seleccionada y esta es multi-pieza
 *   (p.ej. tríceps con 3 cabezas) → fase 2 (solo esa cabeza/pieza).
 * - Segundo click en la misma pieza de fase 2 → vuelve a fase 1 (estructura).
 */
export function nextPhaseSelection(args: {
  current: PieceSelection;
  clickedPieceKey: string;
  clickedStructureId: string | null;
  /** nº de piezas que la estructura seleccionada tiene en el compuesto. */
  structurePieceCount: number;
}): PieceSelection {
  const { current, clickedPieceKey, clickedStructureId, structurePieceCount } = args;
  if (!clickedStructureId) {
    // pieza sin ficha: selección directa de pieza (fase 2 implícita)
    return { structureId: current.structureId, phasePiece: clickedPieceKey };
  }
  if (current.structureId === clickedStructureId) {
    // misma estructura: alternar fase 2
    if (structurePieceCount > 1) {
      if (current.phasePiece === clickedPieceKey) return { structureId: clickedStructureId, phasePiece: null };
      return { structureId: clickedStructureId, phasePiece: clickedPieceKey };
    }
    return { structureId: clickedStructureId, phasePiece: null };
  }
  return { structureId: clickedStructureId, phasePiece: null };
}

/**
 * Etiqueta de fase para la ficha: en fase 2, extrae el nombre legible de la
 * cabeza/pieza desde el nombre runtime (p.ej. "Long head of triceps brachii").
 */
export function phaseLabel(pieceName: string): string {
  return pieceName
    .replace(/[\u200b-\u200d\u2060\ufeff]/g, '')
    .replace(/_/g, ' ')
    .replace(/\.(r|l)$/i, '')
    .trim();
}

// ── Color por tipo ───────────────────────────────────────────────────────────

/** Tinte base aplicado a un material por tipo (lerp sobre el color original). */
export const KIND_TINT_STRENGTH = 0.55;
/** Intensidad emisiva del highlight por tipo. */
export const HIGHLIGHT_EMISSIVE_BY_KIND = 1.4;

/** Color hex de highlight para un kind (versión brillante del color de capa). */
export function highlightColor(kind: CompositeKind): number {
  const base = layerDef(kind).color;
  // aclarar hacia blanco un 25% para el highlight
  const r = Math.min(255, ((base >> 16) & 255) + 64);
  const g = Math.min(255, ((base >> 8) & 255) + 64);
  const b = Math.min(255, (base & 255) + 64);
  return (r << 16) | (g << 8) | b;
}
