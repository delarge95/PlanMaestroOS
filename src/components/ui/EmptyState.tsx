import React from 'react';
import Button from './Button';

export interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
}

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
  icon = '☕'
}: EmptyStateProps) {
  return (
    <div
      style={{
        width: '100%',
        padding: 'var(--space-6) var(--space-4)',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--surface)',
        border: '1px border var(--color-border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 'var(--space-sm)'
      }}
    >
      <span style={{ fontSize: '2rem', marginBottom: 'var(--space-xs)' }}>{icon}</span>
      <h3 style={{ fontSize: 'var(--font-size-title)', fontWeight: 650, margin: 0, color: 'var(--text)' }}>
        {title}
      </h3>
      <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--text-secondary)', margin: 0, maxWidth: '420px' }}>
        {description}
      </p>
      {actionLabel && onAction && (
        <div style={{ marginTop: 'var(--space-md)' }}>
          <Button variant="primary" size="md" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
}

export default EmptyState;
