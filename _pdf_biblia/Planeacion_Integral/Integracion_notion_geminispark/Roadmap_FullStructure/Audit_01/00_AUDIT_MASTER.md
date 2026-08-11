# Auditoría exhaustiva — PlanMaestroOS (post-implementación de las 7 fases)

> **Limitación declarada:** al momento de esta auditoría no fue posible leer el repo en vivo
> (GitHub no respondió). El análisis se basa en: (1) el log completo de trabajo del agente,
> (2) los reportes del usuario sobre la UI actual, (3) los documentos de especificación.
> Todo ítem marcado como **[VERIFICAR EN CÓDIGO]** incluye el comando exacto que el asistente
> debe ejecutar y el resultado esperado. Si el resultado difiere, es FALLA y se corrige.

---

## 1. Veredicto general

| Dimensión | Estado | Comentario |
|---|---|---|
| Cobertura estructural de las 7 fases | **Cumplida en apariencia** | Existen commits, rutas y archivos para cada fase; `astro check` pasa con 0 errores |
| Cumplimiento funcional real | **No verificado** | El log no muestra NINGUNA evidencia de QA manual, capturas, pruebas de persistencia ni pruebas de teclado exigidas en cada fase |
| UX / carga cognitiva | **FALLA confirmada por usuario** | Navegación con todas las secciones en línea; jerarquía de progresiones sin corregir |
| Seguridad (tokens/IA) | **Sospecha P0** | El cliente IA se creó en `src/lib/ai/` (código de app), no en `worker/` como exigía la spec |
| Integración Notion real | **Sospecha P0** | El log no muestra scripts de sync, snapshots ni `public/data/*.json`; los datos parecen archivos locales hardcodeados |
| Testing automatizado | **FALLA** | Solo se corrió `astro check`; no hay tests de contratos, adaptadores ni reglas de negocio |
| Evidencia por fase | **FALLA** | La spec exigía tabla de cierre con evidencia por ítem y capturas; ninguna fase la entregó |

**Conclusión:** el trabajo es un *andamiaje* correcto en estructura de archivos, pero está lejos de
"roadmap 100% completo". Hay deuda P0 en seguridad, datos y UX que debe corregirse antes de seguir.

---

## 2. Auditoría fase por fase

### Fase 1 — Verificación (commit `97b4ad1`)
**Hecho (según log):** contrato `Task`, rutas anidadas de fitness, rediseño de `TodayTabWorkspace`,
eliminación del botón "Modo Canvas".

**Brechas:**
- **[VERIFICAR EN CÓDIGO]** `01_phase_01_verification.md` exigía tabla de cierre con evidencia por
  ítem (A1–D3). El log no la muestra. Ejecutar: la checklist completa de ese documento AHORA.
- **[VERIFICAR EN CÓDIGO]** Persistencia: `Activar rutina → recargar → sigue activa` y
  `registrar sesión → recargar → sigue, sin duplicarse`. No hay evidencia de que se haya probado.
- **[VERIFICAR EN CÓDIGO]** Top 3: `grep -rn "slice(0, 3)" src/components/today/` o equivalente —
  debe existir un límite duro de 3, no solo "mostrar pocas".
- **[VERIFICAR EN CÓDIGO]** `grep -rn "NOTION" src/components src/pages` → resultado esperado: 0.
  Si aparece algo: FALLA P0.
- Eliminación de "Modo Canvas": aceptable (la spec permitía no mostrarlo si no existe), pero el
  modo canvas sigue en el roadmap; crear issue `canvas-mode` para no perderlo.

### Fase 2 — Fitness (commit `ad81121`)
**Hecho:** skills, prehab, guía de cargas, dashboard, `validateFitness.ts` (44 steps, 9 mappings).

**Brechas:**
- **FALLA confirmada por usuario:** la jerarquía de progresiones NO quedó como se acordó
  (ruta como `h1` visual, paso como `h2`, filas compactas `01 Nombre`, sin tarjetas grandes).
  El agente editó `SkillsHub.tsx` y `MyPracticeSummary.tsx` pero el resultado visual no cumple.
  → Corrección completa en `fixes/02_skills_hierarchy_fix.md`.
