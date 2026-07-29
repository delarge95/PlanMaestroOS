import React, { useState } from 'react';
import { Activity, ShieldAlert, HeartPulse, CheckCircle2 } from 'lucide-react';
import ExerciseLink from './ExerciseLink';
import { resolveExerciseId } from '../../data/fitness/exerciseResolver';

export interface TendonLoadMonitorProps {
  onOpenExerciseModal?: (exerciseId: string) => void;
}

export function TendonLoadMonitor({ onOpenExerciseModal }: TendonLoadMonitorProps) {
  const [painLevel, setPainLevel] = useState<number>(1);
  const [selectedJoint, setSelectedJoint] = useState<'rodilla' | 'hombro' | 'codo' | 'cadera'>('rodilla');

  // Conservative traffic-light status
  const isGreen = painLevel <= 2;
  const isYellow = painLevel >= 3 && painLevel <= 4;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      {/* DESCLAMER CLÍNICO CONSERVADOR */}
      <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
          <HeartPulse size={20} style={{ color: 'var(--color-accent-primary)' }} />
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
            Preparación Articular & Tolerancia de Carga (Prehab)
          </h3>
        </div>
        <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: 0 }}>
          Check-in subjetivo previo/posentrenamiento. Si experimentas dolor agudo $\ge 5$, inflamación clara o pérdida de fuerza, detén el ejercicio y consulta a un profesional de la salud.
        </p>
      </div>

      {/* MONITOR DE CHECK-IN */}
      <div style={{ background: 'var(--surface-elevated)', border: '1px solid var(--color-border-visible)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase' }}>
              SELECCIONAR ARTICULACIÓN OBJETIVO
            </span>
            <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
              {(['rodilla', 'hombro', 'codo', 'cadera'] as const).map((joint) => (
                <button
                  key={joint}
                  type="button"
                  onClick={() => setSelectedJoint(joint)}
                  style={{
                    background: selectedJoint === joint ? 'var(--color-accent-primary)' : 'var(--surface)',
                    color: selectedJoint === joint ? '#ffffff' : 'var(--text-secondary)',
                    border: '1px solid var(--color-border-subtle)',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textTransform: 'capitalize'
                  }}
                >
                  {joint}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
              NIVEL DE MOLESTIA/DOLOR (0 - 10)
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="range"
                min="0"
                max="10"
                value={painLevel}
                onChange={(e) => setPainLevel(Number(e.target.value))}
                style={{ cursor: 'pointer', width: '160px' }}
              />
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: isGreen ? 'var(--color-state-done)' : isYellow ? 'var(--color-accent-warning)' : 'var(--color-accent-danger)' }}>
                {painLevel} / 10
              </span>
            </div>
          </div>
        </div>

        {/* SEÑALIZACIÓN CONSERVADORA */}
        <div
          style={{
            background: isGreen
              ? 'rgba(48, 209, 88, 0.1)'
              : isYellow
              ? 'rgba(255, 159, 10, 0.1)'
              : 'rgba(255, 69, 58, 0.1)',
            border: `1px solid ${
              isGreen
                ? 'rgba(48, 209, 88, 0.3)'
                : isYellow
                ? 'rgba(255, 159, 10, 0.3)'
                : 'rgba(255, 69, 58, 0.3)'
            }`,
            padding: 'var(--space-md)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-md)'
          }}
        >
          {isGreen ? (
            <CheckCircle2 size={24} style={{ color: 'var(--color-state-done)', flexShrink: 0 }} />
          ) : isYellow ? (
            <Activity size={24} style={{ color: 'var(--color-accent-warning)', flexShrink: 0 }} />
          ) : (
            <ShieldAlert size={24} style={{ color: 'var(--color-accent-danger)', flexShrink: 0 }} />
          )}

          <div>
            <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text)' }}>
              {isGreen
                ? 'Zona Verde (0 - 2): Tolerancia Óptima'
                : isYellow
                ? 'Zona Amarilla (3 - 4): Cargar con Precaución'
                : 'Zona Roja (≥ 5): Reducir Carga / Reevaluar'}
            </strong>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
              {isGreen
                ? 'Puedes continuar con el plan de sobrecarga progresiva programado.'
                : isYellow
                ? 'Reduce la velocidad excéntrica (3-4s), mantén RIR 2 y realiza el calentamiento isométrico de 45s.'
                : 'Sustituye por ejercicios analgésicos o descarga temporal. Detener si el dolor es punzante.'}
            </p>
          </div>
        </div>

        {/* EJERCICIO PREHAB RECOMENDADO SEGÚN ARTICULACIÓN */}
        <div>
          <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
            PROTOCOLO PREHAB RECOMENDADO PARA {selectedJoint.toUpperCase()}
          </span>
          {selectedJoint === 'rodilla' && (
            <ExerciseLink
              exerciseId={resolveExerciseId('Spanish Squats')}
              displayName="Spanish Squats (Isométrico Rotuliano 3x45s)"
              onClickModal={onOpenExerciseModal}
            />
          )}
          {selectedJoint === 'hombro' && (
            <ExerciseLink
              exerciseId={resolveExerciseId('Active Hang')}
              displayName="Active Hang (Depresión & Estabilidad Escapular 3x30s)"
              onClickModal={onOpenExerciseModal}
            />
          )}
          {selectedJoint === 'codo' && (
            <ExerciseLink
              exerciseId={resolveExerciseId('Dead Hang')}
              displayName="Dead Hang (Sostén de Agarre & Salud de Muñeca 3x30s)"
              onClickModal={onOpenExerciseModal}
            />
          )}
          {selectedJoint === 'cadera' && (
            <ExerciseLink
              exerciseId={resolveExerciseId('Machine Hip Thrust')}
              displayName="Hip Thrust Isométrico (Estabilidad Lumbo-Pélvica 3x30s)"
              onClickModal={onOpenExerciseModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TendonLoadMonitor;
