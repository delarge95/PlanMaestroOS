import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import DomainDocAccordion from '../docs/DomainDocAccordion';
import ContextualAIActionButton from '../shared/ContextualAIActionButton';
import {
  getCareerApplications,
  getPortfolioAssets,
  getCareerAIDrafts,
  getGitHubEvidence,
  getCareerMetrics
} from '../../data/career/careerServiceAdapter';
import type { CareerPipelineStage } from '../../data/career/careerContracts';
import { CheckCircle2, ShieldAlert, ExternalLink, Calendar } from 'lucide-react';
import Button from '../ui/Button';
import SectionNav from '../ui/SectionNav';

const PIPELINE_STAGES: CareerPipelineStage[] = [
  'Prospecto',
  'Investigar',
  'Preparar',
  'Revisar',
  'Aplicado',
  'Seguimiento',
  'Entrevista',
  'Oferta',
  'Cerrado'
];

const careerDocsList = [
  { name: '14_30_60_90_execution_plan.md', type: 'Markdown', path: '14_30_60_90_execution_plan.md', description: 'Plan de ejecución detallado a 90 días' },
  { name: '08B_twinsight_case_study_final_structure.md', type: 'Markdown', path: '08B_twinsight_case_study_final_structure.md', description: 'Estructura final del caso de estudio TwinSight X500' },
  { name: '11_company_targets_job_boards_recruiters.md', type: 'Markdown', path: '11_company_targets_job_boards_recruiters.md', description: 'Matriz de empresas objetivo y canales de reclutamiento' },
  { name: '17_cv_base_and_role_variants.md', type: 'Markdown', path: '17_cv_base_and_role_variants.md', description: 'Variantes de CV según el rol objetivo' }
];

const TABS = [
  { id: 'pipeline', label: '📊 Pipeline de Candidaturas' },
  { id: 'detail', label: '🔍 Detalle & Encaje' },
  { id: 'assets', label: '📄 Activos & Evidencias GitHub' },
  { id: 'drafts', label: '🤖 Borradores IA (Aprobación)' },
  { id: 'docs', label: '📚 Fuentes Documentales' }
];

export interface CareerTabWorkspaceProps {
  currentPath?: string;
}

