from __future__ import annotations

import csv
import json
import re
import shutil
import subprocess
from dataclasses import dataclass, asdict
from datetime import datetime
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[2]
PDF_ROOT = ROOT / "_pdf_biblia"
TEX_DIR = PDF_ROOT / "tex"
MODULES_DIR = TEX_DIR / "modules"
DIST_DIR = PDF_ROOT / "dist"
BUILD_DIR = PDF_ROOT / "build"
OBSIDIAN_DIR = ROOT / "_obsidian"
PORTFOLIO_DIR = ROOT / "portfolio_web"

VERSION = "v1"
PDF_BASENAME = f"Biblia_Profesional_Alexander_{VERSION}"

ROOT_EXCLUDE_DIRS = {
    ".git",
    ".obsidian",
    "_obsidian",
    "_pdf_biblia",
    "Research",
    "Historic",
    "portfolio_web",
}


@dataclass
class SourceEntry:
    id: str
    order: int
    section: str
    status: str
    role: str
    path: str
    relative_path: str
    title: str
    lines: int
    bytes: int
    last_modified: str
    tex_file: str | None = None
    notes: str = ""


@dataclass
class AuditFinding:
    id: str
    severity: str
    category: str
    scope: str
    finding: str
    resolution: str
    evidence: str


def ensure_dirs() -> None:
    for path in [PDF_ROOT, TEX_DIR, MODULES_DIR, DIST_DIR, BUILD_DIR, OBSIDIAN_DIR, PORTFOLIO_DIR]:
        path.mkdir(parents=True, exist_ok=True)


def read_text(path: Path) -> str:
    for encoding in ("utf-8-sig", "utf-8", "cp1252"):
        try:
            return path.read_text(encoding=encoding)
        except UnicodeDecodeError:
            continue
    return path.read_text(encoding="utf-8", errors="replace")


def write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8", newline="\n")


def rel(path: Path) -> str:
    return str(path.relative_to(ROOT)).replace("\\", "/")


def file_url(path: Path) -> str:
    return path.resolve().as_uri()


def natural_key(path: Path) -> tuple[Any, ...]:
    name = path.name.lower()
    chunks: list[Any] = []
    for part in re.split(r"(\d+)", name):
        if part.isdigit():
            chunks.append(int(part))
        else:
            chunks.append(part)
    return tuple(chunks)


def title_from_markdown(path: Path, text: str) -> str:
    for line in text.splitlines()[:40]:
        stripped = line.strip()
        if stripped.startswith("#"):
            return stripped.lstrip("#").strip() or path.stem
    return path.stem


def line_count(text: str) -> int:
    if not text:
        return 0
    return len(text.splitlines())


def classify_root_file(path: Path) -> tuple[str, str, str]:
    name = path.name
    canonical = "canonical"
    role = "Modulo principal"
    notes = ""
    if name == "28D_artstation_portfolio_benchmark_complete.md":
        canonical = "canonical"
        role = "Version consolidada"
        notes = "Version completa preferida frente a variantes 28D anteriores."
    elif name in {"28D_artstation_portfolio_benchmark.md", "28D_artstation_portfolio_benchmark (1).md"}:
        canonical = "duplicate"
        role = "Version parcial / duplicada"
        notes = "Se conserva por trazabilidad; usar la version complete como referencia canonica."
    elif re.match(r"^\d+B_", name):
        canonical = "canonical"
        role = "Modulo final complementario"
    elif re.match(r"^\d+[A-Z]_", name):
        canonical = "reference"
        role = "Benchmark o complemento"
    return canonical, role, notes


def collect_sources() -> tuple[list[SourceEntry], list[dict[str, Any]], list[dict[str, Any]]]:
    sources: list[SourceEntry] = []
    research_pdfs: list[dict[str, Any]] = []
    historic_index: list[dict[str, Any]] = []
    order = 1

    root_markdown = sorted(
        [p for p in ROOT.glob("*.md") if p.is_file()],
        key=natural_key,
    )
    for path in root_markdown:
        text = read_text(path)
        status, role, notes = classify_root_file(path)
        sources.append(
            SourceEntry(
                id=f"root_{order:03d}",
                order=order,
                section="root",
                status=status,
                role=role,
                path=str(path),
                relative_path=rel(path),
                title=title_from_markdown(path, text),
                lines=line_count(text),
                bytes=path.stat().st_size,
                last_modified=datetime.fromtimestamp(path.stat().st_mtime).strftime("%Y-%m-%d %H:%M"),
                notes=notes,
            )
        )
        order += 1

    research_dir = ROOT / "Research"
    research_markdown = sorted(research_dir.glob("*.md"), key=natural_key) if research_dir.exists() else []
    for path in research_markdown:
        text = read_text(path)
        status = "research_snapshot"
        notes = "Investigacion fuente; si contradice modulos actuales, queda subordinada a la regla actual > historico/investigacion previa."
        if "agent_A4_artstation_portfolio_benchmark" in path.name:
            status = "research_duplicate"
            notes = "Version de agente conservada como trazabilidad; comparar con modulos 28D/29C."
        sources.append(
            SourceEntry(
                id=f"research_{order:03d}",
                order=order,
                section="research",
                status=status,
                role="Research / estudio de mercado",
                path=str(path),
                relative_path=rel(path),
                title=title_from_markdown(path, text),
                lines=line_count(text),
                bytes=path.stat().st_size,
                last_modified=datetime.fromtimestamp(path.stat().st_mtime).strftime("%Y-%m-%d %H:%M"),
                notes=notes,
            )
        )
        order += 1

    if research_dir.exists():
        for path in sorted(research_dir.glob("*.pdf"), key=natural_key):
            research_pdfs.append(
                {
                    "name": path.name,
                    "relative_path": rel(path),
                    "path": str(path),
                    "bytes": path.stat().st_size,
                    "last_modified": datetime.fromtimestamp(path.stat().st_mtime).strftime("%Y-%m-%d %H:%M"),
                    "url": file_url(path),
                    "note": "Inventariado y enlazado; no incrustado en el PDF gigante.",
                }
            )

    historic_dir = ROOT / "Historic"
    if historic_dir.exists():
        for path in sorted(historic_dir.glob("*"), key=natural_key):
            if path.is_file():
                historic_index.append(
                    {
                        "name": path.name,
                        "relative_path": rel(path),
                        "path": str(path),
                        "bytes": path.stat().st_size,
                        "last_modified": datetime.fromtimestamp(path.stat().st_mtime).strftime("%Y-%m-%d %H:%M"),
                        "url": file_url(path),
                        "note": "Historico/desactualizado; no gobierna la estrategia actual.",
                    }
                )

    return sources, research_pdfs, historic_index


