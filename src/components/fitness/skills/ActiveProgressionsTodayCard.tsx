// src/components/fitness/skills/ActiveProgressionsTodayCard.tsx
import React, { useState, useEffect } from 'react';
import {
  getActiveProgressionState,
  subscribeActiveProgressionState,
  setProgressionStepIndex,
  completeProgressionStep
} from '../../../data/fitness/activeProgressionStore';
import { calisthenicsProgressions } from '../../../data/fitness/progressionsData';
import { findExerciseMatches } from '../../../data/exercises';
import { PROGRESSION_ALIASES } from '../../../data/fitness/progressionAliases';
import { YouTubePlayer } from '../../ui/YouTubePlayer';
import { ChevronLeft, ChevronRight, CheckCircle2, Flame, BookOpen, ExternalLink } from 'lucide-react';

export default function ActiveProgressionsTodayCard() {
  const [activeState, setActiveState] = useState(getActiveProgressionState());
  const [selectedGroupIdx, setSelectedGroupIdx] = useState(0);

  useEffect(() => {
    return subscribeActiveProgressionState(setActiveState);
  }, []);

  const activeGroups = calisthenicsProgressions.filter(g => activeState.activeGroupIds.includes(g.id));

  if (activeGroups.length === 0) {
    return (
      <div style={{
        background: 'var(--surface-1, #0d0d0f)',
        border: '1px dashed rgba(255, 255, 255, 0.12)',
        borderRadius: '16px',
        padding: '20px',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '0.84rem'
      }}>
        <span>📌 No tienes progresiones activas marcadas. </span>
        <a
          href="/app/fitness/library/skills"
          style={{ color: 'var(--accent, #0a84ff)', fontWeight: 700, textDecoration: 'none', marginLeft: '4px' }}
        >
          Explorar Progresiones y Activar una ↗
        </a>
      </div>
    );
  }

  const currentGroup = activeGroups[selectedGroupIdx] || activeGroups[0];
  const stepIndex = activeState.currentStepIndex[currentGroup.id] ?? 0;
  const currentEx = currentGroup.exercises[stepIndex] || currentGroup.exercises[0];

  const prevEx = stepIndex > 0 ? currentGroup.exercises[stepIndex - 1] : null;
  const nextEx = stepIndex < currentGroup.exercises.length - 1 ? currentGroup.exercises[stepIndex + 1] : null;

  // Resolve DB matches
  const aliasNames = PROGRESSION_ALIASES[currentEx.name];
  const dbMatch = (aliasNames && aliasNames.length > 0)
    ? findExerciseMatches(aliasNames[0], 1)[0]
    : findExerciseMatches(currentEx.name, 1)[0];

  const videoUrl = currentEx.videoUrl || dbMatch?.youtubeLink || (dbMatch as any)?.videoOption1 || (dbMatch as any)?.videoUrl;
  const technique = (currentEx.technique && currentEx.technique.length > 0) ? currentEx.technique : (dbMatch?.techniquePoints || []);
  const primaryMuscles = (currentEx.primaryMuscles && currentEx.primaryMuscles.length > 0) ? currentEx.primaryMuscles : (dbMatch?.muscles?.strength || []);

  const handleStepPrev = () => {
    if (stepIndex > 0) {
      setProgressionStepIndex(currentGroup.id, stepIndex - 1);
    }
  };

  const handleStepNext = () => {
    if (stepIndex < currentGroup.exercises.length - 1) {
      setProgressionStepIndex(currentGroup.id, stepIndex + 1);
    }
  };

  const handleLogrado = () => {
    completeProgressionStep(currentGroup.id, stepIndex, currentGroup.exercises.length);
  };

  return (
    <div
      style={{
        background: 'var(--surface-1, #0d0d0f)',
        border: '1px solid rgba(48, 209, 88, 0.3)',
        borderRadius: '18px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.3), 0 0 20px rgba(48, 209, 88, 0.08)'
      }}
    >
      {/* HEADER WITH GROUP SELECTOR (IF MULTIPLE ACTIVE) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.74rem', background: 'rgba(48, 209, 88, 0.15)', color: '#30d158', border: '1px solid rgba(48, 209, 88, 0.3)', padding: '3px 10px', borderRadius: '12px', fontWeight: 800 }}>
            📌 PROGRESIÓN ACTIVA EN TRABAJO
          </span>
          {activeGroups.length > 1 && (
            <div style={{ display: 'flex', gap: '4px' }}>
              {activeGroups.map((grp, idx) => (
                <button
                  key={grp.id}
                  type="button"
                  onClick={() => setSelectedGroupIdx(idx)}
                  style={{
                    background: selectedGroupIdx === idx ? '#30d158' : 'rgba(255,255,255,0.06)',
                    color: selectedGroupIdx === idx ? '#000000' : 'rgba(255,255,255,0.7)',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '2px 8px',
                    fontSize: '0.72rem',
                    fontWeight: selectedGroupIdx === idx ? 700 : 500,
                    cursor: 'pointer'
                  }}
                >
                  {grp.title.split(':')[0] || grp.title.substring(0, 15)}
                </button>
              ))}
            </div>
          )}
        </div>

        <a
          href="/app/fitness/library/skills"
          style={{ fontSize: '0.76rem', color: 'var(--accent, #0a84ff)', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
        >
          <span>Ver todas las progresiones</span>
          <ExternalLink size={12} />
        </a>
      </div>

      <div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: '#ffffff', letterSpacing: '-0.01em' }}>
          {currentGroup.title}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
          {currentGroup.source === 'heria' ? (
            <span style={{ fontSize: '0.7rem', color: '#ff9f0a', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
              <Flame size={12} /> Chris Heria / ThenX
            </span>
          ) : (
            <span style={{ fontSize: '0.7rem', color: '#0a84ff', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
              <BookOpen size={12} /> Overcoming Gravity
            </span>
          )}
        </div>
      </div>

      {/* STEP CAROUSEL NAVIGATION CONTROLS (FITAPP PARADIGM: PREV / NEXT CARD VIEW) */}
      <div
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '12px',
          padding: '10px 14px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        {/* PREV STEP BUTTON */}
        <button
          type="button"
          onClick={handleStepPrev}
          disabled={!prevEx}
          style={{
            background: prevEx ? 'rgba(255,255,255,0.06)' : 'transparent',
            color: prevEx ? '#ffffff' : 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            padding: '6px 12px',
            fontSize: '0.76rem',
            fontWeight: 600,
            cursor: prevEx ? 'pointer' : 'not-allowed',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            maxWidth: '40%'
          }}
          title={prevEx ? `Ver paso anterior: ${prevEx.name}` : 'Primer paso'}
        >
          <ChevronLeft size={14} />
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {prevEx ? `Anterior: ${prevEx.name}` : 'Inicio'}
          </span>
        </button>

        {/* STEP COUNTER BADGE */}
        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#30d158', whiteSpace: 'nowrap' }}>
          Paso {stepIndex + 1} de {currentGroup.exercises.length}
        </span>

        {/* NEXT STEP BUTTON */}
        <button
          type="button"
          onClick={handleStepNext}
          disabled={!nextEx}
          style={{
            background: nextEx ? 'rgba(255,255,255,0.06)' : 'transparent',
            color: nextEx ? '#ffffff' : 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            padding: '6px 12px',
            fontSize: '0.76rem',
            fontWeight: 600,
            cursor: nextEx ? 'pointer' : 'not-allowed',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            maxWidth: '40%'
          }}
          title={nextEx ? `Ver paso siguiente: ${nextEx.name}` : 'Último paso'}
        >
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {nextEx ? `Siguiente: ${nextEx.name}` : 'Final'}
          </span>
          <ChevronRight size={14} />
        </button>
      </div>

      {/* CURRENT STEP EXERCISE CARD */}
      <div
        style={{
          background: 'rgba(0,0,0,0.3)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '14px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>
            {currentEx.name}
          </h4>
          {currentEx.level && (
            <span style={{ fontSize: '0.74rem', background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.8)', padding: '3px 10px', borderRadius: '12px', fontWeight: 700 }}>
              Level {currentEx.level}
            </span>
          )}
        </div>

        {/* EMBEDDED VIDEO WITH UNIVERSAL HIDE BUTTON */}
        {videoUrl && (
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <YouTubePlayer youtubeLink={videoUrl} exerciseName={currentEx.name} />
          </div>
        )}

        {/* TECHNIQUE POINTS */}
        {technique.length > 0 && (
          <div>
            <strong style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
              Puntos Clave de Técnica:
            </strong>
            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#e2e8f0', lineHeight: 1.5 }}>
              {technique.map((pt: string, idx: number) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          </div>
        )}

        {/* PRIMARY MUSCLES */}
        {primaryMuscles.length > 0 && (
          <div>
            <strong style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
              Músculos Principales:
            </strong>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {primaryMuscles.map((m: string, idx: number) => (
                <span key={idx} style={{ fontSize: '0.76rem', background: 'rgba(48, 209, 88, 0.12)', color: '#6ee7b7', border: '1px solid rgba(48, 209, 88, 0.25)', padding: '2px 8px', borderRadius: '6px', fontWeight: 600 }}>
                  💪 {m}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ACTION BUTTON: "¡Logré este ejercicio!" */}
        <button
          type="button"
          onClick={handleLogrado}
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #30d158 0%, #28a745 100%)',
            color: '#000000',
            border: 'none',
            borderRadius: '10px',
            padding: '12px 16px',
            fontSize: '0.9rem',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 4px 14px rgba(48, 209, 88, 0.3)',
            marginTop: '4px'
          }}
        >
          <CheckCircle2 size={18} />
          <span>¡Logré dominar este ejercicio! (Avanzar al siguiente paso)</span>
        </button>
      </div>
    </div>
  );
}
