/**
 * types.ts — Taxonomía de eventos del sistema (AG-CORE, Ola 1).
 *
 * Principio §0.2 del plan multi-agente: la IA proactiva se dispara por
 * EVENTOS deterministas locales (no por chat). Cuatro categorías:
 *
 * - `time`:    reloj (día/semana/hitos de jornada). Emitidos por el orquestador.
 * - `cycle`:   cambios de fase/ciclo de cualquier dominio (programa, weeklies).
 * - `session`: ciclo de vida de una sesión de trabajo/entrenamiento/estudio.
 * - `anomaly`: desviaciones que requieren reacción (dolor, energía, rachas,
 *              tareas atascadas, violaciones de reglas).
 *
 * Los payloads reutilizan el vocabulario del contrato `UserState`
 * (BodyZone, PainTiming, PerceivedEnergy) para que ningún dominio traduzca.
 */

import type { BodyZone, PainTiming, PerceivedEnergy } from '../../data/contracts/userState';

/** Categoría estructural del evento (prefijo del tipo). */
export type EventCategory = 'time' | 'cycle' | 'session' | 'anomaly';

/** Catálogo cerrado de tipos de evento. Un dominio nuevo => entrada nueva aquí (TICKET a CORE). */
export type AppEventType =
  // — time —
  | 'time:day-start'
  | 'time:morning'
  | 'time:evening'
  | 'time:day-end'
  | 'time:week-start'
  | 'time:week-end'
  // — cycle —
  | 'cycle:phase-change'
  | 'cycle:program-milestone'
  | 'cycle:weekly-review'
  // — session —
  | 'session:started'
  | 'session:completed'
  | 'session:skipped'
  | 'session:set-logged'
  | 'session:pain-reported'
  // — anomaly —
  | 'anomaly:pain-spike'
  | 'anomaly:energy-drop'
  | 'anomaly:streak-broken'
  | 'anomaly:task-stuck'
  | 'anomaly:rule-violation';

/** Payloads tipados por evento. `unknown` en tiempo de compilación = libre. */
export interface EventPayloadMap {
  'time:day-start': { dateIso: string };
  'time:morning': { dateIso: string };
  'time:evening': { dateIso: string };
  'time:day-end': { dateIso: string };
  'time:week-start': { weekStartIso: string };
  'time:week-end': { weekStartIso: string };
  'cycle:phase-change': { domain: string; from: string; to: string };
  'cycle:program-milestone': { programId: string; milestone: string; domain?: string };
  'cycle:weekly-review': { weekStartIso: string };
  'session:started': { sessionId: string; domain: string };
  'session:completed': { sessionId: string; domain: string; durationMin?: number };
  'session:skipped': { sessionId?: string; domain: string; reason?: string };
  'session:set-logged': { sessionId: string; exerciseId: string; setIndex: number };
  'session:pain-reported': { bodyZone: BodyZone; severity: number; timing?: PainTiming };
  'anomaly:pain-spike': { bodyZone: BodyZone; severity: number; baselineSeverity: number };
  'anomaly:energy-drop': { energy: PerceivedEnergy; previous: PerceivedEnergy };
  'anomaly:streak-broken': { domain: string; streakDays: number };
  'anomaly:task-stuck': { taskId: string; daysStuck: number };
  'anomaly:rule-violation': { ruleId: string; domain: string; value?: number };
}

/** Envelope de evento ya emitido (inmutable). */
export interface AppEvent<T = unknown> {
  /** Id determinista `${type}@${occurredAtIso}#${seq}` (o el que inyecte el emisor). */
  id: string;
  type: AppEventType;
  category: EventCategory;
  occurredAtIso: string;
  /** Dominio emisor ('core' para eventos del orquestador). */
  domain: string;
  payload: T;
}

/** Handler tipado para un evento concreto. */
export type EventHandler<K extends AppEventType> = (event: AppEvent<EventPayloadMap[K]>) => void;

/** Handler comodín: recibe todos los eventos. */
export type WildcardHandler = (event: AppEvent) => void;

/** Deriva la categoría desde el prefijo del tipo. */
export function categoryOf(type: AppEventType): EventCategory {
  return type.slice(0, type.indexOf(':')) as EventCategory;
}
