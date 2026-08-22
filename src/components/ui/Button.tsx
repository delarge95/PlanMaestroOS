import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  // Primary = acción destacada. Monocromo: blanco sobre negro (sin acento azul).
  primary: {
    background: 'var(--text-primary)',
    color: '#000000',
    border: 'none',
    fontWeight: 600,
    boxShadow: 'none'
  },
  secondary: {
    background: 'var(--surface-2)',
    color: 'var(--text-primary)',
    border: '1px solid var(--color-border-visible)',
    fontWeight: 500
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: 'none',
    fontWeight: 500
  },
  danger: {
    background: 'var(--danger-soft)',
    color: 'var(--danger)',
    border: '1px solid var(--danger-soft)',
    fontWeight: 600
  }
};

// AUDIT-05: Consistent tap targets — sm min 36px, md min 44px, lg min 52px
const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: '6px 14px', fontSize: 'var(--fs-meta)', borderRadius: 'var(--radius-m)', minHeight: '36px', minWidth: '36px' },
  md: { padding: '10px 18px', fontSize: 'var(--fs-body)', borderRadius: 'var(--radius-m)', minHeight: '44px', minWidth: '44px' },
  lg: { padding: '14px 24px', fontSize: 'var(--fs-body)', borderRadius: 'var(--radius-l)', minHeight: '52px', minWidth: '52px' }
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
  title,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      aria-disabled={disabled}
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
        outline: 'none',
        ...style
      }}
      onMouseDown={(e) => {
        if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
        props.onMouseDown?.(e);
      }}
      onMouseUp={(e) => {
        if (!disabled) e.currentTarget.style.transform = 'scale(1)';
        props.onMouseUp?.(e);
      }}
      onMouseLeave={(e) => {
        if (!disabled) e.currentTarget.style.transform = 'scale(1)';
        props.onMouseLeave?.(e);
      }}
      onFocus={(e) => {
        if (!disabled) {
          e.currentTarget.style.boxShadow = `${variantStyles[variant].boxShadow ?? ''}, 0 0 0 3px var(--focus-ring)`.trim().replace(/^,\s*/, '');
        }
        props.onFocus?.(e);
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = (variantStyles[variant] as React.CSSProperties).boxShadow as string ?? '';
        props.onBlur?.(e);
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
