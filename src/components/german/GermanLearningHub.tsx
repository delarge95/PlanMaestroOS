import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';

interface Flashcard {
  german: string;
  phonetic: string;
  spanish: string;
  category: string;
}

const A1_FLASHCARDS: Flashcard[] = [
  { german: 'Guten Tag! Wie geht es Ihnen?', phonetic: 'Goo-ten Tag! Vee gayt es ee-nen?', spanish: '¡Buenos días! ¿Cómo está usted?', category: 'Saludos' },
  { german: 'Ich heiße Alexander und ich bin Technical Artist.', phonetic: 'Ikh hays-se Alexander oond ikh bin...', spanish: 'Me llamo Alexander y soy artista técnico.', category: 'Presentación' },
  { german: 'Sprechen Sie Englisch oder Deutsch?', phonetic: 'Shpre-khen zee eng-lish o-der doytsh?', spanish: '¿Habla usted inglés o alemán?', category: 'Comunicación' },
  { german: 'Entschuldigung, ich verstehe das nicht ganz.', phonetic: 'Ent-shool-dee-goong, ikh fer-shtay-he...', spanish: 'Disculpe, no entiendo eso del todo.', category: 'Frases Útiles' },
  { german: 'Das ist eine hervorragende Lösung.', phonetic: 'Das ist ay-ne her-vor-raa-gen-de...', spanish: 'Esa es una excelente solución.', category: 'Vocabulario Técnico' }
];

