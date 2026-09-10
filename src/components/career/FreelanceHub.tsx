// src/components/career/FreelanceHub.tsx — Hub freelance B2B para agencias
// con clientes industriales (WebGL / Web 3D).
//
// Conecta: offerings (freelance.ts) ↔ evidencia del portafolio (cvBase) ↔
// cotizador (presupuesto por tier) ↔ research de empresas (agencias como
// targets del pipeline) ↔ brief de portafolio por aplicación.

import React, { useState } from 'react';
import {
  FREELANCE_OFFERINGS,
  AGENCY_SEGMENTS,
  offeringPitch,
  type FreelanceOffering,
} from '../../data/career/freelance';
import ServiceOfferSheet from './ServiceOfferSheet';
import Button from '../ui/Button';
import { Copy, CheckCircle2, ExternalLink, Search, Box, ChevronRight } from 'lucide-react';

export default function FreelanceHub() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyPitch = async (o: FreelanceOffering) => {
    try {
      await navigator.clipboard.writeText(offeringPitch(o));
      setCopiedId(o.id);
      setTimeout(() => setCopiedId(null), 2200);
    } catch {
      // Clipboard bloqueado: el pitch es corto, copiable a mano.
    }
  };

  return (
    <div className="ds-stack">
      {/* ——— Hoja de oferta imprimible (muestra de producto temporal) ——— */}
      <ServiceOfferSheet />

      <div>
        <span className="ds-eyebrow">Freelance B2B · Agencias industriales</span>
        <h3 style={{ fontSize: 'var(--fs-section)', fontWeight: 700, margin: '2px 0 4px' }}>
          Servicios WebGL / Web 3D para agencias con clientes industriales
        </h3>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
          Cada servicio ancla a evidencia real del portafolio y presupuesta por tier en el{' '}
          <a href="/cotizador" style={{ color: 'var(--color-accent-primary)' }}>cotizador</a>.
          Las agencias concretas se investigan como cualquier target (Empleo → Base de datos).
        </p>
      </div>

      {/* ——— Offerings ——— */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-3)' }}>
        {FREELANCE_OFFERINGS.map((o) => (
          <div key={o.id} className="ds-card" style={{ padding: 'var(--space-3)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div className="ds-row-between" style={{ alignItems: 'flex-start' }}>
              <strong style={{ fontSize: '0.9rem', display: 'flex', gap: '6px', alignItems: 'center' }}>
                <Box size={14} style={{ color: 'var(--color-accent-primary)', flexShrink: 0 }} />
                {o.name}
              </strong>
              <span className="ds-chip" style={{ fontSize: '0.66rem', border: '1px solid var(--color-border-subtle)', whiteSpace: 'nowrap' }}>
                tier {o.tierRange.from}–{o.tierRange.to}
              </span>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0 }}>{o.deliverable}</p>
            <p style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', margin: 0 }}>
              <strong>Para:</strong> {o.bestFor}
            </p>
            <div className="ds-row" style={{ gap: '6px', flexWrap: 'wrap' }}>
              {o.evidence.map((e) => (
                <a
                  key={e.label}
                  href={e.url}
                  target={e.url.startsWith('http') ? '_blank' : undefined}
                  rel={e.url.startsWith('http') ? 'noreferrer' : undefined}
                  className="ds-chip"
                  style={{ fontSize: '0.68rem', textDecoration: 'none', color: 'var(--color-accent-primary)', border: '1px solid var(--color-border-subtle)', display: 'inline-flex', gap: '4px', alignItems: 'center' }}
                >
                  <ExternalLink size={10} /> {e.label}
                </a>
              ))}
            </div>
            <div className="ds-row-between" style={{ marginTop: 'auto', paddingTop: '4px' }}>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)' }}>{o.keywords.slice(0, 3).join(' · ')}</span>
              <Button variant="ghost" size="sm" onClick={() => handleCopyPitch(o)}>
                {copiedId === o.id ? <CheckCircle2 size={13} /> : <Copy size={13} />} Pitch
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* ——— Segmentos de agencias + cómo buscarlas ——— */}
      <div className="ds-card" style={{ padding: 'var(--space-3)' }}>
        <div className="ds-row" style={{ gap: '6px', marginBottom: '8px' }}>
          <Search size={14} style={{ color: 'var(--text-tertiary)' }} />
          <strong style={{ fontSize: '0.84rem' }}>Dónde buscar agencias objetivo</strong>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-2)' }}>
          {AGENCY_SEGMENTS.map((s) => (
            <div key={s.id} style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '8px' }}>
              <strong style={{ fontSize: '0.8rem' }}>{s.name}</strong>
              <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', margin: '4px 0' }}>{s.description}</p>
              <ul style={{ margin: 0, paddingLeft: '14px' }}>
                {s.searchStrings.map((q) => (
                  <li key={q} style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                    <a
                      href={`https://www.google.com/search?q=${encodeURIComponent(q)}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--text-tertiary)', textDecoration: 'none' }}
                    >
                      «{q}» <ChevronRight size={9} style={{ display: 'inline' }} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', margin: '10px 0 0' }}>
          Al encontrar una agencia: agrégala como aplicación (rol: freelance/partner) y usa el panel de
          investigación — el checklist «Lista para aplicar» aplica igual.
        </p>
      </div>
    </div>
  );
}
