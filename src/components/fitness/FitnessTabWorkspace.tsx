/**
 * FitnessTabWorkspace.tsx — Página "Hoy" de fitness.
 * La navegación la maneja SectionNav; esta página solo renderiza el contenido
 * del día: calendario, progresión activa, rutina del día.
 */

import React, { useState } from 'react';
import { ShieldAlert } from 'lucide-react';
import ErrorBoundary from '../ErrorBoundary';
import TodayRoutineStack from './TodayRoutineStack';
import TodayCalendar from './TodayCalendar';
import ActiveProgressionsTodayCard from './skills/ActiveProgressionsTodayCard';
import SectionNav from '../ui/SectionNav';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import { buildProgramCalendar } from '../../lib/fitness/programCalendar';
import { getProgramById } from '../../data/fitness/programs';
import { usePrehabStateStore, getActivePrehabProtocols, isBannerDismissedToday } from '../../data/fitness/prehabStateStore';

export default function FitnessTabWorkspace() {
  // Banner de prehab derivado de estado persistido
  const prehabZones = usePrehabStateStore((s) => s.activeZoneIds);
  const prehabDismissedOn = usePrehabStateStore((s) => s.bannerDismissedOn);
  const dismissPrehabBanner = usePrehabStateStore((s) => s.dismissBannerToday);
  const activePrehabProtocols = getActivePrehabProtocols(prehabZones);
  const showPrehabAlert = activePrehabProtocols.length > 0 && !isBannerDismissedToday(prehabDismissedOn);

  // Día seleccionado: default = día REAL del sistema
  const [todayDayIndex, setTodayDayIndex] = useState<number>(() => {
    const s = useActiveProgramStore.getState();
    const program = getProgramById(s.programId);
    const ctx = buildProgramCalendar(
      { startedAt: s.startedAt, postponedDays: s.postponedDays || 0 },
      program?.durationWeeks ?? 12,
    );
    return ctx.todayWeekdayIndex;
  });

  return (
    <ErrorBoundary>      {showPrehabAlert && (
        <div
          className="ds-row-between"
          style={{
            background: 'var(--surface-1)',
            border: '1px solid var(--warning-soft)',
            borderRadius: 'var(--radius-m)',
            padding: 'var(--space-2) var(--space-4)',
          }}
        >
          <div className="ds-row" style={{ gap: 'var(--space-2)' }}>
            <ShieldAlert size={18} style={{ color: 'var(--warning)' }} />
            <span className="ds-label">
              {activePrehabProtocols.length === 1
                ? `Prehab (${activePrehabProtocols[0].zoneTitle}): ${activePrehabProtocols[0].protocolTitle} — ${activePrehabProtocols[0].recommendedDose}`
                : `Prehab: ${activePrehabProtocols.map((p) => p.zoneTitle).join(' · ')}`}
            </span>
          </div>
          <button type="button" onClick={dismissPrehabBanner} className="ds-btn ds-btn-ghost ds-btn-sm">
            Cerrar
          </button>
        </div>
      )}

      <div className="ds-stack">
        <TodayCalendar selectedDayIndex={todayDayIndex} onSelectDayIndex={setTodayDayIndex} />
        <ActiveProgressionsTodayCard />
        <TodayRoutineStack selectedDayIndex={todayDayIndex} />
      </div>
    </ErrorBoundary>
  );
}