def find_lines(patterns: list[str], paths: list[Path]) -> list[str]:
    evidence: list[str] = []
    regexes = [re.compile(p, re.IGNORECASE) for p in patterns]
    for path in paths:
        text = read_text(path)
        for i, line in enumerate(text.splitlines(), start=1):
            if any(r.search(line) for r in regexes):
                evidence.append(f"{rel(path)}:{i}: {line.strip()[:220]}")
    return evidence


def build_audit(sources: list[SourceEntry], historic_index: list[dict[str, Any]]) -> list[AuditFinding]:
    root_paths = [ROOT / s.relative_path for s in sources if s.section == "root"]
    research_paths = [ROOT / s.relative_path for s in sources if s.section == "research"]
    all_paths = root_paths + research_paths
    historical_paths = [ROOT / h["relative_path"] for h in historic_index if h["relative_path"].endswith(".md")]

    passport_relative = find_lines(
        [r"approximately two years", r"~2 years", r"~\s*2\s*años", r"2 años", r"2–3 years"],
        all_paths,
    )
    passport_2028 = find_lines([r"2028"], all_paths)
    historic_july = find_lines([r"July 2026", r"julio 2026"], historical_paths)
    senior_title = find_lines([r"Senior Technical Artist"], all_paths)
    eu_auth = find_lines([r"EU work authorization", r"EU work-authorized", r"autorizaci[oó]n laboral.*UE"], all_paths)
    digital_twin = find_lines([r"digital twin industrial", r"full digital twin", r"live telemetry", r"IoT"], all_paths)
    production_ai = find_lines([r"production AI engineer", r"Production AI", r"enterprise-ready AI"], all_paths)
    metrics = find_lines([r"SUS", r"NASA", r"95,617", r"6\.5M", r"96 task", r"12 validation"], all_paths)

    return [
        AuditFinding(
            id="AUD-001",
            severity="High",
            category="Work authorization",
            scope="Root + Research",
            finding="El pasaporte portugues no debe presentarse como autorizacion laboral UE actual.",
            resolution="Regla canonica: pasaporte/citizenship esperado alrededor de 2028; hasta emision legal, aplicar como Colombia-based remote contractor/B2B.",
            evidence="; ".join((passport_relative + passport_2028)[:12]) or "No direct evidence found.",
        ),
        AuditFinding(
            id="AUD-002",
            severity="Low",
            category="Historic data",
            scope="Historic",
            finding="Existen datos historicos como 'July 2026' que contradicen la regla actual.",
            resolution="Historic queda fuera del cuerpo del PDF y se indexa como obsoleto; no corrige ni domina los modulos actuales.",
            evidence="; ".join(historic_july[:6]) or "No direct historic July 2026 evidence found.",
        ),
        AuditFinding(
            id="AUD-003",
            severity="Medium",
            category="Seniority",
            scope="Root + Research",
            finding="Aparece 'Senior Technical Artist' en benchmarks, riesgos o textos negativos; no debe convertirse en titulo personal.",
            resolution="Usar 'Real-Time 3D Developer / Unity Technical Artist'. Senior solo como benchmark aspiracional o rol a largo plazo.",
            evidence="; ".join(senior_title[:10]) or "No direct evidence found.",
        ),
        AuditFinding(
            id="AUD-004",
            severity="Medium",
            category="TwinSight framing",
            scope="Root + Research",
            finding="TwinSight puede relacionarse con digital twin, pero no debe presentarse como digital twin industrial completo sin IoT/live state.",
            resolution="Framing canonico: Unity WebGL technical visualization, assembly inspection prototype, digital-twin-adjacent.",
            evidence="; ".join(digital_twin[:10]) or "No high-risk full-digital-twin wording found.",
        ),
        AuditFinding(
            id="AUD-005",
            severity="Medium",
            category="AI tooling",
            scope="Root + Research",
            finding="ARA/AI tooling es ruta secundaria; no debe implicar seniority de AI engineer productivo.",
            resolution="ARA se presenta como Python automation / AI tooling prototype, subordinado a TwinSight salvo que se vuelva portfolio-ready.",
            evidence="; ".join(production_ai[:8]) or "No high-risk production AI wording found.",
        ),
        AuditFinding(
            id="AUD-006",
            severity="High",
            category="Public proof",
            scope="Root",
            finding="GitHub, demo live, CV publico y portfolio son condiciones de credibilidad pendientes hasta que existan URLs reales.",
            resolution="Mantener placeholders explicitos y no afirmar disponibilidad publica hasta verificar links.",
            evidence="Archivos relevantes: 17_cv_base_and_role_variants.md, 18_linkedin_final_rewrite.md, 19B_github_readme_twinsight_final.md, 20_portfolio_copy_and_site_structure.md, 36_public_profile_launch_sequence.md.",
        ),
        AuditFinding(
            id="AUD-007",
            severity="Medium",
            category="Metrics",
            scope="Root + Research",
            finding="Metricas de TwinSight deben coincidir con tesis final antes de usarse publicamente.",
            resolution="Mantener metricas como condicionales si no han sido verificadas contra documento final de tesis.",
            evidence="; ".join(metrics[:12]) or "No direct metrics evidence found.",
        ),
        AuditFinding(
            id="AUD-008",
            severity="Medium",
            category="Market freshness",
            scope="Root + Research",
            finding="Empresas, vacantes, salarios y remote policies son datos temporales.",
            resolution="El PDF es snapshot; para aplicar se usa tracker vivo y verificacion semanal/top targets.",
            evidence="Modulos relevantes: 03_salary_benchmark_and_remote_colombia.md, 11_company_targets_job_boards_recruiters.md, 30_live_job_postings_market_snapshot.md, 31_application_targeting_matrix_and_search_protocol.md.",
        ),
        AuditFinding(
            id="AUD-009",
            severity="Low",
            category="Duplicates",
            scope="Root + Research",
            finding="Hay variantes/duplicados, especialmente 28D y agent_A4.",
            resolution="Se incluyen por trazabilidad, marcados como duplicate/reference; la version complete/canonica manda.",
            evidence="28D_artstation_portfolio_benchmark_complete.md; 28D_artstation_portfolio_benchmark.md; 28D_artstation_portfolio_benchmark (1).md; Research/agent_A4_artstation_portfolio_benchmark*.md.",
        ),
        AuditFinding(
            id="AUD-010",
            severity="Medium",
            category="Legal/tax",
            scope="Root + Research",
            finding="Impuestos, contractor setup, residencia y permisos requieren validacion profesional antes de decisiones reales.",
            resolution="Tratar los modulos como estrategia informativa; validar con contador/abogado antes de mudanza, facturacion internacional o aceptacion de oferta.",
            evidence="Modulos relevantes: 03_salary_benchmark_and_remote_colombia.md, 04_eu_portugal_germany_mobility_strategy.md, 13_interview_negotiation_and_offer_risk.md, 24_offer_evaluation_scorecard.md.",
        ),
    ]


