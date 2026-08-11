import React, { useState, useId } from 'react';

export interface DisclosureProps {
  label: string;
  summary?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
}

export function Disclosure({
  label,
  summary,
  defaultOpen = false,
  children,
  icon,
  actions
}: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          width: '100%',
          minHeight: '44px',
          background: 'var(--surface-elevated)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-sm) var(--space-md)',
          color: 'var(--text-secondary)',
          fontSize: 'var(--font-size-label)',
          fontWeight: 550,
          cursor: 'pointer',
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          transition: 'all 150ms var(--ease-standard)',
          outline: 'none'
        }}
        onFocus={(e) => {
          e.currentTarget.style.boxShadow = '0 0 0 3px var(--focus)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
          {icon && <span>{icon}</span>}
          <span>{label}</span>
          {summary && <span style={{ color: 'var(--text-tertiary)', fontSize: 'var(--font-size-meta)' }}>({summary})</span>}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
          {actions && <div onClick={(e) => e.stopPropagation()}>{actions}</div>}
          <span style={{ fontSize: '0.75rem', transition: 'transform 180ms ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            ▼
          </span>
        </div>
      </button>

      {isOpen && (
        <div
          id={contentId}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-md)',
            animation: 'fadeIn 180ms ease-out'
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Disclosure;
