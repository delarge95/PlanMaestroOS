import React, { useState } from 'react';
import { ShieldAlert, Check } from 'lucide-react';
import { prehabProtocols, type PrehabProtocol } from '../../data/fitness/prehabProtocols';
import Button from '../ui/Button';

export interface PrehabBlockProps {
  activeZoneId?: 'knee' | 'shoulder' | 'elbow_wrist' | 'hip';
  onCompletePrehab?: (painScore: number) => void;
}

export default function PrehabBlock({ activeZoneId = 'knee', onCompletePrehab }: PrehabBlockProps) {
  const [painLevel, setPainLevel] = useState<'none' | 'mild' | 'notable'>('none');
  const [completed, setCompleted] = useState(false);

  const protocol: PrehabProtocol = prehabProtocols[activeZoneId] || prehabProtocols.knee;

  const handleLevelSelect = (level: 'none' | 'mild' | 'notable') => {
    setPainLevel(level);
  };

  const handleFinish = () => {
    setCompleted(true);
    const score = painLevel === 'none' ? 0 : painLevel === 'mild' ? 3 : 6;
    if (onCompletePrehab) {
      onCompletePrehab(score);
    }
  };

  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--color-accent-warning)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-md)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)'
    }}>
      {/* CABECERA DE ZONA AFECTADA Y PREHAB DE HOY */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldAlert size={18} style={{ color: 'var(--color-accent-warning)' }} />
          <div>
            <span style={{ fontSize: '0.68rem', color: 'var(--color-accent-warning)', fontWeight: 700, textTransform: 'uppercase' }}>
              Zona afectada: {protocol.zoneTitle}
            </span>
            <h3 style={{ fontSize: '0.98rem', fontWeight: 700, margin: '2px 0 0', color: 'var(--text)' }}>
              Prehab de hoy
            </h3>
          </div>
        </div>

        {completed && (
          <span style={{ fontSize: '0.72rem', color: 'var(--color-state-done)', background: 'var(--color-state-done-soft)', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
            ✓ Completado
          </span>
        )}
      </div>

      {/* DETALLE DEL PROTOCOLO */}
      <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
        <strong>{protocol.protocolTitle}</strong> · {protocol.recommendedDose}
      </div>

      {/* CHECK-IN ¿CÓMO LLEGA HOY? */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', flexWrap: 'wrap', paddingTop: '4px' }}>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>
          ¿Cómo llega hoy?
        </span>

        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            type="button"
            onClick={() => handleLevelSelect('none')}
            style={{
              background: painLevel === 'none' ? 'var(--color-state-done-soft)' : 'rgba(255,255,255,0.04)',
              color: painLevel === 'none' ? 'var(--color-state-done)' : 'var(--text-secondary)',
              border: 'none',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Sin molestia
          </button>

          <button
            type="button"
            onClick={() => handleLevelSelect('mild')}
            style={{
              background: painLevel === 'mild' ? 'var(--color-accent-warning-soft)' : 'rgba(255,255,255,0.04)',
              color: painLevel === 'mild' ? 'var(--color-accent-warning)' : 'var(--text-secondary)',
              border: 'none',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Leve
          </button>

          <button
            type="button"
            onClick={() => handleLevelSelect('notable')}
            style={{
              background: painLevel === 'notable' ? 'var(--color-accent-danger-soft)' : 'rgba(255,255,255,0.04)',
              color: painLevel === 'notable' ? 'var(--color-accent-danger)' : 'var(--text-secondary)',
              border: 'none',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Notable
          </button>
        </div>
      </div>

      {/* ADVERTENCIA DE SEGURIDAD SI AUMENTA EL DOLOR */}
      {painLevel === 'notable' && (
        <div style={{ fontSize: '0.78rem', color: 'var(--color-accent-danger)', background: 'rgba(255,69,58,0.08)', padding: '6px 10px', borderRadius: '6px', fontWeight: 600 }}>
          Considera reducir rango o pausar hoy
        </div>
      )}

      {/* BOTÓN DE CIERRE */}
      {!completed && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '4px' }}>
          <Button variant="secondary" size="sm" onClick={handleFinish}>
            <Check size={14} /> Listo
          </Button>
        </div>
      )}
    </div>
  );
}
