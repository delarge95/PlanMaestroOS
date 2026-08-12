// src/components/fitness/analytics/AnalyticsChart.tsx
import React, { useState, useMemo } from 'react';
import { 
  type Metric, 
  type FilterType, 
  type Granularity, 
  type ChartType, 
  type ChartDataPoint,
  type FlatLogEntry,
  calculateE1RM,
  MUSCLE_GROUP_MAP,
  getCleanExerciseName
} from '../../../lib/fitness/analyticsUtils';
import { exerciseDatabase } from '../../../data/exercises';
import { TrendingUp, Layers, Activity, Dumbbell, Hash } from 'lucide-react';

interface Props {
  title?: string;
  flatLog?: FlatLogEntry[];
  unit?: 'kg' | 'lbs';
}

const METRICS_CONFIG: Array<{ id: Metric; name: string; icon: React.ReactNode; tooltip: string }> = [
  { id: 'volume', name: 'Volumen Total', icon: <Layers size={14} />, tooltip: 'Peso total acumulado (kg)' },
  { id: 'e1rm', name: 'Est. 1RM', icon: <TrendingUp size={14} />, tooltip: 'Proyección de 1RM más alta' },
  { id: 'maxWeight', name: 'Carga Máxima', icon: <Dumbbell size={14} />, tooltip: 'Serie con mayor peso absoluto' },
  { id: 'sets', name: 'Series Totales', icon: <Hash size={14} />, tooltip: 'Número total de series efectivas' },
  { id: 'reps', name: 'Repeticiones', icon: <Activity size={14} />, tooltip: 'Suma de repeticiones completadas' }
];

