import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit';
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: 'var(--color-accent-primary)',
    color: '#ffffff',
    border: 'none',
    fontWeight: 600,
    boxShadow: '0 3px 12px var(--color-accent-primary-soft)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--color-text-primary)',
    border: '1px solid var(--color-border-visible)',
    fontWeight: 500
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-text-secondary)',
    border: 'none',
    fontWeight: 500
  },
  danger: {
    background: 'var(--color-accent-danger-soft)',
    color: 'var(--color-accent-danger)',
    border: '1px solid var(--color-accent-danger-glow)',
    fontWeight: 600
  }
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: '6px 12px', fontSize: 'var(--font-size-label)', borderRadius: '8px' },
  md: { padding: '10px 18px', fontSize: 'var(--font-size-body)', borderRadius: '12px' }
};

export function Button({
  variant = 'secondary',
  size = 'md',
  onClick,
  children,
  disabled = false,
  type = 'button',
  style,
  className,
  title
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={className}
      style={{
        ...variantStyles[variant],
        ...sizeStyles[size],
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        transition: 'all 150ms ease',
        fontFamily: 'var(--font-family-system)',
        lineHeight: 1.2,
        ...style
      }}
      onMouseDown={(e) => {
        if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
      }}
      onMouseUp={(e) => {
        if (!disabled) e.currentTarget.style.transform = 'scale(1)';
      }}
      onMouseLeave={(e) => {
        if (!disabled) e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {children}
    </button>
  );
}

export default Button;
