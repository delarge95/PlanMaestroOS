import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import InertiaRescueModal from '../clinical/InertiaRescueModal';

interface DailyBlock {
  time: string;
  title: string;
  category: 'clinical' | 'fitness' | 'career' | 'german' | 'general';
  rule: string;
  status: 'pending' | 'in_progress' | 'completed';
  actionUrl?: string;
  actionLabel?: string;
}

const initialDailyBlocks: DailyBlock[] = [
  { time: '05:30 - 06:00', title: 'Despertar 05:30 & Salida al Gym', category: 'general', rule: 'Ropa lista desde anoche. Cero celular recreativo.', status: 'completed' },
  { time: '06:20 - 06:40', title: 'Prehab AM: Muñecas, Nerve Glides & Spanish Squats', category: 'fitness', rule: 'Spanish Squats 3-5x45s obligatorios para rodillas.', status: 'completed', actionUrl: '/app/fitness', actionLabel: '💪 Guía Prehab FitApp' },
  { time: '06:40 - 06:55', title: 'Skill Work Técnico: Wall Handstand & Support Hold', category: 'fitness', rule: 'Wall Handstand (30-45s) y Support Hold en anillas.', status: 'completed', actionUrl: '/app/fitness', actionLabel: '💪 Ver Skills FitApp' },
  { time: '06:55 - 07:40', title: 'Bloque Min-Max AM Adaptado', category: 'fitness', rule: '1-2 series a RIR 1-2. Anillas en empujes/fondos.', status: 'completed', actionUrl: '/app/fitness', actionLabel: '⏱️ Logger & Timer FitApp' },
  { time: '09:00 - 09:20', title: 'Planeación Diaria TDAH (Agenda Única)', category: 'clinical', rule: 'Elegir máximo 3 tareas escritas para hoy.', status: 'completed', actionUrl: '/app/clinical', actionLabel: '📊 Bio-Feedback TDAH' },
  { time: '09:20 - 11:40', title: 'Bloque A: Trabajo Profundo (Tesis / TwinSight)', category: 'career', rule: 'Celular fuera del cuarto. Tarea 10 min + Versión Mala.', status: 'in_progress', actionUrl: '/app/career', actionLabel: '🚀 TwinSight Roadmap' },
  { time: '12:00 - 13:30', title: 'Almuerzo & Cocina (1h 30m)', category: 'general', rule: 'Cocinar, comer y descanso digestivo sin trabajo.', status: 'pending' },
  { time: '13:30 - 14:00', title: 'Estudio Diario de Alemán (v3)', category: 'german', rule: '5 min Duolingo + 20 min Libros/Audios A1 + IA.', status: 'pending', actionUrl: '/app/german', actionLabel: '🇩🇪 Hábito 25 min Alemán' },
  { time: '14:00 - 14:40', title: 'Sustentación CBT (Exposición Graduada)', category: 'clinical', rule: 'Guion de 3 ideas. Max 10 min rumiación post-evento.', status: 'pending', actionUrl: '/app/clinical', actionLabel: '🎯 Exposición CBT' },
  { time: '14:45 - 16:45', title: 'Bloque B: Producción MVP (TwinSight Case / GitHub)', category: 'career', rule: 'Cerrar activo público con criterios de terminado.', status: 'pending', actionUrl: '/app/career', actionLabel: '💻 Entregables Laborales' },
  { time: '17:15 - 18:30', title: 'PM Físico: Movilidad Cadera & Elephant Walks', category: 'fitness', rule: 'Elephant Walks 3x20, 90/90 switches, Rutina Thurin.', status: 'pending', actionUrl: '/app/fitness', actionLabel: '💪 Movilidad FitApp' },
  { time: '21:00 - 21:30', title: 'Rutina Cierre & Higiene de Sueño', category: 'general', rule: 'Pantalla fuera de cama a las 21:00. Audio relajante.', status: 'pending', actionUrl: '/app/clinical', actionLabel: '🌙 Sueño CBT-I' }
];

