# STATUS — AG-BIB (agente bibliotecario)

> Rama `agent/biblioteca` · sesión cerrada 2026-08-22 · worktree `E:\Laboral\.worktrees\biblioteca`
> Entrega central: **`biblioteca/MANIFEST.md`** (registro maestro con sourceIds estables para RAG v4).

## Resumen cuantitativo

| categoría | nº | detalle |
|---|---|---|
| Fuentes registradas en MANIFEST | **98** | filas con sourceId único |
| — Libros | 43 | anatomía 5 · nutrición 3 · fuerza/hipertrofia 8 · Low/rehab 6 · cardio 5 · yoga/danza/fisiología 8 · combate 4 · salud sexual 4 |
| — Programas Nippard (repo) | 4 | min-max, powerbuilding 4x, glute, TBTS |
| — Papers relevantes | 14 | combate/nutrición 6 + nutrición/danza/salud sexual 8 |
| — Papers descartados | 5 | editorial, survey, carta, fragmento gobernanza, editorial especial |
| — Papers absurdos | 15 | papers-broma verificados; 3 dups archivados; ninguno borrado |
| — Datasets | 6 | JN collection (97 archivos), RP templates, minmax.json, tbts.json, thenx guides/routines |
| — Docs internos | 11 | análisis, planes, docs clínicos (AG-CLIN), notas BJJ |
| Archivos identificados en inventario | 297 | PyMuPDF + epub OPF + docx core.xml + MD5 |
| Renombrados canónicos (D:\Downloads) | 81 | 0 fallos; formato `Autor-Titulo_Edicion.ext` |
| Duplicados archivados (`_duplicados/`) | 21 + 3 repo | Libros 14 · Papers 1 · Absurdos 3 · JN 1 · raíz 2 · investigacion 3 (commiteados) |
| Extracciones consolidadas | 43 | `biblioteca/extracciones/`: 32 por sourceId + 1 OG preexistente + 8 lotes multi-fuente + 2 chats de diseño (~4,8 M chars) |
| Chats exportados preservados | 43 | en `biblioteca/_chat-exports/` (evidencia + mapeo fuente↔chat); 42 con respuestas recuperadas |
| Commits de la sesión | 7 | ver `git log agent/biblioteca` |
| `npx astro check` | **0 errores** / 0 warnings | 319 archivos |

## Ubicaciones inventariadas

1. `D:\Downloads\Libros\` (+ `Faltan\`) — 44 + 5 archivos
2. `D:\Downloads\Papers\` + `Papers absurdos\` — 21 + 15
3. `E:\Laboral\_pdf_biblia\Planeacion_Integral\investigacion\` — 33 (repo)
4. **Descubiertas durante el inventario:** `E:\Laboral\...chats_extraccion_libros\` (43 exports), `D:\Downloads\JN Training Programs\` (97), `D:\Downloads\RP Training programs\` (57), raíz `D:\Downloads` (2 copias alternas de OG 2ª ed + 6 extracciones OG2E en md).

## Hallazgos clave

1. ~~Los 43 exports de chat NO contenían las respuestas~~ → **CORREGIDO en segunda pasada** (revisión solicitada por el usuario, acertada): las respuestas SÍ están en los exports, en el campo `chat.messages[*].content_list[*].content`; el campo `content` legado viene vacío y ese fue el origen del diagnóstico erróneo inicial. Recuperadas 42/43 (4,8 M chars → `extracciones/`). Único chat sin respuesta: 1787414852273 (web app). Bonus: el chat 1787414859303 contiene **fichas JSON de músculos/nervios/articulaciones (~294 K chars)** — insumo directo para el grafo de AG-ANATOM.
2. `Overcoming_Gravity_-_Steven_Low_1.pdf` **no** es la 1ª ed.: es un escaneo alterno (976 p) de la 2ª ed. Archivado en `D:\Downloads\_duplicados\`.
3. `The Physiology of Yoga PDF.pdf` es un **resumen Bookey**, no el libro original de McGonigle (el original no está en la biblioteca).
4. La extracción de OG 2ª ed **sí existía** fuera del repo (`OG2E_extraccion_parte1..6.md` en la raíz de Downloads): consolidada en `biblioteca/extracciones/low-overcoming-gravity-2ed.md`.
5. Los PDF de `investigacion\` están ignorados por git (`*.pdf`) y viven solo en el checkout principal: no se renombraron ahí para no romper a los agentes en paralelo; nombres canónicos propuestos en MANIFEST §4/§9.
6. `85-92.pdf` resultó ser un fragmento sobre **gobernanza del deporte** (fuera de alcance) → descartado.
7. El chat "Tendinitis de Codo" (1787415094989) en realidad adjuntó `ijrb-19-5` = revisión narrativa de **eyaculación precoz** (Raveendran 2021).

## Pendientes / dudas para el usuario

1. **Renombrado post-merge en `investigacion\`** (checkout principal): aplicar los 7 nombres propuestos (OG 2ª ed, tendonitis, Min-Max, TBTS, Glute, Powerbuilding). Los docx ya están commiteados.
2. **Años por confirmar** al extraer: Prabowo (~2025), Ricci (2021), Lenetsky (~2017), James BJJ (~2014), Nippard body-recomp/fundamentals (s/f).
3. **Salud sexual** (4 libros + 8 papers): no hay agente dueño en el plan (¿AG-CLIN con gate? ¿nuevo agente?). Decidir antes de construir RAG de ese dominio.
4. **Physiology of Yoga**: ¿conseguir el libro original (McGonigle & Moses) para sustituir el resumen Bookey?
5. **Colecciones JN/RP**: registradas como datasets colectivos (§10). Si algún agente necesita entradas por programa individual, abrir ticket para granular.
6. **Carpeta `Papers absurdos`**: se conserva intacta (solo dups movidos). Si se quiere limpiar algún día, decisión del usuario — AG-BIB no borra.
7. **Calidad de las extracciones recuperadas**: son rondas crudas del asistente (algunas fuentes tienen 2–4 rondas: extracción inicial + auditoría + complemento). Antes de ingestar al RAG v4, AG-FIT/AG-ANATOM/AG-NUTRI deben quedarse con la ronda final/completa de cada fuente y validar contra el PDF (la auditoría de cada chat ya marca ⚠️ huecos visuales).

## Próximo paso recomendado

La cola Gemini se reduce al **Bloque A** del MANIFEST §18 (empezando por `grays-anatomy-students-4ed` y `norkin-joint-structure-6ed`). En paralelo, AG-FIT ya puede ingestar las extracciones recuperadas de hipertrofia/rehab/tendinopatías (Nippard, Israetel, Horschig, Low) al `rag/fitness.json`.
