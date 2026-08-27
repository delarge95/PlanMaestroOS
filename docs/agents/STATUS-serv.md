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

Segundo incidente del mismo día: una segunda instancia AG-SERV sobrescribió accidentalmente `00_METODOLOGIA.md` (commit `204304c`); restaurado en `da9020e` sin perder historia (ver adenda al final).

## Tareas ciclo 1

| # | Tarea | Estado |
|---|---|---|
| 1 | Adoptar ficha §3.10 + ticket de registro (payload `[TICKET]` en PLAN_MULTIAGENTE + tickets.md, pendiente aprobación AG-CORE/usuario) | ✅ |
| 2 | Carta AG-SERV (este archivo) | ✅ |
| 2b | Catálogo maestro v1.0 (`CATALOGO_SERVICIOS.md`, familias A–F + paquetes PK-01…10) | ✅ `becd6cb` |
| 3 | `docs/servicios/00_METODOLOGIA.md`: rate card anclada a doc-03, escala S/M/L/XL, fórmula de estimación, políticas | ✅ `74eddc5` |
| 4 | Catálogo C1 Render 3D (`01_render_3d.md`) | ✅ `370958a` |
| 5 | Catálogo C2 Assets realtime WebGL (`02_assets_realtime_webgl.md`) | ✅ `97e98b7` |
| 6 | Catálogo C3 Integración web 3D (`03_integracion_web_3d.md`) | ✅ `29c1d86` |
| 7 | Catálogo C4 IA y automatización (`04_ia_automatizacion.md`) | ✅ `c6889c7` |
| 8 | Catálogo C5 VFX/compositing (`05_vfx_compositing.md`) | ✅ `2e467c6` |
| 9 | Catálogo C6 CAD/texturas/pipeline (`06_cad_texturas_pipeline.md`) | ✅ `222e0b1` |
| 10 | Catálogo C7 transversales/retainers (`07_transversales_retainers.md`) | ✅ `1464c83` |
| 11 | Auditoría de consistencia v1 (`VERIFICACION_v1.md`) | ✅ `ac5a40f` |
| 12 | STATUS ciclo 1 cerrado | ✅ (ver cierre al final) |

## Pendientes / notas

- La fase web (slider interactivo tipo "drone CAD simple → complejo") es **fase futura** según mandato del usuario: primero catálogo completo definido y validado.
- Espejo TypeScript (`src/data/services/**` + motor de estimación + tests): siguiente paso natural tras validación del catálogo por el usuario (Fase 0 de §3.10, parte 2).
- Rama huérfana `agent/servicios` (sin commits propios, apunta a main): no se elimina sin mandato del usuario (Regla de Oro).
- `npm install` pendiente en este worktree antes de tocar código (no requerido para commits documentales).

---

## Adenda ciclo 1 — segunda sesión AG-SERV (2026-08-25, instancia de verificación)

Trabajo realizado por una segunda instancia AG-SERV activada el mismo día, sobre la misma rama (coordinación por commits, sin colisiones de sección):

| Commit | Contenido |
|---|---|
| `aa0f0cc` | Carta + ticket (contenido preparado por esta instancia; commiteado por la sesión paralela) |
| `da9020e` | **fix Regla de Oro**: restauración de `00_METODOLOGIA.md` v1 (`74eddc5`) tras sobrescritura accidental en `204304c`; el commit destructivo queda documentado en la historia, no borrado |
| `ac5a40f` | **Informe de auditoría v1** (`docs/servicios/VERIFICACION_v1.md`): divergencia crítica de rate cards (catálogo/espejo TS `ART/RT/AI/TL` vs metodología/C1 `RC-*`), conflicto de redondeo (5 vs 50 USD), checks aritméticos OK (B1–B4, B7 drone, C4, C7, D1) y 4 rangos no reproducibles (E1 FAQ/RAG, C6, B6 standalone) |
| `f9baef3` | Adenda original de este archivo (commiteada con mojibake; este rewrite UTF-8 la sustituye limpio, mismo contenido) |

**Decisión pendiente del usuario (bloqueante para publicar precios):** qué tarjeta gana.
Recomendación técnica: Tarjeta A (`ART 25–38 / RT 28–45 / AI 35–55 / TL 32–48`) porque ya vive en
el espejo determinista `src/data/services/rateCard.ts` y en las tablas del catálogo maestro;
deprecando las clases `RC-*` de la metodología con tabla de mapeo y recosteo de C1. Las HORAS son
independientes de esta decisión y quedan validadas.

Estado al cierre de esta adenda: C1–C4 detallados entregados por la sesión principal; espejo TS
en progreso (sin commitear); catálogo maestro v1.0 estable; auditoría v1 entregada.

---

## Cierre de ciclo 1 — sesión principal (catálogos granulares C1–C7)

Entregables propios completados tras la adenda anterior:

