/**
 * fromRuleEvaluations.ts — Puente RuleEvaluation → SuggestionEngine.
 *
 * Convierte evaluaciones del motor de reglas en candidatos de sugerencia
 * (violations antes que warnings; trazabilidad ruleId+sourceRef siempre).
 * El SuggestionEngine aplica máx-3-activas, cooldowns y snooze.
 */

import type { RuleEvaluation } from '../rules';
import type { SuggestionCandidate } from './types';

/** Cooldowns por tipo de sugerencia derivada de reglas (horas). */
export const RULE_SUGGESTION_COOLDOWNS: Record<string, number> = {
  'training-load': 24,
  pain: 48,
  progression: 72,
  lifestyle: 96,
};

const TYPE_BY_RULE_TYPE: Record<string, string> = {
  volume: 'training-load',
  frequency: 'training-load',
  intensity: 'training-load',
  progression: 'progression',
  pain: 'pain',
  rest: 'training-load',
  lifestyle: 'lifestyle',
};

function citationLabel(e: RuleEvaluation): string {
  const { docId, chapter, page } = e.sourceRef;
  const place = chapter !== undefined ? `cap. ${chapter}` : '';
  const pg = page !== undefined ? `, p. ${page}` : '';
  return `${docId}${place ? ` ${place}${pg}` : pg}`;
}

/**
 * Evaluaciones → candidatos. Solo warnings/violations generan sugerencias.
 * Id estable por semana+regla (cooldown y dedup naturales del motor).
 */
export function fromRuleEvaluations(
  evaluations: RuleEvaluation[],
  weekKey: string,
): SuggestionCandidate[] {
  const relevant = evaluations
    .filter((e) => e.status === 'warning' || e.status === 'violation')
    .sort((a, b) => (a.status === 'violation' ? -1 : 0) - (b.status === 'violation' ? -1 : 0));

  return relevant.map((e) => {
    const isViolation = e.status === 'violation';
    const type = TYPE_BY_RULE_TYPE[e.domain === 'fitness' ? ruleTypeFromId(e.ruleId) : 'lifestyle'] ?? 'lifestyle';
    return {
      id: `${e.ruleId}--${weekKey}`,
      domain: e.domain,
      type,
      priority: isViolation ? 8 : 5,
      title: suggestionTitle(e),
      body: `${e.message} — ${citationLabel(e)} (${e.confidence})`,
      ruleId: e.ruleId,
      sourceRef: e.sourceRef,
      ttlHours: isViolation ? 48 : 72,
    };
  });
}

function ruleTypeFromId(ruleId: string): string {
  const slug = ruleId.split(':')[1] ?? '';
  if (slug.startsWith('volume')) return 'volume';
  if (slug.startsWith('frequency')) return 'frequency';
  if (slug.startsWith('pain')) return 'pain';
  if (slug.startsWith('deload')) return 'rest';
  if (slug.startsWith('session-rpe')) return 'intensity';
  if (slug.startsWith('overtraining')) return 'lifestyle';
  if (slug.startsWith('tendon')) return 'frequency';
  return 'lifestyle';
}

function suggestionTitle(e: RuleEvaluation): string {
  const map: Record<string, string> = {
    'fit:volume-mev-per-pattern': 'Sube el volumen semanal',
    'fit:volume-mrv-per-pattern': 'Recorta volumen: zona de fatiga',
    'fit:frequency-2-3x-per-pattern': 'Redistribuye la frecuencia',
    'fit:session-rpe-ceiling': 'RPE de sesión muy alto',
    'fit:volume-ramp-weekly': 'Progresión de volumen demasiado brusca',
    'fit:deload-due': 'Deload pendiente',
    'fit:pain-session-ceiling': 'Dolor por encima del umbral',
    'fit:pain-not-worse-next-day': 'El dolor empeora al día siguiente',
    'fit:tendon-loading-frequency': 'Frecuencia de estímulo tendinoso',
    'fit:overtraining-screening': 'Señales de sobreentrenamiento',
  };
  return map[e.ruleId] ?? `Ajuste sugerido (${e.ruleId})`;
}
