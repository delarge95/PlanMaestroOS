import React, { useState } from 'react';
import type { Recipe } from '../../data/gastronomy/types';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';
import { ExternalLink, ChevronDown, ChevronUp, Clock, Utensils } from 'lucide-react';

export interface RecipeDetailProps {
  recipe: Recipe;
  onBack?: () => void;
}

export default function RecipeDetail({ recipe, onBack }: RecipeDetailProps) {
  const [showSourceNotes, setShowSourceNotes] = useState(false);

  return (
    <ErrorBoundary>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        
        {/* CABECERA CON NOMBRE Y VOLVER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-xs)' }}>
          <div>
            <span style={{ fontSize: '0.68rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
              {recipe.cuisine} · {recipe.timeMinutes} min · Dificultad: {recipe.difficulty}
            </span>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '2px 0 0', color: 'var(--text)' }}>
              {recipe.title}
            </h2>
          </div>

          {onBack && (
            <Button variant="ghost" size="sm" onClick={onBack}>
              Volver
            </Button>
          )}
        </div>

        {/* INGREDIENTES Y PASOS PRIMERO (LO ESENCIAL PER TAREA 6.1) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-md)' }}>
          {/* INGREDIENTES */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-sm)', padding: '12px' }}>
            <strong style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Ingredientes
            </strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {recipe.ingredients.map((ing, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--text)' }}>
                  <span>{ing.name}</span>
                  <span style={{ color: 'var(--text-tertiary)', fontWeight: 600 }}>{ing.quantity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PASOS */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-sm)', padding: '12px' }}>
            <strong style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Pasos de preparación
            </strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {recipe.steps.map((st, idx) => (
                <div key={idx} style={{ fontSize: '0.82rem', color: 'var(--text)', lineHeight: 1.4 }}>
                  <strong style={{ color: 'var(--color-accent-primary)' }}>{idx + 1}.</strong> {st}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MACROS SI APLICA */}
        {recipe.macros && (
          <div style={{ display: 'flex', gap: 'var(--space-md)', background: 'rgba(10,132,255,0.04)', padding: '8px 12px', borderRadius: '6px', fontSize: '0.8rem' }}>
            <span>Kcal: <strong>{recipe.macros.kcal}</strong></span>
            <span>Prot: <strong>{recipe.macros.protein}g</strong></span>
            <span>Carbs: <strong>{recipe.macros.carbs}g</strong></span>
            <span>Grasas: <strong>{recipe.macros.fat}g</strong></span>
          </div>
        )}

        {/* DISCLOSURE: FUENTE Y NOTAS */}
        <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-xs)' }}>
          <button
            type="button"
            onClick={() => setShowSourceNotes(!showSourceNotes)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--color-accent-primary)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: 0
            }}
          >
            <span>Fuente y notas</span>
            {showSourceNotes ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {showSourceNotes && (
            <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {recipe.sourceName && <div>Fuente: {recipe.sourceName}</div>}
              {recipe.sourceUrl && (
                <div>
                  Enlace:{' '}
                  <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-primary)' }}>
                    {recipe.sourceUrl} <ExternalLink size={12} style={{ display: 'inline' }} />
                  </a>
                </div>
              )}
              {recipe.myNotes && <div>Notas: {recipe.myNotes}</div>}
            </div>
          )}
        </div>

      </div>
    </ErrorBoundary>
  );
}
