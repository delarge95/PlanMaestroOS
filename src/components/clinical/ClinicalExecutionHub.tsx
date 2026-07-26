import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';

interface BioFeedbackLog {
  date: string;
  energy: number;
  anxiety: number;
  pain: number;
  sleepHours: number;
}

interface ExposureTask {
  id: string;
  title: string;
  hierarchyLevel: 'Baja' | 'Media' | 'Alta';
  description: string;
  preAnxiety: number;
  postAnxiety: number;
  completed: boolean;
  notes: string;
}

const DEFAULT_EXPOSURES: ExposureTask[] = [
  {
    id: 'exp_1',
    title: 'Sustentación de 3 Ideas Principales en Llamada / Reunión',
    hierarchyLevel: 'Baja',
    description: 'Presentar 3 conceptos estructurados sin disculparse por pausas ni justificar el silencio.',
    preAnxiety: 5,
    postAnxiety: 3,
    completed: false,
    notes: ''
  },
  {
    id: 'exp_2',
    title: 'Demostración de Caso de Estudio TwinSight a Reclutador / Colega',
    hierarchyLevel: 'Media',
    description: 'Mostrar demo interactiva o capturas de TwinSight enfocándote en valor técnico sin subestimar el trabajo.',
    preAnxiety: 7,
    postAnxiety: 4,
    completed: false,
    notes: ''
  },
  {
    id: 'exp_3',
    title: 'Solicitud de Feedback Técnico Directo sin Actitud Defensiva',
    hierarchyLevel: 'Alta',
    description: 'Recibir críticas técnicas sobre código o portafolio aceptando observaciones con apertura.',
    preAnxiety: 8,
    postAnxiety: 5,
    completed: false,
    notes: ''
  }
];

