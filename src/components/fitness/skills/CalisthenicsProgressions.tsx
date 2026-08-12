// src/components/fitness/skills/CalisthenicsProgressions.tsx
import React, { useMemo, useState } from 'react';
import { calisthenicsProgressions } from '../../../data/fitness/progressionsData';
import YouTubePlayer from '../../ui/YouTubePlayer';
import { Search, ChevronRight } from 'lucide-react';
import type { ProgressionExercise } from '../../../data/fitness/skills/types';

export interface CalisthenicsProgressionsProps {
  searchTerm?: string;
  onSearchTermChange?: (term: string) => void;
  onOpenDetail?: (exerciseName: string) => void;
  onSelectRoutine?: (routineId: string) => void;
}

export function CalisthenicsProgressions({
  searchTerm: externalSearchTerm,
  onSearchTermChange
}: CalisthenicsProgressionsProps) {
  const [internalSearchTerm, setInternalSearchTerm] = useState('');
  const searchTerm = externalSearchTerm !== undefined ? externalSearchTerm : internalSearchTerm;

  const handleSearchChange = (term: string) => {
    setInternalSearchTerm(term);
    if (onSearchTermChange) onSearchTermChange(term);
  };

  const [sourceFilter, setSourceFilter] = useState<'all' | 'heria' | 'og'>('all');
  const [domainFilter, setDomainFilter] = useState<string>('all');
  const [expandedGroupIds, setExpandedGroupIds] = useState<string[]>(['core-compression']);
  const [expandedExerciseNames, setExpandedExerciseNames] = useState<string[]>([]);
  const [expandedIntroVideoIds, setExpandedIntroVideoIds] = useState<string[]>([]);
  const [expandedReqIds, setExpandedReqIds] = useState<string[]>([]);

  const toggleGroup = (groupId: string) => {
    setExpandedGroupIds((prev) =>
      prev.includes(groupId) ? prev.filter((id) => id !== groupId) : [...prev, groupId]
    );
  };

  const toggleExercise = (exName: string) => {
    setExpandedExerciseNames((prev) =>
      prev.includes(exName) ? prev.filter((n) => n !== exName) : [...prev, exName]
    );
  };

  const toggleIntroVideo = (groupId: string) => {
    setExpandedIntroVideoIds((prev) =>
      prev.includes(groupId) ? prev.filter((id) => id !== groupId) : [...prev, groupId]
    );
  };

  const toggleReq = (reqKey: string) => {
    setExpandedReqIds((prev) =>
      prev.includes(reqKey) ? prev.filter((k) => k !== reqKey) : [...prev, reqKey]
    );
  };

  const isHeriaExercise = (ex: ProgressionExercise, groupId: string): boolean => {
    if (['8', '9', '10', '11', '12', '13', '14'].some((id) => groupId.startsWith(id))) return true;
    if (ex.videoUrl && (ex.videoUrl.includes('vimeo.com') || ex.videoUrl.includes('youtube.com'))) return true;
    if (ex.technique?.some((t: string) => t.toLowerCase().includes('chris heria') || t.toLowerCase().includes('thenx'))) return true;
    return false;
  };

  const isOgExercise = (ex: ProgressionExercise, groupId: string): boolean => {
    if (['core-compression', 'back-lever', 'pistol-squat'].includes(groupId)) return true;
    if (!ex.videoUrl) return true;
    const ogKeywords = [
      'frog stand', 'tuck planche', 'advanced tuck', 'straddle planche', 'full planche',
      'german hang', 'skin the cat', 'tuck back lever', 'tuck front lever', 'single leg front lever',
      'wall handstand', 'freestanding handstand', 'kipping muscle'
    ];
    return ogKeywords.some((kw) => ex.name.toLowerCase().includes(kw));
  };

  const filteredProgressions = useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase();

    return calisthenicsProgressions
      .map((group) => {
        // 1. Filtro por Dominio / Patrón
        if (domainFilter !== 'all') {
          if (domainFilter === 'pull' && !['front-lever', 'back-lever', 'muscle-up'].includes(group.id)) return null;
          if (domainFilter === 'push' && !['planche', 'handstand-pushup', 'dips'].includes(group.id)) return null;
          if (domainFilter === 'core' && !['core-compression', 'l-sit-v-sit', 'dragon-flag'].includes(group.id)) return null;
          if (domainFilter === 'legs' && !['pistol-squat', 'shrimp-squat'].includes(group.id)) return null;
          if (domainFilter === 'rings' && !['rings-support', 'iron-cross'].includes(group.id)) return null;
        }

        let exercises = group.exercises;

        if (sourceFilter === 'heria') {
          exercises = exercises.filter((ex: ProgressionExercise) => isHeriaExercise(ex, group.id));
        } else if (sourceFilter === 'og') {
          exercises = exercises.filter((ex: ProgressionExercise) => isOgExercise(ex, group.id));
        }

        if (searchTerm && !group.title.toLowerCase().includes(lowerSearch)) {
          exercises = exercises.filter(
            (ex: ProgressionExercise) =>
              ex.name.toLowerCase().includes(lowerSearch) ||
              ex.purpose?.toLowerCase().includes(lowerSearch)
          );
        }

        return { ...group, exercises };
      })
      .filter((group): group is typeof calisthenicsProgressions[0] => group !== null && group.exercises.length > 0);
  }, [searchTerm, sourceFilter, domainFilter]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>
      
      {/* BLOQUE UNIFICADO: BÚSQUEDA + FILTROS INTERACTIVOS */}
      <div
        style={{
          background: 'var(--surface-1, #0d0d0f)',
          border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
          borderRadius: '16px',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
        }}
      >
        {/* BUSCADOR PRINCIPAL */}
        <div style={{ position: 'relative', width: '100%' }}>
          <Search
            size={16}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'rgba(255,255,255,0.4)'
            }}
          />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Buscar por ejercicio (Planche, Muscle Up, Front Lever) o requisito..."
            style={{
              width: '100%',
              padding: '9px 12px 9px 36px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#ffffff',
              fontSize: '0.86rem',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* PILLS DE FILTROS INTEGRADOS (METODOLOGÍA + PATRÓN DE MOVIMIENTO) */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '2px', scrollbarWidth: 'none', alignItems: 'center', flexWrap: 'wrap' }}>
          
          {/* GRUPO 1: METODOLOGÍA */}
          <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.03)', padding: '2px', borderRadius: '999px' }}>
            {[
              { key: 'all', label: '🌐 Todas' },
              { key: 'heria', label: '🔥 Chris Heria' },
              { key: 'og', label: '📖 Overcoming Gravity' }
            ].map((sf) => (
              <button
                key={sf.key}
                type="button"
                onClick={() => setSourceFilter(sf.key as any)}
                style={{
                  background: sourceFilter === sf.key ? 'var(--accent, #0a84ff)' : 'transparent',
                  color: sourceFilter === sf.key ? '#ffffff' : 'rgba(255,255,255,0.6)',
                  border: 'none',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  fontSize: '0.76rem',
                  fontWeight: sourceFilter === sf.key ? 700 : 500,
                  cursor: 'pointer'
                }}
              >
                {sf.label}
              </button>
            ))}
          </div>

          <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.08)', margin: '0 2px' }} />

          {/* GRUPO 2: PATRÓN / DOMINIO DE CALISTENIA */}
          {[
            { key: 'all', label: 'Todos los Patrones' },
            { key: 'pull', label: 'Tracción / Pull' },
            { key: 'push', label: 'Empuje / Push' },
            { key: 'core', label: 'Core & Compresión' },
            { key: 'legs', label: 'Pierna / Unilateral' },
            { key: 'rings', label: 'Anillas & Soporte' }
          ].map((df) => {
            const isSelected = domainFilter === df.key;
            return (
              <button
                key={df.key}
                type="button"
                onClick={() => setDomainFilter(df.key)}
                style={{
                  background: isSelected ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.04)',
                  color: isSelected ? '#ffffff' : 'rgba(255,255,255,0.6)',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '4px 10px',
                  fontSize: '0.76rem',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {df.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* LISTA DE GRUPOS DE PROGRESIÓN (15 HABILIDADES) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        {filteredProgressions.map((group) => {
          const isGroupExpanded = expandedGroupIds.includes(group.id) || filteredProgressions.length === 1;
          let currentPhase: string | undefined = undefined;

          return (
            <div
              key={group.id}
              style={{
                background: 'var(--surface-1, #0d0d0f)',
                border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
              }}
            >
              {/* CABECERA DEL GRUPO DE PROGRESIÓN */}
              <button
                type="button"
                onClick={() => toggleGroup(group.id)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  padding: '16px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>
                    {group.title}
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginTop: '2px', display: 'block' }}>
                    {group.exercises.length} pasos ordenados por nivel
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {group.introVideo && (
                    <span style={{ fontSize: '0.72rem', background: 'rgba(10,132,255,0.15)', color: '#0a84ff', padding: '3px 8px', borderRadius: '999px', fontWeight: 600 }}>
                      🎬 Intro Video
                    </span>
                  )}
                  <ChevronRight
                    size={20}
                    style={{
                      color: 'rgba(255,255,255,0.4)',
                      transform: isGroupExpanded ? 'rotate(90deg)' : 'none',
                      transition: 'transform 200ms ease'
                    }}
                  />
                </div>
              </button>

              {/* CONTENIDO EXPANDIDO DEL GRUPO */}
              {isGroupExpanded && (
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.5, fontStyle: 'italic' }}>
                    {group.introduction}
                  </p>

                  {/* INTRO VIDEO PLAYER COLAPSABLE */}
                  {group.introVideo && (
                    <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                      <button
                        type="button"
                        onClick={() => toggleIntroVideo(group.id)}
                        style={{
                          width: '100%',
                          background: 'transparent',
                          border: 'none',
                          padding: '10px 14px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0a84ff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          🎬 Video Introductorio de la Técnica
                        </span>
                        <span style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.5)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          {expandedIntroVideoIds.includes(group.id) ? 'Ocultar Video ▲' : 'Ver Video ▼'}
                        </span>
                      </button>
                      {expandedIntroVideoIds.includes(group.id) && (
                        <div style={{ padding: '0 12px 12px 12px' }}>
                          <YouTubePlayer youtubeLink={group.introVideo} exerciseName={`${group.title} Intro`} />
                        </div>
                      )}
                    </div>
                  )}

                  {/* REQUERIMIENTOS PREVIOS INTERACTIVOS */}
                  {group.requirements && group.requirements.length > 0 && (
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '12px 14px' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#30d158', display: 'block', marginBottom: '8px' }}>
                        📋 Requerimientos Previos Recomendados ({group.requirements.length}) — Toca un ejercicio para ver video/técnica
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {group.requirements.map((req: any, idx: number) => {
                          const reqKey = `${group.id}-req-${idx}`;
                          const isReqExpanded = expandedReqIds.includes(reqKey);

                          return (
                            <div
                              key={reqKey}
                              style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.06)',
                                borderRadius: '8px',
                                overflow: 'hidden'
                              }}
                            >
                              <button
                                type="button"
                                onClick={() => toggleReq(reqKey)}
                                style={{
                                  width: '100%',
                                  background: 'transparent',
                                  border: 'none',
                                  padding: '8px 12px',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  cursor: 'pointer',
                                  fontSize: '0.82rem'
                                }}
                              >
                                <span style={{ fontWeight: 600, color: '#ffffff' }}>{req.exerciseName}</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <span style={{ color: '#30d158', fontWeight: 700, fontSize: '0.78rem' }}>
                                    {req.repeatFormatted || `${req.repeat} ${req.repeatType}`}
                                  </span>
                                  <ChevronRight
                                    size={14}
                                    style={{
                                      color: 'rgba(255,255,255,0.4)',
                                      transform: isReqExpanded ? 'rotate(90deg)' : 'none',
                                      transition: 'transform 150ms ease'
                                    }}
                                  />
                                </div>
                              </button>

                              {/* DETALLE Y VIDEO DEL REQUERIMIENTO */}
                              {isReqExpanded && (
                                <div style={{ padding: '10px 12px', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                  {req.videoUrl ? (
                                    <YouTubePlayer youtubeLink={req.videoUrl} exerciseName={req.exerciseName} />
                                  ) : (
                                    <span style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>
                                      Sin video demo adjunto para este requerimiento.
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* LISTA DE EJERCICIOS Y FASES */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {group.exercises.map((ex: any) => {
                      const isExExpanded = expandedExerciseNames.includes(ex.name);
                      const showPhaseHeader = ex.phaseName && ex.phaseName !== currentPhase;
                      if (ex.phaseName) currentPhase = ex.phaseName;

                      return (
                        <React.Fragment key={ex.name}>
                          {showPhaseHeader && (
                            <div style={{ paddingTop: '12px', paddingBottom: '4px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                              <span style={{ fontSize: '0.76rem', fontWeight: 800, color: '#ff9f0a', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                📌 {ex.phaseName}
                              </span>
                            </div>
                          )}

                          <div
                            style={{
                              background: 'rgba(255,255,255,0.02)',
                              border: '1px solid rgba(255,255,255,0.06)',
                              borderRadius: '12px',
                              overflow: 'hidden'
                            }}
                          >
                            <button
                              type="button"
                              onClick={() => toggleExercise(ex.name)}
                              style={{
                                width: '100%',
                                background: 'transparent',
                                border: 'none',
                                padding: '12px 14px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                textAlign: 'left'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span
                                  style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    background: 'rgba(10,132,255,0.15)',
                                    color: '#0a84ff',
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                  }}
                                >
                                  {ex.level}
                                </span>
                                <div>
                                  <h4 style={{ fontSize: '0.92rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                                    {ex.name}
                                  </h4>
                                  <span style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.45)' }}>
                                    Meta: {ex.target}
                                  </span>
                                </div>
                              </div>

                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                {ex.videoUrl && (
                                  <span style={{ fontSize: '0.68rem', background: 'rgba(48,209,88,0.15)', color: '#30d158', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
                                    VIDEO
                                  </span>
                                )}
                                <ChevronRight
                                  size={16}
                                  style={{
                                    color: 'rgba(255,255,255,0.4)',
                                    transform: isExExpanded ? 'rotate(90deg)' : 'none',
                                    transition: 'transform 150ms ease'
                                  }}
                                />
                              </div>
                            </button>

                            {/* CONTENIDO DESPLEGABLE DEL EJERCICIO */}
                            {isExExpanded && (
                              <div style={{ padding: '14px', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {ex.purpose && (
                                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.4 }}>
                                    <strong>Propósito:</strong> {ex.purpose}
                                  </p>
                                )}

                                {ex.technique && ex.technique.length > 0 && (
                                  <div>
                                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0a84ff', display: 'block', marginBottom: '4px' }}>
                                      Puntos Clave de Técnica:
                                    </span>
                                    <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)' }}>
                                      {ex.technique.map((t: string, tIdx: number) => (
                                        <li key={tIdx}>{t}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {ex.videoUrl && (
                                  <div style={{ marginTop: '4px' }}>
                                    <YouTubePlayer youtubeLink={ex.videoUrl} exerciseName={ex.name} />
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
