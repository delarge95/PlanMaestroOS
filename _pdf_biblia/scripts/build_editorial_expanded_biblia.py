from __future__ import annotations

import importlib.util
import json
import re
import shutil
import subprocess
import sys
from datetime import datetime
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[2]
PDF_ROOT = ROOT / "_pdf_biblia"
TEX_DIR = PDF_ROOT / "tex_editorial_expanded"
BUILD_DIR = PDF_ROOT / "build_editorial_expanded"
DIST_DIR = PDF_ROOT / "dist"
CHAPTERS_DIR = TEX_DIR / "chapters"
OBSIDIAN_DIR = ROOT / "_obsidian"
PDF_BASENAME = "Biblia_Profesional_Alexander_EDITORIAL_AMPLIADA_v2"

RAW_SCRIPT = PDF_ROOT / "scripts" / "build_biblia.py"
spec = importlib.util.spec_from_file_location("raw_biblia", RAW_SCRIPT)
raw = importlib.util.module_from_spec(spec)
assert spec.loader is not None
sys.modules[spec.name] = raw
spec.loader.exec_module(raw)

BASE_INLINE_TEX = raw.inline_tex
PLAIN_URL_RE = re.compile(r"https?://[^\s<>)\]]+")


def inline_tex_with_breakable_urls(text: str) -> str:
    parts: list[str] = []
    pos = 0
    for match in PLAIN_URL_RE.finditer(text):
        url = match.group(0)
        trailing = ""
        while url and url[-1] in ".,;:":
            trailing = url[-1] + trailing
            url = url[:-1]
        if match.start() > pos:
            parts.append(BASE_INLINE_TEX(text[pos : match.start()]))
        parts.append(r"\url{" + raw.tex_url(url) + "}")
        if trailing:
            parts.append(BASE_INLINE_TEX(trailing))
        pos = match.end()
    if pos < len(text):
        parts.append(BASE_INLINE_TEX(text[pos:]))
    return "".join(parts)


raw.inline_tex = inline_tex_with_breakable_urls


def ensure_dirs() -> None:
    for path in [TEX_DIR, BUILD_DIR, DIST_DIR, CHAPTERS_DIR, OBSIDIAN_DIR]:
        path.mkdir(parents=True, exist_ok=True)


def write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8", newline="\n")


def md_link(path: Path, label: str | None = None) -> str:
    label = label or raw.rel(path)
    return f"[{label}]({raw.file_url(path)})"


def source(path_name: str, label: str | None = None) -> str:
    return md_link(ROOT / path_name, label or path_name)


def source_table(rows: list[tuple[str, str]]) -> str:
    return raw.markdown_table(["Fuente", "Uso"], [[a, b] for a, b in rows])


def chapter_tex(filename: str, title: str, md: str) -> str:
    tex = "\\chapter{" + raw.inline_tex(title) + "}\n\n"
    tex += raw.markdown_to_tex(md.strip() + "\n", title)
    path = CHAPTERS_DIR / filename
    write(path, tex.rstrip() + "\n")
    return f"chapters/{filename}"


def pipe_table(headers: list[str], rows: list[list[Any]]) -> str:
    return raw.markdown_table(headers, rows)


def bullets(items: list[str]) -> str:
    return "\n".join(f"- {item}" for item in items)


def numbered(items: list[str]) -> str:
    return "\n".join(f"{i}. {item}" for i, item in enumerate(items, start=1))


