// src/components/fitness/FitnessProgress.tsx
import React from 'react';
import SectionNav from '../ui/SectionNav';
import ProgressDashboard from './ProgressDashboard';
import ErrorBoundary from '../ErrorBoundary';

export interface FitnessProgressProps {
  currentPath?: string;
}

export default function FitnessProgress({ currentPath = '/app/fitness/progress' }: FitnessProgressProps) {
  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        
        {/* NAVEGACIÓN NIVEL 2 */}
        <SectionNav sectionKey="fitness" currentPath={currentPath} level={2} />

        <h1 style={{ fontSize: 'var(--fs-page, 1.75rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
          Progreso y cargas
        </h1>

        {/* DASHBOARD DE PROGRESO Y GUÍA DE CARGAS */}
        <ProgressDashboard />

      </div>
    </ErrorBoundary>
  );
}
