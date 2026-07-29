import React, { useState } from 'react';
import Button from '../ui/Button';
import { typo } from '../../styles/typography';

interface FocusCardProps {
  taskName?: string;
  blockEndsAt?: string;
  onStart?: () => void;
  onDefer?: () => void;
}

export function FocusCard({
  taskName = "TwinSight MVP & Tesis Cierre",
  blockEndsAt = "11:40",
  onStart,
  onDefer
}: FocusCardProps) {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isDeferred, setIsDeferred] = useState<boolean>(false);

  const handleStart = () => {
    setIsStarted(true);
    if (onStart) onStart();
  };

  const handleDefer = () => {
    setIsDeferred(true);
    if (onDefer) onDefer();
    setTimeout(() => setIsDeferred(false), 3000);
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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ ...typo.micro, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Bloque actual · Hasta las {blockEndsAt}
        </span>
        {isStarted && (
          <span style={{ ...typo.micro, color: 'var(--color-state-done)', background: 'var(--color-state-done-soft)', padding: '2px 8px', borderRadius: '999px' }}>
            Activa
          </span>
        )}
      </div>

      <h2 style={{ ...typo.display, color: 'var(--color-text-primary)', margin: 0, fontSize: '1.4rem', fontWeight: 700 }}>
        {taskName}
      </h2>

      {isDeferred && (
        <span style={{ ...typo.label, color: 'var(--color-accent-warning)', background: 'var(--color-accent-warning-soft)', padding: '6px 12px', borderRadius: '8px' }}>
          ⏳ Posponiendo 30 minutos sin culpa.
        </span>
      )}

      <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
        <Button
          variant={isStarted ? 'secondary' : 'primary'}
          size="md"
          onClick={handleStart}
        >
          {isStarted ? '✓ En Curso' : 'Iniciar'}
        </Button>
        <Button
          variant="ghost"
          size="md"
          onClick={handleDefer}
        >
          Posponer 30 min
        </Button>
      </div>
    </div>
  );
}

export default FocusCard;
