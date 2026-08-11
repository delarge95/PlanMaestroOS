/**
 * src/data/contracts/task.ts - Contrato de Datos Oficial para Tareas de Plan Maestro OS
 * 
 * TIENDA ÚNICA DE DATOS: Las tareas en memoria se gestionan de forma centralizada 
 * en el store principal: `src/store/appStore.ts` (State hook: `useAppStore`).
 * Las llamadas a la API de Notion ocurren exclusivamente a través de los scripts/worker
 * o adaptadores aislados en `src/lib/notion/` y `src/data/adapters/`.
 */

export type TaskPriority = 'Alta' | 'Media' | 'Baja';
export type TaskStatus = 'PorHacer' | 'EnCurso' | 'Bloqueado' | 'Hecho' | 'Saltado';

export interface Task {
  id: string;
  externalId: string;
  notionPageId?: string;
  title: string;
  area: 'agenda' | 'fitness' | 'carrera' | 'tesis' | 'idiomas' | 'clinico' | 'gastronomia' | string;
  projectExternalId?: string;
  singleNextAction: string;
  estimatedMinutes: number;
  priority: TaskPriority;
  dueDateIso?: string;
  status: TaskStatus;
  isTop3?: boolean;
  blockAssignment?: 'A' | 'B' | null;
  createdAtIso: string;
  updatedAtIso: string;
}

export interface TodayTaskSummary {
  activeBlockName: string;
  primaryAction10Min: {
    title: string;
    targetArea: string;
    estimatedMinutes: number;
  };
  top3Tasks: Task[];
  blockATask?: Task;
  blockBTask?: Task;
}
