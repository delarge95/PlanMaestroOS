# 36 — Matriz diferencial completa (12 filas, ejecutable por triaje)

> App: "Plan Maestro OS". Fuente código: `E:\Laboral\MuseAudits\impl\injury\triage.ts`
> (tipos `TissueType`, `TriageAction = rehab_load|relative_rest|nerve_gliding|doctor_now`,
> `TESTS`, `CITES`, `TriageInput`, `triage()`, `actionFor()`, `treeScores()`).
> Plan: archivo 18 `E:\Laboral\MuseAudits\18_lesiones_v2_ejecutable.md` §18.2.
> Salida = hipótesis funcionales + tests + derivación. PROHIBIDO diagnosticar.

## 0. Cómo leer esta matriz (reglas duras)

1. Cada fila NO es un diagnóstico. Es una hipótesis funcional con nivel `alta|media|baja`.
2. Cada fila mapea a 1 `TissueType` del código: `tendon|ligament|bursa|nerve|muscle|unknown`.
3. Cada fila mapea a 1 `TriageAction` según `actionFor(tissue, eva)` en `triage.ts`.
4. `confidence: explicit` = patrón soportado directamente por la cita curada.
5. `confidence: inferred` = extrapolación funcional razonable, verificar con profesional.
6. Citas SOLO de biblioteca: Gray's, Moore, Norkin/Levangie, Low Overcoming Tendonitis, Horschig.
7. Si no se sabe capítulo/página exactos: escribir `por-verificar`. JAMÁS inventar números.
8. Si hay 1 red-flag: se bloquea todo (§4). `blocked:true` + `doctor_now`.
9. Tests = autoaplicables de campo, sin equipo especial, sin maniobras agresivas.
10. Intervención inicial = HSR / isométricos / descarga / neurodinámica según tejido.
11. Reevaluar con `painLog` 7 días (archivo 18 §18.4): empeora 2 días o no mejora en 7 → derivar.
12. EVA = escala visual 0..10 incluida en `TriageInput.eva`.

### Correspondencia código (resumen para no perderse)

- `TESTS.tendon`: dolor 24h post-sesión vs durante + palpación inserción + isométrico 30-45s.
- `TESTS.ligament`: test inestabilidad específico + comparar laxitud lado sano vs afectado.
- `TESTS.bursa`: palpación prominencia ósea + arco doloroso.
- `TESTS.nerve`: mapa hormigueo por dermatoma + neurodinámica suave sin tensión sostenida.
- `TESTS.muscle`: palpación vientre vs inserción + contracción resistida en acortamiento.
- `TESTS.unknown`: derivación profesional directa.
- `CITES.*`: ver cada fila. Las cadenas base viven en `CITES` de `triage.ts`.
- `actionFor()`: `tendon→rehab_load`, `muscle→rehab_load`, `bursa→relative_rest`,
  `nerve→nerve_gliding`, `ligament→relative_rest si EVA 0-3 / doctor_now si EVA ≥4`,
  `eva≥7→relative_rest` (salvo `nerve|ligament→doctor_now`), `unknown→doctor_now`.

## 1. Tabla resumen 12 filas

