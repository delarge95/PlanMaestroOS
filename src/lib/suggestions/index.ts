/**
 * src/lib/suggestions — Motor de sugerencias proactivas (AG-CORE, Ola 1).
 *
 * API pública para los agentes de dominio y superficies (AG-ORQ):
 * - Tipos: `Suggestion`, `SuggestionCandidate`, `SuggestionStatus`,
 *   `DismissReason`, `SuggestionOutcome`, `SuggestionEngineOptions`,
 *   `SuggestionsSnapshot`.
 * - Motor: `createSuggestionEngine(options)` →
 *   `propose(candidate, nowIso)`, `markShown`, `accept`, `dismiss(id, reason)`,
 *   `apply`, `recordOutcome`, `expireDue`, `active(nowIso)`,
 *   `snapshot()` / `SuggestionEngine.restore(snapshot)`.
 *
 * Flujo con EventBus (§0.2): el dominio escucha su evento, evalúa reglas
 * con `src/lib/rules` y propone:
 * ```ts
 * const engine = createSuggestionEngine({ cooldownsByType: { 'volume-adjust': 72 } });
 * bus.on('anomaly:rule-violation', (e) => {
 *   if (e.payload.domain !== 'fitness') return;
 *   engine.propose({
 *     id: `fit:vol-${e.payload.ruleId}-${mondayIso}`,
 *     domain: 'fitness',
 *     type: 'volume-adjust',
 *     priority: 5,
 *     title: 'Volumen semanal por encima del rango',
 *     body: `24 series duras vs óptimo 10–20 (regla ${e.payload.ruleId}).`,
 *     ruleId: e.payload.ruleId,
 *     sourceRef: { docId: 'overcoming-gravity-2', chapter: 12, page: 148 },
 *     ttlHours: 48,
 *   }, e.occurredAtIso);
 * });
 * // Superficie (AG-ORQ): engine.active(nowIso) → render → markShown al pintar.
 * ```
 *
 * Políticas: máx 3 activas (configurable), cooldowns por tipo, "ahora no"
 * (snooze 48h) ≠ "nunca" (id bloqueado), TTL → expired. La persistencia es
 * responsabilidad de la superficie: snapshot() → adaptador src/lib/storage.
 */
export type {
  DismissReason,
  Suggestion,
  SuggestionCandidate,
  SuggestionEngineOptions,
  SuggestionStatus,
  SuggestionOutcome,
  SuggestionsSnapshot,
} from './types';

export {
  SuggestionEngine,
  createSuggestionEngine,
} from './suggestionEngine';

export {
  fromRuleEvaluations,
  RULE_SUGGESTION_COOLDOWNS,
} from './fromRuleEvaluations';
