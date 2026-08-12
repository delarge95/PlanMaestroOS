// src/components/fitness/FitnessToday.tsx
import React, { useState } from 'react';
import SectionNav from '../ui/SectionNav';
import PrehabBlock from './PrehabBlock';
import TodayRoutineStack from './TodayRoutineStack';
import TodayCalendar from './TodayCalendar';
import MyPracticeSummary from './skills/MyPracticeSummary';
import Disclosure from '../ui/Disclosure';
import ErrorBoundary from '../ErrorBoundary';
import { ExternalLink } from 'lucide-react';
import { useSkillStateStore } from '../../data/fitness/skills/skillStateStore';
import { getSkillStepById } from '../../data/fitness/skills/skillSteps';
import { skillPaths } from '../../data/fitness/skills/skillPaths';

export interface FitnessTodayProps {
  currentPath?: string;
}

export default function FitnessToday({ currentPath = '/app/fitness' }: FitnessTodayProps) {
  const [hasPainZone] = useState(true);
  const [selectedDayIndex, setSelectedDayIndex] = useState(1); // Martes por defecto (Día 2 Lower 1)

  const activeStepIds = useSkillStateStore((s) => s.activeStepIds || [s.activeStepId || 'pull-step-1']);
  const activeStepId = activeStepIds[0] || 'pull-step-1';
  const currentStep = getSkillStepById(activeStepId);
  const activeSkillPath = currentStep ? skillPaths.find((p) => p.id === currentStep.pathId) : null;

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

        {/* 3. LISTA UNIFICADA DE ACTIVIDADES DE HOY (MISMA PRIORIDAD Y ESTRUCTURA) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <h3 style={{ fontSize: 'var(--fs-step, 1.0625rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
            Sesiones & Actividades del Día
          </h3>

          {/* ACTIVIDAD 1: HABILIDAD ACTIVA (MI PRÁCTICA) COMO UNICO DESPLEGABLE CON ICONO EXTERNAL LINK */}
          {activeSkillPath && currentStep && (
            <Disclosure
              label={`Habilidad Activa: ${activeSkillPath.title}`}
              summary={`Paso ${currentStep.order} de ${activeSkillPath.stepIds.length}: ${currentStep.title}`}
              actions={
                <a
                  href={`/app/fitness/library/skills?step=${encodeURIComponent(currentStep.id)}`}
                  title="Ver detalle completo de esta progresión en la Base de Datos"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
                    color: 'var(--accent, #0a84ff)',
                    padding: '4px',
                    borderRadius: '6px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none'
                  }}
                >
                  <ExternalLink size={14} />
                </a>
              }
            >
              <MyPracticeSummary
                onOpenPaths={() => { window.location.href = `/app/fitness/library/skills?step=${encodeURIComponent(currentStep.id)}`; }}
              />
            </Disclosure>
          )}

          {/* ACTIVIDAD 2: RUTINA DEL DÍA PRINCIPAL COMO DESPLEGABLE */}
          <TodayRoutineStack selectedDayIndex={selectedDayIndex} />
        </div>

      </div>
    </ErrorBoundary>
  );
}
