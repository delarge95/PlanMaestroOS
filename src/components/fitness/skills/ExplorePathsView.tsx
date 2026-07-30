import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import type { SkillDomain } from '../../../data/fitness/skills/types';
import { skillPaths } from '../../../data/fitness/skills/skillPaths';
import { skillSteps } from '../../../data/fitness/skills/skillSteps';
import { useSkillStateStore } from '../../../data/fitness/skills/skillStateStore';
import ListRow from '../../ui/ListRow';

export interface ExplorePathsViewProps {
  onOpenDetail: (stepId: string) => void;
}

const DOMAIN_LABELS: Record<SkillDomain, { label: string; icon: string }> = {
  pull: { label: 'Tracción', icon: '🧗' },
  push: { label: 'Empuje', icon: '💪' },
  core: { label: 'Core & Compresión', icon: '🧘' },
  legs: { label: 'Pierna Unilateral', icon: '🦵' },
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
      {/* FILTRO DE DOMINIO LIMPIO CON SCROLLABLE RAIL SUTIL */}
      <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none' }}>
        <button
          type="button"
          onClick={() => setSelectedDomain('all')}
          style={{
            background: selectedDomain === 'all' ? 'var(--color-surface-raised)' : 'transparent',
            color: selectedDomain === 'all' ? 'var(--text)' : 'var(--text-tertiary)',
            border: selectedDomain === 'all' ? '1px solid var(--color-border-visible)' : '1px solid transparent',
            padding: '6px 14px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.82rem',
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
              padding: '6px 14px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {DOMAIN_LABELS[dom].label}
          </button>
        ))}
      </div>

      {/* LISTA DE RUTAS ORGANIZADAS DE 1 COLUMNA CON TÍTULO DOMINANTE (22-24PX) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
        {filteredPaths.map((path) => {
          const isExpanded = expandedPathId === path.id || filteredPaths.length === 1;
          const stepsInPath = path.stepIds
            .map((id) => skillSteps.find((s) => s.id === id))
            .filter(Boolean);

          const equipmentLabel = path.equipment.map(e => e === 'bar' ? 'Barra' : e === 'rings' ? 'Anillas' : e === 'floor' ? 'Suelo' : e).join(' o ');

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
                  padding: '14px 16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <div>
                  <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.4rem)', fontWeight: 700, margin: '0 0 2px', color: 'var(--text)' }}>
                    {path.title}
                  </h2>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                    {path.stepIds.length} pasos · {equipmentLabel}
                  </span>
                </div>
                <ChevronRight
                  size={18}
                  style={{
                    color: 'var(--text-tertiary)',
                    transform: isExpanded ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s ease'
                  }}
                />
              </button>

              {/* LISTA DE PASOS COMPACTOS (52-60PX) NUMERADOS 01, 02, 03 */}
              {isExpanded && (
                <div style={{ borderTop: '1px solid var(--color-border-subtle)', padding: '4px 8px 8px', background: 'rgba(255,255,255,0.01)' }}>
                  <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {stepsInPath.map((step) => {
                      if (!step) return null;
                      const isActive = step.id === activeStepId;
                      const numStr = String(step.order).padStart(2, '0');

                      return (
                        <li key={step.id}>
                          <ListRow
                            title={`${numStr} · ${step.title}`}
                            meta={`Objetivo: ${step.practice.target}`}
                            icon={<ChevronRight size={16} style={{ color: 'var(--text-tertiary)' }} />}
                            active={isActive}
                            badge={isActive ? 'Activo hoy' : undefined}
                            badgeTone={isActive ? 'success' : 'default'}
                            onClick={() => onOpenDetail(step.id)}
                            style={{ minHeight: '52px' }}
                          />
                        </li>
                      );
                    })}
                  </ol>
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
