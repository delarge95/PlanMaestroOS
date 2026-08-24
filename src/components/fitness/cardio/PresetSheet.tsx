// src/components/fitness/cardio/PresetSheet.tsx — Detalle de preset + edición guiada/libre (AG-CARDIO)
// Guiado: steppers con límites seguros CITADOS (editGuides.ts). Libre: sin límites, con advertencia.
// Guardar → copia local en cardioStore ('cardio-presets-v1'); el original nunca se modifica.
import React, { useMemo, useState } from 'react';
import { Check, Minus, Pencil, Plus, RotateCcw, TriangleAlert } from 'lucide-react';
import type { CardioPreset, SessionBlock } from '../../../data/fitness/cardio/types';
import { computeAvgMets, computeTotalMin } from '../../../data/fitness/cardio/presets';
import { guidedBoundsFor, kcalPerMin, KCAL_FORMULA_CITE } from '../../../data/fitness/cardio/editGuides';
import { useCardioStore } from '../../../data/fitness/cardio/cardioStore';
import Sheet from '../../ui/Sheet';
import StatusBadge from '../../ui/StatusBadge';
import Button from '../../ui/Button';
import { CitationList, ConfidenceNote, formatMin, kindLabel } from './CardioWorkspace';

type EditMode = 'off' | 'guided' | 'free';

