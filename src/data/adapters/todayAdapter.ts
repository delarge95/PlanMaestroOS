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
import { useVocabularyStore } from "../../lib/languages/vocabularyStore";
import { useClinicalStore } from "../clinical/clinicalStore";
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
    nextWorkoutTitle = `Día ${calendar.todayWorkoutDayIndex}: ${dayLabel}`;
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
  const pendingFollowUps = applications.filter(
    (a) => a.trackerStatus === "needs_follow_up",
  );

  // Buscar la fecha de seguimiento más próxima
  const followUpDates = activeApps
    .map((a) => a.nextFollowUpDate)
    .filter((d): d is string => Boolean(d))
    .sort();
  const nextFollowUpDate = followUpDates[0] || now.toISOString().split("T")[0];

  const topCareerApp = activeApps[0];
  const careerActionTitle = topCareerApp
    ? `${topCareerApp.company}: ${topCareerApp.singleNextAction}`
    : "Revisar pipeline de postulaciones";

  // --- 3. Languages Domain (Consumo de vocabularyStore) ---
  let germanDueCount = 0;
  if (!ssrSafe) {
    try {
      const vocabState = useVocabularyStore.getState();
      germanDueCount = vocabState.getItemsDueToday("de").length;
    } catch {
      germanDueCount = 0;
    }
  }

  // --- 4. Clinical Domain (Consumo de clinicalStore) ---
  let clinicalNote = "";
  if (!ssrSafe) {
    try {
      const clinState = useClinicalStore.getState();
      const todayLog = clinState.getTodayLog(now);
      if (todayLog && todayLog.perceivedEnergy <= 4) {
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
      recentPR: { exercise: "Prensa Inclinada", value: "+5 kg (PR MaxWeight)" },
      prehabPending: true,
    },
    careerSummary: {
      pendingFollowUpsCount: pendingFollowUps.length || 1,
      activeApplicationsCount: activeApps.length || 3,
      nextFollowUpDate,
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
    if (app.stage === "applied") mappedStatus = "Aplicado";
    else if (app.stage === "interview" || app.stage === "technical_test") mappedStatus = "Entrevista";
    else if (app.stage === "offer") mappedStatus = "Oferta";
    else if (app.stage === "rejected") mappedStatus = "Rechazado";

    return {
      id: app.id,
      company: app.company,
      role: app.role,
      status: mappedStatus,
      nextAction: app.singleNextAction,
      followUpDateIso: app.nextFollowUpDate,
      remoteType: app.remoteType || "Remoto Global",
    };
  });

  return {
    uiState: {
      status: "ready",
      lastUpdatedIso: new Date().toISOString(),
    },
    applications: mappedApplications.length > 0 ? mappedApplications : [
      {
        id: "app_seed_1",
        company: "Studio X",
        role: "Unity Technical Artist",
        status: "Aplicado",
        nextAction: "Seguimiento por LinkedIn a Lead Tech Artist",
        followUpDateIso: new Date().toISOString().split("T")[0],
        remoteType: "Remoto LATAM",
      },
    ],
    assets: [
      {
        id: "asset_1",
        title: "CV Technical Artist (Versión Inglés)",
        category: "CV",
        version: "v2.1",
        isApproved: true,
      },
      {
        id: "asset_2",
        title: "Caso de Estudio TwinSight X500 (WebGL)",
        category: "CaseStudy",
        version: "v1.0",
        isApproved: true,
      },
    ],
    aiDrafts: [
      {
        id: "draft_1",
        targetCompany: "Studio X",
        targetRole: "Unity Technical Artist",
        draftContent:
          "Borrador de mensaje de seguimiento enviando demo reel y métricas de optimización CAD.",
        sourcesUsed: ["TwinSight Case Study", "LinkedIn Profile"],
        requiresHumanApproval: true,
        isApproved: false,
      },
    ],
  };
}
