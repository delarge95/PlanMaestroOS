# 03 — Fitness + clínico + sistema de lesiones (tu punto 2)

## Lo que ya tienes (más de lo que parece)

- Catálogo real: Min-Max como fuente única, calendario con ancla lunes + postergar,
  modo guiado B9 set-a-set (`guidedSessionEngine.ts` + tests), `sessionExport.ts`
  (`SessionSnapshot` consumible por nutrición), cargas por PR/RPE, progreso sin números falsos.
- Anatomía: visor 1380 piezas, 0 huérfanos, `jointRom.ts` con citas, conexión
  `LibraryMuscles ↔ visor ↔ ejercicios que cargan cada músculo`.
- Clínico: workspace + `clinicalStore` (biofeedback energía/ansiedad/dolor/sueño,
  exposiciones) + RAG 14/22 + panel ¿Bloqueado? + detector tareas estancadas.
- Nutrición: `kcalEstimator.ts` (METs + fuerza + EPOC + TDEE), fisiología femenina
  (+50-100 kcal lútea, proteína menopausia), calculadora + targets + día tipo.

## Hueco central: localización de lesión → modificación de rutina

Hoy el flujo es: check-in dolor 0-10 → mensaje genérico "considera reducir rango".
Tu objetivo exige un paso intermedio computable:

```
dolor(ZONA, tipo, 0-10, mecanismo, inicio)
  → candidatos(Estructura) rankeados [músculo|tendón|ligamento|nervio|bursa|articulación]
  → tests diferenciales sugeridos (no diagnósticos, con disclaimer + derivación)
  → reglas afectadas (del grafo: qué ejercicios -stresses→ esa estructura)
  → rutina de hoy reescrita (quitar/sustituir/reducir, citando la regla)
  → protocolo prehab correspondiente + seguimiento 7 días
```

### Diseño concreto (aditivo sobre lo existente)

1. **Anamnesis estructurada** (formulario, 60 segundos): zona (click en visor 3D —
   reutilizar `AnatomyViewer` en modo "¿dónde duele?"), tipo (punzante/sordo/quemazón/
   hormigueo/inestabilidad/inflamación), inicio (agudo/progresivo/post-sesión),
   mecanismo (qué ejercicio/movimiento), EVA 0-10, signos de alarma checklist
   (entumecimiento progresivo, pérdida de fuerza, chasquido + impotencia, fiebre,
   dolor nocturno que no cede → **derivación inmediata**, fin del flujo automático).
2. **Matriz diferencial honesta** (curada de la literatura que YA tienes: Norkin,
   Gray's, Overcoming Tendonitis, Horschig — no inventar): cada fila
   `{estructura, patronDolor, testsSugeridos[], cita}` con `confidence: explicit|inferred`.
   Salida: top-3 candidatos con probabilidad cualitativa (alta/media/baja), **nunca**
   un diagnóstico ("esto podría ser X, verifica con profesional + estos 2 tests").
3. **Reescritura de sesión**: el motor de reglas ya sabe `pain48h`; añadir reglas
   `lesion:<estructura>` que consumen el candidato + EVA:
   EVA ≥7 → día de descarga/prehab; 4-6 → sustituciones (mismo patrón, distinta
   estructura estresada, vía aristas `stresses` del grafo); 1-3 → reducir ROM/carga
   con % citado. Todo cambio muestra `Datos usados` (qué regla, qué chunk).
4. **Seguimiento**: `painLog` diario 7 días → si no mejora o empeora 2 días seguidos,
   sugerencia de derivación profesional (no seguir adaptando en bucle).

## Rutinas multiobjetivo (hipertrofia + fuerza + grasa + skills + MMA + baile + cardio)

Principios científicos a codificar como reglas (todos con cita de tu biblioteca):

- Volumen por músculo/semana con rangos (Israetel/Nippard ya citados en las 10 semillas;
  extender a los ~20 grupos con cotas inferior/superior + MEV/MAV/MRV cualitativos).
- Frecuencia ≥2 por músculo para hipertrofia; fuerza: intensidad + especificidad;
  interferencia cardio-fuerza (separar ≥6h o días distintos, citar).
- Skills (front lever, muscle-up, etc.): práctica fresca, nunca al fallo, progresión
  por pasos ya modelada en `skillPaths` — conectar `unlockPath` del grafo.
- MMA/baile/movilidad: meter como `conditioning` con su propio presupuesto de
  fatiga (RPE sesión + horas) para que el planificador no los sume gratis.
- Nutrición acoplada: `estimateDayBurn` + proteína por objetivo ya existen; falta el
  puente automático sesión→targets del día (contrato `SessionSnapshot` listo, falta
  consumirlo en `NutritionWorkspace` — encargo de 1 semana).

## Wearables (manual hoy → sensores mañana)

Contrato de ingesta (diseñar YA, implementar después):
`WearableDay { dateIso, steps?, restingHr?, hrv?, sleepMin?, sleepScore?, weightKg?, vo2max? }`
→ entra a `UserState.dailyLogs` por la misma puerta que el registro manual
(`userStateFeed.ts` + readers puros). Fuentes por orden de facilidad:
CSV exportado (báscula/Banda) → Google Fit/Health Connect API → Bluetooth directo (último).
Nunca bloquear el registro manual: el sensor confirma, no sustituye.

## Literatura que falta extraer (de tu propia biblioteca)

- Overcoming Gravity 2ed (83KB, la fuente más importante — B1 de DESPACHO-1 la prioriza
  y sigue pendiente de chunking completo).
- Overcoming Tendonitis (base de la matriz diferencial de tendones).
- Daniels Running Formula (zonas/VDOT — base cardio).
- Papers ciclo menstrual/menopausia (Perplexity R1, máx 8 papers — pendiente).
Todo con el formato chunk v4 existente; no cambiar el pipeline, solo alimentarlo.