function Stepper({
  label,
  value,
  bounds,
  onChange,
  free,
}: {
  label: string;
  value: number;
  bounds?: { min: number; max: number; step: number; unit?: 'min' | 'reps'; guidance: string; why: ReturnType<typeof guidedBoundsFor>['why'] };
  onChange: (v: number) => void;
  free: boolean;
}) {
  const min = free ? Math.max(0.25, bounds ? bounds.min * 0.5 : 0.25) : bounds?.min ?? 0.25;
  const max = free ? (bounds ? bounds.max * 2 : 300) : bounds?.max ?? 300;
  const step = bounds?.step ?? 0.25;
  const clamp = (v: number) => Math.min(max, Math.max(min, Math.round(v / step) * step));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 150 }}>
      <span style={{ fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-secondary)' }}>{label}</span>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        <button
          type="button"
          aria-label={`Reducir ${label}`}
          onClick={() => onChange(clamp(value - step))}
          disabled={value <= min}
          style={{ width: 28, height: 28, borderRadius: 'var(--radius-s, 8px)', border: '1px solid var(--color-border-subtle)', background: 'var(--surface)', color: 'var(--text-primary)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Minus size={14} aria-hidden="true" />
        </button>
        <span style={{ minWidth: 64, textAlign: 'center', fontVariantNumeric: 'tabular-nums', color: 'var(--text-primary)', fontWeight: 600 }}>
          {step < 1 ? value.toFixed(2).replace(/\.?0+$/, '') : value} {bounds?.unit === 'reps' ? '×' : 'min'}
        </span>
        <button
          type="button"
          aria-label={`Aumentar ${label}`}
          onClick={() => onChange(clamp(value + step))}
          disabled={value >= max}
          style={{ width: 28, height: 28, borderRadius: 'var(--radius-s, 8px)', border: '1px solid var(--color-border-subtle)', background: 'var(--surface)', color: 'var(--text-primary)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Plus size={14} aria-hidden="true" />
        </button>
      </div>
      {bounds && bounds.why.length > 0 && (
        <details>
          <summary style={{ cursor: 'pointer', fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)' }}>límite: {min}–{max}</summary>
          <div style={{ marginTop: 4 }}>
            <p style={{ margin: 0, fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-secondary)', lineHeight: 1.45 }}>{bounds.guidance}</p>
            <CitationList cites={bounds.why} compact />
          </div>
        </details>
      )}
      {bounds && bounds.why.length === 0 && (
        <span style={{ fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)' }}>{bounds.guidance}</span>
      )}
      {free && bounds && bounds.why.length > 0 && (
        <span style={{ fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--warning, #f59e0b)' }}>modo libre: límite guía {min}–{max} ampliado ×2</span>
      )}
    </div>
  );
}

function BlockEditor({
  block,
  preset,
  free,
  onChange,
}: {
  block: SessionBlock;
  preset: CardioPreset;
  free: boolean;
  onChange: (b: SessionBlock) => void;
}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
      {block.repeats !== undefined && (
        <Stepper
          label="Repeticiones"
          value={block.repeats}
          bounds={guidedBoundsFor(preset, block, 'repeats', block.repeats)}
          free={free}
          onChange={(v) => onChange({ ...block, repeats: Math.round(v) })}
        />
      )}
      <Stepper
        label={block.repeats !== undefined ? 'Duración por rep' : 'Duración'}
        value={block.durationMin}
        bounds={guidedBoundsFor(preset, block, 'durationMin', block.durationMin)}
        free={free}
        onChange={(v) => onChange({ ...block, durationMin: v })}
      />
      {block.repeats !== undefined && block.restMin !== undefined && (
        <Stepper
          label="Recuperación entre reps"
          value={block.restMin}
          bounds={guidedBoundsFor(preset, block, 'restMin', block.durationMin)}
          free={free}
          onChange={(v) => onChange({ ...block, restMin: v })}
        />
      )}
    </div>
  );
}

export function PresetSheet({ preset, onClose }: { preset: CardioPreset; onClose: () => void }) {
  const local = useCardioStore((s) => s.local[preset.id]);
  const saveLocal = useCardioStore((s) => s.saveLocal);
  const removeLocal = useCardioStore((s) => s.removeLocal);
  const [editMode, setEditMode] = useState<EditMode>('off');
  const [draft, setDraft] = useState<CardioPreset>(local ?? preset);
  const [weightKg, setWeightKg] = useState(70);
  const [saved, setSaved] = useState(false);

  const shown = editMode === 'off' ? (local ?? preset) : draft;
  const avgMets = useMemo(() => computeAvgMets(shown), [shown]);
  const totalMin = useMemo(() => computeTotalMin(shown), [shown]);
  const kcal = Math.round(kcalPerMin(avgMets, weightKg) * totalMin);

  const startEdit = (mode: 'guided' | 'free') => {
    setDraft(structuredClone(local ?? preset));
    setEditMode(mode);
    setSaved(false);
  };

  const updateBlock = (blockId: string, b: SessionBlock) =>
    setDraft((d) => ({ ...d, blocks: d.blocks.map((x) => (x.id === blockId ? b : x)) }));

  const save = () => {
    const next: CardioPreset = { ...draft, avgMets: computeAvgMets(draft), totalMin: computeTotalMin(draft) };
    saveLocal(next, preset.id);
    setEditMode('off');
    setSaved(true);
  };

  return (
    <Sheet isOpen onClose={onClose} title={shown.name} description={`${shown.totalMin} min · ${shown.difficulty} · ${shown.avgMets} METs promedio`} maxWidth="760px">
      {/* Banner edición guardada / activa */}
      {saved && local && editMode === 'off' && (
        <p style={{ margin: 0, display: 'flex', gap: 6, alignItems: 'center', fontSize: 'var(--font-size-meta, 0.8rem)', color: 'var(--success, #30d158)' }}>
          <Check size={14} aria-hidden="true" /> Copia local guardada. El preset original permanece intacto.
        </p>
      )}

      {editMode === 'off' ? (
        <>
          <p style={{ margin: 0, fontSize: 'var(--font-size-meta, 0.8rem)', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{shown.summary}</p>

          {/* Desglose de sesión */}
          <ol style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {shown.blocks.map((b) => (
              <li
                key={b.id}
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
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-2)', flexWrap: 'wrap', alignItems: 'center' }}>
                  <strong style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-meta, 0.8rem)' }}>
                    {kindLabel(b.kind)} · {b.name}
                  </strong>
                  <StatusBadge
                    label={b.repeats !== undefined ? `${b.repeats} × ${formatMin(b.durationMin)}${b.restMin !== undefined ? ` / ${formatMin(b.restMin)} rec.` : ''}` : formatMin(b.durationMin)}
                  />
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
                  <StatusBadge label={b.intensity.label} variant="active" />
                  {b.intensity.pctHrMax && <StatusBadge label={`${b.intensity.pctHrMax[0]}–${b.intensity.pctHrMax[1]}% HRmax`} />}
                  {b.intensity.pctFtp && <StatusBadge label={`${b.intensity.pctFtp[0]}–${b.intensity.pctFtp[1]}% FTP`} />}
                  {b.intensity.mets !== undefined && <StatusBadge label={`${b.intensity.mets} METs`} />}
                </div>
                <details>
                  <summary style={{ cursor: 'pointer', fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)' }}>¿Por qué esta intensidad?</summary>
                  <div style={{ marginTop: 'var(--space-1)' }}>
                    <CitationList cites={b.intensity.why} compact />
                  </div>
                </details>
                {b.modification && (
                  <p style={{ margin: 0, fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    <strong>Modificación segura:</strong> {b.modification.guidance}
                    <br />
                    <CitationList cites={b.modification.why} compact />
                  </p>
                )}
              </li>
            ))}
          </ol>

          {/* Estimación kcal (interfaz con AG-NUTRI) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', background: 'var(--surface-elevated, var(--color-surface-raised))', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-3)' }}>
            <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center', flexWrap: 'wrap' }}>
              <strong style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-meta, 0.8rem)' }}>Estimación de gasto</strong>
              <label style={{ display: 'inline-flex', gap: 6, alignItems: 'center', fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-secondary)' }}>
                peso:
                <input
                  type="number"
                  min={40}
                  max={150}
                  value={weightKg}
                  onChange={(e) => setWeightKg(Math.min(150, Math.max(40, Number(e.target.value) || 70)))}
                  style={{ width: 64, padding: '4px 6px', borderRadius: 'var(--radius-s, 8px)', border: '1px solid var(--color-border-subtle)', background: 'var(--surface)', color: 'var(--text-primary)' }}
                />
                kg
              </label>
              <StatusBadge label={`≈ ${kcal} kcal / ${totalMin} min`} variant="success" />
            </div>
            <p style={{ margin: 0, fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>
              kcal/min = [(METs × 3.5 × {weightKg} kg) / 1000] × 5, con METs promedio ponderado por bloques ({avgMets}) · {KCAL_FORMULA_CITE.sourceTitle}, {KCAL_FORMULA_CITE.locator} <ConfidenceNote confidence="explicit" />
            </p>
          </div>

          {/* ¿Por qué? del preset */}
          <details open>
            <summary style={{ cursor: 'pointer', fontSize: 'var(--font-size-meta, 0.8rem)', color: 'var(--text-secondary)' }}>¿Por qué esta sesión?</summary>
            <div style={{ marginTop: 'var(--space-1)' }}>
              <CitationList cites={shown.why} />
            </div>
          </details>

          {/* Acciones */}
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="primary" size="sm" onClick={() => startEdit('guided')}>
              <Pencil size={14} aria-hidden="true" /> Editar copia (guiado)
            </Button>
            <Button variant="secondary" size="sm" onClick={() => startEdit('free')}>
              Edición libre
            </Button>
            {local && (
              <Button variant="ghost" size="sm" onClick={() => { removeLocal(preset.id); setSaved(false); }}>
                <RotateCcw size={14} aria-hidden="true" /> Restaurar original
              </Button>
            )}
          </div>
        </>
      ) : (
        <>
          {/* ===== MODO EDICIÓN ===== */}
          <p style={{ margin: 0, fontSize: 'var(--font-size-meta, 0.8rem)', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            {editMode === 'guided'
              ? 'Edición GUIADA: cada límite de los steppers viene de una regla de las fuentes (despliega "límite" para ver la cita). Guardar crea una copia local; el original no cambia.'
              : 'Edición LIBRE: sin límites guiados. Puedes romper el diseño científico de la sesión — los límites-guía se muestran ampliados ×2 como referencia.'}
          </p>
          {editMode === 'free' && (
            <p role="warning" style={{ margin: 0, display: 'flex', gap: 6, fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--warning, #f59e0b)', alignItems: 'center' }}>
              <TriangleAlert size={14} aria-hidden="true" /> Los rangos citados protegen el propósito de la sesión (p.ej. recuperación 2–3× en R, ≤10% semanal a T).
            </p>
          )}

          <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-secondary)' }}>
            Nombre de tu copia
            <input
              type="text"
              value={draft.name}
              onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
              style={{ padding: '8px 10px', borderRadius: 'var(--radius-s, 8px)', border: '1px solid var(--color-border-subtle)', background: 'var(--surface)', color: 'var(--text-primary)' }}
            />
          </label>

          {draft.blocks.map((b) => (
            <div key={b.id} style={{ background: 'var(--surface-elevated, var(--color-surface-raised))', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-3)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <strong style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-meta, 0.8rem)' }}>
                {kindLabel(b.kind)} · {b.name}
              </strong>
              <BlockEditor block={b} preset={draft} free={editMode === 'free'} onChange={(nb) => updateBlock(b.id, nb)} />
            </div>
          ))}

          {/* Vista en vivo */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
            <StatusBadge label={`Total: ${computeTotalMin(draft)} min`} variant="active" />
            <StatusBadge label={`METs prom.: ${computeAvgMets(draft)}`} />
            <StatusBadge label={`≈ ${Math.round(kcalPerMin(computeAvgMets(draft), weightKg) * computeTotalMin(draft))} kcal (${weightKg} kg)`} variant="success" />
          </div>

          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <Button variant="primary" size="sm" onClick={save}>
              <Check size={14} aria-hidden="true" /> Guardar copia local
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setEditMode('off')}>
              Cancelar
            </Button>
          </div>
        </>
      )}
    </Sheet>
  );
}

export default PresetSheet;
