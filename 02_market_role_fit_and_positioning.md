# 02 — Market Role Fit and Positioning
## Auditoría y reconstrucción del encaje entre perfil, roles objetivo y mercado laboral 2025–2026

**Perfil:** Alexander Woodcock Salomón  
**Fecha de corte operativa:** 2026-06-11  
**Estado del documento:** sección corregida y terminada para integración posterior.  
**Modo usado para esta sección:** Deep Research previo + reconstrucción analítica manual + verificación web puntual.  
**Herramientas adicionales recomendadas para esta sección:** no usar modo agente todavía. Reservarlo para la sección `11_company_targets_job_boards_recruiters.md`.  
**Regla crítica:** esta sección decide el eje de posicionamiento profesional. No redacta todavía CV, LinkedIn, GitHub ni portfolio final.

---

## 0. Propósito de esta sección

Este archivo define qué familias de roles debe perseguir Alexander en una búsqueda laboral internacional de 3–6 meses, idealmente remota desde Colombia, y qué rutas deben tratarse como secundarias, futuras o de contingencia.

La sección corrige la investigación previa en tres puntos:

1. **Separar familias de rol, job titles, industrias y keywords.** El informe anterior mezclaba `Technical Artist`, `Unity Developer`, `Digital Twin`, `CAD-to-realtime`, `WebGL`, `XR`, `AI Tools` y `Full-stack` como si fueran categorías equivalentes. No lo son.
2. **Priorizar por probabilidad, no solo por atractivo.** Un rol con salario alto puede ser poco útil si exige seniority, autorización laboral local, producción AAA, residencia en EE. UU./UE o experiencia formal no demostrada.
3. **Alinear cada rol con evidencia real.** TwinSight X500, ARA Framework, el retrato Blender y los proyectos secundarios no prueban lo mismo. Cada rol requiere un paquete de evidencia distinto.

Este archivo no contiene benchmarking salarial completo. Los salarios se tratan solo como señal de potencial. La validación detallada corresponde a `03_salary_benchmark_and_remote_colombia.md`.

---

## 1. Fuentes y calidad de evidencia

### 1.1 Fuentes internas revisadas

| Fuente | Uso en esta sección | Estado |
|---|---|---|
| `01_source_of_truth_profile.md` | Fuente de verdad operativa: tesis completa, perfil, claims permitidos/prohibidos | Vigente |
| `deep-research-report (8).md` | Informe anterior: útil como borrador, pero con análisis superficial en roles/salarios | Debe auditarse, no copiarse |
| Deep Research de sección 02 | Insumo actualizado sobre job postings, títulos, salarios y roles | Útil, pero requiere corrección estructural |
| `portfolio_strategy.md` | Conceptos útiles: Optimization Doctor, Toolsmith, Math Wizard, Mobile Hero | Útil como arquitectura de portfolio, no como estrategia final |
| `job_search_strategy.md` | Hipótesis “Trojan Horse”: QA Automation / Tools / Junior Tech Artist | Requiere revalidación; QA Automation no debe ser ruta principal sin evidencia |
| `estrategia_idiomas_mercado_laboral_technical_artist.md` | Idiomas, mercados UE y rol de alemán/portugués | Reutilizable en secciones 04 y 05 |
| `Courses 2025.xlsx` | Insumo de skills/cursos | No se analiza aquí; sección 06 |

### 1.2 Fuentes externas verificadas o utilizadas como contexto

Esta sección usa fuentes externas solo para sostener afirmaciones de contexto técnico y patrones de mercado, no para cerrar salarios definitivos.

| Fuente | Qué aporta | Tipo de evidencia | Limitación |
|---|---|---|---|
| Unity Manual — Web platform | Unity permite publicar gráficos 3D interactivos en navegador mediante WebGL | Fuente oficial técnica | No es fuente de demanda laboral |
| Khronos WebGL | WebGL es estándar web abierto, cross-platform, plugin-free, basado en OpenGL ES | Fuente oficial técnica | No es fuente de salarios |
| LangChain/LangGraph GA announcement | LangGraph Platform fue presentado para despliegue de agentes stateful/long-running | Fuente oficial/vendor | No prueba que ARA sea producto comercial |
| Job postings de Technical Artist / Unity / XR / Digital Twin | Patrones de requisitos: C#, Python, DCC tools, shader/pipeline, experiencia | Evidencia de mercado puntual | No representa todo el mercado |
| Salary/job aggregators | Señales de potencial salarial | Evidencia débil/media | Debe consolidarse en sección 03 |
| Papers recientes de digital twins con Unity/Web/3D | Validan que Unity/Web 3D aparece en simulación, digital twin e industrial visualization | Evidencia técnica/sectorial | No es evidencia directa de contratación |

### 1.3 Auditoría de la investigación previa

El Deep Research de esta sección produjo una dirección general correcta, pero no debe usarse como texto final sin reconstrucción.

| Elemento | Evaluación |
|---|---|
| Dirección general hacia Unity / Real-Time 3D / Technical Visualization | Correcta |
| Tratamiento de TwinSight como evidencia principal | Correcto |
| Tratamiento de ARA como secundario | Parcialmente correcto, pero demasiado descartado |
| Clasificación de CAD-to-realtime como rol de baja prioridad | Incorrecta si se interpreta como skill diferenciador; correcta solo si se interpreta como job title literal |
| Agrupación de roles Technical Artist / Unity TA / Game TA / Shader TA | Demasiado gruesa |
| Datos salariales dentro de role-fit | Mezclados y parcialmente débiles; mover a sección 03 |
| Remote-from-Colombia | Insuficientemente segmentado |
| Evidence required before applying | Incompleto |
| Role rejection/downplay | Correcto en intención, insuficiente en granularidad |
| Scoring objetivo | Faltante |

---

## 2. Corrección taxonómica: rol, keyword, skill e industria no son lo mismo

La reconstrucción parte de separar cuatro capas:

### 2.1 Familias de rol

Una familia de rol agrupa vacantes que podrían aparecer con títulos distintos pero comparten responsabilidades centrales.