- **[VERIFICAR EN CÓDIGO]** `npx tsx scripts/validateFitness.ts` debe correr en CI
  (`grep -rn "validateFitness" .github/workflows/`). Si no está en el pipeline, solo corre a mano:
  FALLA (la spec lo exigía bloqueante).
- **[VERIFICAR EN CÓDIGO]** KPIs en `ProgressDashboard.tsx`: buscar el array de KPIs y confirmar
  `slice(0, 4)` o constante `MAX_KPIS = 4`.
- **[VERIFICAR EN CÓDIGO]** PRs por variante: el tipo `PersonalRecord` debe incluir
  `variant`/`equipment`. `grep -n "variant" src/lib/fitness/prTracker.ts` o donde viva.
- **[VERIFICAR EN CÓDIGO]** El check-in de dolor 0–10 debe persistir y aparecer en el historial
  de la sesión, no solo renderizarse.

### Fase 3 — Clínico (commit `660fa4d`)
**Hecho:** `UnblockPanel`, rutinas, protocolos, `StaleTaskCard`.

**Brechas:**
- **[VERIFICAR EN CÓDIGO]** El timer de `Empezar 10 min` debe existir y al terminar mostrar
  `¿Seguir o soltar?` con dos botones. `grep -rn "Seguir o soltar" src/`.
- **[VERIFICAR EN CÓDIGO]** `StaleTaskCard` descartada no reaparece el mismo día: buscar
  persistencia del dismiss (fecha guardada), no solo estado en memoria.
- **[VERIFICAR EN CÓDIGO]** Protocolos: máximo 5 líneas sin expandir + enlace `Ver documento`
  a los PDFs reales. Confirmar que los PDFs existen en `public/` o la ruta usada.

### Fase 4 — Laboral (commit `0a99368`)
**Hecho:** today, roadmap, simulador de portafolio, proyectos, pipeline, cursos, noticias.

**Brechas:**
- **[VERIFICAR EN CÓDIGO]** Regla dura "UNA próxima acción por aplicación": debe validarse en datos
  (`applications.ts` o schema), no solo en UI. Buscar validación en `src/data/contracts/`.
- **[VERIFICAR EN CÓDIGO]** Timeline inmutable de empresas: ningún handler debe hacer
  `delete`/`splice` sobre el timeline; solo append + `archived`. `grep -rn "splice\|filter.*timeline" src/components/career/`.
- **[VERIFICAR EN CÓDIGO]** Banner `Simulación de referencia — no es la plataforma real`
  permanente en las 4 pestañas del simulador. `grep -c "Simulación de referencia" src/components/career/PortfolioSimulator.tsx` → ≥1, y revisar que no se oculte al cambiar de pestaña.
- **[VERIFICAR EN CÓDIGO]** `Exportar checklist` genera texto copiable real (clipboard o textarea).

### Fase 5 — Idiomas (commit `4311956`)
**Hecho:** alemán (teoría, vocabulario, speaking), inglés (tracks).

**Brechas:**
- **P0 probable — Speaking con IA:** `SpeakingPractice.tsx` llama a IA. Si la llamada va directa
  desde el cliente con una key en el bundle, es **FALLA P0 de seguridad**. Ver siguiente sección.
- **[VERIFICAR EN CÓDIGO]** `spacedRepetition.ts` persiste `lastReviewed`/`easeFactor` por ítem
  y sobrevive a recarga.
- **[VERIFICAR EN CÓDIGO]** Los enlaces `Ver libro` apuntan a PDFs que existen en el deploy.
- **[VERIFICAR EN CÓDIGO]** El contenido de `germanCourse.ts` es redacción propia (spot-check
  de 3 lecciones contra copia literal de libros).

### Fase 6 — Gastronomía (commit `13ef5b9`)
**Hecho:** biblioteca, planes/macros, cola "Ver más tarde".

**Brechas:**
- **[VERIFICAR EN CÓDIGO]** Cola paginada: `SavedInbox` debe cortar a 10 items visibles.
- **[VERIFICAR EN CÓDIGO]** `capture-saved.ts`: MVP = formulario manual. Si hay scraping
  automático de FB/IG, verificar que no viole ToS ni rompa en build estático; lo esperado en MVP
  es captura manual + oEmbed de YouTube.

### Fase 7 — IA (commit `83a5b76`)
**Hecho:** cliente IA, `AiAction`/`AiDraftReview`, RAGs "fijos" y "dinámicos", 4 jobs, acciones por sección.

