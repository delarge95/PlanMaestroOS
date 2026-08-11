// src/components/fitness/TodayCalendar.tsx
import React from 'react';
import { Calendar, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import { getProgramById } from '../../data/fitness/programs';

interface TodayCalendarProps {
  selectedDayIndex: number;
  onSelectDayIndex: (index: number) => void;
}

export default function TodayCalendar({ selectedDayIndex, onSelectDayIndex }: TodayCalendarProps) {
  const activeProgramId = useActiveProgramStore((s) => s.programId);
  const currentWeek = useActiveProgramStore((s) => s.currentWeek);
  const setWeek = useActiveProgramStore((s) => s.setWeek);

  const program = getProgramById(activeProgramId);
  const safeWeekIndex = Math.min(Math.max(currentWeek - 1, 0), (program.weeks?.length || 1) - 1);
  const activeWeek = program.weeks?.[safeWeekIndex] || program.weeks?.[0];

  // Fecha base: Semana 2 = Lunes 10 de Agosto de 2026 (Hoy = Martes 11)
  const baseDate = new Date(2026, 7, 10);
  const weekOffset = (currentWeek - 2) * 7;
  const daysOfWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  const scheduleDays = daysOfWeek.map((dayName, idx) => {
    const dayDate = new Date(baseDate);
    dayDate.setDate(baseDate.getDate() + weekOffset + idx);
    const dateFormatted = `${dayDate.getDate()} ${dayDate.toLocaleDateString('es-ES', { month: 'short' })}`;
    const isToday = currentWeek === 2 && idx === 1; // Martes 11 Ago (Semana 2)

    if (idx < 5) {
      const dayData = activeWeek?.days?.[idx];
      const cleanName = dayData?.name
        ? dayData.name.replace(/^Día\s*\d+:\s*/i, '')
        : `Día ${idx + 1}`;

      return {
        index: idx,
        dayName,
        dateFormatted,
        isToday,
        isRest: false,
        label: cleanName,
        status: idx < 1 ? 'done' : isToday ? 'today' : 'pending'
      };
    } else {
      return {
        index: idx,
        dayName,
        dateFormatted,
        isToday,
        isRest: true,
        label: 'Descanso',
        status: 'rest'
      };
    }
  });

  return (
    <div
      style={{
        background: 'var(--surface-1, #0d0d0f)',
        border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
        borderRadius: 'var(--radius-m, 12px)',
        padding: 'var(--space-md)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-md)'
      }}
    >
      {/* CABECERA CON NAVEGADOR DE SEMANAS */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calendar size={18} style={{ color: 'var(--accent, #0a84ff)' }} />
          <h3 style={{ fontSize: 'var(--fs-step, 1.0625rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
            Cronograma Semanal
          </h3>
        </div>

        {/* CONTROLES DE NAVEGACIÓN ENTRE SEMANAS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            type="button"
            disabled={currentWeek <= 1}
            onClick={() => setWeek(currentWeek - 1)}
            title="Semana anterior"
            aria-label="Semana anterior"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.1))',
              color: 'var(--text-primary)',
              borderRadius: '6px',
              padding: '4px 8px',
              cursor: currentWeek <= 1 ? 'not-allowed' : 'pointer',
              opacity: currentWeek <= 1 ? 0.4 : 1
            }}
          >
            <ChevronLeft size={16} />
          </button>

          <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Semana {currentWeek} de {program.durationWeeks}
          </span>

          <button
            type="button"
            disabled={currentWeek >= program.durationWeeks}
            onClick={() => setWeek(currentWeek + 1)}
            title="Semana siguiente"
            aria-label="Semana siguiente"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.1))',
              color: 'var(--text-primary)',
              borderRadius: '6px',
              padding: '4px 8px',
              cursor: currentWeek >= program.durationWeeks ? 'not-allowed' : 'pointer',
              opacity: currentWeek >= program.durationWeeks ? 0.4 : 1
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* DÍAS CON FECHAS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px' }}>
        {scheduleDays.map((sd) => {
          const isSelected = selectedDayIndex === sd.index;

          return (
            <button
              key={sd.dayName}
              type="button"
              onClick={() => onSelectDayIndex(sd.index)}
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
