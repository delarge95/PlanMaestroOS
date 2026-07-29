import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import WorkoutPrescriptionTable from './WorkoutPrescriptionTable';
import ActiveProgramSelector from './ActiveProgramSelector';
import { allPrograms, getProgramById } from '../../data/fitness/programs';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import ExerciseModal from './ExerciseModal';

export default function FitAppRoutinesCatalog() {
  const activeProgramId = useActiveProgramStore((s) => s.programId);
  const [selectedProgramId, setSelectedProgramId] = useState<string>(activeProgramId);
  const [exerciseModalId, setExerciseModalId] = useState<string | null>(null);

  const currentProgram = getProgramById(selectedProgramId);

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', color: 'var(--text)' }}>
        {/* SELECTOR DE PROGRAMA ACTIVO GLOBAL */}
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 var(--space-2)' }}>
            Catálogo Oficial de Programas
          </h2>
          <ActiveProgramSelector />
        </div>

        {/* SELECTOR DE VISTA DE PRESCRIPCIÓN */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto' }}>
            {allPrograms.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedProgramId(p.id)}
                style={{
                  background: selectedProgramId === p.id ? 'var(--color-accent-primary)' : 'var(--surface-elevated)',
                  color: selectedProgramId === p.id ? '#ffffff' : 'var(--text-secondary)',
                  border: '1px solid var(--color-border-visible)',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.84rem',
                  fontWeight: selectedProgramId === p.id ? 700 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {p.title}
              </button>
            ))}
          </div>

          {/* PRESCRIPCIÓN DETALLADA DEL PROGRAMA */}
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