| # | Estructura | `TissueType` | Patrón corto | `TriageAction` por EVA | Confidence |
|---|------------|--------------|--------------|------------------------|------------|
| 1 | Supraespinoso / manguito hombro | `tendon` | Duele al elevar 60-120°, post-sesión; mejora en reposo/calor | 1-6 `rehab_load`, 7-10 `relative_rest` | inferred |
| 2 | Bíceps largo hombro | `tendon` | Duele anterior hombro al flexionar codo/supinar con carga | 1-6 `rehab_load`, 7-10 `relative_rest` | inferred |
| 3 | Bursa subacromial | `bursa` | Arco doloroso + noche sobre hombro; no mejora con calor | 0-10 `relative_rest` | inferred |
| 4 | Epicóndilo lateral codo | `tendon` | Duele al extender muñeca/agarrar; rigidez matinal | 1-6 `rehab_load`, 7-10 `relative_rest` | explicit |
| 5 | Epicóndilo medial codo | `tendon` | Duele al flexionar muñeca/pronar con carga; post-esfuerzo | 1-6 `rehab_load`, 7-10 `relative_rest` | explicit |
| 6 | Tendón patelar rodilla | `tendon` | Duele al saltar/bajar escaleras; mejora con calor | 1-6 `rehab_load`, 7-10 `relative_rest` | explicit |
| 7 | Banda iliotibial rodilla | `tendon` | Duele lateral rodilla a los X min corriendo; cede al parar | 1-6 `rehab_load`, 7-10 `relative_rest` | inferred |
| 8 | Patrón meniscal rodilla | `ligament` | Chasquido + fallo + derrame tardío; duele al girar/cuclillas | 0-3 `relative_rest`, ≥4 `doctor_now` | inferred |
| 9 | Glúteo medio cadera | `tendon` | Duele lateral cadera al apoyar 1 pierna/subir escaleras | 1-6 `rehab_load`, 7-10 `relative_rest` | inferred |
| 10 | Flexores cadera | `muscle` | Duele anterior cadera al elevar muslo/sprint; mejora en corto | 0-6 `rehab_load`, 7-10 `relative_rest` | inferred |
| 11 | ECU / sobrecarga muñeca | `tendon` | Duele cubital al extender/desviar con carga; post-uso | 1-6 `rehab_load`, 7-10 `relative_rest` | inferred |
| 12 | Facetaria lumbar mecánica | `muscle` | Rigidez matinal, duele al extender/estar de pie; alivia al moverse | 0-6 `rehab_load`, 7-10 `relative_rest` | inferred |

---

## 2. Fila 1 — Supraespinoso / manguito rotador (hombro)

- **Estructura:** supraespinoso / manguito rotador, hombro.
- **`TissueType`:** `tendon`.
- **Patrón de dolor:** duele al elevar el brazo entre 60-120° (arco), al dormir sobre el lado,
  y 24h post-sesión de empuje/tracción por encima de la cabeza. Mejora en reposo relativo y
  tras calentamiento suave. Empeora con estiramiento agresivo por encima de la cabeza.
- **Tests de campo (2-3, autoaplicables):**
  1. Arco doloroso activo: elevar lento el brazo en plano escapular, anotar rango que duele.
  2. Isométrico 30-45s: abducción ligera contra pared sin dolor >3/10; ver si calma tras 10 min.
  3. Dolor 24h: comparar EVA durante vs 24h después (tendón típico = peor después).
- **Intervención:** isométricos sub-máximos + HSR progresivo (carga lenta, sin estiramiento
  agresivo). Descarga de press militar/fondos por encima de la cabeza mientras EVA >3.
- **Cita:** Low, Overcoming Tendonitis — por-verificar (cap/pág por-verificar).
  Apoyo anatomía: Gray's Anatomy — por-verificar; Moore Anatomía con orientación clínica —
  por-verificar. Cadena código: `CITES.tendon`.
- **Confidence:** `inferred` (patrón tendinoso típico extrapolado a hombro, sin imagen).
- **Mapeo `TriageAction` + EVA:** EVA 1-6 → `rehab_load`; EVA 7-10 → `relative_rest`;
  cualquier red-flag → `doctor_now` bloqueante.

## 3. Fila 2 — Bíceps largo (hombro anterior)

- **Estructura:** tendón largo del bíceps braquial, surco bicipital.
- **`TissueType`:** `tendon`.
- **Patrón de dolor:** dolor anterior de hombro, a veces irradiado al bíceps. Duele al flexionar
  el codo con carga, supinar contra resistencia, o traccionar. Mejora en reposo y con calor
  suave. Empeora con curl pesado + press por encima de la cabeza el mismo día.
- **Tests de campo:**
  1. Palpación surco anterior + isométrico bíceps 30-45s a 90° sin dolor >3/10.
  2. Supinación resistida ligera con codo a 90°: anotar si reproduce dolor anterior.
  3. Comparar EVA durante vs 24h después.
