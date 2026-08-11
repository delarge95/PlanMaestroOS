import React, { useState } from 'react';
import type { AiDraftResponse } from '../../lib/ai/requestAiAction';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';
import { CheckCircle2, Edit3, Trash2, Database, AlertCircle } from 'lucide-react';

export interface AiDraftReviewProps {
  draft: AiDraftResponse;
  onApprove: (finalText: string) => void;
  onDiscard: () => void;
}

export default function AiDraftReview({ draft, onApprove, onDiscard }: AiDraftReviewProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(draft.content);

  return (
    <ErrorBoundary>
      <div style={{
        background: 'rgba(10,132,255,0.03)',
        border: '1px solid var(--color-accent-primary)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-md)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-xs)'
      }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '4px' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
            Borrador generado por IA
          </span>
          <span style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)' }}>
            {draft.betaNotice || 'Beta — respuestas sin verificación de fuentes'}
          </span>
        </div>

        {isEditing ? (
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            rows={4}
            style={{
              background: 'rgba(0,0,0,0.4)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: '6px',
              padding: '8px 12px',
              color: 'var(--text)',
              fontSize: '0.85rem',
              width: '100%',
              fontFamily: 'inherit'
            }}
          />
        ) : (
          <div style={{ fontSize: '0.85rem', color: 'var(--text)', whiteSpace: 'pre-wrap', lineHeight: 1.4 }}>
            {editedText}
          </div>
        )}

        {/* FUENTES Y DATOS USADOS */}
        {draft.sourcesUsed && draft.sourcesUsed.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: 'var(--text-tertiary)', paddingTop: '4px' }}>
            <Database size={12} />
            <span>Datos usados: {draft.sourcesUsed.join(', ')}</span>
          </div>
        )}

        {/* ACCIONES HUMANAS PRESCRIPTIVAS */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px', paddingTop: '6px' }}>
          <Button variant="ghost" size="sm" onClick={onDiscard}>
            <Trash2 size={14} /> Descartar
          </Button>

          <Button variant="secondary" size="sm" onClick={() => setIsEditing(!isEditing)}>
            <Edit3 size={14} /> Editar
          </Button>

          <Button variant="primary" size="sm" onClick={() => onApprove(editedText)}>
            <CheckCircle2 size={14} /> Aprobar
          </Button>
        </div>

      </div>
    </ErrorBoundary>
  );
}
