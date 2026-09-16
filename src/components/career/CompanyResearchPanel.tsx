// src/components/career/CompanyResearchPanel.tsx — Investigación profunda por empresa.
//
// Protocolo doc-31 (§research antes de aplicar) + regla de fit del tracker
// (≥10 aplicar / 7–9 investigar / ≤6 descartar — trackerCanonicalRules).
// Persiste en careerStore.companyResearch y deja evento en la línea de tiempo.

import React, { useMemo, useState } from 'react';
import { useCareerStore } from '../../data/career/careerStore';
import type { CompanyResearch, CompanyResearchStatus } from '../../data/career/careerContracts';
import Button from '../ui/Button';
import { Search, Save, CheckCircle2, Circle, AlertTriangle, Target } from 'lucide-react';

/** Regla del tracker (fitScoreRule, applicationsSeed.ts): ≥10 aplicar · 7–9 investigar · ≤6 descartar. */
const FIT_APPLY_AT = 10;
const FIT_INVESTIGATE_AT = 7;

export interface CompanyResearchPanelProps {
  companyName: string;
}

const FIELDS: Array<{ key: keyof CompanyResearch; label: string; placeholder: string; rows: number }> = [
  { key: 'products', label: 'Productos / qué hacen', placeholder: '¿Qué ofrecen y a quién? (web, juegos, industrial…)', rows: 2 },
  { key: 'stack', label: 'Stack / motor', placeholder: 'Unity, Unreal, Three.js, pipeline propio, C#…', rows: 2 },
  { key: 'size', label: 'Tamaño / estructura', placeholder: 'Estudio pequeño, equipo de X, remoto-first…', rows: 2 },
  { key: 'hiringProcess', label: 'Proceso de contratación', placeholder: 'Test técnico, portfolio review, entrevistas conocidas…', rows: 2 },
  { key: 'contacts', label: 'Contactos / canales', placeholder: 'Reclutador LinkedIn, TA lead, referido…', rows: 2 },
  { key: 'tailoringNotes', label: 'Adaptación del CV/carta', placeholder: 'Qué enfatizar para ESTA empresa, qué evitar, qué demo llevar', rows: 3 },
];

const STATUS_OPTIONS: Array<{ value: CompanyResearchStatus; label: string }> = [
  { value: 'pendiente', label: 'Pendiente' },
  { value: 'en-curso', label: 'En curso' },
  { value: 'completa', label: 'Completa' },
];

