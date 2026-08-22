# Plan de extracción con Gemini — AG-NUTRI

> Formato: mismo protocolo que AG-ANATOM (sub-prompt §0 de `docs/agents/PROMPTS_INICIALES.md`).
> Qué necesita el usuario para ejecutar el pipeline: acceso a Gemini (Flash) con capacidad de visión, y pasar las páginas como imágenes (rango por llamada, NUNCA el libro completo). Para cada sección: renderizar páginas a PNG (~150 dpi es suficiente para tablas) y adjuntarlas al prompt §0 con `{LIBRO}` y `{SECCIÓN}` sustituidos.
> Offset de páginas: S1/S3: página impresa = PDF − 16 · S2 (Maughan): página impresa = PDF − 18.

## Pendiente de extracción asistida (no cubierto por la extracción local de texto)

### S2 — Maughan, Nutrition in Sport (2000) [prioridad ALTA]

| # | Sección | Páginas impresas (PDF) | Qué buscar (tablas/figuras que el texto no capturó) |
|---|---|---|---|
| M1 | ch5 §tablas CHO | 79–84 (97–102) | Tabla 5.5 estudios HCHO vs MCHO: duración, ingesta g/kg, efectos rendimiento |
| M2 | ch7 figuras supercompensación | 100–104 (118–122) | Figs 7.2–7.5: protocolos Bergström/Sherman, dosis-respuesta CHO-proteína |
| M3 | ch17 tablas composición | 228, 233 (246, 251) | Tabla 17.1 (composición sudor) y 17.2 (bebidas comerciales: Na/K/CHO g/100ml) |
| M4 | ch19 figuras rehidratación | 261–262 (279–280) | Fig 19.1–19.2 (volumen orina vs volumen/sodio ingerido), tabla 19.1 |
| M5 | ch27 figuras creatina | 369–371 (387–389) | Figs 27.1–27.4 (curvas de carga, CHO+creatina) |
| M6 | ch26 tablas ergogénicos | 356–366 (374–384) | Clasificación completa de ayudas con su categoría de evidencia |
| M7 | ch15–16 figuras termorregulación | 203–225 (221–243) | Figs de déficit hídrico vs rendimiento/temperatura (verificar curvas 1–4%) |

### S3 — NSCA Essentials 4ª ed (2016) [prioridad ALTA]

| # | Sección | Páginas impresas (PDF) | Qué buscar |
|---|---|---|---|
| N1 | ch9 tabla 9.x macros DRIs | 185–190 (201–206) | DRIs de macros/micronutrientes para UI de referencia |
| N2 | ch10 tabla 10.1 pre-competición | 204 (220) | Tabla resumen pre-evento con ejemplos de alimentos y timing |
| N3 | ch10 tabla 10.2/10.3 proteína por deporte | 213–214 (229–230) | Tabla proteína por deporte (ya parcialmente capturada: completar filas no legibles) |
| N4 | ch10 tabla 10.4 kcal | 217 (233) | Verificar filas completas de kcal/lb y kcal/kg por sexo y nivel |
| N5 | ch11 tablas dosis-respuesta | 243–248 (259–264) | Fig 11.4 (creatina % mejora), tablas de β-alanina y HMB |
| N6 | ch10 diagramas flujo nutrición por deporte | 208–212 (224–228) | Figuras de decisión pre/durante/post por tipo de deporte |

### S1 — Sport Nutrition 3G (2022) [prioridad BAJA]

| # | Sección | Páginas impresas (PDF) | Qué buscar |
|---|---|---|---|
| G1 | ch1 §1.4.2 pre-event meal | 34–37 (50–53) | Pautas de comida pre-competición del libro S1 (corroboración) |
| G2 | ch2 figuras rango CHO | 60–61 (76–77) | Figuras de rango de CHO diario |
| G3 | ch5 figuras balance energético | 214–224 (230–240) | Ecuaciones y diagramas de TEE (BMR/palatabilidad) |

## Orden de ejecución recomendado
1. M3 + M4 (hidratación: tablas que faltan para el módulo v1)
2. N2 + N3 + N4 (tablas que alimentan la calculadora)
3. M1 + M2 (carbohidratos)
4. N5 + M5 + M6 (suplementos)
5. M7, N1, N6, G1–G3 (completar)

## Reglas del pipeline
- Una sección por llamada; verificar continuidad de páginas (sin huecos).
- Cada markdown de sección → `rag/nutricion/extracciones/<libro>-<seccion>.md` con plantilla §0.
- Al terminar cada libro: actualizar `99-resumen.md` (matriz sección → archivo → reglas).
- Parafrasear SIEMPRE; marcar inconsistencias con ⚠️; ni una afirmación sin página.
