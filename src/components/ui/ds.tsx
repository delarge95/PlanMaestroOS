/**
 * ds.tsx — Componentes primitivos del Design System.
 * REGLA: estos componentes son la ÚNICA forma permitida de crear
 * cards, chips, stat boxes y empty states. Prohibido inline styles
 * para color, spacing, radius, font-size o sombra.
 *
 * Todos consumen las clases .ds-* de designSystem.css (tokens.css).
 */

import React from 'react';

// ─── Card ───
export function Card({ children, className, clickable, selected, onClick, style }: {
  children: React.ReactNode;
  className?: string;
  clickable?: boolean;
  selected?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  const cls = [
    'ds-card',
    clickable ? 'ds-card-clickable' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <div className={cls} data-selected={selected} onClick={onClick} style={style}
      role={clickable ? 'button' : undefined} tabIndex={clickable ? 0 : undefined}
      onKeyDown={clickable ? (e) => e.key === 'Enter' && onClick?.() : undefined}
    >
      {children}
    </div>
  );
}

// ─── Chip (filtro/tag) ───
export function Chip({ label, active, onClick }: {
  label: string; active?: boolean; onClick?: () => void;
}) {
  return (
    <button className="ds-chip" data-active={active} onClick={onClick}>{label}</button>
  );
}

// ─── StatBox ───
export function StatBox({ label, value, highlight }: {
  label: string; value: string; highlight?: boolean;
}) {
  return (
    <div className="ds-stat" data-highlight={highlight}>
      <span className="ds-stat-label">{label}</span>
      <span className="ds-stat-value">{value}</span>
    </div>
  );
}

// ─── EmptyState ───
export function EmptyState({ icon, message }: { icon?: string; message: string }) {
  return (
    <div className="ds-empty">
      {icon && <span style={{ fontSize: 28 }}>{icon}</span>}
      <span>{message}</span>
    </div>
  );
}

// ─── SectionLabel (eyebrow) ───
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="ds-eyebrow">{children}</span>;
}

// ─── Toggle (iOS switch) ───
export function Toggle({ active, onChange, label }: {
  active: boolean; onChange: (v: boolean) => void; label?: string;
}) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
      <button
        type="button"
        className="ds-toggle"
        data-active={active}
        onClick={() => onChange(!active)}
        aria-pressed={active}
      >
        <span className="ds-toggle-knob" />
      </button>
      {label && <span style={{ fontSize: 'var(--fs-body)', color: 'var(--text-primary)' }}>{label}</span>}
    </label>
  );
}

// ─── PageTitle (hero de página) ───
export function PageTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: 'var(--space-5)' }}>
      <h1 className="ds-h2">{title}</h1>
      {subtitle && <p className="ds-caption" style={{ marginTop: 4 }}>{subtitle}</p>}
    </div>
  );
}
