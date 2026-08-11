import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import WorkoutPrescriptionTable from './WorkoutPrescriptionTable';
import ActiveProgramSelector from './ActiveProgramSelector';
import { getProgramById } from '../../data/fitness/programs';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import ExerciseModal from './ExerciseModal';
import Button from '../ui/Button';
import { Plus } from 'lucide-react';

export default function FitAppRoutinesCatalog() {
  const activeProgramId = useActiveProgramStore((s) => s.programId);
  const [exerciseModalId, setExerciseModalId] = useState<string | null>(null);

  const currentProgram = getProgramById(activeProgramId);

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', color: 'var(--text)' }}>
        
        {/* BOTÓN SUPERIOR: AÑADIR NUEVA RUTINA (D2) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>
            Catálogo Oficial de Programas
          </h2>
          <a href="/app/fitness" style={{ textDecoration: 'none' }}>
            <Button variant="secondary" size="sm">
              <Plus size={15} /> Añadir nueva rutina
            </Button>
          </a>
        </div>

        {/* SELECTOR UNIFICADO DE PROGRAMA Y CABECERA DE INSPECCIÓN */}
        <div>
          <ActiveProgramSelector />
        </div>

        {/* PRESCRIPCIÓN DETALLADA DEL PROGRAMA SELECCIONADO */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <WorkoutPrescriptionTable
            program={currentProgram}
            onOpenExerciseModal={(id) => setExerciseModalId(id)}
          />
        </div>

        {/* BOTÓN INFERIOR: AÑADIR NUEVA RUTINA (D2) */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 'var(--space-xs)' }}>
          <a href="/app/fitness" style={{ textDecoration: 'none' }}>
            <Button variant="secondary" size="sm">
              <Plus size={15} /> Añadir nueva rutina
            </Button>
          </a>
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
