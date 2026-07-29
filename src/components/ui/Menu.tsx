import React, { useState, useRef, useEffect } from 'react';
import IconButton from './IconButton';

export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  tone?: 'default' | 'danger';
  disabled?: boolean;
}

export interface MenuProps {
  items: MenuItem[];
  triggerLabel?: string;
  triggerIcon?: React.ReactNode;
}

export function Menu({
  items,
  triggerLabel = 'Más opciones',
  triggerIcon = '•••'
}: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} style={{ position: 'relative', display: 'inline-block' }}>
      <IconButton
        label={triggerLabel}
        onClick={() => setIsOpen((prev) => !prev)}
        size="sm"
      >
        {triggerIcon}
      </IconButton>

      {isOpen && (
        <div
          role="menu"
          aria-label={triggerLabel}
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: 'var(--space-xs)',
            zIndex: 150,
            minWidth: '180px',
            background: 'var(--surface-elevated)',
            border: '1px solid var(--color-border-visible)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-xs)',
            boxShadow: 'var(--shadow-float)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            animation: 'fadeIn 120ms ease-out'
          }}
        >
          {items.map((item) => (
            <button
              key={item.id}
              role="menuitem"
              disabled={item.disabled}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
              style={{
                width: '100%',
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius-sm)',
                background: 'transparent',
                border: 'none',
                color: item.tone === 'danger' ? 'var(--color-accent-danger)' : 'var(--text)',
                fontSize: 'var(--font-size-label)',
                fontWeight: 500,
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-xs)',
                cursor: item.disabled ? 'not-allowed' : 'pointer',
                opacity: item.disabled ? 0.4 : 1,
                outline: 'none'
              }}
              onFocus={(e) => {
                e.currentTarget.style.background = item.tone === 'danger' ? 'var(--color-accent-danger-soft)' : 'rgba(255, 255, 255, 0.08)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = item.tone === 'danger' ? 'var(--color-accent-danger-soft)' : 'rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {item.icon && <span>{item.icon}</span>}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
