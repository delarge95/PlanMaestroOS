import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import UnifiedRoutineTable from './UnifiedRoutineTable';
import { minMaxWeeks, powerbuildingWeeks, gluteWeeks } from '../../data/exercises/fitappRoutineDataset';

export default function FitAppRoutinesCatalog() {
  const [selectedProgram, setSelectedProgram] = useState<'minmax' | 'powerbuilding' | 'glute'>('minmax');

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#ffffff' }}>
        {/* TOP SELECTOR BAR FOR FITAPP-FREE OFFICIAL ROUTINES */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '6px', background: 'rgba(255,255,255,0.04)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            type="button"
            onClick={() => setSelectedProgram('minmax')}
            style={{
              background: selectedProgram === 'minmax' ? '#30d158' : 'transparent',
              color: selectedProgram === 'minmax' ? '#000000' : '#8e8e93',
              border: 'none',
              padding: '10px 18px',
              borderRadius: '12px',
              fontSize: '0.85rem',
              fontWeight: selectedProgram === 'minmax' ? 800 : 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            📋 Jeff Nippard Min-Max Program (Principal Válida)
          </button>

          <button
            type="button"
            onClick={() => setSelectedProgram('powerbuilding')}
            style={{
              background: selectedProgram === 'powerbuilding' ? '#0a84ff' : 'transparent',
              color: selectedProgram === 'powerbuilding' ? '#ffffff' : '#8e8e93',
              border: 'none',
              padding: '10px 18px',
              borderRadius: '12px',
              fontSize: '0.85rem',
              fontWeight: selectedProgram === 'powerbuilding' ? 800 : 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            🏋️ Powerbuilding Program (FitApp Base 4 Días)
          </button>

          <button
            type="button"
            onClick={() => setSelectedProgram('glute')}
            style={{
              background: selectedProgram === 'glute' ? '#bf5af2' : 'transparent',
              color: selectedProgram === 'glute' ? '#ffffff' : '#8e8e93',
              border: 'none',
              padding: '10px 18px',
              borderRadius: '12px',
              fontSize: '0.85rem',
              fontWeight: selectedProgram === 'glute' ? 800 : 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            🍑 Jeff Nippard Glute Hypertrophy Program
          </button>
        </div>

        {/* PROGRAM 1: MIN-MAX PROGRAM (UNIFIED ARCHITECTURE) */}
        {selectedProgram === 'minmax' && (
          <UnifiedRoutineTable
            programTitle="The Min-Max Program (Jeff Nippard 12 Semanas)"
            programSubtitle="Bajo Volumen, Máxima Intensidad & Sustituciones de Calistenia (Overcoming Gravity)"
            programBadge="PROGRAMA PRINCIPAL VÁLIDO • FITAPP-FREE DATASET"
            badgeColor="#30d158"
            summaryText="Estructura: 5 Días/sem (45 min) • RIR 1-2 (Bloque 1) / RIR 0 + Drop Sets (Bloque 2) • Regla Tempo HSR 3-0-3 en empujes y piernas"
            weeks={minMaxWeeks}
          />
        )}

        {/* PROGRAM 2: POWERBUILDING PROGRAM (UNIFIED ARCHITECTURE) */}
        {selectedProgram === 'powerbuilding' && (
          <UnifiedRoutineTable
            programTitle="FitApp Powerbuilding Program (Base 4 Días)"
            programSubtitle="Fuerza en Básicos (Squat, Deadlift, Bench, OHP) + Hipertrofia Estructural"
            programBadge="PROGRAMA BASE FITAPP-FREE • WORKOUTPROGRAM.TS"
            badgeColor="#0a84ff"
            summaryText="Estructura: 4 Días/sem • Enfoque en % 1RM y RPE 7-9 • Accesorios de hipertrofia y balance de hombros"
            weeks={powerbuildingWeeks}
          />
        )}

        {/* PROGRAM 3: GLUTE HYPERTROPHY PROGRAM (UNIFIED ARCHITECTURE) */}
        {selectedProgram === 'glute' && (
          <UnifiedRoutineTable
            programTitle="Jeff Nippard Glute Hypertrophy Program"
            programSubtitle="Especialización de Cadena Posterior, Glúteo Mayor y Medial con Pirámides y Bombeo Metabólico"
            programBadge="PROGRAMA ESPECIALIZADO FITAPP-FREE • JEFFNIPPARDGLUTEPROGRAM.TS"
            badgeColor="#bf5af2"
            summaryText="Estructura: 5 Días/sem • Bloque de Acumulación (Sem 1-6) + Bloque Metabólico (Sem 7-8) • Hip Thrusts & RDLs"
            weeks={gluteWeeks}
          />
        )}
      </div>
    </ErrorBoundary>
  );
}