| Familia | Ejemplos de job titles |
|---|---|
| Real-Time 3D / Interactive 3D Developer | Real-Time 3D Developer, Interactive 3D Developer, 3D Application Developer, Unity Developer |
| Unity Technical Artist | Unity Technical Artist, Technical Artist — Unity, Technical Artist — Optimization, Runtime Technical Artist |
| Technical Visualization / Digital Twin / Simulation | Technical Visualization Developer, Digital Twin Developer, Simulation Developer, Industrial 3D Developer, HMI Unity Developer |
| Unity WebGL / Web 3D | Unity WebGL Developer, WebGL Developer, 3D Web Developer, Frontend 3D Developer, Three.js Developer |
| Tools / Pipeline / Automation | Tools Developer, Pipeline Developer, Unity Editor Tools Developer, Technical Artist — Tools, Python Automation Developer |
| XR / AR / VR | XR Developer, AR/VR Developer, Unity XR Developer, Simulation XR Developer |
| AI Tools / LLM Applications | LLM Application Developer, AI Tools Developer, Agentic Workflow Developer, Python AI Developer |
| Game Technical Artist | Game Technical Artist, Technical Artist — Games, Shader Technical Artist, VFX Technical Artist |
| Full-stack fallback | Full-stack Developer, Python/FastAPI Developer, React Developer |
| 3D Artist fallback/downplay | 3D Artist, Blender Artist, 3D Generalist, Prop Artist, Character Artist |

### 2.2 Search keywords

Algunas etiquetas son mejores como términos de búsqueda o diferenciadores, no como título principal.

| Keyword / skill | Cómo usarlo |
|---|---|
| CAD-to-realtime | Diferenciador fuerte para technical visualization, digital twin, Unity industrial, product visualization |
| WebGL | Keyword fuerte para despliegue web, browsers, interactive 3D y Unity Web |
| Unity URP | Keyword técnico de rendering/performance |
| UI Toolkit | Keyword de UI runtime/editor en Unity |
| Blender optimization | Keyword de pipeline 3D y asset preparation |
| Retopology / baking / UVs | Evidencia de optimización de assets, no título laboral |
| SUS / NASA-TLX / Think-Aloud | Diferenciador UX/research para technical visualization, no core de technical art |
| LangGraph / LLM orchestration | Diferenciador secundario para AI tooling, no eje principal |

### 2.3 Industrias objetivo

Las industrias objetivo no deben confundirse con rol. El mismo rol puede venderse a sectores distintos.

| Industria | Relevancia para Alexander |
|---|---|
| Industrial visualization | Alta: TwinSight encaja directamente |
| Digital twin / simulation | Alta a mediano plazo; requiere adaptar narrativa técnica |
| XR training / education | Media-alta; requiere XR proof si se apunta directamente |
| Product visualization / configurators | Media-alta; WebGL/Unity/Blender encajan |
| Drones / robotics / hardware visualization | Alta como narrativa de especialización inicial |
| Game studios | Media; emocionalmente atractiva, pero competitiva y portfolio-demanding |
| Creative technology studios | Media-alta; buen fit visual/técnico si hay demo fuerte |
| AI tooling startups | Media; ARA ayuda, pero perfil principal no debe girar completamente |
| Generic full-stack SaaS | Baja como estrategia principal; útil como fallback |

---

## 3. Modelo de scoring

Se usa una escala de 1 a 5.

| Score | Interpretación |
|---:|---|
| 5 | Muy favorable |
| 4 | Favorable |
| 3 | Viable con condiciones |
| 2 | Débil / riesgoso |
| 1 | No recomendado como foco |

### 3.1 Variables evaluadas

| Variable | Definición |
|---|---|
| `Fit with TwinSight` | Qué tan directamente TwinSight prueba capacidades exigidas por el rol |
| `Immediate probability` | Probabilidad relativa de obtener entrevistas/oferta en 3–6 meses |
| `Remote Colombia feasibility` | Probabilidad de que el rol admita remoto desde Colombia, contractor o EOR |
| `Salary upside` | Potencial de crecer hacia USD 3k–6k/mes, sin detallar rangos definitivos |
| `Portfolio readiness` | Qué tan cerca está Alexander de tener evidencia suficiente para aplicar |
| `Competition risk` | Riesgo de competir contra perfiles más establecidos; puntuación alta = menor riesgo |
| `Overclaim risk` | Riesgo de que el rol obligue a afirmar capacidades no demostradas; puntuación alta = menor riesgo |
| `12–24m leverage` | Capacidad del rol de construir trayectoria internacional de alto valor |

---

## 4. Matriz principal de priorización por familia de rol

| Rank | Familia de rol | Fit TwinSight | Prob. 3–6m | Remote COL | Upside | Portfolio readiness | Menor competencia | Menor overclaim | Leverage 12–24m | Total /40 | Prioridad |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | Real-Time 3D / Interactive Technical Visualization Developer | 5 | 4 | 4 | 4 | 4 | 3 | 4 | 5 | 33 | Primaria |
| 2 | Unity WebGL / Interactive 3D Developer | 5 | 4 | 4 | 3 | 4 | 3 | 4 | 4 | 31 | Primaria |
| 3 | Technical Visualization / Digital Twin / Simulation Developer | 5 | 3 | 3 | 5 | 3 | 3 | 4 | 5 | 31 | Primaria / aspiracional controlada |
| 4 | Unity Technical Artist — optimization/tools/runtime | 4 | 3 | 3 | 4 | 3 | 2 | 3 | 5 | 27 | Primaria secundaria |
| 5 | Tools / Pipeline / Python Automation Developer | 3 | 3 | 4 | 4 | 3 | 3 | 3 | 4 | 27 | Secundaria controlada |
| 6 | XR / AR / VR Developer | 3 | 3 | 3 | 4 | 2 | 3 | 3 | 4 | 25 | Secundaria futura |
| 7 | AI Tools / LLM Application Developer | 2 | 3 | 4 | 5 | 2 | 2 | 2 | 4 | 24 | Secundaria solo si ARA se fortalece |
| 8 | Game Technical Artist | 3 | 2 | 2 | 4 | 2 | 2 | 2 | 4 | 21 | Aspiracional / no foco inicial |
| 9 | Shader Technical Artist | 2 | 2 | 3 | 4 | 2 | 2 | 2 | 4 | 21 | Subskill, no rol inicial |
| 10 | Full-stack Developer | 1 | 3 | 5 | 4 | 2 | 2 | 2 | 3 | 22 | Fallback económico, no eje |
| 11 | 3D Artist / Blender Artist / Generalist | 2 | 2 | 3 | 2 | 2 | 1 | 3 | 2 | 17 | Downplay / portfolio secondary |
| 12 | AI/ML Engineer | 1 | 1 | 3 | 5 | 1 | 1 | 1 | 3 | 16 | Rechazar como posicionamiento actual |

### 4.1 Lectura de la matriz

