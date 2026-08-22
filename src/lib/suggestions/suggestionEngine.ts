/**
 * suggestionEngine.ts — Motor de cola de sugerencias (AG-CORE, Ola 1).
 *
 * Puro y determinista: sin DOM, sin reloj interno, sin red. Toda mutación
 * recibe `nowIso` explícito (mismas entradas ⇒ mismas salidas) y devuelve
 * el resultado sin efectos ocultos. El estado completo se serializa con
 * `snapshot()` y se restaura con `SuggestionEngine.restore()` para que el
 * adaptador de IndexedDB (src/lib/storage) lo persista.
 *
 * Anti-nagging (§0.2/§0.4): capacidad máx (3 activas), cooldowns por tipo,
 * dedup por id, snooze para "ahora no" ≠ bloqueo permanente ("nunca").
 */

import type {
  DismissReason,
  Suggestion,
  SuggestionCandidate,
  SuggestionsSnapshot,
  SuggestionEngineOptions,
} from './types';

/** Milisegundos por hora (constante para aritmética de cooldowns). */
const MS_PER_HOUR = 3_600_000;

function toTime(iso: string): number {
  const t = Date.parse(iso);
  if (Number.isNaN(t)) {
    throw new Error(`ISO datetime inválido: "${iso}" (usa YYYY-MM-DDTHH:mm:ss[.sss]Z)`);
  }
  return t;
}

function addHoursIso(iso: string, hours: number): string {
  return new Date(toTime(iso) + hours * MS_PER_HOUR).toISOString();
}

function hoursBetween(fromIso: string, toIso: string): number {
  return (toTime(toIso) - toTime(fromIso)) / MS_PER_HOUR;
}

/** true si `nowIso` >= `iso` (fecha objetivo ya alcanzada o superada). */
function isPast(iso: string, nowIso: string): boolean {
  return hoursBetween(iso, nowIso) >= 0;
}

interface TypeDecision {
  iso: string;
  cooldownHours: number;
}

export class SuggestionEngine {
  private readonly suggestions = new Map<string, Suggestion>();
  private readonly lastDecidedByType = new Map<string, TypeDecision>();

  private readonly maxActive: number;
  private readonly cooldownsByType: Record<string, number>;
  private readonly defaultCooldownHours: number;
  private readonly snoozeHours: number;
  private readonly defaultTtlHours: number;

  constructor(options: SuggestionEngineOptions = {}) {
    this.maxActive = options.maxActive ?? 3;
    this.cooldownsByType = options.cooldownsByType ?? {};
    this.defaultCooldownHours = options.defaultCooldownHours ?? 24;
    this.snoozeHours = options.snoozeHours ?? 48;
    this.defaultTtlHours = options.defaultTtlHours ?? 72;
  }

  // ————————————————————————— propuesta —————————————————————————

  /**
   * Intenta proponer una sugerencia. Devuelve la sugerencia almacenada o
   * `null` si fue rechazada por: duplicado activo, capacidad llena,
   * cooldown del tipo, snooze vigente ("ahora no") o bloqueo permanente
   * ("nunca"). Los ids expirados o con outcome cerrado pueden re-proponerse.
   */
  propose(candidate: SuggestionCandidate, nowIso: string): Suggestion | null {
    const existing = this.suggestions.get(candidate.id);

    if (existing && !this.canReactivate(existing, nowIso)) {
      return null;
    }

    if (!this.typeCooldownElapsed(candidate.type, nowIso)) {
      return null;
    }

    if (!existing && this.countActive(nowIso) >= this.maxActive) {
      return null; // cola llena: la superficie actual decide, no se acumula ruido
    }

    const suggestion: Suggestion = {
      id: candidate.id,
      domain: candidate.domain,
      type: candidate.type,
      priority: candidate.priority ?? 0,
      title: candidate.title,
      body: candidate.body,
      ruleId: candidate.ruleId,
      sourceRef: candidate.sourceRef,
      status: 'proposed',
      createdAtIso: nowIso,
      expiresAtIso: addHoursIso(nowIso, candidate.ttlHours ?? this.defaultTtlHours),
    };
    this.suggestions.set(candidate.id, suggestion);
    return { ...suggestion };
  }

