# STATUS ÔÇö AG-SERV (rama agent/servicios)

> Ciclo 1 ┬À 2026-08-25 ┬À Estado: **CICLO CERRADO ÔÇö sistema de servicios v1 completo en `docs/servicios/`**.
> ÔÜá´©Å Requiere decisi├│n del usuario: unificaci├│n de dos sesiones AG-SERV concurrentes (ver ┬ºIncidente).

## Workspace

| | |
|---|---|
| **Worktree** | `E:\Laboral\.worktrees\ag-serv` |
| **Rama** | `agent/servicios` (desde `main` @ `3a98cfe`) |
| **Reglas** | solo mi worktree ┬À sin push ┬À commits por tarea ┬À Regla de Oro ┬À verificaci├│n por commit |

## Entregables del ciclo (todos en `docs/servicios/`, respaldados tambi├®n en temp)

| Entregable | Contenido |
|---|---|
| `01_modelo_cobro.md` | Bandas N1 ($25ÔÇô30/h) ÔåÆ N4 ($45ÔÇô55/h) ancladas a doc-03 (Lemon.io Middle Unity Colombia 27ÔÇô35; freelance global 20ÔÇô50; proxy TA US Ôëê66/h), f├│rmula `╬ú horas ├ù banda`, redondeo, modificadores (urgencia/lote/recurrente/exclusividad), revisiones (2 incluidas, extra +10ÔÇô15%), licencias, t├®rminos de pago por tramo (50/50 ┬À 40/40/20 ┬À 30/30/30/10), plantilla SOW, confidence explicit/inferred/qualitative |
| `02_catalogo_render_assets_rt.md` | A1 render est├ítico, A2 animaci├│n; pipeline com├║n RT + deltas B1ÔÇôB4 (est├ítico/animado ├ù interactuable/no); B5 shaders, B6 exploded/cutaway, B7 optimizaci├│n assets existentes, B8 rigging; F1 CADÔåÆWebGL Ô¡É (por n┬║ piezas); F2 texturas PBR. Cada servicio: subtareas ├ù horas N1ÔÇôN4 + presupuesto por nivel |
| `03_catalogo_web_experiencias.md` | C1 visor embebido ligero, C2 visor three/Babylon custom, C3 web app 3D, C4 scrollytelling, C5 configurador/cat├ílogo, C6 minijuego WebGL, C7 build Unity WebGL, C8 presentaciones web, C9 AR web ligero |
| `04_catalogo_vfx_ia_consultoria.md` | D compositing sobre foto/video + FX sim/RT; E1 chatbot RAG BYOK, E2 automatizaci├│n interna, E3 feature IA en producto, E4 agente de agencia, E5 auditor├¡a IA; F3 digital twin ligero; G consultor├¡a/d├¡a-rate, auditor├¡a perf, retainers, tech direction |
| `05_estimacion_ejemplos.md` | Flujo intakeÔåÆpresupuesto, caso trabajado drone CAD (N1 $130ÔÇô360 ÔåÆ N3/N4 industrial), ejemplos compuestos, **spec completa del cotizador visual futuro** (sliders por driver, no por dinero; assets demo marcados placeholder) |
| `06_paquetes.md` | PK-01..PK-10 ($160 Render Starter ÔåÆ $11100 Hero Film N3; Twin Pilot $1400ÔÇô4300; AI Office $1400ÔÇô4000ÔÇª) + retainers Lite/Standard/Pro + gu├¡a interna de venta |
| `README.md` | ├ìndice + advertencia de unificaci├│n + flujo post-unificaci├│n |

## Incidente grave registrado ÔÇö doble instancia AG-SERV

Durante todo el ciclo oper├│ una **segunda sesi├│n AG-SERV** (rama `agent/services`, worktree `.worktrees/services`)
y/o un proceso orquestador externo que: reescribi├│ el historial de mi rama en vivo (mis commits renombrados/reordenados),
corrompi├│ repetidamente el worktree original `.worktrees/servicios` (resuelto migrando a `ag-serv`), cre├│ archivos con
los MISMOS nombres que los m├¡os y nos sobrescribimos mutuamente al menos 2 veces.

