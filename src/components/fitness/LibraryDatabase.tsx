// src/components/fitness/LibraryDatabase.tsx
import React, { useState, useMemo } from 'react';
import StatusBadge from '../ui/StatusBadge';
import ExerciseModal from './ExerciseModal';
import { Database, Search, CheckCircle, ChevronRight, Check } from 'lucide-react';
import { exerciseDatabase } from '../../data/exercises';
import { resolveExerciseReference } from '../../data/fitness/exerciseResolver';

const EQUIPMENT_OPTIONS = [
  { id: 'Barra / Discos', label: '🏋️ Barra / Discos' },
  { id: 'Mancuernas', label: '💪 Mancuernas' },
  { id: 'Poleas / Cables', label: '⚡ Poleas / Cables' },
  { id: 'Máquinas', label: '⚙️ Máquinas' },
  { id: 'Calistenia / Peso Corporal', label: '🤸 Calistenia / Peso Corporal' }
];

const MUSCLE_OPTIONS = [
  { id: 'pecho', label: 'Pectoral / Empuje' },
  { id: 'espalda', label: 'Espalda / Tracción' },
  { id: 'cuádriceps', label: 'Cuádriceps / Rodilla' },
  { id: 'isquio', label: 'Isquios / Bisagra' },
  { id: 'hombro', label: 'Deltoides / Hombros' },
  { id: 'bíceps', label: 'Bíceps / Tríceps' }
];

