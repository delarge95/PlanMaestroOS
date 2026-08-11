import React, { useState } from 'react';
import { Target, ExternalLink } from 'lucide-react';
import { useSkillStateStore } from '../../../data/fitness/skills/skillStateStore';
import { getSkillStepById } from '../../../data/fitness/skills/skillSteps';
import { skillPaths } from '../../../data/fitness/skills/skillPaths';
import { isExerciseVerified } from '../../../data/fitness/exerciseMap';
import Button from '../../ui/Button';

export interface MyPracticeSummaryProps {
  onOpenPaths?: () => void;
  onOpenDetail?: (stepId: string) => void;
  onStartPractice?: (stepId: string) => void;
}

export function MyPracticeSummary({ onOpenPaths, onOpenDetail, onStartPractice }: MyPracticeSummaryProps) {
  const activeStepIds = useSkillStateStore((s) => s.activeStepIds || [s.activeStepId || 'pull-step-1']);
  const activeStepId = activeStepIds[0] || 'pull-step-1';

  const currentStep = getSkillStepById(activeStepId);
  const currentPath = currentStep ? skillPaths.find((p) => p.id === currentStep.pathId) : null;

  if (!currentStep || !currentPath) {
    return (
      <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
        Sin habilidad activa seleccionada.{' '}
        {onOpenPaths && (
          <Button variant="secondary" size="sm" onClick={onOpenPaths} style={{ marginTop: '8px' }}>
            Seleccionar ruta
          </Button>
        )}
      </div>
    );
  }

  const totalSteps = currentPath.stepIds.length;

  return (
    <section
      aria-labelledby="active-path-title"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--color-border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-md)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-xs)'
      }}
    >
      {/* EYEBROW */}
      <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>
        Habilidad activa
      </span>

      {/* RUTA DOMINANTE (H1 / H2 CON CLASE pathTitle: 24-28px BOLD) */}
      <h2 id="active-path-title" className="pathTitle" style={{ fontSize: 'clamp(1.375rem, 3.5vw, 1.75rem)', fontWeight: 700, lineHeight: 1.2, margin: 0, color: 'var(--text)' }}>
        {currentPath.title}
      </h2>

      {/* PATH META */}
      <span className="pathMeta" style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-xs)' }}>
        Paso actual · {currentStep.order} de {totalSteps}
      </span>

      {/* PASO ACTUAL (SUB-ELEMENTO H3 CON CLASE stepTitle: 17-18px SEMIBOLD) */}
      <div
        style={{
          background: 'rgba(255,255,255,0.02)',
          borderLeft: '3px solid var(--color-accent-primary)',
          borderRadius: '0 6px 6px 0',
          padding: '10px 14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          margin: '4px 0 12px'
        }}
      >
        <h3 className="stepTitle" style={{ fontSize: '1.0625rem', fontWeight: 600, lineHeight: 1.35, margin: 0, color: 'var(--text)' }}>
          {currentStep.title}
        </h3>
        <span className="stepMeta" style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
          Objetivo de hoy · {currentStep.practice.target}
        </span>
      </div>

      {/* ACCIONES HUMANAS (ÚNICA PRIMARIA: PRACTICAR HOY) */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="primary" size="sm" onClick={() => onStartPractice ? onStartPractice(currentStep.id) : (onOpenDetail && onOpenDetail(currentStep.id))}>
          Practicar hoy
        </Button>
        {onOpenDetail && (
          <Button variant="secondary" size="sm" onClick={() => onOpenDetail(currentStep.id)}>
            Ver ejercicio
          </Button>
        )}
        {onOpenPaths && (
          <Button variant="ghost" size="sm" onClick={onOpenPaths}>
            Cambiar ruta
          </Button>
        )}
      </div>
    </section>
  );
}

export default MyPracticeSummary;
