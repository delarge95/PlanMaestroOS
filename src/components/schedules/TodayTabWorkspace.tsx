// src/components/schedules/TodayTabWorkspace.tsx
import React, { useState, useEffect } from "react";
import ErrorBoundary from "../ErrorBoundary";
import SuggestionInbox from "../suggestions/SuggestionInbox";
import Disclosure from "../ui/Disclosure";
import Button from "../ui/Button";
import { getTodayDomainView } from "../../data/adapters/todayAdapter";
import type { Task } from "../../data/contracts/task";
import { ArrowRight, Dumbbell } from "lucide-react";

export interface TodayTabWorkspaceProps {
  currentPath?: string;
}

export default function TodayTabWorkspace({
  currentPath = "/app/today",
}: TodayTabWorkspaceProps) {
  // SSR-safe: el primer render usa el estado estable (default del servidor)
  // para que la hidratación coincida. Post-mount se rehidrata con el
  // programa real del store y la fecha local del cliente.
  const [todayData, setTodayData] = useState(() =>
    getTodayDomainView({ ssrSafe: true }),
  );
  const [blockDone, setBlockDone] = useState(false);

  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    setTodayData(getTodayDomainView());
    setFormattedDate(
      new Date().toLocaleDateString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
      }),
    );
  }, []);

  const tasks: Task[] = (todayData.top3Tasks || []).map((t) => {
    const isFitness = t.area === "Fitness";
    return {
      id: t.id,
      externalId: t.id,
      title: t.title,
      area: t.area,
      singleNextAction: isFitness
        ? `Entrenar: ${todayData.fitnessSummary?.nextWorkoutDayTitle ?? "sesión de hoy"}`
        : t.area === "Idiomas"
          ? todayData.languagesSummary && todayData.languagesSummary.germanDueCount > 0
            ? `Repasar alemán: ${todayData.languagesSummary.germanDueCount} tarjetas vencidas`
            : "Practicar alemán: sesión corta de hoy"
          : todayData.primaryAction10Min?.title ?? "Definir siguiente acción",
      estimatedMinutes: todayData.primaryAction10Min?.estimatedMinutes ?? 10,
      priority: t.priority as "Alta" | "Media" | "Baja",
      status: "PorHacer",
      createdAtIso: new Date().toISOString(),
      updatedAtIso: new Date().toISOString(),
    };
  });

  const top3 = tasks.slice(0, 3);

  // Lista minimalista de ejercicios de ejemplo para tareas de rutina fitness
  const fitnessExercises = [
    { name: "Peso muerto", prescription: "1–2 × 6–8" },
    { name: "Press banca", prescription: "3–4 × 8–10" },
    { name: "Remo mancuerna", prescription: "2–3 × 10–12" },
  ];

  return (
    <ErrorBoundary>
      <div className="ds-stack" style={{ width: "100%" }}>
        {/* NAVEGACIÓN NIVEL 2 */}
        {/* SUGERENCIAS DEL SISTEMA — corte vertical reglas Fase 3 (CORE surface) */}
        <SuggestionInbox />

        {/* ENCABEZADO PRESCRIPTIVO: "Hoy" + FECHA */}
        <div className="ds-row-between" style={{ flexWrap: "wrap", gap: "var(--space-1)", paddingBottom: "var(--space-1)", borderBottom: "1px solid var(--color-border-subtle)" }}>
          <div>
            <h1 className="ds-h2">
              Hoy
            </h1>
            <span className="ds-caption">
              {formattedDate}
            </span>
          </div>

          <Button
            variant={blockDone ? "ghost" : "primary"}
            size="sm"
            onClick={() => setBlockDone(!blockDone)}
          >
            {blockDone ? "Hecho" : "Iniciar"}
          </Button>
        </div>

        {/* SECCIÓN TOP 3 (EXPANDIBLE CON DISCLOSURE PER FIX 2) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-xs)",
          }}
        >
          <div className="ds-row-between">
            <span className="ds-eyebrow" style={{ color: "var(--text-secondary)" }}>
              Top 3
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                window.location.href = "/app/today/plan";
              }}
            >
              <span>Plan</span>
              <ArrowRight size={14} />
            </Button>
          </div>

          {top3.length === 0 ? (
            <div className="ds-empty">
              Sin prioridades todavía. Elige hasta 3 tareas para hoy.
            </div>
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              {top3.map((t) => (
                <Disclosure
                  key={t.id}
                  label={`${t.area.toUpperCase()} · ${t.title}`}
                  summary={t.singleNextAction}
                >
                  <div className="ds-stack-sm" style={{ paddingTop: "4px" }}>
                    {t.area === "Fitness" ? (
                      <div className="ds-stack-sm" style={{ gap: "6px", background: "rgba(255,255,255,0.02)", padding: "10px", borderRadius: "var(--radius-s)" }}>
                        <span
                          style={{
                            fontSize: "var(--fs-eyebrow, 0.75rem)",
                            color: "var(--text-secondary)",
                            fontWeight: 700,
                          }}
                        >
                          Bloque fitness
                        </span>
                        {fitnessExercises.map((ex, i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              fontSize: "var(--fs-meta, 0.8125rem)",
                              color: "var(--text-primary)",
                            }}
                          >
                            <span>{ex.name}</span>
                            <span style={{ color: "var(--text-secondary)" }}>
                              {ex.prescription}
                            </span>
                          </div>
                        ))}
                        <div style={{ paddingTop: "6px" }}>
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => {
                              window.location.href = "/app/fitness";
                            }}
                          >
                            <Dumbbell size={14} />
                            <span>Rutina</span>
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="ds-caption">
                        Siguiente: <strong>{t.singleNextAction}</strong> · {t.estimatedMinutes} min
                      </div>
                    )}
                  </div>
                </Disclosure>
              ))}
            </div>
          )}
        </div>

        {/* BLOQUES A / B (MÁXIMO 2 VISIBLES) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-sm)",
          }}
        >
          <div className="ds-card ds-row-between" style={{ padding: "var(--space-3) var(--space-4)" }}>
            <div>
              <span className="ds-eyebrow" style={{ color: "var(--text-secondary)" }}>
                Bloque A
              </span>
              <strong
                style={{
                  fontSize: "var(--fs-body)",
                  color: "var(--text-primary)",
                  display: "block",
                  marginTop: "2px",
                }}
              >
                TwinSight X500 & Sustentación
              </strong>
            </div>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => setBlockDone(!blockDone)}
            >
              10 min
            </Button>
          </div>

          <div className="ds-card ds-row-between" style={{ padding: "var(--space-3) var(--space-4)" }}>
            <div>
              <span className="ds-eyebrow" style={{ color: "var(--warning)" }}>
                Bloque B
              </span>
              <strong
                style={{
                  fontSize: "var(--fs-body)",
                  color: "var(--text-primary)",
                  display: "block",
                  marginTop: "2px",
                }}
              >
                Seguimiento Vacantes & Alemán
              </strong>
            </div>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => setBlockDone(!blockDone)}
            >
              10 min
            </Button>
          </div>
        </div>

        {/* FILA CONDENSADA DE FITNESS */}
        <div className="ds-card ds-row-between" style={{ padding: "var(--space-3) var(--space-4)" }}>
          <div>
            <span className="ds-eyebrow" style={{ color: "var(--success)" }}>
              Fitness
            </span>
            <strong
              style={{
                fontSize: "var(--fs-body)",
                color: "var(--text-primary)",
                display: "block",
                marginTop: "2px",
              }}
            >
              {todayData.fitnessSummary.activeRoutineTitle} ·{" "}
              {todayData.fitnessSummary.nextWorkoutDayTitle}
            </strong>
          </div>

          <a href="/app/fitness" style={{ textDecoration: "none" }}>
            <Button variant="primary" size="sm">
              Sesión
            </Button>
          </a>
        </div>
      </div>
    </ErrorBoundary>
  );
}
