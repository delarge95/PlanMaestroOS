# AUDIT-01b — Migración de componentes al sistema de tokens

## Contexto
AUDIT-01 creó `src/styles/tokens.css` (sistema centralizado) y lo importó en `global.css`. PERO los componentes nunca se migraron: 28 de 50 archivos siguen con colores hardcodeados. Esta tarea es SOLO migración, sin rediseño.

## Reglas obligatorias
1. PROHIBIDO introducir nuevos hex/rgba literales de color. Todo color debe venir de `var(--...)`.
2. Reemplazos canónicos:
   - `#0a84ff` / `rgba(10,132,255,*)` → `var(--color-accent-primary)`
   - `#ff9f0a` → `var(--color-accent-warning)`
   - `#ff453a` → `var(--color-accent-danger)`
   - `#30d158` / `rgba(48,209,88,*)` → `var(--color-state-done)`
   - `#ffffff` (texto) → `var(--color-text-primary)`
   - `#aeaeb2`, `#98989d` → `var(--color-text-secondary)`
   - `#636366`, `#8e8e93` → `var(--color-text-tertiary)`
   - `rgba(255,255,255,0.08)` (borde) → `var(--color-border-subtle)`
   - `rgba(255,255,255,0.15)` (borde) → `var(--color-border-visible)`
   - `rgba(28,28,30,*)` → `var(--color-surface-base)`
3. Colores FUERA del sistema (deben eliminarse y mapearse al token semántico más cercano):
   - `#f87171` (rojo Tailwind) → `var(--color-accent-danger)`
   - `#ff375f` (rosa) → `var(--color-accent-danger)`
   - `#bf5af2`, `#5e5ce6` (púrpuras) → `var(--color-accent-primary)`
   - `#64d2ff`, `#77e7ff`, `#8ae6ff` (cianes) → `var(--color-accent-primary)`
   - `#81f6b0` (verde menta viejo) → `var(--color-state-done)` solo si es "completado", si no → `var(--color-text-secondary)`
   - `#ffd60a` (amarillo) → `var(--color-accent-warning)`
   - `#effff6`, `#c6d7d0`, `#65756f` (paleta vieja de texto) → tokens de texto correspondientes
4. Para rgba con alpha del mismo color del token, crear variables derivadas en tokens.css si hace falta, ej: `--color-accent-primary-soft: rgba(10,132,255,0.15)`.
5. Excepción permitida: sombras negras `rgba(0,0,0,*)` y blancos puros en efectos glass pueden quedar, pero documentarlo.

## Archivos por orden de prioridad

### P0 — Críticos (afectan toda la app)
- `src/layouts/PlanMaestroLayout.astro` — 29 hex + 28 rgba, paleta vieja completa
- `src/components/schedules/DailyOperatingView.tsx` — 45 valores hardcodeados, hex del sistema escritos literal
- `src/styles/global.css` — migrar gradientes del body/screen-shell (rgba 174,255,224 / 119,231,255 / 129,246,176) a variables `--color-glow-*`

### P1 — Violan la regla de 2 acentos
- `src/components/clinical/ClinicalUncompletedTaskProtocol.tsx`
- `src/components/clinical/MorningEveningWorkflowsModal.tsx`
- `src/components/docs/EntityInspectorDrawer.tsx`
- `src/components/docs/SecondBrainInspector.tsx`
- `src/components/fitness/FitAppWorkoutLogger.tsx`
- `src/components/fitness/FitAppAnalyticsDashboard.tsx`

### P2 — Resto con colores fuera del sistema
- ClinicalTabWorkspace, UnifiedRoutineTable, SphericalGallery, ErrorBoundary, CareerTabWorkspace, InteractiveRoadmapDashboard, ClinicalCurrentBlockPanel, ClinicalExecutionHub, FocusModeShell, InertiaRescueModal, InteractiveDocViewer, NotionObsidianIntegrationHub, BooksLibraryView, CustomRoutineBuilder, DrawerMiniFitnessViewer, ExerciseDatabaseBrowser, ExerciseModal, FitnessTabWorkspace, MinMaxRoutineTable, GermanLearningHub, GermanTabWorkspace, TodayTabWorkspace, pages/app/index.astro

## Criterio de aceptación
- `grep -rE '#[0-9a-fA-F]{6}' src/components src/pages src/layouts` → 0 resultados (excepto comentarios)
- `grep -rE 'rgba?\(' src/components src/pages src/layouts | grep -v 'var(' | grep -v '0, 0, 0'` → solo casos documentados
- Visual idéntico o mejor; sin nuevos colores en pantalla