La matriz no dice que el salario más alto esté en la prioridad 1. Dice que la mejor relación entre **evidencia actual + probabilidad + coherencia + upside** está en roles de 3D interactivo, visualización técnica y Unity/WebGL.

El rol más coherente no es “Technical Artist genérico”. Es:

> **Real-Time 3D Developer / Unity Technical Artist focused on interactive technical visualization, CAD-to-realtime optimization, and WebGL deployment.**

Versión en español:

> **Desarrollador 3D en tiempo real / Technical Artist Unity enfocado en visualización técnica interactiva, optimización CAD-to-realtime y despliegue WebGL.**

---

## 5. Diagnóstico por familia de rol

### 5.1 Real-Time 3D / Interactive Technical Visualization Developer

**Prioridad:** primaria.  
**Uso recomendado:** eje de posicionamiento principal.

| Dimensión | Evaluación |
|---|---|
| Títulos comunes | Real-Time 3D Developer, Interactive 3D Developer, Unity Developer, 3D Application Developer, Technical Visualization Developer |
| Encaje con TwinSight | Muy alto. TwinSight es exactamente una aplicación interactiva 3D técnica con Unity/WebGL |
| Encaje con ARA | Bajo-medio. Aporta automatización y tooling, no core 3D |
| Encaje con Blender portrait | Medio. Prueba pipeline 3D si se muestra técnico |
| Requisitos típicos | Unity/C#, interacción runtime, UI, performance, assets optimizados, Git, documentación, comunicación con stakeholders técnicos |
| Portfolio esperado | Demo funcional, case study, explicación del problema, capturas UI, breakdown técnico, video corto |
| GitHub esperado | README claro, estructura comprensible, si el código es publicable; si no, demo/video suficiente |
| Remoto desde Colombia | Medio-alto. Más factible que defensa/on-site simulation; menos saturado que full-stack |
| Riesgo | Que se perciba como solo proyecto académico si no se empaqueta como producto/case study |
| Proof mínimo | Demo video, case study TwinSight, métricas de optimización/usabilidad, README recruiter-friendly |

**Conclusión:** esta familia debe ser el eje. Convierte el proyecto de tesis en evidencia laboral directa sin forzar el perfil hacia videojuegos puros o AI puro.

---

### 5.2 Unity WebGL / Interactive 3D Developer

**Prioridad:** primaria.  
**Uso recomendado:** ruta de entrada remota y contractor.

| Dimensión | Evaluación |
|---|---|
| Títulos comunes | Unity WebGL Developer, WebGL Developer, 3D Web Developer, Web-based 3D Developer, Frontend 3D Visualization Developer |
| Encaje con TwinSight | Muy alto por WebGL, browser delivery, Unity, UI e interacción |
| Encaje con ARA | Bajo. Solo ayuda si se muestra como tooling/automation |
| Encaje con proyectos web | Medio-alto si hay portfolio web o GitHub Pages |
| Requisitos típicos | Unity Web builds, performance, asset size, loading, browser constraints, sometimes JavaScript/Three.js/Babylon.js |
| Portfolio esperado | Live build o video si el build no es público; capturas browser/mobile; métricas de carga/performance |
| GitHub esperado | README con build instructions, screenshots, known limitations, hosted demo si posible |
| Remoto desde Colombia | Alto relativo. Web-based roles tienen mejor compatibilidad con contractor remoto |
| Riesgo | Que Unity WebGL sea visto como nicho si no se acompaña de broader “interactive 3D” |
| Proof mínimo | Web demo o video, build screenshots, explanation of WebGL constraints, optimization table |

**Conclusión:** esta es la ruta más útil para convertir TwinSight en oportunidad remota. No debe limitarse a “Unity WebGL” como título único; debe acompañarse de `Interactive 3D`, `Web-based 3D`, `technical visualization` y, si aplica, `Three.js/WebGPU` como skill-gap futuro.

---

### 5.3 Technical Visualization / Digital Twin / Simulation Developer

**Prioridad:** primaria aspiracional controlada.  
**Uso recomendado:** foco industrial de alto potencial, especialmente 12–24 meses.

| Dimensión | Evaluación |
|---|---|
| Títulos comunes | Technical Visualization Developer, Digital Twin Developer, Simulation Developer, HMI Unity Developer, Industrial Visualization Developer |
| Encaje con TwinSight | Muy alto: hardware real, CAD/manufacturer assets, visualización técnica, piezas, ensamblaje, relaciones espaciales |
| Encaje con UNAL Electrónica | Alto: base técnica, física, sistemas, lógica de hardware |
| Encaje con ARA | Medio: automatización/documentación puede sumar en ingeniería |
| Requisitos típicos | Unity/Unreal, C#/C++, 3D visualization, CAD/BIM/industrial data, simulation logic, sometimes robotics/IoT/cloud |
| Portfolio esperado | Case study técnico, no solo visual; problema, datos, pipeline CAD, performance, interacción, validación |
| GitHub esperado | Menos importante que case study/demo si el proyecto usa assets sensibles |
| Remoto desde Colombia | Medio. Algunos roles son híbridos/on-site por industria, defensa o hardware |
| Riesgo | Sobrevender como “digital twin” si TwinSight no tiene sincronización con sensores/datos reales |
| Proof mínimo | Usar “technical visualization” antes que “digital twin” para TwinSight, salvo que haya data linkage real |

**Corrección terminológica crítica:** TwinSight puede venderse como **technical visualization / interactive assembly visualization / CAD-to-realtime prototype**. No debe llamarse “digital twin completo” si no tiene integración bidireccional con datos reales, sensores, telemetría o estado operacional.

**Conclusión:** muy fuerte como narrativa de mercado, pero debe controlarse la terminología para evitar sobreclaiming.

---

### 5.4 Unity Technical Artist — optimization/tools/runtime

**Prioridad:** primaria secundaria.  
**Uso recomendado:** aplicar cuando el rol pida Unity, optimization, shaders, tooling, runtime integration o asset pipeline; no cuando sea AAA senior/character/VFX-heavy.

