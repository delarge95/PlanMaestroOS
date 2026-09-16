// src/components/fitness/WearableStatusChip.tsx
// Indicador de estado del wearable WHOOP (Fitness → Hoy, junto al prehab).
//
// PRINCIPIO (ENCARGO-WEARABLE): el wearable es un ACCESORIO — este chip SOLO
// informa del estado de sincronización; NO es un panel de gestión. Sin banda
// se muestra en gris "Sin banda · self-report activo" y la app funciona
// idéntica (userStateFeed cae al clinicalStore).
//
// Import manual: botón "Importar datos JSON" → file input → JSON.parse →
// wearableStore.ingestDaily() → toast "Sincronizado" (sin alert/confirm).
// SSR-safe: el store se lee SOLO post-mount (useEffect + mounted flag).

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Watch, Upload } from 'lucide-react';
import Toast from '../ui/Toast';
import {
  useWearableStore,
  getLatestEntry,
  getEntryForDate,
  isFreshData,
  localTodayIso,
  parseWearableExport,
} from '../../lib/wearable/wearableStore';
import type { WearableDailyEntry } from '../../lib/wearable/wearableStore';

export default function WearableStatusChip() {
  // SSR-safe: nada de localStorage/store hasta estar montado en navegador
  const [mounted, setMounted] = useState(false);
  const [toast, setToast] = useState<{ message: string; tone: 'success' | 'warning' } | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Suscripción al slice `daily` del store (solo re-renderiza al cambiar)
  const daily = useWearableStore((s) => s.daily);
  const ingestMany = useWearableStore((s) => s.ingestMany);

  useEffect(() => setMounted(true), []);

  const handleFile = useCallback(
    async (file: File) => {
      try {
        const text = await file.text();
        const parsed: unknown = JSON.parse(text);
        const entries = parseWearableExport(parsed);
        if (!entries.length) {
          setToast({ message: 'Export sin entradas válidas (se espera formato OpenStrap/edge)', tone: 'warning' });
          return;
        }
        const result = ingestMany(entries);
        if (result.ingested > 0) {
          setToast({
            message:
              result.skipped > 0
                ? `Sincronizado (${result.ingested} días, ${result.skipped} descartados)`
                : 'Sincronizado',
            tone: 'success',
          });
        } else {
          setToast({ message: result.error ?? 'Ninguna entrada válida en el archivo', tone: 'warning' });
        }
      } catch {
        setToast({ message: 'No se pudo leer el JSON del export', tone: 'warning' });
      }
    },
    [ingestMany],
  );

  // Post-mount: resuelve el estado del indicador (hoy → ayer → sin banda)
  let latest: WearableDailyEntry | undefined;
  let todayEntry: WearableDailyEntry | undefined;
  let fresh = false;
  if (mounted) {
    latest = getLatestEntry(daily);
    todayEntry = getEntryForDate(daily, localTodayIso());
    fresh = isFreshData(daily);
  }
  const synced = fresh && (todayEntry ?? latest) !== undefined;
  const entry = todayEntry ?? latest;

  // Pre-mount (SSR): estado neutro — mismo tamaño, sin datos leídos
  const label = !mounted
    ? 'WHOOP'
    : synced
      ? `WHOOP sincronizado${entry?.hrvRmssdMs !== undefined ? ` · HRV ${Math.round(entry.hrvRmssdMs)}ms` : ''}${
          entry?.sleepHours !== undefined ? ` · Sueño ${entry.sleepHours.toFixed(1)}h` : ''
        }`
      : 'Sin banda · self-report activo';

  return (
    <div
      className="ds-row-between"
      style={{
        gap: 'var(--space-2)',
        padding: '6px 12px',
        borderRadius: 'var(--radius-m)',
        background: 'var(--surface-1, rgba(255,255,255,0.03))',
        border: `1px solid ${synced ? 'var(--success, #22c55e)' : 'var(--color-border-subtle, rgba(255,255,255,0.12))'}`,
        fontSize: 'var(--fs-meta, 0.8125rem)',
        color: 'var(--text-secondary)',
        flexWrap: 'wrap',
      }}
      role="status"
      aria-label={`Estado wearable: ${mounted ? (synced ? 'sincronizado' : 'sin banda') : 'cargando'}`}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, minWidth: 0 }}>
        <Watch size={14} style={{ color: synced ? 'var(--success, #22c55e)' : 'var(--text-tertiary)' }} aria-hidden />
        <span className="ds-label-sm" style={{ color: synced ? 'var(--success, #22c55e)' : 'var(--text-tertiary)' }}>
          {label}
        </span>
      </span>

      {/* Import manual de un export OpenStrap/edge (única acción del chip) */}
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          background: 'transparent',
          border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
          color: 'var(--text-secondary)',
          borderRadius: 6,
          padding: '3px 8px',
          fontSize: '0.72rem',
          cursor: 'pointer',
          font: 'inherit',
        }}
        title="Importar un export JSON de OpenStrap/edge (wearable-daily)"
      >
        <Upload size={12} aria-hidden />
        Importar datos JSON
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="application/json,.json"
        style={{ display: 'none' }}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void handleFile(file);
          e.target.value = ''; // permite reimportar el mismo archivo
        }}
      />

      <Toast
        message={toast?.message ?? null}
        tone={toast?.tone}
        onClose={() => setToast(null)}
      />
    </div>
  );
}
