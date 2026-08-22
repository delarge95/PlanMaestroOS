// src/components/fitness/nutrition/DayTypeGrid.tsx — Día tipo alineado al grid (franjas, sin recetas)
import React from 'react';
import { Clock } from 'lucide-react';
import type { DaySlot } from '../../../data/fitness/nutrition/types';

export interface DayTypeGridProps {
  slots: DaySlot[];
}

export function DayTypeGrid({ slots }: DayTypeGridProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2, 8px)' }}>
      {slots.map((slot) => (
        <div
          key={slot.id}
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(72px, 90px) 1fr',
            gap: 'var(--space-3, 12px)',
            background: 'var(--surface-elevated, var(--color-surface-raised))',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-sm, 12px) var(--space-md, 16px)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'flex-start' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)' }}>
              <Clock size={12} aria-hidden="true" />
              {slot.time}
            </span>
            <span style={{ fontSize: 'var(--font-size-label)', fontWeight: 650, color: 'var(--text-primary)' }}>{slot.label}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)' }}>{slot.focus}</span>
            <ul style={{ margin: 0, paddingLeft: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {slot.lines.map((line, idx) => (
                <li key={`${slot.id}-${idx}`} style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {line.text}
                  <details style={{ display: 'inline-block', marginLeft: 6 }}>
                    <summary
                      style={{
                        cursor: 'pointer',
                        fontSize: 'var(--font-size-micro, 0.7rem)',
                        color: 'var(--color-accent-primary, var(--accent))',
                        userSelect: 'none',
                        listStyle: 'none',
                        verticalAlign: 'middle',
                      }}
                    >
                      ¿por qué?
                    </summary>
                    <div style={{ padding: 'var(--space-2)', background: 'var(--surface, var(--color-surface-base))', borderRadius: 'var(--radius-sm)', marginTop: 'var(--space-1)' }}>
                      {line.why.map((c) => (
                        <div key={c.ruleId} style={{ fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>
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
