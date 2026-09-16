import React, { useEffect, useMemo, useRef, useState } from 'react';
import { initialVocabulary } from '../../data/languages/vocabulary';
import {
  useVocabularyStore,
  getDueQueue,
  getSchedulingFor
} from '../../lib/languages/vocabularyStore';
import type { ReviewQuality } from '../../lib/languages/spacedRepetition';
import type { VocabularyItem } from '../../data/languages/types';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';

export interface VocabularySessionProps {
  language?: string;
  /**
   * Catálogo alternativo de tarjetas (extensión aditiva: p. ej. AG-EN pasa su
   * propio banco). Por defecto usa initialVocabulary filtrado por idioma.
   */
  catalogItems?: VocabularyItem[];
}

const QUALITY_BUTTONS: { quality: ReviewQuality; label: string; variant: 'primary' | 'secondary' | 'ghost' }[] = [
  { quality: 'again', label: 'Otra vez', variant: 'secondary' },
  { quality: 'hard', label: 'Difícil', variant: 'secondary' },
  { quality: 'good', label: 'Bien', variant: 'primary' },
  { quality: 'easy', label: 'Fácil', variant: 'ghost' }
];

export default function VocabularySession({ language = 'de', catalogItems }: VocabularySessionProps) {
  const byLanguage = useVocabularyStore((s) => s.byLanguage);
  const recordReviewAction = useVocabularyStore((s) => s.recordReview);
  const logStudySession = useVocabularyStore((s) => s.logStudySession);

  const catalog = useMemo<VocabularyItem[]>(
    () =>
      catalogItems ??
      initialVocabulary.filter((item) => item.language === language || (!item.language && language === 'de')),
    [catalogItems, language]
  );

  const progress = byLanguage[language];

  // Cola de repaso REAL: vencidos primero (más retrasado arriba), luego nuevas.
  const dueIds = useMemo(() => getDueQueue(catalog, progress), [catalog, progress]);
  const itemById = useMemo(() => new Map(catalog.map((i) => [i.id, i])), [catalog]);

  const [sessionReviewed, setSessionReviewed] = useState<Set<string>>(new Set());
  const [indexInQueue, setIndexInQueue] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);

  // Log de sesión de estudio: minutos REALES transcurridos + tarjetas repasadas.
  const startedAtRef = useRef(Date.now());
  const reviewedCountRef = useRef(0);
  reviewedCountRef.current = reviewedCount;
  useEffect(() => {
    return () => {
      const minutes = Math.max(1, Math.round((Date.now() - startedAtRef.current) / 60000));
      if (reviewedCountRef.current > 0) {
        logStudySession({ language, minutes, cardsReviewed: reviewedCountRef.current });
      }
    };
  }, [language, logStudySession]);

  const queue = dueIds
    .map((id) => itemById.get(id))
    .filter((i): i is VocabularyItem => Boolean(i))
    .filter((item) => !sessionReviewed.has(item.id));

  const currentCard = queue[Math.min(indexInQueue, Math.max(queue.length - 1, 0))];

  const handleReview = (quality: ReviewQuality) => {
    if (!currentCard) return;
    recordReviewAction(language, currentCard.id, quality); // SM-2 + racha, persistido
    setReviewedCount((n) => n + 1);
    setRevealed(false);

    const nextReviewed = new Set(sessionReviewed);
    nextReviewed.add(currentCard.id);
    setSessionReviewed(nextReviewed);

    if (indexInQueue < queue.length - 1) setIndexInQueue(indexInQueue + 1);
    else setIndexInQueue(0);
  };

  const restartSession = () => {
    setSessionReviewed(new Set());
    setIndexInQueue(0);
    setRevealed(false);
  };

  const totalDue = queue.length;

  return (
    <ErrorBoundary>
      <div className="ds-card ds-stack">

        <div className="ds-row-between" style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-1)' }}>
          <h3 style={{ fontSize: 'var(--fs-section)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
            Vocabulario
          </h3>
          <span className="ds-micro">
            {totalDue > 0
              ? `Tarjeta ${Math.min(indexInQueue + 1, totalDue)} de ${totalDue} · ${reviewedCount} repasadas hoy`
              : reviewedCount > 0
                ? `Sesión completa ✓ (${reviewedCount} repasadas)`
                : 'Sin tarjetas pendientes'}
          </span>
        </div>

        {currentCard && (
          <>
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--color-border-visible)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-lg)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: 'var(--space-sm)',
              minHeight: '140px'
            }}>
              <span className="ds-eyebrow">
                {currentCard.topic} · Level {currentCard.level}
                {!currentCard.lastReviewed && !progress?.items[currentCard.id] ? ' · Nueva' : ''}
              </span>

              <strong style={{ fontSize: '1.6rem', color: 'var(--text)' }}>
                {currentCard.term}
              </strong>

              {revealed ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '4px' }}>
                  <span style={{ fontSize: 'var(--fs-step)', color: 'var(--color-state-done)', fontWeight: 700 }}>
                    {currentCard.translation}
                  </span>
                  {currentCard.example && (
                    <span style={{ fontSize: 'var(--fs-meta)', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>
                      "{currentCard.example}"
                    </span>
                  )}
                  <span style={{ fontSize: 'var(--fs-eyebrow)', color: 'var(--text-tertiary)' }}>
                    ease {getSchedulingFor(progress, currentCard.id).easeFactor.toFixed(2)} · intervalo {getSchedulingFor(progress, currentCard.id).intervalDays}d
                  </span>
                </div>
              ) : (
                <Button variant="secondary" size="sm" onClick={() => setRevealed(true)}>
                  Revelar
                </Button>
              )}
            </div>

            {revealed && (
              <div className="ds-row-wrap" style={{ justifyContent: 'center' }}>
                {QUALITY_BUTTONS.map(({ quality, label, variant }) => (
                  <Button key={quality} variant={variant} size="sm" onClick={() => handleReview(quality)}>
                    {label}
                  </Button>
                ))}
              </div>
            )}
          </>
        )}

        {!currentCard && reviewedCount > 0 && (
          <div style={{ textAlign: 'center', padding: 'var(--space-md)' }}>
            <Button variant="secondary" size="sm" onClick={restartSession}>
              Repasar otra tanda
            </Button>
          </div>
        )}

        {!currentCard && reviewedCount === 0 && (
          <div style={{ textAlign: 'center', padding: 'var(--space-md)', color: 'var(--text-tertiary)', fontSize: 'var(--fs-body)' }}>
            {catalog.length === 0
              ? 'Aún no hay vocabulario para este idioma.'
              : 'Todo al día: no hay tarjetas vencidas ni nuevas.'}
          </div>
        )}

      </div>
    </ErrorBoundary>
  );
}
