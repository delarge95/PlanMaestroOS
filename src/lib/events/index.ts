/**
 * src/lib/events — Bus de eventos determinista con taxonomía del sistema.
 *
 * API pública para los agentes de dominio:
 * - Tipos: `AppEventType` (catálogo cerrado), `EventCategory`
 *   ('time'|'cycle'|'session'|'anomaly'), `AppEvent`, `EventPayloadMap`,
 *   `EventHandler`, `WildcardHandler`.
 * - Bus: `createEventBus()` → `on(type, handler)`, `onAny`, `once`,
 *   `emit(type, occurredAtIso, payload, {domain})`, `history`, `last`.
 *
 * Ejemplo (AG-CLIN emitiendo, AG-FIT escuchando):
 * ```ts
 * import { createEventBus } from '@/lib/events';
 * const bus = createEventBus();
 * const off = bus.on('anomaly:pain-spike', (e) => {
 *   // e.payload tipado: { bodyZone, severity, baselineSeverity }
 *   if (e.payload.severity >= 7) suggestionEngine.propose(/* ... *\/, e.occurredAtIso);
 * });
 * bus.emit('anomaly:pain-spike', nowIso, { bodyZone: 'shoulder', severity: 8, baselineSeverity: 2 }, { domain: 'fitness' });
 * off(); // desuscribir al desmontar
 * ```
 *
 * Regla de oro: los handlers NUNCA escriben UI directamente; proponen
 * sugerencias vía `SuggestionEngine` y las superficies (briefing, banner)
 * deciden qué mostrar (máx 1 nudge event-driven/día, §0.2).
 */
export type {
  AppEvent,
  AppEventType,
  EventCategory,
  EventPayloadMap,
  EventHandler,
  WildcardHandler,
} from './types';

export { categoryOf } from './types';

export {
  EventBus,
  createEventBus,
  type EventBusOptions,
  type HandlerError,
} from './eventBus';
