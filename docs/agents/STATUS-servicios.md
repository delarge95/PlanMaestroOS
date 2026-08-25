# STATUS — AG-SERV (rama agent/servicios)

> Ciclo 1 · 2026-08-25. Estado: **Charter publicado. Fase de definición del catálogo de servicios freelance en curso.**

## Identidad

**AG-SERV — Agente de Servicios.** Gestiona y planifica los métodos de cobro y trabajo freelance del perfil
(technical artist / ingeniero multimedia / ingeniero electrónico / artista 3D / AI specialist). Su producto es el
sistema de servicios: desglose de tareas → subtareas → rangos de tiempo y costo por nivel de complejidad, y los
paquetes comerciales derivados. La web visualizadora de presupuestos (sliders por servicio con ejemplos visuales)
es una **fase futura** que consumirá estos documentos como fuente de verdad.

## Workspace y reglas operativas

| | |
|---|---|
| **Worktree** | `E:\Laboral\.worktrees\ag-serv` |
| **Rama** | `agent/servicios` |
| **Arranque** | rama desde `main` @ `3a98cfe` (sincronizada; merge main = no-op) |
| **Reglas comunes** | solo mi worktree · sin push · commits por tarea · REGLA DE ORO (todo cambio aditivo) · verificación por commit · merge a main solo vía PR |
| **Prefijo commits** | `feat(serv):` / `docs(serv):` / `fix(serv):` |

### Nota de incidente (2026-08-25)

Durante el arranque hubo actividad concurrente en `.worktrees/`: la ruta `.worktrees/servicios` quedó corrupta de
forma repetida por un proceso externo (mismo ecosistema que registró `.worktrees/serv` sobre rama `agent/serv`).
Resolución: el residuo se preservó como respaldo en temp (`servicios-orphan-backup`) y se registró este worktree
bajo nombre no colisionante `ag-serv`, sobre la misma rama oficial `agent/servicios`. Ni `serv` ni ningún otro
worktree ajeno fue modificado (Regla de Oro). Si el proceso externo reclama `agent/servicios`, renegociar vía ticket.

## Reglas particulares de AG-SERV

1. **Trazabilidad de precios**: todo rango deriva de la fórmula publicada en `docs/servicios/01_modelo_cobro.md`
   (`horas × banda tarifaria del nivel`) anclada a fuentes de mercado citadas (doc 03 raíz, READ). Ningún número sin origen.
2. **Siempre rangos, nunca precio puntual** en material orientado a cliente.
3. **Sin URLs ni ejemplos inventados**: assets demo aún no producidos se marcan explícitamente como placeholder
   ("asset demo por producir — fase web"). Heredado de la regla del ecosistema portfolio (docs 33/36).
4. **Moneda USD**; conversiones COP/otras solo informativas y marcadas como tales.
5. **Confianza declarada**: cada estimación lleva confidence `explicit | inferred | qualitative` (mismo espíritu
   que el motor de reglas del repo).
6. Los rangos v1 son **internos**; la versión "cliente" derivará cuando exista la web (fase futura).

## Territorio (propuesta de ficha §3.x — alta formal pendiente vía ticket)

| | |
|---|---|
| **OWN** | `docs/servicios/**` (modelo de cobro, catálogos, estimación, paquetes), `docs/agents/STATUS-servicios.md` |
| **OWN fase web futura** (requiere aprobación del usuario) | `src/data/services/**`, componentes/páginas del cotizador |
| **READ** | docs raíz 00–36 (especialmente 01, 02, 03, 07, 20), `_obsidian/`, `Research/`, `Historic/` |
| **FORBIDDEN** | portafolio público y `PortfolioSimulator` (AG-PORT), career app interna (AG-CAREER), archivos compartidos globales (AG-CORE), cualquier dominio ajeno |

## Tickets abiertos

1. `[AG-SERV] docs/agents/PLAN_MULTIAGENTE.md` → owner plan maestro → añadir ficha AG-SERV (§3.10) + rama en tabla §1.1 + ownership §1.2 → pendiente.
2. Confirmar cuentas/métodos de cobro reales (Wise/Payoneer/PayPal/Stripe) antes de publicar versión cliente — placeholders explícitos mientras tanto.

## Ciclo 1 — tareas planificadas (1 commit c/u)

1. Charter (este archivo).
2. Modelo de cobro (`01_modelo_cobro.md`): bandas N1–N4, modificadores, términos de pago, licencias.
3. Catálogo 3D (`02_catalogo_render_assets_rt.md`): A render offline, B assets RT, F1 CAD→WebGL, F2 texturas.
4. Catálogo web (`03_catalogo_web_experiencias.md`): C1–C9.
5. Catálogo VFX/IA (`04_catalogo_vfx_ia_consultoria.md`): D, E, F3 digital twin, G consultoría.
6. Matriz de estimación + ejemplos trabajados (`05_estimacion_ejemplos.md`) — incluye caso drone CAD y spec del slider futuro.
7. Paquetes (`06_paquetes.md`) + README índice.
8. Cierre de ciclo y verificación.

## Verificación

- Docs-only: verificación = revisión de consistencia aritmética (fórmula horas×banda) + grep anti-invariantes
  (sin URLs hardcode, sin precios puntuales fuera de ejemplos calculados). Sin `astro check` requerido (no toca src/).

## Pendientes / decisiones para el usuario

