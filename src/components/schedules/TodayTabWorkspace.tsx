import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import DailyOperatingView from './DailyOperatingView';
import ClinicalExecutionHub from '../clinical/ClinicalExecutionHub';
import ContextualAIActionButton from '../shared/ContextualAIActionButton';
import { getTodayDomainView } from '../../data/adapters/todayAdapter';
import {
  Dumbbell,
  Play,
  CheckCircle2,
  Clock,
  Zap,
  HeartPulse,
  Languages,
  ChevronRight,
  Flame
} from 'lucide-react';
import Button from '../ui/Button';

const TABS = [
  { id: 'overview', label: '⚡ Hoy & Task Manager' },
  { id: 'timeline', label: '⏱️ Línea Temporal (05:30 – 21:30)' },
  { id: 'checkin', label: '📊 Bio-Feedback & Regulaciones' }
];

export default function TodayTabWorkspace() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [todayData] = useState(() => getTodayDomainView());
  const [actionDone, setActionDone] = useState(false);
  const [activeBlockTimer, setActiveBlockTimer] = useState<'A' | 'B' | null>(null);

  const formattedDate = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

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

        {/* OVERVIEW PRINCIPAL DE LA PANTALLA "HOY" PER ROADMAP DOCUMENTO 02 Y 04 */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>

            {/* 1. ENCABEZADO MÍNIMO CON FRASE DE CONTEXTO & CTA PRINCIPAL */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(10, 132, 255, 0.15) 0%, rgba(28, 28, 30, 0.95) 100%)',
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
                    {formattedDate}
                  </span>
                  <h1 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '4px 0 2px', color: 'var(--text)' }}>
                    Hoy — Centro de Control Operativo
                  </h1>
                  <span style={{ fontSize: 'var(--font-size-body)', color: 'var(--text-secondary)' }}>
                    "Foco en 1 sola micro-acción principal a la vez para minimizar la fatiga cognitiva."
                  </span>
                </div>

                <div style={{ display: 'flex', gap: 'var(--space-xs)' }}>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => setActiveBlockTimer('A')}
                  >
                    <Zap size={18} />
                    <span>Empezar Bloque A (Foco)</span>
                  </Button>
                  <ContextualAIActionButton
                    label="Proponer Top 3"
                    actionType="propose_top3"
                    contextData={{ date: formattedDate }}
                    sources={['Notion Tasks DB 3', 'Daily Plan DB 4']}
                    onApprovedExecution={(proposedText) => {
                      console.log('Top 3 Aprobado:', proposedText);
                    }}
                  />
                </div>
              </div>

              {/* MICRO-ACCION DE 10 MINUTOS DE BLOQUE A */}
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
                      Área: {todayData.primaryAction10Min.targetArea} · Micro-compromiso: {todayData.primaryAction10Min.estimatedMinutes} min
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

            {/* 2. SECCIÓN TOP 3 (MÁXIMO 3 TAREAS SIMULTÁNEAS PER REGLA UX TDAH) */}
            <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Flame size={18} style={{ color: 'var(--color-accent-warning)' }} />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
                    Top 3 Tareas Clave del Día (Máximo 3 en foco)
                  </h3>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setActiveTab('timeline')}>
                  <span>Ver más tareas</span>
                  <ChevronRight size={16} />
                </Button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-sm)' }}>
                {todayData.top3Tasks.map((task) => (
                  <div
                    key={task.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--color-border-visible)',
                      borderRadius: 'var(--radius-md)',
                      padding: 'var(--space-sm) var(--space-md)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{
                        background: 'var(--color-accent-primary-soft)',
                        color: 'var(--color-accent-primary)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: 'var(--font-size-meta)',
                        fontWeight: 700
                      }}>
                        {task.area}
                      </span>
                      <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)' }}>
                        Prioridad: {task.priority}
                      </span>
                    </div>

                    <strong style={{ fontSize: 'var(--font-size-body)', color: 'var(--text)', marginTop: '2px' }}>
                      {task.title}
                    </strong>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. BLOQUES A / B (FOCO PROFUNDO VS PRODUCCIÓN) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-md)' }}>
              
              {/* BLOQUE A: FOCO PROFUNDO */}
              <div style={{
                background: 'var(--surface)',
                border: `1px solid ${activeBlockTimer === 'A' ? 'var(--color-accent-primary)' : 'var(--color-border-visible)'}`,
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-xs)'
              }}>
                <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Bloque A · Foco Profundo (Tesis / Portafolio)
                </span>
                <strong style={{ fontSize: '1.05rem', color: 'var(--text)' }}>
                  Sustentación TwinSight X500 & Repaso CAD WebGL
                </strong>
                <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)' }}>
                  Duración estimada: 90 min · Energía: Alta
                </span>
                <div style={{ marginTop: 'auto', paddingTop: 'var(--space-xs)' }}>
                  <Button variant="secondary" size="sm" onClick={() => setActiveBlockTimer('A')}>
                    <Play size={14} /> Empezar 10 min Bloque A
                  </Button>
                </div>
              </div>

              {/* BLOQUE B: PRODUCCIÓN / SALIDA */}
              <div style={{
                background: 'var(--surface)',
                border: `1px solid ${activeBlockTimer === 'B' ? 'var(--color-accent-warning)' : 'var(--color-border-visible)'}`,
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-xs)'
              }}>
                <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--color-accent-warning)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Bloque B · Producción / Salida (Empleo & Cursos)
                </span>
                <strong style={{ fontSize: '1.05rem', color: 'var(--text)' }}>
                  Seguimiento a Vacante Studio X & Cursos Alemán
                </strong>
                <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)' }}>
                  Duración estimada: 45 min · Energía: Media
                </span>
                <div style={{ marginTop: 'auto', paddingTop: 'var(--space-xs)' }}>
                  <Button variant="secondary" size="sm" onClick={() => setActiveBlockTimer('B')}>
                    <Play size={14} /> Empezar 10 min Bloque B
                  </Button>
                </div>
              </div>
            </div>

            {/* 4. FILAS CONDENSADAS POR ÁREA (FITNESS + CLÍNICO + IDIOMAS) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '4px 0 0', color: 'var(--text)' }}>
                Estado Condensado por Áreas Operativas
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-sm)' }}>
                
                {/* FILA FITNESS */}
                <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Dumbbell size={16} style={{ color: 'var(--color-accent-primary)' }} />
                    <span style={{ fontSize: 'var(--font-size-label)', fontWeight: 700, color: 'var(--text)' }}>
                      Fitness
                    </span>
                  </div>
                  <strong style={{ fontSize: 'var(--font-size-body)', color: 'var(--text)' }}>
                    {todayData.fitnessSummary.activeRoutineTitle}
                  </strong>
                  <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)' }}>
                    Próxima sesión: {todayData.fitnessSummary.nextWorkoutDayTitle}
                  </span>
                </div>

                {/* FILA CLÍNICO */}
                <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <HeartPulse size={16} style={{ color: 'var(--color-accent-danger)' }} />
                    <span style={{ fontSize: 'var(--font-size-label)', fontWeight: 700, color: 'var(--text)' }}>
                      Clínico TDAH / Regulación
                    </span>
                  </div>
                  <strong style={{ fontSize: 'var(--font-size-body)', color: 'var(--text)' }}>
                    Pausa de respiración diaphragmatic (3 min)
                  </strong>
                  <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)' }}>
                    Ayuda rápida: "¿Bloqueado? Regla de 5 pasos simples"
                  </span>
                </div>

                {/* FILA IDIOMAS */}
                <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Languages size={16} style={{ color: 'var(--color-accent-warning)' }} />
                    <span style={{ fontSize: 'var(--font-size-label)', fontWeight: 700, color: 'var(--text)' }}>
                      Idiomas (Alemán A1)
                    </span>
                  </div>
                  <strong style={{ fontSize: 'var(--font-size-body)', color: 'var(--text)' }}>
                    Lección diaria 25m (Der Entwickler)
                  </strong>
                  <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)' }}>
                    Práctica speaking corta disponible
                  </span>
                </div>
              </div>
            </div>

            {/* LÍNEA TEMPORAL OPERATIVA COMPLETA DEL DÍA */}
            <DailyOperatingView />
          </div>
        )}

        {activeTab === 'timeline' && <DailyOperatingView />}
        {activeTab === 'checkin' && <ClinicalExecutionHub />}
      </div>
    </ErrorBoundary>
  );
}
