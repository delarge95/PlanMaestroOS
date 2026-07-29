import React from 'react';
import { Play, ArrowRight, RefreshCw, ExternalLink, Activity, Info, CheckCircle2 } from 'lucide-react';
import { useSkillStateStore } from '../../../data/fitness/skills/skillStateStore';
import { skillSteps } from '../../../data/fitness/skills/skillSteps';
import { skillPaths } from '../../../data/fitness/skills/skillPaths';
import ListRow from '../../ui/ListRow';
import Button from '../../ui/Button';

export interface MyPracticeViewProps {
  onOpenDetail: (stepId: string) => void;
  onStartPractice: (stepId: string) => void;
  onOpenPaths: () => void;
}

export function MyPracticeView({
  onOpenDetail,
  onStartPractice,
  onOpenPaths
}: MyPracticeViewProps) {
  const activeStepId = useSkillStateStore((s) => s.activeStepId);

  const activeStep = skillSteps.find((s) => s.id === activeStepId) || skillSteps[0];
  const activePath = skillPaths.find((p) => p.id === activeStep.pathId);

  // Find next step in path if available
  const nextStep = activeStep.nextIds[0] ? skillSteps.find((s) => s.id === activeStep.nextIds[0]) : null;

  // Preparation / Prehab steps linked to active step
  const prepSteps = activeStep.preparationIds
    .map((id) => skillSteps.find((s) => s.id === id))
    .filter(Boolean);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      {/* 1. SECCIÓN DE HABILIDAD ACTIVA (ÚNICA SUPERFICIE DESTACADA EN PRIMERA VISTA) */}
      <div
        style={{
          background: 'var(--surface-elevated)',
          border: '1px solid var(--color-border-visible)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-md)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-sm)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.74rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {activePath?.title || 'Habilidad Activa'}
          </span>
          <span style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.06)', padding: '2px 8px', borderRadius: '12px', color: 'var(--text-tertiary)' }}>
            Paso {activeStep.order} de {activePath?.stepIds.length || 5}
          </span>
        </div>

        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 4px', color: 'var(--text)' }}>
            {activeStep.title}
          </h2>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: 0 }}>
            Objetivo: <strong>{activeStep.practice.target}</strong> ({activeStep.practice.defaultSets} series)
          </p>
        </div>

        {/* CTA PRINCIPAL: PRACTICAR HOY (MÍNIMO 44PX ALTO) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
          <button
            type="button"
            onClick={() => onStartPractice(activeStep.id)}
            style={{
              flex: 1,
              minWidth: '160px',
              minHeight: '44px',
              background: 'var(--color-accent-primary)',
              color: '#ffffff',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              fontWeight: 700,
              fontSize: '0.92rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <Play size={18} fill="currentColor" />
            <span>Practicar hoy</span>
          </button>

          <Button
            variant="secondary"
            size="md"
            onClick={() => onOpenDetail(activeStep.id)}
            style={{ minHeight: '44px' }}
          >
            <Info size={16} />
            <span>Ver detalles</span>
          </Button>

          <Button
            variant="ghost"
            size="md"
            onClick={onOpenPaths}
            style={{ minHeight: '44px' }}
          >
            <RefreshCw size={16} />
            <span>Cambiar</span>
          </Button>
        </div>
      </div>

      {/* 2. SIGUIENTE PASO EN LA RUTA */}
      {nextStep && (
        <div>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
            Próximo Paso Objetivo
          </span>
          <ListRow
            title={nextStep.title}
            meta={`Nivel ${nextStep.order} · ${nextStep.practice.target}`}
            icon={<ArrowRight size={18} style={{ color: 'var(--text-tertiary)' }} />}
            onClick={() => onOpenDetail(nextStep.id)}
          />
        </div>
      )}

      {/* 3. PREPARACIÓN TRANSVERSAL Y PREHAB */}
      {prepSteps.length > 0 && (
        <div>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
            <Activity size={14} /> Preparación Sugerida (Prehab & Movilidad)
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {prepSteps.map((prep) => prep && (
              <ListRow
                key={prep.id}
                title={prep.title}
                meta={`Acondicionamiento · ${prep.practice.target}`}
                icon={<CheckCircle2 size={16} style={{ color: 'var(--color-accent-primary)' }} />}
                onClick={() => onOpenDetail(prep.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MyPracticeView;
