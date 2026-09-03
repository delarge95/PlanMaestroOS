# 04 — Segundo Cerebro Laboral y Career Engine (Prioridad 1)

> **Documento:** `GeminiAudits/04_SEGUNDO_CEREBRO_LABORAL_Y_CAREER_ENGINE.md`  
> **Objetivo:** Diseño y auditoría del sistema operativo de búsqueda laboral, base de datos diaria de empresas, CV y portafolio modulares/procedurales, sincronización con GitHub y motor de monetización continua.

---

## 1. El Diagnóstico del Ecosistema Laboral en el Repo

El repositorio contiene **37 documentos maestros de investigación laboral y de mercado** (de `00_master_audit_blueprint.md` a `36_public_profile_launch_sequence.md`), sumando más de **1.2 megabytes de inteligencia estratégica**.

### 1.1 La Paradoja Actual
*   **La Fortaleza:** El nivel de detalle es de nivel élite internacional: benchmarks de salarios para contratistas en Colombia (`03_salary_benchmark_and_remote_colombia.md`), mapeo de empresas objetivo por tiers (`11_company_targets_job_boards_recruiters.md`), variantes de CV milimétricamente redactadas (`17_cv_base_and_role_variants.md`), guías de defensa técnica de entrevistas (`23_interview_answer_bank.md`) y scorecard matemático para evaluar ofertas (`24_offer_evaluation_scorecard.md`).
*   **El Hueco Operativo:** Toda esta inteligencia vive en archivos Markdown estáticos y hojas de cálculo (`25_application_tracker_template.xlsx`). Aunque la aplicación tiene un componente `JobsPipeline.tsx` y `CompanyDatabase.tsx` en `src/components/career/`, **están parcialmente desconectados de los documentos maestros**. La aplicación aún no funciona como el "Centro de Mando Activo" que el usuario necesita diariamente.

---

## 2. Arquitectura del Career Engine: De Archivos Estáticos a Sistema Vivo

Para cumplir el requisito prioritario del usuario, el Career Engine se divide en 5 subsistemas automatizados e interconectados:

```
┌────────────────────────────────────────────────────────────────────────┐
│               1. INGESTA Y MONITOREO DIARIO DE MERCADO                 │
│  - Gemini Spark / Scraper: LinkedIn, Wellfound, Remotive, Otta        │
│  - Keywords: "Unity WebGL", "Technical Artist", "Real-Time 3D", "CAD" │
│  - Feed diario normalizado en `src/data/career/liveJobFeed.json`       │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│               2. BASE DE DATOS MAESTRA DE EMPRESAS Y VACANTES          │
│  - Empresas clasificadas en Tier 1, Tier 2, Tier 3                     │
│  - Historial inmutable de aplicaciones y estados (Kanban interactivo) │
│  - Scorecard automático de Fit Técnico y Salarial (doc 24)             │
└───────────────────┬────────────────────────────────┬───────────────────┘
                    │                                │
                    ▼                                ▼
┌──────────────────────────────────────┐  ┌──────────────────────────────┐
│  3. GENERADOR PROCEDURAL DE CV Y     │  │  4. SINCRONIZACIÓN CON       │
│     PORTAFOLIO PERSONALIZADO         │  │     GITHUB Y ASSETS 3D       │
│ - Ensamblador modular por rol (doc17)│  │ - Octokit API: commits, tags │
│ - Inyección de proyectos idóneos     │  │ - Métricas TwinSight live    │
│ - Export PDF / Web pública a medida  │  │ - Demos WebGL embebibles     │
└───────────────────┬──────────────────┘  └──────────────┬───────────────┘
                    │                                    │
                    └──────────────────┬─────────────────┘
                                       │
                                       ▼
┌────────────────────────────────────────────────────────────────────────┐
│          5. RADAR DE HABILIDADES, FORMACIÓN Y ARBITRAJE SALARIAL       │
│  - Inventario 157 cursos (`Courses 2025.xlsx`) priorizados por ROI     │
│  - Detección de habilidades emergentes (OpenUSD, WebGPU, Shaders)      │
│  - Trazabilidad de crecimiento monetario: $/hora vs. Stack dominado    │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Especificación Detallada de los Módulos

### 3.1 Base de Datos Dinámica de Empresas y Aplicaciones (`CompanyDatabase` 2.0)
La base de datos no debe ser un mock de Epic/Ubisoft. Debe indexar las **empresas reales documentadas en el doc 11**:
1. **Tier 1 (Target Primario - Agencias B2B y Visualizadores 3D):** Empresas que desarrollan gemelos digitales, configuradores WebGL y aplicaciones industriales (e.g., marcas automotrices, estudios de arquitectura técnica, agencias de WebGL europeas y estadounidenses).
2. **Tier 2 (Game Studios y XR Mid-Size):** Estudios de videojuegos independientes medianos y empresas de realidad virtual/aumentada donde el rol de Junior/Mid Technical Artist tiene alta demanda.
3. **Tier 3 (Gran Escala / Límite):** AAA Games y Big Tech (para postulaciones a largo plazo o de aprendizaje).

Cada registro de empresa en la aplicación debe almacenar:
*   `companyId`: Slug único.
*   `tier`: 1 | 2 | 3.
*   `cultureNotes`: Enfoque de ingeniería, tamaño de equipo, software primario (Unity, Blender, Houdini, Unreal, Three.js).
*   `contacts`: Reclutadores, líderes técnicos con enlaces directos a LinkedIn.
*   `activeJobs`: Vacantes detectadas con fecha de extracción y salario estimado en USD.
*   `applicationHistory`: Lista ordenada de postulaciones con versión de CV utilizada, fecha de envío, respuesta y notas de seguimiento.

### 3.2 CV y Portafolio Modulares Procedurales (Tailored Resume Engine)
El usuario no debe mantener 5 archivos Word o PDF separados. El sistema implementa un **motor de ensamblado modular en TypeScript** (`cvComposer.ts`):

#### Las 4 Variantes Maestras de Posicionamiento (derivadas del doc 02 y doc 17):
1. **Variante A — Unity Technical Artist:** Énfasis en shaders (HLSL/Shader Graph), optimización de rendimiento (draw calls, batching, GPU profiling, LODs) y pipelines de importación 3D.
2. **Variante B — WebGL / Interactive 3D Developer:** Énfasis en TypeScript, Three.js, React, optimización de bundles para navegador y el caso de estudio **TwinSight X500**.
3. **Variante C — CAD-to-Realtime Visualization Engineer:** Énfasis en limpieza de geometría industrial, retopología, baking de normales, visualización fotorrealista en tiempo real y configuradores de producto.
4. **Variante D — Tools & Pipeline Developer:** Énfasis en scripts de automatización en Python para Blender/Unity, herramientas asistidas por IA (Framework ARA) y optimización de flujos de trabajo de equipo.

#### Algoritmo de Personalización por Empresa:
```typescript
interface CVRequest {
  companyId: string;
  targetRole: 'tech_artist' | 'webgl_dev' | 'cad_visualization' | 'tools_dev';
  emphasizeKeywords: string[];
}

