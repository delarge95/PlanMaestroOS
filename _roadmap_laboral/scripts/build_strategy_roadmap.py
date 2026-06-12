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
ROADMAP_ROOT = ROOT / "_roadmap_laboral"
PDF_ROOT = ROOT / "_pdf_biblia"
OBSIDIAN_DIR = ROOT / "_obsidian"
TEX_DIR = ROADMAP_ROOT / "tex"
CHAPTERS_DIR = TEX_DIR / "chapters"
BUILD_DIR = ROADMAP_ROOT / "build"
DIST_DIR = ROADMAP_ROOT / "dist"
TRACKER_PATH = ROADMAP_ROOT / "tracker" / "Tracker_Estrategia_Laboral_Alexander_v1.xlsx"
PDF_BASENAME = "Plan_Estrategia_Laboral_Alexander_v1"

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
    for path in [ROADMAP_ROOT, TEX_DIR, CHAPTERS_DIR, BUILD_DIR, DIST_DIR, OBSIDIAN_DIR, TRACKER_PATH.parent]:
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


def table(headers: list[str], rows: list[list[Any]]) -> str:
    return raw.markdown_table(headers, rows)


def bullets(items: list[str]) -> str:
    return "\n".join(f"- {item}" for item in items)


def numbered(items: list[str]) -> str:
    return "\n".join(f"{i}. {item}" for i, item in enumerate(items, 1))


def chapter_tex(filename: str, title: str, md: str) -> str:
    tex = "\\chapter{" + raw.inline_tex(title) + "}\n\n"
    tex += raw.markdown_to_tex(md.strip() + "\n", title)
    path = CHAPTERS_DIR / filename
    write(path, tex.rstrip() + "\n")
    return f"chapters/{filename}"


