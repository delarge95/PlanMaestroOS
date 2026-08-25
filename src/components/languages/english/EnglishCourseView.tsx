// src/components/languages/english/EnglishCourseView.tsx
// Vista integrada del curso de inglés profesional (B2/C1)
// Consume vocabularyStore para SM-2, lecciones, racha y SpeakingPracticeEN.

import React, { useMemo, useState } from 'react';
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        
        {/* STATS & METRICS HEADER */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--space-sm)' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-sm) var(--space-md)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            <span style={{ fontSize: '1.5rem' }}>🔥</span>
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: 700 }}>
                Racha en Idiomas
              </span>
              <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--text)' }}>
                {streakDays} {streakDays === 1 ? 'día' : 'días'}
              </strong>
            </div>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-sm) var(--space-md)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            <span style={{ fontSize: '1.5rem' }}>📚</span>
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: 700 }}>
                Tarjetas Pendientes (SR)
              </span>
              <strong style={{ display: 'block', fontSize: '1.1rem', color: dueQueueIds.length > 0 ? 'var(--color-accent-primary)' : 'var(--color-success, #10b981)' }}>
                {dueQueueIds.length} {dueQueueIds.length === 1 ? 'tarjeta' : 'tarjetas'}
              </strong>
            </div>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-sm) var(--space-md)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            <span style={{ fontSize: '1.5rem' }}>✅</span>
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: 700 }}>
                Lecciones Completadas
              </span>
              <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--text)' }}>
                {completedLessons.size} / {englishCourse.units.flatMap(u => u.lessons).length}
              </strong>
            </div>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <div style={{ display: 'flex', gap: '6px', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-xs)', flexWrap: 'wrap' }}>
          <Button
            variant={activeMainTab === 'course' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setActiveMainTab('course')}
          >
            📖 Unidades del Curso
          </Button>
          <Button
            variant={activeMainTab === 'spaced_repetition' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setActiveMainTab('spaced_repetition')}
          >
            🧠 Repaso SM-2 ({dueQueueIds.length})
          </Button>
          <Button
            variant={activeMainTab === 'speaking' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setActiveMainTab('speaking')}
          >
            🎙️ Speaking & STAR (Doc-23)
          </Button>
          <Button
            variant={activeMainTab === 'precision' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setActiveMainTab('precision')}
          >
            🎯 Precisión C1 & Falsos Amigos
          </Button>
        </div>

        {/* TAB 1: CURSO POR UNIDADES */}
        {activeMainTab === 'course' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            {/* Unit Selector */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
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
                    style={{
                      background: isActive ? 'var(--color-accent-primary-soft)' : 'rgba(255,255,255,0.03)',
                      color: isActive ? 'var(--color-accent-primary)' : 'var(--text-secondary)',
                      border: `1px solid ${isActive ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)'}`,
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.78rem',
                      fontWeight: isActive ? 700 : 500,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span>{isUnitDone ? '✓' : `U${unit.order}`}</span>
                    <span>{unit.title.split(':')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Lesson Selector within unit */}
            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
              {selectedUnit.lessons.map((lesson, idx) => {
                const isDone = completedLessons.has(lesson.id);
                const isActive = idx === selectedLessonIndex;
                return (
                  <button
                    key={lesson.id}
                    type="button"
                    onClick={() => setSelectedLessonIndex(idx)}
                    style={{
                      background: isActive ? 'var(--surface-raised)' : 'var(--surface)',
                      color: isActive ? 'var(--text)' : 'var(--text-tertiary)',
                      border: `1px solid ${isActive ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)'}`,
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.75rem',
                      fontWeight: isActive ? 600 : 400,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {isDone ? '✅ ' : `${idx + 1}. `} {lesson.title}
                  </button>
                );
              })}
            </div>

            {/* Current Lesson View */}
            {selectedLesson && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <div style={{ background: 'var(--surface-raised, rgba(0,0,0,0.15))', padding: 'var(--space-sm) var(--space-md)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Banco de <strong>128 términos técnicos</strong> en inglés (B2/C1). El algoritmo SM-2 optimiza los intervalos según tu calificación (Otra vez, Difícil, Bien, Fácil).
              </span>
            </div>
            <VocabularySession language="en" catalogItems={englishTechnicalVocabulary} />
          </div>
        )}

        {/* TAB 3: SPEAKING PRACTICE */}
        {activeMainTab === 'speaking' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <SpeakingPracticeEN />
          </div>
        )}

        {/* TAB 4: PRECISION C1 & FALSE FRIENDS */}
        {activeMainTab === 'precision' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            {/* False Friends Section */}
            <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <h3 style={{ margin: 0, fontSize: '1rem', color: 'var(--text)', fontWeight: 700 }}>
                ⚠️ Falsos Amigos Técnicos ES → EN
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-sm)' }}>
                {falseFriendsTechESEN.map((ff, idx) => (
                  <div key={idx} style={{ background: 'var(--surface-raised, rgba(0,0,0,0.15))', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong style={{ color: 'var(--color-accent-primary)', fontSize: '0.9rem' }}>
                        {ff.englishWord}
                      </strong>
                      <span style={{ fontSize: '0.7rem', color: 'var(--color-danger, #ef4444)', fontWeight: 600 }}>
                        Falso Cognado
                      </span>
                    </div>
                    <p style={{ margin: '4px 0', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      {ff.trueEnglishMeaning}
                    </p>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', borderTop: '1px dashed var(--color-border-subtle)', paddingTop: '4px', marginTop: '4px' }}>
                      <strong>Uso correcto:</strong> {ff.correctUsage}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Workplace Phrasal Verbs & Collocations */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-md)' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                <h4 style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text)', fontWeight: 700 }}>
                  Workplace Phrasal Verbs
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '240px', overflowY: 'auto' }}>
                  {workplacePhrasalVerbs.map((pv, idx) => (
                    <div key={idx} style={{ fontSize: '0.78rem', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '4px' }}>
                      <strong style={{ color: 'var(--color-accent-primary)' }}>{pv.verb}:</strong>{' '}
                      <span style={{ color: 'var(--text-secondary)' }}>{pv.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                <h4 style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text)', fontWeight: 700 }}>
                  Technical Collocations
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '240px', overflowY: 'auto' }}>
                  {technicalCollocations.map((tc, idx) => (
                    <div key={idx} style={{ fontSize: '0.78rem', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '4px' }}>
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