def tex_escape(text: Any) -> str:
    value = "" if text is None else str(text)
    replacements = {
        "\\": r"\textbackslash{}",
        "&": r"\&",
        "%": r"\%",
        "$": r"\$",
        "#": r"\#",
        "_": r"\_",
        "{": r"\{",
        "}": r"\}",
        "~": r"\textasciitilde{}",
        "^": r"\textasciicircum{}",
    }
    return "".join(replacements.get(ch, ch) for ch in value)


def tex_url(url: str) -> str:
    value = url.replace("\\", "/").replace(" ", "%20")
    return value.replace("%", r"\%").replace("#", r"\#").replace("{", r"\{").replace("}", r"\}")


def inline_tex(text: str) -> str:
    placeholders: dict[str, str] = {}

    def stash(value: str) -> str:
        key = f"@@PH{len(placeholders)}@@"
        placeholders[key] = value
        return key

    def repl_link(match: re.Match[str]) -> str:
        label = inline_tex(match.group(1))
        url = tex_url(match.group(2))
        return stash(rf"\href{{{url}}}{{{label}}}")

    def repl_code(match: re.Match[str]) -> str:
        return stash(r"\texttt{" + tex_escape(match.group(1)) + "}")

    protected = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", repl_link, text)
    protected = re.sub(r"`([^`]+)`", repl_code, protected)
    escaped = tex_escape(protected)
    escaped = re.sub(r"\*\*([^*]+)\*\*", r"\\textbf{\1}", escaped)
    escaped = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"\\emph{\1}", escaped)
    escaped = re.sub(r"__([^_]+)__", r"\\textbf{\1}", escaped)
    for key, value in placeholders.items():
        escaped = escaped.replace(key, value)
    return escaped


def split_table_row(line: str) -> list[str]:
    stripped = line.strip()
    if stripped.startswith("|"):
        stripped = stripped[1:]
    if stripped.endswith("|"):
        stripped = stripped[:-1]
    cells = re.split(r"(?<!\\)\|", stripped)
    return [cell.strip().replace(r"\|", "|") for cell in cells]


def is_table_separator(line: str) -> bool:
    cells = split_table_row(line)
    return bool(cells) and all(re.fullmatch(r":?-{3,}:?", c.strip()) for c in cells if c.strip())


