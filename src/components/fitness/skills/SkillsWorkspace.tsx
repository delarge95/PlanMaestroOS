// src/components/fitness/skills/SkillsWorkspace.tsx
import React, { useState, useEffect } from 'react';
import { Compass, ShieldAlert } from 'lucide-react';
import ExplorePathsView from './ExplorePathsView';
import SkillDetailSheet from './SkillDetailSheet';
import PracticeSessionModal from './PracticeSessionModal';

export function SkillsWorkspace() {
  const [selectedStepId, setSelectedStepId] = useState<string | null>(null);
  const [practiceModalStepId, setPracticeModalStepId] = useState<string | null>(null);

  // Leer parámetro ?step= o ?skill= de la URL al cargar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const stepParam = params.get('step') || params.get('skill');
      if (stepParam) {
        setSelectedStepId(stepParam);
      }
    }
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%', maxWidth: '900px', margin: '0 auto' }}>
      {/* CABECERA DE EXPLORACIÓN DE RUTAS Y HABILIDADES */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingBottom: '4px' }}>
        <Compass size={20} style={{ color: 'var(--accent, #0a84ff)' }} />
        <h3 style={{ fontSize: 'var(--fs-step, 1.125rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
          Catálogo de Rutas & Progresiones de Habilidad
        </h3>
      </div>

      {/* AVISO DE TOLERANCIA Y GUARDRAIL DISCRETO */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
          padding: '8px 12px',
          borderRadius: 'var(--radius-md, 8px)',
          fontSize: '0.78rem',
          color: 'var(--text-secondary)'
        }}
      >
        <ShieldAlert size={14} style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} />
        <span>Detén la práctica ante dolor agudo, molestia articular o pérdida de control biomecánico.</span>
      </div>

      {/* CATÁLOGO DE RUTAS Y PASOS */}
      <ExplorePathsView
        onOpenDetail={(stepId) => setSelectedStepId(stepId)}
      />

      {/* SHEET DE DETALLE DE HABILIDAD */}
      {selectedStepId && (
        <SkillDetailSheet
          isOpen={Boolean(selectedStepId)}
          onClose={() => setSelectedStepId(null)}
          stepId={selectedStepId}
          onStartPractice={(stepId) => {
            setSelectedStepId(null);
            setPracticeModalStepId(stepId);
          }}
        />
      )}

      {/* MODAL / SHEET DE REGISTRO DE PRÁCTICA HOY */}
      {practiceModalStepId && (
        <PracticeSessionModal
          isOpen={Boolean(practiceModalStepId)}
          onClose={() => setPracticeModalStepId(null)}
          stepId={practiceModalStepId}
        />
      )}
    </div>
  );
}

export default SkillsWorkspace;
