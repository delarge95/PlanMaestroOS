// src/components/common/NotionSyncStatus.tsx — Estado REAL de la conexión Notion.
//
// La app es static: el único runtime servidor es el Worker IA (Cloudflare).
// Este componente consulta GET {PUBLIC_WORKER_URL}/notion/status (sin secretos)
// y muestra el estado honesto:
// - worker sin desplegar → modo local (Pendiente U3), NO un falso «sin conexión»
// - worker arriba + Notion alcanzable → sincronizado
// - worker arriba + Notion caído → reintento al clic
import React, { useCallback, useEffect, useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { WifiOff, RefreshCw, CheckCircle2, Clock } from 'lucide-react';

type Status = 'offline_local' | 'synced' | 'syncing' | 'pending' | 'no_worker';

interface NotionStatusResponse {
  configured: boolean;
  reachable: boolean;
  dbs: { tasks: boolean; career: boolean; sessions: boolean; measurements: boolean };
  checkedAtIso: string;
}

const WORKER_URL = (import.meta as unknown as { env?: Record<string, string> }).env?.PUBLIC_WORKER_URL;

const LABELS: Record<Status, string> = {
  synced: 'Sincronizado con Notion',
  syncing: 'Sincronizando con Notion…',
  pending: 'Cambio local guardado — pendiente de sincronizar con Notion',
  offline_local: 'Notion no alcanzable — datos locales intactos (reintenta al clic)',
  no_worker: 'Modo local — Worker IA sin desplegar (Pendiente U3: ver docs/orquestacion/PENDIENTES.md)',
};

export default function NotionSyncStatus() {
  const [status, setStatus] = useState<Status>(WORKER_URL ? 'syncing' : 'no_worker');
  const [detail, setDetail] = useState<string>(LABELS[WORKER_URL ? 'syncing' : 'no_worker']);

  const check = useCallback(async () => {
    if (!WORKER_URL) return; // sin worker desplegado el estado ya es honesto
    setStatus('syncing');
    try {
      const res = await fetch(`${WORKER_URL.replace(/\/$/, '')}/notion/status`, {
        signal: AbortSignal.timeout(8000),
      });
      const data = (await res.json()) as NotionStatusResponse;
      const ok = res.ok && data.configured && data.reachable;
      setStatus(ok ? 'synced' : 'offline_local');
      const dbsOn = Object.values(data.dbs ?? {}).filter(Boolean).length;
      setDetail(ok ? `Sincronizado con Notion (${dbsOn}/4 bases) — ${data.checkedAtIso.slice(11, 16)} UTC` : LABELS.offline_local);
    } catch {
      setStatus('offline_local');
      setDetail(LABELS.offline_local);
    }
  }, []);

  useEffect(() => {
    void check();
  }, [check]);

  const color =
    status === 'synced' ? 'var(--success, #30d158)'
    : status === 'no_worker' ? 'var(--text-tertiary, #98989d)'
    : 'var(--warning, #ff9f0a)';

  return (
    <ErrorBoundary>
      <button
        type="button"
        aria-label={detail}
        title={detail}
        onClick={() => void check()}
        style={{
          background: 'transparent',
          border: 'none',
          color,
          padding: '4px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          cursor: 'pointer',
          transition: 'opacity 150ms ease',
        }}
      >
        {(status === 'offline_local') && <WifiOff size={18} />}
        {status === 'syncing' && <RefreshCw size={18} style={{ animation: 'spin 1s linear infinite' }} />}
        {status === 'pending' && <Clock size={18} />}
        {status === 'synced' && <CheckCircle2 size={18} style={{ color: 'var(--success, #30d158)' }} />}
        {status === 'no_worker' && <WifiOff size={18} />}
      </button>
    </ErrorBoundary>
  );
}
