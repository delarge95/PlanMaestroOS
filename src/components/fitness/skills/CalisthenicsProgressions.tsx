// src/components/fitness/skills/CalisthenicsProgressions.tsx
import React, { useMemo, useState, useEffect } from "react";
import { calisthenicsProgressions } from "../../../data/fitness/progressionsData";
import {
  exerciseDatabase,
  findExerciseMatches,
  type ExerciseEntry,
} from "../../../data/exercises";
import { PROGRESSION_ALIASES } from "../../../data/fitness/progressionAliases";
import { YouTubePlayer } from "../../ui/YouTubePlayer";
import ExerciseModal from "../ExerciseModal";
import { getShortTitle, groupByPhase } from "./progressionDisplay";
import { Search, ChevronRight, PlayCircle, Check, Flag, Dumbbell, ExternalLink } from "lucide-react";
import {
  getActiveProgressionState,
  subscribeActiveProgressionState,
  toggleActiveProgression,
  isProgressionActive,
  getProgressionStepIndex,
  setProgressionStepIndex,
} from "../../../data/fitness/activeProgressionStore";
import { useActiveProgramStore } from "../../../data/fitness/activeProgramStore";
import { progressionGroupToRoutine, routineCatalogUrl } from "../../../data/fitness/progressionPathLinks";

interface CalisthenicsProgressionsProps {
  onSearchTermChange?: (term: string) => void;
}

