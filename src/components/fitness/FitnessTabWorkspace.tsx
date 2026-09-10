/**
 * FitnessTabWorkspace.tsx — Página "Hoy" de fitness.
 * La navegación la maneja SectionNav; esta página solo renderiza el contenido
 * del día: calendario, progresión activa, rutina del día.
 */

import React, { useMemo, useState } from 'react';
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

  // ——— Calendario del programa: SUSCRITO al store (no lectura única) ———
  // Bugfix: antes se leía getState() UNA vez y se elegía la rutina por
  // todayWeekdayIndex (día de semana crudo). Las postergaciones y los cambios
  // de programa no movían la rutina aunque las fechas avanzaran. Ahora:
  // - ctx se recalcula cuando startedAt/postponedDays/program cambian;
  // - la RUTINA usa ctx.derivedDayIndex (día EFECTIVO, respeta postergaciones);
  // - el calendario sigue en espacio weekday (0=Lunes…6=Domingo).
  const programId = useActiveProgramStore((s) => s.programId);
  const startedAt = useActiveProgramStore((s) => s.startedAt);
  const postponedDays = useActiveProgramStore((s) => s.postponedDays || 0);
  const program = getProgramById(programId);

  const ctx = useMemo(
    () => buildProgramCalendar({ startedAt, postponedDays }, program?.durationWeeks ?? 12),
    [startedAt, postponedDays, program?.durationWeeks],
  );

  // null = seguir al día real; número = día elegido por el usuario (weekday).
  const [selWeekday, setSelWeekday] = useState<number | null>(null);
  const calendarSelected = selWeekday ?? ctx.todayWeekdayIndex;
  /** Índice del día de ENTRENAMIENTO para la rutina (espacio days[], no weekday). */
  const routineDayIndex =
    selWeekday !== null
      ? selWeekday < 5
        ? selWeekday // L-V: día de entreno directo (Min-Max 1:1 con weekday)
        : undefined // fin de semana: descanso → primera rutina como fallback visual
      : ctx.derivedDayIndex;

  return (
    <ErrorBoundary>
      {showPrehabAlert && (
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
        <TodayCalendar
          selectedDayIndex={calendarSelected}
          onSelectDayIndex={(i) => setSelWeekday(i === ctx.todayWeekdayIndex ? null : i)}
        />
        <ActiveProgressionsTodayCard />
        <TodayRoutineStack selectedDayIndex={routineDayIndex ?? 0} />
      </div>
    </ErrorBoundary>
  );
}
