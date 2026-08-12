// src/components/fitness/skills/SkillsWorkspace.tsx
import React, { useState, useEffect } from 'react';
import { ShieldAlert } from 'lucide-react';
import ExplorePathsView from './ExplorePathsView';
import SkillDetailSheet from './SkillDetailSheet';
import PracticeSessionModal from './PracticeSessionModal';

import type { SkillDomain } from '../../../data/fitness/skills/types';

export interface SkillsWorkspaceProps {
  selectedDomain?: SkillDomain | 'all';
  onlyActive?: boolean;
  searchTerm?: string;
  hideInternalFilters?: boolean;
}

export function SkillsWorkspace({
  selectedDomain,
  onlyActive,
  searchTerm,
  hideInternalFilters = true
}: SkillsWorkspaceProps) {
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>
      {/* AVISO DE TOLERANCIA Y GUARDRAIL DISCRETO */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
          padding: '8px 12px',
          borderRadius: '10px',
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
        selectedDomain={selectedDomain}
        onlyActive={onlyActive}
        searchTerm={searchTerm}
        hideInternalFilters={hideInternalFilters}
      />

      {/* SHEET DE DETALLE DE HABILIDAD */}
      {selectedStepId && (
        <SkillDetailSheet
          isOpen={Boolean(selectedStepId)}
          onClose={() => setSelectedStepId(null)}
          stepId={selectedStepId}
          onSelectStep={(nextId) => setSelectedStepId(nextId)}
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
