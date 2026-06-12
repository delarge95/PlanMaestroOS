---
tipo: benchmark_fuente
modulo: A4_artstation_portfolio_benchmark
estado: corregido_invalidado
fecha: 2026-06-11
reemplaza: A4_artstation_portfolio_benchmark_recuperado
motivo: el intento anterior no investigó perfiles/proyectos ArtStation de forma suficiente
---

# A4 — ArtStation / Portfolio Benchmark

## 1. Corrección de alcance

El intento anterior de A4 **no cumple el objetivo original**.

La solicitud era recolectar ejemplos públicos de **ArtStation y portfolios** relevantes para technical art, real-time 3D, shaders, VFX, optimización, Blender, XR y visualización técnica.

La salida recuperada incluyó principalmente:

- Framer portfolios;
- GitHub Pages portfolios;
- blogs técnicos;
- artículos externos;
- project cards sin desglose interno.

No incluyó un benchmark real de perfiles/proyectos de ArtStation. Por tanto, este archivo queda como **registro de intento fallido**, no como benchmark válido.

## 2. Auditoría del intento anterior

| Criterio | Resultado | Estado |
|---|---:|---|
| Objetivo | 20–35 ejemplos | no cumplido |
| Entradas recuperadas | 12 | parcial |
| Perfiles ArtStation | 0 | inválido |
| Proyectos ArtStation | 0–1 | insuficiente |
| Portfolios externos | 9+ | usable |
| Blogs técnicos | 3+ | usable |
| Benchmark ArtStation | no | inválido |
| Benchmark portfolio general | sí | parcial |

## 3. Entradas externas recuperadas

Estas entradas pueden conservarse como referencia de **estructura de portfolio**, pero no deben contarse como ArtStation benchmark.

| Label | URL | Plataforma | Rol cercano | Tipo | Fuerza |
|---|---|---|---|---|---|
| Alla Eddine Rakik | https://technical-art-portfolio.io.framer.ai | Framer | TA / Game Dev | portfolio | media |
| Potion Shader | https://jettelly.com/blog/a-real-time-potion-shader-breakdown-in-unity | Blog | Shader TA | breakdown | alta |
| Harry Alisavakis | https://halisavakis.com | Blog | Technical Artist | blog técnico | alta |
| Alson Entuna | https://alsonentuna.github.io | GitHub Pages | Lead TA | portfolio / CV | media |
| Omar Rinaz Costa | https://omarrinaz.github.io | GitHub Pages | TA / Game Design | portfolio | baja |
| Francisco Múrias | https://franciscomurias.github.io | GitHub Pages | Technical Artist | portfolio | media |
| julhe | https://julhe.github.io | GitHub Pages | Shader developer | blog técnico | alta |

## 4. ArtStation pendiente de verificación

Estas fuentes aparecieron como candidatos durante el proceso o en contexto previo, pero **no fueron auditadas correctamente**. Deben verificarse en A4-Retry antes de usarse como evidencia.

| Candidato | URL | Tipo esperado | Estado | Uso permitido ahora |
|---|---|---|---|---|
| Mike Spadaro | https://mjspadaro.artstation.com/resume | ArtStation resume | pendiente | no usar como benchmark |
| Eureka Thurston | https://www.artstation.com/eurekathurston | ArtStation profile | pendiente | no usar como benchmark |
| Genshin Shader Breakdown | https://www.artstation.com/artwork/wJZ4Gg | ArtStation project | pendiente | no usar como benchmark |
| ArtStation Technical Art channel | https://www.artstation.com/channels/technical_art | ArtStation channel | pendiente | solo exploración |
| ArtStation VR/AR channel | https://www.artstation.com/channels/virtual_and_augmented_reality | ArtStation channel | pendiente | solo exploración |

## 5. Decisión

A4 debe repetirse como una tarea separada:

```text
A4_retry_artstation_only_benchmark
```

No se deben derivar decisiones finales de portfolio desde ArtStation hasta ejecutar ese retry.

Los ejemplos externos sí pueden alimentar criterios generales de presentación:

- abrir con resultado visual;
- incluir breakdown técnico;
- mostrar herramientas;
- separar rol, problema, restricciones y resultado;
- usar imágenes, GIFs o video corto;
- evitar grids sin explicación.

## 6. Prompt operativo para A4-Retry

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
