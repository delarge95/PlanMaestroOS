import React from 'react';
import { clinicalRoutines } from '../../data/clinical/routines';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';

export default function ClinicalRoutineList() {
  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', maxWidth: '850px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-xs)' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
            Rutinas
          </h2>
          <a href="/app/clinical" style={{ textDecoration: 'none' }}>
            <Button variant="ghost" size="sm">
              Volver a Hoy
            </Button>
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
          {clinicalRoutines.map((r) => (
            <div
              key={r.id}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-xs)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ fontSize: '0.95rem', color: 'var(--text)' }}>
                  {r.title}
                </strong>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-primary)', background: 'var(--color-accent-primary-soft)', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>
                  {r.frequency} · {r.estimatedMinutes} min
                </span>
              </div>

              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                {r.objective1Line}
              </span>

              <div style={{ paddingTop: '4px', fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                {r.steps.map((st, idx) => (
                  <div key={idx} style={{ marginTop: '2px' }}>
                    {idx + 1}. {st}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
}
