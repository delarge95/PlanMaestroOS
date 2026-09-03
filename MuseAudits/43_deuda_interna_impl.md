# 43 — Deuda interna de `impl/` (autocrítica honesta)

> Lo que sé que está duplicado o pendiente en mi propia carpeta. Ningún punto rompe
> el verde actual; todos tienen dueño y puerta.

1. **Doble briefing**: `bridges/morningBriefing.ts` (UI, escala 1-5 + dolor) vs
   `worker/jobs.ts buildMorningPlan` (worker, energía categórica). Canónico: el worker
   consume la FORMA del bridge. Puerta: `MorningInput` único compartido al aterrizar (E5).
2. **Doble MEV**: `bridges/morningBriefing.applyMinViable` vs doc 38. Son el mismo;
   el doc manda el concepto, la función manda el código. Sin acción (documentado aquí).
3. **`CompanyLite` duplicado** en `fitScore.ts` y `composeVariant.ts` (difieren a propósito:
   scoring vs composición). Al aterrizar: un solo tipo en `careerContracts.ts` (E3).
4. **`FitReason` duplicado** en `fitScore.ts` y `queries.ts fitsEdge`. Unificar al aterrizar (E1+E3).
5. **Scripts TS-importadores** (`wearableRunner`, `langChunks`, `restoreBackup`) exigen
   tsx; los 5 puros corren con node. Puerta: documentado en cada cabecera. OK.
6. **`sw.js` sin test**: requiere navegador. Puerta: checklist 41 §PWA al aterrizar (M7).
7. **Micros R1-R5 `usda-estimado`**: aproximaciones redondeadas, no análisis de laboratorio.
   Puerta: curación RP Kitchen (archivo 39 §D) antes de mostrar como exacto.
8. **Landmarks `inferred`**: la tabla 34 es semilla experta; cada regla final verifica
   contra biblioteca (puerta en 34 §conversión-3). Sin atajos.
9. **`Courses 2025.xlsx`**: `courseROI.ts` funciona sin él; el "157 cursos" sigue
   placeholder hasta que el archivo aparezca en disco.
10. **Numeración**: no existe archivo `43` previo; este documento cierra la serie 30-43
    (el 33 ya listaba S1-S5 pendientes entonces, hoy hechos salvo aterrizaje en repo).
