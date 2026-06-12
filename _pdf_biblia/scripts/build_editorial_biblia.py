from __future__ import annotations

import importlib.util
import json
import shutil
import subprocess
import sys
from datetime import datetime
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
PDF_ROOT = ROOT / "_pdf_biblia"
TEX_DIR = PDF_ROOT / "tex_editorial"
BUILD_DIR = PDF_ROOT / "build_editorial"
DIST_DIR = PDF_ROOT / "dist"
MODULES_DIR = TEX_DIR / "chapters"
OBSIDIAN_DIR = ROOT / "_obsidian"
PDF_BASENAME = "Biblia_Profesional_Alexander_EDITORIAL_v1"

RAW_SCRIPT = PDF_ROOT / "scripts" / "build_biblia.py"
spec = importlib.util.spec_from_file_location("raw_biblia", RAW_SCRIPT)
raw = importlib.util.module_from_spec(spec)
assert spec.loader is not None
sys.modules[spec.name] = raw
spec.loader.exec_module(raw)


def ensure_dirs() -> None:
    for path in [TEX_DIR, BUILD_DIR, DIST_DIR, MODULES_DIR]:
        path.mkdir(parents=True, exist_ok=True)


def write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8", newline="\n")


def md_link(path: Path, label: str | None = None) -> str:
    label = label or raw.rel(path)
    return f"[{label}]({raw.file_url(path)})"


def source_table(rows: list[tuple[str, str]]) -> str:
    return raw.markdown_table(["Fuente", "Uso en este capitulo"], [[a, b] for a, b in rows])


def chapter_tex(filename: str, title: str, md: str) -> str:
    promoted_lines: list[str] = []
    for line in md.splitlines():
        if line.startswith("### "):
            promoted_lines.append("#" + line)
        elif line.startswith("## "):
            promoted_lines.append(line[1:])
        else:
            promoted_lines.append(line)
    md = "\n".join(promoted_lines)
    tex = "\\chapter{" + raw.inline_tex(title) + "}\n\n"
    tex += raw.markdown_to_tex(md, title)
    path = MODULES_DIR / filename
    write(path, tex)
    return f"chapters/{filename}"


def source(path_name: str, label: str | None = None) -> str:
    return md_link(ROOT / path_name, label or path_name)


def build_source_index(sources, research_pdfs, historic_index) -> str:
    def source_bullets(items, include_role: bool = False) -> str:
        lines: list[str] = []
        for s in items:
            label = Path(s.relative_path).name
            role = f"; {s.role}" if include_role and s.role else ""
            lines.append(
                f"- **{s.id}** - [{label}]({raw.file_url(ROOT / s.relative_path)}) "
                f"({s.status}, {s.lines} lines{role})."
            )
        return "\n".join(lines)

    def pdf_bullets(items) -> str:
        return "\n".join(
            f"- [{p['name']}]({p['url']}) ({round(p['bytes'] / 1024, 1)} KB, {p['last_modified']})."
            for p in items
        )

    def historic_bullets(items) -> str:
        return "\n".join(
            f"- **{h['name']}** ({round(h['bytes'] / 1024, 1)} KB): {h['note']}"
            for h in items
        )

    root_items = [s for s in sources if s.section == "root"]
    research_items = [s for s in sources if s.section == "research"]
    return f"""
# Source map completo

Este anexo preserva trazabilidad hacia todo el corpus. El cuerpo editorial evita repeticiones; el source map mantiene acceso a la informacion completa.

## Modulos raiz

{source_bullets(root_items, include_role=True)}

## Research Markdown

{source_bullets(research_items)}

## PDFs de Research

{pdf_bullets(research_pdfs)}

## Historic indexado

{historic_bullets(historic_index)}
"""