def table_to_tex(lines: list[str]) -> list[str]:
    if len(lines) < 2:
        return [inline_tex(line) + "\n\n" for line in lines]
    header = split_table_row(lines[0])
    rows = [split_table_row(line) for line in lines[2:]]
    cols = max([len(header)] + [len(r) for r in rows])
    if cols == 0:
        return []
    header += [""] * (cols - len(header))
    rows = [r + [""] * (cols - len(r)) for r in rows]

    if cols <= 2:
        width = 0.455
    elif cols == 3:
        width = 0.305
    elif cols == 4:
        width = 0.225
    else:
        width = max(0.065, min(0.185, 0.92 / cols))
    spec = " ".join([rf">{{\raggedright\arraybackslash}}p{{{width:.3f}\linewidth}}" for _ in range(cols)])
    font = r"\tiny" if cols > 6 else r"\scriptsize"
    out: list[str] = []
    landscape = cols > 6
    if landscape:
        out.append(r"\begin{landscape}" + "\n")
    out.append(r"\begin{center}" + "\n")
    out.append(font + "\n")
    out.append(rf"\begin{{longtable}}{{{spec}}}" + "\n")
    out.append(r"\toprule" + "\n")
    out.append(" & ".join(inline_tex(c) for c in header) + r" \\" + "\n")
    out.append(r"\midrule" + "\n")
    out.append(r"\endfirsthead" + "\n")
    out.append(r"\toprule" + "\n")
    out.append(" & ".join(inline_tex(c) for c in header) + r" \\" + "\n")
    out.append(r"\midrule" + "\n")
    out.append(r"\endhead" + "\n")
    for row in rows:
        out.append(" & ".join(inline_tex(c) for c in row) + r" \\" + "\n")
    out.append(r"\bottomrule" + "\n")
    out.append(r"\end{longtable}" + "\n")
    out.append(r"\end{center}" + "\n\n")
    if landscape:
        out.append(r"\end{landscape}" + "\n\n")
    return out


def close_list(out: list[str], list_state: str | None) -> str | None:
    if list_state == "itemize":
        out.append(r"\end{itemize}" + "\n\n")
    elif list_state == "enumerate":
        out.append(r"\end{enumerate}" + "\n\n")
    return None


def markdown_to_tex(markdown: str, module_title: str) -> str:
    lines = markdown.replace("\r\n", "\n").replace("\r", "\n").split("\n")
    out: list[str] = []
    i = 0
    in_code = False
    code_lang = ""
    list_state: str | None = None
    first_h1_seen = False

    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        if stripped.startswith("```"):
            if not in_code:
                list_state = close_list(out, list_state)
                in_code = True
                code_lang = stripped[3:].strip()
                title = f"Bloque de codigo: {code_lang}" if code_lang else "Bloque de codigo"
                out.append(r"\begin{mdcode}" + "\n")
                out.append(tex_escape(title) + "\n")
                i += 1
                continue
            out.append(r"\end{mdcode}" + "\n\n")
            in_code = False
            code_lang = ""
            i += 1
            continue

        if in_code:
            out.append(line + "\n")
            i += 1
            continue

        if not stripped:
            list_state = close_list(out, list_state)
            out.append("\n")
            i += 1
            continue

        if i + 1 < len(lines) and "|" in stripped and is_table_separator(lines[i + 1].strip()):
            list_state = close_list(out, list_state)
            table_lines = [line]
            i += 1
            while i < len(lines) and "|" in lines[i]:
                table_lines.append(lines[i])
                i += 1
            out.extend(table_to_tex(table_lines))
            continue

        heading_match = re.match(r"^(#{1,6})\s+(.*)$", stripped)
        if heading_match:
            list_state = close_list(out, list_state)
            level = len(heading_match.group(1))
            title = heading_match.group(2).strip()
            if level == 1 and not first_h1_seen:
                first_h1_seen = True
                if title.lower() == module_title.lower() or title.lower() == module_title.replace("_", " ").lower():
                    i += 1
                    continue
            command = {
                1: "section",
                2: "subsection",
                3: "subsubsection",
                4: "paragraph",
                5: "subparagraph",
                6: "subparagraph",
            }.get(level, "paragraph")
            if command in {"paragraph", "subparagraph"}:
                out.append(rf"\{command}{{{inline_tex(title)}}}" + "\n")
            else:
                out.append(rf"\{command}{{{inline_tex(title)}}}" + "\n\n")
            i += 1
            continue

        if re.fullmatch(r"[-*_]{3,}", stripped):
            list_state = close_list(out, list_state)
            out.append(r"\medskip\hrule\medskip" + "\n\n")
            i += 1
            continue

        bullet_match = re.match(r"^\s*[-*+]\s+(.*)$", line)
        if bullet_match:
            if list_state != "itemize":
                list_state = close_list(out, list_state)
                out.append(r"\begin{itemize}" + "\n")
                list_state = "itemize"
            out.append(r"\item " + inline_tex(bullet_match.group(1)) + "\n")
            i += 1
            continue

        enum_match = re.match(r"^\s*\d+[.)]\s+(.*)$", line)
        if enum_match:
            if list_state != "enumerate":
                list_state = close_list(out, list_state)
                out.append(r"\begin{enumerate}" + "\n")
                list_state = "enumerate"
            out.append(r"\item " + inline_tex(enum_match.group(1)) + "\n")
            i += 1
            continue

        if stripped.startswith(">"):
            list_state = close_list(out, list_state)
            quote = stripped.lstrip(">").strip()
            out.append(r"\begin{quote}" + "\n" + inline_tex(quote) + "\n" + r"\end{quote}" + "\n\n")
            i += 1
            continue

        list_state = close_list(out, list_state)
        out.append(inline_tex(line) + "\n\n")
        i += 1

    close_list(out, list_state)
    if in_code:
        out.append(r"\end{mdcode}" + "\n\n")
    return "".join(out)


