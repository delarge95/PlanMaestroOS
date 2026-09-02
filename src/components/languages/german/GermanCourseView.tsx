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
        <div className="ds-stack">
          <p className="ds-caption" style={{ margin: 0 }}>
            Primera vez aquí: responde 16 preguntas rápidas y te colocamos en la unidad adecuada (≈3 min).
          </p>
          <PlacementTest />
        </div>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <div className="ds-stack">

        {/* SELECTOR DE UNIDAD */}
        <div className="ds-row-wrap" style={{ gap: '6px' }}>
          {germanCourse.units.map((unit) => {
            const done = unit.lessons.every((l) => completedLessons.has(l.id));
            const active = unit.id === selectedUnit.id;
            return (
              <button
                key={unit.id}
                type="button"
                onClick={() => setSelectedUnitId(unit.id)}
                className="ds-chip"
                data-active={active}
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
            <div key={lesson.id} className="ds-stack-sm" style={{ gap: '4px' }}>
              {isNext && (
                <span className="ds-eyebrow">
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