def build_editorial_chapters(sources, findings, research_pdfs, historic_index) -> list[str]:
    chapters: list[str] = []
    generated = datetime.now().strftime("%Y-%m-%d %H:%M")

    chapters.append(
        chapter_tex(
            "01_guia_resumen.tex",
            "Guia de lectura y resumen ejecutivo",
            f"""
Este documento es una version editorial de la biblia profesional de Alexander Woodcock Salomon. No es un volcado de archivos: integra la investigacion, elimina repeticion innecesaria, conserva trazabilidad y convierte el sistema en una guia de decision y ejecucion.

## Como leerlo

1. Leer primero el resumen ejecutivo, el perfil canonico y la estrategia de mercado.
2. Usar el capitulo de portafolio para construir o validar activos publicos.
3. Usar el sistema de aplicacion para decidir donde aplicar, como registrar avances y que evitar.
4. Consultar la auditoria cuando haya duda sobre claims, movilidad, seniority o datos de mercado.
5. Usar el source map para abrir los `.md` originales cuando se necesite detalle completo.

## Decisiones canonicas

| Tema | Decision |
|---|---|
| Posicionamiento | Real-Time 3D Developer / Unity Technical Artist |
| Nucleo de prueba | TwinSight X500 |
| Ruta primaria | Unity WebGL, technical visualization, CAD-to-realtime, simulation/XR-adjacent |
| Ruta secundaria | Python automation / AI tooling mediante ARA |
| Disponibilidad actual | Remote contractor/B2B desde Colombia |
| UE actual | No claim de EU work authorization |
| Pasaporte portugues | Esperado alrededor de 2028; no derecho actual |
| Estrategia recomendada | Balanced international contractor strategy |
| PDF | Snapshot editorial; Obsidian y tracker siguen vivos |

## Fuentes principales

{source_table([
    (source("01_source_of_truth_profile.md"), "Perfil fuente actual"),
    (source("15_final_integrated_strategy.md"), "Estrategia integrada"),
    (source("16_final_consistency_audit_and_gap_register.md"), "Auditoria previa y claims seguros"),
    (source("27_strategy_scenarios_conservative_balanced_aggressive.md"), "Escenarios de ejecucion"),
])}

Generado: {generated}
""",
        )
    )

    chapters.append(
        chapter_tex(
            "02_perfil_posicionamiento.tex",
            "Perfil canonico y posicionamiento",
            f"""
El perfil no debe intentar competir como senior AAA, full-stack generalista o AI engineer productivo. Su fuerza esta en una interseccion mas defendible: desarrollo Unity/WebGL, visualizacion tecnica, optimizacion CAD-to-realtime, interaccion 3D y presentacion de un caso tecnico con evaluacion.

## Perfil operativo

| Dimension | Estado canonico |
|---|---|
| Base actual | Colombia |
| Idioma | Espanol nativo; ingles C1 autoevaluado |
| Rol publico | Real-Time 3D Developer / Unity Technical Artist |
| Enfoque | Interactive technical visualization, CAD-to-realtime optimization, Unity WebGL |
| Proyecto insignia | TwinSight X500 |
| Ruta secundaria | Python automation / AI tooling con ARA |
| Movilidad UE | Futura, no actual |
| Trabajo buscado ahora | Remote contractor/B2B internacional |

## Lo que se debe afirmar

- Unity WebGL technical visualization prototype.
- CAD-to-realtime asset optimization.
- Runtime interaction systems in C#.
- Technical UI and component-level inspection.
- Formative academic evaluation when metrics are verified.
- AI-assisted workflow under human technical ownership.

## Lo que no se debe afirmar

- Senior Technical Artist como titulo propio actual.
- EU work authorization antes de pasaporte/residencia legal.
- Production AI Engineer.
- Full-stack specialist como eje principal.
- Full industrial digital twin si no existe IoT/live telemetry.

## Fuentes

{source_table([
    (source("01_source_of_truth_profile.md"), "Hechos personales, limites y claims publicos"),
    (source("02_market_role_fit_and_positioning.md"), "Ajuste mercado-rol"),
    (source("10_github_linkedin_cv_strategy.md"), "Lenguaje publico seguro"),
    (source("17_cv_base_and_role_variants.md"), "CV y variantes por rol"),
    (source("18_linkedin_final_rewrite.md"), "LinkedIn final"),
])}
""",
        )
    )

    chapters.append(
        chapter_tex(
            "03_mercado_salario_movilidad.tex",
            "Mercado, salario y movilidad",
            f"""
La estrategia salarial y geografica no consiste en perseguir el salario global maximo, sino maximizar la interseccion entre prueba tecnica, probabilidad real de contratacion y modalidad legal viable desde Colombia.

## Metas salariales

| Horizonte | Meta bruta mensual | Lectura estrategica |
|---|---|---|
| Piso aceptable | USD 1.5k | Entrada viable si preserva direccion Unity/3D/technical visualization |
| Objetivo 3-6 meses | USD 3k | Alcanzable con portfolio, CV, LinkedIn, demo y outreach bien ejecutados |
| Upside 12-24 meses | USD 6k | Posible con mayor prueba, contractor fuerte o rutas US/EU mas maduras |

## Escenarios

| Escenario | Mejor uso | Riesgo |
|---|---|---|
| Conservador | Primer contrato, estabilidad, menor riesgo | Puede limitar upside |
| Balanceado | Default recomendado | Requiere disciplina semanal |
| Agresivo | Alto upside y outreach fuerte | Mayor rechazo y presion de portfolio |

## Movilidad

| Ruta | Estado | Mensaje correcto |
|---|---|---|
| Colombia remoto | Activa ahora | Available for remote contractor/B2B work from Colombia |
| Portugal/UE | Futura | Portuguese passport/citizenship expected around 2028; not current authorization |
| Alemania via familia/residencia | Posible futura | Requiere proceso legal; no prometer work rights antes de tenerlos |

## Idiomas

| Idioma | Prioridad | Uso |
|---|---|---|
| Ingles | Critica | Mercado internacional, entrevistas, LinkedIn, portfolio |
| Aleman | Condicional fuerte | Alemania y empleabilidad UE futura |
| Portugues | Medio | Portugal, vida local, contexto de pasaporte; no reemplaza ingles |

## Fuentes

{source_table([
    (source("03_salary_benchmark_and_remote_colombia.md"), "Benchmarks y metas USD 1.5k/3k/6k"),
    (source("04_eu_portugal_germany_mobility_strategy.md"), "Movilidad UE, Portugal y Alemania"),
    (source("05_language_strategy_and_roi.md"), "ROI de idiomas"),
    (source("06_education_courses_rebelway_masters_phd.md"), "Cursos, certificaciones y educacion"),
    (source("27_strategy_scenarios_conservative_balanced_aggressive.md"), "Escenarios salariales y tacticos"),
])}
""",
        )
    )

    chapters.append(
        chapter_tex(
            "04_portafolio_prueba_tecnica.tex",
            "Portafolio y prueba tecnica",
            f"""
TwinSight X500 es el activo que da coherencia al perfil. El portafolio debe convertirlo de proyecto academico a prueba laboral: problema, pipeline, decisiones tecnicas, interaccion, metricas, limitaciones y demostracion publica.

## TwinSight X500

| Elemento | Dato relevante |
|---|---|
| Tipo | Unity WebGL technical visualization prototype |
| Dominio | Drone assembly inspection |
| Stack | Unity, C#, WebGL, URP, UI Toolkit, Blender |
| Pipeline | CAD -> Blender -> Unity -> WebGL -> Evaluation |
| Optimizacion | 6.5M+ source CAD routes -> 95,617 optimized triangles |
| Evaluacion | 12 participants, SUS, NASA-TLX Raw, Think-Aloud |
| Resultados | SUS 91.88; NASA-TLX Raw 8.69 viewer vs 19.89 2D support |
| Limite | Academic/portfolio prototype; not a full production digital twin |

## Jerarquia de proyectos

| Prioridad | Proyecto | Funcion |
|---|---|---|
| 1 | TwinSight X500 | Flagship, prueba principal de mercado |
| 2 | ARA Framework | Ruta secundaria AI tooling / Python automation |
| 3 | Blender portrait technical study | Complemento visual/technical art |
| 4 | AI News Aggregator | Solo si no diluye el foco |

## Portfolio web

La web debe ser una herramienta de conversion laboral. El primer viewport debe comunicar rol, TwinSight y CTA. El caso TwinSight debe incluir demo/video, GitHub, limitaciones honestas y evidencia tecnica.

## Fuentes

{source_table([
    (source("07_portfolio_strategy_and_project_architecture.md"), "Arquitectura de portafolio"),
    (source("08_twinsight_x500_case_study.md"), "Caso TwinSight completo"),
    (source("08B_twinsight_case_study_final_structure.md"), "Estructura final del case study"),
    (source("09_ara_ai_tools_and_secondary_projects.md"), "ARA y proyectos secundarios"),
    (source("20_portfolio_copy_and_site_structure.md"), "Copy y estructura web"),
    (source("21B_twinsight_demo_video_final_plan.md"), "Demo video final"),
    (source("33_portfolio_asset_production_sprint.md"), "Sprint de produccion de activos"),
])}
""",
        )
    )

    chapters.append(
        chapter_tex(
            "05_sistema_aplicacion.tex",
            "Sistema de aplicacion y pipeline",
            f"""
El sistema de aplicacion debe evitar dos errores: aplicar masivamente sin proof assets o esperar a que todo este perfecto. La ruta correcta es pipeline semanal, verificacion de targets y mensajes ajustados por rol.

## Priorizacion de targets

| Capa | Uso | Accion |
|---|---|---|
| A1 | First wave practica | Verificar openings/contactos primero |
| A2 | Alto fit, mayor friccion | Investigar tras A1 o cuando cambie autorizacion/movilidad |
| B1 | Fallback/volumen | Mantener pipeline LATAM/contractor |
| C | Exploracion | Revisar mensual |
| Watchlist | No priorizar | Reabrir solo si aparece rol muy alineado |

## A1 inicial

| Empresa | Razon |
|---|---|
| Treeview Studio | Unity/XR/digital twin fit con senal LATAM |
| Active Theory | WebGL creative tech y puente narrativo TwinSight |
| UNIT9 / Resn / Monogrid / 14islands / Dogstudio | WebGL/interactive studios |
| Threekit / Emersya / Expivi / Avataar | Product visualization / configurators |
| Teravision Games / Globant Gaming | LATAM/game/Unity route |
| BairesDev / Gorilla Logic / Lean Tech / MAS Global | Nearshore contractor/software fallback |

## Campo minimo antes de aplicar

| Campo | Por que importa |
|---|---|
| Opening URL/contacto | Evita aplicar a targets no activos |
| Remote scope | Worldwide, LATAM, Colombia, US-only, EU-only, hybrid |
| Contractor/B2B | Es la modalidad viable actual |
| Work authorization | Evita perder tiempo en roles bloqueados |
| Portfolio angle | Define si se manda TwinSight, ARA o fallback Python |
| Next action | Apply, contact recruiter, track, discard |

## Fuentes

{source_table([
    (source("11_company_targets_job_boards_recruiters.md"), "Empresas, job boards y recruiters"),
    (source("12_application_system_and_tracker.md"), "Sistema de aplicacion"),
    (source("22_outreach_templates_english_spanish.md"), "Mensajes English/Spanish"),
    (source("30_live_job_postings_market_snapshot.md"), "Snapshot de vacantes"),
    (source("31_application_targeting_matrix_and_search_protocol.md"), "Matriz y protocolo"),
    (source("34_weekly_application_execution_system.md"), "Sistema semanal"),
])}
""",
        )
    )

    chapters.append(
        chapter_tex(
            "06_ejecucion.tex",
            "Ejecucion 30/60/90 y dashboard",
            f"""
La ejecucion se debe medir semanalmente. El objetivo no es solo enviar aplicaciones; es aumentar conversion mediante activos, claridad de posicionamiento, seguimiento y ajuste de mensajes.

## Roadmap

| Periodo | Objetivo | Entregable visible |
|---|---|---|
| 0-30 dias | Cerrar proof assets minimos | CV, LinkedIn, README, TwinSight case study, tracker activo |
| 31-60 dias | Pipeline consistente | A1/A2 verificados, outreach, primeras entrevistas |
| 61-90 dias | Conversion y ajuste | Oferta, entrevistas maduras o pivote tactico con datos |

## KPI semanales

| KPI | Lectura |
|---|---|
| Aplicaciones enviadas | Volumen controlado, no spam |
| Outreach enviado | Contacto directo y recruiters |
| Respuestas | Senal de mercado |
| Entrevistas | Conversion real |
| Bloqueos de portafolio | Identifica activos que frenan aplicacion |
| Salario conversado | Valida o corrige target |

## Decisiones semanales

- Si no hay respuestas: revisar headline, portfolio, target y mensajes.
- Si hay respuestas pero no entrevistas: revisar CV y fit por rol.
- Si hay entrevistas pero no ofertas: reforzar defensa tecnica y evidencia.
- Si ofertas son bajas: separar cashflow temporal de estrategia central.

## Fuentes

{source_table([
    (source("14_30_60_90_execution_plan.md"), "Plan 30/60/90"),
    (source("26_weekly_execution_dashboard.md"), "Dashboard semanal"),
    (source("32_application_materials_gap_closure_plan.md"), "Cierre de brechas"),
    (source("34_weekly_application_execution_system.md"), "Sistema semanal"),
    (source("36_public_profile_launch_sequence.md"), "Launch sequence"),
])}
""",
        )
    )

    chapters.append(
        chapter_tex(
            "07_entrevista_negociacion.tex",
            "Entrevistas, negociacion y ofertas",
            f"""
La defensa de entrevistas debe probar que TwinSight no es solo una demo visual. Debe defender decisiones de pipeline, arquitectura, evaluacion, limitaciones y uso responsable de IA.

## Historias tecnicas que deben estar listas

| Historia | Evidencia |
|---|---|
| CAD-to-realtime | Reduccion de geometria y preservacion de legibilidad |
| Unity/WebGL runtime | Seleccion, visual states, UI, build constraints |
| Evaluation | SUS, NASA-TLX, Think-Aloud, limites del estudio |
| AI-assisted workflow | Uso como soporte, no sustituto de ownership tecnico |
| Limitaciones | No full digital twin, no production telemetry |

## Evaluacion de ofertas

| Dimension | Pregunta |
|---|---|
| Fit de rol | Fortalece o diluye posicionamiento? |
| Net real | Bruto contractor no equivale a salario neto |
| Contrato | IP, pagos, alcance, terminacion, jurisdiccion |
| Remote feasibility | Es realmente viable desde Colombia? |
| Growth ROI | Abre ruta hacia USD 3k/6k y mejores roles? |

## Fuentes

{source_table([
    (source("13_interview_negotiation_and_offer_risk.md"), "Entrevista, negociacion y riesgo"),
    (source("23_interview_answer_bank.md"), "Banco de respuestas"),
    (source("24_offer_evaluation_scorecard.md"), "Scorecard de ofertas"),
    (source("35_interview_defense_and_technical_screen_system.md"), "Defensa tecnica"),
])}
""",
        )
    )

    chapters.append(
        chapter_tex(
            "08_materiales_publicos_benchmarks.tex",
            "Materiales publicos y benchmarks",
            f"""
Los benchmarks no deben copiarse literalmente; sirven para calibrar estructura, densidad visual, lenguaje tecnico y orden de evidencia. La salida publica debe ser consistente: CV, LinkedIn, GitHub, ArtStation/portfolio y demo reel apuntan al mismo posicionamiento.

## Sistema publico

| Canal | Funcion | Regla |
|---|---|---|
| CV | Filtro recruiter/ATS | Version por rol, claims seguros |
| LinkedIn | Descubrimiento y narrativa | Headline claro, Featured con TwinSight |
| GitHub | Prueba tecnica | README fuerte, repos limpios |
| Portfolio web | Conversion | TwinSight en primer viewport |
| ArtStation/breakdowns | Prueba visual complementaria | No reemplaza explicacion tecnica |
| Demo reel | Compresion audiovisual | 90-120s principal + teaser LinkedIn |

## Duplicados y benchmarks

Las variantes `28D` y fuentes `agent_A4` se conservan por trazabilidad. La version `28D_artstation_portfolio_benchmark_complete.md` manda para lectura canonica.

## Fuentes

{source_table([
    (source("10_github_linkedin_cv_strategy.md"), "Estrategia publica"),
    (source("17_cv_base_and_role_variants.md"), "CV"),
    (source("18_linkedin_final_rewrite.md"), "LinkedIn"),
    (source("19_github_readme_templates.md"), "README templates"),
    (source("19B_github_readme_twinsight_final.md"), "README TwinSight final"),
    (source("28_competitor_profile_benchmark.md"), "Competidores"),
    (source("28B_public_cv_resume_benchmark.md"), "Benchmark CV"),
    (source("28C_github_profiles_benchmark.md"), "Benchmark GitHub"),
    (source("28D_artstation_portfolio_benchmark_complete.md"), "Benchmark ArtStation canonico"),
    (source("29B_demo_reels_benchmark.md"), "Demo reels"),
])}
""",
        )
    )

    audit_rows = [[f.id, f.severity, f.category, f.finding, f.resolution] for f in findings]
    chapters.append(
        chapter_tex(
            "09_auditoria_riesgos.tex",
            "Auditoria de coherencia, riesgos y errata",
            f"""
La auditoria no elimina la complejidad del corpus; la gobierna. Las contradicciones se resuelven mediante reglas de precedencia, errata y lenguaje publico seguro.

## Hallazgos

{raw.markdown_table(["ID", "Severidad", "Categoria", "Hallazgo", "Resolucion"], audit_rows)}

## Riesgos ejecutivos

| Riesgo | Control |
|---|---|
| Sobreprometer UE | Usar Colombia contractor ahora; 2028 como futuro |
| Diluir posicionamiento | TwinSight primero, ARA segundo |
| Claim de seniority | Evitar senior como titulo personal actual |
| Portfolio incompleto | No aplicar pesado sin case/video/README minimos |
| Datos de mercado caducos | Verificar top targets semanalmente |
| Bruto vs neto | Reservas y validacion contable |

## Fuentes

{source_table([
    (md_link(PDF_ROOT / "audit_findings.md", "_pdf_biblia/audit_findings.md"), "Auditoria generada"),
    (source("16_final_consistency_audit_and_gap_register.md"), "Auditoria previa"),
    (md_link(OBSIDIAN_DIR / "06_CANONICAL_FACTS_AND_ERRATA.md", "Canonical facts and errata"), "Canon Obsidian"),
])}
""",
        )
    )

    chapters.append(
        chapter_tex(
            "10_research_source_map.tex",
            "Research y mapa de fuentes",
            build_source_index(sources, research_pdfs, historic_index),
        )
    )

    chapters.append(
        chapter_tex(
            "11_portfolio_web_bridge.tex",
            "Puente al portafolio web",
            f"""
La carpeta `portfolio_web` queda reservada para la implementacion futura de la web publica. Esta fase no implementa la web; deja el puente documental y las reglas de coherencia.

## Inputs obligatorios para Codex

{source_table([
    (md_link(OBSIDIAN_DIR / "04_WEB_PORTFOLIO_PROMPT.md", "_obsidian/04_WEB_PORTFOLIO_PROMPT.md"), "Prompt principal"),
    (source("20_portfolio_copy_and_site_structure.md"), "Arquitectura/copy web"),
    (source("08B_twinsight_case_study_final_structure.md"), "Case study final"),
    (source("21B_twinsight_demo_video_final_plan.md"), "Video/demo plan"),
    (source("19B_github_readme_twinsight_final.md"), "README TwinSight"),
])}

## Reglas para la web

- TwinSight X500 debe ser la senal principal del primer viewport.
- No inventar links, metricas ni empleadores.
- No afirmar EU work authorization actual.
- No llamar a TwinSight full production digital twin.
- Usar placeholders explicitos hasta que existan URLs publicas.

Carpeta puente: {md_link(ROOT / "portfolio_web", "portfolio_web")}
""",
        )
    )

    return chapters


