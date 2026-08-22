/**
 * evaluateRules.ts — Motor de evaluación de reglas genérico (AG-CORE, Ola 1).
 *
 * Puro y determinista: `evaluateRules(rules, context)` produce el mismo
 * array de `RuleEvaluation[]` para las mismas entradas. Sin DOM, sin red,
 * sin reloj (la fecha entra por `context.todayIso`).
 *
 * Semántica de estados (por orden de prioridad):
 * - `not-applicable`: `appliesWhen` es false O no hay datos (`resolveValue` → undefined).
 * - `violation`: el valor cae fuera de `riskThresholds.violation` (riesgo duro).
 * - `warning`: fuera de `riskThresholds.warning` (banda segura), o fuera de
 *   `optimalRange` (subóptimo: p.ej. 23 series con óptimo 10–20 y banda
 *   segura 6–24 ⇒ warning, no ok).
 * - `ok`: dentro de lo óptimo y sin riesgo.
 */

import type {
  DomainRule,
  Range,
  RuleContext,
  RuleEvaluation,
  RuleStatus,
} from './types';

/** true si el valor está dentro del rango semiabierto. */
export function withinBounds(value: number, range: Range): boolean {
  if (range.min !== undefined && value < range.min) return false;
  if (range.max !== undefined && value > range.max) return false;
  return true;
}

function formatRange(range: Range): string {
  const min = range.min !== undefined ? String(range.min) : '−∞';
  const max = range.max !== undefined ? String(range.max) : '∞';
  return `[${min}, ${max}]`;
}

function citation(rule: DomainRule): string {
  const parts: string[] = [rule.sourceRef.docId];
  if (rule.sourceRef.chapter !== undefined) parts.push(`cap. ${rule.sourceRef.chapter}`);
  if (rule.sourceRef.page !== undefined) parts.push(`p. ${rule.sourceRef.page}`);
  return parts.join(' · ');
}

/** Mensaje determinista por defecto (español). */
export function defaultMessage(rule: DomainRule, status: RuleStatus, value?: number): string {
  const src = citation(rule);
  switch (status) {
    case 'ok':
      return `${rule.metric}: ${value} — dentro del rango óptimo ${formatRange(rule.optimalRange ?? {})} (regla ${rule.id}, ${src}).`;
    case 'warning':
      return `${rule.metric}: ${value} — fuera del rango óptimo ${formatRange(rule.optimalRange ?? rule.riskThresholds?.warning ?? {})} (regla ${rule.id}, ${src}).`;
    case 'violation':
      return `${rule.metric}: ${value} — supera el umbral de riesgo ${formatRange(rule.riskThresholds?.violation ?? {})} (regla ${rule.id}, ${src}).`;
    case 'not-applicable':
      return `Regla ${rule.id} (${rule.metric}) no aplicable en este contexto.`;
  }
}

/** Evalúa UNA regla contra un contexto. */
export function evaluateRule(rule: DomainRule, context: RuleContext): RuleEvaluation {
  const base = {
    ruleId: rule.id,
    domain: rule.domain,
    confidence: rule.confidence,
    evidenceTier: rule.evidenceTier,
    sourceRef: rule.sourceRef,
  };

  if (!rule.appliesWhen(context)) {
    return {
      ...base,
      status: 'not-applicable',
      message: rule.messages?.['not-applicable'] ?? defaultMessage(rule, 'not-applicable'),
    };
  }

  const value = rule.resolveValue(context);
  if (value === undefined || Number.isNaN(value)) {
    return {
      ...base,
      status: 'not-applicable',
      message: rule.messages?.['not-applicable'] ?? defaultMessage(rule, 'not-applicable'),
    };
  }

  let status: RuleStatus;
  if (rule.riskThresholds?.violation && !withinBounds(value, rule.riskThresholds.violation)) {
    status = 'violation';
  } else if (rule.riskThresholds?.warning && !withinBounds(value, rule.riskThresholds.warning)) {
    status = 'warning';
  } else if (rule.optimalRange && !withinBounds(value, rule.optimalRange)) {
    // Fuera de lo óptimo (aunque dentro de la banda segura) ⇒ warning.
    status = 'warning';
  } else {
    status = 'ok';
  }

  return {
    ...base,
    status,
    value,
    message: rule.messages?.[status] ?? defaultMessage(rule, status, value),
  };
}

/**
 * Evalúa un catálogo de reglas contra un contexto.
 * Orden de salida = orden del catálogo (estable para UI y snapshots).
 */
export function evaluateRules(rules: readonly DomainRule[], context: RuleContext): RuleEvaluation[] {
  return rules.map((rule) => evaluateRule(rule, context));
}

/** Filtra solo las evaluaciones con riesgo (warning o violation). */
export function withRisk(evaluations: readonly RuleEvaluation[]): RuleEvaluation[] {
  return evaluations.filter((e) => e.status === 'warning' || e.status === 'violation');
}
