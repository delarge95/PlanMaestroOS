import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { WifiOff, RefreshCw, CheckCircle2, Clock } from 'lucide-react';

export interface NotionSyncStatusProps {
  status: 'offline_local' | 'synced' | 'syncing' | 'pending';
  lastHoursAgo?: number;
}

export default function NotionSyncStatus({ status = 'offline_local', lastHoursAgo = 2 }: NotionSyncStatusProps) {
  return (
    <ErrorBoundary>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '0.72rem',
        padding: '3px 8px',
        borderRadius: '12px',
        background: status === 'offline_local' ? 'rgba(255,149,0,0.1)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${status === 'offline_local' ? 'rgba(255,149,0,0.3)' : 'var(--color-border-subtle)'}`,
        color: status === 'offline_local' ? 'var(--color-accent-warning)' : 'var(--text-tertiary)'
      }}>
        {status === 'offline_local' && (
          <>
            <WifiOff size={12} />
            <span>Sin conexión a Notion — mostrando datos locales · Actualizado hace {lastHoursAgo}h</span>
          </>
        )}

        {status === 'syncing' && (
          <>
            <RefreshCw size={12} className="spin" />
            <span>Sincronizando…</span>
          </>
        )}

        {status === 'pending' && (
          <>
            <Clock size={12} />
            <span>Cambio guardado, pendiente de sincronizar</span>
          </>
        )}

        {status === 'synced' && (
          <>
            <CheckCircle2 size={12} style={{ color: 'var(--color-state-done)' }} />
            <span>Sincronizado con Notion</span>
          </>
        )}
      </div>
    </ErrorBoundary>
  );
}
