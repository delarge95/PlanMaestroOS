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
