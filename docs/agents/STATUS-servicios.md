# STATUS — AG-SERV (rama agent/servicios)

> Ciclo 1 · 2026-08-25 · Estado: **CICLO CERRADO — sistema de servicios v1 completo en `docs/servicios/`**.
> ⚠️ Requiere decisión del usuario: unificación de dos sesiones AG-SERV concurrentes (ver §Incidente).

## Workspace

| | |
|---|---|
| **Worktree** | `E:\Laboral\.worktrees\ag-serv` |
| **Rama** | `agent/servicios` (desde `main` @ `3a98cfe`) |
| **Reglas** | solo mi worktree · sin push · commits por tarea · Regla de Oro · verificación por commit |

## Entregables del ciclo (todos en `docs/servicios/`, respaldados también en temp)

| Entregable | Contenido |
|---|---|
| `01_modelo_cobro.md` | Bandas N1 ($25–30/h) → N4 ($45–55/h) ancladas a doc-03 (Lemon.io Middle Unity Colombia 27–35; freelance global 20–50; proxy TA US ≈66/h), fórmula `Σ horas × banda`, redondeo, modificadores (urgencia/lote/recurrente/exclusividad), revisiones (2 incluidas, extra +10–15%), licencias, términos de pago por tramo (50/50 · 40/40/20 · 30/30/30/10), plantilla SOW, confidence explicit/inferred/qualitative |
| `02_catalogo_render_assets_rt.md` | A1 render estático, A2 animación; pipeline común RT + deltas B1–B4 (estático/animado × interactuable/no); B5 shaders, B6 exploded/cutaway, B7 optimización assets existentes, B8 rigging; F1 CAD→WebGL ⭐ (por nº piezas); F2 texturas PBR. Cada servicio: subtareas × horas N1–N4 + presupuesto por nivel |
| `03_catalogo_web_experiencias.md` | C1 visor embebido ligero, C2 visor three/Babylon custom, C3 web app 3D, C4 scrollytelling, C5 configurador/catálogo, C6 minijuego WebGL, C7 build Unity WebGL, C8 presentaciones web, C9 AR web ligero |
| `04_catalogo_vfx_ia_consultoria.md` | D compositing sobre foto/video + FX sim/RT; E1 chatbot RAG BYOK, E2 automatización interna, E3 feature IA en producto, E4 agente de agencia, E5 auditoría IA; F3 digital twin ligero; G consultoría/día-rate, auditoría perf, retainers, tech direction |
| `05_estimacion_ejemplos.md` | Flujo intake→presupuesto, caso trabajado drone CAD (N1 $130–360 → N3/N4 industrial), ejemplos compuestos, **spec completa del cotizador visual futuro** (sliders por driver, no por dinero; assets demo marcados placeholder) |
| `06_paquetes.md` | PK-01..PK-10 ($160 Render Starter → $11100 Hero Film N3; Twin Pilot $1400–4300; AI Office $1400–4000…) + retainers Lite/Standard/Pro + guía interna de venta |
| `README.md` | Índice + advertencia de unificación + flujo post-unificación |

## Incidente grave registrado — doble instancia AG-SERV

Durante todo el ciclo operó una **segunda sesión AG-SERV** (rama `agent/services`, worktree `.worktrees/services`)
y/o un proceso orquestador externo que: reescribió el historial de mi rama en vivo (mis commits renombrados/reordenados),
corrompió repetidamente el worktree original `.worktrees/servicios` (resuelto migrando a `ag-serv`), creó archivos con
los MISMOS nombres que los míos y nos sobrescribimos mutuamente al menos 2 veces.

Manejo: Regla de Oro estricta en ambos sentidos — restauré su `REGLAS_AG-SERV.md` borrado accidentalmente por mi
commit (`61be056`), preservé su material paralelo sin fusionarlo a ciegas (`236e88c`), y TODO mi contenido quedó
respaldado fuera del repo (temp). El directorio `docs/servicios/` quedó como UNIÓN etiquetada de ambas convenciones
(N1–N4 vs tiers RC/S–XL). **Decisión pendiente del usuario: qué convención/sobrevive y qué sesión se detiene.**

## Verificación

- Docs-only: aritmética revisada contra fórmula (bandas por nivel + regla de redondeo 10/50/100).
- Sin URLs inventadas: métodos de pago marcados placeholder; assets demo "por producir".
- Grep anti-invariantes OK: no hay precios puntuales fuera de ejemplos calculados ni cifras sin banda detrás.
- No se tocó ningún archivo fuera de OWN (`docs/servicios/**`, `docs/agents/STATUS-servicios.md`).

## Tickets / decisiones para el usuario

1. **UNIFICACIÓN**: elegir convención (recomiendo N1–N4 por granularidad) y detener una de las dos sesiones.
   Luego: PR única a `main` y borrado controlado de la rama perdedora.
2. `[TICKET] PLAN_MULTIAGENTE.md §3.10` ya redactado por la instancia hermana en esta rama — aprobar o ajustar.
3. Confirmar cuentas de cobro (Wise/Payoneer/PayPal/Stripe) antes de versión cliente.
4. Validar bandas base antes de exponer a clientes (¿subir N4 a 55–65 para US/EU direct?).
5. Aprobar fase web (cotizador): spec lista en `05` §4; superficie pública coordinada con AG-PORT.
