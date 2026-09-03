# 08 — Interconexión total y automatización máxima

## Principio

Un dato se registra UNA vez y fluye solo: sesión fitness → calorías nutrición →
fatiga clínica → energía de mañana → Top3 → qué curso hacer → qué empresa atacar.
Hoy cada dominio persiste lo suyo; falta el bus que los une. Ya existe la mitad:
`EventBus` + `userStateFeed.ts` + `SessionSnapshot` + `suggestions-engine-v1`.

## Matriz de flujos (origen → destino → contrato → estado)

| # | Origen | Destino | Contrato | Estado |
|---|--------|---------|----------|--------|
| F1 | Fitness sesión | Nutrición (quemado día) | `SessionSnapshot` | Diseñado, falta consumir en UI |
| F2 | Cardio presets | Nutrición (METs) | `getPresetsWithMet()` READ | Integrado |
| F3 | Fitness vocab | UserState | cardio+vocab conectados (P3) | Hecho parcial |
| F4 | Clínico biofeedback | UserState (stress proxy) | `userStateFeed` anxiety→stress | Hecho (documentar proxy) |
| F5 | Sesión/dolor | Reglas → Sugerencia Hoy | `fromRuleEvaluations` + cooldowns | Hecho (10 reglas) |
| F6 | Career pipeline | Hoy (seguimientos) | `singleNextAction` | Parcial (falta job) |
| F7 | Skills/cursos | Career (fitScore) | grafo `unlocks/fits` | **No existe** |
| F8 | Gastronomía planes | Nutrición targets | campo `fitnessGoal` | Reservado, sin implementar |
| F9 | Wearables/báscula | UserState | `WearableDay` (archivo 03) | **No existe** |
| F10 | YouTube/IG guardados | Biblioteca/cola | `capture-saved.ts` + Spark | Parcial/manual |

## Cierre propuesto (orden)

1. F1+F6: consumir `SessionSnapshot` en nutrición + fila Laboral viva en Hoy (2 encargos, 1 semana).
2. F7+F8: aristas grafo `unlocks/fits/targets` (archivo 02) — habilita tus puntos 1 y 2.
3. F9: contrato `WearableDay` + importador CSV (báscula primero, banda después).
4. F10: pipeline Ver-más-tarde punta a punta (pegar URL → categorizar → `Convertir en
   receta/nota` → archivar; Spark como categorizador externo, app como dueña de datos).

## Automatización externa (Gemini Spark, DESPACHO-5 §B — con resguardos)

T1 revisión YouTube 8:00, T2 historial 14:00, T3 búsqueda laboral 9:00, T4 síntesis
semanal. Reglas añadidas por esta auditoría: (a) Spark NUNCA recibe salud ni contactos
privados, solo títulos/URLs + empresa/rol/estado; (b) Sheets son espejo, la verdad es
`src/data/**` + IndexedDB; (c) IG/FB por export manual (sin workaround con credenciales
compartidas); (d) toda acción sobre aplicaciones/CV es borrador en la app, Spark no envía.

## Ritmo diario objetivo (una vez cerrado)

Mañana: job morning-plan → Top3 borrador (Aprobar/Editar) → sesión guiada → snapshot
auto a nutrición. Noche: evening-review (cierre + mañana) + racha idiomas + pain check
si hubo lesión. Domingo: síntesis semanal + 3 empresas nuevas + 1 ajuste de CV propuesto.
Todo ≤10 minutos de gestión al día; el resto es ejecutar, no administrar.