def write_obsidian_editorial_note() -> None:
    write(
        OBSIDIAN_DIR / "09_BIBLIA_EDITORIAL.md",
        f"""---
status: current
type: pdf-editorial
last_updated: {datetime.now().strftime("%Y-%m-%d")}
tags:
  - pdf
  - editorial
  - current
---

# Biblia editorial

PDF final:

- [[_pdf_biblia/dist/{PDF_BASENAME}.pdf]]

Este PDF es la version editorial, deduplicada y legible de la biblia profesional. No reemplaza los `.md` fuente; los organiza y enlaza.

## Artefactos relacionados

- [[06_CANONICAL_FACTS_AND_ERRATA]]
- [[07_CONSISTENCY_AUDIT]]
- [[08_PDF_SOURCE_MAP]]
- [[05_RESEARCH_INDEX]]
- [[04_WEB_PORTFOLIO_PROMPT]]
- [[tracker_summary]]

## Build

Script:

```powershell
& "C:\\Users\\alexw\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\python\\python.exe" "_pdf_biblia\\scripts\\build_editorial_biblia.py"
```
""",
    )


def write_main_tex(chapter_paths: list[str]) -> None:
    inputs = "\n".join(rf"\input{{{path}}}" for path in chapter_paths)
    generated = datetime.now().strftime("%Y-%m-%d %H:%M")
    main = rf"""\documentclass[11pt,openany]{{book}}
\usepackage[a4paper,margin=2.2cm]{{geometry}}
\usepackage{{fontspec}}
\setmainfont{{Arial}}
\setmonofont{{Consolas}}
\usepackage{{microtype}}
\usepackage{{xcolor}}
\definecolor{{Accent}}{{HTML}}{{1F4E79}}
\definecolor{{SoftAccent}}{{HTML}}{{EAF2F8}}
\usepackage{{longtable}}
\usepackage{{booktabs}}
\usepackage{{array}}
\usepackage{{pdflscape}}
\usepackage{{fancyhdr}}
\usepackage{{fvextra}}
\usepackage{{hyperref}}
\usepackage{{bookmark}}
\usepackage{{enumitem}}
\hypersetup{{
  unicode=true,
  colorlinks=true,
  linkcolor=Accent,
  urlcolor=Accent,
  citecolor=Accent,
  pdftitle={{Biblia Profesional Editorial Alexander Woodcock Salomon}},
  pdfauthor={{Alexander Woodcock Salomon}},
  pdfsubject={{Estrategia profesional, investigacion de mercado y empleabilidad}},
  pdfcreator={{Codex + XeLaTeX}}
}}
\pagestyle{{fancy}}
\fancyhf{{}}
\fancyhead[L]{{\textcolor{{Accent}}{{Biblia Profesional}}}}
\fancyhead[R]{{\small\leftmark}}
\fancyfoot[C]{{\thepage}}
\setlength{{\parskip}}{{0.58em}}
\setlength{{\parindent}}{{0pt}}
\setlength{{\headheight}}{{15pt}}
\emergencystretch=3em
\sloppy
\renewcommand{{\arraystretch}}{{1.18}}
\setlist{{itemsep=0.18em, topsep=0.35em}}
\DefineVerbatimEnvironment{{mdcode}}{{Verbatim}}{{fontsize=\scriptsize,breaklines=true,breakanywhere=true}}

\begin{{document}}

\begin{{titlepage}}
\pagecolor{{SoftAccent}}
\centering
\vspace*{{2.2cm}}
{{\Huge\bfseries\textcolor{{Accent}}{{Biblia Profesional Editorial}}\par}}
\vspace{{0.35cm}}
{{\LARGE Alexander Woodcock Salomon\par}}
\vspace{{1.2cm}}
{{\Large Estrategia de empleabilidad, mercado, portafolio y ejecucion\par}}
\vspace{{1.4cm}}
{{\large Version editorial v1\par}}
{{\large Generado: {generated}\par}}
\vfill
{{\large Real-Time 3D Developer / Unity Technical Artist\par}}
{{\small Interactive technical visualization, CAD-to-realtime optimization, Unity WebGL deployment\par}}
\vspace{{1cm}}
{{\small Fuente viva: \texttt{{E:\textbackslash{{}}Laboral}}\par}}
\clearpage
\nopagecolor
\end{{titlepage}}

\frontmatter
\tableofcontents
\clearpage

\mainmatter
{inputs}

\end{{document}}
"""
    write(TEX_DIR / "main.tex", main)


