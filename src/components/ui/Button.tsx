import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
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

// AUDIT-05: Consistent tap targets — sm min 36px, md min 44px, lg min 52px
const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: '6px 14px', fontSize: 'var(--font-size-label)', borderRadius: '8px', minHeight: '36px', minWidth: '36px' },
  md: { padding: '10px 18px', fontSize: 'var(--font-size-body)', borderRadius: '12px', minHeight: '44px', minWidth: '44px' },
  lg: { padding: '14px 24px', fontSize: 'var(--font-size-body)', borderRadius: '14px', minHeight: '52px', minWidth: '52px' }
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
          e.currentTarget.style.boxShadow = `${variantStyles[variant].boxShadow ?? ''}, 0 0 0 3px rgba(10, 132, 255, 0.5)`.trim().replace(/^,\s*/, '');
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
