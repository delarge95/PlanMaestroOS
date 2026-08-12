// src/components/fitness/LibraryDatabase.tsx
import React, { useState, useMemo, useEffect } from 'react';
import ExerciseModal from './ExerciseModal';
import { Search, ChevronRight, ChevronDown, Check, ArrowUpDown, ExternalLink, ChevronsUpDown } from 'lucide-react';
import { exerciseDatabase } from '../../data/exercises';

type ExerciseCategory =
  | 'Free Weights'
  | 'Calisthenics'
  | 'Weighted Calisthenics'
  | 'Machines'
  | 'Bands & Accessories'
  | 'TRX'
  | 'Cables'
  | 'Olympic & Power'
  | 'Sled & Strongman'
  | 'Mobility, Warm-up & Prehab';

type SortOption = 'alpha-asc' | 'alpha-desc' | 'pr-desc' | 'pr-asc';

const CATEGORY_FILTERS: ExerciseCategory[] = [
  'Free Weights',
  'Calisthenics',
  'Weighted Calisthenics',
  'Machines',
  'Bands & Accessories',
  'TRX',
  'Cables',
  'Olympic & Power',
  'Sled & Strongman',
  'Mobility, Warm-up & Prehab'
];

const MUSCLE_GROUP_MAP: Record<string, string[]> = {
  Legs: ['Quadriceps', 'Hamstrings', 'Glutes', 'Calves', 'Adductors'],
  Chest: ['Pectoral Region', 'Pectoralis Major', 'Pectoralis Minor'],
  Back: ['Latissimus Dorsi', 'Trapezius', 'Rhomboids', 'Erector Spinae', 'Teres Major'],
  Shoulders: ['Anterior Deltoid', 'Lateral Deltoid', 'Posterior Deltoid', 'Rotator Cuff'],
  Arms: ['Biceps Brachii', 'Brachialis', 'Triceps Brachii', 'Brachioradialis', 'Wrist Flexors'],
  Core: ['Rectus Abdominis', 'Obliques', 'Iliopsoas']
};

const SORT_DISPLAY: Record<SortOption, string> = {
  'alpha-asc': 'A-Z',
  'alpha-desc': 'Z-A',
  'pr-desc': 'PR ↓',
  'pr-asc': 'PR ↑'
};

