# DESPACHO 5 — Prompt catálogo de reglas + Gemini Spark + Plan actualizado

---

## A. PROMPT CATÁLOGO DE REGLAS (pegar en GLM 5.3 web)

```
Eres un catalogador de reglas deterministas para Plan Maestro OS (app de fitness con motor de reglas). Tu entrada son chunks de conocimiento ya curados de libros científicos. Tu salida es un archivo TypeScript con reglas DomainRule.

FORMATO DE ENTRADA: Te pasaré chunks con este formato:
<!-- chunk
id: <id>
topic: <topic>
tags: <tags>
chapter: <número> / page: <número>
-->
<contenido con cifras y afirmaciones cuantitativas>

FORMATO DE SALIDA: Para cada chunk que contenga CIFRAS MEDIBLES, genera una regla:

```typescript
{
  id: 'fit:<slug-descriptivo>',           // prefijo fit: para fitness, nutri: para nutrición
  domain: 'fitness',                       // o 'nutrition', 'clinical'
  description: '<1-2 líneas descripción>',
  type: 'volume|frequency|intensity|pain|progression|rest|nutrition|lifestyle',
  metric: '<métrica que evalúa>',
  optimalRange: { min: <n>, max: <n> },   // rango óptimo (dentro = ok)
  riskThresholds: {
    warning: { min: <n>, max: <n> },       // fuera de esto = warning
    violation: { min: <n>, max: <n> },     // fuera de esto = violation
  },
  appliesWhen: (ctx: RuleContext) => boolean,  // cuándo aplica (población, condición)
  resolveValue: (ctx: RuleContext) => number | undefined,  // qué dato evaluar
  confidence: 'explicit' | 'inferred' | 'qualitative',
  evidenceTier: 'meta-analysis' | 'rct' | 'observational' | 'expert-book' | 'internal-doc',
  sourceRef: { docId: '<sourceId-del-chunk>', chapter: <n>, page: <n> },
  messages: {
    warning: '<mensaje cuando está en warning>',
    violation: '<mensaje cuando está en violation>',
  },
},
```

REGLAS CRÍTICAS:
1. SOLO extraer reglas de chunks que tengan CIFRAS (números, rangos, porcentajes).
2. Si el chunk dice "10-20 series" → optimalRange: {min: 10, max: 20}.
3. Si dice ">22 es volumen basura" → riskThresholds.violation: {max: 22}.
4. confidence: 'explicit' si la cifra viene tal cual del libro. 'inferred' si es derivada. 'qualitative' si no hay número.
5. sourceRef: USAR el sourceId del chunk header (ej: 'low-overcoming-gravity-2ed').
6. SI UN CHUNK NO TIENE CIFRAS MEDIBLES, NO GENERAR REGLA (skip).
7. Generar MÍNIMO 1 regla por chunk con cifras, MÁXIMO 3.

CONTEXT AVAILABLE en RuleContext:
- ctx.week.hardSets: series duras totales de la semana
- ctx.week.byPattern: [{pattern, hardSets, sessions}] por patrón de movimiento
- ctx.week.sessions: número de sesiones de la semana
- ctx.week.avgSessionRpe: RPE medio
- ctx.userState.dailyLogs: [{date, sleepHours, stress, generalPain, illness}]
- ctx.userState.pain: [{date, bodyZone, severity, timing}]
- ctx.userState.profile: {trainingAge, conditions, equipment}

OUTPUT: Solo el array de reglas TypeScript, sin explicación. Formato listo para copiar a src/data/fitness/rules/fitnessRules.ts
```

**Cómo usar:** pega el prompt + los chunks de `rag/fitness/fuentes/*.md` (empezando por low-overcoming-gravity-2ed.md que es el más grande) en GLM 5.3 web. Copia el output a un archivo nuevo. Yo lo verifico e integro.

---

## B. GEMINI SPARK — Investigación y configuración

