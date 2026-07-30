import React, { useState } from 'react';
import { Play, ExternalLink, ArrowRight, ArrowLeft, PauseCircle, ChevronDown, ChevronUp, ShieldAlert, Star, CheckCircle, AlertTriangle } from 'lucide-react';
import Sheet from '../../ui/Sheet';
import Button from '../../ui/Button';
import ListRow from '../../ui/ListRow';
import { skillSteps } from '../../../data/fitness/skills/skillSteps';
import { skillPaths } from '../../../data/fitness/skills/skillPaths';
import { skillExercises } from '../../../data/fitness/skills/exercises';
import { useSkillStateStore } from '../../../data/fitness/skills/skillStateStore';
import ExerciseModal from '../ExerciseModal';

export interface SkillDetailSheetProps {
  isOpen: boolean;
  onClose: () => void;
  stepId: string;
  onStartPractice: (stepId: string) => void;
}

export function SkillDetailSheet({
  isOpen,
  onClose,
  stepId,
  onStartPractice
}: SkillDetailSheetProps) {
  const activeStepId = useSkillStateStore((s) => s.activeStepId);
  const setActiveStep = useSkillStateStore((s) => s.setActiveStep);
  const pauseSkill = useSkillStateStore((s) => s.pauseSkill);

  const [showCriteria, setShowCriteria] = useState(false);
  const [showPrep, setShowPrep] = useState(false);
  const [fitAppModalId, setFitAppModalId] = useState<string | null>(null);

  const step = skillSteps.find((s) => s.id === stepId) || skillSteps[0];
  const path = skillPaths.find((p) => p.id === step.pathId);
  const localExercise = skillExercises[step.id];
  const isActive = activeStepId === step.id;

  const isFitAppVerified = localExercise?.fitApp?.verified && localExercise?.fitApp?.match === 'exact';
  const fitAppId = localExercise?.fitApp?.exerciseId;

  const prevStep = step.prerequisiteIds[0] ? skillSteps.find((s) => s.id === step.prerequisiteIds[0]) : null;
  const nextStep = step.nextIds[0] ? skillSteps.find((s) => s.id === step.nextIds[0]) : null;

  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      title={step.title}
      description={`${path?.title || 'Ruta'} · Paso ${step.order}`}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        {/* CABECERA Y FICHA LOCAL ANTES DE FITAPP */}
        <div style={{ background: 'var(--surface-elevated)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
              Objetivo: <strong style={{ color: 'var(--text)' }}>{step.practice.target}</strong> ({step.practice.defaultSets} series)
            </span>
            {isActive && (
              <span style={{ fontSize: '0.72rem', background: 'var(--color-state-done)', color: '#ffffff', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>
                Habilidad Activa Hoy
              </span>
            )}
          </div>

          {/* INSTRUCCIONES LOCALES CONCISAS (3-5 PASOS) */}
          {localExercise && (
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                Ejecución Técnica Local:
              </span>
              <ol style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {localExercise.instructions.map((inst, i) => (
                  <li key={i}>{inst}</li>
                ))}
              </ol>

              {localExercise.commonErrors && localExercise.commonErrors.length > 0 && (
                <div style={{ marginTop: '8px', paddingTop: '6px', borderTop: '1px dashed var(--color-border-subtle)', fontSize: '0.78rem', color: '#f59e0b' }}>
                  <strong>Puntos de atención:</strong> {localExercise.commonErrors.join(' · ')}
                </div>
              )}
            </div>
          )}

          {/* BOTONES Y ENLACE DE FITAPP VERIFICADO ESTRICTO (DESACTIVADO SI IS_FITAPP_VERIFIED IS FALSE) */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
            {/* CTA PRACTICAR HOY */}
            <button
              type="button"
              onClick={() => onStartPractice(step.id)}
              style={{
                flex: 1,
                minHeight: '44px',
                background: 'var(--color-accent-primary)',
                color: '#ffffff',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Play size={16} fill="currentColor" /> Practicar hoy
            </button>

            {/* BOTÓN VER EN FITAPP SOLAMENTE SI ESTÁ VERIFICADO AL 100% */}
            {isFitAppVerified && fitAppId ? (
              <Button
                variant="secondary"
                size="md"
                onClick={() => setFitAppModalId(fitAppId)}
                style={{ minHeight: '44px' }}
              >
                <ExternalLink size={16} /> Ver en FitApp
              </Button>
            ) : (
              <button
                type="button"
                disabled
                style={{
                  minHeight: '44px',
                  background: 'rgba(255,255,255,0.04)',
                  color: 'var(--text-tertiary)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  padding: '0 12px',
                  cursor: 'not-allowed',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <AlertTriangle size={14} /> Ficha FitApp pendiente
              </button>
            )}
          </div>

          {/* ACCIÓN CAMBIAR A HABILIDAD ACTIVA / PAUSAR */}
          {!isActive && (
            <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setActiveStep(step.id);
                }}
              >
                <Star size={14} /> Establecer como habilidad activa
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => pauseSkill(step.id)}
              >
                <PauseCircle size={14} /> Pausar por ahora
              </Button>
            </div>
          )}
        </div>

        {/* NAVEGACIÓN ENTRE PASOS (ANTERIOR / SIGUIENTE) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase' }}>
            Escala de Progresión
          </span>
          {prevStep && (
            <ListRow
              title={`Paso anterior: ${prevStep.title}`}
              meta={`Regresión Nivel ${prevStep.order}`}
              icon={<ArrowLeft size={16} style={{ color: 'var(--text-tertiary)' }} />}
              onClick={() => {
                onClose();
              }}
            />
          )}
          {nextStep && (
            <ListRow
              title={`Siguiente paso: ${nextStep.title}`}
              meta={`Progresión Nivel ${nextStep.order}`}
              icon={<ArrowRight size={16} style={{ color: 'var(--color-accent-primary)' }} />}
              onClick={() => {
                onClose();
              }}
            />
          )}
        </div>

        {/* SECCIÓN COLAPSABLE 1: CRITERIOS PARA REVISAR AVANCE */}
        <div style={{ border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <button
            type="button"
            onClick={() => setShowCriteria(!showCriteria)}
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              padding: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              color: 'var(--text)',
              fontSize: '0.86rem',
              fontWeight: 700
            }}
          >
            <span>Criterios para revisar avance</span>
            {showCriteria ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {showCriteria && (
            <div style={{ padding: '0 12px 12px', fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontWeight: 600, color: 'var(--text)' }}>Técnicos & Tolerancia:</span>
              <ul style={{ margin: 0, paddingLeft: '18px' }}>
                {step.readiness.technical.map((t, i) => <li key={i}>{t}</li>)}
                {step.readiness.volume.map((v, i) => <li key={i}>{v}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* MODAL DE FITAPP SI SE HACE CLIC EN "VER EN FITAPP" */}
      {fitAppModalId && (
        <ExerciseModal
          exerciseId={fitAppModalId}
          onClose={() => setFitAppModalId(null)}
        />
      )}
    </Sheet>
  );
}

export default SkillDetailSheet;
