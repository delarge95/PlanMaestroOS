import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import InertiaRescueModal from '../clinical/InertiaRescueModal';
import { Calendar, Columns, BarChart3, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

export interface DailyBlock {
  id: string;
  time: string;
  shortTitle: string;
  fullTitle: string;
  category: 'clinical' | 'fitness' | 'career' | 'german' | 'general';
  status: 'pending' | 'in_progress' | 'completed' | 'skipped';
  actionUrl?: string;
  actionLabel?: string;
}

const initialDailyBlocks: DailyBlock[] = [
  { id: 'b1', time: '05:30', shortTitle: 'Despertar & Salida Gym', fullTitle: 'Despertar 05:30 & Salida al Gimnasio', category: 'general', status: 'completed' },
  { id: 'b2', time: '06:20', shortTitle: 'Prehab AM & Isométricos', fullTitle: 'Prehab AM: Spanish Squats & Muñecas', category: 'fitness', status: 'completed', actionUrl: '/app/fitness', actionLabel: 'Fitness' },
  { id: 'b3', time: '06:40', shortTitle: 'Skill Work Técnico', fullTitle: 'Handstand & Support Hold', category: 'fitness', status: 'completed', actionUrl: '/app/fitness', actionLabel: 'Skills' },
  { id: 'b4', time: '06:55', shortTitle: 'Sesión Min-Max Gym', fullTitle: 'Entrenamiento Min-Max Hypertrophy', category: 'fitness', status: 'completed', actionUrl: '/app/fitness', actionLabel: 'Logger' },
  { id: 'b5', time: '09:00', shortTitle: 'Planeación TDAH', fullTitle: 'Agenda & Selección de Foco', category: 'clinical', status: 'completed' },
  { id: 'b6', time: '09:20', shortTitle: 'Bloque A: TwinSight MVP', fullTitle: 'Trabajo Profundo TwinSight X500', category: 'career', status: 'in_progress', actionUrl: '/app/career', actionLabel: 'TwinSight' },
  { id: 'b7', time: '12:00', shortTitle: 'Almuerzo & Descanso', fullTitle: 'Almuerzo & Pausa Digestiva', category: 'general', status: 'pending' },
  { id: 'b8', time: '13:30', shortTitle: 'Alemán A1 (25 min)', fullTitle: 'Práctica & Vocabulario Alemán', category: 'german', status: 'pending', actionUrl: '/app/german', actionLabel: 'Alemán' },
  { id: 'b9', time: '14:00', shortTitle: 'Exposición CBT', fullTitle: 'Sustentación & Regulación', category: 'clinical', status: 'pending' },
  { id: 'b10', time: '14:45', shortTitle: 'Bloque B: Producción', fullTitle: 'Caso de Estudio & GitHub Commit', category: 'career', status: 'pending', actionUrl: '/app/career', actionLabel: 'GitHub' },
  { id: 'b11', time: '17:15', shortTitle: 'Movilidad PM', fullTitle: 'Elephant Walks & Cadera', category: 'fitness', status: 'pending' },
  { id: 'b12', time: '21:00', shortTitle: 'Higiene de Sueño CBT-I', fullTitle: 'Cierre Diálogo & Descanso', category: 'general', status: 'pending' }
];

export default function DailyOperatingView() {
  const [blocks, setBlocks] = useState<DailyBlock[]>(initialDailyBlocks);
  const [viewMode, setViewMode] = useState<'timeline' | 'kanban' | 'stats'>('timeline');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isRescueOpen, setIsRescueOpen] = useState(false);

  const toggleStatus = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== id) return b;
        const next = b.status === 'pending' ? 'in_progress' : b.status === 'in_progress' ? 'completed' : 'pending';
        return { ...b, status: next };
      })
    );
  };

  const moveStatus = (id: string, targetStatus: 'pending' | 'in_progress' | 'completed') => {
    setBlocks((prev) => prev.map((b) => (b.id === id ? { ...b, status: targetStatus } : b)));
  };

  const filtered = blocks.filter((b) => activeCategory === 'all' || b.category === activeCategory);

  const getCategoryBadgeColor = (cat: string) => {
    switch (cat) {
      case 'fitness': return 'var(--color-state-done)';
      case 'career': return 'var(--color-accent-primary)';
      case 'german': return 'var(--color-accent-warning)';
      case 'clinical': return '#ff6b6b';
      default: return 'var(--text-tertiary)';
    }
  };

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>

        {/* CONTROLES DE VISTA */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-xs)',
          paddingBottom: 'var(--space-xs)',
          borderBottom: '1px solid var(--color-border-subtle)'
        }}>
          <div style={{ display: 'flex', gap: '6px', background: 'rgba(255,255,255,0.03)', padding: '4px', borderRadius: '12px', border: '1px solid var(--color-border-subtle)' }}>
            <button
              type="button"
              onClick={() => setViewMode('timeline')}
              style={{
                background: viewMode === 'timeline' ? 'var(--color-accent-primary-soft)' : 'transparent',
                color: viewMode === 'timeline' ? 'var(--color-accent-primary)' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Calendar size={15} /> Línea Temporal
            </button>

            <button
              type="button"
              onClick={() => setViewMode('kanban')}
              style={{
                background: viewMode === 'kanban' ? 'var(--color-accent-primary-soft)' : 'transparent',
                color: viewMode === 'kanban' ? 'var(--color-accent-primary)' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Columns size={15} /> Tablero Kanban
            </button>

            <button
              type="button"
              onClick={() => setViewMode('stats')}
              style={{
                background: viewMode === 'stats' ? 'var(--color-accent-primary-soft)' : 'transparent',
                color: viewMode === 'stats' ? 'var(--color-accent-primary)' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <BarChart3 size={15} /> Resumen
            </button>
          </div>

          <Button variant="ghost" size="sm" onClick={() => setIsRescueOpen(true)}>
            <AlertCircle size={15} style={{ color: 'var(--color-accent-warning)' }} />
            <span>Ayuda Bloqueo</span>
          </Button>
        </div>

        {/* FILTRO DE ETIQUETAS POR CATEGORÍA */}
        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
          {['all', 'fitness', 'career', 'german', 'clinical', 'general'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? 'var(--color-accent-primary)' : 'rgba(255,255,255,0.04)',
                color: activeCategory === cat ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: activeCategory === cat ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {cat === 'all' ? 'Todas' : cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* LÍNEA TEMPORAL */}
        {viewMode === 'timeline' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {filtered.map((b) => {
              const isDone = b.status === 'completed';
              const isInProgress = b.status === 'in_progress';

              return (
                <div
                  key={b.id}
                  style={{
                    background: isInProgress
                      ? 'rgba(10, 132, 255, 0.08)'
                      : isDone
                      ? 'rgba(48, 209, 88, 0.04)'
                      : 'var(--surface)',
                    border: `1px solid ${isInProgress ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)'}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    opacity: isDone ? 0.65 : 1,
                    transition: 'all 150ms ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0 }}>
                    <span style={{
                      fontFamily: 'monospace',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: getCategoryBadgeColor(b.category),
                      width: '46px',
                      flexShrink: 0
                    }}>
                      {b.time}
                    </span>

                    <span style={{
                      fontSize: '0.9rem',
                      fontWeight: isInProgress ? 700 : 500,
                      color: 'var(--text)',
                      textDecoration: isDone ? 'line-through' : 'none',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {b.shortTitle}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {b.actionUrl && (
                      <a
                        href={b.actionUrl}
                        style={{
                          fontSize: '0.72rem',
                          color: 'var(--color-accent-primary)',
                          textDecoration: 'none',
                          fontWeight: 600,
                          padding: '2px 8px',
                          borderRadius: '4px',
                          background: 'var(--color-accent-primary-soft)'
                        }}
                      >
                        {b.actionLabel}
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={(e) => toggleStatus(b.id, e)}
                      style={{
                        background: isDone ? 'var(--color-state-done-soft)' : isInProgress ? 'var(--color-accent-primary-soft)' : 'rgba(255,255,255,0.06)',
                        color: isDone ? 'var(--color-state-done)' : isInProgress ? 'var(--color-accent-primary)' : 'var(--text-tertiary)',
                        border: 'none',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      {isDone ? 'Hecho' : isInProgress ? 'En curso' : 'Por hacer'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TABLERO KANBAN */}
        {viewMode === 'kanban' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-md)' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Por hacer ({filtered.filter(b => b.status === 'pending').length})
              </span>

              {filtered.filter(b => b.status === 'pending').map((b) => (
                <div key={b.id} style={{ background: 'var(--surface)', border: '1px solid var(--color-border-visible)', borderRadius: 'var(--radius-md)', padding: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.7rem', color: getCategoryBadgeColor(b.category), fontWeight: 700 }}>{b.time}</span>
                    <button type="button" onClick={() => moveStatus(b.id, 'in_progress')} style={{ background: 'transparent', border: 'none', color: 'var(--color-accent-primary)', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600 }}>
                      Empezar 10 min
                    </button>
                  </div>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--text)' }}>{b.shortTitle}</strong>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(10, 132, 255, 0.03)', border: '1px solid var(--color-accent-primary-soft)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent-primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                En curso ({filtered.filter(b => b.status === 'in_progress').length})
              </span>

              {filtered.filter(b => b.status === 'in_progress').map((b) => (
                <div key={b.id} style={{ background: 'var(--surface)', border: '1px solid var(--color-accent-primary)', borderRadius: 'var(--radius-md)', padding: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.7rem', color: getCategoryBadgeColor(b.category), fontWeight: 700 }}>{b.time}</span>
                    <button type="button" onClick={() => moveStatus(b.id, 'completed')} style={{ background: 'var(--color-state-done-soft)', border: 'none', color: 'var(--color-state-done)', padding: '2px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700 }}>
                      Hecho
                    </button>
                  </div>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--text)' }}>{b.shortTitle}</strong>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(48, 209, 88, 0.02)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-state-done)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Hecho ({filtered.filter(b => b.status === 'completed').length})
              </span>

              {filtered.filter(b => b.status === 'completed').map((b) => (
                <div key={b.id} style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: '12px', display: 'flex', flexDirection: 'column', gap: '4px', opacity: 0.7 }}>
                  <span style={{ fontSize: '0.7rem', color: getCategoryBadgeColor(b.category), fontWeight: 700 }}>{b.time}</span>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--text)', textDecoration: 'line-through' }}>{b.shortTitle}</strong>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RESUMEN */}
        {viewMode === 'stats' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>Completado hoy</span>
              <strong style={{ fontSize: '1.5rem', color: 'var(--color-state-done)', display: 'block', marginTop: '4px' }}>
                {Math.round((blocks.filter(b => b.status === 'completed').length / blocks.length) * 100)}%
              </strong>
            </div>

            <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>Enfocado en</span>
              <strong style={{ fontSize: '1.1rem', color: 'var(--color-accent-primary)', display: 'block', marginTop: '4px' }}>
                TwinSight MVP & Sustentación
              </strong>
            </div>
          </div>
        )}

        <InertiaRescueModal
          isOpen={isRescueOpen}
          onClose={() => setIsRescueOpen(false)}
          currentTaskName="Bloque A: Trabajo Profundo"
        />
      </div>
    </ErrorBoundary>
  );
}
