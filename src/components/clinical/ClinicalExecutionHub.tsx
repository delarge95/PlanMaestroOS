import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import styles from './ClinicalExecutionHub.module.css';
import {
  useClinicalStore,
  migrateLegacyLocalStorage,
  formatDateLabel
} from '../../data/clinical/clinicalStore';

export default function ClinicalExecutionHub() {
  const [activeTab, setActiveTab] = useState<'checkin' | 'exposure' | 'rescue' | 'sleep'>('checkin');

  const biofeedback = useClinicalStore((s) => s.biofeedback);
  const exposures = useClinicalStore((s) => s.exposures);
  const saveBioFeedback = useClinicalStore((s) => s.saveBioFeedback);
  const toggleExposureCompleted = useClinicalStore((s) => s.toggleExposureCompleted);
  const updateExposureFieldStore = useClinicalStore((s) => s.updateExposureField);

  // 1. Bio-Feedback Draft State (valores del formulario del día)
  const [energy, setEnergy] = useState(7);
  const [anxiety, setAnxiety] = useState(4);
  const [pain, setPain] = useState(2);
  const [sleepHours, setSleepHours] = useState(7.5);

  // 2. Rumination Timer
  const [activeRuminationTimer, setActiveRuminationTimer] = useState<number | null>(null);
  const [isRuminationActive, setIsRuminationActive] = useState(false);

  // 3. Inertia Rescue State
  const [rescueTimer, setRescueTimer] = useState<number | null>(null);
  const [isRescueTimerActive, setIsRescueTimerActive] = useState(false);
  const [badVersionDraft, setBadVersionDraft] = useState('');

  // 4. CBT-I Sleep Hygiene State
  const [screensOff21, setScreensOff21] = useState(false);
  const [roomCold, setRoomCold] = useState(false);
  const [relaxingAudio, setRelaxingAudio] = useState(false);

  // Notifications
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  useEffect(() => {
    const result = migrateLegacyLocalStorage();
    if (result.biofeedbackMigrated > 0 || result.exposuresMigrated > 0 || result.biofeedbackSkipped > 0) {
      showToast(
        `↩️ Migración: ${result.biofeedbackMigrated} registros de bio-feedback y ${result.exposuresMigrated} exposiciones importados` +
        (result.biofeedbackSkipped > 0 ? ` (${result.biofeedbackSkipped} sin fecha legible, omitidos)` : '') + '.'
      );
    }
  }, []);

  // Rumination Timer Countdown (10 min = 600s)
  useEffect(() => {
    let interval: any = null;
    if (isRuminationActive && activeRuminationTimer !== null && activeRuminationTimer > 0) {
      interval = setInterval(() => {
        setActiveRuminationTimer((prev) => (prev !== null && prev > 1 ? prev - 1 : 0));
      }, 1000);
    } else if (activeRuminationTimer === 0 && isRuminationActive) {
      setIsRuminationActive(false);
      showToast('🛑 LÍMITE DE RUMIACIÓN ALCANZADO (10 min). La evaluación ha terminado. Pasa a la siguiente actividad.');
    }
    return () => clearInterval(interval);
  }, [isRuminationActive, activeRuminationTimer]);

  // Inertia Rescue Timer Countdown (10 min = 600s)
  useEffect(() => {
    let interval: any = null;
    if (isRescueTimerActive && rescueTimer !== null && rescueTimer > 0) {
      interval = setInterval(() => {
        setRescueTimer((prev) => (prev !== null && prev > 1 ? prev - 1 : 0));
      }, 1000);
    } else if (rescueTimer === 0 && isRescueTimerActive) {
      setIsRescueTimerActive(false);
      showToast('🎉 ¡10 MINUTOS COMPLETADOS! Has vencido la inercia inicial. Puedes continuar o parar con la Versión Mala.');
    }
    return () => clearInterval(interval);
  }, [isRescueTimerActive, rescueTimer]);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 4000);
  };

  const handleSaveBioFeedback = () => {
    saveBioFeedback({ energy, anxiety, pain, sleepHours });
    showToast('✓ Evaluacion de Estado Diario guardada correctamente.');
  };

  const handleToggleExposure = (id: string) => {
    const nowCompleted = toggleExposureCompleted(id);
    if (nowCompleted) {
      startRuminationTimer();
    }
  };

  const startRuminationTimer = () => {
    setActiveRuminationTimer(600); // 10 minutes limit
    setIsRuminationActive(true);
    showToast('⏱️ Temporizador de Límite de Rumiación iniciado (10 min). Al finalizar debes cerrar la evaluación.');
  };

  const start10MinRescueTimer = () => {
    setRescueTimer(600); // 10 minutes
    setIsRescueTimerActive(true);
    showToast('🚀 Protocolo de 10 Minutos iniciado. Solo enfócate en escribir sin juzgar la calidad.');
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <ErrorBoundary>
      <div className={styles.container}>
        {/* TOAST NOTIFICATION */}
        {toastMsg && (
          <div className={styles.toast}>
            {toastMsg}
          </div>
        )}

        {/* HEADER */}
        <div className="ds-row-between" style={{ flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="ds-eyebrow">
              SUITE DE TAREAS CLÍNICAS INTERACTIVAS • TDAH & ANSIEDAD SOCIAL
            </span>
            <h3 className="ds-h3" style={{ margin: '2px 0 0' }}>
              Prótesis Ejecutiva & Regulación Emocional
            </h3>
          </div>

          {/* TAB NAVIGATION */}
          <div className="ds-row-wrap" style={{ gap: '8px' }}>
            <button
              type="button"
              onClick={() => setActiveTab('checkin')}
              className="ds-chip"
              data-active={activeTab === 'checkin'}
            >
              📊 Estado Diario
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('exposure')}
              className="ds-chip"
              data-active={activeTab === 'exposure'}
            >
              🎯 Exposición Social CBT
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('rescue')}
              className="ds-chip"
              data-active={activeTab === 'rescue'}
            >
              🚨 Rescate 10 min TDAH
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('sleep')}
              className="ds-chip"
              data-active={activeTab === 'sleep'}
            >
              🌙 Sueño CBT-I
            </button>
          </div>
        </div>

        {/* TAB 1: BIO-FEEDBACK DAILY CHECK-IN */}
        {activeTab === 'checkin' && (
          <div className="ds-stack" style={{ gap: '18px' }}>
            <div className="ds-card ds-stack" style={{ borderRadius: '18px', padding: '20px' }}>
              <strong className="ds-label">
                Registro Subjetivo de Estado Físico & Emocional del Día:
              </strong>

              <div className="ds-grid">
                {/* ENERGY */}
                <div className="ds-card ds-stack-sm" style={{ padding: '14px' }}>
                  <div className="ds-row-between" style={{ marginBottom: '8px' }}>
                    <span className="ds-eyebrow" style={{ color: 'var(--color-accent-primary)' }}>⚡ Nivel de Energía</span>
                    <strong className="ds-label" style={{ color: 'var(--color-accent-primary)' }}>{energy}/10</strong>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={energy}
                    onChange={(e) => setEnergy(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--color-accent-primary)' }}
                  />
                </div>

                {/* ANXIETY */}
                <div className="ds-card ds-stack-sm" style={{ padding: '14px' }}>
                  <div className="ds-row-between" style={{ marginBottom: '8px' }}>
                    <span className="ds-eyebrow" style={{ color: '#d946ef' }}>🧠 Ansiedad / Activación</span>
                    <strong className="ds-label" style={{ color: '#d946ef' }}>{anxiety}/10</strong>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={anxiety}
                    onChange={(e) => setAnxiety(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: '#d946ef' }}
                  />
                </div>

                {/* PAIN / TENDINOPATHY */}
                <div className="ds-card ds-stack-sm" style={{ padding: '14px' }}>
                  <div className="ds-row-between" style={{ marginBottom: '8px' }}>
                    <span className="ds-eyebrow" style={{ color: 'var(--color-accent-danger)' }}>🦴 Molestia Articular / Tendón</span>
                    <strong className="ds-label" style={{ color: 'var(--color-accent-danger)' }}>{pain}/10</strong>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={pain}
                    onChange={(e) => setPain(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--color-accent-danger)' }}
                  />
                </div>

                {/* SLEEP HOURS */}
                <div className="ds-card ds-stack-sm" style={{ padding: '14px' }}>
                  <div className="ds-row-between" style={{ marginBottom: '8px' }}>
                    <span className="ds-eyebrow" style={{ color: 'var(--color-state-done)' }}>😴 Horas de Sueño</span>
                    <strong className="ds-label" style={{ color: 'var(--color-state-done)' }}>{sleepHours}h</strong>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="10"
                    step="0.5"
                    value={sleepHours}
                    onChange={(e) => setSleepHours(parseFloat(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--color-state-done)' }}
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleSaveBioFeedback}
                className="ds-btn ds-btn-primary"
                style={{ width: '100%', marginTop: '8px', padding: '12px' }}
              >
                ✓ Registrar Evaluación de Hoy
              </button>
            </div>

            {/* HISTORIAL RECIENTE */}
            {biofeedback.length > 0 && (
              <div className="ds-card ds-stack-sm" style={{ padding: '16px' }}>
                <strong className="ds-eyebrow">
                  REGISTROS RECIENTES:
                </strong>
                <div className="ds-grid" style={{ gap: '10px', marginTop: '10px' }}>
                  {biofeedback.map((log, idx) => (
                    <div key={idx} className="ds-card ds-stack-sm" style={{ padding: '10px', gap: '4px' }}>
                      <span className="ds-eyebrow" style={{ color: '#d946ef' }}>{formatDateLabel(log.dateIso)}</span>
                      <div className="ds-row-between ds-caption">
                        <span>⚡ {log.energy}/10</span>
                        <span>🧠 Ans: {log.anxiety}/10</span>
                      </div>
                      <div className="ds-row-between ds-caption">
                        <span>🦴 Pain: {log.pain}/10</span>
                        <span>😴 {log.sleepHours}h</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SOCIAL ANXIETY EXPOSURE LADDER */}
        {activeTab === 'exposure' && (
          <div className="ds-stack" style={{ gap: '16px' }}>
            <div className="ds-card ds-stack" style={{ borderRadius: '18px', padding: '20px' }}>
              <div className="ds-row-between" style={{ flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <strong className="ds-label">Jerarquía de Exposición Graduada a Ansiedad Social / Desempeño:</strong>
                  <p className="ds-caption" style={{ margin: '2px 0 0' }}>
                    Registra la ansiedad previa (0-10) y posterior (0-10). Al marcar como hecha se activa el límite de rumiación de 10 min.
                  </p>
                </div>

                {isRuminationActive && activeRuminationTimer !== null && (
                  <div className="ds-card ds-stack-sm" style={{ padding: '8px 14px', borderRadius: '12px', textAlign: 'center', borderColor: 'var(--color-accent-danger)' }}>
                    <span className="ds-eyebrow" style={{ color: 'var(--color-accent-danger)' }}>LÍMITE DE RUMIACIÓN POST-EVENTO</span>
                    <strong className="ds-h3" style={{ margin: 0, display: 'block' }}>{formatTime(activeRuminationTimer)}</strong>
                  </div>
                )}
              </div>

              <div className="ds-stack-sm" style={{ gap: '12px' }}>
                {exposures.map((exp) => (
                  <div
                    key={exp.id}
                    className="ds-card ds-stack-sm"
                    style={{
                      background: exp.completed ? 'rgba(16,185,129,0.06)' : undefined,
                      borderColor: exp.completed ? 'rgba(16,185,129,0.3)' : undefined,
                      borderRadius: '14px',
                      padding: '16px'
                    }}
                  >
                    <div className="ds-row-between" style={{ alignItems: 'flex-start', gap: '12px' }}>
                      <div>
                        <div className="ds-row" style={{ gap: '8px', alignItems: 'center' }}>
                          <span className="ds-badge ds-badge-accent">
                            NIVEL {exp.hierarchyLevel.toUpperCase()}
                          </span>
                          <strong className="ds-label">{exp.title}</strong>
                        </div>
                        <p className="ds-caption" style={{ margin: '4px 0 0' }}>{exp.description}</p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleToggleExposure(exp.id)}
                        className={exp.completed ? 'ds-btn ds-btn-secondary ds-btn-sm' : 'ds-btn ds-btn-primary ds-btn-sm'}
                      >
                        {exp.completed ? '✓ Ejecutado' : '○ Registrar Exposición'}
                      </button>
                    </div>

                    <div className="ds-row-wrap ds-caption" style={{ gap: '16px', alignItems: 'center' }}>
                      <label className="ds-row ds-micro" style={{ gap: '6px' }}>
                        Ansiedad Pre-Evento (0-10):
                        <input
                          type="number"
                          max="10"
                          min="0"
                          value={exp.preAnxiety}
                          onChange={(e) => updateExposureFieldStore(exp.id, 'preAnxiety', parseInt(e.target.value) || 0)}
                          style={{ width: '45px', textAlign: 'center' }}
                        />
                      </label>

                      <label className="ds-row ds-micro" style={{ gap: '6px' }}>
                        Ansiedad Post-Evento (0-10):
                        <input
                          type="number"
                          max="10"
                          min="0"
                          value={exp.postAnxiety}
                          onChange={(e) => updateExposureFieldStore(exp.id, 'postAnxiety', parseInt(e.target.value) || 0)}
                          style={{ width: '45px', textAlign: 'center' }}
                        />
                      </label>

                      <button
                        type="button"
                        onClick={startRuminationTimer}
                        className="ds-btn ds-btn-secondary ds-btn-sm"
                        style={{ color: 'var(--color-accent-danger)', fontSize: '0.72rem' }}
                      >
                        ⏱️ Iniciar Límite de Rumiación (10 min)
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: TDAH INERTIA RESCUE & "VERSIÓN MALA" */}
        {activeTab === 'rescue' && (
          <div className="ds-stack" style={{ gap: '16px' }}>
            <div className="ds-card ds-stack" style={{ borderRadius: '18px', padding: '20px' }}>
              <div className="ds-row-between" style={{ flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <span className="ds-eyebrow" style={{ color: 'var(--color-accent-danger)' }}>
                    PROTOCOLO CLÍNICO DE DESBLOQUEO INICIAL
                  </span>
                  <h4 className="ds-h3" style={{ margin: '2px 0 0' }}>
                    Salida de Emergencia: Entrada de 10 Minutos & Versión Mala
                  </h4>
                </div>

                {isRescueTimerActive && rescueTimer !== null && (
                  <div className="ds-card ds-stack-sm" style={{ padding: '8px 16px', borderRadius: '12px', textAlign: 'center', borderColor: 'var(--color-state-done)' }}>
                    <span className="ds-eyebrow" style={{ color: 'var(--color-state-done)' }}>TEMPORIZADOR DE ENTRADA</span>
                    <strong className="ds-h3" style={{ margin: 0, display: 'block' }}>{formatTime(rescueTimer)}</strong>
                  </div>
                )}
              </div>

              <div className="ds-row-wrap" style={{ gap: '10px' }}>
                <button
                  type="button"
                  onClick={start10MinRescueTimer}
                  className="ds-btn ds-btn-primary"
                  style={{ padding: '10px 20px' }}
                >
                  🚀 Activar Entrada de 10 Minutos Sin Compromiso
                </button>
              </div>

              <div className="ds-stack-sm" style={{ gap: '8px' }}>
                <label className="ds-eyebrow" style={{ color: 'var(--color-accent-danger)' }}>
                  Escribe aquí una "Versión Mala" o 3 Bullets Caóticos sin Juzgar:
                </label>
                <textarea
                  rows={4}
                  value={badVersionDraft}
                  onChange={(e) => setBadVersionDraft(e.target.value)}
                  placeholder="Escribe el borrador más imperfecto posible. No corrijas ortografía, no organices estructura. Solo suelta la primera idea..."
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    padding: '12px',
                    fontSize: '0.85rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div className="ds-card ds-caption" style={{ borderRadius: '12px', padding: '12px', lineHeight: 1.4 }}>
                💡 <strong style={{ color: 'var(--color-text-primary)' }}>Criterio de corte:</strong> "Suficientemente terminado" es el único estándar requerido hoy. Un borrador feo guardado supera a la parálisis perfecta.
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CBT-I SLEEP HYGIENE CHECKLIST */}
        {activeTab === 'sleep' && (
          <div className="ds-stack" style={{ gap: '16px' }}>
            <div className="ds-card ds-stack" style={{ borderRadius: '18px', padding: '20px' }}>
              <div>
                <span className="ds-eyebrow" style={{ color: 'var(--color-state-done)' }}>
                  HIGIENE DE SUEÑO & CONTROL DE ESTÍMULOS CBT-I
                </span>
                <h4 className="ds-h3" style={{ margin: '2px 0 0' }}>
                  Checklist Nocturna de Desconexión (21:00)
                </h4>
              </div>

              <div className="ds-stack-sm" style={{ gap: '10px' }}>
                <label className="ds-card ds-row" style={{ gap: '10px', padding: '12px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={screensOff21}
                    onChange={(e) => setScreensOff21(e.target.checked)}
                    style={{ width: '18px', height: '18px', accentColor: 'var(--color-state-done)' }}
                  />
                  <span className="ds-caption" style={{ color: screensOff21 ? 'var(--color-state-done)' : 'var(--color-text-primary)' }}>
                    📱 <strong>21:00 Pantallas Fuera:</strong> Teléfono guardado fuera del alcance de la cama.
                  </span>
                </label>

                <label className="ds-card ds-row" style={{ gap: '10px', padding: '12px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={roomCold}
                    onChange={(e) => setRoomCold(e.target.checked)}
                    style={{ width: '18px', height: '18px', accentColor: 'var(--color-state-done)' }}
                  />
                  <span className="ds-caption" style={{ color: roomCold ? 'var(--color-state-done)' : 'var(--color-text-primary)' }}>
                    ❄️ <strong>Temperatura & Oscuridad:</strong> Habitación ventilada y oscura.
                  </span>
                </label>

                <label className="ds-card ds-row" style={{ gap: '10px', padding: '12px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={relaxingAudio}
                    onChange={(e) => setRelaxingAudio(e.target.checked)}
                    style={{ width: '18px', height: '18px', accentColor: 'var(--color-state-done)' }}
                  />
                  <span className="ds-caption" style={{ color: relaxingAudio ? 'var(--color-state-done)' : 'var(--color-text-primary)' }}>
                    🎧 <strong>Audio de Regulación:</strong> Ruido blanco o audio de distensión sin contenido cognitivo activo.
                  </span>
                </label>
              </div>

              <div className="ds-card ds-caption" style={{ borderRadius: '12px', padding: '12px', lineHeight: 1.4 }}>
                😴 <strong style={{ color: 'var(--color-state-done)' }}>Recordatorio Terapéutico:</strong> El descanso y el sueño no son premios condicionados al rendimiento. Son un requisito fisiológico para la regulación ejecutiva de mañana.
              </div>
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