- **Intervención:** isométricos + HSR de bíceps/hombro con ROM reducido; evitar estiramiento
  agresivo del bíceps en extensión. Sustituir dominadas supinas por neutras si EVA 4-6.
- **Cita:** Low, Overcoming Tendonitis — por-verificar; Moore — por-verificar
  (trayecto tendón largo bíceps). Cadena código: `CITES.tendon`.
- **Confidence:** `inferred`.
- **Mapeo `TriageAction` + EVA:** EVA 1-6 → `rehab_load`; EVA 7-10 → `relative_rest`;
  red-flag → `doctor_now`.

## 4. Fila 3 — Bursa subacromial (hombro)

- **Estructura:** bursa subacromial / subdeltoidea.
- **`TissueType`:** `bursa`.
- **Patrón de dolor:** dolor al elevar + dolor nocturno al dormir sobre el hombro, con
  sensibilidad a la palpación directa del acromion. No mejora típicamente con calentamiento;
  mejora al evitar compresión (no dormir encima, reducir volumen por encima de la cabeza).
- **Tests de campo:**
  1. Palpación directa de prominencia ósea (acromion) vs vientre muscular.
  2. Arco doloroso: anotar rango que comprime (típico 60-120°) y si cede fuera de ese rango.
  3. Prueba descarga 48h: reducir 50% volumen overhead y ver EVA nocturno.
- **Intervención:** descarga/compresión-cero: `relative_rest`, higiene postural nocturna,
  movilidad suave sin pinzamiento. NO HSR ni isométricos pesados en fase irritable.
- **Cita:** Levangie / Norkin, Joint Structure and Function — por-verificar
  (bursitis friccional). Cadena código: `CITES.bursa`.
- **Confidence:** `inferred` (sin ecografía no se distingue bursa vs tendón con certeza).
- **Mapeo `TriageAction` + EVA:** EVA 0-10 → `relative_rest`; red-flag → `doctor_now`.
  Nota código: `actionFor(bursa, eva≥7)` = `relative_rest`, no `rehab_load`.

## 5. Fila 4 — Epicóndilo lateral (codo de tenista)

- **Estructura:** extensores de muñeca, inserción epicóndilo lateral.
- **`TissueType`:** `tendon`.
- **Patrón de dolor:** duele al extender muñeca, agarrar, girar pomo o hacer remo/peso muerto.
  Rigidez matinal + dolor que mejora con calor suave y empeora 24h post-grip intenso.
  Mejora con reposo relativo, empeora con estiramiento agresivo de extensores.
- **Tests de campo:**
  1. Isométrico extensión muñeca 30-45s contra mesa, dolor ≤3/10.
  2. Test agarre: apretar toalla 5s ×3, anotar EVA durante vs 24h.
  3. Palpación inserción lateral vs vientre muscular del antebrazo.
- **Intervención:** isométricos + HSR lento de extensores (excéntrico-concéntrico controlado).
  Reducir grip pesado y volumen de tracción. Prohibido estiramiento agresivo.
- **Cita:** Low, Overcoming Tendonitis — por-verificar (protocolo tendinopatía extensora).
  Anatomía: Moore — por-verificar; Gray's — por-verificar. Cadena código: `CITES.tendon`.
- **Confidence:** `explicit` (patrón tendinoso clásico con respuesta a HSR/isométricos).
- **Mapeo `TriageAction` + EVA:** EVA 1-6 → `rehab_load`; EVA 7-10 → `relative_rest`.

## 6. Fila 5 — Epicóndilo medial (codo de golfista)

- **Estructura:** flexores/pronadores, inserción epicóndilo medial.
- **`TissueType`:** `tendon`.
- **Patrón de dolor:** duele al flexionar muñeca y pronar con carga (curl pesado, dominada
  supina, remo). Dolor post-esfuerzo + rigidez matinal. Mejora con calor y carga gradual;
  empeora con volumen alto de flexores sin descarga.
