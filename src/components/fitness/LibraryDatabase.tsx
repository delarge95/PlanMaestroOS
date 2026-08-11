// src/components/fitness/LibraryDatabase.tsx
import React, { useState, useMemo } from 'react';
import StatusBadge from '../ui/StatusBadge';
import ExerciseModal from './ExerciseModal';
import { Database, Search, Filter, CheckCircle, ChevronRight } from 'lucide-react';
import { exerciseDatabase } from '../../data/exercises';
import { resolveExerciseReference } from '../../data/fitness/exerciseResolver';

export default function LibraryDatabase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMuscle, setSelectedMuscle] = useState<string>('all');
  const [modalExerciseId, setModalExerciseId] = useState<string | null>(null);

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
        ex.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ex.musclesStr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ex.subcategory.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' ||
        ex.equipGroup.toLowerCase() === selectedCategory.toLowerCase();

      const matchesMuscle =
        selectedMuscle === 'all' ||
        ex.musclesStr.toLowerCase().includes(selectedMuscle.toLowerCase()) ||
        ex.name.toLowerCase().includes(selectedMuscle.toLowerCase());

      return matchesSearch && matchesCategory && matchesMuscle;
    });
  }, [allExercisesList, searchQuery, selectedCategory, selectedMuscle]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
      {/* BLOQUE PRINCIPAL: BASE DE DATOS DE EJERCICIOS CON FILTROS */}
      <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', borderRadius: 'var(--radius-m, 12px)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        
        {/* CABECERA Y BUSCADOR POR TEXTO */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Database size={18} style={{ color: 'var(--accent, #0a84ff)' }} />
            <h3 style={{ fontSize: 'var(--fs-step, 1.0625rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
              Base de Datos Completa de Ejercicios ({filteredExercises.length})
            </h3>
          </div>

          <div style={{ position: 'relative', minWidth: '240px', flex: 1, maxWidth: '360px' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar ejercicio por nombre, músculo o patrón..."
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

        {/* CONTROLES DE FILTRADO MULTIFACÉTICO */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.06))' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Filter size={14} style={{ color: 'var(--text-secondary)' }} />
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 700 }}>Equipamiento:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                background: 'var(--surface-elevated, #16181d)',
                color: 'var(--text-primary)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: '6px',
                padding: '4px 8px',
                fontSize: '0.8rem',
                outline: 'none'
              }}
            >
              <option value="all">Todos los tipos</option>
              <option value="Barra / Discos">Barra / Discos</option>
              <option value="Mancuernas">Mancuernas</option>
              <option value="Poleas / Cables">Poleas / Cables</option>
              <option value="Máquinas">Máquinas</option>
              <option value="Calistenia / Peso Corporal">Calistenia / Peso Corporal</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 700 }}>Grupo Muscular:</span>
            <select
              value={selectedMuscle}
              onChange={(e) => setSelectedMuscle(e.target.value)}
              style={{
                background: 'var(--surface-elevated, #16181d)',
                color: 'var(--text-primary)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: '6px',
                padding: '4px 8px',
                fontSize: '0.8rem',
                outline: 'none'
              }}
            >
              <option value="all">Todos los músculos</option>
              <option value="pecho">Pectoral / Empuje</option>
              <option value="espalda">Espalda / Tracción</option>
              <option value="cuádriceps">Cuádriceps / Rodilla</option>
              <option value="isquio">Isquiotibiales / Bisagra</option>
              <option value="hombro">Deltoides / Hombros</option>
              <option value="bíceps">Bíceps / Tríceps</option>
            </select>
          </div>
        </div>

        {/* LISTA DE RESULTADOS DE EJERCICIOS CON ACCESO A FICHA TÉCNICA */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '8px' }}>
          {filteredExercises.slice(0, 40).map((ex) => {
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
