// src/components/today/TodayPlanWorkspace.tsx
import React, { useState } from 'react';
import SectionNav from '../ui/SectionNav';
import ErrorBoundary from '../ErrorBoundary';
import DailyOperatingView from '../schedules/DailyOperatingView';
import WeeklyGridPlanner from '../schedules/WeeklyGridPlanner';

export interface TodayPlanWorkspaceProps {
  currentPath?: string;
}

export default function TodayPlanWorkspace({ currentPath = '/app/today/plan' }: TodayPlanWorkspaceProps) {
  const [viewMode, setViewMode] = useState<'planner' | 'daily'>('planner');

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>
        
        {/* NAVEGACIÓN NIVEL 2 */}
        <SectionNav sectionKey="today" currentPath={currentPath} level={2} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
          <h1 style={{ fontSize: 'var(--fs-page, 1.75rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
            Plan Macro & Cronograma
          </h1>

          <div style={{ display: 'flex', gap: '4px', background: 'var(--surface-1)', padding: '4px', borderRadius: 'var(--radius-s)' }}>
            <button
              type="button"
              onClick={() => setViewMode('planner')}
              style={{
                background: viewMode === 'planner' ? 'var(--surface-2)' : 'transparent',
                color: viewMode === 'planner' ? 'var(--text-primary)' : 'var(--text-secondary)',
                border: 'none', padding: '4px 10px', borderRadius: '6px', fontSize: 'var(--fs-meta)', fontWeight: 600, cursor: 'pointer'
              }}
            >
              Planificador Semanal
            </button>
            <button
              type="button"
              onClick={() => setViewMode('daily')}
              style={{
                background: viewMode === 'daily' ? 'var(--surface-2)' : 'transparent',
                color: viewMode === 'daily' ? 'var(--text-primary)' : 'var(--text-secondary)',
                border: 'none', padding: '4px 10px', borderRadius: '6px', fontSize: 'var(--fs-meta)', fontWeight: 600, cursor: 'pointer'
              }}
            >
              Operativo Diario
            </button>
          </div>
        </div>

        {viewMode === 'planner' && <WeeklyGridPlanner />}
        {viewMode === 'daily' && <DailyOperatingView />}

      </div>
    </ErrorBoundary>
  );
}