def short_summary(text: str, source: SourceEntry) -> str:
    paragraphs: list[str] = []
    for block in re.split(r"\n\s*\n", text):
        stripped = block.strip()
        if not stripped or stripped.startswith("#") or stripped.startswith("---") or stripped.startswith("```"):
            continue
        if len(stripped) < 40:
            continue
        paragraphs.append(re.sub(r"\s+", " ", stripped))
        if len(paragraphs) >= 2:
            break
    base = paragraphs[0] if paragraphs else f"Documento de {source.lines} lineas dentro de la seccion {source.section}."
    if len(base) > 420:
        base = base[:417].rstrip() + "..."
    return base


def module_tex_filename(source: SourceEntry) -> str:
    safe = re.sub(r"[^A-Za-z0-9]+", "_", source.relative_path).strip("_")
    return f"{source.order:03d}_{safe}.tex"


def generate_module_tex(source: SourceEntry) -> None:
    path = ROOT / source.relative_path
    text = read_text(path)
    source.tex_file = f"modules/{module_tex_filename(source)}"
    body = markdown_to_tex(text, source.title)
    summary = short_summary(text, source)
    source_link = file_url(path)
    tex = f"""% Auto-generated from {source.relative_path}
\\chapter{{{inline_tex(source.title)}}}
\\label{{src:{source.id}}}

\\begin{{modulemeta}}
\\textbf{{Fuente original:}} \\href{{{tex_url(source_link)}}}{{{inline_tex(source.relative_path)}}}\\\\
\\textbf{{Seccion:}} {inline_tex(source.section)}\\\\
\\textbf{{Estado editorial:}} {inline_tex(source.status)}\\\\
\\textbf{{Rol:}} {inline_tex(source.role)}\\\\
\\textbf{{Lineas:}} {source.lines}\\\\
\\textbf{{Ultima modificacion:}} {inline_tex(source.last_modified)}
\\end{{modulemeta}}

\\section*{{Resumen editorial breve}}
{inline_tex(summary)}

\\section*{{Contenido completo}}
\\addcontentsline{{toc}}{{section}}{{Contenido completo}}

{body}
"""
    write_text(MODULES_DIR / module_tex_filename(source), tex)


def markdown_table(headers: list[str], rows: list[list[Any]]) -> str:
    out = ["| " + " | ".join(headers) + " |", "| " + " | ".join(["---"] * len(headers)) + " |"]
    for row in rows:
        out.append("| " + " | ".join(str(v).replace("\n", " ") for v in row) + " |")
    return "\n".join(out) + "\n"


def write_manifest(sources: list[SourceEntry], research_pdfs: list[dict[str, Any]], historic_index: list[dict[str, Any]]) -> None:
    data = {
        "generated_at": datetime.now().isoformat(timespec="minutes"),
        "root": str(ROOT),
        "rules": {
            "root_md": "Included in full",
            "research_md": "Included in full as research appendix",
            "research_pdfs": "Inventoried and linked, not embedded",
            "historic": "Inventoried only as obsolete/historic context",
            "duplicates": "Included and marked",
        },
        "counts": {
            "sources_included": len(sources),
            "root_markdown": sum(1 for s in sources if s.section == "root"),
            "research_markdown": sum(1 for s in sources if s.section == "research"),
            "research_pdfs": len(research_pdfs),
            "historic_index": len(historic_index),
        },
        "sources": [asdict(s) for s in sources],
        "research_pdfs": research_pdfs,
        "historic_index": historic_index,
    }
    write_text(PDF_ROOT / "source_manifest.json", json.dumps(data, ensure_ascii=False, indent=2))


def write_audit_files(findings: list[AuditFinding]) -> None:
    csv_path = PDF_ROOT / "audit_findings.csv"
    with csv_path.open("w", newline="", encoding="utf-8-sig") as f:
        writer = csv.DictWriter(f, fieldnames=list(asdict(findings[0]).keys()))
        writer.writeheader()
        for finding in findings:
            writer.writerow(asdict(finding))

    rows = [
        [
            f.id,
            f.severity,
            f.category,
            f.scope,
            f.finding,
            f.resolution,
        ]
        for f in findings
    ]
    content = f"""# Auditoria de coherencia y consistencia

Generado: {datetime.now().strftime("%Y-%m-%d %H:%M")}

Regla global: la informacion actual y no historica manda sobre `Historic`; los datos de mercado se tratan como snapshots; el tracker operativo manda sobre estado de aplicaciones.

{markdown_table(["ID", "Severidad", "Categoria", "Alcance", "Hallazgo", "Resolucion"], rows)}

## Evidencia detallada

"""
    for f in findings:
        content += f"### {f.id} - {f.category}\n\n"
        content += f"- Severidad: {f.severity}\n"
        content += f"- Alcance: {f.scope}\n"
        content += f"- Hallazgo: {f.finding}\n"
        content += f"- Resolucion: {f.resolution}\n"
        content += f"- Evidencia: {f.evidence}\n\n"
    write_text(PDF_ROOT / "audit_findings.md", content)


