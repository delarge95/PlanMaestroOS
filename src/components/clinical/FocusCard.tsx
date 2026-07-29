import React, { useState } from 'react';
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
      background: 'var(--color-surface-base)',
      border: '1px solid var(--color-border-visible)',
      borderRadius: '20px',
      padding: 'var(--space-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
    }}>
      {/* Bloque + estado */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ ...typo.micro, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Bloque actual · Hasta las {blockEndsAt}
        </span>
        {isStarted && !deferredUntil && (
          <span style={{ ...typo.micro, color: 'var(--color-state-done)', background: 'var(--color-state-done-soft)', padding: 'var(--space-xs) var(--space-sm)', borderRadius: '999px' }}>
            Activa
          </span>
        )}
        {deferredUntil && (
          <span style={{ ...typo.micro, color: 'var(--color-accent-warning)', background: 'var(--color-accent-warning-soft)', padding: 'var(--space-xs) var(--space-sm)', borderRadius: '999px' }}>
            ⏳ Regresa {deferredUntil}
          </span>
        )}
      </div>

      {/* AUDIT-07: Máximo 6 palabras en el título */}
      <h2 style={{ ...typo.display, color: 'var(--color-text-primary)', margin: 0, fontSize: '1.4rem', fontWeight: 700 }}>
        {taskName}
      </h2>

      {/* AUDIT-07: Dos acciones claras */}
      <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
        <Button
          variant={isStarted && !deferredUntil ? 'secondary' : 'primary'}
          size="md"
          onClick={handleStart}
          aria-label={isStarted ? 'Sesión en curso' : 'Iniciar tarea actual'}
        >
          {isStarted && !deferredUntil ? '✓ En Curso' : 'Iniciar'}
        </Button>
        <Button
          variant="ghost"
          size="md"
          onClick={handleDefer}
          aria-label="Posponer esta tarea 30 minutos sin penalización"
        >
          Posponer 30 min
        </Button>
      </div>
    </div>
  );
}

export default FocusCard;
