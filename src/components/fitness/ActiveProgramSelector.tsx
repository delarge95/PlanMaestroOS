// src/components/fitness/ActiveProgramSelector.tsx
import React, { useState, useEffect } from 'react';
import { Plus, Check } from 'lucide-react';
import { allPrograms } from '../../data/fitness/programs';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';

export function ActiveProgramSelector() {
  const inspectedProgramId = useActiveProgramStore((s) => s.programId);
  const activeProgramIds = useActiveProgramStore((s) => s.activeProgramIds || [s.programId]);
  const setInspectedProgram = useActiveProgramStore((s) => s.setInspectedProgram);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === 'add_new') {
      alert('Añadir nueva rutina personalizada o importar programa');
    } else {
      setInspectedProgram(val);
    }
  };

  if (isMobile) {
    return (
      <div style={{ width: '100%' }}>
        <select
          value={inspectedProgramId}
          onChange={handleSelectChange}
          aria-label="Seleccionar programa de rutina"
          style={{
            width: '100%',
            background: 'var(--surface-1, #0d0d0f)',
            color: 'var(--text-primary)',
            border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
            borderRadius: 'var(--radius-m, 12px)',
            padding: '10px 14px',
            fontSize: 'var(--fs-body, 0.9375rem)',
            fontWeight: 600,
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          {allPrograms.map((program) => {
            const isActive = activeProgramIds.includes(program.id);
            const cleanTitle = program.title.replace(/\s*\([^)]*\)/g, '').trim();
            return (
              <option key={program.id} value={program.id}>
                {cleanTitle} {isActive ? '(HOY)' : ''}
              </option>
            );
          })}
          <option value="add_new">+ Añadir nueva rutina...</option>
        </select>
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '8px',
      width: '100%'
    }}>
      {allPrograms.map((program) => {
        const isInspected = inspectedProgramId === program.id;
        const isActive = activeProgramIds.includes(program.id);
        const cleanTitle = program.title.replace(/\s*\([^)]*\)/g, '').trim();

        return (
          <button
            key={program.id}
            type="button"
            onClick={() => setInspectedProgram(program.id)}
            title={`${cleanTitle} — Clic para ver detalles`}
            style={{
              background: isInspected
                ? 'var(--accent, #0a84ff)'
                : 'var(--surface-1, #0d0d0f)',
              color: isInspected ? '#ffffff' : 'var(--text-primary)',
              border: isInspected
                ? '1px solid var(--accent, #0a84ff)'
                : isActive
                ? '1px solid var(--success, #30d158)'
                : '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
              padding: '8px 16px',
              borderRadius: 'var(--radius-m, 12px)',
              fontSize: 'var(--fs-meta, 0.84rem)',
              fontWeight: isInspected || isActive ? 700 : 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 150ms var(--ease-standard, ease)',
              boxShadow: isInspected ? '0 4px 14px rgba(10, 132, 255, 0.25)' : 'none'
            }}
          >
            <span>{cleanTitle}</span>
            {isActive && (
              <span style={{
                background: isInspected ? 'rgba(255,255,255,0.22)' : 'rgba(48, 209, 88, 0.15)',
                color: isInspected ? '#ffffff' : 'var(--success, #30d158)',
                padding: '2px 6px',
                borderRadius: '999px',
                fontSize: '0.65rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px'
              }}>
                <Check size={10} /> HOY
              </span>
            )}
          </button>
        );
      })}

      {/* CÁPSULA DE AÑADIR RUTINA AL FINAL */}
      <button
        type="button"
        onClick={() => alert('Añadir nueva rutina personalizada o importar programa')}
        title="Añadir nueva rutina"
        aria-label="Añadir nueva rutina"
        style={{
          background: 'rgba(255,255,255,0.02)',
          color: 'var(--accent, #0a84ff)',
          border: '1px dashed var(--accent, #0a84ff)',
          padding: '8px 14px',
          borderRadius: 'var(--radius-m, 12px)',
          fontSize: 'var(--fs-meta, 0.84rem)',
          fontWeight: 700,
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          transition: 'all 150ms ease'
        }}
      >
        <Plus size={16} />
      </button>
    </div>
  );
}

export default ActiveProgramSelector;
