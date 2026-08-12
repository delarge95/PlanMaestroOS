// src/components/fitness/skills/MyPracticeSummary.tsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useSkillStateStore } from '../../../data/fitness/skills/skillStateStore';
import { getSkillStepById } from '../../../data/fitness/skills/skillSteps';
import { skillPaths } from '../../../data/fitness/skills/skillPaths';
import Button from '../../ui/Button';

export interface MyPracticeSummaryProps {
  onOpenPaths?: () => void;
}

export function MyPracticeSummary({ onOpenPaths }: MyPracticeSummaryProps) {
  const activeStepIds = useSkillStateStore((s) => s.activeStepIds || [s.activeStepId || 'pull-step-1']);
  const activeStepId = useSkillStateStore((s) => s.activeStepId || 'pull-step-1');
  const changeActiveStepForPath = useSkillStateStore((s) => s.changeActiveStepForPath);
  
  const currentStepId = activeStepIds[0] || activeStepId || 'pull-step-1';
  const currentStep = getSkillStepById(currentStepId);
  const currentPath = currentStep ? skillPaths.find((p) => p.id === currentStep.pathId) : null;

  const [loggedSets, setLoggedSets] = useState('');
  const [loggedRepsOrSecs, setLoggedRepsOrSecs] = useState('');
  const [loggedNotes, setLoggedNotes] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  if (!currentStep || !currentPath) {
    return (
      <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-m, 12px)', padding: 'var(--space-md)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        Sin habilidad activa seleccionada.
      </div>
    );
  }

  const stepIndex = currentPath.stepIds.indexOf(currentStep.id);
  const totalSteps = currentPath.stepIds.length;

  const handlePrevStep = () => {
    if (stepIndex > 0) {
      const prevId = currentPath.stepIds[stepIndex - 1];
      changeActiveStepForPath(currentStep.id, prevId);
    }
  };

  const handleNextStep = () => {
    if (stepIndex < totalSteps - 1) {
      const nextId = currentPath.stepIds[stepIndex + 1];
      changeActiveStepForPath(currentStep.id, nextId);
    }
  };

  const handleSavePractice = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      {/* NAVEGADOR Y CABECERA DE PROGRESIÓN */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
        <div>
          <span style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
            Ruta Híbrida · {currentPath.title}
          </span>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0', color: 'var(--text-primary)' }}>
            {currentStep.title}
          </h3>
        </div>

        {/* CONTROLES PARA NAVEGAR ANTERIOR / SIGUIENTE PROGRESIÓN IN-SITU */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button
            type="button"
            disabled={stepIndex <= 0}
            onClick={handlePrevStep}
            title="Progresión anterior"
            aria-label="Progresión anterior"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.1))',
              color: 'var(--text-primary)',
              borderRadius: '6px',
              padding: '5px 10px',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: stepIndex <= 0 ? 'not-allowed' : 'pointer',
              opacity: stepIndex <= 0 ? 0.4 : 1,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <ChevronLeft size={14} />
            <span>Anterior</span>
          </button>

          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 700, padding: '0 4px' }}>
            {stepIndex + 1} / {totalSteps}
          </span>

          <button
            type="button"
            disabled={stepIndex >= totalSteps - 1}
            onClick={handleNextStep}
            title="Siguiente progresión"
            aria-label="Siguiente progresión"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.1))',
              color: 'var(--text-primary)',
              borderRadius: '6px',
              padding: '5px 10px',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: stepIndex >= totalSteps - 1 ? 'not-allowed' : 'pointer',
              opacity: stepIndex >= totalSteps - 1 ? 0.4 : 1,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span>Siguiente</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* DETALLE TÉCNICO COMPLETO E INSTRUCCIONES DE EJECUCIÓN */}
      <div style={{ background: 'rgba(255,255,255,0.02)', borderLeft: '3px solid var(--accent, #0a84ff)', padding: '12px 14px', borderRadius: '0 8px 8px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            🎯 Objetivo de Sesión: {currentStep.practice.target}
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            Descanso sugerido: 2-3 min
          </span>
        </div>

        {currentStep.readiness?.technical && currentStep.readiness.technical.length > 0 && (
          <div style={{ marginTop: '4px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-primary)', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
              Claves Biomecánicas de Ejecución:
            </span>
            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              {currentStep.readiness.technical.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* REGISTRO RÁPIDO DE SESIÓN DE PRÁCTICA IN-SITU CON 3 CAMPOS LIMPIOS */}
      <form onSubmit={handleSavePractice} style={{ display: 'flex', flexDirection: 'column', gap: '10px', background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))' }}>
        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          Log de Práctica de Hoy
        </span>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
          {/* CAMPO 1: NÚMERO DE SERIES */}
          <div>
            <label style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
              Número de Series
            </label>
            <input
              type="number"
              min="1"
              max="20"
              placeholder="Ej: 3"
              value={loggedSets}
              onChange={(e) => setLoggedSets(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: '6px',
                padding: '6px 10px',
                color: 'var(--text-primary)',
                fontSize: '0.84rem',
                outline: 'none'
              }}
            />
          </div>

          {/* CAMPO 2: SEGUNDOS O REPETICIONES */}
          <div>
            <label style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
              Segundos o Repeticiones
            </label>
            <input
              type="text"
              placeholder="Ej: 15 seg o 8 reps"
              value={loggedRepsOrSecs}
              onChange={(e) => setLoggedRepsOrSecs(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: '6px',
                padding: '6px 10px',
                color: 'var(--text-primary)',
                fontSize: '0.84rem',
                outline: 'none'
              }}
            />
          </div>

          {/* CAMPO 3: NOTAS DE CONTROL TÉCNICO */}
          <div>
            <label style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
              Notas Técnicas
            </label>
            <input
              type="text"
              placeholder="Sensación, bloqueo, tempo..."
              value={loggedNotes}
              onChange={(e) => setLoggedNotes(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: '6px',
                padding: '6px 10px',
                color: 'var(--text-primary)',
                fontSize: '0.84rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '4px' }}>
          {isSaved ? (
            <span style={{ fontSize: '0.8rem', color: 'var(--success, #30d158)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={14} /> ¡Práctica registrada correctamente!
            </span>
          ) : (
            <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
              Registra tu volumen y control técnico
            </span>
          )}

          <div style={{ display: 'flex', gap: '8px' }}>
            {onOpenPaths && (
              <Button variant="ghost" size="sm" onClick={onOpenPaths}>
                Cambiar ruta
              </Button>
            )}
            <Button type="submit" variant="primary" size="sm">
              Guardar práctica
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MyPracticeSummary;
