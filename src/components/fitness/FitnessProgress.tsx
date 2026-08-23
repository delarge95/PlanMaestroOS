// src/components/fitness/FitnessProgress.tsx
import React from 'react';
import ProgressDashboard from './ProgressDashboard';
import RealProgressSections from './analytics/RealProgressSections';
import ErrorBoundary from '../ErrorBoundary';

export interface FitnessProgressProps {
  currentPath?: string;
}

export default function FitnessProgress({ currentPath = '/app/fitness/progress' }: FitnessProgressProps) {
  return (
    <ErrorBoundary>
      {/* B8: progreso real (programas activos / semana actual / histórico / récords).
          Nada de números sin fuente: lo pendiente se muestra como tal. */}
      <RealProgressSections />
      <ProgressDashboard currentPath={currentPath} />
    </ErrorBoundary>
  );
}