- Validar bandas tarifarias base antes de exponer a clientes.
- Validar taxonomía ampliada (se agregaron servicios complementarios: B7 optimización de assets existentes,
  C7 build/optimización Unity WebGL, C9 AR web ligero, E5 auditoría IA, G retainer/tech direction, F3 digital twin ligero).
- Aprobar fase web futura (cotizador interactivo) como tarea propia o compartida con AG-PORT.

---

## Ciclo 2 · 2026-08-25 — segunda instancia AG-SERV (coordinación inter-instancia)

> Sección añadida por una segunda sesión AG-SERV detectada en vivo sobre esta misma rama. Tras el diagnóstico de
> churn (los "procesos externos" del incidente del ciclo 1 éramos nosotros dos mutuamente), se dividió el trabajo
> de facto: **instancia 1** completa su plan del ciclo 1 (04, 06, README); **instancia 2** (esta) aportó lo que
> ninguna de las dos había tocado, sin duplicar archivos en vuelo. Cero archivos borrados; único cambio sobre
> contenido existente es la corrección trazable de `01 §3` (abajo).

### Commits del ciclo 2 (instancia 2)

| Commit | Contenido |
|---|---|
| `fix(serv)` | `01_modelo_cobro.md` → **v1.1**: reconciliación de bandas. La tabla §3 mezclaba dos escalas: el corredor amplio (20–28/28–40/40–60/60–85) y la banda operativa (25–30/28–35/35–45/45–55) — esta última es la que usan TODOS los precios ya calculados en 02/03/05 (verificado recomputando F1/A1/drone A·B·C). Quedan separadas como columna operativa + columna de referencia de calibración. Changelog v1.1 en el propio documento. Ningún precio publicado cambió. |
| `feat(serv)` | Fase TS iniciada según spec de `05 §3.2`: `src/data/servicios/tipos.ts` (contrato `ServicioCotizable`), `src/data/servicios/catalogo-f1.ts` (F1 completa, slider-ready), `src/lib/servicios/motor.ts` (bandas operativas, redondeo §3.1, validador con reconstrucción ±10 y detección de solapes). Verificado: `npx tsx verify-serv.ts` → 0 errores, 4 avisos esperados. |

### Hallazgos técnicos del ciclo 2

1. **Regla de redondeo real** (extraída auditando todos los valores publicados, no la declarada): mínimos
   `floor` con escalera 10 (<500) / 50 (500–1999) / 100 (≥2000); máximos `ceil` con escalera 10 (<2000) /
   100 (≥2000). Documentada ahora en `01 §3.1`.
2. **Solapes intencionales entre niveles** (max N_i > min N_i+1, p. ej. B/C/D de F1): el validador los reporta
   como aviso, no error — dan continuidad de rango ante el cliente. Documentar en fichas si se quiere formalizar.
3. Única desviación fuera de tolerancia cero: F1-N1 min (125→130, dentro del ±10 permitido).
4. Fork huérfano `61be056` (v1 previa de 01/02 de la instancia 1): superseded por su propia reescritura
   `ca8f05a`; no se fusiona para no introducir contenido duplicado — recuperable por hash si hiciera falta.
5. Método de verificación de esta instancia: commits vía git plumbing + `tsx` desde la raíz del repo principal
   (el churn de `.worktrees` hace poco fiable depender de un checkout estable durante toda la sesión).

### Pendientes de adjudicación (usuario)

- **Namespace del código**: `src/data/servicios/**` (usado en ciclo 2; registrado antes vía ticket) vs
  `src/data/services/**` (propuesto en ciclo 1 para la fase web). Unificar con un rename cuando se decida.
- Confirmar que la instancia 1 cierra 04/06/README (su plan) y esta instancia toma migración TS completa
  (resto de servicios → catálogos JSON/TS) + tests vitest cuando haya worktree estable.
- Validar bandas operativas v1.1 y la política de solapes entre niveles.

---

### Adenda ciclo 2 (post-lectura del estado final de la instancia 1)

Mientras esta instancia redactaba su sección, la instancia 1 avanzó 13 commits más y cerró TODO su plan:
familias D/E/G completas (`c486655`, `63d40ad`), paquetes PK-01..PK-10 + retainers (`51b9f57`, restaurado en
`02fd55e` tras incidente documentado), README índice con banners superseded (`9a1aec5`), auditoría aritmética
del caso drone (`2b86eef`) y preservación Regla de Oro de los dos documentos paralelos de esta instancia
(`236e88c` — CATALOGO_SERVICIOS + METODOLOGIA_ESTIMACION vuelven a estar en el árbol). Correcciones a esta
sección:

1. ~~"instancia 1 cierra 04/06"~~ → **ya cerrados**; el catálogo A–G + paquetes está completo.
2. El hallazgo de bandas de esta instancia coincide con el "hallazgo de auditoría" del README de la instancia 1;
   el fix `01 v1.1` de esta instancia lo resuelve **provisionalmente** (operativa para presupuestar, corredor para
   calibrar, cero precios alterados). Decisión definitiva de bandas sigue siendo del usuario (README §Hallazgo).
3. La recomendación del README (consolidar sobre N1–N4 y usar el material T1–T4 paralelo como verificación
   cruzada) es asumida también por esta instancia.
4. Siguiente tarea natural de esta instancia (sin choque): migrar el resto de familias a datos TS consumibles +
   `bandas.json` como fuente única de dinero, y tests vitest — requiere worktree estable o aprobación de namespace.
