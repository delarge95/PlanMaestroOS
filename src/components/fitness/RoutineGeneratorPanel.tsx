// src/components/fitness/RoutineGeneratorPanel.tsx — Generador de rutinas por
// objetivo (UI del motor routineGenerator). Peso corporal persistido para kcal.

import React, { useEffect, useState } from 'react';
import { generateRoutine, activateGeneratedRoutine, type RoutineGoal, type EquipmentFilter, type GeneratedRoutine } from '../../lib/fitness/routineGenerator';
import { estimateSessionKcal } from '../../lib/fitness/exerciseKcal';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import { getProgramById } from '../../data/fitness/programs';
import Button from '../ui/Button';
import { Dumbbell, Wand2, CheckCircle2, Flame } from 'lucide-react';

const WEIGHT_KEY = 'fit-bodyweight-kg';
const GOALS: Array<{ v: RoutineGoal; l: string }> = [
  { v: 'hypertrophy', l: 'Hipertrofia' },
  { v: 'strength', l: 'Fuerza' },
  { v: 'endurance-health', l: 'Salud / resistencia' },
];
const EQUIPMENT: Array<{ v: EquipmentFilter; l: string }> = [
  { v: 'calisthenics', l: 'Calistenia' },
  { v: 'gym', l: 'Gimnasio' },
  { v: 'mixed', l: 'Mixto' },
];