export function CalisthenicsProgressions({
  onSearchTermChange,
}: CalisthenicsProgressionsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [methodologyFilter, setMethodologyFilter] = useState<
    "all" | "heria" | "og"
  >("all");
  const [patternFilter, setPatternFilter] = useState<string>("all");
  const [levelFilter, setLevelFilter] = useState<string>("all");

  // Active progression store listener state
  const [, setActiveState] = useState(getActiveProgressionState());
  useEffect(() => {
    return subscribeActiveProgressionState(setActiveState);
  }, []);

  // B7: rutinas tg-master activas (para reflejar el estado del botón "Activar rutina")
  const activeRoutineIds = useActiveProgramStore((s) => s.activeProgramIds);

  // Accordions and collapsibles
  const [expandedGroupIds, setExpandedGroupIds] = useState<string[]>([]);
  const [expandedExerciseNames, setExpandedExerciseNames] = useState<string[]>(
    [],
  );
  const [expandedPhaseKeys, setExpandedPhaseKeys] = useState<string[]>([]);
  const [expandedReqIds, setExpandedReqIds] = useState<string[]>([]);
  const [expandedIntroVideoIds, setExpandedIntroVideoIds] = useState<string[]>(
    [],
  );

  // Variant selection map for exercises with multiple DB candidate matches: exerciseName -> candidateIndex
  const [selectedVariantIdx, setSelectedVariantIdx] = useState<
    Record<string, number>
  >({});

  // Modal for requirements & exercises
  const [modalExerciseId, setModalExerciseId] = useState<string | null>(null);

  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    if (onSearchTermChange) onSearchTermChange(val);
  };

  const toggleGroup = (groupId: string) => {
    setExpandedGroupIds((prev) =>
      prev.includes(groupId)
        ? prev.filter((id) => id !== groupId)
        : [...prev, groupId],
    );
  };

  const togglePhase = (key: string) => {
    setExpandedPhaseKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  };

  const toggleExercise = (name: string) => {
    setExpandedExerciseNames((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
    );
  };

  const toggleReq = (reqKey: string) => {
    setExpandedReqIds((prev) =>
      prev.includes(reqKey)
        ? prev.filter((k) => k !== reqKey)
        : [...prev, reqKey],
    );
  };

  const toggleIntroVideo = (groupId: string) => {
    setExpandedIntroVideoIds((prev) =>
      prev.includes(groupId)
        ? prev.filter((id) => id !== groupId)
        : [...prev, groupId],
    );
  };

  // Helper to resolve exercise candidates from aliases + fuzzy matching
  const resolveProgressionCandidates = (name: string): ExerciseEntry[] => {
    const aliasNames = PROGRESSION_ALIASES[name];
    if (aliasNames && aliasNames.length > 0) {
      const candidates: ExerciseEntry[] = [];
      for (const aName of aliasNames) {
        const matches = findExerciseMatches(aName, 1);
        if (matches.length > 0) {
          candidates.push(matches[0]);
        } else if (exerciseDatabase[aName]) {
          candidates.push({
            name: aName,
            discipline: exerciseDatabase[aName].category || "Calisthenics",
            ...exerciseDatabase[aName],
          });
        }
      }
      if (candidates.length > 0) return candidates;
    }

    return findExerciseMatches(name, 3);
  };

  // Reactive filtering of progression groups and exercises
  const filteredProgressions = useMemo(() => {
    return calisthenicsProgressions
      .map((group) => {
        // 1. Methodology group-level filter
        if (methodologyFilter === "heria") {
          if (group.source !== "heria" && group.source !== "both") return null;
        } else if (methodologyFilter === "og") {
          if (group.source !== "overcoming-gravity" && group.source !== "both")
            return null;
        }

        // 2. Exercise-level source filtering inside groups
        let visibleExercises = group.exercises;
        if (methodologyFilter === "heria") {
          visibleExercises = group.exercises.filter(
            (ex: any) =>
              ex.source === "heria" ||
              ex.source === "both" ||
              (!ex.source && group.source === "heria"),
          );
        } else if (methodologyFilter === "og") {
          visibleExercises = group.exercises.filter(
            (ex: any) =>
              ex.source === "og" ||
              ex.source === "both" ||
              (!ex.source && group.source === "overcoming-gravity"),
          );
        }

        if (visibleExercises.length === 0) return null;

        // 3. Search term filter
        if (searchTerm) {
          const q = searchTerm.toLowerCase().trim();
          const matchesTitle = group.title.toLowerCase().includes(q);
          const matchesIntro = group.introduction?.toLowerCase().includes(q);
          const matchesEx = visibleExercises.some(
            (ex: any) =>
              ex.name.toLowerCase().includes(q) ||
              ex.purpose?.toLowerCase().includes(q) ||
              ex.primaryMuscles?.some((m: string) =>
                m.toLowerCase().includes(q),
              ),
          );
          if (!matchesTitle && !matchesIntro && !matchesEx) return null;
        }

        // 4. Movement pattern filter
        if (patternFilter !== "all") {
          const titleLower = group.title.toLowerCase();
          if (
            patternFilter === "pull" &&
            !titleLower.includes("pulling") &&
            !titleLower.includes("back lever") &&
            !titleLower.includes("front lever") &&
            !titleLower.includes("muscle-up") &&
            !titleLower.includes("one arm pull")
          )
            return null;
          if (
            patternFilter === "push" &&
            !titleLower.includes("pushing") &&
            !titleLower.includes("planche") &&
            !titleLower.includes("dip") &&
            !titleLower.includes("handstand") &&
            !titleLower.includes("one arm push")
          )
            return null;
          if (
            patternFilter === "core" &&
            !titleLower.includes("core") &&
            !titleLower.includes("compression") &&
            !titleLower.includes("l-sit") &&
            !titleLower.includes("dragon flag") &&
            !titleLower.includes("toes to bar")
          )
            return null;
          if (
            patternFilter === "rings" &&
            !titleLower.includes("ring") &&
            !titleLower.includes("anillas")
          )
            return null;
        }

        // 5. Level filter
        if (levelFilter !== "all") {
          const targetLevel = parseInt(levelFilter, 10);
          const hasLevel = visibleExercises.some(
            (ex: any) => ex.level === targetLevel,
          );
          if (!hasLevel) return null;
        }

        return {
          ...group,
          exercises: visibleExercises,
        };
      })
      .filter(Boolean) as typeof calisthenicsProgressions;
  }, [searchTerm, methodologyFilter, patternFilter, levelFilter]);

  const patternOptions = [
    { key: "all", label: "Todos los patrones" },
    { key: "pull", label: "Tracción / Pull" },
    { key: "push", label: "Empuje / Push" },
    { key: "core", label: "Core & Compresión" },
    { key: "rings", label: "Anillas & Soporte" },
  ];

  const levelOptions = [
    { key: "all", label: "Todos los niveles" },
    { key: "1", label: "Level 1 (Básico)" },
    { key: "2", label: "Level 2" },
    { key: "3", label: "Level 3" },
    { key: "4", label: "Level 4" },
    { key: "5", label: "Level 5 (Avanzado)" },
    { key: "7", label: "Level 7 (Elite)" },
  ];

  const selectBaseStyle: React.CSSProperties = {
    background: "var(--surface, #1c1c1e)",
    border: "1px solid var(--color-border-visible, rgba(255,255,255,0.15))",
    borderRadius: "8px",
    padding: "7px 10px",
    color: "var(--text-primary, #fff)",
    fontSize: "0.82rem",
    outline: "none",
    cursor: "pointer",
    minWidth: "150px",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.72rem",
    fontWeight: 600,
    color: "var(--text-tertiary)",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-md)",
      }}
    >
      {/* SEARCH AND FILTERS PANEL */}
      <div
        style={{
          background: "var(--surface, #1c1c1e)",
          border:
            "1px solid var(--color-border-subtle, rgba(255,255,255,0.08))",
          borderRadius: "14px",
          padding: "14px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {/* SEARCH INPUT */}
        <div style={{ position: "relative", width: "100%" }}>
          <input
            type="text"
            placeholder="Buscar habilidad (L-Sit, Planche, Muscle-Up...)"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            style={{
              width: "100%",
              background: "rgba(0,0,0,0.25)",
              border:
                "1px solid var(--color-border-subtle, rgba(255,255,255,0.1))",
              borderRadius: "8px",
              padding: "8px 12px 8px 34px",
              color: "var(--text-primary)",
              fontSize: "0.86rem",
              outline: "none",
            }}
          />
          <Search
            size={15}
            style={{
              position: "absolute",
              left: "11px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--text-tertiary)",
            }}
          />
        </div>

        {/* FILTERS DROPDOWNS */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={labelStyle}>Metodología</span>
            <select
              value={methodologyFilter}
              onChange={(e) => setMethodologyFilter(e.target.value as any)}
              style={selectBaseStyle}
            >
              <option value="all">Todas</option>
              <option value="heria">Chris Heria / ThenX</option>
              <option value="og">Overcoming Gravity</option>
            </select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={labelStyle}>Patrón</span>
            <select
              value={patternFilter}
              onChange={(e) => setPatternFilter(e.target.value)}
              style={selectBaseStyle}
            >
              {patternOptions.map((po) => (
                <option key={po.key} value={po.key}>
                  {po.label}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={labelStyle}>Nivel</span>
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              style={selectBaseStyle}
            >
              {levelOptions.map((lo) => (
                <option key={lo.key} value={lo.key}>
                  {lo.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* PROGRESSION GROUPS LIST */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-md)",
        }}
      >
        {filteredProgressions.map((group) => {
          const isGroupExpanded =
            expandedGroupIds.includes(group.id) ||
            filteredProgressions.length === 1;
          const isActive = isProgressionActive(group.id);
          const currentStep = getProgressionStepIndex(group.id);
          const shortTitle = getShortTitle(group);
          const phaseGroups = groupByPhase(group.exercises);
          // B7: rutina tg-master del catálogo asociada a esta progresión (si existe)
          const routineLink = progressionGroupToRoutine(group.id, group.title);
          const isRoutineActive = routineLink
            ? activeRoutineIds.includes(routineLink.routineId)
            : false;

          return (
            <div
              key={group.id}
              style={{
                background: "var(--surface, #1c1c1e)",
                border: isActive
                  ? "1px solid rgba(10,132,255,0.35)"
                  : "1px solid var(--color-border-subtle, rgba(255,255,255,0.08))",
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              {/* GROUP HEADER */}
              <div
                onClick={() => toggleGroup(group.id)}
                style={{
                  width: "100%",
                  background: isActive
                    ? "rgba(10,132,255,0.05)"
                    : "transparent",
                  border: "none",
                  padding: "14px 16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        margin: 0,
                        color: "var(--text-primary)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {shortTitle}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.66rem",
                        color: "var(--text-tertiary)",
                        border: "1px solid var(--color-border-subtle)",
                        borderRadius: "10px",
                        padding: "1px 8px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {group.source === "heria"
                        ? "Chris Heria"
                        : group.source === "overcoming-gravity"
                          ? "Overcoming Gravity"
                          : "Ambas fuentes"}
                    </span>
                  </div>

                  <span
                    style={{
                      fontSize: "0.76rem",
                      color: "var(--text-tertiary)",
                      marginTop: "4px",
                      display: "block",
                    }}
                  >
                    {group.exercises.length} pasos
                    {isActive && currentStep >= 0 && (
                      <>
                        {" · "}Paso actual:{" "}
                        <strong style={{ color: "var(--accent)" }}>
                          {group.exercises[currentStep]?.name || "N/A"}
                        </strong>
                      </>
                    )}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    flexShrink: 0,
                  }}
                >
                  {/* ACTIVATION TOGGLE BUTTON */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleActiveProgression(group.id);
                    }}
                    style={{
                      background: isActive
                        ? "rgba(10,132,255,0.15)"
                        : "rgba(255,255,255,0.05)",
                      color: isActive
                        ? "var(--accent)"
                        : "var(--text-secondary)",
                      border: isActive
                        ? "1px solid rgba(10,132,255,0.5)"
                        : "1px solid var(--color-border-subtle)",
                      borderRadius: "18px",
                      padding: "5px 12px",
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                    title={
                      isActive
                        ? "Desactivar esta progresión"
                        : "Activar progresión"
                    }
                  >
                    {isActive ? (
                      <>
                        <Check size={13} /> Activa
                      </>
                    ) : (
                      "Activar"
                    )}
                  </button>

                  {group.introVideo && (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "0.68rem",
                        color: "var(--text-tertiary)",
                        padding: "3px 8px",
                        borderRadius: "999px",
                        border: "1px solid var(--color-border-subtle)",
                      }}
                      title="Video introductorio disponible"
                    >
                      <PlayCircle size={13} /> Intro
                    </span>
                  )}
                  <ChevronRight
                    size={18}
                    style={{
                      color: "var(--text-tertiary)",
                      transform: isGroupExpanded ? "rotate(90deg)" : "none",
                      transition: "transform 200ms ease",
                    }}
                  />
                </div>
              </div>

              {/* B7: RUTINA MASTER ASOCIADA (activar en Hoy + ver detalle en catálogo) */}
              {routineLink && (
                <div
                  style={{
                    borderTop: "1px solid var(--color-border-subtle)",
                    background: "rgba(10,132,255,0.04)",
                    padding: "9px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.76rem",
                      color: "var(--text-secondary)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      minWidth: 0,
                    }}
                    title="Rutina master de THENX asociada a esta progresión"
                  >
                    <Dumbbell size={13} style={{ color: "var(--accent)", flexShrink: 0 }} />
                    <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                      {routineLink.label}
                    </strong>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                    <button
                      type="button"
                      onClick={() =>
                        useActiveProgramStore
                          .getState()
                          .toggleActiveProgram(routineLink.routineId)
                      }
                      style={{
                        background: isRoutineActive
                          ? "rgba(48,209,88,0.12)"
                          : "rgba(10,132,255,0.15)",
                        color: isRoutineActive
                          ? "var(--success, #30d158)"
                          : "var(--accent)",
                        border: isRoutineActive
                          ? "1px solid rgba(48,209,88,0.5)"
                          : "1px solid rgba(10,132,255,0.5)",
                        borderRadius: "16px",
                        padding: "4px 11px",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                      title={
                        isRoutineActive
                          ? "Rutina activa en Hoy — clic para desactivar"
                          : "Activar esta rutina en Hoy"
                      }
                    >
                      {isRoutineActive ? (
                        <>
                          <Check size={12} /> En Hoy
                        </>
                      ) : (
                        "Activar rutina"
                      )}
                    </button>
                    <a
                      href={routineCatalogUrl(routineLink.routineId)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "var(--accent)",
                        textDecoration: "none",
                        border: "1px solid var(--color-border-subtle)",
                        borderRadius: "16px",
                        padding: "4px 11px",
                        background: "rgba(255,255,255,0.03)",
                      }}
                      title="Ver detalle de la rutina en el catálogo"
                    >
                      Ver detalle <ExternalLink size={11} />
                    </a>
                  </span>
                </div>
              )}

              {/* EXPANDED GROUP CONTENT */}
              {isGroupExpanded && (
                <div
                  style={{
                    borderTop: "1px solid var(--color-border-subtle)",
                    padding: "14px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.84rem",
                      color: "var(--text-secondary)",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ fontWeight: 700, color: "var(--text)" }}>
                      {group.title}
                    </span>
                    {" — "}
                    {group.introduction}
                  </p>

                  {/* INTRO VIDEO PLAYER */}
                  {group.introVideo && (
                    <div
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        borderRadius: "10px",
                        border: "1px solid var(--color-border-subtle)",
                        overflow: "hidden",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => toggleIntroVideo(group.id)}
                        style={{
                          width: "100%",
                          background: "transparent",
                          border: "none",
                          padding: "8px 12px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            color: "var(--accent)",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <PlayCircle size={15} /> Video introductorio
                        </span>
                        <span
                          style={{
                            fontSize: "0.72rem",
                            color: "var(--text-tertiary)",
                          }}
                        >
                          {expandedIntroVideoIds.includes(group.id)
                            ? "Ocultar"
                            : "Ver"}
                        </span>
                      </button>
                      {expandedIntroVideoIds.includes(group.id) && (
                        <div style={{ padding: "0 12px 12px 12px" }}>
                          <YouTubePlayer
                            youtubeLink={group.introVideo}
                            exerciseName={`${shortTitle} Intro`}
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* INTERACTIVE REQUIREMENTS */}
                  {group.requirements && group.requirements.length > 0 && (
                    <div
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid var(--color-border-subtle)",
                        borderRadius: "10px",
                        padding: "10px 12px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: "var(--text)",
                          display: "block",
                          marginBottom: "8px",
                        }}
                      >
                        Requerimientos previos ({group.requirements.length})
                      </span>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px",
                        }}
                      >
                        {group.requirements.map((req: any, idx: number) => {
                          const reqKey = `${group.id}-req-${idx}`;
                          const isReqExpanded = expandedReqIds.includes(reqKey);

                          return (
                            <div
                              key={reqKey}
                              style={{
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid var(--color-border-subtle)",
                                borderRadius: "8px",
                                overflow: "hidden",
                              }}
                            >
                              <button
                                type="button"
                                onClick={() => toggleReq(reqKey)}
                                style={{
                                  width: "100%",
                                  background: "transparent",
                                  border: "none",
                                  padding: "8px 12px",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  cursor: "pointer",
                                  fontSize: "0.82rem",
                                }}
                              >
                                <span
                                  style={{
                                    fontWeight: 600,
                                    color: "var(--text)",
                                  }}
                                >
                                  {req.exerciseName}
                                </span>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                  }}
                                >
                                  <span
                                    style={{
                                      color: "var(--accent)",
                                      fontWeight: 700,
                                      fontSize: "0.76rem",
                                    }}
                                  >
                                    {req.repeatFormatted ||
                                      `${req.repeat} ${req.repeatType}`}
                                  </span>
                                  <ChevronRight
                                    size={14}
                                    style={{
                                      color: "var(--text-tertiary)",
                                      transform: isReqExpanded
                                        ? "rotate(90deg)"
                                        : "none",
                                      transition: "transform 150ms ease",
                                    }}
                                  />
                                </div>
                              </button>

                              {isReqExpanded && (
                                <div
                                  style={{
                                    padding: "10px 12px",
                                    borderTop:
                                      "1px solid var(--color-border-subtle)",
                                    background: "rgba(0,0,0,0.2)",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                  }}
                                >
                                  {req.exerciseVideoUrl ? (
                                    <YouTubePlayer
                                      youtubeLink={req.exerciseVideoUrl}
                                      exerciseName={req.exerciseName}
                                    />
                                  ) : (
                                    <span
                                      style={{
                                        fontSize: "0.76rem",
                                        color: "var(--text-tertiary)",
                                        fontStyle: "italic",
                                      }}
                                    >
                                      Sin video directo adjunto.
                                    </span>
                                  )}

                                  <button
                                    type="button"
                                    onClick={() =>
                                      setModalExerciseId(req.exerciseName)
                                    }
                                    style={{
                                      background: "rgba(10,132,255,0.12)",
                                      color: "var(--accent)",
                                      border: "1px solid rgba(10,132,255,0.3)",
                                      borderRadius: "6px",
                                      padding: "6px 12px",
                                      fontSize: "0.76rem",
                                      fontWeight: 600,
                                      cursor: "pointer",
                                      width: "fit-content",
                                    }}
                                  >
                                    Ver ficha técnica completa ↗
                                  </button>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* PHASE SUB-GROUPS (mini-progresiones) */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {phaseGroups.map((phase) => {
                      const phaseKey = `${group.id}::${phase.phaseName}`;
                      const isPhaseExpanded =
                        expandedPhaseKeys.includes(phaseKey) ||
                        phaseGroups.length === 1;
                      const phaseStartIdx = group.exercises.indexOf(
                        phase.exercises[0],
                      );

                      return (
                        <div
                          key={phaseKey}
                          style={{
                            border: "1px solid var(--color-border-subtle)",
                            borderRadius: "10px",
                            overflow: "hidden",
                            background: "rgba(255,255,255,0.015)",
                          }}
                        >
                          {/* PHASE HEADER */}
                          <button
                            type="button"
                            onClick={() => togglePhase(phaseKey)}
                            style={{
                              width: "100%",
                              background: "transparent",
                              border: "none",
                              padding: "9px 12px",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              cursor: "pointer",
                              textAlign: "left",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "0.82rem",
                                fontWeight: 700,
                                color: "var(--text-secondary)",
                                letterSpacing: "-0.01em",
                              }}
                            >
                              {phase.phaseName}
                            </span>
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "0.72rem",
                                  color: "var(--text-tertiary)",
                                }}
                              >
                                {phase.exercises.length} pasos
                              </span>
                              <ChevronRight
                                size={15}
                                style={{
                                  color: "var(--text-tertiary)",
                                  transform: isPhaseExpanded
                                    ? "rotate(90deg)"
                                    : "none",
                                  transition: "transform 150ms ease",
                                }}
                              />
                            </span>
                          </button>

                          {/* PHASE EXERCISES */}
                          {isPhaseExpanded && (
                            <div
                              style={{
                                borderTop:
                                  "1px solid var(--color-border-subtle)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px",
                                padding: "10px 12px",
                                background: "rgba(0,0,0,0.15)",
                              }}
                            >
                              {phase.exercises.map(
                                (ex: any, exIdxInPhase: number) => {
                                  const exIdx = phaseStartIdx + exIdxInPhase;
                                  const isExExpanded =
                                    expandedExerciseNames.includes(ex.name);
                                  const isCurrentStepIndex =
                                    currentStep === exIdx;

                                  // Resolve candidates
                                  const candidates =
                                    resolveProgressionCandidates(ex.name);
                                  const activeVariantIndex =
                                    selectedVariantIdx[ex.name] ?? 0;
                                  const dbEx =
                                    candidates[activeVariantIndex] ||
                                    candidates[0] ||
                                    null;

                                  const videoUrl =
                                    ex.videoUrl ||
                                    dbEx?.youtubeLink ||
                                    (dbEx as any)?.videoOption1 ||
                                    (dbEx as any)?.videoUrl;
                                  const secondaryVideoUrl =
                                    ex.secondaryVideoUrl ||
                                    (dbEx as any)?.secondaryVideoLink ||
                                    (dbEx as any)?.videoOption2 ||
                                    (dbEx as any)?.videoUrl2;
                                  const primaryMuscles =
                                    ex.primaryMuscles &&
                                    ex.primaryMuscles.length > 0
                                      ? ex.primaryMuscles
                                      : dbEx?.muscles?.strength || [];
                                  const stabilizers =
                                    ex.stabilizers && ex.stabilizers.length > 0
                                      ? ex.stabilizers
                                      : dbEx?.muscles?.stability || [];
                                  const mobility =
                                    ex.mobility && ex.mobility.length > 0
                                      ? ex.mobility
                                      : (dbEx as any)?.mobilityRequirements ||
                                        (dbEx as any)?.mobility ||
                                        [];
                                  const technique =
                                    ex.technique && ex.technique.length > 0
                                      ? ex.technique
                                      : dbEx?.techniquePoints || [];

                                  return (
                                    <div
                                      key={ex.name}
                                      style={{
                                        background: isCurrentStepIndex
                                          ? "rgba(10,132,255,0.06)"
                                          : "rgba(255,255,255,0.02)",
                                        border: isCurrentStepIndex
                                          ? "1px solid rgba(10,132,255,0.3)"
                                          : "1px solid var(--color-border-subtle)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                      }}
                                    >
                                      {/* ROW HEADER */}
                                      <button
                                        type="button"
                                        onClick={() => toggleExercise(ex.name)}
                                        style={{
                                          width: "100%",
                                          background: "transparent",
                                          border: "none",
                                          padding: "10px 12px",
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                          cursor: "pointer",
                                          textAlign: "left",
                                        }}
                                      >
                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            flexWrap: "wrap",
                                          }}
                                        >
                                          <h4
                                            style={{
                                              fontSize: "0.9rem",
                                              fontWeight: 600,
                                              margin: 0,
                                              color: "var(--text)",
                                            }}
                                          >
                                            {ex.name}
                                          </h4>

                                          {isCurrentStepIndex && (
                                            <span
                                              style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "4px",
                                                fontSize: "0.66rem",
                                                background:
                                                  "rgba(10,132,255,0.15)",
                                                color: "var(--accent)",
                                                border:
                                                  "1px solid rgba(10,132,255,0.35)",
                                                padding: "1px 7px",
                                                borderRadius: "10px",
                                                fontWeight: 700,
                                              }}
                                            >
                                              <Flag size={11} /> En trabajo
                                            </span>
                                          )}

                                          {videoUrl && (
                                            <span
                                              style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "3px",
                                                fontSize: "0.64rem",
                                                color: "var(--text-tertiary)",
                                                border:
                                                  "1px solid var(--color-border-subtle)",
                                                padding: "1px 6px",
                                                borderRadius: "4px",
                                                fontWeight: 600,
                                              }}
                                            >
                                              <PlayCircle size={11} /> Video
                                            </span>
                                          )}
                                        </div>

                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                          }}
                                        >
                                          {ex.level && (
                                            <span
                                              style={{
                                                fontSize: "0.72rem",
                                                color: "var(--text-tertiary)",
                                                border:
                                                  "1px solid var(--color-border-subtle)",
                                                padding: "1px 8px",
                                                borderRadius: "10px",
                                                fontWeight: 600,
                                              }}
                                            >
                                              L{ex.level}
                                            </span>
                                          )}
                                          <ChevronRight
                                            size={15}
                                            style={{
                                              color: "var(--text-tertiary)",
                                              transform: isExExpanded
                                                ? "rotate(90deg)"
                                                : "none",
                                              transition:
                                                "transform 150ms ease",
                                            }}
                                          />
                                        </div>
                                      </button>

                                      {/* EXPANDED TECHNICAL CARD */}
                                      {isExExpanded && (
                                        <div
                                          style={{
                                            padding: "14px",
                                            borderTop:
                                              "1px solid var(--color-border-subtle)",
                                            background: "rgba(0,0,0,0.2)",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "12px",
                                          }}
                                        >
                                          {/* CANDIDATE SELECTOR */}
                                          {candidates.length > 1 && (
                                            <div
                                              style={{
                                                background:
                                                  "rgba(10,132,255,0.06)",
                                                border:
                                                  "1px solid rgba(10,132,255,0.2)",
                                                borderRadius: "8px",
                                                padding: "8px 10px",
                                              }}
                                            >
                                              <span
                                                style={{
                                                  fontSize: "0.72rem",
                                                  color: "var(--accent)",
                                                  fontWeight: 700,
                                                  display: "block",
                                                  marginBottom: "6px",
                                                }}
                                              >
                                                Ejercicios vinculados en la base
                                                de datos ({candidates.length}):
                                              </span>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  gap: "6px",
                                                  flexWrap: "wrap",
                                                }}
                                              >
                                                {candidates.map(
                                                  (cand, candIdx) => (
                                                    <button
                                                      key={cand.name}
                                                      type="button"
                                                      onClick={() =>
                                                        setSelectedVariantIdx(
                                                          (prev) => ({
                                                            ...prev,
                                                            [ex.name]: candIdx,
                                                          }),
                                                        )
                                                      }
                                                      style={{
                                                        background:
                                                          activeVariantIndex ===
                                                          candIdx
                                                            ? "rgba(10,132,255,0.2)"
                                                            : "rgba(255,255,255,0.05)",
                                                        color:
                                                          activeVariantIndex ===
                                                          candIdx
                                                            ? "var(--accent)"
                                                            : "var(--text-secondary)",
                                                        border:
                                                          activeVariantIndex ===
                                                          candIdx
                                                            ? "1px solid rgba(10,132,255,0.5)"
                                                            : "1px solid var(--color-border-subtle)",
                                                        borderRadius: "6px",
                                                        padding: "3px 9px",
                                                        fontSize: "0.72rem",
                                                        fontWeight:
                                                          activeVariantIndex ===
                                                          candIdx
                                                            ? 700
                                                            : 500,
                                                        cursor: "pointer",
                                                      }}
                                                    >
                                                      {cand.name}
                                                    </button>
                                                  ),
                                                )}
                                              </div>
                                            </div>
                                          )}

                                          {/* MARK CURRENT STEP + MODAL */}
                                          <div
                                            style={{
                                              display: "flex",
                                              justifyContent: "space-between",
                                              alignItems: "center",
                                              flexWrap: "wrap",
                                              gap: "8px",
                                            }}
                                          >
                                            <button
                                              type="button"
                                              onClick={() =>
                                                setProgressionStepIndex(
                                                  group.id,
                                                  exIdx,
                                                )
                                              }
                                              style={{
                                                background: isCurrentStepIndex
                                                  ? "rgba(10,132,255,0.15)"
                                                  : "rgba(255,255,255,0.05)",
                                                color: isCurrentStepIndex
                                                  ? "var(--accent)"
                                                  : "var(--text-secondary)",
                                                border: isCurrentStepIndex
                                                  ? "1px solid rgba(10,132,255,0.5)"
                                                  : "1px solid var(--color-border-subtle)",
                                                borderRadius: "7px",
                                                padding: "5px 12px",
                                                fontSize: "0.76rem",
                                                fontWeight: 600,
                                                cursor: "pointer",
                                              }}
                                            >
                                              {isCurrentStepIndex
                                                ? "Paso actual en Hoy"
                                                : `Marcar paso ${exIdx + 1} en Hoy`}
                                            </button>

                                            {dbEx && (
                                              <button
                                                type="button"
                                                onClick={() =>
                                                  setModalExerciseId(dbEx.name)
                                                }
                                                style={{
                                                  background: "transparent",
                                                  color: "var(--accent)",
                                                  border: "none",
                                                  fontSize: "0.76rem",
                                                  fontWeight: 600,
                                                  cursor: "pointer",
                                                }}
                                              >
                                                Ver ficha completa ↗
                                              </button>
                                            )}
                                          </div>

                                          {/* VIDEO PLAYER */}
                                          {videoUrl ? (
                                            <div
                                              style={{
                                                borderRadius: "10px",
                                                overflow: "hidden",
                                                border:
                                                  "1px solid var(--color-border-subtle)",
                                              }}
                                            >
                                              <YouTubePlayer
                                                youtubeLink={videoUrl}
                                                secondaryVideoLink={
                                                  secondaryVideoUrl
                                                }
                                                exerciseName={
                                                  dbEx?.name || ex.name
                                                }
                                              />
                                            </div>
                                          ) : (
                                            <span
                                              style={{
                                                fontSize: "0.76rem",
                                                color: "var(--text-tertiary)",
                                                fontStyle: "italic",
                                              }}
                                            >
                                              Sin video demo asignado.
                                            </span>
                                          )}

                                          {/* PREREQUISITES & UNLOCKS */}
                                          <div
                                            style={{
                                              display: "flex",
                                              justifyContent: "space-between",
                                              flexWrap: "wrap",
                                              gap: "8px",
                                              fontSize: "0.82rem",
                                            }}
                                          >
                                            <div>
                                              <strong
                                                style={{
                                                  color: "var(--text-tertiary)",
                                                }}
                                              >
                                                Requiere:{" "}
                                              </strong>
                                              <span
                                                style={{
                                                  color: "var(--text)",
                                                  fontWeight: 600,
                                                }}
                                              >
                                                {ex.prerequisites || "Ninguno"}
                                              </span>
                                            </div>
                                            <div>
                                              <strong
                                                style={{
                                                  color: "var(--text-tertiary)",
                                                }}
                                              >
                                                Desbloquea:{" "}
                                              </strong>
                                              <span
                                                style={{
                                                  color: "var(--accent)",
                                                  fontWeight: 600,
                                                }}
                                              >
                                                {ex.unlocks ||
                                                  "Siguiente nivel"}
                                              </span>
                                            </div>
                                          </div>

                                          {/* TECHNIQUE & FORM */}
                                          {technique.length > 0 && (
                                            <div>
                                              <strong
                                                style={{
                                                  fontSize: "0.82rem",
                                                  color: "var(--text)",
                                                  display: "block",
                                                  marginBottom: "4px",
                                                }}
                                              >
                                                Técnica y forma
                                              </strong>
                                              <ul
                                                style={{
                                                  margin: 0,
                                                  paddingLeft: "18px",
                                                  fontSize: "0.8rem",
                                                  color:
                                                    "var(--text-secondary)",
                                                  lineHeight: 1.5,
                                                }}
                                              >
                                                {technique.map(
                                                  (t: string, tIdx: number) => (
                                                    <li key={tIdx}>{t}</li>
                                                  ),
                                                )}
                                              </ul>
                                            </div>
                                          )}

                                          {/* PRIMARY MUSCLES */}
                                          {primaryMuscles.length > 0 && (
                                            <div>
                                              <strong
                                                style={{
                                                  fontSize: "0.82rem",
                                                  color: "var(--text)",
                                                  display: "block",
                                                  marginBottom: "6px",
                                                }}
                                              >
                                                Músculos principales
                                              </strong>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  flexWrap: "wrap",
                                                  gap: "6px",
                                                }}
                                              >
                                                {primaryMuscles.map(
                                                  (m: string, mIdx: number) => (
                                                    <span
                                                      key={mIdx}
                                                      onClick={() =>
                                                        setModalExerciseId(
                                                          dbEx?.name || ex.name,
                                                        )
                                                      }
                                                      style={{
                                                        background:
                                                          "rgba(10,132,255,0.08)",
                                                        border:
                                                          "1px solid rgba(10,132,255,0.25)",
                                                        color:
                                                          "var(--text-secondary)",
                                                        padding: "2px 9px",
                                                        borderRadius: "5px",
                                                        fontSize: "0.76rem",
                                                        fontWeight: 500,
                                                        cursor: "pointer",
                                                      }}
                                                    >
                                                      {m}
                                                    </span>
                                                  ),
                                                )}
                                              </div>
                                            </div>
                                          )}

                                          {/* KEY STABILIZERS */}
                                          {stabilizers.length > 0 && (
                                            <div>
                                              <strong
                                                style={{
                                                  fontSize: "0.82rem",
                                                  color: "var(--text)",
                                                  display: "block",
                                                  marginBottom: "6px",
                                                }}
                                              >
                                                Estabilizadores clave
                                              </strong>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  flexWrap: "wrap",
                                                  gap: "6px",
                                                }}
                                              >
                                                {stabilizers.map(
                                                  (m: string, mIdx: number) => (
                                                    <span
                                                      key={mIdx}
                                                      style={{
                                                        background:
                                                          "rgba(255,255,255,0.05)",
                                                        border:
                                                          "1px solid var(--color-border-subtle)",
                                                        color:
                                                          "var(--text-secondary)",
                                                        padding: "2px 9px",
                                                        borderRadius: "5px",
                                                        fontSize: "0.76rem",
                                                        fontWeight: 500,
                                                      }}
                                                    >
                                                      {m}
                                                    </span>
                                                  ),
                                                )}
                                              </div>
                                            </div>
                                          )}

                                          {/* MOBILITY & ROM REQUIREMENTS */}
                                          {mobility.length > 0 && (
                                            <div>
                                              <strong
                                                style={{
                                                  fontSize: "0.82rem",
                                                  color: "var(--text)",
                                                  display: "block",
                                                  marginBottom: "6px",
                                                }}
                                              >
                                                Movilidad y rango
                                              </strong>
                                              <ul
                                                style={{
                                                  margin: 0,
                                                  paddingLeft: "18px",
                                                  fontSize: "0.8rem",
                                                  color:
                                                    "var(--text-secondary)",
                                                  lineHeight: 1.5,
                                                }}
                                              >
                                                {mobility.map(
                                                  (
                                                    mob: any,
                                                    mobIdx: number,
                                                  ) => (
                                                    <li key={mobIdx}>
                                                      {typeof mob === "string"
                                                        ? mob
                                                        : `${mob.muscle || mob.area || "ROM"}: ${
                                                            mob.description ||
                                                            mob.level ||
                                                            ""
                                                          }`}
                                                    </li>
                                                  ),
                                                )}
                                              </ul>
                                            </div>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  );
                                },
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* EXERCISE MODAL FOR REQUIREMENTS OR DETAILS */}
      {modalExerciseId && (
        <ExerciseModal
          exerciseId={modalExerciseId}
          onClose={() => setModalExerciseId(null)}
        />
      )}
    </div>
  );
}

export default CalisthenicsProgressions;
