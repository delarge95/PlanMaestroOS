---
module: 28D_artstation_portfolio_benchmark
status: updated_complete
source_task: A4_retry_accessible_portfolio_benchmark
scope: accessible_portfolios_and_technical_breakdowns
artstation_direct_access: blocked_by_cloudflare
date: 2026-06-11
owner_profile: Alexander Woodcock Salomon
target_positioning:
  - Real-Time 3D Developer
  - Unity Technical Artist
  - Unity WebGL Developer
  - Technical Visualization Developer
  - XR Developer
  - Simulation Developer
  - Tools / Pipeline Developer
---

# 28D — Benchmark actualizado de portafolios técnicos y arte 3D en tiempo real

## 1. Estado del módulo

Este módulo reemplaza la versión anterior de `28D_artstation_portfolio_benchmark.md`.

La tarea original buscaba un benchmark centrado en ArtStation. Sin embargo, el acceso directo a ArtStation quedó bloqueado por verificación de Cloudflare. Por tanto, este módulo no debe presentarse como un benchmark exhaustivo de ArtStation.

El módulo actualizado usa fuentes públicas accesibles equivalentes: portafolios personales, GitHub Pages, Framer, blogs técnicos y breakdowns públicos de arte técnico, shaders, VFX, herramientas y 3D en tiempo real.

## 2. Decisión metodológica

ArtStation sigue siendo una fuente valiosa para evaluar presentación visual. No obstante, para estudiar estructura técnica, storytelling de proyecto, documentación, código, métricas y breakdowns, las fuentes accesibles recopiladas son más útiles que perfiles visuales bloqueados.

La decisión correcta es separar:

- **ArtStation directo:** pendiente por bloqueo de acceso.
- **Benchmark visual/técnico accesible:** válido para patrones de portafolio.
- **Case studies técnicos:** fuente principal para construir los proyectos de Alexander.
- **GitHub/README:** fuente principal para validar implementación y código.

## 3. Calidad del benchmark A4_retry

| Criterio | Resultado |
|---|---|
| Fuentes accesibles | Sí |
| ArtStation directo | No |
| Portafolios técnicos | Sí |
| Blogs técnicos | Sí |
| Shaders/VFX | Sí |
| Unity/Unreal | Sí |
| Métricas | Escasas |
| Código visible | Parcial |
| Utilidad para Alexander | Alta |
| Exhaustividad | Media |

## 4. Inventario de fuentes válidas

| Fuente | Plataforma | Foco | Calidad |
|---|---|---|---|
| Alla Eddine Rakik | Framer | Tech art general | Media |
| Rakik — Boom Mike VR | Framer | VR demo | Baja-media |
| Rakik — Shader VFX Pack | Framer | Shader/VFX | Baja-media |
| Jettelly — Potion Shader | Blog | Unity shader breakdown | Alta |
| Harry Alisavakis | Blog | Technical art resources | Media |
| Omar Rinaz Costa | GitHub Pages | CV + tech art | Media |
| Alson Entuna | Personal site | Tools/pipeline | Media |
| Wolf van Veen | Personal site | Shaders/VFX | Alta |
| Francisco Múrias | GitHub Pages | VFX/rendering | Alta |
| Julhe — SDF Textures | Blog | Shader technique | Alta |
| Julhe — Shader Optimization | Blog | Shader performance | Alta |
| Julhe — X5 Shader | Blog | Shader framework | Alta |

## 5. Fuentes fuertes

### 5.1 Jettelly — Real-Time Potion Shader Breakdown

URL: https://jettelly.com/blog/a-real-time-potion-shader-breakdown-in-unity

Es uno de los ejemplos más útiles porque no se limita a mostrar una imagen final. Presenta el problema técnico, la solución visual, el uso de Unity URP, Shader Graph y C#, y el comportamiento del efecto en movimiento.

Patrones adaptables:

- Título específico.
- Resultado visual temprano.
- Explicación de comportamiento.
- Capturas intermedias.
- Video o GIF del resultado.
- Separación entre efecto visual y técnica usada.

Aplicación para Alexander:

Este formato sirve para un breakdown de:

- modo X-Ray;
- shader de clipping/cross-section;
- visualización térmica heurística;
- resaltado de piezas;
- sistema de selección;
- controles WebGL.

Lo que no debe copiar:

No basta con decir “hecho en Unity”. El valor está en explicar la relación entre intención visual, limitaciones del motor, implementación y resultado.

### 5.2 Julhe — Always-Sharp SDF Textures

URL: https://julhe.github.io/blog/always-sharp-sdf-textures/

