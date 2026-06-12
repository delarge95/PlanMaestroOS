---
tipo: modulo_benchmark
modulo: 28D_artstation_portfolio_benchmark
estado: generado
fecha: 2026-06-11
fuente_base: A4_artstation_portfolio_benchmark
perfil_objetivo: Alexander Woodcock — Real-Time 3D / Unity WebGL / Technical Visualization
---

# 28D — ArtStation / Portfolio Benchmark

## 1. Estado del módulo

Este módulo convierte el intento **A4_artstation_portfolio_benchmark** en criterios prácticos para el portafolio de Alexander.

La muestra recuperada es útil, pero **no es exhaustiva**. El objetivo original era 20–35 ejemplos; la extracción real dejó 12 entradas utilizables por bloqueos de ArtStation, páginas con JavaScript y portafolios que no exponían suficiente contenido técnico.

Por tanto, este módulo debe usarse como:

- benchmark estructural;
- guía de presentación;
- patrón de case studies;
- criterio para decidir qué proyectos mostrar;
- no como estadística representativa del mercado.

## 2. Auditoría de calidad de A4

| Criterio | Resultado | Lectura |
|---|---:|---|
| Objetivo inicial | 20–35 | no cumplido |
| Ejemplos recuperados | 12 | parcial |
| ArtStation directo | débil | bloqueos |
| Blogs técnicos | fuerte | útiles |
| GitHub Pages | medio | variable |
| Portfolios visuales | medio | falta técnica |
| Evidencia usable | sí | con cautela |

La parte más valiosa no vino de ArtStation puro, sino de **blogs técnicos, GitHub Pages y portafolios con proyectos técnicos visibles**.

## 3. Inventario consolidado

| Label | Plataforma | Rol cercano | Tipo | Fuerza |
|---|---|---|---|---|
| Rakik | Framer | TA / Game Dev | portfolio | media |
| Potion Shader | Jettelly | Shader TA | breakdown | alta |
| Alisavakis | blog | Technical Artist | blog técnico | alta |
| Entuna | GitHub Pages | Lead TA | CV/portfolio | media |
| Rinaz | GitHub Pages | TA/Game Design | portfolio | baja |
| Múrias | GitHub Pages | Technical Artist | portfolio | media |
| Múrias Nebulas | GitHub Pages | VFX TA | project card | media |
| Múrias OpenGL | GitHub Pages | tools/rendering | project card | media |
| julhe SDF | GitHub Pages | shader dev | blog post | alta |
| julhe Optimize | GitHub Pages | shader dev | blog post | alta |
| julhe X5 | GitHub Pages | shader dev | blog post | media |
| Rakik VFX Pack | Framer | VFX TA | project card | media |

## 4. Patrones fuertes observados

### 4.1. El rol debe aparecer antes que el arte

Los perfiles útiles no se presentan solo como “3D artist”. Usan etiquetas más específicas:

```text
Technical Artist
Shader Developer
Pipeline & Tools Technical Artist
Game Developer & Technical Artist
VFX Technical Artist
Real-Time Look Development
```

Para Alexander, el posicionamiento más defendible es:

```text
Real-Time 3D Developer / Unity WebGL Technical Artist
```

Una variante más orientada a tesis y visualización:

```text
Technical Visualization Developer — Unity WebGL / Blender / Real-Time 3D
```

### 4.2. El proyecto debe abrir con resultado visual

Los mejores ejemplos muestran primero el resultado:

- imagen final;
- video corto;
- gif;
- comparación antes/después;
- captura de interfaz;
- viewport técnico;
- breakdown visual.

Para Alexander, cada caso debería abrir con una captura o gif del resultado final antes de explicar metodología.

### 4.3. El texto técnico debe ser específico

Los ejemplos fuertes explican:

- problema técnico;
- restricción;
- pipeline;
- herramientas;
- decisiones;
- resultado;
- limitaciones.

Los ejemplos débiles solo muestran imágenes sin explicar qué hizo el autor.

