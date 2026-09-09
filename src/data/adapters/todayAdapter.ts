// src/data/adapters/todayAdapter.ts - Adaptador de presentación para la Pantalla Hoy

import type {
  TodayDomainView,
  CareerPipelineView,
  CareerPipelineItem,
} from "../contracts/domainContracts";
import { useActiveProgramStore } from "../fitness/activeProgramStore";
import { getProgramById } from "../fitness/programs";
import { buildProgramCalendar, workoutDayLabel } from "../../lib/fitness/programCalendar";
import { useCareerStore } from "../career/careerStore";
import { useVocabularyStore, getDueQueue } from "../../lib/languages/vocabularyStore";
import { germanUnitsVocabulary } from "../languages/german/units";
import { useClinicalStore, todayLocalIso } from "../clinical/clinicalStore";
import type {
  NotionTaskPropertyMap,
  NotionDailyPlanPropertyMap,
} from "../notion/schema";

/**
 * Opciones para generar la vista consolidada de la pantalla "Hoy".
 */
export interface TodayDomainViewOptions {
  /**
   * Usa valores estables SSR (sin rehidratar los stores persistidos de zustand).
   * Evita hydration mismatches entre servidor y cliente.
   */
  ssrSafe?: boolean;
  /**
   * Fecha de referencia para cálculos temporales (por defecto: `new Date()`).
   */
  now?: Date;
}

export function getTodayDomainView(
  options?: TodayDomainViewOptions,
): TodayDomainView {
  const now = options?.now || new Date();
  const ssrSafe = options?.ssrSafe ?? false;

  // --- 1. Fitness Domain (Consumo directo de buildProgramCalendar + activeProgramStore) ---
  const activeState = ssrSafe
    ? { programId: "min-max", startedAt: now.toISOString().split("T")[0], postponedDays: 0 }
    : useActiveProgramStore.getState();

  const currentProgram = getProgramById(activeState.programId || "min-max");
  const calendar = buildProgramCalendar({
    startedAt: activeState.startedAt || now.toISOString().split("T")[0],
    postponedDays: activeState.postponedDays || 0,
    now,
  });

  let nextWorkoutTitle = "Día 1: Upper 1 (Fuerza)";
  if (currentProgram && calendar.todayWorkoutDayIndex !== undefined) {
    const currentWeek = currentProgram.weeks?.[calendar.derivedWeek - 1] || currentProgram.weeks?.[0];
    const workout = currentWeek?.days?.find(
      (d, idx) => d.order === calendar.todayWorkoutDayIndex || idx + 1 === calendar.todayWorkoutDayIndex,
    );
    const dayLabel = workout?.title || workout?.name || workoutDayLabel(calendar.todayWorkoutDayIndex);
    // El label del programa ya puede traer su propio prefijo "Día N:" — no duplicar.
    nextWorkoutTitle = /^\s*d[ií]a\s*\d+\s*:/i.test(dayLabel)
      ? dayLabel
      : `Día ${calendar.todayWorkoutDayIndex}: ${dayLabel}`;
  } else if (calendar.todayWeekdayIndex >= 5) {
    nextWorkoutTitle =
      calendar.todayWeekdayIndex === 5
        ? "Sábado: Cardio LISS & Recuperación Activa"
        : "Domingo: Descanso Total & Restauración";
  }

  const routineCleanTitle = currentProgram
    ? (currentProgram.title || currentProgram.name || "MinMax Hypertrophy")
        .replace(/\s*\([^)]*\)/g, "")
        .trim()
    : "MinMax Hypertrophy";

  // --- 2. Career Domain (Consumo de careerStore) ---
  const careerState = ssrSafe ? null : useCareerStore.getState();
  const applications = careerState?.applications || [];
  const activeApps = applications.filter((a) => a.stage !== "Cerrado");
  const todayIso = now.toISOString().split("T")[0];
  const pendingFollowUps = activeApps.filter(
    (a) => Boolean(a.followUpDateIso) && a.followUpDateIso <= todayIso,
  );

  // Buscar la fecha de seguimiento más próxima
  const followUpDates = activeApps
    .map((a) => a.followUpDateIso)
    .filter((d): d is string => Boolean(d))
    .sort();
  const nextFollowUpDate = followUpDates[0] || todayIso;

  const topCareerApp = activeApps[0];
  const careerActionTitle = topCareerApp
    ? `${topCareerApp.companyName}: ${topCareerApp.singleNextAction}`
    : "Revisar pipeline de postulaciones";

  // --- 3. Languages Domain (Consumo de vocabularyStore) ---
  let germanDueCount = 0;
  if (!ssrSafe) {
    try {
      const vocabState = useVocabularyStore.getState();
      germanDueCount = getDueQueue(
        germanUnitsVocabulary,
        vocabState.byLanguage["de"],
      ).length;
    } catch {
      germanDueCount = 0;
    }
  }

  // --- 4. Clinical Domain (Consumo de clinicalStore) ---
  let clinicalNote = "";
  if (!ssrSafe) {
    try {
      const clinState = useClinicalStore.getState();
      const todayIsoClinical = todayLocalIso(now);
      const todayLog = [...clinState.biofeedback]
        .reverse()
        .find((e) => e.dateIso === todayIsoClinical);
      if (todayLog && todayLog.energy <= 4) {
        clinicalNote = " (Modo Energía Reducida)";
      }
    } catch {
      clinicalNote = "";
    }
  }

  // --- 5. Ensamblado del Top 3 Real y Tarea de 10 Minutos ---
  const top3Tasks = [
    {
      id: "top-task-career",
      title: careerActionTitle,
      area: "Carrera",
      priority: "Alta" as const,
    },
    {
      id: "top-task-fitness",
      title: `Sesión ${routineCleanTitle} · ${nextWorkoutTitle}${clinicalNote}`,
      area: "Fitness",
      priority: "Alta" as const,
    },
    {
      id: "top-task-languages",
      title:
        germanDueCount > 0
          ? `Alemán A1: ${germanDueCount} tarjetas de vocabulario vencidas`
          : "Alemán A1: Sesión de práctica y nueva lección",
      area: "Idiomas",
      priority: "Media" as const,
    },
  ];

  return {
    uiState: {
      status: "ready",
      lastUpdatedIso: now.toISOString(),
    },
    activeBlock: "Bloque A · TwinSight X500: Preparación de Sustentación",
    primaryAction10Min: {
      title: topCareerApp
        ? `Ejecutar micro-acción: ${topCareerApp.singleNextAction}`
        : "Repasar diapositivas 1 a 3 del TwinSight X500 en voz alta",
      targetArea: "Carrera",
      estimatedMinutes: 10,
    },
    top3Tasks,
    fitnessSummary: {
      activeRoutineTitle: routineCleanTitle,
      sessionCompletedToday: false,
      nextWorkoutDayTitle: nextWorkoutTitle,
      prehabPending: true,
    },
    careerSummary: {
      pendingFollowUpsCount: pendingFollowUps.length,
      activeApplicationsCount: activeApps.length,
      nextFollowUpDate,
    },
    languagesSummary: {
      germanDueCount,
    },
  };
}

