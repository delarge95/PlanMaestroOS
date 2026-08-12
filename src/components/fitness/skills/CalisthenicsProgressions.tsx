// src/components/fitness/skills/CalisthenicsProgressions.tsx
import React, { useMemo, useState } from 'react';
import { calisthenicsProgressions } from '../../../data/fitness/progressionsData';
import YouTubePlayer from '../../ui/YouTubePlayer';
import { ChevronRight, Award } from 'lucide-react';
import type { SkillDomain, ProgressionExercise } from '../../../data/fitness/skills/types';

export interface CalisthenicsProgressionsProps {
  selectedDomain?: SkillDomain | 'all';
  onlyActive?: boolean;
  searchTerm?: string;
  onOpenDetail?: (exerciseName: string) => void;
  onSelectRoutine?: (routineId: string) => void;
}

export function CalisthenicsProgressions({
  searchTerm = ''
}: CalisthenicsProgressionsProps) {
  const [sourceFilter, setSourceFilter] = useState<'all' | 'heria' | 'og'>('all');
  const [expandedGroupIds, setExpandedGroupIds] = useState<string[]>(['core-compression']);
  const [expandedExerciseNames, setExpandedExerciseNames] = useState<string[]>([]);

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
      .filter((group) => group.exercises.length > 0);
  }, [searchTerm, sourceFilter]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>
      
      {/* CONMUTADOR DE FUENTE (TODOS | CHRIS HERIA | OVERCOMING GRAVITY) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          background: 'var(--surface-1, #0d0d0f)',
          border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
          borderRadius: '14px',
          padding: '12px 16px'
        }}
      >
        <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
          Filtrar metodología de progresión:
        </span>
        <div style={{ display: 'flex', gap: '6px', background: 'rgba(255,255,255,0.03)', padding: '3px', borderRadius: '999px' }}>
          <button
            type="button"
            onClick={() => setSourceFilter('all')}
            style={{
              background: sourceFilter === 'all' ? 'rgba(255,255,255,0.14)' : 'transparent',
              color: sourceFilter === 'all' ? '#ffffff' : 'rgba(255,255,255,0.55)',
              border: 'none',
              padding: '5px 12px',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: sourceFilter === 'all' ? 600 : 500,
              cursor: 'pointer'
            }}
          >
            🌐 Todos ({calisthenicsProgressions.reduce((acc, g) => acc + g.exercises.length, 0)})
          </button>
          <button
            type="button"
            onClick={() => setSourceFilter('heria')}
            style={{
              background: sourceFilter === 'heria' ? 'rgba(255,159,10,0.2)' : 'transparent',
              color: sourceFilter === 'heria' ? '#ff9f0a' : 'rgba(255,255,255,0.55)',
              border: sourceFilter === 'heria' ? '1px solid rgba(255,159,10,0.4)' : 'none',
              padding: '5px 12px',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: sourceFilter === 'heria' ? 600 : 500,
              cursor: 'pointer'
            }}
          >
            🔥 Chris Heria / Thenx
          </button>
          <button
            type="button"
            onClick={() => setSourceFilter('og')}
            style={{
              background: sourceFilter === 'og' ? 'rgba(10,132,255,0.2)' : 'transparent',
              color: sourceFilter === 'og' ? '#0a84ff' : 'rgba(255,255,255,0.55)',
              border: sourceFilter === 'og' ? '1px solid rgba(10,132,255,0.4)' : 'none',
              padding: '5px 12px',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: sourceFilter === 'og' ? 600 : 500,
              cursor: 'pointer'
            }}
          >
            📖 Overcoming Gravity
          </button>
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

                  {/* INTRO VIDEO PLAYER INLINE */}
                  {group.introVideo && (
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0a84ff' }}>
                          🎬 Video Introductorio de la Técnica
                        </span>
                      </div>
                      <YouTubePlayer youtubeLink={group.introVideo} exerciseName={`${group.title} Intro`} />
                    </div>
                  )}

                  {/* REQUERIMIENTOS PREVIOS */}
                  {group.requirements && group.requirements.length > 0 && (
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '12px 14px' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#30d158', display: 'block', marginBottom: '8px' }}>
                        📋 Requerimientos Previos Recomendados ({group.requirements.length})
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {group.requirements.map((req: any, idx: number) => (
                          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '8px 12px', borderRadius: '8px', fontSize: '0.82rem' }}>
                            <span style={{ fontWeight: 600, color: '#ffffff' }}>{req.exerciseName}</span>
                            <span style={{ color: '#30d158', fontWeight: 700, fontSize: '0.78rem' }}>
                              {req.repeatFormatted || `${req.repeat} ${req.repeatType}`}
                            </span>
                          </div>
                        ))}
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
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>
                                  {ex.name}
                                </span>
                                {ex.videoUrl && (
                                  <span style={{ fontSize: '0.68rem', background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', padding: '2px 6px', borderRadius: '999px' }}>
                                    ▶ Video
                                  </span>
                                )}
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '0.74rem', background: 'rgba(10,132,255,0.15)', color: '#0a84ff', padding: '2px 8px', borderRadius: '999px', fontWeight: 700 }}>
                                  Nivel {ex.level}
                                </span>
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

                            {/* DETALLE EXPANDIDO DEL EJERCICIO */}
                            {isExExpanded && (
                              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '14px', display: 'flex', flexDirection: 'column', gap: '12px', background: 'rgba(0,0,0,0.2)' }}>
                                {ex.videoUrl && (
                                  <YouTubePlayer youtubeLink={ex.videoUrl} secondaryVideoLink={ex.secondaryVideoUrl} exerciseName={ex.name} />
                                )}

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', fontSize: '0.82rem' }}>
                                  <div>
                                    <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>Prerequisitos: </span>
                                    <span style={{ color: '#ffffff' }}>{ex.prerequisites || 'Ninguno'}</span>
                                  </div>
                                  <div>
                                    <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>Desbloquea: </span>
                                    <span style={{ color: '#0a84ff', fontWeight: 600 }}>{ex.unlocks || 'N/A'}</span>
                                  </div>
                                </div>

                                {ex.technique && ex.technique.length > 0 && (
                                  <div>
                                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0a84ff', display: 'block', marginBottom: '4px' }}>
                                      Técnica & Ejecución
                                    </span>
                                    <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                                      {ex.technique.map((point: string, pIdx: number) => (
                                        <li key={pIdx}>{point}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {ex.primaryMuscles && ex.primaryMuscles.length > 0 && (
                                  <div>
                                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#30d158', display: 'block', marginBottom: '4px' }}>
                                      Músculos Principales (Fuerza)
                                    </span>
                                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                      {ex.primaryMuscles.map((m: string) => (
                                        <span key={m} style={{ background: 'rgba(48,209,88,0.12)', color: '#30d158', padding: '2px 8px', borderRadius: '6px', fontSize: '0.74rem', fontWeight: 600 }}>
                                          {m}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {ex.purpose && (
                                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', margin: 0, fontStyle: 'italic' }}>
                                    🎯 {ex.purpose}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>

                  {/* MASTER WORKOUT BANNER */}
                  {group.masterWorkout && (
                    <div
                      style={{
                        marginTop: '8px',
                        background: 'linear-gradient(135deg, rgba(255,159,10,0.12), rgba(255,255,255,0.02))',
                        border: '1px solid rgba(255,159,10,0.3)',
                        borderRadius: '12px',
                        padding: '14px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '10px'
                      }}
                    >
                      <div>
                        <h4 style={{ fontSize: '0.88rem', fontWeight: 800, margin: 0, color: '#ff9f0a', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Award size={16} />
                          {group.masterWorkout.name}
                        </h4>
                        <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginTop: '2px', display: 'block' }}>
                          {group.masterWorkout.exercises.length} ejercicios de entrenamiento guiado
                        </span>
                      </div>
                      <a
                        href="/app/fitness/library/routines"
                        style={{
                          background: 'var(--accent, #0a84ff)',
                          color: '#ffffff',
                          textDecoration: 'none',
                          padding: '6px 14px',
                          borderRadius: '8px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <span>Ver Rutina Master</span>
                        <ChevronRight size={14} />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalisthenicsProgressions;
