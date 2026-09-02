# ENCARGO: Rediseño visual unificado del frontend — Fase A final

## DIAGNÓSTICO (verificado con capturas del usuario)

El frontend tiene **cero consistencia** entre secciones. Cada agente construyó su sección con supuestos diferentes:

| Problema | Evidencia |
|---|---|
| Títulos de TODOS los tamaños | Nutrición: gigante izquierda. Base de datos: gigante centro 3 líneas. Empleo: mediano. Cursos: DUPLICADO (grande + sección). Proyectos: pequeño. Hoy: sin título. |
| Layouts incompatibles | Nutrición: contenido offset derecha. Base de datos: centrado. Empleo: full-width. Cardio: columna estrecha. |
| Encoding roto | "DÃ©ficit" en Nutrición (UTF-8 doble encoding) |
| Scroll containers internos | "Tener cajas con scroll interno se ve horrible" — usuario |
| SectionNav en posiciones diferentes | Unas arriba, otras abajo (Progreso), otras sin él (Anatomía) |
| Texto excesivo | Bloques de texto explicativo donde un icono + hover bastaría |
| 1381 inline styles en fitness solo | Ninguna consistencia de spacing/typography |

## ARQUITECTURA CORRECTA (lo que TODAS las páginas deben cumplir)

```
┌─────────────────────────────────────────────────┐
│ NavigationShell (nivel 1 — ya existe)            │
├─────────────────────────────────────────────────┤
│ SectionNavBar (nivel 2 — pills sticky top)      │
│ [Hoy] [Anatomía] [Base de datos] [Progreso]...  │
├─────────────────────────────────────────────────┤
│ Nivel 3 (links ligeros — solo si existen)       │
│ Rutinas | Progresiones | Ejercicios | Músculos  │
├─────────────────────────────────────────────────┤
│ PAGE TITLE (h1, mismo tamaño en TODAS)          │
│ Título de la página                             │
├─────────────────────────────────────────────────┤
│                                                 │
│ CONTENIDO (full-width desktop, max 1200px)      │
│ Sin scroll containers internos                  │
│ Sin cajas apeñuscadas                           │
│                                                 │
└─────────────────────────────────────────────────┘
```

## REGLAS DE DISEÑO (Apple-like, innegociables)

1. **Máx 1200px de ancho de contenido** en desktop, centrado
2. **Título h1**: `clamp(1.5rem, 3vw, 2.25rem)`, weight 700, letter-spacing -0.02em — EXACTAMENTE el mismo en todas las páginas
3. **Sin scroll containers internos**: el contenido fluye en la página
4. **Sin bloques de texto grandes**: icono + palabra o tooltip en hover
5. **Colores SOLO de tokens.css**: cero hex hardcodeados
6. **Spacing SOLO con --space-* variables**: cero px/magic numbers
7. **Radios SOLO con --radius-* variables**: 8/12/16/999px
8. **Sin emojis como iconos** en producción (usar lucide-react)

---

## PROMPT PARA EJECUTOR (GLM 5 Turbo o Gemini Flash)

