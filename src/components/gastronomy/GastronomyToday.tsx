// src/components/gastronomy/GastronomyToday.tsx
import React from 'react';
import SectionNav from '../ui/SectionNav';
import ErrorBoundary from '../ErrorBoundary';
import { Utensils } from 'lucide-react';

export interface GastronomyTodayProps {
  currentPath?: string;
}

export default function GastronomyToday({ currentPath = '/app/gastronomy' }: GastronomyTodayProps) {
  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>

        {/* NAVEGACIÓN NIVEL 2 */}
        <SectionNav sectionKey="gastronomy" currentPath={currentPath} level={2} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Utensils size={22} style={{ color: 'var(--accent, #0a84ff)' }} />
          <div>
            <h1 style={{ fontSize: 'var(--fs-page, 1.75rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
              Gastronomía
            </h1>
            <span style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)' }}>
              Planificación nutricional, recetas & contenido guardado
            </span>
          </div>
        </div>

        {/* RESUMEN RÁPIDO */}
        <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-m, 12px)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: 'var(--fs-eyebrow, 0.75rem)', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase' }}>
            Plan Nutricional Activo
          </span>
          <strong style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
            Dieta de Mantenimiento / Hipertrofia Moderada (2,400 kcal)
          </strong>
          <span style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)' }}>
            Pollo salteado post-gym programado para hoy a las 13:00.
          </span>
        </div>

      </div>
    </ErrorBoundary>
  );
}