def compile_pdf() -> bool:
    xelatex = shutil.which("xelatex") or r"C:\Users\alexw\AppData\Local\Programs\MiKTeX\miktex\bin\x64\xelatex.exe"
    cmd = [
        xelatex,
        "-interaction=nonstopmode",
        "-halt-on-error",
        "-output-directory",
        str(BUILD_DIR),
        "main.tex",
    ]
    ok = True
    for i in range(3):
        proc = subprocess.run(cmd, cwd=TEX_DIR, capture_output=True, text=True, encoding="utf-8", errors="replace")
        (BUILD_DIR / f"xelatex_pass_{i+1}.log").write_text(proc.stdout + "\n" + proc.stderr, encoding="utf-8")
        if proc.returncode != 0:
            ok = False
            break
    built = BUILD_DIR / "main.pdf"
    if ok and built.exists():
        shutil.copy2(built, DIST_DIR / f"{PDF_BASENAME}.pdf")
        return True
    return False


def validate(sources, research_pdfs, historic_index, findings) -> dict:
    pdf_path = DIST_DIR / f"{PDF_BASENAME}.pdf"
    main_tex = (TEX_DIR / "main.tex").read_text(encoding="utf-8")
    all_tex = main_tex + "\n" + "\n".join(p.read_text(encoding="utf-8") for p in MODULES_DIR.glob("*.tex"))
    validation = {
        "root_markdown": sum(1 for s in sources if s.section == "root"),
        "research_markdown": sum(1 for s in sources if s.section == "research"),
        "research_pdfs": len(research_pdfs),
        "historic_index": len(historic_index),
        "audit_findings": len(findings),
        "pdf_exists": pdf_path.exists(),
        "pdf_bytes": pdf_path.stat().st_size if pdf_path.exists() else 0,
        "has_passport_2028": "2028" in all_tex,
        "has_no_current_eu_rule": "No hay autorizacion laboral UE actual" in all_tex or "No claim de EU work authorization" in all_tex,
        "has_toc": "\\tableofcontents" in main_tex,
        "has_source_map": "Source map completo" in all_tex,
        "has_web_bridge": "Puente al portafolio web" in all_tex,
    }
    validation["passed"] = all(
        [
            validation["root_markdown"] >= 40,
            validation["research_markdown"] >= 10,
            validation["research_pdfs"] >= 1,
            validation["historic_index"] >= 1,
            validation["audit_findings"] >= 8,
            validation["pdf_exists"],
            validation["pdf_bytes"] > 50_000,
            validation["has_passport_2028"],
            validation["has_no_current_eu_rule"],
            validation["has_toc"],
            validation["has_source_map"],
            validation["has_web_bridge"],
        ]
    )
    return validation


def main() -> None:
    ensure_dirs()
    sources, research_pdfs, historic_index = raw.collect_sources()
    findings = raw.build_audit(sources, historic_index)
    raw.write_manifest(sources, research_pdfs, historic_index)
    raw.write_audit_files(findings)
    raw.write_obsidian_notes(sources, research_pdfs, historic_index, findings)
    raw.write_portfolio_bridge()
    write_obsidian_editorial_note()
    chapter_paths = build_editorial_chapters(sources, findings, research_pdfs, historic_index)
    write_main_tex(chapter_paths)
    compiled = compile_pdf()
    validation = validate(sources, research_pdfs, historic_index, findings)
    validation["compiled"] = compiled
    validation["pdf"] = str(DIST_DIR / f"{PDF_BASENAME}.pdf")
    write(PDF_ROOT / "editorial_validation.json", json.dumps(validation, ensure_ascii=False, indent=2))
    print(json.dumps(validation, ensure_ascii=False, indent=2))
    if not compiled or not validation["passed"]:
        raise SystemExit(2)


if __name__ == "__main__":
    main()
