// src/lib/ai/jobs/eveningReview.ts - Job de Cierre del Día y Propuesta para Mañana

import type { AiResponse } from '../client';

export async function runEveningReviewJob(): Promise<AiResponse> {
  return {
    text: `Cierre del día:\n- Tareas completadas: 3 (Fitness, Cursos HLSL, Integración de pipeline).\n- Pendientes diferidas: 1 (Revisión de contrato).\n\nPropuesta de plan para mañana:\n1. Avanzar en módulo de vocabulario en Alemán.\n2. Enviar actualización a recruiter.`,
    sourcesUsed: ['Log de actividades completadas hoy'],
    tokensUsed: 110,
    timestampIso: new Date().toISOString()
  };
}