export default function CareerTabWorkspace({ currentPath = '/app/career' }: CareerTabWorkspaceProps) {
  const [activeTab, setActiveTab] = useState<string>('pipeline');
  const [applications, setApplications] = useState(() => getCareerApplications());
  const [selectedAppId] = useState<string>('app_studio_x');
  const [assets] = useState(() => getPortfolioAssets());
  const [aiDrafts] = useState(() => getCareerAIDrafts());
  const [githubEvidence] = useState(() => getGitHubEvidence());
  const metrics = getCareerMetrics();

  const selectedApp = applications.find((a) => a.id === selectedAppId) || applications[0];

  const handleStageChange = (appId: string, newStage: CareerPipelineStage) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === appId ? { ...app, stage: newStage } : app))
    );
  };

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>

        {/* NAVEGACIÓN NIVEL 2 (SUBMENÚ 1: STICKY 62px) */}
        <SectionNav sectionKey="career" currentPath={currentPath} level={2} />

        {/* TÍTULO PRINCIPAL (DESAPARECE AL SCROLLEAR) */}
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '4px 0 12px 0', color: '#ffffff', letterSpacing: '-0.02em' }}>
          Gestión de Carrera & Empleo
        </h1>

        {/* APPLE SEGMENTED CONTROL BAR (CLEAN & UNENCUMBERED) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          paddingBottom: '6px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          overflowX: 'auto',
          maxWidth: '100%',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
          {TABS.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: isSelected ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                  color: isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.55)',
                  border: 'none',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontSize: '0.84rem',
                  fontWeight: isSelected ? 600 : 500,
                  fontFamily: 'var(--font-family-system)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 150ms cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* MÉTRICAS ÚTILES NO MORALIZANTES */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-sm)' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
            <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600 }}>APLICACIONES ESTA SEMANA</span>
            <strong style={{ fontSize: '1.4rem', color: 'var(--color-accent-primary)', display: 'block', marginTop: '2px' }}>
              {metrics.applicationsThisWeek} vacantes
            </strong>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
            <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600 }}>DÍAS HASTA SEGUIMIENTO</span>
            <strong style={{ fontSize: '1.4rem', color: 'var(--color-accent-warning)', display: 'block', marginTop: '2px' }}>
              ~{metrics.avgDaysToFollowUp} días promedio
            </strong>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
            <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600 }}>ACTIVOS DE PORTAFOLIO LISTOS</span>
            <strong style={{ fontSize: '1.4rem', color: 'var(--color-state-done)', display: 'block', marginTop: '2px' }}>
              {metrics.approvedAssetsCount} aprobados
            </strong>
          </div>
        </div>

        {/* VISTA 1: PIPELINE DE CANDIDATURAS */}
        {activeTab === 'pipeline' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            {applications.map((app) => (
              <div
                key={app.id}
                style={{
                  background: 'var(--surface)',
                  border: `1px solid ${selectedAppId === app.id ? 'var(--color-accent-primary)' : 'var(--color-border-visible)'}`,
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-sm)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
                  <div>
                    <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--color-accent-primary)', fontWeight: 700 }}>
                      {app.company} · {app.remoteType}
                    </span>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '2px 0 0', color: 'var(--text)' }}>
                      {app.role}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', gap: 'var(--space-xs)', alignItems: 'center' }}>
                    <ContextualAIActionButton
                      label="Resumir vacante"
                      actionType="summarize_vacancy"
                      contextData={{ company: app.company, role: app.role }}
                      sources={['Job Post', 'Portfolio Match Matrix']}
                    />
                    <ContextualAIActionButton
                      label="Preparar borrador"
                      actionType="prepare_draft"
                      contextData={{ company: app.company, role: app.role }}
                      sources={['CV v2.1', 'TwinSight Case Study']}
                    />
                  </div>
                </div>

                {/* PIPELINE STAGE SELECTOR (ESTADIO DEL PIPELINE) */}
                <div>
                  <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                    ESTADIO DEL PIPELINE (SELECCIONAR PASO ACTIVO):
                  </span>
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                    {PIPELINE_STAGES.map((stg) => (
                      <button
                        key={stg}
                        type="button"
                        onClick={() => handleStageChange(app.id, stg)}
                        style={{
                          background: app.stage === stg ? 'var(--color-accent-primary)' : 'rgba(255,255,255,0.05)',
                          color: app.stage === stg ? '#ffffff' : 'var(--text-secondary)',
                          border: 'none',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: 'var(--font-size-meta)',
                          fontWeight: app.stage === stg ? 700 : 500,
                          cursor: 'pointer'
                        }}
                      >
                        {stg}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ÚNICA SIGUIENTE ACCIÓN PER DOCUMENTO 06 */}
                <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                    <Calendar size={16} style={{ color: 'var(--color-accent-warning)' }} />
                    <span style={{ fontSize: 'var(--font-size-body)', color: 'var(--text)' }}>
                      <strong>Única siguiente acción:</strong> {app.singleNextAction}
                    </span>
                  </div>
                  <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)' }}>
                    Fecha seguimiento: {app.followUpDateIso}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VISTA 2: DETALLE & ENCAJE */}
        {activeTab === 'detail' && selectedApp && (
          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-visible)', borderRadius: 'var(--radius-md)', padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div>
              <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--color-accent-primary)', fontWeight: 700 }}>
                ANÁLISIS DE MATCH Y ENCAJE DETALLADO
              </span>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '4px 0 0', color: 'var(--text)' }}>
                {selectedApp.company} — {selectedApp.role}
              </h2>
            </div>

            {selectedApp.fitMatrix && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--color-state-done)' }}>
                    Match estimado: {selectedApp.fitMatrix.matchPercentage}%
                  </strong>
                </div>

                <div>
                  <strong style={{ fontSize: 'var(--font-size-label)', color: 'var(--text)', display: 'block', marginBottom: '4px' }}>
                    Requisitos que encajan perfectamente:
                  </strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {selectedApp.fitMatrix.matchingSkills.map((sk, i) => (
                      <span key={i} style={{ background: 'var(--color-accent-primary-soft)', color: 'var(--color-accent-primary)', padding: '2px 8px', borderRadius: '4px', fontSize: 'var(--font-size-meta)', fontWeight: 600 }}>
                        ✓ {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <strong style={{ fontSize: 'var(--font-size-label)', color: 'var(--text)', display: 'block', marginBottom: '4px' }}>
                    Huecos a mitigar en la postulación:
                  </strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {selectedApp.fitMatrix.gapsToAddress.map((gp, i) => (
                      <span key={i} style={{ background: 'rgba(255, 149, 0, 0.15)', color: 'var(--color-accent-warning)', padding: '2px 8px', borderRadius: '4px', fontSize: 'var(--font-size-meta)', fontWeight: 600 }}>
                        ! {gp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* VISTA 3: ACTIVOS & EVIDENCIAS GITHUB */}
        {activeTab === 'assets' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
              Activos Aprobados de Portafolio & Versiones
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-md)' }}>
              {assets.map((ast) => (
                <div key={ast.id} style={{ background: 'var(--surface)', border: '1px solid var(--color-border-visible)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--color-accent-primary)', fontWeight: 700 }}>
                      {ast.category} ({ast.version})
                    </span>
                    {ast.isApproved && <CheckCircle2 size={16} style={{ color: 'var(--color-state-done)' }} />}
                  </div>
                  <strong style={{ fontSize: 'var(--font-size-body)', color: 'var(--text)' }}>
                    {ast.title}
                  </strong>
                  {ast.githubRepoUrl && (
                    <a href={ast.githubRepoUrl} target="_blank" rel="noreferrer" style={{ fontSize: 'var(--font-size-meta)', color: 'var(--color-accent-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none', marginTop: '4px' }}>
                      <ExternalLink size={13} /> Ver Evidencia en GitHub
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* EVIDENCIA GITHUB */}
            <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', marginTop: 'var(--space-sm)' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 var(--space-xs)', color: 'var(--text)' }}>
                Integración de Evidencias de GitHub (Permisos Mínimos)
              </h4>
              {githubEvidence.map((ge, i) => (
                <div key={i} style={{ fontSize: 'var(--font-size-body)', color: 'var(--text-secondary)' }}>
                  <strong>{ge.repoName}</strong> — {ge.releaseStatus} ({ge.techStack.join(', ')})
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VISTA 4: BORRADORES IA CON APROBACIÓN OBLIGATORIA */}
        {activeTab === 'drafts' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div style={{ background: 'var(--color-accent-primary-soft)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-accent-primary)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <ShieldAlert size={20} style={{ color: 'var(--color-accent-primary)', flexShrink: 0 }} />
              <span style={{ fontSize: 'var(--font-size-body)', color: 'var(--text)', fontWeight: 500 }}>
                Los borradores de IA permanecen aislados de las aplicaciones enviadas. Todo contenido requiere tu revisión y aprobación manual antes de utilizarse.
              </span>
            </div>

            {aiDrafts.map((dft) => (
              <div key={dft.id} style={{ background: 'var(--surface)', border: '1px solid var(--color-border-visible)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--color-accent-warning)', fontWeight: 700 }}>
                    BORRADOR ASISTIDO · {dft.company} ({dft.role})
                  </span>
                  <span style={{ background: 'rgba(255, 149, 0, 0.15)', color: 'var(--color-accent-warning)', padding: '2px 8px', borderRadius: '4px', fontSize: 'var(--font-size-meta)', fontWeight: 700 }}>
                    Estado: {dft.status}
                  </span>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: 'var(--space-md)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--font-size-body)', color: 'var(--text)', whiteSpace: 'pre-wrap' }}>
                  {dft.draftText}
                </div>

                {dft.unverifiedClaimsFlagged.length > 0 && (
                  <div style={{ fontSize: 'var(--font-size-meta)', color: 'var(--color-accent-warning)' }}>
                    ⚠️ Afirmación no verificada para revisión: {dft.unverifiedClaimsFlagged.join(', ')}
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-xs)' }}>
                  <Button variant="primary" size="sm" onClick={() => alert('Borrador Aprobado')}>
                    <CheckCircle2 size={16} /> Aprobar Borrador
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VISTA 5: FUENTES DOCUMENTALES */}
        {activeTab === 'docs' && (
          <DomainDocAccordion
            domainTitle="Laboral & Portafolio"
            domainColor="#0a84ff"
            categoryFilter="career"
            sourceDocsList={careerDocsList}
          />
        )}
      </div>
    </ErrorBoundary>
  );
}
