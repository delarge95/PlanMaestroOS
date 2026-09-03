# 02 — Auditoría de Viabilidad Técnica y Estado Actual del Software

> **Documento:** `GeminiAudits/02_VIABILIDAD_TECNICA_Y_ESTADO_ACTUAL.md`  
> **Objetivo:** Análisis empírico de la arquitectura técnica, estado real del código en `src/`, rendimiento en compilación y tiempo de ejecución, bottlenecks de memoria y análisis de viabilidad.

---

## 1. Auditoría del Stack Tecnológico

El proyecto está construido sobre una arquitectura híbrida moderna orientada a la privacidad del usuario, velocidad de carga y funcionamiento fuera de línea (offline-first):

```
┌────────────────────────────────────────────────────────────────────────┐
│                          SUPERFICIE DE CLIENTE                         │
│   Astro 5 (SSG) + React 19 Islands + Vanilla CSS Design System (ds-*)  │
└───────────────────┬────────────────────────────────┬───────────────────┘
                    │                                │
                    ▼                                ▼
┌──────────────────────────────────────┐  ┌──────────────────────────────┐
│        ESTADO Y PERSISTENCIA         │  │     VISUALIZACIÓN Y 3D       │
│ - Zustand v5 (Persist middleware)    │  │ - Three.js (WebGL)           │
│ - Dexie.js (IndexedDB local-first)   │  │ - 9 Modelos Anatómicos GLB   │
│ - Adaptadores canónicos por dominio  │  │ - GLTF / Draco Loader        │
└───────────────────┬──────────────────┘  └──────────────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        MOTOR EXPERTO DETERMINISTA                      │
│ - Reglas numéricas en TypeScript puro (DomainRule, appliesWhen)        │
│ - EventBus local determinista + SuggestionEngine (cooldowns, gates)    │
│ - Motor RAG v4 estático en memoria (BM25 + Chunks indexados)           │
└───────────────────┬────────────────────────────────────────────────────┘
                    │ (Opcional / Fallback)
                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                     CAPA NARRATIVA IA (Worker / BYOK)                  │
│ - Cloudflare Worker / Generative Language API (Gemini Flash)           │
│ - AiDraftReview (Edición, Aprobación Humana Obligatoria, Descarte)     │
└────────────────────────────────────────────────────────────────────────┘
```

### 1.1 Veredicto sobre la Elección Tecnológica
*   **Astro 5 como orquestador:** Excelente decisión. Al compilar la mayoría de las vistas como HTML estático con hidratación parcial (`client:load` / `client:visible` en islas React), el tiempo hasta la primera pintura interactiva (FCP) es inferior a 300 ms en navegador local.
*   **Zustand v5 + LocalStorage / IndexedDB:** Altamente eficiente. Zustand no impone el boilerplate pesado de Redux ni la complejidad de context re-renders de React. Los stores están bien modularizados (`activeProgramStore`, `careerStore`, `clinicalStore`, `vocabularyStore`).
*   **Three.js puro en lugar de React Three Fiber (R3F):** En componentes como `src/components/fitness/anatomy/AnatomyViewer.tsx` y `ModelPreview.tsx`, se optó por instanciar Three.js de forma imperativa dentro de `useEffect`. Esto reduce el overhead de reconciliación de React y da control milimétrico sobre el ciclo de renderizado, pero exige un manejo manual riguroso de la recolección de basura (`dispose()` en geometrías, materiales y texturas) para evitar fugas de memoria en WebGL.

---

## 2. Diagnóstico de Rendimiento y Memoria (Bottlenecks Ocultos)

### 2.1 El problema de OOM en `astro check` (`max-old-space-size=8192`)
*   **Causa Raíz:** Durante las sesiones de orquestación se detectó que `npx astro check` arrojaba fallas por falta de memoria (Out Of Memory) en Node.js a menos que se asignara un heap de 8 GB (`NODE_OPTIONS=--max-old-space-size=8192`).
*   **Investigación de Causa:** No es un problema del compilador de Astro, sino del **Servidor de Lenguaje de TypeScript (TSServer)** al inferir los tipos de archivos JSON gigantescos importados directamente en el árbol de código:
    - `src/data/master_rag_dataset.json`: **1.33 MB** de JSON crudo sin tipar.
    - `rag/career.json`: **1.39 MB**.
    - `rag/anatomy.json`: **644 KB**.
    Cuando TypeScript intenta generar el árbol sintáctico abstracto (AST) de un archivo JSON de 1.4 MB y tipar cada nodo de forma recursiva dentro de un archivo `.ts`, el consumo de memoria se dispara exponencialmente.