export default function GermanLearningHub() {
  const [streakDays, setStreakDays] = useState(14);
  const [activeTimer, setActiveTimer] = useState<number | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [activePhase, setActivePhase] = useState<'duolingo' | 'reading' | 'audio'>('duolingo');
  const [cardIndex, setCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    try {
      const savedStreak = localStorage.getItem('german_habit_streak');
      if (savedStreak) setStreakDays(parseInt(savedStreak));
    } catch (e) {
      console.error(e);
    }
  }, []);

  // 25 min timer (1500 seconds)
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && activeTimer !== null && activeTimer > 0) {
      interval = setInterval(() => {
        setActiveTimer((prev) => (prev !== null && prev > 1 ? prev - 1 : 0));
      }, 1000);
    } else if (activeTimer === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      setStreakDays((prev) => {
        const next = prev + 1;
        try { localStorage.setItem('german_habit_streak', next.toString()); } catch (e) {}
        return next;
      });
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, activeTimer]);

  const start25MinHabit = () => {
    setActiveTimer(1500); // 25 min
    setIsTimerRunning(true);
    setActivePhase('duolingo');
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentCard = A1_FLASHCARDS[cardIndex];

  return (
    <ErrorBoundary>
      <div
        style={{
          background: 'rgba(10, 15, 22, 0.8)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: '24px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          color: 'var(--color-text-primary)'
        }}
      >
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: 'var(--color-accent-warning)', fontWeight: 800, letterSpacing: '0.05em' }}>
              MÓDULO DE ALEMÁN A1-A2 • 13:30 - 14:00 DIARIO
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '2px 0 0', color: 'var(--color-text-primary)' }}>
              Hábito Sostenido de 25 Minutos
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '6px 14px', borderRadius: '12px', textAlign: 'center' }}>
              <span style={{ fontSize: '0.65rem', color: 'var(--color-accent-warning)', display: 'block', fontWeight: 700, fontFamily: 'Azeret Mono, monospace' }}>RACHA CONSECUTIVA</span>
              <strong style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)' }}>🔥 {streakDays} Días</strong>
            </div>

            <button
              type="button"
              onClick={start25MinHabit}
              style={{
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                border: 'none',
                color: '#040608',
                fontWeight: 800,
                padding: '10px 20px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '0.88rem',
                boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)'
              }}
            >
              ▶ Iniciar Sesión 13:30 (25 min)
            </button>
          </div>
        </div>

        {/* TIMER & PHASE BAR */}
        {isTimerRunning && activeTimer !== null && (
          <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '16px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span style={{ fontSize: '0.68rem', fontFamily: 'Azeret Mono, monospace', color: 'var(--color-accent-warning)', fontWeight: 800 }}>TEMPORIZADOR ACTIVO DE ALEMÁN</span>
              <h4 style={{ margin: '2px 0 0', fontSize: '1.4rem', fontWeight: 800, fontFamily: 'Azeret Mono, monospace', color: 'var(--color-text-primary)' }}>
                {formatTime(activeTimer)}
              </h4>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={() => setActivePhase('duolingo')}
                style={{
                  background: activePhase === 'duolingo' ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.06)',
                  border: `1px solid ${activePhase === 'duolingo' ? 'var(--color-state-done)' : 'rgba(255,255,255,0.1)'}`,
                  color: '#fff',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                1. Duolingo (5m)
              </button>

              <button
                type="button"
                onClick={() => setActivePhase('reading')}
                style={{
                  background: activePhase === 'reading' ? 'rgba(119,231,255,0.3)' : 'rgba(255,255,255,0.06)',
                  border: `1px solid ${activePhase === 'reading' ? 'var(--color-accent-primary)' : 'rgba(255,255,255,0.1)'}`,
                  color: '#fff',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                2. Lectura A1 (10m)
              </button>

              <button
                type="button"
                onClick={() => setActivePhase('audio')}
                style={{
                  background: activePhase === 'audio' ? 'rgba(245,158,11,0.3)' : 'rgba(255,255,255,0.06)',
                  border: `1px solid ${activePhase === 'audio' ? 'var(--color-accent-warning)' : 'rgba(255,255,255,0.1)'}`,
                  color: '#fff',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                3. Audio IA (10m)
              </button>
            </div>
          </div>
        )}

        {/* FLASHCARDS INTERACTIVAS */}
        <div style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'Azeret Mono, monospace', color: 'var(--color-accent-warning)', fontWeight: 800 }}>
              TARJETA A1 #{cardIndex + 1} DE {A1_FLASHCARDS.length} • {currentCard.category.toUpperCase()}
            </span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={() => { setCardIndex((prev) => (prev > 0 ? prev - 1 : A1_FLASHCARDS.length - 1)); setShowAnswer(false); }}
                style={{ background: 'rgba(255,255,255,0.06)', border: 'none', color: '#fff', padding: '4px 10px', borderRadius: '6px', cursor: 'pointer' }}
              >
                ← Ant
              </button>
              <button
                type="button"
                onClick={() => { setCardIndex((prev) => (prev < A1_FLASHCARDS.length - 1 ? prev + 1 : 0)); setShowAnswer(false); }}
                style={{ background: 'rgba(255,255,255,0.06)', border: 'none', color: '#fff', padding: '4px 10px', borderRadius: '6px', cursor: 'pointer' }}
              >
                Sig →
              </button>
            </div>
          </div>

          <div
            onClick={() => setShowAnswer(!showAnswer)}
            style={{
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(245, 158, 11, 0.2)',
              borderRadius: '16px',
              padding: '24px',
              textAlign: 'center',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              transition: 'all 200ms ease'
            }}
          >
            <h4 style={{ fontSize: '1.3rem', color: 'var(--color-text-primary)', margin: 0, fontWeight: 800 }}>
              {currentCard.german}
            </h4>
            <span style={{ fontSize: '0.82rem', color: 'var(--color-accent-warning)', fontStyle: 'italic', fontFamily: 'Azeret Mono, monospace' }}>
              🗣️ Pronunciación: {currentCard.phonetic}
            </span>

            {showAnswer ? (
              <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-state-done)', fontSize: '1.05rem', fontWeight: 700 }}>
                🇲🇽 {currentCard.spanish}
              </div>
            ) : (
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', marginTop: '6px' }}>
                (Haz clic para revelar la traducción en español)
              </span>
            )}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
