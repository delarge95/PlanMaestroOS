import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import UnblockPanel from './UnblockPanel';
import { initialClinicalTasks } from '../../data/clinical/clinicalTasks';
import type { Task } from '../../data/contracts/task';
import Button from '../ui/Button';
import { HeartPulse, Check, BookOpen, FileText } from 'lucide-react';

export default function ClinicalToday() {
  const [tasks, setTasks] = useState<Task[]>(initialClinicalTasks.slice(0, 3));

  const toggleTaskDone = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: t.status === 'Hecho' ? 'PorHacer' : 'Hecho' } : t))
    );
  };

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', maxWidth: '850px', margin: '0 auto', width: '100%' }}>

        {/* ENCABEZADO DE SECCIÓN CLÍNICO */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 'var(--space-xs)',
          borderBottom: '1px solid var(--color-border-subtle)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <HeartPulse size={22} style={{ color: '#ff6b6b' }} />
            <div>
              <h1 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, color: 'var(--text)' }}>
                Clínico
              </h1>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                Apoyo a la ejecución, regulación somática & CBT
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <a href="/app/clinical/routines" style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size="sm">
                <BookOpen size={15} /> Rutinas
              </Button>
            </a>
            <a href="/app/clinical/protocols" style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size="sm">
                <FileText size={15} /> Protocolos
              </Button>
            </a>
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