Este ejemplo funciona como referencia de comunicación técnica avanzada. Explica una técnica concreta, desarrolla el problema y muestra razonamiento técnico.

Patrones adaptables:

- Problema técnico acotado.
- Explicación conceptual.
- Visuales comparativos.
- Código o pseudocódigo.
- Resultado final verificable.

Aplicación para Alexander:

Sirve como modelo para escribir piezas técnicas sobre:

- optimización de lectura visual en WebGL;
- diseño de hotspots;
- claridad de bordes;
- visualización de piezas pequeñas;
- control de transparencia;
- UI técnica sobre modelos complejos.

Lo que no debe copiar:

No conviene publicar artículos demasiado matemáticos si el objetivo principal es empleabilidad inicial. La profundidad técnica debe ser suficiente, pero legible para recruiters técnicos y leads.

### 5.3 Julhe — How (Not) To Optimize Shaders

URL: https://julhe.github.io/blog/how-not-to-optimize-shaders/

Este ejemplo es especialmente relevante porque enseña mediante anti-patrones. No solo muestra qué hacer, sino qué evitar.

Patrones adaptables:

- Planteamiento de error común.
- Comparación entre enfoques.
- Análisis de rendimiento.
- Recomendaciones prácticas.
- Conclusión aplicable.

Aplicación para Alexander:

Puede inspirar un artículo propio:

- “How not to optimize a Unity WebGL technical viewer”.
- “Lessons from building a browser-based drone assembly viewer”.
- “What I would rebuild in my thesis viewer”.
- “Mobile-first constraints in Unity WebGL visualization”.

Lo que no debe copiar:

No debe convertirse en una crítica abstracta. Debe estar conectado a una experiencia propia y a decisiones reales del proyecto.

### 5.4 Francisco Múrias — Technical Art Portfolio

URL: https://franciscomurias.github.io/

Este portafolio es útil por su grilla visual, foco en proyectos técnicos, y combinación de arte técnico con rendering, VFX y herramientas.

Patrones adaptables:

- Home visual fuerte.
- Proyectos en tarjetas.
- Separación entre trabajos personales y profesionales.
- Enlaces a GitHub cuando aplica.
- Estética técnica sin sobreexplicar en la portada.

Aplicación para Alexander:

Sirve para estructurar una landing de portafolio con:

- TwinSight X500 como proyecto principal;
- miniaturas de módulos técnicos;
- tarjetas de herramientas;
- sección de breakdowns;
- enlaces a demo y GitHub.

Lo que no debe copiar:

No debe depender solo de imágenes atractivas. En el caso de Alexander, el valor competitivo está en el proceso técnico y la interacción WebGL.

### 5.5 Wolf van Veen — Technical Artist

URL: https://wolfvanveen.art/

Este ejemplo destaca por la organización visual mediante categorías: post-processing, shaders, particles, models y textures. Aunque el propio sitio indica que el portafolio está desactualizado, su estructura sigue siendo útil.

Patrones adaptables:

- Categorías visibles.
- Navegación simple.
- Galerías por proyecto.
- Modal o página individual por pieza.
- Herramientas mostradas por proyecto.

Aplicación para Alexander:

El portafolio de Alexander puede usar categorías similares, adaptadas a su perfil:

- Technical Visualization.
- Unity WebGL.
- Shaders & View Modes.
- Tools & Pipeline.
- 3D Assets.
- XR / Interactive.
- Case Studies.

Lo que no debe copiar:

No debe dejar proyectos sin explicación técnica. Cada tarjeta debe responder qué problema resolvió y cómo se implementó.

## 6. Fuentes medias

### 6.1 Alla Eddine Rakik — Technical Art Portfolio

URL: https://technical-art-portfolio.io.framer.ai/

El sitio tiene una estructura clara: presentación, herramientas, lenguajes y grilla de proyectos. Es útil como referencia visual de organización.

Aporta:

- landing directa;
- lista de software;
- proyectos por miniaturas;
- variedad de áreas: VR, 3D, VFX, OpenGL.

Limitación:

Los proyectos tienen poca profundidad técnica. Sirven como muestra visual, pero no como case studies completos.

Aplicación para Alexander:

Puede servir como modelo inicial de landing, pero debe complementarse con páginas de proyecto mucho más documentadas.

### 6.2 Omar Rinaz Costa — Portfolio

URL: https://omarrinaz.github.io/

Este portafolio sirve para observar estructura curricular: about, experiencia, educación, skills y portfolio. Es útil para la transición entre CV y portafolio.

Aporta:

- línea de tiempo;
- roles y fechas;
- educación visible;
- lista de responsabilidades;
- botón de descarga de CV.

Limitación:

Faltan métricas y proyectos técnicos profundos.

Aplicación para Alexander:

Puede inspirar una página `About / CV`, pero no debe ser el modelo principal para proyectos técnicos.

### 6.3 Alson Entuna — Lead Technical Artist Pipeline & Tools

URL: https://alsonentuna.github.io/

El sitio es útil porque comunica una transición profesional: gameplay programming hacia technical art, tools y pipeline.

Aporta:

- posicionamiento claro;
- foco en tools/pipeline;
- relato profesional;
- seniority explícito.

Limitación:

El home muestra más perfil que evidencia técnica. Para Alexander, esto sería insuficiente sin proyectos concretos.

Aplicación para Alexander:

Puede inspirar el texto de posicionamiento profesional:

> Multimedia engineer focused on real-time 3D visualization, Unity WebGL, technical art systems and interactive product visualization.

### 6.4 Harry Alisavakis — Technical Art Blog

URL: https://halisavakis.com/

El blog funciona como repositorio de recursos y artículos. Es útil como referencia de consistencia y marca personal.

Aporta:

- publicaciones recurrentes;
- recursos técnicos;
- enfoque educativo;
- mezcla Unity/Unreal;
- comunidad técnica.

Limitación:

Es más blog que portafolio. No todo está organizado para evaluación rápida de recruiter.

Aplicación para Alexander:

Sirve como modelo para una sección `Technical Notes` o `Breakdowns`, no como home principal.

## 7. Fuentes débiles o incompletas

### 7.1 Rakik — Boom Mike VR

URL: https://technical-art-portfolio.io.framer.ai/boom-mike

Aporta una demo VR con video, pero poca explicación técnica. Es útil como referencia mínima de presentación visual.

No debe ser modelo principal para Alexander.

### 7.2 Rakik — Shader VFX Pack

URL: https://technical-art-portfolio.io.framer.ai/shader-vfx-pack

Aporta una muestra visual de efectos, pero no explica implementación, problema, parámetros ni resultados.

Debe evitarse este patrón si el objetivo es aplicar a roles técnicos.

## 8. Patrones de estructura para el portafolio de Alexander

### 8.1 Landing page

La landing debe responder en menos de 10 segundos:

- quién es Alexander;
- qué rol busca;
- cuál es su proyecto principal;
- qué evidencia técnica puede revisar el evaluador;
- dónde están demo, GitHub, CV y contacto.

Estructura recomendada:

```text
Hero
└── Role headline
└── One-line positioning
└── CTA: View TwinSight X500
└── CTA: GitHub
└── CTA: Download CV

Featured Case Study
└── TwinSight X500
└── Unity WebGL technical viewer
└── Demo / GitHub / Breakdown

Project Categories
└── Technical Visualization
└── Unity WebGL
└── Shaders & View Modes
└── Tools & Pipeline
└── 3D Assets
└── Technical Notes
```

### 8.2 Project card

Cada tarjeta de proyecto debe mostrar:

- nombre;
- rol;
- tecnología;
- tipo de problema;
- resultado visible;
- enlace a demo;
- enlace a breakdown;
- enlace a código si aplica.

Formato sugerido:

```markdown
## TwinSight X500

**Role:** Unity WebGL Developer / Technical Artist  
**Type:** Browser-based 3D technical visualization  
**Tools:** Unity 6000, Blender, WebGL, URP, GitHub Pages  
**Focus:** Spatial inspection, part selection, exploded view, cross-section, heuristic thermal reading  
**Demo:** [link]  
**Code:** [link]  
**Case Study:** [link]
```

### 8.3 Case study técnico

La estructura debe tomar como referencia Jettelly y Julhe.

Plantilla:

```markdown
# Project name

## Context
What problem existed?

## Goal
What the system needed to solve.

## Constraints
Browser, mobile, WebGL, asset size, usability, academic scope.

## Technical approach
Architecture, data, shaders, UI, pipeline.

## Implementation
Key systems and decisions.

## Results
Screenshots, video, metrics, validation.

## What I learned
Trade-offs, mistakes, next iteration.

## Links
Demo, GitHub, report, video.
```

## 9. Qué debe adaptar Alexander

### 9.1 De Jettelly

Adaptar:

- breakdown visual paso a paso;
- explicación de comportamiento dinámico;
- uso de imágenes y video;
- foco en Unity.

Aplicar a:

- thermal heuristic view;
- X-Ray mode;
- cross-section shader;
- exploded view;
- selection highlighting.

