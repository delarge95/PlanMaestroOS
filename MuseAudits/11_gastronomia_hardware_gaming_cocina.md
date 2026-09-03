# 11 — Gastronomía, cocina inteligente, computación, gaming, hardware

## Gastronomía (existe base, falta conexión)

Base: 4 rutas (index/library/plans/saved), modelos `Recipe`/`SavedItem`, filtros,
`PlanBoard`, macros día (`macros.ts`), cola máx 10, `Convertir en receta`.
Límites vigentes correctos: esencial primero, fuente+notas después, sin copiar libros.

### Conexión con fitness/nutrición (tu exigencia de macros/micro)

- `Plan { goal: deficit|mantenimiento|volumen, days[], macrosDay }` + campo
  `fitnessGoal` (hoy reservado) → al activar un programa fitness, el plan propone
  automáticamente proteína/kcal (vía `kcalEstimator` + `femalePhysiology`) como
  **borrador de plan semanal** con lista de compra generada (recetas→ingredientes agregados).
- Micros: tabla `Micronutrient { recipeId, ironMg, calciumMg, … }` solo para las
  20 recetas propias más usadas (no toda la biblioteca; curaduría > exhaustividad),
  con alertas suaves (ej. déficit + alto volumen → sugerir revisión, citar fuente).
- Cola social (FB/IG/YT) → `SavedItem` → `Procesar` (categorizar + macros estimadas
  como borrador) → `Convertir en receta` propia. Nunca auto-publicar ni copiar texto.

### Cocina inteligente + electrodomésticos (nuevo)

`Appliance { id, name, functions[], capacity, powerW, footprint, recipesFit[] }`:
- Matriz receta↔equipo (qué recetas usan horno/freidora/sous-vide/batidora…).
- "Diseño de cocina": checklist por niveles (esencial → pro: balanza precisa,
  termómetro sonda, hierro fundido, olla presión, procesador) con presupuesto COP
  y prioridad por tu plan actual (volumen = balanza + meal-prep containers primero).
- Mantenimiento (calibración termómetro, afilado, limpieza freidora) como tareas
  recurrentes al Hoy. Todo local, sin IoT real en 2026 (los sensores llegan vía F9).

## Nuevos dominios (diseño mínimo para no inflar la app)

- **Computación**: inventario `Device { cpu, gpu, ram, storage, os }` + `SkillStack`
  enlazado a career (qué hardware necesitas para cada oferta: ej. "WebGL pesado →
  32GB RAM"). Benchmarks propios + guías de compra con COP.
- **Videojuegos**: backlog + análisis (qué juegas, horas/semana como presupuesto
  dentro de la fatiga/tiempo global, no aparte) + referencias TechArt (los juegos
  como biblioteca visual enlazada a proyectos: `Game -inspires→ Project`).
- **Hardware/periféricos**: `Peripheral { type, model, switches/layout/dpi, price,
  review }` (teclado, ratón, monitor, silla, audio) con matriz uso (trabajo 3D vs
  juego vs estudio) y plan de compra priorizado igual que cocina.
- Regla común: cada dominio nuevo nace con `{modelo, 1 vista Hoy, 1 RAG mini,
  aristas al grafo}` o no nace (evita secciones fantasma como library hoy al 40%).
