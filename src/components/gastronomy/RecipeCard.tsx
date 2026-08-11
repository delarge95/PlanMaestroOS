import React from 'react';
import type { Recipe } from '../../data/gastronomy/types';
import Button from '../ui/Button';

export interface RecipeCardProps {
  recipe: Recipe;
  onSelect: (recipe: Recipe) => void;
}

export default function RecipeCard({ recipe, onSelect }: RecipeCardProps) {
  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--color-border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-md)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 'var(--space-xs)'
      }}
    >
      <div>
        <span style={{ fontSize: '0.68rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
          {recipe.cuisine} · {recipe.timeMinutes} min
        </span>
        <strong style={{ fontSize: '0.92rem', color: 'var(--text)', display: 'block', marginTop: '2px' }}>
          {recipe.title}
        </strong>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '4px' }}>
        <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
          Dificultad: {recipe.difficulty}
        </span>

        <Button variant="secondary" size="sm" onClick={() => onSelect(recipe)}>
          Ver receta
        </Button>
      </div>
    </div>
  );
}
