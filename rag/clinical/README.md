# rag/clinical — dominio clínico (AG-CLIN)

RAG v4 del módulo clínico. Construcción:

```bash
npx tsx scripts/build_rag/index.ts --domain clinical
npx tsx scripts/build_rag/index.ts --index
```

## Fuentes activas con chunks (rag/clinical.json)

| sourceId | Origen | Chunks |
|---|---|---|
| `plan-accion-tdah-ansiedad-social` | PDF interno del usuario (`_pdf_biblia/Planeacion_Integral/investigacion/plan_accion_tdah_ansiedad_social-1.pdf`) — solo estrategias conductuales parafraseadas | 15 |
| `reporte-clinico-neurodesarrollo` | PDF interno del usuario — SOLO psicoeducación funcional del bucle de mantenimiento; cero contenido diagnóstico | 1 |
| `clinical-protocols-dataset` / `clinical-routines-dataset` | Datasets de la app (`src/data/clinical/{protocols,routines}.ts`), citados por id de sección | 6 |

## Sub-RAG salud sexual (mandato usuario, TAREAS_USUARIO.md)

Registrado en `manifest.json` con bloque `gates` por fuente: **info basada en fuentes + derivación a profesional; JAMÁS intervención ni consejo médico directo; disclaimer visible obligatorio**.

- 4 libros: `metz-coping-pe-2003`, `kaleb-kegel-men-2019`, `zilbergeld-new-male-sexuality-1992`, `wuh-sexual-fitness-2002`.
- 6 papers relevantes de Sexual Medicine 2015 + Raveendran 2021 (los 3 papers descartados por AG-BIB no se registran).
- Los sourceIds cuadran con `biblioteca/MANIFEST.md` (§8 y §13). Las extracciones ya existen en `biblioteca/extracciones/`; el chunking fino llegará por puente Gemini Flash (`biblioteca/_llm-outputs/gemini-flash/`) → se añadirá como `fuentes/<sourceId>--<slug>.md` y el build incorporará los chunks sin cambiar el manifest.
- Mientras no haya chunks, el builder emite warnings (esperados) y las fuentes NO aparecen en `rag/clinical.json`.

## Regla dura del dominio

Solo estrategias de manejo conductual ya documentadas en fuentes propias del usuario o datasets de la app. Nada de contenido diagnóstico ni framing de dispositivo médico. Disclaimer visible garantizado en toda superficie clínica (`ClinicalDisclaimerNote.tsx`).
