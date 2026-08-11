import React, { useState } from 'react';
import { initialMealPlans, type MealPlan } from '../../data/gastronomy/plans';
import { calculateDailyMacros } from '../../lib/gastronomy/macros';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';

export default function PlanBoard() {
  const [plans] = useState<MealPlan[]>(initialMealPlans);
  const [selectedPlan] = useState<MealPlan>(plans[0]);
  const [selectedDay, setSelectedDay] = useState<string>('Lunes');

  const dayRecipes = selectedPlan?.weeklyAssignments[selectedDay] || [];
  const macrosSummary = calculateDailyMacros(dayRecipes);

  return (
    <ErrorBoundary>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        
        {/* CABECERA PRESCRIPTIVA CON COPY EXACTO */}
        <div style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-xs)' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
            Planes
          </h2>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
            Objetivo: <strong>{selectedPlan.objective}</strong> · {selectedPlan.title}
          </span>
        </div>

        {/* SELECTOR DE DÍAS DE LA SEMANA */}
        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto' }}>
          {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((day) => (
            <button
              key={day}
              type="button"
              onClick={() => setSelectedDay(day)}
              style={{
                background: selectedDay === day ? 'var(--color-accent-primary)' : 'rgba(255,255,255,0.03)',
                color: selectedDay === day ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: selectedDay === day ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              {day}
            </button>
          ))}
        </div>

        {/* RESUMEN DE MACROS DEL DÍA PER TAREA 6.2 */}
        <div style={{ background: 'rgba(10,132,255,0.04)', border: '1px solid var(--color-accent-primary-soft)', borderRadius: 'var(--radius-sm)', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent-primary)', textTransform: 'uppercase' }}>
            Macros del día ({selectedDay})
          </span>
          <div style={{ display: 'flex', gap: 'var(--space-md)', fontSize: '0.88rem', color: 'var(--text)', fontWeight: 600 }}>
            <span>Kcal: <strong>{macrosSummary.totalKcal}</strong></span>
            <span>Prot: <strong>{macrosSummary.totalProtein}g</strong></span>
            <span>Carbs: <strong>{macrosSummary.totalCarbs}g</strong></span>
            <span>Grasas: <strong>{macrosSummary.totalFat}g</strong></span>
          </div>
        </div>

        {/* RECETAS ASIGNADAS AL DÍA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
            Recetas programadas para {selectedDay} ({dayRecipes.length})
          </span>

          {dayRecipes.map((r) => (
            <div key={r.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-border-subtle)', borderRadius: '6px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ fontSize: '0.88rem', color: 'var(--text)' }}>{r.title}</strong>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', display: 'block' }}>{r.cuisine} · {r.timeMinutes} min</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-primary)', fontWeight: 600 }}>
                {r.macros?.kcal} kcal
              </span>
            </div>
          ))}
        </div>

      </div>
    </ErrorBoundary>
  );
}
