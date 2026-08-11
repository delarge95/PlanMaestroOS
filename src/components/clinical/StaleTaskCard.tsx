import React, { useState } from 'react';
import type { Task } from '../../data/contracts/task';
import Button from '../ui/Button';

export interface StaleTaskCardProps {
  task: Task;
  onSplit?: () => void;
  onMove?: () => void;
  onDismiss?: () => void;
}

export default function StaleTaskCard({ task, onSplit, onMove, onDismiss }: StaleTaskCardProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const handleLeave = () => {
    setDismissed(true);
    if (onDismiss) onDismiss();
  };

  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--color-border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-md)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xs)'
    }}>
      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
        Llevas varios días con "{task.title}". ¿La dividimos o la movemos?
      </span>

      <div style={{ display: 'flex', gap: '8px', paddingTop: '4px' }}>
        {onSplit && (
          <Button variant="secondary" size="sm" onClick={onSplit}>
            Dividir
          </Button>
        )}

        {onMove && (
          <Button variant="secondary" size="sm" onClick={onMove}>
            Mover
          </Button>
        )}

        <Button variant="ghost" size="sm" onClick={handleLeave}>
          Dejar así
        </Button>
      </div>
    </div>
  );
}
