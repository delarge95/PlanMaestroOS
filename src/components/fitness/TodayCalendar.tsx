// src/components/fitness/TodayCalendar.tsx
// B1 (AG-FIT): cronograma con calendario REAL — el día actual se deriva de la
// fecha del sistema (new Date()), anclado al lunes de startedAt y corrido por
// postponedDays (postergar corre el plan entero un día). Grid semanal L-V
// (workoutDayIndex 1-5, mismo vocabulario que src/data/schedules/scheduleData.ts).
import React, { useEffect, useMemo, useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import { getProgramById } from '../../data/fitness/programs';
import {
  buildProgramCalendar,
  programWeekDays,
  formatDateShort,
  DAY_SHORT,
  type ProgramCalendarDay
} from '../../lib/fitness/programCalendar';

interface TodayCalendarProps {
  selectedDayIndex?: number;
  onSelectDayIndex?: (index: number) => void;
}

interface HistoryEntryLike {
  programId?: string;
  week?: number;
  dayId?: string;
}

function readHistoryDone(): Set<string> {
  try {
    const raw = localStorage.getItem('fitapp_workout_history');
    if (!raw) return new Set();
    const entries = JSON.parse(raw) as HistoryEntryLike[];
    return new Set(
      entries
        .filter((e) => e.programId && e.week && e.dayId)
        .map((e) => `${e.programId}:${e.week}:${e.dayId}`)
    );
  } catch {
    return new Set();
  }
}

export default function TodayCalendar({ selectedDayIndex, onSelectDayIndex }: TodayCalendarProps) {
  const activeProgramId = useActiveProgramStore((s) => s.programId);
  const currentWeek = useActiveProgramStore((s) => s.currentWeek);
  const startedAt = useActiveProgramStore((s) => s.startedAt);
  const postponedDays = useActiveProgramStore((s) => s.postponedDays || 0);
  const setWeek = useActiveProgramStore((s) => s.setWeek);
  const setDay = useActiveProgramStore((s) => s.setDay);

  const program = getProgramById(activeProgramId);

  // Contexto de calendario real (fecha del sistema)
  const ctx = useMemo(
    () => buildProgramCalendar({ startedAt, postponedDays }, program?.durationWeeks ?? 12),
    [startedAt, postponedDays, program?.durationWeeks]
  );

  // B1: sincroniza el store con la semana/día DERIVADOS una vez por montaje
  // (la navegación manual posterior no se sobreescribe).
  const [synced, setSynced] = useState(false);
  useEffect(() => {
    if (synced || !program) return;
    setSynced(true);
    if (currentWeek !== ctx.derivedWeek) setWeek(ctx.derivedWeek);
    const safeWeekIdx = Math.min(Math.max(ctx.derivedWeek - 1, 0), (program.weeks?.length || 1) - 1);
    const week = program.weeks?.[safeWeekIdx];
    if (week && ctx.derivedDayIndex !== undefined) {
      const day = week.days?.[ctx.derivedDayIndex];
      if (day) setDay(day.id);
    }
  }, [synced, program, ctx.derivedWeek, ctx.derivedDayIndex, currentWeek, setWeek, setDay]);

  // Día seleccionado: prop externo o el día real
  const [internalDayIndex, setInternalDayIndex] = useState<number>(ctx.todayWeekdayIndex);
  const effectiveDayIndex = selectedDayIndex ?? internalDayIndex;

  const handleSelectDay = (idx: number) => {
    setInternalDayIndex(idx);
    onSelectDayIndex?.(idx);
  };

  // Semana mostrada = currentWeek del store (navegable); fechas REALES de esa semana
  const safeWeekIndex = Math.min(Math.max(currentWeek - 1, 0), (program.weeks?.length || 1) - 1);
  const activeWeek = program.weeks?.[safeWeekIndex] || program.weeks?.[0];

  const weekDays: ProgramCalendarDay[] = useMemo(
    () => programWeekDays(ctx.programStartMonday, currentWeek, postponedDays),
    [ctx.programStartMonday, currentWeek, postponedDays]
  );

  const [historyDone] = useState<Set<string>>(() => readHistoryDone());

  const scheduleDays = weekDays.map((wd, idx) => {
    const isToday = wd.date.toDateString() === ctx.today.toDateString();
    const isPast = wd.date.getTime() < ctx.today.getTime();
    const dayData = activeWeek?.days?.[idx];
    const hasWorkout = wd.isTrainingDay && Boolean(dayData);
    const doneKey = `${program.id}:${currentWeek}:${dayData?.id ?? ''}`;
    const isDone = hasWorkout && historyDone.has(doneKey);

    let status: 'done' | 'today' | 'pending' | 'rest' = 'pending';
    if (!hasWorkout) status = 'rest';
    else if (isDone) status = 'done';
    else if (isToday) status = 'today';
    else if (isPast) status = 'done'; // pasado sin registro: transcurrido

    let label = wd.weekdayIndex === 5 ? 'LISS' : 'Descanso';
    if (hasWorkout) {
      label = dayData?.name
        ? dayData.name.replace(/^Día\s*\d+:\s*/i, '')
        : `Día ${idx + 1}`;
    }

    return {
      index: idx,
      dayName: DAY_SHORT[idx],
      dateFormatted: formatDateShort(wd.date),
      isToday,
      label,
      status
    };
  });

  return (
    <div className="ds-card ds-stack">
      {/* CABECERA: día real + navegador de semanas */}
      <div className="ds-row-between" style={{ flexWrap: 'wrap' }}>
        <div className="ds-row" style={{ flexWrap: 'wrap' }}>
          <Calendar size={18} style={{ color: 'var(--accent, #0a84ff)' }} />
          <h3 className="ds-h3">
            Hoy es {ctx.todayWeekdayName.toLowerCase()} {formatDateShort(ctx.today)}
          </h3>
          {postponedDays > 0 && (
            <span
              title="Postergaciones acumuladas del plan"
              className="ds-badge ds-badge-warning"
              style={{ borderRadius: 'var(--radius-pill)' }}
            >
              Plan corrido {postponedDays} {postponedDays === 1 ? 'día' : 'días'}
            </span>
          )}
        </div>

        <div className="ds-row">
          <button
            type="button"
            disabled={currentWeek <= 1}
            onClick={() => setWeek(currentWeek - 1)}
            title="Semana anterior"
            aria-label="Semana anterior"
            className="ds-btn ds-btn-secondary ds-btn-sm"
            style={{
              cursor: currentWeek <= 1 ? 'not-allowed' : 'pointer',
              opacity: currentWeek <= 1 ? 0.4 : 1
            }}
          >
            <ChevronLeft size={16} />
          </button>

          <span className="ds-label" style={{ display: 'inline' }}>
            Semana {currentWeek} de {program.durationWeeks}
          </span>

          <button
            type="button"
            disabled={currentWeek >= program.durationWeeks}
            onClick={() => setWeek(currentWeek + 1)}
            title="Semana siguiente"
            aria-label="Semana siguiente"
            className="ds-btn ds-btn-secondary ds-btn-sm"
            style={{
              cursor: currentWeek >= program.durationWeeks ? 'not-allowed' : 'pointer',
              opacity: currentWeek >= program.durationWeeks ? 0.4 : 1
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* DÍAS CON FECHAS REALES */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px' }}>
        {scheduleDays.map((sd) => {
          const isSelected = effectiveDayIndex === sd.index;

          return (
            <button
              key={sd.dayName}
              type="button"
              onClick={() => handleSelectDay(sd.index)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '8px 4px',
                borderRadius: 'var(--radius-s, 8px)',
                background: isSelected
                  ? 'var(--accent, #0a84ff)'
                  : sd.isToday
                  ? 'rgba(48,209,88,0.15)'
                  : 'rgba(255,255,255,0.02)',
                border: isSelected
                  ? '1px solid var(--accent, #0a84ff)'
                  : sd.isToday
                  ? '1px solid var(--success, #30d158)'
                  : '1px solid transparent',
                color: isSelected ? '#ffffff' : 'var(--text-primary)',
                gap: '4px',
                cursor: 'pointer',
                outline: 'none',
                transition: 'all 150ms ease'
              }}
            >
              <span style={{ fontSize: '0.68rem', opacity: isSelected ? 0.95 : 0.7 }}>
                {sd.dayName} {sd.dateFormatted}
              </span>
              {sd.isToday && (
                <span style={{ fontSize: '0.6rem', fontWeight: 800, background: isSelected ? 'rgba(255,255,255,0.22)' : 'var(--success, #30d158)', color: isSelected ? '#fff' : '#000', padding: '0 4px', borderRadius: '4px' }}>
                  HOY
                </span>
              )}
              <strong style={{ fontSize: '0.78rem', textAlign: 'center', lineHeight: 1.15, color: isSelected ? '#ffffff' : sd.status === 'done' ? 'var(--success, #30d158)' : 'var(--text-primary)' }}>
                {sd.label}
              </strong>
              {sd.status === 'done' && <CheckCircle2 size={12} style={{ color: isSelected ? '#ffffff' : 'var(--success, #30d158)' }} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
