# 20 — Idiomas + clínico: cierres pendientes

## 20.1 Idiomas (encargo E1)

- **Speaking DE real**: `SpeakingPractice.tsx:27` es mock hardcodeado (2 ramas).
  Conectar al worker (`language-practice`, única acción sin `requiresApproval`)
  con fallback al mock marcado `sin-IA`. Voz sigue `Próximamente` tras flag.
- **`LanguageToday.firstPendingBlock()`** siempre devuelve `units[0].lessons[0]`:
  usar `completedLessons` del store (3 líneas, bug con nombre y apellido).
- **Idiomas → UserState**: registrar `sessions[]` al completar lección/speaking
  (hoy solo racha y vencidos fluyen). Sin esto, las reglas jamás ven estudio.
- **RAG EN/DE**: convertir `englishTechnicalVocabulary` (128), scenarios, precision,
  `germanUnits` (23 lecciones) a chunks v4 (>150 por idioma). Mecánico, 1 lote Flash.
- Restaurar `public/docs/Grammatik_Aktiv_A1_A2.pdf` (todas las citas DE dicen
  "por verificar" por este archivo ausente).

## 20.2 Clínico (encargo E2)

- **`ClinicalToday` persiste**: hoy `useState(initialClinicalTasks.slice(0,3))` local.
  Guardar en `clinicalStore` y publicar como `Task` área `clinico` para que entren
  al Top3 global (el doc 03 lo exige, el código no lo hace).
- **`StaleTaskCard` emite** `anomaly:task-stuck` (además del dismiss local) para que
  el job `stuckTasks` y el motor lo vean.
- **`UnblockPanel` cableado**: sus callbacks (`onSubtasksCreated`, `onMoveToTomorrow`)
  no se pasan desde `ClinicalToday` — 10 líneas.
- **Sub-RAG sexual**: chunking pendiente vía Flash + gates por chunk (el manifest con
  `gates` ya existe; falta el contenido). Prioridad baja, pero con dueño (AG-CLIN).
- **`Ver documento`**: apunta a `/docs/*.pdf` por verificar existencia; auditar qué
  PDFs clínicos hay realmente en `public/docs/` y corregir `sourcePdfUrl`.
