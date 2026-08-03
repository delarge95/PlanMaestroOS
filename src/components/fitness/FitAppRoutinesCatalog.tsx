import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import WorkoutPrescriptionTable from './WorkoutPrescriptionTable';
import ActiveProgramSelector from './ActiveProgramSelector';
import { getProgramById } from '../../data/fitness/programs';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import ExerciseModal from './ExerciseModal';

export default function FitAppRoutinesCatalog() {
  const activeProgramId = useActiveProgramStore((s) => s.programId);
  const [exerciseModalId, setExerciseModalId] = useState<string | null>(null);

  const currentProgram = getProgramById(activeProgramId);

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', color: 'var(--text)' }}>
        {/* UNIFIED PROGRAM SELECTOR & INSPECTION HEADER */}
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 var(--space-2)' }}>
            Catálogo Oficial de Programas
          </h2>
          <ActiveProgramSelector />
        </div>

        {/* PRESCRIPCIÓN DETALLADA DEL PROGRAMA SELECCIONADO */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <WorkoutPrescriptionTable
            program={currentProgram}
            onOpenExerciseModal={(id) => setExerciseModalId(id)}
          />
        </div>

        {/* MODAL DE FICHA TÉCNICA FITAPP */}
        {exerciseModalId && (
          <ExerciseModal
            exerciseId={exerciseModalId}
            onClose={() => setExerciseModalId(null)}
          />
        )}
      </div>
    </ErrorBoundary>
  );
}