def build_chapters(sources: list[Any], findings: list[Any], research_pdfs: list[dict[str, Any]], historic_index: list[dict[str, Any]]) -> list[str]:
    generated = datetime.now().strftime("%Y-%m-%d %H:%M")
    paths: list[str] = []

    paths.append(
        chapter_tex(
            "01_guia_decision.tex",
            "Guia de lectura y mapa de decision",
            f"""
# Proposito

Esta es la version editorial ampliada de la biblia profesional. No sustituye la biblia completa de 1000+ paginas; la convierte en un documento de trabajo que conserva la informacion accionable sin obligar a abrir cada modulo fuente. La version breve servia como brujula; esta version debe servir como manual operativo.

## Que resuelve esta version

| Necesidad | Respuesta en esta version |
|---|---|
| No perder informacion importante | Incluye rutas de estudio, salarios, contratos, portfolio, LinkedIn, GitHub, CV, empresas, aplicaciones, entrevistas y ofertas |
| Evitar repetirlo todo | Condensa patrones y listas extensas en matrices utiles |
| Mantener trazabilidad | Cada capitulo lista fuentes raiz y research |
| Evitar claims peligrosos | Mantiene reglas canonicas de pasaporte, UE, seniority y TwinSight |
| Usar la biblia completa solo cuando haga falta | La biblia completa queda como archivo de auditoria y detalle granular |

## Documentos vivos

| Documento | Uso |
|---|---|
| Editorial breve | Resumen ejecutivo rapido |
| Editorial ampliada | Documento principal para decidir y ejecutar |
| Biblia completa | Archivo de revision exhaustiva, listas largas y auditoria de detalle |
| Obsidian | Navegacion viva, tracker, source map y errata |
| Tracker/hojas | Estado operativo de aplicaciones y metricas |

## Reglas de verdad

| Tema | Regla actual |
|---|---|
| Pasaporte portugues | Esperado alrededor de 2028; no es autorizacion laboral UE actual |
| EU work authorization | No afirmar autorizacion UE actual |
| Perfil publico | Real-Time 3D Developer / Unity Technical Artist |
| Proyecto flagship | TwinSight X500 |
| TwinSight | Technical visualization / assembly inspection prototype; no digital twin industrial completo sin IoT/live telemetry |
| ARA | Python automation / AI tooling prototype; ruta secundaria |
| Cursos | Portfolio-first, course-assisted; no listar cursos como credenciales si no hay certificado |
| Salario | USD 1.5k piso inicial, USD 3k objetivo 3-6 meses, USD 6k upside 12-24 meses |

## Como usarla semanalmente

{numbered([
    "Revisar el capitulo de ejecucion para elegir enfoque semanal.",
    "Escoger 5-15 targets segun el capitulo de empresas y scoring.",
    "Actualizar portfolio/GitHub/LinkedIn si algun requisito esta incompleto.",
    "Aplicar y registrar cada movimiento en tracker.",
    "Usar entrevista/oferta como checklists cuando aparezca traction.",
    "Revisar auditoria si un claim publico genera duda.",
])}

## Fuentes base

{source_table([
    (source("15_final_integrated_strategy.md"), "Estrategia integrada"),
    (source("16_final_consistency_audit_and_gap_register.md"), "Auditoria de claims"),
    (source("27_strategy_scenarios_conservative_balanced_aggressive.md"), "Escenarios"),
    (md_link(PDF_ROOT / "complete_validation.json", "complete_validation.json"), "Cobertura de corpus completo"),
])}

Generado: {generated}
""",
        )
    )

    paths.append(
        chapter_tex(
            "02_perfil_posicionamiento.tex",
            "Perfil canonico, narrativa y roles objetivo",
            f"""
# Perfil canonico

Alexander debe presentarse como un perfil de interseccion: desarrollo Unity/WebGL, visualizacion tecnica, optimizacion CAD-to-realtime, interaccion 3D, documentacion tecnica y capacidad de convertir un prototipo academico en prueba laboral. El perfil no necesita parecer senior; necesita parecer coherente, verificable y util.

## Identidad profesional

| Dimension | Formulacion recomendada |
|---|---|
| Titulo publico principal | Real-Time 3D Developer / Unity Technical Artist |
| Subtitulo | Interactive technical visualization, CAD-to-realtime optimization, Unity WebGL deployment |
| Base laboral actual | Colombia, remoto internacional contractor/B2B |
| Evidencia principal | TwinSight X500 |
| Evidencia secundaria | ARA Framework, Blender technical art breakdown, AI-assisted tooling |
| Rutas a evitar como identidad principal | Full-stack generalista, 3D artist generalist, Senior Technical Artist, Production AI Engineer |

## Narrativa de 30 segundos

```text
I build interactive real-time 3D experiences in Unity and WebGL, with a focus on technical visualization, CAD-to-realtime optimization and usable inspection workflows. My flagship project is TwinSight X500, a Unity WebGL prototype for drone assembly inspection that turns CAD/manufacturer geometry and technical documentation into an optimized browser-based 3D viewer with component selection, exploded view, clipping tools, visualization modes and usability/workload evaluation.
```

## Familias de rol

| Familia | Prioridad | Por que encaja | Riesgo |
|---|---|---|---|
| Unity WebGL / Interactive 3D Developer | Alta inmediata | TwinSight prueba WebGL, C#, UI e interaccion | Requiere GitHub/demo claros |
| Technical Visualization Developer | Alta | Une CAD, 3D, UI tecnica y documentacion | Titulo menos comun; buscar por keywords |
| Unity Technical Artist | Alta-media | Optimiza assets, pipeline, realtime constraints | Evitar lectura AAA senior |
| XR / Simulation Developer | Media | Cerca de training, inspection, industrial visualization | Puede exigir hardware/Unity senior |
| Digital Twin Visualization | Media futura | Buen upside industrial | No afirmar IoT/live telemetry si no existe |
| Python Automation / AI Tooling | Secundaria | ARA puede demostrar tooling y research automation | No desplazar TwinSight |
| 3D Artist / Blender Generalist | Fallback | Apoya ArtStation/visual breakdown | Menor salario y menor fit principal |

## Keywords seguras

| Cluster | Keywords |
|---|---|
| Unity/WebGL | Unity, C#, WebGL, URP, UI Toolkit, runtime interaction, browser deployment |
| Technical visualization | technical visualization, assembly inspection, interactive 3D, product visualization, CAD-to-realtime |
| Optimization | mesh optimization, asset preparation, Blender, performance profiling, hierarchy cleanup |
| UX/evaluation | SUS, NASA-TLX Raw, Think-Aloud, usability evaluation, workload evaluation |
| Tooling | Python automation, LangGraph, LangChain, research automation, Markdown workflows |

## Claims permitidos y prohibidos

| Permitido | Evitar |
|---|---|
| Academic/portfolio prototype | Commercial shipped product |
| CAD/manufacturer geometry optimized for realtime | Original drone CAD design |
| AI-assisted workflow under human ownership | Built everything manually without AI |
| Remote contractor/B2B from Colombia | EU work authorization now |
| Seniority by evidence, not title | Senior Technical Artist as headline |

## Fuentes

{source_table([
    (source("01_source_of_truth_profile.md"), "Fuente de verdad del perfil"),
    (source("02_market_role_fit_and_positioning.md"), "Familias de rol y posicionamiento"),
    (source("10_github_linkedin_cv_strategy.md"), "Lenguaje publico"),
    (source("17_cv_base_and_role_variants.md"), "CV por rol"),
    (source("35_interview_defense_and_technical_screen_system.md"), "Defensa oral del perfil"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "03_mercado_salario_contratos.tex",
            "Mercado, salarios, contratos y dinero real",
            f"""
# Lectura de mercado

El mercado no se debe leer como una sola cifra salarial. Para Alexander, una cifra solo importa si combina rol, seniority, ubicacion, modalidad contractual, work authorization y capacidad real de cobro desde Colombia.

## Metas por horizonte

| Horizonte | Meta bruta mensual | Lectura |
|---|---:|---|
| 0-3 meses | USD 1.5k-2.5k | Entrada viable si preserva direccion Unity/3D |
| 3-6 meses | USD 3k | Objetivo operativo con portfolio, GitHub, LinkedIn y outreach listos |
| 6-12 meses | USD 3k-4.5k | Buen contrato nearshore/global si hay traction |
| 12-24 meses | USD 6k+ | Upside con mayor prueba, nicho industrial/XR/simulation o rutas UE/US mas maduras |

## Benchmarks utiles

| Categoria | Rango / dato | Accesibilidad actual | Uso estrategico |
|---|---:|---|---|
| LATAM software dev payroll/EOR | USD 18k-28k junior, 35k-48k mid, 55k-70k senior | Alta-media | Contexto para USD 1.5k-4k |
| Middle Unity Colombia contractor | USD 27-35/h | Media | Proxy fuerte para Unity/WebGL contractor |
| US Technical Artist | USD 127k-152k/year proxy | Baja inmediata | Upside, no objetivo base |
| Digital Twin / Simulation US | ~USD 138k-139k/year proxy | Media futura | Ruta 12-24 meses |
| Python remote LATAM | USD 30k-62k/year | Media | Ruta secundaria si ARA madura |
| 3D Artist US | USD 41k-142k/year amplio | Baja como foco | Fallback, no eje |
| LATAM remoto senior | ~USD 3k-5k/mes | Media | Rango de negociacion B |
| US remoto contractor senior | ~USD 6k-12k/mes | Baja-media | Solo con fit fuerte y compliance |
| Alemania onsite Unity | ~USD 4.5k-6.5k/mes | Futura | Relevante con autorizacion/residencia |
| Portugal/Espana onsite | ~USD 2.5k-4k/mes | Futura | No necesariamente mejor que Colombia remoto |

## Modalidades de contrato

| Modalidad | Ventaja | Riesgo | Uso para Alexander |
|---|---|---|---|
| Direct contractor / B2B | Mayor acceso global, velocidad, posible USD | Impuestos, seguridad social, pagos, terminacion | Default actual |
| EOR employee | Mas formalidad y beneficios | Menor control, disponibilidad por pais, costo para empresa | Bueno si existe Colombia/EOR viable |
| Local employee Colombia | Estabilidad y cumplimiento local | Menor upside internacional | Fallback cashflow |
| Marketplace contractor | Acceso a clientes | Comision, competencia, tarifas comprimidas | Complemento |
| Freelance project | Portfolio + ingreso puntual | Scope creep, pagos inciertos | Bueno con contrato claro |
| EU employee | Beneficios y estabilidad UE | Requiere autorizacion/pasaporte/residencia | Futuro, no actual |

## Contractor readiness

Antes de negociar como contractor, debe estar claro:

{bullets([
    "RUT/actividad economica y ruta de facturacion internacional.",
    "Obligaciones de seguridad social como independiente.",
    "Diferencia entre bruto, neto, reservas e impuestos.",
    "Moneda, plataforma de pago, comisiones y tasa de cambio.",
    "Contrato escrito con alcance, entregables, propiedad intelectual y terminacion.",
    "NDA razonable; no competencia limitada en tiempo y alcance.",
    "No prometer asesoria fiscal en entrevistas; remitir a contador/abogado si hace falta.",
])}

## Criterios de aceptacion por tipo de oferta

| Tipo | Aceptar si | Rechazar si |
|---|---|---|
| Cashflow inicial | USD 1.5k-2.5k, remoto, no destruye portfolio | Paga muy bajo y consume todo el tiempo |
| Buen primer contrato | USD 2.5k-4k, rol Unity/3D, contrato claro | Exige seniority no real o exclusividad abusiva |
| Alto upside | USD 4k-6k+, fit tecnico fuerte | Requiere work authorization imposible |
| Aprendizaje estrategico | Menor pago pero abre TwinSight/Unity/XR | No deja evidencia publica ni mejora rol |

## Negociacion de bandas

| Prioridad empresa | Rango inicial conversable | Estrategia |
|---|---|---|
| A / alto fit internacional | No abrir con minimo; anclar en valor y rango mercado | Defender CAD-to-realtime, Unity WebGL, evaluacion |
| B / nearshore fuerte | USD 3k-5k si el rol es full-time contractor | Pedir beneficios: herramientas, cursos, PTO, horario |
| C / fallback | USD 1.5k-3k segun cashflow | Asegurar que no mate portfolio ni aplicaciones |

## Fuentes

{source_table([
    (source("03_salary_benchmark_and_remote_colombia.md"), "Benchmark salarial principal"),
    (source("13_interview_negotiation_and_offer_risk.md"), "Negociacion y riesgo"),
    (source("24_offer_evaluation_scorecard.md"), "Scorecard de oferta"),
    (source("Research/deep-research-report_03.md"), "Contractor vs employee y pagos"),
    (source("Research/deep-research-report_04.md"), "Benchmark remoto Colombia"),
    (source("Research/deep-research-report_13.md"), "Rangos y clausulas"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "04_movilidad_idiomas.tex",
            "Movilidad, idiomas y legalidad publica",
            f"""
# Regla central

La movilidad UE es una ventaja futura, no una autorizacion actual. La estrategia inmediata es Colombia remoto contractor/B2B. Portugal y Alemania son rutas de mediano/largo plazo y deben entrar como plan, no como claim operativo.

## Estados de movilidad

| Estado | Trabajo permitido | Mensaje correcto |
|---|---|---|
| Colombia actual | Remoto internacional contractor/B2B si contrato lo permite | Based in Colombia, available for remote contractor/B2B work |
| Pasaporte portugues pendiente | No otorga derecho actual | Portuguese passport/citizenship expected around 2028; not current EU work authorization |
| Pasaporte portugues emitido | Ciudadano UE con derechos generales UE/EEA | Solo afirmarlo cuando exista legalmente |
| Alemania por matrimonio/residencia | Posible ruta futura | No prometer hasta tener residencia/permiso |
| Blue Card / empleo local UE | Condicionado a oferta, salario, titulo y reglas | Ruta alternativa futura |

## Wording publico seguro

```text
I am currently based in Colombia and available for remote international contractor/B2B roles. I expect a Portuguese passport in the medium term, which may support future EU mobility, but I do not currently claim EU work authorization.
```

## Idiomas por ROI

| Idioma | Horizonte | Objetivo | Regla |
|---|---|---|---|
| Ingles | Inmediato | Pulir entrevista, LinkedIn, CV, portfolio | Prioridad critica; no debe competir con portfolio |
| Aleman | 6-24 meses | A1->A2/B1 si Alemania gana traccion | Alto ROI de integracion, bajo ROI inmediato remoto |
| Portugues | 6-24 meses | A1/B1 funcional si Portugal se activa | Util por vida/localidad, no reemplaza ingles |
| Frances/Japones | Futuro opcional | Solo por oportunidad especifica | No prioritario |

## Plan de idiomas

| Periodo | Ingles | Aleman | Portugues |
|---|---|---|---|
| 0-30 dias | Pitch, answers, LinkedIn/About, demo script | No intensivo | No intensivo |
| 31-90 dias | Mock interviews semanales | A1 ligero si energia disponible | Vocabulario basico pasivo |
| 3-6 meses | Entrevistas tecnicas y salary talk | A1/A2 si Alemania aparece | A1 funcional |
| 6-12 meses | C1 operativo publico | A2/B1 si ruta Alemania viva | A2/B1 si Portugal viva |
| 12-24 meses | Mantener | B1/B2 si reubicacion | B1/B2 si Portugal |

## Check legal antes de publicar o aplicar

{bullets([
    "No usar 'authorized to work in EU' hasta que exista derecho legal.",
    "No usar pasaporte futuro como filtro de elegibilidad actual.",
    "Separar remote contractor desde Colombia de empleo local UE.",
    "Validar impuestos/residencia con profesional antes de mudanza o contrato grande.",
    "Si un rol pide US/EU work authorization now, descartarlo salvo sponsor claro.",
])}

## Fuentes

{source_table([
    (source("04_eu_portugal_germany_mobility_strategy.md"), "Movilidad UE/Portugal/Alemania"),
    (source("05_language_strategy_and_roi.md"), "ROI de idiomas"),
    (source("10_github_linkedin_cv_strategy.md"), "Lenguaje publico seguro"),
    (source("35_interview_defense_and_technical_screen_system.md"), "Respuesta de autorizacion"),
    (source("Research/deep-research-report_05.md"), "Plan de idiomas 3/6/12/24"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "05_educacion_cursos_roadmaps.tex",
            "Educacion, cursos, certificaciones y caminos de estudio",
            f"""
# Principio

La estrategia educativa debe ser portfolio-first, course-assisted, certification-light, master-optional and PhD-negative durante los proximos 24 meses. El valor no esta en consumir cursos; esta en convertirlos en evidencia publica.

## Jerarquia de senales

| Senal | Valor laboral |
|---|---|
| TwinSight case study + demo + GitHub | Maximo |
| Proyecto tecnico adicional visible | Alto |
| Demo reel / walkthrough | Alto |
| Certificacion reconocida | Medio si acompana proyecto |
| Curso sin certificado | Bajo si no produce output; alto si mejora un asset |
| Lista larga de cursos | Debil o incluso ruido |
| Master | Alto solo si alinea movilidad, beca, especializacion y costo |
| PhD | No recomendado salvo giro a investigacion/R&D |

## Inventario de cursos

El inventario `Courses 2025.xlsx` contiene alrededor de 157 filas utilizables. Debe tratarse como biblioteca de produccion, no como curriculum lineal. Hay cursos de Rebelway, Coloso, Gnomon, Blender, Houdini, Unreal, CFX, ZBrush, compositing, filmmaking, DaVinci, AI/web y otros. El riesgo principal es dispersion.

## Tiers de cursos

| Tier | Cursos/areas | Uso |
|---|---|---|
| 0 - convertir ya en evidencia | CG Cookie HUMAN, Blender-to-Web, DaVinci Resolve | Breakdown visual, assets para portfolio, edicion demo |
| 1 - soporte directo TwinSight | Blender optimization, hard surface, UI/technical breakdown, WebGL content | Mejorar caso flagship |
| 2 - especializacion util | Houdini fundamentals, procedural assets, realtime FX | Segundo activo technical art |
| 3 - largo plazo | Character anatomy, CFX, compositing, filmmaking | Solo si no bloquea empleabilidad |
| Ignorar por ahora | Cursos sin salida publica o demasiado alejados de Unity/WebGL | Evitar consumo pasivo |

## Rebelway

| Curso/area | Valor | Condicion |
|---|---|---|
| Houdini Fundamentals | Alto para pipeline/procedural mindset | Hacer despues de paquete TwinSight publico |
| Realtime FX | Medio-alto para Technical Artist | Convertir en breakdown realtime, no solo certificado |
| Procedural/city/assets | Medio | Usar si produce demo pequeno |
| Long fluid/pyro/CFX | Bajo inmediato | Solo si estrategia vira a FX TD/VFX |

Rebelway no es prioridad antes de empleo-materials. Su valor esta en generar artefactos de portfolio: breakdowns, tools, realtime FX, procedural pipeline, no en coleccionar certificados.

## Unity certification

Unity Certified Associate: Game Developer puede ayudar como filtro recruiter, pero solo despues de tener portfolio y demo. Prepararla antes de TwinSight/GitHub/LinkedIn seria una mala asignacion de energia.

| Usarla si | No usarla si |
|---|---|
| El portfolio ya esta presentable | Retrasa TwinSight |
| Se puede preparar en 2-4 semanas | Cuesta demasiado para ROI incierto |
| Aumenta filtros ATS Unity | Sustituye proyectos |
| El examen refuerza C#/Unity fundamentals | Solo sirve como adorno |

## Roadmap de estudio 0-24 meses

| Periodo | Objetivo | Estudio permitido | Output obligatorio |
|---|---|---|---|
| 0-30 dias | Cerrar proof package | Solo blockers de TwinSight, GitHub, demo | Case study, README, demo, CV/LinkedIn |
| 31-90 dias | Aplicar y mejorar conversion | C#, Unity WebGL, profiling, UI Toolkit, Blender optimization | Mejoras visibles en TwinSight |
| 3-6 meses | Segundo proof tecnico | Houdini fundamentals o small technical-art demo | Mini breakdown publico |
| 6-12 meses | Profundizar nicho | XR/simulation, procedural tools, Python automation | Segundo proyecto o ARA limpio |
| 12-24 meses | Especializacion o master | Master/Game Tech/XR/CG si hay beca/movilidad | Decision formal con costo/ROI |

## Masters y posgrados

| Ruta | Programas destacados | Lectura |
|---|---|---|
| Technical Art / Games VFX | Abertay MSc Technical Art & VFX, Coventry/Escape, Bournemouth NCCA | Mejor fit si quiere TA/FX/pipeline |
| Game Technology / applied games | BUas Breda Game Technology, USC Game Dev | Bueno para simulacion/game tech; vigilar costo |
| CG / Vision / Imaging | UCL CG Vision Imaging, ETH Visual Computing | Prestigioso, mas teorico/R&D |
| XR / HCI | Lund VR & AR, EIT HCI/XR, IMLEX | Bueno con movilidad UE y XR |
| Autonomous systems / simulation | EIT Autonomous Systems | Conecta industria 4.0/digital twin, pero menos directo |

## Becas y financiamiento

| Beca/programa | Valor | Riesgo |
|---|---|---|
| DAAD STEM master | Alemania, estipendio, seguro, viaje | Competitivo, requiere idioma/requisitos |
| Erasmus Mundus IMLEX | XR/imaging, movilidad, beca fuerte | Muy competitivo |
| Erasmus/IPCV AI vision | Vision/AI, estipendio generoso | Mas AI/vision que Unity |
| FCT Portugal PhD | ~1901 EUR/mes para doctorado | Solo si ruta PhD real |
| DAAD research grants | Estancias doctorales | No relevante sin proyecto doctoral |

## Decision master vs trabajo

| Pregunta | Si la respuesta es no |
|---|---|
| Aumenta acceso a UE o visa? | No priorizar |
| Tiene beca o costo manejable? | No priorizar |
| Produce portfolio o practicas? | No priorizar |
| Alinea technical visualization/XR/simulation? | No priorizar |
| Mejora salario mas que 12 meses de experiencia? | No priorizar |

## Fuentes

{source_table([
    (source("06_education_courses_rebelway_masters_phd.md"), "Estrategia educativa principal"),
    (source("Research/deep-research-report_06.md"), "Cursos Unity/RT3D"),
    (source("Research/deep-research-report_C3.md"), "Masters comparados"),
    (source("Research/deep-research-report_C4.md"), "Becas y financiamiento"),
    (source("05_language_strategy_and_roi.md"), "Idiomas"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "06_portafolio_twinsight_ara.tex",
            "Portafolio, TwinSight, ARA y prueba tecnica",
            f"""
# Funcion del portafolio

El portafolio debe convertir una historia academica dispersa en evidencia laboral concentrada. No basta con decir Unity/WebGL: hay que demostrar pipeline, decisiones, interaccion, optimizacion, evaluacion y limitaciones.

## Jerarquia de proyectos

| Prioridad | Proyecto | Funcion | Estado publico ideal |
|---|---|---|---|
| 1 | TwinSight X500 | Flagship laboral | Case study + GitHub + demo + video |
| 2 | ARA Framework | Tooling/AI automation secundario | README limpio + arquitectura + limites |
| 3 | Blender portrait / HUMAN | Technical art visual proof | Breakdown ArtStation/portfolio |
| 4 | AI News Aggregator | Fallback Python/web | Solo si funcional y documentado |
| 5 | FitApp/otros | Bajo | No liderar perfil |

## TwinSight: estructura del caso

| Seccion | Contenido |
|---|---|
| Hero | Que es, rol, demo/video, stack, CTA |
| Problem | 2D assembly documentation limita comprension espacial |
| Solution | Unity WebGL viewer con inspeccion interactiva |
| Pipeline | CAD/manufacturer docs -> Blender cleanup -> Unity -> WebGL |
| Features | selection, exploded view, clipping/cross-section, visual modes, info panels |
| Optimization | 6.5M+ source CAD routes -> 95,617 optimized triangles |
| Evaluation | 12 participants, 96 task-condition records, SUS, NASA-TLX Raw, Think-Aloud |
| Results | SUS 91.88; NASA-TLX Raw 8.69 viewer vs 19.89 2D support |
| Technical decisions | Unity WebGL, C#, URP, UI Toolkit, performance constraints |
| Limitations | Academic prototype, not production telemetry digital twin |
| Next steps | LODs, import validation, metadata schema, profiling, automated checks |

## Media obligatoria

| Asset | Uso |
|---|---|
| 90-second demo | Recruiter/reviewer overview |
| 15-30s teaser | LinkedIn/social |
| Feature GIFs | Case study scanning |
| Pipeline diagram | Technical credibility |
| Optimization before/after | CAD-to-realtime proof |
| Metrics card | SUS/NASA-TLX evidence |
| GitHub README images | Technical reviewer path |
| ArtStation breakdown | Visual/pipeline credibility |

## ARA positioning

ARA es valioso si se presenta como prototipo de automatizacion, no como producto AI enterprise.

| Correcto | Incorrecto |
|---|---|
| Python-based research automation prototype | Production AI research platform |
| LangGraph/LangChain workflow exploration | Autonomous research scientist |
| Markdown/report generation tooling | Enterprise-ready AI product |
| Secondary portfolio route | Primary employability identity |

## Portfolio homepage

| Bloque | Debe comunicar |
|---|---|
| Hero | Real-Time 3D / Unity TA + TwinSight |
| Featured case | TwinSight con demo y metrics |
| Work grid | TwinSight, ARA, Blender breakdown |
| About | Interseccion Unity, WebGL, CAD-to-realtime, automation |
| Contact | Remote contractor/B2B from Colombia |

## Reglas de estilo de portfolio

{bullets([
    "Lead with demo, problem, solution and features; move methodology lower.",
    "No usar lenguaje de producto comercial si fue prototipo academico.",
    "No ocultar limitaciones; usarlas como senal de criterio tecnico.",
    "Cada screenshot debe explicar una decision, no solo verse bonito.",
    "Cada proyecto debe tener next steps y productionization plan.",
])}

## Fuentes

{source_table([
    (source("07_portfolio_strategy_and_project_architecture.md"), "Arquitectura de portafolio"),
    (source("08_twinsight_x500_case_study.md"), "Caso TwinSight"),
    (source("08B_twinsight_case_study_final_structure.md"), "Estructura final"),
    (source("09_ara_ai_tools_and_secondary_projects.md"), "ARA y secundarios"),
    (source("20_portfolio_copy_and_site_structure.md"), "Web/copy"),
    (source("21B_twinsight_demo_video_final_plan.md"), "Video demo"),
    (source("33_portfolio_asset_production_sprint.md"), "Produccion de assets"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "07_public_profiles.tex",
            "LinkedIn, CV, GitHub, ArtStation y demo reel",
            f"""
# Funcion de cada canal

| Canal | Rol | No debe hacer |
|---|---|---|
| CV | Pasar filtros y entrevista inicial | Contar toda la vida |
| LinkedIn | Descubrimiento, autoridad y networking | Ser biografia larga |
| GitHub | Prueba tecnica y documentacion | Ser deposito de repos rotos |
| Portfolio | Conversion visual/tecnica | Ser landing vaga |
| ArtStation | Breakdown visual/pipeline | Reemplazar GitHub/case study |
| Demo reel | Compresion audiovisual | Ocultar decisiones tecnicas |

## LinkedIn

Headline recomendado:

```text
Real-Time 3D Developer / Unity Technical Artist | Unity WebGL, CAD-to-Realtime Optimization, Interactive Technical Visualization
```

About debe tener cuatro bloques: identidad, TwinSight, skills, disponibilidad. Debe mencionar Colombia remoto contractor/B2B y no afirmar autorizacion UE actual.

Featured order:

{numbered([
    "TwinSight X500 case study",
    "TwinSight 90-second demo",
    "GitHub repository",
    "ArtStation breakdown",
    "ARA Framework only if clean",
])}

Skills order:

{bullets([
    "Unity",
    "C#",
    "WebGL",
    "Technical Art",
    "Real-Time 3D",
    "Technical Visualization",
    "CAD-to-Realtime",
    "Blender",
    "UI Toolkit",
    "Python Automation",
])}

## CV

| Variante | Uso |
|---|---|
| Real-Time 3D / Unity WebGL | Default |
| Unity Technical Artist | Roles TA/tools/optimization |
| Technical Visualization / Simulation | Industrial, CAD, digital-twin-adjacent |
| Python Automation / AI Tooling | Solo cuando ARA encaja |

Primer bullet TwinSight:

```text
Built TwinSight X500, a Unity WebGL technical visualization prototype for drone assembly inspection using Unity, C#, URP, UI Toolkit and Blender.
```

CV QA:

{bullets([
    "Una pagina ATS-friendly para aplicaciones rapidas.",
    "Links vivos a portfolio, GitHub, LinkedIn y demo.",
    "TwinSight primero.",
    "Metricas solo si estan verificadas contra tesis final.",
    "No listar cursos sin certificado como certificaciones.",
    "No usar senior como titulo principal.",
])}

## GitHub

Pinned repos:

{numbered([
    "TwinSight X500 / WebGL-Thesis-Proposal",
    "ARA Framework, solo si esta limpio",
    "Blender technical art breakdown, si existe como repo o asset page",
    "AI News Aggregator, solo si funcional",
    "Portfolio website repository",
])}

TwinSight README:

{bullets([
    "Overview recruiter-readable.",
    "Live demo / video demo.",
    "Why this project exists.",
    "Core features.",
    "Technical architecture.",
    "CAD-to-realtime pipeline.",
    "Optimization details.",
    "Evaluation and metrics.",
    "Limitations.",
    "Roadmap / production improvements.",
])}

## ArtStation / visual breakdown

ArtStation no debe ser solo beauty shots. Debe mostrar pipeline: cover, video, final screenshots, feature breakdown, CAD optimization, visual modes, tools, metrics and links.

## Demo reel

| Version | Duracion | Uso |
|---|---:|---|
| Main demo | 90-120s | Portfolio, recruiters, GitHub README |
| Teaser | 15-30s | LinkedIn/social |
| Technical walkthrough | 3-5 min | Technical reviewers / interviews |

## Launch sequence

| Dia | Accion |
|---|---|
| 1 | Upload demo, thumbnail, GitHub README/media |
| 2 | Publish portfolio case study and homepage links |
| 3 | Update LinkedIn headline, About, Featured, skills |
| 4 | Publish ArtStation breakdown |
| 5 | Update CV variants and tracker default links |
| 6 | Publish soft LinkedIn post |

## Fuentes

{source_table([
    (source("10_github_linkedin_cv_strategy.md"), "Estrategia publica"),
    (source("17_cv_base_and_role_variants.md"), "CV base y variantes"),
    (source("18_linkedin_final_rewrite.md"), "LinkedIn"),
    (source("19_github_readme_templates.md"), "README templates"),
    (source("19B_github_readme_twinsight_final.md"), "README TwinSight"),
    (source("28B_public_cv_resume_benchmark.md"), "Benchmark CV"),
    (source("28C_github_profiles_benchmark.md"), "Benchmark GitHub"),
    (source("28D_artstation_portfolio_benchmark_complete.md"), "Benchmark ArtStation"),
    (source("29B_demo_reels_benchmark.md"), "Demo reels"),
    (source("36_public_profile_launch_sequence.md"), "Launch sequence"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "08_empresas_busqueda.tex",
            "Empresas, job boards y busqueda activa",
            f"""
# Como leer targets

La lista de empresas no es una lista final de aplicacion. Es un mapa de ecosistemas. Un target solo se vuelve aplicable cuando se verifica opening actual, remote scope, contractor/payroll route y work authorization.

## Capas operativas

| Capa | Uso | Accion |
|---|---|---|
| A1 | First wave practica | Verificar openings/contactos primero |
| A2 | Alto fit, mayor friccion | Investigar despues o con movilidad mas clara |
| B1 | Fallback/volumen | Pipeline LATAM/contractor |
| C | Exploracion | Revisar mensual |
| Watchlist | No gastar energia activa | Solo si aparece rol exacto |

## A1 recomendado

| Empresa | Razon | Verificar |
|---|---|---|
| Treeview Studio | Unity/XR/digital twin fit con senal LATAM | Roles, contractor route, portfolio contact |
| Active Theory | WebGL creative tech; buen puente TwinSight | Freelance/contract, remote scope |
| UNIT9 | XR/WebGL agency | Project-based contracts |
| Resn | WebGL/interactive 3D | Remote/country limits |
| Monogrid | Interactive 3D/WebGL | EU contractor feasibility |
| 14islands | WebGL/design engineering | Contractor/project openings |
| Dogstudio / Media.Monks | Creative tech production | Tech art / WebGL roles |
| Threekit / VNTANA / Emersya / Expivi | 3D commerce/configurators | WebGL/3D product roles |
| Teravision Games / Globant Gaming | LATAM game/Unity route | Unity/XR roles, salary bands |
| BairesDev / Gorilla Logic / Lean Tech / MAS Global | Nearshore fallback | Python/tooling/Unity adjacent roles |
| SoftServe / HatchWorks AI / Avataar | XR/AI/3D commerce adjacency | LATAM eligibility and contract model |

## A2 de alto fit, alta friccion

| Empresa/tipo | Upside | Friccion |
|---|---|---|
| Unity Technologies | Brand/engine fit | seniority, location, authorization |
| Epic Games | Engine/realtime 3D | competencia y seniority |
| Bentley / Siemens / Dassault / PTC / Hexagon | Industrial digital twin/CAD | enterprise hiring, auth/local presence |
| NVIDIA Omniverse | RT3D/simulation | seniority, niche |
| Varjo / Magic Leap / Snap AR / Meta Reality Labs | XR | US/EU auth, seniority |
| Bosch / ABB / Schneider / Rockwell | Industrial automation | local hiring, engineering depth |

## Job boards y busquedas

| Fuente | Search terms | Frecuencia |
|---|---|---|
| LinkedIn Jobs | Unity Technical Artist, Real-Time 3D Developer, Technical Visualization, WebGL 3D | 2-3 veces/semana |
| Indeed / Glassdoor | Remote Unity Developer, Technical Artist, XR Developer | semanal |
| Work With Indies / Remote Game Jobs | Unity, Technical Artist, Tools | semanal |
| Wellfound | Unity, WebGL, Creative Technologist, 3D | semanal |
| Polycount / ArtStation / Discords | Technical Artist, real-time, shader/tooling | mensual/alertas |
| Company career pages | A1/A2 target exacto | semanal para A1 |

## Disqualifiers

No aplicar si el posting exige:

{bullets([
    "US/EU work authorization required now and no sponsorship.",
    "Onsite only in pais inaccesible.",
    "AAA senior Technical Artist con 5+ anos shipping experience.",
    "Pure full-stack role sin 3D/Unity/WebGL angle.",
    "Unpaid test, unpaid trial or upfront payment.",
    "Security/export controlled work incompatible with location/status.",
])}

## Protocolo de verificacion antes de aplicar

{numbered([
    "Guardar URL del rol y fecha.",
    "Marcar remote scope: worldwide, LATAM, Colombia, US-only, EU-only, hybrid.",
    "Identificar modalidad: employee, EOR, contractor, freelance, unknown.",
    "Identificar authorization requirement.",
    "Elegir portfolio angle: TwinSight, ARA, Blender, fallback Python.",
    "Registrar contacto/recruiter si existe.",
    "Decidir Apply / Outreach / Track / Discard.",
])}

## Fuentes

{source_table([
    (source("11_company_targets_job_boards_recruiters.md"), "Mapa de empresas"),
    (source("30_live_job_postings_market_snapshot.md"), "Snapshot de vacantes"),
    (source("31_application_targeting_matrix_and_search_protocol.md"), "Matriz y protocolo"),
    (source("34_weekly_application_execution_system.md"), "Sistema semanal"),
    (source("Research/deep-research-report_11.md"), "Empresas por rol"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "09_aplicaciones_outreach_tracker.tex",
            "Sistema de aplicacion, outreach y tracker",
            f"""
# Objetivo

Aplicar no es enviar CVs. Es operar un pipeline con scoring, mensajes especificos, seguimiento, aprendizaje y mejora de activos. El sistema debe evitar aplicar masivamente sin prueba publica y tambien evitar esperar a la perfeccion.

## Workflow base

{numbered([
    "Elegir foco semanal: Unity/WebGL, technical visualization, XR/simulation o fallback Python/tooling.",
    "Recolectar 10-20 postings/targets.",
    "Scoring rapido por fit, remote eligibility, authorization, compensation, proof match.",
    "Seleccionar 3-8 aplicaciones buenas.",
    "Adaptar CV/headline/link principal segun rol.",
    "Enviar aplicacion + outreach si hay contacto.",
    "Registrar en tracker.",
    "Follow-up 7-10 dias despues si aplica.",
    "Revisar conversion semanal.",
])}

## Tracker minimo

| Campo | Uso |
|---|---|
| Company | Identificacion |
| Role title | Analizar patrones |
| URL | Trazabilidad |
| Layer | A1/A2/B1/C/Watchlist |
| Remote scope | Elegibilidad |
| Contract type | B2B/EOR/employee/freelance |
| Work authorization | Filtro critico |
| Salary/rate signal | Negociacion |
| Portfolio angle | TwinSight/ARA/etc |
| Status | saved/applied/contacted/interview/rejected/offer |
| Next action/date | Seguimiento |
| Notes/objections | Aprendizaje |

## Outreach short template

```text
Hi [Name], I am a Real-Time 3D Developer / Unity Technical Artist based in Colombia, focused on Unity WebGL, CAD-to-realtime optimization and interactive technical visualization.

My flagship project is TwinSight X500, a Unity WebGL technical visualization prototype for drone assembly inspection with component selection, exploded view, clipping tools, visual modes and usability/workload evaluation.

I saw [role/company/project] and thought the overlap with [specific fit] was strong. I am available for remote contractor/B2B work and would be glad to share the case study/demo.
```

## Follow-up template

```text
Hi [Name], just following up on my application/message for [role]. I am especially interested because the role connects with [specific company need]. My relevant work is TwinSight X500: [link]. Happy to share more context if useful.
```

## Weekly quotas

| Mode | Time budget | Output |
|---|---|---|
| Minimum viable | 5h/week | 5 roles scored, 3 applications, tracker updated |
| Balanced | 12h/week | 10-15 roles scored, 5-8 applications, 2-4 outreach, 1 asset improved |
| Aggressive | 18h+/week | Higher volume + networking + interview prep, only after proof package |

## Conversion diagnosis

| Symptom | Diagnosis | Fix |
|---|---|---|
| No responses | Target/message/profile mismatch | Improve headline, CV, portfolio first screen |
| Responses but no interviews | CV/fit weak | Tighten role variant and proof links |
| Interviews but no offers | Defense/expectations issue | Practice TwinSight, salary, contractor answers |
| Low offers | Market/fallback too low | Separate cashflow from strategic pipeline |
| Many saved, few applied | Analysis paralysis | Weekly done definition |

## Fuentes

{source_table([
    (source("12_application_system_and_tracker.md"), "Sistema de aplicacion"),
    (source("22_outreach_templates_english_spanish.md"), "Templates"),
    (source("26_weekly_execution_dashboard.md"), "Dashboard"),
    (source("34_weekly_application_execution_system.md"), "Cadencia semanal"),
    (source("31_application_targeting_matrix_and_search_protocol.md"), "Scoring"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "10_entrevistas_ofertas.tex",
            "Entrevistas, pruebas tecnicas, negociacion y ofertas",
            f"""
# Riesgo principal

El riesgo no es falta de evidencia: es no explicar la evidencia bajo presion. La entrevista debe convertir TwinSight en prueba de criterio tecnico, no solo en demo visual.

## Preparacion tecnica

| Pregunta | Respuesta que debe estar lista |
|---|---|
| Why Unity WebGL? | Engine workflow, scene hierarchy, UI Toolkit, interaccion, fit con Unity roles |
| How did you optimize CAD? | Cleanup, hierarchy, mesh reduction, constraints WebGL, tradeoffs |
| How would production pipeline differ? | Naming, LODs, automated validation, profiling, texture budgets |
| Is this a digital twin? | Digital-twin-adjacent visualization; no live telemetry/IoT |
| How did AI help? | Acceleration/documentation, not replacement of ownership |
| What would you improve? | Metadata, import pipeline, device targets, tests, performance |

## Pitch TwinSight 2 minutos

```text
TwinSight X500 is my flagship Unity WebGL project. The problem was that drone assembly information is usually fragmented across 2D diagrams, manufacturer documentation and static images. I built an interactive 3D inspection prototype that lets users select components, inspect technical information, use exploded view, clipping/cross-section tools and multiple visualization modes in the browser.

The technical value is the full pipeline: CAD/manufacturer geometry to Blender cleanup, Unity scene organization, C# interaction systems, UI Toolkit, WebGL constraints and evaluation using SUS, NASA-TLX Raw and Think-Aloud. In production I would formalize LODs, metadata, automated import checks and performance budgets.
```

## Behavioral framework

Use STAR, but keep answers technical:

| STAR part | TwinSight example |
|---|---|
| Situation | Assembly docs/static 2D were hard to inspect |
| Task | Build browser-based 3D inspection prototype |
| Action | CAD cleanup, Unity WebGL, UI, metrics |
| Result | Functional prototype + SUS/NASA-TLX evidence |

## Salary conversation

| Timing | Answer |
|---|---|
| Too early | "I would like to understand scope, responsibility and contract model first." |
| Contractor | "For contractor/B2B, I evaluate gross rate considering taxes, benefits, equipment and contract risk." |
| Range needed | Anchor by role tier and market; do not reveal survival minimum first |
| Low offer | Ask about scope, growth, review cycle, tools, PTO, hours, contract stability |

## Offer scorecard

| Dimension | Score |
|---|---|
| Role fit with Unity/3D/technical visualization | 1-5 |
| Compensation vs target | 1-5 |
| Contract clarity | 1-5 |
| Remote feasibility from Colombia | 1-5 |
| Work authorization risk | 1-5 |
| Portfolio/growth value | 1-5 |
| Time/mental load sustainability | 1-5 |

Reject or renegotiate if contract has unclear IP, broad exclusivity, unpaid test, no written offer, payment ambiguity, impossible authorization, or pressure to sign immediately.

## Questions to ask employer

{bullets([
    "What is the target platform for your Unity/3D applications?",
    "How do you currently handle asset optimization for real-time delivery?",
    "Do you have technical-art or pipeline standards?",
    "What are the main performance constraints?",
    "How are builds reviewed/tested?",
    "Is the role employee, EOR, contractor or freelance?",
    "Are there country or work-authorization restrictions?",
])}

## Fuentes

{source_table([
    (source("13_interview_negotiation_and_offer_risk.md"), "Entrevista y negociacion"),
    (source("23_interview_answer_bank.md"), "Banco de respuestas"),
    (source("24_offer_evaluation_scorecard.md"), "Scorecard"),
    (source("35_interview_defense_and_technical_screen_system.md"), "Defensa tecnica"),
    (source("Research/deep-research-report_13.md"), "Contratos y red flags"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "11_roadmap_ejecucion.tex",
            "Roadmaps, escenarios y ejecucion",
            f"""
# Estrategia por fases

El plan debe balancear proof assets, aplicaciones y aprendizaje. El error seria hacer solo cursos; el otro error seria aplicar sin activos publicos.

## 30/60/90

| Periodo | Objetivo | Entregables |
|---|---|---|
| 0-30 dias | Proof package minimo | TwinSight case, README, demo, CV, LinkedIn, tracker |
| 31-60 dias | Pipeline y feedback | A1/A2 verificados, 20-40 aplicaciones buenas acumuladas, primeros contactos |
| 61-90 dias | Conversion | entrevistas, ajuste mensajes, oferta o pivote tactico |

## Escenarios

| Escenario | Usar cuando | Cadencia |
|---|---|---|
| Conservador | Portfolio incompleto o energia baja | 3 aplicaciones/semana + proof package |
| Balanceado | Default tras soft launch | 5-8 aplicaciones/semana + outreach + asset semanal |
| Agresivo | Assets listos y energia alta | 10+ aplicaciones/semana + networking + entrevistas |

## Sprints de produccion

| Sprint | Resultado |
|---|---|
| TwinSight case study | Pagina portfolio con problema, solucion, pipeline, metrics |
| GitHub cleanup | README, images, no secrets, repos pinned |
| Demo video | 90s + teaser + thumbnail |
| LinkedIn update | headline, About, Featured, project entry |
| CV variants | Unity/WebGL, TA, technical visualization, Python tooling |
| Application tracker | CSV/XLSX vivo, statuses y next actions |

## Weekly review

| Pregunta | Decision |
|---|---|
| Que roles respondieron? | Duplicar keywords/targets con traction |
| Que roles ignoraron? | Ajustar CV/headline/portfolio |
| Que objeciones aparecieron? | Mejorar answer bank |
| Que asset bloqueo conversion? | Hacerlo la siguiente semana |
| Que salario aparece real? | Ajustar rango sin destruir estrategia |

## Done definition semanal

{bullets([
    "5+ roles scored.",
    "3-8 aplicaciones enviadas segun readiness.",
    "Tracker actualizado.",
    "Follow-ups enviados cuando corresponda.",
    "Un asset mejorado o una objecion convertida en respuesta.",
    "Una nota de aprendizaje semanal escrita.",
])}

## Fuentes

{source_table([
    (source("14_30_60_90_execution_plan.md"), "Plan 30/60/90"),
    (source("26_weekly_execution_dashboard.md"), "Dashboard"),
    (source("27_strategy_scenarios_conservative_balanced_aggressive.md"), "Escenarios"),
    (source("32_application_materials_gap_closure_plan.md"), "Cierre de brechas"),
    (source("33_portfolio_asset_production_sprint.md"), "Sprint assets"),
    (source("34_weekly_application_execution_system.md"), "Sistema semanal"),
    (source("36_public_profile_launch_sequence.md"), "Launch"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "12_benchmarks_estandares.tex",
            "Benchmarks publicos y estandares de calidad",
            f"""
# Para que sirven los benchmarks

Los benchmarks no se copian. Se usan para calibrar densidad, orden, claridad, nivel de prueba y formato. Alexander no necesita parecer igual que perfiles senior; necesita parecer consistente y verificable.

## Competitor/profile benchmark

| Patron fuerte | Aplicacion |
|---|---|
| Headline claro | Rol + stack + dominio |
| Proyecto flagship visible | TwinSight arriba de todo |
| Metrics / proof | SUS, NASA-TLX, triangles, participants si verificados |
| Case study con pipeline | No solo resultado visual |
| Repo ordenado | README + screenshots + limitations |
| Contact path simple | Portfolio/GitHub/LinkedIn coherentes |

## CV benchmark

| Buen CV | Mal CV |
|---|---|
| Una pagina, keywords, proyectos fuertes | Historia larga sin foco |
| Bullets con tecnologia y resultado | Responsabilidades vagas |
| Links vivos | Links muertos o placeholders |
| Rol adaptado | Un CV para todo |
| Claims seguros | Seniority inflada |

## GitHub benchmark

| Debe tener | Evitar |
|---|---|
| Pinned repos coherentes | Tutorial repos arriba |
| README orientado a reviewer | README vacio o academico largo |
| Demo/screenshots | Solo codigo sin contexto |
| Limitations | Overclaiming |
| Setup/documentation | Repo imposible de evaluar |

## ArtStation / portfolio benchmark

| Elemento | Uso |
|---|---|
| Cover fuerte | Entender proyecto en 3 segundos |
| Video near top | Evitar friccion |
| Breakdown images | Probar pipeline |
| Tools and constraints | Señal technical art |
| Before/after optimization | Diferenciador |
| Links | Conectar a GitHub/demo/portfolio |

## Demo reel benchmark

| Segmento | Duracion |
|---|---:|
| Hook visual + title | 5-8s |
| Problem/solution | 10-15s |
| Feature montage | 30-45s |
| Pipeline/metrics | 20-30s |
| CTA links | 5-10s |

## Fuentes

{source_table([
    (source("28_competitor_profile_benchmark.md"), "Competidores"),
    (source("28B_public_cv_resume_benchmark.md"), "CV benchmark"),
    (source("28C_github_profiles_benchmark.md"), "GitHub benchmark"),
    (source("28D_artstation_portfolio_benchmark_complete.md"), "ArtStation benchmark"),
    (source("29_portfolio_case_study_benchmark.md"), "Case studies"),
    (source("29B_demo_reels_benchmark.md"), "Demo reels"),
    (source("29C_artstation_breakdown_benchmark.md"), "Breakdowns"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "13_voluntariado_eventos_oportunidades.tex",
            "Eventos, voluntariado tecnico y oportunidades de prueba",
            f"""
# Por que incluir esto

Si el mercado pide experiencia formal y el perfil aun esta en transicion, voluntariado tecnico, conferencias, demo venues y proyectos abiertos pueden generar evidencia adicional sin esperar empleo.

## Oportunidades utiles

| Tipo | Ejemplos | Output |
|---|---|---|
| Humanitarian mapping/geospatial | HOT/OSM, map viewers | 3D/interactive map proof |
| XR accessibility | inclusive XR, accessibility prototypes | Accessible inspection mode |
| Games/simulation for social impact | serious games, training demos | small Unity simulation |
| NGO tech/data | dashboards, automation | Python/ARA-adjacent proof |
| Open engineering/CAD | open CAD-to-web demo | direct TwinSight adjacency |
| Conferences/demo venues | SIGGRAPH adjacent, Unity/XR events, local meetups | demo feedback, networking |

## 30/60/90 volunteering path

| Periodo | Accion |
|---|---|
| 30 dias | Buscar una contribucion pequeña con salida publica |
| 60 dias | Publicar mini case study o GitHub issue/PR |
| 90 dias | Convertirlo en portfolio secondary proof |

## Project ideas

| Proyecto | Por que ayuda |
|---|---|
| Humanitarian 3D map viewer | Une WebGL/3D/technical visualization |
| Accessible XR inspection mode | Extiende TwinSight hacia accessibility |
| NGO technical dashboard | Une ARA/Python/data |
| Open engineering CAD-to-Web demo | Repite pipeline CAD-to-realtime en otro dominio |

## Fuentes

{source_table([
    (source("Research/D2_conferences_events_demo_venues.md"), "Conferencias/eventos/demo venues"),
    (source("Research/E1_technical_volunteering_opportunities.md"), "Voluntariado tecnico"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "14_matrices_estudio_salario.tex",
            "Matrices ampliadas: estudio, salario y contratos",
            f"""
# Uso de este capitulo

Este capitulo completa la parte que la version editorial breve dejaba demasiado compacta: que estudiar, cuando estudiarlo, que salida producir, como pensar dinero bruto/neto y como comparar contratos sin autoenganarse.

## Matriz de estudio por objetivo laboral

| Objetivo | Estudio prioritario | Salida publica | No hacer todavia |
|---|---|---|---|
| Unity WebGL Developer | C#, Unity UI, profiling, WebGL constraints | TwinSight demo + README tecnico | Houdini largo antes de portfolio |
| Unity Technical Artist | Blender optimization, shaders basicos, tooling, import pipeline | Before/after CAD-to-realtime | Presentarse como AAA senior TA |
| Technical Visualization | Assembly inspection, product configurators, UX tecnica | Case study con problem-solution-pipeline | Hablar de digital twin completo |
| XR/Simulation | Interaction patterns, performance, device constraints | Mini scene o extension TwinSight | Comprar hardware sin demanda |
| Python Automation | LangGraph/LangChain, structured outputs, evals | ARA README + workflow diagram | Llamarlo production AI platform |
| 3D Portfolio fallback | hard surface, lighting, presentation, breakdown | ArtStation breakdown tecnico | Rehacer todo el portfolio visual |

## Shortlist de cursos y entregables

| Area | Curso/tipo | Entregable que debe producir |
|---|---|---|
| Blender optimization | Cleanup, retopo, material reduction | Imagen before/after + nota tecnica |
| Unity WebGL | Build settings, memory, compression, input/UI | Checklist de build reproducible |
| C# Unity | events, ScriptableObjects, state, architecture | Refactor pequeno documentado |
| UI Toolkit | panels, inspector-like UI, responsive layout | TwinSight panel polish |
| Profiling | Unity Profiler, browser profiling, draw calls | Captura con decision concreta |
| Technical art | shaders, visual modes, clipping, outlines | Feature GIF con explicacion |
| Houdini fundamentals | procedural assets/tools | Mini tool, no curso completo invisible |
| DaVinci/editing | video demo, captions, pacing | Demo 90s + teaser 30s |
| Documentation | README, diagrams, limitations | README final TwinSight |
| AI tooling | LangGraph/LangChain, eval mindset | ARA workflow defensible |

## Decision de certificaciones

| Certificacion | Prioridad | Activarla si | Pausarla si |
|---|---|---|---|
| Unity Certified Associate | Media | Portfolio listo y 2-4 semanas disponibles | Retrasa aplicaciones |
| Scrum/Agile generico | Baja | Requisito puntual de empresa | Solo adorna CV |
| Cloud basico | Baja-media | Rol WebGL/deployment lo pide | Distrae de Unity |
| Blender/Houdini certificates | Baja | Vienen gratis con output visible | Solo son badges |
| Ingles certificable | Media futura | Visa/master/trabajo lo exige | No mejora entrevista real |

## Modelo bruto/neto para contractor

| Variable | Pregunta practica |
|---|---|
| Tarifa bruta | Cuanto entra antes de impuestos, salud, pension, comisiones y vacaciones no pagadas |
| Reserva fiscal | Que porcentaje separar de inmediato |
| Seguridad social | Costo mensual como independiente |
| Vacaciones/PTO | Si no hay PTO, el bruto debe cubrir dias no facturados |
| Equipo/software | Quien paga licencias, hardware y upgrades |
| Moneda | USD, EUR, COP, tasa de cambio y comisiones |
| Terminacion | Notice period, pago de trabajo entregado, clausulas de salida |
| Propiedad intelectual | Que se transfiere, que queda como portfolio, que puede mostrarse |

## Rango de negociacion por escenario

| Escenario | Rango bruto mensual | Argumento |
|---|---:|---|
| Cashflow con fit parcial | USD 1.5k-2.5k | Entrada, pero proteger tiempo de portfolio |
| Unity/WebGL contractor LATAM | USD 2.5k-4k | Stack y demo justifican rango |
| Technical visualization fuerte | USD 3k-5k | Nicho mas especifico, valor industrial |
| XR/simulation con prueba | USD 3.5k-6k | Mayor especializacion |
| US/global high fit | USD 5k-8k+ | Solo con seniority percibida y contrato compatible |
| EU local futuro | depende pais | Activar cuando exista autorizacion/residencia |

## Red flags de contrato

{bullets([
    "Prueba tecnica larga no pagada sin alcance ni feedback.",
    "Exclusividad amplia para contractor sin compensacion equivalente.",
    "IP demasiado amplia que impide mostrar portfolio propio.",
    "No hay contrato escrito o el pago queda informal.",
    "Piden autorizacion UE/US actual cuando no existe.",
    "Scope ambiguo: Unity, backend, design, support y 3D todo por tarifa baja.",
    "Pago condicionado a aprobaciones subjetivas sin hitos.",
    "No hay fecha de pago, moneda ni responsable de aprobacion.",
])}

## Checklist antes de aceptar

{numbered([
    "Confirmar rol real, seniority esperado y entregables.",
    "Confirmar modalidad: contractor, EOR, employee o freelance project.",
    "Convertir oferta a bruto mensual y neto estimado.",
    "Valorar tiempo no pagado: vacaciones, sickness, reuniones y onboarding.",
    "Revisar IP, NDA, portfolio permission y exclusividad.",
    "Comparar contra scorecard de rol, dinero, aprendizaje y riesgo.",
    "Negociar si el fit es bueno pero el contrato esta incompleto.",
    "No firmar bajo presion sin leer clausulas clave.",
])}

## Fuentes

{source_table([
    (source("03_salary_benchmark_and_remote_colombia.md"), "Rangos"),
    (source("06_education_courses_rebelway_masters_phd.md"), "Cursos y posgrados"),
    (source("13_interview_negotiation_and_offer_risk.md"), "Negociacion"),
    (source("24_offer_evaluation_scorecard.md"), "Scorecard"),
    (source("Research/deep-research-report_03.md"), "Modalidades de contrato"),
    (source("Research/deep-research-report_C1.md"), "Cursos complementarios"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "15_materiales_publicos_copy.tex",
            "Materiales publicos: copy, estructura y QA",
            f"""
# Objetivo

Este capitulo deja suficiente material practico para actualizar portfolio, LinkedIn, CV, GitHub, ArtStation y demo sin tener que abrir todos los modulos fuente.

## Portfolio: estructura de TwinSight

| Orden | Bloque | Contenido minimo |
|---|---|---|
| 1 | Title/hero | TwinSight X500, Unity WebGL technical visualization prototype |
| 2 | Demo | video 90s, live demo si esta estable, GitHub link |
| 3 | Problem | assembly inspection y documentacion 2D fragmentada |
| 4 | Role | Unity, C#, WebGL, Blender cleanup, UI, evaluation |
| 5 | Features | selection, exploded view, clipping, visual modes, info panels |
| 6 | Pipeline | CAD/manufacturer docs to Blender to Unity to WebGL |
| 7 | Optimization | 6.5M+ source route to optimized realtime model |
| 8 | Evaluation | 12 participants, 96 task-condition records, SUS, NASA-TLX Raw |
| 9 | Results | SUS 91.88, workload reduction if verified |
| 10 | Limitations | academic prototype, no live telemetry digital twin |
| 11 | Production plan | LODs, metadata schema, tests, profiling, import validation |

## LinkedIn About draft

```text
I am a Real-Time 3D Developer / Unity Technical Artist focused on Unity WebGL, CAD-to-realtime optimization and interactive technical visualization.

My flagship project is TwinSight X500, a Unity WebGL prototype for drone assembly inspection. It combines optimized 3D assets, component selection, exploded view, clipping tools, visualization modes and usability/workload evaluation to turn static technical documentation into an interactive browser-based inspection experience.

I work across Unity, C#, WebGL, Blender, UI Toolkit, technical documentation and Python automation. I am currently based in Colombia and available for remote international contractor/B2B roles.
```

## CV bullet bank

| Rol | Bullet |
|---|---|
| Unity/WebGL | Built TwinSight X500, a Unity WebGL technical visualization prototype for drone assembly inspection using Unity, C#, URP, UI Toolkit and Blender. |
| Technical Artist | Optimized manufacturer/CAD-derived geometry for realtime WebGL use, documenting mesh reduction, hierarchy cleanup and interaction constraints. |
| Technical Visualization | Designed interactive inspection workflows including component selection, exploded view, clipping/cross-section tools, visual modes and contextual information panels. |
| UX/evaluation | Evaluated the prototype with SUS, NASA-TLX Raw and Think-Aloud methodology across 12 participants and 96 task-condition records. |
| Python/AI tooling | Built ARA as a Python research-automation prototype using agentic workflow concepts and Markdown/report generation. |

## GitHub README skeleton

```text
# TwinSight X500

Unity WebGL technical visualization prototype for drone assembly inspection.

## Demo
Video, live build, screenshots.

## Problem
Static 2D assembly documentation is hard to inspect spatially.

## Features
Selection, exploded view, clipping, visual modes, info panels.

## Technical Pipeline
CAD/manufacturer geometry, Blender cleanup, Unity scene organization, WebGL build.

## Evaluation
Participants, methods, metrics, limitations.

## Limitations
Academic prototype, no live telemetry, not a production digital twin.

## Roadmap
LOD, metadata, automated import checks, profiling, tests.
```

## ArtStation breakdown sequence

| Frame | Contenido |
|---|---|
| Cover | Hero render + project title |
| 1 | Final viewer screenshots |
| 2 | Problem and assembly context |
| 3 | CAD/source model complexity |
| 4 | Blender cleanup and optimization |
| 5 | Unity hierarchy and interaction system |
| 6 | Exploded view and clipping |
| 7 | Visual modes and UI |
| 8 | Metrics and evaluation |
| 9 | Limitations and next steps |
| 10 | Links to portfolio, demo, GitHub |

## Demo video script

| Segmento | Duracion | Narrativa |
|---|---:|---|
| Hook | 0-8s | "TwinSight X500 is a Unity WebGL inspection prototype for drone assembly." |
| Problem | 8-18s | Static diagrams do not make spatial relationships easy to inspect. |
| Feature pass | 18-55s | selection, exploded view, clipping, visual modes, info panels |
| Pipeline | 55-80s | CAD/manufacturer geometry, Blender cleanup, Unity WebGL |
| Results | 80-100s | usability/workload metrics and what they mean |
| CTA | 100-110s | portfolio, GitHub, contact |

## QA final antes de publicar

{bullets([
    "Todos los enlaces abren: portfolio, GitHub, LinkedIn, demo, CV.",
    "No hay placeholders visibles.",
    "La primera pantalla comunica rol y proyecto, no historia personal larga.",
    "El caso menciona limitaciones sin debilitar el valor.",
    "Las metricas coinciden con tesis/documentos finales.",
    "Los repos no tienen secretos, archivos pesados innecesarios ni README vacio.",
    "Las imagenes tienen captions tecnicas.",
    "La disponibilidad dice Colombia remote contractor/B2B y no EU authorization.",
])}

## Fuentes

{source_table([
    (source("17_cv_base_and_role_variants.md"), "CV"),
    (source("18_linkedin_final_rewrite.md"), "LinkedIn"),
    (source("19_github_readme_templates.md"), "README"),
    (source("19B_github_readme_twinsight_final.md"), "README TwinSight"),
    (source("20_portfolio_copy_and_site_structure.md"), "Portfolio copy"),
    (source("21B_twinsight_demo_video_final_plan.md"), "Video demo"),
    (source("28D_artstation_portfolio_benchmark_complete.md"), "ArtStation"),
    (source("36_public_profile_launch_sequence.md"), "Launch"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "16_busqueda_empresas_ampliada.tex",
            "Busqueda ampliada: empresas, scoring y mensajes",
            f"""
# Principio

La estrategia de busqueda debe combinar precision y volumen moderado. Precision sin volumen produce espera; volumen sin fit produce rechazos silenciosos.

## Scoring de target

| Criterio | 0 | 1 | 2 |
|---|---|---|---|
| Fit tecnico | no 3D/Unity | parcial | Unity/3D/WebGL claro |
| Dominio | generico | creative/game | technical visualization/XR/simulation |
| Remote | onsite imposible | hibrido/region dudosa | remote compatible Colombia |
| Contrato | desconocido | employee local/EOR posible | contractor/B2B claro |
| Authorization | requiere US/EU now | no claro | no bloqueo o worldwide |
| Proof match | portfolio no conecta | conecta parcialmente | TwinSight directo |
| Salario | bajo/desconocido | posible | rango objetivo |

Aplicar rapido si suma 10+. Investigar si suma 7-9. Guardar o descartar si esta por debajo.

## Angulos por tipo de empresa

| Tipo | Angulo principal | Proyecto a mostrar |
|---|---|---|
| WebGL/creative tech | browser-based interactive 3D, polished demo | TwinSight demo + portfolio |
| XR agency | Unity interaction, technical visualization, simulation mindset | TwinSight + roadmap XR |
| Product configurator / 3D commerce | CAD-to-realtime, optimization, inspection UI | TwinSight pipeline |
| Industrial software | technical docs, inspection, digital-twin-adjacent visualization | TwinSight case + limitations |
| Games/Unity studio | Unity C#, UI, performance, tooling | TwinSight + technical art breakdown |
| Nearshore dev shop | Unity/WebGL plus Python automation flexibility | CV variant + TwinSight |
| AI/tooling company | Python workflows, report automation, structured outputs | ARA, secondary |

## Targeting waves

| Wave | Semana | Accion |
|---|---|---|
| Soft launch | 1 | 5-10 A1 companies, low pressure, feedback seeking |
| Main wave | 2-6 | 5-8 applications/week plus outreach |
| Expansion | 6-12 | A2/high-fit and B1/fallback split |
| Recycle | monthly | revisit old targets with improved assets |

## Outreach variants

### Creative/WebGL

```text
I noticed your work in interactive WebGL and real-time experiences. My flagship project, TwinSight X500, is a Unity WebGL technical visualization prototype with selection, exploded view, clipping tools and optimized 3D assets. I thought the CAD-to-browser pipeline might be relevant to your interactive 3D work.
```

### Industrial/technical visualization

```text
I work on Unity WebGL and CAD-to-realtime technical visualization. TwinSight X500 turns drone assembly information into an interactive browser-based inspection prototype, including optimization, interaction tools and usability/workload evaluation. I would be interested in roles around product visualization, simulation or inspection workflows.
```

### Recruiter short

```text
I am a Real-Time 3D Developer / Unity Technical Artist based in Colombia, available for remote contractor/B2B roles. My strongest proof is TwinSight X500, a Unity WebGL technical visualization prototype. Portfolio: [link].
```

## Follow-up rules

| Situacion | Accion |
|---|---|
| No response after application | Follow up after 7-10 days if contact exists |
| Recruiter viewed profile | Send short project-based note |
| Rejection generic | Log reason, do not argue |
| Interview request | Prepare role-specific TwinSight pitch |
| Test request | Ask scope, time, paid/unpaid, IP and deadline |

## Fuentes

{source_table([
    (source("11_company_targets_job_boards_recruiters.md"), "Targets"),
    (source("22_outreach_templates_english_spanish.md"), "Outreach"),
    (source("30_live_job_postings_market_snapshot.md"), "Vacantes"),
    (source("31_application_targeting_matrix_and_search_protocol.md"), "Scoring"),
    (source("34_weekly_application_execution_system.md"), "Ejecucion"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "17_interview_answer_bank_ampliado.tex",
            "Banco ampliado de entrevistas y defensa",
            f"""
# Objetivo

Este banco evita improvisar con temas delicados: seniority, digital twin, AI, autorizacion laboral, salario, gaps y produccion.

## Preguntas tecnicas frecuentes

| Pregunta | Respuesta corta |
|---|---|
| What is TwinSight? | A Unity WebGL technical visualization prototype for drone assembly inspection. |
| What was your role? | End-to-end prototype work: Unity, C#, UI, asset preparation, documentation and evaluation. |
| Why WebGL? | Easy browser access for review/demo, but with stricter performance and memory constraints. |
| How did you optimize? | Cleanup, hierarchy simplification, mesh reduction, material discipline and WebGL-oriented constraints. |
| What would you improve? | LODs, metadata schema, automated import validation, profiling, tests and deployment hardening. |
| Is it a digital twin? | It is digital-twin-adjacent technical visualization, not a live telemetry digital twin. |
| How production-ready is it? | Portfolio/academic prototype with a clear productionization roadmap. |

## Preguntas de perfil

| Pregunta | Respuesta segura |
|---|---|
| Are you senior? | I position myself by evidence rather than title; my strongest fit is Unity/WebGL technical visualization. |
| Are you a game developer? | I use game-engine technology for technical visualization and interactive 3D, not only games. |
| Are you an artist or engineer? | I sit between realtime development, technical art and visualization workflows. |
| Why should we hire you? | I can turn complex 3D/technical material into interactive, inspectable, documented realtime experiences. |
| What is your weakest area? | Production team scale or specific pipeline depending on role; I compensate with documentation and fast learning. |

## Legal/mobility answers

| Pregunta | Respuesta |
|---|---|
| Are you authorized to work in the EU? | Not currently. I am based in Colombia and available for remote contractor/B2B roles. |
| What about Portuguese citizenship? | I expect it around 2028, so it may support future mobility, but it is not current authorization. |
| Can you relocate? | Potentially in the future depending on legal route, offer and timeline. |
| Can you work US hours? | Yes/partially, depending on overlap required. Confirm exact timezone expectations. |

## Salary answers

| Situacion | Respuesta |
|---|---|
| Asked too early | I would like to understand scope, seniority, contract model and time zone first. |
| Contractor range required | For B2B contractor work I evaluate gross compensation considering taxes, benefits and unpaid time. |
| Low range | I am open to discussing scope, review cycles and total package if the role is strongly aligned. |
| High-fit role | I would prefer to align on value and responsibilities, then discuss a range consistent with market and contract risk. |

## Test assignment rules

| Test type | Accept if | Clarify |
|---|---|---|
| 2-4h technical | Relevant, bounded, no commercial use | deadline, evaluation criteria |
| Paid project | Clear scope and payment | IP, revisions, delivery |
| Long unpaid | Usually no | time cap, compensation |
| Existing portfolio review | yes | prepare walkthrough |
| Live coding/Unity review | yes if reasonable | setup and topic |

## Story bank

| Story | Use |
|---|---|
| CAD-to-realtime optimization | Technical art / visualization roles |
| WebGL constraints | Unity/WebGL roles |
| SUS/NASA-TLX evaluation | UX/research-aware roles |
| ARA automation | Python/AI tooling roles |
| Portfolio rebuild | self-direction and shipping |
| Contractor readiness | global remote roles |

## Fuentes

{source_table([
    (source("13_interview_negotiation_and_offer_risk.md"), "Negociacion"),
    (source("23_interview_answer_bank.md"), "Answer bank"),
    (source("24_offer_evaluation_scorecard.md"), "Scorecard"),
    (source("35_interview_defense_and_technical_screen_system.md"), "Defensa"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "18_roadmap_24_meses.tex",
            "Roadmap 24 meses y puertas de decision",
            f"""
# Vision

El roadmap no es una prediccion. Es un sistema de puertas: si hay traction, se dobla la apuesta; si no hay traction, se corrige el activo que bloquea conversion.

## 0-30 dias: proof package

| Area | Entregable |
|---|---|
| Portfolio | TwinSight case publicable |
| GitHub | README, media, pinned repos |
| LinkedIn | headline, About, Featured |
| CV | 2-3 variantes |
| Demo | 90s main video and teaser |
| Tracker | pipeline base |
| Legal/money | contractor readiness checklist |

Gate: si estos activos no existen, no iniciar volumen agresivo de aplicaciones.

## 31-90 dias: aplicaciones y feedback

| Area | Entregable |
|---|---|
| Applications | 20-40 buenas aplicaciones acumuladas |
| Outreach | 10-20 mensajes especificos |
| Feedback | objeciones registradas |
| Portfolio | 2-4 mejoras visibles |
| Interview | answer bank practicado |
| Salary | rangos ajustados por respuesta real |

Gate: si no hay respuestas, revisar posicionamiento, first screen, CV y target fit antes de subir volumen.

## 3-6 meses: consolidacion

| Ruta | Accion |
|---|---|
| Si hay entrevistas | mejorar defensa, negociar, cerrar oferta |
| Si hay respuestas bajas | ajustar target y salario, mejorar pruebas |
| Si no hay traction | agregar mini proof tecnico y revisar nicho |
| Si aparece contrato | proteger aprendizaje, dinero y portfolio |
| Si aparece master/beca | evaluar solo si mejora movilidad/ROI |

## 6-12 meses: especializacion

| Opcion | Condicion |
|---|---|
| Technical visualization deeper | si TwinSight atrae empresas industriales |
| XR/simulation | si aparecen roles y feedback positivo |
| Unity Technical Art | si portfolio visual/pipeline gana traction |
| Python/AI tooling | si ARA genera conversaciones reales |
| Master preparation | si hay beca/UE/objetivo claro |

## 12-24 meses: upside

| Ruta | Meta |
|---|---|
| Remote global contractor | USD 4k-6k+ con mejor evidencia |
| Seniority growth | pasar de proof individual a production credibility |
| EU mobility | reabrir Portugal/Alemania si pasaporte/residencia avanza |
| Master | solo si beca/costo/visa/empleabilidad cierran |
| Productized consulting | pequenos paquetes CAD-to-realtime si hay demanda |

## Metricas de control

| Metrica | Revisar |
|---|---|
| aplicaciones enviadas | semanal |
| respuesta por target type | semanal |
| interviews/applications | mensual |
| salario ofertado vs target | por proceso |
| asset blocking conversion | semanal |
| skill gap recurrente | mensual |
| energia/sostenibilidad | semanal |

## Fuentes

{source_table([
    (source("14_30_60_90_execution_plan.md"), "30/60/90"),
    (source("15_final_integrated_strategy.md"), "Estrategia integrada"),
    (source("26_weekly_execution_dashboard.md"), "Dashboard"),
    (source("27_strategy_scenarios_conservative_balanced_aggressive.md"), "Escenarios"),
    (source("32_application_materials_gap_closure_plan.md"), "Cierre de brechas"),
])}
""",
        )
    )

    audit_blocks = "\n\n".join(
        f"### {f.id} - {f.category}\n\n"
        f"- Severidad: {f.severity}\n"
        f"- Hallazgo: {f.finding}\n"
        f"- Resolucion: {f.resolution}"
        for f in findings
    )
    paths.append(
        chapter_tex(
            "14_auditoria_errata.tex",
            "Auditoria, errata y source map",
            f"""
# Auditoria global

Esta version no elimina la complejidad; la gobierna. Si algo contradice Historic, manda lo actual. Si algo contradice una regla canonica, se corrige en errata y en lenguaje publico.

## Hallazgos principales

{audit_blocks}

## Riesgos vivos

| Riesgo | Control |
|---|---|
| Sobreprometer EU authorization | Wording actual Colombia contractor; 2028 solo futuro |
| Seniority inflada | No usar Senior como titulo |
| Digital twin overclaim | Decir technical visualization / digital-twin-adjacent |
| Cursos como credenciales | Solo certificados reales; cursos como learning/artifacts |
| Salario demasiado agresivo | Escalonar USD 1.5k -> 3k -> 6k |
| Portfolio incompleto | Soft launch solo si demo/GitHub/case study funcionan |
| Datos de mercado caducos | Verificacion semanal antes de aplicar |

## Corpus cubierto

| Tipo | Cantidad |
|---|---:|
| Modulos raiz Markdown | {sum(1 for s in sources if s.section == "root")} |
| Research Markdown | {sum(1 for s in sources if s.section == "research")} |
| PDFs Research inventariados | {len(research_pdfs)} |
| Historic indexado | {len(historic_index)} |
| Hallazgos auditoria | {len(findings)} |

## Fuentes

{source_table([
    (md_link(PDF_ROOT / "audit_findings.md", "_pdf_biblia/audit_findings.md"), "Auditoria generada"),
    (md_link(OBSIDIAN_DIR / "06_CANONICAL_FACTS_AND_ERRATA.md", "Facts canonicos"), "Reglas canonicas"),
    (md_link(OBSIDIAN_DIR / "10_BIBLIA_COMPLETA.md", "Biblia completa"), "Corpus completo"),
    (source("16_final_consistency_audit_and_gap_register.md"), "Auditoria previa"),
])}
""",
        )
    )

    return paths


def write_main_tex(chapter_paths: list[str]) -> None:
    inputs = "\n".join(rf"\input{{{path}}}" for path in chapter_paths)
    generated = datetime.now().strftime("%Y-%m-%d %H:%M")
    main = rf"""\documentclass[10pt,openany]{{book}}
\usepackage[a4paper,margin=1.95cm,headheight=14pt]{{geometry}}
\usepackage{{fontspec}}
\setmainfont{{Arial}}
\setmonofont{{Consolas}}
\usepackage{{microtype}}
\usepackage{{xcolor}}
\definecolor{{Accent}}{{HTML}}{{1F5D6D}}
\definecolor{{SoftAccent}}{{HTML}}{{EEF6F7}}
\usepackage{{longtable}}
\usepackage{{booktabs}}
\usepackage{{array}}
\providecommand{{\arraybackslash}}{{\let\\\tabularnewline}}
\usepackage{{pdflscape}}
\usepackage{{fancyhdr}}
\usepackage{{fvextra}}
\usepackage{{hyperref}}
\usepackage{{bookmark}}
\usepackage{{enumitem}}
\usepackage{{titlesec}}
\hypersetup{{
  unicode=true,
  colorlinks=true,
  linkcolor=Accent,
  urlcolor=Accent,
  citecolor=Accent,
  pdftitle={{Biblia Profesional Editorial Ampliada Alexander Woodcock Salomon}},
  pdfauthor={{Alexander Woodcock Salomon}},
  pdfsubject={{Estrategia profesional ampliada, mercado, estudio, portafolio y empleabilidad}},
  pdfcreator={{Codex + XeLaTeX}}
}}
\pagestyle{{fancy}}
\fancyhf{{}}
\fancyhead[L]{{\small\textcolor{{Accent}}{{Editorial ampliada}}}}
\fancyhead[R]{{\small\leftmark}}
\fancyfoot[C]{{\thepage}}
\setlength{{\parskip}}{{0.46em}}
\setlength{{\parindent}}{{0pt}}
\setlist{{itemsep=0.12em, topsep=0.28em, parsep=0.05em}}
\renewcommand{{\arraystretch}}{{1.13}}
\emergencystretch=4em
\sloppy
\renewcommand{{\chaptername}}{{Capitulo}}
\renewcommand{{\contentsname}}{{Indice}}
\titleformat{{\chapter}}[display]{{\normalfont\huge\bfseries\color{{Accent}}}}{{\chaptertitlename\ \thechapter}}{{12pt}}{{\Huge}}
\titleformat{{\section}}{{\Large\bfseries\color{{Accent}}}}{{\thesection}}{{0.6em}}{{}}
\DefineVerbatimEnvironment{{mdcode}}{{Verbatim}}{{fontsize=\scriptsize,breaklines=true,breakanywhere=true,frame=single,rulecolor=\color{{black!18}}}}

\begin{{document}}
\pagecolor{{SoftAccent}}
\thispagestyle{{empty}}
\begin{{center}}
\centering
\vspace*{{1.8cm}}
{{\Huge\bfseries\textcolor{{Accent}}{{Biblia Profesional Editorial Ampliada}}\par}}
\vspace{{0.35cm}}
{{\LARGE Alexander Woodcock Salomon\par}}
\vspace{{1cm}}
{{\Large Version de trabajo: estrategia, mercado, estudio, portafolio, aplicaciones y negociacion\par}}
\vspace{{1.2cm}}
{{\large Version v2\par}}
{{\large Generado: {generated}\par}}
\vfill
{{\large Real-Time 3D Developer / Unity Technical Artist\par}}
{{\small Documento intermedio: mas completo que la editorial breve, mas legible que la biblia completa.\par}}
\vspace{{0.8cm}}
{{\small Fuente viva: \texttt{{E:\textbackslash{{}}Laboral}}\par}}
\end{{center}}
\clearpage
\nopagecolor

\tableofcontents
\clearpage

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
        write(BUILD_DIR / f"xelatex_pass_{i + 1}.log", proc.stdout + "\n" + proc.stderr)
        if proc.returncode != 0:
            ok = False
            break
    built = BUILD_DIR / "main.pdf"
    if ok and built.exists():
        shutil.copy2(built, DIST_DIR / f"{PDF_BASENAME}.pdf")
        return True
    return False


def pdf_text_and_pages(pdf_path: Path) -> tuple[str, int | None]:
    try:
        import fitz  # type: ignore
    except Exception:
        return "", None
    if not pdf_path.exists():
        return "", None
    doc = fitz.open(pdf_path)
    text_parts: list[str] = []
    for page in doc:
        text_parts.append(page.get_text())
    return "\n".join(text_parts), doc.page_count


def validate(sources: list[Any], research_pdfs: list[dict[str, Any]], historic_index: list[dict[str, Any]], findings: list[Any], compiled: bool) -> dict[str, Any]:
    pdf_path = DIST_DIR / f"{PDF_BASENAME}.pdf"
    text, pages = pdf_text_and_pages(pdf_path)
    text_lower = text.lower()
    required_terms = {
        "courses": ["Rebelway", "Unity certification", "Houdini", "master", "PhD"],
        "salary": ["USD 1.5k", "USD 3k", "USD 6k", "contractor", "EOR"],
        "public_profile": ["LinkedIn", "GitHub", "CV", "ArtStation", "demo reel"],
        "portfolio": ["TwinSight X500", "ARA", "SUS", "NASA-TLX"],
        "applications": ["Treeview Studio", "Active Theory", "tracker", "outreach"],
        "mobility": ["2028", "EU work authorization", "Colombia"],
        "execution": ["30/60/90", "weekly", "offer scorecard"],
        "materials_depth": ["LinkedIn About draft", "CV bullet bank", "GitHub README skeleton", "ArtStation breakdown"],
        "interview_depth": ["Test assignment", "Salary answers", "Legal/mobility answers", "Story bank"],
        "search_depth": ["Scoring de target", "Targeting waves", "Follow-up rules"],
    }
    checks = {key: all(term.lower() in text_lower for term in terms) for key, terms in required_terms.items()}
    validation: dict[str, Any] = {
        "generated_at": datetime.now().isoformat(timespec="minutes"),
        "compiled": compiled,
        "pdf": str(pdf_path),
        "pdf_exists": pdf_path.exists(),
        "pdf_bytes": pdf_path.stat().st_size if pdf_path.exists() else 0,
        "pdf_pages": pages,
        "root_markdown": sum(1 for s in sources if s.section == "root"),
        "research_markdown": sum(1 for s in sources if s.section == "research"),
        "research_pdfs": len(research_pdfs),
        "historic_index": len(historic_index),
        "audit_findings": len(findings),
        **checks,
    }
    validation["passed"] = all(
        [
            compiled,
            validation["pdf_exists"],
            validation["pdf_bytes"] > 180_000,
            pages is not None and 45 <= pages <= 220,
            all(checks.values()),
            validation["root_markdown"] >= 45,
            validation["research_markdown"] >= 15,
            validation["audit_findings"] >= 8,
        ]
    )
    write(BUILD_DIR / "editorial_expanded_text_audit.txt", text)
    return validation


def write_obsidian_note(validation: dict[str, Any]) -> None:
    write(
        OBSIDIAN_DIR / "11_BIBLIA_EDITORIAL_AMPLIADA.md",
        f"""---
status: current
type: pdf-editorial-expanded
last_updated: {datetime.now().strftime("%Y-%m-%d")}
tags:
  - pdf
  - editorial
  - expanded
  - current
---

# Biblia editorial ampliada

PDF:

- [[_pdf_biblia/dist/{PDF_BASENAME}.pdf]]

Esta version complementa la editorial breve. Incluye mas detalle accionable sobre cursos, rutas de estudio, benchmarks salariales, contratos, portfolio, LinkedIn, GitHub, CV, empresas, aplicaciones, entrevistas, oferta y roadmaps, sin convertirse en la biblia completa.

## Validacion

| Campo | Valor |
|---|---|
| Paginas | {validation.get("pdf_pages")} |
| PDF bytes | {validation.get("pdf_bytes")} |
| Cursos incluidos | {validation.get("courses")} |
| Salarios/contratos incluidos | {validation.get("salary")} |
| Perfil publico incluido | {validation.get("public_profile")} |
| Portfolio incluido | {validation.get("portfolio")} |
| Aplicaciones incluidas | {validation.get("applications")} |
| Movilidad incluida | {validation.get("mobility")} |
| Ejecucion incluida | {validation.get("execution")} |
| Materiales publicos profundizados | {validation.get("materials_depth")} |
| Entrevistas profundizadas | {validation.get("interview_depth")} |
| Busqueda/scoring profundizados | {validation.get("search_depth")} |
| Passed | {validation.get("passed")} |

## Relacion con otros PDF

- [[09_BIBLIA_EDITORIAL]]: lectura ejecutiva breve.
- [[10_BIBLIA_COMPLETA]]: corpus completo para auditoria granular.
- Esta nota: documento principal recomendado para leer y ejecutar.
""",
    )


def append_home_link() -> None:
    home = OBSIDIAN_DIR / "00_HOME.md"
    if not home.exists():
        return
    text = raw.read_text(home)
    if "[[11_BIBLIA_EDITORIAL_AMPLIADA]]" in text:
        return
    marker = "- [[10_BIBLIA_COMPLETA]]"
    if marker in text:
        text = text.replace(marker, marker + "\n- [[11_BIBLIA_EDITORIAL_AMPLIADA]]")
    else:
        text += "\n- [[11_BIBLIA_EDITORIAL_AMPLIADA]]\n"
    write(home, text)


def main() -> None:
    ensure_dirs()
    sources, research_pdfs, historic_index = raw.collect_sources()
    findings = raw.build_audit(sources, historic_index)
    chapter_paths = build_chapters(sources, findings, research_pdfs, historic_index)
    write_main_tex(chapter_paths)
    compiled = compile_pdf()
    validation = validate(sources, research_pdfs, historic_index, findings, compiled)
    write(PDF_ROOT / "editorial_expanded_validation.json", json.dumps(validation, ensure_ascii=False, indent=2))
    write_obsidian_note(validation)
    append_home_link()
    print(json.dumps(validation, ensure_ascii=False, indent=2))
    if not validation["passed"]:
        raise SystemExit(2)


if __name__ == "__main__":
    main()
