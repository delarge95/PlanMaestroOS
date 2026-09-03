# 31 — Matemática de la app (fórmulas, deducciones, ejemplos)

> Toda cifra visible en la app traza a una sección de este archivo + `sourceRef`.
> Convención: unidades SI salvo nota; redondeo explícito en cada fórmula.

## 31.1 E1RM (Epley 1985) + mapa RPE→% + discos

- `E1RM = w × (1 + r/30)`, `w` = carga (kg), `r` = reps (r ≤ 12; más reps = inválido).
  Ejemplo: 60×8 → 60×1.2667 = 76.0 kg.
- Mapa RPE→% del 8RM usado en `loadCalculator` (tabla interna, cualitativa-experta):
  RPE 10→100%, 9→95%, 8→90%, 7→85%. `target = % × 8RM_aprox`.
- Discos por lado: `lado = (target − barra) / 2`, redondeo a múltiplos de 2.5 kg
  (inventario estándar); calentamiento sugerido: 50%×8, 70%×5, 85%×3.
- Fuente: Epley (1985); tabla RPE `confidence: qualitative`, tier `expert-book`.

## 31.2 Volumen semanal (hard sets) — MEV/MAV/MRV

- Hard set = serie a RPE ≥ 7 o RIR ≤ 3 en ejercicio compuesto del patrón.
- Landmarks por músculo/semana (Israetel/Nippard, citar cap/pág por regla):
  MEV ≈ 6-8, MAV ≈ 10-16, MRV ≈ 18-22 (principiante −30%, avanzado +20%).
- Regla `fit:volume-ceiling`: `warning` si > MAV, `violation` si > MRV dos
  microciclos seguidos. Frecuencia ≥2×/músculo para hipertrofia.
- Deltas: `Δ = semana_actual − anterior`; rampa >+20% con RPE medio ≥8.5 → warning.

## 31.3 Energía: METs + fuerza (cota inferior) + EPOC + TDEE

- METs: `kcal = MET × kg × horas` (Compendio Ainsworth; `avgMets` citado por preset).
  Ejemplo: correr 9 MET × 80 kg × 0.75 h = 540 kcal.
- Fuerza (cota inferior honesta, `sessionToNutrition.ts`):
  `J = carga × 9.81 × 0.5m × series × reps; kcal = J/4184 × 1.10 (EPOC)`.
  Ejemplo: 60 kg ×9.81×0.5×4×8 = 9419 J → 2.25 kcal ×1.1 = 2.5 kcal por ejercicio.
  Es energía mecánica externa: el costo metabólico real es 4-5× mayor; se declara
  como cota inferior, jamás como gasto total (anti-slop).
- EPOC: +5-15% post-esfuerzo (Maughan, `inferred`); se usa 10% fijo documentado.
- TDEE: Mifflin-St Jeor `TMB = 10×kg + 6.25×cm − 5×edad + s` (s=+5 ♂/−161 ♀)
  × factor actividad 1.2-1.9. `dailyBalance = ingerido − (TMB×factor + quemado)`.
- Proteína: 1.6-2.2 g/kg (volumen), 2.2-2.6 (déficit); menopausia 1.2-1.5 g/kg;
  fase lútea +50-100 kcal/día (papers R1, display-only).

## 31.4 SM-2 (coincide con `spacedRepetition.ts`, no con docs viejos)

- `EF' = EF + (0.1 − (5−q)(0.08 + (5−q)0.02))`, q: again=0…easy=5; cotas [1.3, 2.8].
- Intervalos: again→0 (reaprender), good: `prev<1 ? 1 : max(prev+1, prev×EF)`,
  hard: `max(1, prev×1.2)`, easy: `max(prev+2, prev×EF×1.3)`.
- Racha: días consecutivos con actividad (hoy o ayer mantienen).

## 31.5 TRIMP (Banister, fase BLE)

- `TRIMP = min × ΔFC_ratio × 0.64e^(1.92×ΔFC_ratio)`, `ΔFC = (FC−reposo)/(FCmáx−reposo)`.
  Ejemplo: 30 min a ΔFC 0.6 → 30×0.6×0.64×e^1.152 ≈ 36.5. Presupuesto semanal por
  zona; alimenta el presupuesto global de fatiga (RPE×min).

## 31.6 VDOT/zonas (Daniels, base cardio)

- VDOT desde marca reciente; zonas E/M/T/I/R como %FCmáx o %VDOT según tabla del
  libro (cada preset cita tabla). Sin marca reciente → zonas por FC con disclaimer.

## 31.7 fitScore, ROI, decaimiento vacantes, MEV, grafo

- fitScore: stack 0-4 (overlap×4) + seniority 0-2 + remoto 0-2 + idioma 0-1 +
  señal 0-1 = 0-10 (`impl/career/fitScore.ts`).
- ROI curso: `Σ(postings × brecha) / horas`; veto si artefacto >14 días.
- Decaimiento: fresh ≤72h, aging ≤7d, stale→archivada (punto ciego B).
- MEV rescate: 1 serie RIR 1-2 por patrón (~15 min); 5 tarjetas idiomas.
- Pesos de arista `loads`: nº reglas que citan el ejercicio; `fits`: score/10 con
  reasons en `cite`; `stresses` con lesión activa: weight 0 = vetado.
