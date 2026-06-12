---
status: current
type: data-system
last_updated: 2026-06-11
tags:
  - data
  - tracker
  - current
---

# Datos y trackers

## Fuente operativa

La hoja viva principal es:

- [[25_application_tracker_template.xlsx]]

Sus pestañas principales son:

- `Dashboard`
- `Applications`
- `Companies`
- `Contacts`
- `Interviews`
- `Offers`
- `Weekly Metrics`
- `Skill Sprint`
- `Content Assets`
- `Settings`

## Regla de sincronizacion

No dupliques datos manualmente entre Excel y Markdown.

- Editar aplicaciones, empresas, contactos, entrevistas, ofertas y metricas en el workbook.
- Ejecutar el script de sincronizacion.
- Leer en Obsidian las vistas generadas.

## Script

Desde `E:\Laboral`:

```powershell
& "C:\Users\alexw\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" "_obsidian\scripts\sync_tracker.py"
```

El script genera:

- `_obsidian/generated/csv/*.csv`
- `_obsidian/generated/md/*.md`

Vista principal:

- [[tracker_summary]]

## Buen uso

- Excel es la fuente de verdad para estado operativo.
- Obsidian es la capa de navegacion, lectura y decision.
- Los Markdown generados no se editan manualmente; se regeneran desde la hoja.
- Los modulos narrativos si se editan manualmente cuando cambia la estrategia.

