// src/components/fitness/LibraryMuscles.tsx
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp, Dumbbell, Activity } from 'lucide-react';
import { muscleGroupsDatabase, specificMusclesDatabase, findMuscleTarget, type MuscleGroupCategory } from '../../data/fitness/muscleData';

const MUSCLE_CATEGORIES: MuscleGroupCategory[] = ['Legs', 'Back', 'Chest', 'Shoulders', 'Arms', 'Core', 'Thorax'];

export default function LibraryMuscles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<MuscleGroupCategory[]>([]);
  const [openGroups, setOpenGroups] = useState<string[]>([]);
  
  const groupRefs = useRef<Map<string, HTMLElement | null>>(new Map());
  const specificMuscleRefs = useRef<Map<string, HTMLElement | null>>(new Map());

  // Leer parámetro ?muscle= de la URL al cargar y resolver inteligentemente mediante findMuscleTarget
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const muscleParam = params.get('muscle');
      if (muscleParam) {
        setSearchTerm(muscleParam);

        const target = findMuscleTarget(muscleParam);
        if (target && target.group) {
          setOpenGroups((prev) => [...new Set([...prev, target.group])]);

          // Scroll suave hacia la sección o músculo resuelto
          setTimeout(() => {
            if (target.specific && specificMuscleRefs.current.has(target.specific)) {
              specificMuscleRefs.current.get(target.specific)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else if (groupRefs.current.has(target.group)) {
              groupRefs.current.get(target.group)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 200);
        } else {
          // Fallback a coincidencia de texto estándar si no hay target directo
          const matchingGroupNames = Object.values(muscleGroupsDatabase)
            .filter((g) =>
              g.name.toLowerCase().includes(muscleParam.toLowerCase()) ||
              g.specificMuscles.some((m) => m.toLowerCase().includes(muscleParam.toLowerCase()))
            )
            .map((g) => g.name);
          if (matchingGroupNames.length > 0) {
            setOpenGroups(matchingGroupNames);
          }
        }
      }
    }
  }, []);

  const filteredGroups = useMemo(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    
    return Object.values(muscleGroupsDatabase).filter((group) => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(group.category)) {
        return false;
      }
      if (searchTerm) {
        // Usar resolvedor anatómico para verificar pertenencia
        const target = findMuscleTarget(searchTerm);
        if (target && target.group === group.name) return true;

        const groupNameMatch = group.name.toLowerCase().includes(lowerSearchTerm);
        if (groupNameMatch) return true;

        const categoryMatch = group.category.toLowerCase().includes(lowerSearchTerm);
        if (categoryMatch) return true;

        const specificMuscleMatch = group.specificMuscles.some((muscleKey) => {
          const spec = specificMusclesDatabase[muscleKey];
          if (!spec) return false;
          return (
            spec.name.toLowerCase().includes(lowerSearchTerm) ||
            spec.functions.some((f) => f.toLowerCase().includes(lowerSearchTerm)) ||
            spec.mainExercises.some((ex) => ex.toLowerCase().includes(lowerSearchTerm))
          );
        });
        if (specificMuscleMatch) return true;
        return false;
      }
      return true;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm, selectedCategories]);

  const handleCategoryToggle = (category: MuscleGroupCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((g) => g !== category) : [...prev, category]
    );
  };

  const handleGroupToggle = (groupName: string, isOpen: boolean) => {
    setOpenGroups((prev) =>
      isOpen ? [...new Set([...prev, groupName])] : prev.filter((name) => name !== groupName)
    );
  };

  const handleExerciseClick = (exName: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = `/app/fitness/library/data?search=${encodeURIComponent(exName)}`;
    }
  };

  const renderDetail = (label: string, content: string | string[]) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <span style={{ fontSize: '0.76rem', color: 'var(--accent, #0a84ff)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
        {label}
      </span>
      {Array.isArray(content) ? (
        <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
          {content.map((point, i) => <li key={i}>{point}</li>)}
        </ul>
      ) : (
        <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
          {content}
        </p>
      )}
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      {/* BLOQUE 1: FILTROS & BÚSQUEDA ANATÓMICA */}
      <div
        style={{
          background: 'var(--surface-1, #0d0d0f)',
          border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
          borderRadius: '16px',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-md)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: 'var(--accent, #0a84ff)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Base de Datos Anatómica & Biomecánica FitApp
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0', color: 'var(--text-primary)' }}>
              Directorio Anatómico de Músculos ({filteredGroups.length} Regiones)
            </h3>
          </div>

          <div style={{ position: 'relative', minWidth: '240px', flex: 1, maxWidth: '360px' }}>
            <input
              type="text"
              placeholder="Buscar músculo en inglés/español..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
                borderRadius: '8px',
                padding: '8px 12px 8px 32px',
                color: 'var(--text-primary)',
                fontSize: '0.84rem',
                outline: 'none'
              }}
            />
            <Search size={15} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
          </div>
        </div>

        {/* PÍLDORAS CATEGORÍA MUSCULAR MULTISELECT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase' }}>
            Filtrar por Región Corporal:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {MUSCLE_CATEGORIES.map((category) => {
              const isSelected = selectedCategories.includes(category);
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryToggle(category)}
                  style={{
                    background: isSelected ? 'var(--accent, #0a84ff)' : 'rgba(255,255,255,0.03)',
                    color: isSelected ? '#ffffff' : 'var(--text-primary)',
                    border: isSelected ? '1px solid var(--accent, #0a84ff)' : '1px solid var(--color-border-subtle, rgba(255,255,255,0.1))',
                    borderRadius: '20px',
                    padding: '5px 12px',
                    fontSize: '0.78rem',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 120ms ease'
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* LISTADO ACCORDEÓN DE REGIONES ANATÓMICAS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filteredGroups.map((groupInfo) => {
          const isOpen = openGroups.includes(groupInfo.name);

          return (
            <div
              key={groupInfo.name}
              ref={(el) => { groupRefs.current.set(groupInfo.name, el); }}
              style={{
                background: 'var(--surface-1, #0d0d0f)',
                border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
                borderRadius: 'var(--radius-m, 12px)',
                overflow: 'hidden'
              }}
            >
              {/* CABECERA DE GRUPO MUSCULAR */}
              <div
                onClick={() => handleGroupToggle(groupInfo.name, !isOpen)}
                style={{
                  padding: '14px 16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  background: isOpen ? 'rgba(255,255,255,0.03)' : 'transparent',
                  transition: 'background 120ms ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Activity size={18} style={{ color: 'var(--accent, #0a84ff)' }} />
                  <strong style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>
                    {groupInfo.name}
                  </strong>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, background: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)', padding: '3px 8px', borderRadius: '12px' }}>
                    {groupInfo.category}
                  </span>
                  {isOpen ? <ChevronUp size={16} style={{ color: 'var(--text-tertiary)' }} /> : <ChevronDown size={16} style={{ color: 'var(--text-tertiary)' }} />}
                </div>
              </div>

              {/* CONTENIDO DETALLADO DEL GRUPO MUSCULAR */}
              {isOpen && (
                <div style={{ padding: '16px', borderTop: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', display: 'flex', flexDirection: 'column', gap: '14px', background: 'rgba(0,0,0,0.2)' }}>
                  <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.45 }}>
                    {groupInfo.overview}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '12px', borderLeft: '2px solid var(--accent, #0a84ff)' }}>
                    {groupInfo.specificMuscles.map((muscleKey) => {
                      const muscle = specificMusclesDatabase[muscleKey];
                      if (!muscle) return null;

                      return (
                        <div
                          key={muscle.name}
                          ref={(el) => { specificMuscleRefs.current.set(muscle.name, el); }}
                          style={{
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.06))',
                            borderRadius: '8px',
                            padding: '12px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                          }}
                        >
                          <h4 style={{ margin: 0, fontSize: '0.94rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                            {muscle.name}
                          </h4>

                          {renderDetail('Origen Óseo', muscle.origin)}
                          {renderDetail('Inserción Muscular', muscle.insertion)}
                          {renderDetail('Acciones Biomecánicas', muscle.functions)}
                          {renderDetail('Rol Biomecánico Prime', muscle.biomechanicalRole)}

                          {/* EJERCICIOS CLAVE ASOCIADOS */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <span style={{ fontSize: '0.76rem', color: 'var(--accent, #0a84ff)', fontWeight: 700, textTransform: 'uppercase' }}>
                              Ejercicios Principales de Estimulo:
                            </span>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                              {muscle.mainExercises.map((ex) => (
                                <button
                                  key={ex}
                                  type="button"
                                  onClick={() => handleExerciseClick(ex)}
                                  style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.1))',
                                    color: 'var(--text-primary)',
                                    borderRadius: '6px',
                                    padding: '3px 8px',
                                    fontSize: '0.78rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                  }}
                                >
                                  <Dumbbell size={11} />
                                  <span>{ex}</span>
                                </button>
                              ))}
                            </div>
                          </div>

                          {renderDetail('Impacto Estético', muscle.aesthetics)}
                          {renderDetail('Precauciones & Prevención de Riesgos', muscle.precautions)}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
