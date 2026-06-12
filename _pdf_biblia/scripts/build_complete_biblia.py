from __future__ import annotations

import csv
import hashlib
import importlib.util
import json
import re
import shutil
import subprocess
import sys
from dataclasses import asdict
from datetime import datetime
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[2]
PDF_ROOT = ROOT / "_pdf_biblia"
TEX_DIR = PDF_ROOT / "tex_complete"
BUILD_DIR = PDF_ROOT / "build_complete"
DIST_DIR = PDF_ROOT / "dist"
CHAPTERS_DIR = TEX_DIR / "chapters"
OBSIDIAN_DIR = ROOT / "_obsidian"
PDF_BASENAME = "Biblia_Profesional_Alexander_COMPLETA_v1"

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


class DedupeRegistry:
    def __init__(self) -> None:
        self.seen: dict[str, dict[str, Any]] = {}
        self.rows: list[dict[str, Any]] = []

    @staticmethod
    def normalize(block: str) -> str:
        text = block.strip().lower()
        text = re.sub(r"\s+", " ", text)
        text = re.sub(r"[`*_>#\-\s]+$", "", text)
        return text

    @staticmethod
    def fingerprint(block: str) -> str:
        return hashlib.sha256(DedupeRegistry.normalize(block).encode("utf-8")).hexdigest()

    def check(self, block: str, source: Any, block_type: str) -> tuple[bool, str | None]:
        normalized = self.normalize(block)
        if len(normalized) < 220:
            return False, None
        if block_type in {"heading", "code", "separator", "blank"}:
            return False, None
        key = self.fingerprint(block)
        first = self.seen.get(key)
        if first:
            self.rows.append(
                {
                    "duplicate_source": source.relative_path,
                    "duplicate_title": source.title,
                    "first_source": first["source"],
                    "first_title": first["title"],
                    "block_type": block_type,
                    "characters": len(block),
                    "hash": key[:16],
                    "preview": re.sub(r"\s+", " ", block.strip())[:240],
                }
            )
            note = (
                "> [Duplicado literal eliminado] Este bloque ya aparece en "
                f"`{first['source']}` (`{first['title']}`). Se conserva aqui la referencia "
                "para trazabilidad, pero no se repite el contenido."
            )
            return True, note
        self.seen[key] = {"source": source.relative_path, "title": source.title}
        return False, None


def ensure_dirs() -> None:
    for path in [TEX_DIR, BUILD_DIR, DIST_DIR, CHAPTERS_DIR, OBSIDIAN_DIR]:
        path.mkdir(parents=True, exist_ok=True)


def write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8", newline="\n")


def split_markdown_blocks(markdown: str) -> list[tuple[str, str]]:
    lines = markdown.replace("\r\n", "\n").replace("\r", "\n").split("\n")
    blocks: list[tuple[str, str]] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        if not stripped:
            blocks.append(("blank", ""))
            i += 1
            continue
        if stripped.startswith("```"):
            block = [line]
            i += 1
            while i < len(lines):
                block.append(lines[i])
                if lines[i].strip().startswith("```"):
                    i += 1
                    break
                i += 1
            blocks.append(("code", "\n".join(block)))
            continue
        if stripped.startswith("#"):
            blocks.append(("heading", line))
            i += 1
            continue
        if re.fullmatch(r"[-*_]{3,}", stripped):
            blocks.append(("separator", line))
            i += 1
            continue
        if i + 1 < len(lines) and "|" in stripped and raw.is_table_separator(lines[i + 1].strip()):
            block = [line, lines[i + 1]]
            i += 2
            while i < len(lines) and "|" in lines[i].strip():
                block.append(lines[i])
                i += 1
            blocks.append(("table", "\n".join(block)))
            continue
        if re.match(r"^\s*(?:[-*+]|\d+\.)\s+", line):
            block = [line]
            i += 1
            while i < len(lines):
                nxt = lines[i]
                if not nxt.strip():
                    break
                if nxt.strip().startswith("#") or nxt.strip().startswith("```"):
                    break
                if not re.match(r"^\s*(?:[-*+]|\d+\.)\s+", nxt) and not nxt.startswith((" ", "\t")):
                    break
                block.append(nxt)
                i += 1
            blocks.append(("list", "\n".join(block)))
            continue
        block = [line]
        i += 1
        while i < len(lines):
            nxt = lines[i]
            if not nxt.strip():
                break
            if nxt.strip().startswith("#") or nxt.strip().startswith("```"):
                break
            if i + 1 < len(lines) and "|" in nxt.strip() and raw.is_table_separator(lines[i + 1].strip()):
                break
            if re.match(r"^\s*(?:[-*+]|\d+\.)\s+", nxt):
                break
            block.append(nxt)
            i += 1
        blocks.append(("paragraph", "\n".join(block)))
    return blocks