| Dimensión | Evaluación |
|---|---|
| Títulos comunes | Unity Technical Artist, Technical Artist, Runtime Technical Artist, Optimization Technical Artist, Tools Technical Artist |
| Encaje con TwinSight | Alto en optimización, shaders, visual modes, runtime interaction y pipeline CAD→Unity |
| Encaje con Blender portrait | Medio si se presenta como mobile/real-time pipeline |
| Encaje con ARA | Medio si se vende como tooling/automation mindset |
| Requisitos típicos | Unity, C#, shaders, DCC tools, asset optimization, pipeline, artist-engineer bridge, sometimes Python/Maya/Houdini/Substance |
| Portfolio esperado | Breakdowns, before/after optimization, shader demos, tools demos, technical explanation |
| GitHub esperado | Útil para tools/scripts, no siempre indispensable para art roles |
| Remoto desde Colombia | Medio. Game studios y tech art pueden ser region-limited |
| Riesgo | Muchos postings piden 3–5+ años y producción profesional; no competir como senior |
| Proof mínimo | TwinSight case study + shader/visual mode breakdown + optimization process + optional editor tool |

**Conclusión:** debe usarse como familia de aplicación, pero con subtítulo claro: `Unity Technical Artist focused on optimization and interactive technical visualization`. Evitar `Game Technical Artist` como etiqueta principal hasta tener portfolio de juego más fuerte.

---

### 5.5 Tools / Pipeline / Python Automation Developer

**Prioridad:** secundaria controlada.  
**Uso recomendado:** complemento de tech art y ruta alternativa si ARA se limpia.

| Dimensión | Evaluación |
|---|---|
| Títulos comunes | Tools Developer, Pipeline Developer, Technical Artist — Tools, Unity Editor Tools Developer, Python Automation Developer |
| Encaje con TwinSight | Medio: scripts, UI, workflow automation, asset setup si se extraen herramientas |
| Encaje con ARA | Alto como proof-of-concept, pero debe estar estable y documentado |
| Encaje con AI News Aggregator | Medio si se audita como app funcional |
| Requisitos típicos | Python, C#, APIs, automation, internal tools, Git, documentation, debugging |
| Portfolio esperado | Tool demo, problem solved, before/after workflow time, README, code sample |
| GitHub esperado | Alto; para tools sí importa ver código/arquitectura |
| Remoto desde Colombia | Alto relativo |
| Riesgo | Diluir perfil si se presenta como ruta principal separada de 3D |
| Proof mínimo | Publicar o documentar una herramienta concreta: Unity Editor Window, asset importer, batch setup, LOD/material tool |

**Conclusión:** esta ruta no debe liderar el perfil, pero sí debe aparecer como diferenciador: Alexander no solo produce assets o escenas; también puede automatizar pipelines.

---

### 5.6 XR / AR / VR Developer

**Prioridad:** secundaria futura.  
**Uso recomendado:** aplicar selectivamente a roles Unity XR junior/mid si no exigen SDKs avanzados o experiencia shipped.

| Dimensión | Evaluación |
|---|---|
| Títulos comunes | XR Developer, AR/VR Developer, Unity XR Developer, Immersive Developer, Simulation Developer XR |
| Encaje con TwinSight | Medio: 3D interaction and visualization transfer, but not XR-specific |
| Encaje con hardware/electronics background | Medio-alto |
| Requisitos típicos | Unity XR, Meta Quest, HoloLens/MRTK, ARCore/ARKit, interaction design, performance, spatial UX |
| Portfolio esperado | XR demo, headset build, interaction prototype, performance considerations |
| GitHub esperado | Medium; video demo more important if headset demo not accessible |
| Remoto desde Colombia | Medium; many XR roles need hardware, labs, or on-site collaboration |
| Riesgo | Overclaiming XR if there is no deployed headset project |
| Proof mínimo | Small XR prototype or explicit statement: “Unity 3D background transferable; XR SDK learning in progress” |

**Conclusión:** XR is adjacent, not immediate core. It can become strong if a short XR proof is added later.

---

### 5.7 AI Tools / LLM Application Developer

**Prioridad:** secundaria only if ARA becomes presentable.  
**Uso recomendado:** not part of main LinkedIn headline unless targeting AI tooling separately.

| Dimensión | Evaluación |
|---|---|
| Títulos comunes | LLM Application Developer, AI Tools Developer, Agentic Workflow Developer, Python Automation Developer |
| Encaje con ARA | High conceptually; medium evidentially until polished |
| Encaje con TwinSight | Low, except AI-assisted tooling/documentation |
| Requisitos típicos | Python, API integration, RAG, LLM orchestration, evaluation, deployment, security, observability, vector DBs |
| Portfolio esperado | Working demo, architecture diagram, README, eval examples, cost control, failure handling |
| GitHub esperado | High |
| Remoto desde Colombia | High relative |
| Riesgo | Competes against software engineers with production SaaS/AI experience; profile dilution |
| Proof mínimo | Stable ARA demo, documented workflow, sanitized repo, limitations, example outputs, no inflated claims |

**Critical distinction:** ARA supports `AI-assisted tooling and automation`. It does not currently justify positioning as `AI Engineer`, `ML Engineer`, or `Production LLM Architect` unless additional evidence is built.

---

### 5.8 Game Technical Artist

**Prioridad:** aspirational, not first wave.  
**Uso recomendado:** target selectively for junior/associate Unity tech art, mobile game optimization, tools, or shader internships/contracts.

| Dimensión | Evaluación |
|---|---|
| Títulos comunes | Game Technical Artist, Associate Technical Artist, Technical Artist — Unity, Shader Technical Artist, VFX Technical Artist |
| Encaje con TwinSight | Medium. It proves Unity/optimization, not game production pipeline |
| Encaje con Blender portrait | Medium if real-time/game-ready breakdown exists |
| Requisitos típicos | Shipped games, game engine production, DCC pipeline, shaders, profiling, collaboration with artists/designers |
| Portfolio esperado | Game-ready assets, shader demos, optimization examples, tools, VFX, breakdowns |
| GitHub esperado | Useful for tools; less central for art-heavy TA |
| Remoto desde Colombia | Medium-low depending on studio; region constraints common |
| Riesgo | High competition, portfolio not yet game-focused |
| Proof mínimo | Optimization case study + shader studies + tool demo + game-facing asset/pipeline breakdown |

**Conclusión:** emotionally relevant but not the highest-probability route. Use as selected target, not core search axis.

---

### 5.9 Shader Technical Artist

**Prioridad:** subskill, not target role now.  
**Uso recomendado:** strengthen portfolio language, not job title.

| Dimensión | Evaluación |
|---|---|
| Current evidence | Shader Graph, visual modes, basic HLSL |
| Missing evidence | Advanced HLSL, custom lighting, render features, performance profiling, shader debugging |
| Risk | Overclaiming if applying to shader-specific roles |
| Recommended use | `Shader Graph / basic HLSL / visual modes` as skill cluster |

