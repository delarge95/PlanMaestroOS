import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import InteractiveRoadmapDashboard from './InteractiveRoadmapDashboard';
import DomainDocAccordion from '../docs/DomainDocAccordion';

const careerDocsList = [
  { name: '14_30_60_90_execution_plan.md', type: 'Markdown', path: '14_30_60_90_execution_plan.md', description: 'Plan de ejecución detallado a 90 días' },
  { name: '08B_twinsight_case_study_final_structure.md', type: 'Markdown', path: '08B_twinsight_case_study_final_structure.md', description: 'Estructura final del caso de estudio TwinSight X500' },
  { name: '11_company_targets_job_boards_recruiters.md', type: 'Markdown', path: '11_company_targets_job_boards_recruiters.md', description: 'Matriz de empresas objetivo y canales de reclutamiento' },
  { name: '17_cv_base_and_role_variants.md', type: 'Markdown', path: '17_cv_base_and_role_variants.md', description: 'Variantes de CV según el rol objetivo' }
];

const TABS = [
  { id: 'roadmap', label: '🚀 Roadmap 16 Semanas & Entregables' },
  { id: 'targeting', label: '💼 Aplicaciones & Matriz de Roles' },
  { id: 'docs', label: '📁 Biblia de Carrera & Documentos' }
];

export default function CareerTabWorkspace() {
  const [activeTab, setActiveTab] = useState<string>('roadmap');

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
          {activeTab === 'roadmap' && <InteractiveRoadmapDashboard />}
          {activeTab === 'targeting' && (
            <div style={{ background: 'rgba(28, 28, 30, 0.75)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '24px', backdropFilter: 'blur(40px)' }}>
              <span style={{ fontSize: '0.72rem', color: '#0a84ff', fontFamily: 'SF Mono, monospace', fontWeight: 700 }}>
                SISTEMA DE APLICACIONES SEMANALES
              </span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '4px 0 12px', color: '#ffffff' }}>
                Targeting & Cadencia de 15 Aplicaciones / Semana
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#98989d', margin: 0, lineHeight: 1.5 }}>
                Enfoque en vacantes de Unity Technical Artist, WebGL 3D Developer y Technical Visualization Specialist en la Unión Europea y remoto LatAm.
              </p>
            </div>
          )}
          {activeTab === 'docs' && (
            <DomainDocAccordion
              domainTitle="Laboral & Portafolio"
              domainColor="#0a84ff"
              categoryFilter="career"
              sourceDocsList={careerDocsList}
            />
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}
