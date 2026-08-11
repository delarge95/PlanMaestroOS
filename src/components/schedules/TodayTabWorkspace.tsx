import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import DailyOperatingView from './DailyOperatingView';
import ClinicalExecutionHub from '../clinical/ClinicalExecutionHub';
import { getTodayDomainView } from '../../data/adapters/todayAdapter';
import { Play, CheckCircle2, Zap } from 'lucide-react';
import Button from '../ui/Button';

export default function TodayTabWorkspace() {
  const [activeTab, setActiveTab] = useState<'overview' | 'checkin'>('overview');
  const [todayData] = useState(() => getTodayDomainView());
  const [microActionDone, setMicroActionDone] = useState(false);

  const formattedDate = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', maxWidth: '900px', margin: '0 auto', width: '100%' }}>

        {/* ENCABEZADO ULTRA-MINIMALISTA */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-sm)',
          paddingBottom: 'var(--space-xs)',
          borderBottom: '1px solid var(--color-border-subtle)'
        }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {formattedDate}
            </span>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '2px 0 0', color: 'var(--text)' }}>
              Ahora
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.03)', padding: '3px', borderRadius: '10px', border: '1px solid var(--color-border-subtle)' }}>
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              style={{
                background: activeTab === 'overview' ? 'var(--color-accent-primary)' : 'transparent',
                color: activeTab === 'overview' ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '7px',
                fontSize: '0.8rem',
                fontWeight: activeTab === 'overview' ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              Plan Diario
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('checkin')}
              style={{
                background: activeTab === 'checkin' ? 'var(--color-accent-primary)' : 'transparent',
                color: activeTab === 'checkin' ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '7px',
                fontSize: '0.8rem',
                fontWeight: activeTab === 'checkin' ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              Regulación & Salud
            </button>
          </div>
        </div>

        {/* CONTENIDO PRINCIPAL COMPACTO Y LIMPIO */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>

            {/* UNICA CARD DE FOCO ACTIVO 10 MIN (SIN REPETICIONES) */}
            <div style={{
              background: 'rgba(10, 132, 255, 0.06)',
              border: '1px solid var(--color-accent-primary-soft)',
              borderRadius: 'var(--radius-md)',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-sm)',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Zap size={18} style={{ color: 'var(--color-accent-primary)' }} />
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
                    Foco Activo Ahora (10 min)
                  </span>
                  <strong style={{ fontSize: '0.95rem', fontWeight: 700, display: 'block', color: 'var(--text)' }}>
                    {todayData.primaryAction10Min.title}
                  </strong>
                </div>
              </div>

              <Button
                variant={microActionDone ? 'ghost' : 'primary'}
                size="sm"
                onClick={() => setMicroActionDone(!microActionDone)}
              >
                {microActionDone ? (
                  <>
                    <CheckCircle2 size={15} style={{ color: 'var(--color-state-done)' }} />
                    <span>Completado</span>
                  </>
                ) : (
                  <>
                    <Play size={15} />
                    <span>Empezar 10 min</span>
                  </>
                )}
              </Button>
            </div>

            {/* LÍNEA TEMPORAL Y KANBAN DIRECTO (ÚNICA FUENTE DE TRABAJO) */}
            <DailyOperatingView />
          </div>
        )}

        {activeTab === 'checkin' && <ClinicalExecutionHub />}
      </div>
    </ErrorBoundary>
  );
}
