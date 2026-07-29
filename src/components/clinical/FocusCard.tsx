import React, { useState } from 'react';
import { Play, Clock, Check } from 'lucide-react';
import Button from '../ui/Button';
import { typo } from '../../styles/typography';

interface FocusCardProps {
  taskName?: string;
  blockEndsAt?: string;
  onStart?: () => void;
  onDefer?: () => void;
  /** Hora de reentrada (calculada externamente) tras posponer */
  deferredUntil?: string | null;
}

export function FocusCard({
  taskName = 'TwinSight MVP & Tesis Cierre',
  blockEndsAt = '11:40',
  onStart,
  onDefer,
  deferredUntil
}: FocusCardProps) {
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const handleStart = () => {
    setIsStarted(true);
    if (onStart) onStart();
  };

  const handleDefer = () => {
    if (onDefer) onDefer();
    setIsStarted(false);
  };

  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--color-border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      boxShadow: 'var(--shadow-float)'
    }}>
      {/* Bloque + estado */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ ...typo.micro, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Bloque actual · Hasta las {blockEndsAt}
        </span>
        {isStarted && !deferredUntil && (
          <span style={{ ...typo.micro, color: 'var(--color-state-done)', background: 'var(--color-state-done-soft)', padding: '4px 10px', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Check size={12} aria-hidden="true" /> Activa
          </span>
        )}
        {deferredUntil && (
          <span style={{ ...typo.micro, color: 'var(--color-accent-warning)', background: 'var(--color-accent-warning-soft)', padding: '4px 10px', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={12} aria-hidden="true" /> Regresa {deferredUntil}
          </span>
        )}
      </div>

      {/* Título de máximo 6 palabras */}
      <h2 style={{ ...typo.display, color: 'var(--text)', margin: 0, fontSize: '1.4rem', fontWeight: 700 }}>
        {taskName}
      </h2>

      {/* Micro-paso de 1 línea */}
      <p style={{ ...typo.body, color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
        Primer paso de 10 min: Escribir el primer borrador sin corregir ortografía.
      </p>

      {/* Dos acciones claras */}
      <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', marginTop: 'var(--space-xs)' }}>
        <Button
          variant={isStarted && !deferredUntil ? 'secondary' : 'primary'}
          size="md"
          onClick={handleStart}
          aria-label={isStarted ? 'Sesión en curso' : 'Iniciar tarea actual'}
        >
          {isStarted && !deferredUntil ? (
            <>
              <Check size={16} aria-hidden="true" /> En Curso
            </>
          ) : (
            <>
              <Play size={16} aria-hidden="true" /> Empezar
            </>
          )}
        </Button>
        <Button
          variant="ghost"
          size="md"
          onClick={handleDefer}
          aria-label="Posponer esta tarea 30 minutos sin penalización"
        >
          <Clock size={16} aria-hidden="true" /> Posponer 30 min
        </Button>
      </div>
    </div>
  );
}

export default FocusCard;
