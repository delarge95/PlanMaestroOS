# doc-29C — Benchmark de breakdowns ArtStation (parafraseado para RAG)

<!-- chunk
id: doc29c-taxonomia
topic: artstation-breakdown
tags: taxonomia, tipos, breakdown
section: §6
entities: project:twinsight-x500, project:blender-portrait
-->
Taxonomía de breakdowns técnicos con encaje para TwinSight: optimization (antes/después de geometría, budgets — muy alto), pipeline (CAD → Blender → Unity → WebGL — muy alto), interaction (selección, UI, cámara, estados — muy alto), visual-mode (X-ray, ghosted, blueprint, thermal — muy alto), UX evaluation (SUS, NASA-TLX, Think-Aloud — muy alto), shader/tool/profiling (alto). Para el retrato Blender: sculpt, topology, UV, skin material, groom (alto); lighting/render (medio-alto); conversión real-time (alto si se hace). El retrato se posiciona como evidencia de apoyo de fundamentos 3D, nunca como prueba principal para roles Unity WebGL.

<!-- chunk
id: doc29c-post-twinsight
topic: artstation-breakdown
tags: estructura, post, twinsight
section: §7.1, §8
entities: platform:artstation, project:twinsight-x500
-->
Estructura ideal del post ArtStation de TwinSight: 01 cover image (dron con UI técnica, explosionado con etiquetas, cross-section con panel o grid de modos — legible a thumbnail), 02 vídeo 30–60 s incrustado arriba, 03 resumen de una frase, 04 rol/contribución, 05 capturas finales, 06 feature breakdown, 07 pipeline CAD-to-realtime (CAD source → conversión/tessellación → cleanup Blender → low-poly → UV/bake → Unity → WebGL, con before/after de triángulos, wireframes, fasteners modulares y limitaciones), 08 métricas de optimización (95.617 tris desde 6.5M+; 12 participantes; SUS 91.88; NASA-TLX 8.69 vs 19.89; 96 registros — evaluación formativa académica), 09 grid de modos visuales (thermal-style = cualitativo, no simulación física), 10 sistemas Unity (selección, cámara, exploded, clipping, modos, bottom-sheet, metadata), 11 UI/paneles, 12 resultados de evaluación, 13 tools, 14 limitaciones, 15 links.

<!-- chunk
id: doc29c-post-retrato
topic: artstation-breakdown
tags: estructura, post, retrato
section: §7.2, §9
entities: platform:artstation, project:blender-portrait
-->
Estructura ideal del post del retrato Blender: cover render, turntable/turno de vídeo, resumen corto, reference board, sculpt stages (blockout → mid → final), topology (face loops para deformación), UVs (layout y densidad), texture maps, skin shader/material + ojos, grooming (cejas, barba, pestañas, guías), lighting setup, final renders (2–4 imágenes), nota real-time opcional, tools y lessons learned. Sección "technical focus" recomendada: decisiones de topología, layering de materiales, setup de groom, optimización de render, organización de texturas y posible camino de conversión real-time.

<!-- chunk
id: doc29c-checklists
topic: artstation-checklist
tags: checklist, publicacion, errores
section: §15, §16
entities: platform:artstation, project:twinsight-x500, project:blender-portrait
-->
Checklist de publicación ArtStation. TwinSight: cover legible a thumbnail, vídeo <90 s cerca del inicio, proyecto explicado en 2 frases, rol claro, Unity WebGL/selección/explosionado/cross-section/modos visuales/optimización CAD/métricas visibles, limitaciones declaradas, links de GitHub/portafolio/demo añadidos, tags añadidos. Retrato: render final fuerte de cover, turntable o secuencia, referencias, etapas de escultura, topology, UVs, texture maps, groom si aplica, lighting, tools y contribución técnica clara. Errores comunes: solo renders finales, sin wireframes, sin métricas, intro académica larga, demasiado texto, sin role statement, uso de IA poco claro, links rotos, sobre-claim de digital twin, ocultar restricciones WebGL.

<!-- chunk
id: doc29c-tools-tags
topic: artstation-breakdown
tags: tools, tags, orden
section: §12, §13, §19
entities: platform:artstation, project:twinsight-x500, project:blender-portrait
-->
Tools por asset (solo las realmente usadas): TwinSight — Unity, C#, Unity WebGL, URP, UI Toolkit, Shader Graph, Blender, GitHub (Marmoset/RizomUV solo si se usaron en el pipeline final); retrato — Blender, Cycles/Eevee Next, Substance 3D Painter, RizomUV/UV tools de Blender, Marmoset Toolbag, Photoshop/Krita. Tags: TwinSight (Unity, Unity WebGL, Technical Art, Real-Time 3D, Technical Visualization, CAD Optimization, Drone, Interactive 3D, CSharp, URP, Blender, Digital Twin con cautela, Simulation); retrato (Blender, Character Art, Portrait, Realistic Character, Topology, Grooming, Skin Shader, Lookdev, 3D Art, Technical Art). Orden ArtStation: 1) breakdown TwinSight, 2) breakdown del retrato, 3) estudios de shader/modos si se separan. Regla de plataforma: TwinSight es el insignia, el retrato secundario, y ArtStation debe mostrar proceso, no solo beauty shots.
