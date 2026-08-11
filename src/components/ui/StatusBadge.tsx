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
          bg: 'var(--color-accent-primary-soft, rgba(10,132,255,0.12))',
          color: 'var(--accent, #0a84ff)',
          border: '1px solid var(--color-accent-primary-glow, rgba(10,132,255,0.25))'
        };
      case 'success':
        return {
          bg: 'var(--color-state-done-soft, rgba(48,209,88,0.12))',
          color: 'var(--success, #30d158)',
          border: '1px solid var(--color-state-done-glow, rgba(48,209,88,0.25))'
        };
      case 'warning':
        return {
          bg: 'var(--color-accent-warning-soft, rgba(255,159,10,0.12))',
          color: 'var(--warning, #ff9f0a)',
          border: '1px solid var(--color-accent-warning-glow, rgba(255,159,10,0.25))'
        };
      default:
        return {
          bg: 'rgba(255,255,255,0.05)',
          color: 'var(--text-secondary, #98989d)',
          border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))'
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