def write_obsidian_notes(
    sources: list[SourceEntry],
    research_pdfs: list[dict[str, Any]],
    historic_index: list[dict[str, Any]],
    findings: list[AuditFinding],
) -> None:
    root_sources = [s for s in sources if s.section == "root"]
    research_sources = [s for s in sources if s.section == "research"]

    research_md_rows = [
        [f"[[{s.relative_path[:-3]}]]", s.status, s.lines, s.last_modified, s.notes]
        for s in research_sources
    ]
    research_pdf_rows = [
        [f"[{p['name']}]({p['url']})", round(p["bytes"] / 1024, 1), p["last_modified"], p["note"]]
        for p in research_pdfs
    ]
    write_text(
        OBSIDIAN_DIR / "05_RESEARCH_INDEX.md",
        f"""---
status: current
type: research-index
last_updated: {datetime.now().strftime("%Y-%m-%d")}
tags:
  - research
  - index
  - current
---

# Research index

Este indice conecta la carpeta `Research` con la biblia profesional y los modulos raiz. Los `.md` de Research se incluyen completos en el PDF como apendice de investigacion. Los PDFs se inventarian y enlazan, pero no se incrustan.

## Research Markdown incluido

{markdown_table(["Fuente", "Estado", "Lineas", "Ultima modificacion", "Nota"], research_md_rows)}

## PDFs de Research inventariados

{markdown_table(["PDF", "KB", "Ultima modificacion", "Nota"], research_pdf_rows)}

## Regla de lectura

Si Research contradice un modulo actual de la raiz, usar el modulo actual y registrar la contradiccion en [[06_CANONICAL_FACTS_AND_ERRATA]] o [[07_CONSISTENCY_AUDIT]].
""",
    )

    errata_rows = [
        [f.id, f.severity, f.category, f.finding, f.resolution]
        for f in findings
    ]
    write_text(
        OBSIDIAN_DIR / "06_CANONICAL_FACTS_AND_ERRATA.md",
        f"""---
status: current
type: canonical-facts
last_updated: {datetime.now().strftime("%Y-%m-%d")}
tags:
  - source-of-truth
  - errata
  - current
---

# Canonical facts and errata

## Reglas de precedencia

1. Modulos actuales de raiz > `Research` previo > `Historic`.
2. Datos verificados > hipotesis.
3. Tracker operativo > notas narrativas para estado de aplicaciones.
4. PDF gigante = snapshot; Obsidian y tracker siguen vivos.
5. Historic es historico/desactualizado y no gobierna decisiones actuales.

## Hechos canonicos

- Alexander esta basado en Colombia.
- Disponibilidad actual: remoto internacional, contractor/B2B desde Colombia.
- No hay autorizacion laboral UE actual.
- Pasaporte/citizenship portugues esperado alrededor de 2028; no debe tratarse como derecho actual.
- TwinSight X500 es el flagship.
- Posicionamiento principal: Real-Time 3D Developer / Unity Technical Artist focused on interactive technical visualization, CAD-to-realtime optimization, and Unity WebGL deployment.
- ARA es ruta secundaria de Python automation / AI tooling.
- Senior Technical Artist es benchmark/aspiracion, no titulo publico actual.
- TwinSight es technical visualization / assembly inspection prototype; no digital twin industrial completo sin IoT/live telemetry.

## Errata y resoluciones

{markdown_table(["ID", "Severidad", "Categoria", "Hallazgo", "Resolucion"], errata_rows)}
""",
    )

    write_text(
        OBSIDIAN_DIR / "07_CONSISTENCY_AUDIT.md",
        f"""---
status: current
type: audit
last_updated: {datetime.now().strftime("%Y-%m-%d")}
tags:
  - audit
  - consistency
  - current
---

# Consistency audit

Fuente detallada: [[_pdf_biblia/audit_findings.md]]

{markdown_table(["ID", "Severidad", "Categoria", "Alcance", "Hallazgo", "Resolucion"], [[f.id, f.severity, f.category, f.scope, f.finding, f.resolution] for f in findings])}
""",
    )

    source_rows = [
        [s.order, f"[[{s.relative_path[:-3]}]]", s.section, s.status, s.lines, s.tex_file or ""]
        for s in root_sources + research_sources
    ]
    historic_rows = [
        [h["name"], h["relative_path"], round(h["bytes"] / 1024, 1), h["note"]]
        for h in historic_index
    ]
    write_text(
        OBSIDIAN_DIR / "08_PDF_SOURCE_MAP.md",
        f"""---
status: current
type: pdf-source-map
last_updated: {datetime.now().strftime("%Y-%m-%d")}
tags:
  - pdf
  - source-map
  - current
---

# PDF source map

PDF esperado:

- [[_pdf_biblia/dist/{PDF_BASENAME}.pdf]]

Manifest:

- [[_pdf_biblia/source_manifest.json]]

## Fuentes incluidas completas

{markdown_table(["Orden", "Fuente", "Seccion", "Estado", "Lineas", "Tex"], source_rows)}

## Historic indexado, no incluido en cuerpo

{markdown_table(["Archivo", "Ruta", "KB", "Nota"], historic_rows)}
""",
    )

    for name, query in {
        "research_sources.base": 'file.inFolder("Research")',
        "audit_notes.base": 'file.name == "06_CANONICAL_FACTS_AND_ERRATA" or file.name == "07_CONSISTENCY_AUDIT"',
        "deliverables.base": 'file.inFolder("_pdf_biblia") or file.inFolder("portfolio_web")',
    }.items():
        write_text(
            OBSIDIAN_DIR / "bases" / name,
            f"""filters:
  and:
    - '{query}'
views:
  - type: table
    name: "{name.replace('.base', '').replace('_', ' ').title()}"
    limit: 200
    order:
      - file.name
      - file.mtime
      - file.size
""",
        )