- **Tests de campo:**
  1. Isométrico flexión muñeca 30-45s, EVA ≤3/10.
  2. Pronación resistida ligera con codo a 90°, anotar reproducción medial.
  3. Palpación inserción medial vs vientre flexor.
- **Intervención:** isométricos + HSR de flexores/pronadores; descargar curl/dominada 50%
  si EVA 4-6; sustitución a agarre neutro.
- **Cita:** Low, Overcoming Tendonitis — por-verificar; Moore — por-verificar.
  Cadena código: `CITES.tendon`.
- **Confidence:** `explicit`.
- **Mapeo `TriageAction` + EVA:** EVA 1-6 → `rehab_load`; EVA 7-10 → `relative_rest`.

## 7. Fila 6 — Tendón patelar (rodilla anterior)

- **Estructura:** tendón patelar, polo inferior rótula.
- **`TissueType`:** `tendon`.
- **Patrón de dolor:** duele al saltar, bajar escaleras, sentadilla profunda o estar mucho
  sentado con rodilla flexionada (luego duele al levantarse). Mejora con calentamiento suave;
  duele más 24h post-pliometría. Mejora con descarga de salto, no con reposo total largo.
- **Tests de campo:**
  1. Sentadilla a 1 pierna en plano inclinado suave (o escalón), EVA 0-10.
  2. Palpación polo inferior rótula vs vientre cuádriceps.
  3. Isométrico extensión rodilla 30-45s a 60° (sentado contra pared), ver analgesia 10 min.
- **Intervención:** isométricos (analgesia) + HSR: sentadilla lenta / prensa con tempo,
  progresión sin salto mientras EVA >3. Evitar estiramiento agresivo de cuádriceps.
- **Cita:** Low, Overcoming Tendonitis — por-verificar; Horschig, técnica sentadilla —
  por-verificar (gestión carga rodilla). Cadena código: `CITES.tendon`.
- **Confidence:** `explicit`.
- **Mapeo `TriageAction` + EVA:** EVA 1-6 → `rehab_load`; EVA 7-10 → `relative_rest`.

## 8. Fila 7 — Banda iliotibial ITB (rodilla lateral)

- **Estructura:** banda iliotibial / fricción cóndilo femoral lateral.
- **`TissueType`:** `tendon` (comportamiento friccional; vigilar diagnóstico diferencial bursa).
- **Patrón de dolor:** dolor lateral de rodilla que aparece a los X minutos corriendo o
  pedaleando y obliga a parar; cede en reposo. No suele haber inestabilidad ni derrame grande.
  Mejora al reducir volumen/cadencia; empeora con cuestas abajo y mismo calzado superado.
- **Tests de campo:**
  1. Carrera/prueba escalón 2-3 min a ritmo suave: anotar minuto de aparición.
  2. Palpación cóndilo lateral vs inserción tendinosa; comparar lado sano.
  3. Sentadilla 30° con control cadera: ver si valgo aumenta dolor lateral.
- **Intervención:** descarga de carrera + HSR de glúteo/cuádriceps, trabajo abductores cadera;
  NO foam-roller agresivo sobre punto doloroso. Progresar caminata-carrera si EVA ≤3.
- **Cita:** Levangie / Norkin — por-verificar (mecánica ITB/cadera-rodilla); Horschig —
  por-verificar (control valgo). Cadena código: `CITES.tendon`.
- **Confidence:** `inferred` (fricción vs tendinopatía no distinguible sin imagen).
- **Mapeo `TriageAction` + EVA:** EVA 1-6 → `rehab_load`; EVA 7-10 → `relative_rest`.

## 9. Fila 8 — Patrón meniscal (rodilla)

- **Estructura:** menisco (patrón funcional: atrapamiento + inestabilidad).
- **`TissueType`:** `ligament` (el código no tiene `cartilage`; se usa vía inestabilidad).
- **Patrón de dolor:** duele al girar con pie fijo, ponerse en cuclillas profunda o levantarse
  tras torsión. Puede haber chasquido, sensación de fallo/bloqueo y derrame en 6-24h.
  Mejora en línea recta; empeora con torsión + carga.
