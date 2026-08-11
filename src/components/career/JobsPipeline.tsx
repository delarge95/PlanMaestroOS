import React, { useState } from 'react';
import SectionNav from '../ui/SectionNav';
import { initialApplications, type JobApplication, type PipelineStage } from '../../data/career/applications';
import JobsSchedule from './JobsSchedule';
import CompanyDatabase from './CompanyDatabase';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';

const STAGES: PipelineStage[] = ['Frío', 'Tibio', 'Caliente', 'Aplicado', 'Seguimiento', 'Entrevista', 'Cerrado'];

export interface JobsPipelineProps {
  currentPath?: string;
}

export default function JobsPipeline({ currentPath = '/app/career/jobs' }: JobsPipelineProps) {
  const [applications, setApplications] = useState<JobApplication[]>(initialApplications);
  const [activeTab, setActiveTab] = useState<'pipeline' | 'schedule' | 'companies'>('pipeline');

  const moveStage = (appId: string, targetStage: PipelineStage) => {
    setApplications((prev) =>
      prev.map((a) => (a.id === appId ? { ...a, stage: targetStage, updatedAtIso: new Date().toISOString().split('T')[0] } : a))
    );
  };

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

                  {items.map((app) => (
                    <div
                      key={app.id}
                      style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--color-border-visible)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px'
                      }}
                    >
                      <strong style={{ fontSize: '0.85rem', color: 'var(--text)' }}>
                        {app.companyName}
                      </strong>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
                        {app.roleTitle}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-primary)', fontWeight: 600, marginTop: '2px' }}>
                        Próxima: {app.singleNextAction}
                      </span>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '4px', borderTop: '1px solid var(--color-border-subtle)', marginTop: '4px' }}>
                        <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>
                          {app.followUpDateIso}
                        </span>

                        <select
                          value={app.stage}
                          onChange={(e) => moveStage(app.id, e.target.value as PipelineStage)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-secondary)',
                            fontSize: '0.68rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          {STAGES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        )}

        {/* CRONOGRAMA */}
        {activeTab === 'schedule' && <JobsSchedule />}

        {/* BASE DE DATOS DE EMPRESAS */}
        {activeTab === 'companies' && <CompanyDatabase />}

      </div>
    </ErrorBoundary>
  );
}
