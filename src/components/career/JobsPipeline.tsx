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
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>
        
        {/* NAVEGACIÓN NIVEL 2 */}
        <SectionNav sectionKey="career" currentPath={currentPath} level={2} />

        {/* CABECERA DE EMPLEO */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-xs)', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-xs)' }}>
          <h2 style={{ fontSize: 'var(--fs-page, 1.75rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
            Empleo & Pipeline
          </h2>

          <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.03)', padding: '3px', borderRadius: '10px', border: '1px solid var(--color-border-subtle)' }}>
            <button
              type="button"
              onClick={() => setActiveTab('pipeline')}
              style={{
                background: activeTab === 'pipeline' ? 'var(--color-accent-primary)' : 'transparent',
                color: activeTab === 'pipeline' ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: activeTab === 'pipeline' ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              Pipeline
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('schedule')}
              style={{
                background: activeTab === 'schedule' ? 'var(--color-accent-primary)' : 'transparent',
                color: activeTab === 'schedule' ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: activeTab === 'schedule' ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              Cronograma
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('companies')}
              style={{
                background: activeTab === 'companies' ? 'var(--color-accent-primary)' : 'transparent',
                color: activeTab === 'companies' ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: activeTab === 'companies' ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              Base de datos de empresas
            </button>
          </div>
        </div>

        {/* PIPELINE DE 7 COLUMNAS */}
        {activeTab === 'pipeline' && (
          <>
          {/* REGLA DE CONTRATO: única próxima acción por aplicación (doc-12 + validateSingleNextAction) */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px dashed var(--color-border-visible)',
            borderRadius: 'var(--radius-sm)',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-accent-primary)' }}>
              Regla de contrato
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
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
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    minWidth: '170px'
                  }}
                >
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                    {stg} ({items.length})
                  </span>

                  {items.map((app) => {
                    const hasAction = validateSingleNextAction(app);
                    return (
                    <div
                      key={app.id}
                      style={{
                        background: 'var(--surface)',
                        border: `1px solid ${hasAction ? 'var(--color-border-visible)' : 'var(--color-accent-warning)'}`,
                        borderRadius: 'var(--radius-sm)',
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '6px' }}>
                        <strong style={{ fontSize: '0.85rem', color: 'var(--text)' }}>
                          {app.companyName}
                        </strong>
                        <span style={{ display: 'flex', gap: '3px', flexShrink: 0 }}>
                          {app.fitScore !== undefined && (
                            <span
                              title={`Fit Score ${app.fitScore}/14 — regla del tracker: ≥10 aplicar rápido; 7–9 investigar; ≤6 descartar`}
                              style={{
                                fontSize: '0.58rem', fontWeight: 700,
                                color: app.fitScore >= 10 ? 'var(--color-accent-primary)' : 'var(--text-secondary)',
                                border: '1px solid currentColor',
                                padding: '1px 4px', borderRadius: '3px'
                              }}
                            >
                              fit {app.fitScore}
                            </span>
                          )}
                          {app.trackerStatus && (
                            <span style={{ fontSize: '0.58rem', fontWeight: 600, color: 'var(--text-tertiary)', border: '1px solid var(--color-border-subtle)', padding: '1px 4px', borderRadius: '3px' }}>
                              {app.trackerStatus}
                            </span>
                          )}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
                        {app.roleTitle}
                      </span>

                      {/* ÚNICA PRÓXIMA ACCIÓN (regla de contrato) */}
                      {hasAction ? (
                        <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-primary)', fontWeight: 600, marginTop: '2px', display: 'flex', gap: '4px', alignItems: 'flex-start' }}>
                          <span style={{ textTransform: 'uppercase', fontSize: '0.58rem', lineHeight: '1.4', flexShrink: 0 }}>Próxima →</span>
                          <span>{app.singleNextAction}</span>
                        </span>
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '2px' }}>
                          <span style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--color-accent-warning)', border: '1px solid var(--color-accent-warning)', padding: '2px 6px', borderRadius: '4px', alignSelf: 'flex-start' }}>
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
                              background: 'rgba(255,255,255,0.03)',
                              border: '1px solid var(--color-border-subtle)',
                              borderRadius: '4px',
                              color: 'var(--text)',
                              fontSize: '0.7rem',
                              padding: '4px 6px',
                              outline: 'none',
                              width: '100%'
                            }}
                          />
                        </div>
                      )}

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '4px', borderTop: '1px solid var(--color-border-subtle)', marginTop: '4px' }}>
                        <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>
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
