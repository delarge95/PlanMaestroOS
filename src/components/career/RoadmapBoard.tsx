import React, { useState, useEffect } from 'react';
import { initialCareerGoals, type CareerGoal } from '../../data/career/goals';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';
import { Calendar, Columns, ArrowRight, MoreVertical } from 'lucide-react';

export default function RoadmapBoard() {
  const [viewMode, setViewMode] = useState<'board' | 'calendar'>('board');
  const [goals, setGoals] = useState<CareerGoal[]>(initialCareerGoals);
  const [showAllShort, setShowAllShort] = useState(false);
  const [showAllMedium, setShowAllMedium] = useState(false);
  const [showAllLong, setShowAllLong] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('plan_maestro_career_goals');
      if (saved) {
        setGoals(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const saveGoals = (next: CareerGoal[]) => {
    setGoals(next);
    localStorage.setItem('plan_maestro_career_goals', JSON.stringify(next));
  };

  const moveGoalTimeframe = (goalId: string, targetTimeframe: 'short' | 'medium' | 'long') => {
    const updated = goals.map((g) => (g.id === goalId ? { ...g, timeframe: targetTimeframe } : g));
    saveGoals(updated);
  };

  const renderColumn = (
    title: string,
    timeframe: 'short' | 'medium' | 'long',
    showAll: boolean,
    setShowAll: (v: boolean) => void
  ) => {
    const list = goals.filter((g) => g.timeframe === timeframe);
    const visibleList = showAll ? list : list.slice(0, 5);

    return (
      <div style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid var(--color-border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-md)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {title} ({list.length})
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {visibleList.map((g) => (
            <div
              key={g.id}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--color-border-visible)',
                borderRadius: 'var(--radius-md)',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--color-accent-primary)', background: 'var(--color-accent-primary-soft)', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                  {g.area}
                </span>

                <div style={{ display: 'flex', gap: '4px' }}>
                  {timeframe !== 'short' && (
                    <button type="button" onClick={() => moveGoalTimeframe(g.id, 'short')} style={{ background: 'transparent', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', fontSize: '0.7rem' }}>
                      Corto
                    </button>
                  )}
                  {timeframe !== 'medium' && (
                    <button type="button" onClick={() => moveGoalTimeframe(g.id, 'medium')} style={{ background: 'transparent', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', fontSize: '0.7rem' }}>
                      Mediano
                    </button>
                  )}
                  {timeframe !== 'long' && (
                    <button type="button" onClick={() => moveGoalTimeframe(g.id, 'long')} style={{ background: 'transparent', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', fontSize: '0.7rem' }}>
                      Largo
                    </button>
                  )}
                </div>
              </div>

              <strong style={{ fontSize: '0.88rem', color: 'var(--text)' }}>
                {g.title}
              </strong>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
                <span>Meta: {g.targetDate}</span>
                <span>{g.linkedTaskCount} tareas vinculadas</span>
              </div>
            </div>
          ))}
        </div>

        {list.length > 5 && (
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            style={{ background: 'transparent', border: 'none', color: 'var(--color-accent-primary)', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', textAlign: 'center', paddingTop: '4px' }}
          >
            {showAll ? 'Mostrar menos' : `Ver todos (${list.length})`}
          </button>
        )}
      </div>
    );
  };

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>
        {/* VISTA Y CONTROLES */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-xs)' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
            Roadmap Profesional
          </h2>

          <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.03)', padding: '3px', borderRadius: '10px', border: '1px solid var(--color-border-subtle)' }}>
            <button
              type="button"
              onClick={() => setViewMode('board')}
              style={{
                background: viewMode === 'board' ? 'var(--color-accent-primary)' : 'transparent',
                color: viewMode === 'board' ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: viewMode === 'board' ? 700 : 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Columns size={14} /> Tablero
            </button>

            <button
              type="button"
              onClick={() => setViewMode('calendar')}
              style={{
                background: viewMode === 'calendar' ? 'var(--color-accent-primary)' : 'transparent',
                color: viewMode === 'calendar' ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: viewMode === 'calendar' ? 700 : 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Calendar size={14} /> Calendario
            </button>
          </div>
        </div>

        {/* TABLERO DE 3 COLUMNAS */}
        {viewMode === 'board' ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-md)' }}>
            {renderColumn('Corto plazo', 'short', showAllShort, setShowAllShort)}
            {renderColumn('Mediano plazo', 'medium', showAllMedium, setShowAllMedium)}
            {renderColumn('Largo plazo', 'long', showAllLong, setShowAllLong)}
          </div>
        ) : (
          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-accent-primary)', textTransform: 'uppercase' }}>
              Vista Calendario de Metas
            </span>

            {goals.map((g) => (
              <div key={g.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid var(--color-border-subtle)', padding: '8px 0' }}>
                <strong style={{ color: 'var(--text)' }}>{g.title} ({g.area})</strong>
                <span style={{ color: 'var(--text-tertiary)' }}>{g.targetDate}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
