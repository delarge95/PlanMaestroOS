import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import InertiaRescueModal from '../clinical/InertiaRescueModal';

interface DailyBlock {
  id: string;
  time: string;
  shortTitle: string;
  fullTitle: string;
  category: 'clinical' | 'fitness' | 'career' | 'german' | 'general';
  rule: string;
  minViableAction: string;
  status: 'pending' | 'in_progress' | 'completed' | 'skipped';
  actionUrl?: string;
  actionLabel?: string;
}

const initialDailyBlocks: DailyBlock[] = [
  { id: 'b1', time: '05:30 - 06:00', shortTitle: '🌅 Despertar 05:30', fullTitle: 'Despertar 05:30 & Salida al Gimnasio', category: 'general', rule: 'Ropa lista desde anoche. Cero celular recreativo.', minViableAction: 'Ponerse los zapatos sin pensar.', status: 'completed' },
  { id: 'b2', time: '06:20 - 06:40', shortTitle: '💪 Prehab AM', fullTitle: 'Prehab AM: Muñecas, Nerve Glides & Spanish Squats', category: 'fitness', rule: 'Spanish Squats 3-5x45s obligatorios para rodillas.', minViableAction: '1 serie isométrica de 30s en pared.', status: 'completed', actionUrl: '/app/fitness', actionLabel: 'Guía Prehab' },
  { id: 'b3', time: '06:40 - 06:55', shortTitle: '🤸 Skill Work', fullTitle: 'Skill Work Técnico: Wall Handstand & Support Hold', category: 'fitness', rule: 'Wall Handstand (30-45s) y Support Hold en anillas.', minViableAction: '1 aguante de 20s en pared.', status: 'completed', actionUrl: '/app/fitness', actionLabel: 'Skills FitApp' },
  { id: 'b4', time: '06:55 - 07:40', shortTitle: '🏋️ Min-Max AM', fullTitle: 'Bloque Min-Max AM Adaptado (Jeff Nippard)', category: 'fitness', rule: '1-2 series a RIR 1-2. Anillas en empujes/fondos.', minViableAction: '1 serie efectiva al fallo técnico.', status: 'completed', actionUrl: '/app/fitness', actionLabel: 'Logger Gym' },
  { id: 'b5', time: '09:00 - 09:20', shortTitle: '📝 Agenda TDAH', fullTitle: 'Planeación Diaria TDAH (Agenda Única)', category: 'clinical', rule: 'Elegir máximo 3 tareas escritas para hoy.', minViableAction: 'Escribir 1 sola prioridad en papel.', status: 'completed', actionUrl: '/app/clinical', actionLabel: 'Bio-Feedback' },
  { id: 'b6', time: '09:20 - 11:40', shortTitle: '🧠 TwinSight MVP', fullTitle: 'Bloque A: Trabajo Profundo (Tesis / TwinSight)', category: 'career', rule: 'Celular fuera del cuarto. Tarea 10 min + Versión Mala.', minViableAction: 'Escribir 1 borrador feo durante 10 min.', status: 'in_progress', actionUrl: '/app/career', actionLabel: 'TwinSight' },
  { id: 'b7', time: '12:00 - 13:30', shortTitle: '🥗 Almuerzo', fullTitle: 'Almuerzo & Descanso Digestivo (1h 30m)', category: 'general', rule: 'Cocinar, comer y descanso sin trabajo.', minViableAction: 'Servir comida y descansar 20m.', status: 'pending' },
  { id: 'b8', time: '13:30 - 14:00', shortTitle: '🇩🇪 Alemán 25m', fullTitle: 'Estudio Diario de Alemán A1 (Hábito Inviolable)', category: 'german', rule: '5 min Duolingo + 20 min Libros/Audios A1 + IA.', minViableAction: '1 lección de 3 min en Duolingo.', status: 'pending', actionUrl: '/app/german', actionLabel: 'Alemán A1' },
  { id: 'b9', time: '14:00 - 14:40', shortTitle: '🎯 Sustentación CBT', fullTitle: 'Sustentación CBT (Exposición Graduada)', category: 'clinical', rule: 'Guion de 3 ideas. Max 10 min rumiación post-evento.', minViableAction: 'Leer el guion de 3 puntos en voz alta.', status: 'pending', actionUrl: '/app/clinical', actionLabel: 'Exposición' },
  { id: 'b10', time: '14:45 - 16:45', shortTitle: '💻 TwinSight Case', fullTitle: 'Bloque B: Producción MVP (TwinSight Case / GitHub)', category: 'career', rule: 'Cerrar activo público con criterios de terminado.', minViableAction: 'Hacer 1 commit en GitHub.', status: 'pending', actionUrl: '/app/career', actionLabel: 'GitHub' },
  { id: 'b11', time: '17:15 - 18:30', shortTitle: '🤸 Movilidad PM', fullTitle: 'PM Físico: Movilidad Cadera & Elephant Walks', category: 'fitness', rule: 'Elephant Walks 3x20, 90/90 switches, Rutina Thurin.', minViableAction: '10 Elephant Walks.', status: 'pending', actionUrl: '/app/fitness', actionLabel: 'Movilidad' },
  { id: 'b12', time: '21:00 - 21:30', shortTitle: '🌙 Sueño CBT-I', fullTitle: 'Rutina Cierre & Higiene de Sueño', category: 'general', rule: 'Pantalla fuera de cama a las 21:00. Audio relajante.', minViableAction: 'Apagar pantalla a las 21:00.', status: 'pending', actionUrl: '/app/clinical', actionLabel: 'Sueño CBT-I' }
];

