import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { filterExercises, type ExerciseEntry } from '../../data/exercises';

interface CustomExerciseItem {
  id: string;
  name: string;
  category: string;
  targetSets: number;
  targetReps: string;
  targetRpe: number;
  restSeconds: number;
}

interface CustomRoutine {
  id: string;
  title: string;
  description: string;
  exercises: CustomExerciseItem[];
}

export default function CustomRoutineBuilder() {
  const [routines, setRoutines] = useState<CustomRoutine[]>([]);
  const [isBuilding, setIsBuilding] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedExercises, setSelectedExercises] = useState<CustomExerciseItem[]>([]);

  // Exercise picker state
  const [searchQuery, setSearchQuery] = useState('');
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('fitapp_custom_routines');
      if (saved) {
        setRoutines(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const searchResults = filterExercises('Todos', searchQuery).slice(0, 8);

  const handleAddExercise = (ex: ExerciseEntry) => {
    const newItem: CustomExerciseItem = {
      id: 'ex_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
      name: ex.name,
      category: ex.category,
      targetSets: 3,
      targetReps: '8-12',
      targetRpe: 8,
      restSeconds: 90
    };
    setSelectedExercises((prev) => [...prev, newItem]);
    setIsPickerOpen(false);
    setSearchQuery('');
  };

  const handleRemoveExercise = (id: string) => {
    setSelectedExercises((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateItem = (id: string, field: keyof CustomExerciseItem, val: any) => {
    setSelectedExercises((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
  };

  const handleSaveRoutine = () => {
    if (!title.trim() || selectedExercises.length === 0) return;

    const newRoutine: CustomRoutine = {
      id: 'cr_' + Date.now(),
      title: title.trim(),
      description: description.trim() || 'Rutina personalizada creada en FitApp',
      exercises: selectedExercises
    };

    const updated = [newRoutine, ...routines];
    setRoutines(updated);
    try {
      localStorage.setItem('fitapp_custom_routines', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }

    // Reset builder
    setTitle('');
    setDescription('');
    setSelectedExercises([]);
    setIsBuilding(false);
  };

  const handleDeleteRoutine = (id: string) => {
    const updated = routines.filter((r) => r.id !== id);
    setRoutines(updated);
    try {
      localStorage.setItem('fitapp_custom_routines', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ErrorBoundary>
      <div
        style={{
          background: 'rgba(10, 15, 20, 0.65)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: '#77e7ff', fontWeight: 800, letterSpacing: '0.05em' }}>
              CREADOR DE RUTINAS A LA MEDIDA FITAPP
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0', color: '#ffffff' }}>
              Diseña & Guarda tus Propias Rutinas Personalizadas
            </h3>
          </div>

          <button
            type="button"
            onClick={() => setIsBuilding(!isBuilding)}
            style={{
              background: isBuilding ? 'rgba(239,68,68,0.15)' : 'rgba(119, 231, 255, 0.15)',
              border: `1px solid ${isBuilding ? 'rgba(239,68,68,0.4)' : 'rgba(119, 231, 255, 0.4)'}`,
              color: isBuilding ? '#f87171' : '#77e7ff',
              padding: '8px 16px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '0.82rem',
              cursor: 'pointer'
            }}
          >
            {isBuilding ? '✕ Cancelar Creador' : '🛠️ + Crear Nueva Rutina'}
          </button>
        </div>

        {/* BUILDER FORM */}
        {isBuilding && (
          <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(119,231,255,0.2)', borderRadius: '18px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.75rem', fontFamily: 'Azeret Mono, monospace', color: '#77e7ff', textTransform: 'uppercase', fontWeight: 700 }}>
                Título de la Rutina:
              </label>
              <input
                type="text"
                placeholder="Ej. Torso Hipertrofia A, Anillas & Core, Pierna Min-Max..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.75rem', fontFamily: 'Azeret Mono, monospace', color: '#a8b9b2', textTransform: 'uppercase', fontWeight: 700 }}>
                Descripción o Enfoque Objetivo:
              </label>
              <input
                type="text"
                placeholder="Ej. Enfoque en deltoides laterales y pectorales superiores..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '10px',
                  padding: '8px 14px',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* SELECTED EXERCISES LIST */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'Azeret Mono, monospace', color: '#10b981', fontWeight: 700 }}>
                  EJERCICIOS INCLUIDOS ({selectedExercises.length}):
                </span>
                <button
                  type="button"
                  onClick={() => setIsPickerOpen(true)}
                  style={{
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#10b981',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  + Buscar & Agregar Ejercicio
                </button>
              </div>

              {/* SEARCH MODAL / PICKER DROPDOWN */}
              {isPickerOpen && (
                <div style={{ background: 'rgba(10,14,20,0.95)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '12px', padding: '14px', marginBottom: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <input
                    type="text"
                    placeholder="Escribe el nombre del ejercicio (Ej. Bench Press, Pull up, Sentadilla)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      background: 'rgba(0,0,0,0.6)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      color: '#ffffff',
                      fontSize: '0.85rem'
                    }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '200px', overflowY: 'auto' }}>
                    {searchResults.map((ex, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleAddExercise(ex)}
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '8px',
                          padding: '8px 12px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        <span style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600 }}>{ex.name}</span>
                        <span style={{ fontSize: '0.7rem', color: '#10b981', fontFamily: 'Azeret Mono, monospace' }}>{ex.category}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedExercises.length === 0 ? (
                <p style={{ fontSize: '0.8rem', color: '#65756f', fontStyle: 'italic', margin: '4px 0' }}>
                  Aún no has agregado ningún ejercicio. Haz clic en "+ Buscar & Agregar Ejercicio".
                </p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedExercises.map((exItem) => (
                    <div key={exItem.id} style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                      <div>
                        <strong style={{ fontSize: '0.85rem', color: '#ffffff' }}>{exItem.name}</strong>
                        <span style={{ fontSize: '0.7rem', color: '#a8b9b2', display: 'block' }}>{exItem.category}</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.75rem' }}>
                        <label style={{ color: '#a8b9b2' }}>
                          Series:
                          <input
                            type="number"
                            value={exItem.targetSets}
                            onChange={(e) => handleUpdateItem(exItem.id, 'targetSets', parseInt(e.target.value) || 1)}
                            style={{ width: '45px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: '4px', textAlign: 'center', marginLeft: '4px' }}
                          />
                        </label>

                        <label style={{ color: '#a8b9b2' }}>
                          Reps:
                          <input
                            type="text"
                            value={exItem.targetReps}
                            onChange={(e) => handleUpdateItem(exItem.id, 'targetReps', e.target.value)}
                            style={{ width: '55px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: '4px', textAlign: 'center', marginLeft: '4px' }}
                          />
                        </label>

                        <button
                          type="button"
                          onClick={() => handleRemoveExercise(exItem.id)}
                          style={{ background: 'rgba(239,68,68,0.2)', border: 'none', color: '#f87171', borderRadius: '6px', padding: '4px 8px', cursor: 'pointer' }}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handleSaveRoutine}
              disabled={!title.trim() || selectedExercises.length === 0}
              style={{
                background: 'linear-gradient(135deg, #77e7ff, #3b82f6)',
                border: 'none',
                color: '#040608',
                fontWeight: 800,
                padding: '12px',
                borderRadius: '12px',
                fontSize: '0.9rem',
                cursor: !title.trim() || selectedExercises.length === 0 ? 'not-allowed' : 'pointer',
                opacity: !title.trim() || selectedExercises.length === 0 ? 0.5 : 1
              }}
            >
              ✓ Guardar Rutina Personalizada
            </button>
          </div>
        )}

        {/* CUSTOM ROUTINES LIST */}
        {routines.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
            {routines.map((r) => (
              <div key={r.id} style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(119,231,255,0.2)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '12px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>{r.title}</h4>
                    <button
                      type="button"
                      onClick={() => handleDeleteRoutine(r.id)}
                      style={{ background: 'transparent', border: 'none', color: '#f87171', fontSize: '0.8rem', cursor: 'pointer' }}
                    >
                      🗑️
                    </button>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#a8b9b2', margin: '4px 0 10px' }}>{r.description}</p>
                  <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.75rem', color: '#effff6', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {r.exercises.map((ex) => (
                      <li key={ex.id}>
                        {ex.name} ({ex.targetSets}s × {ex.targetReps})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
