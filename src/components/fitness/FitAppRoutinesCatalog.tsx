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
        
        {/* BOTÓN SUPERIOR: AÑADIR NUEVA RUTINA */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: 'var(--fs-step, 1.125rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
            Catálogo Oficial de Programas
          </h2>
          <Button variant="secondary" size="sm" onClick={() => alert('Añadir nueva rutina personalizada')}>
            <Plus size={15} /> Añadir nueva rutina
          </Button>
        </div>

        {/* SELECTOR UNIFICADO DE PROGRAMA Y CABECERA DE INSPECCIÓN (LISTA HORIZONTAL PER AUDIT) */}
        <div>
          <ActiveProgramSelector />
        </div>

        {/* PRESCRIPCIÓN DETALLADA DEL PROGRAMA SELECCIONADO */}
        <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-m)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <WorkoutPrescriptionTable
            program={currentProgram}
            onOpenExerciseModal={(id) => setExerciseModalId(id)}
          />
        </div>

        {/* BOTÓN INFERIOR: AÑADIR NUEVA RUTINA */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 'var(--space-xs)' }}>
          <Button variant="secondary" size="sm" onClick={() => alert('Añadir nueva rutina personalizada')}>
            <Plus size={15} /> Añadir nueva rutina
          </Button>
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