def dedupe_markdown(markdown: str, source: Any, registry: DedupeRegistry) -> tuple[str, dict[str, int]]:
    kept: list[str] = []
    stats = {"blocks_total": 0, "blocks_removed": 0, "characters_removed": 0}
    for block_type, block in split_markdown_blocks(markdown):
        if block_type == "blank":
            kept.append("")
            continue
        stats["blocks_total"] += 1
        is_duplicate, note = registry.check(block, source, block_type)
        if is_duplicate and note:
            stats["blocks_removed"] += 1
            stats["characters_removed"] += len(block)
            kept.append(note)
        else:
            kept.append(block)
    return "\n\n".join(kept).strip() + "\n", stats


def safe_tex_name(source: Any) -> str:
    safe = re.sub(r"[^A-Za-z0-9]+", "_", source.relative_path).strip("_")
    return f"{source.order:03d}_{safe}.tex"


def short_context(text: str) -> str:
    for block in re.split(r"\n\s*\n", text):
        stripped = block.strip()
        if not stripped or stripped.startswith("#") or stripped.startswith("```"):
            continue
        if len(stripped) > 60:
            return re.sub(r"\s+", " ", stripped)[:480]
    return "Modulo incluido completo para revision documental."


def module_to_tex(source: Any, registry: DedupeRegistry) -> dict[str, Any]:
    path = ROOT / source.relative_path
    original = raw.read_text(path)
    deduped, stats = dedupe_markdown(original, source, registry)
    body = raw.markdown_to_tex(deduped, source.title)
    filename = safe_tex_name(source)
    source.tex_file = f"chapters/{filename}"
    source_link = raw.file_url(path)
    summary = short_context(original)
    tex = f"""% Auto-generated complete chapter from {source.relative_path}
\\chapter{{{raw.inline_tex(source.title)}}}
\\label{{complete:{source.id}}}

\\begin{{sourcemeta}}
\\textbf{{Fuente:}} \\href{{{raw.tex_url(source_link)}}}{{{raw.inline_tex(source.relative_path)}}}\\\\
\\textbf{{Seccion:}} {raw.inline_tex(source.section)}\\\\
\\textbf{{Estado:}} {raw.inline_tex(source.status)}\\\\
\\textbf{{Rol:}} {raw.inline_tex(source.role)}\\\\
\\textbf{{Lineas originales:}} {source.lines}\\\\
\\textbf{{Ultima modificacion:}} {raw.inline_tex(source.last_modified)}\\\\
\\textbf{{Deduplicacion conservadora:}} {stats["blocks_removed"]} bloques repetidos omitidos; {stats["characters_removed"]} caracteres repetidos no reimpresos.
\\end{{sourcemeta}}

\\section*{{Resumen de orientacion}}
{raw.inline_tex(summary)}

\\section*{{Contenido completo depurado}}
\\addcontentsline{{toc}}{{section}}{{Contenido completo depurado}}

{body}
"""
    write(CHAPTERS_DIR / filename, tex)
    return {
        "id": source.id,
        "relative_path": source.relative_path,
        "title": source.title,
        "status": source.status,
        "section": source.section,
        **stats,
        "original_lines": source.lines,
        "original_bytes": source.bytes,
        "tex_file": source.tex_file,
    }


