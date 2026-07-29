import React, { useState } from 'react';
import { ChevronRight, Star } from 'lucide-react';
import type { SkillDomain } from '../../../data/fitness/skills/types';
import { skillPaths } from '../../../data/fitness/skills/skillPaths';
import { skillSteps } from '../../../data/fitness/skills/skillSteps';
import { useSkillStateStore } from '../../../data/fitness/skills/skillStateStore';
import ListRow from '../../ui/ListRow';

export interface ExplorePathsViewProps {
  onOpenDetail: (stepId: string) => void;
}

const DOMAIN_LABELS: Record<SkillDomain, { label: string; icon: string }> = {
  pull: { label: 'Tracción (Pull)', icon: '🧗' },
  push: { label: 'Empuje (Push)', icon: '💪' },
  core: { label: 'Core & Compresión', icon: '🧘' },
  legs: { label: 'Pierna & Unilateral', icon: '🦵' },
  support: { label: 'Soporte & Anillas', icon: '⭕' },
  mobility: { label: 'Movilidad & Capacidad', icon: '🦴' }
};

export function ExplorePathsView({ onOpenDetail }: ExplorePathsViewProps) {
  const activeStepId = useSkillStateStore((s) => s.activeStepId);
  const [selectedDomain, setSelectedDomain] = useState<SkillDomain | 'all'>('all');
  const [expandedPathId, setExpandedPathId] = useState<string | null>(null);

  const filteredPaths = selectedDomain === 'all'
    ? skillPaths
    : skillPaths.filter((p) => p.domain === selectedDomain);

  const togglePath = (pathId: string) => {
    setExpandedPathId((prev) => (prev === pathId ? null : pathId));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      {/* FILTRO DE DOMINIO */}
      <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', paddingBottom: '4px' }}>
        <button
          type="button"
          onClick={() => setSelectedDomain('all')}
          style={{
            background: selectedDomain === 'all' ? 'var(--color-surface-raised)' : 'transparent',
            color: selectedDomain === 'all' ? 'var(--text)' : 'var(--text-tertiary)',
            border: selectedDomain === 'all' ? '1px solid var(--color-border-visible)' : '1px solid transparent',
            padding: '6px 12px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}
        >
          Todas las Rutas
        </button>
        {(Object.keys(DOMAIN_LABELS) as SkillDomain[]).map((dom) => (
          <button
            key={dom}
            type="button"
            onClick={() => setSelectedDomain(dom)}
            style={{
              background: selectedDomain === dom ? 'var(--color-surface-raised)' : 'transparent',
              color: selectedDomain === dom ? 'var(--text)' : 'var(--text-tertiary)',
              border: selectedDomain === dom ? '1px solid var(--color-border-visible)' : '1px solid transparent',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {DOMAIN_LABELS[dom].label}
          </button>
        ))}
      </div>

      {/* LISTA DE RUTAS ORGANIZADAS DE 1 COLUMNA */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
        {filteredPaths.map((path) => {
          const isExpanded = expandedPathId === path.id || filteredPaths.length === 1;
          const stepsInPath = path.stepIds
            .map((id) => skillSteps.find((s) => s.id === id))
            .filter(Boolean);

          return (
            <div
              key={path.id}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden'
              }}
            >
              {/* CABECERA DE LA RUTA */}
              <button
                type="button"
                onClick={() => togglePath(path.id)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  padding: '12px 14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <strong style={{ fontSize: '0.92rem', color: 'var(--text)' }}>{path.title}</strong>
                    {path.featured && <Star size={14} style={{ color: '#f59e0b' }} />}
                  </div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                    {path.shortDescription} · {path.stepIds.length} niveles
                  </span>
                </div>
                <ChevronRight
                  size={16}
                  style={{
                    color: 'var(--text-tertiary)',
                    transform: isExpanded ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s ease'
                  }}
                />
              </button>

              {/* LISTA DE PASOS INTERACTIVOS EN 1 COLUMNA */}
              {isExpanded && (
                <div style={{ borderTop: '1px solid var(--color-border-subtle)', padding: '6px', background: 'rgba(255,255,255,0.01)' }}>
                  {stepsInPath.map((step) => {
                    if (!step) return null;
                    const isActive = step.id === activeStepId;

                    return (
                      <ListRow
                        key={step.id}
                        title={`Paso ${step.order}: ${step.title}`}
                        meta={`Objetivo: ${step.practice.target}`}
                        icon={<ChevronRight size={16} style={{ color: 'var(--text-tertiary)' }} />}
                        active={isActive}
                        badge={isActive ? 'Activo hoy' : undefined}
                        badgeTone={isActive ? 'success' : 'default'}
                        onClick={() => onOpenDetail(step.id)}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExplorePathsView;