/**
 * Mapea propiedades de Notion DB 3 (Tasks) y DB 4 (DailyPlan) a la vista de la pantalla Hoy.
 */
export function mapNotionTasksToTodayView(
  tasks: NotionTaskPropertyMap[],
  dailyPlan?: NotionDailyPlanPropertyMap,
): Partial<TodayDomainView> {
  const top3 = tasks.slice(0, 3).map((t, index) => ({
    id: `notion_task_${index}`,
    title: t.Titulo || "Tarea sin título",
    area: t.AreaId || "General",
    priority: (t.Prioridad === "Alta" || t.Prioridad === "Baja" ? t.Prioridad : "Media") as "Alta" | "Media" | "Baja",
  }));

  return {
    activeBlock: dailyPlan?.BloqueA || "Bloque A · Trabajo Profundo",
    top3Tasks: top3,
  };
}

/**
 * Genera la vista del pipeline de Carrera consumiendo careerStore.
 */
export function getCareerPipelineView(): CareerPipelineView {
  const careerState = useCareerStore.getState();
  const applications = careerState.applications || [];

  const mappedApplications: CareerPipelineItem[] = applications.map((app) => {
    let mappedStatus: CareerPipelineItem["status"] = "Prospecto";
    if (app.stage === "Aplicado") mappedStatus = "Aplicado";
    else if (app.stage === "Entrevista" || app.stage === "Seguimiento") mappedStatus = "Entrevista";
    else if (app.trackerStatus === "Offer") mappedStatus = "Oferta";
    else if (app.stage === "Cerrado" && (app.trackerStatus === "Rejected" || app.trackerStatus === "No Fit")) mappedStatus = "Rechazado";

    return {
      id: app.id,
      company: app.companyName,
      role: app.roleTitle,
      status: mappedStatus,
      nextAction: app.singleNextAction,
      followUpDateIso: app.followUpDateIso,
    };
  });

  // §0.1: sin datos inventados — si el pipeline está vacío se muestra vacío,
  // no un seed falso ("Studio X") ni assets/drafts hardcodeados.
  return {
    uiState: {
      status: "ready",
      lastUpdatedIso: new Date().toISOString(),
    },
    applications: mappedApplications,
    assets: [],
    aiDrafts: [],
  };
}
