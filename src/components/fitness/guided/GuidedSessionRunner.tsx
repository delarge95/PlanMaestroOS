// src/components/fitness/guided/GuidedSessionRunner.tsx
// B9 — Modo entrenamiento guiado: pantalla completa set-a-set (mobile-first).
// Se AÑADE sobre la experiencia existente: no reemplaza ni modifica
// TodayRoutineStack ni el tracker. Video READ de exerciseDatabase vía plan;
// resumen final → SessionSnapshot (contrato NUTRI, lib/fitness/sessionExport)
// + persistencia en fitapp_workout_history en la forma real del logger.

import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import YouTubePlayer from '../../ui/YouTubePlayer';
import ErrorBoundary from '../../ErrorBoundary';
import {
  type GuidedPlan,
  type GuidedSessionState,
  type GuidedSetLog,
  createGuidedSession,
  currentStep,
  recordSetAndAdvance,
  skipRest,
  adjustRest,
  tickRest,
  addExtraSetToCurrent,
  finishEarly,
  logKey,
  collectedLogsByExercise,
  sessionExportInputFromState,
  completedWorkoutFromState
} from '../../../lib/fitness/guidedSessionEngine';
import { buildSessionSnapshot } from '../../../lib/fitness/sessionExport';

interface GuidedSessionRunnerProps {
  plan: GuidedPlan;
  onClose: () => void;
}

const fmtClock = (totalSec: number): string => {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

function playRestEndBeep(): void {
  try {
    const AudioCtor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtor) return;
    const audioCtx = new AudioCtor();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.frequency.value = 587.33;
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
  } catch {
    // silencio: el aviso visual siempre está
  }
}

const inputStyle: React.CSSProperties = {
  flex: '1 1 0',
  minWidth: '88px',
  background: 'rgba(0,0,0,0.5)',
  border: '1px solid rgba(255,255,255,0.14)',
  borderRadius: '10px',
  padding: '12px 10px',
  color: '#fff',
  fontSize: '1.15rem',
  fontWeight: 700,
  textAlign: 'center',
  outline: 'none'
};