**Brechas (las más graves del proyecto):**
1. **P0 — Ubicación del cliente IA.** Está en `src/lib/ai/client.ts`. Si este código se importa
   desde componentes de la app Astro desplegada en GitHub Pages, la API key viaja al navegador.
   La spec (01_system_architecture_and_security + 07_phase_07) exigía worker/endpoint privado.
   → Corrección en `fixes/03_security_and_worker.md`.
2. **P0 — Los jobs no tienen dónde correr.** `morningPlan.ts` etc. son archivos sueltos. Sin
   scheduler (GitHub Actions cron o worker con trigger), no son "automatizaciones diarias",
   son código muerto. → Misma corrección.
3. **RAGs casi con seguridad son stubs.** Un RAG real requiere embeddings + índice + retrieval.
   `staticRag.ts`/`dynamicRag.ts` probablemente son arrays de texto. Si no hay retrieval real,
   el copy de la UI no debe prometer "respuestas basadas en tu biblioteca".
   → Regla: o se implementa retrieval mínimo real, o se etiqueta como `Beta: respuestas sin fuentes`
   y `Datos usados` muestra exactamente lo que se envió al modelo.
4. **Regla de aprobación humana:** verificar que NINGÚN camino de código persiste/envía sin pasar
   por `AiDraftReview`. `grep -rn "fetch(" src/lib/ai/ src/components/ai/` y revisar que no haya
   auto-save tras generar.

---

## 3. Auditoría contra los documentos de roadmap

### 3.1 Los 17 documentos del roadmap (00–17)
**[VERIFICAR EN CÓDIGO]** `ls docs/roadmap/` debe contener los 17 + índice. Si no están copiados
al repo, copiarlos tal cual desde el paquete generado (son la fuente de verdad del proyecto).

### 3.2 Los 11 documentos de estructura completa
**[VERIFICAR EN CÓDIGO]** `ls docs/architecture/` debe contener los 11 archivos
(00_second_brain_vision … 11_implementation_backlog). Mismo criterio.

### 3.3 Los 8 documentos de fases de implementación
**[VERIFICAR EN CÓDIGO]** `ls docs/implementation/` debe contener `00_INDEX_implementation.md`
+ fases 01–07. El agente los leyó desde fuera del repo; deben vivir EN el repo.

---

## 4. Problemas de UX/UI confirmados por el usuario (corrección prioritaria)

### P0-A. Navegación plana con todas las secciones en línea
La spec (`01_information_architecture_and_navigation.md`) definía 7 entradas y el doc de
verificación exigía: móvil = barra inferior con máximo 4 items + `Más`. El resultado actual pone
todo en línea también en desktop, generando la carga cognitiva que todo el sistema debía evitar.
→ Corrección completa en `fixes/01_navigation_and_cognitive_load.md`.

### P0-B. Progresiones sin la jerarquía acordada
Ya fue corregida una vez, se volvió a pedir en Fase 2, y sigue mal. Esta vez la corrección incluye
test visual obligatorio con captura adjunta al PR. → `fixes/02_skills_hierarchy_fix.md`.

### P1-C. Patrón general: muchas secciones nuevas repiten "todo visible"
Cada módulo nuevo (clínico, laboral, idiomas, gastronomía) debe pasar la misma regla:
una acción primaria, contenido secundario en disclosures, máximo 3 bloques antes del primer CTA.
Se añade checklist transversal en `fixes/01_navigation_and_cognitive_load.md` (sección D).

---

## 5. Orden de corrección obligatorio

```text
1. fixes/03 (seguridad IA + worker + scheduler)      ← P0, bloquea deploy público
2. fixes/04 (gap de sincronización Notion o decisión) ← P0, define si los datos son reales
3. fixes/01 (navegación + carga cognitiva transversal)← P0 UX
4. fixes/02 (jerarquía de progresiones, definitiva)   ← P0 UX
5. fixes/05 (tests + evidencia por fase)              ← P1, cierra el agujero de proceso
6. Completar checklists [VERIFICAR EN CÓDIGO] de este documento y reportar tabla
```

Ninguna corrección se da por hecha sin: (a) comandos ejecutados con salida pegada,
(b) capturas móvil 375px y desktop, (c) checklist firmada ítem por ítem.