- **Tests de campo (suaves, sin forzar):**
  1. Comparar laxitud/sensación lado sano vs afectado en apoyo bipodal → monopodal asistido.
  2. Cuclillas parcial asistida (marco/puerta): anotar chasquido + dolor + sensación fallo.
  3. Marcha 10 m + giro suave: anotar si el giro reproduce dolor/fallo (no forzar si EVA alta).
- **Intervención:** descarga + `relative_rest` si EVA 0-3; derivación si EVA ≥4, bloqueo,
  fallo repetido o derrame. NO HSR ni pliometría hasta valoración profesional.
- **Cita:** Moore — por-verificar (meniscos/ligamentos rodilla); Gray's — por-verificar.
  Cadena código: `CITES.ligament`.
- **Confidence:** `inferred` (patrón sugestivo, confirmación solo por profesional/imagen).
- **Mapeo `TriageAction` + EVA:** EVA 0-3 → `relative_rest`; EVA ≥4 → `doctor_now`;
  bloqueo/fallo/derrame → `doctor_now` aunque EVA sea bajo (vía red-flag/manual).

## 10. Fila 9 — Glúteo medio (cadera lateral)

- **Estructura:** glúteo medio / tendón glúteo (dolor trocantérico lateral).
- **`TissueType`:** `tendon` (si predomina inserción) — si predomina vientre, ver Fila 10.
- **Patrón de dolor:** duele lateral de cadera al apoyar 1 pierna, subir escaleras, caminar
  largo o dormir de lado. Mejora en descarga; empeora con estiramiento agresivo en aducción
  o foam-roller directo. Rigidez matinal posible + mejora con calor suave.
- **Tests de campo:**
  1. Apoyo 1 pierna 30s asistido (dedo en pared): EVA lateral cadera.
  2. Isométrico abducción 30-45s contra pared, dolor ≤3/10.
  3. Palpación trocánter vs vientre glúteo medio.
- **Intervención:** isométricos abducción + HSR glúteo (hip-thrust lento, step-up bajo);
  evitar aducción compresiva. Higiene sueño (almohada entre rodillas).
- **Cita:** Low, Overcoming Tendonitis — por-verificar; Levangie / Norkin —
  por-verificar (abductores cadera). Cadena código: `CITES.tendon`.
- **Confidence:** `inferred`.
- **Mapeo `TriageAction` + EVA:** EVA 1-6 → `rehab_load`; EVA 7-10 → `relative_rest`.

## 11. Fila 10 — Flexores de cadera (anterior)

- **Estructura:** psoas / recto femoral proximal (sobrecarga muscular).
- **`TissueType`:** `muscle`.
- **Patrón de dolor:** dolor anterior cadera/ingle al elevar el muslo, sprint, escalar o hacer
  abdominales con anclaje. Mejora en reposo corto y calor; empeora con sedestación larga +
  sprint sin calentar. Sin hormigueo ni inestabilidad típicos.
- **Tests de campo:**
  1. Palpación vientre (anterior cadera) vs inserción ósea.
  2. Elevación muslo resistida suave en acortamiento (sentado, mano empuja muslo 5s).
  3. Test longitud suave (Thomas modificado asistido, sin forzar): rigidez vs dolor agudo.
- **Intervención:** descarga sprint/flexión resistida + `rehab_load` suave: contracción en
  acortamiento, movilidad sin estiramiento balístico. Retorno gradual a zancada/sprint.
- **Cita:** Moore — por-verificar (psoas/recto femoral); Norkin medición articular —
  por-verificar (goniometría cadera). Cadena código: `CITES.muscle` (texto código:
  `macintosh-skeletal-muscle-2ed:ch8` — mantener cadena exacta del código, no reinterpretar).
- **Confidence:** `inferred`.
- **Mapeo `TriageAction` + EVA:** EVA 0-6 → `rehab_load`; EVA 7-10 → `relative_rest`.