**Conclusión:** build as supporting skill for Unity Technical Artist, not as role target in first 3–6 months.

---

### 5.10 Full-stack Developer

**Prioridad:** fallback economic route.  
**Uso recomendado:** only if financial pressure forces broader applications.

| Dimensión | Evaluación |
|---|---|
| Evidence | FastAPI/React/PostgreSQL/Redis listed as secondary and needing validation |
| Fit with strategy | Low; dilutes the 3D/Unity narrative |
| Remote feasibility | High |
| Competition | High |
| Risk | Becoming generic junior full-stack without strong differentiator |
| Proof minimum | Functional deployed app, tests, README, auth/data model, frontend polish |

**Conclusión:** keep as contingency, not main profile.

---

### 5.11 3D Artist / Blender Artist / Generalist

**Prioridad:** downplay as job target.  
**Uso recomendado:** portfolio support, not professional identity.

| Dimensión | Evaluación |
|---|---|
| Evidence | Blender portrait and asset optimization |
| Risk | Competing against dedicated artists with stronger ArtStation portfolios |
| Strategic value | Supports Technical Artist credibility if framed as pipeline/process |
| Wrong framing | “3D Artist looking for character/prop roles” |
| Correct framing | “Understands art pipeline and optimization constraints” |

**Conclusión:** do not lead with 3D Artist. Use Blender to prove technical art empathy and asset pipeline competence.

---

## 6. Role-by-role mapping of the original 23 requested roles

| Original role | Final classification | Priority | Notes |
|---|---|---|---|
| Unity Technical Artist | Family: Unity Technical Artist | High-medium | Target when focused on optimization/tools/runtime, not senior AAA |
| Technical Artist | Umbrella keyword/family | Medium-high | Use with qualifier: Unity / real-time / optimization / visualization |
| Real-Time 3D Developer | Primary family | High | Strongest neutral role title |
| Unity Developer | Search keyword/family | Medium-high | Use if role has 3D/visualization; avoid generic mobile/game roles if weak fit |
| Unity WebGL Developer | Primary subfamily | High | Strong fit with TwinSight |
| Interactive 3D Developer | Primary family | High | Strongest remote-friendly framing |
| WebGL Developer | Secondary/adjacent | Medium-high | Strong if combined with 3D/Unity/Three.js |
| 3D Web Developer | Secondary/adjacent | Medium-high | Useful search term; may require Three.js/WebGPU |
| Technical Visualization Developer | Primary/industry family | High | Excellent fit |
| CAD-to-Realtime Technical Artist | Keyword/differentiator | High as skill, low as title | Do not search only this title |
| Digital Twin Visualization Developer | Primary aspirational | Medium-high | Use carefully; avoid claiming full digital twin if no data sync |
| Simulation Developer | Primary aspirational/adjacent | Medium | Good with engineering background; remote varies |
| XR Developer | Secondary future | Medium | Needs XR proof |
| AR/VR Developer | Secondary future | Medium | Similar XR; hardware proof needed |
| 3D Product Visualization Developer | Adjacent | Medium | Good for configurators/product/web 3D |
| Game Technical Artist | Aspirational | Medium-low | Not first wave unless junior/tool/Unity optimization |
| Tools Developer / Pipeline Developer | Secondary controlled | Medium-high | Strong if tool demo exists |
| Shader Technical Artist | Subskill/future specialization | Low now | Needs stronger shader portfolio |
| Python Automation Developer | Secondary controlled | Medium | Good if connected to tools/pipeline |
| AI Tools Developer | Secondary speculative | Medium-low | Requires polished ARA and clear demo |
| LLM Application Developer | Secondary speculative | Medium-low | High market upside but profile dilution risk |
| Full-stack Developer | Fallback | Low-medium | Economic contingency only |
| 3D Artist / Blender Artist / 3D Generalist | Downplay | Low | Portfolio support only |

---

## 7. Project-to-role evidence map

| Project | Strongly proves | Partially proves | Does not prove |
|---|---|---|---|
| TwinSight X500 | Unity, WebGL, C#, interactive 3D, technical visualization, CAD-to-realtime optimization, UI, visualization modes, academic validation | Tech art, digital twin adjacent, simulation adjacent, product visualization, UX research | Shipped commercial production, full digital twin, XR deployment, AAA game production, senior technical art |
| ARA Framework | Python automation, LLM orchestration awareness, agent workflow design, research tooling, documentation | Tools/pipeline mindset, AI tooling route, backend/API if implemented | Production ML engineering, enterprise AI product, primary technical art evidence |
| ai-news-aggregator | Full-stack/AI app if functional | Python/backend, product logic, data pipeline | Real-time 3D, technical art, Unity |
| FitApp-Free | Product thinking, app logic if functional | Full-stack/backend, data modeling | Technical art, Unity, 3D visualization |
| Hyperrealistic Blender portrait | Blender skill, topology, materials, art pipeline | Technical art if optimized for realtime/mobile | Character artist seniority, shipped game character pipeline unless properly converted |
| Older game/project repos | Possible historical interest | Coding progression | Current professional readiness unless cleaned/contextualized |

---

## 8. Evidence required before applying by role family

### 8.1 Minimum viable evidence package for primary roles

For the first application wave, the minimum package should be:

| Asset | Required? | Purpose |
|---|---:|---|
| TwinSight case study | Yes | Main proof of role fit |
| 60–120s TwinSight demo video | Yes | Recruiter-accessible evidence |
| Short technical breakdown | Yes | Show pipeline, architecture, optimization |
| GitHub README recruiter version | Yes | Explain project without requiring code review |
| Screenshots: UI, exploded view, clipping, visual modes | Yes | Visual proof |
| Metrics table | Yes | Triangles, participants, SUS, NASA-TLX; avoid unsupported performance claims |
| AI assistance disclosure script | Yes | Interview risk control |
| Live build | Optional but high value | Strongest proof if stable and legally safe |
| Code sample | Optional/controlled | Useful if repo is clean |

### 8.2 Evidence by role

