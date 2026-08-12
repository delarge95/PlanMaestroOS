// src/components/fitness/LibrarySkills.tsx
import React, { useState } from 'react';
import SkillsHub from './skills/SkillsHub';
import ThenxGuideDatabase from './ThenxGuideDatabase';
import { Search, Compass, BookOpen } from 'lucide-react';

export default function LibrarySkills() {
  const [activeSubView, setActiveSubView] = useState<'progressions' | 'thenx'>('progressions');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      {/* BLOQUE 1: FILTROS & BÚSQUEDA EN PROGRESIONES & GUÍAS */}
      <div
        style={{
          background: 'var(--surface-1, #0d0d0f)',
          border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
          borderRadius: '16px',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          {/* BUSCADOR INTEGRADO */}
          <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-tertiary, rgba(255,255,255,0.4))'
              }}
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar en progresiones, habilidades y guías de técnica..."
              style={{
                width: '100%',
                padding: '9px 12px 9px 36px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#ffffff',
                fontSize: '0.86rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* CHIPS DE NAVEGACIÓN DE VISTA (PROGRESIONES vs GUÍAS THENX) */}
          <div style={{ display: 'flex', gap: '6px', background: 'rgba(255,255,255,0.03)', padding: '3px', borderRadius: '999px' }}>
            <button
              type="button"
              onClick={() => setActiveSubView('progressions')}
              style={{
                background: activeSubView === 'progressions' ? 'rgba(255,255,255,0.12)' : 'transparent',
                color: activeSubView === 'progressions' ? '#ffffff' : 'rgba(255,255,255,0.55)',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: '0.82rem',
                fontWeight: activeSubView === 'progressions' ? 600 : 500,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 150ms ease'
              }}
            >
              <Compass size={14} />
              <span>Rutas de Calistenia</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSubView('thenx')}
              style={{
                background: activeSubView === 'thenx' ? 'rgba(255,255,255,0.12)' : 'transparent',
                color: activeSubView === 'thenx' ? '#ffffff' : 'rgba(255,255,255,0.55)',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: '0.82rem',
                fontWeight: activeSubView === 'thenx' ? 600 : 500,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 150ms ease'
              }}
            >
              <BookOpen size={14} />
              <span>Guías Técnicas Thenx</span>
            </button>
          </div>
        </div>
      </div>

      {/* BLOQUE 2: CONTENIDO DE PROGRESIONES & GUÍAS */}
      <div>
        {activeSubView === 'progressions' ? (
          <SkillsHub />
        ) : (
          <ThenxGuideDatabase />
        )}
      </div>
    </div>
  );
}
