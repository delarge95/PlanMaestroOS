# 08 — Diseño de Interfaz, Design System `ds-*` y Soporte Neurodivergente / TDAH

> **Documento:** `GeminiAudits/08_DISENO_UX_SISTEMA_DS_Y_SOPORTE_TDAH.md`  
> **Objetivo:** Auditoría del sistema de diseño unificado `ds-*`, optimización de carga cognitiva, principios de diseño orientados a TDAH y fatiga ejecutiva, y arquitectura de la vista "Hoy".

---

## 1. El Fundamento Clínico del Diseño de Interfaz

A diferencia de las herramientas comerciales tradicionales (diseñadas para maximizar el tiempo en pantalla y la retención del usuario), **Plan Maestro OS está diseñado bajo los principios de la UX Clínicamente Informada (Clinically-Informed UX)**.

El reporte clínico del usuario (`reporte_clinico_neurodesarrollo_ansiedad.pdf` y `plan_accion_tdah_ansiedad_social-1.pdf`) documenta tres condiciones clave que modulan directamente cómo debe ser la interfaz gráfica:
1. **Déficit de Atención con Hiperactividad (TDAH - Perfil Inatento/Ejecutivo):** Vulnerabilidad extrema a la dispersión visual, parálisis por análisis ante listas largas y dificultad para iniciar tareas complejas (fricción de arranque).
2. **Ansiedad Social y Bloqueo de Rendimiento:** Resistencia psicológica a postulaciones laborales frías, exposiciones públicas y evaluaciones técnicas imprevistas.
3. **Fluctuación de Fatiga y Energía:** Variabilidad sustancial en los niveles de energía diaria, donde exigir una rutina rígida de 90 minutos en un día de baja energía provoca abandono total del sistema por frustración.

---

## 2. Los 5 Mandamientos de UX para Neurodivergencia en Plan Maestro OS

```
┌────────────────────────────────────────────────────────────────────────┐
│             MANDAMIENTO 1: UNA SOLA PREGUNTA EN PANTALLA               │
│  Cada vista principal debe responder sin scroll ni ambigüedad:         │
│  "¿QUÉ TENGO QUE HACER AHORA MISMO Y POR QUÉ?"                         │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│            MANDAMIENTO 2: EL BOTÓN DE RESCATE DE INERCIA               │
│  Ante bloqueo mental, un solo clic activa el "Día Mínimo Viable":      │
│  Reduce todas las cargas a lo indispensable (15 min) para salvar racha.│
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│            MANDAMIENTO 3: CERO FRICCIÓN EN EL REGISTRO                 │
│  Registrar una serie o un vaso de agua debe tomar < 2 segundos.        │
│  Menos clics = Mayor tasa de adherencia a largo plazo.                 │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│            MANDAMIENTO 4: JERARQUÍA VISUAL CON TOKENS SEMÁNTICOS       │
│  Uso de clases `ds-*` consistentes. El color informa el estado, no es  │
│  mera decoración: Acento = Acción, Warning = Riesgo, Muted = Secundario│
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│            MANDAMIENTO 5: EXPOSICIÓN GRADUAL CONTRA LA ANSIEDAD        │
│  Las tareas intimidantes (e.g. outreach a reclutadores) se dividen en  │
│  micro-pasos con plantillas pre-aprobadas y soporte paso a paso.       │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Auditoría del Design System (`ds-*`) y Componentes Primitivos

En el **Despacho 4** se inició la migración masiva de estilos inline dispersos hacia el sistema de tokens semánticos de `src/styles/tokens.css` y clases utilitarias `ds-*`.

### 3.1 Componentes Consolidados y su Rol
*   `Card` (`className="ds-card"`): Contenedor con radio de 12 px, borde sutil (`rgba(255,255,255,0.08)` en dark mode) y padding estandarizado de 16 px. Elimina la fatiga visual de bordes inconsistentes.
*   `Chip` (`className="ds-chip"`): Filtros circulares con micro-interacción de selección clara (`data-active="true"`).
*   `StatBox` (`className="ds-stat"`): Presentación de números clave (series completadas, kcal quemadas, días de racha) con tipografía tabular para evitar bailes de layout al actualizar datos.
*   `Toggle` (`className="ds-toggle"`): Interruptor físico que da retroalimentación táctil instantánea para decisiones binarias.
*   `ds-stack` y `ds-row-between`: Utilidades de layout con separación de gaps tokenizados (`var(--space-sm)`, `var(--space-md)`).

### 3.2 Paleta de Colores y Modo Oscuro Saludable
El diseño utiliza un esquema de alto contraste funcional sin generar fatiga visual:
*   **Fondo Primario:** `#0b0b0f` (Negro OLED profundo, minimiza emisión de luz azul nocturna).
*   **Superficie de Tarjeta:** `#16161a` con borde de `1px solid rgba(255, 255, 255, 0.08)`.
*   **Acento de Acción:** `#0a84ff` (Azul eléctrico de alta visibilidad pero sin agresividad cromática).
*   **Éxito / Confirmación:** `#30d158` (Verde suave).
*   **Alerta de Carga / Dolor:** `#ff9f0a` (Ámbar cálido).
*   **Infracción Crítica:** `#ff453a` (Rojo coral).