```
Eres el agente de diseño frontend de Plan Maestro OS. Tu única tarea es
NORMALIZAR el diseño visual de TODAS las secciones para que se vean idénticas
en estructura, tipografía, spacing y jerarquía.

WORKTREE: E:\Laboral\.worktrees\fitness (rama agent/fitness) — tiene npm install ya hecho.

ARRANQUE: git merge main --no-edit && lee src/styles/designSystem.css (el sistema
de clases ds-* que DEBES usar) y src/styles/tokens.css (las variables).

REGLA ABSOLUTA: NO cambies lógica, NO añadas features, NO borres nada.
Solo reemplaza inline styles por las clases ds-* y normaliza la estructura.

═══════════════════════════════════════════════════════════════
TAREA 1: FIX ENCODING (Nutrición)
═══════════════════════════════════════════════════════════════
Archivo: src/data/fitness/nutrition/ — busca "DÃ©ficit", "SuperÃvit" y
cualquier otro texto con doble encoding UTF-8. Corrige a "Déficit", "Superávit".

═══════════════════════════════════════════════════════════════
TAREA 2: ELIMINAR SCROLL CONTAINERS INTERNOS
═══════════════════════════════════════════════════════════════
Busca en TODOS los componentes con `overflowY: 'auto'` o `maxHeight:` combinados
(son cajas con scroll interno que el usuario definió como "horribles").
Elimina el maxHeight y el overflow — deja que el contenido fluya.
Excepción: el visor 3D (AnatomyViewer) puede mantener scroll en el panel lateral.

Grep: grep -rn "maxHeight\|overflowY.*auto\|overflow.*scroll" src/components/ --include=*.tsx

═══════════════════════════════════════════════════════════════
TAREA 3: NORMALIZAR TÍTULOS — UNA SOLA FUENTE (layout h1)
═══════════════════════════════════════════════════════════════
El PlanMaestroLayout ya renderiza pageTitle como h1. PROBLEMA: algunos
componentes React renderizan SU PROPIO título, creando duplicados.

Busca y ELIMINA títulos duplicados en componentes React (el layout ya pone el h1):
- FitnessLibrary.tsx: tiene "Base de Datos & Biblioteca" como h1/h2 → ELIMINA (el layout ya lo pone via pageTitle)
- DirectCotizador.tsx: tiene hero title → ELIMINA si el layout ya pasa pageTitle
- Todos los componentes que rendericen <h1> o <h2> como primer elemento de la página

Grep: grep -rn "<h1\|<h2" src/components --include=*.tsx | grep -v "node_modules" 
Solo elimina los que son TÍTULOS DE PÁGINA (los que aparecen arriba de todo).
Los h2/h3 que son SUBSECCIONES dentro del contenido SÍ se quedan.

═══════════════════════════════════════════════════════════════
TAREA 4: REEMPLAZAR INLINE STYLES POR CLASES ds-* (el más grande)
═══════════════════════════════════════════════════════════════
Lee src/styles/designSystem.css para ver todas las clases disponibles.

PATRONES DE REEMPLAZO (seguir EXACTAMENTE):

CONTENEDOR/BOX:
  ANTES: style={{ background: 'var(--surface-1)', border: '1px solid ...', borderRadius: 12, padding: 16 }}
  DESPUÉS: className="ds-card"

STACK VERTICAL:
  ANTES: style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
  DESPUÉS: className="ds-stack"

ROW HORIZONTAL:
  ANTES: style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}
  DESPUÉS: className="ds-row-between"

TÍTULO h2/h3:
  ANTES: style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}
  DESPUÉS: className="ds-h3"

LABEL/SECCIÓN:
  ANTES: style={{ fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', color: ... }}
  DESPUÉS: className="ds-eyebrow"

DESCRIPCIÓN/TEXTO:
  ANTES: style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}
  DESPUÉS: className="ds-caption"

BOTÓN PRINCIPAL:
  ANTES: style={{ background: 'var(--accent)', color: '#fff', borderRadius: ..., padding: ..., cursor: 'pointer' }}
  DESPUÉS: className="ds-btn ds-btn-primary"

CHIP/FILTRO:
  ANTES: style={{ padding: '5px 12px', borderRadius: 999, border: active ? ... : ..., background: ... }}
  DESPUÉS: className="ds-chip" data-active={active}

STAT/NUMERO:
  ANTES: style={{ background: ..., borderRadius: 10, padding: 12, textAlign: 'center' }}
  DESPUÉS: className="ds-stat" (+ data-highlight si aplica)

COLORES: Reemplaza TODOS los hex hardcodeados por sus tokens:
  #0a84ff → var(--accent)
  #30d158 → var(--success)
  #ff9f0a → var(--warning)
  #ff453a → var(--danger)
  #0d0d0f → var(--surface-1)
  #161619 → var(--surface-2)
  #f5f5f7 → var(--text-primary)
  #98989d → var(--text-secondary)
  #636366 → var(--text-tertiary)

RADIUS: Reemplaza números por tokens:
  8px → var(--radius-s)
  12px → var(--radius-m)
  16px → var(--radius-l)
  999px → var(--radius-pill)

FILE ORDER (por visibilidad, migrar TODOS):
1. src/components/fitness/FitnessTabWorkspace.tsx
2. src/components/fitness/TodayRoutineStack.tsx
3. src/components/fitness/TodayCalendar.tsx
4. src/components/fitness/FitAppRoutinesCatalog.tsx
5. src/components/fitness/nutrition/NutritionWorkspace.tsx
6. src/components/fitness/cardio/CardioWorkspace.tsx
7. src/components/fitness/anatomy/AnatomyViewer.tsx
8. src/components/fitness/analytics/RealProgressSections.tsx
9. src/components/career/CareerToday.tsx
10. src/components/career/JobsPipeline.tsx
11. src/components/career/CompanyDatabase.tsx
12. src/components/career/WeeklyExecutionBoard.tsx
13. src/components/clinical/ClinicalExecutionHub.tsx
14. src/components/languages/LessonView.tsx
15. src/components/languages/VocabularySession.tsx
16. src/components/schedules/TodayTabWorkspace.tsx
17. src/components/schedules/WeeklyGridPlanner.tsx
18. src/components/schedules/DailyOperatingView.tsx

═══════════════════════════════════════════════════════════════
TAREA 5: REMOVER EMOJIS Y REEMPLAZAR CON LUCIDE-REACT
═══════════════════════════════════════════════════════════════
Busca emojis (🌐🎬📸📦🔁🗓️🔒💬📧⚙️) en JSX y reemplaza por iconos lucide-react:
Grep: grep -rn "🌐\|🎬\|📸\|📦\|🔁\|🗓️\|🔒\|💬\|📧\|⚙️" src/components --include=*.tsx

Lucide imports ya disponibles: import { Globe, Film, Camera, Package, RefreshCw, Calendar, Lock, MessageCircle, Mail, Settings } from 'lucide-react';

═══════════════════════════════════════════════════════════════
TAREA 6: FULL-WIDTH EN DESKTOP
═══════════════════════════════════════════════════════════════
Busca y elimina maxWidth restricciones en componentes (el layout ya limita a 1200px):
Grep: grep -rn "maxWidth.*720\|maxWidth.*600\|maxWidth: 720" src/components --include=*.tsx
Reemplaza por: maxWidth: '100%' o elimina la restricción (el layout ya tiene max 1200px).

═══════════════════════════════════════════════════════════════
VERIFICACIÓN FINAL:
- NODE_OPTIONS=--max-old-space-size=8192 npx astro check → 0 errores
- npm test → verde
- Commits por tarea (T1, T2, T3, T4-por-grupo, T5, T6)
- Al terminar: resumen de archivos modificados y estilos normalizados
```

---

## PROTOCOLO DE VERIFICACIÓN DE MISIÓN CONTROL

Al terminar el ejecutor, yo verifico:
1. `npx astro check` → 0 errores (mi propio run)
2. `npm test` → verde (mi propio run)
3. `grep -rc "style={{" src/components --include=*.tsx | awk -F: '{sum+=$2}'` → número significativamente menor que 1381
4. `grep -rc "#0a84ff" src/components/fitness --include=*.tsx` → < 20 (de 79)
5. `grep -c "DÃ©ficit" src/data/fitness/nutrition/*.ts` → 0
6. Smoke test visual en 4321
7. Merge a main
