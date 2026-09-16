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
import { progressionGroupToPathId } from '../../../data/fitness/progressionPathLinks';
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
      <div className="ds-empty">
        <span>📌 No tienes progresiones activas marcadas. </span>
        <a
          href="/app/fitness/skills"
          className="ds-btn ds-btn-ghost ds-btn-sm"
          style={{ fontWeight: 700 }}
        >
          Explorar Rutas de Habilidad y Activar una ↗
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
      className="ds-card ds-stack"
      style={{
        border: '1px solid rgba(48, 209, 88, 0.3)',
        borderRadius: '18px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.3), 0 0 20px rgba(48, 209, 88, 0.08)'
      }}
    >
      {/* HEADER WITH GROUP SELECTOR (IF MULTIPLE ACTIVE) */}
      <div className="ds-row-between" style={{ flexWrap: 'wrap', gap: '10px' }}>
        <div className="ds-row" style={{ flexWrap: 'wrap', gap: '8px' }}>
          <span className="ds-badge ds-badge-success" style={{ borderRadius: '12px' }}>
            📌 PROGRESIÓN ACTIVA EN TRABAJO
          </span>
          {activeGroups.length > 1 && (
            <div className="ds-row" style={{ gap: '4px' }}>
              {activeGroups.map((grp, idx) => (
                <button
                  key={grp.id}
                  type="button"
                  onClick={() => setSelectedGroupIdx(idx)}
                  className="ds-chip"
                  data-active={selectedGroupIdx === idx}
                >
                  {grp.title.split(':')[0] || grp.title.substring(0, 15)}
                </button>
              ))}
            </div>
          )}
        </div>

        <a
          href={
            progressionGroupToPathId(currentGroup.id, currentGroup.title)
              ? `/app/fitness/skills?path=${encodeURIComponent(progressionGroupToPathId(currentGroup.id, currentGroup.title) || '')}`
              : '/app/fitness/skills'
          }
          title="Abrir esta progresión enfocada en las rutas de habilidad"
          className="ds-btn ds-btn-ghost ds-btn-sm"
          style={{ gap: '4px' }}
        >
          <span>Ver esta ruta enfocada</span>
          <ExternalLink size={12} />
        </a>
      </div>

      <div>
        <h3 className="ds-h2">
          {currentGroup.title}
        </h3>
        <div className="ds-row" style={{ gap: '6px', marginTop: '4px' }}>
          {currentGroup.source === 'heria' ? (
            <span className="ds-badge ds-badge-warning" style={{ gap: '4px' }}>
              <Flame size={12} /> Chris Heria / ThenX
            </span>
          ) : (
            <span className="ds-badge ds-badge-accent" style={{ gap: '4px' }}>
              <BookOpen size={12} /> Overcoming Gravity
            </span>
          )}
        </div>
      </div>
      {/* STEP CAROUSEL NAVIGATION CONTROLS (FITAPP PARADIGM: PREV / NEXT CARD VIEW) */}
      <div
        className="ds-row-between"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 'var(--radius-m)',
          padding: '10px 14px',
        }}
      >
        {/* PREV STEP BUTTON */}
        <button
          type="button"
          onClick={handleStepPrev}
          disabled={!prevEx}
          className="ds-btn ds-btn-secondary ds-btn-sm"
          style={{
            cursor: prevEx ? 'pointer' : 'not-allowed',
            opacity: prevEx ? 1 : 0.4,
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
        <span className="ds-label" style={{ color: 'var(--success)', whiteSpace: 'nowrap' }}>
          Paso {stepIndex + 1} de {currentGroup.exercises.length}
        </span>

        {/* NEXT STEP BUTTON */}
        <button
          type="button"
          onClick={handleStepNext}
          disabled={!nextEx}
          className="ds-btn ds-btn-secondary ds-btn-sm"
          style={{
            cursor: nextEx ? 'pointer' : 'not-allowed',
            opacity: nextEx ? 1 : 0.4,
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
        className="ds-card-elevated ds-stack-sm"
        style={{
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '14px',
        }}
      >
        <div className="ds-row-between">
          <h4 className="ds-h3">
            {currentEx.name}
          </h4>
          {currentEx.level && (
            <span className="ds-badge ds-badge-neutral">
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
            <strong className="ds-eyebrow" style={{ marginBottom: '4px' }}>
              Puntos Clave de Técnica:
            </strong>
            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: 'var(--fs-meta)', color: '#e2e8f0', lineHeight: 1.5 }}>
              {technique.map((pt: string, idx: number) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          </div>
        )}

        {/* PRIMARY MUSCLES */}
        {primaryMuscles.length > 0 && (
          <div>
            <strong className="ds-eyebrow" style={{ marginBottom: '6px' }}>
              Músculos Principales:
            </strong>
            <div className="ds-row-wrap">
              {primaryMuscles.map((m: string, idx: number) => (
                <span key={idx} className="ds-badge ds-badge-success">
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
          className="ds-btn ds-btn-lg"
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, var(--success) 0%, #28a745 100%)',
            color: '#000000',
            border: 'none',
            borderRadius: '10px',
            padding: '12px 16px',
            fontWeight: 800,
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
