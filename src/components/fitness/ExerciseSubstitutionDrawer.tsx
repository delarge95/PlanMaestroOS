import React from 'react';
import { ArrowLeftRight, Check, RotateCcw, Star } from 'lucide-react';
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

  // Group into PDF recommended vs FitApp general compatibles
  const pdfAlternatives = alternatives.filter((a) => a.reason === 'source-program');
  const fitAppAlternatives = alternatives.filter((a) => a.reason !== 'source-program');

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

        {/* 1. SECCIÓN RECOMENDACIONES DEL PROGRAMA */}
        <div>
          <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
            <Star size={14} /> Recomendadas por el programa
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {/* OPCIÓN ORIGINAL */}
            <ListRow
              title={originalName}
              meta="Ejercicio original prescrito"
              icon={<ArrowLeftRight size={18} style={{ color: 'var(--color-accent-primary)' }} />}
              active={currentActiveId === originalExerciseId}
              badge={currentActiveId === originalExerciseId ? 'Original Activo' : undefined}
              badgeTone={currentActiveId === originalExerciseId ? 'success' : 'default'}
              onClick={() => clearOverride(prescriptionId)}
            />

            {/* SUSTITUTOS OFICIALES DEL PROGRAMA */}
            {pdfAlternatives.map((alt) => {
              const isSelected = currentActiveId === alt.exerciseId;
              return (
                <div
                  key={alt.exerciseId}
                  style={{
                    border: isSelected ? '2px solid var(--color-accent-primary)' : '1px solid var(--color-border-visible)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden'
                  }}
                >
                  <ListRow
                    title={alt.name}
                    meta={alt.note || 'Sustitución directa de la rutina'}
                    icon={isSelected ? <Check size={18} style={{ color: 'var(--color-state-done)' }} /> : <Star size={18} style={{ color: '#f59e0b' }} />}
                    active={isSelected}
                    badge={isSelected ? 'Seleccionado' : 'Recomendada'}
                    badgeTone={isSelected ? 'success' : 'warning'}
                    onClick={() => setOverride(prescriptionId, alt.exerciseId)}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. SECCIÓN OTROS SUSTITUTOS COMPATIBLES FITAPP */}
        {fitAppAlternatives.length > 0 && (
          <div>
            <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Alternativas compatibles
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {fitAppAlternatives.map((alt) => {
                const isSelected = currentActiveId === alt.exerciseId;
                const reasonLabel = alt.reason === 'plan-fitness' ? 'Plan Fitness (Salud Articular)' : 'FitApp Compatible';

                return (
                  <ListRow
                    key={alt.exerciseId}
                    title={alt.name}
                    meta={`${reasonLabel}${alt.note ? ` · ${alt.note}` : ''}`}
                    icon={isSelected ? <Check size={18} style={{ color: 'var(--color-state-done)' }} /> : <ArrowLeftRight size={18} style={{ color: 'var(--text-tertiary)' }} />}
                    active={isSelected}
                    badge={isSelected ? 'Seleccionado' : undefined}
                    badgeTone={isSelected ? 'success' : 'default'}
                    onClick={() => setOverride(prescriptionId, alt.exerciseId)}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Sheet>
  );
}

export default ExerciseSubstitutionDrawer;