*   **Solución Técnica Obligatoria:** 
    1. Nunca importar archivos `.json` pesados con `import dataset from './dataset.json'`.
    2. Convertir la carga de datasets RAG a lectura dinámica en tiempo de ejecución o fetch local (`fetch('/rag/career.json')` en cliente, o `fs.readFileSync` dentro de endpoints Astro).
    3. Definir interfaces TypeScript estrictas (`RagDomain`, `RagChunk`) y hacer casting explícito en lugar de permitir que TypeScript infiera el esquema de 1.4 MB de datos estáticos.

### 2.2 Presión de Memoria en Dispositivos Móviles (WebGL / Three.js)
*   **Situación:** El visor anatómico (`AnatomyViewer.tsx`) maneja 9 modelos GLB en `public/models/anatomy/`:
    - `overview-skeleton.glb`, `upper-limb.glb`, `lower-limb.glb`, `vertebrae.glb`, `hand.glb`, `colored-skull-base.glb`, etc.
*   **Riesgo:** En teléfonos móviles con menos de 4 GB de RAM (Android de gama media), mantener múltiples mallas 3D complejas en el buffer de la GPU mientras se ejecuta la UI de Astro puede forzar el cierre del contexto WebGL (`webglcontextlost`).
*   **Solución:**
    - Carga perezosa (lazy-loading) estricta: cargar únicamente el GLB de la región seleccionada y purgar de memoria VRAM el modelo anterior llamando a `geometry.dispose()`, `material.dispose()` y liberando los buffers de Three.js.
    - Uso generalizado de compresión Draco y Meshopt para mantener los GLB por debajo de 2 MB por archivo.

---

## 3. Estado Real de Implementación por Dominio (% de Avance Funcional)

A continuación se detalla el estado real del código frente a lo planificado en `docs/architecture/` y `docs/implementation/`:

```
========================================================================================
ESTADO REAL DE IMPLEMENTACIÓN POR DOMINIO (AUDITORÍA EMPÍRICA)
========================================================================================
Dominio          | Implementado | Pendiente / Mock | % Real | Estado Funcional
─────────────────┼──────────────┼──────────────────┼────────┼───────────────────────────
Fitness & Fuerza | Alto         | Modo Guiado      |  85%   | Rutinas, 1494 prescripc.,
                 |              | Adapt. Lesiones  |        | volumen, DUP, RPE activo.
─────────────────┼──────────────┼──────────────────┼────────┼───────────────────────────
Anatomía 3D      | Alto         | Subgrupos c4     |  80%   | 9 GLBs, mapeo muscular,
                 |              | Nervios / bursas |        | ROM articular, visor Three.
─────────────────┼──────────────┼──────────────────┼────────┼───────────────────────────
Nutrición        | Medio-Alto   | Conex. recetas   |  75%   | Calculadora macros, gasto
                 |              | Micronutrientes  |        | kcal, fisiología femenina.
─────────────────┼──────────────┼──────────────────┼────────┼───────────────────────────
Cardio           | Medio        | Sesión en vivo   |  65%   | Presets METs, Daniels VDOT,
                 |              | Conexión GPS/BLE |        | zonas E/M/T/I/R.
─────────────────┼──────────────┼──────────────────┼────────┼───────────────────────────
Laboral / Career | Medio-Alto   | Scraping vacant. |  70%   | Pipeline kanban, 47 docs,
                 |              | CV procedural UI |        | scorecard ofertas, tracker.
─────────────────┼──────────────┼──────────────────┼────────┼───────────────────────────
Portafolio / Web | Alto         | Assets finales   |  85%   | TwinSight breakdown, web
                 |              | Sprint doc-33    |        | pública, simulador ArtStat.
─────────────────┼──────────────┼──────────────────┼────────┼───────────────────────────
Idiomas (DE/EN)  | Medio-Alto   | Simulacros Goethe|  75%   | Motor SM-2, vocabularyStore,
                 |              | Reconocim. voz EN|        | A1.1 alemán, escenarios EN.
─────────────────┼──────────────┼──────────────────┼────────┼───────────────────────────
Clínico / TDAH   | Medio        | Cableado unblock |  60%   | ClinicalExecutionHub listo,
                 |              | Conex. biofeedb. |        | protocolos CBT, falta wire.
─────────────────┼──────────────┼──────────────────┼────────┼───────────────────────────
Hoy (Orquestac.) | Medio        | Feed unificado   |  60%   | todayAdapter operativo,
                 |              | EventBus reactivo|        | falta integrar todos stores.
─────────────────┼──────────────┼──────────────────┼────────┼───────────────────────────
Servicios 3D     | Muy Alto     | Pagos reales     |  90%   | Cotizador paramétrico,
                 |              | Web pública live |        | rate card doc 03, previews.
─────────────────┼──────────────┼──────────────────┼────────┼───────────────────────────
Gastronomía      | Bajo         | Recetas completas|  20%   | Esqueleto /app/gastronomy,
                 |              | Cocina inteligent|        | 2 recetas, requiere rehacer.
─────────────────┼──────────────┼──────────────────┼────────┼───────────────────────────
TOTAL PROYECTO   | SÓLIDO       | EN TRANSICIÓN    |  72%   | NÚCLEO COMPILANDO Y TESTEADO
========================================================================================
```

