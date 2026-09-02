// src/components/fitness/nutrition/TargetCard.tsx — Target diario con su "¿por qué?" (regla + cita)
import React from 'react';
import { HelpCircle } from 'lucide-react';
import type { RuleCitation, TargetResult } from '../../../data/fitness/nutrition/types';
import StatusBadge from '../../ui/StatusBadge';

function CitationList({ citations }: { citations: RuleCitation[] }) {
  return (
    <ul className="ds-stack-sm" style={{ margin: 0, paddingLeft: 'var(--space-4)' }}>
      {citations.map((c) => (
        <li key={c.ruleId} className="ds-caption" style={{ lineHeight: 1.5 }}>
          <strong style={{ color: 'var(--text-primary)' }}>{c.statement}</strong>
          <br />
          <span className="ds-micro">
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
    <div className="ds-card ds-stack-sm" style={{ minWidth: 0 }}>
      <div className="ds-row-between" style={{ flexWrap: 'wrap' }}>
        <span className="ds-label">{target.label}</span>
        <StatusBadge
          label={rangeText ? `${rangeText} ${target.unit}` : `${target.value} ${target.unit}`}
          variant="active"
          icon={<HelpCircle size={12} aria-hidden="true" />}
        />
      </div>
      <div className="ds-h2">
        {target.value.toLocaleString('es')}
        <span className="ds-label" style={{ fontWeight: 500, color: 'var(--text-tertiary)', marginLeft: 6 }}>{target.unit}</span>
      </div>
      <p className="ds-caption" style={{ margin: 0 }}>{target.detail}</p>
      <details style={{ marginTop: 'auto' }}>
        <summary
          className="ds-caption"
          style={{
            cursor: 'pointer',
            color: 'var(--accent)',
            userSelect: 'none',
            listStyle: 'none',
          }}
        >
          ¿Por qué este número?
        </summary>
        <div style={{ marginTop: 'var(--space-2)', padding: 'var(--space-2)', background: 'var(--surface-1)', borderRadius: 'var(--radius-s)' }}>
          <CitationList citations={target.why} />
        </div>
      </details>
    </div>
  );
}

export default TargetCard;
