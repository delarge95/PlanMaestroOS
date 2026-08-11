// src/components/fitness/LibraryCatalog.tsx
import React from 'react';
import Button from '../ui/Button';
import StatusBadge from '../ui/StatusBadge';
import { Plus, Play, Eye } from 'lucide-react';

export interface RoutineItem {
  id: string;
  name: string;
  durationWeeks: number;
  frequencyDays: number;
  isActive?: boolean;
}

const ROUTINES: RoutineItem[] = [
  { id: 'min-max', name: 'Min-Max Powerbuilding', durationWeeks: 12, frequencyDays: 4, isActive: true },
  { id: 'powerbuilding-v1', name: 'Powerbuilding Fuerza & Hipertrofia', durationWeeks: 8, frequencyDays: 5 },
  { id: 'glute-focus', name: 'Cadena Posterior & Glute Focus', durationWeeks: 6, frequencyDays: 3 },
  { id: 'knee-rehab', name: 'Protocolo Clínico — Salud de Rodilla', durationWeeks: 4, frequencyDays: 3 },
];

export default function LibraryCatalog() {
  const handleAddRoutine = () => {
    alert('Añadir nueva rutina (formulario o plantilla)');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      {/* BOTÓN AÑADIR NUEVA RUTINA (AL INICIO PER FIX 08) */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="sm" onClick={handleAddRoutine}>
          <Plus size={16} />
          <span>Añadir nueva rutina</span>
        </Button>
      </div>

      {/* LISTA DE RUTINAS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
        {ROUTINES.map((routine) => (
          <div
            key={routine.id}
            style={{
              background: 'var(--surface-1, #0d0d0f)',
              border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
              borderRadius: 'var(--radius-m, 12px)',
              padding: 'var(--space-md)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'var(--space-sm)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <strong style={{ fontSize: 'var(--fs-body, 0.9375rem)', color: 'var(--text-primary)' }}>
                  {routine.name}
                </strong>
                {routine.isActive && <StatusBadge label="Activo" variant="success" />}
              </div>
              <span style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)' }}>
                Duración: {routine.durationWeeks} semanas · Frecuencia: {routine.frequencyDays} días/semana
              </span>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <Button variant="ghost" size="sm" onClick={() => alert(`Ver programa: ${routine.name}`)}>
                <Eye size={14} />
                <span>Ver programa</span>
              </Button>
              <Button
                variant={routine.isActive ? 'ghost' : 'secondary'}
                size="sm"
                onClick={() => alert(`Activar: ${routine.name}`)}
              >
                <Play size={14} />
                <span>{routine.isActive ? 'Activa' : 'Activar'}</span>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* BOTÓN AÑADIR NUEVA RUTINA (AL FINAL PER FIX 08) */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 'var(--space-xs)' }}>
        <Button variant="secondary" size="sm" onClick={handleAddRoutine}>
          <Plus size={16} />
          <span>Añadir nueva rutina</span>
        </Button>
      </div>
    </div>
  );
}