export default function LibraryDatabase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isGroupedView, setIsGroupedView] = useState(true);
  const [sortOption, setSortOption] = useState<SortOption>('alpha-asc');
  const [selectedCategories, setSelectedCategories] = useState<ExerciseCategory[]>([]);
  const [selectedMuscles, setSelectedMuscles] = useState<string[]>([]);
  const [modalExerciseId, setModalExerciseId] = useState<string | null>(null);
  const [expandedInlineIds, setExpandedInlineIds] = useState<string[]>([]);
  
  // Estado para acordeón por grupos en modo grouped (INICIAN SIN DESPLEGAR)
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  // Leer parámetro ?search= de la URL al cargar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const searchParam = params.get('search');
      if (searchParam) {
        setSearchTerm(searchParam);
        setModalExerciseId(searchParam);
      }
    }
  }, []);

  const handleCategoryToggle = (category: ExerciseCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleMuscleGroupToggle = (group: string) => {
    const subgroups = MUSCLE_GROUP_MAP[group] || [group];
    const allSelected = subgroups.every((sub) => selectedMuscles.includes(sub));

    if (allSelected) {
      setSelectedMuscles((prev) => prev.filter((m) => !subgroups.includes(m)));
    } else {
      setSelectedMuscles((prev) => [...new Set([...prev, ...subgroups])]);
    }
  };

  const handleSortCycle = () => {
    const options: SortOption[] = ['alpha-asc', 'alpha-desc', 'pr-desc', 'pr-asc'];
    const currentIndex = options.indexOf(sortOption);
    setSortOption(options[(currentIndex + 1) % options.length]);
  };

  const toggleInlineExpand = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedInlineIds((prev) =>
      prev.includes(name) ? prev.filter((id) => id !== name) : [...prev, name]
    );
  };

  const toggleGroupExpand = (groupName: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName]
    }));
  };

  const handleMuscleClick = (mName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== 'undefined') {
      window.location.href = `/app/fitness/library/muscles?muscle=${encodeURIComponent(mName)}`;
    }
  };

  // Filtrado general de la lista de ejercicios
  const filteredFlatList = useMemo(() => {
    return Object.keys(exerciseDatabase)
      .filter((name) => {
        const ex = exerciseDatabase[name];
        if (searchTerm) {
          const term = searchTerm.toLowerCase();
          const matchesName = name.toLowerCase().includes(term);
          const matchesSubcat = ex.subcategory?.toLowerCase().includes(term);
          const matchesStrength = ex.muscles.strength.some((m) => m.toLowerCase().includes(term));
          if (!matchesName && !matchesSubcat && !matchesStrength) return false;
        }
        if (selectedCategories.length > 0) {
          if (!selectedCategories.includes(ex.category as ExerciseCategory)) return false;
        }
        if (selectedMuscles.length > 0) {
          const hasTargetMuscle = ex.muscles.strength.some((m) => selectedMuscles.includes(m));
          if (!hasTargetMuscle) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortOption === 'alpha-asc') return a.localeCompare(b);
        if (sortOption === 'alpha-desc') return b.localeCompare(a);
        return a.localeCompare(b);
      });
  }, [searchTerm, selectedCategories, selectedMuscles, sortOption]);

  // Agrupamiento por categorías / grupos principales
  const groupedExercises = useMemo(() => {
    const map: Record<string, string[]> = {};
    filteredFlatList.forEach((name) => {
      const ex = exerciseDatabase[name];
      const cat = ex.category || 'Otros';
      if (!map[cat]) map[cat] = [];
      map[cat].push(name);
    });
    return map;
  }, [filteredFlatList]);

  // Verificar si todos los grupos actuales están expandidos
  const allGroupKeys = Object.keys(groupedExercises);
  const isAllGroupsExpanded = allGroupKeys.length > 0 && allGroupKeys.every((k) => expandedGroups[k]);

  const toggleExpandAllGroups = () => {
    if (isAllGroupsExpanded) {
      setExpandedGroups({});
    } else {
      const nextState: Record<string, boolean> = {};
      allGroupKeys.forEach((k) => { nextState[k] = true; });
      setExpandedGroups(nextState);
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedMuscles([]);
  };

  const activeFiltersCount = selectedCategories.length + selectedMuscles.length + (searchTerm ? 1 : 0);

  // Previsualización desplegable inline (músculos e hipervínculos + requisitos de movilidad)
  const renderInlinePreview = (name: string) => {
    const exInfo = exerciseDatabase[name];
    if (!exInfo) return null;

    const mobilityList = (exInfo as any).mobilityRequirements || (exInfo as any).mobility || [
      'Dorsiflexión de tobillo & movilidad de cadera',
      'Estabilidad del core & rotación externa de hombro'
    ];

    return (
      <div style={{ padding: '12px 14px', background: 'rgba(0,0,0,0.4)', borderTop: '1px solid var(--color-border-subtle, rgba(255,255,255,0.06))', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
          <strong style={{ fontSize: '0.74rem', color: 'var(--success, #30d158)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
            Fuerza Primaria (Clic para ver en Músculos):
          </strong>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {exInfo.muscles.strength.map((m) => (
              <span
                key={m}
                onClick={(e) => handleMuscleClick(m, e)}
                title={`Ver ${m} en Base de Datos de Músculos`}
                style={{
                  background: 'rgba(48,209,88,0.15)',
                  border: '1px solid var(--success, #30d158)',
                  color: '#6ee7b7',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>{m}</span>
                <ExternalLink size={10} />
              </span>
            ))}
          </div>
        </div>

        {/* REQUISITOS DE MOVILIDAD */}
        <div>
          <strong style={{ fontSize: '0.74rem', color: 'var(--accent, #0a84ff)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
            Requisitos de Movilidad & Articulaciones:
          </strong>
          <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
            {mobilityList.map((mob: string, idx: number) => (
              <li key={idx}>{mob}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      {/* BARRA SUPERIOR DE BÚSQUEDA Y FILTROS */}
      <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', borderRadius: 'var(--radius-m, 12px)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
        
        {/* BUSCADOR DE EJERCICIOS + BOTÓN DE ORDENAMIENTO (A-Z) */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <input
              type="text"
              placeholder="Search exercises..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
                borderRadius: '8px',
                padding: '8px 12px 8px 32px',
                color: 'var(--text-primary)',
                fontSize: '0.86rem',
                outline: 'none'
              }}
            />
            <Search size={15} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
          </div>

          <button
            type="button"
            onClick={handleSortCycle}
            title="Sort Option"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
              color: 'var(--text-primary)',
              borderRadius: '8px',
              padding: '8px 14px',
              fontSize: '0.8rem',
              fontWeight: 700,
              fontFamily: 'SF Mono, monospace',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <ArrowUpDown size={13} />
            <span>{SORT_DISPLAY[sortOption]}</span>
          </button>
        </div>

        {/* MODOS DE VISTA: GROUPED VS FLAT LIST + BOTÓN EXPANDIR/CONTRAER TODOS */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
              View Mode
            </span>
            <div style={{ display: 'inline-flex', gap: '4px', background: 'rgba(0,0,0,0.3)', padding: '3px', borderRadius: '8px', width: 'fit-content', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))' }}>
              <button
                type="button"
                onClick={() => setIsGroupedView(true)}
                style={{
                  background: isGroupedView ? 'var(--accent, #0a84ff)' : 'transparent',
                  color: isGroupedView ? '#ffffff' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: isGroupedView ? 700 : 500,
                  cursor: 'pointer'
                }}
              >
                Grouped
              </button>
              <button
                type="button"
                onClick={() => setIsGroupedView(false)}
                style={{
                  background: !isGroupedView ? 'var(--accent, #0a84ff)' : 'transparent',
                  color: !isGroupedView ? '#ffffff' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: !isGroupedView ? 700 : 500,
                  cursor: 'pointer'
                }}
              >
                Flat List
              </button>
            </div>
          </div>

          {/* BOTÓN SUPERIOR PARA EXPANDIR O CONTRAER TODOS LOS GRUPOS (SOLO EN MODO GROUPED) */}
          {isGroupedView && (
            <button
              type="button"
              onClick={toggleExpandAllGroups}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
                color: 'var(--text-primary)',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <ChevronsUpDown size={14} />
              <span>{isAllGroupsExpanded ? 'Contraer Todos los Grupos' : 'Expandir Todos los Grupos'}</span>
            </button>
          )}
        </div>

        {/* FILTROS POR CATEGORÍAS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
            Category
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {CATEGORY_FILTERS.map((cat) => {
              const isSelected = selectedCategories.includes(cat);
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryToggle(cat)}
                  style={{
                    background: isSelected ? 'var(--accent, #0a84ff)' : 'rgba(255,255,255,0.03)',
                    color: isSelected ? '#ffffff' : 'var(--text-primary)',
                    border: isSelected ? '1px solid var(--accent, #0a84ff)' : '1px solid var(--color-border-subtle, rgba(255,255,255,0.1))',
                    borderRadius: '20px',
                    padding: '4px 10px',
                    fontSize: '0.76rem',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {isSelected && <Check size={11} />}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FILTROS POR GRUPOS MUSCULARES */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
            Muscle Group
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {Object.keys(MUSCLE_GROUP_MAP).map((group) => {
              const subgroups = MUSCLE_GROUP_MAP[group];
              const isSelected = subgroups.some((sub) => selectedMuscles.includes(sub));
              return (
                <button
                  key={group}
                  type="button"
                  onClick={() => handleMuscleGroupToggle(group)}
                  style={{
                    background: isSelected ? 'var(--success, #30d158)' : 'rgba(255,255,255,0.03)',
                    color: isSelected ? '#000000' : 'var(--text-primary)',
                    border: isSelected ? '1px solid var(--success, #30d158)' : '1px solid var(--color-border-subtle, rgba(255,255,255,0.1))',
                    borderRadius: '20px',
                    padding: '4px 10px',
                    fontSize: '0.76rem',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {isSelected && <Check size={11} />}
                  <span>{group}</span>
                </button>
              );
            })}
          </div>
        </div>

        {activeFiltersCount > 0 && (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={clearFilters}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--accent, #0a84ff)',
                fontSize: '0.76rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Clear All Filters ({activeFiltersCount})
            </button>
          </div>
        )}
      </div>

      {/* RENDERIZADO DE RESULTADOS: FLAT LIST VS GROUPED VIEW */}
      {!isGroupedView ? (
        /* FLAT LIST */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {filteredFlatList.map((name) => {
            const exInfo = exerciseDatabase[name];
            const isInlineExpanded = expandedInlineIds.includes(name);

            return (
              <div
                key={name}
                style={{
                  background: 'var(--surface-1, #0d0d0f)',
                  border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
                  borderRadius: 'var(--radius-m, 12px)',
                  overflow: 'hidden'
                }}
              >
                <div
                  onClick={() => setModalExerciseId(name)}
                  style={{
                    padding: '12px 14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <div>
                    <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'block' }}>{name}</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px', display: 'block' }}>
                      {(exInfo?.muscles?.strength || []).join(', ')}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => toggleInlineExpand(name, e)}
                    title={isInlineExpanded ? 'Contraer previsualización' : 'Previsualizar músculos y técnica'}
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.1))',
                      color: 'var(--text-secondary)',
                      padding: '4px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {isInlineExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </button>
                </div>

                {isInlineExpanded && renderInlinePreview(name)}
              </div>
            );
          })}
        </div>
      ) : (
        /* GROUPED VIEW CON ACORDEÓN REPLEGABLE POR DEFECTO */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {Object.entries(groupedExercises).map(([groupName, exercises]) => {
            const isGroupExpanded = Boolean(expandedGroups[groupName]);

            return (
              <div key={groupName} style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', borderRadius: 'var(--radius-m, 12px)', overflow: 'hidden' }}>
                
                {/* CABECERA INTERACTIVA DEL GRUPO */}
                <div
                  onClick={() => toggleGroupExpand(groupName)}
                  style={{
                    padding: '14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    background: 'rgba(255,255,255,0.02)',
                    userSelect: 'none'
                  }}
                >
                  <strong style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>{groupName}</strong>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.74rem', background: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)', padding: '2px 8px', borderRadius: '12px', fontWeight: 600 }}>
                      {exercises.length} ejercicios
                    </span>
                    {isGroupExpanded ? <ChevronDown size={18} style={{ color: 'var(--text-secondary)' }} /> : <ChevronRight size={18} style={{ color: 'var(--text-secondary)' }} />}
                  </div>
                </div>

                {/* CONTENIDO DESPLEGABLE DEL GRUPO */}
                {isGroupExpanded && (
                  <div style={{ padding: '12px', borderTop: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {exercises.map((name) => {
                      const isInlineExpanded = expandedInlineIds.includes(name);

                      return (
                        <div
                          key={name}
                          style={{
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.06))',
                            borderRadius: '6px',
                            overflow: 'hidden'
                          }}
                        >
                          <div
                            onClick={() => setModalExerciseId(name)}
                            style={{
                              padding: '8px 10px',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              cursor: 'pointer'
                            }}
                          >
                            <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-primary)' }}>{name}</span>

                            <button
                              type="button"
                              onClick={(e) => toggleInlineExpand(name, e)}
                              title={isInlineExpanded ? 'Contraer previsualización' : 'Previsualizar músculos y técnica'}
                              style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.1))',
                                color: 'var(--text-secondary)',
                                padding: '3px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              {isInlineExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                            </button>
                          </div>

                          {isInlineExpanded && renderInlinePreview(name)}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* MODAL UNIFICADO DE FICHA TÉCNICA FITAPP (VÍDEO, REQUISITOS DE MOVILIDAD Y SUSTITUCIONES) */}
      {modalExerciseId && (
        <ExerciseModal
          exerciseId={modalExerciseId}
          onClose={() => setModalExerciseId(null)}
        />
      )}
    </div>
  );
}