### 4.4. Los portfolios visuales necesitan páginas internas

Un grid de proyectos ayuda, pero no basta. Cada card debe llevar a una página con breakdown.

Una card sin página interna no demuestra capacidad técnica. Solo demuestra estética.

### 4.5. Los blogs técnicos funcionan como autoridad

Los ejemplos tipo Harry Alisavakis o julhe muestran que un blog técnico puede posicionar mejor que una galería visual si explica problemas concretos.

Para Alexander, esto favorece crear páginas tipo artículo para:

- CAD-to-WebGL pipeline;
- shader de corte;
- UI técnica en Unity;
- jerarquía de selección;
- optimización del modelo;
- visualización térmica heurística.

## 5. Qué debe adaptar Alexander

### 5.1. Hero de portfolio

Debe comunicar rol, stack y dominio en una sola pantalla.

Propuesta:

```text
Alexander Woodcock
Real-Time 3D Developer / Unity WebGL Technical Artist
Technical visualization, interactive 3D systems and optimized WebGL prototypes.
```

Stack visible:

```text
Unity · WebGL · Blender · C# · UI Toolkit · Shader Graph/HLSL · 3D Optimization
```

### 5.2. Proyecto principal

El proyecto principal debe ser **TwinSight X500**.

No debe presentarse solo como tesis. Debe presentarse como case study técnico:

```text
TwinSight X500 — Interactive WebGL Technical Visualization of a Drone Assembly
```

Rol sugerido:

```text
Solo developer / technical artist / 3D pipeline owner
```

Áreas demostrables:

- CAD-to-WebGL pipeline;
- Blender cleanup;
- Unity WebGL deployment;
- part selection;
- exploded view;
- cross-section shader;
- UI bottom sheet;
- heuristic thermal view;
- validation package.

### 5.3. Proyectos derivados

La tesis puede dividirse en varios mini case studies sin inventar proyectos nuevos.

| Case study | Propósito | Prioridad |
|---|---|---:|
| TwinSight X500 | flagship | 1 |
| CAD-to-WebGL pipeline | pipeline técnico | 2 |
| Cross-section shader | shader/visualization | 3 |
| Exploded view system | interaction/system | 4 |
| Bottom-sheet UI | UX/tooling | 5 |
| Fastener inspection | hierarchy/detail | 6 |
| Thermal heuristic view | visual analysis | 7 |

## 6. Estructura recomendada para cada case study

Cada página debe seguir esta secuencia:

```text
1. Hero visual
2. One-line summary
3. Role / tools / scope
4. Problem
5. Constraints
6. Pipeline
7. Technical breakdown
8. Result
9. Limitations
10. Links
```

### Plantilla breve

```markdown
# Project Title

## Summary
One sentence describing the technical result.

## Role
Solo developer / technical artist / 3D pipeline owner.

## Tools
Unity, Blender, C#, WebGL, Shader Graph/HLSL, etc.

## Problem
What technical or user problem this solved.

## Constraints
Browser, mobile-first, performance, imported CAD, academic scope.

## Breakdown
Step-by-step explanation with screenshots.

## Result
What became visible, usable or measurable.

## Limitations
What the project does not claim.

## Links
Demo, GitHub, report, video.
```

## 7. Media mínima por proyecto

| Proyecto | Media mínima | Extra útil |
|---|---|---|
| TwinSight X500 | hero video | interaction gif |
| CAD pipeline | before/after | wireframe |
| Cross-section | gif | shader diagram |
| Exploded view | gif | hierarchy map |
| UI bottom sheet | screenshots | flow diagram |
| Thermal view | image pair | disclaimer |
| Fasteners | closeups | modular diagram |

## 8. Profundidad técnica esperada

### Nivel insuficiente

```text
I made a drone viewer in Unity.
```

### Nivel aceptable

```text
I built a Unity WebGL prototype to inspect a drone assembly with part selection, exploded view and contextual technical information.
```

### Nivel fuerte

