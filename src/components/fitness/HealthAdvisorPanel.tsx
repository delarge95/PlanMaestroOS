// src/components/fitness/HealthAdvisorPanel.tsx — Asistente de salud (Hoy).
//
// Interfaz del motor healthIntelligence: reportas dolor → la app responde
// con la cadena completa (estructuras afectadas → ejercicios de HOY que
// cargan la zona → sustituciones → prehab → triaje con citas → guardas de
// reglas). El advisory del día queda persistido y visible como banner.

import React, { useEffect, useMemo, useState } from 'react';
import {
  BODY_ZONES,
  BODY_ZONE_LABELS_ES,
  type BodyZone,
} from '../../data/fitness/anatomyGraph';
import {
  runHealthIntelligence,
  type HealthIntelligenceResult,
  type PainReport,
  type PlannedExercise,
} from '../../lib/fitness/healthIntelligence';
import type { Onset, PainQuality } from '../../lib/fitness/injuryTriage';
import { testsForZone, scoreCandidates, type GuidedTest, type ScoredCandidate } from '../../lib/fitness/diagnosticTests';
import { exerciseDatabase } from '../../data/exercises/exerciseData';
import { getProgramById } from '../../data/fitness/programs';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import { buildProgramCalendar } from '../../lib/fitness/programCalendar';
import Button from '../ui/Button';
import { Activity, ChevronDown, ChevronUp, ShieldAlert, ShieldCheck, Info, AlertTriangle } from 'lucide-react';

const ADVISORY_KEY = 'fit-health-advisory-v1';

interface StoredAdvisory {
  dateIso: string;
  zoneLabel: string;
  severity: 'info' | 'caution' | 'stop';
  topTitle: string;
}

function loadStored(): StoredAdvisory | null {
  try {
    const raw = localStorage.getItem(ADVISORY_KEY);
    return raw ? (JSON.parse(raw) as StoredAdvisory) : null;
  } catch {
    return null;
  }
}

const ONSETS: Array<{ v: Onset; l: string }> = [
  { v: 'gradual', l: 'Gradual' },
  { v: 'post-session', l: 'Tras una sesión' },
  { v: 'traumatic', l: 'Traumático' },
];
const QUALITIES: Array<{ v: PainQuality; l: string }> = [
  { v: 'dull', l: 'Sordo' },
  { v: 'sharp', l: 'Punzante' },
  { v: 'electric', l: 'Eléctrico' },
  { v: 'stiff', l: 'Rigidez' },
  { v: 'swollen', l: 'Con inflamación' },
];