| Role family | Must show before serious applications | Nice-to-have |
|---|---|---|
| Real-Time 3D / Interactive 3D | Demo video, UI/interactions, architecture, metrics | Live WebGL build |
| Unity WebGL / Web 3D | Browser deployment, loading/performance notes, mobile/browser screenshots | Three.js/WebGPU micro-demo |
| Technical Visualization / Digital Twin | Problem framing, CAD pipeline, relationships between parts, technical information panels | Data-driven mockup or telemetry concept |
| Unity Technical Artist | Optimization breakdown, visual modes/shaders, pipeline, before/after | Editor tool demo |
| Tools/Pipeline | Tool demo, GitHub repo, README, before/after workflow time | Unity EditorWindow polished |
| XR/AR/VR | Transferable Unity proof plus small XR prototype | Quest/HoloLens demo video |
| AI Tools/LLM | Working ARA demo, architecture diagram, examples, limitations | Deployment or evaluation harness |
| Game Technical Artist | Shader demos, optimization case, game-ready asset breakdown | Small playable Unity scene |
| Full-stack fallback | Deployed app, backend/frontend screenshots, API docs | Tests and Docker |

---

## 9. Recommended positioning architecture

### 9.1 Primary positioning statement

Use this as the strategic anchor:

> **Real-Time 3D Developer / Unity Technical Artist focused on interactive technical visualization, CAD-to-realtime optimization, and WebGL deployment.**

Spanish operational version:

> **Desarrollador 3D en tiempo real / Technical Artist Unity enfocado en visualización técnica interactiva, optimización CAD-to-realtime y despliegue WebGL.**

### 9.2 Why this positioning works

| Criterion | Evaluation |
|---|---|
| Uses strongest evidence | TwinSight directly supports it |
| Avoids generic multimedia label | Yes |
| Avoids pure art competition | Yes |
| Avoids overclaiming AI/ML | Yes |
| Keeps game industry possible | Yes, through technical art / Unity |
| Keeps industrial/digital twin possible | Yes |
| Fits remote contractor search | Better than defense/on-site simulation or pure game art |
| Builds toward 12–24m upside | Yes, via real-time 3D, simulation, visualization and tooling |

### 9.3 Secondary positioning statements

Use only in targeted variants, not all at once.

| Route | Statement |
|---|---|
| Unity WebGL / Interactive 3D | `Unity WebGL Developer building browser-based interactive 3D applications for technical visualization.` |
| Technical Visualization / Digital Twin | `Technical Visualization Developer translating CAD and engineering assets into interactive real-time 3D systems.` |
| Unity Technical Artist | `Unity Technical Artist focused on optimization, runtime visualization systems, shaders, and asset pipelines.` |
| Tools / Python Automation | `Python/Unity tools developer building automation prototypes for research and production workflows.` |
| XR / Simulation | `Unity developer with real-time 3D visualization background, preparing for XR/simulation applications.` |

### 9.4 What not to use as primary positioning

| Avoid as main identity | Reason |
|---|---|
| `3D Artist` | Competes in saturated art market; underuses engineering/Unity evidence |
| `AI Engineer` | ARA does not prove ML engineering or production AI yet |
| `Full-stack Developer` | Dilutes differentiation; no strongest evidence |
| `Game Technical Artist` alone | Too narrow and high competition; current strongest proof is technical visualization, not game production |
| `Digital Twin Developer` alone | Risk of overclaiming if no real sensor/data integration |
| `Shader Technical Artist` | Current shader evidence likely insufficient for shader-specialist roles |
| `Senior Technical Artist` | Not supported by formal industry experience |

---

## 10. ATS keyword clusters

### 10.1 Core universal cluster

Use across most variants:

```text
Unity, C#, Real-Time 3D, WebGL, Interactive 3D, Technical Visualization, Blender, CAD-to-Realtime, 3D Optimization, Asset Optimization, Retopology, UV Mapping, Baking, URP, UI Toolkit, Shader Graph, Git, Technical Documentation, Performance Optimization
```

### 10.2 Unity Technical Artist cluster

```text
Technical Artist, Unity Technical Artist, Unity, C#, URP, Shader Graph, HLSL, Real-Time Rendering, Optimization, Asset Pipeline, Tools, Editor Scripting, Blender, Retopology, Baking, Visual Modes, X-Ray, Wireframe, Blueprint, Technical UI
```

### 10.3 Interactive 3D / WebGL cluster

```text
Interactive 3D Developer, Real-Time 3D Developer, Unity WebGL, WebGL, WebAssembly, Browser-based 3D, 3D Visualization, Technical UI, Runtime Interaction, Mobile Optimization, Loading Performance, Frontend 3D, Three.js, WebGPU
```

### 10.4 Technical Visualization / Digital Twin / Simulation cluster

```text
Technical Visualization, Digital Twin, Simulation, Industrial Visualization, CAD, CAD Optimization, CAD-to-Realtime, Assembly Visualization, Product Visualization, HMI, Real-Time Monitoring, Unity, C#, 3D UI, Engineering Visualization, Drones, Robotics, Hardware Visualization
```

### 10.5 Tools / Pipeline / Python cluster

```text
Tools Developer, Pipeline Developer, Python Automation, Unity Editor Tools, C#, Python, Workflow Automation, LangGraph, LangChain, LLM Orchestration, Research Automation, API Integration, Redis, Playwright, Semantic Scholar, Technical Documentation
```

### 10.6 XR cluster

```text
XR Developer, AR Developer, VR Developer, Unity XR, Meta Quest, HoloLens, MRTK, ARCore, ARKit, Spatial Interaction, Immersive Training, Simulation, 3D Interaction, Real-Time Performance
```

### 10.7 Terms to use carefully

| Term | Condition for use |
|---|---|
| Digital Twin | Use as target market/adjacent field; do not call TwinSight a full digital twin unless data integration exists |
| AI Tools Developer | Use only when ARA is presentable and limitations are explicit |
| Shader Technical Artist | Use only as skill or future direction unless shader portfolio is strong |
| Full-stack | Use only in fallback CV variant |
| Senior | Avoid unless role is not level-sensitive and phrasing is not self-title |

---

## 11. Strategic contradictions to avoid

| Contradiction | Why it is dangerous | Correction |
|---|---|---|
| Claiming thesis is ARA while thesis is TwinSight | Damages credibility and creates inconsistency across LinkedIn/CV | Thesis = TwinSight X500. ARA = secondary project |
| Presenting as Technical Artist + AI Developer + Full-stack + 3D Artist equally | Dilutes recruiter signal | Primary = Real-Time 3D / Unity Technical Visualization. Others secondary |
| Calling TwinSight a complete digital twin | Could be technically false if no live data/sensor sync | Use `interactive technical visualization` or `digital twin-adjacent prototype` |
| Leading with game industry while strongest proof is industrial/technical visualization | Lowers probability and increases competition | Target games selectively; lead with visualization/Unity/WebGL |
| Using CAD-to-realtime as only job title | Few postings use this exact title | Use as differentiating skill under visualization/simulation roles |
| Presenting ARA as production AI platform | Risk if unstable or not deployed | Present as prototype/tooling proof with limitations |
| Claiming EU work authorization | Legally false until citizenship/residence/work rights exist | Say remote from Colombia; EU mobility future only if true |
| Claiming certified training from non-certified courses | Misrepresentation | `Completed self-directed training / coursework`, not certification |
| Applying as Shader TA without shader portfolio | Technical interview risk | Use shaders as supporting evidence for Unity TA |
| Applying as full-stack while portfolio says technical art | Profile incoherence | Use separate fallback CV only if needed |

