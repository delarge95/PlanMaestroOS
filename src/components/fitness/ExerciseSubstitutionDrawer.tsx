import React from 'react';
import { ArrowLeftRight, Check, RotateCcw } from 'lucide-react';
import Sheet from '../ui/Sheet';
import Button from '../ui/Button';
import ListRow from '../ui/ListRow';
import { getExerciseAlternatives } from '../../data/fitness/alternatives';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import { getExerciseDetails } from '../../data/fitness/exerciseResolver';

export interface ExerciseSubstitutionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  prescriptionId: string;
  originalExerciseId: string;
  originalName: string;
  sourceSubstitutes?: string[];
}

export function ExerciseSubstitutionDrawer({
  isOpen,
  onClose,
  prescriptionId,
  originalExerciseId,
  originalName,
  sourceSubstitutes = []
}: ExerciseSubstitutionDrawerProps) {
  const overrides = useActiveProgramStore((s) => s.selectedExerciseOverrides);
  const setOverride = useActiveProgramStore((s) => s.setExerciseOverride);
  const clearOverride = useActiveProgramStore((s) => s.clearExerciseOverride);

  const currentActiveId = overrides[prescriptionId] || originalExerciseId;
  const isOverridden = Boolean(overrides[prescriptionId]);

  const alternatives = getExerciseAlternatives(originalExerciseId, sourceSubstitutes);

  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      title="Sustitución de Ejercicio"
      description={`Prescripción original: ${originalName}`}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        {/* ESTADO ACTUAL Y BOTÓN REVERTIR */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--surface-elevated)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)' }}>
          <div>
            <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600 }}>EJERCICIO ACTIVO EN TRACKER</span>
            <strong style={{ display: 'block', fontSize: 'var(--font-size-body)', color: 'var(--text)' }}>
              {getExerciseDetails(currentActiveId).name}
            </strong>
          </div>

          {isOverridden && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => clearOverride(prescriptionId)}
            >
              <RotateCcw size={15} /> Revertir al original
            </Button>
          )}
        </div>

        {/* LISTA DE ALTERNATIVAS POR CAPAS */}
        <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>
          Alternativas Compatibles (Programa → Plan Fitness → FitApp)
        </span>

        {alternatives.length === 0 ? (
          <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--text-secondary)' }}>
            No hay sustituciones seguras configuradas para este ejercicio.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {/* OPCIÓN ORIGINAL */}
            <ListRow
              title={originalName}
              meta="Ejercicio original prescrito por el programa fuente"
              icon={<ArrowLeftRight size={18} style={{ color: 'var(--color-accent-primary)' }} />}
              active={currentActiveId === originalExerciseId}
              badge={currentActiveId === originalExerciseId ? 'Seleccionado' : undefined}
              badgeTone={currentActiveId === originalExerciseId ? 'success' : 'default'}
              onClick={() => clearOverride(prescriptionId)}
            />

            {/* ALTERNATIVAS */}
            {alternatives.map((alt) => {
              const isSelected = currentActiveId === alt.exerciseId;
              const reasonLabel =
                alt.reason === 'source-program'
                  ? 'Alternativa del Programa'
                  : alt.reason === 'plan-fitness'
                  ? 'Plan Fitness (Salud Articular)'
                  : 'Motor FitApp Compatible';

              return (
                <ListRow
                  key={alt.exerciseId}
                  title={alt.name}
                  meta={`${reasonLabel} · ${alt.note || ''}`}
                  icon={isSelected ? <Check size={18} style={{ color: 'var(--color-state-done)' }} /> : <ArrowLeftRight size={18} style={{ color: 'var(--text-tertiary)' }} />}
                  active={isSelected}
                  badge={isSelected ? 'Seleccionado' : undefined}
                  badgeTone={isSelected ? 'success' : 'default'}
                  onClick={() => setOverride(prescriptionId, alt.exerciseId)}
                />
              );
            })}
          </div>
        )}
      </div>
    </Sheet>
  );
}

export default ExerciseSubstitutionDrawer;