export default function RoutineGeneratorPanel() {
  const [open, setOpen] = useState(false);
  const [goal, setGoal] = useState<RoutineGoal>('hypertrophy');
  const [days, setDays] = useState<2 | 3 | 4 | 5>(3);
  const [equipment, setEquipment] = useState<EquipmentFilter>('mixed');
  const [minutes, setMinutes] = useState<30 | 45 | 60 | 75>(45);
  const [emphasis, setEmphasis] = useState('');
  const [avoid, setAvoid] = useState('');
  // SSR-safe: peso cargado tras montar (evita hydration mismatch).
  const [weight, setWeight] = useState<string>('');
  useEffect(() => {
    try { setWeight(localStorage.getItem(WEIGHT_KEY) ?? ''); } catch { /* noop */ }
  }, []);
  const [preview, setPreview] = useState<GeneratedRoutine | null>(null);
  const [activated, setActivated] = useState(false);

  const persistWeight = (v: string) => {
    setWeight(v);
    try { localStorage.setItem(WEIGHT_KEY, v); } catch { /* noop */ }
  };

  const handleGenerate = () => {
    setActivated(false);
    setPreview(generateRoutine({
      goal, daysPerWeek: days, equipment, minutesPerSession: minutes,
      emphasis: emphasis.split(',').map((x) => x.trim()).filter(Boolean),
      avoidZones: avoid.split(',').map((x) => x.trim()).filter(Boolean),
    }));
  };

  const handleActivate = () => {
    if (!preview) return;
    const { programId } = activateGeneratedRoutine(preview);
    const s = useActiveProgramStore.getState();
    const program = getProgramById(programId);
    s.setWeek(1);
    // Resetear arranque a HOY para que el calendario derive desde hoy.
    useActiveProgramStore.setState({ programId, currentWeek: 1, startedAt: new Date().toISOString(), postponedDays: 0, currentDayId: program.weeks?.[0]?.days?.[0]?.id ?? '' });
    setActivated(true);
    setTimeout(() => setActivated(false), 3000);
  };

  const kcal = preview && Number(weight) > 0
    ? estimateSessionKcal(
        preview.days[0].exercises.map((e) => ({ series: e.sets, reps: parseInt(e.repRange) || 8, rpe: 10 - e.rir, muscleGroups: e.muscleGroups })),
        Number(weight),
      )
    : null;

  return (
    <div className="ds-stack-sm">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="ds-row-between"
        style={{ width: '100%', textAlign: 'left', cursor: 'pointer', background: 'transparent', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-m)', padding: '10px 14px' }}
      >
        <span className="ds-row" style={{ gap: '8px', alignItems: 'center', fontSize: 'var(--fs-meta)', fontWeight: 700 }}>
          <Wand2 size={15} style={{ color: 'var(--accent)' }} />
          Generar rutina por objetivo
        </span>
        <span style={{ fontSize: 'var(--fs-eyebrow)', color: 'var(--text-tertiary)' }}>{open ? 'cerrar' : '¿qué buscas? arma tu semana'}</span>
      </button>

      {open && (
        <div className="ds-card ds-stack-sm" style={{ padding: 'var(--space-3)' }}>
          <div className="ds-row-wrap" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <label style={lbl}>Objetivo:
              <select value={goal} onChange={(e) => setGoal(e.target.value as RoutineGoal)} style={sel}>{GOALS.map((g) => <option key={g.v} value={g.v}>{g.l}</option>)}</select>
            </label>
            <label style={lbl}>Días:
              <select value={days} onChange={(e) => setDays(Number(e.target.value) as 2 | 3 | 4 | 5)} style={sel}>{[2, 3, 4, 5].map((d) => <option key={d} value={d}>{d}/sem</option>)}</select>
            </label>
            <label style={lbl}>Equipo:
              <select value={equipment} onChange={(e) => setEquipment(e.target.value as EquipmentFilter)} style={sel}>{EQUIPMENT.map((q) => <option key={q.v} value={q.v}>{q.l}</option>)}</select>
            </label>
            <label style={lbl}>Min/sesión:
              <select value={minutes} onChange={(e) => setMinutes(Number(e.target.value) as 30 | 45 | 60 | 75)} style={sel}>{[30, 45, 60, 75].map((m) => <option key={m} value={m}>{m}</option>)}</select>
            </label>
            <label style={lbl}>Peso (kg, para kcal):
              <input value={weight} onChange={(e) => persistWeight(e.target.value)} placeholder="—" style={{ ...sel, width: '64px' }} />
            </label>
          </div>
          <div className="ds-row-wrap" style={{ gap: 'var(--space-2)' }}>
            <label style={{ ...lbl, flex: 1 }}>Énfasis (coma: chest, back…):
              <input value={emphasis} onChange={(e) => setEmphasis(e.target.value)} placeholder="opcional" style={sel} />
            </label>
            <label style={{ ...lbl, flex: 1 }}>Zonas a evitar (del advisory):
              <input value={avoid} onChange={(e) => setAvoid(e.target.value)} placeholder="p.ej. knee" style={sel} />
            </label>
          </div>
          <Button variant="primary" size="sm" onClick={handleGenerate}>
            <Dumbbell size={14} /> Generar semana
          </Button>

          {preview && (
            <div className="ds-stack-sm" style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-2)' }}>
              <div className="ds-row-between">
                <span className="ds-eyebrow">{preview.days.length} días · {preview.weeklyHardSets} series duras/semana</span>
                {kcal && (
                  <span className="ds-row" style={{ gap: '4px', fontSize: 'var(--fs-eyebrow)', color: 'var(--text-secondary)' }}>
                    <Flame size={12} style={{ color: 'var(--warning)' }} /> ≈{kcal.kcal} kcal/sesión ({kcal.minutes} min) — MET×RPE×músculo
                  </span>
                )}
              </div>
              {preview.days.map((d) => (
                <div key={d.name} style={{ fontSize: 'var(--fs-meta)' }}>
                  <strong>{d.name}</strong> <span style={{ color: 'var(--text-tertiary)' }}>— {d.focus}</span>
                  <div style={{ color: 'var(--text-secondary)', marginTop: '2px' }}>
                    {d.exercises.map((e) => `${e.name} ${e.sets}×${e.repRange} (RIR ${e.rir})`).join(' · ')}
                  </div>
                </div>
              ))}
              <div style={{ fontSize: 'var(--fs-eyebrow)', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>
                {preview.citations.join(' · ')}
              </div>
              <Button variant={activated ? 'ghost' : 'secondary'} size="sm" onClick={handleActivate}>
                {activated ? <CheckCircle2 size={14} /> : undefined} {activated ? 'Activada — tu Hoy ya la muestra' : 'Activar como mi rutina'}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const lbl: React.CSSProperties = { display: 'flex', gap: '6px', alignItems: 'center', fontSize: 'var(--fs-eyebrow)', color: 'var(--text-secondary)' };
const sel: React.CSSProperties = { background: 'var(--surface-2)', color: 'var(--text-primary)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-s)', padding: '5px 8px', fontSize: 'var(--fs-meta)' };
