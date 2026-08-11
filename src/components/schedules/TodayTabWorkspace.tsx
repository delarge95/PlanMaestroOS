import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import DailyOperatingView from './DailyOperatingView';
import ClinicalExecutionHub from '../clinical/ClinicalExecutionHub';
import { getTodayDomainView } from '../../data/adapters/todayAdapter';
import { Play, CheckCircle2, Flame, Clock } from 'lucide-react';
import Button from '../ui/Button';

export default function TodayTabWorkspace() {
  const [activeTab, setActiveTab] = useState<'overview' | 'timeline' | 'checkin'>('overview');
  const [todayData] = useState(() => getTodayDomainView());
  const [microActionDone, setMicroActionDone] = useState(false);

  const formattedDate = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>

        {/* HEADER MINIMALISTA ELEGANTE */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 'var(--space-md)',
          paddingBottom: 'var(--space-md)',
          borderBottom: '1px solid var(--color-border-subtle)'
        }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {formattedDate}
            </span>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '2px 0 0', color: 'var(--text)', letterSpacing: '-0.5px' }}>
              Ahora & Control Diario
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {/* SELECTOR SEGMENTADO AHORA | CRONOGRAMA | SALUD */}
            <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.04)', padding: '3px', borderRadius: '10px', border: '1px solid var(--color-border-subtle)' }}>
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
                Hoy
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('timeline')}
                style={{
                  background: activeTab === 'timeline' ? 'var(--color-accent-primary)' : 'transparent',
                  color: activeTab === 'timeline' ? '#000000' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '6px 14px',
                  borderRadius: '7px',
                  fontSize: '0.8rem',
                  fontWeight: activeTab === 'timeline' ? 700 : 500,
                  cursor: 'pointer'
                }}
              >
                Plan & Kanban
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
                Regulación
              </button>
            </div>
          </div>
        </div>

        {/* CONTENIDO PRINCIPAL: VISTA HOY */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>

            {/* CARD DESTACADA DE MICRO-ACCION 10 MIN */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(10, 132, 255, 0.1) 0%, rgba(28, 28, 30, 0.6) 100%)',
              border: '1px solid var(--color-accent-primary-soft)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-md) var(--space-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-md)',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'var(--color-accent-primary-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent-primary)'
                }}>
                  <Clock size={20} />
                </div>

                <div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
                    Siguiente Micro-Acción (10 min)
                  </span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '2px 0 0', color: 'var(--text)' }}>
                    {todayData.primaryAction10Min.title}
                  </h3>
                </div>
              </div>

              <Button
                variant={microActionDone ? 'ghost' : 'primary'}
                size="md"
                onClick={() => setMicroActionDone(!microActionDone)}
              >
                {microActionDone ? (
                  <>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-state-done)' }} />
                    <span>Listo</span>
                  </>
                ) : (
                  <>
                    <Play size={16} />
                    <span>Empezar 10 min</span>
                  </>
                )}
              </Button>
            </div>

            {/* SECCIÓN TOP 3 TAREAS CLAVE */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-sm)' }}>
                <Flame size={16} style={{ color: 'var(--color-accent-warning)' }} />
                <h2 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
                  Top 3 Foco de Hoy
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-sm)' }}>
                {todayData.top3Tasks.map((t) => (
                  <div
                    key={t.id}
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--color-border-visible)',
                      borderRadius: 'var(--radius-md)',
                      padding: 'var(--space-md)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: 'var(--color-accent-primary)',
                        background: 'var(--color-accent-primary-soft)',
                        padding: '2px 8px',
                        borderRadius: '4px'
                      }}>
                        {t.area}
                      </span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                        Prioridad {t.priority}
                      </span>
                    </div>

                    <strong style={{ fontSize: '0.95rem', color: 'var(--text)', margin: '2px 0 0' }}>
                      {t.title}
                    </strong>
                  </div>
                ))}
              </div>
            </div>

            {/* BLOQUE A & BLOQUE B */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-md)' }}>
              {/* BLOQUE A */}
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--color-border-visible)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Bloque A · Foco Profundo
                </span>
                <strong style={{ fontSize: '1rem', color: 'var(--text)' }}>
                  Sustentación TwinSight X500 & WebGL
                </strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Duración: 90 min · Energía: Alta
                </span>
              </div>

              {/* BLOQUE B */}
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--color-border-visible)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-warning)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Bloque B · Producción
                </span>
                <strong style={{ fontSize: '1rem', color: 'var(--text)' }}>
                  Seguimiento Vacantes & Práctica Alemán
                </strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Duración: 45 min · Energía: Media
                </span>
              </div>
            </div>

            {/* VISTA OPERATIVA COMPLETA */}
            <DailyOperatingView />
          </div>
        )}

        {activeTab === 'timeline' && <DailyOperatingView />}
        {activeTab === 'checkin' && <ClinicalExecutionHub />}
      </div>
    </ErrorBoundary>
  );
}
