import React, { useState } from 'react';
import { Check, ShieldCheck, Activity } from 'lucide-react';
import Sheet from '../../ui/Sheet';
import Button from '../../ui/Button';
import { skillSteps } from '../../../data/fitness/skills/skillSteps';
import { useSkillStateStore } from '../../../data/fitness/skills/skillStateStore';

export interface PracticeSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  stepId: string;
}

export function PracticeSessionModal({
  isOpen,
  onClose,
  stepId
}: PracticeSessionModalProps) {
  const addPracticeSession = useSkillStateStore((s) => s.addPracticeSession);
  const step = skillSteps.find((s) => s.id === stepId) || skillSteps[0];

  const [sets, setSets] = useState(step.practice.defaultSets || 3);
  const [targetAchieved, setTargetAchieved] = useState(step.practice.target || '3 series');
  const [discomfort, setDiscomfort] = useState(0);
  const [effort, setEffort] = useState(7);
  const [quality, setQuality] = useState<'excelente' | 'buena' | 'regular' | 'deficiente'>('buena');
  const [notes, setNotes] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = () => {
    addPracticeSession({
      stepId: step.id,
      setsCompleted: sets,
      targetAchieved,
      discomfortLevel: discomfort,
      perceivedEffort: effort,
      qualityScore: quality,
      notes
    });

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1400);
  };

  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      title={`Práctica: ${step.title}`}
      description="Registro de sesión y tolerancia posterior"
    >
      {savedSuccess ? (
        <div style={{ padding: 'var(--space-lg)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-md)' }}>
          <Check size={48} style={{ color: 'var(--color-state-done)' }} />
          <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text)' }}>¡Práctica Guardada!</h3>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0 }}>
            Cuando tengas varias exposiciones consistentes y sin molestias, podrás revisar el siguiente paso.
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          {/* DOSIS REALIZADA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Series completadas:
            </label>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setSets(num)}
                  style={{
                    flex: 1,
                    minHeight: '40px',
                    background: sets === num ? 'var(--color-accent-primary)' : 'var(--surface-elevated)',
                    color: sets === num ? '#ffffff' : 'var(--text)',
                    border: '1px solid var(--color-border-visible)',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* CALIDAD DE EJECUCIÓN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Calidad técnica de la sesión:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px' }}>
              {(['excelente', 'buena', 'regular', 'deficiente'] as const).map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => setQuality(q)}
                  style={{
                    minHeight: '40px',
                    background: quality === q ? 'var(--color-surface-raised)' : 'transparent',
                    color: quality === q ? 'var(--text)' : 'var(--text-tertiary)',
                    border: quality === q ? '1px solid var(--color-accent-primary)' : '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                    cursor: 'pointer'
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* EVALUACIÓN DE MOLESTIA / DOLOR (0-10) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', background: 'var(--surface-elevated)', padding: '12px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Activity size={14} /> Molestia o dolor percibido (0-10):
              </label>
              <strong style={{ fontSize: '0.9rem', color: discomfort >= 4 ? '#ff453a' : 'var(--text)' }}>
                {discomfort} / 10
              </strong>
            </div>

            <input
              type="range"
              min="0"
              max="10"
              value={discomfort}
              onChange={(e) => setDiscomfort(Number(e.target.value))}
              style={{ width: '100%', accentColor: discomfort >= 4 ? '#ff453a' : 'var(--color-accent-primary)' }}
            />
          </div>

          {/* BOTÓN REFORZADO DE GUARDADO (MÍNIMO 44PX) */}
          <button
            type="button"
            onClick={handleSave}
            style={{
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
              gap: '8px',
              marginTop: '8px'
            }}
          >
            <Check size={18} /> Guardar práctica
          </button>
        </div>
      )}
    </Sheet>
  );
}

export default PracticeSessionModal;
