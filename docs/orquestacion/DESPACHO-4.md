# DESPACHO 4 — Migración al Design System (ds-*)

> Flujo: misión control diseñó el sistema; ejecutores aplican las clases a los componentes existentes.
> Cada prompt es autocontenido: pegar en GLM 5 Turbo o Gemini Flash.
> Reglas: REGLA DE ORO (nada se borra, cambios aditivos), commits frecuentes, verificación por commit.

---

## Guía de migración (aplica a TODOS los prompts)

Esta es la tabla de reemplazo. Cada ejecutor debe seguir estos patrones EXACTOS:

### Reemplazo de INLINE STYLES

```
❌ ANTES (lo que hay que QUITAR):
style={{
  background: '#0d0d0f',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 12,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 16
}}

✅ DESPUÉS (lo que hay que PONER):
className="ds-stack"
// Y si era clickable:
// <Card clickable onClick={...}>...</Card>
```

```
❌ ANTES (botón):
style={{
  background: 'var(--accent, #0a84ff)',
  color: '#fff',
  border: 'none',
  borderRadius: 6,
  padding: '3px 8px',
  fontSize: '0.72rem',
  cursor: 'pointer',
  fontWeight: 700
}}

✅ DESPUÉS:
className="ds-btn ds-btn-primary ds-btn-sm"
```

```
❌ ANTES (chip/filtro):
style={{
  padding: '5px 12px', borderRadius: 999, cursor: 'pointer', font: 'inherit',
  fontSize: 12.5, border: active ? '2px solid #0a84ff' : '1px solid #dde0e8',
  background: active ? '#e8f0fe' : '#fff', color: '#1a1d29',
  fontWeight: active ? 600 : 400
}}

✅ DESPUÉS:
<Chip label={label} active={active} onClick={onClick} />
// o si no se puede usar el componente:
className="ds-chip" data-active={active}
```

```
❌ ANTES (título):
style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0, color: '#ffffff', letterSpacing: '-0.02em' }}

✅ DESPUÉS:
className="ds-h2"
```

```
❌ ANTES (label/eyebrow):
style={{
  fontSize: 'var(--fs-eyebrow, 0.72rem)',
  color: 'var(--accent, #0a84ff)',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
}}

✅ DESPUÉS:
className="ds-eyebrow"
```

```
❌ ANTES (caption/descripción):
style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}

✅ DESPUÉS:
className="ds-caption"
```

```
❌ ANTES (StatBox):
style={{
  background: highlight ? '#e8f0fe' : '#f0f4ff',
  border: highlight ? '1px solid #0a84ff' : '1px solid #c7d7fe',
  borderRadius: 10, padding: 12, textAlign: 'center'
}}

✅ DESPUÉS:
<StatBox label={label} value={value} highlight={highlight} />
// o: <div className="ds-stat" data-highlight={highlight}>...</div>
```

```
❌ ANTES (slider):
style={{ width: '100%', accentColor: '#0a84ff', height: 28 }}

✅ DESPUÉS:
className="ds-slider"
```

```
❌ ANTES (toggle/switch):
style={{ width: 44, height: 26, borderRadius: 13, background: active ? '#30d158' : 'rgba(0,0,0,0.08)', ... }}

✅ DESPUÉS:
<Toggle active={active} onChange={onChange} />
// o: <button className="ds-toggle" data-active={active}>...</button>
```

```
❌ ANTES (layout stack):
style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}

✅ DESPUÉS:
className="ds-stack"
```

```
❌ ANTES (row):
style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}

✅ DESPUÉS:
className="ds-row-between"
```

### REGLAS CRÍTICAS:
1. NO cambies la lógica, solo los estilos.
2. NO borres props ni handlers — solo reemplaza `style={{...}}` por `className="ds-*"`.
3. Si un estilo no tiene equivalente ds-*, DÉJALO (no inventes clases nuevas).
4. Si el componente usa un `module.css` import, déjalo — solo reemplaza los inline styles.
5. Commits por ARCHIVO (no por sección completa) — si el archivo es muy grande, sub-commits.
6. Al terminar cada archivo: `npx astro check` debe seguir en 0 errores.

---

## PROMPT 1: Migrar FitnessTabWorkspace.tsx + sub-componentes de Hoy

**Worktree:** `E:\Laboral\.worktrees\fitness` (rama `agent/fitness`)
**Arranque:** `npm install && git merge main --no-edit`
**Verificación:** `NODE_OPTIONS=--max-old-space-size=8192 npx astro check` + `npm test`