export default function AnalyticsChart({ title = 'Rendimiento Global', flatLog = [], unit = 'kg' }: Props) {
  const [metric, setMetric] = useState<Metric>('volume');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [exerciseFilter, setExerciseFilter] = useState<string>('');
  const [muscleGroupFilter, setMuscleGroupFilter] = useState<string>('all');
  const [granularity, setGranularity] = useState<Granularity>('week');
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [selectedPointKey, setSelectedPointKey] = useState<string | null>(null);

  // Generar opciones de ejercicios disponibles en el log
  const exerciseOptions = useMemo(() => {
    if (flatLog.length > 0) {
      return Array.from(new Set(flatLog.map((e) => e.exName))).sort();
    }
    return Object.keys(exerciseDatabase).slice(0, 30).sort();
  }, [flatLog]);

  // Si flatLog está vacío, generar datos mock representativos basados en el programa activo
  const effectiveLog: FlatLogEntry[] = useMemo(() => {
    if (flatLog.length > 0) return flatLog;

    const baseEntries: FlatLogEntry[] = [];
    const sampleExercises = ['Barbell Bench Press', 'Barbell Squat', 'Barbell Deadlift', 'Pull Up', 'Overhead Press'];
    const now = Date.now();
    const dayMs = 24 * 60 * 60 * 1000;

    for (let w = 4; w >= 1; w--) {
      sampleExercises.forEach((exName, idx) => {
        const timeIso = new Date(now - (w * 7 * dayMs) + (idx * dayMs)).toISOString();
        const baseWeight = 60 + idx * 25 + (5 - w) * 2.5;
        const reps = 8 + (idx % 3);

        baseEntries.push({
          weekId: `Semana ${5 - w}`,
          dayId: `Día ${idx + 1}`,
          exName,
          timestamp: timeIso,
          weight: baseWeight,
          reps
        });
      });
    }

    return baseEntries;
  }, [flatLog]);

  // Filtrado de entradas de log según la selección del usuario
  const filteredLog = useMemo(() => {
    return effectiveLog.filter((entry) => {
      if (filterType === 'exercise' && exerciseFilter) {
        return entry.exName === exerciseFilter;
      }
      if (filterType === 'muscleGroup' && muscleGroupFilter !== 'all') {
        const targetMuscles = MUSCLE_GROUP_MAP[muscleGroupFilter] || [];
        const cleanName = getCleanExerciseName(entry.exName);
        const matchedEx = Object.entries(exerciseDatabase).find(([name]) => getCleanExerciseName(name) === cleanName)?.[1];
        if (!matchedEx) return true;
        const allMuscles = [...(matchedEx.muscles.strength || []), ...(matchedEx.muscles.stability || [])];
        return allMuscles.some((m) => targetMuscles.includes(m));
      }
      return true;
    });
  }, [effectiveLog, filterType, exerciseFilter, muscleGroupFilter]);

  // Agrupamiento y cómputo de métricas por período (Semana o Día)
  const chartData = useMemo<ChartDataPoint[]>(() => {
    const groups = new Map<string, FlatLogEntry[]>();

    filteredLog.forEach((entry) => {
      let key = entry.weekId;
      if (granularity === 'day') {
        key = entry.timestamp ? new Date(entry.timestamp).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' }) : entry.dayId;
      }
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(entry);
    });

    const result: ChartDataPoint[] = [];

    Array.from(groups.entries()).forEach(([label, entries]) => {
      let val = 0;

      if (metric === 'volume') {
        val = entries.reduce((acc, curr) => acc + curr.weight * curr.reps, 0);
      } else if (metric === 'e1rm') {
        val = entries.reduce((acc, curr) => Math.max(acc, calculateE1RM(curr.weight, curr.reps)), 0);
      } else if (metric === 'maxWeight') {
        val = entries.reduce((acc, curr) => Math.max(acc, curr.weight), 0);
      } else if (metric === 'sets') {
        val = entries.length;
      } else if (metric === 'reps') {
        val = entries.reduce((acc, curr) => acc + curr.reps, 0);
      }

      result.push({
        label,
        value: Math.round(val * 10) / 10,
        metaKey: `${label}-${val}`
      });
    });

    if (result.length === 0) return [];

    let maxV = -Infinity;
    let minV = Infinity;
    result.forEach((p) => {
      if (p.value > maxV) maxV = p.value;
      if (p.value < minV) minV = p.value;
    });

    return result.map((p) => ({
      ...p,
      isMax: p.value === maxV && maxV !== minV,
      isMin: p.value === minV && maxV !== minV
    }));
  }, [filteredLog, granularity, metric]);

  const maxValue = useMemo(() => {
    return chartData.reduce((max, p) => Math.max(max, p.value), 0);
  }, [chartData]);

  return (
    <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* CABECERA CON SELECCIÓN DE MÉTRICAS */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <span style={{ fontSize: '0.72rem', color: 'var(--accent, #0a84ff)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Gráfico de Rendimiento Global
          </span>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0', color: 'var(--text-primary)' }}>
            {title}
          </h3>
        </div>

        {/* SELECTOR DE MÉTRICA */}
        <div style={{ display: 'flex', gap: '4px', background: 'rgba(0,0,0,0.4)', padding: '4px', borderRadius: '10px', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', flexWrap: 'wrap' }}>
          {METRICS_CONFIG.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMetric(m.id)}
              title={m.tooltip}
              style={{
                background: metric === m.id ? 'var(--accent, #0a84ff)' : 'transparent',
                color: metric === m.id ? '#ffffff' : 'var(--text-secondary)',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '6px',
                fontSize: '0.76rem',
                fontWeight: metric === m.id ? 700 : 500,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              {m.icon}
              <span>{m.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* CONTROLES DE FILTRADO Y GRANULARIDAD */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', background: 'rgba(255,255,255,0.02)', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.06))' }}>
        
        {/* TIPO DE FILTRO */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Filtrar por:</span>
          
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as FilterType)}
            style={{
              background: 'rgba(0,0,0,0.5)',
              color: 'var(--text-primary)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: '6px',
              padding: '4px 8px',
              fontSize: '0.78rem',
              outline: 'none'
            }}
          >
            <option value="all">Todo el programa</option>
            <option value="exercise">Ejercicio específico</option>
            <option value="muscleGroup">Grupo muscular</option>
          </select>

          {filterType === 'exercise' && (
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <input
                type="text"
                placeholder="Buscar ejercicio..."
                value={exerciseFilter}
                onChange={(e) => setExerciseFilter(e.target.value)}
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: '6px',
                  padding: '4px 8px',
                  fontSize: '0.78rem',
                  outline: 'none',
                  minWidth: '180px'
                }}
              />
              {exerciseFilter && (
                <button
                  type="button"
                  onClick={() => setExerciseFilter('')}
                  style={{
                    position: 'absolute', right: '6px', top: '50%', transform: 'translateY(-50%)',
                    background: 'transparent', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', fontSize: '0.75rem'
                  }}
                >
                  ✕
                </button>
              )}
              
              {/* MENÚ DE AUTOCOMPLETADO INTERACTIVO */}
              {exerciseFilter.length > 0 && !exerciseOptions.includes(exerciseFilter) && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    maxHeight: '180px',
                    overflowY: 'auto',
                    background: '#141820',
                    border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.15))',
                    borderRadius: '6px',
                    zIndex: 100,
                    marginTop: '4px',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.5)'
                  }}
                >
                  {exerciseOptions
                    .filter((ex) => ex.toLowerCase().includes(exerciseFilter.toLowerCase()))
                    .slice(0, 15)
                    .map((ex) => (
                      <div
                        key={ex}
                        onClick={() => setExerciseFilter(ex)}
                        style={{
                          padding: '6px 10px',
                          fontSize: '0.78rem',
                          color: 'var(--text-primary)',
                          cursor: 'pointer',
                          borderBottom: '1px solid rgba(255,255,255,0.03)'
                        }}
                      >
                        {ex}
                      </div>
                    ))}
                </div>
              )}
            </div>
          )}

          {filterType === 'muscleGroup' && (
            <select
              value={muscleGroupFilter}
              onChange={(e) => setMuscleGroupFilter(e.target.value)}
              style={{
                background: 'rgba(0,0,0,0.5)',
                color: 'var(--text-primary)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: '6px',
                padding: '4px 8px',
                fontSize: '0.78rem',
                outline: 'none'
              }}
            >
              <option value="all">Todos los músculos</option>
              {Object.keys(MUSCLE_GROUP_MAP).map((mg) => (
                <option key={mg} value={mg}>{mg}</option>
              ))}
            </select>
          )}
        </div>

        {/* GRANULARIDAD Y TIPO DE GRÁFICO */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div style={{ display: 'inline-flex', gap: '2px', background: 'rgba(0,0,0,0.3)', padding: '2px', borderRadius: '6px' }}>
            <button
              type="button"
              onClick={() => setGranularity('week')}
              style={{
                background: granularity === 'week' ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: granularity === 'week' ? 'var(--text-primary)' : 'var(--text-tertiary)',
                border: 'none', padding: '3px 8px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer'
              }}
            >
              Semanal
            </button>
            <button
              type="button"
              onClick={() => setGranularity('day')}
              style={{
                background: granularity === 'day' ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: granularity === 'day' ? 'var(--text-primary)' : 'var(--text-tertiary)',
                border: 'none', padding: '3px 8px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer'
              }}
            >
              Diario
            </button>
          </div>

          <div style={{ display: 'inline-flex', gap: '2px', background: 'rgba(0,0,0,0.3)', padding: '2px', borderRadius: '6px' }}>
            <button
              type="button"
              onClick={() => setChartType('bar')}
              style={{
                background: chartType === 'bar' ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: chartType === 'bar' ? 'var(--text-primary)' : 'var(--text-tertiary)',
                border: 'none', padding: '3px 8px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer'
              }}
            >
              Barras
            </button>
            <button
              type="button"
              onClick={() => setChartType('line')}
              style={{
                background: chartType === 'line' ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: chartType === 'line' ? 'var(--text-primary)' : 'var(--text-tertiary)',
                border: 'none', padding: '3px 8px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer'
              }}
            >
              Líneas
            </button>
          </div>
        </div>
      </div>

      {/* RENDERIZADO DEL GRÁFICO DINÁMICO SVG */}
      <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '16px', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.06))' }}>
        {chartData.length === 0 ? (
          <div style={{ textAlign: 'center', color: 'var(--text-tertiary)', padding: '40px 0', fontSize: '0.86rem' }}>
            Sin registros de datos para el filtro seleccionado.
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', height: '160px', padding: '10px 0' }}>
            {chartData.map((p, idx) => {
              const heightPct = maxValue > 0 ? Math.max(Math.round((p.value / maxValue) * 100), 8) : 8;
              const isSelected = selectedPointKey === p.metaKey;

              return (
                <div
                  key={p.metaKey || idx}
                  onClick={() => setSelectedPointKey(p.metaKey || null)}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100%',
                    justifyContent: 'flex-end',
                    gap: '6px',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontSize: '0.72rem', color: p.isMax ? 'var(--success, #30d158)' : 'var(--accent, #0a84ff)', fontWeight: 700 }}>
                    {p.value} {metric === 'volume' || metric === 'e1rm' || metric === 'maxWeight' ? unit : ''}
                  </span>

                  <div
                    style={{
                      width: '100%',
                      maxWidth: '42px',
                      height: `${heightPct}%`,
                      background: p.isMax
                        ? 'linear-gradient(180deg, var(--success, #30d158), rgba(48, 209, 88, 0.4))'
                        : isSelected
                        ? 'linear-gradient(180deg, #58a6ff, #0a84ff)'
                        : 'linear-gradient(180deg, var(--accent, #0a84ff), rgba(10, 132, 255, 0.3))',
                      borderRadius: '6px',
                      transition: 'all 150ms ease',
                      boxShadow: isSelected ? '0 0 10px var(--accent)' : 'none'
                    }}
                  />

                  <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontFamily: 'SF Mono, monospace', whiteSpace: 'nowrap' }}>
                    {p.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
