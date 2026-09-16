import { useEffect, useRef, useState } from "react";
import type { Project } from "@data/projects";
import { humanPipelineStages } from "@data/projects";
import { isPlaceholderLink } from "@data/links";

/*
 * ProjectShowcase — scrollytelling de "Selected Work".
 * Adaptado del SelectedProject.tsx del WIP (c721323), reestilizado a
 * tokens (.pf-*) y convertido en sección scroll-driven:
 *
 * - Columna de pasos (TwinSight → Human → ARA): cada paso domina el
 *   viewport; un IntersectionObserver cambia el proyecto activo.
 * - Panel pegajoso que hace crossfade al proyecto activo (contenido
 *   rescatado del WIP: signal/role, etapas Human, stack, CTAs, nota).
 * - Métricas clave (1-2 por proyecto) con parallax sutil
 *   (data-pf-parallax lo maneja el script de la página, no aquí).
 * - Escucha "stage-select" (API del WIP) y "langchange" (siteLang.ts).
 */

type Lang = "en" | "es";

type KeyMetric = { value: string; label: string };

const strings = {
  en: {
    kicker: "01 · Selected work",
    title: "Runtime systems. Production craft.",
    lead: "Three systems tell the story: a browser-ready digital twin, a full character pipeline and Python automation behind it. Scroll — the panel follows the narrative.",
    signal: "Signal",
    role: "Role",
    stages: "Pipeline stages",
    stack: "Stack",
    supporting: "Supporting stack",
    viewCase: "View case study",
    goStep: "Go to project step",
    stepKeyword: {
      twinsight: "Digital twin · drone inspection in the browser",
      human: "Character pipeline · sculpt to render",
      ara: "Automation · research workflows"
    } as Record<string, string>
  },
  es: {
    kicker: "01 · Trabajo seleccionado",
    title: "Sistemas en runtime. Oficio de producción.",
    lead: "Tres sistemas cuentan la historia: un gemelo digital para el navegador, un pipeline de personajes completo y la automatización en Python detrás. Haz scroll — el panel sigue la narrativa.",
    signal: "Señal",
    role: "Rol",
    stages: "Etapas del pipeline",
    stack: "Stack principal",
    supporting: "Stack de apoyo",
    viewCase: "Ver caso de estudio",
    goStep: "Ir al paso del proyecto",
    stepKeyword: {
      twinsight: "Gemelo digital · inspección de drones en el navegador",
      human: "Pipeline de personajes · de escultura a render",
      ara: "Automatización · flujos de investigación"
    } as Record<string, string>
  }
} as const;

/* Métricas clave por proyecto: 1-2 honestas, derivadas de los datos */
const buildKeyMetrics = (projects: Project[]): Record<string, KeyMetric[]> => {
  const twinsight = projects.find((project) => project.id === "twinsight");
  const sus = twinsight?.metrics?.find((metric) => metric.label === "SUS average");
  const tris = twinsight?.metrics?.find((metric) => metric.label === "Optimized geometry");

  return {
    twinsight: [
      { value: sus?.value ?? "91.88", label: "SUS · usability" },
      { value: tris?.value ?? "95,617", label: "Triangles optimized" }
    ],
    human: [
      { value: String(humanPipelineStages.length).padStart(2, "0"), label: "Pipeline stages" },
      { value: "01", label: "Full character study" }
    ],
    ara: [
      { value: "Python", label: "Automation core" },
      { value: "AI", label: "Assisted workflows" }
    ]
  };
};

const pad = (value: number) => String(value).padStart(2, "0");

type Props = {
  projects: Project[];
  initialId?: string;
};