def markdown_table(headers: list[str], rows: list[list[Any]]) -> str:
    return raw.markdown_table(headers, rows)


def write_reports(module_stats: list[dict[str, Any]], registry: DedupeRegistry) -> None:
    stats_path = PDF_ROOT / "complete_module_stats.csv"
    with stats_path.open("w", newline="", encoding="utf-8-sig") as f:
        writer = csv.DictWriter(f, fieldnames=list(module_stats[0].keys()))
        writer.writeheader()
        writer.writerows(module_stats)

    dedupe_path = PDF_ROOT / "complete_deduplication_report.csv"
    fields = [
        "duplicate_source",
        "duplicate_title",
        "first_source",
        "first_title",
        "block_type",
        "characters",
        "hash",
        "preview",
    ]
    with dedupe_path.open("w", newline="", encoding="utf-8-sig") as f:
        writer = csv.DictWriter(f, fieldnames=fields)
        writer.writeheader()
        writer.writerows(registry.rows)

    top_rows = [
        [
            row["relative_path"],
            row["section"],
            row["status"],
            row["original_lines"],
            row["blocks_removed"],
            row["characters_removed"],
        ]
        for row in module_stats
    ]
    dup_rows = [
        [
            row["duplicate_source"],
            row["first_source"],
            row["block_type"],
            row["characters"],
            row["preview"],
        ]
        for row in registry.rows[:300]
    ]
    md = f"""# Biblia completa - reporte de modulo y deduplicacion

Generado: {datetime.now().strftime("%Y-%m-%d %H:%M")}

La deduplicacion es conservadora: solo se reemplazan bloques largos cuyo texto normalizado ya aparecio previamente. Si un bloque no es literalmente repetido, permanece en el PDF.

## Estadisticas por modulo

{markdown_table(["Fuente", "Seccion", "Estado", "Lineas", "Bloques repetidos omitidos", "Caracteres omitidos"], top_rows)}

## Bloques duplicados reemplazados por nota

{markdown_table(["Duplicado en", "Primera aparicion", "Tipo", "Caracteres", "Vista previa"], dup_rows)}
"""
    write(PDF_ROOT / "complete_deduplication_report.md", md)


def write_complete_obsidian_note(validation: dict[str, Any]) -> None:
    write(
        OBSIDIAN_DIR / "10_BIBLIA_COMPLETA.md",
        f"""---
status: current
type: pdf-complete
last_updated: {datetime.now().strftime("%Y-%m-%d")}
tags:
  - pdf
  - complete
  - current
---

# Biblia completa

PDF completo:

- [[_pdf_biblia/dist/{PDF_BASENAME}.pdf]]

Esta version esta pensada para revisar todo el contenido disponible sin capar datos utiles. A diferencia de la version editorial, conserva el cuerpo completo de los `.md` de raiz y de `Research`; solo reemplaza bloques largos repetidos por una nota de referencia a su primera aparicion.

## Validacion

| Campo | Valor |
|---|---|
| Root Markdown | {validation.get("root_markdown")} |
| Research Markdown | {validation.get("research_markdown")} |
| PDFs Research inventariados | {validation.get("research_pdfs")} |
| Historic indexado | {validation.get("historic_index")} |
| Paginas estimadas por PDF externo | {validation.get("pdf_pages", "pendiente")} |
| Bloques duplicados omitidos | {validation.get("duplicate_blocks_removed")} |
| Caracteres duplicados omitidos | {validation.get("duplicate_characters_removed")} |
| PDF bytes | {validation.get("pdf_bytes")} |
| Passed | {validation.get("passed")} |

## Artefactos

- [[_pdf_biblia/complete_validation.json]]
- [[_pdf_biblia/complete_deduplication_report.md]]
- [[_pdf_biblia/complete_module_stats.csv]]
- [[_pdf_biblia/source_manifest.json]]
- [[06_CANONICAL_FACTS_AND_ERRATA]]
- [[07_CONSISTENCY_AUDIT]]
- [[09_BIBLIA_EDITORIAL]]
""",
    )


