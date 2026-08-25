# STATUS — AG-SERV (rama agent/services)

> Agente de Servicios: catálogo freelance, metodología de estimación (tiempo/costo por tarea y subtarea), paquetes de cobro y — en fases futuras — estimador interno y web pública de rangos de precio.
> Ciclo 1 · 2026-08-25. Rama `agent/services` sobre `main` @ `3a98cfe`.

## Carta del agente

Fuente de verdad: **ficha §3.10 de `PLAN_MULTIAGENTE.md`** (redactada por una sesión previa de AG-SERV, hallada sin commitear en este worktree; se adopta y se protege en commit etiquetado `[TICKET]`, pendiente de aprobación del usuario/AG-CORE vía PR).

| | |
|---|---|
| **Rama** | `agent/services` |
| **Worktree** | `E:\Laboral\.worktrees\services` |
| **OWN** | `docs/servicios/**` (catálogo maestro, políticas, tarifas), `docs/agents/STATUS-serv.md`; futuro: `src/data/services/**`, `src/components/services/**`, `src/pages/app/services/**`, `rag/services.json` |
| **READ** | docs 00–36 raíz — especialmente 01 (perfil/claims), 02 (posicionamiento), **03 (salary benchmark: ancla de la rate card)**, 07/20 (portafolio: ejemplos futuros), 22 (outreach) |
| **FORBIDDEN** | sitio público y CV (AG-PORT), resto de career (AG-CAREER), archivos compartidos globales §1.2 (TICKET a AG-CORE), app interna de otros dominios |

## Reglas heredadas

1. Solo mi worktree. Sin push. Commits por tarea.
2. Regla de Oro: aditivo; nada consolidado se borra sin aprobación expresa.
3. Verificación por commit: cada commit verifica su diff (solo archivos propios o payload de ticket etiquetado).

## Reglas particulares AG-SERV

1. **Trazabilidad numérica**: toda tarifa u hora se ancla a doc-03 (sección citada) o se marca como *inferencia propia documentada*.
2. **Rangos, nunca cifras únicas**: min–max en USD con criterios objetivos de ubicación dentro del rango.
3. **Desglose antes de precio**: ningún rango de paquete sin tabla de subtareas que lo soporte.
4. **Sin URLs/assets/clientes inventados**: ejemplos visuales futuros con placeholders explícitos.
5. **USD como moneda de cotización**; fiscalidad COP fuera de alcance (doc-03 §7: contador).
6. **Versionado de tarifas**: cambio de rate card = nueva versión citando fuente; deprecación, nunca borrado.
7. Los rangos son **estimación operativa para scoping**, no cotización cerrada (esa se emite por proyecto tras discovery).

## Incidente registrado (transparencia)

Durante el arranque de este ciclo, el contenido del worktree `services` fue eliminado casi por completo por un proceso externo concurrente (otros agentes trabajan en paralelo en el repo; se observó movimiento simultáneo de `agent/nutricion`). No se perdió trabajo commiteado: la rama estaba intacta en main @ 3a98cfe y el worktree se reconstruyó desde ella. Lección operativa: **commitear temprano y solo por ruta explícita**, nunca dejar trabajo valioso sin commitear (aplica también a los drafts hallados de la sesión previa, que ahora quedan protegidos).

## Tareas ciclo 1

| # | Tarea | Estado |
|---|---|---|
| 1 | Adoptar ficha §3.10 + ticket de registro (payload `[TICKET]` en PLAN_MULTIAGENTE + tickets.md, pendiente aprobación AG-CORE/usuario) | ✅ |
| 2 | Carta AG-SERV (este archivo) | ✅ |
| 3 | `docs/servicios/00_METODOLOGIA.md`: rate card anclada a doc-03, escala S/M/L/XL, fórmula de estimación, políticas (revisiones, rush, pagos, exclusiones) | ⏳ |
| 4 | Catálogo C1 Render 3D (`01_render_3d.md`) | ⏳ |
| 5 | Catálogo C2 Assets realtime WebGL (`02_assets_realtime_webgl.md`) | ⏳ |
| 6 | Catálogo C3 Integración web 3D (`03_integracion_web_3d.md`) | ⏳ |
| 7 | Catálogo C4 IA y automatización (`04_ia_automatizacion.md`) | ⏳ |
| 8 | Catálogo C5 VFX/compositing (`05_vfx_compositing.md`) | ⏳ |
| 9 | Catálogo C6 CAD/texturas/pipeline (`06_cad_texturas_pipeline.md`) | ⏳ |
| 10 | Catálogo C7 transversales/retainers (`07_transversales_retainers.md`) | ⏳ |
| 11 | STATUS ciclo 1 cerrado | ⏳ |

## Pendientes / notas

- La fase web (slider interactivo tipo "drone CAD simple → complejo") es **fase futura** según mandato del usuario: primero catálogo completo definido y validado.
- Espejo TypeScript (`src/data/services/**` + motor de estimación + tests): siguiente paso natural tras validación del catálogo por el usuario (Fase 0 de §3.10, parte 2).
- Rama huérfana `agent/servicios` (sin commits propios, apunta a main): no se elimina sin mandato del usuario (Regla de Oro).
- `npm install` pendiente en este worktree antes de tocar código (no requerido para commits documentales).
