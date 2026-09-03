# 01 — Auditoría de Orquestación y Sistema Multi-Agente

> **Documento:** `GeminiAudits/01_ORQUESTACION_Y_SISTEMA_MULTIAGENTE.md`  
> **Objetivo:** Análisis profundo de `docs/orquestacion`, modelo de despachos (1 a 5), gestión de worktrees, economía de tokens y modelo de puente humano.

---

## 1. Evaluación del Modelo de Orquestación Actual

El sistema de orquestación de Plan Maestro OS (documentado formalmente en `docs/orquestacion/NORMAS_ORQUESTADOR.md`) se diseñó como respuesta a una restricción económica y operativa severa: **la tasa de consumo de créditos de modelos de frontera en IDEs locales y subagentes automatizados**.

### 1.1 La Cadena de Mando y la Matriz de Enrutamiento
El modelo vigente establece la siguiente división funcional:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        USUARIO (Puente Humano)                         │
│   Copia encargos a chats web gratuitos / Devuelve diffs y artefactos   │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│             MISIÓN CONTROL (Orquestador - Razonamiento Alto)           │
│   Planifica, redacta specs hiperdetalladas, verifica, resuelve merges  │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
         ┌─────────────────────────┴─────────────────────────┐
         ▼                                                   ▼
┌──────────────────────────────────┐      ┌───────────────────────────────┐
│     DISEÑADORES WEB GRATUITOS    │      │       EJECUTORES LOCALES      │
│ - GLM 5.3 Web (Chat ilimitado)   │      │ - Antigravity / Gemini Flash  │
│ - Kimi K3 / Perplexity Web       │      │ - Zed Student ($10/mes)       │
│ - NotebookLM (Síntesis PDFs)     │      │ - Worktrees dedicados por dom │
└──────────────────────────────────┘      └───────────────────────────────┘
```

### 1.2 Principios que Funcionan con Extraordinaria Eficacia
1. **La Regla de Oro (§0.9 / NORMAS §2):** *"PROHIBIDO eliminar o reemplazar funciones/trabajos ya consolidados. Todo cambio es ADITIVO."* Esta regla fue instaurada tras el incidente del agente FIT (donde se eliminaron componentes con lógica consolidada) y ha demostrado ser el cortafuegos más valioso del proyecto. En 5 despachos sucesivos no se ha vuelto a registrar regresión destructiva.
2. **Protocolo Anti-Slop:** La exigencia de trazabilidad matemática y documental (`ruleId`, `sourceId`, capítulo y página) ha impedido que la IA invente directrices de salud o números arbitrarios en el código.
3. **Segregación por Worktrees:** El uso de 14 git worktrees (`.worktrees/<dominio>`) ha evitado colisiones catastróficas de git entre ramas concurrentes.

---

## 2. Auditoría Cronológica de los Despachos (Lo Ejecutado vs. Lo Pendiente)

El análisis detallado de los despachos 1 a 5 revela el progreso real y los puntos de atasco del proyecto:

### DESPACHO 1 (2026-08-23)
*   **Enfoque:** Fixes anatómicos en `agent/anatomia`, arranque del motor de repetición espaciada (SM-2) para alemán (`agent/german`), y curación inicial de RAG.
*   **Resultado:** El motor SM-2 de alemán se estabilizó en `src/lib/languages/spacedRepetition.ts`, sentando la base para `vocabularyStore.ts`. Se consolidó la extracción de los 5 grandes libros de anatomía (Gray's, Moore, MacIntosh, Enoka, Norkin).

### DESPACHO 2 (2026-08-25)
*   **Enfoque:** Integración masiva de datasets de inglés (128 términos técnicos, business scenarios, C1), migración de reglas legacy de nutrición a chunks v4, y contrato de sesión deportiva (`sessionExport.ts`).
*   **Resultado:** La integración de `englishCourse.ts` y sus suites de prueba se completó exitosamente (tests pasando en `src/data/languages/english/__tests__/`). Nutrición migró de 119 reglas hardcodeadas a un estimador metabólico cuantitativo (`kcalEstimator.ts`).

### DESPACHO 3 (2026-08-26)
*   **Enfoque:** Pulido de cobertura del visor anatómico 3D (reducción de meshes huérfanos) y especificación de Cloudflare Worker IA (`worker/src/ai/client.ts`).
*   **Resultado:** Se descubrió que la selección jerárquica 3D (`resolveClick` en `composite.ts`) requería un árbol de grafo formal, no solo nombres de nodos en el GLTF. El worker IA quedó con esqueleto funcional pero sin despliegue de producción.

### DESPACHO 4 (2026-08-28)
*   **Enfoque:** Migración masiva de inline-styles al Design System unificado `ds-*` en Fitness, Nutrición, Cardio, Clinical, Career y Languages.
*   **Resultado:** Reducción drástica del CSS spaghetti. Componentes como `FitnessTabWorkspace.tsx` y `TodayRoutineStack.tsx` adoptaron componentes visuales semánticos (`Card`, `Chip`, `StatBox`, `ds-stack`, `ds-h2`).

### DESPACHO 5 (2026-08-30)
*   **Enfoque:** Catálogo determinista de reglas de fitness (extrayendo +100 reglas numéricas de Overcoming Gravity y Nippard), configuración de agentes proactivos en Gemini Spark para vacantes y YouTube, y definición de la arquitectura de Grafo de Vida.
*   **Resultado:** Definición de los contratos de grafo y primeros pipelines de ingesta.

---

## 3. Puntos Débiles y Cuellos de Botella del Sistema de Orquestación

A pesar del orden formal, la auditoría identifica **4 fallas estructurales graves** en la operativa actual:

### Falla 1: Fricción Extrema del "Puente Humano" (Sobrecarga Cognitiva)
*   **Evidencia:** El usuario debe copiar prompts kilométricos a navegadores, esperar respuestas, descargar JSON/Markdowns, guardarlos en rutas exactas como `biblioteca/_llm-outputs/gemini-flash/`, volver al orquestador, pedir merge y correr tests.
*   **Impacto:** Para un usuario con rasgos de TDAH y fatiga ejecutiva (documentado en el reporte clínico `plan-accion-tdah-ansiedad`), este flujo genera **agotamiento decisional**. La tasa de abandono de tareas de curación es alta porque el trabajo manual de "copiar y pegar archivos" no genera dopamina y consume horas de energía mental.
*   **Refuerzo propuesto:** Automatizar el handoff mediante scripts locales en Node/TypeScript que consuman endpoints gratuitos o locales cuando sea posible, o preparar **paquetes de un solo clic** donde el usuario solo arrastre un archivo generado a una carpeta y un watcher de Node (`chokidar`) ejecute la normalización, validación RAG y tests automáticamente.

### Falla 2: Desviación (Drift) de Ramas y Desincronización de Worktrees
*   **Evidencia:** Existen 14 worktrees en disco. Cada worktree tiene su propio `node_modules` o enlaces simbólicos. Cuando `main` avanza (e.g. cambios en `src/data/types.ts` o contratos CORE), las ramas `agent/*` quedan desactualizadas.
*   **Impacto:** Riesgo permanente de que un agente trabaje durante horas sobre una versión obsoleta de un store (ejemplo real: el incidente de `todayAdapter`, donde un agente programó contra métodos de Zustand que ya habían sido renombrados en `main`).
*   **Refuerzo propuesto:** Crear un script canónico de sincronización global:
    ```bash
    npm run worktrees:sync
    ```
    que itere sobre todos los worktrees activos y ejecute de manera segura `git fetch origin main && git merge main --no-edit` o advierta de conflictos de forma preventiva.

### Falla 3: El "Handoff por Chat" vs. "Handoff por Archivo"
*   **Evidencia:** Cuando una sesión de chat finaliza o se reinicia el contexto del LLM, el conocimiento táctico de la tarea en curso se pierde si no quedó expresamente escrito en un archivo `STATUS-*.md` o `ENCARGO.md`.
*   **Impacto:** Pérdida de tiempo repitiendo auditorías preliminares y contexto.
*   **Refuerzo propuesto:** Establecer como invariante de sistema que **ningún agente puede terminar un turno sin actualizar su archivo `STATUS-<dominio>.md`** con: (1) Último commit realizado, (2) Contratos expuestos a otros dominios, (3) Tareas pendientes numeradas, y (4) Errores conocidos no resueltos.

### Falla 4: Desconexión entre Gemini Spark y el Repositorio Local
*   **Evidencia:** En el Despacho 5 se propuso usar Gemini Spark para revisar YouTube y buscar vacantes en LinkedIn diariamente, guardando los resultados en Google Sheets. Sin embargo, no existe un canal automatizado que descargue esos datos de Google Sheets al archivo local de la app.
*   **Impacto:** Los datos de mercado laboral y de videos quedan aislados en la nube de Google, sin alimentar el `careerStore` ni la cola de microlearning de `Hoy`.
*   **Refuerzo propuesto:** Crear un Google Apps Script o un endpoint en el worker local que sincronice el Google Sheet con `src/data/career/liveJobFeed.json` e ingeste automáticamente las ofertas y videos filtrados.

---

## 4. Matriz de Optimización de la Orquestación

Para llevar el sistema al siguiente nivel de eficiencia sin gastar créditos innecesarios, se prescribe la siguiente reconfiguración de roles:

| Nivel de Razonamiento | Entorno Asignado | Tareas Permitidas | Tareas Prohibidas |
|---|---|---|---|
| **Estratégico / Crítico** | Orquestador (IDE Antigravity / Gemini 3.8 Flash High) | - Arquitectura del Grafo Unificado<br>- Resolución de conflictos de merge<br>- Verificación formal de contratos y tests<br>- Diagnóstico diferencial biomecánico | - Escribir CSS manual repetitivo<br>- Formatear JSONs masivos<br>- Búsqueda web de vacantes una a una |
| **Diseño / Síntesis** | GLM 5.3 Web / Perplexity K3 (Chat gratuito) | - Generación de reglas TypeScript desde chunks<br>- Redacción de scenarios de inglés de negocio<br>- Síntesis profunda de papers científicos | - Modificar directamente archivos del repo<br>- Crear mocks desconectados |
| **Ingesta Masiva** | Scripts Node.js + Gemini 3.7 Flash CLI | - Chunking de libros en formato RAG v4<br>- Normalización de glosarios y diccionarios<br>- Validación automática de esquemas Zod | - Tomar decisiones de arquitectura sin spec |
| **Automatización 24/7** | Gemini Spark + Webhooks / Cloudflare Worker | - Escaneo matutino de YouTube "Ver más tarde"<br>- Monitoreo diario de vacantes (Unity/WebGL/Tools)<br>- Generación del borrador del Daily Briefing | - Aplicar cambios al estado del usuario sin aprobación manual |

---

## 5. Resumen de Gobernanza de Trabajo

1. **La soberanía del código reside en `main`:** Ningún agente realiza push directo a `main`. Todo cambio se valida con `astro check` (0 errores) y `npm test` (100% verde) antes de ser integrado por Misión Control.
2. **Documentación como código:** Las especificaciones no se discuten en el chat efímero; se escriben en `docs/agents/` y en `GeminiAudits/`.
3. **Cero alucinaciones:** Todo componente de UI que muestre una recomendación médica, deportiva o salarial debe contener un enlace o popover con la cita textual de la fuente bibliográfica (`sourceId` + `chapter` + `page`).
