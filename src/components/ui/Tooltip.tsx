import React, { useState, useRef } from 'react';

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  delayMs?: number;
}

export function Tooltip({
  content,
  children,
  delayMs = 500
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delayMs);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsVisible(false);
  };

  return (
    <div
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: 'var(--space-1)',
            padding: 'var(--space-1) var(--space-2)',
            background: 'rgba(0, 0, 0, 0.9)',
            border: '1px solid var(--color-border-visible)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text)',
            fontSize: 'var(--font-size-meta)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 250,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
            animation: 'fadeIn 120ms ease-out'
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
