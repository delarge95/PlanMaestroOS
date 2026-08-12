// src/components/fitness/skills/CalisthenicsProgressions.tsx
import React, { useMemo, useState } from 'react';
import { calisthenicsProgressions } from '../../../data/fitness/progressionsData';
import { exerciseDatabase } from '../../../data/exercises';
import { YouTubePlayer } from '../../ui/YouTubePlayer';
import ExerciseModal from '../ExerciseModal';
import { Search, ChevronRight } from 'lucide-react';

interface CalisthenicsProgressionsProps {
  onSearchTermChange?: (term: string) => void;
}

export function CalisthenicsProgressions({ onSearchTermChange }: CalisthenicsProgressionsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [methodologyFilter, setMethodologyFilter] = useState<'all' | 'heria' | 'og'>('all');
  const [patternFilter, setPatternFilter] = useState<string>('all');
  const [levelFilter, setLevelFilter] = useState<string>('all');

  // Accordeón y colapsables
  const [expandedGroupIds, setExpandedGroupIds] = useState<string[]>([]);
  const [expandedExerciseNames, setExpandedExerciseNames] = useState<string[]>([]);
  const [expandedReqIds, setExpandedReqIds] = useState<string[]>([]);
  const [expandedIntroVideoIds, setExpandedIntroVideoIds] = useState<string[]>([]);

  // Modal para requerimientos y ejercicios
  const [modalExerciseId, setModalExerciseId] = useState<string | null>(null);

  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    if (onSearchTermChange) onSearchTermChange(val);
  };

  const toggleGroup = (groupId: string) => {
    setExpandedGroupIds((prev) =>
      prev.includes(groupId) ? prev.filter((id) => id !== groupId) : [...prev, groupId]
    );
  };

  const toggleExercise = (name: string) => {
    setExpandedExerciseNames((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const toggleReq = (reqKey: string) => {
    setExpandedReqIds((prev) =>
      prev.includes(reqKey) ? prev.filter((k) => k !== reqKey) : [...prev, reqKey]
    );
  };

  const toggleIntroVideo = (groupId: string) => {
    setExpandedIntroVideoIds((prev) =>
      prev.includes(groupId) ? prev.filter((id) => id !== groupId) : [...prev, groupId]
    );
  };

  // Filtrado reactivo de progresiones
  const filteredProgressions = useMemo(() => {
    return calisthenicsProgressions.filter((group) => {
      // 1. Filtro por término de búsqueda
      if (searchTerm) {
        const q = searchTerm.toLowerCase().trim();
        const matchesTitle = group.title.toLowerCase().includes(q);
        const matchesIntro = group.introduction?.toLowerCase().includes(q);
        const matchesEx = group.exercises.some(
          (ex: any) =>
            ex.name.toLowerCase().includes(q) ||
            ex.purpose?.toLowerCase().includes(q) ||
            ex.primaryMuscles?.some((m: string) => m.toLowerCase().includes(q))
        );
        if (!matchesTitle && !matchesIntro && !matchesEx) return false;
      }

      // 2. Filtro por Metodología
      if (methodologyFilter === 'heria') {
        const isHeria = Boolean(group.introVideo || group.masterWorkout || group.requirements);
        if (!isHeria) return false;
      } else if (methodologyFilter === 'og') {
        const isOg = Boolean(group.exercises && group.exercises.some((e: any) => e.level));
        if (!isOg) return false;
      }

      // 3. Filtro por Patrón de Movimiento
      if (patternFilter !== 'all') {
        const titleLower = group.title.toLowerCase();
        if (patternFilter === 'pull' && !titleLower.includes('pulling') && !titleLower.includes('back lever') && !titleLower.includes('front lever') && !titleLower.includes('muscle-up')) return false;
        if (patternFilter === 'push' && !titleLower.includes('pushing') && !titleLower.includes('planche') && !titleLower.includes('dip') && !titleLower.includes('handstand')) return false;
        if (patternFilter === 'core' && !titleLower.includes('core') && !titleLower.includes('compression') && !titleLower.includes('l-sit')) return false;
        if (patternFilter === 'rings' && !titleLower.includes('ring') && !titleLower.includes('anillas')) return false;
      }

      // 4. Filtro por Nivel
      if (levelFilter !== 'all') {
        const targetLevel = parseInt(levelFilter, 10);
        const hasLevel = group.exercises.some((ex: any) => ex.level === targetLevel);
        if (!hasLevel) return false;
      }

      return true;
    });
  }, [searchTerm, methodologyFilter, patternFilter, levelFilter]);

  const patternOptions = [
    { key: 'all', label: 'Todos los Patrones' },
    { key: 'pull', label: 'Tracción / Pull' },
    { key: 'push', label: 'Empuje / Push' },
    { key: 'core', label: 'Core & Compresión' },
    { key: 'rings', label: 'Anillas & Soporte' }
  ];

  const levelOptions = [
    { key: 'all', label: 'Todos los Niveles' },
    { key: '1', label: 'Level 1 (Básico)' },
    { key: '2', label: 'Level 2' },
    { key: '3', label: 'Level 3' },
    { key: '4', label: 'Level 4' },
    { key: '5', label: 'Level 5 (Avanzado)' },
    { key: '7', label: 'Level 7 (Elite)' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      
      {/* BLOQUE DE BÚSQUEDA & FILTROS UNIFICADOS */}
      <div
        style={{
          background: 'var(--surface-1, #0d0d0f)',
          border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
          borderRadius: '16px',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-sm)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
        }}
      >
        {/* BARRA DE BÚSQUEDA */}
        <div style={{ position: 'relative', width: '100%' }}>
          <input
            type="text"
            placeholder="Buscar por habilidad (L-Sit, Front Lever, Planche, Muscle Up)..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            style={{
              width: '100%',
              background: 'rgba(0,0,0,0.4)',
              border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
              borderRadius: '8px',
              padding: '8px 12px 8px 32px',
              color: 'var(--text-primary)',
              fontSize: '0.86rem',
              outline: 'none'
            }}
          />
          <Search
            size={15}
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-tertiary)'
            }}
          />
        </div>

        {/* BOTONES PILLS: METODOLOGÍA */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', marginRight: '4px' }}>
            Metodología:
          </span>
          {[
            { key: 'all', label: '🌐 Todas' },
            { key: 'heria', label: '🔥 Chris Heria / ThenX' },
            { key: 'og', label: '📖 Overcoming Gravity' }
          ].map((m) => {
            const isSelected = methodologyFilter === m.key;
            return (
              <button
                key={m.key}
                type="button"
                onClick={() => setMethodologyFilter(m.key as any)}
                style={{
                  background: isSelected ? 'var(--accent, #0a84ff)' : 'rgba(255,255,255,0.04)',
                  color: isSelected ? '#ffffff' : 'var(--text-primary)',
                  border: isSelected ? '1px solid var(--accent, #0a84ff)' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '4px 12px',
                  fontSize: '0.76rem',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer'
                }}
              >
                {m.label}
              </button>
            );
          })}
        </div>

        {/* BOTONES PILLS: PATRÓN DE MOVIMIENTO */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', marginRight: '4px' }}>
            Patrón:
          </span>
          {patternOptions.map((po) => {
            const isSelected = patternFilter === po.key;
            return (
              <button
                key={po.key}
                type="button"
                onClick={() => setPatternFilter(po.key)}
                style={{
                  background: isSelected ? 'var(--success, #30d158)' : 'rgba(255,255,255,0.03)',
                  color: isSelected ? '#000000' : 'var(--text-primary)',
                  border: isSelected ? '1px solid var(--success, #30d158)' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '4px 10px',
                  fontSize: '0.76rem',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer'
                }}
              >
                {po.label}
              </button>
            );
          })}
        </div>

        {/* BOTONES PILLS: NIVEL */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', marginRight: '4px' }}>
            Nivel:
          </span>
          {levelOptions.map((lo) => {
            const isSelected = levelFilter === lo.key;
            return (
              <button
                key={lo.key}
                type="button"
                onClick={() => setLevelFilter(lo.key)}
                style={{
                  background: isSelected ? '#ff9f0a' : 'rgba(255,255,255,0.03)',
                  color: isSelected ? '#000000' : 'var(--text-primary)',
                  border: isSelected ? '1px solid #ff9f0a' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '4px 10px',
                  fontSize: '0.76rem',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer'
                }}
              >
                {lo.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* LISTA DE GRUPOS DE PROGRESIÓN */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        {filteredProgressions.map((group) => {
          const isGroupExpanded = expandedGroupIds.includes(group.id) || filteredProgressions.length === 1;

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
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: '#30d158' }}>
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

                  {/* REQUERIMIENTOS PREVIOS INTERACTIVOS CON APERTURA DE MODAL */}
                  {group.requirements && group.requirements.length > 0 && (
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '12px 14px' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#30d158', display: 'block', marginBottom: '8px' }}>
                        📋 Requerimientos Previos Recomendados ({group.requirements.length}) — Toca un ejercicio para ver video/ficha técnica
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
                                <div style={{ padding: '10px 12px', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                  {req.exerciseVideoUrl ? (
                                    <YouTubePlayer youtubeLink={req.exerciseVideoUrl} exerciseName={req.exerciseName} />
                                  ) : (
                                    <span style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>
                                      Sin video directo adjunto.
                                    </span>
                                  )}
                                  
                                  <button
                                    type="button"
                                    onClick={() => setModalExerciseId(req.exerciseName)}
                                    style={{
                                      background: 'rgba(10,132,255,0.15)',
                                      color: '#0a84ff',
                                      border: '1px solid rgba(10,132,255,0.3)',
                                      borderRadius: '6px',
                                      padding: '6px 12px',
                                      fontSize: '0.78rem',
                                      fontWeight: 700,
                                      cursor: 'pointer',
                                      width: 'fit-content'
                                    }}
                                  >
                                    🔍 Ver Ficha Técnica Completa de {req.exerciseName} ↗
                                  </button>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* LISTA DE EJERCICIOS DE LA PROGRESIÓN (ESTILO FITAPP CAPTURAS 1, 2 Y 3) */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {group.exercises.map((ex: any) => {
                      const isExExpanded = expandedExerciseNames.includes(ex.name);

                      // Resolver datos y video desde exerciseDatabase si no vienen en la progresión
                      const dbEx = exerciseDatabase[ex.name];
                      const videoUrl = ex.videoUrl || dbEx?.youtubeLink || (dbEx as any)?.videoOption1 || (dbEx as any)?.videoUrl;
                      const primaryMuscles = (ex.primaryMuscles && ex.primaryMuscles.length > 0) ? ex.primaryMuscles : (dbEx?.muscles?.strength || []);
                      const stabilizers = (ex.stabilizers && ex.stabilizers.length > 0) ? ex.stabilizers : (dbEx?.muscles?.stability || []);
                      const mobility = (ex.mobility && ex.mobility.length > 0) ? ex.mobility : ((dbEx as any)?.mobilityRequirements || (dbEx as any)?.mobility || []);
                      const technique = (ex.technique && ex.technique.length > 0) ? ex.technique : (dbEx?.techniquePoints || []);
                      const purpose = ex.purpose || dbEx?.subcategory || '';
                      const precautions = ex.precautions || [];

                      return (
                        <div
                          key={ex.name}
                          style={{
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            borderRadius: '12px',
                            overflow: 'hidden'
                          }}
                        >
                          {/* FILA DEL PASO DE PROGRESIÓN (CAPTURA 1 FITAPP) */}
                          <button
                            type="button"
                            onClick={() => toggleExercise(ex.name)}
                            style={{
                              width: '100%',
                              background: 'transparent',
                              border: 'none',
                              padding: '12px 16px',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              cursor: 'pointer',
                              textAlign: 'left'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <h4 style={{ fontSize: '0.94rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                                {ex.name}
                              </h4>
                              {videoUrl && (
                                <span style={{ fontSize: '0.68rem', background: 'rgba(10,132,255,0.2)', color: '#0a84ff', border: '1px solid rgba(10,132,255,0.4)', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
                                  🎬 Video
                                </span>
                              )}
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              {ex.level && (
                                <span style={{ fontSize: '0.74rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)', padding: '2px 10px', borderRadius: '12px', fontWeight: 600 }}>
                                  Level {ex.level}
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

                          {/* FICHA TÉCNICA DETALLADA FITAPP (CAPTURAS 2 Y 3) */}
                          {isExExpanded && (
                            <div style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                              
                              {/* 1. REPRODUCTOR DE VIDEO NATIVO (CAPTURA 2) */}
                              {videoUrl ? (
                                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                  <YouTubePlayer youtubeLink={videoUrl} exerciseName={ex.name} />
                                </div>
                              ) : (
                                <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
                                  Sin video demo asignado.
                                </span>
                              )}

                              {/* 2. REQUISITOS PREVIOS Y DESBLOQUEOS (CAPTURA 3) */}
                              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', fontSize: '0.84rem' }}>
                                <div>
                                  <strong style={{ color: 'rgba(255,255,255,0.5)' }}>Prerequisites: </strong>
                                  <span style={{ color: '#ffffff', fontWeight: 600 }}>{ex.prerequisites || 'None'}</span>
                                </div>
                                <div>
                                  <strong style={{ color: 'rgba(255,255,255,0.5)' }}>Unlocks: </strong>
                                  <span style={{ color: '#0a84ff', fontWeight: 600 }}>{ex.unlocks || 'Next Level'}</span>
                                </div>
                              </div>

                              {/* 3. TÉCNICA & FORMA */}
                              {technique.length > 0 && (
                                <div>
                                  <strong style={{ fontSize: '0.84rem', color: '#ffffff', display: 'block', marginBottom: '4px' }}>
                                    Technique & Form
                                  </strong>
                                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                                    {technique.map((t: string, tIdx: number) => (
                                      <li key={tIdx}>{t}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* 4. MÚSCULOS PRIMARIOS (FUERZA) */}
                              {primaryMuscles.length > 0 && (
                                <div>
                                  <strong style={{ fontSize: '0.84rem', color: '#ffffff', display: 'block', marginBottom: '6px' }}>
                                    Primary Muscles (Strength)
                                  </strong>
                                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    {primaryMuscles.map((m: string, mIdx: number) => (
                                      <span
                                        key={mIdx}
                                        onClick={() => setModalExerciseId(ex.name)}
                                        style={{
                                          background: 'rgba(10,132,255,0.15)',
                                          border: '1px solid rgba(10,132,255,0.3)',
                                          color: '#77e7ff',
                                          padding: '3px 10px',
                                          borderRadius: '6px',
                                          fontSize: '0.78rem',
                                          fontWeight: 600,
                                          cursor: 'pointer'
                                        }}
                                      >
                                        {m}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* 5. ESTABILIZADORES CLAVE */}
                              {stabilizers.length > 0 && (
                                <div>
                                  <strong style={{ fontSize: '0.84rem', color: '#ffffff', display: 'block', marginBottom: '6px' }}>
                                    Key Stabilizers (Balance)
                                  </strong>
                                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    {stabilizers.map((m: string, mIdx: number) => (
                                      <span
                                        key={mIdx}
                                        style={{
                                          background: 'rgba(255,255,255,0.06)',
                                          border: '1px solid rgba(255,255,255,0.12)',
                                          color: 'rgba(255,255,255,0.8)',
                                          padding: '3px 10px',
                                          borderRadius: '6px',
                                          fontSize: '0.78rem',
                                          fontWeight: 500
                                        }}
                                      >
                                        {m}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* 6. REQUISITOS DE MOVILIDAD */}
                              {mobility.length > 0 && (
                                <div>
                                  <strong style={{ fontSize: '0.84rem', color: '#ffffff', display: 'block', marginBottom: '4px' }}>
                                    Mobility Requirements
                                  </strong>
                                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                                    {mobility.map((mob: string, mobIdx: number) => (
                                      <li key={mobIdx}>{mob}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* 7. PRECAUCIONES */}
                              {precautions.length > 0 && (
                                <div>
                                  <strong style={{ fontSize: '0.84rem', color: '#ff453a', display: 'block', marginBottom: '4px' }}>
                                    Precautions
                                  </strong>
                                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#ff453a', lineHeight: 1.5 }}>
                                    {precautions.map((prec: string, precIdx: number) => (
                                      <li key={precIdx}>{prec}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* 8. PROPÓSITO FUNCIONAL */}
                              {purpose && (
                                <div>
                                  <strong style={{ fontSize: '0.84rem', color: '#ffffff', display: 'block', marginBottom: '2px' }}>
                                    Functional Purpose
                                  </strong>
                                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.4 }}>
                                    {purpose}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* MODAL DE FICHA TÉCNICA REUTILIZABLE PARA REQUERIMIENTOS Y EJERCICIOS */}
      {modalExerciseId && (
        <ExerciseModal
          exerciseId={modalExerciseId}
          onClose={() => setModalExerciseId(null)}
        />
      )}
    </div>
  );
}

export default CalisthenicsProgressions;
