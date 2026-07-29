import React from 'react';

export type IconButtonTone = 'default' | 'accent' | 'danger';

export interface IconButtonProps {
  label: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  tone?: IconButtonTone;
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit';
  style?: React.CSSProperties;
  className?: string;
}

const toneStyles: Record<IconButtonTone, React.CSSProperties> = {
  default: {
    background: 'transparent',
    color: 'var(--color-text-secondary)',
    border: 'none',
  },
  accent: {
    background: 'var(--color-accent-primary-soft)',
    color: 'var(--color-accent-primary)',
    border: '1px solid var(--color-border-visible)',
  },
  danger: {
    background: 'var(--color-accent-danger-soft)',
    color: 'var(--color-accent-danger)',
    border: '1px solid var(--color-accent-danger-glow)',
  }
};

const sizeDimensions = {
  sm: { minWidth: '36px', minHeight: '36px', width: '36px', height: '36px' },
  md: { minWidth: '44px', minHeight: '44px', width: '44px', height: '44px' },
  lg: { minWidth: '52px', minHeight: '52px', width: '52px', height: '52px' }
};

export function IconButton({
  label,
  children,
  onClick,
  disabled = false,
  tone = 'default',
  size = 'md',
  type = 'button',
  style,
  className
}: IconButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={className}
      style={{
        ...sizeDimensions[size],
        ...toneStyles[tone],
        borderRadius: 'var(--radius-sm)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'all 150ms var(--ease-standard)',
        outline: 'none',
        flexShrink: 0,
        ...style
      }}
      onFocus={(e) => {
        if (!disabled) e.currentTarget.style.boxShadow = '0 0 0 3px var(--focus)';
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {children}
    </button>
  );
}

export default IconButton;
