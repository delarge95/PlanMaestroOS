/**
 * types.ts — Contratos del motor de reglas genérico (AG-CORE, Ola 1).
 *
 * Un `DomainRule` es una regla NUMÉRICA verificable de cualquier dominio
 * (fitness, nutrition, clinical, career, languages…) con trazabilidad
 * obligatoria a una fuente (principio §0.1: ningún número sin ruleId + cita).
 *
 * El motor (`evaluateRules.ts`) es puro: sin DOM, sin red, sin estado global.
 * Los agentes de dominio registran sus reglas y consumen `RuleEvaluation[]`.
 */

import type { UserState, WeekAggregates } from '../../data/contracts/userState';

/**
 * Nivel de evidencia de la fuente que respalda la regla.
 * Participa en la resolución de conflictos entre fuentes (§0.8):
 * meta-analysis > rct > observational > expert-book > internal-doc.
 */
export type EvidenceTier = 'meta-analysis' | 'rct' | 'observational' | 'expert-book' | 'internal-doc';

/**
 * Cita estable a la fuente. `docId` debe existir en el RAG del dominio
 * (campo `sources[].id` del `rag/<domain>.json`).
 */
export interface SourceRef {
  docId: string;
  chapter?: number | string;
  page?: number;
}

/**
 * Confianza de la regla respecto a su fuente:
 * - `explicit`: la fuente da el número tal cual.
 * - `inferred`: el número se deriva de la fuente (interpolación, población distinta).
 * - `qualitative`: la fuente solo da dirección/criterio, sin cifras.
 */
export type RuleConfidence = 'explicit' | 'inferred' | 'qualitative';

/** Rango numérico semiabierto. `min`/`max` opcionales = sin límite por ese lado. */
export interface Range {
  min?: number;
  max?: number;
}

/**
 * Umbrales de riesgo. Semántica: la regla entra en riesgo cuando el valor
 * cae FUERA del rango indicado (`value < min || value > max`).
 *
 * Relación con `optimalRange` (bandas concéntricas típicas):
 * `violation ⊃ warning ⊃ optimal`. Fuera de `optimal` pero dentro de la
 * banda `warning` ⇒ estado `warning` (subóptimo); fuera de `violation`
 * ⇒ estado `violation` (prioridad máxima).
 */
export interface RiskThresholds {
  /** Banda segura: fuera de este rango → estado `warning`. */
  warning?: Range;
  /** Fuera de este rango → estado `violation` (tiene prioridad sobre warning). */
  violation?: Range;
}

/**
 * Contexto que recibe cada regla. Precalculado por el orquestador a partir
 * de `UserState`; los dominios pueden colgar datos propios en `domain`.
 */
export interface RuleContext {
  userState: UserState;
  /** Agregados de la semana de referencia (usualmente la actual). */
  week: WeekAggregates;
  /** Agregados de la semana anterior (para reglas de progresión). */
  previousWeek?: WeekAggregates;
  /** Fecha de evaluación (`YYYY-MM-DD`). */
  todayIso: string;
  /** Datos adicionales del dominio dueño de la regla (libre, documentado por cada agente). */
  domain?: Record<string, unknown>;
}

/**
 * Regla de dominio genérica y determinista.
 *
 * `resolveValue` extrae el número a evaluar desde el contexto (determinista:
 * misma entrada ⇒ misma salida). Si devuelve `undefined`, la regla se
 * evalúa como `not-applicable` (sin datos), nunca como ok/violación.
 */
export interface DomainRule {
  /** Id estable y único (prefijo por dominio: 'fit:volume-10-20'). */
  id: string;
  /** Dominio dueño ('fitness'|'nutrition'|'clinical'|'career'|'languages'|'german'|'english'|'core'…). */
  domain: string;
  /** Descripción corta legible (1–2 líneas). */
  description: string;
  /** Tipo/categoría: 'volume'|'frequency'|'intensity'|'pain'|'progression'|'rest'|'nutrition'|'lifestyle'|string. */
  type: string;
  /** Métrica principal que evalúa ('hardSetsPerWeek', 'proteinGPerKg', 'painScale'…). */
  metric: string;
  /** Rango óptimo (dentro ⇒ estado `ok` si no hay riesgo). */
  optimalRange?: Range;
  /** Umbrales de riesgo explícitos (opcionales; ver RiskThresholds). */
  riskThresholds?: RiskThresholds;
  /** ¿Aplica esta regla al usuario/contexto? (población, equipamiento, fase…). */
  appliesWhen: (context: RuleContext) => boolean;
  /** Extrae el valor numérico a evaluar; `undefined` = sin datos. */
  resolveValue: (context: RuleContext) => number | undefined;
  confidence: RuleConfidence;
  evidenceTier: EvidenceTier;
  /** Cita obligatoria a la fuente. */
  sourceRef: SourceRef;
  /** Mensajes personalizados por estado (opcional; hay defaults). */
  messages?: Partial<Record<RuleStatus, string>>;
}

/** Estado resultante de evaluar una regla. */
export type RuleStatus = 'ok' | 'warning' | 'violation' | 'not-applicable';

/**
 * Resultado de evaluar una regla contra un contexto. Incluye el eco de
 * trazabilidad (confidence/evidenceTier/sourceRef) para que cualquier
 * superficie UI pueda responder "¿por qué?" sin volver al catálogo.
 */
export interface RuleEvaluation {
  ruleId: string;
  domain: string;
  status: RuleStatus;
  /** Valor numérico evaluado (undefined si no aplicó o sin datos). */
  value?: number;
  /** Mensaje determinista en español, con metric y cita incluidas. */
  message: string;
  confidence: RuleConfidence;
  evidenceTier: EvidenceTier;
  sourceRef: SourceRef;
}
