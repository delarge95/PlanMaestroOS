import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import InertiaRescueModal from '../clinical/InertiaRescueModal';
import { Calendar, LayoutGrid, BarChart2, Filter } from 'lucide-react';
import Button from '../ui/Button';

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
  { id: 'b2', time: '06:20 - 06:40', shortTitle: '💪 Prehab AM', fullTitle: 'Prehab AM: Muñecas, Nerve Glides & Spanish Squats', category: 'fitness', rule: 'Spanish Squats 3-5x45s sugeridos para rodillas.', minViableAction: '1 serie isométrica de 30s en pared.', status: 'completed', actionUrl: '/app/fitness', actionLabel: 'Guía Prehab' },
  { id: 'b3', time: '06:40 - 06:55', shortTitle: '🤸 Skill Work', fullTitle: 'Skill Work Técnico: Wall Handstand & Support Hold', category: 'fitness', rule: 'Wall Handstand (30-45s) y Support Hold en anillas.', minViableAction: '1 aguante de 20s en pared.', status: 'completed', actionUrl: '/app/fitness', actionLabel: 'Skills FitApp' },
  { id: 'b4', time: '06:55 - 07:40', shortTitle: '🏋️ Min-Max AM', fullTitle: 'Bloque Min-Max AM Adaptado (Jeff Nippard)', category: 'fitness', rule: '1-2 series a RIR 1-2. Anillas en empujes/fondos.', minViableAction: '1 serie efectiva al fallo técnico.', status: 'completed', actionUrl: '/app/fitness', actionLabel: 'Logger Gym' },
  { id: 'b5', time: '09:00 - 09:20', shortTitle: '📝 Agenda TDAH', fullTitle: 'Planeación Diaria TDAH (Agenda Única)', category: 'clinical', rule: 'Elegir máximo 3 tareas escritas para hoy.', minViableAction: 'Escribir 1 sola prioridad en papel.', status: 'completed', actionUrl: '/app/clinical', actionLabel: 'Bio-Feedback' },
  { id: 'b6', time: '09:20 - 11:40', shortTitle: '🧠 TwinSight MVP', fullTitle: 'Bloque A: Trabajo Profundo (Tesis / TwinSight)', category: 'career', rule: 'Celular fuera del cuarto. Tarea 10 min + Versión Mala.', minViableAction: 'Escribir 1 borrador feo durante 10 min.', status: 'in_progress', actionUrl: '/app/career', actionLabel: 'TwinSight' },
  { id: 'b7', time: '12:00 - 13:30', shortTitle: '🥗 Almuerzo', fullTitle: 'Almuerzo & Descanso Digestivo (1h 30m)', category: 'general', rule: 'Cocinar, comer y descanso sin trabajo.', minViableAction: 'Servir comida y descansar 20m.', status: 'pending' },
  { id: 'b8', time: '13:30 - 14:00', shortTitle: '🇩🇪 Alemán 25m', fullTitle: 'Estudio Diario de Alemán A1', category: 'german', rule: '5 min Duolingo + 20 min Libros/Audios A1 + IA.', minViableAction: '1 lección de 3 min en Duolingo.', status: 'pending', actionUrl: '/app/german', actionLabel: 'Alemán A1' },
  { id: 'b9', time: '14:00 - 14:40', shortTitle: '🎯 Sustentación CBT', fullTitle: 'Sustentación CBT (Exposición Graduada)', category: 'clinical', rule: 'Guion de 3 ideas. Max 10 min rumiación post-evento.', minViableAction: 'Leer el guion de 3 puntos en voz alta.', status: 'pending', actionUrl: '/app/clinical', actionLabel: 'Exposición' },
  { id: 'b10', time: '14:45 - 16:45', shortTitle: '💻 TwinSight Case', fullTitle: 'Bloque B: Producción MVP (TwinSight Case / GitHub)', category: 'career', rule: 'Cerrar activo público con criterios de terminado.', minViableAction: 'Hacer 1 commit en GitHub.', status: 'pending', actionUrl: '/app/career', actionLabel: 'GitHub' },
  { id: 'b11', time: '17:15 - 18:30', shortTitle: '🤸 Movilidad PM', fullTitle: 'PM Físico: Movilidad Cadera & Elephant Walks', category: 'fitness', rule: 'Elephant Walks 3x20, 90/90 switches, Rutina Thurin.', minViableAction: '10 Elephant Walks.', status: 'pending', actionUrl: '/app/fitness', actionLabel: 'Movilidad' },
  { id: 'b12', time: '21:00 - 21:30', shortTitle: '🌙 Sueño CBT-I', fullTitle: 'Rutina Cierre & Higiene de Sueño', category: 'general', rule: 'Pantalla fuera de cama a las 21:00. Audio relajante.', minViableAction: 'Apagar pantalla a las 21:00.', status: 'pending', actionUrl: '/app/clinical', actionLabel: 'Sueño CBT-I' }
];

