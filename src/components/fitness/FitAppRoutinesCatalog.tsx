// src/components/fitness/FitAppRoutinesCatalog.tsx
import React, { useState, useEffect } from 'react';
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
  const setInspectedProgram = useActiveProgramStore((s) => s.setInspectedProgram);

  const [exerciseModalId, setExerciseModalId] = useState<string | null>(null);

  // Leer parámetro ?routine=ID de la URL al cargar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const routineParam = params.get('routine');
      if (routineParam && getProgramById(routineParam)) {
        setInspectedProgram(routineParam);
      }
    }
  }, [setInspectedProgram]);

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

            {/* A NIVEL DE LA DURACIÓN: MUESTRA EL SWITCH Y BOTÓN DE PDF */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {/* SWITCH SUTIL DE ACTIVADO/DESACTIVADO EN HOY */}
              <div
                onClick={() => toggleActiveProgram(currentProgram.id)}
                title={isActiveInTracker ? 'Activo en "Hoy" - Clic para desactivar' : 'Inactivo - Clic para activar en "Hoy"'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  padding: '4px 8px',
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '18px',
                    borderRadius: '10px',
                    background: isActiveInTracker ? 'var(--success, #30d158)' : 'rgba(255,255,255,0.2)',
                    position: 'relative',
                    transition: 'background 150ms ease'
                  }}
                >
                  <div
                    style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      position: 'absolute',
                      top: '2px',
                      left: isActiveInTracker ? '16px' : '2px',
                      transition: 'left 150ms ease'
                    }}
                  />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: isActiveInTracker ? 'var(--success, #30d158)' : 'var(--text-secondary)' }}>
                  {isActiveInTracker ? 'Activo en Hoy' : 'Inactivo'}
                </span>
              </div>

              {/* BOTÓN DOCUMENTO PDF OFICIAL DE LA RUTINA */}
              {currentProgram.pdfUrl && (
                <a
                  href={libraryAssetUrl(currentProgram.pdfUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    background: 'var(--accent, #0a84ff)',
                    color: '#ffffff',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  <ExternalLink size={13} />
                  <span>Ver PDF Oficial</span>
                </a>
              )}
            </div>
          </div>

          {/* TABLA UNIFICADA DE PRESCRIPCIÓN Y DETALLE DE DÍAS DE LA RUTINA */}
          <WorkoutPrescriptionTable
            program={currentProgram}
          />
        </div>

        {/* MODAL DE DETALLE DE EJERCICIO */}
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
