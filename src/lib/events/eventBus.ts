/**
 * eventBus.ts — Bus de eventos local determinista (AG-CORE, Ola 1).
 *
 * Contrato de comportamiento:
 * - Los handlers se invocan en ORDEN DE REGISTRO (determinista).
 * - Un handler que lanza NO rompe la cadena: el error se registra en
 *   `lastErrors` y el siguiente handler se ejecuta (aislamiento multi-agente).
 * - Todo evento queda en un historial acotado (ring buffer) para depuración
 *   y para superficies tipo "¿qué disparó esto?".
 * - Sin DOM, sin reloj interno: `occurredAtIso` lo aporta el emisor.
 *
 * El flujo del sistema (§0.2) es: EventBus → motor de reglas → SuggestionEngine.
 * Los dominios NUNCA muestran sugerencias directamente desde un handler del
 * bus: proponen vía `SuggestionEngine.propose` y la superficie decide.
 */

import type {
  AppEvent,
  AppEventType,
  EventPayloadMap,
  EventHandler,
  WildcardHandler,
} from './types';
import { categoryOf } from './types';

export interface EventBusOptions {
  /** Tamaño del historial retenido (default 100). */
  historyLimit?: number;
}

interface Registration {
  handler: (event: AppEvent) => void;
}

/** Error de handler registrado (aislado, nunca lanzado al emisor). */
export interface HandlerError {
  eventId: string;
  handlerIndex: number;
  message: string;
}

export class EventBus {
  private readonly handlers = new Map<AppEventType, Registration[]>();
  private readonly wildcardHandlers: Registration[] = [];
  private readonly historyLimit: number;
  private readonly eventHistory: AppEvent[] = [];
  private readonly errorLog: HandlerError[] = [];
  private seq = 0;

  constructor(options: EventBusOptions = {}) {
    this.historyLimit = options.historyLimit ?? 100;
  }

  /**
   * Registra un handler tipado para un tipo concreto.
   * @returns función de desuscripción (idempotente).
   */
  on<K extends AppEventType>(type: K, handler: EventHandler<K>): () => void {
    const regs = this.handlers.get(type) ?? [];
    const reg: Registration = { handler: handler as (event: AppEvent) => void };
    regs.push(reg);
    this.handlers.set(type, regs);
    let subscribed = true;
    return () => {
      if (!subscribed) return;
      subscribed = false;
      const list = this.handlers.get(type);
      if (!list) return;
      const idx = list.indexOf(reg);
      if (idx >= 0) list.splice(idx, 1);
    };
  }

  /** Registra un handler que recibe TODOS los eventos (logging, depuración). */
  onAny(handler: WildcardHandler): () => void {
    const reg: Registration = { handler };
    this.wildcardHandlers.push(reg);
    let subscribed = true;
    return () => {
      if (!subscribed) return;
      subscribed = false;
      const idx = this.wildcardHandlers.indexOf(reg);
      if (idx >= 0) this.wildcardHandlers.splice(idx, 1);
    };
  }

  /** Como `on` pero se desuscribe tras la primera invocación. */
  once<K extends AppEventType>(type: K, handler: EventHandler<K>): () => void {
    const off = this.on(type, (event) => {
      off();
      handler(event);
    });
    return off;
  }

  /**
   * Emite un evento. Construye el envelope (id determinista con secuencia
   * por instancia), lo despacha en orden de registro y lo archiva.
   * Nunca lanza por un handler defectuoso.
   */
  emit<K extends AppEventType>(
    type: K,
    occurredAtIso: string,
    payload: EventPayloadMap[K],
    options: { domain?: string; id?: string } = {},
  ): AppEvent<EventPayloadMap[K]> {
    this.seq += 1;
    const event: AppEvent<EventPayloadMap[K]> = Object.freeze({
      id: options.id ?? `${type}@${occurredAtIso}#${this.seq}`,
      type,
      category: categoryOf(type),
      occurredAtIso,
      domain: options.domain ?? 'core',
      payload,
    });

    const targets = [
      ...(this.handlers.get(type) ?? []),
      ...this.wildcardHandlers,
    ];
    targets.forEach((reg, handlerIndex) => {
      try {
        reg.handler(event as AppEvent);
      } catch (error) {
        this.errorLog.push({
          eventId: event.id,
          handlerIndex,
          message: error instanceof Error ? error.message : String(error),
        });
      }
    });

    this.eventHistory.push(event as AppEvent);
    if (this.eventHistory.length > this.historyLimit) {
      this.eventHistory.splice(0, this.eventHistory.length - this.historyLimit);
    }
    return event;
  }

  /** Copia del historial (más reciente al final), opcionalmente filtrado por tipo. */
  history(type?: AppEventType): readonly AppEvent[] {
    const snapshot = [...this.eventHistory];
    return type ? snapshot.filter((e) => e.type === type) : snapshot;
  }

  /** Último evento emitido de un tipo (o undefined). */
  last(type: AppEventType): AppEvent | undefined {
    for (let i = this.eventHistory.length - 1; i >= 0; i -= 1) {
      if (this.eventHistory[i].type === type) return this.eventHistory[i];
    }
    return undefined;
  }

  /** Errores de handlers aislados (no lanzados). Útil en desarrollo/tests. */
  handlerErrors(): readonly HandlerError[] {
    return [...this.errorLog];
  }

  /** Número de suscripciones activas (tipadas + comodín). */
  listenerCount(): number {
    let total = this.wildcardHandlers.length;
    for (const regs of this.handlers.values()) total += regs.length;
    return total;
  }

  /** Resetea suscripciones e historial (tests / sesiones de diagnóstico). */
  clear(): void {
    this.handlers.clear();
    this.wildcardHandlers.length = 0;
    this.eventHistory.length = 0;
    this.errorLog.length = 0;
    this.seq = 0;
  }
}

/** Factory con opciones por defecto. */
export function createEventBus(options: EventBusOptions = {}): EventBus {
  return new EventBus(options);
}
