// src/components/fitness/PrehabBlock.tsx
import React, { useState, useEffect } from 'react';
import { ShieldAlert, Check, ChevronDown } from 'lucide-react';
import { prehabProtocols, type PrehabProtocol } from '../../data/fitness/prehabProtocols';
import Button from '../ui/Button';

export interface PrehabBlockProps {
  activeZoneId?: 'knee' | 'shoulder' | 'elbow_wrist' | 'hip';
  onCompletePrehab?: (painScore: number) => void;
}

export default function PrehabBlock({ activeZoneId = 'knee', onCompletePrehab }: PrehabBlockProps) {
  const [painLevel, setPainLevel] = useState<'none' | 'mild' | 'notable'>('none');
  const [completed, setCompleted] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const today = new Date().toISOString().split('T')[0];
  const storageKey = `prehabCollapsed:${activeZoneId}:${today}`;

  const protocol: PrehabProtocol = prehabProtocols[activeZoneId] || prehabProtocols.knee;

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored === 'true') {
        setCollapsed(true);
        setCompleted(true);
      }
    } catch (_) { /* privacy mode */ }
  }, [storageKey]);

  const handleFinish = () => {
    setCompleted(true);
    setCollapsed(true);
    try { localStorage.setItem(storageKey, 'true'); } catch (_) { /* privacy mode */ }

    const score = painLevel === 'none' ? 0 : painLevel === 'mild' ? 3 : 6;
    if (onCompletePrehab) {
      onCompletePrehab(score);
    }
  };

  const getPainText = () => {
    switch (painLevel) {
      case 'none': return 'Sin molestia';
      case 'mild': return 'Leve';
      case 'notable': return 'Notable';
    }
  };

  if (collapsed) {
    return (
      <button
        type="button"
        onClick={() => setCollapsed(false)}
        className="ds-row-between ds-card-clickable"
        style={{
          width: '100%',
          padding: '8px 12px',
          color: 'var(--text-secondary)',
          fontSize: 'var(--fs-meta, 0.8125rem)'
        }}
      >
        <span className="ds-label-sm" style={{ color: 'var(--success, #30d158)' }}>
          Prehab — {protocol.zoneTitle} · {getPainText()} (Completado)
        </span>
        <ChevronDown size={14} />
      </button>
    );
  }

  return (
    <div
      className="ds-card ds-stack-sm"
      style={{
        border: '1px solid var(--warning, #ff9f0a)',
      }}
    >
      {/* CABECERA DE ZONA AFECTADA Y PREHAB DE HOY */}
      <div className="ds-row-between">
        <div className="ds-row" style={{ gap: '8px' }}>
          <ShieldAlert size={18} style={{ color: 'var(--warning, #ff9f0a)' }} />
          <div>
            <span className="ds-eyebrow" style={{ color: 'var(--warning, #ff9f0a)' }}>
              Zona afectada: {protocol.zoneTitle}
            </span>
            <h3 className="ds-label" style={{ margin: '2px 0 0' }}>
              Prehab de hoy
            </h3>
          </div>
        </div>

        {completed && (
          <span className="ds-badge ds-badge-success">
            ✓ Completado
          </span>
        )}
      </div>

      {/* DETALLE DEL PROTOCOLO */}
      <div className="ds-caption">
        <strong>{protocol.protocolTitle}</strong> · {protocol.recommendedDose}
      </div>

      {/* CHECK-IN ¿CÓMO LLEGA HOY? */}
      <div className="ds-row" style={{ flexWrap: 'wrap', paddingTop: '4px' }}>
        <span className="ds-label-sm">
          ¿Cómo llega hoy?
        </span>

        <div className="ds-row" style={{ gap: '6px' }}>
          <button
            type="button"
            onClick={() => setPainLevel('none')}
            className="ds-btn ds-btn-sm"
            style={{
              background: painLevel === 'none' ? 'rgba(48,209,88,0.12)' : 'rgba(255,255,255,0.04)',
              color: painLevel === 'none' ? 'var(--success)' : 'var(--text-secondary)',
              border: 'none',
              padding: '4px 10px',
              fontSize: '0.75rem',
            }}
          >
            Sin molestia
          </button>

          <button
            type="button"
            onClick={() => setPainLevel('mild')}
            className="ds-btn ds-btn-sm"
            style={{
              background: painLevel === 'mild' ? 'rgba(255,159,10,0.12)' : 'rgba(255,255,255,0.04)',
              color: painLevel === 'mild' ? 'var(--warning)' : 'var(--text-secondary)',
              border: 'none',
              padding: '4px 10px',
              fontSize: '0.75rem',
            }}
          >
            Leve
          </button>

          <button
            type="button"
            onClick={() => setPainLevel('notable')}
            className="ds-btn ds-btn-sm"
            style={{
              background: painLevel === 'notable' ? 'rgba(255,69,58,0.12)' : 'rgba(255,255,255,0.04)',
              color: painLevel === 'notable' ? 'var(--danger, #ff453a)' : 'var(--text-secondary)',
              border: 'none',
              padding: '4px 10px',
              fontSize: '0.75rem',
            }}
          >
            Notable
          </button>
        </div>
      </div>

      {/* ADVERTENCIA DE SEGURIDAD SI AUMENTA EL DOLOR */}
      {painLevel === 'notable' && (
        <div className="ds-badge ds-badge-danger" style={{ width: '100%', padding: '6px 10px', fontSize: '0.78rem' }}>
          Considera reducir rango o pausar hoy
        </div>
      )}

      {/* BOTÓN DE CIERRE */}
      <div className="ds-row" style={{ justifyContent: 'flex-end', paddingTop: '4px' }}>
        <Button variant="secondary" size="sm" onClick={handleFinish}>
          <Check size={14} /> Listo
        </Button>
      </div>
    </div>
  );
}
