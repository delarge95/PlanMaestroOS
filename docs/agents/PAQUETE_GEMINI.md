# Paquete de extracción Gemini — Bloque A (fuentes sin extracción)

> Guía operativa para ejecutar la extracción con Gemini (Flash) sección por sección. La cola priorizada con capítulos/secciones estimadas está en **`biblioteca/MANIFEST.md` §18 (Bloque A)**. El prompt de extracción está en **`docs/agents/PROMPTS_INICIALES.md` §0**.

## Reglas de oro

1. **Una sección por llamada.** Nunca el libro completo (se pierde información y el modelo degrada).
2. **Primero el índice**: una llamada con el TOC del libro → anota rangos de páginas por capítulo antes de empezar.
3. Cada salida se guarda como `biblioteca/extracciones/<sourceId>--<tema>.md` (el sourceId EXACTO del MANIFEST — nunca nombres libres).
4. El sub-prompt §0 va como prompt de sistema/cada llamada + las imágenes de las páginas del rango.
5. Si una sección es enorme (>60 p.), divídela en sub-rangos.

## Cola prioritaria (orden)

| # | sourceId | Libro | Ruta del PDF | Notas |
|---|---|---|---|---|
| 1 | `norkin-joint-structure-6ed` | Joint Structure and Function (Levangie & Norkin 6ª) | `D:\Downloads\Libros\levangie_pamela_k_norkin_cyhthia_c_lewek_md_joint_structure.pdf` | **ATAJO**: existe capa de texto completa (`...joint_structure.txt`) — extracción local posible SIN Gemini; Gemini solo para tablas/figuras |
| 2 | `grays-anatomy-students-4ed` | Gray's Anatomy for Students 4ª | `D:\Downloads\Libros\Faltan\Grays-Anatomy-for-Students-4th-Edition.pdf` | 191 MB; regiones primero: hombro, codo/muñeca, columna/cervical, core, cadera, rodilla, tobillo/pie |
| 3 | `macintosh-skeletal-muscle-2ed` | Skeletal Muscle: Form and Function 2ª | `D:\Downloads\Libros\Faltan\Skeletal Muscle_Form and function  Second edition -- Brian R_Maclntosh...pdf` | base del grafo músculo→función |
| 4 | `enoka-neuromechanics-4ed` | Neuromechanics of Human Movement 4ª | `D:\Downloads\Libros\Faltan\Neuromechanics of Human Movement - 4th Edition -- Enoka...pdf` | nervios/control motor |
| 5 | `moore-clinically-oriented-6ed` | Clinically Oriented Anatomy 6ª | `D:\Downloads\Libros\Faltan\clinically-oriented-anatomy-sixth-edition-sixth_compress.pdf` | escaneado SIN capa de texto → OCR/Gemini obligatorio; complementa Gray's con orientación clínica |
| 6 | sport-nutrition (canónico, ver MANIFEST §fuentes) | Sport Nutrition | `D:\Downloads\Libros\Faltan\sport-nutrition_compress.pdf` | SOLO las secciones gráficas que AG-NUTRI dejó en su plan (`rag/nutricion/extracciones/plan-extraccion-gemini.md`) |
| 7 | `nippard-powerbuilding-4x` / `nippard-glute-hypertrophy-program` | Programas Nippard | `E:\Laboral\_pdf_biblia\Planeacion_Integral\investigacion\Nippard-*.pdf` | ya validados como datasets; extraer solo notas/education chunks |

Papers y resto: según prioridad que marquen los agentes en sus STATUS.

## Flujo por sección

1. Abre el PDF, extrae las páginas del rango como imágenes.
2. Llamada a Gemini: system = sub-prompt §0 + "Tu entrada es UNA SECCIÓN (pp. X–Y) de {sourceId} {título}, {edición}". Adjunta las imágenes.
3. Revisa la salida: toda afirmación con página; nada de texto literal largo; ⚠️ en inconsistencias.
4. Guarda como `biblioteca/extracciones/<sourceId>--<sección-slug>.md`.
5. Al terminar el libro: `99-cobertura-<sourceId>.md` con la matriz sección→archivo.

## Después de extraer

Los agentes ingieren al RAG v4 con: `npx tsx scripts/build_rag/index.ts --domain <d>` (ver `scripts/build_rag/README.md`). Las extracciones crudas multi-ronda de chat requieren curación (quedarse con la ronda final) antes de ingestar.
