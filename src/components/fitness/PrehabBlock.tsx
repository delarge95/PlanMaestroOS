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
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'var(--surface-1, #0d0d0f)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 'var(--radius-s, 8px)',
          padding: '8px 12px',
          color: 'var(--text-secondary)',
          cursor: 'pointer',
          fontSize: 'var(--fs-meta, 0.8125rem)'
        }}
      >
        <span style={{ fontWeight: 600, color: 'var(--success, #30d158)' }}>
          Prehab — {protocol.zoneTitle} · {getPainText()} (Completado)
        </span>
        <ChevronDown size={14} />
      </button>
    );
  }

  return (
    <div style={{
      background: 'var(--surface-1, #0d0d0f)',
      border: '1px solid var(--warning, #ff9f0a)',
      borderRadius: 'var(--radius-m, 12px)',
      padding: 'var(--space-md)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)'
    }}>
      {/* CABECERA DE ZONA AFECTADA Y PREHAB DE HOY */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldAlert size={18} style={{ color: 'var(--warning, #ff9f0a)' }} />
          <div>
            <span style={{ fontSize: '0.68rem', color: 'var(--warning, #ff9f0a)', fontWeight: 700, textTransform: 'uppercase' }}>
              Zona afectada: {protocol.zoneTitle}
            </span>
            <h3 style={{ fontSize: '0.98rem', fontWeight: 700, margin: '2px 0 0', color: 'var(--text-primary)' }}>
              Prehab de hoy
            </h3>
          </div>
        </div>

        {completed && (
          <span style={{ fontSize: '0.72rem', color: 'var(--success)', background: 'rgba(48,209,88,0.12)', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
            ✓ Completado
          </span>
        )}
      </div>

      {/* DETALLE DEL PROTOCOLO */}
      <div style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)' }}>
        <strong>{protocol.protocolTitle}</strong> · {protocol.recommendedDose}
      </div>

      {/* CHECK-IN ¿CÓMO LLEGA HOY? */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', flexWrap: 'wrap', paddingTop: '4px' }}>
        <span style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)', fontWeight: 600 }}>
          ¿Cómo llega hoy?
        </span>

        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            type="button"
            onClick={() => setPainLevel('none')}
            style={{
              background: painLevel === 'none' ? 'rgba(48,209,88,0.12)' : 'rgba(255,255,255,0.04)',
              color: painLevel === 'none' ? 'var(--success)' : 'var(--text-secondary)',
              border: 'none', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer'
            }}
          >
            Sin molestia
          </button>

          <button
            type="button"
            onClick={() => setPainLevel('mild')}
            style={{
              background: painLevel === 'mild' ? 'rgba(255,159,10,0.12)' : 'rgba(255,255,255,0.04)',
              color: painLevel === 'mild' ? 'var(--warning)' : 'var(--text-secondary)',
              border: 'none', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer'
            }}
          >
            Leve
          </button>

          <button
            type="button"
            onClick={() => setPainLevel('notable')}
            style={{
              background: painLevel === 'notable' ? 'rgba(255,69,58,0.12)' : 'rgba(255,255,255,0.04)',
              color: painLevel === 'notable' ? 'var(--danger, #ff453a)' : 'var(--text-secondary)',
              border: 'none', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer'
            }}
          >
            Notable
          </button>
        </div>
      </div>

      {/* ADVERTENCIA DE SEGURIDAD SI AUMENTA EL DOLOR */}
      {painLevel === 'notable' && (
        <div style={{ fontSize: '0.78rem', color: 'var(--danger, #ff453a)', background: 'rgba(255,69,58,0.08)', padding: '6px 10px', borderRadius: '6px', fontWeight: 600 }}>
          Considera reducir rango o pausar hoy
        </div>
      )}

      {/* BOTÓN DE CIERRE */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '4px' }}>
        <Button variant="secondary" size="sm" onClick={handleFinish}>
          <Check size={14} /> Listo
        </Button>
      </div>
    </div>
  );
}