---

## 12. Recommended first-wave role families

The first 3–6 month search should target **3–5 role families**, not 23 titles.

### 12.1 Primary first-wave targets

#### 1. Real-Time 3D / Interactive Technical Visualization Developer

**Why:** best overall fit. Converts TwinSight directly into employability evidence.  
**Search titles:** `Real-Time 3D Developer`, `Interactive 3D Developer`, `Unity Developer`, `3D Application Developer`, `Technical Visualization Developer`.  
**Markets:** global remote, LATAM nearshore, creative tech, education tech, industrial visualization, product visualization.

#### 2. Unity WebGL / Interactive 3D Developer

**Why:** strongest remote-compatible route from TwinSight.  
**Search titles:** `Unity WebGL Developer`, `WebGL Developer`, `3D Web Developer`, `Frontend 3D Developer`, `Interactive Web Developer`.  
**Markets:** web 3D studios, configurators, marketing/creative tech, technical education, product visualization.

#### 3. Technical Visualization / Digital Twin / Simulation Developer

**Why:** strongest long-term upside and best use of engineering + multimedia background.  
**Search titles:** `Technical Visualization Developer`, `Digital Twin Developer`, `Simulation Developer`, `Industrial Unity Developer`, `HMI Unity Developer`.  
**Markets:** manufacturing, robotics, drones, aerospace, energy, medical visualization, industrial training.

#### 4. Unity Technical Artist — optimization/tools/runtime

**Why:** preserves technical art identity while avoiding pure art/generalist competition.  
**Search titles:** `Unity Technical Artist`, `Technical Artist`, `Runtime Technical Artist`, `Technical Artist — Optimization`, `Technical Artist — Tools`.  
**Markets:** game studios selectively, simulation studios, Unity agencies, XR studios, mobile/interactive companies.

### 12.2 Secondary controlled target

#### 5. Tools / Pipeline / Python Automation Developer

**Why:** ARA and future extracted Unity tools can provide differentiation.  
**Search titles:** `Tools Developer`, `Pipeline Developer`, `Python Automation Developer`, `Unity Tools Developer`, `Technical Artist — Tools`.  
**Markets:** studios, automation startups, internal tools teams, technical content/research automation.

---

## 13. Roles to downplay or reject in first wave

| Role | Decision | Reason |
|---|---|---|
| 3D Artist / Blender Artist | Downplay | Saturated, art-first, weaker salary leverage, underuses Unity/WebGL |
| Character Artist | Reject as current target | Blender portrait alone is not enough; not primary career direction |
| Shader Technical Artist | Downplay to subskill | Current shader evidence likely insufficient for specialist roles |
| Game Technical Artist AAA | Selective only | High competition, often requires shipped titles and production experience |
| AI Engineer / ML Engineer | Reject as current target | ARA is not enough for ML/AI engineering claims |
| Full-stack Developer | Fallback only | Viable for survival but dilutes positioning |
| QA Manual | Reject unless survival fallback | Does not align with salary/upside; old “Trojan Horse” needs revalidation |
| QA Automation / SDET | Contingency only | Could use engineering background, but not preferred if 3D/Unity route is viable |

---

## 14. Remote-from-Colombia implications by role

| Role family | Remote worldwide probability | Contractor compatibility | Main barrier |
|---|---:|---:|---|
| Unity WebGL / Interactive 3D | High | High | Need strong demo/live proof |
| Real-Time 3D / Technical Visualization | Medium-high | Medium-high | Some companies prefer local/hybrid |
| Tools / Python Automation | High | High | Need code quality and functional tooling proof |
| Unity Technical Artist | Medium | Medium | Studio region restrictions, portfolio expectations |
| XR / Simulation | Medium-low | Medium | Hardware/on-site/lab constraints |
| Digital Twin / Industrial Simulation | Medium-low | Medium | Enterprise/local/industrial access, domain expectations |
| Game Technical Artist | Medium-low | Medium | Competition, time zone, studio constraints |
| Full-stack fallback | High | High | Heavy competition, less differentiation |
| 3D Artist | Medium | Medium | Saturated global freelance market |

**Implication:** the strongest remote-first combination is not “game technical artist”. It is **Unity WebGL + interactive 3D + technical visualization**, with technical art as supporting identity.

---

## 15. Short-term vs long-term role strategy

### 15.1 First 3–6 months

Focus on roles that can accept an academically strong but industry-entry profile:

1. Interactive 3D Developer.
2. Unity WebGL Developer.
3. Real-Time 3D Developer.
4. Technical Visualization Developer.
5. Unity Technical Artist — junior/associate/optimization/tools/runtime.

Avoid first-wave applications to senior AAA technical art, shader specialist, pure AI engineer, pure full-stack, and pure 3D artist roles unless there is a specific favorable posting.

### 15.2 Months 6–12

Expand after portfolio feedback:

- Add XR prototype if XR demand appears.
- Add Unity Editor Tool if tools roles appear.
- Add Three.js/WebGPU micro-project if Web 3D roles appear.
- Publish ARA if AI/tooling roles are producing leads.
- Build stronger shader breakdowns if Unity TA roles demand shaders.

### 15.3 Months 12–24

Move toward higher-upside specialization:

- Technical Visualization Engineer.
- Digital Twin / Simulation Developer.
- Unity Technical Artist — tools/optimization.
- XR/Simulation Developer.
- AI-assisted pipeline/tools developer for 3D production.

Future EU/Portuguese citizenship, if legally obtained, improves access to EU on-site/hybrid roles, but does not change current remote-from-Colombia positioning.

---

## 16. Role-specific risk register