Manejo: Regla de Oro estricta en ambos sentidos ÔÇö restaur├® su `REGLAS_AG-SERV.md` borrado accidentalmente por mi
commit (`61be056`), preserv├® su material paralelo sin fusionarlo a ciegas (`236e88c`), y TODO mi contenido qued├│
respaldado fuera del repo (temp). El directorio `docs/servicios/` qued├│ como UNI├ôN etiquetada de ambas convenciones
(N1ÔÇôN4 vs tiers RC/SÔÇôXL). **Decisi├│n pendiente del usuario: qu├® convenci├│n/sobrevive y qu├® sesi├│n se detiene.**

## Verificaci├│n

- Docs-only: aritm├®tica revisada contra f├│rmula (bandas por nivel + regla de redondeo 10/50/100).
- Sin URLs inventadas: m├®todos de pago marcados placeholder; assets demo "por producir".
- Grep anti-invariantes OK: no hay precios puntuales fuera de ejemplos calculados ni cifras sin banda detr├ís.
- No se toc├│ ning├║n archivo fuera de OWN (`docs/servicios/**`, `docs/agents/STATUS-servicios.md`).

## Tickets / decisiones para el usuario

1. **UNIFICACI├ôN**: elegir convenci├│n (recomiendo N1ÔÇôN4 por granularidad) y detener una de las dos sesiones.
   Luego: PR ├║nica a `main` y borrado controlado de la rama perdedora.
2. `[TICKET] PLAN_MULTIAGENTE.md ┬º3.10` ya redactado por la instancia hermana en esta rama ÔÇö aprobar o ajustar.
3. Confirmar cuentas de cobro (Wise/Payoneer/PayPal/Stripe) antes de versi├│n cliente.
4. Validar bandas base antes de exponer a clientes (┬┐subir N4 a 55ÔÇô65 para US/EU direct?).
5. Aprobar fase web (cotizador): spec lista en `05` ┬º4; superficie p├║blica coordinada con AG-PORT.

---

## Ciclo 2 ÔÇö adenda (auditor├¡a de consistencia + fundaci├│n TypeScript determinista)

> Escrita por la segunda instancia AG-SERV sobre la misma rama/worktree tras la convergencia.
> No altera nada del ciclo 1; a├▒ade verificaci├│n mec├ínica y el espejo TS exigido por ficha ┬º3.10 Fase 0.

### Hallazgo cr├¡tico documentado (README ┬ºHallazgo)

`01_modelo_cobro.md` v1 declara bandas **N1 20ÔÇô28 ┬À N2 28ÔÇô40 ┬À N3 40ÔÇô60 ┬À N4 60ÔÇô85** (redondeo a $50),
pero TODAS las l├¡neas de precio de `02`ÔÇô`06` fueron calculadas con bandas legacy v0
(25ÔÇô30/28ÔÇô35/35ÔÇô45/45ÔÇô55, tramos 10/50/100). Adem├ís se detectaron errores aritm├®ticos internos en los
totales publicados bajo su propia regla (B1@N1 publicado $400 ÔåÆ real $390; F1@N2 $1230 no es m├║ltiplo
de tramo alguno; B7@N4 $1700 ÔåÆ $1750). Los tests codifican estos valores correctos como ├írbitro.

### Entregables ciclo 2

| Commit | Contenido |
|---|---|
| `ca8f05a` | Cat├ílogo Familia C completo (C1 visor low-code, C2 visor custom three/Babylon, C3 experiencias scrollytelling/minijuego/cat├ílogo, C4 webapp 3D, C5 Unity WebGL+bridge, C6 presentaciones) con matriz resumen |
| `c486655` | Cat├ílogo Familias D (D1 compositing foto, D2 video por toma ┬▒FX, D3 FX standalone) y E (E1 chat RAG BYOK, E2 IA indirecta web, E3 IA interna, E4 programa adopci├│n) |
| `63d40ad` | Cat├ílogo Familia G transversal (G1 discovery acreditable 50%, G2 auditor├¡a/consultor├¡a/mentor├¡a, G3 retainers mantenimiento/IA-ops/flexible) |
| `9a1aec5` | Auditor├¡a: banners SUPERSEDED en `04_catalogo_vfx_ia.md`/`05_catalogo_soporte_consultoria.md` (bandas legacy), hallazgo bandas v0 vs v1 en README |
| `716e368` | **Espejo TS determinista**: `src/data/services/` (types, rateCard v1+legacy v0, formula puro nivel-fijo/mixto, catalogCore A/B/F1Ô¡É/F2, index) + `scripts/validateServices.ts` + 24 tests |

