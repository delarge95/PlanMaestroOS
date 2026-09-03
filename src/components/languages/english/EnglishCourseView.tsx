// src/components/languages/english/EnglishCourseView.tsx
// Vista integrada del curso de inglés profesional (B2/C1)
// Consume vocabularyStore para SM-2, lecciones, racha y SpeakingPracticeEN.

import React, { useMemo, useState } from 'react';
import { Flame, Layers, CheckCircle2 } from 'lucide-react';
import { englishCourse } from '../../../data/languages/englishCourse';
import { englishTechnicalVocabulary } from '../../../data/languages/english/vocabulary';
import { falseFriendsTechESEN, workplacePhrasalVerbs, technicalCollocations } from '../../../data/languages/english/precision';
import { useVocabularyStore, getDueQueue, computeStreakDays } from '../../../lib/languages/vocabularyStore';
import LessonView from '../LessonView';
import VocabularySession from '../VocabularySession';
import SpeakingPracticeEN from './SpeakingPracticeEN';
import ErrorBoundary from '../../ErrorBoundary';
import Button from '../../ui/Button';

export default function EnglishCourseView() {
  const byLanguage = useVocabularyStore((s) => s.byLanguage);
  const activityDates = useVocabularyStore((s) => s.activityDates);
  const completeLessonAction = useVocabularyStore((s) => s.completeLesson);

  const englishProgress = byLanguage.en;
  const streakDays = computeStreakDays(activityDates);
  const completedLessons = useMemo(
    () => new Set(englishProgress?.completedLessons ?? []),
    [englishProgress]
  );

  const dueQueueIds = useMemo(
    () => getDueQueue(englishTechnicalVocabulary, englishProgress),
    [englishProgress]
  );

  const [activeMainTab, setActiveMainTab] = useState<'course' | 'spaced_repetition' | 'speaking' | 'precision'>('course');
  const [selectedUnitId, setSelectedUnitId] = useState<string>(englishCourse.units[0].id);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState<number>(0);

  const selectedUnit = englishCourse.units.find((u) => u.id === selectedUnitId) ?? englishCourse.units[0];
  const selectedLesson = selectedUnit.lessons[selectedLessonIndex] ?? selectedUnit.lessons[0];

  const handleLessonComplete = () => {
    if (selectedLesson) {
      completeLessonAction('en', selectedLesson.id);
    }
  };

  return (
    <ErrorBoundary>
      <div className="ds-stack">
        
        {/* STATS & METRICS HEADER */}
        <div className="ds-grid">
          <div className="ds-card ds-row" style={{ padding: 'var(--space-sm) var(--space-md)', gap: 'var(--space-sm)' }}>
            <Flame size={22} style={{ color: 'var(--warning)' }} />
            <div>
              <span className="ds-eyebrow">
                Racha en Idiomas
              </span>
              <strong className="ds-h3" style={{ display: 'block', margin: 0 }}>
                {streakDays} {streakDays === 1 ? 'día' : 'días'}
              </strong>
            </div>
          </div>

          <div className="ds-card ds-row" style={{ padding: 'var(--space-sm) var(--space-md)', gap: 'var(--space-sm)' }}>
            <Layers size={22} style={{ color: 'var(--accent)' }} />
            <div>
              <span className="ds-eyebrow">
                Tarjetas Pendientes (SR)
              </span>
              <strong className="ds-h3" style={{ display: 'block', margin: 0, color: dueQueueIds.length > 0 ? 'var(--color-accent-primary)' : 'var(--color-state-done)' }}>
                {dueQueueIds.length} {dueQueueIds.length === 1 ? 'tarjeta' : 'tarjetas'}
              </strong>
            </div>
          </div>

          <div className="ds-card ds-row" style={{ padding: 'var(--space-sm) var(--space-md)', gap: 'var(--space-sm)' }}>
            <CheckCircle2 size={22} style={{ color: 'var(--success)' }} />
            <div>
              <span className="ds-eyebrow">
                Lecciones Completadas
              </span>
              <strong className="ds-h3" style={{ display: 'block', margin: 0 }}>
                {completedLessons.size} / {englishCourse.units.flatMap(u => u.lessons).length}
              </strong>
            </div>
          </div>
        </div>

        {/* VISTAS DE PÁGINA (sin ruta): mismo lenguaje visual que snb-l3 */}
        <nav className="snb-l3" aria-label="Vistas de Inglés" style={{ margin: 0, padding: '0 0 6px', borderBottom: '1px solid var(--separator)' }}>
          {([
            { key: 'course', label: 'Unidades del Curso' },
            { key: 'spaced_repetition', label: `Repaso SM-2 (${dueQueueIds.length})` },
            { key: 'speaking', label: 'Speaking & STAR (Doc-23)' },
            { key: 'precision', label: 'Precisión C1 & Falsos Amigos' },
          ] as const).map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveMainTab(key)}
              className={`snb-l3-link${activeMainTab === key ? ' snb-l3-link-active' : ''}`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* TAB 1: CURSO POR UNIDADES */}
        {activeMainTab === 'course' && (
          <div className="ds-stack">
            {/* Unit Selector */}
            <div className="ds-row-wrap" style={{ gap: '6px' }}>
              {englishCourse.units.map((unit) => {
                const isUnitDone = unit.lessons.every((l) => completedLessons.has(l.id));
                const isActive = unit.id === selectedUnit.id;
                return (
                  <button
                    key={unit.id}
                    type="button"
                    onClick={() => {
                      setSelectedUnitId(unit.id);
                      setSelectedLessonIndex(0);
                    }}
                    className="ds-chip"
                    data-active={isActive}
                  >
                    <span>{isUnitDone ? '✓' : `U${unit.order}`}</span>
                    <span>{unit.title.split(':')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Lesson Selector within unit */}
            <div className="ds-row" style={{ gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
              {selectedUnit.lessons.map((lesson, idx) => {
                const isDone = completedLessons.has(lesson.id);
                const isActive = idx === selectedLessonIndex;
                return (
                  <button
                    key={lesson.id}
                    type="button"
                    onClick={() => setSelectedLessonIndex(idx)}
                    className="ds-chip"
                    data-active={isActive}
                  >
                    {isDone ? '✅ ' : `${idx + 1}. `} {lesson.title}
                  </button>
                );
              })}
            </div>

            {/* Current Lesson View */}
            {selectedLesson && (
              <div className="ds-stack-sm">
                <LessonView
                  lesson={selectedLesson}
                  initiallyCompleted={completedLessons.has(selectedLesson.id)}
                  onLessonCompleted={handleLessonComplete}
                />
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SPACED REPETITION SM-2 */}
        {activeMainTab === 'spaced_repetition' && (
          <div className="ds-stack-sm">
            <div className="ds-card ds-caption" style={{ padding: 'var(--space-sm) var(--space-md)' }}>
              Banco de <strong>128 términos técnicos</strong> en inglés (B2/C1). El algoritmo SM-2 optimiza los intervalos según tu calificación (Otra vez, Difícil, Bien, Fácil).
            </div>
            <VocabularySession language="en" catalogItems={englishTechnicalVocabulary} />
          </div>
        )}

        {/* TAB 3: SPEAKING PRACTICE */}
        {activeMainTab === 'speaking' && (
          <div className="ds-stack-sm">
            <SpeakingPracticeEN />
          </div>
        )}

        {/* TAB 4: PRECISION C1 & FALSE FRIENDS */}
        {activeMainTab === 'precision' && (
          <div className="ds-stack">
            {/* False Friends Section */}
            <div className="ds-card ds-stack-sm">
              <h3 className="ds-h3" style={{ margin: 0 }}>
                ⚠️ Falsos Amigos Técnicos ES → EN
              </h3>
              <div className="ds-grid">
                {falseFriendsTechESEN.map((ff, idx) => (
                  <div key={idx} className="ds-card ds-stack-sm" style={{ padding: '10px 14px' }}>
                    <div className="ds-row-between">
                      <strong className="ds-label" style={{ color: 'var(--color-accent-primary)' }}>
                        {ff.englishWord}
                      </strong>
                      <span className="ds-badge ds-badge-warning">
                        Falso Cognado
                      </span>
                    </div>
                    <p className="ds-caption" style={{ margin: '4px 0' }}>
                      {ff.trueEnglishMeaning}
                    </p>
                    <div className="ds-micro" style={{ borderTop: '1px dashed var(--color-border-subtle)', paddingTop: '4px', marginTop: '4px' }}>
                      <strong>Uso correcto:</strong> {ff.correctUsage}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Workplace Phrasal Verbs & Collocations */}
            <div className="ds-grid">
              <div className="ds-card ds-stack-sm">
                <h4 className="ds-label" style={{ margin: 0 }}>
                  Workplace Phrasal Verbs
                </h4>
                <div className="ds-stack-sm" style={{ gap: '6px' }}>
                  {workplacePhrasalVerbs.map((pv, idx) => (
                    <div key={idx} className="ds-caption" style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '4px' }}>
                      <strong style={{ color: 'var(--color-accent-primary)' }}>{pv.verb}:</strong>{' '}
                      <span style={{ color: 'var(--text-secondary)' }}>{pv.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ds-card ds-stack-sm">
                <h4 className="ds-label" style={{ margin: 0 }}>
                  Technical Collocations
                </h4>
                <div className="ds-stack-sm" style={{ gap: '6px' }}>
                  {technicalCollocations.map((tc, idx) => (
                    <div key={idx} className="ds-caption" style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '4px' }}>
                      <strong style={{ color: 'var(--color-accent-primary)' }}>{tc.collocation}:</strong>{' '}
                      <span style={{ color: 'var(--text-secondary)' }}>{tc.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </ErrorBoundary>
  );
}
