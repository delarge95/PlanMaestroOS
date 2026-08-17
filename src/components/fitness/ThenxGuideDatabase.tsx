// src/components/fitness/ThenxGuideDatabase.tsx
import React, { useState } from 'react';
import thenxGuidesData from '../../data/fitness/thenx_technique_guides.json';
import { BookOpen, Play } from 'lucide-react';
import { isValidEmbedUrl } from '../../utils/security';

export interface ThenxGuideDatabaseProps {
  selectedGuideId?: string;
  onSelectGuideId?: (id: string) => void;
  hideHeader?: boolean;
  searchTerm?: string;
}

export default function ThenxGuideDatabase({
  selectedGuideId: externalGuideId,
  onSelectGuideId,
  hideHeader = false,
  searchTerm = ''
}: ThenxGuideDatabaseProps) {
  const [internalGuideId, setInternalGuideId] = useState<string>(thenxGuidesData[0]?.id || '53');
  const [activePartIndex, setActivePartIndex] = useState<number>(0);

  const selectedGuideId = externalGuideId ?? internalGuideId;

  const handleSelectGuide = (id: string) => {
    if (onSelectGuideId) {
      onSelectGuideId(id);
    } else {
      setInternalGuideId(id);
    }
    setActivePartIndex(0);
  };

  let guidesList = thenxGuidesData;
  if (searchTerm.trim()) {
    const term = searchTerm.toLowerCase();
    guidesList = guidesList.filter((g: any) =>
      g.title.toLowerCase().includes(term) ||
      g.description?.toLowerCase().includes(term)
    );
  }

  const selectedGuide = guidesList.find((g: any) => g.id === selectedGuideId) || guidesList[0] || thenxGuidesData[0];

  const getEmbedUrl = (url?: string) => {
    if (!url) return null;
    if (url.includes('vimeo.com')) {
      const match = url.match(/video\/(\d+)/);
      if (match && match[1]) {
        return `https://player.vimeo.com/video/${match[1]}?autoplay=0`;
      }
      return url;
    }
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : null;
    }
    return null;
  };

  const introEmbedUrl = getEmbedUrl(selectedGuide?.introVideo);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', color: 'var(--text-primary)' }}>
      {/* CABECERA (OCULTA CUANDO VIENE DESDE BLOQUE 1 DE LIBRARYSKILLS) */}
      {!hideHeader && (
        <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: 'var(--accent, #0a84ff)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Biblioteca de Guías Técnicas Thenx & Calistenia
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0', color: 'var(--text-primary)' }}>
              Tutoriales de Ejecución, Lecciones & Requisitos
            </h3>
          </div>

          {/* LISTA HORIZONTAL DE GUÍAS DISPONIBLES */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
            {guidesList.map((g: any) => {
              const isSelected = g.id === selectedGuideId;
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => handleSelectGuide(g.id)}
                  style={{
                    background: isSelected ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.03)',
                    color: isSelected ? '#ffffff' : 'rgba(255,255,255,0.55)',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '8px 14px',
                    fontSize: '0.82rem',
                    fontWeight: isSelected ? 600 : 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <BookOpen size={14} />
                  <span>{g.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* DETALLE DE LA GUÍA SELECCIONADA */}
      {selectedGuide && (
        <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: 'var(--success, #30d158)', fontWeight: 700, textTransform: 'uppercase' }}>
              Nivel: {selectedGuide.difficultyLevel}
            </span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '2px 0 6px', color: 'var(--text-primary)' }}>
              {selectedGuide.title}
            </h3>
            <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
              {selectedGuide.description}
            </p>
          </div>

          {/* VÍDEO INTRODUCTORIO DE LA GUÍA */}
          {introEmbedUrl && isValidEmbedUrl(introEmbedUrl) && (
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border-subtle)', background: '#000', aspectRatio: '16/9' }}>
              <iframe
                src={introEmbedUrl}
                title={selectedGuide.title}
                style={{ width: '100%', height: '100%', border: 'none' }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-presentation allow-forms"
              />
            </div>
          )}

          {/* PARTES & LECCIONES DE LA GUÍA */}
          {selectedGuide.parts && selectedGuide.parts.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '6px', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '8px', flexWrap: 'wrap' }}>
                {selectedGuide.parts.map((p: any, idx: number) => {
                  const isPartActive = activePartIndex === idx;
                  return (
                    <button
                      key={p.id || idx}
                      type="button"
                      onClick={() => setActivePartIndex(idx)}
                      style={{
                        background: isPartActive ? 'rgba(48,209,88,0.15)' : 'transparent',
                        color: isPartActive ? 'var(--success, #30d158)' : 'var(--text-secondary)',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: isPartActive ? 700 : 500,
                        cursor: 'pointer'
                      }}
                    >
                      {p.name}
                    </button>
                  );
                })}
              </div>

              {/* REQUISITOS O EJERCICIOS DE LA PARTE SELECCIONADA */}
              {selectedGuide.requirements && selectedGuide.requirements[activePartIndex] && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h4 style={{ margin: 0, fontSize: '0.94rem', color: 'var(--text-primary)' }}>
                    {selectedGuide.requirements[activePartIndex].name}
                  </h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {selectedGuide.requirements[activePartIndex].exercises?.map((ex: any, idx: number) => (
                      <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '10px', border: '1px solid var(--color-border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                        <div>
                          <strong style={{ fontSize: '0.88rem', color: 'var(--text-primary)', display: 'block' }}>
                            {ex.exerciseName}
                          </strong>
                          <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                            {ex.repeatFormatted || `${ex.repeat} ${ex.repeatType}`}
                          </span>
                        </div>

                        {ex.exerciseVideoUrl && (
                          <a
                            href={ex.exerciseVideoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontSize: '0.76rem',
                              color: 'var(--accent, #0a84ff)',
                              textDecoration: 'none',
                              fontWeight: 700,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              background: 'rgba(10,132,255,0.1)',
                              padding: '4px 10px',
                              borderRadius: '6px'
                            }}
                          >
                            <Play size={12} /> Reproducir Vídeo ↗
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
