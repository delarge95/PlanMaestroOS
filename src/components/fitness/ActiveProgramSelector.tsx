import React, { useState } from 'react';
import { Plus, Check, X } from 'lucide-react';
import { allPrograms } from '../../data/fitness/programs';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';

export function ActiveProgramSelector() {
  const inspectedProgramId = useActiveProgramStore((s) => s.programId);
  const activeProgramIds = useActiveProgramStore((s) => s.activeProgramIds || [s.programId]);
  const setInspectedProgram = useActiveProgramStore((s) => s.setInspectedProgram);
  const toggleActiveProgram = useActiveProgramStore((s) => s.toggleActiveProgram);

  const [hoveredProgramId, setHoveredProgramId] = useState<string | null>(null);

  // The program shown in the detail card (hovered > inspected)
  const previewProgram = hoveredProgramId
    ? allPrograms.find((p) => p.id === hoveredProgramId)
    : allPrograms.find((p) => p.id === inspectedProgramId) || allPrograms[0];

  const previewIsActive = previewProgram ? activeProgramIds.includes(previewProgram.id) : false;
  const isPreviewing = hoveredProgramId !== null && hoveredProgramId !== inspectedProgramId;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>

      {/* 1. BARRA DE PILAS — click = solo inspeccionar, hover = previsualizar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        overflowX: 'auto',
        paddingBottom: '4px',
        scrollbarWidth: 'none'
      }}>
        {allPrograms.map((program) => {
          const isInspected = inspectedProgramId === program.id;
          const isActive = activeProgramIds.includes(program.id);
          const isHovered = hoveredProgramId === program.id;
          const cleanTitle = program.title.replace(/\s*\([^)]*\)/g, '').trim();

          return (
            <div
              key={program.id}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0', position: 'relative' }}
            >
              {/* PILA — click inspecciona, hover previsualiza */}
              <button
                type="button"
                onClick={() => setInspectedProgram(program.id)}
                onMouseEnter={() => setHoveredProgramId(program.id)}
                onMouseLeave={() => setHoveredProgramId(null)}
                title={`${cleanTitle} — Clic para ver detalles`}
                style={{
                  background: isInspected
                    ? 'var(--color-accent-primary)'
                    : isHovered
                    ? 'var(--surface-elevated)'
                    : 'var(--surface)',
                  color: isInspected ? '#ffffff' : 'var(--text-secondary)',
                  border: isInspected
                    ? '1px solid var(--color-accent-primary)'
                    : isActive
                    ? '1px solid var(--color-state-done)'
                    : '1px solid var(--color-border-subtle)',
                  padding: '9px 16px',
                  borderRadius: isActive ? 'var(--radius-md) 0 0 var(--radius-md)' : 'var(--radius-md)',
                  fontSize: '0.88rem',
                  fontWeight: isInspected || isActive ? 700 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  transition: 'all 0.15s ease',
                  boxShadow: isInspected ? '0 4px 14px rgba(10, 132, 255, 0.25)' : 'none'
                }}
              >
                <span>{cleanTitle}</span>
                {isActive && (
                  <span style={{
                    background: isInspected ? 'rgba(255,255,255,0.22)' : 'var(--color-state-done-soft)',
                    color: isInspected ? '#fff' : 'var(--color-state-done)',
                    padding: '1px 5px',
                    borderRadius: '999px',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '2px'
                  }}>
                    <Check size={9} /> HOY
                  </span>
                )}
              </button>

              {/* BOTÓN "+" para activar en tracker — solo si no está activo */}
              {!isActive ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleActiveProgram(program.id);
                  }}
                  onMouseEnter={() => setHoveredProgramId(program.id)}
                  onMouseLeave={() => setHoveredProgramId(null)}
                  title={`Activar "${cleanTitle}" en Tracker Hoy`}
                  style={{
                    background: 'var(--surface)',
                    color: 'var(--color-state-done)',
                    border: '1px solid var(--color-border-subtle)',
                    borderLeft: 'none',
                    padding: '9px 8px',
                    borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    lineHeight: 1,
                    transition: 'all 0.15s ease'
                  }}
                >
                  <Plus size={14} />
                </button>
              ) : (
                /* BOTÓN "×" para desactivar — solo si está activo y hay más de uno */
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleActiveProgram(program.id);
                  }}
                  title={`Quitar "${cleanTitle}" del Tracker Hoy`}
                  style={{
                    background: 'var(--color-state-done-soft)',
                    color: 'var(--color-state-done)',
                    border: '1px solid var(--color-state-done)',
                    borderLeft: 'none',
                    padding: '9px 8px',
                    borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    lineHeight: 1,
                    transition: 'all 0.15s ease'
                  }}
                >
                  <X size={13} />
                </button>
              )}
            </div>
          );
        })}

        {/* CUADRO / BOTÓN CON "+" PARA AÑADIR OTRA RUTINA EN LA LISTA HORIZONTAL */}
        <button
          type="button"
          onClick={() => alert('Añadir nueva rutina personalizada o importar programa')}
          title="Añadir nueva rutina"
          style={{
            background: 'rgba(255,255,255,0.03)',
            color: 'var(--color-accent-primary)',
            border: '1px dashed var(--color-accent-primary)',
            padding: '9px 16px',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.88rem',
            fontWeight: 700,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.15s ease',
            flexShrink: 0
          }}
        >
          <Plus size={16} />
          <span>Añadir rutina</span>
        </button>
      </div>

      {/* 2. TARJETA DE DETALLES DEL PROGRAMA SELECCIONADO / PREVISUALIZANDO */}
      {previewProgram && (
        <div style={{
          background: 'var(--surface)',
          border: isPreviewing
            ? '1px solid var(--color-border-visible)'
            : '1px solid var(--color-accent-primary)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-md)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-sm)',
          transition: 'all 0.2s ease'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span style={{
                fontSize: '0.72rem',
                color: isPreviewing ? 'var(--text-tertiary)' : 'var(--color-accent-primary)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {isPreviewing ? 'Previsualizando · ' : ''}{previewProgram.durationWeeks} SEMANAS · {previewProgram.split.length} DÍAS/SEM
              </span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '2px 0 4px', color: 'var(--text)' }}>
                {previewProgram.title.replace(/\s*\([^)]*\)/g, '').trim()}
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: 0, maxWidth: '800px' }}>
                <strong>Metodología:</strong> {previewProgram.methodology.join(' · ')}
              </p>
            </div>

            {/* BOTÓN DE ACTIVACIÓN PRINCIPAL */}
            <button
              type="button"
              onClick={() => toggleActiveProgram(previewProgram.id)}
              style={{
                background: previewIsActive
                  ? 'var(--color-state-done-soft)'
                  : 'var(--color-accent-primary)',
                color: previewIsActive ? 'var(--color-state-done)' : '#ffffff',
                border: previewIsActive
                  ? '1px solid var(--color-state-done)'
                  : 'none',
                padding: '8px 18px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap'
              }}
            >
              {previewIsActive ? (
                <>
                  <Check size={16} /> Activo en "Hoy" · Quitar
                </>
              ) : (
                <>
                  <Plus size={16} /> Activar en Tracker "Hoy"
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ActiveProgramSelector;
