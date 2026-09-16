import React, { useState } from 'react';
import type { Lesson } from '../../data/languages/types';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';
import BookPdfViewer from './BookPdfViewer';
import { useErrorReviewStore } from '../../lib/languages/errorStore';
import { ExternalLink, CheckCircle, BookOpen } from 'lucide-react';

export interface LessonViewProps {
  lesson: Lesson;
  /** Idioma de la lección ('de' | 'en') — alimenta el refuerzo de errores. */
  language?: 'de' | 'en';
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

export default function LessonView({ lesson, language = 'de', onLessonCompleted, maxExercises = 3, initiallyCompleted = false }: LessonViewProps) {
  const [activeTab, setActiveTab] = useState<'theory' | 'exercises'>('theory');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [completed, setCompleted] = useState(initiallyCompleted);
  const [bookOpen, setBookOpen] = useState(false);

  // Refuerzo inteligente: registra UNA respuesta incorrecta por ejercicio y
  // sesión. Multiple-choice registra al elegir; texto libre, al perder foco
  // (así un carácter a medias no cuenta como error).
  const recordedErrorsRef = React.useRef<Set<string>>(new Set());
  const commitWrongAnswer = (ex: { id: string; prompt: string; correctAnswer: string }, raw: string) => {
    const val = (raw ?? '').trim();
    if (!val || recordedErrorsRef.current.has(ex.id)) return;
    const norm = (x: string) => x.trim().toLowerCase().replace(/\s+/g, ' ');
    if (norm(val) === norm(ex.correctAnswer)) return;
    recordedErrorsRef.current.add(ex.id);
    useErrorReviewStore.getState().recordError({
      language,
      exerciseId: ex.id,
      lessonId: lesson.id,
      prompt: ex.prompt,
      correctAnswer: ex.correctAnswer,
      userAnswer: val,
    });
  };
  React.useEffect(() => {
    for (const ex of lesson.exercises) {
      if (ex.type === 'multiple_choice' && ex.options) {
        commitWrongAnswer(ex, userAnswers[ex.id] ?? '');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAnswers, lesson, language]);

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
            {lesson.sourceBook ? (
              <Button variant="ghost" size="sm" onClick={() => setBookOpen(true)}>
                <BookOpen size={14} /> Ver en el libro
                {lesson.sourceBook.page || lesson.sourceBook.pageRange
                  ? ` (pág. ${lesson.sourceBook.page ?? lesson.sourceBook.pageRange![0]})`
                  : ' (pág. por verificar)'}
              </Button>
            ) : lesson.sourcePdfUrl && (
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
                  background: activeTab === 'theory' ? 'var(--accent)' : 'transparent',
                  color: activeTab === 'theory' ? '#000000' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '7px',
                  fontSize: 'var(--fs-meta)',
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
                  background: activeTab === 'exercises' ? 'var(--accent)' : 'transparent',
                  color: activeTab === 'exercises' ? '#000000' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '7px',
                  fontSize: 'var(--fs-meta)',
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
              <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', borderLeft: '3px solid var(--accent)', padding: '10px 14px', borderRadius: '0 var(--radius-s) var(--radius-s) 0', fontSize: 'var(--fs-body)', lineHeight: 1.5, maxWidth: '65ch', color: 'var(--text-secondary)' }}>
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
              <div key={ex.id} className="ds-stack-sm" style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${answered ? (isCorrect ? 'var(--color-state-done)' : 'var(--color-state-error, var(--warning))') : 'var(--color-border-subtle)'}`, borderRadius: 'var(--radius-s)', padding: 'var(--space-3)' }}>
                <span style={{ fontSize: 'var(--fs-eyebrow)', color: 'var(--accent)', fontWeight: 700 }}>
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
                          color: userAnswers[ex.id] === opt ? 'var(--accent)' : 'var(--text-secondary)',
                          border: `1px solid ${userAnswers[ex.id] === opt ? 'var(--accent)' : 'var(--color-border-subtle)'}`,
                          padding: '6px 12px',
                          borderRadius: '6px',
                          fontSize: 'var(--fs-meta)',
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
                    onBlur={() => commitWrongAnswer(ex, userAnswers[ex.id] ?? '')}
                    onKeyDown={(e) => { if (e.key === 'Enter') commitWrongAnswer(ex, userAnswers[ex.id] ?? ''); }}
                    placeholder="Escribe tu respuesta..."
                    style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--color-border-subtle)', borderRadius: '6px', padding: '8px 12px', color: 'var(--text)', fontSize: 'var(--fs-body)' }}
                  />
                )}

                {answered && (
                  <span style={{ fontSize: 'var(--fs-meta)', fontWeight: 700, color: isCorrect ? 'var(--color-state-done)' : 'var(--warning)' }}>
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

      {/* VISOR DEL LIBRO ACADÉMICO ANCLADO A LA PÁGINA DE LA LECCIÓN */}
      {bookOpen && lesson.sourceBook && (
        <BookPdfViewer
          bookId={lesson.sourceBook.bookId}
          page={lesson.sourceBook.page}
          pageRange={lesson.sourceBook.pageRange}
          section={lesson.sourceBook.section}
          onClose={() => setBookOpen(false)}
        />
      )}
    </ErrorBoundary>
  );
}