### Lo que encontré:

| Capacidad | Estado | Nota |
|---|---|---|
| **YouTube review** | ✅ Funciona | Via Chrome integration. Puede ver videos, resumir, categorizar |
| **Notion sync** | ⚠️ Verano 2026 | Native integration pendiente. Workaround: Google Sheets como intermediario |
| **Instagram/FB saved posts** | ❌ No directo | Solo via Chrome browsing (manual). No hay API de IG/FB para agentes |
| **Google Workspace** | ✅ Funciona | Gmail, Calendar, Docs, Sheets |
| **Chrome browsing** | ✅ Funciona | Puede navegar, leer páginas, extraer contenido |
| **Canva, Dropbox** | ✅ MCP connectors | Integraciones day-one |
| **Trabajos recurrentes** | ✅ Funciona | 24/7 background tasks |

### PROMPT para configurar Gemini Spark (pegar en Spark):

```
CONFIGURA MIS TAREAS DIARIAS RECURRENTES:

═══ TAREA 1: REVISIÓN DIARIA DE YOUTUBE (mañana, 8:00) ═══
1. Revisa mi lista "Ver más tarde" en YouTube
2. Para cada video, determina:
   - Categoría: fitness (nutrición/bodybuilding/calistenia/movilidad), laboral
     (AI/3D/development/web/cursos), idiomas, clínico, otro
   - Relevancia:
     * INSERVIABLE: click bait, nada nuevo
     * RESUMIBLE: relevante pero basta con texto (sacar datos clave)
     * IMPORTANTE: hay que verlo, mucha información valiosa
3. Clasifica y organiza por categoría
4. Genera resumen de texto para los RESUMIBLES
5. Actualiza mi Google Sheet "Contenido Revisado" con:
   | Fecha | Título | Canal | Categoría | Subcategoría | Relevancia | Resumen | URL |
6. Los INSERVIABLES también se registran con motivo de por qué no valen

═══ TAREA 2: REVISIÓN DE HISTORIAL YOUTUBE (tarde, 14:00) ═══
1. Revisa mi historial de YouTube de las últimas 24h
2. Si hay títulos relevantes a mis categorías, aplícales el mismo proceso
   de la Tarea 1
3. Registra en el mismo Google Sheet

═══ TAREA 3: BÚSQUEDA LABORAL DIARIA (mañana, 9:00) ═══
1. Busca vacantes nuevas en:
   - LinkedIn: "Unity WebGL Developer", "Real-Time 3D Developer",
     "Technical Artist", "WebGL Engineer"
   - Remoto desde Colombia o internacional
2. Filtra por: empresas que coincidan con mi perfil (agencias B2B,
   studios 3D, empresas industriales con visualización)
3. Para cada vacante relevante:
   - Extrae: empresa, rol, requirements, salary range, URL
   - Evalúa fit (1-5)
   - Registra en Google Sheet "Aplicaciones Diarias"
4. Sugiere qué CV variante usar para cada una

═══ TAREA 4: SÍNTESIS SEMANAL (domingo, 18:00) ═══
1. Revisa toda la semana de contenido revisado y aplicaciones
2. Genera reporte semanal en Google Doc:
   - Videos importantes vistos vs. inservibles (ratio)
   - Vacantes aplicadas vs. pendientes
   - Tendencias detectadas (tecnologías que salen, skills pedidas)
   - Recomendaciones para la próxima semana
```

### Instrucciones para Instagram/FB:
No hay integración directa. **Workaround:**
1. En Instagram/FB, guardar posts a colecciones
2. Semanalmente, exportar enlaces manualmente (compartir → copiar link)
3. Pegar enlaces en Google Doc "Social Saved"
4. Gemini Spark puede leer ese Doc y categorizar/evaluar

---

## C. PLAN ACTUALIZADO — Corto / Medio / Largo plazo

### PILARES FUNDAMENTALES (corto plazo — 2 semanas)

