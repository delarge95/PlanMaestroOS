import React from 'react';
import { Dumbbell } from 'lucide-react';
import { getExerciseDetails } from '../../data/fitness/exerciseResolver';

export interface ExerciseLinkProps {
  exerciseId: string;
  displayName?: string;
  onClickModal?: (exerciseId: string) => void;
}

export function ExerciseLink({
  exerciseId,
  displayName,
  onClickModal
}: ExerciseLinkProps) {
  const details = getExerciseDetails(exerciseId);
  const title = displayName || details.name;

  return (
    <button
      type="button"
      onClick={() => {
        if (onClickModal) onClickModal(exerciseId);
      }}
      aria-label={`Ver técnica y alternativas de ${title}`}
      title={`Ver técnica y alternativas de ${title}`}
      style={{
        background: 'transparent',
        border: 'none',
        padding: 0,
        color: 'var(--text)',
        fontSize: 'var(--font-size-body)',
        fontWeight: 600,
        cursor: 'pointer',
        textAlign: 'left',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        textDecoration: 'none',
        outline: 'none',
        transition: 'color 150ms ease'
      }}
      onFocus={(e) => {
        e.currentTarget.style.color = 'var(--color-accent-primary)';
      }}
      onBlur={(e) => {
        e.currentTarget.style.color = 'var(--text)';
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--color-accent-primary)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--text)';
      }}
    >
      <Dumbbell size={15} style={{ color: 'var(--color-accent-primary)', flexShrink: 0 }} aria-hidden="true" />
      <span style={{ textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.2)' }}>{title}</span>
    </button>
  );
}

export default ExerciseLink;