export default function ClinicalExecutionHub() {
  const [activeTab, setActiveTab] = useState<'checkin' | 'exposure' | 'rescue' | 'sleep'>('checkin');

  // 1. Bio-Feedback State
  const [energy, setEnergy] = useState(7);
  const [anxiety, setAnxiety] = useState(4);
  const [pain, setPain] = useState(2);
  const [sleepHours, setSleepHours] = useState(7.5);
  const [feedbackLogs, setFeedbackLogs] = useState<BioFeedbackLog[]>([]);

  // 2. Exposure Tasks State
  const [exposures, setExposures] = useState<ExposureTask[]>(DEFAULT_EXPOSURES);
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
    try {
      const savedBio = localStorage.getItem('clinical_biofeedback_logs');
      if (savedBio) setFeedbackLogs(JSON.parse(savedBio));
      const savedExp = localStorage.getItem('clinical_exposures');
      if (savedExp) setExposures(JSON.parse(savedExp));
    } catch (e) {
      console.error(e);
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
    const newLog: BioFeedbackLog = {
      date: new Date().toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' }),
      energy,
      anxiety,
      pain,
      sleepHours
    };
    const updated = [newLog, ...feedbackLogs.slice(0, 14)];
    setFeedbackLogs(updated);
    try {
      localStorage.setItem('clinical_biofeedback_logs', JSON.stringify(updated));
      showToast('✓ Evaluacion de Estado Diario guardada correctamente.');
    } catch (e) {
      console.error(e);
    }
  };

  const handleToggleExposure = (id: string) => {
    const updated = exposures.map((exp) => {
      if (exp.id === id) {
        const isDone = !exp.completed;
        if (isDone) {
          // Trigger 10-minute rumination limit
          startRuminationTimer();
        }
        return { ...exp, completed: isDone };
      }
      return exp;
    });
    setExposures(updated);
    try {
      localStorage.setItem('clinical_exposures', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateExposureField = (id: string, field: keyof ExposureTask, value: any) => {
    const updated = exposures.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp));
    setExposures(updated);
    try {
      localStorage.setItem('clinical_exposures', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
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
      <div
        style={{
          background: 'rgba(10, 15, 22, 0.8)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid rgba(217, 70, 239, 0.25)',
          borderRadius: '24px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          color: '#effff6'
        }}
      >
        {/* TOAST NOTIFICATION */}
        {toastMsg && (
          <div
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              background: 'linear-gradient(135deg, #d946ef, #8b5cf6)',
              color: '#ffffff',
              padding: '14px 22px',
              borderRadius: '14px',
              fontWeight: 800,
              fontSize: '0.88rem',
              boxShadow: '0 10px 30px rgba(217, 70, 239, 0.5)',
              zIndex: 99999
            }}
          >
            {toastMsg}
          </div>
        )}

        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: '#d946ef', fontWeight: 800, letterSpacing: '0.05em' }}>
              SUITE DE TAREAS CLÍNICAS INTERACTIVAS • TDAH & ANSIEDAD SOCIAL
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '2px 0 0', color: '#ffffff' }}>
              Prótesis Ejecutiva & Regulación Emocional
            </h3>
          </div>

          {/* TAB NAVIGATION */}
          <div style={{ display: 'flex', gap: '8px', background: 'rgba(0,0,0,0.4)', padding: '4px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <button
              type="button"
              onClick={() => setActiveTab('checkin')}
              style={{
                background: activeTab === 'checkin' ? 'rgba(217, 70, 239, 0.25)' : 'transparent',
                border: activeTab === 'checkin' ? '1px solid rgba(217, 70, 239, 0.5)' : 'none',
                color: activeTab === 'checkin' ? '#d946ef' : '#a8b9b2',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              📊 Estado Diario
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('exposure')}
              style={{
                background: activeTab === 'exposure' ? 'rgba(59, 130, 246, 0.25)' : 'transparent',
                border: activeTab === 'exposure' ? '1px solid rgba(59, 130, 246, 0.5)' : 'none',
                color: activeTab === 'exposure' ? '#3b82f6' : '#a8b9b2',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              🎯 Exposición Social CBT
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('rescue')}
              style={{
                background: activeTab === 'rescue' ? 'rgba(239, 68, 68, 0.25)' : 'transparent',
                border: activeTab === 'rescue' ? '1px solid rgba(239, 68, 68, 0.5)' : 'none',
                color: activeTab === 'rescue' ? '#f87171' : '#a8b9b2',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              🚨 Rescate 10 min TDAH
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('sleep')}
              style={{
                background: activeTab === 'sleep' ? 'rgba(16, 185, 129, 0.25)' : 'transparent',
                border: activeTab === 'sleep' ? '1px solid rgba(16, 185, 129, 0.5)' : 'none',
                color: activeTab === 'sleep' ? '#10b981' : '#a8b9b2',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              🌙 Sueño CBT-I
            </button>
          </div>
        </div>

        {/* TAB 1: BIO-FEEDBACK DAILY CHECK-IN */}
        {activeTab === 'checkin' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(217,70,239,0.2)', borderRadius: '18px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <strong style={{ fontSize: '0.92rem', color: '#ffffff' }}>
                Registro Subjetivo de Estado Físico & Emocional del Día:
              </strong>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                {/* ENERGY */}
                <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', padding: '14px', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'Azeret Mono, monospace', color: '#77e7ff' }}>⚡ Nivel de Energía</span>
                    <strong style={{ fontSize: '0.9rem', color: '#77e7ff' }}>{energy}/10</strong>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={energy}
                    onChange={(e) => setEnergy(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: '#77e7ff' }}
                  />
                </div>

                {/* ANXIETY */}
                <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', padding: '14px', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'Azeret Mono, monospace', color: '#d946ef' }}>🧠 Ansiedad / Activación</span>
                    <strong style={{ fontSize: '0.9rem', color: '#d946ef' }}>{anxiety}/10</strong>
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
                <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', padding: '14px', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'Azeret Mono, monospace', color: '#f87171' }}>🦴 Molestia Articular / Tendón</span>
                    <strong style={{ fontSize: '0.9rem', color: '#f87171' }}>{pain}/10</strong>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={pain}
                    onChange={(e) => setPain(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: '#f87171' }}
                  />
                </div>

                {/* SLEEP HOURS */}
                <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', padding: '14px', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'Azeret Mono, monospace', color: '#10b981' }}>😴 Horas de Sueño</span>
                    <strong style={{ fontSize: '0.9rem', color: '#10b981' }}>{sleepHours}h</strong>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="10"
                    step="0.5"
                    value={sleepHours}
                    onChange={(e) => setSleepHours(parseFloat(e.target.value))}
                    style={{ width: '100%', accentColor: '#10b981' }}
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleSaveBioFeedback}
                style={{
                  background: 'linear-gradient(135deg, #d946ef, #8b5cf6)',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: 800,
                  padding: '12px',
                  borderRadius: '12px',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  marginTop: '8px'
                }}
              >
                ✓ Registrar Evaluación de Hoy
              </button>
            </div>

            {/* HISTORIAL RECIENTE */}
            {feedbackLogs.length > 0 && (
              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '16px' }}>
                <strong style={{ fontSize: '0.85rem', color: '#a8b9b2', fontFamily: 'Azeret Mono, monospace' }}>
                  REGISTROS RECIENTES:
                </strong>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', marginTop: '10px' }}>
                  {feedbackLogs.map((log, idx) => (
                    <div key={idx} style={{ background: 'rgba(0,0,0,0.4)', padding: '10px', borderRadius: '10px', fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ color: '#d946ef', fontWeight: 700 }}>{log.date}</span>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#a8b9b2' }}>
                        <span>⚡ {log.energy}/10</span>
                        <span>🧠 Ans: {log.anxiety}/10</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#a8b9b2' }}>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(59, 130, 246, 0.25)', borderRadius: '18px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>Jerarquía de Exposición Graduada a Ansiedad Social / Desempeño:</strong>
                  <p style={{ fontSize: '0.78rem', color: '#a8b9b2', margin: '2px 0 0' }}>
                    Registra la ansiedad previa (0-10) y posterior (0-10). Al marcar como hecha se activa el límite de rumiación de 10 min.
                  </p>
                </div>

                {isRuminationActive && activeRuminationTimer !== null && (
                  <div style={{ background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(239,68,68,0.4)', padding: '8px 14px', borderRadius: '12px', textAlign: 'center' }}>
                    <span style={{ fontSize: '0.65rem', color: '#f87171', fontFamily: 'Azeret Mono, monospace', fontWeight: 800 }}>LÍMITE DE RUMIACIÓN POST-EVENTO</span>
                    <strong style={{ fontSize: '1.1rem', fontFamily: 'Azeret Mono, monospace', color: '#ffffff', display: 'block' }}>{formatTime(activeRuminationTimer)}</strong>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {exposures.map((exp) => (
                  <div
                    key={exp.id}
                    style={{
                      background: exp.completed ? 'rgba(16,185,129,0.06)' : 'rgba(0,0,0,0.4)',
                      border: `1px solid ${exp.completed ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: '14px',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '0.65rem', fontFamily: 'Azeret Mono, monospace', background: 'rgba(59,130,246,0.2)', color: '#3b82f6', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                            NIVEL {exp.hierarchyLevel.toUpperCase()}
                          </span>
                          <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>{exp.title}</strong>
                        </div>
                        <p style={{ fontSize: '0.8rem', color: '#a8b9b2', margin: '4px 0 0' }}>{exp.description}</p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleToggleExposure(exp.id)}
                        style={{
                          background: exp.completed ? '#10b981' : 'rgba(255,255,255,0.06)',
                          border: `1px solid ${exp.completed ? '#10b981' : 'rgba(255,255,255,0.15)'}`,
                          color: exp.completed ? '#040608' : '#effff6',
                          padding: '6px 14px',
                          borderRadius: '8px',
                          fontWeight: 800,
                          fontSize: '0.78rem',
                          cursor: 'pointer'
                        }}
                      >
                        {exp.completed ? '✓ Ejecutado' : '○ Registrar Exposición'}
                      </button>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', fontSize: '0.78rem', color: '#a8b9b2', flexWrap: 'wrap' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        Ansiedad Pre-Evento (0-10):
                        <input
                          type="number"
                          max="10"
                          min="0"
                          value={exp.preAnxiety}
                          onChange={(e) => handleUpdateExposureField(exp.id, 'preAnxiety', parseInt(e.target.value) || 0)}
                          style={{ width: '45px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: '4px', textAlign: 'center' }}
                        />
                      </label>

                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        Ansiedad Post-Evento (0-10):
                        <input
                          type="number"
                          max="10"
                          min="0"
                          value={exp.postAnxiety}
                          onChange={(e) => handleUpdateExposureField(exp.id, 'postAnxiety', parseInt(e.target.value) || 0)}
                          style={{ width: '45px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: '4px', textAlign: 'center' }}
                        />
                      </label>

                      <button
                        type="button"
                        onClick={startRuminationTimer}
                        style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem', cursor: 'pointer' }}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '18px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: '#f87171', fontWeight: 800 }}>
                    PROTOCOLO CLÍNICO DE DESBLOQUEO INICIAL
                  </span>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '2px 0 0', color: '#ffffff' }}>
                    Salida de Emergencia: Entrada de 10 Minutos & Versión Mala
                  </h4>
                </div>

                {isRescueTimerActive && rescueTimer !== null && (
                  <div style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.4)', padding: '8px 16px', borderRadius: '12px', textAlign: 'center' }}>
                    <span style={{ fontSize: '0.65rem', color: '#10b981', fontFamily: 'Azeret Mono, monospace', fontWeight: 800 }}>TEMPORIZADOR DE ENTRADA</span>
                    <strong style={{ fontSize: '1.2rem', fontFamily: 'Azeret Mono, monospace', color: '#ffffff', display: 'block' }}>{formatTime(rescueTimer)}</strong>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={start10MinRescueTimer}
                  style={{
                    background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                    border: 'none',
                    color: '#ffffff',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(239,68,68,0.4)'
                  }}
                >
                  🚀 Activar Entrada de 10 Minutos Sin Compromiso
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.78rem', color: '#f87171', fontFamily: 'Azeret Mono, monospace', fontWeight: 700 }}>
                  Escribe aquí una "Versión Mala" o 3 Bullets Caóticos sin Juzgar:
                </label>
                <textarea
                  rows={4}
                  value={badVersionDraft}
                  onChange={(e) => setBadVersionDraft(e.target.value)}
                  placeholder="Escribe el borrador más imperfecto posible. No corrijas ortografía, no organices estructura. Solo suelta la primera idea..."
                  style={{
                    width: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    padding: '12px',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '12px', fontSize: '0.78rem', color: '#a8b9b2', lineHeight: 1.4 }}>
                💡 <strong style={{ color: '#effff6' }}>Regla inviolable de corte:</strong> "Suficientemente terminado" es el único estándar requerido hoy. Un borrador feo guardado supera a la parálisis perfecta.
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CBT-I SLEEP HYGIENE CHECKLIST */}
        {activeTab === 'sleep' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '18px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: '#10b981', fontWeight: 800 }}>
                  HIGIENE DE SUEÑO & CONTROL DE ESTÍMULOS CBT-I
                </span>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '2px 0 0', color: '#ffffff' }}>
                  Checklist Nocturna de Desconexión (21:00)
                </h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '10px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={screensOff21}
                    onChange={(e) => setScreensOff21(e.target.checked)}
                    style={{ width: '18px', height: '18px', accentColor: '#10b981' }}
                  />
                  <span style={{ fontSize: '0.85rem', color: screensOff21 ? '#10b981' : '#effff6' }}>
                    📱 <strong>21:00 Pantallas Fuera:</strong> Teléfono guardado fuera del alcance de la cama.
                  </span>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '10px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={roomCold}
                    onChange={(e) => setRoomCold(e.target.checked)}
                    style={{ width: '18px', height: '18px', accentColor: '#10b981' }}
                  />
                  <span style={{ fontSize: '0.85rem', color: roomCold ? '#10b981' : '#effff6' }}>
                    ❄️ <strong>Temperatura & Oscuridad:</strong> Habitación ventilada y oscura.
                  </span>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '10px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={relaxingAudio}
                    onChange={(e) => setRelaxingAudio(e.target.checked)}
                    style={{ width: '18px', height: '18px', accentColor: '#10b981' }}
                  />
                  <span style={{ fontSize: '0.85rem', color: relaxingAudio ? '#10b981' : '#effff6' }}>
                    🎧 <strong>Audio de Regulación:</strong> Ruido blanco o audio de distensión sin contenido cognitivo activo.
                  </span>
                </label>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '12px', padding: '12px', fontSize: '0.78rem', color: '#a8b9b2', lineHeight: 1.4 }}>
                😴 <strong style={{ color: '#10b981' }}>Recordatorio Terapéutico:</strong> El descanso y el sueño no son premios condicionados al rendimiento. Son un requisito fisiológico para la regulación ejecutiva de mañana.
              </div>
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
