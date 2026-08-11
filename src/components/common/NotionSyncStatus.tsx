// src/components/common/NotionSyncStatus.tsx
import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { WifiOff, RefreshCw, CheckCircle2, Clock } from 'lucide-react';

export interface NotionSyncStatusProps {
  status?: 'offline_local' | 'synced' | 'syncing' | 'pending';
  lastHoursAgo?: number;
}

export default function NotionSyncStatus({ status = 'offline_local', lastHoursAgo = 1 }: NotionSyncStatusProps) {
  const getLabel = () => {
    switch (status) {
      case 'offline_local':
        return `Sin conexión a Notion — mostrando datos locales. Actualizado hace ${lastHoursAgo}h`;
      case 'syncing':
        return 'Sincronizando con Notion...';
      case 'pending':
        return 'Cambio local guardado, pendiente de sincronizar con Notion';
      case 'synced':
        return `Sincronizado con Notion. Actualizado hace ${lastHoursAgo}h`;
      default:
        return 'Estado de sincronización Notion';
    }
  };

  const label = getLabel();

  return (
    <ErrorBoundary>
      <button
        type="button"
        aria-label={label}
        title={label}
        style={{
          background: 'transparent',
          border: 'none',
          color: status === 'offline_local' ? 'var(--warning, #ff9f0a)' : 'var(--text-secondary, #98989d)',
          padding: '4px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          cursor: 'pointer',
          transition: 'opacity 150ms ease'
        }}
      >
        {status === 'offline_local' && <WifiOff size={18} />}
        {status === 'syncing' && <RefreshCw size={18} style={{ animation: 'spin 1s linear infinite' }} />}
        {status === 'pending' && <Clock size={18} />}
        {status === 'synced' && <CheckCircle2 size={18} style={{ color: 'var(--success, #30d158)' }} />}
      </button>
    </ErrorBoundary>
  );
}
