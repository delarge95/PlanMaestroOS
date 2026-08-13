// src/components/fitness/ExerciseModal.tsx
import React, { useState, useMemo } from 'react';
import type { ExerciseEntry } from '../../data/exercises';
import { getExerciseDetails } from '../../data/fitness/exerciseResolver';
import { exerciseDatabase } from '../../data/exercises';
import { YouTubePlayer } from '../ui/YouTubePlayer';
import { findSimilarExercises } from '../../lib/fitness/muscleMatchEngine';

interface Props {
  exercise?: ExerciseEntry | null;
  exerciseId?: string | null;
  onClose: () => void;
}

export default function ExerciseModal({ exercise, exerciseId, onClose }: Props) {
  const targetExercise = exercise || (exerciseId ? getExerciseDetails(exerciseId) : null);
  if (!targetExercise) return null;

  const [activeTab, setActiveTab] = useState<'technique' | 'muscles' | 'mobility' | 'substitutions'>('technique');
  const [showStaticSubs, setShowStaticSubs] = useState(false);
  const [selectedSubModal, setSelectedSubModal] = useState<string | null>(null);

  const videoUrl1 = targetExercise.youtubeLink || (targetExercise as any).videoOption1 || (targetExercise as any).videoUrl;
  const videoUrl2 = (targetExercise as any).secondaryVideoLink || (targetExercise as any).videoOption2 || (targetExercise as any).videoUrl2;

  const mobilityList: string[] = (targetExercise as any).mobilityRequirements || (targetExercise as any).mobility || [
    'Dorsiflexión adecuada de tobillo para profundidad biomecánica',
    'Extensión torácica & control neuromuscular de escápulas',
    'Flexibilidad de isquiotibiales & compresión activa de cadera'
  ];

  // Dynamic muscle-similarity substitutions (memoized for performance)
  const dynamicSubstitutions = useMemo(() => {
    return findSimilarExercises(
      targetExercise.name,
      targetExercise.muscles.strength || [],
      targetExercise.muscles.stability || [],
      exerciseDatabase,
      6,
      0.25
    );
  }, [targetExercise.name, targetExercise.muscles.strength, targetExercise.muscles.stability]);

  const handleMuscleClick = (mName: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = `/app/fitness/library/muscles?muscle=${encodeURIComponent(mName)}`;
    }
  };

  // Score bar fill color
  function scoreColor(score: number): string {
    if (score >= 0.7) return '#30d158'; // green
    if (score >= 0.45) return '#ff9f0a'; // orange
    return '#0a84ff'; // blue
  }

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(2, 4, 7, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 9999,
        display: 'grid',
        placeItems: 'center',
        padding: '20px',
        animation: 'fadeIn 200ms ease'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'rgba(15, 20, 26, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '24px',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(16, 185, 129, 0.08)',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          color: 'var(--color-text-primary)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <span style={{ 
                fontFamily: 'Azeret Mono, monospace', 
                fontSize: '0.68rem', 
                fontWeight: 700, 
                color: 'var(--color-state-done)', 
                background: 'rgba(16, 185, 129, 0.12)', 
                padding: '4px 10px', 
                borderRadius: '999px',
                border: '1px solid rgba(16, 185, 129, 0.25)'
              }}>
                {targetExercise.category.toUpperCase()}
              </span>
              {targetExercise.subcategory && (
                <span style={{ 
                  fontFamily: 'Azeret Mono, monospace', 
                  fontSize: '0.68rem', 
                  color: 'var(--color-accent-primary)', 
                  background: 'rgba(119, 231, 255, 0.1)', 
                  padding: '4px 10px', 
                  borderRadius: '999px' 
                }}>
                  {targetExercise.subcategory}
                </span>
              )}
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, margin: 0, letterSpacing: '-0.02em', color: 'var(--color-text-primary)' }}>
              {targetExercise.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'var(--color-text-secondary)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'grid',
              placeItems: 'center',
              fontSize: '1.1rem',
              transition: 'all 150ms ease'
            }}
          >
            ✕
          </button>
        </div>

        {/* INLINE REPRODUCTOR */}
        {(videoUrl1 || videoUrl2) && (
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <YouTubePlayer
              youtubeLink={videoUrl1}
              secondaryVideoLink={videoUrl2}
              exerciseName={targetExercise.name}
            />
          </div>
        )}

        {/* TABS */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '10px', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => setActiveTab('technique')}
            style={{
              background: activeTab === 'technique' ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
              border: 'none',
              color: activeTab === 'technique' ? 'var(--color-state-done)' : 'var(--color-text-secondary)',
              padding: '6px 14px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.85rem'
            }}
          >
            Puntos de Técnica ({targetExercise.techniquePoints.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('muscles')}
            style={{
              background: activeTab === 'muscles' ? 'rgba(119, 231, 255, 0.2)' : 'transparent',
              border: 'none',
              color: activeTab === 'muscles' ? 'var(--color-accent-primary)' : 'var(--color-text-secondary)',
              padding: '6px 14px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.85rem'
            }}
          >
            Músculos Solicitados
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('mobility')}
            style={{
              background: activeTab === 'mobility' ? 'rgba(10, 132, 255, 0.2)' : 'transparent',
              border: 'none',
              color: activeTab === 'mobility' ? 'var(--accent, #0a84ff)' : 'var(--color-text-secondary)',
              padding: '6px 14px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.85rem'
            }}
          >
            Requisitos de Movilidad
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('substitutions')}
            style={{
              background: activeTab === 'substitutions' ? 'rgba(245, 158, 11, 0.2)' : 'transparent',
              border: 'none',
              color: activeTab === 'substitutions' ? 'var(--color-accent-warning, #ff9f0a)' : 'var(--color-text-secondary)',
              padding: '6px 14px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.85rem'
            }}
          >
            Sustituciones ({dynamicSubstitutions.length})
          </button>
        </div>

        {/* TAB CONTENT */}
        <div style={{ flex: 1, minHeight: '160px' }}>
          {activeTab === 'technique' && (
            <ol style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {targetExercise.techniquePoints.map((pt, idx) => (
                <li key={idx} style={{ fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                  {pt}
                </li>
              ))}
            </ol>
          )}

          {activeTab === 'muscles' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <strong style={{ fontSize: '0.78rem', color: 'var(--color-state-done)', fontFamily: 'Azeret Mono, monospace', textTransform: 'uppercase' }}>
                  Fuerza Primaria:
                </strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                  {targetExercise.muscles.strength.map((m, idx) => (
                    <span
                      key={idx}
                      onClick={() => handleMuscleClick(m)}
                      title={`Ver anatomía de ${m} en Base de Datos de Músculos`}
                      style={{
                        background: 'rgba(16, 185, 129, 0.15)',
                        color: '#6ee7b7',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        border: '1px solid rgba(16,185,129,0.3)',
                        cursor: 'pointer',
                        fontWeight: 600
                      }}
                    >
                      {m} ↗
                    </span>
                  ))}
                </div>
              </div>

              {targetExercise.muscles.stability && targetExercise.muscles.stability.length > 0 && (
                <div>
                  <strong style={{ fontSize: '0.78rem', color: 'var(--color-accent-primary)', fontFamily: 'Azeret Mono, monospace', textTransform: 'uppercase' }}>
                    Estabilización & Sinergia:
                  </strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                    {targetExercise.muscles.stability.map((m, idx) => (
                      <span
                        key={idx}
                        onClick={() => handleMuscleClick(m)}
                        title={`Ver anatomía de ${m} en Base de Datos de Músculos`}
                        style={{
                          background: 'rgba(119, 231, 255, 0.12)',
                          color: '#77e7ff',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          border: '1px solid rgba(119,231,255,0.25)',
                          cursor: 'pointer',
                          fontWeight: 600
                        }}
                      >
                        {m} ↗
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'mobility' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--accent, #0a84ff)', fontWeight: 700, textTransform: 'uppercase' }}>
                Requisitos Articulares & Rango de Movimiento (ROM):
              </span>
              <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {mobilityList.map((mob, idx) => (
                  <li key={idx} style={{ fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                    {mob}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'substitutions' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                Ordenadas por similitud muscular real — comparten los mismos músculos primarios y de estabilización.
              </p>

              {/* DYNAMIC MUSCLE-SIMILARITY SUBSTITUTIONS */}
              {dynamicSubstitutions.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {dynamicSubstitutions.map((sub, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '10px',
                        padding: '10px 14px',
                        cursor: 'pointer',
                        transition: 'background 150ms ease'
                      }}
                      onClick={() => setSelectedSubModal(sub.name)}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>{sub.name}</span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: scoreColor(sub.score) }}>
                          {Math.round(sub.score * 100)}% similitud
                        </span>
                      </div>

                      {/* Score bar */}
                      <div style={{ height: '3px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', marginBottom: '6px' }}>
                        <div style={{
                          height: '100%',
                          width: `${Math.round(sub.score * 100)}%`,
                          background: scoreColor(sub.score),
                          borderRadius: '999px',
                          transition: 'width 300ms ease'
                        }} />
                      </div>

                      {/* Shared muscles */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {sub.sharedStrength.map(m => (
                          <span key={m} style={{ fontSize: '0.7rem', background: 'rgba(48,209,88,0.12)', color: '#6ee7b7', padding: '2px 6px', borderRadius: '4px', border: '1px solid rgba(48,209,88,0.2)' }}>
                            💪 {m}
                          </span>
                        ))}
                        {sub.sharedStability.slice(0, 3).map(m => (
                          <span key={m} style={{ fontSize: '0.7rem', background: 'rgba(119,231,255,0.08)', color: '#77e7ff', padding: '2px 6px', borderRadius: '4px' }}>
                            🔵 {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
                  No se encontraron sustituciones con similitud muscular significativa.
                </p>
              )}

              {/* AUTHOR'S STATIC SUBSTITUTIONS — collapsible secondary section */}
              {targetExercise.substitutions && targetExercise.substitutions.length > 0 && (
                <div style={{ marginTop: '8px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '8px' }}>
                  <button
                    type="button"
                    onClick={() => setShowStaticSubs(v => !v)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'rgba(255,255,255,0.45)',
                      fontSize: '0.76rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: 0
                    }}
                  >
                    {showStaticSubs ? '▲' : '▼'} Sugerencias del Autor ({targetExercise.substitutions.length})
                  </button>

                  {showStaticSubs && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                      {targetExercise.substitutions.map((subName, idx) => (
                        <span
                          key={idx}
                          onClick={() => setSelectedSubModal(subName)}
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'rgba(255,255,255,0.7)',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            fontSize: '0.78rem',
                            cursor: 'pointer'
                          }}
                        >
                          {subName}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* NESTED MODAL FOR SUBSTITUTION EXERCISE */}
      {selectedSubModal && (
        <ExerciseModal
          exerciseId={selectedSubModal}
          onClose={() => setSelectedSubModal(null)}
        />
      )}
    </div>
  );
}
