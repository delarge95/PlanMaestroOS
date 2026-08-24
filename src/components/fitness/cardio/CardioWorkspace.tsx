// src/components/fitness/cardio/CardioWorkspace.tsx — Sección Cardio (AG-CARDIO)
// Disciplina → enfoques → grid de presets citados. Detalle + edición en Sheet (PresetSheet).
// Regla §0: NINGÚN número sin cita; los METs alimentan el estimador kcal de AG-NUTRI (getPresetsWithMet).
import React, { useMemo, useState } from 'react';
import { Bike, Flame, Dumbbell, Footprints, Gauge, Info, PersonStanding, Timer, Zap } from 'lucide-react';
import { DISCIPLINES, getDiscipline } from '../../../data/fitness/cardio/disciplines';
import { APPROACHES } from '../../../data/fitness/cardio/approaches';
import { CARDIO_PRESETS } from '../../../data/fitness/cardio/presets';
import type { ApproachId, Citation, DisciplineId } from '../../../data/fitness/cardio/types';
import { useCardioStore } from '../../../data/fitness/cardio/cardioStore';
import StatusBadge from '../../ui/StatusBadge';
import useIsMobile from '../../ui/useIsMobile';
import PresetSheet from './PresetSheet';

const DISCIPLINE_ICONS: Record<DisciplineId, React.ReactNode> = {
  running: <Footprints size={16} aria-hidden="true" />,
  biking: <Bike size={16} aria-hidden="true" />,
  spinning: <Timer size={16} aria-hidden="true" />,
  walking: <PersonStanding size={16} aria-hidden="true" />,
};

const APPROACH_ICONS: Record<ApproachId, React.ReactNode> = {
  'fat-burn': <Flame size={16} aria-hidden="true" />,
  'muscular-endurance': <Dumbbell size={16} aria-hidden="true" />,
  'max-speed': <Gauge size={16} aria-hidden="true" />,
  'power-hit': <Zap size={16} aria-hidden="true" />,
};

