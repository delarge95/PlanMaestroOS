import React, { useState } from 'react';
import { initialVocabulary } from '../../data/languages/vocabulary';
import { updateVocabularyReview } from '../../lib/languages/spacedRepetition';
import type { VocabularyItem } from '../../data/languages/types';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';

export interface VocabularySessionProps {
  language?: string;
}

export default function VocabularySession({ language = 'de' }: VocabularySessionProps) {
  const [items, setItems] = useState<VocabularyItem[]>(() =>
    initialVocabulary.filter((item) => item.language === language || (!item.language && language === 'de'))
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const currentCard = items[currentIndex];

  const handleReview = (quality: 'good' | 'review') => {
    if (!currentCard) return;
    const updated = updateVocabularyReview(currentCard, quality);
    const nextList = [...items];
    nextList[currentIndex] = updated;
    setItems(nextList);
    setRevealed(false);

    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Reiniciar ciclo sin rachas punitivas
    }
  };

  return (
    <ErrorBoundary>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-xs)' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
            Vocabulario
          </h3>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
            Tarjeta {currentIndex + 1} de {items.length} (Repetición Espaciada)
          </span>
        </div>

        {currentCard && (
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
            <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
              {currentCard.topic} · Level {currentCard.level}
            </span>

            <strong style={{ fontSize: '1.6rem', color: 'var(--text)' }}>
              {currentCard.term}
            </strong>

            {revealed ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '4px' }}>
                <span style={{ fontSize: '1.1rem', color: 'var(--color-state-done)', fontWeight: 700 }}>
                  {currentCard.translation}
                </span>
                {currentCard.example && (
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>
                    "{currentCard.example}"
                  </span>
                )}
              </div>
            ) : (
              <Button variant="secondary" size="sm" onClick={() => setRevealed(true)}>
                Revelar
              </Button>
            )}
          </div>
        )}

        {revealed && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-sm)' }}>
            <Button variant="secondary" size="sm" onClick={() => handleReview('review')}>
              Repasar
            </Button>
            <Button variant="primary" size="sm" onClick={() => handleReview('good')}>
              Bien
            </Button>
          </div>
        )}

      </div>
    </ErrorBoundary>
  );
}
