// src/components/fitness/FitAppRoutinesCatalog.tsx
import React, { useState, useMemo, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import WorkoutPrescriptionTable from './WorkoutPrescriptionTable';
import { allPrograms, getProgramById } from '../../data/fitness/programs';
import type { TrainingProgram } from '../../data/fitness/programs/types';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import { libraryAssetUrl } from '../../lib/library/openDocument';
import ExerciseModal from './ExerciseModal';
import { Search, Filter, ChevronDown, ChevronUp, ExternalLink, Calendar, Award, BookOpen } from 'lucide-react';

export default function FitAppRoutinesCatalog() {
  const activeProgramId = useActiveProgramStore((s) => s.programId);
  const activeProgramIds = useActiveProgramStore((s) => s.activeProgramIds || [s.programId]);
  const toggleActiveProgram = useActiveProgramStore((s) => s.toggleActiveProgram);
  const setInspectedProgram = useActiveProgramStore((s) => s.setInspectedProgram);

  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [selectedTierFilter, setSelectedTierFilter] = useState<string>('all');
  const [collapsedTierIds, setCollapsedTierIds] = useState<string[]>([]);
  const [collapsedSubgroupKeys, setCollapsedSubgroupKeys] = useState<string[]>([]);
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
  const rawTitle = currentProgram.title || currentProgram.name || 'Programa';
  const cleanTitle = rawTitle.replace(/\s*\([^)]*\)/g, '').trim();
  const isActiveInTracker = activeProgramIds.includes(currentProgram.id);

  const toggleTierCollapse = (tierId: string) => {
    setCollapsedTierIds((prev) =>
      prev.includes(tierId) ? prev.filter((id) => id !== tierId) : [...prev, tierId]
    );
  };

  const toggleSubgroupCollapse = (key: string) => {
    setCollapsedSubgroupKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  // Filtrado de programas
  const isFilteredSearchActive = Boolean(
    searchTerm.trim() !== '' ||
    selectedCategory !== 'all' ||
    selectedDiscipline !== 'all' ||
    selectedTierFilter !== 'all'
  );

  const filteredPrograms = useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase();

    return allPrograms.filter((p) => {
      // 1. Buscador por texto
      if (searchTerm) {
        const matchesTitle = (p.title || p.name || '').toLowerCase().includes(lowerSearch);
        const matchesAuthor = (p.authorCategory || p.source || '').toLowerCase().includes(lowerSearch);
        const matchesDiscipline = (p.discipline || '').toLowerCase().includes(lowerSearch);
        if (!matchesTitle && !matchesAuthor && !matchesDiscipline) return false;
      }

      // 2. Filtro de Categoría/Autor
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'heria' && !p.authorCategory?.includes('Heria')) return false;
        if (selectedCategory === 'nippard' && !p.authorCategory?.includes('Nippard')) return false;
        if (selectedCategory === 'planmaestro' && !p.authorCategory?.includes('PlanMaestro')) return false;
      }

      // 3. Filtro de Disciplina
      if (selectedDiscipline !== 'all' && p.discipline !== selectedDiscipline) {
        return false;
      }

      // 4. Filtro de Tier
      if (selectedTierFilter !== 'all' && p.programTier !== selectedTierFilter) {
        return false;
      }

      return true;
    });
  }, [searchTerm, selectedCategory, selectedDiscipline, selectedTierFilter]);

  // Clasificación por Tiers para vista por defecto
  const tierPrograms = useMemo(() => {
    const multiWeek = allPrograms.filter((p) => p.programTier === 'program');
    const weekly = allPrograms.filter((p) => p.programTier === 'week');
    const daily = allPrograms.filter((p) => p.programTier === 'day');

    return { multiWeek, weekly, daily };
  }, []);

  // Renderizado de tarjeta de programa compacto
  const renderProgramCard = (p: TrainingProgram) => {
    const isSelected = p.id === currentProgram.id;
    const isActiveInHoy = activeProgramIds.includes(p.id);
    const title = (p.title || p.name || 'Rutina').replace(/\s*\([^)]*\)/g, '').trim();

    return (
      <div
        key={p.id}
        onClick={() => setInspectedProgram(p.id)}
        style={{
          background: isSelected ? 'rgba(10,132,255,0.12)' : 'rgba(255,255,255,0.03)',
          border: isSelected
            ? '1.5px solid var(--accent, #0a84ff)'
            : '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
          borderRadius: '12px',
          padding: '10px 12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '8px',
          cursor: 'pointer',
          transition: 'all 150ms ease',
          boxShadow: isSelected ? '0 0 12px rgba(10,132,255,0.2)' : 'none'
        }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
            <span style={{ fontSize: '0.74rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>
              {p.durationWeeks} {p.durationWeeks === 1 ? 'sem' : 'sems'} · {p.weeks?.[0]?.days?.length || p.split?.length || 1} d/s
            </span>
            {isActiveInHoy && (
              <span style={{ fontSize: '0.64rem', background: 'rgba(48,209,88,0.2)', color: '#30d158', padding: '1px 5px', borderRadius: '4px', fontWeight: 700 }}>
                HOY
              </span>
            )}
          </div>
          <h4 style={{ fontSize: '0.88rem', fontWeight: 700, margin: 0, color: '#ffffff', lineHeight: 1.3 }}>
            {title}
          </h4>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '6px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ fontSize: '0.7rem', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
            {p.discipline || 'Calistenia'}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setInspectedProgram(p.id);
            }}
            style={{
              background: isSelected ? 'var(--accent, #0a84ff)' : 'rgba(255,255,255,0.08)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              padding: '3px 8px',
              fontSize: '0.72rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            {isSelected ? 'Ver' : 'Seleccionar'}
          </button>
        </div>
      </div>
    );
  };

  const renderTierGroup = (tierId: string, title: string, icon: React.ReactNode, programs: TrainingProgram[], badge: string) => {
    if (programs.length === 0) return null;

    const isTierCollapsed = collapsedTierIds.includes(tierId);

    const heriaPrograms = programs.filter((p) => p.authorCategory?.includes('Heria'));
    const nippardPrograms = programs.filter((p) => p.authorCategory?.includes('Nippard'));
    const planMaestroPrograms = programs.filter((p) => p.authorCategory?.includes('PlanMaestro') || (!p.authorCategory?.includes('Heria') && !p.authorCategory?.includes('Nippard')));

    const renderSubgroup = (subKey: string, subTitle: string, color: string, subPrograms: TrainingProgram[]) => {
      if (subPrograms.length === 0) return null;
      const fullSubKey = `${tierId}-${subKey}`;
      const isSubCollapsed = collapsedSubgroupKeys.includes(fullSubKey);

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button
            type="button"
            onClick={() => toggleSubgroupCollapse(fullSubKey)}
            style={{
              background: 'transparent',
              border: 'none',
              padding: '4px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              width: '100%',
              textAlign: 'left'
            }}
          >
            <span style={{ fontSize: '0.76rem', fontWeight: 800, color, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {subTitle} ({subPrograms.length})
            </span>
            <ChevronRightIcon size={14} style={{ color: 'rgba(255,255,255,0.4)', transform: isSubCollapsed ? 'none' : 'rotate(90deg)', transition: 'transform 150ms ease' }} />
          </button>

          {!isSubCollapsed && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '10px' }}>
              {subPrograms.map(renderProgramCard)}
            </div>
          )}
        </div>
      );
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* ENCABEZADO COLAPSABLE DE TIER */}
        <button
          type="button"
          onClick={() => toggleTierCollapse(tierId)}
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {icon}
            <h3 style={{ fontSize: '1rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>
              {title}
            </h3>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.74rem', background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', padding: '2px 8px', borderRadius: '999px', fontWeight: 600 }}>
              {programs.length} {badge}
            </span>
            <ChevronRightIcon size={16} style={{ color: 'rgba(255,255,255,0.4)', transform: isTierCollapsed ? 'none' : 'rotate(90deg)', transition: 'transform 150ms ease' }} />
          </div>
        </button>

        {/* SUBGRUPOS POR AUTOR / ORIGEN */}
        {!isTierCollapsed && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingLeft: '8px' }}>
            {renderSubgroup('heria', '🔥 Chris Heria / Thenx', '#ff9f0a', heriaPrograms)}
            {renderSubgroup('nippard', '🧠 Jeff Nippard / Ciencia & Hipertrofia', '#0a84ff', nippardPrograms)}
            {renderSubgroup('planmaestro', '📖 PlanMaestro OS', '#30d158', planMaestroPrograms)}
          </div>
        )}
      </div>
    );
  };

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', color: 'var(--text-primary)' }}>
        
        {/* BLOQUE 1: BARRA DE BÚSQUEDA Y FILTROS COLAPSABLE */}
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
          {/* FILA SUPERIOR: INPUT DE BÚSQUEDA + BOTÓN DE FILTROS AVANZADOS */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
              <Search
                size={16}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'rgba(255,255,255,0.4)'
                }}
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar programas, rutinas, autor (Chris Heria, Nippard) o disciplina..."
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

            <button
              type="button"
              onClick={() => setIsFilterExpanded(!isFilterExpanded)}
              style={{
                background: isFilterExpanded || isFilteredSearchActive ? 'rgba(10,132,255,0.15)' : 'rgba(255,255,255,0.04)',
                color: isFilterExpanded || isFilteredSearchActive ? '#0a84ff' : 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                padding: '9px 14px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Filter size={14} />
              <span>Filtros Avanzados</span>
              {isFilterExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>

          {/* PANEL EXPANDIBLE DE FILTROS CON BOTONES PILLS (HIGH CONTRAST) */}
          {isFilterExpanded && (
            <div
              style={{
                paddingTop: '12px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                fontSize: '0.82rem'
              }}
            >
              {/* FILTRO DE AUTOR */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600, minWidth: '120px' }}>Metodología:</span>
                {[
                  { key: 'all', label: 'Todas' },
                  { key: 'heria', label: '🔥 Chris Heria / Thenx' },
                  { key: 'nippard', label: '🧠 Jeff Nippard' },
                  { key: 'planmaestro', label: '📖 PlanMaestro' }
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setSelectedCategory(item.key)}
                    style={{
                      background: selectedCategory === item.key ? 'var(--accent, #0a84ff)' : 'rgba(255,255,255,0.06)',
                      color: selectedCategory === item.key ? '#ffffff' : 'rgba(255,255,255,0.7)',
                      border: 'none',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontSize: '0.76rem',
                      fontWeight: selectedCategory === item.key ? 700 : 500,
                      cursor: 'pointer'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* FILTRO DE TIER / FORMATO */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600, minWidth: '120px' }}>Estructura:</span>
                {[
                  { key: 'all', label: 'Todos' },
                  { key: 'program', label: '📚 Programas' },
                  { key: 'week', label: '🗓️ Semanales' },
                  { key: 'day', label: '⚡ Diarios' }
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setSelectedTierFilter(item.key)}
                    style={{
                      background: selectedTierFilter === item.key ? 'var(--accent, #0a84ff)' : 'rgba(255,255,255,0.06)',
                      color: selectedTierFilter === item.key ? '#ffffff' : 'rgba(255,255,255,0.7)',
                      border: 'none',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontSize: '0.76rem',
                      fontWeight: selectedTierFilter === item.key ? 700 : 500,
                      cursor: 'pointer'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* FILTRO DE DISCIPLINA */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600, minWidth: '120px' }}>Disciplina:</span>
                {[
                  { key: 'all', label: 'Todas' },
                  { key: 'Calistenia', label: 'Calistenia' },
                  { key: 'Hipertrofia / Bodybuilding', label: 'Bodybuilding' },
                  { key: 'Powerbuilding', label: 'Powerbuilding' }
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setSelectedDiscipline(item.key)}
                    style={{
                      background: selectedDiscipline === item.key ? 'var(--accent, #0a84ff)' : 'rgba(255,255,255,0.06)',
                      color: selectedDiscipline === item.key ? '#ffffff' : 'rgba(255,255,255,0.7)',
                      border: 'none',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontSize: '0.76rem',
                      fontWeight: selectedDiscipline === item.key ? 700 : 500,
                      cursor: 'pointer'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* BLOQUE 2: VISTA DEL CATÁLOGO (POR TIERS O RESULTADOS DE BÚSQUEDA) */}
        <div
          style={{
            background: 'var(--surface-1, #0d0d0f)',
            border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
            borderRadius: '16px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
          }}
        >
          {isFilteredSearchActive ? (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#0a84ff' }}>
                  Resultados Filtrados ({filteredPrograms.length} rutinas)
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedDiscipline('all');
                    setSelectedTierFilter('all');
                  }}
                  style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', cursor: 'pointer' }}
                >
                  Limpiar Filtros
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '10px' }}>
                {filteredPrograms.map(renderProgramCard)}
              </div>
            </div>
          ) : (
            <>
              {/* TIER 1: PROGRAMAS (2+ SEMANAS) */}
              {renderTierGroup(
                'program',
                'Programas',
                <BookOpen size={18} style={{ color: '#0a84ff' }} />,
                tierPrograms.multiWeek,
                'programas'
              )}

              {/* TIER 2: PLANES SEMANALES (1 SEMANA) */}
              {renderTierGroup(
                'week',
                'Planes Semanales (1 semana)',
                <Calendar size={18} style={{ color: '#ff9f0a' }} />,
                tierPrograms.weekly,
                'planes'
              )}

              {/* TIER 3: RUTINAS DIARIAS / MASTER WORKOUTS (1 DÍA) */}
              {renderTierGroup(
                'day',
                'Rutinas Diarias / Master Workouts (1 día)',
                <Award size={18} style={{ color: '#30d158' }} />,
                tierPrograms.daily,
                'master workouts'
              )}
            </>
          )}
        </div>

        {/* BLOQUE 3: DETALLE DEL PROGRAMA INSPECCIONADO & TABLA DE PRESCRIPCIÓN */}
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
                {currentProgram.durationWeeks} {currentProgram.durationWeeks === 1 ? 'SEMANA' : 'SEMANAS'} · {currentProgram.weeks?.[0]?.days?.length || currentProgram.split?.length || 1} DÍAS/SEM
              </span>
              <h3 style={{ fontSize: 'var(--fs-page, 1.25rem)', fontWeight: 800, margin: '2px 0 4px', color: 'var(--text-primary)' }}>
                {cleanTitle}
              </h3>
              <p style={{ fontSize: 'var(--fs-meta, 0.84rem)', color: 'var(--text-secondary)', margin: 0 }}>
                <strong>Metodología:</strong> {currentProgram.methodology.join(' · ')}
              </p>
            </div>

            {/* SWITCH ACTIVADO/DESACTIVADO Y BOTÓN DE PDF */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
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

function ChevronRightIcon({ size = 16, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