// El compositor selecciona dinámicamente los bullets de experiencia, proyectos destacados
// y tecnologías del archivo maestro (doc 17) para generar un HTML/PDF imprimible de 1 página.
const customCV = cvComposer.generate({
  companyId: 'pixel-craft-studios',
  targetRole: 'tech_artist',
  emphasizeKeywords: ['Shaders', 'Mobile Optimization', 'Unity WebGL']
});
```

### 3.3 Sincronización Automática con GitHub (Project Live Tracker)
Para que el portafolio y los CV se actualicen solos con el avance real:
*   Un script de integración con la **API de GitHub (Octokit)** consulta los repositorios del usuario:
    - `TwinSight-X500`
    - `ARA-Framework`
    - `PlanMaestroOS`
    - `Blender-Pipeline-Scripts`
*   **Métricas en Vivo Extraídas:**
    - Último commit y fecha de actividad real.
    - Tags de versión y releases publicados.
    - Estado de compilación de las GitHub Pages asociadas (demostración interactiva en vivo).
    - Estadísticas cuantitativas de código (líneas de TypeScript, C#, Python, shaders).
*   Estas métricas se inyectan automáticamente en las tarjetas del portafolio (`PortfolioSimulator.tsx` y la web pública), eliminando la necesidad de actualizar textos manualmente cuando se lanza una mejora a un repositorio.

### 3.4 Radar de Habilidades y Monetización Continua
El objetivo no es solo aprender, sino **aumentar el valor de mercado por hora**:
*   El sistema indexa los **157 cursos de `Courses 2025.xlsx`** clasificados en 9 áreas: 3D Art (78), VFX (32), Game Dev (21), Compositing (10), AI (7), etc.
*   **Regla de Negocio Determinista:** Queda prohibido iniciar un curso que no produzca un **artefacto visible para el portafolio en menos de 14 días** (doc 06 §1).
*   **Monitoreo Salarial:** La app compara las habilidades actuales del usuario con los rangos salariales del documento 03 ($2,000 – $4,500 USD/mes remoto). Si una habilidad emergente (como *HLSL compute shaders* o *WebGPU*) empieza a aparecer en más del 30% de las vacantes de Tier 1, el sistema emite una sugerencia de alta prioridad para convertir un proyecto existente a esa tecnología.

---

## 4. Workflows de Operación Diaria para el Usuario

### Rutina Matutina (15 Minutos):
1. **Revisión del Feed:** La app muestra en la pestaña `Laboral -> Vacantes`:
   - 3 a 5 vacantes nuevas filtradas automáticamente por coincidencia de perfil (>80%).
2. **Selección y Personalización con 1 Clic:**
   - El usuario pulsa *"Aplicar a Empresa X"*.
   - El sistema genera el borrador de CV en PDF con la variante idónea y la plantilla de mensaje de outreach personalizada en inglés (doc 22) citando los proyectos de GitHub relevantes.
3. **Registro en Pipeline:**
   - La postulación se mueve automáticamente a la columna *"Enviada"* del Kanban de aplicaciones con fecha de seguimiento fijada para dentro de 5 días hábiles.
