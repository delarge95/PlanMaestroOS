// src/lib/sync/automationPolicy.ts - Política de Automatización y Aprobación Humana

export type AutomationActionType =
  // Acciones de solo lectura / propuesta (permitidas)
  | 'propose_morning_plan'
  | 'propose_evening_closure'
  | 'summarize_job_requirements'
  | 'create_application_draft'
  | 'detect_fitness_pr'
  | 'summarize_github_activity'
  // Acciones con impacto externo o clínico (requieren aprobación humana obligatoria)
  | 'send_external_message'
  | 'submit_job_application'
  | 'publish_or_edit_public_profile'
  | 'share_personal_data'
  | 'modify_medical_prescription'
  | 'auto_close_or_reorder_tasks';

export interface ActionExecutionContext {
  actionType: AutomationActionType;
  humanApproved?: boolean;
  requestedBy: 'user' | 'system_job' | 'ai_assistant';
  details: Record<string, any>;
}

export interface PolicyValidationResult {
  allowed: boolean;
  reason: string;
  requiresHumanApproval: boolean;
}

const HUMAN_APPROVAL_REQUIRED_ACTIONS = new Set<AutomationActionType>([
  'send_external_message',
  'submit_job_application',
  'publish_or_edit_public_profile',
  'share_personal_data',
  'modify_medical_prescription',
  'auto_close_or_reorder_tasks'
]);

/**
 * Determina si una acción de automatización requiere aprobación humana explicita.
 */
export function requiresHumanApproval(actionType: AutomationActionType): boolean {
  return HUMAN_APPROVAL_REQUIRED_ACTIONS.has(actionType);
}

/**
 * Valida un contexto de ejecución frente a las políticas de gobernanza 03.
 */
export function validateAutomationPolicy(context: ActionExecutionContext): PolicyValidationResult {
  const needsApproval = requiresHumanApproval(context.actionType);

  if (needsApproval && !context.humanApproved) {
    return {
      allowed: false,
      requiresHumanApproval: true,
      reason: `La acción '${context.actionType}' tiene impacto externo o clínico crítico y requiere aprobación humana explícita antes de ejecutarse.`
    };
  }

  return {
    allowed: true,
    requiresHumanApproval: needsApproval,
    reason: needsApproval
      ? `Acción '${context.actionType}' aprobada explícitamente por el usuario.`
      : `Acción de preparación/propuesta '${context.actionType}' permitida por política predeterminada.`
  };
}
