import React, { useState, useMemo } from 'react';
import { EXERCISE_CATEGORIES, filterExercises, type ExerciseEntry } from '../../data/exercises';
import ExerciseModal from './ExerciseModal';
import ErrorBoundary from '../ErrorBoundary';
import useIsMobile from '../ui/useIsMobile';
import { Search, PlayCircle } from 'lucide-react';

export default function ExerciseDatabaseBrowser() {
  const isMobile = useIsMobile();
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeExercise, setActiveExercise] = useState<ExerciseEntry | null>(null);

  const filteredList = useMemo(() => {
    return filterExercises(selectedCategory, searchTerm);
  }, [selectedCategory, searchTerm]);

  return (
    <ErrorBoundary>
      <div style={{
        background: 'var(--surface-1)',
        border: '1px solid var(--color-border-subtle)',
        borderRadius: 'var(--radius-l)',
        padding: 'var(--space-5)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        marginTop: 'var(--space-5)'
      }}>
        {/* HEADER + BUSCADOR */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span style={{ fontSize: 'var(--fs-eyebrow)', color: 'var(--text-secondary)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Biblioteca
            </span>
            <h3 style={{ fontSize: 'var(--fs-section)', fontWeight: 700, margin: '2px 0 0', color: 'var(--text-primary)' }}>
              Ejercicios ({filteredList.length})
            </h3>
          </div>

          <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
            <Search
              size={15}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-tertiary)'
              }}
            />
            <input
              type="text"
              placeholder="Buscar ejercicio o músculo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                background: 'var(--surface-2)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-m)',
                padding: '10px 14px 10px 36px',
                color: 'var(--text-primary)',
                fontSize: 'var(--fs-body)',
                outline: 'none',
                transition: 'all 150ms ease'
              }}
            />
          </div>
        </div>

        {/* FILTRO: desktop chips, móvil select */}
        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label htmlFor="exercise-category" style={{ fontSize: 'var(--fs-meta)', color: 'var(--text-secondary)' }}>
              Categoría
            </label>
            <select
              id="exercise-category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                minHeight: '44px',
                borderRadius: 'var(--radius-m)',
                border: '1px solid var(--color-border-visible)',
                background: 'var(--surface-2)',
                color: 'var(--text-primary)',
                padding: '10px 12px',
                fontSize: 'var(--fs-body)'
              }}
            >
              {EXERCISE_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px' }}>
            {EXERCISE_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    background: isSelected ? 'var(--text-primary)' : 'var(--surface-2)',
                    border: `1px solid ${isSelected ? 'var(--text-primary)' : 'var(--color-border-subtle)'}`,
                    color: isSelected ? '#000000' : 'var(--text-secondary)',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontSize: 'var(--fs-meta)',
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
        )}

        {/* LISTADO */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
          {filteredList.map((ex) => (
            <div
              key={ex.name}
              onClick={() => setActiveExercise(ex)}
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-l)',
                padding: '16px',
                cursor: 'pointer',
                transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '12px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-visible)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = 'var(--surface-1-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'var(--surface-2)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontSize: 'var(--fs-eyebrow)', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {ex.category}
                  </span>
                  {ex.youtubeLink && (
                    <span style={{ fontSize: 'var(--fs-meta)', color: 'var(--text-secondary)', background: 'var(--glass)', padding: '2px 6px', borderRadius: '6px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <PlayCircle size={12} />
                      Video
                    </span>
                  )}
                </div>
                <h4 style={{ fontSize: 'var(--fs-step)', fontWeight: 700, margin: '0 0 6px', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {ex.name}
                </h4>
                {ex.subcategory && (
                  <span style={{ fontSize: 'var(--fs-meta)', color: 'var(--text-secondary)' }}>
                    {ex.subcategory}
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {ex.muscles.strength.slice(0, 3).map((m, mIdx) => (
                  <span key={mIdx} style={{ fontSize: 'var(--fs-eyebrow)', color: 'var(--text-secondary)', background: 'var(--glass)', padding: '2px 6px', borderRadius: '6px' }}>
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
