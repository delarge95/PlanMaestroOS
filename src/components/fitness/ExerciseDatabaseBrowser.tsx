import React, { useState, useMemo } from 'react';
import { EXERCISE_CATEGORIES, filterExercises, type ExerciseEntry } from '../../data/exercises';
import ExerciseModal from './ExerciseModal';
import ErrorBoundary from '../ErrorBoundary';

export default function ExerciseDatabaseBrowser() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeExercise, setActiveExercise] = useState<ExerciseEntry | null>(null);

  const filteredList = useMemo(() => {
    return filterExercises(selectedCategory, searchTerm);
  }, [selectedCategory, searchTerm]);

  return (
    <ErrorBoundary>
      <div style={{
        background: 'rgba(10, 15, 20, 0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '32px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)'
      }}>
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: 'var(--color-state-done)', fontWeight: 800, letterSpacing: '0.05em' }}>
              BIBLIOTECA INTERACTIVA FITAPP-FREE
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0', color: 'var(--color-text-primary)' }}>
              Base de Datos Completa de Ejercicios ({filteredList.length})
            </h3>
          </div>

          {/* SEARCH INPUT */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
            <input
              type="text"
              placeholder="Buscar ejercicio o músculo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '12px',
                padding: '10px 14px 10px 36px',
                color: 'var(--color-text-primary)',
                fontSize: '0.85rem',
                outline: 'none',
                transition: 'all 150ms ease'
              }}
            />
            <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-tertiary)', fontSize: '0.85rem' }}>
              🔍
            </span>
          </div>
        </div>

        {/* CATEGORY CHIPS */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px' }}>
          {EXERCISE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: isSelected ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  border: `1px solid ${isSelected ? 'rgba(16, 185, 129, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`,
                  color: isSelected ? 'var(--color-state-done)' : 'var(--color-text-secondary)',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 150ms ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* GRID OF EXERCISES */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px', maxHeight: '520px', overflowY: 'auto', paddingRight: '4px' }}>
          {filteredList.map((ex, idx) => (
            <div
              key={idx}
              onClick={() => setActiveExercise(ex)}
              style={{
                background: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '16px',
                cursor: 'pointer',
                transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '12px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = 'rgba(16, 185, 129, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.35)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.65rem', color: 'var(--color-state-done)', fontWeight: 700 }}>
                    {ex.category}
                  </span>
                  {ex.youtubeLink && (
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-danger)', background: 'rgba(239, 68, 68, 0.15)', padding: '2px 6px', borderRadius: '4px' }}>
                      ▶ Video
                    </span>
                  )}
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--color-text-primary)', lineHeight: 1.3 }}>
                  {ex.name}
                </h4>
                {ex.subcategory && (
                  <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-primary)' }}>
                    {ex.subcategory}
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {ex.muscles.strength.slice(0, 3).map((m, mIdx) => (
                  <span key={mIdx} style={{ fontSize: '0.68rem', color: 'var(--color-text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '4px' }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        <ExerciseModal exercise={activeExercise} onClose={() => setActiveExercise(null)} />
      </div>
    </ErrorBoundary>
  );
}
