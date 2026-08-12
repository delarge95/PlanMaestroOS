// src/components/fitness/FitnessLibrary.tsx
import React from 'react';
import SectionNav from '../ui/SectionNav';
import LibraryCatalog from './LibraryCatalog';
import LibrarySkills from './LibrarySkills';
import LibraryDatabase from './LibraryDatabase';
import LibraryMuscles from './LibraryMuscles';
import ThenxGuideDatabase from './ThenxGuideDatabase';
import ErrorBoundary from '../ErrorBoundary';

export interface FitnessLibraryProps {
  subTab?: 'catalog' | 'skills' | 'data' | 'muscles' | 'thenx';
  currentPath?: string;
}

export default function FitnessLibrary({ subTab = 'catalog', currentPath = '/app/fitness/library/catalog' }: FitnessLibraryProps) {
  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        
        {/* NAVEGACIÓN NIVEL 2 */}
        <SectionNav sectionKey="fitness" currentPath={currentPath} level={2} />

        <h1 style={{ fontSize: 'var(--fs-page, 1.75rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
          Base de Datos & Biblioteca
        </h1>

        {/* NAVEGACIÓN NIVEL 3 */}
        <SectionNav sectionKey="fitness.library" currentPath={currentPath} level={3} />

        {/* SUBVISTAS DE BIBLIOTECA */}
        {subTab === 'catalog' && <LibraryCatalog />}
        {subTab === 'skills' && <LibrarySkills />}
        {subTab === 'data' && <LibraryDatabase />}
        {subTab === 'muscles' && <LibraryMuscles />}
        {subTab === 'thenx' && <ThenxGuideDatabase />}

      </div>
    </ErrorBoundary>
  );
}