### 9.2 De Julhe

Adaptar:

- profundidad técnica;
- explicación de problema;
- anti-patrones;
- código o pseudocódigo;
- análisis de rendimiento.

Aplicar a:

- WebGL optimization;
- shader modes;
- UI performance;
- model hierarchy normalization;
- asset import pipeline.

### 9.3 De Francisco Múrias

Adaptar:

- grilla de proyectos;
- estética técnica;
- tarjetas visuales;
- enlaces a GitHub;
- separación por tipo de trabajo.

Aplicar a:

- home del portafolio;
- featured projects;
- technical demos;
- visual archive.

### 9.4 De Wolf van Veen

Adaptar:

- categorías claras;
- filtros por tipo de trabajo;
- modal o galería de proyecto;
- herramientas visibles por pieza.

Aplicar a:

- portfolio navigation;
- project taxonomy;
- visual browsing.

### 9.5 De Omar Rinaz

Adaptar:

- timeline de experiencia;
- formación académica;
- lista de roles;
- sección CV.

Aplicar a:

- About;
- CV page;
- career context.

## 10. Qué no debe copiar Alexander

Evitar:

- portafolios con solo imágenes;
- proyectos sin contexto;
- ausencia de métricas;
- falta de enlaces a demo;
- listas largas de software sin evidencia;
- describirse como senior sin respaldo;
- claims no verificables;
- usar ArtStation como única superficie;
- esconder el GitHub;
- omitir decisiones técnicas.

## 11. Recomendaciones concretas para el portafolio

### 11.1 Proyecto principal

TwinSight X500 debe ser el proyecto hero.

Título recomendado:

```text
TwinSight X500 — Unity WebGL Technical Visualization Viewer
```

Subtítulo recomendado:

```text
Browser-based interactive 3D viewer for inspecting the Holybro X500 V2 drone assembly, focused on spatial understanding, part hierarchy, exploded view, cross-section and heuristic visual analysis.
```

### 11.2 Categorías

Usar estas categorías:

```text
Technical Visualization
Unity WebGL
Shaders & View Modes
Tools & Pipeline
3D Production
Academic Research
Technical Notes
```

### 11.3 Case studies mínimos

Publicar al menos 4 piezas:

```text
1. TwinSight X500 — full case study
2. Cross-section shader / clipping plane
3. Drone CAD-to-Web pipeline
4. WebGL optimization / mobile constraints
```

Deseables:

```text
5. Fastener modular system
6. Exploded view logic
7. UI bottom-sheet interaction system
8. Heuristic thermal visualization
```

### 11.4 Medios visuales

Incluir:

- hero video corto;
- GIF de selección de piezas;
- GIF de exploded view;
- GIF de cross-section;
- capturas before/after;
- diagrama de pipeline;
- diagrama de arquitectura;
- tabla de métricas;
- enlace a demo.

### 11.5 Métricas

Agregar cuando sean verificables:

```text
FPS
frame time
build size
load time
memory
draw calls
triangles
texture memory
SUS
NASA-TLX Raw
task completion
```

No inventar métricas. Si no están medidas, marcar como pendiente.

## 12. Cambios concretos para módulos previos

### 12.1 Actualizar `17_cv_base_and_role_variants.md`

Agregar una sección de proyectos técnicos con enfoque medible:

```markdown
### Featured Technical Project

**TwinSight X500 — Unity WebGL Technical Visualization Viewer**  
Built an interactive browser-based 3D viewer for inspecting the Holybro X500 V2 drone assembly. Implemented part hierarchy, selection, exploded view, cross-section and visual analysis modes for technical study and usability evaluation.
```

Cuando existan métricas finales, añadir:

```markdown
Measured WebGL performance across load time, frame time and memory usage.
```

### 12.2 Actualizar README del repositorio

El README ya está bien orientado, pero puede mejorar como portafolio técnico si añade:

- GIF hero;
- project architecture diagram;
- pipeline diagram;
- screenshots table;
- direct link to case study;
- measured performance section;
- “What I built” section.

### 12.3 Actualizar landing de GitHub Pages

La landing debe priorizar:

1. Demo inmediata.
2. Caso de estudio.
3. Capturas del flujo.
4. Métricas verificadas.
5. Enlaces a manuales.
6. CV/portfolio.

## 13. Estructura recomendada del sitio personal

```text
/
├── Home
├── Projects
│   ├── TwinSight X500
│   ├── Cross-section Shader
│   ├── CAD-to-Web Pipeline
│   └── WebGL Optimization Notes
├── Technical Notes
│   ├── Unity WebGL constraints
│   ├── Shader view modes
│   └── 3D model optimization
├── About
├── CV
└── Contact
```

