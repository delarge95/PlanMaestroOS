# 11 — Roadmap Estratégico Recalibrado (Corto, Mediano y Largo Plazo)

> **Documento:** `GeminiAudits/11_ROADMAP_ESTRATEGICO_CORTO_MEDIANO_LARGO_PLAZO.md`  
> **Objetivo:** Secuenciación cronológica y operativa para la consolidación, escalado y maduración definitiva del Segundo Cerebro (Plan Maestro OS).

---

## 1. Principio de Secuenciación: De la Estabilidad al Super-Poder

Un error común en proyectos ambiciosos es construir inteligencia avanzada sobre cimientos inestables. Este roadmap aplica el principio de **Ingeniería por Capas Concéntricas**:

```
                       ┌────────────────────────────────────────┐
                       │          FASE 4: ECOSISTEMA Y PWA      │
                       │   Wearables, Básculas, Cocina, Gaming  │
                       └───────────────────▲────────────────────┘
                                           │
                       ┌───────────────────┴────────────────────┐
                       │       FASE 3: EL GRAFO DE VIDA VIVO    │
                       │     Life Graph, Obsidian Sync, IA Draft│
                       └───────────────────▲────────────────────┘
                                           │
                       ┌───────────────────┴────────────────────┐
                       │   FASE 2: MOTORES ACTIVOS (CAREER/FIT) │
                       │    CV Procedural, Modo Guiado, Triaje  │
                       └───────────────────▲────────────────────┘
                                           │
                       ┌───────────────────┴────────────────────┐
                       │      FASE 1: BLINDAJE Y ESTABILIDAD    │
                       │    Fix OOM, EventBus, Backup, Worktrees│
                       └────────────────────────────────────────┘
```

---

## 2. Cronograma de Fases de Ejecución

### FASE 1: Blindaje de Infraestructura y Estabilización (Semanas 1 a 2)
**Meta:** Eliminar la fricción técnica, el riesgo de pérdida de datos y los cuellos de botella de memoria en compilación.

*   [ ] **1.1 Desacoplar JSONs gigantes del compilador:** Convertir `master_rag_dataset.json` y `rag/career.json` a carga dinámica vía fetch/runtime, resolviendo permanentemente el problema de memoria de Node.js en `astro check`.
*   [ ] **1.2 Script de sincronización global de worktrees:** Crear `scripts/sync_worktrees.sh` para mantener las 14 ramas sincronizadas con `main` sin fricción manual.
*   [ ] **1.3 Integración del EventBus central:** Conectar los stores de Zustand al `eventBus.ts` para que las mutaciones de un dominio (ej. energía clínica o dolor físico) emitan eventos globales capturables.
*   [ ] **1.4 Servicio de Respaldo Local Automático:** Implementar `backupService.ts` para exportar automáticamente una instantánea JSON cifrada del estado del usuario tras cada sesión.
*   **Checkpoint de Salida:** `astro check` corre sin flags de memoria adicionales; 483 tests pasando; estado persistente respaldado en 1 clic.

---

### FASE 2: Activación de los Motores Prioritarios (Semanas 3 a 6)
**Meta:** Transformar la sección Laboral (Prioridad 1) y Fitness (Prioridad 2) en herramientas interactivas diarias.

#### Eje Laboral (Career Engine):
*   [ ] **2.1 Base de datos interactiva de empresas:** Ingestar las empresas del documento 11 en `CompanyDatabase.tsx`, clasificadas por Tier 1, 2 y 3 con reclutadores y notas técnicas.
*   [ ] **2.2 Generador modular de CV (CV Composer):** Motor TypeScript que ensambla las 4 variantes de CV del doc 17 y exporta un HTML/PDF limpio de 1 página según el rol objetivo.
*   [ ] **2.3 Sincronización con GitHub:** Script que consume la API de GitHub para mostrar métricas reales de commits, releases y demos en las tarjetas de proyecto (TwinSight, ARA Framework).
*   [ ] **2.4 Ingesta de vacantes:** Conectar el feed de vacantes extraídas con scoring de compatibilidad y alerta de caducidad (72h).

#### Eje Fitness y Biomecánica:
*   [ ] **2.5 Modo de entrenamiento guiado (`GuidedSessionRunner`):** Interfaz móvil set-a-set con cronómetro de descanso configurable, videos de técnica y registro inmediato de reps/peso/RPE.
*   [ ] **2.6 Algoritmo de triaje y reemplazo de lesiones:** Formulario interactivo de síntomas que identifica sospecha de lesión (tendón, ligamento, bursa, nervio) y recalcula la rutina del día vetando ejercicios lesivos.
*   [ ] **2.7 Split multi-objetivo:** Generador de microciclos concurrentes (calistenia, hipertrofia, cardio Daniels, danza, MMA) sin interferencia catabólica.
*   **Checkpoint de Salida:** El usuario entrena con el modo guiado de la app y aplica a 1 empresa con CV procedural generado por el sistema.

---

### FASE 3: El Grafo de Vida Vivo y la Capa de Inteligencia (Semanas 7 a 10)
**Meta:** Unificar todos los dominios mediante el Grafo de Conocimiento y desplegar la IA proactiva sin alucinaciones.

*   [ ] **3.1 Motor de Grafo en Memoria (`LifeGraphEngine`):** Indexar nodos y aristas tipadas entre ejercicios, músculos, empresas, habilidades, proyectos y reglas.
*   [ ] **3.2 Sincronización con Obsidian:** Script de compilación que lee los archivos Markdown en `_obsidian/` y genera el grafo ejecutable para la aplicación web.
*   [ ] **3.3 Despliegue del Worker IA en Cloudflare:** Poner en producción el endpoint `/ai/draft` con validación estricta de esquemas Zod y prompts contextuales con fuentes bibliográficas.
*   [ ] **3.4 Interfaz `AiDraftReview` activa:** Generación de borradores de mensajes a reclutadores y explicaciones de rutinas con botones obligatorios de Editar / Aprobar / Descartar.
*   [ ] **3.5 Daily Briefing unificado en "Hoy":** Integración matutina de energía clínica, dolor articular, racha de idiomas y postulación laboral prioritaria.
*   **Checkpoint de Salida:** La pantalla de Hoy responde proactivamente a las métricas del usuario sin necesidad de consultas manuales; el grafo es navegable en Obsidian y en la app.

---

### FASE 4: Ecosistema Autónomo, Expansión y Sensores (Semanas 11 a 16)
**Meta:** Extender la app a los dominios complementarios, soporte para dispositivos externos y empaquetado PWA.

*   [ ] **4.1 Módulo de Gastronomía Profesional:** Biblioteca de recetas científicas (Kenji López-Alt / RP Kitchen), control de micronutrientes esenciales y catálogo de electrodomésticos de cocina inteligente.
*   [ ] **4.2 Módulo de Computación, Hardware y Gaming:** Registro de especificaciones de la Workstation, pruebas de rendimiento de WebGL/shaders y laboratorio de mecánicas de juego.
*   [ ] **4.3 Conectividad Web Bluetooth (BLE):** Lectura en tiempo real de bandas de frecuencia cardíaca (Polar H10 / Garmin) durante las sesiones de cardio y calistenia.
*   [ ] **4.4 Empaquetado PWA (Progressive Web App):** Instalación como aplicación nativa en Windows, macOS y Android con soporte 100% offline y notificaciones locales del sistema.
*   **Checkpoint de Salida:** Segundo Cerebro total operativo, autosuficiente, privado, multiplataforma y conectado al cuerpo del usuario mediante sensores.
