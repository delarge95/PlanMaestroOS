// src/components/fitness/nutrition/DayTypeGrid.tsx — Día tipo alineado al grid (franjas, sin recetas)
import React from 'react';
import { Clock } from 'lucide-react';
import type { DaySlot } from '../../../data/fitness/nutrition/types';

export interface DayTypeGridProps {
  slots: DaySlot[];
}

export function DayTypeGrid({ slots }: DayTypeGridProps) {
  return (
    <div className="ds-stack-sm">
      {slots.map((slot) => (
        <div
          key={slot.id}
          className="ds-card"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(72px, 90px) 1fr',
            gap: 'var(--space-3, 12px)',
            padding: 'var(--space-sm, 12px) var(--space-md, 16px)',
          }}
        >
          <div className="ds-stack-sm" style={{ gap: 2, alignItems: 'flex-start' }}>
            <span className="ds-row ds-caption" style={{ gap: 4, color: 'var(--text-tertiary)' }}>
              <Clock size={12} aria-hidden="true" />
              {slot.time}
            </span>
            <span className="ds-label" style={{ fontWeight: 650 }}>{slot.label}</span>
          </div>
          <div className="ds-stack-sm">
            <span className="ds-caption">{slot.focus}</span>
            <ul className="ds-stack-sm" style={{ margin: 0, paddingLeft: 'var(--space-4)' }}>
              {slot.lines.map((line, idx) => (
                <li key={`${slot.id}-${idx}`} className="ds-caption" style={{ lineHeight: 1.55 }}>
                  {line.text}
                  <details style={{ display: 'inline-block', marginLeft: 6 }}>
                    <summary
                      className="ds-micro"
                      style={{
                        cursor: 'pointer',
                        color: 'var(--accent)',
                        userSelect: 'none',
                        listStyle: 'none',
                        verticalAlign: 'middle',
                      }}
                    >
                      ¿por qué?
                    </summary>
                    <div style={{ padding: 'var(--space-2)', background: 'var(--surface-1)', borderRadius: 'var(--radius-s)', marginTop: 'var(--space-1)' }}>
                      {line.why.map((c) => (
                        <div key={c.ruleId} className="ds-micro" style={{ lineHeight: 1.5 }}>
                          {c.source} · {c.locator} · <code>{c.ruleId}</code>
                          {c.confidence !== 'explicit' ? ` · ${c.confidence}` : ''}
                        </div>
                      ))}
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DayTypeGrid;
