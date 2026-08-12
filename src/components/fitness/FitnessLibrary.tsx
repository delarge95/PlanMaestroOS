// src/components/fitness/FitnessLibrary.tsx
import React from 'react';
import SectionNav from '../ui/SectionNav';
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
        
        {/* NAVEGACIÓN NIVEL 2 (SUBMENÚ 1: STICKY 62px) */}
        <SectionNav sectionKey="fitness" currentPath={currentPath} level={2} />

        {/* TÍTULO PRINCIPAL (DESAPARECE AL SCROLLEAR) */}
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '4px 0 12px 0', color: '#ffffff', letterSpacing: '-0.02em' }}>
          Base de Datos & Biblioteca
        </h1>

        {/* NAVEGACIÓN NIVEL 3 (SUBMENÚ 2: STICKY 116px) */}
        <SectionNav sectionKey="fitness.library" currentPath={currentPath} level={3} />

        {/* SUBVISTAS DE BIBLIOTECA */}
        {subTab === 'catalog' && <LibraryCatalog />}
        {subTab === 'skills' && <LibrarySkills />}
        {subTab === 'data' && <LibraryDatabase />}
        {subTab === 'muscles' && <LibraryMuscles />}

      </div>
    </ErrorBoundary>
  );
}