```
Eres AG-FIT. Tu única tarea es MIGRAR INLINE STYLES a las clases ds-* del design system.
NO cambies lógica, NO añadas features, NO borres nada.

ARCHIVOS A MIGRAR (en orden):
1. src/components/fitness/FitnessTabWorkspace.tsx (294 líneas)
2. src/components/fitness/TodayCalendar.tsx (251 líneas)
3. src/components/fitness/TodayRoutineStack.tsx (555 líneas)
4. src/components/fitness/PrehabBlock.tsx
5. src/components/fitness/skills/ActiveProgressionsTodayCard.tsx
6. src/components/suggestions/SuggestionInbox.tsx (ya migrado — verifica que usa ds-eyebrow)

PARA CADA ARCHIVO:
1. Léelo completo.
2. Identifica TODOS los style={{ ... }} que coinciden con los patrones de migración (ver arriba).
3. Reemplázalos por las clases ds-* correspondientes.
4. Los estilos que NO tienen equivalente ds-* (ej: position, zIndex, animation custom) DÉJALOS.
5. `npx astro check` — debe seguir en 0 errores.
6. Commit: "refactor(fitness): ds-* migration — <nombre archivo>"

IMPORTANTE:
- Importa los componentes si los necesitas: import { Card, Chip, StatBox } from '../ui/ds';
- El import del designSystem ya está global vía global.css — no necesitas importarlo por componente.
- Si un inline style tiene un valor único que no corresponde a ningún ds-*, déjalo tal cual.
-fitnessRules.ts, sessionExport.ts, guidedSessionEngine.ts NO SE TOCAN (no tienen UI).
- HoyRoutineStack tiene el configurador completo: solo migra los estilos visuales, no la lógica de sets/reps/RPE.

Al terminar: commit final con resumen de archivos migrados y estilos reemplazados.
```

---

## PROMPT 2: Migrar NutritionWorkspace + CardioWorkspace

**Worktree:** `E:\Laboral\.worktrees\nutricion` (rama `agent/nutricion`)
**Arranque:** `npm install && git merge main --no-edit`

```
Eres AG-NUTRI. Migra los inline styles de tu sección a clases ds-*.

ARCHIVOS:
1. src/components/fitness/nutrition/NutritionWorkspace.tsx
2. src/components/fitness/nutrition/TargetCard.tsx
3. src/components/fitness/nutrition/DayTypeGrid.tsx
4. src/components/fitness/nutrition/KcalBurnPanel.tsx
5. src/components/fitness/nutrition/FemaleHormonesPanel.tsx

MISMOS PATRONES que PROMPT 1 (ver guía arriba).
NO tocas: formula.ts, calculator.ts, rules.ts, kcalEstimator.ts (lógica, no UI).

Commit por archivo. npx astro check + npm test por commit.
```

---

## PROMPT 3: Migrar CardioWorkspace

**Worktree:** `E:\Laboral\.worktrees\cardio` (rama `agent/cardio`)
**Arranque:** `npm install && git merge main --no-edit`

```
Eres AG-CARDIO. Migra los inline styles de tu sección a clases ds-*.

ARCHIVOS:
1. src/components/fitness/cardio/CardioWorkspace.tsx
2. src/components/fitness/cardio/PresetSheet.tsx

MISMOS PATRONES que PROMPT 1.
NO tocas: presets.ts, disciplines.ts, approaches.ts, editGuides.ts (lógica).

Commit por archivo. npx astro check + npm test por commit.
```

---

## PROMPT 4: Migrar ClinicalExecutionHub + rutas

**Worktree:** `E:\Laboral\.worktrees\clinical` (rama `agent/clinical`)
**Arranque:** `npm install && git merge main --no-edit`

```
Eres AG-CLIN. Migra los inline styles de tu sección a clases ds-*.

ARCHIVOS:
1. src/components/clinical/ClinicalExecutionHub.tsx
2. src/components/clinical/ClinicalExecutionHub.module.css (mantener, solo revisar)
3. src/components/clinical/UnblockPanel.tsx
4. src/components/clinical/ProtocolCard.tsx
5. src/components/clinical/ClinicalRoutineList.tsx

MISMOS PATRONES que PROMPT 1.
NO tocas: clinicalStore.ts (lógica).
```

---

## PROMPT 5: Migrar Career (JobsPipeline + CareerToday)

**Worktree:** `E:\Laboral\.worktrees\career` (rama `agent/career`)
**Arranque:** `npm install && git merge main --no-edit`

```
Eres AG-CAREER. Migra los inline styles de tu sección a clases ds-*.

ARCHIVOS:
1. src/components/career/CareerToday.tsx
2. src/components/career/JobsPipeline.tsx
3. src/components/career/CompanyDatabase.tsx
4. src/components/career/CareerTabWorkspace.tsx (si usa tabs con inline styles)
5. src/components/career/WeeklyExecutionBoard.tsx

MISMOS PATRONES que PROMPT 1.
NO tocas: careerStore.ts, applications.ts, companies.ts (lógica).
```

---

## PROMPT 6: Migrar Languages (german + english)

**Worktree:** `E:\Laboral\.worktrees\german` (rama `agent/german`)
**Arranque:** `npm install && git merge main --no-edit`

```
Eres AG-DE. Migra los inline styles de las componentes compartidas y alemanas a ds-*.

ARCHIVOS:
1. src/components/languages/LessonView.tsx
2. src/components/languages/VocabularySession.tsx
3. src/components/languages/LanguageToday.tsx
4. src/components/languages/german/PlacementTest.tsx

MISMOS PATRONES que PROMPT 1.
NO tocas: englishCourse.ts, components/languages/english/**, spacedRepetition.ts (lógica).
```

---

## INSTRUCCIONES PARA EL USUARIO

**Ejecución en paralelo (prompts 1-6 son independientes — worktrees distintos):**
1. Copia cada prompt en un chat/ejecutor diferente
2. Cada uno trabaja SOLO en su worktree
3. Al terminar cada uno, avísame → verifico + merge

**Orden recomendado:** PROMPT 1 primero (la puerta de entrada, la más visible). Los demás pueden ir en cualquier orden.

**Después de migrar todo:** yo hago el pase visual final, ajusto spacing/typography para pulir, y reorganizo la navegación para que sea consistente.
