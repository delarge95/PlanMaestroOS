import React, { useState } from 'react';
import type { ClinicalProtocol } from '../../data/clinical/protocols';
import Button from '../ui/Button';
import { FileText, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export interface ProtocolCardProps {
  protocol: ClinicalProtocol;
}

export default function ProtocolCard({ protocol }: ProtocolCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--color-border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-md)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xs)'
    }}>
      {/* REGLA EN 1 LÍNEA */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
        <div>
          <strong style={{ fontSize: '0.92rem', color: 'var(--text)', display: 'block' }}>
            {protocol.title}
          </strong>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginTop: '2px' }}>
            {protocol.rule1Line}
          </span>
        </div>

        <a href={protocol.sourcePdfUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Button variant="secondary" size="sm">
            <ExternalLink size={14} /> Ver documento
          </Button>
        </a>
      </div>

      {/* DISCLOSURE DETALLES */}
      <div style={{ paddingTop: '4px' }}>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--color-accent-primary)',
            fontSize: '0.78rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: 0
          }}
        >
          <span>Detalles</span>
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {expanded && (
          <p style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', margin: '6px 0 0', lineHeight: 1.5 }}>
            {protocol.detailsParagraph}
          </p>
        )}
      </div>
    </div>
  );
}
