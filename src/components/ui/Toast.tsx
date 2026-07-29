import React, { useEffect } from 'react';

export interface ToastProps {
  message: string | null;
  onClose?: () => void;
  durationMs?: number;
  tone?: 'info' | 'success' | 'warning';
}

const toneStyles = {
  info: { background: 'var(--surface-elevated)', color: 'var(--text)', border: '1px solid var(--color-border-visible)' },
  success: { background: 'var(--color-state-done-soft)', color: 'var(--color-state-done)', border: '1px solid var(--color-state-done-glow)' },
  warning: { background: 'var(--color-accent-warning-soft)', color: 'var(--color-accent-warning)', border: '1px solid var(--color-accent-warning-glow)' }
};

export function Toast({
  message,
  onClose,
  durationMs = 2500,
  tone = 'info'
}: ToastProps) {
  useEffect(() => {
    if (!message || !onClose) return;

    const timer = setTimeout(() => {
      onClose();
    }, durationMs);

    return () => clearTimeout(timer);
  }, [message, durationMs, onClose]);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: 'var(--space-lg)',
        right: 'var(--space-lg)',
        zIndex: 300,
        padding: 'var(--space-3) var(--space-4)',
        borderRadius: 'var(--radius-md)',
        fontSize: 'var(--font-size-label)',
        fontWeight: 600,
        boxShadow: 'var(--shadow-float)',
        animation: 'fadeIn 180ms ease-out',
        pointerEvents: 'none',
        ...toneStyles[tone]
      }}
    >
      {message}
    </div>
  );
}

export default Toast;