def write_portfolio_bridge() -> None:
    write_text(
        PORTFOLIO_DIR / "README.md",
        f"""# Portfolio web bridge

This folder is reserved for the future public portfolio web implementation.

Current status: planning/bridge only. No web app is implemented in this phase.

## Source of truth

Read these files before implementation:

- `E:\\Laboral\\_obsidian\\04_WEB_PORTFOLIO_PROMPT.md`
- `E:\\Laboral\\20_portfolio_copy_and_site_structure.md`
- `E:\\Laboral\\08B_twinsight_case_study_final_structure.md`
- `E:\\Laboral\\08_twinsight_x500_case_study.md`
- `E:\\Laboral\\21B_twinsight_demo_video_final_plan.md`
- `E:\\Laboral\\19B_github_readme_twinsight_final.md`
- `E:\\Laboral\\17_cv_base_and_role_variants.md`
- `E:\\Laboral\\18_linkedin_final_rewrite.md`

## Public positioning

Real-Time 3D Developer / Unity Technical Artist focused on interactive technical visualization, CAD-to-realtime optimization, and Unity WebGL deployment.

## Rules

- TwinSight X500 is the flagship.
- Do not claim current EU work authorization.
- Do not claim TwinSight is a complete industrial digital twin without IoT/live telemetry.
- Do not invent URLs, metrics, employers, demo links, or public repo state.
- Use explicit placeholders until final links exist.

## Links

- Obsidian prompt: `E:\\Laboral\\_obsidian\\04_WEB_PORTFOLIO_PROMPT.md`
- PDF source map: `E:\\Laboral\\_obsidian\\08_PDF_SOURCE_MAP.md`
- Generated PDF: `E:\\Laboral\\_pdf_biblia\\dist\\{PDF_BASENAME}.pdf`
""",
    )


def write_frontmatter_tex(
    sources: list[SourceEntry],
    research_pdfs: list[dict[str, Any]],
    historic_index: list[dict[str, Any]],
    findings: list[AuditFinding],
) -> None:
    root_count = sum(1 for s in sources if s.section == "root")
    research_count = sum(1 for s in sources if s.section == "research")

    overview = f"""\\chapter*{{Guia de lectura}}
\\addcontentsline{{toc}}{{chapter}}{{Guia de lectura}}

Esta biblia profesional es un snapshot completo del sistema de empleabilidad de Alexander Woodcock Salomon. Incluye completos los modulos Markdown de la ruta principal de \\texttt{{E:\\textbackslash{{}}Laboral}} y los Markdown de \\texttt{{Research}}. Los PDFs de Research se inventarian y enlazan, pero no se incrustan pagina por pagina. La carpeta \\texttt{{Historic}} se lista como indice obsoleto.

\\begin{{itemize}}
\\item Modulos raiz incluidos completos: {root_count}.
\\item Markdown de Research incluidos completos: {research_count}.
\\item PDFs de Research inventariados: {len(research_pdfs)}.
\\item Archivos Historic indexados: {len(historic_index)}.
\\end{{itemize}}

\\section*{{Reglas de verdad}}
\\begin{{itemize}}
\\item Informacion actual y no historica manda sobre Historic.
\\item Datos verificados mandan sobre hipotesis.
\\item Hojas de calculo y tracker mandan para estado operativo.
\\item PDF es snapshot; Obsidian y tracker siguen vivos.
\\item Pasaporte/citizenship portugues esperado alrededor de 2028; no es autorizacion UE actual.
\\end{{itemize}}
"""
    write_text(MODULES_DIR / "000_guia_de_lectura.tex", overview)

    audit_rows = [
        [f.id, f.severity, f.category, f.finding, f.resolution]
        for f in findings
    ]
    audit_md = "# Auditoria global\n\n" + markdown_table(["ID", "Severidad", "Categoria", "Hallazgo", "Resolucion"], audit_rows)
    audit_tex = "\\chapter*{Auditoria global de coherencia}\n\\addcontentsline{toc}{chapter}{Auditoria global de coherencia}\n\n"
    audit_tex += markdown_to_tex(audit_md, "Auditoria global")
    write_text(MODULES_DIR / "001_auditoria_global.tex", audit_tex)

    pdf_rows = [[p["name"], f"{round(p['bytes'] / 1024, 1)} KB", p["last_modified"], p["url"]] for p in research_pdfs]
    pdf_md = "# Inventario de PDFs de Research\n\n" + markdown_table(["PDF", "Tamano", "Ultima modificacion", "Enlace"], pdf_rows)
    pdf_tex = "\\chapter*{Inventario de PDFs de Research}\n\\addcontentsline{toc}{chapter}{Inventario de PDFs de Research}\n\n"
    pdf_tex += markdown_to_tex(pdf_md, "Inventario de PDFs de Research")
    write_text(MODULES_DIR / "998_research_pdf_inventory.tex", pdf_tex)

    hist_rows = [[h["name"], h["relative_path"], f"{round(h['bytes'] / 1024, 1)} KB", h["note"]] for h in historic_index]
    hist_md = "# Indice de Historic\n\n" + markdown_table(["Archivo", "Ruta", "Tamano", "Nota"], hist_rows)
    hist_tex = "\\chapter*{Indice de Historic}\n\\addcontentsline{toc}{chapter}{Indice de Historic}\n\n"
    hist_tex += markdown_to_tex(hist_md, "Indice de Historic")
    write_text(MODULES_DIR / "999_historic_index.tex", hist_tex)


