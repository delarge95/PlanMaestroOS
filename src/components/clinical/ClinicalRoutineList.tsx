import React from 'react';
import { clinicalRoutines } from '../../data/clinical/routines';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';

export default function ClinicalRoutineList() {
  return (
    <ErrorBoundary>
      <div className="ds-stack-lg" style={{ maxWidth: '850px', margin: '0 auto', width: '100%' }}>
        <div className="ds-row-between" style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-xs)' }}>
          <h2 className="ds-h2" style={{ margin: 0 }}>
            Rutinas
          </h2>
          <a href="/app/clinical" style={{ textDecoration: 'none' }}>
            <Button variant="ghost" size="sm">
              Volver a Hoy
            </Button>
          </a>
        </div>

        <div className="ds-stack-sm">
          {clinicalRoutines.map((r) => (
            <div
              key={r.id}
              className="ds-card ds-stack-sm"
            >
              <div className="ds-row-between">
                <strong className="ds-label">
                  {r.title}
                </strong>
                <span className="ds-badge ds-badge-accent">
                  {r.frequency} · {r.estimatedMinutes} min
                </span>
              </div>

              <span className="ds-caption">
                {r.objective1Line}
              </span>

              <div className="ds-micro" style={{ paddingTop: '4px' }}>
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
