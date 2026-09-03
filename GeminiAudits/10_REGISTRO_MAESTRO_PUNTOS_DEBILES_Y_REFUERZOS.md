# 10 — Registro Maestro de Puntos Débiles, Gaps y Plan de Refuerzo

> **Documento:** `GeminiAudits/10_REGISTRO_MAESTRO_PUNTOS_DEBILES_Y_REFUERZOS.md`  
> **Objetivo:** Catálogo exhaustivo de vulnerabilidades técnicas, huecos conceptuales, fricciones operativas y contramedidas de ingeniería para blindar el Segundo Cerebro.

---

## 1. Metodología de Auditoría de Vulnerabilidades

Cada punto débil ha sido diagnosticado examinando directamente el código fuente (`src/`), los archivos de configuración, la suite de pruebas y la documentación operativa en `docs/`. Se clasifican bajo cuatro niveles de severidad:
*   **CRÍTICO (Severidad 1):** Amenaza la integridad de datos, provoca fallos de compilación/memoria o induce sobrecarga cognitiva que bloquea el uso de la aplicación.
*   **ALTO (Severidad 2):** Desconexión funcional entre módulos, datos que no se actualizan o falta de automatización en tareas prioritarias.
*   **MEDIO (Severidad 3):** Deuda técnica, duplicación de código, falta de pruebas en casos límite o UI incompleta.
*   **BAJO (Severidad 4):** Mejoras de pulido estético, documentación pendiente o features de conveniencia futura.

---

## 2. Matriz Maestra de Puntos Débiles y Contramedidas

