// src/data/clinical/clinicalTasks.ts - Tareas de Regulación y Apoyo Operacional Clínico

import type { Task } from '../contracts/task';

export const initialClinicalTasks: Task[] = [
  {
    id: 'clin-1',
    externalId: 'clin-1',
    title: 'Higiene de Sueño & Cierre Digital',
    area: 'clinico',
    singleNextAction: 'Desconectar pantallas a las 21:00 y encender luz cálida',
    estimatedMinutes: 10,
    priority: 'Alta',
    status: 'PorHacer',
    isTop3: true,
    createdAtIso: new Date().toISOString(),
    updatedAtIso: new Date().toISOString()
  },
  {
    id: 'clin-2',
    externalId: 'clin-2',
    title: 'Exposición Gradual CBT',
    area: 'clinico',
    singleNextAction: 'Enviar 1 mensaje breve a colega sin sobre-editar',
    estimatedMinutes: 5,
    priority: 'Media',
    status: 'PorHacer',
    isTop3: false,
    createdAtIso: new Date().toISOString(),
    updatedAtIso: new Date().toISOString()
  },
  {
    id: 'clin-3',
    externalId: 'clin-3',
    title: 'Pausa Somática & Respiración 4-7-8',
    area: 'clinico',
    singleNextAction: 'hacer 3 ciclos de respiración antes del bloque de trabajo',
    estimatedMinutes: 5,
    priority: 'Media',
    status: 'PorHacer',
    isTop3: false,
    createdAtIso: new Date().toISOString(),
    updatedAtIso: new Date().toISOString()
  }
];
