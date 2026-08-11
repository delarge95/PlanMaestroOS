import React, { useState } from 'react';
import { requestAiAction, type AiDraftResponse } from '../../lib/ai/requestAiAction';
import type { AiActionName } from '../../../worker/src/ai/actions';
import AiDraftReview from './AiDraftReview';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';
import { Sparkles } from 'lucide-react';

export interface AiActionProps {
  actionName?: AiActionName;
  prompt: string;
  sourcesUsed?: string[];
  actionLabel?: string;
  onApproved?: (resultText: string) => void;
}

export default function AiAction({
  actionName = 'propose-top3',
  prompt,
  sourcesUsed,
  actionLabel = 'Generar propuesta',
  onApproved
}: AiActionProps) {
  const [loading, setLoading] = useState(false);
  const [draft, setDraft] = useState<AiDraftResponse | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await requestAiAction(actionName, { prompt }, sourcesUsed);
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
