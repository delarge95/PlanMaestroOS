// src/components/fitness/LibraryCatalog.tsx
import React, { useState } from 'react';
import Button from '../ui/Button';
import StatusBadge from '../ui/StatusBadge';
import ListRow from '../ui/ListRow';
import { Plus, Play, Eye, FileText } from 'lucide-react';

export interface RoutineItem {
  id: string;
  name: string;
  durationWeeks: number;
  frequencyDays: number;
  isActive?: boolean;
}

const INITIAL_ROUTINES: RoutineItem[] = [
  { id: 'min-max', name: 'Min-Max Powerbuilding', durationWeeks: 12, frequencyDays: 4, isActive: true },
  { id: 'powerbuilding-v1', name: 'Powerbuilding Fuerza & Hipertrofia', durationWeeks: 8, frequencyDays: 5 },
  { id: 'glute-focus', name: 'Cadena Posterior & Glute Focus', durationWeeks: 6, frequencyDays: 3 },
  { id: 'knee-rehab', name: 'Protocolo Clínico — Salud de Rodilla', durationWeeks: 4, frequencyDays: 3 },
];

export default function LibraryCatalog() {
  const [routines, setRoutines] = useState(INITIAL_ROUTINES);
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);
  const [selectedWeek, setSelectedWeek] = useState<number>(1);

  const toggleActivate = (id: string) => {
    setRoutines((prev) =>
      prev.map((r) => ({ ...r, isActive: r.id === id }))
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      {/* BOTÓN AÑADIR NUEVA RUTINA (ARRIBA DERECHA PER FIX 4.1) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: 'var(--fs-step, 1.0625rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
          Catálogo de programas
        </h3>
        <Button variant="secondary" size="sm" onClick={() => alert('Añadir nueva rutina')}>
          <Plus size={16} />
          <span>Añadir nueva rutina</span>
        </Button>
      </div>

      {/* LISTA DE RUTINAS CON LISTROW */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
        {routines.map((routine) => (
          <div key={routine.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <ListRow
              title={routine.name}
              subtitle={`Duración: ${routine.durationWeeks} semanas · Frecuencia: ${routine.frequencyDays} días/semana`}
              action={
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {routine.isActive && <StatusBadge label="Activo" variant="success" />}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProgramId(selectedProgramId === routine.id ? null : routine.id)}
                  >
                    <Eye size={14} />
                    <span>{selectedProgramId === routine.id ? 'Ocultar' : 'Ver programa'}</span>
                  </Button>
                  <Button
                    variant={routine.isActive ? 'ghost' : 'secondary'}
                    size="sm"
                    onClick={() => toggleActivate(routine.id)}
                  >
                    <Play size={14} />
                    <span>{routine.isActive ? 'Activa' : 'Activar'}</span>
                  </Button>
                </div>
              }
            />

            {/* DETALLE DESPLEGADO DEL PROGRAMA SELECCIONADO */}
            {selectedProgramId === routine.id && (
              <div
                style={{
                  background: 'var(--surface-1, #0d0d0f)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-m)',
                  padding: 'var(--space-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-sm)',
                  marginLeft: 'var(--space-md)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 'var(--fs-eyebrow, 0.75rem)', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase' }}>
                    Visor de Programa: {routine.name}
                  </span>
                  <Button variant="ghost" size="sm" onClick={() => alert(`Abriendo PDF de ${routine.name}...`)}>
                    <FileText size={14} />
                    <span>Ver PDF</span>
                  </Button>
                </div>

                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <span style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)' }}>Semana:</span>
                  {Array.from({ length: Math.min(routine.durationWeeks, 6) }).map((_, w) => (
                    <button
                      key={w + 1}
                      type="button"
                      onClick={() => setSelectedWeek(w + 1)}
                      style={{
                        background: selectedWeek === w + 1 ? 'var(--accent)' : 'rgba(255,255,255,0.04)',
                        color: selectedWeek === w + 1 ? '#000' : 'var(--text-primary)',
                        border: 'none', padding: '3px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer'
                      }}
                    >
                      Sem {w + 1}
                    </button>
                  ))}
                </div>

                <div style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.02)', padding: '10px', borderRadius: '6px' }}>
                  Prescripción de la Semana {selectedWeek}: <strong>Upper 1 & Lower 1</strong> enfocados en sobrecarga progresiva.
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* BOTÓN AÑADIR ICON-ONLY ABAJO (PER FIX 4.1) */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 'var(--space-xs)' }}>
        <Button variant="ghost" size="sm" aria-label="Añadir nueva rutina" onClick={() => alert('Añadir nueva rutina')}>
          <Plus size={18} />
        </Button>
      </div>
    </div>
  );
}
