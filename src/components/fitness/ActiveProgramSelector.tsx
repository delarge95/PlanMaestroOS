import React from 'react';
import { Play, Check, Dumbbell, ExternalLink } from 'lucide-react';
import { allPrograms } from '../../data/fitness/programs';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import { libraryAssetUrl } from '../../lib/library/openDocument';

export function ActiveProgramSelector() {
  const activeProgramId = useActiveProgramStore((s) => s.programId);
  const setActiveProgram = useActiveProgramStore((s) => s.setActiveProgram);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-md)' }}>
      {allPrograms.map((program) => {
        const isActive = activeProgramId === program.id;

        return (
          <div
            key={program.id}
            style={{
              background: 'var(--surface)',
              border: isActive ? '2px solid var(--color-accent-primary)' : '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-md)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 'var(--space-md)',
              boxShadow: isActive ? '0 4px 20px rgba(10, 132, 255, 0.2)' : 'none'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {program.durationWeeks} SEMANAS · {program.split.length} DÍAS/SEM
                </span>
                {isActive && (
                  <span style={{ background: 'var(--color-state-done-soft)', color: 'var(--color-state-done)', padding: '2px 8px', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Check size={12} /> ACTIVO
                  </span>
                )}
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 var(--space-2)', color: 'var(--text)' }}>
                {program.title}
              </h3>

              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0 0 var(--space-2)' }}>
                Metodología: {program.methodology.join(' · ')}
              </p>

              {program.pdfUrl && (
                <a
                  href={libraryAssetUrl(program.pdfUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--color-accent-primary)',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  Ver PDF ↗ <ExternalLink size={12} />
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={() => setActiveProgram(program.id, 1, program.weeks[0].days[0].id)}
              disabled={isActive}
              style={{
                background: isActive ? 'var(--surface-elevated)' : 'var(--color-accent-primary)',
                color: isActive ? 'var(--text-tertiary)' : '#ffffff',
                border: 'none',
                padding: '10px 16px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: isActive ? 'default' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              {isActive ? (
                <>
                  <Dumbbell size={16} /> Programa Activo
                </>
              ) : (
                <>
                  <Play size={16} /> Activar Programa
                </>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ActiveProgramSelector;
