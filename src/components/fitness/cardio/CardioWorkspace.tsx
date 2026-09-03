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
      className="ds-micro"
      style={{ fontStyle: 'italic' }}
    >
      (derivado: {confidence})
    </span>
  );
}

export function CitationList({ cites, compact = false }: { cites: Citation[]; compact?: boolean }) {
  if (cites.length === 0) return null;
  return (
    <ul className="ds-stack-sm" style={{ margin: 0, paddingLeft: 'var(--space-3)', gap: 'var(--space-1)' }}>
      {cites.map((c, i) => (
        <li
          key={`${c.sourceId}-${i}`}
          className={compact ? 'ds-micro' : 'ds-caption'}
          style={{ lineHeight: 1.5 }}
        >
          {c.statement}{' '}
          <span className="ds-micro">
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

  return (
    <div className="ds-stack-lg" style={{ maxWidth: 920, margin: '0 auto', width: '100%' }}>
      {/* 1) Disciplina */}
      <section className="ds-stack-sm">
        <h2 className="ds-h3">Disciplina</h2>
        <div className="ds-row-wrap" role="tablist" aria-label="Disciplina">
          {DISCIPLINES.map((d) => (
            <button
              key={d.id}
              type="button"
              role="tab"
              aria-selected={d.id === discipline}
              onClick={() => setDiscipline(d.id)}
              className="ds-chip"
              data-active={d.id === discipline}
            >
              {DISCIPLINE_ICONS[d.id]}
              {d.name}
            </button>
          ))}
        </div>
        <div className="ds-card ds-stack-sm">
          <p className="ds-caption" style={{ lineHeight: 1.55 }}>{disc.description}</p>
          <div className="ds-row-wrap" style={{ alignItems: 'center' }}>
            <StatusBadge label={`METs típicos: ${disc.typicalMets.value}`} />
            <span className="ds-micro">
              rango {disc.metsRange[0]}–{disc.metsRange[1]} METs
            </span>
          </div>
          <details>
            <summary className="ds-caption ds-row" style={{ cursor: 'pointer', gap: 6 }}>
              <Info size={14} aria-hidden="true" /> ¿Por qué? (fuentes)
            </summary>
            <div style={{ marginTop: 'var(--space-2)' }}>
              <CitationList cites={disc.why} compact />
              <p className="ds-micro" style={{ margin: 'var(--space-1) 0 0' }}>Derivación de los METs típicos:</p>
              <CitationList cites={disc.typicalMets.why} compact />
            </div>
          </details>
        </div>
      </section>

      {/* 2) Enfoques */}
      <section className="ds-stack-sm">
        <h2 className="ds-h3">Enfoque</h2>
        <div className="ds-row-wrap">
          <button
            type="button"
            onClick={() => setApproachFilter('all')}
            className="ds-chip"
            data-active={approachFilter === 'all'}
          >
            Todos
          </button>
          {APPROACHES.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => setApproachFilter(a.id)}
              className="ds-chip"
              data-active={approachFilter === a.id}
              title={a.whenToUse}
            >
              {APPROACH_ICONS[a.id]}
              {a.name}
            </button>
          ))}
        </div>
        <div className="ds-grid">
          {(approachFilter === 'all' ? APPROACHES : APPROACHES.filter((a) => a.id === approachFilter)).map((a) => (
            <div key={a.id} className="ds-card ds-stack-sm">
              <strong className="ds-row" style={{ gap: 6, color: 'var(--text-primary)' }}>
                {APPROACH_ICONS[a.id]} {a.name}
              </strong>
              <p className="ds-caption" style={{ lineHeight: 1.55 }}>{a.description}</p>
              <p className="ds-micro" style={{ lineHeight: 1.5 }}>
                <strong>Cuándo usarlo:</strong> {a.whenToUse}
              </p>
              <details>
                <summary className="ds-micro" style={{ cursor: 'pointer' }}>¿Por qué? (fuentes)</summary>
                <div style={{ marginTop: 'var(--space-1)' }}>
                  <CitationList cites={a.why} compact />
                </div>
              </details>
            </div>
          ))}
        </div>
      </section>

      {/* 3) Presets */}
      <section className="ds-stack-sm">
        <h2 className="ds-h3">
          Sesiones ({presets.length})
        </h2>
        <div className="ds-grid">
          {presets.map((p) => {
            const edited = localPresets[p.id];
            const shown = edited ?? p;
            const main = shown.blocks.find((b) => b.kind === 'work') ?? shown.blocks[0];
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setOpenPresetId(p.id)}
                className="ds-card ds-card-clickable ds-stack-sm"
                style={{
                  textAlign: 'left',
                  color: 'inherit',
                }}
              >
                <div className="ds-row-between" style={{ alignItems: 'flex-start' }}>
                  <strong style={{ color: 'var(--text-primary)', lineHeight: 1.3 }}>{shown.name}</strong>
                  {edited && <StatusBadge label="Editado" variant="active" />}
                </div>
                <p className="ds-caption" style={{ lineHeight: 1.5 }}>{shown.summary}</p>
                <div className="ds-row-wrap" style={{ gap: 6, alignItems: 'center' }}>
                  <StatusBadge label={`${shown.totalMin} min`} />
                  <DifficultyBadge difficulty={shown.difficulty} />
                  <StatusBadge label={`${shown.avgMets} METs (prom.)`} />
                </div>
                <span className="ds-micro" style={{ lineHeight: 1.5 }}>
                  {kindLabel(main.kind)}: {main.name} · {main.intensity.label}
                </span>
              </button>
            );
          })}
        </div>
        <p className="ds-micro">
          Toca una sesión para ver el desglose bloque a bloque con su cita, y edítala como copia local (los presets originales nunca se sobrescriben).
        </p>
      </section>

      {openPreset && <PresetSheet preset={openPreset} onClose={() => setOpenPresetId(null)} />}
    </div>
  );
}

export default CardioWorkspace;