export default function LibraryDatabase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEquipments, setSelectedEquipments] = useState<string[]>([]);
  const [selectedMuscles, setSelectedMuscles] = useState<string[]>([]);
  const [modalExerciseId, setModalExerciseId] = useState<string | null>(null);

  const toggleEquipFilter = (equipId: string) => {
    setSelectedEquipments((prev) =>
      prev.includes(equipId) ? prev.filter((i) => i !== equipId) : [...prev, equipId]
    );
  };

  const toggleMuscleFilter = (muscleId: string) => {
    setSelectedMuscles((prev) =>
      prev.includes(muscleId) ? prev.filter((i) => i !== muscleId) : [...prev, muscleId]
    );
  };

  const clearFilters = () => {
    setSelectedEquipments([]);
    setSelectedMuscles([]);
    setSearchQuery('');
  };

  // Lista procesada de ejercicios de la base de datos
  const allExercisesList = useMemo(() => {
    return Object.entries(exerciseDatabase).map(([key, data]) => {
      const category = data.category || 'gym';
      const subcategory = data.subcategory || '';
      const muscles = (data.muscles?.strength || []).join(', ');

      let equipGroup = 'Libre';
      const lowerKey = key.toLowerCase();
      if (lowerKey.includes('cable') || lowerKey.includes('polea')) equipGroup = 'Poleas / Cables';
      else if (lowerKey.includes('machine') || lowerKey.includes('máquina') || lowerKey.includes('smith') || lowerKey.includes('pressdown') || lowerKey.includes('pec deck')) equipGroup = 'Máquinas';
      else if (lowerKey.includes('barbell') || lowerKey.includes('barra') || lowerKey.includes('squat') || lowerKey.includes('rdl') || lowerKey.includes('bench')) equipGroup = 'Barra / Discos';
      else if (lowerKey.includes('db') || lowerKey.includes('dumbbell') || lowerKey.includes('mancuerna')) equipGroup = 'Mancuernas';
      else if (category === 'calisthenics' || lowerKey.includes('pull-up') || lowerKey.includes('dip') || lowerKey.includes('pushup') || lowerKey.includes('hang')) equipGroup = 'Calistenia / Peso Corporal';

      return {
        id: key,
        name: key,
        category,
        subcategory,
        equipGroup,
        musclesStr: muscles || 'Musculatura principal',
        raw: data
      };
    });
  }, []);

  const filteredExercises = useMemo(() => {
    return allExercisesList.filter((ex) => {
      const matchesSearch =
        !searchQuery ||
        ex.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ex.musclesStr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ex.subcategory.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedEquipments.length === 0 ||
        selectedEquipments.some((eq) => eq.toLowerCase() === ex.equipGroup.toLowerCase());

      const matchesMuscle =
        selectedMuscles.length === 0 ||
        selectedMuscles.some(
          (m) =>
            ex.musclesStr.toLowerCase().includes(m.toLowerCase()) ||
            ex.name.toLowerCase().includes(m.toLowerCase())
        );

      return matchesSearch && matchesCategory && matchesMuscle;
    });
  }, [allExercisesList, searchQuery, selectedEquipments, selectedMuscles]);

  const activeFiltersCount = selectedEquipments.length + selectedMuscles.length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
      {/* BLOQUE PRINCIPAL: BASE DE DATOS DE EJERCICIOS CON FILTROS EN BOTONES MULTISELECT */}
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
        {/* CABECERA Y BUSCADOR POR TEXTO */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Database size={18} style={{ color: 'var(--accent, #0a84ff)' }} />
            <h3 style={{ fontSize: 'var(--fs-step, 1.0625rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
              Ejercicios ({filteredExercises.length})
            </h3>
            {activeFiltersCount > 0 && (
              <button
                type="button"
                onClick={clearFilters}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: 'none',
                  color: 'var(--accent, #0a84ff)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: '2px 8px',
                  borderRadius: '4px'
                }}
              >
                Limpiar filtros ({activeFiltersCount})
              </button>
            )}
          </div>

          <div style={{ position: 'relative', minWidth: '240px', flex: 1, maxWidth: '360px' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre, músculo o patrón..."
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

        {/* BOTONES MULTISELECT: EQUIPAMIENTO */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
            Filtrar por Equipamiento (Selección Múltiple):
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {EQUIPMENT_OPTIONS.map((eq) => {
              const isSelected = selectedEquipments.includes(eq.id);
              return (
                <button
                  key={eq.id}
                  type="button"
                  onClick={() => toggleEquipFilter(eq.id)}
                  style={{
                    background: isSelected ? 'var(--accent, #0a84ff)' : 'rgba(255,255,255,0.03)',
                    color: isSelected ? '#ffffff' : 'var(--text-primary)',
                    border: isSelected ? '1px solid var(--accent, #0a84ff)' : '1px solid var(--color-border-subtle, rgba(255,255,255,0.1))',
                    borderRadius: '20px',
                    padding: '5px 12px',
                    fontSize: '0.78rem',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'all 120ms ease'
                  }}
                >
                  {isSelected && <Check size={12} />}
                  <span>{eq.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* BOTONES MULTISELECT: GRUPO MUSCULAR */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
            Filtrar por Grupo Muscular (Selección Múltiple):
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {MUSCLE_OPTIONS.map((m) => {
              const isSelected = selectedMuscles.includes(m.id);
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => toggleMuscleFilter(m.id)}
                  style={{
                    background: isSelected ? 'var(--success, #30d158)' : 'rgba(255,255,255,0.03)',
                    color: isSelected ? '#000000' : 'var(--text-primary)',
                    border: isSelected ? '1px solid var(--success, #30d158)' : '1px solid var(--color-border-subtle, rgba(255,255,255,0.1))',
                    borderRadius: '20px',
                    padding: '5px 12px',
                    fontSize: '0.78rem',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'all 120ms ease'
                  }}
                >
                  {isSelected && <Check size={12} />}
                  <span>{m.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* LISTA DE RESULTADOS DE EJERCICIOS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '8px', marginTop: '6px' }}>
          {filteredExercises.slice(0, 50).map((ex) => {
            const ref = resolveExerciseReference(ex.id);

            return (
              <div
                key={ex.id}
                onClick={() => setModalExerciseId(ex.id)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.06))',
                  cursor: 'pointer',
                  transition: 'all 120ms ease'
                }}
              >
                <div>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--text-primary)', display: 'block' }}>
                    {ex.name}
                  </strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginTop: '2px' }}>
                    {ex.equipGroup} · {ex.musclesStr}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <StatusBadge
                    label={ref.verified ? 'Verificado' : 'Local'}
                    variant={ref.verified ? 'success' : 'neutral'}
                    icon={ref.verified ? <CheckCircle size={10} /> : undefined}
                  />
                  <ChevronRight size={14} style={{ color: 'var(--text-tertiary)' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL DE FICHA TÉCNICA FITAPP */}
      {modalExerciseId && (
        <ExerciseModal
          exerciseId={modalExerciseId}
          onClose={() => setModalExerciseId(null)}
        />
      )}
    </div>
  );
}
