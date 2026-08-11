import React, { useState } from 'react';
import { callAiService, type AiResponse } from '../../lib/ai/client';
import AiDraftReview from './AiDraftReview';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';
import { Sparkles } from 'lucide-react';

export interface AiActionProps {
  prompt: string;
  sourcesUsed?: string[];
  actionLabel?: string;
  onApproved?: (resultText: string) => void;
}

export default function AiAction({
  prompt,
  sourcesUsed,
  actionLabel = 'Generar propuesta',
  onApproved
}: AiActionProps) {
  const [loading, setLoading] = useState(false);
  const [draft, setDraft] = useState<AiResponse | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await callAiService({ prompt, sourcesUsed });
      setDraft(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = (finalText: string) => {
    if (onApproved) onApproved(finalText);
    setDraft(null);
  };

  const handleDiscard = () => {
    setDraft(null);
  };

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
        {!draft && (
          <Button variant="secondary" size="sm" onClick={handleGenerate} disabled={loading}>
            <Sparkles size={14} style={{ color: 'var(--color-accent-warning)' }} />
            <span>{loading ? 'Generando…' : actionLabel}</span>
          </Button>
        )}

        {draft && (
          <AiDraftReview draft={draft} onApprove={handleApprove} onDiscard={handleDiscard} />
        )}
      </div>
    </ErrorBoundary>
  );
}
