---
tipo: modulo_benchmark
modulo: 28D_artstation_portfolio_benchmark
estado: corregido
fecha: 2026-06-11
fuente_base: A4_artstation_portfolio_benchmark
perfil_objetivo: Alexander Woodcock — Real-Time 3D / Unity WebGL / Technical Visualization
revision: 2
nota: reemplaza la versión anterior porque A4 no investigó ArtStation de forma válida
---

# 28D — ArtStation / Portfolio Benchmark

## 1. Corrección crítica

La versión anterior de este módulo no era válida como **ArtStation benchmark**.

El archivo A4 usado como base contenía portafolios externos, blogs técnicos y GitHub Pages, pero no una muestra real de perfiles o proyectos de ArtStation. Por tanto, cualquier conclusión presentada como patrón de ArtStation queda retirada.

Este módulo corregido separa tres cosas:

1. lo que sí sirve del intento anterior;
2. lo que no debe usarse;
3. la tarea necesaria para completar ArtStation correctamente.

## 2. Estado de evidencia

| Bloque | Evidencia | Estado |
|---|---:|---|
| ArtStation perfiles | 0 | inválido |
| ArtStation proyectos | 0–1 | insuficiente |
| Blogs técnicos | 3+ | usable |
| Portfolios externos | 7+ | usable |
| GitHub Pages | 4+ | usable |
| Benchmark ArtStation | no | pendiente |
| Benchmark portfolio general | parcial | usable |

## 3. Lo que queda invalidado

No deben usarse como conclusiones de ArtStation:

- “los perfiles de ArtStation usan X estructura”;
- “los breakdowns de ArtStation priorizan X”;
- “ArtStation demuestra X patrón de contratación”;
- “Alexander debe adaptar X desde ArtStation”.

La muestra no sostiene esas afirmaciones.

## 4. Lo que sí puede conservarse

El intento anterior sí aporta patrones generales de portfolio técnico.

| Fuente | Plataforma | Uso válido | Fuerza |
|---|---|---|---|
| Potion Shader | Blog | shader breakdown | alta |
| Harry Alisavakis | Blog | autoridad técnica | alta |
| julhe | GitHub Pages | posts shader | alta |
| Francisco Múrias | GitHub Pages | grid profesional | media |
| Alson Entuna | GitHub Pages | rol especializado | media |
| Alla Eddine Rakik | Framer | portfolio técnico | media |
| Omar Rinaz | GitHub Pages | CV visible | baja |

## 5. Patrones generales válidos

### 5.1. Resultado visual primero

Un caso técnico debe abrir con el resultado:

```text
final render / gif / video / interactive demo / before-after
```

Para Alexander, esto aplica a:

- TwinSight X500;
- cross-section shader;
- exploded view;
- Inspect mode;
- Analyze mode;
- thermal heuristic view;
- CAD-to-WebGL pipeline.

### 5.2. Rol explícito

El portfolio debe decir qué hizo Alexander.

Formato recomendado:

```text
Role: Solo developer / technical artist / 3D pipeline owner
```

No basta con mostrar el proyecto como tesis.

### 5.3. Breakdown por problema

Cada case study debe responder:

```text
Problem → Constraint → Process → Technical solution → Result → Limitation
```

Esto es más fuerte que una galería visual.

### 5.4. Herramientas visibles

El stack debe aparecer en el hero o primera sección:

```text
Unity · WebGL · Blender · C# · UI Toolkit · Shader Graph/HLSL · 3D Optimization
```

### 5.5. Limitaciones declaradas

Para perfiles técnicos, declarar límites aumenta credibilidad.

Ejemplos aplicables:

- thermal view no es FEA;
- visual twin no es digital twin operativo;
- validación formativa si la muestra es pequeña;
- WebGL implica restricciones de memoria y carga.

## 6. Estructura recomendada para TwinSight X500

```text
1. Hero visual
2. One-line summary
3. Role / scope / tools
4. Problem
5. Constraints
6. CAD-to-WebGL pipeline
7. Interaction systems
8. Shader / visualization systems
9. Optimization notes
10. Validation evidence
11. Limitations
12. Links
```

## 7. Case studies derivados

| Case study | Función | Prioridad |
|---|---|---:|
| TwinSight X500 | flagship | 1 |
| CAD-to-WebGL pipeline | pipeline | 2 |
| Cross-section shader | shader | 3 |
| Exploded view system | interaction | 4 |
| Bottom-sheet UI | UX/system | 5 |
| Fastener inspection | detail system | 6 |
| Thermal heuristic view | analysis view | 7 |

## 8. Estructura de página recomendada

```markdown
# TwinSight X500

## Summary
Interactive WebGL technical visualization of a Holybro X500 V2 drone assembly.

## Role
Solo developer / technical artist / 3D pipeline owner.

## Tools
Unity, WebGL, Blender, C#, UI Toolkit, Shader Graph/HLSL.

## Problem
2D manuals require users to mentally reconstruct spatial relationships.

## Constraints
Browser deployment, mobile-first UI, real-time interaction, academic validation.

## Technical Breakdown
- CAD cleanup and hierarchy normalization.
- Runtime part selection.
- Exploded view.
- Cross-section clipping.
- Bottom-sheet technical data.
- Heuristic thermal visualization.

## Result
A public WebGL prototype for inspection and study of a drone assembly.

## Limitations
Visual product twin, not operational digital twin.
Thermal mode is heuristic, not calibrated FEA.

## Links
Demo, repository, final report, manuals.
```

## 9. Qué evitar

| Error | Riesgo |
|---|---|
| Grid sin breakdown | parece galería |
| Proyecto como “tesis” solamente | reduce valor laboral |
| Reclamar digital twin operativo | sobreventa |
| Mostrar métricas no cerradas | riesgo técnico |
| Ocultar limitaciones | baja credibilidad |
| No incluir video/gif | baja evidencia visual |

## 10. Decisión operativa

Antes de convertir este módulo en benchmark final, ejecutar:

```text
A4_retry_artstation_only_benchmark
```

Hasta entonces, 28D debe usarse como:

- guía de portfolio técnico general;
- auditoría de error;
- estructura provisional de case studies;
- no como benchmark ArtStation final.

## 11. Prompt para A4-Retry

```text
Execute A4_retry_artstation_only_benchmark.

Context:
The previous A4 attempt failed. It collected portfolio/blog examples but did not properly research ArtStation profiles or ArtStation project breakdowns.

Objective:
Collect 20–35 public ArtStation examples relevant to Alexander’s technical art and real-time 3D positioning.

Prioritize:
- Technical Artist profiles;
- Unity Technical Artist profiles;
- shader breakdown projects;
- VFX breakdown projects;
- real-time 3D breakdowns;
- optimization breakdowns;
- Blender technical breakdowns;
- XR / interactive 3D projects;
- technical visualization projects;
- portfolios with tools, GitHub, demo videos or detailed process notes.

Output structured tables only.

Fields:
- Artist / profile label
- ArtStation URL
- Source type: profile / resume / project / blog post / channel result
- Role target
- Seniority if visible
- Project type
- Breakdown structure
- Images used
- Videos used
- Technical text depth
- Tags / skills
- Tools shown
- Portfolio / GitHub links if visible
- What Alexander can adapt
- What Alexander should not copy
- Confidence
- Date checked

Rules:
- ArtStation sources only.
- Use public pages only.
- Do not invent missing data.
- If unavailable, write “not found”.
- If ArtStation blocks access, record “blocked” and do not infer details.
- Include source URLs.
- Tables only.
- No narrative strategy.
```
