// src/data/fitness/nutrition/rules.ts — Acceso tipado al RAG de nutrición (rag/nutrition.json, formato v4)
// Los valores de cálculo SIEMPRE se leen del JSON (fuente única de verdad); este módulo solo tipa y busca.

import ragJson from '../../../../rag/nutrition.json';
import type { Confidence, RuleCitation } from './types';

export interface RagLocator {
  chapter: number;
  page: number;
}

export interface RagRule {
  id: string;
  sourceId: string;
  topic: string;
  tags?: string[];
  statement: string;
  values: Record<string, number | Record<string, number>> | null;
  unit?: string;
  conditions?: Record<string, unknown>;
  confidence: Confidence;
  evidenceTier: string;
  locator: RagLocator;
}

export interface RagSource {
  id: string;
  title: string;
  author: string;
  year: number;
  edition: string;
  type: string;
  evidenceTier: string;
}

interface RagFileShape {
  domain: string;
  version: string;
  sources: RagSource[];
  rules: RagRule[];
}

export const nutritionRag = ragJson as unknown as RagFileShape;

const SOURCE_SHORT: Record<string, string> = {
  'nsca-est-4ed': 'NSCA Essentials 4ª ed (2016)',
  'maughan-nis-2000': 'Maughan, Nutrition in Sport (IOC, 2000)',
  'sportnutrition-3g-2022': 'Sport Nutrition, 3G E-learning (2022)',
};

export function getRule(ruleId: string): RagRule | undefined {
  return nutritionRag.rules.find((r) => r.id === ruleId);
}

/** Regla obligatoria: si el RAG pierde una regla usada por la UI, queremos fallar en pruebas, no en runtime. */
export function requireRule(ruleId: string): RagRule {
  const rule = getRule(ruleId);
  if (!rule) {
    throw new Error(`[nutrition] Regla "${ruleId}" no existe en rag/nutrition.json`);
  }
  return rule;
}

/** Convierte una regla RAG en cita para UI. */
export function toCitation(ruleId: string): RuleCitation {
  const rule = requireRule(ruleId);
  return {
    ruleId: rule.id,
    source: SOURCE_SHORT[rule.sourceId] ?? rule.sourceId,
    locator: `cap. ${rule.locator.chapter}, p. ${rule.locator.page}`,
    statement: rule.statement,
    confidence: rule.confidence,
  };
}

/** Valor numérico de una regla (values.value | values.min/max u objeto por sexo/nivel). */
export function ruleNumber(ruleId: string, key?: string): number {
  const rule = requireRule(ruleId);
  if (!rule.values) {
    throw new Error(`[nutrition] Regla "${ruleId}" sin valores numéricos`);
  }
  if (key !== undefined) {
    const nested = rule.values[key];
    if (typeof nested !== 'number') {
      throw new Error(`[nutrition] Regla "${ruleId}" sin clave numérica "${key}"`);
    }
    return nested;
  }
  const v = rule.values as Record<string, number>;
  if (typeof v.value === 'number') return v.value;
  if (typeof v.min === 'number') return v.min; // valor central se calcula aparte
  throw new Error(`[nutrition] Regla "${ruleId}" sin value/min directo`);
}
