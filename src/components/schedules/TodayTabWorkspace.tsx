import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import DailyOperatingView from './DailyOperatingView';
import ClinicalExecutionHub from '../clinical/ClinicalExecutionHub';
import ContextualAIActionButton from '../shared/ContextualAIActionButton';
import { getTodayDomainView } from '../../data/adapters/todayAdapter';
import { Dumbbell, BriefcaseBusiness, Play, CheckCircle2, Clock } from 'lucide-react';
import Button from '../ui/Button';

const TABS = [
  { id: 'overview', label: '⚡ Operación Diaria & Top 3' },
  { id: 'timeline', label: '⏱️ Línea Temporal (05:30 – 21:30)' },
  { id: 'checkin', label: '📊 Bio-Feedback & Regulaciones' }
];

export default function TodayTabWorkspace() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [todayData] = useState(() => getTodayDomainView());
  const [actionDone, setActionDone] = useState(false);

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>

        {/* APPLE SEGMENTED CONTROL BAR (STICKY BELOW HEADER) */}
        <div style={{
          position: 'sticky',
          top: '68px',
          zIndex: 85,
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          background: 'rgba(28, 28, 30, 0.85)',
          backdropFilter: 'blur(30px) saturate(190%)',
          WebkitBackdropFilter: 'blur(30px) saturate(190%)',
          padding: '6px',
          borderRadius: '18px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), 0 1px 0 rgba(255,255,255,0.1) inset',
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
                  background: isSelected ? 'var(--color-text-primary)' : 'transparent',
                  color: isSelected ? '#000000' : 'var(--color-text-tertiary)',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '12px',
                  fontSize: '0.84rem',
                  fontWeight: isSelected ? 700 : 500,
                  fontFamily: 'var(--font-family-system)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: isSelected ? '0 3px 12px rgba(0, 0, 0, 0.35)' : 'none',
                  transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* TAB 1: VISUALIZACIÓN DE OPERACIÓN DIARIA "HOY" (DOCUMENTO 04) */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            
            {/* HERO CARD: BLOQUE ACTIVO & PRIMERA ACCIÓN PRINCIPAL (10 MIN) */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(10, 132, 255, 0.12) 0%, rgba(28, 28, 30, 0.95) 100%)',
              border: '1px solid var(--color-accent-primary)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-md)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
                <div>
                  <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {todayData.activeBlock}
                  </span>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '4px 0 0', color: 'var(--text)' }}>
                    Acción Principal Única (Menos de 10 min)
                  </h2>
                </div>

                {/* BOTÓN IA CONTEXTUAL */}
                <ContextualAIActionButton
                  label="Proponer Top 3"
                  actionType="propose_top3"
                  contextData={{ block: todayData.activeBlock }}
                  sources={['Notion Tasks DB 3', 'Daily Plan DB 4']}
                  onApprovedExecution={(proposedText) => {
                    console.log('Top 3 aprobado:', proposedText);
                  }}
                />
              </div>

              {/* MICRO-ACCIÓN DE 10 MINUTOS */}
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--color-border-visible)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 'var(--space-md)',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', flex: 1, minWidth: '240px' }}>
                  <Clock size={22} style={{ color: 'var(--color-accent-primary)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ fontSize: 'var(--font-size-body)', fontWeight: 700, color: 'var(--text)', display: 'block' }}>
                      {todayData.primaryAction10Min.title}
                    </strong>
                    <span style={{ fontSize: 'var(--font-size-label)', color: 'var(--text-secondary)' }}>
                      Área: {todayData.primaryAction10Min.targetArea} · Duración: {todayData.primaryAction10Min.estimatedMinutes} min
                    </span>
                  </div>
                </div>

                <Button
                  variant={actionDone ? 'ghost' : 'primary'}
                  size="md"
                  onClick={() => setActionDone(!actionDone)}
                >
                  {actionDone ? (
                    <>
                      <CheckCircle2 size={18} style={{ color: 'var(--color-state-done)' }} />
                      <span>Completado</span>
                    </>
                  ) : (
                    <>
                      <Play size={18} />
                      <span>Empezar 10 min</span>
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* RESUMEN DE OTROS DOMINIOS (FITNESS & CARRERA) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-md)' }}>
              
              {/* FITNESS RESUMIDO */}
              <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <Dumbbell size={18} style={{ color: 'var(--color-accent-primary)' }} />
                  <span style={{ fontSize: 'var(--font-size-label)', fontWeight: 700, color: 'var(--text)' }}>
                    Fitness · Día Activo
                  </span>
                </div>
                <strong style={{ fontSize: 'var(--font-size-body)', color: 'var(--text)' }}>
                  {todayData.fitnessSummary.activeRoutineTitle}
                </strong>
                <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)' }}>
                  Próxima sesión: {todayData.fitnessSummary.nextWorkoutDayTitle}
                </span>
              </div>

              {/* CARRERA RESUMIDA */}
              <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <BriefcaseBusiness size={18} style={{ color: 'var(--color-accent-warning)' }} />
                  <span style={{ fontSize: 'var(--font-size-label)', fontWeight: 700, color: 'var(--text)' }}>
                    Carrera · Aplicaciones Activas
                  </span>
                </div>
                <strong style={{ fontSize: 'var(--font-size-body)', color: 'var(--text)' }}>
                  {todayData.careerSummary.pendingFollowUpsCount} seguimiento pendiente
                </strong>
                <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)' }}>
                  {todayData.careerSummary.activeApplicationsCount} candidaturas activas registradas en Notion DB 5
                </span>
              </div>
            </div>

            {/* LÍNEA TEMPORAL COMPLETA */}
            <DailyOperatingView />
          </div>
        )}

        {activeTab === 'timeline' && <DailyOperatingView />}
        {activeTab === 'checkin' && <ClinicalExecutionHub />}
      </div>
    </ErrorBoundary>
  );
}
