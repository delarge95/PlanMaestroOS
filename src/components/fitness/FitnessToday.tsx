// src/components/fitness/FitnessToday.tsx
import React, { useState } from 'react';
import SectionNav from '../ui/SectionNav';
import PrehabBlock from './PrehabBlock';
import TodayRoutineStack from './TodayRoutineStack';
import TodayCalendar from './TodayCalendar';
import MyPracticeSummary from './skills/MyPracticeSummary';
import ErrorBoundary from '../ErrorBoundary';

export interface FitnessTodayProps {
  currentPath?: string;
}

export default function FitnessToday({ currentPath = '/app/fitness' }: FitnessTodayProps) {
  const [hasPainZone] = useState(true);
  const [selectedDayIndex, setSelectedDayIndex] = useState(1); // Martes por defecto (Día 2 Lower 1)

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        
        {/* NAVEGACIÓN NIVEL 2 */}
        <SectionNav sectionKey="fitness" currentPath={currentPath} level={2} />

        <h1 style={{ fontSize: 'var(--fs-page, 1.75rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
          Hoy en Fitness
        </h1>

        {/* 1. CUADRO DE PREHAB */}
        {hasPainZone && <PrehabBlock />}

        {/* 2. CRONOGRAMA INTERACTIVO */}
        <TodayCalendar
          selectedDayIndex={selectedDayIndex}
          onSelectDayIndex={(idx) => setSelectedDayIndex(idx)}
        />

        {/* 3. PROGRESIÓN / HABILIDAD ACTIVA */}
        <MyPracticeSummary
          onOpenPaths={() => { window.location.href = '/app/fitness/library/skills'; }}
          onOpenDetail={() => { window.location.href = '/app/fitness/library/skills'; }}
          onStartPractice={() => { window.location.href = '/app/fitness/library/skills'; }}
        />

        {/* 4. RUTINA DEL DÍA PRINCIPAL (SINCRONIZADA CON EL DÍA SELECCIONADO EN EL CRONOGRAMA) */}
        <TodayRoutineStack selectedDayIndex={selectedDayIndex} />

      </div>
    </ErrorBoundary>
  );
}
