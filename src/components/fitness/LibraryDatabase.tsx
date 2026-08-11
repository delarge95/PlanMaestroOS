// src/components/fitness/LibraryDatabase.tsx
import React, { useState } from 'react';
import Disclosure from '../ui/Disclosure';
import StatusBadge from '../ui/StatusBadge';
import { Database, BookOpen, Search, CheckCircle } from 'lucide-react';

const FITAPP_EXERCISES = [
  { id: 'bench-press', name: 'Press de banca con barra', pattern: 'Empuje Horizontal', muscle: 'Pectoral', verified: true },
  { id: 'pull-up', name: 'Dominada estricta', pattern: 'Tracción Vertical', muscle: 'Dorsal', verified: true },
  { id: 'squat', name: 'Sentadilla trasera', pattern: 'Dominante de Cuádriceps', muscle: 'Cuádriceps', verified: true },
  { id: 'deadlift', name: 'Peso muerto convencional', pattern: 'Bisagra de Cadera', muscle: 'Cadena Posterior', verified: true },
  { id: 'handstand-pushup', name: 'HSPU asistido en pared', pattern: 'Empuje Vertical', muscle: 'Deltoides', verified: false }
];

const BOOKS = [
  { title: 'The Scientific Principles of Hypertrophy Training', author: 'Dr. Mike Israetel, Renaissance Periodization', notes: 'Guía fundamental sobre volumen de mantenimiento (MV) y máximo volumen recuperable (MRV).' },
  { title: 'Overcoming Gravity: A Systematic Approach to Calisthenics', author: 'Steven Low', notes: 'Biblia de la calistenia y progresiones de peso corporal.' },
  { title: 'Overcoming Tendonitis', author: 'Steven Low', notes: 'Protocolo de carga excéntrica e isométrica para tendinopatías.' }
];

export default function LibraryDatabase() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExercises = FITAPP_EXERCISES.filter((ex) =>
    ex.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ex.muscle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
      {/* BLOQUE 1: BASE DE DATOS DE EJERCICIOS FITAPP */}
      <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-m, 12px)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Database size={18} style={{ color: 'var(--accent)' }} />
            <h3 style={{ fontSize: 'var(--fs-step, 1.0625rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
              Base de datos de ejercicios FitApp
            </h3>
          </div>

          <div style={{ position: 'relative', minWidth: '200px' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar ejercicio..."
              style={{
                width: '100%',
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: '6px',
                padding: '6px 10px 6px 28px',
                color: 'var(--text-primary)',
                fontSize: 'var(--fs-meta, 0.8125rem)'
              }}
            />
            <Search size={14} style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {filteredExercises.map((ex) => (
            <div
              key={ex.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 12px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--color-border-subtle)'
              }}
            >
              <div>
                <strong style={{ fontSize: 'var(--fs-body, 0.9375rem)', color: 'var(--text-primary)' }}>
                  {ex.name}
                </strong>
                <span style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)', display: 'block' }}>
                  Patrón: {ex.pattern} · Músculo: {ex.muscle}
                </span>
              </div>
              <StatusBadge
                label={ex.verified ? 'Verificado' : 'Local'}
                variant={ex.verified ? 'success' : 'neutral'}
                icon={ex.verified ? <CheckCircle size={12} /> : undefined}
              />
            </div>
          ))}
        </div>
      </div>

      {/* BLOQUE 2: BIBLIOTECA TEÓRICA */}
      <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-m, 12px)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BookOpen size={18} style={{ color: 'var(--accent)' }} />
          <h3 style={{ fontSize: 'var(--fs-step, 1.0625rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
            Biblioteca teórica & Literatura
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
          {BOOKS.map((book, idx) => (
            <Disclosure
              key={idx}
              label={`${book.title} — ${book.author}`}
            >
              <p style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)', margin: 0 }}>
                {book.notes}
              </p>
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
}
