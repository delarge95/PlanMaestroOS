import React from 'react';

export interface ListRowProps {
  title: string;
  meta?: string;
  icon?: React.ReactNode;
  badge?: string;
  badgeTone?: 'default' | 'accent' | 'success' | 'warning' | 'danger';
  onClick?: () => void;
  action?: React.ReactNode;
  active?: boolean;
  done?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const badgeStyles = {
  default: { color: 'var(--text-tertiary)', background: 'rgba(255,255,255,0.06)' },
  accent: { color: 'var(--color-accent-primary)', background: 'var(--color-accent-primary-soft)' },
  success: { color: 'var(--color-state-done)', background: 'var(--color-state-done-soft)' },
  warning: { color: 'var(--color-accent-warning)', background: 'var(--color-accent-warning-soft)' },
  danger: { color: 'var(--color-accent-danger)', background: 'var(--color-accent-danger-soft)' }
};

export function ListRow({
  title,
  meta,
  icon,
  badge,
  badgeTone = 'default',
  onClick,
  action,
  active = false,
  done = false,
  disabled = false,
  style
}: ListRowProps) {
  const isClickable = Boolean(onClick) && !disabled;

  return (
    <div
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onClick={disabled ? undefined : onClick}
      onKeyDown={isClickable ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick!(); } } : undefined}
      style={{
        width: '100%',
        minHeight: '48px',
        padding: 'var(--space-sm) var(--space-md)',
        borderRadius: 'var(--radius-md)',
        background: done ? 'var(--color-state-done-soft)' : active ? 'var(--color-accent-primary-soft)' : 'rgba(0, 0, 0, 0.3)',
        border: `1px solid ${active ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-md)',
        cursor: isClickable ? 'pointer' : disabled ? 'not-allowed' : 'default',
        opacity: disabled ? 0.45 : 1,
        transition: 'all 150ms var(--ease-standard)',
        outline: 'none',
        boxSizing: 'border-box',
        ...style
      }}
      onFocus={(e) => {
        if (isClickable) e.currentTarget.style.boxShadow = '0 0 0 3px var(--focus)';
      }}
      onBlur={(e) => {
        if (isClickable) e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', overflow: 'hidden' }}>
        {icon && <span style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', flexShrink: 0 }}>{icon}</span>}
        <div style={{ overflow: 'hidden' }}>
          <strong style={{ fontSize: 'var(--font-size-body)', fontWeight: 600, color: 'var(--text)', display: 'block', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
            {title}
          </strong>
          {meta && (
            <span style={{ fontSize: 'var(--font-size-label)', color: active ? 'var(--color-accent-primary)' : 'var(--text-secondary)', display: 'block' }}>
              {meta}
            </span>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', flexShrink: 0 }}>
        {badge && (
          <span style={{
            fontSize: 'var(--font-size-meta)',
            padding: '2px 8px',
            borderRadius: '999px',
            fontWeight: 600,
            ...badgeStyles[badgeTone]
          }}>
            {badge}
          </span>
        )}
        {action}
      </div>
    </div>
  );
}

export default ListRow;
