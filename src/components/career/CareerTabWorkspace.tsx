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
      <div className="ds-stack">

        {/* NAVEGACIÓN NIVEL 2 (SUBMENÚ 1: STICKY 62px) */}
        <SectionNav sectionKey="career" currentPath={currentPath} level={2} />

        {/* TÍTULO PRINCIPAL (DESAPARECE AL SCROLLEAR) */}
        <h1 className="ds-h1" style={{ margin: '4px 0 12px 0' }}>
          Gestión de Carrera & Empleo
        </h1>

        {/* APPLE SEGMENTED CONTROL BAR (CLEAN & UNENCUMBERED) */}
        <div className="ds-row-wrap" style={{
          gap: '6px',
          paddingBottom: '6px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          {TABS.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className="ds-chip"
                data-active={isSelected}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* MÉTRICAS ÚTILES NO MORALIZANTES */}
        <div className="ds-grid">
          <div className="ds-card ds-stack-sm">
            <span className="ds-eyebrow">APLICACIONES ESTA SEMANA</span>
            <strong className="ds-h2" style={{ color: 'var(--color-accent-primary)', marginTop: '2px' }}>
              {metrics.applicationsThisWeek} vacantes
            </strong>
          </div>

          <div className="ds-card ds-stack-sm">
            <span className="ds-eyebrow">DÍAS HASTA SEGUIMIENTO</span>
            <strong className="ds-h2" style={{ color: 'var(--color-accent-warning)', marginTop: '2px' }}>
              ~{metrics.avgDaysToFollowUp} días promedio
            </strong>
          </div>

          <div className="ds-card ds-stack-sm">
            <span className="ds-eyebrow">ACTIVOS DE PORTAFOLIO LISTOS</span>
            <strong className="ds-h2" style={{ color: 'var(--color-state-done)', marginTop: '2px' }}>
              {metrics.approvedAssetsCount} aprobados
            </strong>
          </div>
        </div>

        {/* VISTA 1: PIPELINE DE CANDIDATURAS */}
        {activeTab === 'pipeline' && (
          <div className="ds-stack">
            {applications.map((app) => (
              <div
                key={app.id}
                className="ds-card ds-stack"
                style={{
                  borderColor: selectedAppId === app.id ? 'var(--color-accent-primary)' : undefined
                }}
              >
                <div className="ds-row-between" style={{ flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
                  <div>
                    <span className="ds-eyebrow" style={{ color: 'var(--color-accent-primary)' }}>
                      {app.company} · {app.remoteType}
                    </span>
                    <h3 className="ds-h3" style={{ margin: '2px 0 0' }}>
                      {app.role}
                    </h3>
                  </div>

                  <div className="ds-row" style={{ gap: 'var(--space-xs)', alignItems: 'center' }}>
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
                  <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '4px' }}>
                    ESTADIO DEL PIPELINE (SELECCIONAR PASO ACTIVO):
                  </span>
                  <div className="ds-row-wrap" style={{ gap: '4px' }}>
                    {PIPELINE_STAGES.map((stg) => (
                      <button
                        key={stg}
                        type="button"
                        onClick={() => handleStageChange(app.id, stg)}
                        className="ds-chip"
                        data-active={app.stage === stg}
                      >
                        {stg}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ÚNICA SIGUIENTE ACCIÓN PER DOCUMENTO 06 */}
                <div className="ds-card ds-row-between" style={{ padding: 'var(--space-sm)', flexWrap: 'wrap' }}>
                  <div className="ds-row" style={{ gap: 'var(--space-xs)' }}>
                    <Calendar size={16} style={{ color: 'var(--color-accent-warning)' }} />
                    <span className="ds-body">
                      <strong>Única siguiente acción:</strong> {app.singleNextAction}
                    </span>
                  </div>
                  <span className="ds-micro">
                    Fecha seguimiento: {app.followUpDateIso}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VISTA 2: DETALLE & ENCAJE */}
        {activeTab === 'detail' && selectedApp && (
          <div className="ds-card ds-stack" style={{ padding: 'var(--space-lg)' }}>
            <div>
              <span className="ds-eyebrow" style={{ color: 'var(--color-accent-primary)' }}>
                ANÁLISIS DE MATCH Y ENCAJE DETALLADO
              </span>
              <h2 className="ds-h2" style={{ margin: '4px 0 0' }}>
                {selectedApp.company} — {selectedApp.role}
              </h2>
            </div>

            {selectedApp.fitMatrix && (
              <div className="ds-stack-sm">
                <div className="ds-row" style={{ gap: 'var(--space-sm)' }}>
                  <strong className="ds-h3" style={{ color: 'var(--color-state-done)' }}>
                    Match estimado: {selectedApp.fitMatrix.matchPercentage}%
                  </strong>
                </div>

                <div>
                  <strong className="ds-label" style={{ display: 'block', marginBottom: '4px' }}>
                    Requisitos que encajan perfectamente:
                  </strong>
                  <div className="ds-row-wrap" style={{ gap: '6px' }}>
                    {selectedApp.fitMatrix.matchingSkills.map((sk, i) => (
                      <span key={i} className="ds-badge ds-badge-accent">
                        ✓ {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <strong className="ds-label" style={{ display: 'block', marginBottom: '4px' }}>
                    Huecos a mitigar en la postulación:
                  </strong>
                  <div className="ds-row-wrap" style={{ gap: '6px' }}>
                    {selectedApp.fitMatrix.gapsToAddress.map((gp, i) => (
                      <span key={i} className="ds-badge ds-badge-warning">
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
          <div className="ds-stack">
            <h3 className="ds-h3" style={{ margin: 0 }}>
              Activos Aprobados de Portafolio & Versiones
            </h3>

            <div className="ds-grid">
              {assets.map((ast) => (
                <div key={ast.id} className="ds-card ds-stack-sm">
                  <div className="ds-row-between">
                    <span className="ds-eyebrow">
                      {ast.category} ({ast.version})
                    </span>
                    {ast.isApproved && <CheckCircle2 size={16} style={{ color: 'var(--color-state-done)' }} />}
                  </div>
                  <strong className="ds-body" style={{ fontWeight: 600 }}>
                    {ast.title}
                  </strong>
                  {ast.githubRepoUrl && (
                    <a href={ast.githubRepoUrl} target="_blank" rel="noreferrer" className="ds-row ds-caption" style={{ color: 'var(--color-accent-primary)', textDecoration: 'none', marginTop: '4px', gap: '4px' }}>
                      <ExternalLink size={13} /> Ver Evidencia en GitHub
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* EVIDENCIA GITHUB */}
            <div className="ds-card ds-stack-sm" style={{ marginTop: 'var(--space-sm)' }}>
              <h4 className="ds-label" style={{ margin: '0 0 var(--space-xs)' }}>
                Integración de Evidencias de GitHub (Permisos Mínimos)
              </h4>
              {githubEvidence.map((ge, i) => (
                <div key={i} className="ds-body" style={{ color: 'var(--text-secondary)' }}>
                  <strong>{ge.repoName}</strong> — {ge.releaseStatus} ({ge.techStack.join(', ')})
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VISTA 4: BORRADORES IA CON APROBACIÓN OBLIGATORIA */}
        {activeTab === 'drafts' && (
          <div className="ds-stack">
            <div className="ds-card ds-row" style={{ background: 'var(--color-accent-primary-soft)', borderColor: 'var(--color-accent-primary)', gap: 'var(--space-sm)' }}>
              <ShieldAlert size={20} style={{ color: 'var(--color-accent-primary)', flexShrink: 0 }} />
              <span className="ds-body" style={{ fontWeight: 500 }}>
                Los borradores de IA permanecen aislados de las aplicaciones enviadas. Todo contenido requiere tu revisión y aprobación manual antes de utilizarse.
              </span>
            </div>

            {aiDrafts.map((dft) => (
              <div key={dft.id} className="ds-card ds-stack">
                <div className="ds-row-between">
                  <span className="ds-eyebrow" style={{ color: 'var(--color-accent-warning)' }}>
                    BORRADOR ASISTIDO · {dft.company} ({dft.role})
                  </span>
                  <span className="ds-badge ds-badge-warning">
                    Estado: {dft.status}
                  </span>
                </div>

                <div className="ds-card ds-body" style={{ background: 'rgba(0,0,0,0.3)', whiteSpace: 'pre-wrap' }}>
                  {dft.draftText}
                </div>

                {dft.unverifiedClaimsFlagged.length > 0 && (
                  <div className="ds-caption" style={{ color: 'var(--color-accent-warning)' }}>
                    ⚠️ Afirmación no verificada para revisión: {dft.unverifiedClaimsFlagged.join(', ')}
                  </div>
                )}

                <div className="ds-row" style={{ justifyContent: 'flex-end', gap: 'var(--space-xs)' }}>
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
