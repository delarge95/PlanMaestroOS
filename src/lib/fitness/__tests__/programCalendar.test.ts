import { describe, it, expect } from 'vitest';
import {
  buildProgramCalendar,
  startOfWeek,
  weekdayIndex,
  addDays,
  daysBetween,
  workoutDayLabel
} from '../programCalendar';

// Semana 1 del programa: lunes 10 de agosto de 2026.
const START_MONDAY = new Date(2026, 7, 10);

describe('Program Calendar (B1 — calendario real)', () => {
  it('startOfWeek devuelve el lunes de la semana', () => {
    // Sábado 15 ago 2026 → lunes 10
    expect(startOfWeek(new Date(2026, 7, 15)).getDate()).toBe(10);
    // Domingo 16 ago 2026 → lunes 10
    expect(startOfWeek(new Date(2026, 7, 16)).getDate()).toBe(10);
    // Lunes 17 ago 2026 → lunes 17
    expect(startOfWeek(new Date(2026, 7, 17)).getDate()).toBe(17);
  });

  it('weekdayIndex mapea 0=Lunes … 6=Domingo', () => {
    expect(weekdayIndex(new Date(2026, 7, 10))).toBe(0); // lunes
    expect(weekdayIndex(new Date(2026, 7, 11))).toBe(1); // martes
    expect(weekdayIndex(new Date(2026, 7, 16))).toBe(6); // domingo
  });

  it('sin postergaciones: deriva semana y día L-V desde la fecha real', () => {
    // Jueves 13 ago (día 3 de la semana 1) → workoutDayIndex 4 (Lower 2)
    const ctx = buildProgramCalendar({ startedAt: START_MONDAY, postponedDays: 0, now: new Date(2026, 7, 13) });
    expect(ctx.derivedWeek).toBe(1);
    expect(ctx.todayWorkoutDayIndex).toBe(4);
    expect(ctx.derivedDayIndex).toBe(3);
    expect(ctx.todayWeekdayName).toBe('Jueves');
  });

  it('fin de semana: sin día de entreno (sábado LISS / domingo descanso)', () => {
    const sat = buildProgramCalendar({ startedAt: START_MONDAY, postponedDays: 0, now: new Date(2026, 7, 15) });
    expect(sat.todayWorkoutDayIndex).toBeUndefined();
    expect(sat.derivedDayIndex).toBeUndefined();
    const sun = buildProgramCalendar({ startedAt: START_MONDAY, postponedDays: 0, now: new Date(2026, 7, 16) });
    expect(sun.todayWorkoutDayIndex).toBeUndefined();
  });

  it('postergar 1 día corre el plan: el martes vuelve a tocar el día 1', () => {
    // Martes 11 ago con 1 día postergado → día efectivo = lunes → Day 1
    const ctx = buildProgramCalendar({ startedAt: START_MONDAY, postponedDays: 1, now: new Date(2026, 7, 11) });
    expect(ctx.derivedWeek).toBe(1);
    expect(ctx.todayWorkoutDayIndex).toBe(1);
  });

  it('las postergaciones acumuladas pueden empujar el plan a la semana siguiente', () => {
    // Lunes 17 ago (real: semana 2 día 1) con 3 postergados → día efectivo viernes semana 1
    const ctx = buildProgramCalendar({ startedAt: START_MONDAY, postponedDays: 3, now: new Date(2026, 7, 17) });
    expect(ctx.derivedWeek).toBe(1);
    expect(ctx.todayWorkoutDayIndex).toBe(5); // Arms & Delts
  });

  it('semanas avanzan con el tiempo real', () => {
    // Martes 18 ago = semana 2, día 2
    const ctx = buildProgramCalendar({ startedAt: START_MONDAY, postponedDays: 0, now: new Date(2026, 7, 18) });
    expect(ctx.derivedWeek).toBe(2);
    expect(ctx.todayWorkoutDayIndex).toBe(2);
  });

  it('la semana derivada se clampea a la duración del programa', () => {
    // 20 semanas después → semana 12 (fin del programa de 12 semanas)
    const far = addDays(START_MONDAY, 20 * 7);
    const ctx = buildProgramCalendar({ startedAt: START_MONDAY, postponedDays: 0, now: far }, 12);
    expect(ctx.derivedWeek).toBe(12);
    expect(ctx.isWeekClamped).toBe(true);
  });

  it('weekDays expone las fechas reales de la semana del programa (con postergaciones)', () => {
    // Semana 2 con 2 días postergados: la semana 2 del programa empieza el miércoles 19 ago real
    const ctx = buildProgramCalendar({ startedAt: START_MONDAY, postponedDays: 2, now: new Date(2026, 7, 19) });
    expect(ctx.derivedWeek).toBe(2);
    expect(ctx.weekDays[0].date.getDate()).toBe(19); // miércoles 19
    expect(ctx.weekDays[0].isTrainingDay).toBe(true);
    expect(ctx.weekDays[6].isTrainingDay).toBe(false); // domingo
  });

  it('startedAt null ancla en la semana actual (sin crash)', () => {
    const ctx = buildProgramCalendar({ startedAt: null, postponedDays: 0, now: new Date(2026, 7, 11) });
    expect(ctx.derivedWeek).toBe(1);
    expect(ctx.todayWorkoutDayIndex).toBe(2);
  });

  it('daysBetween/addDays redondean por días completos', () => {
    expect(daysBetween(START_MONDAY, new Date(2026, 7, 17))).toBe(7);
    expect(addDays(START_MONDAY, 7).getDate()).toBe(17);
  });

  it('workoutDayLabel mapea el grid semanal', () => {
    expect(workoutDayLabel(1)).toBe('Upper 1');
    expect(workoutDayLabel(5)).toBe('Arms & Delts');
    expect(workoutDayLabel(undefined)).toBe('Descanso');
  });
});
