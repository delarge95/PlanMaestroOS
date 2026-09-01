// src/components/ui/YouTubePlayer.tsx
import React, { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { isValidEmbedUrl } from '../../utils/security';

export interface YouTubePlayerProps {
  youtubeLink: string | null | undefined;
  secondaryVideoLink?: string | null | undefined;
  exerciseName: string;
  className?: string;
  autoPlay?: boolean;
  defaultCollapsed?: boolean;
}

export function YouTubePlayer({
  youtubeLink,
  secondaryVideoLink,
  exerciseName,
  autoPlay = false,
  defaultCollapsed = false
}: YouTubePlayerProps) {
  const [selectedVideo, setSelectedVideo] = useState<'primary' | 'secondary'>('primary');
  const [useDirectMp4Mode, setUseDirectMp4Mode] = useState<boolean>(false);
  const [isPlayerVisible, setIsPlayerVisible] = useState<boolean>(!defaultCollapsed);

  const activeLink = selectedVideo === 'primary' 
    ? (youtubeLink || secondaryVideoLink) 
    : (secondaryVideoLink || youtubeLink);

  if (!activeLink) {
    return (
      <div
        style={{
          width: '100%',
          aspectRatio: '16/9',
          background: 'rgba(255,255,255,0.02)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px dashed rgba(255,255,255,0.12)',
          padding: '16px',
          color: 'var(--text-tertiary, rgba(255,255,255,0.4))',
          fontSize: '0.84rem'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <span>Sin enlace de demostración disponible para</span>
          <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>{exerciseName}</div>
        </div>
      </div>
    );
  }

  const hasBothVideos = Boolean(youtubeLink && secondaryVideoLink);
  const isVimeo = activeLink.includes('vimeo.com');
  const isYouTube = activeLink.includes('youtube.com') || activeLink.includes('youtu.be');

  // Extraer Vimeo Video ID
  const vimeoMatch = isVimeo ? activeLink.match(/vimeo\.com\/(?:progressive_redirect\/playback\/|external\/|video\/)?(\d+)/) : null;
  const vimeoId = vimeoMatch ? vimeoMatch[1] : null;

  const handleOpenNewTab = () => {
    window.open(activeLink, '_blank', 'noopener,noreferrer');
  };

  const getVideoBadgeLabel = (link: string | null | undefined) => {
    if (!link) return '';
    if (link.includes('vimeo.com')) return 'Vimeo MP4 HD';
    if (link.includes('youtube.com') || link.includes('youtu.be')) return 'YouTube';
    return 'Video MP4';
  };

  const renderPlayerContent = () => {
    // 1. VIMEO PLAYER HANDLING
    if (isVimeo) {
      if (useDirectMp4Mode) {
        return (
          <video
            key={activeLink}
            style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000000' }}
            controls
            playsInline
            preload="metadata"
            autoPlay={autoPlay}
            crossOrigin="anonymous"
          >
            <source src={activeLink} type="video/mp4" />
            Tu navegador no soporta reproducción MP4 directa.
          </video>
        );
      }

      const vimeoEmbedUrl = vimeoId 
        ? `https://player.vimeo.com/video/${vimeoId}?autoplay=${autoPlay ? 1 : 0}&title=0&byline=0&portrait=0&badge=0`
        : activeLink;

      if (!isValidEmbedUrl(vimeoEmbedUrl)) {
        return <div style={{ padding: '16px', color: '#ff6b6b' }}>URL de reproductor no válida o no permitida.</div>;
      }

      return (
        <iframe
          key={vimeoEmbedUrl}
          style={{ width: '100%', height: '100%', border: 'none' }}
          src={vimeoEmbedUrl}
          title={`Video demo para ${exerciseName}`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
          loading="lazy"
        />
      );
    }

    // 2. YOUTUBE PLAYER HANDLING
    if (isYouTube) {
      let embedUrl = '';
      if (activeLink.includes('youtube.com/results?search_query=')) {
        try {
          const urlObj = new URL(activeLink);
          const query = urlObj.searchParams.get('search_query') || exerciseName;
          embedUrl = `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(query)}`;
        } catch (e) {
          embedUrl = `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(exerciseName)}`;
        }
      } else {
        let videoId: string | null = null;
        try {
          const match =
            activeLink.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([a-zA-Z0-9_-]{11})/) ||
            activeLink.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
          if (match?.[1]) {
            videoId = match[1];
          }
        } catch (e) {
          console.warn('Error parsing YouTube ID', e);
        }

        if (videoId) {
          embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&controls=1&fs=1${autoPlay ? '&autoplay=1' : ''}`;
        } else {
          embedUrl = `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(exerciseName)}`;
        }
      }

      if (!isValidEmbedUrl(embedUrl)) {
        return <div style={{ padding: '16px', color: '#ff6b6b' }}>URL de reproductor no válida o no permitida.</div>;
      }

      return (
        <iframe
          key={embedUrl}
          style={{ width: '100%', height: '100%', border: 'none' }}
          src={embedUrl}
          title={`Video demo para ${exerciseName}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
          loading="lazy"
        />
      );
    }

    // 3. GENERIC MP4 PLAYER
    return (
      <video
        key={activeLink}
        style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000000' }}
        controls
        playsInline
        preload="metadata"
        autoPlay={autoPlay}
        crossOrigin="anonymous"
      >
        <source src={activeLink} type="video/mp4" />
        Tu navegador no soporta reproducción directa.
      </video>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
      {/* BARRA DE CONTROL DE FUENTES */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '10px 10px 0 0',
          padding: '6px 12px',
          fontSize: '0.78rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          {hasBothVideos ? (
            <>
              <button
                type="button"
                onClick={() => setSelectedVideo('primary')}
                style={{
                  background: selectedVideo === 'primary' ? 'var(--accent, #0a84ff)' : 'rgba(255,255,255,0.04)',
                  color: selectedVideo === 'primary' ? '#ffffff' : 'rgba(255,255,255,0.6)',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontWeight: selectedVideo === 'primary' ? 700 : 500,
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Play size={10} />
                <span>Opción 1 ({getVideoBadgeLabel(youtubeLink)})</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedVideo('secondary')}
                style={{
                  background: selectedVideo === 'secondary' ? 'var(--accent, #0a84ff)' : 'rgba(255,255,255,0.04)',
                  color: selectedVideo === 'secondary' ? '#ffffff' : 'rgba(255,255,255,0.6)',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontWeight: selectedVideo === 'secondary' ? 700 : 500,
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Play size={10} />
                <span>Opción 2 ({getVideoBadgeLabel(secondaryVideoLink)})</span>
              </button>
            </>
          ) : (
            <span
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: 'var(--text-secondary, rgba(255,255,255,0.7))',
                padding: '3px 8px',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '0.74rem'
              }}
            >
              {getVideoBadgeLabel(activeLink)}
            </span>
          )}

          {isVimeo && (
            <button
              type="button"
              onClick={() => setUseDirectMp4Mode(!useDirectMp4Mode)}
              style={{
                background: 'transparent',
                color: 'var(--text-tertiary, rgba(255,255,255,0.4))',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px',
                padding: '3px 8px',
                fontSize: '0.72rem',
                cursor: 'pointer'
              }}
              title="Alternar entre Iframe player y MP4 nativo"
            >
              {useDirectMp4Mode ? 'Modo: MP4 Nativo' : 'Modo: Iframe Player'}
            </button>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            type="button"
            onClick={() => setIsPlayerVisible(v => !v)}
            style={{
              background: 'transparent',
              color: isPlayerVisible ? 'rgba(255,255,255,0.5)' : 'var(--accent, #0a84ff)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '6px',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
              padding: '3px 8px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
            title={isPlayerVisible ? 'Ocultar video' : 'Mostrar video'}
          >
            {isPlayerVisible ? 'Ocultar ▲' : 'Ver Video ▼'}
          </button>

          <button
            type="button"
            onClick={handleOpenNewTab}
            style={{
              background: 'transparent',
              color: 'var(--accent, #0a84ff)',
              border: 'none',
              fontSize: '0.74rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
            title="Abrir video en nueva pestaña"
          >
            <span>Abrir pestaña</span>
            <ExternalLink size={12} />
          </button>
        </div>
      </div>

      {/* CONTENEDOR DEL REPRODUCTOR - COLAPSABLE */}
      {isPlayerVisible && (
        <div
          style={{
            width: '100%',
            aspectRatio: '16/9',
            borderRadius: '0 0 10px 10px',
            overflow: 'hidden',
            background: '#000000',
            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            position: 'relative'
          }}
        >
          {renderPlayerContent()}
        </div>
      )}
    </div>
  );
}

export default YouTubePlayer;
