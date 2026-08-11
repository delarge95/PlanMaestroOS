// src/components/fitness/FitnessToday.tsx
import React, { useState } from 'react';
import SectionNav from '../ui/SectionNav';
import PrehabBlock from './PrehabBlock';
import TodayRoutineStack from './TodayRoutineStack';
import TodayCalendar from './TodayCalendar';
import ErrorBoundary from '../ErrorBoundary';

export interface FitnessTodayProps {
  currentPath?: string;
}

export default function FitnessToday({ currentPath = '/app/fitness' }: FitnessTodayProps) {
  // Simulación de zona afectada para mostrar el bloque de prehab
  const [hasPainZone, setHasPainZone] = useState(true);

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        
        {/* NAVEGACIÓN NIVEL 2 */}
        <SectionNav sectionKey="fitness" currentPath={currentPath} level={2} />

        <h1 style={{ fontSize: 'var(--fs-page, 1.75rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
          Hoy en Fitness
        </h1>

        {/* BLOQUE 1: CRONOGRAMA & CALENDARIO (PER FIX 3.1) */}
        <TodayCalendar />

        {/* BLOQUE 2: PREHAB (solo si hay molestia activa) */}
        {hasPainZone && <PrehabBlock />}

        {/* BLOQUE 3: STACK DE RUTINAS DEL DÍA */}
        <TodayRoutineStack />

      </div>
    </ErrorBoundary>
  );
}