export default function HealthAdvisorPanel() {
  const [open, setOpen] = useState(false);
  const [zone, setZone] = useState<BodyZone>('knee');
  const [eva, setEva] = useState(4);
  const [onset, setOnset] = useState<Onset>('gradual');
  const [quality, setQuality] = useState<PainQuality>('dull');
  const [flags, setFlags] = useState<{ stiffness: boolean; warmup: boolean; instability: boolean; swelling: boolean; tingling: boolean }>({
    stiffness: true, warmup: true, instability: false, swelling: false, tingling: false,
  });
  const [redFlagsText, setRedFlagsText] = useState('');
  const [result, setResult] = useState<HealthIntelligenceResult | null>(null);
  const [testAnswers, setTestAnswers] = useState<Record<string, boolean>>({});
  const [testsDone, setTestsDone] = useState(false);
  // SSR-safe: el banner se resuelve tras el montaje (localStorage no existe
  // en el server — leerlo en el initializer rompe la hidratación).
  const [stored, setStored] = useState<StoredAdvisory | null>(null);
  useEffect(() => { setStored(loadStored()); }, []);

  // Sesión de HOY (mismas derivaciones que TodayRoutineStack).
  const plannedToday: PlannedExercise[] = useMemo(() => {
    const s = useActiveProgramStore.getState();
    const program = getProgramById(s.programId);
    if (!program?.weeks?.length) return [];
    const ctx = buildProgramCalendar({ startedAt: s.startedAt, postponedDays: s.postponedDays || 0 }, program.durationWeeks ?? 12);
    const weekIdx = Math.min(Math.max(ctx.derivedWeek - 1, 0), program.weeks.length - 1);
    const week = program.weeks[weekIdx];
    const dayIdx = ctx.derivedDayIndex ?? 0;
    const day = week?.days?.[Math.min(dayIdx, (week.days?.length ?? 1) - 1)];
    return (day?.exercises ?? []).map((pres: { displayName?: string; name?: string; exerciseId?: string; id?: string }) => {
      const info = exerciseDatabase[pres.exerciseId ?? ''];
      return {
        name: pres.displayName || pres.name || pres.exerciseId || 'Ejercicio',
        exerciseId: pres.exerciseId || pres.id,
        muscleGroups: (info as { muscles?: { strength?: string[] } } | undefined)?.muscles?.strength ?? [],
      };
    });
  }, []);

  const handleRun = () => {
    const report: PainReport = {
      zone,
      eva,
      onset,
      quality,
      morningStiffness: flags.stiffness,
      improvesWithWarmup: flags.warmup,
      instability: flags.instability,
      swelling: flags.swelling,
      tingling: flags.tingling,
      redFlags: redFlagsText.split(',').map((x) => x.trim()).filter(Boolean),
    };
    const r = runHealthIntelligence(report, plannedToday);
    setResult(r);
    setTestAnswers({});
    setTestsDone(false);
    const worst = r.advisories.reduce<'info' | 'caution' | 'stop'>(
      (acc, a) => (a.severity === 'stop' || (a.severity === 'caution' && acc === 'info') ? a.severity : acc),
      'info',
    );
    const entry: StoredAdvisory = {
      dateIso: new Date().toISOString().slice(0, 10),
      zoneLabel: r.zoneLabel,
      severity: worst,
      topTitle: r.advisories[0]?.title ?? 'Advisory de salud',
    };
    try {
      localStorage.setItem(ADVISORY_KEY, JSON.stringify(entry));
      setStored(entry);
    } catch { /* sin storage → solo en memoria */ }
  };

  const today = new Date().toISOString().slice(0, 10);
  const activeToday = stored?.dateIso === today ? stored : null;

  return (
    <div className="ds-stack-sm">
      {/* Banner del advisory activo de hoy (persistido) */}
      {activeToday && !open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="ds-row-between"
          style={{
            width: '100%', textAlign: 'left', cursor: 'pointer',
            background: activeToday.severity === 'stop' ? 'rgba(255,69,58,0.08)' : 'rgba(255,159,10,0.08)',
            border: `1px solid ${activeToday.severity === 'stop' ? 'var(--danger, #ff453a)' : 'var(--warning, #ff9f0a)'}`,
            borderRadius: 'var(--radius-m)', padding: '10px 14px',
          }}
        >
          <span className="ds-row" style={{ gap: '8px', alignItems: 'center', fontSize: '0.82rem' }}>
            {activeToday.severity === 'stop'
              ? <ShieldAlert size={15} style={{ color: 'var(--danger, #ff453a)' }} />
              : <AlertTriangle size={15} style={{ color: 'var(--warning, #ff9f0a)' }} />}
            <strong>Advisory activo — {activeToday.zoneLabel}:</strong> {activeToday.topTitle}
          </span>
          <ChevronDown size={14} style={{ color: 'var(--text-tertiary)' }} />
        </button>
      )}

      {/* Cabecera desplegable */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="ds-row-between"
        style={{ width: '100%', textAlign: 'left', cursor: 'pointer', background: 'transparent', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-m)', padding: '10px 14px' }}
      >
        <span className="ds-row" style={{ gap: '8px', alignItems: 'center', fontSize: '0.84rem', fontWeight: 700 }}>
          <Activity size={15} style={{ color: 'var(--color-accent-primary)' }} />
          ¿Dolor o molestia? — Asistente de salud
        </span>
        {open ? <ChevronUp size={14} style={{ color: 'var(--text-tertiary)' }} /> : <ChevronDown size={14} style={{ color: 'var(--text-tertiary)' }} />}
      </button>

      {open && (
        <div className="ds-card ds-stack-sm" style={{ padding: 'var(--space-3)' }}>
          {/* Reporte */}
          <div className="ds-row-wrap" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <label className="ds-row" style={{ gap: '6px', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              Zona:
              <select value={zone} onChange={(e) => setZone(e.target.value as BodyZone)} aria-label="Zona del dolor" style={inputStyle}>
                {BODY_ZONES.map((z) => (
                  <option key={z} value={z}>{BODY_ZONE_LABELS_ES[z] ?? z}</option>
                ))}
              </select>
            </label>
            <label className="ds-row" style={{ gap: '6px', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              EVA:
              <input type="number" min={0} max={10} value={eva} onChange={(e) => setEva(Number(e.target.value) || 0)} aria-label="Escala de dolor 0 a 10" style={{ ...inputStyle, width: '64px' }} />
            </label>
            <label className="ds-row" style={{ gap: '6px', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              Inicio:
              <select value={onset} onChange={(e) => setOnset(e.target.value as Onset)} aria-label="Inicio del dolor" style={inputStyle}>
                {ONSETS.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
              </select>
            </label>
            <label className="ds-row" style={{ gap: '6px', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              Tipo:
              <select value={quality} onChange={(e) => setQuality(e.target.value as PainQuality)} aria-label="Tipo de dolor" style={inputStyle}>
                {QUALITIES.map((q) => <option key={q.v} value={q.v}>{q.l}</option>)}
              </select>
            </label>
          </div>

          <div className="ds-row-wrap" style={{ gap: 'var(--space-2)' }}>
            {([
              ['stiffness', 'Rigidez matutina'], ['warmup', 'Mejora al calentar'], ['instability', 'Inestabilidad'],
              ['swelling', 'Inflamación'], ['tingling', 'Hormigueo'],
            ] as const).map(([k, l]) => (
              <label key={k} className="ds-row" style={{ gap: '5px', fontSize: '0.75rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                <input type="checkbox" checked={flags[k]} onChange={(e) => setFlags((f) => ({ ...f, [k]: e.target.checked }))} />
                {l}
              </label>
            ))}
          </div>

          <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            Signos de alarma (coma-separated; p.ej. pérdida de fuerza, dolor nocturno)
            <input value={redFlagsText} onChange={(e) => setRedFlagsText(e.target.value)} placeholder="ninguno" style={inputStyle} />
          </label>

          <div>
            <Button variant="primary" size="sm" onClick={handleRun}>
              <ShieldCheck size={14} /> Analizar contra la sesión de hoy ({plannedToday.length} ejercicios)
            </Button>
          </div>

          {/* Resultado */}
          {result && (
            <div className="ds-stack-sm" style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-2)' }}>
              <span className="ds-eyebrow">Advisory — {result.zoneLabel}</span>
              {result.advisories.map((a) => (
                <div
                  key={a.id}
                  className="ds-stack-sm"
                  style={{
                    gap: '3px',
                    borderLeft: `3px solid ${a.severity === 'stop' ? 'var(--danger, #ff453a)' : a.severity === 'caution' ? 'var(--warning, #ff9f0a)' : 'var(--color-accent-primary)'}`,
                    background: 'rgba(255,255,255,0.02)', padding: '8px 12px', borderRadius: '0 6px 6px 0',
                  }}
                >
                  <span className="ds-row" style={{ gap: '6px', alignItems: 'center', fontSize: '0.8rem', fontWeight: 700 }}>
                    {a.severity === 'stop' ? <ShieldAlert size={13} style={{ color: 'var(--danger, #ff453a)' }} /> : a.severity === 'caution' ? <AlertTriangle size={13} style={{ color: 'var(--warning, #ff9f0a)' }} /> : <Info size={13} style={{ color: 'var(--color-accent-primary)' }} />}
                    {a.title}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{a.body}</span>
                  {a.citation && <span style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>↳ {a.citation}</span>}
                </div>
              ))}

              {/* PRUEBAS GUIADAS DE DIFERENCIACIÓN */}
              {result && !testsDone && (() => {
                const battery = testsForZone(zone);
                const pending = battery.filter((t) => !(t.id in testAnswers));
                const answered = battery.length - pending.length;
                const scored = Object.keys(testAnswers).length > 0
                  ? scoreCandidates(result.triage.candidates, testAnswers)
                  : null;
                return (
                  <div className="ds-stack-sm" style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-2)' }}>
                    <span className="ds-eyebrow">Pruebas guiadas ({answered}/{battery.length}) — afinar la causa</span>
                    {pending.length > 0 ? (
                      <div className="ds-stack-sm" style={{ gap: '6px' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>{pending[0].question}</span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>{pending[0].help}</span>
                        <div className="ds-row" style={{ gap: 'var(--space-1)' }}>
                          <Button variant="primary" size="sm" onClick={() => setTestAnswers((a) => ({ ...a, [pending[0].id]: true }))}>Sí</Button>
                          <Button variant="secondary" size="sm" onClick={() => setTestAnswers((a) => ({ ...a, [pending[0].id]: false }))}>No</Button>
                        </div>
                      </div>
                    ) : (
                      <button type="button" onClick={() => setTestsDone(true)} className="ds-btn ds-btn-sm" style={{ width: 'fit-content' }}>
                        Ver causa más probable
                      </button>
                    )}
                    {scored && scored.length > 0 && (
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                        Provisorio: <strong>{scored[0].structureHint}</strong> ({scored[0].tissue}) — {scored[0].confidencePct}%
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* ESTRUCTURAS ANATÓMICAS DE LA ZONA (grafo completo) */}
              {(() => {
                const st = result.structures;
                const groups: Array<[string, string[]]> = [
                  ['Músculos', st.muscles], ['Tendones', st.tendons], ['Articulaciones', st.joints],
                  ['Ligamentos', st.ligaments], ['Nervios', st.nerves],
                ];
                return (
                  <details style={{ fontSize: '0.74rem' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--text-secondary)' }}>Estructuras de la zona (grafo anatómico)</summary>
                    {groups.map(([label, list]) => (
                      <div key={label} style={{ marginTop: '4px' }}>
                        <strong style={{ color: 'var(--color-accent-primary)' }}>{label} ({list.length}):</strong>{' '}
                        <span style={{ color: 'var(--text-tertiary)' }}>{list.join(', ') || '—'}</span>
                      </div>
                    ))}
                  </details>
                );
              })()}
              {result.affectedExercises.length > 0 && (
                <div className="ds-stack-sm" style={{ gap: '4px' }}>
                  <span className="ds-eyebrow">Ejercicios de hoy que cargan la zona</span>
                  {result.affectedExercises.map((a) => (
                    <div key={a.name} style={{ fontSize: '0.78rem' }}>
                      <strong>{a.name}</strong>{' '}
                      <span style={{ color: 'var(--text-tertiary)' }}>({a.loadedStructures.join(', ')})</span>
                      {a.substitutions.length > 0 && (
                        <span style={{ color: 'var(--color-accent-primary)' }}> → {a.substitutions.map((s) => s.name).join(' / ')}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <span style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>{result.disclaimer}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  background: 'var(--surface-2)', color: 'var(--text-primary)',
  border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-s)',
  padding: '5px 8px', fontSize: '0.78rem',
};