def append_home_link() -> None:
    home = OBSIDIAN_DIR / "00_HOME.md"
    if not home.exists():
        return
    text = raw.read_text(home)
    if "[[10_BIBLIA_COMPLETA]]" in text:
        return
    marker = "- [[09_BIBLIA_EDITORIAL]]"
    if marker in text:
        text = text.replace(marker, marker + "\n- [[10_BIBLIA_COMPLETA]]")
    else:
        text += "\n- [[10_BIBLIA_COMPLETA]]\n"
    write(home, text)


def write_frontmatter(
    sources: list[Any],
    research_pdfs: list[dict[str, Any]],
    historic_index: list[dict[str, Any]],
    findings: list[Any],
    module_stats: list[dict[str, Any]],
    registry: DedupeRegistry,
) -> list[str]:
    root_count = sum(1 for s in sources if s.section == "root")
    research_count = sum(1 for s in sources if s.section == "research")
    total_lines = sum(s.lines for s in sources)
    total_bytes = sum(s.bytes for s in sources)
    duplicates = len(registry.rows)
    duplicate_chars = sum(int(row["characters"]) for row in registry.rows)

    audit_rows = [[f.id, f.severity, f.category, f.finding, f.resolution] for f in findings]
    guide_md = f"""# Guia de lectura de la version completa

Esta version completa existe para revisar todo el corpus sin perder listas, tablas, empresas, datos de mercado ni materiales operativos. No intenta condensar la investigacion como la version editorial.

## Que incluye

| Seccion | Cantidad |
|---|---:|
| Modulos Markdown de raiz incluidos completos | {root_count} |
| Markdown de Research incluidos completos | {research_count} |
| PDFs de Research inventariados y enlazados | {len(research_pdfs)} |
| Historic indexado como obsoleto | {len(historic_index)} |
| Lineas Markdown fuente incluidas | {total_lines} |
| Bytes Markdown fuente incluidos | {total_bytes} |
| Bloques duplicados largos reemplazados por nota | {duplicates} |
| Caracteres duplicados no reimpresos | {duplicate_chars} |

## Regla de deduplicacion

Solo se omiten bloques largos cuyo contenido normalizado ya aparecio antes. La primera aparicion permanece completa. La segunda aparicion se reemplaza por una nota con la fuente original. Si el texto contiene informacion nueva, distinta o parcialmente diferente, permanece.

## Regla de verdad

| Tema | Regla |
|---|---|
| Historic | Es historico/desactualizado y no gobierna decisiones actuales |
| Research | Es evidencia fuente; si contradice modulos actuales, se subordina a la regla canonica |
| Pasaporte portugues | Esperado alrededor de 2028; no es autorizacion laboral UE actual |
| Perfil publico | Real-Time 3D Developer / Unity Technical Artist |
| TwinSight | Technical visualization / assembly inspection prototype; no full production digital twin |
| Tracker/hojas | Mandan para estado operativo vivo |
| PDF completo | Snapshot de revision; no sustituye Obsidian ni archivos fuente |

## Auditoria principal

{markdown_table(["ID", "Severidad", "Categoria", "Hallazgo", "Resolucion"], audit_rows)}
"""
    guide_tex = "\\chapter*{Guia de lectura de la version completa}\n\\addcontentsline{toc}{chapter}{Guia de lectura de la version completa}\n"
    guide_tex += raw.markdown_to_tex(guide_md, "Guia completa")
    write(CHAPTERS_DIR / "000_guia_completa.tex", guide_tex)

    source_rows = [
        [
            row["relative_path"],
            row["section"],
            row["status"],
            row["original_lines"],
            row["blocks_removed"],
            row["characters_removed"],
        ]
        for row in module_stats
    ]
    source_md = "# Mapa de fuentes completo\n\n"
    source_md += markdown_table(
        ["Fuente", "Seccion", "Estado", "Lineas", "Bloques omitidos", "Caracteres omitidos"],
        source_rows,
    )
    source_tex = "\\chapter*{Mapa de fuentes completo}\n\\addcontentsline{toc}{chapter}{Mapa de fuentes completo}\n"
    source_tex += raw.markdown_to_tex(source_md, "Mapa de fuentes completo")
    write(CHAPTERS_DIR / "001_mapa_fuentes_completo.tex", source_tex)

    pdf_rows = [
        [p["name"], f"{round(p['bytes'] / 1024, 1)} KB", p["last_modified"], p["url"]]
        for p in research_pdfs
    ]
    pdf_md = "# Inventario de PDFs de Research\n\n"
    pdf_md += markdown_table(["PDF", "Tamano", "Ultima modificacion", "Enlace"], pdf_rows)
    pdf_tex = "\\chapter*{Inventario de PDFs de Research}\n\\addcontentsline{toc}{chapter}{Inventario de PDFs de Research}\n"
    pdf_tex += raw.markdown_to_tex(pdf_md, "Inventario de PDFs de Research")
    write(CHAPTERS_DIR / "998_research_pdf_inventory.tex", pdf_tex)

    historic_rows = [
        [h["name"], h["relative_path"], f"{round(h['bytes'] / 1024, 1)} KB", h["note"]]
        for h in historic_index
    ]
    historic_md = "# Indice de Historic\n\n"
    historic_md += markdown_table(["Archivo", "Ruta", "Tamano", "Nota"], historic_rows)
    historic_tex = "\\chapter*{Indice de Historic}\n\\addcontentsline{toc}{chapter}{Indice de Historic}\n"
    historic_tex += raw.markdown_to_tex(historic_md, "Indice de Historic")
    write(CHAPTERS_DIR / "999_historic_index.tex", historic_tex)

    return [
        "chapters/000_guia_completa.tex",
        "chapters/001_mapa_fuentes_completo.tex",
    ]


