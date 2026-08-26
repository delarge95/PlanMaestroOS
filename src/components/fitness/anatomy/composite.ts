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

/** AABB serializable (mundo) de una pieza o unidad. */
export interface Aabb { min: [number, number, number]; max: [number, number, number] }

export function aabbIntersects(a: Aabb, b: Aabb): boolean {
  return a.min[0] <= b.max[0] && a.max[0] >= b.min[0]
    && a.min[1] <= b.max[1] && a.max[1] >= b.min[1]
    && a.min[2] <= b.max[2] && a.max[2] >= b.min[2];
}

export interface VisibilityState {
  focus: CompositeFocus;
  /** capas VISIBLES (independiente de lo seleccionable). */
  layers: ReadonlySet<CompositeKind>;
  /** claves de pieza ocultas manualmente (model:name). */
  hidden: ReadonlySet<string>;
  /** aislamiento: claves EXPLÍCITAS de las piezas aisladas (sin test espacial). */
  isolation: { keys: ReadonlySet<string>; label: string } | null;
}

/**
 * Visibilidad de UNA pieza del compuesto (decisión única por pieza).
 * Prioridad: aislamiento > oculta manual > capas > focus > dedup.
 * `aabb`: caja mundial de la pieza (solo necesaria con aislamiento activo).
 */
export function pieceVisible(
  piece: { model: string; name: string; region: CompositeRegion; kind: CompositeKind; hiddenByDup?: string },
  state: VisibilityState,
): boolean {
  const key = pieceKey(piece.model, piece.name);
  // aislamiento: SOLO las claves explícitas de la unidad aislada
  if (state.isolation) return state.isolation.keys.has(key);
  if (state.hidden.has(key)) return false;
  if (state.focus !== 'full') {
    if (state.focus === 'vertebrae') {
      if (!VERTEBRAE_PIECES.has(piece.name.toLowerCase())) return false;
    } else if (piece.region !== state.focus) return false;
  }
  if (!state.layers.has(piece.kind)) return false;
  if (piece.hiddenByDup) return false;
  return true;
}

/** kind seleccionable/clickeable (filtros de selección). */
export function kindSelectable(kind: CompositeKind, selectable: ReadonlySet<CompositeKind>): boolean {
  return selectable.has(kind);
}

// ── Selección jerárquica por fases (conjunto → subconjunto → pieza) ─────────

export interface SelectionPath {
  /** estructura (conjunto) — siempre presente al seleccionar. */
  structureId: string;
  /** subconjunto (nivel 1): clave de grupo derivada del nombre de pieza. */
  groupKey: string | null;
  /** pieza individual (nivel hoja). */
  pieceKey: string | null;
}

const STOPWORDS = new Set(['of', 'the', 'and', 'de', 'la', 'el']);

function tokenize(name: string): string[] {
  return (name || '')
    .normalize('NFD').replace(/[\u0300-\u036f\u200b-\u200d\ufeff]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(' ')
    .filter((t) => t && !STOPWORDS.has(t));
}

/**
 * Agrupa las piezas de una estructura en SUBCONJUNTOS derivados del nombre:
 * tokens de la pieza menos los tokens comunes con la estructura.
 * p.ej. "Long head of triceps brachii" en "Triceps brachii" → grupo "long head".
 * `pieces` son pares [clave completa model:name, nombre runtime]. Los grupos
 * guardan CLAVES COMPLETAS (una misma estructura puede tener piezas en
 * distintos modelos del compuesto).
 */
export function buildSubgroups(structureNameEn: string, pieces: Array<[string, string]>): Map<string, string[]> {
  const base = new Set(tokenize(structureNameEn));
  const groups = new Map<string, string[]>();
  for (const [key, name] of pieces) {
    const toks = tokenize(name);
    const diff = toks.filter((t) => !base.has(t));
    const g = diff.length ? diff.join(' ') : '(estructura)';
    groups.set(g, [...(groups.get(g) ?? []), key]);
  }
  return groups;
}

/**
 * Resuelve la selección tras un click sobre una pieza (máquina de fases).
 * El PRIMER click SIEMPRE selecciona el CONJUNTO (estructura entera) — nunca
 * salta a la pieza. Los clicks siguientes descienden: subconjunto → pieza.
 * Click en la misma pieza del nivel hoja → sube un nivel.
 */
export function resolveClick(args: {
  current: SelectionPath | null;
  clickedPieceKey: string;
  clickedStructureId: string;
  /** grupos (groupKey → claves de pieza) de la estructura clickeada. */
  groups: Map<string, string[]>;
  /** grupo al que pertenece la pieza clickeada. */
  clickedGroupKey: string;
}): SelectionPath {
  const { current, clickedStructureId, groups, clickedGroupKey } = args;
  // NUEVO conjunto o cambio de estructura: SIEMPRE fase conjunto
  if (!current || current.structureId !== clickedStructureId)
    return { structureId: clickedStructureId, groupKey: null, pieceKey: null };
  const p = current;
  const groupSize = groups.get(clickedGroupKey)?.length ?? 1;
  // conjunto → subconjunto (multi-pieza) o directamente pieza (grupo hoja)
  if (p.groupKey === null && p.pieceKey === null) {
    return groupSize > 1
      ? { ...p, groupKey: clickedGroupKey }
      : { ...p, pieceKey: args.clickedPieceKey };
  }
  // subconjunto → pieza, o cambio de subconjunto
  if (p.groupKey !== clickedGroupKey) {
    return groupSize > 1
      ? { ...p, groupKey: clickedGroupKey, pieceKey: null }
      : { ...p, groupKey: clickedGroupKey, pieceKey: args.clickedPieceKey };
  }
  // misma pieza → mantener selección (no subir; usar breadcrumb para subir)
  if (p.pieceKey === args.clickedPieceKey) return { ...p };
  return { ...p, pieceKey: args.clickedPieceKey };
}

/** Claves de pieza de la unidad seleccionada en el nivel actual del path. */
export function unitPieceKeys(path: SelectionPath, groups: Map<string, string[]>): string[] {
  if (path.pieceKey) return [path.pieceKey];
  if (path.groupKey) return groups.get(path.groupKey) ?? [];
  return [...new Set([...groups.values()].flat())];
}

/**
 * Etiqueta de fase para la ficha: extrae el nombre legible de la cabeza/pieza
 * desde el nombre runtime (p.ej. "Long head of triceps brachii").
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