## 12. Fila 11 — ECU / sobrecarga extensora (muñeca cubital)

- **Estructura:** extensor cubital del carpo ECU / complejo extensor muñeca.
- **`TissueType`:** `tendon`.
- **Patrón de dolor:** duele borde cubital al extender/desviar muñeca con carga (remo, curl,
  press, trabajo manual). Dolor post-uso + rigidez matinal leve. Mejora con descarga grip;
  empeora con desviación cubital repetida + pronosupinación cargada.
- **Tests de campo:**
  1. Isométrico extensión muñeca neutra 30-45s, EVA ≤3/10.
  2. Desviación cubital/radial lenta sin carga: anotar lado que reproduce.
  3. Palpación surco ECU vs vientre extensores; comparar lado sano.
- **Intervención:** isométricos + HSR muñeca con carga ligera y tempo lento; descargar grip
  y muñeca en extensión (straps/grip neutro temporal). Sin estiramiento agresivo.
- **Cita:** Low, Overcoming Tendonitis — por-verificar; Gray's — por-verificar
  (compartimentos extensores). Cadena código: `CITES.tendon`.
- **Confidence:** `inferred` (ECU vs triangular puede solaparse; derivar si chasquido/inestabilidad).
- **Mapeo `TriageAction` + EVA:** EVA 1-6 → `rehab_load`; EVA 7-10 → `relative_rest`;
  si inestabilidad/tingling → evaluar vía `nerve|ligament` (ver §6).

## 13. Fila 12 — Facetaria lumbar mecánica

- **Estructura:** articulaciones facetarias lumbares + espasmo protector (patrón mecánico).
- **`TissueType`:** `muscle` (vía espasmo protector; articulación pura no existe en `TissueType`).
- **Patrón de dolor:** dolor lumbar sordo/rígido, matinal, duele al extender y estar mucho de
  pie/parado; alivia al moverse suave, flexionarse leve y con calor. Sin ciática/hormigueo
  típicos. Empeora con extensión + rotación cargada y sedestación hundida larga.
- **Tests de campo (sin banderas rojas, sin forzar):**
  1. Flexo-extensión de pie lenta 5 rep: anotar dirección que alivia (típico flexión leve).
  2. Marcha 2 min suave: ¿mejora con movimiento? (mecánico = sí).
  3. Palpación paravertebral vs apófisis: espasmo muscular vs dolor óseo puntual.
- **Intervención:** `rehab_load` suave si EVA ≤6: caminata, movilidad sin dolor, McGill big-3
  adaptado sin extensión forzada. `relative_rest` de bisagra/press pesado si EVA ≥4;
  higiene sedestación + pausas. Umbral bajo a derivar (ver §4/§6).
- **Cita:** Moore — por-verificar (columna lumbar/facetas); Levangie / Norkin —
  por-verificar (mecánica lumbar). Cadena código: `CITES.muscle`.
- **Confidence:** `inferred` (mecánico vs discal/nervioso no distinguible sin profesional).
- **Mapeo `TriageAction` + EVA:** EVA 0-6 → `rehab_load` suave; EVA 7-10 → `relative_rest`;
  cualquier irradiación/hormigueo → reclasificar a `nerve` (`nerve_gliding`/`doctor_now`).

---

## 4. Red-flags — derivación inmediata (bloquean el flujo)

> Regla código `triage()`: `if (input.redFlags.length > 0) → blocked:true + doctor_now`.
> Archivo 18 §18.1: 1 red-flag = fin del flujo automático + solo prehab suave + profesional.