def write_main_tex(sources: list[Any], frontmatter_paths: list[str]) -> None:
    root_inputs = [s.tex_file for s in sources if s.section == "root" and s.tex_file]
    research_inputs = [s.tex_file for s in sources if s.section == "research" and s.tex_file]
    generated = datetime.now().strftime("%Y-%m-%d %H:%M")

    def input_lines(items: list[str]) -> str:
        return "\n".join(rf"\input{{{item}}}" for item in items)

    main = rf"""\documentclass[10pt,openany]{{book}}
\usepackage[a4paper,margin=1.8cm,headheight=14pt]{{geometry}}
\usepackage{{fontspec}}
\setmainfont{{Arial}}
\setmonofont{{Consolas}}
\usepackage{{microtype}}
\usepackage{{xcolor}}
\definecolor{{Accent}}{{HTML}}{{24556E}}
\definecolor{{Soft}}{{HTML}}{{F3F7F8}}
\definecolor{{Meta}}{{HTML}}{{EEF4F6}}
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
  pdftitle={{Biblia Profesional Completa Alexander Woodcock Salomon}},
  pdfauthor={{Alexander Woodcock Salomon}},
  pdfsubject={{Corpus completo de estrategia profesional, research y empleabilidad}},
  pdfcreator={{Codex + XeLaTeX}}
}}
\pagestyle{{fancy}}
\fancyhf{{}}
\fancyhead[L]{{\small\textcolor{{Accent}}{{Biblia completa}}}}
\fancyhead[R]{{\small\leftmark}}
\fancyfoot[C]{{\thepage}}
\setlength{{\parskip}}{{0.45em}}
\setlength{{\parindent}}{{0pt}}
\setlist{{itemsep=0.12em, topsep=0.28em, parsep=0.05em}}
\renewcommand{{\arraystretch}}{{1.12}}
\emergencystretch=4em
\sloppy
\titleformat{{\chapter}}[display]{{\normalfont\huge\bfseries\color{{Accent}}}}{{\chaptertitlename\ \thechapter}}{{12pt}}{{\Huge}}
\titleformat{{\section}}{{\Large\bfseries\color{{Accent}}}}{{\thesection}}{{0.6em}}{{}}
\DefineVerbatimEnvironment{{mdcode}}{{Verbatim}}{{fontsize=\scriptsize,breaklines=true,breakanywhere=true,frame=single,rulecolor=\color{{black!18}}}}
\newenvironment{{sourcemeta}}{{\begin{{quote}}\small\color{{black!78}}}}{{\end{{quote}}}}

\begin{{document}}
\begin{{titlepage}}
\pagecolor{{Soft}}
\centering
\vspace*{{1.7cm}}
{{\Huge\bfseries\textcolor{{Accent}}{{Biblia Profesional Completa}}\par}}
\vspace{{0.35cm}}
{{\LARGE Alexander Woodcock Salomon\par}}
\vspace{{1cm}}
{{\Large Corpus completo de estrategia, research, mercado, portafolio y ejecucion\par}}
\vspace{{1.3cm}}
{{\large Version completa v1\par}}
{{\large Generado: {generated}\par}}
\vfill
{{\large Lectura de revision: sin capar datos utiles, con deduplicacion conservadora\par}}
\vspace{{0.5cm}}
{{\small Fuente viva: \texttt{{E:\textbackslash{{}}Laboral}}\par}}
\clearpage
\nopagecolor
\end{{titlepage}}

\frontmatter
\tableofcontents
\clearpage
{input_lines(frontmatter_paths)}

\mainmatter
\part{{Modulos raiz completos}}
{input_lines(root_inputs)}

\appendix
\part{{Research Markdown completo}}
{input_lines(research_inputs)}

\part{{Anexos}}
\input{{chapters/998_research_pdf_inventory.tex}}
\input{{chapters/999_historic_index.tex}}

\chapter*{{Puente a Obsidian y portafolio web}}
\addcontentsline{{toc}}{{chapter}}{{Puente a Obsidian y portafolio web}}
La navegacion viva del sistema esta en \href{{{raw.tex_url(raw.file_url(OBSIDIAN_DIR / "00_HOME.md"))}}}{{\texttt{{\_obsidian/00\_HOME.md}}}}.

La carpeta de portafolio web esta en \href{{{raw.tex_url(raw.file_url(ROOT / "portfolio_web"))}}}{{\texttt{{portfolio\_web}}}}.

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


def pdf_pages(pdf_path: Path) -> int | None:
    pdfinfo = shutil.which("pdfinfo")
    if not pdfinfo or not pdf_path.exists():
        return None
    proc = subprocess.run([pdfinfo, str(pdf_path)], capture_output=True, text=True, encoding="utf-8", errors="replace")
    if proc.returncode != 0:
        return None
    match = re.search(r"^Pages:\s+(\d+)", proc.stdout, flags=re.MULTILINE)
    return int(match.group(1)) if match else None


def text_audit(pdf_path: Path) -> dict[str, Any]:
    pdftotext = shutil.which("pdftotext")
    out_path = BUILD_DIR / "complete_pdf_text_audit.txt"
    result = {
        "text_extracted": False,
        "has_company_module": False,
        "has_company_names": False,
        "has_salary_targets": False,
        "has_passport_2028": False,
        "has_no_current_eu_rule": False,
        "has_twinsight_metrics": False,
        "has_dedup_notes": False,
    }
    if not pdftotext or not pdf_path.exists():
        return result
    proc = subprocess.run([pdftotext, "-layout", str(pdf_path), str(out_path)], capture_output=True, text=True)
    if proc.returncode != 0 or not out_path.exists():
        return result
    text = raw.read_text(out_path)
    result.update(
        {
            "text_extracted": True,
            "has_company_module": "company_targets_job_boards_recruiters" in text,
            "has_company_names": all(name in text for name in ["Treeview", "Active Theory", "Threekit"]),
            "has_salary_targets": all(term in text for term in ["USD 1.5k", "USD 3k", "USD 6k"]),
            "has_passport_2028": "2028" in text,
            "has_no_current_eu_rule": any(
                phrase in text
                for phrase in [
                    "No claim de EU work authorization",
                    "No hay autorizacion laboral UE actual",
                    "No hay autorización laboral UE actual",
                    "does not currently have EU work authorization",
                    "Current EU work authorization: No",
                    "I do not currently claim EU work authorization",
                    "no current EU work authorization should be assumed",
                ]
            ),
            "has_twinsight_metrics": "SUS" in text and "NASA" in text,
            "has_dedup_notes": "Duplicado literal eliminado" in text,
        }
    )
    return result


def validate(
    sources: list[Any],
    research_pdfs: list[dict[str, Any]],
    historic_index: list[dict[str, Any]],
    findings: list[Any],
    module_stats: list[dict[str, Any]],
    registry: DedupeRegistry,
    compiled: bool,
) -> dict[str, Any]:
    pdf_path = DIST_DIR / f"{PDF_BASENAME}.pdf"
    source_lines = sum(s.lines for s in sources)
    source_bytes = sum(s.bytes for s in sources)
    duplicate_blocks = len(registry.rows)
    duplicate_chars = sum(int(row["characters"]) for row in registry.rows)
    audit = text_audit(pdf_path)
    validation = {
        "generated_at": datetime.now().isoformat(timespec="minutes"),
        "compiled": compiled,
        "pdf": str(pdf_path),
        "pdf_exists": pdf_path.exists(),
        "pdf_bytes": pdf_path.stat().st_size if pdf_path.exists() else 0,
        "pdf_pages": pdf_pages(pdf_path),
        "root_markdown": sum(1 for s in sources if s.section == "root"),
        "research_markdown": sum(1 for s in sources if s.section == "research"),
        "research_pdfs": len(research_pdfs),
        "historic_index": len(historic_index),
        "audit_findings": len(findings),
        "source_lines": source_lines,
        "source_bytes": source_bytes,
        "module_stats": len(module_stats),
        "duplicate_blocks_removed": duplicate_blocks,
        "duplicate_characters_removed": duplicate_chars,
        **audit,
    }
    validation["passed"] = all(
        [
            compiled,
            validation["pdf_exists"],
            validation["pdf_bytes"] > 1_000_000,
            validation["root_markdown"] >= 45,
            validation["research_markdown"] >= 15,
            validation["research_pdfs"] >= 10,
            validation["historic_index"] >= 9,
            validation["source_lines"] >= 45_000,
            validation["text_extracted"],
            validation["has_company_module"],
            validation["has_company_names"],
            validation["has_salary_targets"],
            validation["has_passport_2028"],
            validation["has_no_current_eu_rule"],
            validation["has_twinsight_metrics"],
        ]
    )
    return validation


def main() -> None:
    ensure_dirs()
    sources, research_pdfs, historic_index = raw.collect_sources()
    findings = raw.build_audit(sources, historic_index)
    registry = DedupeRegistry()

    module_stats: list[dict[str, Any]] = []
    for source in sources:
        module_stats.append(module_to_tex(source, registry))

    raw.write_manifest(sources, research_pdfs, historic_index)
    raw.write_audit_files(findings)
    raw.write_obsidian_notes(sources, research_pdfs, historic_index, findings)
    write_reports(module_stats, registry)
    frontmatter = write_frontmatter(sources, research_pdfs, historic_index, findings, module_stats, registry)
    write_main_tex(sources, frontmatter)
    compiled = compile_pdf()
    validation = validate(sources, research_pdfs, historic_index, findings, module_stats, registry, compiled)
    write(PDF_ROOT / "complete_validation.json", json.dumps(validation, ensure_ascii=False, indent=2))
    write_complete_obsidian_note(validation)
    append_home_link()
    print(json.dumps(validation, ensure_ascii=False, indent=2))
    if not validation["passed"]:
        raise SystemExit(2)


if __name__ == "__main__":
    main()
