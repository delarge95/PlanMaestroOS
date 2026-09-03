import React, { useState, useEffect } from 'react';
import { Package } from 'lucide-react';
import ErrorBoundary from '../ErrorBoundary';
import SectionNav from '../ui/SectionNav';
import {
  roadmapPhases,
  roadmapRoleFamilies,
  roadmapGoal,
  totalMilestones
} from '../../data/career/roadmapMilestones';

export interface InteractiveRoadmapDashboardProps {
  currentPath?: string;
}

export default function InteractiveRoadmapDashboard({ currentPath = '/app/career/roadmap' }: InteractiveRoadmapDashboardProps = {}) {
  const [selectedPhaseTab, setSelectedPhaseTab] = useState<number>(1);
  const [completedMilestones, setCompletedMilestones] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem('roadmap_completed_milestones');
      if (saved) {
        setCompletedMilestones(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const toggleMilestone = (id: string) => {
    const nextState = { ...completedMilestones, [id]: !completedMilestones[id] };
    setCompletedMilestones(nextState);
    try {
      localStorage.setItem('roadmap_completed_milestones', JSON.stringify(nextState));
    } catch (e) {
      console.error(e);
    }
  };

  const currentPhaseData = roadmapPhases.find((p) => p.phase === selectedPhaseTab) || roadmapPhases[0];
  const allMilestoneIds = roadmapPhases.flatMap((p) => p.milestones.map((m) => m.id));
  const doneCount = allMilestoneIds.filter((id) => !!completedMilestones[id]).length;
  const overallProgress = Math.round((doneCount / (totalMilestones || allMilestoneIds.length)) * 100);

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>      <div style={{
        background: 'rgba(10, 15, 20, 0.65)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        border: '1px solid rgba(59, 130, 246, 0.25)',
        borderRadius: '24px',
        padding: '28px',
        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(59, 130, 246, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        color: 'var(--color-text-primary)'
      }}>
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: '#3b82f6', background: 'rgba(59, 130, 246, 0.12)', padding: '4px 10px', borderRadius: '999px', fontWeight: 700 }}>
                ROADMAP LABORAL 16 SEMANAS / 90 DÍAS
              </span>
              <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: 'var(--color-state-done)', background: 'rgba(16, 185, 129, 0.12)', padding: '4px 10px', borderRadius: '999px', fontWeight: 700 }}>
                META: {roadmapGoal.salaryRange}
              </span>
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>
              Plan de Ejecución Estratégica & Contratación Internacional
            </h2>
            <span style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>
              Fuentes: doc-14 §Phase 1–3 (plan 30/60/90) · doc-15 §4–5 (familias y salario) · hitos con cita por tarjeta
            </span>
          </div>

          {/* OVERALL PROGRESS */}
          <div style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '12px 18px', textAlign: 'right' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', display: 'block', fontWeight: 600 }}>
              PROGRESO DE HITOS COMPLETADOS
            </span>
            <span style={{ fontSize: '1.4rem', fontWeight: 700, color: '#3b82f6' }}>
              {doneCount}/{allMilestoneIds.length} ({overallProgress}%)
            </span>
          </div>
        </div>

        {/* FAMILIAS DE ROLES TARGET */}
        <div>
          <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.72rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Familias de Roles Prioritarias (25h/sem Trabajo Útil)
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginTop: '10px' }}>
            {roadmapRoleFamilies.map((rf) => (
              <div key={rf.title} style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(59, 130, 246, 0.15)', borderRadius: '14px', padding: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', gap: '6px' }}>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--color-text-primary)' }}>{rf.title}</strong>
                  <span style={{ fontSize: '0.68rem', color: 'var(--color-state-done)', background: 'rgba(16,185,129,0.15)', padding: '2px 6px', borderRadius: '4px', height: 'fit-content', flexShrink: 0 }}>
                    {rf.priority}
                  </span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-primary)', display: 'block' }}>Stack: {rf.stack}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', display: 'block', marginTop: '2px' }}>Target: {rf.target}</span>
                <span style={{ fontSize: '0.62rem', color: 'var(--color-text-secondary)', opacity: 0.7, display: 'block', marginTop: '6px', fontStyle: 'italic' }}>{rf.sourceRef}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PHASE TAB SELECTOR */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '10px' }}>
          {roadmapPhases.map((p) => {
            const isSelected = selectedPhaseTab === p.phase;
            return (
              <button
                key={p.phase}
                type="button"
                onClick={() => setSelectedPhaseTab(p.phase)}
                style={{
                  background: isSelected ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                  border: 'none',
                  color: isSelected ? '#3b82f6' : 'var(--color-text-secondary)',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: isSelected ? 800 : 500,
                  fontSize: '0.85rem',
                  transition: 'all 150ms ease'
                }}
              >
                {p.title.split(':')[0]} ({p.weeks})
              </button>
            );
          })}
        </div>

        {/* CURRENT PHASE DETAILS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: 'rgba(59, 130, 246, 0.08)', border: '1px solid rgba(59, 130, 246, 0.2)', padding: '14px 18px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 4px', color: 'var(--color-text-primary)' }}>
                {currentPhaseData.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                {currentPhaseData.objective}
              </p>
              <span style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)', opacity: 0.75, fontStyle: 'italic' }}>
                Fuente: {currentPhaseData.sourceRef}
              </span>
            </div>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.78rem', color: 'var(--color-state-done)', background: 'rgba(16, 185, 129, 0.15)', padding: '6px 12px', borderRadius: '8px', fontWeight: 700 }}>
              📊 Target: {currentPhaseData.targetApps}
            </span>
          </div>

          {/* MILESTONES CARDS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {currentPhaseData.milestones.map((m) => {
              const isChecked = !!completedMilestones[m.id];
              return (
                <div
                  key={m.id}
                  style={{
                    background: isChecked ? 'rgba(16, 185, 129, 0.08)' : 'rgba(0, 0, 0, 0.35)',
                    border: `1px solid ${isChecked ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: '16px',
                    padding: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    transition: 'all 200ms ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <button
                        type="button"
                        onClick={() => toggleMilestone(m.id)}
                        style={{
                          background: isChecked ? 'var(--color-state-done)' : 'transparent',
                          border: `1px solid ${isChecked ? 'var(--color-state-done)' : 'rgba(255, 255, 255, 0.2)'}`,
                          color: isChecked ? '#040608' : 'var(--color-text-secondary)',
                          width: '24px',
                          height: '24px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          display: 'grid',
                          placeItems: 'center',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          marginTop: '2px',
                          flexShrink: 0
                        }}
                      >
                        {isChecked ? '✓' : ''}
                      </button>

                      <div>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
                          <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: 'var(--color-accent-primary)', background: 'rgba(119, 231, 255, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                            {m.weeks}
                          </span>
                          <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: 'var(--color-accent-primary)', background: 'rgba(168, 85, 247, 0.12)', padding: '2px 6px', borderRadius: '4px' }}>
                            🔗 Conectado a: {m.connectedTimeBlock}
                          </span>
                        </div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: isChecked ? '#6ee7b7' : 'var(--color-text-primary)' }}>
                          {m.title}
                        </h4>
                      </div>
                    </div>

                    <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.72rem', color: 'var(--color-state-done)', fontWeight: 700 }}>
                      🎯 {m.keyMetric}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.45, paddingLeft: '36px' }}>
                    {m.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingLeft: '36px' }}>
                    {m.deliverables.map((d, dIdx) => (
                      <span key={dIdx} style={{ fontSize: '0.75rem', color: 'var(--color-text-primary)', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '4px 10px', borderRadius: '8px' }}>
                        <Package size={12} style={{ verticalAlign: '-2px', marginRight: 4 }} />{d}
                      </span>
                    ))}
                  </div>

                  <span style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)', opacity: 0.75, paddingLeft: '36px', fontStyle: 'italic' }}>
                    Fuente: {m.sourceRef}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </ErrorBoundary>
  );
}