export default function DailyOperatingView() {
  const [blocks, setBlocks] = useState<DailyBlock[]>(() => JSON.parse(JSON.stringify(initialDailyBlocks)));
  const [isRescueModalOpen, setIsRescueModalOpen] = useState(false);

  const toggleStatus = (idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const updated = [...blocks];
      updated[idx] = { ...updated[idx] };
      if (updated[idx].status === 'pending') updated[idx].status = 'in_progress';
      else if (updated[idx].status === 'in_progress') updated[idx].status = 'completed';
      else updated[idx].status = 'pending';
      setBlocks(updated);
    } catch (err) {
      console.error(err);
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'clinical': return '#d946ef';
      case 'fitness': return '#10b981';
      case 'career': return '#3b82f6';
      case 'german': return '#f59e0b';
      default: return '#77e7ff';
    }
  };

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* HEADER CONTROLS */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.7rem', color: '#77e7ff', fontWeight: 800 }}>
              CENTRO OPERATIVO DIARIO
            </span>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '4px 0 0', color: '#effff6' }}>
              Línea Temporal de Hoy • 05:30 – 21:30
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button
              type="button"
              onClick={() => setIsRescueModalOpen(true)}
              style={{
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                color: '#f87171',
                padding: '8px 16px',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}
            >
              🚨 Rescate "No puedo empezar"
            </button>

            <div style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', color: '#81f6b0', padding: '6px 14px', borderRadius: '12px', fontFamily: 'Azeret Mono, monospace', fontSize: '0.75rem', fontWeight: 700 }}>
              Completados: {blocks.filter(b => b.status === 'completed').length} / {blocks.length}
            </div>
          </div>
        </div>

        {/* DAILY TIMELINE BLOCKS */}
        <div style={{ display: 'grid', gap: '14px' }}>
          {blocks.map((b, idx) => {
            const catColor = getCategoryColor(b.category);
            return (
              <div
                key={idx}
                style={{
                  background: b.status === 'completed' ? 'rgba(16,185,129,0.06)' : b.status === 'in_progress' ? 'rgba(119,231,255,0.1)' : '#080c0e',
                  border: `1px solid ${b.status === 'in_progress' ? '#77e7ff' : 'rgba(174,255,224,0.12)'}`,
                  borderLeft: `4px solid ${catColor}`,
                  borderRadius: '12px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '14px',
                  transition: 'all 150ms ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: '260px' }}>
                  <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.8rem', color: catColor, fontWeight: 700, minWidth: '110px' }}>
                    {b.time}
                  </span>
                  <div>
                    <strong style={{ fontSize: '0.98rem', color: b.status === 'completed' ? '#a8b9b2' : '#effff6', textDecoration: b.status === 'completed' ? 'line-through' : 'none' }}>
                      {b.title}
                    </strong>
                    <span style={{ display: 'block', fontSize: '0.78rem', color: '#65756f', marginTop: '2px' }}>
                      {b.rule}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {b.actionUrl && (
                    <a
                      href={b.actionUrl}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: catColor,
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textDecoration: 'none'
                      }}
                    >
                      {b.actionLabel}
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={(e) => toggleStatus(idx, e)}
                    style={{
                      fontFamily: 'Azeret Mono, monospace',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '6px 12px',
                      borderRadius: '999px',
                      border: 'none',
                      cursor: 'pointer',
                      background: b.status === 'completed' ? 'rgba(16,185,129,0.2)' : b.status === 'in_progress' ? 'rgba(119,231,255,0.2)' : 'rgba(255,255,255,0.05)',
                      color: b.status === 'completed' ? '#81f6b0' : b.status === 'in_progress' ? '#77e7ff' : '#65756f'
                    }}
                  >
                    {b.status === 'completed' ? '✓ HECHO' : b.status === 'in_progress' ? '► EN CURSO' : '○ PENDIENTE'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* INERTIA RESCUE MODAL */}
        <InertiaRescueModal
          isOpen={isRescueModalOpen}
          onClose={() => setIsRescueModalOpen(false)}
          currentTaskName="Bloque A: Trabajo Profundo"
        />
      </div>
    </ErrorBoundary>
  );
}
