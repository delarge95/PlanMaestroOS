import React, { useState } from 'react';
import type { Lesson } from '../../data/languages/types';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';
import { ExternalLink, CheckCircle } from 'lucide-react';

export interface LessonViewProps {
  lesson: Lesson;
  onLessonCompleted?: () => void;
  /** Ejercicios mostrados (compatibilidad: el comportamiento histórico es 3). */
  maxExercises?: number;
  /** Marca la lección como ya completada (progreso persistido del store). */
  initiallyCompleted?: boolean;
}

/** Comparación tolerante de respuestas (trim, minúsculas, espacios colapsados). */
function answersMatch(user: string, correct: string): boolean {
  const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ');
  return norm(user) === norm(correct);
}

export default function LessonView({ lesson, onLessonCompleted, maxExercises = 3, initiallyCompleted = false }: LessonViewProps) {
  const [activeTab, setActiveTab] = useState<'theory' | 'exercises'>('theory');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [completed, setCompleted] = useState(initiallyCompleted);

  const handleAnswerChange = (exId: string, val: string) => {
    setUserAnswers((prev) => ({ ...prev, [exId]: val }));
  };

  const handleCompleteLesson = () => {
    setCompleted(true);
    if (onLessonCompleted) onLessonCompleted();
  };

  return (
    <ErrorBoundary>
      <div className="ds-card ds-stack">
        
        {/* CABECERA DE LECCIÓN CON NAVEGACIÓN TEORÍA / EJERCICIOS */}
        <div className="ds-row-between" style={{ flexWrap: 'wrap', gap: 'var(--space-1)', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-1)' }}>
          <div>
            <span className="ds-eyebrow">
              Lección {lesson.order} · {lesson.estimatedMinutes} min
            </span>
            <h3 style={{ fontSize: 'var(--fs-section)', fontWeight: 700, margin: '2px 0 0', color: 'var(--text-primary)' }}>
              {lesson.title}
            </h3>
          </div>

          <div className="ds-row" style={{ gap: 'var(--space-2)' }}>
            {lesson.sourcePdfUrl && (
              <a href={lesson.sourcePdfUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button variant="ghost" size="sm">
                  <ExternalLink size={14} /> Ver libro
                </Button>
              </a>
            )}

            <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.03)', padding: '3px', borderRadius: '10px', border: '1px solid var(--color-border-subtle)' }}>
              <button
                type="button"
                onClick={() => setActiveTab('theory')}
                style={{
                  background: activeTab === 'theory' ? 'var(--color-accent-primary)' : 'transparent',
                  color: activeTab === 'theory' ? '#000000' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '7px',
                  fontSize: '0.78rem',
                  fontWeight: activeTab === 'theory' ? 700 : 500,
                  cursor: 'pointer'
                }}
              >
                Teoría
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('exercises')}
                style={{
                  background: activeTab === 'exercises' ? 'var(--color-accent-primary)' : 'transparent',
                  color: activeTab === 'exercises' ? '#000000' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '7px',
                  fontSize: '0.78rem',
                  fontWeight: activeTab === 'exercises' ? 700 : 500,
                  cursor: 'pointer'
                }}
              >
                Ejercicios
              </button>
            </div>
          </div>
        </div>

        {/* PESTAÑA TEORÍA EN BLOQUES CORTOS */}
        {activeTab === 'theory' && (
          <div className="ds-stack-sm">
            {lesson.content.map((block, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', borderLeft: '3px solid var(--color-accent-primary)', padding: '10px 14px', borderRadius: '0 6px 6px 0', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                {block}
              </div>
            ))}
          </div>
        )}

        {/* PESTAÑA EJERCICIOS (MÁXIMO 3) */}
        {activeTab === 'exercises' && (
          <div className="ds-stack">
            {lesson.exercises.slice(0, maxExercises).map((ex, idx) => {
              const answered = (userAnswers[ex.id] ?? '').trim() !== '';
              const isCorrect = answered && answersMatch(userAnswers[ex.id], ex.correctAnswer);
              return (
              <div key={ex.id} className="ds-stack-sm" style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${answered ? (isCorrect ? 'var(--color-state-done)' : 'var(--color-state-error, var(--color-accent-warning))') : 'var(--color-border-subtle)'}`, borderRadius: 'var(--radius-s)', padding: 'var(--space-3)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-primary)', fontWeight: 700 }}>
                  Ejercicio {idx + 1}: {ex.prompt}
                </span>

                {ex.type === 'multiple_choice' && ex.options ? (
                  <div className="ds-row-wrap">
                    {ex.options.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleAnswerChange(ex.id, opt)}
                        style={{
                          background: userAnswers[ex.id] === opt ? 'var(--color-accent-primary-soft)' : 'rgba(255,255,255,0.04)',
                          color: userAnswers[ex.id] === opt ? 'var(--color-accent-primary)' : 'var(--text-secondary)',
                          border: `1px solid ${userAnswers[ex.id] === opt ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)'}`,
                          padding: '6px 12px',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                ) : (
                  <input
                    type="text"
                    value={userAnswers[ex.id] || ''}
                    onChange={(e) => handleAnswerChange(ex.id, e.target.value)}
                    placeholder="Escribe tu respuesta..."
                    style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--color-border-subtle)', borderRadius: '6px', padding: '8px 12px', color: 'var(--text)', fontSize: '0.85rem' }}
                  />
                )}

                {answered && (
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: isCorrect ? 'var(--color-state-done)' : 'var(--color-accent-warning)' }}>
                    {isCorrect ? '✓ Correcto' : `✗ Revisa — solución: ${ex.correctAnswer}`}
                  </span>
                )}
              </div>
              );
            })}
          </div>
        )}

        {/* BOTÓN COMPLETADA */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '4px' }}>
          <Button variant={completed ? 'ghost' : 'secondary'} size="sm" onClick={handleCompleteLesson}>
            {completed ? <CheckCircle size={15} style={{ color: 'var(--color-state-done)' }} /> : null}
            <span>Completada</span>
          </Button>
        </div>

      </div>
    </ErrorBoundary>
  );
}
