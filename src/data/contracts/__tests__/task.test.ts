import { describe, it, expect } from 'vitest';
import type { Task } from '../task';

describe('Task Contract', () => {
  it('should construct a valid Task object with required fields', () => {
    const task: Task = {
      id: 't1',
      externalId: 'ext-t1',
      title: 'Tarea de prueba',
      area: 'trabajo',
      singleNextAction: 'Comenzar revisión',
      estimatedMinutes: 10,
      priority: 'Alta',
      status: 'PorHacer',
      createdAtIso: '2026-08-10',
      updatedAtIso: '2026-08-10'
    };

    expect(task.id).toBe('t1');
    expect(task.status).toBe('PorHacer');
    expect(task.title).toBe('Tarea de prueba');
  });
});
