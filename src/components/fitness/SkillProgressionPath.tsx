import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { SkillStep } from '../../data/fitness/programs/calisthenicsPaths';
import ExerciseLink from './ExerciseLink';

export interface SkillProgressionPathProps {
  title: string;
  steps: SkillStep[];
  onOpenExerciseModal?: (exerciseId: string) => void;
}

export function SkillProgressionPath({
  title,
  steps,
  onOpenExerciseModal
}: SkillProgressionPathProps) {
  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
        Ruta de Progresión: {title}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
        {steps.map((step, idx) => (
          <div
            key={step.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--surface-elevated)',
              border: '1px solid var(--color-border-subtle)',
              padding: 'var(--space-3)',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <span style={{ background: 'var(--color-accent-primary)', color: '#ffffff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.82rem', fontWeight: 700 }}>
                L{step.level}
              </span>

              <div>
                <ExerciseLink
                  exerciseId={step.exerciseId}
                  displayName={step.name}
                  onClickModal={onOpenExerciseModal}
                />
                <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                  Volumen objetivo: {step.targetVolume} · {step.advancementCriteria}
                </span>
              </div>
            </div>

            {idx < steps.length - 1 && (
              <ArrowRight size={16} style={{ color: 'var(--text-tertiary)' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillProgressionPath;