### Verificaci├│n ciclo 2

- `npx astro check` ÔåÆ **0 errores, 0 warnings** (50 hints preexistentes).
- `npx vitest run` ÔåÆ **285/285** (incluye 24 nuevos de services).
- `npx tsx scripts/validateServices.ts` ÔåÆ exit 0; tabla completa de presupuestos regenerada bajo bandas v1.
- Comandos post-unificaci├│n: elegir card definitiva en `rateCard.ts` ÔåÆ `npx tsx scripts/validateServices.ts`
  imprime todos los totales para regenerar las l├¡neas de precio de los docs sin aritm├®tica manual.


---

## Ciclo 3 · 2026-08-25 — UNIFICACIÓN (cierre del incidente de duplicación)

> Aclaración raíz del incidente: **nunca hubo sesiones gemelas reales** — un bug del entorno multiplicó la
> MISMA conversación N veces; cada instancia veía a las demás como "proceso externo". El usuario confirmó
> la causa, ordenó unificar todo bajo esta línea y compartir los logs de las otras instancias como insumo.

### Qué se hizo en este ciclo

1. **Auditoría aritmética global por script** sobre todos los presupuestos publicados (141 extremos):
   95 correctos · 46 con drift de redondeo manual · 1 error real de suma (B4 publicaba menos que la suma
   de sus propios componentes). Hallazgo coincidente e independiente con el del otro reporte (B1/F1/B7).
2. **Regla de redondeo ÚNICA** adoptada (la del espejo TS: tramos 10/50/100, min-floor / max-ceil) y
   **todos los presupuestos de 02/03/04/05/06 regenerados** con ella — normaliza el drift histórico.
3. **Totales de horas corregidos por suma de filas** donde el total publicado no cuadraba con sus propias
   subtareas (núcleo B: 13–30/30–66/66–163; A2: 16–41/97–220). El motor (`validateServices.ts`) es el árbitro.
4. **Catálogo 04 v2 unificado** (`04_catalogo_footage_ia_soporte.md`): promueve D fino (foto/video/FX),
   E1–E5 sin colisiones semánticas (E2 = IA indirecta web según pedido original del usuario), G enriquecido
   (crédito discovery 50 %, auditoría perf, retainers Lite→Enterprise). Los dos 04 previos → `_historico/`.
5. **05 v2 realineado**: el caso drone quedó huérfano citando horas F1 de una versión pisada del 02;
   reescrito con horas canónicas (5–12/12–35/35–92/92–250) y derivación visible bajo bandas operativas.
6. **Namespace TS único**: `src/data/services/**` (24 tests + validador CLI) queda canónico; se eliminan los
   duplicados `src/data/servicios/*` y `src/lib/servicios/*` tras portar su valor único (contrato cotizador
   `DriverPrincipal/AddOn/CotizadorMeta`) como campos aditivos opcionales.
7. **README v2** + `_historico/` con banners de procedencia. Material temp de instancias detenidas revisado:
   sin contenido único pendiente de importar (taxonomías paralelas cubiertas por el canon).

### Verificación de este ciclo

- Regeneración ejecutada por script (no a mano): cada línea de presupuesto = `horas × banda §3` +
  redondeo §3.1, trazable al motor. Validador CLI OK ("catálogo íntegro", 12 servicios core).
- Docs-only: no corresponde `astro check`; suite vitest del espejo queda intacta (cambios aditivos).

### Pendientes para el usuario (acumuladas)

1. **Validar bandas operativas** (25–30/28–35/35–45/45–55) vs corredor premium tras primeros cierres.
2. **Aprobar ficha §3.10** vía PR (ya registrada en PLAN_MULTIAGENTE/PROMPTS_INICIALES).
3. **Cuentas de cobro reales** (Wise/Payoneer/PayPal) — hoy placeholder explícito en 01 §8.
4. **Fase web del cotizador** (spec completa en 05 §3): autorizar o dejar en backlog.
5. Auditoría fina fila-a-fila de familias C/D/E/G contra el motor (hoy el espejo cubre A/B/F1/F2;
   C–G se regeneraron desde sus totales declarados — migrarlos al espejo es la siguiente tarea natural).
