import React, { useState } from 'react';
import SectionNav from '../ui/SectionNav';
import { validateSingleNextAction, type PipelineStage } from '../../data/career/applications';
import { useCareerStore } from '../../data/career/careerStore';
import JobsSchedule from './JobsSchedule';
import CompanyDatabase from './CompanyDatabase';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';

const STAGES: PipelineStage[] = ['Frío', 'Tibio', 'Caliente', 'Aplicado', 'Seguimiento', 'Entrevista', 'Cerrado'];

export interface JobsPipelineProps {
  currentPath?: string;
}

export default function JobsPipeline({ currentPath = '/app/career/jobs' }: JobsPipelineProps) {
  const applications = useCareerStore((s) => s.applications);
  const moveStage = useCareerStore((s) => s.moveStage);
  const setNextAction = useCareerStore((s) => s.setNextAction);
  const [activeTab, setActiveTab] = useState<'pipeline' | 'schedule' | 'companies'>('pipeline');

  return (
    <ErrorBoundary>
      <div className="ds-stack">
        
                {/* VISTAS DE PÁGINA (sin ruta): mismo lenguaje visual que snb-l3 */}
        <nav className="snb-l3" aria-label="Vistas de Empleo" style={{ margin: 0, padding: 0, borderBottom: '1px solid var(--separator)' }}>
          {([
            ['pipeline', 'Pipeline'],
            ['schedule', 'Cronograma'],
            ['companies', 'Base de datos de empresas'],
          ] as const).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`snb-l3-link${activeTab === key ? ' snb-l3-link-active' : ''}`}
            >
              {label}
            </button>
          ))}
        </nav>


{/* PIPELINE DE 7 COLUMNAS */}
        {activeTab === 'pipeline' && (
          <>
          {/* REGLA DE CONTRATO: única próxima acción por aplicación (doc-12 + validateSingleNextAction) */}
          <div className="ds-card ds-row" style={{ borderStyle: 'dashed', padding: 'var(--space-2) var(--space-3)', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <span className="ds-eyebrow">
              Regla de contrato
            </span>
            <span className="ds-caption">
              Cada aplicación tiene <strong>una única próxima acción</strong>. Sin ella no se puede avanzar de columna
              (badge “acción pendiente” + movimiento bloqueado). Fuente: doc-12 §Application system + tracker.
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--space-xs)', overflowX: 'auto' }}>
            {STAGES.map((stg) => {
              const items = applications.filter((a) => a.stage === stg);

              return (
                <div
                  key={stg}
                  className="ds-card ds-stack-sm"
                  style={{
                    padding: '10px',
                    gap: 'var(--space-2)',
                    minWidth: '170px'
                  }}
                >
                  <span className="ds-eyebrow">
                    {stg} ({items.length})
                  </span>

                  {items.map((app) => {
                    const hasAction = validateSingleNextAction(app);
                    return (
                    <div
                      key={app.id}
                      className="ds-card ds-stack-sm"
                      style={{
                        padding: '10px',
                        gap: '4px',
                        borderColor: hasAction ? 'var(--color-border-visible)' : 'var(--color-accent-warning)'
                      }}
                    >
                      <div className="ds-row-between" style={{ alignItems: 'flex-start', gap: '6px' }}>
                        <strong className="ds-label" style={{ fontSize: '0.85rem' }}>
                          {app.companyName}
                        </strong>
                        <span style={{ display: 'flex', gap: '3px', flexShrink: 0 }}>
                          {app.fitScore !== undefined && (
                            <span
                              title={`Fit Score ${app.fitScore}/14 — regla del tracker: ≥10 aplicar rápido; 7–9 investigar; ≤6 descartar`}
                              className="ds-badge ds-badge-accent"
                              style={{ fontSize: '0.58rem', padding: '1px 4px' }}
                            >
                              fit {app.fitScore}
                            </span>
                          )}
                          {app.trackerStatus && (
                            <span className="ds-badge ds-badge-neutral" style={{ fontSize: '0.58rem', padding: '1px 4px' }}>
                              {app.trackerStatus}
                            </span>
                          )}
                        </span>
                      </div>
                      <span className="ds-caption" style={{ color: 'var(--text-tertiary)' }}>
                        {app.roleTitle}
                      </span>

                      {/* ÚNICA PRÓXIMA ACCIÓN (regla de contrato) */}
                      {hasAction ? (
                        <span className="ds-row ds-caption" style={{ color: 'var(--color-accent-primary)', fontWeight: 600, marginTop: '2px', gap: '4px', alignItems: 'flex-start' }}>
                          <span style={{ textTransform: 'uppercase', fontSize: '0.58rem', lineHeight: '1.4', flexShrink: 0 }}>Próxima →</span>
                          <span>{app.singleNextAction}</span>
                        </span>
                      ) : (
                        <div className="ds-stack-sm" style={{ gap: '3px', marginTop: '2px' }}>
                          <span className="ds-badge ds-badge-warning" style={{ alignSelf: 'flex-start' }}>
                            ⚠ acción pendiente
                          </span>
                          <input
                            type="text"
                            placeholder="Definir la única próxima acción…"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                const value = (e.target as HTMLInputElement).value;
                                if (value.trim()) {
                                  setNextAction(app.id, value);
                                  (e.target as HTMLInputElement).value = '';
                                }
                              }
                            }}
                            style={{
                              borderRadius: '4px',
                              fontSize: '0.7rem',
                              padding: '4px 6px',
                              width: '100%'
                            }}
                          />
                        </div>
                      )}

                      <div className="ds-row-between ds-micro" style={{ paddingTop: '4px', borderTop: '1px solid var(--color-border-subtle)', marginTop: '4px' }}>
                        <span style={{ color: 'var(--text-tertiary)' }}>
                          {app.followUpDateIso}
                        </span>

                        <select
                          value={app.stage}
                          disabled={!hasAction}
                          title={hasAction ? 'Mover de columna' : 'Bloqueado: define primero la única próxima acción'}
                          onChange={(e) => moveStage(app.id, e.target.value as PipelineStage)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: hasAction ? 'var(--text-secondary)' : 'var(--text-tertiary)',
                            fontSize: '0.68rem',
                            fontWeight: 600,
                            cursor: hasAction ? 'pointer' : 'not-allowed',
                            opacity: hasAction ? 1 : 0.5,
                            textDecoration: hasAction ? 'none' : 'line-through'
                          }}
                        >
                          {STAGES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          </>
        )}

        {/* CRONOGRAMA */}
        {activeTab === 'schedule' && <JobsSchedule />}

        {/* BASE DE DATOS DE EMPRESAS */}
        {activeTab === 'companies' && <CompanyDatabase />}

      </div>
    </ErrorBoundary>
  );
}