| Risk | Affected roles | Severity | Mitigation |
|---|---|---:|---|
| Academic-only perception | All primary roles | High | Case study must be industry-facing, not thesis-facing |
| No formal studio experience | Technical Artist, Game TA, XR | High | Emphasize project evidence, metrics, systems, documentation |
| No live deployed demo | WebGL/Interactive 3D | Medium-high | Provide stable video if live build is risky |
| AI-assisted development skepticism | All coding roles | Medium-high | Prepare transparent explanation of architecture/debugging/ownership |
| Overclaiming digital twin | Digital Twin/Simulation | High | Use precise terms: technical visualization, assembly visualization |
| Weak shader evidence | Shader TA/Tech Art | Medium | Treat shaders as supporting skill, not specialization |
| ARA instability | AI Tools/Python | Medium-high | Keep secondary until cleaned and documented |
| Too many directions | All | High | Use one primary positioning and targeted variants only |
| Remote restrictions | EU/US employee roles | High | Prioritize contractor/EOR/remote-global filters |

---

## 17. Decisions locked by this section

### 17.1 Strategic decisions

1. The main role family is **Real-Time 3D / Interactive Technical Visualization**.
2. The best marketable title is not `Multimedia Engineer` and not `3D Artist`; it is a hybrid of `Real-Time 3D Developer` and `Unity Technical Artist`.
3. `CAD-to-realtime` is a **core differentiator**, not a standalone job title.
4. `Digital Twin` is a **target market/adjacent role**, not a claim for TwinSight unless the system has real data integration.
5. ARA is a **secondary proof of tooling/automation**, not the professional center.
6. Full-stack is a **fallback**, not a positioning route.
7. Game Technical Artist is a **selective/aspirational route**, not the first filter.
8. Shader Technical Artist is a **future specialization**, not immediate target.

### 17.2 Required downstream consequences

| Future section | Consequence |
|---|---|
| `03_salary_benchmark_and_remote_colombia.md` | Benchmark salaries by the role families defined here, not all 23 raw titles equally |
| `07_portfolio_strategy_and_project_architecture.md` | Portfolio must lead with TwinSight as technical visualization, not generic thesis |
| `08_twinsight_x500_case_study.md` | Case study must explicitly support roles 1–4 above |
| `09_ara_ai_tools_and_secondary_projects.md` | ARA must be framed as secondary tools/automation route |
| `10_github_linkedin_cv_strategy.md` | CV/LinkedIn must use one core headline and targeted variants |
| `11_company_targets_job_boards_recruiters.md` | Company list should prioritize interactive 3D, Unity WebGL, visualization, digital twin, simulation and tools |
| `13_interview_negotiation_and_offer_risk.md` | Interview prep must handle AI-assistance, academic project framing and no formal studio experience |

---

## 18. Open questions for later sections

These are not blockers for role positioning, but must be answered before final strategy.

### 18.1 Salary / compensation

- What are realistic contractor rates from Colombia for Unity/WebGL/interactive 3D?
- How do salaries differ between game studios, simulation companies, industrial visualization and web 3D agencies?
- What is the probability of reaching USD 1.5k, 3k and 6k by timeline?
- Which role family gives the best short-term salary vs long-term upside tradeoff?

Handle in: `03_salary_benchmark_and_remote_colombia.md`.

### 18.2 Portfolio evidence

- Is there a live TwinSight build suitable for recruiters?
- Are screenshots and demo footage ready?
- Are metrics verified in the final thesis document?
- Can any Unity tool be extracted safely for GitHub?
- Is ARA functional enough to publish?

Handle in: `07`, `08`, `09`, `10`.

### 18.3 Market targeting

- Which companies actually hire remote LATAM for Unity/WebGL/technical visualization?
- Which companies require local authorization?
- Which job boards produce low-noise opportunities?
- Which recruiters specialize in Unity/3D/XR/simulation?

Handle in: `11_company_targets_job_boards_recruiters.md`, likely with mode agent.

### 18.4 Skills gap

- Should Alexander prioritize Three.js/WebGPU, XR SDKs, Shader/HLSL, Unity profiling, or Python tools first?
- Which one produces the fastest portfolio proof?
- Which one most improves the first-wave role families?

Handle in: `06` and later skills roadmap sections.

---

## 19. Final role recommendation

The first search wave should target these 5 families, in this order:

1. **Real-Time 3D / Interactive Technical Visualization Developer**
2. **Unity WebGL / Interactive 3D Developer**
3. **Technical Visualization / Digital Twin / Simulation Developer**
4. **Unity Technical Artist — optimization/tools/runtime**
5. **Tools / Pipeline / Python Automation Developer**

The profile should not be marketed as a generic multimedia engineer, generic 3D artist, AI engineer, full-stack developer, or senior technical artist.

The most precise positioning for the rest of the strategy is:

> **Real-Time 3D Developer / Unity Technical Artist focused on interactive technical visualization, CAD-to-realtime optimization, and WebGL deployment.**

This positioning gives enough range to apply across technical visualization, simulation, Unity WebGL, product visualization, creative technology, digital twin-adjacent and selected game technical art roles without making the profile incoherent.

---

## 20. Sources

[^unity_web]: Unity Manual — Web platform. Unity states that Unity supports developing games on the Web platform and that WebGL lets developers publish real-time interactive 3D graphics into a browser. https://docs.unity3d.com/Manual/webgl.html

[^khronos_webgl]: Khronos Group — WebGL: 3D Graphics for the Web. Khronos defines WebGL as a low-level 3D graphics API based on OpenGL ES that brings plugin-free 3D to the web and is implemented directly in browsers. https://www.khronos.org/webgl/

[^langgraph_ga]: LangChain — LangGraph Platform is now Generally Available. LangChain announced LangGraph Platform GA in May 2025 for deploying and managing long-running, stateful agents; relevant to ARA as a tooling/agentic workflow context, not as proof of production-grade AI engineering. https://www.langchain.com/blog/langgraph-platform-ga

[^unity_dt_robotics]: Xiang et al. — Development of a Simple and Novel Digital Twin Framework for Industrial Robots in Intelligent Robotics Manufacturing, 2024. The paper describes a digital twin framework using Unity 3D and a web-based platform for real-time visualization and control in intelligent manufacturing. https://arxiv.org/abs/2410.14934

[^unity_hpc_dt]: Bergeron et al. — Supercomputer 3D Digital Twin for User Focused Real-Time Monitoring, 2024. The paper reports use of Unity 3D for digital twin visualization of HPC systems. https://arxiv.org/abs/2410.00688

[^deep_research_note]: The prior Deep Research output for this section used job postings and salary aggregators such as ZipRecruiter, Indeed and Wellfound. Those sources are treated here as market signals, not as final compensation evidence. Detailed salary validation is deferred to `03_salary_benchmark_and_remote_colombia.md`.
