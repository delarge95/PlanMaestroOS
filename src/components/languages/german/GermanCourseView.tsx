import React, { useMemo, useState } from 'react';
import { germanCourse } from '../../../data/languages/germanCourse';
import { useVocabularyStore } from '../../../lib/languages/vocabularyStore';
import LessonView from '../LessonView';
import VocabularySession from '../VocabularySession';
import SpeakingPractice from '../SpeakingPractice';
import PlacementTest from './PlacementTest';
import ErrorBoundary from '../../ErrorBoundary';

/**
 * Vista del curso de alemán para /app/languages/german.
 * Flujo: sin colocación → PlacementTest; con colocación → selector de unidad +
 * lecciones (progreso persistido) + sesión SM-2 + speaking.
 */
export default function GermanCourseView() {
  const byLanguage = useVocabularyStore((s) => s.byLanguage);
  const completeLessonAction = useVocabularyStore((s) => s.completeLesson);
  const placementUnitId = byLanguage.de?.placementUnitId;
  const completedLessons = useMemo(
    () => new Set(byLanguage.de?.completedLessons ?? []),
    [byLanguage]
  );

  const [selectedUnitId, setSelectedUnitId] = useState<string>(placementUnitId ?? germanCourse.units[0].id);
  const selectedUnit = germanCourse.units.find((u) => u.id === selectedUnitId) ?? germanCourse.units[0];

  if (!placementUnitId) {
    return (
      <ErrorBoundary>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Primera vez aquí: responde 16 preguntas rápidas y te colocamos en la unidad adecuada (≈3 min).
          </p>
          <PlacementTest />
        </div>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>

        {/* SELECTOR DE UNIDAD */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {germanCourse.units.map((unit) => {
            const done = unit.lessons.every((l) => completedLessons.has(l.id));
            const active = unit.id === selectedUnit.id;
            return (
              <button
                key={unit.id}
                type="button"
                onClick={() => setSelectedUnitId(unit.id)}
                style={{
                  background: active ? 'var(--color-accent-primary-soft)' : 'rgba(255,255,255,0.03)',
                  color: active ? 'var(--color-accent-primary)' : 'var(--text-secondary)',
                  border: `1px solid ${active ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)'}`,
                  padding: '7px 12px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {unit.title.replace('Unidad ', 'U')}{done ? ' ✓' : ''}
              </button>
            );
          })}
        </div>

        {/* LECCIONES DE LA UNIDAD */}
        {selectedUnit.lessons.map((lesson, idx) => {
          const isNext = !completedLessons.has(lesson.id) && selectedUnit.lessons.slice(0, idx).every((l) => completedLessons.has(l.id));
          return (
            <div key={lesson.id} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {isNext && (
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-accent-primary)', textTransform: 'uppercase' }}>
                  ▶ Siguiente lección
                </span>
              )}
              <LessonView
                lesson={lesson}
                initiallyCompleted={completedLessons.has(lesson.id)}
                onLessonCompleted={() => completeLessonAction('de', lesson.id)}
                maxExercises={lesson.exercises.length}
              />
            </div>
          );
        })}

        {/* REPASO SR + SPEAKING */}
        <VocabularySession language="de" />
        <SpeakingPractice language="de" />

      </div>
    </ErrorBoundary>
  );
}