export default function GuidedSessionRunner({ plan, onClose }: GuidedSessionRunnerProps) {
  const [state, setState] = useState<GuidedSessionState>(() => createGuidedSession(plan));
  const [draft, setDraft] = useState<{ weightKg: string; reps: string; rpe: string }>({ weightKg: '', reps: '', rpe: '' });
  const [savedId, setSavedId] = useState<string | null>(null);
  const [snapshotJson, setSnapshotJson] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const prevPhaseRef = useRef<GuidedSessionState['phase']>('working');

  // Tick del cronómetro de descanso (1s) — solo mientras hay descanso activo.
  useEffect(() => {
    if (state.phase !== 'resting') return;
    const id = window.setInterval(() => setState((prev) => tickRest(prev)), 1000);
    return () => window.clearInterval(id);
  }, [state.phase]);

  // Aviso al terminar el descanso: beep + vibración (el motor ya pasó a working).
  useEffect(() => {
    if (prevPhaseRef.current === 'resting' && state.phase === 'working') {
      playRestEndBeep();
      try { navigator.vibrate?.(300); } catch { /* opcional */ }
    }
    prevPhaseRef.current = state.phase;
  }, [state.phase]);

  // Bloquear scroll de fondo + Escape para salir.
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') requestClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  });

  // Prefill honesto: los valores de la ÚLTIMA serie registrada del ejercicio actual.
  useEffect(() => {
    if (state.phase !== 'working') return;
    let last: GuidedSetLog | undefined;
    for (let i = state.setIdx - 1; i >= 0; i--) {
      const l = state.logs[logKey(state.exIdx, i)];
      if (l) { last = l; break; }
    }
    setDraft({
      weightKg: last?.weightKg != null && last.weightKg > 0 ? String(last.weightKg) : '',
      reps: last?.reps != null && last.reps > 0 ? String(last.reps) : '',
      rpe: last?.rpe != null && last.rpe > 0 ? String(last.rpe) : ''
    });
  }, [state.exIdx, state.setIdx, state.phase]);

  const hasAnyLog = Object.keys(state.logs).length > 0;

  const requestClose = () => {
    if (!hasAnyLog || savedId || window.confirm('¿Salir del modo guiado? Lo registrado sin guardar se perderá.')) {
      onClose();
    }
  };

  const completeSet = () => {
    setState((prev) =>
      recordSetAndAdvance(prev, {
        weightKg: draft.weightKg.trim() === '' ? null : Number(draft.weightKg),
        reps: draft.reps.trim() === '' ? null : parseInt(draft.reps, 10),
        rpe: draft.rpe.trim() === '' ? null : Number(draft.rpe)
      })
    );
  };

  const saveAndBuildSnapshot = () => {
    const nowMs = Date.now();
    let durationMinutes = Math.max(1, Math.round((nowMs - state.startedAtMs) / 60000));
    try {
      const workout = completedWorkoutFromState(state, nowMs);
      const histRaw = localStorage.getItem('fitapp_workout_history');
      const hist: unknown[] = histRaw ? JSON.parse(histRaw) : [];
      localStorage.setItem('fitapp_workout_history', JSON.stringify([workout, ...hist]));
      setSavedId(workout.id);
      durationMinutes = workout.durationMinutes;
    } catch (e) {
      console.error(e);
    }
    const snapshot = buildSessionSnapshot(
      sessionExportInputFromState(state, new Date(nowMs).toISOString().slice(0, 10), durationMinutes),
      new Date(nowMs)
    );
    setSnapshotJson(JSON.stringify(snapshot, null, 2));
  };

  const copySnapshot = async () => {
    try {
      await navigator.clipboard.writeText(snapshotJson);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copia el JSON del snapshot:', snapshotJson);
    }
  };

  // ------------------------------------------------------------------ WORKING
  if (state.phase === 'working') {
    const step = currentStep(state);
    if (!step) return null;
    const { exercise, setNumber, totalSets, effortLabel } = step;

    return (
      <ErrorBoundary>
        <div style={{ position: 'fixed', inset: 0, zIndex: 1100, background: '#0d0d0f', overflowY: 'auto' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto', padding: '16px 16px 32px', display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-primary, #fff)' }}>
            {/* HEADER */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontFamily: 'SF Mono, monospace', fontSize: '0.7rem', fontWeight: 700, color: 'var(--success)', background: 'var(--success-soft)', border: '1px solid rgba(48,209,88,0.3)', padding: '4px 10px', borderRadius: '999px', whiteSpace: 'nowrap' }}>
                EJERCICIO {state.exIdx + 1}/{plan.exercises.length}
              </span>
              <button type="button" onClick={requestClose} title="Salir del modo guiado" style={{ marginLeft: 'auto', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.7)', width: '36px', height: '36px', borderRadius: '10px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={18} />
              </button>
            </div>
            <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 800, lineHeight: 1.25 }}>{exercise.displayName}</h2>

            {/* PROGRESO DE SERIES */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'rgba(255,255,255,0.65)' }}>Serie {setNumber} de {totalSets}</span>
              <div style={{ display: 'flex', gap: '4px', flex: 1 }}>
                {Array.from({ length: totalSets }).map((_, i) => (
                  <div key={i} style={{ flex: 1, height: '6px', borderRadius: '3px', background: i < state.setIdx ? 'var(--success)' : i === state.setIdx ? 'rgba(48,209,88,0.45)' : 'rgba(255,255,255,0.08)' }} />
                ))}
              </div>
            </div>

            {/* VIDEO */}
            <YouTubePlayer
              youtubeLink={exercise.youtubeLink}
              secondaryVideoLink={exercise.secondaryVideoLink}
              exerciseName={exercise.displayName}
            />

            {/* CUES TÉCNICOS */}
            {exercise.techniquePoints.length > 0 && (
              <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.86rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.45 }}>
                {exercise.techniquePoints.map((cue, i) => <li key={i}>{cue}</li>)}
              </ul>
            )}

            {/* OBJETIVO DE LA SERIE */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '5px 10px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 700 }}>Objetivo: {exercise.targetRepsLabel} reps</span>
              <span style={{ background: 'rgba(100,210,255,0.1)', border: '1px solid rgba(100,210,255,0.25)', padding: '5px 10px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 700, color: '#64d2ff' }}>{effortLabel}</span>
              <span style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '5px 10px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 700 }}>Descanso: {fmtClock(exercise.restSec)}</span>
            </div>
            {exercise.notes && (
              <p style={{ margin: 0, fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.03)', padding: '8px 10px', borderRadius: '8px', borderLeft: '2px solid var(--accent)' }}>{exercise.notes}</p>
            )}

            {/* INPUTS DE LA SERIE */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
              <label style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
                Peso (kg)
                <input type="number" inputMode="decimal" step="0.5" min="0" placeholder="0" value={draft.weightKg} onChange={(e) => setDraft((d) => ({ ...d, weightKg: e.target.value }))} style={inputStyle} />
              </label>
              <label style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
                Reps
                <input type="number" inputMode="numeric" min="0" placeholder="10" value={draft.reps} onChange={(e) => setDraft((d) => ({ ...d, reps: e.target.value }))} style={inputStyle} />
              </label>
              <label style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
                RPE
                <input type="number" inputMode="decimal" step="0.5" min="5" max="10" placeholder="—" value={draft.rpe} onChange={(e) => setDraft((d) => ({ ...d, rpe: e.target.value }))} style={inputStyle} />
              </label>
            </div>

            {/* ACCIONES (sticky bottom en móvil) */}
            <div style={{ position: 'sticky', bottom: 0, background: 'linear-gradient(to top, #0d0d0f 70%, transparent)', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button type="button" onClick={completeSet} style={{ background: 'var(--success)', color: '#000', border: 'none', padding: '16px', borderRadius: '14px', fontSize: '1rem', fontWeight: 800, cursor: 'pointer', boxShadow: '0 6px 18px rgba(48,209,88,0.35)' }}>
                ✓ Completar serie {setNumber}
              </button>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button type="button" onClick={() => setState((prev) => addExtraSetToCurrent(prev))} style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)', padding: '10px', borderRadius: '10px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}>
                  + Añadir serie extra
                </button>
                <button type="button" onClick={() => (hasAnyLog ? setState((prev) => finishEarly(prev)) : onClose())} style={{ flex: 1, background: 'transparent', border: '1px solid rgba(255,69,58,0.35)', color: 'var(--danger)', padding: '10px', borderRadius: '10px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}>
                  {hasAnyLog ? 'Terminar aquí' : 'Cancelar'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </ErrorBoundary>
    );
  }

  // ------------------------------------------------------------------ RESTING
  if (state.phase === 'resting') {
    const nextIsSameExercise = state.setIdx > 0;
    const nextEx = state.plan.exercises[state.exIdx];
    const pct = state.restTotalSec > 0 ? 1 - state.restRemainingSec / state.restTotalSec : 1;

    return (
      <ErrorBoundary>
        <div style={{ position: 'fixed', inset: 0, zIndex: 1100, background: '#0d0d0f', overflowY: 'auto' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto', padding: '24px 16px 32px', minHeight: '100%', display: 'flex', flexDirection: 'column', gap: '18px', justifyContent: 'center', color: '#fff' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#64d2ff', marginBottom: '8px' }}>Descanso en curso</div>
              <div style={{ fontFamily: 'SF Mono, monospace', fontSize: 'clamp(3.4rem, 17vw, 5.5rem)', fontWeight: 800, fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>{fmtClock(state.restRemainingSec)}</div>
              <div style={{ height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)', margin: '18px auto 0', maxWidth: '420px', overflow: 'hidden' }}>
                <div style={{ width: `${Math.min(100, Math.max(0, pct * 100))}%`, height: '100%', background: '#64d2ff', transition: 'width 1s linear' }} />
              </div>
            </div>

            <p style={{ textAlign: 'center', margin: '4px 0 0', fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>
              Siguiente:{' '}
              <strong style={{ color: '#fff' }}>
                {nextIsSameExercise ? `Serie ${state.setIdx + 1} de ${nextEx?.displayName}` : `${nextEx?.displayName} (serie 1)`}
              </strong>
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', maxWidth: '420px', width: '100%', margin: '8px auto 0' }}>
              <button type="button" onClick={() => setState((prev) => adjustRest(prev, -15))} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', color: '#fff', padding: '14px', borderRadius: '12px', fontSize: '0.9rem', fontWeight: 800, cursor: 'pointer' }}>
                −15 s
              </button>
              <button type="button" onClick={() => setState((prev) => adjustRest(prev, 30))} style={{ background: 'rgba(100,210,255,0.12)', border: '1px solid rgba(100,210,255,0.35)', color: '#64d2ff', padding: '14px', borderRadius: '12px', fontSize: '0.9rem', fontWeight: 800, cursor: 'pointer' }}>
                +30 s
              </button>
              <button type="button" onClick={() => setState((prev) => skipRest(prev))} style={{ background: 'var(--success)', border: 'none', color: '#000', padding: '14px', borderRadius: '12px', fontSize: '0.9rem', fontWeight: 800, cursor: 'pointer' }}>
                Saltar ▸
              </button>
            </div>

            <button type="button" onClick={() => setState((prev) => finishEarly(prev))} style={{ alignSelf: 'center', background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}>
              Terminar sesión aquí
            </button>
          </div>
        </div>
      </ErrorBoundary>
    );
  }

  // ----------------------------------------------------------------- FINISHED
  const collected = collectedLogsByExercise(state);
  const totalSetsLogged = collected.reduce((acc, c) => acc + c.sets.filter((s) => (Number(s.reps) || 0) > 0 || (Number(s.weightKg) || 0) > 0).length, 0);
  const totalVolume = collected.reduce(
    (acc, c) => acc + c.sets.reduce((a, s) => a + (Number(s.weightKg) || 0) * (Number(s.reps) || 0), 0),
    0
  );
  const elapsedMin = Math.max(1, Math.round((Date.now() - state.startedAtMs) / 60000));

  return (
    <ErrorBoundary>
      <div style={{ position: 'fixed', inset: 0, zIndex: 1100, background: '#0d0d0f', overflowY: 'auto' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '24px 16px 40px', display: 'flex', flexDirection: 'column', gap: '16px', color: '#fff' }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800 }}>
            🏁 Sesión completada{totalSetsLogged > 0 ? `: ${totalSetsLogged} series` : ''}
          </h2>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
            {plan.programTitle} — {plan.dayName} · Semana {plan.weekNumber} · ~{elapsedMin} min
            {totalVolume > 0 ? ` · Volumen: ${Math.round(totalVolume)} kg` : ''}
          </p>

          {collected.length === 0 ? (
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>
              No registaste ninguna serie. No se guardará nada (sin datos no hay sesión).
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {collected.map(({ exercise, sets }) => (
                <div key={`${exercise.prescriptionId}-${exercise.exerciseKey}`} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '12px', padding: '12px 14px' }}>
                  <strong style={{ fontSize: '0.92rem' }}>{exercise.displayName}</strong>
                  <div style={{ marginTop: '6px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {sets.map((s, i) => {
                      const w = Number(s.weightKg) || 0;
                      const r = Number(s.reps) || 0;
                      return (
                        <span key={i} style={{ fontFamily: 'SF Mono, monospace', fontSize: '0.74rem', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: '6px', color: 'rgba(255,255,255,0.75)' }}>
                          S{i + 1}: {w > 0 ? `${w}kg × ` : ''}{r > 0 ? `${r} reps` : 'por tiempo'}{s.rpe ? ` @ RPE ${s.rpe}` : ''}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {!savedId && collected.length > 0 && (
            <button type="button" onClick={saveAndBuildSnapshot} style={{ background: 'var(--success)', color: '#000', border: 'none', padding: '16px', borderRadius: '14px', fontSize: '1rem', fontWeight: 800, cursor: 'pointer', boxShadow: '0 6px 18px rgba(48,209,88,0.35)' }}>
              Guardar sesión y generar snapshot NUTRI
            </button>
          )}

          {savedId && (
            <>
              <div style={{ background: 'var(--success-soft)', border: '1px solid rgba(48,209,88,0.35)', borderRadius: '12px', padding: '12px 14px', fontSize: '0.85rem', color: 'var(--success)', fontWeight: 700 }}>
                ✓ Guardada en Progreso (fitapp_workout_history). Snapshot de sesión listo para AG-NUTRI:
              </div>
              <pre style={{ margin: 0, maxHeight: '260px', overflow: 'auto', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px', fontSize: '0.72rem', lineHeight: 1.5, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{snapshotJson}</pre>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="button" onClick={copySnapshot} style={{ flex: 1, background: 'rgba(100,210,255,0.12)', border: '1px solid rgba(100,210,255,0.35)', color: '#64d2ff', padding: '12px', borderRadius: '12px', fontSize: '0.88rem', fontWeight: 800, cursor: 'pointer' }}>
                  {copied ? '✓ Copiado' : 'Copiar JSON'}
                </button>
                <button type="button" onClick={onClose} style={{ flex: 1, background: 'var(--color-state-done, var(--success))', border: 'none', color: '#000', padding: '12px', borderRadius: '12px', fontSize: '0.88rem', fontWeight: 800, cursor: 'pointer' }}>
                  Cerrar
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}