def build_chapters(sources: list[Any], findings: list[Any]) -> list[str]:
    generated = datetime.now().strftime("%Y-%m-%d %H:%M")
    paths: list[str] = []

    paths.append(
        chapter_tex(
            "01_modo_uso_decisiones.tex",
            "Modo de uso y decisiones duras",
            f"""
# Que es este documento

Este documento es el **Plan de Estrategia Laboral**. No es una biblia, ni un resumen academico, ni una lista de datos. Es un manual prescriptivo para cerrar portfolio, convertir el perfil en una oferta laboral relacionada con Unity Technical Art / realtime 3D, y operar una busqueda balanceada sin perderse en cursos, investigacion o perfeccionismo.

## Respuesta corta a la pregunta principal

Tu objetivo de los proximos 90 dias no debe ser "tener todo perfecto". Debe ser:

```text
Cerrar un paquete publico minimo pero creible, aplicar a roles remotos afines a Unity Technical Artist / realtime 3D, aceptar una primera oportunidad relacionada aunque no sea la mejor paga, y usar esa experiencia como puente hacia USD 2k y luego USD 6k.
```

## Datos canonicos usados

| Decision | Respuesta |
|---|---|
| Objetivo principal | Cerrar portafolio y conseguir empleo remoto afin al campo |
| Disponibilidad | 5 horas/dia, lunes a viernes, aprox. 25 horas/semana |
| Prioridad de rol | Unity Technical Artist |
| Rutas secundarias | Unity WebGL, technical visualization, XR/simulation, Python/AI tooling |
| Piso economico | 3 millones COP si da experiencia real en el campo |
| Ideal realista | USD 2000/mes |
| Ambicioso | USD 6000/mes |
| Estilo de estrategia | Balanceado |
| Evitar | Marketing puro, salvo que entregue experiencia real en el rol |
| Formato operativo | PDF + Obsidian + tracker |

## Las decisiones duras

{table(["Tema", "Decision prescriptiva", "Razon"], [
    ["Portfolio", "TwinSight manda. Todo lo demas apoya.", "Es la prueba mas alineada con Unity TA, WebGL y technical visualization."],
    ["Empleo", "Aceptar menor paga si hay experiencia real en el campo.", "El primer trabajo afin vale como puente; uno no afin puede encerrar el perfil."],
    ["Cursos", "Solo estudiar lo que desbloquee un entregable publico.", "Con 25h/semana, estudiar sin output retrasa empleo."],
    ["ARA", "Secundario hasta que TwinSight/GitHub/CV esten listos.", "ARA puede abrir Python/AI tooling, pero no debe competir con el foco principal."],
    ["Human CGCookie", "Extraer renders y breakdown, no convertirlo en proyecto infinito.", "Sirve como prueba visual/technical art de apoyo."],
    ["LinkedIn/CV", "Publicar antes de sentir perfeccion.", "La busqueda necesita feedback real del mercado."],
    ["Salario", "Piso bajo solo si rol es afin.", "3M COP puede ser aceptable como aprendizaje; no como desvio permanente."],
    ["Marketing", "No liderar con marketing.", "Solo aceptar si el core es Unity/3D/interactive/realtime."],
])}

## Como leer el plan

{numbered([
    "Lee primero la estrategia madre y el roadmap de 16 semanas.",
    "Usa el capitulo de semana tipo para organizar cada lunes.",
    "Usa los capitulos de activos para cerrar portfolio, GitHub, CV, LinkedIn, ArtStation y demo.",
    "Usa el capitulo de busqueda para decidir a quien aplicar y cuando descartar.",
    "Usa el tracker como fuente viva de estado operativo.",
    "Cada viernes revisa metricas, bloqueos y pivotes.",
])}

## Lo que no se debe hacer

{bullets([
    "No esperar a que ARA este perfecto para iniciar aplicaciones Unity/TA.",
    "No tomar cursos largos si no producen un asset visible en menos de 2 semanas.",
    "No presentar pasaporte portugues como autorizacion UE actual.",
    "No usar Senior Technical Artist como titulo propio.",
    "No vender TwinSight como digital twin industrial con IoT/live telemetry.",
    "No aplicar masivamente a roles que no puedas defender con portfolio.",
    "No aceptar marketing puro si no mejora experiencia Unity/3D/TA.",
])}

## Fuente viva

Este plan depende del tracker. El PDF es el mapa; el tracker es el panel de control. Cada semana se debe actualizar el tracker, no solo releer el PDF.

Generado: {generated}

## Fuentes

{source_table([
    (source("01_source_of_truth_profile.md"), "Datos canonicos"),
    (source("15_final_integrated_strategy.md"), "Estrategia integrada"),
    (source("16_final_consistency_audit_and_gap_register.md"), "Auditoria"),
    (md_link(PDF_ROOT / "dist" / "Biblia_Profesional_Alexander_EDITORIAL_AMPLIADA_v2.pdf", "Editorial ampliada v2"), "Base editorial previa"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "02_diagnostico_actual.tex",
            "Diagnostico actual y brechas reales",
            f"""
# Diagnostico ejecutivo

Tu problema no es ausencia de material. Tu problema actual es que la evidencia esta parcialmente cerrada y parcialmente dispersa. El mercado no va a evaluar la investigacion completa; va a evaluar los primeros 60-180 segundos de portfolio, GitHub, LinkedIn, CV y demo.

## Estado actual por activo

{table(["Activo", "Estado actual", "Siguiente accion", "Criterio de listo"], [
    ["TwinSight", "Proyecto principal en proceso de cierre/publicacion", "Convertir en caso portfolio + README + video", "Se entiende en 90 segundos y se puede defender en entrevista"],
    ["Portfolio web", "En desarrollo", "Terminar homepage + TwinSight case + links", "Primera pantalla comunica Unity TA / realtime 3D"],
    ["GitHub", "Falta terminar", "Limpiar repos, fijar TwinSight, README final", "Un reviewer tecnico entiende stack, setup, features y limites"],
    ["CV", "Falta terminar", "Crear variante Unity TA y technical visualization", "Una pagina, ATS-friendly, con links vivos"],
    ["LinkedIn", "Debe quedar alineado", "Headline/About/Featured/Experience", "Recruiter entiende rol y disponibilidad"],
    ["ArtStation", "Falta terminar", "Publicar breakdown TwinSight/Human", "Muestra pipeline visual, no solo imagenes"],
    ["Demo reel", "Falta terminar", "90s + teaser 30s", "Puede reemplazar una explicacion larga"],
    ["Human CGCookie", "Falta extraer renders", "Exportar renders y hacer breakdown corto", "Prueba visual secundaria lista"],
    ["ARA", "Falta dejarlo funcional", "Mantener como secundario, limpiar MVP", "README + demo minima sin sobreprometer"],
])}

## Brechas que bloquean empleo

{table(["Brecha", "Impacto", "Correccion exacta"], [
    ["No hay paquete publico completo", "Baja respuesta de aplicaciones", "Cerrar portfolio + GitHub + CV + LinkedIn antes de volumen alto"],
    ["Demo reel ausente", "Reclutador no ve evidencia rapido", "Crear video 90s aunque no sea perfecto"],
    ["GitHub no cerrado", "Reviewer tecnico pierde confianza", "README y pinned repos antes de aplicar a roles tecnicos fuertes"],
    ["ArtStation sin breakdown", "Technical art se ve debil", "Publicar pipeline, no galeria decorativa"],
    ["ARA incompleto", "Ruta Python/AI no defendible", "Dejar MVP minimo o bajarlo de prioridad"],
    ["Cursos sin output", "Consume tiempo de busqueda", "Cada curso debe alimentar un asset concreto"],
])}

## Orden de cierre

{numbered([
    "Portfolio homepage y TwinSight case.",
    "TwinSight README y GitHub pin.",
    "Demo reel 90s y teaser.",
    "CV Unity Technical Artist.",
    "LinkedIn headline/About/Featured.",
    "ArtStation breakdown TwinSight/Human.",
    "Tracker operativo.",
    "ARA MVP funcional solo despues de lo anterior o como sprint paralelo pequeno.",
])}

## Definicion de paquete minimo vendible

El paquete minimo vendible no significa mediocre. Significa suficiente para que alguien diga: "este perfil puede aportar en Unity/3D/realtime".

{table(["Elemento", "Minimo vendible", "No esperar a"], [
    ["Portfolio", "Homepage + TwinSight case + contacto", "Sitio perfecto con todos los proyectos"],
    ["Demo", "Video 90s grabado y subido", "Motion graphics perfectos"],
    ["GitHub", "README y capturas", "Codigo refactorizado como producto final"],
    ["CV", "Una pagina con links", "Todas las variantes imaginables"],
    ["LinkedIn", "Headline/About/Featured", "Estrategia de contenido completa"],
    ["ArtStation", "1 breakdown fuerte", "Galeria completa"],
])}

## Fuentes

{source_table([
    (source("07_portfolio_strategy_and_project_architecture.md"), "Portfolio"),
    (source("08B_twinsight_case_study_final_structure.md"), "TwinSight"),
    (source("10_github_linkedin_cv_strategy.md"), "Canales publicos"),
    (source("32_application_materials_gap_closure_plan.md"), "Cierre de brechas"),
    (source("33_portfolio_asset_production_sprint.md"), "Sprint assets"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "03_estrategia_madre.tex",
            "Estrategia madre",
            f"""
# Estrategia madre

La estrategia no es "buscar cualquier trabajo remoto". Es buscar un primer trabajo remoto o contrato que sea lo bastante afin para crear experiencia laboral real en Unity Technical Art, realtime 3D, technical visualization o campos adyacentes.

## Posicionamiento principal

```text
Unity Technical Artist / Real-Time 3D Developer focused on Unity WebGL, CAD-to-realtime optimization, interactive technical visualization and technical-art pipelines.
```

## Ruta principal y rutas de apoyo

{table(["Ruta", "Prioridad", "Que vendes", "Prueba principal", "Riesgo"], [
    ["Unity Technical Artist", "Principal", "Pipeline, optimization, realtime constraints, Unity/Blender bridge", "TwinSight + Human breakdown", "Que pidan seniority AAA"],
    ["Unity WebGL Developer", "Alta", "Unity C#, browser deployment, interaction", "TwinSight WebGL", "Que pidan gameplay puro"],
    ["Technical Visualization", "Alta", "3D inspection, assembly, product visualization", "TwinSight case + metrics", "Titulo menos comun"],
    ["XR/Simulation", "Media", "Unity interaction and inspection workflows", "TwinSight + extension roadmap", "Hardware/seniority"],
    ["Python/AI tooling", "Secundaria", "Automation and research workflows", "ARA", "Desviar el foco"],
    ["3D/Blender fallback", "Secundaria", "Technical art visual/pipeline support", "Human CGCookie renders", "Menor salario/foco"],
])}

## Regla de aceptacion de empleo

Acepta una oferta de 3 millones COP si cumple al menos 3 de estas condiciones:

{bullets([
    "El rol usa Unity, realtime 3D, WebGL, technical art, XR, simulation o product/technical visualization.",
    "Puedes mostrar parte del aprendizaje como experiencia futura, aunque no puedas publicar assets internos.",
    "Te deja seguir mejorando portfolio 5-8 horas/semana.",
    "Tiene mentor, equipo tecnico o procesos que aumenten seniority real.",
    "No te encierra en marketing puro, soporte no tecnico o tareas sin 3D.",
    "Tiene camino a revision salarial o contrato mejor en 3-6 meses.",
])}

Rechazala si cumple cualquiera de estas:

{bullets([
    "Es marketing puro sin Unity/3D/realtime.",
    "Paga bajo y consume toda la energia sin aprendizaje transferible.",
    "Pide exclusividad abusiva o pruebas largas no pagadas.",
    "Te obliga a claims falsos de seniority, EU authorization o produccion AI.",
])}

## Foco balanceado

Con 25 horas semanales, la distribucion base es:

{table(["Bloque", "Horas/semana", "Uso"], [
    ["Portfolio y activos", "10h", "Cerrar TwinSight, web, demo, GitHub, ArtStation"],
    ["Aplicaciones y outreach", "7h", "Scoring, CV adaptado, aplicaciones, mensajes"],
    ["Estudio aplicado", "4h", "Solo blockers de portfolio/entrevista"],
    ["Entrevista y negociacion", "2h", "Pitch, preguntas tecnicas, salario"],
    ["Revision y tracker", "2h", "Metricas, pivotes, plan siguiente semana"],
])}

## North Star

La metrica principal no es cantidad de cursos ni cantidad de empresas guardadas. Es:

```text
Numero de conversaciones laborales afines generadas por semana.
```

Una conversacion laboral afin puede ser entrevista, mensaje respondido, feedback de recruiter, review tecnico, invitacion a prueba o contacto con empresa alineada.

## Fuentes

{source_table([
    (source("02_market_role_fit_and_positioning.md"), "Fit de roles"),
    (source("03_salary_benchmark_and_remote_colombia.md"), "Salario"),
    (source("27_strategy_scenarios_conservative_balanced_aggressive.md"), "Modo balanceado"),
    (source("31_application_targeting_matrix_and_search_protocol.md"), "Scoring"),
])}
""",
        )
    )

    weekly_rows = [
        ["1", "Cierre de foco", "Congelar narrativa, estructura web y lista de assets", "Roadmap creado, tracker activo, checklist TwinSight"],
        ["2", "Portfolio base", "Homepage + TwinSight skeleton", "Sitio navegable con CTA y caso incompleto pero estructurado"],
        ["3", "TwinSight caso", "Completar problema, solucion, pipeline, features, metrics", "Case study readable end-to-end"],
        ["4", "Demo y media", "Grabar 90s + teaser + screenshots/GIFs", "Video publicado o local listo"],
        ["5", "GitHub", "README TwinSight, repo cleanup, pinned repos", "Reviewer puede entender el proyecto"],
        ["6", "CV/LinkedIn", "CV Unity TA + LinkedIn headline/About/Featured", "Perfil publico coherente"],
        ["7", "ArtStation/Human", "Renders Human + breakdown TwinSight/technical art", "1-2 posts publicables"],
        ["8", "Soft launch", "Aplicar a 8-12 targets A1 con outreach", "Primer feedback del mercado"],
        ["9", "Iteracion", "Corregir assets segun feedback", "Mejoras documentadas"],
        ["10", "Main wave 1", "Aplicar 10-15 roles afinados", "Pipeline con follow-ups"],
        ["11", "Entrevistas", "Practicar pitch, respuesta tecnica, salario", "Answer bank dominado"],
        ["12", "Main wave 2", "Aumentar aplicaciones si conversion >0", "20-40 aplicaciones acumuladas"],
        ["13", "ARA MVP", "Dejar ARA funcional si ya hay paquete Unity", "README + demo minima"],
        ["14", "Pivote controlado", "Ajustar rol/targets/salario segun datos", "Decision escrita"],
        ["15", "Negociacion", "Scorecard de oferta y contrato", "Rangos claros"],
        ["16", "Cierre o expansion", "Cerrar oferta o relanzar wave ampliada", "Plan 90 dias actualizado"],
    ]
    paths.append(
        chapter_tex(
            "04_roadmap_16_semanas.tex",
            "Roadmap 16 semanas",
            f"""
# Principio del roadmap

El roadmap asume 25 horas semanales. Si una semana baja de 15 horas reales, no se compensa con culpa: se reprograma. Si una semana supera 25 horas, no se abre una rama nueva; se acelera el entregable principal.

## Tabla maestra

{table(["Semana", "Tema", "Objetivo", "Definition of done"], weekly_rows)}

## Fase 1: semanas 1-4, convertir TwinSight en evidencia

Meta: que TwinSight deje de ser "tesis/proyecto" y se vuelva "case study laboral".

{table(["Semana", "Haz esto", "No hagas esto", "Decision viernes"], [
    ["1", "Congelar narrativa y secciones del portfolio", "Cambiar de identidad profesional cada dia", "El titulo publico queda fijo?"],
    ["2", "Montar homepage + estructura TwinSight", "Perseguir diseno perfecto", "El sitio comunica rol en 10 segundos?"],
    ["3", "Completar caso con pipeline, features y metricas", "Meter toda la tesis", "Un recruiter lo entiende?"],
    ["4", "Grabar demo 90s y extraer media", "Esperar animacion perfecta", "El video muestra valor sin explicacion extra?"],
])}

## Fase 2: semanas 5-7, canales publicos

Meta: que GitHub, CV, LinkedIn y ArtStation digan lo mismo con formatos distintos.

{table(["Semana", "Haz esto", "No hagas esto", "Decision viernes"], [
    ["5", "README TwinSight, pinned repos, screenshots", "Refactor infinito", "Un dev puede revisar sin preguntar contexto?"],
    ["6", "CV Unity TA + LinkedIn About/Featured", "Crear 10 CVs antes de aplicar", "Hay una version default lista?"],
    ["7", "ArtStation breakdown + Human renders", "Convertir Human en proyecto principal", "Visualmente pareces technical artist?"],
])}

## Fase 3: semanas 8-12, busqueda real

Meta: generar conversaciones laborales afines.

{table(["Semana", "Haz esto", "No hagas esto", "Decision viernes"], [
    ["8", "Soft launch A1: 8-12 targets", "Aplicar a todo", "Hubo respuestas, views o feedback?"],
    ["9", "Corregir activos segun feedback", "Ignorar datos del mercado", "Que objecion se repitio?"],
    ["10", "Main wave 1: 10-15 roles", "Pausar por miedo al rechazo", "Que segmento responde mejor?"],
    ["11", "Practicar entrevistas y pruebas", "Improvisar TwinSight", "Puedes defender limites y decisiones?"],
    ["12", "Main wave 2 y follow-ups", "Cambiar todo por una semana mala", "Conversion suficiente o pivote?"],
])}

## Fase 4: semanas 13-16, profundidad y cierre

Meta: cerrar oferta o ajustar estrategia con datos.

{table(["Semana", "Haz esto", "No hagas esto", "Decision viernes"], [
    ["13", "ARA MVP si el paquete Unity ya existe", "Usar ARA como excusa para no aplicar", "ARA suma o distrae?"],
    ["14", "Pivote controlado por evidencia", "Pivote emocional", "Cambiar roles, targets o mensaje?"],
    ["15", "Negociacion y contrato", "Aceptar cualquier cosa sin scorecard", "La oferta suma experiencia real?"],
    ["16", "Cierre o nueva wave", "Declarar fracaso sin datos", "90 dias siguientes: empleo, expansion o refuerzo?"],
])}

## Regla de avance

No se pasa a volumen alto de aplicaciones hasta tener:

{bullets([
    "Portfolio homepage operativo.",
    "TwinSight case completo aunque sea version 1.",
    "Demo o video walkthrough.",
    "GitHub README principal.",
    "CV Unity Technical Artist.",
    "LinkedIn actualizado.",
])}

Si falta algo de esa lista, se permite soft launch, pero no main wave.
""",
        )
    )

    paths.append(
        chapter_tex(
            "05_semana_tipo.tex",
            "Semana tipo de 25 horas",
            f"""
# Semana tipo

La semana se disena para evitar dos trampas: trabajar solo en portfolio y nunca aplicar, o aplicar sin evidencia suficiente. La estructura balanceada es fija, pero el contenido cambia por fase.

## Distribucion base

{table(["Dia", "Bloque principal", "Horas", "Resultado esperado"], [
    ["Lunes", "Plan + activo critico", "5h", "Semana definida, 1 bloque de portfolio avanzado"],
    ["Martes", "Activo publico", "5h", "Portfolio/GitHub/CV/LinkedIn mejorado"],
    ["Miercoles", "Aplicaciones/outreach", "5h", "Targets scoreados y aplicaciones enviadas"],
    ["Jueves", "Estudio aplicado + pruebas", "5h", "Skill desbloquea asset o entrevista"],
    ["Viernes", "Revision + entrevista + follow-up", "5h", "Tracker actualizado y decision semanal"],
])}

## Lunes

{numbered([
    "Abrir tracker y revisar Dashboard.",
    "Elegir foco semanal: portfolio, public profiles, applications o interview.",
    "Definir 3 entregables maximo.",
    "Bloquear 2 horas para el activo mas importante.",
    "Cerrar el dia con una version visible, no solo notas.",
])}

## Martes

{numbered([
    "Trabajar en el canal publico mas debil.",
    "Si portfolio no esta listo, portfolio manda.",
    "Si portfolio esta listo, GitHub o CV manda.",
    "Si GitHub/CV estan listos, LinkedIn/ArtStation manda.",
    "Publicar o preparar para publicar; no dejarlo todo en borrador.",
])}

## Miercoles

{numbered([
    "Recolectar 10-15 roles/empresas.",
    "Scorear cada uno en el tracker.",
    "Descartar sin culpa los que fallen por authorization, onsite o marketing puro.",
    "Aplicar a 3-6 roles con fit alto.",
    "Enviar 2-4 mensajes de outreach si hay contacto razonable.",
])}

## Jueves

{numbered([
    "Estudiar solo un bloqueo real.",
    "Convertir el estudio en mejora visible: screenshot, README, video, commit o answer bank.",
    "Practicar una pregunta tecnica.",
    "Actualizar tracker de estudio.",
    "No iniciar curso nuevo si no se cerro el output anterior.",
])}

## Viernes

{numbered([
    "Actualizar estados de aplicaciones.",
    "Enviar follow-ups pendientes.",
    "Revisar si hubo respuestas, views, entrevistas o silencio.",
    "Registrar objeciones y ajustar una pieza.",
    "Definir la unica prioridad de la siguiente semana.",
])}

## Si solo hay 10 horas esa semana

{table(["Prioridad", "Accion"], [
    ["1", "Mantener el activo critico de la fase"],
    ["2", "Enviar al menos 2 aplicaciones o follow-ups"],
    ["3", "Actualizar tracker"],
    ["4", "Posponer cursos"],
])}

## Si hay energia extra

{table(["No usar energia extra para", "Usarla para"], [
    ["Abrir otro curso largo", "Grabar media para TwinSight"],
    ["Redisenar todo el sitio", "Pulir primer viewport"],
    ["Investigar 100 empresas", "Aplicar a 5 muy buenas"],
    ["Reescribir CV desde cero", "Adaptar bullets a 1 rol concreto"],
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "06_portfolio_twinsight.tex",
            "Guia exacta de portfolio y TwinSight",
            f"""
# Objetivo del portfolio

El portfolio debe responder cinco preguntas sin que el usuario piense demasiado:

{numbered([
    "Que haces?",
    "Cual es tu mejor prueba?",
    "Que parte hiciste tu?",
    "Que tecnologias usaste?",
    "Como te contacto o reviso mas?",
])}

## Homepage

{table(["Seccion", "Contenido exacto", "Criterio de listo"], [
    ["Hero", "Unity Technical Artist / Real-Time 3D Developer", "Rol visible sin scroll"],
    ["Subcopy", "Unity WebGL, CAD-to-realtime, technical visualization", "No suena generico"],
    ["CTA 1", "View TwinSight X500", "Lleva al caso"],
    ["CTA 2", "GitHub / LinkedIn / CV", "Links vivos"],
    ["Featured", "TwinSight con imagen/video/metricas", "Es el primer proyecto"],
    ["Other work", "ARA, Human, secundarios", "No compiten con TwinSight"],
    ["About", "Breve, tecnico, availability", "Colombia remote contractor/B2B"],
])}

## TwinSight case

{table(["Bloque", "Guia de escritura", "No incluir"], [
    ["Problem", "Assembly info is fragmented and hard to inspect spatially", "Historia academica larga"],
    ["Solution", "Unity WebGL technical visualization prototype", "Digital twin industrial completo"],
    ["Role", "Unity, C#, UI, Blender cleanup, documentation, evaluation", "Equipo ficticio o claims vagos"],
    ["Features", "selection, exploded view, clipping, visual modes, info panels", "Lista sin screenshots"],
    ["Pipeline", "CAD/manufacturer docs -> Blender -> Unity -> WebGL", "Demasiada teoria"],
    ["Optimization", "antes/despues, constraints WebGL, decisiones", "Numeros no verificados"],
    ["Evaluation", "SUS, NASA-TLX Raw, Think-Aloud, participants", "Conclusiones infladas"],
    ["Limitations", "Academic prototype, no live telemetry", "Ocultar debilidades"],
    ["Next steps", "LOD, metadata, validation, profiling, tests", "Promesas imposibles"],
])}

## Orden de produccion de assets

{numbered([
    "Captura hero de TwinSight.",
    "GIF o video de selection.",
    "GIF o video de exploded view.",
    "GIF o video de clipping/cross-section.",
    "Screenshot de visual modes.",
    "Diagrama pipeline CAD-to-realtime.",
    "Tarjeta de metricas verificadas.",
    "Screenshot GitHub README.",
    "Video 90s.",
])}

## Copy base para TwinSight

```text
TwinSight X500 is a Unity WebGL technical visualization prototype for drone assembly inspection. It transforms static technical documentation into an interactive browser-based 3D viewer with component selection, exploded view, clipping/cross-section tools, visual modes and contextual information panels.

The project demonstrates CAD-to-realtime optimization, Unity interaction design, WebGL constraints, UI implementation and usability/workload evaluation. It is an academic/portfolio prototype, not a production digital twin with live telemetry.
```

## Human CGCookie

Human no debe reemplazar TwinSight. Debe cumplir una funcion clara: demostrar ojo visual, renders, technical-art presentation y pipeline artistico.

{table(["Output", "Uso", "Tiempo maximo"], [
    ["3-5 renders finales", "Portfolio/ArtStation", "1 semana"],
    ["Breakdown corto", "Technical art support", "1-2 dias"],
    ["Material/lighting notes", "Mostrar criterio visual", "medio dia"],
    ["Before/after", "Mostrar proceso", "medio dia"],
])}

## Definition of done portfolio

{bullets([
    "El homepage dice Unity Technical Artist / Real-Time 3D.",
    "TwinSight se puede abrir desde el primer viewport.",
    "Hay al menos un video o GIF funcional.",
    "Los links a GitHub/LinkedIn/CV funcionan.",
    "Las limitaciones estan explicadas sin bajar el valor.",
    "No hay placeholders visibles.",
])}

## Fuentes

{source_table([
    (source("08_twinsight_x500_case_study.md"), "Caso TwinSight"),
    (source("08B_twinsight_case_study_final_structure.md"), "Estructura TwinSight"),
    (source("20_portfolio_copy_and_site_structure.md"), "Portfolio"),
    (source("21B_twinsight_demo_video_final_plan.md"), "Demo"),
    (source("33_portfolio_asset_production_sprint.md"), "Assets"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "07_canales_publicos.tex",
            "GitHub, CV, LinkedIn, ArtStation y demo reel",
            f"""
# Regla de coherencia

Todos los canales deben contar la misma historia con distinta profundidad:

```text
Unity Technical Artist / Real-Time 3D Developer focused on Unity WebGL, CAD-to-realtime optimization and interactive technical visualization.
```

## GitHub

{table(["Accion", "Instruccion exacta", "Listo cuando"], [
    ["Pinned repos", "TwinSight primero, portfolio, ARA solo si funcional", "No hay repos irrelevantes arriba"],
    ["README TwinSight", "Overview, demo, features, pipeline, metrics, limitations, roadmap", "Se entiende sin abrir tesis"],
    ["Screenshots", "Hero, feature, pipeline, metrics", "README no es pared de texto"],
    ["Repo hygiene", "No secrets, no basura, no archivos pesados innecesarios", "Reviewer no pierde confianza"],
])}

## CV

CV principal: Unity Technical Artist / Real-Time 3D Developer.

{table(["Seccion", "Contenido"], [
    ["Header", "Nombre, rol, location, links"],
    ["Summary", "2-3 lineas, Unity/WebGL/technical visualization"],
    ["Projects", "TwinSight primero, ARA/Human secundarios"],
    ["Skills", "Unity, C#, WebGL, Blender, technical art, CAD-to-realtime"],
    ["Education", "Tesis/proyecto si aporta contexto"],
    ["Languages", "Ingles + otros segun nivel real"],
])}

Bullet base:

```text
Built TwinSight X500, a Unity WebGL technical visualization prototype for drone assembly inspection using Unity, C#, URP, UI Toolkit and Blender, including component selection, exploded view, clipping tools, visual modes and usability/workload evaluation.
```

## LinkedIn

Headline:

```text
Unity Technical Artist / Real-Time 3D Developer | Unity WebGL, CAD-to-Realtime, Interactive Technical Visualization
```

Featured:

{numbered([
    "TwinSight case study.",
    "TwinSight demo video.",
    "GitHub repo.",
    "ArtStation breakdown.",
    "CV PDF.",
])}

## ArtStation

ArtStation debe ser technical-art breakdown, no solo galeria.

{table(["Slide", "Contenido"], [
    ["Cover", "TwinSight/Human hero image"],
    ["Context", "Que problema visual/tecnico resuelve"],
    ["Pipeline", "Source -> cleanup -> Unity/render"],
    ["Breakdown", "Materials, lighting, optimization, visual modes"],
    ["Final", "Renders/screenshots"],
    ["Links", "Portfolio/GitHub"],
])}

## Demo reel

{table(["Version", "Duracion", "Uso", "Contenido"], [
    ["Teaser", "15-30s", "LinkedIn/social", "Hook + 2-3 features"],
    ["Main", "90s", "Portfolio/recruiter", "Problem, features, pipeline, metrics"],
    ["Technical", "3-5 min", "Interview", "Architecture, tradeoffs, limitations"],
])}

## Orden de publicacion

{numbered([
    "Publicar portfolio y TwinSight case.",
    "Actualizar GitHub y README.",
    "Subir demo main.",
    "Actualizar CV.",
    "Actualizar LinkedIn.",
    "Publicar ArtStation.",
    "Enviar soft launch.",
])}

## Fuentes

{source_table([
    (source("10_github_linkedin_cv_strategy.md"), "Canales publicos"),
    (source("17_cv_base_and_role_variants.md"), "CV"),
    (source("18_linkedin_final_rewrite.md"), "LinkedIn"),
    (source("19B_github_readme_twinsight_final.md"), "GitHub"),
    (source("28D_artstation_portfolio_benchmark_complete.md"), "ArtStation"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "08_busqueda_aplicaciones.tex",
            "Busqueda laboral y aplicaciones",
            f"""
# Objetivo de busqueda

El objetivo no es aplicar mas. Es aplicar mejor y generar conversaciones afines. En modo balanceado, la busqueda empieza suave cuando el paquete minimo existe y se acelera al medir respuesta.

## Capas de rol

{table(["Capa", "Roles", "Accion"], [
    ["A1", "Unity Technical Artist, Real-Time 3D Developer, Technical Visualization Developer", "Aplicar primero"],
    ["A2", "Unity WebGL Developer, XR Developer, Simulation Developer", "Aplicar si el posting conecta con TwinSight"],
    ["B1", "3D pipeline/tooling, product visualization, configurators", "Aplicar con CV adaptado"],
    ["B2", "Python automation / AI tooling", "Solo con ARA o si hay fit fuerte"],
    ["C", "Marketing/creative general", "Evitar salvo 3D/interactive core"],
])}

## Scoring antes de aplicar

{table(["Criterio", "0", "1", "2"], [
    ["Fit rol", "No Unity/3D", "Parcial", "Unity/TA/RT3D claro"],
    ["Portfolio match", "No conecta", "Conecta indirecto", "TwinSight directo"],
    ["Remoto", "Onsite imposible", "Hibrido/dudoso", "Remote compatible"],
    ["Contrato", "No claro", "Employee/EOR posible", "Contractor/B2B o remote claro"],
    ["Authorization", "Bloquea", "No claro", "No bloquea"],
    ["Salario", "Muy bajo", "Aceptable", "Ideal/alto"],
    ["Experiencia", "Marketing/no afin", "Algun 3D", "Experiencia en campo"],
])}

Aplicar si score >= 10. Investigar si 7-9. Descartar si <= 6 salvo oportunidad unica.

## Rutina de aplicacion

{numbered([
    "Buscar 10-15 oportunidades.",
    "Scorear en tracker.",
    "Elegir 3-6 de mejor fit.",
    "Adaptar CV en 10-20 minutos, no reescribir completo.",
    "Enviar aplicacion.",
    "Enviar outreach si existe recruiter, founder, TA lead o hiring manager.",
    "Registrar fecha de follow-up.",
])}

## Mensaje corto recruiter

```text
Hi [Name], I am a Unity Technical Artist / Real-Time 3D Developer based in Colombia, focused on Unity WebGL, CAD-to-realtime optimization and interactive technical visualization.

My main project is TwinSight X500, a Unity WebGL technical visualization prototype for drone assembly inspection with component selection, exploded view, clipping tools, visual modes and usability/workload evaluation.

I saw [role/company] and thought the overlap with [specific need] was strong. I am available for remote contractor/B2B work and would be glad to share the case study/demo.
```

## Follow-up

Enviar 7-10 dias despues si hay contacto humano.

```text
Hi [Name], just following up on my application for [role]. The role stood out because of the overlap with Unity/realtime 3D and [specific company need]. My relevant work is TwinSight X500: [link]. Happy to share more context if useful.
```

## Cuando bajar el piso salarial

Bajar hasta 3 millones COP solo si:

{bullets([
    "El rol es realmente afin a Unity/3D/TA.",
    "Hay aprendizaje o experiencia transferible.",
    "No bloquea el portfolio por completo.",
    "Tiene revision en 3-6 meses o salida clara.",
])}

No bajar si el rol es marketing puro, soporte no tecnico o consumo total de tiempo.

## Fuentes

{source_table([
    (source("11_company_targets_job_boards_recruiters.md"), "Empresas"),
    (source("12_application_system_and_tracker.md"), "Sistema"),
    (source("22_outreach_templates_english_spanish.md"), "Templates"),
    (source("31_application_targeting_matrix_and_search_protocol.md"), "Scoring"),
    (source("34_weekly_application_execution_system.md"), "Aplicaciones semanales"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "09_estudio_cursos.tex",
            "Estudio, cursos y rutas de aprendizaje",
            f"""
# Regla de estudio

Con 25 horas semanales y objetivo de empleo, el estudio es subordinado a la empleabilidad. Cada bloque de estudio debe tener un output visible o una mejora concreta en entrevista.

## Orden de estudio por ROI

{table(["Prioridad", "Tema", "Por que", "Output"], [
    ["1", "Unity WebGL constraints", "Directo a TwinSight y roles Unity", "Checklist build/profiling"],
    ["2", "Blender optimization", "Directo a CAD-to-realtime/TA", "Before-after breakdown"],
    ["3", "C# Unity architecture", "Defensa tecnica", "Refactor pequeno documentado"],
    ["4", "UI Toolkit / interaction", "TwinSight y apps tecnicas", "Panel/polish visible"],
    ["5", "Demo/video editing", "Aumenta conversion", "Demo 90s"],
    ["6", "Houdini fundamentals", "TA/procedural upside", "Mini tool despues del paquete publico"],
    ["7", "Python/AI tooling", "ARA secundario", "ARA MVP"],
    ["8", "Master/certificaciones", "Futuro/credencial", "Solo si no retrasa empleo"],
])}

## Cursos: que hacer y que pausar

{table(["Categoria", "Hacer ahora", "Pausar"], [
    ["TwinSight blockers", "Unity WebGL, profiling, UI, Blender cleanup", "Cursos largos sin aplicacion inmediata"],
    ["Technical art", "Optimization, breakdown, shaders basicos", "FX avanzado si no hay output rapido"],
    ["Human CGCookie", "Extraer renders y breakdown", "Rehacer todo el personaje"],
    ["Rebelway", "Houdini fundamentals solo despues de soft launch", "Cursos largos VFX antes de empleo"],
    ["Unity certification", "Evaluar despues de portfolio y aplicaciones", "Tomarla antes del paquete publico"],
    ["Master/PhD", "Investigar como opcion 12-24 meses", "Usarlo como escape del mercado actual"],
])}

## Plan de estudio semanal

{table(["Dia", "Tiempo", "Tipo de estudio", "Output obligatorio"], [
    ["Jueves", "3h", "Bloque tecnico principal", "Mejora visible"],
    ["Viernes", "1h", "Entrevista tecnica", "Respuesta practicada"],
    ["Flexible", "0-2h", "Microlearning", "Nota o commit"],
])}

## Decision para certificacion Unity

Tomarla solo si estas condiciones se cumplen:

{bullets([
    "Portfolio y TwinSight estan publicados.",
    "GitHub y CV estan listos.",
    "Ya hiciste al menos 20 aplicaciones o 2 semanas de soft launch.",
    "El examen se puede preparar en 2-4 semanas.",
    "No desplaza aplicaciones ni entrevistas.",
])}

## Decision para master

Master solo si mejora al menos 3 de 5:

{bullets([
    "Movilidad/visa.",
    "Red laboral.",
    "Practicas o industria.",
    "Especializacion directa en realtime/XR/technical art/simulation.",
    "Costo razonable o beca.",
])}

PhD queda pausado salvo giro claro a investigacion o beca excelente con objetivo R&D.

## Fuentes

{source_table([
    (source("06_education_courses_rebelway_masters_phd.md"), "Cursos y posgrados"),
    (source("Research/deep-research-report_06.md"), "Cursos Unity/RT3D"),
    (source("Research/deep-research-report_C3.md"), "Masters"),
    (source("Research/deep-research-report_C4.md"), "Becas"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "10_ara_secundarios.tex",
            "ARA y proyectos secundarios",
            f"""
# Rol de ARA

ARA es una ruta secundaria poderosa, pero no debe competir con TwinSight durante el cierre del paquete principal. Su funcion es abrir conversaciones de Python automation / AI tooling si el mercado Unity tarda o si aparece un rol mixto.

## Cuando trabajar ARA

{table(["Estado del paquete principal", "Decision ARA"], [
    ["Portfolio/TwinSight incompleto", "No trabajar ARA salvo bug critico de 30 minutos"],
    ["Portfolio publicado pero GitHub/CV incompletos", "No trabajar ARA"],
    ["Paquete publico minimo listo", "Sprint ARA de 1 semana"],
    ["Hay entrevistas Unity activas", "ARA pausado salvo que lo pidan"],
    ["No hay traction tras 4-6 semanas", "ARA puede subir a ruta B"],
])}

## MVP de ARA

{table(["Elemento", "Minimo"], [
    ["README", "Que hace, que no hace, stack, ejemplo"],
    ["Demo", "Un workflow reproducible"],
    ["Architecture", "Diagrama simple"],
    ["Limitations", "Prototype, not production platform"],
    ["Use case", "Research automation/report generation"],
])}

## Secundarios

{table(["Proyecto", "Usar para", "No usar para"], [
    ["Human CGCookie", "Visual/technical art proof", "Reemplazar TwinSight"],
    ["AI News Aggregator", "Python/web fallback si funcional", "Perfil principal"],
    ["FitApp/otros", "Solo si estan limpios", "Distraer aplicacion Unity"],
])}

## Regla de portfolio secundario

Un proyecto secundario entra al portfolio si:

{bullets([
    "Aumenta confianza en el rol principal.",
    "Se explica en menos de 60 segundos.",
    "Tiene imagen, video, README o demo.",
    "No contradice el posicionamiento Unity TA.",
])}

## Fuentes

{source_table([
    (source("09_ara_ai_tools_and_secondary_projects.md"), "ARA"),
    (source("07_portfolio_strategy_and_project_architecture.md"), "Arquitectura de proyectos"),
    (source("33_portfolio_asset_production_sprint.md"), "Assets secundarios"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "11_entrevistas_negociacion.tex",
            "Entrevistas, pruebas y negociacion",
            f"""
# Entrevista: objetivo real

La entrevista debe probar criterio. No necesitas sonar como senior AAA; necesitas explicar decisiones, limites y mejoras con claridad.

## Pitch 60 segundos

```text
I am a Unity Technical Artist / Real-Time 3D Developer focused on Unity WebGL, CAD-to-realtime optimization and interactive technical visualization. My main project is TwinSight X500, a Unity WebGL inspection prototype for drone assembly that includes component selection, exploded view, clipping tools, visual modes and usability/workload evaluation. I am looking for remote roles where I can contribute to realtime 3D, technical art pipelines, product visualization, XR or simulation workflows.
```

## Respuestas clave

{table(["Pregunta", "Respuesta guia"], [
    ["Are you senior?", "I position myself by evidence rather than title; strongest fit is Unity/realtime technical visualization and technical art pipeline work."],
    ["Is TwinSight a digital twin?", "It is digital-twin-adjacent technical visualization, not a live telemetry/IoT industrial digital twin."],
    ["What did you do?", "Unity, C#, UI, Blender cleanup, WebGL deployment, documentation and evaluation."],
    ["What would you improve?", "LOD, metadata schema, automated import validation, profiling, tests and deployment hardening."],
    ["What salary?", "Depends on scope and contract model; for relevant experience I can evaluate lower entry offers, but USD 2000 is my realistic target."],
    ["EU authorization?", "Not currently; I am based in Colombia and available for remote contractor/B2B. Portuguese passport expected around 2028."],
])}

## Pruebas tecnicas

{table(["Tipo", "Aceptar si", "Pedir antes"], [
    ["2-4h bounded", "Relevante al rol", "Criterios de evaluacion"],
    ["Paid test", "Scope claro", "Pago, IP, deadline"],
    ["Long unpaid", "Casi nunca", "Reducir alcance o pedir pago"],
    ["Portfolio walkthrough", "Siempre", "Preparar historia"],
    ["Live review", "Si tema razonable", "Setup y duracion"],
])}

## Negociacion

{table(["Oferta", "Decision"], [
    ["3M COP afin", "Aceptar si da experiencia real y no destruye portfolio"],
    ["3M COP no afin", "Rechazar salvo emergencia"],
    ["USD 1000-1500 afin", "Considerar si contractor claro y aprendizaje fuerte"],
    ["USD 2000", "Ideal realista; negociar condiciones"],
    ["USD 6000", "Ambicioso; requiere fit fuerte, portfolio y seniority percibida"],
])}

## Scorecard de oferta

Puntua 1-5:

{bullets([
    "Fit Unity/TA/3D.",
    "Aprendizaje transferible.",
    "Compensacion.",
    "Contrato y pago claros.",
    "Carga horaria sostenible.",
    "Remote compatible Colombia.",
    "Permiso para mostrar experiencia o describir trabajo.",
])}

Aceptar si promedio >= 3.5 y fit tecnico >= 4, incluso si paga no es ideal.

## Fuentes

{source_table([
    (source("13_interview_negotiation_and_offer_risk.md"), "Negociacion"),
    (source("23_interview_answer_bank.md"), "Banco de respuestas"),
    (source("24_offer_evaluation_scorecard.md"), "Scorecard"),
    (source("35_interview_defense_and_technical_screen_system.md"), "Defensa"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "12_legal_idiomas_movilidad.tex",
            "Legalidad, idiomas y movilidad",
            f"""
# Regla legal

No afirmar autorizacion laboral UE actual. El pasaporte portugues esperado alrededor de 2028 es una ventaja futura, no una herramienta actual para pasar filtros de hiring.

## Wording publico

```text
Currently based in Colombia and available for remote international contractor/B2B roles. Portuguese passport/citizenship expected around 2028, which may support future EU mobility, but I do not currently claim EU work authorization.
```

## Idiomas

{table(["Idioma", "Prioridad", "Accion"], [
    ["Ingles", "Alta inmediata", "Pitch, entrevistas, LinkedIn, CV, demo script"],
    ["Aleman", "Media futura", "A1/A2 si Alemania toma fuerza"],
    ["Portugues", "Media futura", "A1 funcional por ruta Portugal"],
    ["Otros", "Baja", "No invertir ahora"],
])}

## Legal/contractor readiness

Antes de contrato remoto:

{bullets([
    "Entender facturacion y obligaciones locales.",
    "Calcular bruto vs neto.",
    "Separar impuestos/reservas.",
    "Revisar IP, NDA, exclusividad y terminacion.",
    "Confirmar moneda, plataforma de pago y fechas.",
])}

## Fuentes

{source_table([
    (source("04_eu_portugal_germany_mobility_strategy.md"), "Movilidad"),
    (source("05_language_strategy_and_roi.md"), "Idiomas"),
    (source("Research/deep-research-report_03.md"), "Contractor/payroll"),
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "13_tracker_uso.tex",
            "Como usar el tracker",
            f"""
# Funcion del tracker

El tracker no es archivo administrativo. Es el mecanismo para que la estrategia no dependa de memoria o ansiedad.

## Hojas esperadas

{table(["Hoja", "Uso"], [
    ["Dashboard", "Resumen de progreso y metricas"],
    ["Weekly Plan", "Plan por semana y estado"],
    ["Applications", "Pipeline de empresas y roles"],
    ["Assets", "Estado de portfolio/GitHub/CV/LinkedIn/etc."],
    ["Study", "Cursos y outputs"],
    ["Offers", "Evaluacion de ofertas"],
    ["Lists", "Valores de dropdown y guias"],
])}

## Rutina semanal

{numbered([
    "Lunes: actualizar Weekly Plan y elegir foco.",
    "Miercoles: registrar aplicaciones y outreach.",
    "Jueves: registrar estudio/output.",
    "Viernes: actualizar estados, follow-ups y metricas.",
])}

## Campos criticos

{table(["Campo", "Por que importa"], [
    ["Fit Score", "Evita aplicar por impulso"],
    ["Role Layer", "Distingue principal/secundario/fallback"],
    ["Remote Scope", "Evita bloqueos de elegibilidad"],
    ["Salary Signal", "Ayuda a negociar y comparar"],
    ["Next Action", "Evita perder follow-ups"],
    ["Blocker", "Convierte ansiedad en accion"],
])}

## Regla de revision

Si el tracker no muestra movimiento en 2 semanas, el problema no es motivacion: es que el sistema esta demasiado pesado o el foco esta mal definido. Reducir entregables, no abandonar estrategia.

## Archivo

- {md_link(TRACKER_PATH, "Tracker Estrategia Laboral XLSX")}
""",
        )
    )

    paths.append(
        chapter_tex(
            "14_pivotes_riesgos.tex",
            "Pivotes, riesgos y recuperacion",
            f"""
# Pivotes

Un pivote solo se hace por evidencia, no por una mala semana.

## Si no hay respuestas tras 20 aplicaciones

{numbered([
    "Revisar fit score: aplicaste a roles correctos?",
    "Revisar primer viewport del portfolio.",
    "Revisar CV headline y bullets.",
    "Revisar si GitHub abre bien.",
    "Enviar 5 mensajes de feedback a contactos/recruiters.",
    "Ajustar target, no cambiar identidad completa.",
])}

## Si hay respuestas pero no entrevistas

{bullets([
    "El problema probable es CV/fit o links.",
    "Mejorar CV y portfolio landing.",
    "Adaptar mas los bullets al posting.",
    "Usar TwinSight como prueba directa en el primer mensaje.",
])}

## Si hay entrevistas pero no ofertas

{bullets([
    "El problema probable es defensa tecnica, salario o seniority.",
    "Practicar walkthrough de TwinSight.",
    "Preparar respuestas a digital twin, AI, WebGL, optimization.",
    "Usar scorecard para no sonar desesperado.",
])}

## Si aparece oferta no ideal

{table(["Caso", "Decision"], [
    ["Afin + baja paga", "Aceptar si aprendizaje fuerte y tiempo sostenible"],
    ["Afin + contrato riesgoso", "Negociar clausulas"],
    ["No afin + baja paga", "Rechazar salvo urgencia"],
    ["No afin + buena paga", "Evaluar si financia transicion sin encerrar perfil"],
])}

## Riesgos personales del sistema

{table(["Riesgo", "Antidoto"], [
    ["Perfeccionismo", "Definition of done semanal"],
    ["Curso infinito", "Output obligatorio por curso"],
    ["Investigacion sin accion", "Miercoles de aplicaciones fijo"],
    ["Desvio a ARA", "ARA solo despues del paquete Unity"],
    ["Ansiedad por salario", "Piso/ideal/ambicioso separados"],
    ["Marketing por urgencia", "Aceptar solo si suma experiencia 3D/Unity"],
])}
""",
        )
    )

    detailed_weeks = [
        ["Semana 1", "Lunes", "Congelar narrativa: Unity Technical Artist / Real-Time 3D", "Titulo, pitch y prioridades escritos"],
        ["Semana 1", "Martes", "Auditar portfolio actual y listar assets faltantes", "Checklist de activos"],
        ["Semana 1", "Miercoles", "Crear tracker y primeras listas A1/A2", "20 targets guardados"],
        ["Semana 1", "Jueves", "Estudiar solo blockers del portfolio", "1 mejora aplicada"],
        ["Semana 1", "Viernes", "Revision y decision de foco", "Semana 2 planificada"],
        ["Semana 2", "Lunes", "Construir homepage estructura", "Hero + CTA + featured"],
        ["Semana 2", "Martes", "Crear seccion TwinSight skeleton", "Secciones del caso visibles"],
        ["Semana 2", "Miercoles", "Investigar 10 ejemplos de rol/empresa", "Targets scoreados"],
        ["Semana 2", "Jueves", "Pulir visual principal TwinSight", "Hero image/video placeholder real"],
        ["Semana 2", "Viernes", "QA primera pantalla", "Alguien entiende rol en 10 segundos"],
        ["Semana 3", "Lunes", "Escribir problema/solucion TwinSight", "Copy final v1"],
        ["Semana 3", "Martes", "Documentar pipeline CAD-to-realtime", "Diagrama o seccion pipeline"],
        ["Semana 3", "Miercoles", "Scorear roles que pidan pipeline/Unity", "5 posibles aplicaciones futuras"],
        ["Semana 3", "Jueves", "Mejorar feature screenshots/GIFs", "3 features visuales"],
        ["Semana 3", "Viernes", "Revisar limites y claims", "No overclaim digital twin"],
        ["Semana 4", "Lunes", "Guion demo 90s", "Script final"],
        ["Semana 4", "Martes", "Grabar demo main", "Video bruto"],
        ["Semana 4", "Miercoles", "Soft outreach informal a 2 contactos", "Feedback pedido"],
        ["Semana 4", "Jueves", "Editar demo/teaser", "Video publicable"],
        ["Semana 4", "Viernes", "Publicar o dejar listo", "Link o archivo final"],
        ["Semana 5", "Lunes", "README TwinSight overview", "README abre con valor"],
        ["Semana 5", "Martes", "README features/pipeline", "Capturas y secciones"],
        ["Semana 5", "Miercoles", "Repo hygiene", "Sin placeholders/secretos"],
        ["Semana 5", "Jueves", "Estudio C#/Unity aplicado", "Refactor o nota tecnica"],
        ["Semana 5", "Viernes", "Pinned repos", "GitHub listo para review"],
        ["Semana 6", "Lunes", "CV Unity TA v1", "Una pagina"],
        ["Semana 6", "Martes", "LinkedIn headline/About", "Perfil actualizado"],
        ["Semana 6", "Miercoles", "Primera mini wave 3 aplicaciones", "Aplicaciones registradas"],
        ["Semana 6", "Jueves", "Practicar pitch 60s", "Grabacion o notas"],
        ["Semana 6", "Viernes", "QA links publicos", "Links vivos"],
        ["Semana 7", "Lunes", "Extraer renders Human CGCookie", "3 renders"],
        ["Semana 7", "Martes", "ArtStation breakdown TwinSight/Human", "Draft publicable"],
        ["Semana 7", "Miercoles", "Scorear 15 empresas A1", "Lista A1 priorizada"],
        ["Semana 7", "Jueves", "Pulir visual/pipeline", "Antes/despues o breakdown"],
        ["Semana 7", "Viernes", "Publicar ArtStation o dejar listo", "Link o paquete final"],
        ["Semana 8", "Lunes", "Preparar soft launch", "CV + links + mensajes"],
        ["Semana 8", "Martes", "Aplicar 3-4 roles A1", "Tracker actualizado"],
        ["Semana 8", "Miercoles", "Outreach 3 contactos", "Mensajes enviados"],
        ["Semana 8", "Jueves", "Corregir asset debil detectado", "Mejora visible"],
        ["Semana 8", "Viernes", "Review respuestas/silencio", "Hipotesis de mejora"],
        ["Semana 9", "Lunes", "Ajustar CV/portfolio segun feedback", "Version v2"],
        ["Semana 9", "Martes", "Aplicar 3-5 roles", "Aplicaciones registradas"],
        ["Semana 9", "Miercoles", "Follow-up soft launch", "Follow-ups enviados"],
        ["Semana 9", "Jueves", "Practicar entrevista tecnica", "5 respuestas"],
        ["Semana 9", "Viernes", "Decision de targeting", "Mantener o ajustar A1"],
        ["Semana 10", "Lunes", "Main wave 1 setup", "10 roles listos"],
        ["Semana 10", "Martes", "Aplicar 5 roles", "Aplicaciones"],
        ["Semana 10", "Miercoles", "Outreach 4 contactos", "Mensajes"],
        ["Semana 10", "Jueves", "Estudio blocker recurrente", "Output aplicado"],
        ["Semana 10", "Viernes", "Analisis conversion", "Conversion registrada"],
        ["Semana 11", "Lunes", "Preparar entrevista TwinSight", "Walkthrough 5 min"],
        ["Semana 11", "Martes", "Simular preguntas legales/salario", "Respuestas listas"],
        ["Semana 11", "Miercoles", "Aplicar 3-5 roles", "Pipeline vivo"],
        ["Semana 11", "Jueves", "Practicar prueba tecnica", "Mini ejercicio"],
        ["Semana 11", "Viernes", "Revisar objeciones", "Answer bank actualizado"],
        ["Semana 12", "Lunes", "Main wave 2", "Nueva lista refinada"],
        ["Semana 12", "Martes", "Aplicar 5 roles", "Aplicaciones"],
        ["Semana 12", "Miercoles", "Follow-ups acumulados", "Follow-ups"],
        ["Semana 12", "Jueves", "Portfolio micro-polish", "1 bloqueo corregido"],
        ["Semana 12", "Viernes", "Gate 90 dias parcial", "Seguir, pivotar o reforzar"],
        ["Semana 13", "Lunes", "Evaluar si ARA entra", "Decision escrita"],
        ["Semana 13", "Martes", "ARA README/MVP si aplica", "Demo minima"],
        ["Semana 13", "Miercoles", "Aplicar roles mixtos solo si fit", "No desviar foco"],
        ["Semana 13", "Jueves", "Estudio Python/AI aplicado", "Output ARA"],
        ["Semana 13", "Viernes", "QA ARA claims", "Sin overclaim"],
        ["Semana 14", "Lunes", "Pivote controlado", "Cambio unico elegido"],
        ["Semana 14", "Martes", "Actualizar materiales", "CV/portfolio ajustados"],
        ["Semana 14", "Miercoles", "Aplicar con nuevo angulo", "5 aplicaciones"],
        ["Semana 14", "Jueves", "Practicar nueva narrativa", "Pitch actualizado"],
        ["Semana 14", "Viernes", "Comparar antes/despues", "Decision basada en datos"],
        ["Semana 15", "Lunes", "Preparar negociacion", "Rangos y scorecard"],
        ["Semana 15", "Martes", "Revisar contratos/red flags", "Checklist"],
        ["Semana 15", "Miercoles", "Aplicar/follow-up", "Pipeline activo"],
        ["Semana 15", "Jueves", "Simular oferta baja/alta", "Respuestas"],
        ["Semana 15", "Viernes", "Decision sobre ofertas", "Aceptar/negociar/rechazar"],
        ["Semana 16", "Lunes", "Auditar 16 semanas", "Metricas finales"],
        ["Semana 16", "Martes", "Elegir siguiente ciclo", "Empleo/cierre/expansion"],
        ["Semana 16", "Miercoles", "Aplicar ultima wave del ciclo", "Aplicaciones"],
        ["Semana 16", "Jueves", "Documentar aprendizajes", "Retrospectiva"],
        ["Semana 16", "Viernes", "Plan 90 dias siguiente", "Roadmap actualizado"],
    ]
    paths.append(
        chapter_tex(
            "15_playbook_semana_por_semana.tex",
            "Playbook semana por semana",
            f"""
# Como usar este playbook

Esta es la parte mas prescriptiva del documento. Si un dia no sabes que hacer, usa la fila correspondiente. Si una tarea ya esta hecha, no inventes una nueva rama: adelanta la siguiente fila de la misma semana o mejora el entregable de esa fase.

## Reglas

{bullets([
    "Cada semana tiene un entregable visible.",
    "Cada miercoles mantiene la busqueda viva.",
    "Cada jueves estudia solo lo que desbloquea output.",
    "Cada viernes decide con datos, no con animo.",
    "Semana 16 no es final definitivo; es puerta de decision.",
])}

## Calendario detallado

{table(["Semana", "Dia", "Accion exacta", "Salida"], detailed_weeks)}

## Que hacer si un dia se cae

{table(["Dia perdido", "Recuperacion"], [
    ["Lunes", "Martes empieza por plan y reduce entregables a 2"],
    ["Martes", "Miercoles aplica igual; no sacrificar busqueda"],
    ["Miercoles", "Jueves enviar al menos 2 aplicaciones antes de estudiar"],
    ["Jueves", "Viernes no abrir curso; cerrar review y follow-ups"],
    ["Viernes", "Lunes siguiente empieza con retrospectiva de 30 minutos"],
])}

## Minimo viable por semana

Si una semana se complica, el minimo es:

{numbered([
    "1 entregable publico o mejora visible.",
    "3 aplicaciones o follow-ups.",
    "Tracker actualizado.",
    "1 decision escrita para la semana siguiente.",
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "16_plantillas_operativas.tex",
            "Plantillas operativas listas para usar",
            f"""
# Plantillas

Estas plantillas se usan con pequenas adaptaciones. No reescribir desde cero salvo que el rol sea muy distinto.

## Email/mensaje Unity Technical Artist

```text
Hi [Name],

I am a Unity Technical Artist / Real-Time 3D Developer based in Colombia, focused on Unity WebGL, CAD-to-realtime optimization and interactive technical visualization.

My strongest project is TwinSight X500, a Unity WebGL inspection prototype for drone assembly. It includes component selection, exploded view, clipping/cross-section tools, visual modes, contextual information panels and usability/workload evaluation.

I saw [role/company/project] and thought the overlap with [specific need] was strong. I am available for remote contractor/B2B work and would be glad to share the case study/demo.

Best,
Alexander
```

## Mensaje corto LinkedIn

```text
Hi [Name], I saw your work at [Company] around [specific area]. I am focused on Unity Technical Art and realtime 3D visualization. My main project is TwinSight X500, a Unity WebGL technical visualization prototype for assembly inspection. If your team ever needs support around Unity/WebGL, CAD-to-realtime or interactive 3D, I would be happy to connect.
```

## Respuesta a salario

```text
For contractor/B2B work I evaluate compensation based on scope, responsibility, contract risk and benefits. My realistic target for aligned remote work is around USD 2000/month, while I can consider lower entry offers if the role gives strong experience in Unity/realtime 3D/technical art and has a clear growth path.
```

## Respuesta a oferta baja afin

```text
The role is aligned with the direction I want to grow in, so I am open to discussing it seriously. To make the compensation sustainable, I would like to understand review cycles, expected workload, equipment/software support, flexibility and whether there is a path to adjust compensation after the first 3-6 months based on performance.
```

## Respuesta a EU authorization

```text
I am currently based in Colombia and available for remote contractor/B2B roles. I do not currently claim EU work authorization. I expect Portuguese citizenship/passport around 2028, which may support future EU mobility, but it is not current authorization.
```

## Respuesta a "is this a digital twin?"

```text
I describe TwinSight as digital-twin-adjacent technical visualization. It uses interactive 3D inspection workflows, but it is not a production industrial digital twin with live IoT telemetry or real-time operational state.
```

## README opening

```text
# TwinSight X500

TwinSight X500 is a Unity WebGL technical visualization prototype for drone assembly inspection. It turns static technical documentation into an interactive browser-based 3D viewer with component selection, exploded view, clipping/cross-section tools, visual modes and contextual information panels.
```

## Portfolio CTA

```text
View the TwinSight X500 case study, watch the 90-second demo, or review the GitHub repository.
```

## Follow-up 7-10 dias

```text
Hi [Name], just following up on my application/message for [role]. I am especially interested because the role connects with Unity/realtime 3D and [specific need]. My relevant work is TwinSight X500: [link]. Happy to share more context if useful.
```

## Rechazo elegante de prueba larga no pagada

```text
Thank you for sharing the assignment. I am interested in the role, but the proposed scope appears larger than a reasonable unpaid screening task. Would it be possible to reduce it to a 2-4 hour bounded exercise, review my existing TwinSight case study, or treat the assignment as a paid trial project?
```
""",
        )
    )

    paths.append(
        chapter_tex(
            "17_checklists_cierre.tex",
            "Checklists de cierre por activo",
            f"""
# Portfolio checklist

{bullets([
    "Hero comunica Unity Technical Artist / Real-Time 3D.",
    "TwinSight aparece primero.",
    "Hay demo/video/GIF visible.",
    "CTA a GitHub, LinkedIn, CV y contacto.",
    "No hay placeholders.",
    "Mobile y desktop se leen bien.",
    "Limitaciones explicadas.",
])}

# TwinSight checklist

{bullets([
    "Problem claro.",
    "Solution clara.",
    "Role propio claro.",
    "Features con media.",
    "Pipeline CAD-to-realtime.",
    "Optimization before/after.",
    "Evaluation/metrics verificadas.",
    "Limitations sin overclaim.",
    "Next steps production-ready.",
])}

# GitHub checklist

{bullets([
    "TwinSight pinned primero.",
    "README con demo, features, pipeline, setup y limitations.",
    "Screenshots cargan.",
    "No secretos.",
    "No repos irrelevantes arriba.",
    "ARA solo si funcional.",
])}

# CV checklist

{bullets([
    "Una pagina.",
    "Titulo Unity Technical Artist / Real-Time 3D Developer.",
    "Links vivos.",
    "TwinSight primer proyecto.",
    "Bullets con tecnologia y resultado.",
    "No Senior como titulo.",
    "No cursos sin certificado como certificaciones.",
])}

# LinkedIn checklist

{bullets([
    "Headline alineado.",
    "About corto y tecnico.",
    "Featured con TwinSight/demo/GitHub.",
    "Experience/project entry para TwinSight.",
    "Skills ordenadas.",
    "Availability Colombia remote contractor/B2B.",
])}

# ArtStation checklist

{bullets([
    "Cover fuerte.",
    "Breakdown, no solo renders.",
    "Pipeline visual.",
    "Human CGCookie como apoyo visual.",
    "Links a portfolio/GitHub.",
])}

# Demo reel checklist

{bullets([
    "90 segundos main.",
    "15-30 segundos teaser.",
    "Hook en primeros 8 segundos.",
    "Features visibles.",
    "Pipeline/metrics aparecen.",
    "CTA final.",
])}

# ARA checklist

{bullets([
    "README honesto.",
    "Demo minima reproducible.",
    "No production AI platform.",
    "Arquitectura simple.",
    "Limitaciones claras.",
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "18_arboles_decision.tex",
            "Arboles de decision",
            f"""
# Si tengo solo una hora hoy

{numbered([
    "Si portfolio no esta listo: mejora TwinSight case.",
    "Si portfolio esta listo: envia una aplicacion o follow-up.",
    "Si hay entrevista cerca: practica pitch y preguntas dificiles.",
    "Si todo esta quieto: actualiza tracker y decide proximo bloqueo.",
])}

# Si no se que estudiar

{numbered([
    "Mira el asset que bloquea empleo.",
    "Elige el skill que desbloquea ese asset.",
    "Estudia maximo 90 minutos.",
    "Aplica inmediatamente lo estudiado.",
    "Documenta el output.",
])}

# Si aparece rol de marketing

{table(["Pregunta", "Si", "No"], [
    ["Incluye Unity/3D/interactive?", "Evaluar", "Descartar"],
    ["Genera experiencia de rol?", "Puede aceptar con cuidado", "Descartar"],
    ["Permite mostrar trabajo?", "Suma", "Menos valor"],
    ["Paga suficiente para financiar transicion?", "Evaluar", "Descartar si bajo"],
])}

# Si aparece rol con baja paga

{table(["Condicion", "Decision"], [
    ["Afin + aprendizaje fuerte + sostenible", "Aceptar o negociar"],
    ["Afin + explotador", "Negociar/rechazar"],
    ["No afin + baja paga", "Rechazar"],
    ["No afin + buena paga", "Evaluar como financiamiento temporal"],
])}

# Si aparece rol que pide senior

{bullets([
    "Aplicar solo si el core conecta fuerte con TwinSight.",
    "No cambiar titulo propio a Senior.",
    "En mensaje decir que el fit esta en Unity/technical visualization/pipeline.",
    "Aceptar que puede ser long shot.",
])}

# Si una empresa pide EU/US work authorization

{bullets([
    "Si lo exige como requisito duro: descartar.",
    "Si dice preferred: aplicar con wording Colombia contractor.",
    "No usar pasaporte portugues futuro como autorizacion actual.",
    "Registrar bloqueo en tracker.",
])}

# Si ARA empieza a distraer

{numbered([
    "Preguntar: TwinSight/GitHub/CV/LinkedIn estan listos?",
    "Si no: pausar ARA.",
    "Si si: hacer sprint ARA de maximo 1 semana.",
    "Si ARA no produce demo/README: bajarlo de prioridad.",
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "19_curriculum_aplicado_12_semanas.tex",
            "Curriculum aplicado de 12 semanas",
            f"""
# Principio

Este curriculum no existe para "aprender mas". Existe para mejorar empleabilidad. Cada semana tiene un skill, una practica y una evidencia. Si la evidencia no se produce, la semana no cuenta como completada.

## Semana 1: narrativa tecnica

Objetivo: explicar tu perfil sin sonar disperso.

Tareas:

{bullets([
    "Escribir pitch de 30, 60 y 120 segundos.",
    "Traducir el pitch a headline, CV summary y portfolio hero.",
    "Eliminar terminos que inflen seniority.",
    "Practicar explicacion de TwinSight sin abrir la tesis.",
])}

Evidencia: pitch escrito, grabacion de prueba, headline definitivo.

## Semana 2: Unity WebGL constraints

Objetivo: poder defender por que WebGL importa y que restricciones impone.

Tareas:

{bullets([
    "Revisar build settings, compression, memory and browser constraints.",
    "Documentar 5 decisiones tecnicas de TwinSight relacionadas con WebGL.",
    "Tomar una captura de build/performance si existe.",
    "Preparar respuesta: what makes WebGL harder than desktop Unity?",
])}

Evidencia: seccion en README o portfolio sobre WebGL constraints.

## Semana 3: CAD-to-realtime optimization

Objetivo: convertir el pipeline en prueba de Technical Artist.

Tareas:

{bullets([
    "Preparar before/after visual.",
    "Describir cleanup, hierarchy, mesh/material decisions.",
    "Explicar que se optimizo y que no.",
    "Preparar respuesta: how would you productionize the pipeline?",
])}

Evidencia: breakdown visual + bullet tecnico en CV.

## Semana 4: interaction and inspection UX

Objetivo: mostrar que no solo importaste un modelo 3D; construiste una experiencia.

Tareas:

{bullets([
    "Grabar selection, exploded view, clipping and visual modes.",
    "Explicar para que sirve cada feature.",
    "Relacionar features con problema de assembly inspection.",
    "Preparar respuesta: how did you choose these interactions?",
])}

Evidencia: 4 GIFs/videos cortos o clips en demo.

## Semana 5: UI Toolkit / interface clarity

Objetivo: que el proyecto parezca herramienta tecnica, no escena de prueba.

Tareas:

{bullets([
    "Pulir paneles visibles.",
    "Reducir texto innecesario.",
    "Asegurar estados claros: selected, hovered, active mode.",
    "Preparar respuesta: how would you improve the UI for production?",
])}

Evidencia: screenshot antes/despues o nota de UI.

## Semana 6: README and technical documentation

Objetivo: que GitHub venda sin entrevista.

Tareas:

{bullets([
    "README con overview, demo, features, architecture, pipeline, limitations.",
    "Agregar imagenes.",
    "Agregar roadmap tecnico.",
    "Revisar que no haya claims falsos.",
])}

Evidencia: README final v1.

## Semana 7: visual presentation / ArtStation

Objetivo: parecer technical artist, no solo developer.

Tareas:

{bullets([
    "Elegir 5-8 imagenes fuertes.",
    "Ordenarlas como historia de pipeline.",
    "Agregar Human CGCookie como soporte visual.",
    "Publicar breakdown o dejarlo listo.",
])}

Evidencia: ArtStation post o PDF/imagenes preparadas.

## Semana 8: interview defense

Objetivo: defender el proyecto bajo presion.

Tareas:

{bullets([
    "Practicar 20 preguntas.",
    "Grabar walkthrough de 5 minutos.",
    "Preparar respuestas sobre AI, digital twin, seniority, salary, EU authorization.",
    "Corregir respuestas largas.",
])}

Evidencia: answer bank personal.

## Semana 9: application writing

Objetivo: adaptar sin perder tiempo.

Tareas:

{bullets([
    "Crear 3 versiones de mensaje: recruiter, technical lead, founder.",
    "Crear 3 bullets CV por tipo de rol.",
    "Crear plantilla de follow-up.",
    "Enviar al menos 5 aplicaciones.",
])}

Evidencia: aplicaciones reales registradas.

## Semana 10: test assignment readiness

Objetivo: no entrar indefenso a pruebas tecnicas.

Tareas:

{bullets([
    "Preparar mini escena o checklist de prueba Unity.",
    "Practicar explicar tradeoffs.",
    "Definir limites para pruebas no pagadas.",
    "Preparar respuesta para pedir scope y criterios.",
])}

Evidencia: test readiness note.

## Semana 11: negotiation readiness

Objetivo: separar deseo, piso y valor.

Tareas:

{bullets([
    "Escribir piso: 3 millones COP si experiencia afin.",
    "Escribir ideal: USD 2000.",
    "Escribir ambicioso: USD 6000.",
    "Preparar respuestas a low offer y contractor terms.",
])}

Evidencia: scorecard listo.

## Semana 12: pivot audit

Objetivo: decidir con datos.

Tareas:

{bullets([
    "Contar aplicaciones, respuestas, entrevistas, rechazos.",
    "Separar por rol: Unity TA, WebGL, visualization, XR, Python.",
    "Detectar que target responde mejor.",
    "Elegir siguiente ciclo de 4 semanas.",
])}

Evidencia: decision escrita en tracker.
""",
        )
    )

    paths.append(
        chapter_tex(
            "20_playbooks_por_rol.tex",
            "Playbooks por tipo de rol",
            f"""
# Unity Technical Artist

Este es el rol principal. La narrativa debe centrarse en pipeline, optimization, realtime constraints, visual clarity, Unity/Blender bridge and technical communication.

Usar:

{bullets([
    "TwinSight pipeline CAD-to-realtime.",
    "Optimization before/after.",
    "Clipping, exploded view and visual modes.",
    "Human CGCookie as visual support.",
    "ArtStation breakdown.",
])}

Evitar:

{bullets([
    "Venderte como AAA senior.",
    "Hablar solo de gameplay.",
    "Mostrar solo codigo sin visual pipeline.",
])}

CV angle:

```text
Unity Technical Artist focused on realtime 3D visualization, asset optimization and Unity/Blender pipelines for interactive technical experiences.
```

# Unity WebGL Developer

Este rol es muy aplicable si la vacante pide Unity builds, C#, browser deployment, interaccion o tooling.

Usar:

{bullets([
    "TwinSight running in WebGL/browser.",
    "C# interaction systems.",
    "UI Toolkit and technical interface.",
    "Performance constraints.",
])}

Evitar:

{bullets([
    "Presentar Human como proyecto principal.",
    "Sobreenfocar Houdini o VFX.",
])}

CV angle:

```text
Unity WebGL Developer with experience building browser-based interactive 3D inspection prototypes using Unity, C#, UI Toolkit and optimized 3D assets.
```

# Technical Visualization / Product Visualization

Este rol puede pagar bien y alinea muy fuerte con TwinSight.

Usar:

{bullets([
    "Assembly inspection problem.",
    "Technical documentation to interactive 3D.",
    "Metrics and evaluation.",
    "CAD-to-realtime workflow.",
])}

Evitar:

{bullets([
    "Venderlo como producto industrial terminado.",
    "Decir digital twin sin matiz.",
])}

CV angle:

```text
Technical visualization developer focused on transforming complex 3D/technical documentation into interactive realtime inspection workflows.
```

# XR / Simulation

Usar como ruta secundaria si la empresa trabaja training, inspection, industrial simulation or immersive visualization.

Usar:

{bullets([
    "Interaction design.",
    "Inspection workflow.",
    "Unity realtime scene structure.",
    "Productionization roadmap toward XR.",
])}

Evitar:

{bullets([
    "Prometer experiencia XR profunda si no existe.",
    "Comprar hardware o abrir proyecto nuevo antes de aplicar.",
])}

# Python / AI Tooling

Ruta secundaria. Solo activar con ARA funcional o rol mixto.

Usar:

{bullets([
    "ARA as research automation prototype.",
    "Structured workflows.",
    "Markdown/report generation.",
    "Human-in-the-loop ownership.",
])}

Evitar:

{bullets([
    "Production AI Engineer como identidad.",
    "Autonomous AI claims.",
    "Desplazar TwinSight.",
])}

# 3D / Blender fallback

Usar si la oportunidad da experiencia visual/technical art real.

Usar:

{bullets([
    "Human renders.",
    "TwinSight visual breakdown.",
    "Optimization and presentation.",
])}

Evitar:

{bullets([
    "Aceptar rol puramente artistico sin ruta TA si no es necesario.",
    "Entrar en competencia de artistas senior sin diferenciador tecnico.",
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "21_banco_respuestas_extendido.tex",
            "Banco de respuestas extendido",
            f"""
# Respuestas tecnicas

## Why Unity Technical Artist?

```text
Because my strongest work sits between realtime development, visual/asset preparation and technical communication. TwinSight required Unity interaction systems, WebGL constraints, Blender cleanup, technical visualization and user-facing inspection workflows. That intersection is closer to Unity Technical Art than to pure gameplay, pure 3D art or general web development.
```

## What is your strongest project?

```text
TwinSight X500. It is a Unity WebGL technical visualization prototype for drone assembly inspection. It includes component selection, exploded view, clipping tools, visual modes, information panels and usability/workload evaluation.
```

## What did you personally build?

```text
I worked across the prototype pipeline: preparing and organizing 3D assets, building the Unity scene and interactions, implementing UI behavior, preparing WebGL delivery, documenting the workflow and evaluating the prototype through usability/workload methods.
```

## What is the technical-art part?

```text
The technical-art value is the conversion of complex source geometry and documentation into an optimized, inspectable realtime experience. It includes asset cleanup, hierarchy decisions, visual modes, realtime constraints and clear presentation of technical information.
```

## What would you do in production?

```text
I would formalize asset naming, metadata, LODs, import validation, performance budgets, profiling, automated checks and test coverage. I would also separate prototype logic from production architecture and document pipeline standards for repeatable asset ingestion.
```

# Respuestas de perfil

## Are you senior?

```text
I do not position myself by inflated seniority titles. I position myself by evidence. My strongest fit is Unity/realtime 3D technical visualization and technical-art pipeline work. I am looking for a role where I can contribute in that direction and grow with production experience.
```

## Why not pure game development?

```text
I can work with Unity and realtime interaction, but my strongest differentiator is technical visualization: turning complex technical material into interactive 3D experiences. That can exist in games, XR, simulation, product visualization or industrial tools.
```

## Why should we consider you if you do not have years in industry?

```text
Because the project evidence is directly relevant to roles that need Unity, realtime 3D, technical documentation, asset optimization and interactive visualization. I am transparent about what is prototype work, and I can explain how I would productionize it.
```

# Respuestas dificiles

## Did AI build this?

```text
AI tools can support documentation, research and workflow acceleration, but I own the technical decisions, implementation direction, project framing and final outputs. I am careful not to present AI-assisted work as autonomous production AI.
```

## Can you work remotely from Colombia?

```text
Yes. I am based in Colombia and available for remote contractor/B2B roles. I would want to confirm timezone overlap, contract model, payment process and communication expectations.
```

## Are you authorized in the EU?

```text
Not currently. I expect Portuguese citizenship/passport around 2028, which may support future EU mobility, but I do not currently claim EU work authorization.
```

## What compensation do you expect?

```text
For aligned remote contractor work, my realistic target is around USD 2000/month. I can consider lower compensation if the role gives strong Unity/realtime 3D/technical-art experience and has a clear growth path. For higher-scope roles, I evaluate compensation based on responsibilities, risk and contract model.
```

## Why accept a low offer?

```text
I would only consider a lower offer if the experience is genuinely aligned with my field and helps build production credibility. I would not treat a low, unrelated role as strategically equivalent.
```

# Preguntas para hacer al empleador

{bullets([
    "What kind of Unity projects would I work on in the first 90 days?",
    "How does the team handle asset optimization and technical-art workflows?",
    "Is this role more development, technical art, visualization, or content production?",
    "What are the main performance constraints?",
    "What does success look like after 3 months?",
    "Is the contract employee, EOR, contractor or freelance?",
    "Are there country or work-authorization limitations?",
    "How are test assignments evaluated?",
])}
""",
        )
    )

    paths.append(
        chapter_tex(
            "22_negociacion_contratos.tex",
            "Guia de negociacion y contratos",
            f"""
# Tres numeros

{table(["Numero", "Valor", "Uso"], [
    ["Piso estrategico", "3 millones COP", "Solo si el rol da experiencia real en campo"],
    ["Ideal realista", "USD 2000/mes", "Target para remoto afin"],
    ["Ambicioso", "USD 6000/mes", "Ruta 12-24 meses con evidencia y seniority percibida"],
])}

# Como hablar de dinero

No abrir con el minimo. El minimo es para decisiones internas, no para anclar negociacion.

Respuesta si preguntan temprano:

```text
I would like to understand scope, responsibilities, contract model and expected time commitment first. Since contractor compensation depends heavily on taxes, benefits, paid time off and contract risk, I prefer to evaluate the full package rather than only a monthly number.
```

Respuesta si exigen rango:

```text
For aligned remote contractor roles, my realistic target is around USD 2000/month. I can evaluate lower entry offers if the role is strongly aligned with Unity/realtime 3D/technical art and has a clear growth path, and higher ranges depending on scope, responsibility and contract model.
```

# Clausulas a revisar

{table(["Clausula", "Riesgo", "Que pedir"], [
    ["IP", "Perder derecho a mostrar experiencia", "Permiso para describir trabajo no confidencial"],
    ["NDA", "Muy amplio", "Alcance razonable"],
    ["Exclusividad", "Bloquea otros ingresos", "Compensacion o limites"],
    ["No compete", "Puede limitar carrera", "Alcance geografico/temporal razonable"],
    ["Payment", "Riesgo de impago", "Fechas, moneda, plataforma"],
    ["Termination", "Corte abrupto", "Notice period y pago de entregables"],
    ["Scope", "Todo incluido", "Responsabilidades y entregables claros"],
])}

# Decision de aceptar

Aceptar si:

{bullets([
    "Fit tecnico >= 4/5.",
    "Aprendizaje transferible claro.",
    "Contrato/pago suficientemente claro.",
    "Carga horaria deja sostener crecimiento.",
    "No contradice reglas legales o claims publicos.",
])}

Negociar si:

{bullets([
    "El fit es bueno pero el pago bajo.",
    "El contrato es bueno pero IP/exclusividad son demasiado amplias.",
    "El rol es interesante pero scope ambiguo.",
])}

Rechazar si:

{bullets([
    "Marketing puro sin 3D/Unity.",
    "Prueba larga no pagada.",
    "Work authorization imposible.",
    "Pago informal o sin contrato.",
    "Exclusividad abusiva con paga baja.",
])}

# Plan si aceptas una oferta baja afin

{numbered([
    "Definir objetivo de aprendizaje de 90 dias.",
    "Mantener portfolio una noche/semana.",
    "Documentar logros sin violar NDA.",
    "Pedir feedback y revision salarial.",
    "No abandonar pipeline externo hasta pasar periodo de prueba.",
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
            "15_auditoria_fuentes.tex",
            "Auditoria, fuentes y reglas canonicas",
            f"""
# Reglas canonicas

{table(["Tema", "Regla"], [
    ["Pasaporte portugues", "Esperado alrededor de 2028, no autorizacion actual"],
    ["EU work authorization", "No afirmar actualmente"],
    ["Seniority", "No usar Senior Technical Artist como titulo propio"],
    ["TwinSight", "Technical visualization / digital-twin-adjacent, no IoT/live telemetry"],
    ["ARA", "Prototype secundario, no production AI platform"],
    ["Historic", "Solo indice obsoleto, no domina lo actual"],
])}

## Hallazgos de auditoria

{audit_blocks}

## Cobertura de corpus

{table(["Tipo", "Cantidad"], [
    ["Modulos raiz Markdown", sum(1 for s in sources if s.section == "root")],
    ["Research Markdown", sum(1 for s in sources if s.section == "research")],
    ["Hallazgos auditoria", len(findings)],
])}

## Fuentes principales

{source_table([
    (source("00_master_audit_blueprint.md"), "Mapa maestro"),
    (source("01_source_of_truth_profile.md"), "Perfil"),
    (source("02_market_role_fit_and_positioning.md"), "Mercado y roles"),
    (source("03_salary_benchmark_and_remote_colombia.md"), "Salario"),
    (source("06_education_courses_rebelway_masters_phd.md"), "Estudio"),
    (source("07_portfolio_strategy_and_project_architecture.md"), "Portfolio"),
    (source("11_company_targets_job_boards_recruiters.md"), "Targets"),
    (source("14_30_60_90_execution_plan.md"), "Ejecucion"),
    (source("15_final_integrated_strategy.md"), "Estrategia final"),
    (source("16_final_consistency_audit_and_gap_register.md"), "Auditoria"),
])}
""",
        )
    )

    return paths


def write_main_tex(chapter_paths: list[str]) -> None:
    inputs = "\n".join(rf"\input{{{path}}}" for path in chapter_paths)
    generated = datetime.now().strftime("%Y-%m-%d %H:%M")
    main = rf"""\documentclass[10pt,openany]{{book}}
\usepackage[a4paper,margin=1.9cm,headheight=14pt]{{geometry}}
\usepackage{{fontspec}}
\setmainfont{{Arial}}
\setmonofont{{Consolas}}
\usepackage{{microtype}}
\usepackage{{xcolor}}
\definecolor{{Accent}}{{HTML}}{{245E6F}}
\definecolor{{SoftAccent}}{{HTML}}{{EEF7F5}}
\definecolor{{RuleGray}}{{HTML}}{{D7DEE2}}
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
  pdftitle={{Plan de Estrategia Laboral Alexander Woodcock Salomon}},
  pdfauthor={{Alexander Woodcock Salomon}},
  pdfsubject={{Roadmap laboral prescriptivo, portfolio, aplicaciones, estudio y negociacion}},
  pdfcreator={{Codex + XeLaTeX}}
}}
\pagestyle{{fancy}}
\fancyhf{{}}
\fancyhead[L]{{\small\textcolor{{Accent}}{{Plan de estrategia laboral}}}}
\fancyhead[R]{{\small\leftmark}}
\fancyfoot[C]{{\thepage}}
\setlength{{\parskip}}{{0.45em}}
\setlength{{\parindent}}{{0pt}}
\setlist{{itemsep=0.12em, topsep=0.25em, parsep=0.04em}}
\renewcommand{{\arraystretch}}{{1.12}}
\emergencystretch=4em
\sloppy
\renewcommand{{\chaptername}}{{Capitulo}}
\renewcommand{{\contentsname}}{{Indice}}
\titleformat{{\chapter}}[display]{{\normalfont\huge\bfseries\color{{Accent}}}}{{\chaptertitlename\ \thechapter}}{{12pt}}{{\Huge}}
\titleformat{{\section}}{{\Large\bfseries\color{{Accent}}}}{{\thesection}}{{0.6em}}{{}}
\DefineVerbatimEnvironment{{mdcode}}{{Verbatim}}{{fontsize=\scriptsize,breaklines=true,breakanywhere=true,frame=single,rulecolor=\color{{RuleGray}}}}

\begin{{document}}
\pagecolor{{SoftAccent}}
\thispagestyle{{empty}}
\begin{{center}}
\vspace*{{1.4cm}}
{{\Huge\bfseries\textcolor{{Accent}}{{Plan de Estrategia Laboral}}\par}}
\vspace{{0.35cm}}
{{\LARGE Roadmap prescriptivo para Alexander Woodcock Salomon\par}}
\vspace{{0.9cm}}
{{\Large Cerrar portfolio, conseguir empleo remoto afin y construir experiencia en Unity Technical Art\par}}
\vspace{{1cm}}
{{\large Version v1\par}}
{{\large Generado: {generated}\par}}
\vfill
{{\large Prioridad: Unity Technical Artist / Real-Time 3D Developer\par}}
{{\small Formato: PDF + Obsidian + Tracker XLSX\par}}
\vspace{{0.6cm}}
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
    return "\n".join(page.get_text() for page in doc), doc.page_count


def validate(sources: list[Any], findings: list[Any], compiled: bool) -> dict[str, Any]:
    pdf_path = DIST_DIR / f"{PDF_BASENAME}.pdf"
    text, pages = pdf_text_and_pages(pdf_path)
    lower = text.lower()
    required = {
        "goal_clarity": ["cerrar portafolio", "empleo remoto", "unity technical artist"],
        "time_budget": ["5 horas", "25 horas", "lunes"],
        "assets": ["twinsight", "github", "cv", "artstation", "demo reel", "human cgcookie", "ara"],
        "money": ["3 millones cop", "usd 2000", "usd 6000"],
        "roadmap": ["semana 1", "semana 16", "definition of done"],
        "prescriptive": ["haz esto", "no hagas esto", "decision viernes"],
        "tracker": ["dashboard", "weekly plan", "applications", "offers"],
        "audit": ["2028", "eu work authorization", "senior technical artist"],
    }
    checks = {key: all(term.lower() in lower for term in terms) for key, terms in required.items()}
    validation: dict[str, Any] = {
        "generated_at": datetime.now().isoformat(timespec="minutes"),
        "compiled": compiled,
        "pdf": str(pdf_path),
        "pdf_exists": pdf_path.exists(),
        "pdf_bytes": pdf_path.stat().st_size if pdf_path.exists() else 0,
        "pdf_pages": pages,
        "root_markdown": sum(1 for s in sources if s.section == "root"),
        "research_markdown": sum(1 for s in sources if s.section == "research"),
        "audit_findings": len(findings),
        **checks,
    }
    validation["passed"] = all(
        [
            compiled,
            validation["pdf_exists"],
            validation["pdf_bytes"] > 180_000,
            pages is not None and 55 <= pages <= 220,
            all(checks.values()),
            validation["root_markdown"] >= 45,
            validation["research_markdown"] >= 15,
            validation["audit_findings"] >= 8,
        ]
    )
    write(BUILD_DIR / "roadmap_text_audit.txt", text)
    return validation


def write_obsidian_note(validation: dict[str, Any]) -> None:
    write(
        OBSIDIAN_DIR / "12_ROADMAP_ESTRATEGIA_LABORAL.md",
        f"""---
status: current
type: roadmap-strategy
last_updated: {datetime.now().strftime("%Y-%m-%d")}
tags:
  - roadmap
  - estrategia-laboral
  - tracker
  - current
---

# Roadmap / Plan de estrategia laboral

Este es el documento operativo principal. La biblia completa conserva el corpus; la editorial ampliada conserva la vista condensada; este roadmap dice que hacer, en que orden, con que criterios y cuando pivotar.

## Entregables

- PDF: [[_roadmap_laboral/dist/{PDF_BASENAME}.pdf]]
- Tracker: [[_roadmap_laboral/tracker/Tracker_Estrategia_Laboral_Alexander_v1.xlsx]]
- Script PDF: [[_roadmap_laboral/scripts/build_strategy_roadmap.py]]
- Script tracker: [[_roadmap_laboral/scripts/build_tracker.mjs]]

## Decisiones canonicas

| Tema | Decision |
|---|---|
| Objetivo 90 dias | Cerrar portfolio y conseguir empleo remoto afin |
| Foco | Unity Technical Artist |
| Tiempo | 5 horas/dia, lunes a viernes |
| Estrategia | Balanceada |
| Piso | 3 millones COP si da experiencia real |
| Ideal | USD 2000 |
| Ambicioso | USD 6000 |
| Evitar | Marketing puro sin experiencia Unity/3D |

## Validacion

| Campo | Valor |
|---|---|
| Paginas | {validation.get("pdf_pages")} |
| PDF bytes | {validation.get("pdf_bytes")} |
| Objetivo claro | {validation.get("goal_clarity")} |
| Tiempo incluido | {validation.get("time_budget")} |
| Activos incluidos | {validation.get("assets")} |
| Dinero incluido | {validation.get("money")} |
| Roadmap incluido | {validation.get("roadmap")} |
| Prescriptivo | {validation.get("prescriptive")} |
| Tracker incluido | {validation.get("tracker")} |
| Auditoria incluida | {validation.get("audit")} |
| Passed | {validation.get("passed")} |

## Uso semanal

1. Abrir tracker cada lunes.
2. Elegir foco semanal desde el PDF.
3. Ejecutar 25 horas maximo segun la semana tipo.
4. Actualizar aplicaciones, activos, estudio y ofertas.
5. Revisar cada viernes si hay que seguir, corregir o pivotar.

## Relacion con otros documentos

- [[09_BIBLIA_EDITORIAL]]
- [[10_BIBLIA_COMPLETA]]
- [[11_BIBLIA_EDITORIAL_AMPLIADA]]
""",
    )


def append_home_link() -> None:
    home = OBSIDIAN_DIR / "00_HOME.md"
    if not home.exists():
        return
    text = raw.read_text(home)
    if "[[12_ROADMAP_ESTRATEGIA_LABORAL]]" in text:
        return
    marker = "- [[11_BIBLIA_EDITORIAL_AMPLIADA]]"
    if marker in text:
        text = text.replace(marker, marker + "\n- [[12_ROADMAP_ESTRATEGIA_LABORAL]]")
    else:
        text += "\n- [[12_ROADMAP_ESTRATEGIA_LABORAL]]\n"
    write(home, text)


def write_readme(validation: dict[str, Any]) -> None:
    write(
        ROADMAP_ROOT / "README.md",
        f"""# Roadmap laboral

Sistema operativo para cerrar portfolio, conseguir empleo remoto afin y ejecutar la estrategia laboral.

## Archivos principales

- `dist/{PDF_BASENAME}.pdf`: Plan de Estrategia Laboral.
- `tracker/Tracker_Estrategia_Laboral_Alexander_v1.xlsx`: tracker vivo.
- `scripts/build_strategy_roadmap.py`: generador PDF/Obsidian.
- `scripts/build_tracker.mjs`: generador del tracker.

## Validacion PDF

```json
{json.dumps(validation, ensure_ascii=False, indent=2)}
```
""",
    )


def main() -> None:
    ensure_dirs()
    sources, _research_pdfs, historic_index = raw.collect_sources()
    findings = raw.build_audit(sources, historic_index)
    chapter_paths = build_chapters(sources, findings)
    write_main_tex(chapter_paths)
    compiled = compile_pdf()
    validation = validate(sources, findings, compiled)
    write(ROADMAP_ROOT / "roadmap_validation.json", json.dumps(validation, ensure_ascii=False, indent=2))
    write_obsidian_note(validation)
    append_home_link()
    write_readme(validation)
    print(json.dumps(validation, ensure_ascii=False, indent=2))
    if not validation["passed"]:
        raise SystemExit(2)


if __name__ == "__main__":
    main()