---

## 4. Análisis de Viabilidad Técnica

### 4.1 ¿Puede esta app funcionar como un Segundo Cerebro autónomo?
**SÍ**, pero la viabilidad técnica depende de no cruzar la línea hacia la sobre-ingeniería de servidor.

1. **Viabilidad de Funcionamiento 100% Client-Side:**
   - La decisión de no requerir un servidor Node.js backend permanente para el funcionamiento diario es brillante. Al almacenar el estado en IndexedDB y resolver las reglas con TypeScript puro, la app puede desplegarse en GitHub Pages, Cloudflare Pages o correr localmente en `localhost` con cero costos de hosting y latencia de 0 ms.
2. **Viabilidad del RAG Estático:**
   - El motor de RAG en cliente (`ragEngine.ts`) basado en palabras clave y chunks ponderados con BM25 es ligero y no depende de APIs externas de embeddings. Funciona de manera instantánea y es 100% privado.
3. **Viabilidad de la IA como Capa Opcional:**
   - Que la aplicación no se rompa si no hay conexión a internet o si no hay API key de Gemini configurada (`501 Not Implemented` con degradación elegante) garantiza que el sistema sea resistente a cambios en los proveedores de modelos.

### 4.2 Riesgos Técnicos Principales
1. **Pérdida accidental de datos en navegador:** Si el usuario borra la caché del navegador o el sistema operativo limpia el almacenamiento de IndexedDB por falta de espacio en disco, los registros de entrenamiento o aplicaciones laborales podrían perderse si no existe un mecanismo de **auto-export periódico a JSON local o Git**.
2. **Fragmentación del Estado en Zustand:** Hay más de 8 stores independientes (`careerStore`, `activeProgramStore`, `clinicalStore`, `vocabularyStore`, `portfolioBoardStore`, `portfolioLaunchStore`, `serviceStore`, `nutritionStore`). Si un evento en `clinicalStore` (e.g. energía baja: 2/5) debe modificar el volumen en `activeProgramStore`, actualmente no existe un mediador central que orqueste la reactividad cruzada de forma declarativa.

---

## 5. Dictamen Técnico y Recomendaciones de Refuerzo

1. **Crear el Mediador de Eventos Global (EventBus):** Unificar la comunicación entre stores mediante el `EventBus` ya diseñado en `src/lib/events/eventBus.ts`, permitiendo que cualquier mutación emita un evento tipado que otros stores puedan suscribir sin acoplamiento directo.
2. **Implementar Snapshot Automático de Datos:** Desarrollar un servicio de respaldo automático en `src/lib/storage/backupService.ts` que genere una copia JSON descargable o la sincronice con un archivo local del repositorio cada vez que se complete una sesión de entrenamiento o se registre una postulación laboral.
3. **Optimizar Carga de Datasets RAG:** Eliminar las importaciones estáticas de archivos JSON superiores a 500 KB del bundle principal de JavaScript, trasladándolos a la carpeta `public/rag/` y cargándolos bajo demanda con compresión gzip.
