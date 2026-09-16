import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import InteractiveRoadmapDashboard from './InteractiveRoadmapDashboard';
import RoadmapBoard from './RoadmapBoard';

/**
 * CareerRoadmapWorkspace — página /app/career/roadmap (AG-CAREER T5).
 *
 * DECISIÓN (documentada): InteractiveRoadmapDashboard (antes huérfano) pasa a
 * ser la vista PRINCIPAL del roadmap con los hitos trazables a doc-14/doc-15
 * (src/data/career/roadmapMilestones.ts). RoadmapBoard (board de metas con
 * persistencia propia) NO se elimina (Regla de Oro §0.9): queda como pestaña
 * secundaria "Board de metas".
 */
export default function CareerRoadmapWorkspace() {
  const [tab, setTab] = useState<'dashboard' | 'board'>('dashboard');

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', background: 'rgba(255,255,255,0.03)', padding: '3px', borderRadius: '10px', border: '1px solid var(--color-border-subtle)', alignSelf: 'center' }}>
          <button
            type="button"
            onClick={() => setTab('dashboard')}
            style={{
              background: tab === 'dashboard' ? 'var(--accent)' : 'transparent',
              color: tab === 'dashboard' ? '#000000' : 'var(--text-secondary)',
              border: 'none',
              padding: '6px 14px',
              borderRadius: '7px',
              fontSize: '0.78rem',
              fontWeight: tab === 'dashboard' ? 700 : 500,
              cursor: 'pointer'
            }}
          >
            Dashboard 90 días (doc-14/15)
          </button>
          <button
            type="button"
            onClick={() => setTab('board')}
            style={{
              background: tab === 'board' ? 'var(--accent)' : 'transparent',
              color: tab === 'board' ? '#000000' : 'var(--text-secondary)',
              border: 'none',
              padding: '6px 14px',
              borderRadius: '7px',
              fontSize: '0.78rem',
              fontWeight: tab === 'board' ? 700 : 500,
              cursor: 'pointer'
            }}
          >
            Board de metas
          </button>
        </div>

        {tab === 'dashboard' ? (
          <InteractiveRoadmapDashboard currentPath="/app/career/roadmap" />
        ) : (
          <RoadmapBoard currentPath="/app/career/roadmap" />
        )}
      </div>
    </ErrorBoundary>
  );
}
