// src/lib/ai/jobs/morningPlan.ts - Job de Planificación Matutina (Top 3 y Acción <10 min)

import type { AiResponse } from '../client';

export async function runMorningPlanJob(): Promise<AiResponse> {
  return {
    text: `Propuesta de plan para hoy:\n1. [Laboral] Enviar seguimiento a Epic Games (Primera acción <10 min: Redactar correo corto)\n2. [Fitness] Sesión de Torso/Brazo A1 (Primera acción <10 min: Calentamiento de hombro)\n3. [Tesis] Redactar sección 3.2 de metodología (Primera acción <10 min: Abrir borrador)`,
    sourcesUsed: ['Tareas pendientes en Notion', 'Calendario del día'],
    tokensUsed: 120,
    timestampIso: new Date().toISOString()
  };
}