```
===================================================================================================================================
MATRIZ MAESTRA DE VULNERABILIDADES Y PLAN DE REFUERZO DE INGENIERÍA
===================================================================================================================================
#  | Área           | Severidad | Punto Débil / Vulnerabilidad Detectada          | Causa Raíz / Evidencia               | Plan de Refuerzo Técnico Obligatorio
───┼────────────────┼───────────┼────────────────────────────────────────────────┼──────────────────────────────────────┼──────────────────────────────────────────────
01 | Arquitectura   | CRÍTICO   | Fallo de memoria en compilación (OOM Node.js)  | TSServer parsea JSONs gigantes       | Dejar de importar `master_rag_dataset.json`
   |                |           | que exige `max-old-space-size=8192`.           | (1.33 MB) en el AST de TypeScript.   | directamente. Cargar vía fetch/runtime.
───┼────────────────┼───────────┼────────────────────────────────────────────────┼──────────────────────────────────────┼──────────────────────────────────────────────
02 | Seguridad      | CRÍTICO   | Datos clínicos y de salud mental en texto      | `clinicalStore` y `userState` usan   | Implementar `secureStorage.ts` con WebCrypto
   |                |           | plano sin cifrado en LocalStorage/IndexedDB.   | persistencia por defecto de Zustand. | (AES-GCM-256) derivado de passphrase.
───┼────────────────┼───────────┼────────────────────────────────────────────────┼──────────────────────────────────────┼──────────────────────────────────────────────
03 | Orquestación   | CRÍTICO   | Fatiga ejecutiva del "Puente Humano" (TDAH).   | Copiar/pegar prompts kilométricos    | Crear scripts CLI de un solo paso que
   |                |           | El usuario abandona la curación por fricción.  | entre navegador y worktrees manuales.| empaqueten contexto y sincronicen outputs.
───┼────────────────┼───────────┼────────────────────────────────────────────────┼──────────────────────────────────────┼──────────────────────────────────────────────
04 | Career         | ALTO      | Los 37 documentos maestros de carrera viven    | `JobsPipeline.tsx` y `Company-       | Ingestar `docs/11` (empresas) y `docs/17`
   | (Prioridad 1)  |           | en Markdown y no alimentan la app interactiva. | Database.tsx` usan fixtures mock.    | (CV) como base de datos dinámica en JSON.
───┼────────────────┼───────────┼────────────────────────────────────────────────┼──────────────────────────────────────┼──────────────────────────────────────────────
05 | Career         | ALTO      | El portafolio público no refleja los commits   | Métricas estáticas hardcodeadas      | Integrar Octokit (API de GitHub) para jalar
   | (Prioridad 1)  |           | ni el avance real de código en GitHub.         | en las tarjetas de proyecto.         | commits, releases y métricas de TwinSight.
───┼────────────────┼───────────┼────────────────────────────────────────────────┼──────────────────────────────────────┼──────────────────────────────────────────────
06 | Fitness        | ALTO      | La sesión del día no se puede ejecutar guiada  | `TodayRoutineStack` muestra lista,   | Construir `GuidedSessionRunner.tsx`: pantalla
   | (Prioridad 2)  |           | serie a serie con descansos cronometrados.     | pero no hay modo entrenamiento activo| completa, video, cronómetro y registro RPE.
───┼────────────────┼───────────┼────────────────────────────────────────────────┼──────────────────────────────────────┼──────────────────────────────────────────────
07 | Biomecánica    | ALTO      | No hay recálculo automático de la rutina ante  | El reporte de dolor en `AnatomyViewer`| Conectar `anatomyGraph.ts` con el motor de
   | (Prioridad 2)  |           | reporte de dolor o sospecha de lesión.         | no veta ejercicios contraindicados.  | sustitución de ejercicios de la sesión.
───┼────────────────┼───────────┼────────────────────────────────────────────────┼──────────────────────────────────────┼──────────────────────────────────────────────
08 | Fitness        | MEDIO     | Cero conectividad con sensores externos        | Registro 100% manual de series,      | Crear módulo Web Bluetooth (BLE) en navegador
   |                |           | (bandas de frecuencia cardíaca o básculas).    | reps y peso.                         | para leer pulsómetros Polar/Garmin.
───┼────────────────┼───────────┼────────────────────────────────────────────────┼──────────────────────────────────────┼──────────────────────────────────────────────
09 | Orquestación   | MEDIO     | Deriva (drift) entre los 14 worktrees locales  | Ramas `agent/*` desincronizadas      | Script `npm run worktrees:sync` que mergea
   |                |           | que genera conflictos de merge periódicos.     | de los avances de `main`.            | `main` de forma segura en los 14 árboles.
───┼────────────────┼───────────┼────────────────────────────────────────────────┼──────────────────────────────────────┼──────────────────────────────────────────────
10 | Estado Global  | MEDIO     | Fragmentación en más de 8 stores Zustand sin   | Cada store muta su estado en         | Conectar todos los stores al `EventBus`
   |                |           | comunicación reactiva cruzada declarativa.     | aislamiento sin avisar a los demás.  | centralizado para emitir/escuchar eventos.
───┼────────────────┼───────────┼────────────────────────────────────────────────┼──────────────────────────────────────┼──────────────────────────────────────────────
11 | RAG            | MEDIO     | Búsqueda BM25 limitada para consultas          | `ragEngine.ts` busca coincidencias   | Añadir vectorización ligera en cliente
   |                |           | semánticas o conceptuales complejas.           | léxicas pero no sinónimos médicos.   | o híbrido BM25 + mapa de sinónimos anatómicos.
───┼────────────────┼───────────┼────────────────────────────────────────────────┼──────────────────────────────────────┼──────────────────────────────────────────────
12 | IA Worker      | MEDIO     | El worker de Cloudflare (`worker/src/ai/`)     | Código escrito pero sin endpoint     | Desplegar worker en Cloudflare Workers o
   |                |           | no está desplegado en producción.              | live en la nube configurado.         | usar modo local BYOK vía proxy de desarrollo.
───┼────────────────┼───────────┼────────────────────────────────────────────────┼──────────────────────────────────────┼──────────────────────────────────────────────
13 | Gastronomía    | MEDIO     | La sección `/app/gastronomy` está incompleta   | Solo 2 recetas básicas y rutas de    | Rediseñar módulo con base en Kenji López-Alt,
   |                |           | y desconectada de los macros de nutrición.     | navegación rotas heredadas.          | RP Kitchen y micronutrientes esenciales.
───┼────────────────┼───────────┼────────────────────────────────────────────────┼──────────────────────────────────────┼──────────────────────────────────────────────
14 | Hardware       | BAJO      | No existe módulo de seguimiento de hardware,   | Ausencia de modelos de datos         | Diseñar esquema `RigSpec` y laboratorio de
   |                |           | periféricos ni laboratorio de videojuegos.     | para activos de computación.         | pruebas de rendimiento de shaders/WebGL.
───┼────────────────┼───────────┼────────────────────────────────────────────────┼──────────────────────────────────────┼──────────────────────────────────────────────
15 | Datos / Backup | ALTO      | Riesgo de pérdida de datos por limpieza de     | Todo reside en memoria volátil de    | Servicio de respaldo automático que descargue
   |                |           | caché o reinstalación del navegador.           | IndexedDB del navegador cliente.     | un `backup_latest.json` o comitee a Git.
===================================================================================================================================
```

---

## 3. Puntos Ciegos No Considerados Previamente (Nuevos Hallazgos)

Durante el análisis profundo de los archivos del proyecto, se identificaron **4 puntos ciegos** que no habían sido advertidos en las discusiones previas:

### Punto Ciego A: La "Paradoja del RPE Subjetivo" en Entrenamiento de Fuerza
*   **Problema:** Steven Low, Jeff Nippard y Mike Israetel basan sus progresiones en la escala RPE (Rating of Perceived Exertion) o RIR (Reps in Reserve). Sin embargo, personas con fatiga cognitiva o sobrecarga ejecutiva tienden a **subestimar masivamente su RIR** (creen que están a RIR 1 cuando en realidad están a RIR 4, o viceversa, entrenan al fallo real provocando fatiga excesiva del SNC).
*   **Solución:** Integrar una regla de calibración periódica: cada 4 semanas, en un ejercicio monoarticular seguro (e.g. extensiones de tríceps o bíceps en polea), realizar 1 serie de comprobación al fallo técnico absoluto para re-calibrar la percepción del esfuerzo del usuario.

### Punto Ciego B: El Envejecimiento Silencioso de las Ofertas Laborales
*   **Problema:** Una vacante de trabajo en el pipeline de carrera pierde el 80% de probabilidad de respuesta si no se aplica en las primeras **72 horas** desde su publicación.
*   **Solución:** Añadir un campo de caducidad en `liveJobFeed.json`. Toda vacante con más de 7 días sin postulación pasa a estado "archivada/baja probabilidad", evitando que el usuario gaste energía en vacantes ya cerradas.

### Punto Ciego C: El Cuello de Botella del Renderizado WebGL en Portátiles con Batería
*   **Problema:** Cuando el usuario corre la aplicación en un portátil desconectado de la corriente, Three.js corre por defecto a 60 FPS fijos en un bucle continuo de `requestAnimationFrame`, lo que agota la batería en menos de 90 minutos y hace que la CPU reduzca su frecuencia por temperatura (*thermal throttling*).
*   **Solución:** Implementar **renderizado a demanda (On-Demand Rendering)** en `AnatomyViewer.tsx` y `ModelPreview.tsx`. Three.js solo debe redibujar la escena cuando el usuario interactúa (órbita, zoom, clic) o durante animaciones activas, deteniendo el bucle cuando la escena está estática.

### Punto Ciego D: La Falta de un "Modo Sin Conexión Absoluto" para Viajes
*   **Problema:** Muchas dependencias de fuentes tipográficas (Google Fonts: Inter, Roboto) y librerías externas de iconos intentan resolver URLs remotas en la primera carga.
*   **Solución:** Empaquetar todas las fuentes tipográficas woff2 y los iconos de Lucide como assets locales dentro de `public/fonts/` y `src/components/ui/icons/`, garantizando que la app cargue instantáneamente incluso en modo avión.
