import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import DailyOperatingView from './DailyOperatingView';
import { getTodayDomainView } from '../../data/adapters/todayAdapter';
import type { Task } from '../../data/contracts/task';
import Button from '../ui/Button';

export default function TodayTabWorkspace() {
  const [showFullTaskManager, setShowFullTaskManager] = useState(false);
  const [todayData] = useState(() => getTodayDomainView());
  const [blockDone, setBlockDone] = useState(false);

  const formattedDate = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  const tasks: Task[] = (todayData.top3Tasks || []).map((t) => ({
    id: t.id,
    externalId: t.id,
    title: t.title,
    area: t.area,
    singleNextAction: 'Revisar diapositivas de sustentación',
    estimatedMinutes: 10,
    priority: t.priority as 'Alta' | 'Media' | 'Baja',
    status: 'PorHacer',
    createdAtIso: new Date().toISOString(),
    updatedAtIso: new Date().toISOString()
  }));

  const top3 = tasks.slice(0, 3);

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', maxWidth: '850px', margin: '0 auto', width: '100%' }}>

        {/* ENCABEZADO PRESCRIPTIVO (B1): "Hoy" + FECHA. SIN BANNERS NI PARRAFOS */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-xs)',
          paddingBottom: 'var(--space-xs)',
          borderBottom: '1px solid var(--color-border-subtle)'
        }}>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, color: 'var(--text)' }}>
              Hoy
            </h1>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
              {formattedDate}
            </span>
          </div>

          <Button
            variant={blockDone ? 'ghost' : 'primary'}
            size="sm"
            onClick={() => setBlockDone(!blockDone)}
          >
            {blockDone ? 'Hecho' : 'Empezar bloque A'}
          </Button>
        </div>

        {/* SECCIÓN TOP 3 (MÁXIMO 3 TAREAS). MOSTRAR ESTADO VACÍO EXACTO SI CORRESPONDE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
              Top 3 Tareas
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowFullTaskManager(!showFullTaskManager)}
            >
              Ver más tareas
            </Button>
          </div>

          {top3.length === 0 ? (
            <div style={{ padding: 'var(--space-md)', background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
              Sin prioridades todavía. Elige hasta 3 tareas para hoy.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {top3.map((t) => (
                <div
                  key={t.id}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: 'var(--color-accent-primary)',
                      background: 'var(--color-accent-primary-soft)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      textTransform: 'uppercase'
                    }}>
                      {t.area}
                    </span>
                    <strong style={{ fontSize: '0.88rem', color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {t.title}
                    </strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      · {t.singleNextAction}
                    </span>
                  </div>

                  <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>
                    {t.status === 'Hecho' ? 'Hecho' : 'Por hacer'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* BLOQUES A / B (MÁXIMO 2 VISIBLES) CON BOTÓN "Empezar 10 min" */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-sm)' }}>
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--color-border-visible)',
            borderRadius: 'var(--radius-md)',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}>
            <div>
              <span style={{ fontSize: '0.68rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
                Bloque A
              </span>
              <strong style={{ fontSize: '0.9rem', color: 'var(--text)', display: 'block', marginTop: '2px' }}>
                TwinSight X500 & Sustentación
              </strong>
            </div>

            <Button variant="secondary" size="sm" onClick={() => setBlockDone(!blockDone)}>
              Empezar 10 min
            </Button>
          </div>

          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--color-border-visible)',
            borderRadius: 'var(--radius-md)',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}>
            <div>
              <span style={{ fontSize: '0.68rem', color: 'var(--color-accent-warning)', fontWeight: 700, textTransform: 'uppercase' }}>
                Bloque B
              </span>
              <strong style={{ fontSize: '0.9rem', color: 'var(--text)', display: 'block', marginTop: '2px' }}>
                Seguimiento Vacantes & Alemán
              </strong>
            </div>

            <Button variant="secondary" size="sm" onClick={() => setBlockDone(!blockDone)}>
              Empezar 10 min
            </Button>
          </div>
        </div>

        {/* FILA CONDENSADA DE FITNESS (B3) */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px'
        }}>
          <div>
            <span style={{ fontSize: '0.68rem', color: 'var(--color-state-done)', fontWeight: 700, textTransform: 'uppercase' }}>
              Fitness
            </span>
            <strong style={{ fontSize: '0.9rem', color: 'var(--text)', display: 'block', marginTop: '2px' }}>
              {todayData.fitnessSummary.activeRoutineTitle} · {todayData.fitnessSummary.nextWorkoutDayTitle}
            </strong>
          </div>

          <a href="/app/fitness" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="sm">
              Empezar sesión
            </Button>
          </a>
        </div>

        {/* TASK MANAGER DEL DÍA (EXPANDIBLE) */}
        {showFullTaskManager && <DailyOperatingView />}
      </div>
    </ErrorBoundary>
  );
}