export default function DailyOperatingView() {
  const [blocks, setBlocks] = useState<DailyBlock[]>(() => JSON.parse(JSON.stringify(initialDailyBlocks)));
  const [planViewMode, setPlanViewMode] = useState<'timeline' | 'canvas' | 'stats'>('timeline');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [isRescueModalOpen, setIsRescueModalOpen] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState<DailyBlock | null>(null);

  const toggleStatus = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBlocks(prev => prev.map(b => {
      if (b.id !== id) return b;
      const nextStatus = b.status === 'pending' ? 'in_progress' : b.status === 'in_progress' ? 'completed' : 'pending';
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

  const filteredBlocks = blocks.filter((b) => categoryFilter === 'all' || b.category === categoryFilter);

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

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* VISTA DE PLAN: SELECCIÓN DE MODO & FILTROS DE ETIQUETA PER DOCUMENTO 02 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-family-system)', fontSize: '0.72rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
              VISTA DE PLAN & OPERACIÓN DIARIA
            </span>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '2px 0 0', color: 'var(--text)' }}>
              Línea Temporal de Hoy (05:30 – 21:30)
            </h2>
          </div>

          {/* SELECTOR DE MODOS: CRONOGRAMA, CANVAS, STATS */}
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button
              variant={planViewMode === 'timeline' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setPlanViewMode('timeline')}
            >
              <Calendar size={14} /> Cronograma
            </Button>

            <Button
              variant={planViewMode === 'canvas' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setPlanViewMode('canvas')}
            >
              <LayoutGrid size={14} /> Modo Canvas
            </Button>

            <Button
              variant={planViewMode === 'stats' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setPlanViewMode('stats')}
            >
              <BarChart2 size={14} /> Tablas Visuales
            </Button>

            <button
              type="button"
              onClick={() => setIsRescueModalOpen(true)}
              style={{
                background: 'var(--color-accent-danger-soft)',
                border: '1px solid var(--color-accent-danger-glow)',
                color: 'var(--color-accent-danger)',
                padding: '6px 12px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.78rem',
                cursor: 'pointer'
              }}
            >
              🚨 Rescate
            </button>
          </div>
        </div>

        {/* FILTROS POR ETIQUETA / ÁREA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <Filter size={15} style={{ color: 'var(--text-tertiary)' }} />
          <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600 }}>Filtrar por etiqueta:</span>
          {['all', 'fitness', 'career', 'german', 'clinical', 'general'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategoryFilter(cat)}
              style={{
                background: categoryFilter === cat ? 'var(--color-accent-primary)' : 'rgba(255,255,255,0.05)',
                color: categoryFilter === cat ? '#ffffff' : 'var(--text-secondary)',
                border: 'none',
                padding: '3px 10px',
                borderRadius: '6px',
                fontSize: 'var(--font-size-meta)',
                fontWeight: categoryFilter === cat ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              {cat === 'all' ? 'Todas' : cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* MODO 1: CRONOGRAMA DE BLOQUES */}
        {planViewMode === 'timeline' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
            {filteredBlocks.map((b) => {
              const catColor = getCategoryColor(b.category);
              const isSelected = selectedBlock?.id === b.id;

              return (
                <div
                  key={b.id}
                  onClick={() => setSelectedBlock(b)}
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
                    opacity: b.status === 'skipped' ? 0.5 : 1
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', overflow: 'hidden' }}>
                    <span style={{ fontSize: '0.7rem', color: catColor, fontWeight: 700 }}>
                      {b.time}
                    </span>
                    <strong style={{ fontSize: '0.9rem', color: 'var(--text)', textDecoration: b.status === 'completed' || b.status === 'skipped' ? 'line-through' : 'none' }}>
                      {b.shortTitle}
                    </strong>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => toggleStatus(b.id, e)}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      background: b.status === 'completed' ? 'var(--color-state-done-soft)' : 'var(--color-border-subtle)',
                      color: b.status === 'completed' ? 'var(--color-state-done)' : 'var(--text-tertiary)'
                    }}
                  >
                    {b.status === 'completed' ? '✓ Listo' : '○ En curso'}
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* MODO 2: CANVAS INTERACTIVO (TARJETAS REORGANIZABLES) */}
        {planViewMode === 'canvas' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-md)' }}>
            {filteredBlocks.map((b) => (
              <div
                key={b.id}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--color-border-visible)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-xs)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
                }}
              >
                <span style={{ fontSize: 'var(--font-size-meta)', color: getCategoryColor(b.category), fontWeight: 700 }}>
                  {b.time} · {b.category.toUpperCase()}
                </span>
                <strong style={{ fontSize: '1rem', color: 'var(--text)' }}>
                  {b.shortTitle}
                </strong>
                <p style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)', margin: 0 }}>
                  Regla: {b.rule}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* MODO 3: TABLAS VISUALES & ESTADÍSTICAS */}
        {planViewMode === 'stats' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-md)' }}>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
              <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600 }}>ADHERENCIA AL PLAN DIARIO</span>
              <strong style={{ fontSize: '1.4rem', color: 'var(--color-state-done)', display: 'block', marginTop: '4px' }}>
                {Math.round((blocks.filter(b => b.status === 'completed').length / blocks.length) * 100)}%
              </strong>
            </div>

            <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
              <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600 }}>BLOQUES DE TRABAJO PROFUNDO</span>
              <strong style={{ fontSize: '1.4rem', color: 'var(--color-accent-primary)', display: 'block', marginTop: '4px' }}>
                2 Bloques completados hoy
              </strong>
            </div>
          </div>
        )}

        {/* TARJETA DE REORGANIZACIÓN */}
        {selectedBlock && (
          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-visible)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
              Reorganizar Bloque: {selectedBlock.fullTitle}
            </h4>
            <div style={{ display: 'flex', gap: 'var(--space-xs)' }}>
              <Button variant="ghost" size="sm" onClick={() => handleSkipWithoutGuilt(selectedBlock.id)}>
                Saltar Sin Culpa
              </Button>
              <Button variant="secondary" size="sm" onClick={() => handleReorganizeRestOfDay(selectedBlock.id)}>
                Reorganizar Resto del Día
              </Button>
            </div>
          </div>
        )}

        <InertiaRescueModal
          isOpen={isRescueModalOpen}
          onClose={() => setIsRescueModalOpen(false)}
          currentTaskName="Bloque A: Trabajo Profundo"
        />
      </div>
    </ErrorBoundary>
  );
}