---

## 4. La Pantalla "Hoy" (`src/pages/app/today.astro`) como Sistema Operativo Diario

La pantalla **Hoy** es el centro neurálgico donde converge todo el grafo. No debe mostrar dashboards abstractos, sino una **secuencia cronológica ejecutiva de 3 fases**:

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. DAILY BRIEFING MATUTINO (08:00 - 08:15)                             │
│    - Check-in de 3 toques: Horas de sueño, Nivel de Energía (1-5),     │
│      Estado de Dolor/Molestias Físicas.                                │
│    - Determinación del Modo del Día: Normal | Extendido | MinViable.   │
│    - Presentación del "Top 3 Absoluto": 1 Laboral, 1 Físico, 1 Idioma. │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 2. LIVE TRACKER INTRA-DÍA (Foco en el Bloque Activo)                   │
│    - Modo Entrenamiento Guiado: Serie actual con cronómetro regresivo. │
│    - Bloque de Carrera: 1 postulación personalizada con CV procedural. │
│    - Bloque de Idioma (13:30 - 14:00): 10 tarjetas de vocabulario SM-2.│
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 3. DEBRIEF Y CIERRE VESPERTINO (21:30 - 21:45)                         │
│    - Verificación rápida: ¿Qué se logró hoy?                           │
│    - Registro de kcal reales y cumplimiento de proteína.               │
│    - Vaciado mental de pendientes al buzón de tareas para mañana.      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. El Protocolo "Rescate de Inercia" (Anti-Parálisis Ejecutiva)

Cuando un usuario con TDAH experimenta un bloqueo severo, la simple presencia de una lista de 8 ejercicios de calistenia pesada y 3 postulaciones de trabajo puede provocar una fuga a actividades de evasión (redes sociales, videojuegos no planificados).

### Mecánica del "Día Mínimo Viable" (`minViableMode`):
Al pulsar el botón de rescate:
1. **En Fitness:** El volumen de la sesión se recorta al **Volumen Mantenimiento Mínimo (MEV)** según Israetel y Nippard:
   - De 4 series por ejercicio a **1 sola serie de alta calidad (RIR 1-2)** por patrón principal. Tiempo total: 15 minutos.
2. **En Carrera:** No se pide redactar una postulación completa; solo **guardar 1 vacante en el pipeline** o leer 1 perfil de LinkedIn.
3. **En Idiomas:** Se reduce la sesión a **5 tarjetas rápidas de repaso espaciado** (2 minutos) para mantener la racha viva.
4. **El Impacto Psicológico:** El usuario cierra el día con un sentimiento de **victoria y consistencia**, preservando el hábito y evitando la espiral de culpa del abandono.
