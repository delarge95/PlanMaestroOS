# LOTE 1 — Tareas para puente humano (curación de extracciones → chunks RAG)

> Objetivo: convertir las 116 extracciones nuevas en chunks RAG v4 SIN gastar créditos. Todo va a **Gemini 3.7 Flash Pro (chat)** salvo la tarea de research (Perplexity).
> Cómo usar: abre la tarea, copia el PROMPT completo, pégalo en el chat del entorno indicado, luego pega el CONTENIDO del archivo(s) indicado(s) cuando el prompt lo pida. Guarda la respuesta en la ruta indicada. Al terminar varias, avisa al orquestador para verificación e ingesta.

**Carpetas de salida**: crear bajo `biblioteca/_llm-outputs/gemini-flash/` archivos con el MISMO nombre que el original + sufijo `--chunks.md`.

---

## TAREA A1 — Anatomy: región HOMBRO (primera tanda, 5 archivos)

**Entorno:** Gemini 3.7 Flash Pro (chat) · **Salvar respuesta como:** `biblioteca/_llm-outputs/gemini-flash/grays-anatomy-students-4ed--hombro--chunks.md`

```
REGLAS VINCULANTES (Plan Maestro OS):
1. NUNCA elimines información de la fuente: tu trabajo es REORGANIZAR en chunks, no resumir libremente.
2. Cero invenciones: cada dato ya está en el texto que te paso; si algo no está, escribe "NO SÉ". No añadas conocimiento externo.
3. Entrega EXACTAMENTE el formato pedido. Sin preámbulos, sin conclusiones, sin relleno.
4. No traduzcas: conserva los términos técnicos en inglés tal cual aparecen.

TAREA: convierte la extracción anatómica que te paso en un archivo de chunks RAG.

FORMATO DE SALIDA (un archivo markdown que empieza directamente con el primer bloque):

<!-- chunk
id: grays-hombro-<slug-corto-descriptivo>
topic: <anatomy | joint | muscle | nerve | tendon | clinical>
tags: <3-6 tags cortos en inglés, coma>
page: <página exacta si la sección la cita, si no: chapter: <nº>>
entities: <entidades mencionadas en formato tipo: muscle:supraspinatus, nerve:axillary, joint:glenohumeral — coma>
rules: <vacío o ruleId si aparece>
-->
<Parafrasis densa del contenido (máx 1200 chars): estructuras, origen/inserción/inervación/acción, ROM, relaciones clínicas. Conserva TODOS los números y nombres>

(repite el bloque por cada subsección distinta de la extracción: 1 bloque por articulación principal, por músculo importante, por nervio, o por tema clínico)

REGLAS DE CHUNKS:
- id único, prefijo grays-hombro-
- 1 chunk = 1 concepto anatómico coherente (no mezcles 3 músculos en un chunk)
- La sección "2) Contratos y entidades" de la extracción ES tu índice: 1 entidad importante = 1 chunk mínimo
- Conserva páginas/capítulos citados en la extracción
- Al final, añade una línea: <!-- stats: N chunks, M entidades cubiertas -->

Cuando responda "LISTO", pega el contenido del archivo.
```

**Archivos de esta tanda (uno por mensaje de chat, en este orden):**
1. `biblioteca/extracciones/grays-anatomy-students-4ed--hombro.md`
2. `biblioteca/extracciones/grays-anatomy-students-4ed--codo-muneca.md`
3. `biblioteca/extracciones/grays-anatomy-students-4ed--columna-cervical.md`
4. `biblioteca/extracciones/grays-anatomy-students-4ed--core-torax-abdomen.md`
5. `biblioteca/extracciones/grays-anatomy-students-4ed--cadera.md`

*(Siguientes tandas cuando esta esté verificada: rodilla, tobillo-pie, neuroanatomía, y luego Moore/MacIntosh/Enoka con la misma plantilla cambiando el prefijo del id: moore-, macintosh-, enoka-.)*

---

## TAREA N1 — Nutrición: Renaissance Kitchen + fuerza femenina

**Entorno:** Gemini 3.7 Flash Pro · **Archivos (2):** `biblioteca/extracciones/rp-renaissance-kitchen.md` y `biblioteca/extracciones/inda-fuerza-female-strength.md`
**Salvar como:** `...--chunks.md` cada uno.

```
REGLAS VINCULANTES: mismas 4 reglas de siempre (no eliminar info, cero invenciones — todo debe venir del texto, formato exacto, sin relleno).

TAREA: convierte la extracción nutricional en chunks RAG.

FORMATO: bloques <!-- chunk --> con:
id: nutri-<slug>
topic: <protein | energy | hydration | supplements | timing | female-physiology | recipes-macros>
tags: <en inglés, coma>
chapter: <capítulo si viene> o section: <sección>
entities: <vacío o meal:<> , nutrient:protein, hormone:estrogen...>
rules: <si el texto da una regla medible: nutri-<slug>>

1 chunk = 1 regla o 1 concepto nutricional coherente. TODA cifra (g/kg, kcal, %, timing en horas) debe aparecer en el chunk que la contiene.
En inda-fuerza: cada mención de fase menstrual (folicular/ovulatoria/lútea), menopausia, o diferencia hormonal = 1 chunk con topic female-physiology.

Responde "LISTO" y te paso el contenido.
```

---

## TAREA C1 — Cardio: Daniels' Running Formula

**Entorno:** Gemini 3.7 Flash Pro · **Archivo:** `biblioteca/extracciones/daniels-running-formula-4ed.md`
**Salvar como:** `biblioteca/_llm-outputs/gemini-flash/daniels-running-formula-4ed--chunks.md`

```
REGLAS VINCULANTES: las 4 de siempre.

TAREA: convierte la extracción de Daniels' Running Formula en chunks RAG de cardio.

FORMATO: bloques <!-- chunk --> con:
id: cardio-daniels-<slug>
topic: <intensity-zones | vdot | weekly-volume | long-run | hrv | race-pacing | conditioning>
tags: <en inglés, coma>
chapter: <capítulo>
entities: <zone:2, metric:vdot...>
rules: cardio-daniels-<slug> para cada regla medible (rangos de volumen, % de zona, progresión)

TODA tabla de zonas, valor VDOT, o rango semanal del texto = chunk propio con su cita.
Responde "LISTO" y te paso el contenido.
```

---

## TAREA R1 — Research Perplexity: papers hormonas femeninas (para AG-NUTRI ciclo 2)

**Entorno:** Perplexity Pro · **Salvar como:** `biblioteca/_llm-outputs/perplexity/papers-hormonas-femeninas.md`

```
Investiga papers científicos (2015-2026, prioriza meta-análisis y RCT) sobre:
1. Necesidades nutricionales y calóricas por fase del ciclo menstrual (folicular vs lútea) en mujeres físicamente activas.
2. Ajustes de proteína y energía en perimenopausia y menopausia (sarcopenia, densidad ósea).
3. Evidencia sobre "cycle-based training" (¿realmente mejora resultados? consenso actual).

Para CADA paper: título, autores, año, tipo (meta-análisis/RCT/observacional), hallazgo clave CUANTITATIVO (con cifras), y link.
Máximo 8 papers, solo los de mejor calidad. Si el consenso es contradictorio, dilo explícitamente.
```

---

## Después de cada tanda
Vuelve aquí y avisa al orquestador: verificará formato (spot-check), moverá los `--chunks.md` aprobados a `rag/<domain>/fuentes/` y ejecutará el builder (`npx tsx scripts/build_rag/index.ts --domain <d>`) — eso no gasta créditos.