  /** ¿Puede este registro volver a la cola (o seguir en ella)? */
  private canReactivate(record: Suggestion, nowIso: string): boolean {
    switch (record.status) {
      case 'proposed':
      case 'shown':
      case 'accepted':
      case 'applied':
        return false; // ya está vivo o en curso: duplicado
      case 'dismissed':
        if (record.dismissReason === 'not-now') {
          // "ahora no": re-propuesta solo tras el snooze.
          return record.snoozeUntilIso !== undefined && isPast(record.snoozeUntilIso, nowIso);
        }
        return false; // "nunca": not-interested / irrelevant bloquean el id.
      case 'expired':
        return true; // caducó: puede volver si el dominio la re-propone.
      default:
        return false;
    }
  }

  /** true si el tipo no está en cooldown respecto a su última decisión. */
  private typeCooldownElapsed(type: string, nowIso: string): boolean {
    const last = this.lastDecidedByType.get(type);
    if (!last) return true;
    return hoursBetween(last.iso, nowIso) >= last.cooldownHours;
  }

  private recordDecisionByType(type: string, nowIso: string, cooldownHours: number): void {
    this.lastDecidedByType.set(type, { iso: nowIso, cooldownHours });
  }

  private countActive(nowIso: string): number {
    let count = 0;
    for (const s of this.suggestions.values()) {
      if ((s.status === 'proposed' || s.status === 'shown') && this.isVisible(s, nowIso)) {
        count += 1;
      }
    }
    return count;
  }

  private isVisible(s: Suggestion, nowIso: string): boolean {
    if (s.expiresAtIso && isPast(s.expiresAtIso, nowIso)) return false; // caducada (aún sin transición)
    if (s.status === 'dismissed' && s.snoozeUntilIso && !isPast(s.snoozeUntilIso, nowIso)) return false; // en snooze
    return true;
  }

  // ————————————————————————— transiciones —————————————————————————

  private transition(id: string, nowIso: string, from: Suggestion['status'][], apply: (s: Suggestion) => void): boolean {
    const s = this.suggestions.get(id);
    if (!s || !from.includes(s.status)) return false;
    apply(s);
    return true;
  }

  /** La superficie mostró la sugerencia (briefing/banner/tarjeta). */
  markShown(id: string, nowIso: string): boolean {
    return this.transition(id, nowIso, ['proposed'], (s) => {
      s.status = 'shown';
      s.shownAtIso = nowIso;
    });
  }

  /**
   * El usuario acepta la sugerencia (sale de la cola activa). Aceptación es
   * una decisión: activa el cooldown del tipo para no proponer otra igual
   * mientras el usuario actúa sobre esta.
   */
  accept(id: string, nowIso: string): boolean {
    const ok = this.transition(id, nowIso, ['proposed', 'shown'], (s) => {
      s.status = 'accepted';
      s.decidedAtIso = nowIso;
      s.snoozeUntilIso = undefined;
    });
    if (ok) {
      const type = this.typeOf(id);
      this.recordDecisionByType(type, nowIso, this.cooldownsByType[type] ?? this.defaultCooldownHours);
    }
    return ok;
  }

  /**
   * El usuario la descarta. `not-now` = snooze (re-proponible tras
   * `snoozeHours`); cualquier otra razón = bloqueo permanente del id.
   * Ambas activan el cooldown del tipo (más corto para `not-now`).
   */
  dismiss(id: string, reason: DismissReason, nowIso: string): boolean {
    const ok = this.transition(id, nowIso, ['proposed', 'shown'], (s) => {
      s.status = 'dismissed';
      s.decidedAtIso = nowIso;
      s.dismissReason = reason;
      if (reason === 'not-now') {
        s.snoozeUntilIso = addHoursIso(nowIso, this.snoozeHours);
      } else {
        s.snoozeUntilIso = undefined;
      }
    });
    if (ok) {
      // El cooldown del tipo es el estándar en ambos casos; la diferencia
      // "ahora no" ≠ "nunca" vive en canReactivate (snooze vs id bloqueado).
      const type = this.typeOf(id);
      this.recordDecisionByType(type, nowIso, this.cooldownsByType[type] ?? this.defaultCooldownHours);
    }
    return ok;
  }

