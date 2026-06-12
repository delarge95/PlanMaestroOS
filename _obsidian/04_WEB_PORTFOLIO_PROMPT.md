---
status: current
type: prompt
last_updated: 2026-06-11
tags:
  - portfolio
  - web
  - prompt
---

# Prompt para generar el portafolio web con Codex

```text
Quiero que construyas un portafolio web publico para Alexander Woodcock Salomon, orientado a empleabilidad internacional remota.

Contexto:
- La fuente de verdad esta en E:\Laboral.
- Lee primero estos archivos:
  - E:\Laboral\20_portfolio_copy_and_site_structure.md
  - E:\Laboral\08B_twinsight_case_study_final_structure.md
  - E:\Laboral\08_twinsight_x500_case_study.md
  - E:\Laboral\21B_twinsight_demo_video_final_plan.md
  - E:\Laboral\19B_github_readme_twinsight_final.md
  - E:\Laboral\17_cv_base_and_role_variants.md
  - E:\Laboral\18_linkedin_final_rewrite.md
  - E:\Laboral\29_portfolio_case_study_benchmark.md
  - E:\Laboral\29B_demo_reels_benchmark.md
  - E:\Laboral\29C_artstation_breakdown_benchmark.md

Objetivo:
Crear una web de conversion laboral, no una pagina personal generica. El visitante debe entender en menos de 60 segundos:
1. quien es Alexander;
2. que rol busca;
3. por que TwinSight X500 es relevante;
4. que tecnologias puede defender;
5. donde ver demo, GitHub, LinkedIn y CV;
6. como contactarlo.

Posicionamiento principal:
Real-Time 3D Developer / Unity Technical Artist focused on interactive technical visualization, CAD-to-realtime optimization, and Unity WebGL deployment.

Idioma publico:
Ingles.

Estructura MVP:
- Home
- TwinSight X500
- Work / Projects
- About
- Contact

Prioridad visual:
- TwinSight X500 debe ser la senal principal del primer viewport.
- No hagas una landing page generica.
- No ocultes TwinSight detras de tarjetas secundarias.
- Usa imagenes, video thumbnails o capturas reales si existen en el repo.
- Si faltan assets, crea placeholders visuales claramente reemplazables, pero deja la estructura lista para insertar screenshots, demo reel y live demo.

Contenido obligatorio:
- Hero con posicionamiento claro.
- CTA principal: View TwinSight X500.
- CTA secundaria: GitHub / LinkedIn / Download CV.
- Caso TwinSight con:
  - problem;
  - solution;
  - my role;
  - technical stack;
  - CAD-to-realtime pipeline;
  - Unity/WebGL implementation;
  - interaction systems;
  - visual modes;
  - optimization/performance section;
  - evaluation/results;
  - limitations and honest disclosure.
- Proyectos secundarios:
  - ARA Framework, solo como ruta secundaria de AI tooling;
  - Blender portrait technical study, como complemento visual/technical art;
  - AI News Aggregator solo si no diluye el foco.
- About breve y orientado a contratacion.
- Contact con disponibilidad remote contractor from Colombia.

Reglas de credibilidad:
- No afirmar que TwinSight es un digital twin industrial completo si no tiene datos IoT/live telemetry.
- Presentarlo como technical visualization / digital-twin-adjacent / assembly inspection prototype.
- Mencionar que es academic/portfolio prototype cuando corresponda.
- No inventar links, metricas ni empleadores.
- Usar placeholders explicitos para:
  - [LIVE_DEMO_URL]
  - [GITHUB_URL]
  - [DEMO_VIDEO_URL]
  - [LINKEDIN_URL]
  - [CV_PDF_URL]
  - [EMAIL]

Diseno:
- Profesional, tecnico, sobrio, visual.
- Mas cercano a portfolio de technical artist / real-time 3D / product visualization que a SaaS marketing.
- Responsive desktop/mobile.
- Texto escaneable; evitar parrafos largos.
- Usar secciones densas pero limpias.
- Incluir tarjetas de tecnologia, bloques de metricas y breakdowns visuales.
- Evitar claims inflados y lenguaje vago de "creative technologist" sin prueba tecnica.

Implementacion:
- Inspecciona el repo antes de elegir framework.
- Si no hay proyecto web existente, crea uno con Vite + React + TypeScript o el stack mas simple y mantenible.
- Usa componentes reutilizables para ProjectCard, MetricBlock, CaseStudySection, TechTag, CTAButton.
- Crea datos estructurados en un archivo local para proyectos y enlaces.
- Incluye README con instrucciones de desarrollo.
- Inicia el dev server al final y dame la URL local.
- Verifica con browser/screenshot que la home y TwinSight se ven bien en desktop y mobile.

Entregable:
Una web funcional lista para reemplazar placeholders por links/assets finales, con TwinSight como flagship y sin romper la coherencia estrategica de los documentos fuente.
```

