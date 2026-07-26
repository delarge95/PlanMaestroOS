import React, { useState } from 'react';
import type { ExerciseEntry } from '../../data/exercises';

interface Props {
  exercise: ExerciseEntry | null;
  onClose: () => void;
}

export default function ExerciseModal({ exercise, onClose }: Props) {
  if (!exercise) return null;

  const [activeTab, setActiveTab] = useState<'technique' | 'muscles' | 'substitutions'>('technique');

  // Extract YouTube video ID if available
  const getYoutubeEmbedUrl = (url?: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}?autoplay=1` : null;
  };

  const embedUrl = getYoutubeEmbedUrl(exercise.youtubeLink);

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
          color: '#effff6'
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
                fontWeight: 800, 
                color: '#10b981', 
                background: 'rgba(16, 185, 129, 0.12)', 
                padding: '4px 10px', 
                borderRadius: '999px',
                border: '1px solid rgba(16, 185, 129, 0.25)'
              }}>
                {exercise.category.toUpperCase()}
              </span>
              {exercise.subcategory && (
                <span style={{ 
                  fontFamily: 'Azeret Mono, monospace', 
                  fontSize: '0.68rem', 
                  color: '#77e7ff', 
                  background: 'rgba(119, 231, 255, 0.1)', 
                  padding: '4px 10px', 
                  borderRadius: '999px' 
                }}>
                  {exercise.subcategory}
                </span>
              )}
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em', color: '#ffffff' }}>
              {exercise.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#a8b9b2',
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
        {embedUrl ? (
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#000', aspectRatio: '16/9' }}>
            <iframe
              src={embedUrl}
              title={exercise.name}
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : exercise.youtubeLink ? (
          <a
            href={exercise.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '16px',
              background: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '16px',
              color: '#f87171',
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
              color: activeTab === 'technique' ? '#10b981' : '#a8b9b2',
              padding: '6px 14px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.85rem'
            }}
          >
            Puntos de Técnica ({exercise.techniquePoints.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('muscles')}
            style={{
              background: activeTab === 'muscles' ? 'rgba(119, 231, 255, 0.2)' : 'transparent',
              border: 'none',
              color: activeTab === 'muscles' ? '#77e7ff' : '#a8b9b2',
              padding: '6px 14px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.85rem'
            }}
          >
            Músculos Solicitados
          </button>
          {exercise.substitutions && exercise.substitutions.length > 0 && (
            <button
              type="button"
              onClick={() => setActiveTab('substitutions')}
              style={{
                background: activeTab === 'substitutions' ? 'rgba(245, 158, 11, 0.2)' : 'transparent',
                border: 'none',
                color: activeTab === 'substitutions' ? '#f59e0b' : '#a8b9b2',
                padding: '6px 14px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.85rem'
              }}
            >
              Sustituciones ({exercise.substitutions.length})
            </button>
          )}
        </div>

        {/* TAB CONTENT */}
        <div style={{ flex: 1, minHeight: '160px' }}>
          {activeTab === 'technique' && (
            <ol style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {exercise.techniquePoints.map((pt, idx) => (
                <li key={idx} style={{ fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                  {pt}
                </li>
              ))}
            </ol>
          )}

          {activeTab === 'muscles' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <strong style={{ fontSize: '0.78rem', color: '#10b981', fontFamily: 'Azeret Mono, monospace', textTransform: 'uppercase' }}>
                  Fuerza Primaria:
                </strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                  {exercise.muscles.strength.map((m, idx) => (
                    <span key={idx} style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#6ee7b7', padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid rgba(16,185,129,0.3)' }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {exercise.muscles.stability && exercise.muscles.stability.length > 0 && (
                <div>
                  <strong style={{ fontSize: '0.78rem', color: '#77e7ff', fontFamily: 'Azeret Mono, monospace', textTransform: 'uppercase' }}>
                    Estabilidad / Sostén:
                  </strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                    {exercise.muscles.stability.map((m, idx) => (
                      <span key={idx} style={{ background: 'rgba(119, 231, 255, 0.12)', color: '#77e7ff', padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid rgba(119,231,255,0.25)' }}>
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
              {exercise.substitutions?.map((sub, idx) => (
                <span key={idx} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.85rem', color: '#effff6' }}>
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