| Commit | Contenido |
|---|---|
| `2e467c6` | C5 VFX: VFX-01 (3D sobre footage, por shot S/M/L), VFX-02 (sims por complejidad), VFX-03 (motion graphics) |
| `222e0b1` | C6: CAD-01 con criterios de tier POR TIPOS DE PIEZA (≤8 / 9–30 / 31–100 / >100) + ejemplo drone S/M/L explícito, TEX-01, PIPE-01 |
| `1464c83` | C7: CON-01 consultoría, RET-01 retainers (Lite/Pro/Full), BND-01..05 bundles de composición con descuento |

Cobertura total del mandato del usuario: **28 servicios + 2 módulos + 5 bundles**, cada uno con
subtareas × tier (horas) → rango USD → plazo. Trazabilidad RC-* citada por archivo.

### Recomendación de esta sesión sobre la decisión de rate card (complementa la adenda anterior)

La instancia de verificación recomienda Tarjeta A; esta sesión deja constancia de la alternativa,
para que el usuario decida con ambas postas:

- **Opción B (RC-*, vigente en metodología y C1–C7)**: pisos más bajos, alineada a la estrategia
  documentada de ENTRADA competitiva del doc-03 (§9.1 piso 1.5k, §13 "no presentarse como senior",
  objetivo 3k/mes a 3–6 meses). Menor riesgo de quedar fuera por precio mientras el portafolio
  freelance acumula evidencia.
- **Opción A (ART/RT/AI/TL)**: bandas más altas, ya codificada en el espejo TS; coherente con la
  ruta de USD 6k/mes (doc-03 §9.3) pero adelanta ese posicionamiento sin evidencia comercial previa.
- **Vía intermedia sugerida**: adoptar B como v1 operativa + cláusula de revisión programada
  (tras 3–5 proyectos cerrados con horas reales registradas) para escalar hacia bandas tipo A con
  datos, no con intuición. Unificar redondeo: 5 USD por subtarea, 50 USD por paquete (propuesta de
  la auditoría §1, correcta).

Sea cual fuere la decisión, las HORAS quedan validadas por la auditoría y son independientes;
el recosteo es mecánico (regenerar columnas USD desde la tarjeta elegida).

Pendiente post-decisión: consolidar estrategia editorial de los DOS catálogos coexistentes
(monolítico `CATALOGO_SERVICIOS.md` vs granular C1–C7 — o espejo mutuo con IDs estables),
espejo TS commiteado cuando la instancia paralela termine, y regeneración de rangos desde el motor.

---

## Adenda — sesión paralela (motor determinista v1) · 2026-08-25 15:40

Otra instancia AG-SERV (esta entrada) trabajó en el mismo worktree de forma intercalada hoy. Registro por transparencia:

**Commits de esta sesión:**
- c657cad docs(agents): ficha §3.10 AG-SERV en PLAN_MULTIAGENTE.md (tabla §1.1 + ficha completa, aditiva) + prompt de arranque §13 en PROMPTS_INICIALES.md.
- ecd6cb docs(services): CATALOGO_SERVICIOS.md v1 monolítico (familias A–F, IDs estables A1/B1–B7/C1–C8/D1/E1–E3/F1–F5, rate card ART/RT/AI/TL derivada del doc-03, políticas §2, paquetes PK-01…10).
- bb6169 feat(services): espejo TS completo (	ypes/rateCard/serviceCatalog/estimator/packages + tests 13/13) con subtareas opcionales, excedente por pieza CAD con descuentos por volumen, estimatePackage() (bundle −10 % ⇒ ×0.95 extremos), y sincronización de TODOS los totales del doc contra el motor.

**Sobre la interleaving de commits:**  3b50f6 y 9f1a72 fueron creados por la instancia anterior mientras esta sesión editaba;  3b50f6 absorbió los archivos TS en edición de esta sesión (por eso types.ts muestra solo +2: la adición optional). No se perdió trabajo de ninguna de las dos partes; HEAD bb6169 verifica limpio: 
px astro check 0 errores / 
pm test 274/274 (incluye los 13 nuevos).

**Estado de la consolidación pendiente (coincide con la sección anterior):**
1. Dos taxonomías conviven: monolítico (A/B/C/D/E/F) vs granular (REND/ASRT/WEB/EXP/IA/VFX/CAD/TEX/TRA). El README ya fija la regla: **gana el código**; el motor actual usa IDs del monolítico. Requiere mapeo de IDs o migración — decisión del usuario.
2. Rate card: el motor tiene codificada la Opción A (ART 25–38 / RT 28–45 / AI 35–55 / TL 32–48). Si el usuario elige la Opción B (RC-*) o la vía intermedia, el recosteo es mecánico: cambiar ateCard.ts, regenerar totales del doc (los tests ancla se recalculan).
3. Redondeo propuesto por auditoría (5 USD subtarea / 50 USD paquete) no aplicado aún — el motor usa floor5/ceil5 por subtarea sin redondeo de paquete.

Sin push. Sin merge a main. Trabajo queda en gent/services para PR.
