/**
 * types.ts — Contrato de sugerencias y su ciclo de vida (AG-CORE, Ola 1).
 *
 * Ciclo (§0.4 del plan):
 *   proposed → shown → accepted | dismissed | expired → applied → outcome
 *
 * Políticas del motor:
 * - Máx `maxActive` (default 3) sugerencias activas (proposed|shown).
 * - Cooldowns por `type`: tras decidir/aplicar una sugerencia de tipo T,
 *   no se propone OTRA de tipo T hasta que expire el cooldown (anti-nagging).
 * - "Ahora no" ≠ "nunca": dismiss con razón `not-now` aplica un snooze
 *   (`snoozeHours`); transcurrido el snooze, la MISMA sugerencia puede
 *   re-proponerse. `not-interested`/`irrelevant` bloquean el id para siempre.
 * - Toda sugerencia lleva su "¿por qué?": `ruleId` + `sourceRef` cuando
 *   proviene de una regla (§0.1: ningún número sin trazabilidad).
 */

import type { SourceRef } from '../rules';

/** Estados del ciclo de vida. */
export type SuggestionStatus =
  | 'proposed'
  | 'shown'
  | 'accepted'
  | 'dismissed'
  | 'expired'
  | 'applied';

/** Razón de descarte. `not-now` es snooze; el resto es permanente para ese id. */
export type DismissReason = 'not-now' | 'not-interested' | 'irrelevant';

/** Outcome registrado tras aplicar (alimenta priorización futura). */
export interface SuggestionOutcome {
  recordedAtIso: string;
  /** Etiqueta libre del resultado ('completed', 'partial', 'no-effect'…). */
  label: string;
  /** ¿El outcome fue positivo para el usuario? (para priorización). */
  positive?: boolean;
}

/** Sugerencia almacenada (registro completo, serializable). */
export interface Suggestion {
  id: string;
  domain: string;
  /** Clave de cooldown ('volume-adjust', 'review-cards', 'biofeedback'…). */
  type: string;
  /** Mayor prioridad ⇒ antes en la cola activa. Default 0. */
  priority: number;
  title: string;
  /** Cuerpo con el "¿por qué?" (regla/cita) incluido. */
  body: string;
  /** Trazabilidad a la regla que la originó (si aplica). */
  ruleId?: string;
  sourceRef?: SourceRef;
  status: SuggestionStatus;
  createdAtIso: string;
  /** TTL: propuesta mostrada más allá de esta fecha → expired. */
  expiresAtIso?: string;
  shownAtIso?: string;
  decidedAtIso?: string;
  dismissReason?: DismissReason;
  /** Solo para dismiss `not-now`: oculta hasta esta fecha. */
  snoozeUntilIso?: string;
  appliedAtIso?: string;
  outcome?: SuggestionOutcome;
}

/** Candidato que un agente de dominio propone al motor. */
export interface SuggestionCandidate {
  /** Id estable y único por contenido ('fit:volume-warn-2026W34'). */
  id: string;
  domain: string;
  type: string;
  priority?: number;
  title: string;
  body: string;
  ruleId?: string;
  sourceRef?: SourceRef;
  /** Horas de vida desde la propuesta (default `defaultTtlHours`). */
  ttlHours?: number;
}

/** Configuración del motor. Todas las horas son horas de reloj. */
export interface SuggestionEngineOptions {
  /** Máximo de sugerencias activas (proposed|shown). Default 3. */
  maxActive?: number;
  /** Cooldown por tipo en horas (clave = `Suggestion.type`). */
  cooldownsByType?: Record<string, number>;
  /** Cooldown de fallback para tipos sin entrada explícita. Default 24h. */
  defaultCooldownHours?: number;
  /** Ventana del snooze para "ahora no". Default 48h. */
  snoozeHours?: number;
  /** TTL por defecto de las propuestas. Default 72h. */
  defaultTtlHours?: number;
}

/** Estado serializable del motor (para IndexedDB vía src/lib/storage). */
export interface SuggestionsSnapshot {
  suggestions: Suggestion[];
  /** Última decisión por tipo de cooldown: { tipo: { iso, cooldownHours } }. */
  lastDecidedByType: Record<string, { iso: string; cooldownHours: number }>;
}
