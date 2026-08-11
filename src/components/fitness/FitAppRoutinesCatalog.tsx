// src/components/fitness/FitAppRoutinesCatalog.tsx
import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import WorkoutPrescriptionTable from './WorkoutPrescriptionTable';
import ActiveProgramSelector from './ActiveProgramSelector';
import { getProgramById } from '../../data/fitness/programs';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import { libraryAssetUrl } from '../../lib/library/openDocument';
import ExerciseModal from './ExerciseModal';
import { ExternalLink } from 'lucide-react';

export default function FitAppRoutinesCatalog() {
  const activeProgramId = useActiveProgramStore((s) => s.programId);
  const activeProgramIds = useActiveProgramStore((s) => s.activeProgramIds || [s.programId]);
  const toggleActiveProgram = useActiveProgramStore((s) => s.toggleActiveProgram);

  const [exerciseModalId, setExerciseModalId] = useState<string | null>(null);

  const currentProgram = getProgramById(activeProgramId);
  const cleanTitle = currentProgram.title.replace(/\s*\([^)]*\)/g, '').trim();
  const isActiveInTracker = activeProgramIds.includes(currentProgram.id);

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', color: 'var(--text-primary)' }}>
        
        {/* CABECERA DE LA SECCIÓN */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: 'var(--fs-step, 1.125rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
            Catálogo Oficial de Programas
          </h2>
        </div>

        {/* CÁPSULAS HORIZONTALES LIMPIAS */}
        <ActiveProgramSelector />

        {/* RECUADRO UNIFICADO: METADATOS DEL PROGRAMA + TABLA DE PRESCRIPCIÓN Y EJERCICIOS */}
        <div
          style={{
            background: 'var(--surface-1, #0d0d0f)',
            border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
            borderRadius: 'var(--radius-m, 12px)',
            padding: 'var(--space-md)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-md)'
          }}
        >
          {/* CABECERA UNIFICADA DEL PROGRAMA INSPECCIONADO */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '12px',
              paddingBottom: '12px',
              borderBottom: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))'
            }}
          >
            <div style={{ flex: 1, minWidth: '240px' }}>
              <span
                style={{
                  fontSize: 'var(--fs-eyebrow, 0.72rem)',
                  color: 'var(--accent, #0a84ff)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                {currentProgram.durationWeeks} SEMANAS · {currentProgram.split.length} DÍAS/SEM
              </span>
              <h3 style={{ fontSize: 'var(--fs-page, 1.25rem)', fontWeight: 800, margin: '2px 0 4px', color: 'var(--text-primary)' }}>
                {cleanTitle}
              </h3>
              <p style={{ fontSize: 'var(--fs-meta, 0.84rem)', color: 'var(--text-secondary)', margin: 0 }}>
                <strong>Metodología:</strong> {currentProgram.methodology.join(' · ')}
              </p>
            </div>

            {/* ACCIONES DEL PROGRAMA: BOTÓN PDF Y TOGGLE SWITCH SUTIL DE ACTIVACIÓN EN HOY */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {currentProgram.pdfUrl && (
                <a
                  href={libraryAssetUrl(currentProgram.pdfUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
                    color: 'var(--text-primary)',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-s, 8px)',
                    fontSize: 'var(--fs-meta, 0.82rem)',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 150ms ease'
                  }}
                >
                  <span>Ver PDF</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}

              {/* TOGGLE SWITCH DE ACTIVACIÓN (VERDE SI ACTIVO, GRIS SI INACTIVO, TOOLTIP EN HOVER) */}
              <button
                type="button"
                onClick={() => toggleActiveProgram(currentProgram.id)}
                aria-label={isActiveInTracker ? "Activo en 'Hoy' - Quitar" : "Activar en 'Hoy'"}
                title={isActiveInTracker ? "Activo en 'Hoy' - Quitar" : "Activar en 'Hoy'"}
                style={{
                  position: 'relative',
                  width: '42px',
                  height: '24px',
                  borderRadius: '999px',
                  background: isActiveInTracker ? 'var(--success, #30d158)' : 'rgba(255,255,255,0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '2px',
                  transition: 'background-color 200ms ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  outline: 'none'
                }}
              >
                <span
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
                    transform: isActiveInTracker ? 'translateX(18px)' : 'translateX(0px)',
                    transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              </button>
            </div>
          </div>

          {/* TABLA DE PRESCRIPCIÓN DEL PROGRAMA */}
          <WorkoutPrescriptionTable
            program={currentProgram}
            onOpenExerciseModal={(id) => setExerciseModalId(id)}
            hideHeaderPdf={true}
          />
        </div>

        {/* MODAL DE FICHA TÉCNICA FITAPP */}
        {exerciseModalId && (
          <ExerciseModal
            exerciseId={exerciseModalId}
            onClose={() => setExerciseModalId(null)}
          />
        )}
      </div>
    </ErrorBoundary>
  );
}