```text
I converted a CAD-derived Holybro X500 V2 assembly into an optimized Unity WebGL technical visualization prototype. The system combines normalized runtime hierarchy, part-level selection, exploded assembly reading, shader-based cross-section and bottom-sheet technical documentation for browser-based inspection.
```

## 9. Qué no debe copiar Alexander

No copiar:

- layouts de otros portfolios;
- capturas o assets de terceros;
- textos de artículos de shaders;
- etiquetas senior si no son defendibles;
- “Technical Artist” como única etiqueta si el trabajo principal es visualización interactiva;
- promesas no visibles en la build pública;
- métricas sin evidencia;
- claims de digital twin operacional si no hay telemetría real.

## 10. Riesgos detectados para el portfolio de Alexander

### Riesgo 1 — parecer solo académico

Mitigación:

Presentar la tesis como producto técnico interactivo, no solo como entrega universitaria.

### Riesgo 2 — parecer solo modelador 3D

Mitigación:

Separar claramente pipeline, Unity runtime, UI, shaders y WebGL.

### Riesgo 3 — mostrar demasiado informe y poca demo

Mitigación:

El portfolio debe abrir con demo visual, no con texto académico.

### Riesgo 4 — sobrerreclamar capacidades

Mitigación:

Usar disclaimers: visual product twin, heuristic thermal view, no FEA, no telemetry.

## 11. Cambios concretos para el portfolio

### Home

Debe tener:

```text
- rol claro;
- hero visual del dron;
- demo link;
- GitHub link;
- 3–5 project cards;
- stack técnico;
- contacto.
```

### Project grid

Orden recomendado:

```text
1. TwinSight X500
2. CAD-to-WebGL Optimization Pipeline
3. Unity WebGL Interaction System
4. Shader-Based Cross-Section Tool
5. Technical UI / Bottom Sheet System
6. Optional: Blender Portrait / Character Study
```

### Project pages

Cada página debe tener:

```text
- 1 video/gif;
- 3–6 imágenes;
- 1 diagrama;
- 1 bloque técnico;
- 1 bloque de limitaciones;
- links a demo/repo.
```

## 12. Relación con GitHub

El portfolio y GitHub deben reforzarse mutuamente.

| Elemento | Portfolio | GitHub |
|---|---|---|
| Demo | visual primero | enlace técnico |
| README | resumen | detalle reproducible |
| Case study | explicación visual | código/manuales |
| Media | videos/gifs | screenshots |
| Evidencia | resultados | archivos fuente |

## 13. Decisión de posicionamiento

La etiqueta más estratégica es:

```text
Real-Time 3D Developer / Unity WebGL Technical Artist
```

La etiqueta académica/profesional secundaria:

```text
Technical Visualization Developer
```

La etiqueta que debe evitarse como principal:

```text
3D Artist
```

No es falsa, pero reduce demasiado el perfil y oculta el valor técnico.

## 14. Próxima tarea

```text
A5_case_study_breakdown_benchmark
```

Objetivo:

Recolectar y analizar ejemplos públicos de case studies técnicos con estructura fuerte para adaptar la presentación de TwinSight X500.

Prompt sugerido:

```text
Execute A5_case_study_breakdown_benchmark.

Objective:
Collect 15–25 public technical case studies relevant to real-time 3D, Unity WebGL, technical visualization, shader breakdowns, CAD-to-real-time pipelines, optimization, interaction systems and technical art tools.

Output structured tables only.

Fields:
- Source label
- URL
- Platform
- Project type
- Role positioning
- Opening media
- Problem statement
- Constraints shown
- Pipeline shown
- Technical breakdown depth
- Tools shown
- Metrics shown
- Limitations shown
- Links provided
- What Alexander can adapt
- What Alexander should not copy
- Confidence
- Date checked

Rules:
- Public sources only.
- Do not invent missing data.
- If unavailable, write “not found”.
- Keep table cells short.
- Include source URLs.
- Tables only.
- No strategy.
```

