---
status: current
type: pdf-editorial
last_updated: 2026-06-12
tags:
  - pdf
  - editorial
  - current
---

# Biblia editorial

PDF final:

- [[_pdf_biblia/dist/Biblia_Profesional_Alexander_EDITORIAL_v1.pdf]]

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
& "C:\Users\alexw\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" "_pdf_biblia\scripts\build_editorial_biblia.py"
```
