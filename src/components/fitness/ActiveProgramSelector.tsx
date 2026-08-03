import React, { useState } from 'react';
import { Play, Check, ExternalLink } from 'lucide-react';
import { allPrograms } from '../../data/fitness/programs';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import { libraryAssetUrl } from '../../lib/library/openDocument';

export function ActiveProgramSelector() {
  const inspectedProgramId = useActiveProgramStore((s) => s.programId);
  const activeProgramIds = useActiveProgramStore((s) => s.activeProgramIds || [s.programId]);
  const setActiveProgram = useActiveProgramStore((s) => s.setActiveProgram);
  const toggleActiveProgram = useActiveProgramStore((s) => s.toggleActiveProgram);

  const [hoveredProgramId, setHoveredProgramId] = useState<string | null>(null);

  // Active program to display detailed card for
  const activeDisplayId = hoveredProgramId || inspectedProgramId;
  const currentProgram = allPrograms.find((p) => p.id === activeDisplayId) || allPrograms[0];
  const isCurrentActive = activeProgramIds.includes(currentProgram.id);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      {/* 1. BARRA DE PILAS HORIZONTALES (ESTILO IMAGEN 1) CON SCROLL LIMPIO */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none' }}>
        {allPrograms.map((program) => {
          const isInspected = inspectedProgramId === program.id;
          const isActiveInTracker = activeProgramIds.includes(program.id);
          const isHovered = hoveredProgramId === program.id;

          // Clean title removing any parenthetical text
          const cleanTitle = program.title.replace(/\s*\([^)]*\)/g, '').trim();

          return (
            <button
              key={program.id}
              type="button"
              onClick={() => setActiveProgram(program.id, 1, program.weeks[0]?.days[0]?.id || '')}
              onMouseEnter={() => setHoveredProgramId(program.id)}
              onMouseLeave={() => setHoveredProgramId(null)}
              style={{
                background: isInspected
                  ? 'var(--color-accent-primary)'
                  : isHovered
                  ? 'var(--surface-elevated)'
                  : 'var(--surface)',
                color: isInspected ? '#ffffff' : 'var(--text-secondary)',
                border: isInspected
                  ? '1px solid var(--color-accent-primary)'
                  : isActiveInTracker
                  ? '1px solid var(--color-state-done)'
                  : '1px solid var(--color-border-subtle)',
                padding: '10px 18px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.88rem',
                fontWeight: isInspected || isActiveInTracker ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.15s ease',
                boxShadow: isInspected ? '0 4px 14px rgba(10, 132, 255, 0.25)' : 'none'
              }}
            >
              <span>{cleanTitle}</span>

              {isActiveInTracker && (
                <span
                  style={{
                    background: isInspected ? 'rgba(255,255,255,0.25)' : 'var(--color-state-done-soft)',
                    color: isInspected ? '#ffffff' : 'var(--color-state-done)',
                    padding: '2px 6px',
                    borderRadius: '999px',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px'
                  }}
                >
                  <Check size={10} /> ACTIVO
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* 2. TARJETA DE DETALLE EXPANDIDA (ESTILO IMAGEN 2) DEL PROGRAMA SELECCIONADO / HOVERED */}
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--color-border-visible)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-md)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-sm)',
          transition: 'all 0.2s ease'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {currentProgram.durationWeeks} SEMANAS · {currentProgram.split.length} DÍAS/SEM
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 4px', color: 'var(--text)' }}>
              {currentProgram.title.replace(/\s*\([^)]*\)/g, '').trim()}
            </h3>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: 0, maxWidth: '800px' }}>
              <strong>Metodología:</strong> {currentProgram.methodology.join(' · ')}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {currentProgram.pdfUrl && (
              <a
                href={libraryAssetUrl(currentProgram.pdfUrl)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--color-accent-primary)',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'rgba(10, 132, 255, 0.1)',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(10, 132, 255, 0.25)'
                }}
              >
                <span>Ver PDF</span>
                <ExternalLink size={14} />
              </a>
            )}

            <button
              type="button"
              onClick={() => toggleActiveProgram(currentProgram.id)}
              style={{
                background: isCurrentActive ? 'var(--color-state-done-soft)' : 'var(--color-accent-primary)',
                color: isCurrentActive ? 'var(--color-state-done)' : '#ffffff',
                border: isCurrentActive ? '1px solid var(--color-state-done)' : 'none',
                padding: '8px 18px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              {isCurrentActive ? (
                <>
                  <Check size={16} /> Programa Activo en Tracker
                </>
              ) : (
                <>
                  <Play size={16} /> Activar Programa
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveProgramSelector;
