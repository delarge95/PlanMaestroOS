// src/components/career/ServiceOfferSheet.tsx — Hoja de oferta de servicios
// (one-pager B2B imprimible a PDF). Igual que el CV: preview fiel + print CSS
// + notas editoriales del doc-17 NUNCA impresas.
//
// Usos: muestra de producto temporal; el CTA lleva al cotizador interactivo
// y a la demo TwinSight X500.

import React, { useMemo, useState } from 'react';
import { buildServiceSheet, SERVICE_LINKS } from '../../data/career/serviceSheet';
import { FREELANCE_OFFERINGS } from '../../data/career/freelance';
import { stripEditorialNotes, countEditorialNotes } from '../../lib/career/cvRender';
import Button from '../ui/Button';
import { Printer, Copy, CheckCircle2, AlertCircle, MousePointerClick } from 'lucide-react';

export default function ServiceOfferSheet() {
  const [highlight, setHighlight] = useState<string>(FREELANCE_OFFERINGS[0].id);
  const [copied, setCopied] = useState(false);

  const sheet = useMemo(() => buildServiceSheet(highlight), [highlight]);
  const pendingNotes = useMemo(
    () => sheet.evidenceBullets.reduce((n, b) => n + countEditorialNotes(b), 0),
    [sheet],
  );

  const handlePrint = () => window.print();

  const handleCopy = async () => {
    const md = [
      `# ${sheet.fullName} — ${sheet.title}`,
      `${sheet.location}`,
      '',
      sheet.tagline,
      '',
      '## Servicios',
      ...sheet.offerings.map((o) => `- **${o.name}** (tier ${o.tier}): ${o.deliverable}`),
      '',
      `## ${sheet.evidenceTitle}`,
      ...sheet.evidenceBullets.map((b) => `- ${stripEditorialNotes(b)}`),
      '',
      '## Presupuesto interactivo',
      `Cotiza tu proyecto en 2 minutos: ${sheet.cta.cotizador}`,
      `Demo en vivo (TwinSight X500): ${sheet.cta.twinsight}`,
      '',
      ...sheet.links.map((l) => `${l.label}: ${l.url}`),
    ].join('\n');
    try {
      await navigator.clipboard.writeText(md);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch { /* clipboard bloqueado */ }
  };

  return (
    <div className="ds-stack">
      <div className="cv-no-print ds-stack-sm">
        <div className="ds-row-between" style={{ flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          <div>
            <span className="ds-eyebrow">Hoja de oferta (PDF)</span>
            <h3 style={{ fontSize: 'var(--fs-section)', fontWeight: 700, margin: 0 }}>
              One-pager de servicios — muestra de producto
            </h3>
          </div>
          <div className="ds-row" style={{ gap: 'var(--space-1)' }}>
            <Button variant="secondary" size="sm" onClick={handleCopy}>
              {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />} {copied ? 'Copiado' : 'Copiar Markdown'}
            </Button>
            <Button variant="primary" size="sm" onClick={handlePrint}>
              <Printer size={14} /> Imprimir / PDF
            </Button>
          </div>
        </div>

        <div className="ds-row" style={{ gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 'var(--fs-eyebrow)', color: 'var(--text-secondary)' }}>Servicio destacado:</span>
          {FREELANCE_OFFERINGS.map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => setHighlight(o.id)}
              className="ds-chip"
              style={{
                cursor: 'pointer',
                fontSize: 'var(--fs-eyebrow)',
                border: o.id === highlight ? '1px solid var(--accent)' : '1px solid var(--color-border-subtle)',
                background: o.id === highlight ? 'var(--accent)' : 'transparent',
                color: o.id === highlight ? '#000000' : 'var(--text-secondary)',
              }}
            >
              {o.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* ——— HOJA (única zona visible al imprimir) ——— */}
      <article
        className="sheet-print-root"
        style={{
          background: '#ffffff',
          color: '#111111',
          borderRadius: 'var(--radius-m)',
          padding: 'clamp(20px, 4vw, 40px)',
          maxWidth: '820px',
          margin: '0 auto',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          lineHeight: 1.4,
        }}
      >
        <header style={{ borderBottom: '3px solid #0a5ab8', paddingBottom: '10px', marginBottom: '14px' }}>
          <h2 style={{ margin: 0, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>{sheet.fullName}</h2>
          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0a5ab8', marginTop: '2px' }}>{sheet.title}</div>
          <div style={{ fontSize: '0.74rem', color: '#555', marginTop: '4px' }}>
            {sheet.location} · {sheet.links.map((l) => l.label).join(' · ')}
          </div>
        </header>

        <p style={{ fontSize: '0.86rem', margin: '0 0 14px' }}>
          <strong>{sheet.tagline}</strong>
        </p>

        {/* Servicios */}
        <section style={{ marginBottom: '14px' }}>
          <h3 style={h3Style}>Servicios</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
            <tbody>
              {sheet.offerings.map((o, i) => (
                <tr key={o.name} style={{ borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '6px 8px 6px 0', fontWeight: i === 0 ? 800 : 600, whiteSpace: 'nowrap' }}>
                    {i === 0 ? '★ ' : ''}{o.name}
                  </td>
                  <td style={{ padding: '6px 0', color: '#333' }}>{o.deliverable}</td>
                  <td style={{ padding: '6px 0 6px 8px', color: '#0a5ab8', fontWeight: 700, whiteSpace: 'nowrap', textAlign: 'right' }}>
                    tier {o.tier}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Evidencia */}
        <section style={{ marginBottom: '14px' }}>
          <h3 style={h3Style}>{sheet.evidenceTitle}</h3>
          <ul style={{ margin: 0, paddingLeft: '16px' }}>
            {sheet.evidenceBullets.map((b, i) => (
              <li key={i} style={{ fontSize: '0.8rem', marginBottom: '3px' }}>{stripEditorialNotes(b)}</li>
            ))}
          </ul>
          <div style={{ fontSize: '0.76rem', marginTop: '6px' }}>
            <a href={sheet.cta.twinsight} style={{ color: '#0a5ab8', fontWeight: 700 }}>
              ▶ Ver demo en vivo (browser): {sheet.cta.twinsight}
            </a>
          </div>
        </section>

        {/* CTA cotizador */}
        <section
          style={{
            border: '2px solid #0a5ab8',
            borderRadius: '8px',
            padding: '12px 14px',
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <MousePointerClick size={22} style={{ color: '#0a5ab8', flexShrink: 0 }} />
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.86rem' }}>Presupuesto interactivo — sin compromiso</div>
            <div style={{ fontSize: '0.78rem', color: '#333' }}>
              Configura tu proyecto (nivel de detalle, superficies, plazos) y obtén una estimación
              de tier y alcance en ~2 minutos:
            </div>
            <a href={sheet.cta.cotizador} style={{ color: '#0a5ab8', fontWeight: 700, fontSize: '0.8rem' }}>
              {sheet.cta.cotizador}
            </a>
          </div>
        </section>

        <footer style={{ marginTop: '14px', fontSize: '0.68rem', color: '#777', borderTop: '1px solid #ddd', paddingTop: '8px' }}>
          {sheet.links.map((l) => `${l.label}: ${l.url}`).join('  ·  ')}
        </footer>
      </article>

      {pendingNotes > 0 && (
        <div className="cv-no-print ds-row" style={{ gap: '6px', color: 'var(--text-tertiary)', fontSize: 'var(--fs-eyebrow)' }}>
          <AlertCircle size={13} style={{ flexShrink: 0 }} />
          <span>
            {pendingNotes} dato(s) con nota «[verify…]» (triángulos finales): la hoja sale limpia — confirma la cifra real antes de imprimir.
          </span>
        </div>
      )}
    </div>
  );
}

const h3Style: React.CSSProperties = {
  margin: '0 0 6px',
  fontSize: 'var(--fs-meta)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  borderBottom: '1px solid #ddd',
  paddingBottom: '3px',
  color: '#0a5ab8',
};