export function ConfidenceNote({ confidence }: { confidence: Citation['confidence'] }) {
  if (confidence === 'explicit') return null;
  return (
    <span
      title="Valor derivado de las ecuaciones/reglas de la fuente, no literal del libro"
      style={{ fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)', fontStyle: 'italic' }}
    >
      (derivado: {confidence})
    </span>
  );
}

export function CitationList({ cites, compact = false }: { cites: Citation[]; compact?: boolean }) {
  if (cites.length === 0) return null;
  return (
    <ul style={{ margin: 0, paddingLeft: 'var(--space-3)', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
      {cites.map((c, i) => (
        <li
          key={`${c.sourceId}-${i}`}
          style={{
            fontSize: compact ? 'var(--font-size-micro, 0.7rem)' : 'var(--font-size-meta, 0.8rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
          }}
        >
          {c.statement}{' '}
          <span style={{ color: 'var(--text-tertiary)' }}>
            — {c.sourceTitle} · {c.locator} <ConfidenceNote confidence={c.confidence} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function DifficultyBadge({ difficulty }: { difficulty: 'principiante' | 'intermedio' | 'avanzado' }) {
  const variant = difficulty === 'principiante' ? 'success' : difficulty === 'avanzado' ? 'warning' : 'neutral';
  return <StatusBadge label={difficulty} variant={variant} />;
}

function kindLabel(kind: string): string {
  switch (kind) {
    case 'warmup':
      return 'Calentamiento';
    case 'work':
      return 'Trabajo';
    case 'recovery':
      return 'Recuperación';
    default:
      return 'Enfriamiento';
  }
}

function formatMin(min: number): string {
  if (min < 1) return `${Math.round(min * 60)} s`;
  return Number.isInteger(min) ? `${min} min` : `${min.toFixed(2).replace(/0$/, '')} min`;
}

export { formatMin, kindLabel };

export function CardioWorkspace() {
  const isMobile = useIsMobile();
  const localPresets = useCardioStore((s) => s.local);
  const [discipline, setDiscipline] = useState<DisciplineId>('running');
  const [approachFilter, setApproachFilter] = useState<ApproachId | 'all'>('all');
  const [openPresetId, setOpenPresetId] = useState<string | null>(null);

  const disc = getDiscipline(discipline);
  const presets = useMemo(
    () =>
      CARDIO_PRESETS.filter(
        (p) => p.disciplineId === discipline && (approachFilter === 'all' || p.approachId === approachFilter)
      ),
    [discipline, approachFilter]
  );
  const openPreset = openPresetId ? CARDIO_PRESETS.find((p) => p.id === openPresetId) : undefined;

  const chip = (selected: boolean): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '8px 12px',
    borderRadius: 'var(--radius-pill, 999px)',
    border: `1px solid ${selected ? 'var(--color-accent-primary, var(--accent))' : 'var(--color-border-subtle)'}`,
    background: selected ? 'var(--color-accent-primary-soft, var(--accent-soft))' : 'transparent',
    color: selected ? 'var(--text-primary)' : 'var(--text-secondary)',
    fontWeight: 600,
    fontSize: 'var(--font-size-meta, 0.8rem)',
    cursor: 'pointer',
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg, 24px)', maxWidth: 920, margin: '0 auto', width: '100%' }}>
      {/* 1) Disciplina */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <h2 style={{ margin: 0, fontSize: 'var(--font-size-title, 1.05rem)', fontWeight: 650, color: 'var(--text-primary)' }}>Disciplina</h2>
        <div style={{ display: 'flex', gap: 'var(--space-1)', flexWrap: 'wrap' }} role="tablist" aria-label="Disciplina">
          {DISCIPLINES.map((d) => (
            <button key={d.id} type="button" role="tab" aria-selected={d.id === discipline} onClick={() => setDiscipline(d.id)} style={chip(d.id === discipline)}>
              {DISCIPLINE_ICONS[d.id]}
              {d.name}
            </button>
          ))}
        </div>
        <div
          style={{
            background: 'var(--surface-elevated, var(--color-surface-raised))',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-3)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
          }}
        >
          <p style={{ margin: 0, fontSize: 'var(--font-size-meta, 0.8rem)', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{disc.description}</p>
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', alignItems: 'center' }}>
            <StatusBadge label={`METs típicos: ${disc.typicalMets.value}`} />
            <span style={{ fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)' }}>
              rango {disc.metsRange[0]}–{disc.metsRange[1]} METs
            </span>
          </div>
          <details>
            <summary style={{ cursor: 'pointer', fontSize: 'var(--font-size-meta, 0.8rem)', color: 'var(--text-secondary)', display: 'inline-flex', gap: 6, alignItems: 'center' }}>
              <Info size={14} aria-hidden="true" /> ¿Por qué? (fuentes)
            </summary>
            <div style={{ marginTop: 'var(--space-2)' }}>
              <CitationList cites={disc.why} compact />
              <p style={{ margin: 'var(--space-1) 0 0', fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)' }}>Derivación de los METs típicos:</p>
              <CitationList cites={disc.typicalMets.why} compact />
            </div>
          </details>
        </div>
      </section>

      {/* 2) Enfoques */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <h2 style={{ margin: 0, fontSize: 'var(--font-size-title, 1.05rem)', fontWeight: 650, color: 'var(--text-primary)' }}>Enfoque</h2>
        <div style={{ display: 'flex', gap: 'var(--space-1)', flexWrap: 'wrap' }}>
          <button type="button" onClick={() => setApproachFilter('all')} style={chip(approachFilter === 'all')}>
            Todos
          </button>
          {APPROACHES.map((a) => (
            <button key={a.id} type="button" onClick={() => setApproachFilter(a.id)} style={chip(approachFilter === a.id)} title={a.whenToUse}>
              {APPROACH_ICONS[a.id]}
              {a.name}
            </button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? '100%' : '260px'}, 1fr))`, gap: 'var(--space-2)' }}>
          {(approachFilter === 'all' ? APPROACHES : APPROACHES.filter((a) => a.id === approachFilter)).map((a) => (
            <div
              key={a.id}
              style={{
                background: 'var(--surface-elevated, var(--color-surface-raised))',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-3)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-2)',
              }}
            >
              <strong style={{ display: 'inline-flex', gap: 6, alignItems: 'center', color: 'var(--text-primary)' }}>
                {APPROACH_ICONS[a.id]} {a.name}
              </strong>
              <p style={{ margin: 0, fontSize: 'var(--font-size-meta, 0.8rem)', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{a.description}</p>
              <p style={{ margin: 0, fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>
                <strong>Cuándo usarlo:</strong> {a.whenToUse}
              </p>
              <details>
                <summary style={{ cursor: 'pointer', fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)' }}>¿Por qué? (fuentes)</summary>
                <div style={{ marginTop: 'var(--space-1)' }}>
                  <CitationList cites={a.why} compact />
                </div>
              </details>
            </div>
          ))}
        </div>
      </section>

      {/* 3) Presets */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <h2 style={{ margin: 0, fontSize: 'var(--font-size-title, 1.05rem)', fontWeight: 650, color: 'var(--text-primary)' }}>
          Sesiones ({presets.length})
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(${isMobile ? '100%' : '270px'}, 1fr))`, gap: 'var(--space-2)' }}>
          {presets.map((p) => {
            const edited = localPresets[p.id];
            const shown = edited ?? p;
            const main = shown.blocks.find((b) => b.kind === 'work') ?? shown.blocks[0];
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setOpenPresetId(p.id)}
                style={{
                  textAlign: 'left',
                  cursor: 'pointer',
                  background: 'var(--surface-elevated, var(--color-surface-raised))',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-3)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-2)',
                  color: 'inherit',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                  <strong style={{ color: 'var(--text-primary)', lineHeight: 1.3 }}>{shown.name}</strong>
                  {edited && <StatusBadge label="Editado" variant="active" />}
                </div>
                <p style={{ margin: 0, fontSize: 'var(--font-size-meta, 0.8rem)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{shown.summary}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
                  <StatusBadge label={`${shown.totalMin} min`} />
                  <DifficultyBadge difficulty={shown.difficulty} />
                  <StatusBadge label={`${shown.avgMets} METs (prom.)`} />
                </div>
                <span style={{ fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>
                  {kindLabel(main.kind)}: {main.name} · {main.intensity.label}
                </span>
              </button>
            );
          })}
        </div>
        <p style={{ margin: 0, fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)' }}>
          Toca una sesión para ver el desglose bloque a bloque con su cita, y edítala como copia local (los presets originales nunca se sobrescriben).
        </p>
      </section>

      {openPreset && <PresetSheet preset={openPreset} onClose={() => setOpenPresetId(null)} />}
    </div>
  );
}

export default CardioWorkspace;
