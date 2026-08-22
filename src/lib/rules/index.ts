/**
 * src/lib/rules — Motor de reglas genérico de dominio (AG-CORE).
 *
 * API pública estable para los 9 agentes de dominio:
 * - Tipos: `DomainRule`, `RuleContext`, `RuleEvaluation`, `RuleStatus`,
 *   `EvidenceTier`, `RuleConfidence`, `SourceRef`, `Range`, `RiskThresholds`.
 * - Motor: `evaluateRules(rules, context)`, `evaluateRule`, `withRisk`, `withinBounds`.
 *
 * Ejemplo de uso (AG-FIT):
 * ```ts
 * import { evaluateRules, type DomainRule } from '@/lib/rules';
 * const volumeRule: DomainRule = {
 *   id: 'fit:volume-10-20',
 *   domain: 'fitness',
 *   description: '10–20 series duras por músculo y semana',
 *   type: 'volume',
 *   metric: 'hardSetsPerWeek',
 *   optimalRange: { min: 10, max: 20 },
 *   riskThresholds: { violation: { min: 0, max: 25 } },
 *   appliesWhen: (ctx) => (ctx.userState.profile.trainingAge ?? 0) > 0,
 *   resolveValue: (ctx) => ctx.week.byPattern.find((p) => p.pattern === 'vertical-pull')?.hardSets,
 *   confidence: 'explicit',
 *   evidenceTier: 'meta-analysis',
 *   sourceRef: { docId: 'nippard-hypertrophy', chapter: 7, page: 92 },
 * };
 * ```
 */
export type {
  DomainRule,
  RuleContext,
  RuleEvaluation,
  RuleStatus,
  RuleConfidence,
  EvidenceTier,
  SourceRef,
  Range,
  RiskThresholds,
} from './types';

export {
  evaluateRules,
  evaluateRule,
  withRisk,
  withinBounds,
  defaultMessage,
} from './evaluateRules';
