// src/components/fitness/FitnessLibrary.tsx
import React from 'react';
import LibraryCatalog from './LibraryCatalog';
import LibrarySkills from './LibrarySkills';
import LibraryDatabase from './LibraryDatabase';
import LibraryMuscles from './LibraryMuscles';
import ErrorBoundary from '../ErrorBoundary';

export interface FitnessLibraryProps {
  subTab?: 'catalog' | 'skills' | 'data' | 'muscles';
  currentPath?: string;
}

export default function FitnessLibrary({ subTab = 'catalog', currentPath = '/app/fitness/library/catalog' }: FitnessLibraryProps) {
  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        
        {/* NAVEGACIÓN NIVEL 3 (SUBMENÚ 2: STICKY 116px) */}
        {/* SUBVISTAS DE BIBLIOTECA */}
        {subTab === 'catalog' && <LibraryCatalog />}
        {subTab === 'skills' && <LibrarySkills />}
        {subTab === 'data' && <LibraryDatabase />}
        {subTab === 'muscles' && <LibraryMuscles />}

      </div>
    </ErrorBoundary>
  );
}
