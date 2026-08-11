// src/data/contracts/expansionGate.ts - Evaluación de Madurez de Módulos de Expansión per Documento 07

export interface ExpansionGateChecklist {
  domainKey: string;
  domainLabel: string;
  hasConcreteDecision: boolean;
  hasDefinedDataSource: boolean;
  hasClearWeeklyAction: boolean;
  hasSuccessCriteria: boolean;
  hasPrivacyPolicy: boolean;
}

export interface ExpansionGateResult {
  isReadyForFullBuild: boolean;
  missingCriteria: string[];
  checklist: ExpansionGateChecklist;
}

const EXPANSION_MODULES_CHECKLISTS: Record<string, ExpansionGateChecklist> = {
  thesis: {
    domainKey: 'thesis',
    domainLabel: 'Tesis / TwinSight X500',
    hasConcreteDecision: true,
    hasDefinedDataSource: true,
    hasClearWeeklyAction: true,
    hasSuccessCriteria: true,
    hasPrivacyPolicy: true
  },
  languages: {
    domainKey: 'languages',
    domainLabel: 'Idiomas (Alemán A1 e Inglés Técnico)',
    hasConcreteDecision: true,
    hasDefinedDataSource: true,
    hasClearWeeklyAction: true,
    hasSuccessCriteria: true,
    hasPrivacyPolicy: true
  },
  gastronomy: {
    domainKey: 'gastronomy',
    domainLabel: 'Gastronomía & Nutrición',
    hasConcreteDecision: false,
    hasDefinedDataSource: true,
    hasClearWeeklyAction: false,
    hasSuccessCriteria: false,
    hasPrivacyPolicy: true
  },
  academy: {
    domainKey: 'academy',
    domainLabel: 'Academia & Becas',
    hasConcreteDecision: false,
    hasDefinedDataSource: true,
    hasClearWeeklyAction: false,
    hasSuccessCriteria: true,
    hasPrivacyPolicy: true
  }
};

/**
 * Evalúa los 5 criterios obligatorios del Documento 07 para promover un módulo de expansión.
 */
export function evaluateModuleReadiness(moduleKey: string): ExpansionGateResult {
  const checklist = EXPANSION_MODULES_CHECKLISTS[moduleKey] || {
    domainKey: moduleKey,
    domainLabel: moduleKey.toUpperCase(),
    hasConcreteDecision: false,
    hasDefinedDataSource: false,
    hasClearWeeklyAction: false,
    hasSuccessCriteria: false,
    hasPrivacyPolicy: false
  };

  const missingCriteria: string[] = [];

  if (!checklist.hasConcreteDecision) missingCriteria.push('Decisión/usuario concreto');
  if (!checklist.hasDefinedDataSource) missingCriteria.push('Fuente de datos definida');
  if (!checklist.hasClearWeeklyAction) missingCriteria.push('Acción semanal clara');
  if (!checklist.hasSuccessCriteria) missingCriteria.push('Criterio de éxito');
  if (!checklist.hasPrivacyPolicy) missingCriteria.push('Política de privacidad/licencia');

  return {
    isReadyForFullBuild: missingCriteria.length === 0,
    missingCriteria,
    checklist
  };
}
