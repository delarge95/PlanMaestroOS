import React, { useState, useEffect } from 'react';
import type { Task } from '../../data/contracts/task';
import Button from '../ui/Button';

export interface StaleTaskCardProps {
  task: Task;
  onSplit?: () => void;
  onMove?: () => void;
  onDismiss?: () => void;
}

const DISMISS_KEY = (id: string) => `stale_dismissed_${id}`;
const today = () => new Date().toISOString().split('T')[0];

export default function StaleTaskCard({ task, onSplit, onMove, onDismiss }: StaleTaskCardProps) {
  const [dismissed, setDismissed] = useState(false);

  // Restore dismiss state: only suppress if dismissed today
  useEffect(() => {
    try {
      const stored = localStorage.getItem(DISMISS_KEY(task.id));
      if (stored === today()) setDismissed(true);
    } catch (_) { /* SSR/privacy mode */ }
  }, [task.id]);

  if (dismissed) return null;

  const handleLeave = () => {
    setDismissed(true);
    try { localStorage.setItem(DISMISS_KEY(task.id), today()); } catch (_) { /* privacy mode */ }
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
