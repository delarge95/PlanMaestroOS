import React, { useState } from 'react';
import type { ExerciseEntry } from '../../data/exercises';
import { isValidEmbedUrl } from '../../utils/security';

import { getExerciseDetails } from '../../data/fitness/exerciseResolver';

interface Props {
  exercise?: ExerciseEntry | null;
  exerciseId?: string | null;
  onClose: () => void;
}

export default function ExerciseModal({ exercise, exerciseId, onClose }: Props) {
  const targetExercise = exercise || (exerciseId ? getExerciseDetails(exerciseId) : null);
  if (!targetExercise) return null;

  const [activeTab, setActiveTab] = useState<'technique' | 'muscles' | 'substitutions'>('technique');

  // Extract YouTube video ID if available
  const getYoutubeEmbedUrl = (url?: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}?autoplay=1` : null;
  };

  const embedUrl = getYoutubeEmbedUrl(targetExercise.youtubeLink);

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

        {/* YOUTUBE EMBED OR DIRECT LINK */}
        {embedUrl && isValidEmbedUrl(embedUrl, 'youtube') ? (
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#000', aspectRatio: '16/9' }}>
            <iframe
              src={embedUrl}
              title={targetExercise.name}
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-presentation"
            />
          </div>
        ) : targetExercise.youtubeLink && isValidEmbedUrl(targetExercise.youtubeLink, 'youtube') ? (
          <a
            href={targetExercise.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '16px',
              background: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '16px',
              color: 'var(--color-accent-danger)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              fontWeight: 700,
              fontSize: '0.9rem'
            }}
          >
            <span>▶</span> Ver Video de Técnica en YouTube ↗
          </a>
        ) : null}

        {/* TABS */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '10px' }}>
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
          {targetExercise.substitutions && targetExercise.substitutions.length > 0 && (
            <button
              type="button"
              onClick={() => setActiveTab('substitutions')}
              style={{
                background: activeTab === 'substitutions' ? 'rgba(245, 158, 11, 0.2)' : 'transparent',
                border: 'none',
                color: activeTab === 'substitutions' ? 'var(--color-accent-warning)' : 'var(--color-text-secondary)',
                padding: '6px 14px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.85rem'
              }}
            >
              Sustituciones ({targetExercise.substitutions.length})
            </button>
          )}
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
                    <span key={idx} style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#6ee7b7', padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid rgba(16,185,129,0.3)' }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {targetExercise.muscles.stability && targetExercise.muscles.stability.length > 0 && (
                <div>
                  <strong style={{ fontSize: '0.78rem', color: 'var(--color-accent-primary)', fontFamily: 'Azeret Mono, monospace', textTransform: 'uppercase' }}>
                    Estabilidad / Sostén:
                  </strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                    {targetExercise.muscles.stability.map((m, idx) => (
                      <span key={idx} style={{ background: 'rgba(119, 231, 255, 0.12)', color: 'var(--color-accent-primary)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid rgba(119,231,255,0.25)' }}>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'substitutions' && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {targetExercise.substitutions?.map((sub, idx) => (
                <span key={idx} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--color-text-primary)' }}>
                  🔄 {sub}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
