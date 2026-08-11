// src/components/fitness/LibraryCatalog.tsx
import React from 'react';
import FitAppRoutinesCatalog from './FitAppRoutinesCatalog';
import ErrorBoundary from '../ErrorBoundary';

export default function LibraryCatalog() {
  return (
    <ErrorBoundary>
      <FitAppRoutinesCatalog />
    </ErrorBoundary>
  );
}
