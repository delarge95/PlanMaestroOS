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
    <div className="ds-card ds-stack-sm">
      {/* REGLA EN 1 LÍNEA */}
      <div className="ds-row-between" style={{ alignItems: 'flex-start', gap: '12px' }}>
        <div>
          <strong className="ds-label" style={{ display: 'block' }}>
            {protocol.title}
          </strong>
          <span className="ds-caption" style={{ display: 'block', marginTop: '2px' }}>
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
          className="ds-row ds-caption"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--accent)',
            fontWeight: 600,
            cursor: 'pointer',
            gap: '4px',
            padding: 0
          }}
        >
          <span>Detalles</span>
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {expanded && (
          <p className="ds-caption" style={{ margin: '6px 0 0', lineHeight: 1.5 }}>
            {protocol.detailsParagraph}
          </p>
        )}
      </div>
    </div>
  );
}
