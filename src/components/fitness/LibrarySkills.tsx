// src/components/fitness/LibrarySkills.tsx
import React, { useState } from 'react';
import SkillsWorkspace from './skills/SkillsWorkspace';
import ThenxGuideDatabase from './ThenxGuideDatabase';
import { Search, Compass, BookOpen, Check } from 'lucide-react';
import type { SkillDomain } from '../../data/fitness/skills/types';
import thenxGuidesData from '../../data/fitness/thenx_technique_guides.json';

const DOMAIN_FILTERS: { key: SkillDomain | 'all'; label: string }[] = [
  { key: 'all', label: 'Todas las Rutas' },
  { key: 'pull', label: 'Tracción' },
  { key: 'push', label: 'Empuje' },
  { key: 'core', label: 'Core & Compresión' },
  { key: 'legs', label: 'Pierna Unilateral' },
  { key: 'support', label: 'Soporte & Anillas' },
  { key: 'mobility', label: 'Movilidad & Capacidad' }
];

export default function LibrarySkills() {
  const [activeSubView, setActiveSubView] = useState<'progressions' | 'thenx'>('progressions');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<SkillDomain | 'all'>('all');
  const [onlyActive, setOnlyActive] = useState(false);
  const [selectedGuideId, setSelectedGuideId] = useState<string>(thenxGuidesData[0]?.id || '53');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      {/* BLOQUE 1: CONTROL DE BÚSQUEDA Y FILTROS */}
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
        {/* FILA 1: BUSCADOR & CONMUTADOR DE MODO */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
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
              placeholder={
                activeSubView === 'progressions'
                  ? 'Buscar en progresiones y rutas de habilidad...'
                  : 'Buscar en guías de técnica Thenx...'
              }
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

        {/* FILA 2: FILTROS DE CATEGORÍA O SELECCIÓN DE GUÍAS */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          {activeSubView === 'progressions' ? (
            <>
              <button
                type="button"
                onClick={() => setOnlyActive((v) => !v)}
                style={{
                  background: onlyActive ? 'rgba(48,209,88,0.15)' : 'rgba(255,255,255,0.03)',
                  color: onlyActive ? '#30d158' : 'rgba(255,255,255,0.55)',
                  border: onlyActive ? '1px solid rgba(48,209,88,0.4)' : '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '999px',
                  padding: '5px 12px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                {onlyActive ? <Check size={12} /> : null}
                <span>Solo activas hoy</span>
              </button>

              <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.08)', margin: '0 2px' }} />

              {DOMAIN_FILTERS.map((df) => {
                const isSelected = selectedDomain === df.key;
                return (
                  <button
                    key={df.key}
                    type="button"
                    onClick={() => setSelectedDomain(df.key)}
                    style={{
                      background: isSelected ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.03)',
                      color: isSelected ? '#ffffff' : 'rgba(255,255,255,0.55)',
                      border: 'none',
                      borderRadius: '999px',
                      padding: '5px 12px',
                      fontSize: '0.78rem',
                      fontWeight: isSelected ? 600 : 500,
                      cursor: 'pointer',
                      transition: 'all 150ms ease'
                    }}
                  >
                    {df.label}
                  </button>
                );
              })}
            </>
          ) : (
            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '2px', scrollbarWidth: 'none' }}>
              {thenxGuidesData.map((g: any) => {
                const isSelected = g.id === selectedGuideId;
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setSelectedGuideId(g.id)}
                    style={{
                      background: isSelected ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.03)',
                      color: isSelected ? '#ffffff' : 'rgba(255,255,255,0.55)',
                      border: 'none',
                      borderRadius: '999px',
                      padding: '5px 12px',
                      fontSize: '0.78rem',
                      fontWeight: isSelected ? 600 : 500,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <BookOpen size={12} />
                    <span>{g.title}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* BLOQUE 2: CONTENIDO DE PROGRESIONES & GUÍAS */}
      <div>
        {activeSubView === 'progressions' ? (
          <SkillsWorkspace
            selectedDomain={selectedDomain}
            onlyActive={onlyActive}
            searchTerm={searchTerm}
            hideInternalFilters={true}
          />
        ) : (
          <ThenxGuideDatabase
            selectedGuideId={selectedGuideId}
            onSelectGuideId={setSelectedGuideId}
            searchTerm={searchTerm}
            hideHeader={true}
          />
        )}
      </div>
    </div>
  );
}