export default function CompanyResearchPanel({ companyName }: CompanyResearchPanelProps) {
  const research = useCareerStore((s) => s.companyResearch[companyName.toLowerCase()]);
  const upsertResearch = useCareerStore((s) => s.upsertCompanyResearch);
  const addTimelineEvent = useCareerStore((s) => s.addTimelineEvent);

  const [draft, setDraft] = useState<CompanyResearch>(
    () =>
      research ?? {
        companyName,
        status: 'pendiente',
        products: '',
        stack: '',
        size: '',
        hiringProcess: '',
        contacts: '',
        tailoringNotes: '',
        sources: [],
        updatedAtIso: new Date().toISOString().slice(0, 10),
      },
  );
  const [sourcesText, setSourcesText] = useState((research?.sources ?? []).join('\n'));
  const [saved, setSaved] = useState(false);
  const [appliedOk, setAppliedOk] = useState(false);
  const addApplication = useCareerStore((s) => s.addApplication);

  /** U3: crea la aplicación en el pipeline desde la investigación (fit ≥10). */
  const handleApplyToPipeline = () => {
    const apps = useCareerStore.getState().applications;
    const already = apps.some((a) => a.companyName.toLowerCase() === companyName.toLowerCase());
    if (!already) {
      addApplication({
        companyName,
        roleTitle: 'Rol a definir',
        stage: 'Aplicado',
        singleNextAction: 'Enviar CV (generar en Portafolio y CV)',
        followUpDateIso: new Date(Date.now() + 3 * 86400000).toISOString().slice(0, 10),
        fitScore: draft.fitScoreUser,
        source: 'manual',
      } as never);
    }
    setAppliedOk(true);
    setTimeout(() => setAppliedOk(false), 3000);
  };

  /** Checklist «lista para aplicar» — protocolo doc-31 + regla de fit del tracker. */
  const readiness = useMemo(() => {
    const checks = [
      { ok: (draft.fitScoreUser ?? 0) >= FIT_APPLY_AT, label: `Fit propio ≥ ${FIT_APPLY_AT} (regla tracker)` },
      { ok: draft.products.trim().length > 0, label: 'Productos investigados' },
      { ok: draft.stack.trim().length > 0, label: 'Stack identificado' },
      { ok: draft.tailoringNotes.trim().length > 0, label: 'Adaptación del CV definida' },
      { ok: sourcesText.trim().length > 0, label: 'Fuentes citadas' },
    ];
    return { checks, ready: checks.every((c) => c.ok) };
  }, [draft, sourcesText]);

  const handleSave = () => {
    const sources = sourcesText
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    const next: CompanyResearch = {
      ...draft,
      companyName,
      sources,
      updatedAtIso: new Date().toISOString().slice(0, 10),
      status: readiness.ready && draft.status !== 'completa' ? 'completa' : draft.status,
    };
    upsertResearch(next);
    addTimelineEvent(companyName, {
      dateIso: next.updatedAtIso,
      type: 'message',
      note: `Investigación ${next.status} — fit ${next.fitScoreUser ?? '—'} · fuentes: ${sources.length}`,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  const set = <K extends keyof CompanyResearch>(key: K, value: CompanyResearch[K]) =>
    setDraft((d) => ({ ...d, [key]: value }));

  return (
    <div className="ds-stack-sm">
      <div className="ds-row-between" style={{ flexWrap: 'wrap', gap: 'var(--space-1)' }}>
        <div className="ds-row" style={{ gap: '6px' }}>
          <Search size={14} style={{ color: 'var(--text-tertiary)' }} />
          <span className="ds-eyebrow">Investigación — {companyName}</span>
        </div>
        <div className="ds-row" style={{ gap: 'var(--space-1)' }}>
          <select
            value={draft.status}
            onChange={(e) => set('status', e.target.value as CompanyResearchStatus)}
            style={{
              background: 'var(--surface-2)',
              color: 'var(--text-primary)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-s)',
              padding: '3px 8px',
              fontSize: '0.75rem',
            }}
            aria-label="Estado de la investigación"
          >
            {STATUS_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <div className="ds-row" style={{ gap: '6px' }}>
            {(draft.fitScoreUser ?? 0) >= FIT_APPLY_AT && (
              <Button variant="secondary" size="sm" onClick={handleApplyToPipeline}>
                <Target size={14} /> Aplicar → Pipeline
              </Button>
            )}
            <Button variant="primary" size="sm" onClick={handleSave}>
              {saved ? <CheckCircle2 size={14} /> : <Save size={14} />} {saved ? 'Guardado' : 'Guardar'}
            </Button>
          </div>
        </div>
      </div>

      {/* Fit score propio + regla */}
      <div className="ds-row" style={{ gap: 'var(--space-2)', alignItems: 'center', flexWrap: 'wrap' }}>
        <label style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
          Fit propio (0–12):
          <input
            type="number"
            min={0}
            max={12}
            value={draft.fitScoreUser ?? ''}
            placeholder="—"
            onChange={(e) => set('fitScoreUser', e.target.value === '' ? undefined : Number(e.target.value))}
            style={{
              width: '64px',
              marginLeft: '8px',
              background: 'var(--surface-2)',
              color: 'var(--text-primary)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-s)',
              padding: '4px 8px',
              fontSize: '0.8rem',
            }}
          />
        </label>
        {draft.fitScoreUser !== undefined && (
          <span
            className="ds-chip"
            style={{
              fontSize: '0.7rem',
              color: draft.fitScoreUser >= FIT_APPLY_AT ? 'var(--color-success, #30d158)' : draft.fitScoreUser >= FIT_INVESTIGATE_AT ? 'var(--warning)' : 'var(--text-tertiary)',
              border: '1px solid var(--color-border-subtle)',
            }}
          >
            {draft.fitScoreUser >= FIT_APPLY_AT
              ? 'Aplicar'
              : draft.fitScoreUser >= FIT_INVESTIGATE_AT
                ? 'Seguir investigando'
                : 'Descartar (regla tracker)'}
          </span>
        )}
      </div>

      {/* Campos de investigación */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-2)' }}>
        {FIELDS.map((f) => (
          <label key={f.key} style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            {f.label}
            <textarea
              rows={f.rows}
              value={String(draft[f.key] ?? '')}
              placeholder={f.placeholder}
              onChange={(e) => set(f.key, e.target.value as never)}
              style={{
                background: 'var(--surface-2)',
                color: 'var(--text-primary)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-s)',
                padding: '8px 10px',
                fontSize: '0.8rem',
                resize: 'vertical',
                fontFamily: 'inherit',
              }}
            />
          </label>
        ))}
        <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
          Fuentes (una URL por línea)
          <textarea
            rows={3}
            value={sourcesText}
            placeholder={'https://empresa.com/about\nhttps://LinkedIn…'}
            onChange={(e) => setSourcesText(e.target.value)}
            style={{
              background: 'var(--surface-2)',
              color: 'var(--text-primary)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-s)',
              padding: '8px 10px',
              fontSize: '0.8rem',
              resize: 'vertical',
              fontFamily: 'inherit',
            }}
          />
        </label>
      </div>

      {/* Checklist lista-para-aplicar */}
      <div
        className="ds-card"
        style={{
          padding: 'var(--space-3)',
          border: `1px solid ${readiness.ready ? 'var(--color-success, #30d158)' : 'var(--color-border-subtle)'}`,
        }}
      >
        <div className="ds-row" style={{ gap: '6px', marginBottom: '8px' }}>
          {readiness.ready ? (
            <CheckCircle2 size={14} style={{ color: 'var(--color-success, #30d158)' }} />
          ) : (
            <AlertTriangle size={14} style={{ color: 'var(--warning)' }} />
          )}
          <strong style={{ fontSize: '0.8rem' }}>
            {readiness.ready ? 'Lista para aplicar' : 'Checklist antes de aplicar'}
          </strong>
        </div>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '4px' }}>
          {readiness.checks.map((c) => (
            <li key={c.label} className="ds-row" style={{ gap: '6px', fontSize: '0.76rem', color: c.ok ? 'var(--text-secondary)' : 'var(--text-tertiary)' }}>
              {c.ok ? (
                <CheckCircle2 size={13} style={{ color: 'var(--color-success, #30d158)', flexShrink: 0 }} />
              ) : (
                <Circle size={13} style={{ flexShrink: 0 }} />
              )}
              {c.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