  private typeOf(id: string): string {
    return this.suggestions.get(id)?.type ?? '';
  }

  /** Se ejecutó la acción sugerida (solo desde accepted). */
  apply(id: string, nowIso: string): boolean {
    const ok = this.transition(id, nowIso, ['accepted'], (s) => {
      s.status = 'applied';
      s.appliedAtIso = nowIso;
    });
    if (ok) {
      const type = this.typeOf(id);
      this.recordDecisionByType(type, nowIso, this.cooldownsByType[type] ?? this.defaultCooldownHours);
    }
    return ok;
  }

  /** Registra el resultado de una sugerencia aplicada (priorización futura). */
  recordOutcome(id: string, label: string, nowIso: string, positive?: boolean): boolean {
    return this.transition(id, nowIso, ['applied'], (s) => {
      s.outcome = { recordedAtIso: nowIso, label, positive };
    });
  }

  /** Transiciona a `expired` toda propuesta/mostrada caducada. @returns ids expirados. */
  expireDue(nowIso: string): string[] {
    const expired: string[] = [];
    for (const s of this.suggestions.values()) {
      if ((s.status === 'proposed' || s.status === 'shown') && s.expiresAtIso && isPast(s.expiresAtIso, nowIso)) {
        s.status = 'expired';
        expired.push(s.id);
      }
    }
    return expired;
  }

  // ————————————————————————— consultas —————————————————————————

  /**
   * Cola activa visible: proposed|shown no caducadas, ordenadas por
   * prioridad desc y luego por antigüedad (FIFO dentro de cada prioridad).
   * Por construcción su longitud ≤ `maxActive`.
   */
  active(nowIso: string): Suggestion[] {
    return [...this.suggestions.values()]
      .filter((s) => (s.status === 'proposed' || s.status === 'shown') && this.isVisible(s, nowIso))
      .sort((a, b) => (b.priority - a.priority) || a.createdAtIso.localeCompare(b.createdAtIso))
      .map((s) => ({ ...s }));
  }

  get(id: string): Suggestion | undefined {
    const s = this.suggestions.get(id);
    return s ? { ...s } : undefined;
  }

  /** Todos los registros (histórico completo, orden de inserción). */
  all(): Suggestion[] {
    return [...this.suggestions.values()].map((s) => ({ ...s }));
  }

  // ————————————————————————— persistencia —————————————————————————

  /** Estado serializable para el adaptador de almacenamiento. */
  snapshot(): SuggestionsSnapshot {
    return {
      suggestions: [...this.suggestions.values()].map((s) => ({ ...s })),
      lastDecidedByType: Object.fromEntries(this.lastDecidedByType),
    };
  }

  /** Restaura un snapshot previo (conserva la configuración del constructor). */
  restore(snapshot: SuggestionsSnapshot): void {
    this.suggestions.clear();
    this.lastDecidedByType.clear();
    for (const s of snapshot.suggestions) this.suggestions.set(s.id, { ...s });
    for (const [type, decision] of Object.entries(snapshot.lastDecidedByType)) {
      this.lastDecidedByType.set(type, { ...decision });
    }
  }

  static restore(snapshot: SuggestionsSnapshot, options: SuggestionEngineOptions = {}): SuggestionEngine {
    const engine = new SuggestionEngine(options);
    engine.restore(snapshot);
    return engine;
  }
}

/** Factory azucarado. */
export function createSuggestionEngine(options: SuggestionEngineOptions = {}): SuggestionEngine {
  return new SuggestionEngine(options);
}
