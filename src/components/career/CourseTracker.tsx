import React, { useState } from 'react';
import { initialCourses, type CourseItem } from '../../data/career/courses';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';
import { BookOpen, Target, Newspaper, CheckCircle2 } from 'lucide-react';

export default function CourseTracker() {
  const [courses] = useState<CourseItem[]>(initialCourses);

  const activeCourses = courses.filter((c) => c.status === 'active');
  const watchlistCourses = courses.filter((c) => c.status === 'watchlist').sort((a, b) => a.priority - b.priority);

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>
        
        {/* ENCABEZADO PRESCRIPTIVO CON COPY EXACTO */}
        <div style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-xs)' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
            Cursos
          </h2>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
            Formación activa, metas de aprendizaje y oportunidades
          </span>
        </div>

        {/* TAREA DEL CURSO ACTIVO DE HOY */}
        {activeCourses[0]?.todayTask && (
          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-accent-primary-soft)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
            <div>
              <span style={{ fontSize: '0.68rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
                Hoy · {activeCourses[0].title}
              </span>
              <strong style={{ fontSize: '0.92rem', color: 'var(--text)', display: 'block', marginTop: '2px' }}>
                {activeCourses[0].todayTask}
              </strong>
            </div>

            <Button variant="secondary" size="sm">
              Empezar 10 min
            </Button>
          </div>
        )}

        {/* SECCIONES: CURSOS ACTIVOS Y EN LA MIRA */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-md)' }}>
          {/* CURSOS ACTIVOS */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-accent-primary)', textTransform: 'uppercase' }}>
              Cursos activos ({activeCourses.length})
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {activeCourses.map((c) => (
                <div key={c.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-border-subtle)', borderRadius: '6px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--text)' }}>{c.title}</strong>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>{c.provider}</span>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem', marginTop: '4px' }}>
                    <span style={{ color: 'var(--color-state-done)', fontWeight: 700 }}>{c.progressPercent}% completado</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EN LA MIRA */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
              En la mira ({watchlistCourses.length})
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {watchlistCourses.map((c) => (
                <div key={c.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-border-subtle)', borderRadius: '6px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--text)' }}>{c.title}</strong>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>{c.provider}</span>
                  {c.newsNote && (
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-warning)', fontWeight: 600, marginTop: '2px' }}>
                      Noticias: {c.newsNote}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </ErrorBoundary>
  );
}
