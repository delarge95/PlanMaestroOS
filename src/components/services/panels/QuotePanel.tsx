import { useState } from 'react';
import { getServiceById } from '../../../data/services';
import type { QuoteResult } from '../../../data/services';
import { formatMoney } from '../../../lib/services/ui';

interface Props {
  result: QuoteResult;
  currency: 'USD' | 'COP';
}

function nombreHumano(refId: string): string {
  const base = refId.split('#')[0];
  return getServiceById(base)?.nameEs ?? base;
}

export function QuotePanel({ result, currency }: Props) {
  const [open, setOpen] = useState(false);

  const grupos = new Map<string, typeof result.lines>();
  for (const l of result.lines) {
    const key = l.refId.split('#')[0];
    const arr = grupos.get(key) ?? [];
    arr.push(l);
    grupos.set(key, arr);
  }

  return (
    <div>
      <p style={{ fontSize: 14, opacity: 0.75 }}>
        {result.hoursMin}–{result.hoursMax} horas · subtotal{' '}
        {formatMoney(currency, result.subtotalMin)}–{formatMoney(currency, result.subtotalMax)}
      </p>
      {result.discountPctApplied !== 0 && (
        <p style={{ color: 'var(--accent,#0a84ff)', fontWeight: 600 }}>
          Modificadores: {result.discountPctApplied > 0 ? '+' : ''}
          {result.discountPctApplied} %
        </p>
      )}
      <p style={{ fontSize: 34, fontWeight: 700, marginBlock: 10 }}>
        {formatMoney(currency, result.totalMin)} – {formatMoney(currency, result.totalMax)}
      </p>
      <button
        style={{ background: 'none', border: 'none', padding: 0, textDecoration: 'underline', cursor: 'pointer', font: 'inherit' }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        ¿Cómo se calcula?
      </button>
      {open && (
        <div style={{ fontSize: 13, marginTop: 8 }}>
          {[...grupos.entries()].map(([key, lines]) => (
            <details key={key} style={{ marginBlock: 6 }}>
              <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{nombreHumano(key)}</summary>
              <ul style={{ paddingLeft: 18, marginBlock: 4 }}>
                {lines.map((l, i) => (
                  <li key={i}>
                    {l.labelEs}: {l.hoursMin}–{l.hoursMax} h →{' '}
                    {formatMoney(currency, l.costMin)}–{formatMoney(currency, l.costMax)}
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <p style={{ opacity: 0.7, marginTop: 8 }}>{result.notesEs.join(' ')}</p>
        </div>
      )}
      <p style={{ fontWeight: 600, marginTop: 10 }}>
        Rango orientativo, no cotización. La cifra firme se cierra en un SOW.
      </p>
    </div>
  );
}
