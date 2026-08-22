// src/components/ui/StatusBadge.tsx
import React from 'react';

export interface StatusBadgeProps {
  label: string;
  variant?: 'active' | 'success' | 'warning' | 'neutral';
  icon?: React.ReactNode;
}

export default function StatusBadge({ label, variant = 'neutral', icon }: StatusBadgeProps) {
  const getStyles = () => {
    switch (variant) {
      case 'active':
        return {
          bg: 'var(--surface-2)',
          color: 'var(--text-primary)',
          border: '1px solid var(--color-border-visible)'
        };
      case 'success':
        return {
          bg: 'var(--success-soft)',
          color: 'var(--success)',
          border: '1px solid rgba(48, 209, 88, 0.25)'
        };
      case 'warning':
        return {
          bg: 'var(--warning-soft)',
          color: 'var(--warning)',
          border: '1px solid rgba(255, 159, 10, 0.25)'
        };
      default:
        return {
          bg: 'var(--glass)',
          color: 'var(--text-secondary)',
          border: '1px solid var(--color-border-subtle)'
        };
    }
  };

  const style = getStyles();

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '3px 8px',
        borderRadius: 'var(--radius-s, 8px)',
        fontSize: 'var(--fs-eyebrow, 0.75rem)',
        fontWeight: 600,
        background: style.bg,
        color: style.color,
        border: style.border,
        whiteSpace: 'nowrap'
      }}
    >
      {icon}
      {label}
    </span>
  );
}