export default function DailyOperatingView() {
  const [blocks, setBlocks] = useState<DailyBlock[]>(() => JSON.parse(JSON.stringify(initialDailyBlocks)));
  const [isRescueModalOpen, setIsRescueModalOpen] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState<DailyBlock | null>(null);
  const [showCompleteFeedback, setShowCompleteFeedback] = useState<boolean>(false);

  const triggerCompletionFeedback = () => {
    setShowCompleteFeedback(true);
    setTimeout(() => setShowCompleteFeedback(false), 1200);
  };

  const toggleStatus = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBlocks(prev => prev.map(b => {
      if (b.id !== id) return b;
      const nextStatus = b.status === 'pending' ? 'in_progress' : b.status === 'in_progress' ? 'completed' : 'pending';
      if (nextStatus === 'completed') {
        triggerCompletionFeedback();
      }
      return { ...b, status: nextStatus };
    }));
  };

  const handleSkipWithoutGuilt = (id: string) => {
    setBlocks(prev => prev.map(b => b.id === id ? { ...b, status: 'skipped' } : b));
    setSelectedBlock(null);
  };

  const handleReorganizeRestOfDay = (fromId: string) => {
    let found = false;
    setBlocks(prev => prev.map(b => {
      if (b.id === fromId) found = true;
      if (found && b.status === 'pending') {
        return { ...b, rule: `[Ajustado] ${b.rule}` };
      }
      return b;
    }));
    setSelectedBlock(null);
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'clinical': return 'var(--color-accent-primary)';
      case 'fitness': return 'var(--color-state-done)';
      case 'career': return 'var(--color-accent-primary)';
      case 'german': return 'var(--color-accent-warning)';
      default: return 'var(--color-accent-primary)';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'completed': return 'var(--color-state-done-soft)';
      case 'in_progress': return 'var(--color-accent-primary-glow)';
      case 'skipped': return 'rgba(255,255,255,0.03)';
      default: return 'var(--color-surface-base)';
    }
  };

  const getStatusBtnBg = (status: string) => {
    switch (status) {
      case 'completed': return 'var(--color-state-done-soft)';
      case 'in_progress': return 'var(--color-accent-primary-soft)';
      case 'skipped': return 'rgba(255,255,255,0.1)';
      default: return 'var(--color-border-subtle)';
    }
  };

  const getStatusBtnColor = (status: string) => {
    switch (status) {
      case 'completed': return 'var(--color-state-done)';
      case 'in_progress': return 'var(--color-accent-primary)';
      case 'skipped': return 'var(--color-text-secondary)';
      default: return 'var(--color-text-tertiary)';
    }
  };

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* HEADER CONTROLS */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span style={{ fontFamily: 'SF Mono, monospace', fontSize: '0.68rem', color: 'var(--color-accent-primary)', fontWeight: 700 }}>
              CENTRO OPERATIVO DIARIO
            </span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '2px 0 0', color: 'var(--color-text-primary)' }}>
              Línea Temporal de Hoy • 05:30 – 21:30
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button
              type="button"
              onClick={() => setIsRescueModalOpen(true)}
              style={{
                background: 'var(--color-accent-danger-soft)',
                border: '1px solid var(--color-accent-danger-glow)',
                color: 'var(--color-accent-danger)',
                padding: '6px 14px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.78rem',
                cursor: 'pointer'
              }}
            >
              🚨 Rescate "No puedo empezar"
            </button>

            <div style={{ background: 'var(--color-state-done-soft)', border: '1px solid var(--color-state-done-glow)', color: 'var(--color-state-done)', padding: '6px 12px', borderRadius: '10px', fontFamily: 'SF Mono, monospace', fontSize: '0.72rem', fontWeight: 700 }}>
              Hecho: {blocks.filter(b => b.status === 'completed').length} / {blocks.length}
            </div>
          </div>
        </div>

        {/* DAILY TIMELINE COMPACT BLOCKS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
          {blocks.map((b) => {
            const catColor = getCategoryColor(b.category);
            const isSelected = selectedBlock?.id === b.id;

            return (
              <div
                key={b.id}
                onClick={() => setSelectedBlock(b)}
                title={`${b.fullTitle}\n\nRegla: ${b.rule}\nVersión Mínima: ${b.minViableAction}`}
                style={{
                  background: getStatusBg(b.status),
                  border: `1px solid ${isSelected ? 'var(--color-border-visible)' : b.status === 'in_progress' ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)'}`,
                  borderLeft: `4px solid ${catColor}`,
                  borderRadius: '14px',
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                  cursor: 'pointer',
                  transition: 'all 150ms ease',
                  opacity: b.status === 'skipped' ? 0.5 : 1
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', overflow: 'hidden' }}>
                  <span style={{ fontFamily: 'SF Mono, monospace', fontSize: '0.7rem', color: catColor, fontWeight: 700 }}>
                    {b.time}
                  </span>
                  <strong style={{ fontSize: '0.9rem', color: b.status === 'completed' ? 'var(--color-text-secondary)' : 'var(--color-text-primary)', textDecoration: b.status === 'completed' || b.status === 'skipped' ? 'line-through' : 'none', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {b.shortTitle}
                  </strong>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {b.actionUrl && (
                    <a
                      href={b.actionUrl}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        background: 'var(--color-border-subtle)',
                        border: '1px solid var(--color-border-subtle)',
                        color: catColor,
                        padding: '4px 8px',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textDecoration: 'none'
                      }}
                    >
                      {b.actionLabel}
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={(e) => toggleStatus(b.id, e)}
                    style={{
                      fontFamily: 'SF Mono, monospace',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      padding: '4px 8px',
                      borderRadius: '999px',
                      border: 'none',
                      cursor: 'pointer',
                      background: getStatusBtnBg(b.status),
                      color: getStatusBtnColor(b.status)
                    }}
                  >
                    {b.status === 'completed' ? '✓' : b.status === 'in_progress' ? '►' : b.status === 'skipped' ? '⊘' : '○'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* SELECTED BLOCK REORGANIZATION CARD */}
        {selectedBlock && (
          <div
            style={{
              background: 'var(--color-surface-base)',
              border: '1px solid var(--color-border-visible)',
              borderRadius: '18px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8)' /* rgba(0,0,0,*) sombra — excepción documentada */
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontSize: '0.68rem', fontFamily: 'SF Mono, monospace', color: getCategoryColor(selectedBlock.category), fontWeight: 700 }}>
                  DESVÍO & REORGANIZACIÓN SIN CULPA • {selectedBlock.time}
                </span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '2px 0 0', color: 'var(--color-text-primary)' }}>
                  {selectedBlock.fullTitle}
                </h4>
              </div>

              <button
                type="button"
                onClick={() => setSelectedBlock(null)}
                style={{ background: 'var(--color-border-subtle)', border: 'none', color: 'var(--color-text-secondary)', borderRadius: '50%', width: '28px', height: '28px', cursor: 'pointer', fontWeight: 700 }}
              >
                ✕
              </button>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--color-border-subtle)', padding: '12px', borderRadius: '12px', fontSize: '0.82rem', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div><strong style={{ color: 'var(--color-text-primary)' }}>Regla Original:</strong> {selectedBlock.rule}</div>
              <div><strong style={{ color: 'var(--color-state-done)' }}>Versión Mínima (2 Min):</strong> {selectedBlock.minViableAction}</div>
            </div>

            {/* REORGANIZATION BUTTONS */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => handleSkipWithoutGuilt(selectedBlock.id)}
                style={{ background: 'var(--color-accent-danger-soft)', border: '1px solid var(--color-accent-danger-glow)', color: 'var(--color-accent-danger)', padding: '8px 14px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer' }}
              >
                🛡️ Saltar Sin Culpa (Cero Deuda)
              </button>

              <button
                type="button"
                onClick={() => handleReorganizeRestOfDay(selectedBlock.id)}
                style={{ background: 'var(--color-accent-primary-soft)', border: '1px solid var(--color-border-visible)', color: 'var(--color-accent-primary)', padding: '8px 14px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer' }}
              >
                🔄 Reorganizar Resto del Día con Margen
              </button>

              <button
                type="button"
                onClick={() => {
                  setBlocks(prev => prev.map(b => b.id === selectedBlock.id ? { ...b, status: 'completed' } : b));
                  setSelectedBlock(null);
                }}
                style={{ background: 'var(--color-state-done-soft)', border: '1px solid var(--color-state-done-glow)', color: 'var(--color-state-done)', padding: '8px 14px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer' }}
              >
                ✅ Marcar Completado (Versión Mínima)
              </button>
            </div>
          </div>
        )}

        {/* INERTIA RESCUE MODAL */}
        <InertiaRescueModal
          isOpen={isRescueModalOpen}
          onClose={() => setIsRescueModalOpen(false)}
          currentTaskName="Bloque A: Trabajo Profundo"
        />

        {/* AUDIT-07: COMPLETION FEEDBACK OVERLAY */}
        {showCompleteFeedback && (
          <div className="task-complete-feedback">
            ✓ Listo
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
