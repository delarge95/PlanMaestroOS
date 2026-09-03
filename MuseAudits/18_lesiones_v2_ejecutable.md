# 18 — Lesiones v2 ejecutable (cierra tu punto 2)

> Estado: check-in EVA 0-10 con mensaje genérico + `pain[]` de UserState nunca alimentado
> (2 reglas muertas) + fichas `TODO-cita` en huesos/ligamentos/tendones/articulaciones.
> Meta: dolor → candidatos → tests → rutina reescrita → prehab → painLog 7d → derivación
> si no mejora. Todo con disclaimer + sin diagnosticar jamás.

## 18.1 `InjuryReport` (encargo E1)

Nuevo `src/components/fitness/injury/InjuryCheckin.tsx` (60 segundos):
zona (select de `BODY_ZONES` + opcional click en `AnatomyViewer` modo "¿dónde duele?"),
tipo (`punzante|sordo|quemazón|hormigueo|inestabilidad|inflamación`), inicio
(`agudo|progresivo|post-sesión`), mecanismo (ejercicio/movimiento libre),
EVA 0-10, red-flags (entumecimiento progresivo, pérdida de fuerza, chasquido con
impotencia, fiebre, dolor nocturno que no cede). **Si hay 1 red-flag: fin del flujo
automático + derivación profesional + solo prehab suave.** Emite `session:pain-reported`
y escribe `pain[]` (revive las 2 reglas muertas).

## 18.2 Matriz diferencial semilla (encargo E2, con fisio si es posible)

`src/data/fitness/injuryDifferential.ts`: 12 filas iniciales
(hombro×3: supraespinoso/manguito, bíceps largo, bursitis subacromial;
codo×2: epicondilitis lateral/medial; rodilla×3: patelar, ITB, menisco-patrón;
cadera×2: glúteo medio, flexores; muñeca×1: ECU/sobrecarga; lumbar×1: facetaria-mecánica).
Cada fila: `{estructura, patronDolor, testsSugeridos[2-3], cita{docId Gray's/Moore/Norkin/
Tendonitis/Horschig}, confidence}`. Función pura `(report) => top3[{estructura, nivel
alta|media|baja, porQué, tests}]`. Salida SIEMPRE: "podría ser… verifica con profesional
+ estos tests". Curar SOLO de tu biblioteca (prohibido web sin cita).

## 18.3 Reescritura de sesión (encargo E3)

Reglas `lesion:<slug>` nuevas (archivos nuevos en `src/lib/rules/fitness/`, sin tocar
`fitnessRules.ts`): EVA ≥7 → descarga/prehab; 4-6 → sustitución mismo patrón distinta
estructura (vía `ExerciseSubstitutionDrawer` + aristas `stresses` del grafo archivo 16);
1-3 → reducir ROM/carga con % citado. `GuidedSessionRunner` muestra `Datos usados`
(regla + chunk). `TendonLoadMonitor` consume el candidato para su semáforo.

## 18.4 `painLog` 7 días + derivación (encargo E4)

`src/lib/fitness/painLog.ts` + tarjeta en Hoy-fitness: EVA diario por zona.
Regla: empeora 2 días seguidos o no mejora en 7 → sugerencia de derivación
(no seguir adaptando en bucle). Migra el check-in actual de `PrehabBlock` aquí.

## 18.5 Cola de curación anatómica (encargo E5, contenido)

39 huesos + 21 ligamentos + 20 tendones + 19 articulaciones con `TODO-cita`:
lotes Gemini Flash con el formato LOTE-1 (1 entidad = 1 chunk, cita Gray's/Moore
cap+pág). Sin esto, ADR-8 los deja fuera del grafo. Orden: tendones y articulaciones
primero (alimentan 18.2/18.3), huesos al final.
