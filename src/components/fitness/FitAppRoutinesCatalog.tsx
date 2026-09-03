// src/components/fitness/FitAppRoutinesCatalog.tsx
import React, { useState, useMemo, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import WorkoutPrescriptionTable from './WorkoutPrescriptionTable';
import { allPrograms, getProgramById } from '../../data/fitness/programs';
import type { TrainingProgram } from '../../data/fitness/programs/types';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import { libraryAssetUrl } from '../../lib/library/openDocument';
import ExerciseModal from './ExerciseModal';
import { Sheet } from '../ui/Sheet';
import { Search, Filter, ChevronDown, ChevronUp, ExternalLink, Calendar, Award, BookOpen, Target } from 'lucide-react';
import useIsMobile from '../ui/useIsMobile';
import { isThenxMasterRoutineId } from '../../data/fitness/progressionPathLinks';

// B6: filtros persistentes (autor/disciplina/tier) — sobreviven desmonte y recarga.
const CATALOG_FILTERS_KEY = 'fitapp_catalog_filters_v1';

interface CatalogFilters {
  category: string;
  discipline: string;
  tier: string;
}

const DEFAULT_FILTERS: CatalogFilters = { category: 'all', discipline: 'all', tier: 'all' };

function loadCatalogFilters(): CatalogFilters {
  if (typeof window === 'undefined') return DEFAULT_FILTERS;
  try {
    const raw = window.localStorage.getItem(CATALOG_FILTERS_KEY);
    if (!raw) return DEFAULT_FILTERS;
    const parsed = JSON.parse(raw) as Partial<CatalogFilters>;
    return {
      category: typeof parsed.category === 'string' ? parsed.category : 'all',
      discipline: typeof parsed.discipline === 'string' ? parsed.discipline : 'all',
      tier: typeof parsed.tier === 'string' ? parsed.tier : 'all'
    };
  } catch {
    return DEFAULT_FILTERS;
  }
}

export default function FitAppRoutinesCatalog() {
  const isMobile = useIsMobile();
  const activeProgramId = useActiveProgramStore((s) => s.programId);
  const activeProgramIds = useActiveProgramStore((s) => s.activeProgramIds);
  const toggleActiveProgram = useActiveProgramStore((s) => s.toggleActiveProgram);
  const setInspectedProgram = useActiveProgramStore((s) => s.setInspectedProgram);

  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(() => loadCatalogFilters().category);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>(() => loadCatalogFilters().discipline);
  const [selectedTierFilter, setSelectedTierFilter] = useState<string>(() => loadCatalogFilters().tier);

  // B6: persistir filtros (autor/disciplina/tier) en cada cambio
  useEffect(() => {
    try {
      window.localStorage.setItem(
        CATALOG_FILTERS_KEY,
        JSON.stringify({ category: selectedCategory, discipline: selectedDiscipline, tier: selectedTierFilter } satisfies CatalogFilters)
      );
    } catch {
      // localStorage no disponible (modo privado): los filtros siguen funcionando en memoria
    }
  }, [selectedCategory, selectedDiscipline, selectedTierFilter]);
  const [collapsedTierIds, setCollapsedTierIds] = useState<string[]>([]);
  const [collapsedSubgroupKeys, setCollapsedSubgroupKeys] = useState<string[]>([]);
  const [exerciseModalId, setExerciseModalId] = useState<string | null>(null);
  // B6: el detalle del programa abre en un Sheet lateral/inferior sobre la lista,
  // no como bloque debajo de todo el catálogo (scroll horrible).
  const [isDetailSheetOpen, setIsDetailSheetOpen] = useState(false);

  const openProgramDetail = (programId: string) => {
    setInspectedProgram(programId);
    setIsDetailSheetOpen(true);
  };

  // Leer parámetro ?routine=ID de la URL al cargar
  // B7: getProgramById SIEMPRE devuelve algo (fallback al primero), así que la
  // validez se comprueba contra allPrograms para no abrir min-max por error.
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const routineParam = params.get('routine');
      if (routineParam && allPrograms.some((p) => p.id === routineParam)) {
        setInspectedProgram(routineParam);
        setIsDetailSheetOpen(true);
      }
    }
  }, [setInspectedProgram]);

  const currentProgram = getProgramById(activeProgramId) ?? allPrograms[0];
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
        onClick={() => openProgramDetail(p.id)}
        className="ds-stack-sm"
        style={{
          background: isSelected ? 'var(--accent-soft)' : 'rgba(255,255,255,0.03)',
          border: isSelected
            ? '1.5px solid var(--accent)'
            : '1px solid var(--color-border-subtle)',
          borderRadius: 'var(--radius-m)',
          padding: '10px 12px',
          justifyContent: 'space-between',
          cursor: 'pointer',
          transition: 'all 150ms ease',
          boxShadow: isSelected ? '0 0 12px rgba(10,132,255,0.2)' : 'none'
        }}
      >
        <div>
          <div className="ds-row-between" style={{ marginBottom: '2px' }}>
            <span style={{ fontSize: '0.74rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>
              {p.durationWeeks} {p.durationWeeks === 1 ? 'sem' : 'sems'} · {p.weeks?.[0]?.days?.length || p.split?.length || 1} d/s
            </span>
            {isActiveInHoy && (
              <span className="ds-badge ds-badge-success">
                HOY
              </span>
            )}
          </div>
          <h4 style={{ fontSize: '0.88rem', fontWeight: 700, margin: 0, color: '#ffffff', lineHeight: 1.3 }}>
            {title}
          </h4>
          {/* B6: autor visible en la tarjeta compacta */}
          <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.45)', fontWeight: 600 }}>
            {p.authorCategory || p.source || 'PlanMaestro OS'}
          </span>
        </div>

        <div className="ds-row-between" style={{ paddingTop: '6px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span className="ds-badge ds-badge-neutral">
            {p.discipline || 'Calistenia'}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openProgramDetail(p.id);
            }}
            className="ds-chip"
            data-active={String(isSelected)}
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
        <div className="ds-stack-sm">
          <button
            type="button"
            onClick={() => toggleSubgroupCollapse(fullSubKey)}
            className="ds-row-between"
            style={{
              background: 'transparent',
              border: 'none',
              padding: '4px 0',
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
      <div className="ds-stack" style={{ gap: '10px' }}>
        {/* ENCABEZADO COLAPSABLE DE TIER */}
        <button
          type="button"
          onClick={() => toggleTierCollapse(tierId)}
          className="ds-row-between"
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 'var(--radius-m)',
            padding: '10px 14px',
            cursor: 'pointer'
          }}
        >
          <div className="ds-row" style={{ gap: 'var(--space-2)' }}>
            {icon}
            <h3 style={{ fontSize: '1rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>
              {title}
            </h3>
          </div>
          <div className="ds-row" style={{ gap: 'var(--space-2)' }}>
            <span className="ds-badge ds-badge-neutral" style={{ borderRadius: 'var(--radius-pill)' }}>
              {programs.length} {badge}
            </span>
            <ChevronRightIcon size={16} style={{ color: 'rgba(255,255,255,0.4)', transform: isTierCollapsed ? 'none' : 'rotate(90deg)', transition: 'transform 150ms ease' }} />
          </div>
        </button>

        {/* SUBGRUPOS POR AUTOR / ORIGEN */}
        {!isTierCollapsed && (
          <div className="ds-stack" style={{ gap: '14px', paddingLeft: 'var(--space-2)' }}>
            {renderSubgroup('heria', 'Chris Heria / Thenx', 'var(--warning)', heriaPrograms)}
            {renderSubgroup('nippard', 'Jeff Nippard', '#9fb2ff', nippardPrograms)}
            {renderSubgroup('planmaestro', 'PlanMaestro OS', '#9fdfa8', planMaestroPrograms)}
          </div>
        )}
      </div>
    );
  };

  return (
    <ErrorBoundary>
      <div className="ds-stack" style={{ color: 'var(--text-primary)' }}>
        
        {/* BLOQUE 1: BARRA DE BÚSQUEDA Y FILTROS COLAPSABLE */}
        <div
          className="ds-stack ds-card"
          style={{
            borderRadius: 'var(--radius-l)',
            padding: 'var(--space-4) 20px',
            gap: '14px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
          }}
        >
          {/* FILA SUPERIOR: INPUT DE BÚSQUEDA + BOTÓN DE FILTROS AVANZADOS */}
          <div className="ds-row" style={{ flexWrap: 'wrap' }}>
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
              className="ds-chip"
              data-active={String(isFilterExpanded || isFilteredSearchActive)}
            >
              <Filter size={14} />
              <span>Filtros Avanzados</span>
              {isFilterExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>

          {/* PANEL EXPANDIBLE DE FILTROS CON BOTONES PILLS (HIGH CONTRAST) */}
          {isFilterExpanded && (
            <div
              className="ds-stack"
              style={{
                paddingTop: 'var(--space-3)',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                gap: 'var(--space-3)',
                fontSize: '0.82rem'
              }}
            >
              {/* FILTROS: desktop botones, móvil desplegables */}
              {isMobile ? (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--text-secondary)' }}>
                    <span className="ds-label-sm">Metodología</span>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      style={{ minHeight: '44px', borderRadius: '10px', border: '1px solid var(--color-border-visible)', background: 'var(--surface-2)', color: 'var(--text-primary)', padding: '10px 12px' }}
                    >
                      <option value="all">Todas</option>
                      <option value="heria">Chris Heria / Thenx</option>
                      <option value="nippard">Jeff Nippard</option>
                      <option value="planmaestro">PlanMaestro</option>
                    </select>
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--text-secondary)' }}>
                    <span className="ds-label-sm">Estructura</span>
                    <select
                      value={selectedTierFilter}
                      onChange={(e) => setSelectedTierFilter(e.target.value)}
                      style={{ minHeight: '44px', borderRadius: '10px', border: '1px solid var(--color-border-visible)', background: 'var(--surface-2)', color: 'var(--text-primary)', padding: '10px 12px' }}
                    >
                      <option value="all">Todos</option>
                      <option value="program">Programas</option>
                      <option value="week">Semanales</option>
                      <option value="day">Diarios</option>
                    </select>
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--text-secondary)' }}>
                    <span className="ds-label-sm">Disciplina</span>
                    <select
                      value={selectedDiscipline}
                      onChange={(e) => setSelectedDiscipline(e.target.value)}
                      style={{ minHeight: '44px', borderRadius: '10px', border: '1px solid var(--color-border-visible)', background: 'var(--surface-2)', color: 'var(--text-primary)', padding: '10px 12px' }}
                    >
                      <option value="all">Todas</option>
                      <option value="Calistenia">Calistenia</option>
                      <option value="Hipertrofia / Bodybuilding">Bodybuilding</option>
                      <option value="Powerbuilding">Powerbuilding</option>
                    </select>
                  </label>
                </div>
              ) : (
                <>
                  <div className="ds-row-wrap" style={{ alignItems: 'center' }}>
                    <span className="ds-label-sm" style={{ color: 'rgba(255,255,255,0.5)', minWidth: '120px' }}>Metodología:</span>
                    {[
                      { key: 'all', label: 'Todas' },
                      { key: 'heria', label: 'Chris Heria / Thenx' },
                      { key: 'nippard', label: 'Jeff Nippard' },
                      { key: 'planmaestro', label: 'PlanMaestro' }
                    ].map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setSelectedCategory(item.key)}
                        className="ds-chip"
                        data-active={String(selectedCategory === item.key)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  <div className="ds-row-wrap" style={{ alignItems: 'center' }}>
                    <span className="ds-label-sm" style={{ color: 'rgba(255,255,255,0.5)', minWidth: '120px' }}>Estructura:</span>
                    {[
                      { key: 'all', label: 'Todos' },
                      { key: 'program', label: 'Programas' },
                      { key: 'week', label: 'Semanales' },
                      { key: 'day', label: 'Diarios' }
                    ].map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setSelectedTierFilter(item.key)}
                        className="ds-chip"
                        data-active={String(selectedTierFilter === item.key)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  <div className="ds-row-wrap" style={{ alignItems: 'center' }}>
                    <span className="ds-label-sm" style={{ color: 'rgba(255,255,255,0.5)', minWidth: '120px' }}>Disciplina:</span>
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
                        className="ds-chip"
                        data-active={String(selectedDiscipline === item.key)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* BLOQUE 2: VISTA DEL CATÁLOGO (POR TIERS O RESULTADOS DE BÚSQUEDA) */}
        <div
          className="ds-stack ds-card"
          style={{
            borderRadius: 'var(--radius-l)',
            padding: '20px',
            gap: '20px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
          }}
        >
          {isFilteredSearchActive ? (
            <div>
              <div className="ds-row-between" style={{ marginBottom: '14px' }}>
                <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--accent)' }}>
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
                  className="ds-btn ds-btn-ghost ds-btn-sm"
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
                <BookOpen size={18} style={{ color: 'var(--accent)' }} />,
                tierPrograms.multiWeek,
                'programas'
              )}

              {/* TIER 2: PLANES SEMANALES (1 SEMANA) */}
              {renderTierGroup(
                'week',
                'Planes Semanales (1 semana)',
                <Calendar size={18} style={{ color: 'var(--warning)' }} />,
                tierPrograms.weekly,
                'planes'
              )}

              {/* TIER 3: RUTINAS DIARIAS / MASTER WORKOUTS (1 DÍA) */}
              {renderTierGroup(
                'day',
                'Rutinas Diarias / Master Workouts (1 día)',
                <Award size={18} style={{ color: 'var(--success)' }} />,
                tierPrograms.daily,
                'master workouts'
              )}
            </>
          )}
        </div>

        {/* B6: DETALLE DEL PROGRAMA EN SHEET (sobre la lista, sin scroll horizontal del catálogo) */}
        <Sheet
          isOpen={isDetailSheetOpen}
          onClose={() => setIsDetailSheetOpen(false)}
          title={cleanTitle}
          description={`${currentProgram.durationWeeks} ${currentProgram.durationWeeks === 1 ? 'semana' : 'semanas'} · ${currentProgram.weeks?.[0]?.days?.length || currentProgram.split?.length || 1} días/sem · ${currentProgram.methodology.join(' · ')}`}
          maxWidth={isMobile ? '100%' : '860px'}
        >
          {/* SWITCH ACTIVADO/DESACTIVADO Y BOTÓN DE PDF */}
          <div className="ds-row" style={{ flexWrap: 'wrap', paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--color-border-subtle)' }}>
            <div
              onClick={() => toggleActiveProgram(currentProgram.id)}
              title={isActiveInTracker ? 'Activo en "Hoy" - Clic para desactivar' : 'Inactivo - Clic para activar en "Hoy"'}
              className="ds-row"
              style={{
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--color-border-subtle)'
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '18px',
                  borderRadius: '10px',
                  background: isActiveInTracker ? 'var(--success)' : 'rgba(255,255,255,0.2)',
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
              <span className="ds-label-sm" style={{ color: isActiveInTracker ? 'var(--success)' : 'var(--text-secondary)' }}>
                {isActiveInTracker ? 'Activo en Hoy' : 'Inactivo'}
              </span>
            </div>

            {currentProgram.pdfUrl && (
              <a
                href={libraryAssetUrl(currentProgram.pdfUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="ds-btn ds-btn-primary ds-btn-sm"
                style={{ textDecoration: 'none' }}
              >
                <ExternalLink size={13} />
                <span>Ver PDF Oficial</span>
              </a>
            )}

            {/* B7: las rutinas master de THENX tienen progresión asociada en Habilidades */}
            {isThenxMasterRoutineId(currentProgram.id) && (
              <a
                href="/app/fitness/skills"
                className="ds-btn ds-btn-sm"
                style={{
                  background: 'var(--accent-soft)',
                  border: '1px solid var(--accent-border)',
                  color: 'var(--accent)',
                  textDecoration: 'none'
                }}
                title="Ver la progresión paso a paso y la guía técnica de esta habilidad"
              >
                <Target size={13} />
                <span>Progresión en Habilidades</span>
              </a>
            )}
          </div>

          {/* TABLA UNIFICADA DE PRESCRIPCIÓN Y DETALLE DE DÍAS DE LA RUTINA */}
          <div style={{ overflowY: 'auto', minHeight: 0 }}>
            <WorkoutPrescriptionTable
              program={currentProgram}
            />
          </div>
        </Sheet>

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
