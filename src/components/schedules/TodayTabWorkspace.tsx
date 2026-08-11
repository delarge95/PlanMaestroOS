// src/components/schedules/TodayTabWorkspace.tsx
import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import SectionNav from '../ui/SectionNav';
import Disclosure from '../ui/Disclosure';
import Button from '../ui/Button';
import { getTodayDomainView } from '../../data/adapters/todayAdapter';
import type { Task } from '../../data/contracts/task';
import { ArrowRight, Dumbbell } from 'lucide-react';

export interface TodayTabWorkspaceProps {
  currentPath?: string;
}

export default function TodayTabWorkspace({ currentPath = '/app/today' }: TodayTabWorkspaceProps) {
  const [todayData] = useState(() => getTodayDomainView());
  const [blockDone, setBlockDone] = useState(false);

  const formattedDate = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  const tasks: Task[] = (todayData.top3Tasks || []).map((t, idx) => ({
    id: t.id,
    externalId: t.id,
    title: t.title,
    area: idx === 1 ? 'fitness' : t.area,
    singleNextAction: 'Revisar diapositivas de sustentación',
    estimatedMinutes: 10,
    priority: t.priority as 'Alta' | 'Media' | 'Baja',
    status: 'PorHacer',
    createdAtIso: new Date().toISOString(),
    updatedAtIso: new Date().toISOString()
  }));

  const top3 = tasks.slice(0, 3);

  // Lista minimalista de ejercicios de ejemplo para tareas de rutina fitness
  const fitnessExercises = [
    { name: 'Peso muerto', prescription: '1–2 × 6–8' },
    { name: 'Press banca', prescription: '3–4 × 8–10' },
    { name: 'Remo mancuerna', prescription: '2–3 × 10–12' }
  ];

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>

        {/* NAVEGACIÓN NIVEL 2 */}
        <SectionNav sectionKey="today" currentPath={currentPath} level={2} />

        {/* ENCABEZADO PRESCRIPTIVO: "Hoy" + FECHA */}
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
            <h1 style={{ fontSize: 'var(--fs-page, 1.75rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
              Hoy
            </h1>
            <span style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)' }}>
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

        {/* SECCIÓN TOP 3 (EXPANDIBLE CON DISCLOSURE PER FIX 2) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--fs-eyebrow, 0.75rem)', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
              Top 3 Tareas
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => { window.location.href = '/app/today/plan'; }}
            >
              <span>Ver más tareas</span>
              <ArrowRight size={14} />
            </Button>
          </div>

          {top3.length === 0 ? (
            <div style={{ padding: 'var(--space-md)', background: 'var(--surface-1)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-m)', fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
              Sin prioridades todavía. Elige hasta 3 tareas para hoy.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {top3.map((t) => (
                <Disclosure
                  key={t.id}
                  label={`${t.area.toUpperCase()} · ${t.title}`}
                  summary={t.singleNextAction}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '4px' }}>
                    {t.area === 'fitness' ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', background: 'rgba(255,255,255,0.02)', padding: '10px', borderRadius: '8px' }}>
                        <span style={{ fontSize: 'var(--fs-eyebrow, 0.75rem)', color: 'var(--accent)', fontWeight: 700 }}>
                          Ejercicios clave prescritos:
                        </span>
                        {fitnessExercises.map((ex, i) => (
                          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-primary)' }}>
                            <span>{ex.name}</span>
                            <span style={{ color: 'var(--text-secondary)' }}>{ex.prescription}</span>
                          </div>
                        ))}
                        <div style={{ paddingTop: '6px' }}>
                          <Button variant="secondary" size="sm" onClick={() => { window.location.href = '/app/fitness'; }}>
                            <Dumbbell size={14} />
                            <span>Ir a la rutina</span>
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)' }}>
                        Próxima acción: <strong>{t.singleNextAction}</strong> (Estimado: {t.estimatedMinutes} min).
                      </div>
                    )}
                  </div>
                </Disclosure>
              ))}
            </div>
          )}
        </div>

        {/* BLOQUES A / B (MÁXIMO 2 VISIBLES) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-sm)' }}>
          <div style={{
            background: 'var(--surface-1, #0d0d0f)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 'var(--radius-m)',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}>
            <div>
              <span style={{ fontSize: '0.68rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase' }}>
                Bloque A
              </span>
              <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'block', marginTop: '2px' }}>
                TwinSight X500 & Sustentación
              </strong>
            </div>

            <Button variant="secondary" size="sm" onClick={() => setBlockDone(!blockDone)}>
              Empezar 10 min
            </Button>
          </div>

          <div style={{
            background: 'var(--surface-1, #0d0d0f)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 'var(--radius-m)',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}>
            <div>
              <span style={{ fontSize: '0.68rem', color: 'var(--warning)', fontWeight: 700, textTransform: 'uppercase' }}>
                Bloque B
              </span>
              <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'block', marginTop: '2px' }}>
                Seguimiento Vacantes & Alemán
              </strong>
            </div>

            <Button variant="secondary" size="sm" onClick={() => setBlockDone(!blockDone)}>
              Empezar 10 min
            </Button>
          </div>
        </div>

        {/* FILA CONDENSADA DE FITNESS */}
        <div style={{
          background: 'var(--surface-1, #0d0d0f)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 'var(--radius-m)',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px'
        }}>
          <div>
            <span style={{ fontSize: '0.68rem', color: 'var(--success)', fontWeight: 700, textTransform: 'uppercase' }}>
              Fitness
            </span>
            <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'block', marginTop: '2px' }}>
              {todayData.fitnessSummary.activeRoutineTitle} · {todayData.fitnessSummary.nextWorkoutDayTitle}
            </strong>
          </div>

          <a href="/app/fitness" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="sm">
              Empezar sesión
            </Button>
          </a>
        </div>

      </div>
    </ErrorBoundary>
  );
}
