import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import SectionNav from '../ui/SectionNav';
import UnblockPanel from './UnblockPanel';
import { initialClinicalTasks } from '../../data/clinical/clinicalTasks';
import type { Task } from '../../data/contracts/task';
import Button from '../ui/Button';
import { HeartPulse } from 'lucide-react';

export interface ClinicalTodayProps {
  currentPath?: string;
}

export default function ClinicalToday({ currentPath = '/app/clinical' }: ClinicalTodayProps) {
  const [tasks, setTasks] = useState<Task[]>(initialClinicalTasks.slice(0, 3));

  const toggleTaskDone = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: t.status === 'Hecho' ? 'PorHacer' : 'Hecho' } : t))
    );
  };

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>

        {/* NAVEGACIÓN NIVEL 2 */}
        <SectionNav sectionKey="clinical" currentPath={currentPath} level={2} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <HeartPulse size={22} style={{ color: 'var(--color-accent-danger, #ff453a)' }} />
          <div>
            <h1 style={{ fontSize: 'var(--fs-page, 1.75rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
              Clínico
            </h1>
            <span style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)' }}>
              Apoyo a la ejecución, regulación somática & CBT
            </span>
          </div>
        </div>

        {/* LISTA DE TAREAS DE HOY (MÁXIMO 3) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
            Tareas de hoy
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {tasks.map((t) => (
              <div
                key={t.id}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--text)', textDecoration: t.status === 'Hecho' ? 'line-through' : 'none' }}>
                    {t.title}
                  </strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', display: 'block', marginTop: '2px' }}>
                    · {t.singleNextAction} ({t.estimatedMinutes} min)
                  </span>
                </div>

                <Button
                  variant={t.status === 'Hecho' ? 'ghost' : 'secondary'}
                  size="sm"
                  onClick={() => toggleTaskDone(t.id)}
                >
                  {t.status === 'Hecho' ? 'Hecho' : 'Hecho'}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* PANEL ¿BLOQUEADO? */}
        <UnblockPanel currentTaskTitle={tasks[0]?.title || 'Tarea activa'} />

      </div>
    </ErrorBoundary>
  );
}
