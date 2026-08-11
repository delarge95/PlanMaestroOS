import React, { useState } from 'react';
import { Target, ExternalLink } from 'lucide-react';
import { useSkillStateStore } from '../../../data/fitness/skills/skillStateStore';
import { getSkillStepById } from '../../../data/fitness/skills/skillSteps';
import { isExerciseVerified } from '../../../data/fitness/exerciseMap';
import Button from '../../ui/Button';

export interface MyPracticeSummaryProps {
  onOpenPaths?: () => void;
  onOpenDetail?: (stepId: string) => void;
}

export function MyPracticeSummary({ onOpenPaths, onOpenDetail }: MyPracticeSummaryProps) {
  const activeStepIds = useSkillStateStore((s) => s.activeStepIds || [s.activeStepId]);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');

  const activeSteps = activeStepIds
    .map((id) => getSkillStepById(id))
    .filter(Boolean);

  const filteredSteps = activeSteps.filter((step) => {
    if (!step) return false;
    if (selectedDiscipline === 'all') return true;
    return step.pathId.includes(selectedDiscipline);
  });

  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
      
      {/* HEADER DE MI PRÁCTICA */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Target size={16} style={{ color: 'var(--color-accent-primary)' }} />
          <strong style={{ fontSize: '0.9rem', color: 'var(--text)' }}>
            Mi práctica
          </strong>
        </div>

        {onOpenPaths && (
          <Button variant="ghost" size="sm" onClick={onOpenPaths}>
            Cambiar ruta
          </Button>
        )}
      </div>

      {/* FILTROS POR DISCIPLINA */}
      <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', paddingBottom: '2px' }}>
        {['all', 'pull', 'push', 'core', 'leg', 'ring', 'mobility'].map((disc) => (
          <button
            key={disc}
            type="button"
            onClick={() => setSelectedDiscipline(disc)}
            style={{
              background: selectedDiscipline === disc ? 'var(--color-accent-primary-soft)' : 'transparent',
              color: selectedDiscipline === disc ? 'var(--color-accent-primary)' : 'var(--text-tertiary)',
              border: 'none',
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '0.72rem',
              fontWeight: selectedDiscipline === disc ? 700 : 500,
              cursor: 'pointer'
            }}
          >
            {disc === 'all' ? 'Todas' : disc.toUpperCase()}
          </button>
        ))}
      </div>

      {/* LISTA DE PASOS ACTIVOS */}
      {filteredSteps.length === 0 ? (
        <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
          Sin habilidades activas seleccionadas.
        </span>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {filteredSteps.map((step) => {
            if (!step) return null;
            const verified = isExerciseVerified(step.id);

            return (
              <div
                key={step.id}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '0.68rem', color: 'var(--color-accent-primary)', fontWeight: 700 }}>
                    Activo hoy · Paso {step.order}
                  </span>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--text)' }}>
                    {step.title}
                  </strong>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {onOpenDetail && (
                    <Button variant="secondary" size="sm" onClick={() => onOpenDetail(step.id)}>
                      Ver ejercicio
                    </Button>
                  )}

                  {!verified && (
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', background: 'rgba(255,255,255,0.04)', padding: '2px 6px', borderRadius: '4px' }}>
                      Ficha FitApp pendiente
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MyPracticeSummary;
