import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import ClinicalExecutionHub from './ClinicalExecutionHub';
import DomainDocAccordion from '../docs/DomainDocAccordion';
import ragData from '../../data/rag_index.json';

const clinicalMods = ragData.clinical_modules;

const clinicalDocsList = [
  { name: 'reporte_clinico_neurodesarrollo_ansiedad.pdf', type: 'PDF', path: '_pdf_biblia/...', description: 'Diagnóstico clínico de TDAH Inatento y Ansiedad Social de Desempeño' },
  { name: 'plan_accion_tdah_ansiedad_social-1.pdf', type: 'PDF', path: '_pdf_biblia/...', description: 'Módulos A-F de TDAH y A-F de Ansiedad Social con 9 Niveles de Exposición' }
];

const TABS = [
  { id: 'tasks', label: '🧠 Suite de Tareas Clínicas & Bio-Feedback' },
  { id: 'modules', label: '📋 Módulos Diagnósticos A-F & Exposición' },
  { id: 'docs', label: '📄 Reportes & Documentación Fuente' }
];

export default function ClinicalTabWorkspace() {
  const [activeTab, setActiveTab] = useState<string>('tasks');

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* APPLE SEGMENTED CONTROL BAR */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          background: 'rgba(118, 118, 128, 0.24)',
          backdropFilter: 'blur(30px) saturate(190%)',
          WebkitBackdropFilter: 'blur(30px) saturate(190%)',
          padding: '4px',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
          overflowX: 'auto',
          maxWidth: '100%'
        }}>
          {TABS.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: isSelected ? '#ffffff' : 'transparent',
                  color: isSelected ? '#000000' : '#8e8e93',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '12px',
                  fontSize: '0.84rem',
                  fontWeight: isSelected ? 700 : 500,
                  fontFamily: '-apple-system, SF Pro Text, system-ui, sans-serif',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: isSelected ? '0 3px 12px rgba(0, 0, 0, 0.35), 0 0 1px rgba(0,0,0,0.2)' : 'none',
                  transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* SUBSECTION CONTENT */}
        <div style={{ minHeight: '500px' }}>
          {activeTab === 'tasks' && <ClinicalExecutionHub />}
          {activeTab === 'modules' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              {clinicalMods.map((mod: any, idx: number) => (
                <div key={idx} style={{ background: 'rgba(28,28,30,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderTop: '3px solid #ff375f', borderRadius: '18px', padding: '20px', backdropFilter: 'blur(40px)' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0 0 14px' }}>{mod.title}</h3>
                  {mod.exercises && (
                    <ul style={{ margin: 0, paddingLeft: '18px', color: '#98989d', fontSize: '0.85rem', lineHeight: 1.6 }}>
                      {mod.exercises.map((ex: string, eIdx: number) => (
                        <li key={eIdx}>{ex}</li>
                      ))}
                    </ul>
                  )}
                  {mod.levels && (
                    <ol style={{ margin: 0, paddingLeft: '18px', color: '#98989d', fontSize: '0.85rem', lineHeight: 1.6 }}>
                      {mod.levels.map((lvl: string, lIdx: number) => (
                        <li key={lIdx}><strong>{lvl.split(':')[0]}:</strong> {lvl.split(':')[1]}</li>
                      ))}
                    </ol>
                  )}
                </div>
              ))}
            </div>
          )}
          {activeTab === 'docs' && (
            <DomainDocAccordion
              domainTitle="Clínica Conductual & Evaluaciones"
              domainColor="#ff375f"
              categoryFilter="clinical"
              sourceDocsList={clinicalDocsList}
            />
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}