| # | Red-flag (`TriageInput.redFlags[]`) | Acción | Nota |
|---|-------------------------------------|--------|------|
| R1 | Entumecimiento progresivo | `doctor_now` | No neurodinámica por cuenta propia |
| R2 | Pérdida de fuerza (no puede levantar / se le cae) | `doctor_now` | No HSR ni test resistido |
| R3 | Chasquido con impotencia funcional (no apoya/mueve tras trauma) | `doctor_now` | Sospecha ligamentaria/ósea |
| R4 | Fiebre + dolor articular/muscular | `doctor_now` | Sospecha infecciosa/inflamatoria |
| R5 | Dolor nocturno que no cede con nada | `doctor_now` | Derivar aunque EVA diurno sea bajo |
| R6 | Incontinencia / anestesia en silla de montar (lumbar) | `doctor_now` urgente | Extensión de R1-R2 a lumbar |
| R7 | Derrame grande / deformidad tras trauma | `doctor_now` | No comparar laxitud en casa |
| R8 | Hormigueo + pérdida fuerza cervical/lumbar con irradiación | `doctor_now` | No tensión neural sostenida |
| R9 | Empeora 2 días seguidos o no mejora en 7 días (`painLog`) | derivación sugerida | Archivo 18 §18.4, no seguir adaptando en bucle |
| R10 | EVA ≥7 con `tingling` o `instability` | `doctor_now` | Vía `actionFor(nerve|ligament, eva≥7)` |

Prohibido: HSR, isométricos pesados, neurodinámica con tensión sostenida, tests de
inestabilidad forzada o retorno a carga si hay cualquier R1-R8 activo.

## 5. Disclaimer de no-diagnóstico (obligatorio en UI)

> Texto canónico del código (`TRIAGE_DISCLAIMER` en `triage.ts` — no parafrasear al
> implementar; aquí versión legible para este documento):

- "Hipótesis funcionales, no diagnóstico médico. Verifica con profesional de la salud +
  los tests sugeridos antes de entrenar sobre la zona."
- Esta matriz no sustituye historia clínica, exploración física ni imagen.
- Todo `top3[{estructura, nivel, porQué, tests}]` (archivo 18 §18.2) debe mostrarse como
  "podría ser… verifica con profesional + estos tests".
- Curación SOLO de biblioteca (prohibido web sin cita) — archivo 18 §18.2.
- Si el usuario insiste en entrenar sobre zona con EVA ≥7 o red-flag: solo derivación +
  prehab suave (archivo 18 §18.1/§18.3).

## 6. Cómo cada fila alimenta el código (`TriageInput` → `treeScores` → `actionFor`)

> `TriageInput = {zone, onset, quality, eva, morningStiffness, improvesWithWarmup,
> instability, swelling, tingling, mechanism?, redFlags[]}`.

| Fila | `zone` ejemplo | Disparador principal en `TriageInput` | Vía `treeScores()` | `actionFor()` |
|------|----------------|---------------------------------------|--------------------|---------------|
| 1 supraespinoso | `hombro` | `onset:gradual + morningStiffness/improvesWithWarmup + quality:dull + eva 3-6` | `tendon+3/+1` | `rehab_load` (≥7 `relative_rest`) |
| 2 bíceps largo | `hombro-anterior` | `onset:gradual/post-session + quality:dull + mechanism:curl/tracción` | `tendon+1/+3` | `rehab_load` (≥7 `relative_rest`) |
| 3 bursa subacromial | `hombro` | `swelling:true + quality:swollen + onset:gradual, sin instability` | `bursa+3/+1` | `relative_rest` siempre |
| 4 epicóndilo lateral | `codo-lateral` | `onset:gradual/post-session + morningStiffness + quality:dull/stiff` | `tendon+3` | `rehab_load` (≥7 `relative_rest`) |
| 5 epicóndilo medial | `codo-medial` | `onset:gradual/post-session + quality:dull + mechanism:flexión/pronación` | `tendon+1/+3` | `rehab_load` (≥7 `relative_rest`) |
| 6 patelar | `rodilla-anterior` | `onset:gradual/post-session + improvesWithWarmup + quality:dull/stiff` | `tendon+3` | `rehab_load` (≥7 `relative_rest`) |
| 7 ITB | `rodilla-lateral` | `onset:gradual + improvesWithWarmup:false + mechanism:carrera + quality:dull` | `tendon+1` | `rehab_load` (≥7 `relative_rest`) |
| 8 meniscal | `rodilla` | `onset:traumatic + instability:true + quality:sharp (+swelling tardío)` | `ligament+3` | `0-3 relative_rest, ≥4 doctor_now` |
| 9 glúteo medio | `cadera-lateral` | `onset:gradual + quality:dull/stiff + mechanism:apoyo-1-pierna` | `tendon+1/+3` | `rehab_load` (≥7 `relative_rest`) |
| 10 flexores cadera | `cadera-anterior` | `onset:traumatic/post-session + quality:sharp/stiff, sin tingling` | `muscle+1/+2` | `rehab_load` (≥7 `relative_rest`) |
| 11 ECU muñeca | `muneca-cubital` | `onset:gradual/post-session + quality:dull + mechanism:grip/desviación` | `tendon+1` | `rehab_load` (≥7 `relative_rest`) |
| 12 facetaria lumbar | `lumbar` | `onset:gradual + quality:dull/stiff + morningStiffness, sin tingling/swelling` | `muscle+1/tendon+1` | `rehab_load` suave (≥7 `relative_rest`) |
| — (bloqueo) | cualquiera | `redFlags.length>0` o `tingling/electric` + `eva≥7` | `nerve+3 / unknown` | `doctor_now` |