| # | Pilar | Qué se hace | Estado |
|---|---|---|---|
| P1 | **Design system unificado** | Clases ds-* aplicadas a TODAS las secciones. Cero inline styles críticos. | 🔨 Ejecutor trabajando |
| P2 | **Motor de reglas escalado** | +100 reglas citadas desde chunks. GLM 5.3 web genera, yo verifico. | 📋 Prompt listo (sección A) |
| P3 | **UserState real** | Logger fitness + biofeedback clínico + vocabulario alimentando el contrato | 🔧 Yo lo hago |
| P4 | **Sugerencias en Hoy** | SuggestionInbox consumiendo datos reales (ya funciona con 10 reglas semilla) | ✅ Funcionando |
| P5 | **Gemini Spark configurado** | YouTube review + búsqueda laboral diaria + síntesis semanal | 📋 Prompt listo (sección B) |

### EXPANSIÓN (mediano plazo — 1-2 meses)

| # | Módulo | Qué se añade |
|---|---|---|
| M1 | **Cardio ejecutable** | Iniciar rutina desde presets → guardar sesión → alimenta análisis. No solo mostrar info. |
| M2 | **Nutrición precisa** | +20 variables (hormonal, suplementos: creatina/ashwaganda, alimentación, ciclo menstrual, etc). Conectar con gastronomía. |
| M3 | **Calorías por ejercicio** | kcal = f(reps, series, RPE/RIR, masa muscular, duración, EPOC). Tiempo real + recuperación. |
| M4 | **Bases cuantitativas volumen** | Por músculo: hipertrofia, fuerza, calistenia, gimnasia, movilidad, flexibilidad, cardio, velocidad, equilibrio. Rangos citados. |
| M5 | **Career inteligente** | CV procedural por empresa/aplicación. Presets de portafolio diarios. Investigación de mercado diaria (Spark). Reenfoque según resultados. |
| M6 | **Worker IA Gemini** | Endpoint /ai/draft. Prompts por dominio. Borradores con aprobación humana. |
| M7 | **Grafo de conocimiento** | Conexiones estilo Obsidian: ejercicio↔músculo↔regla↔sugerencia↔documento. Visualizable. |

### VISIÓN (largo plazo — 3-6 meses)

| # | Objetivo |
|---|---|
| V1 | **Segundo cerebro completo**: toda la información del usuario (fitness, laboral, clínico, idiomas, contenido) interconectada en un grafo navegable |
| V2 | **IA proactiva real**: Spark alimenta el sistema diariamente (contenido, vacantes, tendencias). El motor de reglas evalúa y sugiere. Worker IA genera borradores. |
| V3 | **Auto-evolución**: el sistema aprende del usuario (qué sugerencias acepta, qué reglas viola, qué contenido consume) y ajusta prioridades |
| V4 | **Multi-plataforma**: PWA instalable, notificaciones push, offline-first |
| V5 | **API pública**: otros agentes/servicios pueden consultar el grafo de conocimiento |

### ARQUITECTURA DEL GRAFO (pilar de V1)

```
Nodos: Exercise, Muscle, Joint, Rule, Suggestion, Document, Video,
       Application, Company, Skill, Protocol, Session, Metric

Aristas:
  Exercise ──loads──> Muscle
  Exercise ──stresses──> Joint
  Rule ──evaluates──> Metric
  Rule ──cites──> Document
  Suggestion ──derived_from──> Rule
  Suggestion ──affects──> Exercise
  Video ──categorized_as──> Skill
  Application ──targets──> Company
  Application ──uses──> Document (CV variant)
  Protocol ──treats──> Joint
  Session ──produces──> Metric
```

**Obsidian**: SÍ incluirlo como interfaz de navegación del grafo. Ya existe `_obsidian/` en el repo. Mantener los .md como fuente canónica que Obsidian lee, y el grafo React visualiza la versión tipada.
