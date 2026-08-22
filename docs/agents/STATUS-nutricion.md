# STATUS — AG-NUTRI (rama agent/nutricion)

> Ciclo 1 · 2026-08-22. Estado: **Fase 0 (extracción + RAG) y Fase 1 (UI) completadas.**

## Commits del ciclo

| Commit | Contenido |
|---|---|
| `c45ba6c` | chore(nutricion): dedup fuentes — 00-fuentes.md |
| `b93f4a7` | feat(nutricion): extracción local PyMuPDF — 112 reglas citadas + plan Gemini |
| `be5a4b4` | feat(nutricion): rag/nutrition.json v4 (119 reglas, 15 chunks) + validador |
| `2527d10` | feat(nutricion): Fase 1 UI — calculadora + targets + día tipo + disclaimer |
| (este) | docs: STATUS + ticket nav |

## Fuentes identificadas (dedup)

1. **S1** `sport-nutrition_compress.pdf` = *Sport Nutrition*, 3G E-learning/Bibliotex 2022 (ISBN 978-1-98467-526-2), 358 pp. expert-book recopilado → complementaria.
2. **S1-dup** `sport-nutrition_compress_compressed.pdf` = el MISMO libro (mismos metadatos/paginación) → **descartado**.
3. **S2** `Nutrition In Sport - Maughan.pdf` = IOC Encyclopaedia Vol. VII (Maughan ed., 2000), 698 pp → canónica en hidratación, electrolitos, creatina, cafeína, CHO.
4. **S3** `haff...essentials_of_strength.pdf` = NSCA *Essentials* 4ª ed (2016), 752 pp → canónica en proteína, energía, peri-entreno, suplementos (más moderna).
   - Offsets verificados: S1/S3 página impresa = PDF − 16 · S2 = PDF − 18.
   - El `.txt` del NSCA (10 KB, capa incompleta) se ignoró; extracción directa del PDF con PyMuPDF.

## Reglas extraídas vs pendientes de Gemini

- **Extraídas localmente (texto, sin OCR): 119 reglas con cita capítulo/página** en `rag/nutrition.json` v4.0.0: proteína total/distribución (22), carbohidratos diarios/peri-entreno (27), energía por objetivo (17), hidratación/electrolitos (16), suplementos (28), miscelánea (9). Cobertura por archivo en `rag/nutricion/extracciones/99-resumen.md`.
- **Pendiente de pipeline Gemini (gráficos/tablas)**: 16 secciones M1–M7 (Maughan), N1–N6 (NSCA), G1–G3 (S1) detalladas en `rag/nutricion/extracciones/plan-extraccion-gemini.md` — tablas de composición de sudor/bebidas, tablas 10.1–10.4 NSCA, figuras de dosis-respuesta de creatina/cafeína/glicógeno.

## Validación

- `npx tsx rag/nutricion/scripts/validar-rag.ts` → OK (toda regla con cita y rango o confianza qualitative; falla si hay afirmación numérica sin fuente; detecta ids dangling y chunks sin cobertura).
- `npx astro check` → **0 errores** (36 hints preexistentes del repo, no de este dominio).
- `npm test` → **24/24 verdes** (16 nuevos del módulo: calculator + cross-check contra el RAG).
- No se tocó ningún archivo fuera del OWN (verificado con git status por commit). Nav: **ticket abierto** en `docs/agents/tickets.md` para que AG-CORE añada la entrada aditiva (la ruta `/app/fitness/nutrition` ya funciona directa).

## Decisiones tomadas

1. **Conflicto CHO/hora** (Maughan 2000: 30–60 g/h vs NSCA 2016: 30–90 g/h): resuelve NSCA (autoridad prioridad 1, más moderna); el conflicto queda registrado en el RAG y el validador lo reporta como INFO.
2. **Mapeo horas/semana → nivel de actividad** (tabla 10.4 NSCA): inferencia PROPIA documentada (<5 h→light, 5–10→moderate, >10→heavy), marcada como tal en UI y tests.
3. **Hidratación diaria** = base 2.5 L (citado) + 600–1200 ml/h de entreno (citado); la suma diaria es inferencia práctica, etiquetada.
4. **Store local** `nutrition-local-v1` (zustand persist) con sanitización de inputs y TODO de migración a UserState de CORE documentado en el archivo.
5. Suplementos en UI: solo creatina y cafeína (doble fuente S2+S3); el resto (β-alanina, HMB, bicarbonato) queda en RAG sin superficie hasta extracción Gemini N5.
6. Día tipo SIN recetas: franjas desayuno/pre/durante/post/cena con macros citados; alimentos = gastronomía (puente futuro por contrato de macros).

## Qué necesita el usuario para el pipeline Gemini

- Acceso a Gemini (Flash) con visión; renderizar las páginas listadas en `plan-extraccion-gemini.md` a PNG (~150 dpi) por rango de sección.
- Ejecutar el sub-prompt §0 de `docs/agents/PROMPTS_INICIALES.md` UNA sección por llamada, guardando cada markdown en `rag/nutricion/extracciones/<libro>-<seccion>.md`.
- Al terminar: actualizar `99-resumen.md` y re-ejecutar `npx tsx rag/nutricion/scripts/validar-rag.ts`.

## Próximos pasos (Fase 2+)

- Reglas `DomainRule` nutricionales en el motor de CORE (dependencia: contratos AG-CORE Ola 1).
- Migración a UserState cuando CORE lo entregue (peso real, sesiones → horas).
- Puente con gastronomía (macros de recetas → ¿encaja en el target del día?).
- Sugerencias proactivas post-sesión (ventana de recuperación) vía EventBus.