export default function ProjectShowcase({ projects, initialId }: Props) {
  const [activeId, setActiveId] = useState(initialId ?? projects[0]?.id ?? "");
  const [lang, setLang] = useState<Lang>("en");
  const stepsRef = useRef<HTMLOListElement | null>(null);

  /* i18n + evento "stage-select" rescatado del WIP (la galería puede
     disparar { detail: { projectId } } y este panel la sigue) */
  useEffect(() => {
    setLang(document.documentElement.lang === "es" ? "es" : "en");
    const onLang = (event: Event) => {
      const next = (event as CustomEvent<{ lang?: string }>).detail?.lang;
      if (next === "es" || next === "en") setLang(next);
    };
    const onSelect = (event: Event) => {
      const projectId = (event as CustomEvent<{ projectId?: string | null }>).detail?.projectId;
      if (projectId && projects.some((project) => project.id === projectId)) {
        setActiveId(projectId);
      }
    };
    window.addEventListener("langchange", onLang);
    window.addEventListener("stage-select", onSelect);
    return () => {
      window.removeEventListener("langchange", onLang);
      window.removeEventListener("stage-select", onSelect);
    };
  }, [projects]);

  /* Scrollytelling: el paso que domina el centro del viewport activa el panel */
  useEffect(() => {
    const list = stepsRef.current;
    if (!list) return undefined;

    const steps = Array.from(list.querySelectorAll<HTMLElement>("[data-project-step]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = (entry.target as HTMLElement).dataset.projectStep;
          if (id && projects.some((project) => project.id === id)) setActiveId(id);
        });
      },
      { rootMargin: "-42% 0px -50% 0px", threshold: 0 }
    );

    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, [projects]);

  const project = projects.find((candidate) => candidate.id === activeId) ?? projects[0];
  const t = strings[lang];
  const keyMetrics = buildKeyMetrics(projects);
  const stages = project?.id === "human" ? humanPipelineStages : null;

  if (!project) return null;

  const goToStep = (id: string) => {
    const step = stepsRef.current?.querySelector<HTMLElement>(`[data-project-step="${id}"]`);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    step?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
  };

  return (
    <section className="pf-section" id="work" aria-label="Selected work">
      <div className="pf-shell">
        <header className="pf-work-head" data-pf-reveal>
          <p className="pf-kicker">{t.kicker}</p>
          <h2 className="pf-title">{t.title}</h2>
          <p className="pf-lead">{t.lead}</p>
        </header>

        <div className="pf-work-body">
          <ol className="pf-steps" ref={stepsRef}>
            {projects.map((item, index) => (
              <li key={item.id} className="pf-step" data-project-step={item.id} data-pf-reveal>
                <div className="pf-step-index">
                  <b>{pad(index + 1)}</b>
                  <span>/ {pad(projects.length)}</span>
                </div>
                <p className="pf-step-tag">{t.stepKeyword[item.id] ?? item.galleryRole}</p>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>

                <ul className="pf-step-metrics" aria-label="Key metrics">
                  {(keyMetrics[item.id] ?? []).map((metric) => (
                    <li key={metric.label} className="pf-metric" data-pf-parallax>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </li>
                  ))}
                </ul>

                <ul className="pf-step-tools" aria-label="Primary stack">
                  {item.primaryStack.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <aside className="pf-panel" aria-live="polite">
            <div className="pf-panel-card">
              <div className="pf-panel-progress">
                {projects.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={item.id === project.id ? "is-on" : undefined}
                    aria-label={`${t.goStep}: ${item.title}`}
                    onClick={() => goToStep(item.id)}
                  />
                ))}
              </div>

              {/* key fuerza el crossfade entre proyectos (CSS .pf-panel-inner) */}
              <div className="pf-panel-inner" key={project.id}>
                <p className="pf-panel-eyebrow">{project.eyebrow}</p>
                <h4>{project.title}</h4>
                <p className="pf-panel-summary">{project.summary}</p>

                <div className="pf-panel-facts">
                  <div>
                    <span>{t.signal}</span>
                    <p>{project.proof}</p>
                  </div>
                  <div>
                    <span>{t.role}</span>
                    <p>{project.role}</p>
                  </div>
                </div>

                {stages && (
                  <div className="pf-panel-block">
                    <span className="pf-panel-eyebrow">{t.stages}</span>
                    <ul className="pf-step-tools">
                      {stages.slice(0, 5).map((stage) => (
                        <li key={stage}>{stage}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pf-panel-block">
                  <span className="pf-panel-eyebrow">{t.stack}</span>
                  <div className="pf-panel-stack">
                    {project.primaryStack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                    {project.secondaryStack.map((tag) => (
                      <span className="is-muted" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pf-panel-actions">
                  <a className="pf-btn pf-btn-primary" href={project.caseStudyUrl}>
                    <span>{t.viewCase}</span>
                    <span className="pf-btn-arrow" aria-hidden="true">→</span>
                  </a>
                  {project.links
                    .filter((link) => !isPlaceholderLink(link.href))
                    .map((link) => (
                      <a
                        className="pf-btn pf-btn-secondary"
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>{link.label}</span>
                        <span className="pf-btn-arrow" aria-hidden="true">↗</span>
                      </a>
                    ))}
                </div>

                {project.statusNote && <p className="pf-panel-note">{project.statusNote}</p>}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