def write_main_tex(sources: list[SourceEntry]) -> None:
    root_inputs = [s.tex_file for s in sources if s.section == "root" and s.tex_file]
    research_inputs = [s.tex_file for s in sources if s.section == "research" and s.tex_file]
    generated_at = datetime.now().strftime("%Y-%m-%d %H:%M")

    def input_lines(items: list[str]) -> str:
        return "\n".join(rf"\input{{{item}}}" for item in items)

    main = rf"""\documentclass[11pt,openany]{{book}}
\usepackage[a4paper,margin=2.1cm]{{geometry}}
\usepackage{{fontspec}}
\setmainfont{{Arial}}
\setmonofont{{Consolas}}
\usepackage{{microtype}}
\usepackage{{xcolor}}
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
  linkcolor=blue!45!black,
  urlcolor=blue!55!black,
  citecolor=blue!45!black,
  pdftitle={{Biblia Profesional Alexander Woodcock Salomon}},
  pdfauthor={{Alexander Woodcock Salomon}},
  pdfsubject={{Estrategia profesional, investigacion de mercado y empleabilidad}},
  pdfcreator={{Codex + XeLaTeX}}
}}
\pagestyle{{fancy}}
\fancyhf{{}}
\fancyhead[L]{{Biblia Profesional}}
\fancyhead[R]{{\leftmark}}
\fancyfoot[C]{{\thepage}}
\setlength{{\parskip}}{{0.55em}}
\setlength{{\parindent}}{{0pt}}
\setlist{{itemsep=0.2em, topsep=0.35em}}
\DefineVerbatimEnvironment{{mdcode}}{{Verbatim}}{{fontsize=\scriptsize,breaklines=true,breakanywhere=true}}
\newenvironment{{modulemeta}}{{\begin{{quote}}\small\color{{black!75}}}}{{\end{{quote}}}}

\begin{{document}}

\begin{{titlepage}}
\centering
\vspace*{{2cm}}
{{\Huge\bfseries Biblia Profesional\\[0.4em] Alexander Woodcock Salomon\par}}
\vspace{{1cm}}
{{\Large Estrategia de empleabilidad, investigacion de mercado, portafolio y ejecucion profesional\par}}
\vspace{{1.5cm}}
{{\large Version {VERSION} \par}}
{{\large Generado: {generated_at} \par}}
\vfill
{{\large Fuente raiz: \texttt{{E:\textbackslash{{}}Laboral}}\par}}
\vspace{{0.4cm}}
{{\small Este PDF es un snapshot. Obsidian, tracker y archivos Markdown siguen siendo las fuentes vivas.\par}}
\end{{titlepage}}

\frontmatter
\tableofcontents
\clearpage
\input{{modules/000_guia_de_lectura.tex}}
\input{{modules/001_auditoria_global.tex}}

\mainmatter
\part{{Modulos principales}}
{input_lines(root_inputs)}

\appendix
\part{{Research completo}}
{input_lines(research_inputs)}

\part{{Anexos tecnicos}}
\input{{modules/998_research_pdf_inventory.tex}}
\input{{modules/999_historic_index.tex}}

\chapter*{{Puente a portafolio web}}
\addcontentsline{{toc}}{{chapter}}{{Puente a portafolio web}}
La carpeta reservada para el futuro portafolio web es:

\href{{{tex_url(file_url(ROOT / "portfolio_web"))}}}{{\texttt{{portfolio\_web}}}}

El prompt principal para construirlo esta en:

\href{{{tex_url(file_url(OBSIDIAN_DIR / "04_WEB_PORTFOLIO_PROMPT.md"))}}}{{\texttt{{\_obsidian/04\_WEB\_PORTFOLIO\_PROMPT.md}}}}

\end{{document}}
"""
    write_text(TEX_DIR / "main.tex", main)


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
    success = True
    for _ in range(2):
        proc = subprocess.run(cmd, cwd=TEX_DIR, capture_output=True, text=True, encoding="utf-8", errors="replace")
        (BUILD_DIR / "xelatex_stdout.log").write_text(proc.stdout, encoding="utf-8", errors="replace")
        (BUILD_DIR / "xelatex_stderr.log").write_text(proc.stderr, encoding="utf-8", errors="replace")
        if proc.returncode != 0:
            success = False
            break
    built = BUILD_DIR / "main.pdf"
    if success and built.exists():
        shutil.copy2(built, DIST_DIR / f"{PDF_BASENAME}.pdf")
        return True
    return False


def main() -> None:
    ensure_dirs()
    sources, research_pdfs, historic_index = collect_sources()
    findings = build_audit(sources, historic_index)

    for source in sources:
        generate_module_tex(source)

    write_manifest(sources, research_pdfs, historic_index)
    write_audit_files(findings)
    write_obsidian_notes(sources, research_pdfs, historic_index, findings)
    write_portfolio_bridge()
    write_frontmatter_tex(sources, research_pdfs, historic_index, findings)
    write_main_tex(sources)

    compiled = compile_pdf()
    result = {
        "sources": len(sources),
        "root_markdown": sum(1 for s in sources if s.section == "root"),
        "research_markdown": sum(1 for s in sources if s.section == "research"),
        "research_pdfs": len(research_pdfs),
        "historic_index": len(historic_index),
        "compiled": compiled,
        "pdf": str(DIST_DIR / f"{PDF_BASENAME}.pdf"),
    }
    print(json.dumps(result, ensure_ascii=False, indent=2))
    if not compiled:
        raise SystemExit(2)


if __name__ == "__main__":
    main()
