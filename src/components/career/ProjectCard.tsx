import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';
import { GitBranch, GitCommit, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

export interface ProjectData {
  id: string;
  name: string;
  repo: string;
  status: 'active' | 'completed';
  readinessStatus?: 'Pulir' | 'Mejorar' | 'Listo para portafolio';
  lastCommitMessage: string;
  lastCommitDate: string;
  openIssuesCount: number;
  nextAction: string;
}

export const sampleProjects: ProjectData[] = [
  {
    id: 'proj-1',
    name: 'TwinSight X500 MVP',
    repo: 'delarge95/TwinSight-X500',
    status: 'active',
    lastCommitMessage: 'feat(shaders): implement HLSL custom pass for digital twin',
    lastCommitDate: '2026-08-10',
    openIssuesCount: 2,
    nextAction: 'Finalizar documentación de sustentación y subir demo a GitHub Pages'
  },
  {
    id: 'proj-2',
    name: 'Plan Maestro OS',
    repo: 'delarge95/PlanMaestroOS',
    status: 'active',
    lastCommitMessage: 'feat(phase-3): complete clinical module & unblock panel',
    lastCommitDate: '2026-08-11',
    openIssuesCount: 0,
    nextAction: 'Completar tareas de la Fase 4 Laboral'
  },
  {
    id: 'proj-3',
    name: 'Procedural Vegetation UE5',
    repo: 'delarge95/UE5-Procedural-Foliage',
    status: 'completed',
    readinessStatus: 'Listo para portafolio',
    lastCommitMessage: 'docs: add high-res screenshots for portfolio',
    lastCommitDate: '2026-06-15',
    openIssuesCount: 0,
    nextAction: 'Exportar renders finales a ArtStation'
  },
  {
    id: 'proj-4',
    name: 'Houdini Terrain Node Toolkit',
    repo: 'delarge95/Houdini-Terrain-Toolkit',
    status: 'completed',
    readinessStatus: 'Pulir',
    lastCommitMessage: 'refactor: clean VEX nodes',
    lastCommitDate: '2026-05-20',
    openIssuesCount: 1,
    nextAction: 'Escribir README técnico de 1 página'
  }
];

export default function ProjectCard() {
  const [showArchived, setShowArchived] = useState(false);

  const activeProjects = sampleProjects.filter((p) => p.status === 'active');
  const completedProjects = sampleProjects.filter((p) => p.status === 'completed');

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>
        
        {/* PROYECTOS ACTIVOS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
            Proyectos activos
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            {activeProjects.map((p) => (
              <div
                key={p.id}
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <GitBranch size={16} style={{ color: 'var(--color-accent-primary)' }} />
                    <strong style={{ fontSize: '1rem', color: 'var(--text)' }}>
                      {p.name}
                    </strong>
                  </div>

                  <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>
                    {p.repo}
                  </span>
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <GitCommit size={14} />
                  <span>Último commit: <em>"{p.lastCommitMessage}"</em> ({p.lastCommitDate})</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '4px' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-accent-primary)', fontWeight: 600 }}>
                    Próxima acción: {p.nextAction}
                  </span>

                  <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
                    Issues abiertos: {p.openIssuesCount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BASE DE DATOS DE PROYECTOS (DISCLOSURE COMPLETADOS) */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
          <button
            type="button"
            onClick={() => setShowArchived(!showArchived)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text)',
              fontSize: '0.92rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: 0
            }}
          >
            <span>Base de datos de proyectos ({completedProjects.length})</span>
            {showArchived ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {showArchived && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: 'var(--space-xs)' }}>
              {completedProjects.map((p) => (
                <div
                  key={p.id}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '10px 14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <strong style={{ fontSize: '0.88rem', color: 'var(--text)' }}>
                      {p.name}
                    </strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', display: 'block', marginTop: '2px' }}>
                      {p.nextAction}
                    </span>
                  </div>

                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: p.readinessStatus === 'Listo para portafolio' ? 'var(--color-state-done-soft)' : 'var(--color-accent-warning-soft)',
                    color: p.readinessStatus === 'Listo para portafolio' ? 'var(--color-state-done)' : 'var(--color-accent-warning)'
                  }}>
                    {p.readinessStatus}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </ErrorBoundary>
  );
}