Notas de implementación:

- `zone` es texto libre en el código actual; normalizar a slugs (`hombro`, `codo-lateral`,
  `rodilla-anterior`, `cadera-lateral`, `muneca-cubital`, `lumbar`) al conectar con
  `BODY_ZONES` + `AnatomyViewer` (archivo 18 §18.1).
- `mechanism` libre (ej. `press-militar`, `curl`, `sentadilla`, `carrera`, `salto`) solo
  refina `structureHint`, no cambia `actionFor()`.
- Empates de puntaje → `top3` por orden `['tendon','ligament','bursa','nerve','muscle']`;
  documentar `why` con `Patrón onset/quality, EVA N` como hace `triage()`.
- Si `max===0` (patrón inespecífico): nivel `baja` + "verificar con profesional" (código actual).
- Futura `injuryDifferential.ts` (archivo 18 §18.2) debe reutilizar `TESTS`/`CITES` sin
  duplicar cadenas; esta matriz es la semilla de contenido, no un fork.

## 7. Límites, diferenciales cruzados y qué NO hacer

- Hombro 1 vs 2 vs 3: si hay arco + dolor nocturno + palpación ósea → priorizar bursa (F3);
  si hay dolor anterior + supinación → priorizar bíceps (F2); si no, manguito (F1) como base.
- Codo 4 vs 5: lateral = extensión/agarrar; medial = flexión/pronación. Si hay hormigueo
  cubital → salir de esta matriz → vía `nerve` (`nerve_gliding` suave o `doctor_now`).
- Rodilla 6 vs 7 vs 8: anterior + salto = patelar; lateral + carrera = ITB; torsión +
  fallo/derrame/bloqueo = meniscal → derivar. No confundir derrame (meniscal/ligamento)
  con rigidez matinal (tendón).
- Cadera 9 vs 10: lateral + 1 pierna = glúteo medio; anterior + elevar muslo = flexores.
  Si hay chasquido con impotencia o fiebre → `doctor_now` directo.
- Muñeca 11: si hay inestabilidad, deformidad o hormigueo radial/cubital → no HSR;
  reclasificar a `ligament|nerve` y derivar.
- Lumbar 12: si hay ciática, hormigueo, pérdida de fuerza, anestesia en silla o
  incontinencia → NO es F12 mecánica → `doctor_now` urgente.
- NO hacer: estiramiento agresivo en tendón irritable, foam-roller sobre inserción,
  neurodinámica con tensión sostenida, tests de inestabilidad forzada, HSR con EVA ≥7,
  ni entrenar sobre zona bloqueada por red-flag.
- Citas pendientes: todo `por-verificar` debe curarse en lotes formato LOTE-1
  (1 entidad = 1 chunk, Gray's/Moore cap+pág) según archivo 18 §18.5, tendones primero.