## 14. Taxonomía de proyectos

| Categoría | Uso |
|---|---|
| Technical Visualization | TwinSight, drone viewer |
| Unity WebGL | Browser deployment |
| Shaders | X-Ray, thermal, clipping |
| Tools | pipeline utilities |
| 3D Production | Blender, bake, optimization |
| Research | thesis validation |
| Notes | technical articles |

## 15. Plantilla para página de proyecto

```markdown
---
title: TwinSight X500
role: Unity WebGL Developer / Technical Artist
tools: Unity, Blender, WebGL, URP
status: public demo
year: 2026
---

# TwinSight X500

## Summary

TwinSight X500 is a browser-based interactive 3D viewer for technical inspection of the Holybro X500 V2 drone assembly.

## Problem

Traditional 2D manuals force users to mentally reconstruct spatial relationships between parts.

## Solution

The project provides an interactive 3D environment with selection, part hierarchy, exploded view, cross-section and visual analysis modes.

## My Role

I designed and implemented the Unity WebGL prototype, prepared the 3D asset pipeline and developed the interaction systems used in the final thesis demo.

## Technical Stack

- Unity 6000
- WebGL
- URP
- Blender
- GitHub Pages
- C#

## Key Systems

- App state machine
- Part selection
- Bottom-sheet UI
- Exploded view
- Cross-section
- View modes
- Thermal heuristic visualization

## Constraints

- Browser deployment
- Mobile-first interaction
- Academic validation scope
- Complex imported hierarchy
- Performance constraints

## Results

Add measured metrics here when available.

## Media

Add GIFs, screenshots and video.

## Links

- Demo
- GitHub
- Report
- Technical manual
```

## 16. Plantilla para breakdown técnico

```markdown
# Cross-section shader breakdown

## What I wanted to solve

Users needed to inspect internal spatial relationships without losing context of the full drone assembly.

## Constraint

The solution had to work in Unity WebGL and remain usable on mobile devices.

## Approach

I implemented a shader-based clipping plane controlled through the Analyze mode UI.

## Implementation

Explain the clipping logic, material setup, UI control and limitations.

## Result

Show GIF, screenshots and performance notes.

## Lessons

Explain what worked, what failed and what would be improved.
```

## 17. Riesgos

| Riesgo | Mitigación |
|---|---|
| Portafolio solo visual | Añadir breakdowns |
| Claims sin evidencia | Medir antes de publicar |
| GitHub oculto | Enlace visible |
| Proyecto académico percibido como menor | Enfatizar alcance técnico |
| Falta de seniority | Posicionarse como junior/mid técnico |
| Demasiado texto | Usar jerarquía visual |
| Falta de demo | Priorizar build estable |

## 18. Orden operativo recomendado

```text
1. Congelar demo pública.
2. Capturar GIFs clave.
3. Medir rendimiento verificable.
4. Crear case study principal.
5. Crear 2–3 breakdowns técnicos.
6. Actualizar README.
7. Construir landing personal.
8. Ajustar CV.
9. Publicar LinkedIn/GitHub profile.
```

## 19. Prompt para A5

```text
Execute A5_case_study_benchmark.

Objective:
Analyze 3–5 strong accessible technical case studies relevant to Alexander’s positioning:
Unity Technical Artist, Real-Time 3D Developer, Unity WebGL Developer, Technical Visualization Developer, Shader/Tools Developer.

Prioritize:
- Jettelly Real-Time Potion Shader Breakdown;
- Julhe shader breakdowns;
- Francisco Múrias technical projects;
- other accessible technical art breakdowns with code, images, video or metrics.

Output:
- source inventory;
- case study structure;
- storytelling pattern;
- technical depth;
- visual evidence;
- metrics used;
- what Alexander should adapt;
- project page template;
- breakdown article template.

Rules:
- Use public accessible sources only.
- Do not use ArtStation if blocked.
- Do not invent missing data.
- Keep tables concise.
- Provide actionable recommendations.
```

## 20. Conclusión

El benchmark actualizado muestra que el portafolio de Alexander no debe depender de una galería tipo ArtStation. Su ventaja competitiva está en combinar:

- evidencia visual;
- explicación técnica;
- demo WebGL;
- código público;
- métricas verificables;
- claridad de rol;
- estudios de caso.

La prioridad debe ser construir un portafolio híbrido: visual como un artista técnico, documentado como un desarrollador, y medible como un proyecto de ingeniería.
