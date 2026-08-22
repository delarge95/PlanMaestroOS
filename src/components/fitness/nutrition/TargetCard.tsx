// src/components/fitness/nutrition/TargetCard.tsx — Target diario con su "¿por qué?" (regla + cita)
import React from 'react';
import { HelpCircle } from 'lucide-react';
import type { RuleCitation, TargetResult } from '../../../data/fitness/nutrition/types';
import StatusBadge from '../../ui/StatusBadge';

function CitationList({ citations }: { citations: RuleCitation[] }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      {citations.map((c) => (
        <li key={c.ruleId} style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          <strong style={{ color: 'var(--text-primary)' }}>{c.statement}</strong>
          <br />
          <span style={{ color: 'var(--text-tertiary)' }}>
            {c.source} · {c.locator} · regla <code>{c.ruleId}</code>
            {c.confidence !== 'explicit' ? ` · confianza: ${c.confidence}` : ''}
          </span>
        </li>
      ))}
    </ul>
  );
}

export interface TargetCardProps {
  target: TargetResult;
}

export function TargetCard({ target }: TargetCardProps) {
  const rangeText = target.min !== undefined && target.max !== undefined ? `${target.min}–${target.max}` : null;
  return (
    <div
      style={{
        background: 'var(--surface-elevated, var(--color-surface-raised))',
        border: '1px solid var(--color-border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-md, 16px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2, 8px)',
        minWidth: 0,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
        <span style={{ fontSize: 'var(--font-size-label)', fontWeight: 600, color: 'var(--text-secondary)' }}>{target.label}</span>
        <StatusBadge
          label={rangeText ? `${rangeText} ${target.unit}` : `${target.value} ${target.unit}`}
          variant="active"
          icon={<HelpCircle size={12} aria-hidden="true" />}
        />
      </div>
      <div style={{ fontSize: 'var(--font-size-display, 1.6rem)', fontWeight: 700, color: 'var(--text-primary)' }}>
        {target.value.toLocaleString('es')}
        <span style={{ fontSize: 'var(--font-size-label)', fontWeight: 500, color: 'var(--text-tertiary)', marginLeft: 6 }}>{target.unit}</span>
      </div>
      <p style={{ margin: 0, fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>{target.detail}</p>
      <details style={{ marginTop: 'auto' }}>
        <summary
          style={{
            cursor: 'pointer',
            fontSize: 'var(--font-size-meta)',
            color: 'var(--color-accent-primary, var(--accent))',
            userSelect: 'none',
            listStyle: 'none',
          }}
        >
          ¿Por qué este número?
        </summary>
        <div style={{ marginTop: 'var(--space-2)', padding: 'var(--space-2)', background: 'var(--surface, var(--color-surface-base))', borderRadius: 'var(--radius-sm)' }}>
          <CitationList citations={target.why} />
        </div>
      </details>
    </div>
  );
}

export default TargetCard;
