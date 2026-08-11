// src/lib/ai/rag/dynamicRag.ts - RAGs Dinámicos (Datos Regenerables del Usuario)

export interface DynamicRagEntry {
  id: string;
  sourceType: 'user_note' | 'task_history' | 'workout_session' | 'career_pipeline';
  title: string;
  snippet: string;
  updatedAtIso: string;
}

export function generateDynamicRagSnapshot(): DynamicRagEntry[] {
  return [
    {
      id: 'dyn-1',
      sourceType: 'user_note',
      title: 'Nota de Tesis / Enfoque',
      snippet: 'Metodología mixta con análisis cuantitativo de shaders en Unreal Engine 5.5.',
      updatedAtIso: new Date().toISOString()
    },
    {
      id: 'dyn-2',
      sourceType: 'task_history',
      title: 'Tareas completadas esta semana',
      snippet: 'Refactorización del store de tasks, integración de pipeline laboral y cursos de HLSL.',
      updatedAtIso: new Date().toISOString()
    },
    {
      id: 'dyn-3',
      sourceType: 'career_pipeline',
      title: 'Aplicaciones activas',
      snippet: 'Epic Games (Entrevista pendiente), Ubisoft (Seguimiento), Riot Games (Correo en frío).',
      updatedAtIso: new Date().toISOString()
    }
  ];
}
