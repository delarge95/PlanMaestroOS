// src/components/fitness/FitnessProgress.tsx
import React from 'react';
import ProgressDashboard from './ProgressDashboard';
import ErrorBoundary from '../ErrorBoundary';

export interface FitnessProgressProps {
  currentPath?: string;
}

export default function FitnessProgress({ currentPath = '/app/fitness/progress' }: FitnessProgressProps) {
  return (
    <ErrorBoundary>
      <ProgressDashboard currentPath={currentPath} />
    </ErrorBoundary>
  );
}
