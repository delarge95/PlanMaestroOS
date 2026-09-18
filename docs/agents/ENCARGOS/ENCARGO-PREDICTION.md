# ENCARGO: PREDICTION — Sistema de Predicciones (2026-09-17)

> Investigación completada. RAG `prediction` construido (3 fuentes, 10 chunks).
> Este documento es el plan de diseño para implementar los 5 módulos.

---

## 1. ARQUITECTURA

```
┌─────────────────────────────────────────────────────────┐
│                    DATOS DISPONIBLES                      │
│  fitapp_workout_history → series, reps, peso, RPE/RIR   │
│  clinicalStore → energía, dolor, sueño, estrés           │
│  cardio_session_history → tipo, minutos, RPE             │
│  wearableStore (opcional) → HRV, RHR, sueño real, strain │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│           src/lib/prediction/ (PURO, testeable)          │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │ OneRMPredictor│  │RecoveryForecast│ │  InjuryRisk │   │
│  │ (Epley+Brzycki)│  │(Banister+HRV) │  │ (ACWR+Monot) │   │
│  └──────┬───────┘  └──────┬────────┘  └──────┬───────┘   │
│         │                  │                   │           │
│  ┌──────┴──────────────────┴───────────────────┴──────┐   │
│  │              ProgressTracker                          │   │
│  │  (stagnation detection + deload timing)               │   │
│  └──────────────────────┬───────────────────────────────┘   │
│                         │                                  │
│  ┌──────────────────────┴───────────────────────────────┐   │
│  │           PredictionPanel (UI en Fitness)              │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

## 2. MÓDULOS (5)

### M1: OneRMPredictor
**Input:** últimas N sesiones del historial con sets ≤10 reps.
**Fórmula (citada [pred-1rm-epley-brzycki]):**
- Epley: `1RM = peso × (1 + reps_efectivas/30)`
- Brzycki: `1RM = peso / (1.0278 − 0.0278 × reps_efectivas)`
- `reps_efectivas = reps_completadas + RIR`
- Output: promedio de ambas fórmulas + confianza (alta ≤6 reps, media 7-10, baja >10)
**Output UI:** "Tu 1RM estimado de Close-Grip Lat Pulldown: 82kg ±3kg (confianza alta)"

### M2: RecoveryForecaster
**Input:** cargas diarias (sRPE × minutos), HRV z-score, sleep debt.
**Fórmula (citada [pred-banister-ffm] + [pred-wellness-composite]):**
- Carga diaria = Σ(RPE × minutos) de cada sesión
- Fatiga = decaimiento exponencial con τ₂=2 días
- Fitness = decaimiento exponencial con τ₁=15 días
- Wellness = sleep(30%) + estrés(20%) + dolor(20%) + energía(20%) + HRV(10%)
- Predicción: `recovery_mañana = fitness_actual − fatiga_actual + wellness_hoy × 0.1`
**Output UI:** "Mañana: recuperación ALTA/MEDIA/BAJA — considera sesión intensa/ligera/descanso"

### M3: InjuryRisk
**Input:** cargas 7d y 28d (ACWR), monotonía semanal, HRV trend.
**Fórmula (citada [pred-acwr-gabbett] + [pred-foster-srpe]):**
- ACWR = carga_aguda(7d) / (carga_crónica(28d) / 4)
- Monotonía = media_carga_diaria / std_carga_diaria (7d)
- Riesgo compuesto: ACWR >1.5 (alto) + monotonía >2.0 (alto) + HRV z < -2 (alto)
- Score 0-100: cada bandera suma puntos
**Output UI:** "Riesgo de lesión: 25/100 (BAJO) — ACWR 1.1, monotonía 1.4, HRV estable"

### M4: ProgressTracker
**Input:** 1RM estimados históricos por ejercicio, volumen por patrón, 3+ semanas.
**Fórmula (citada [pred-stagnation-detection]):**
- Estancamiento: 3 semanas sin crecimiento >2% en volumen efectivo Y sin mejora >1% en 1RM
- Rate esperado por training age (McDonald/Aragon [pred-muscle-gain-rates])
**Output UI:** "Progreso: Upper push +4.2% en 4 semanas (en línea con año 1). Estancamiento en Lower pull detectado: 3 semanas sin mejora."

### M5: DeloadTimer
**Input:** semanas desde último deload, fatiga acumulada, ACWR trend.
**Fórmula (integrada con regla existente fit:deload-due):**
- Semanas sin deload ≥4-6 (según volumen)
- Fatiga (fitness-fatiga gap) > umbral
- ACWR crónico subiendo >2 semanas consecutivas
**Output UI:** "Deload recomendado en ~2 semanas" o "Deload YA recomendado (5 semanas acumuladas)"

## 3. INTEGRACIÓN CON MOTOR DE REGLAS

| Predicción | Nueva regla | O alimenta regla existente |
|---|---|---|
| 1RM bajo → subir peso | `pred:1rm-vs-target` | Progresión de carga |
| Wellness <50 | `pred:wellness-low` | Modifica appliesWhen de reglas de volumen |
| ACWR >1.5 | YA existe (fit:tendon-loading-frequency) → añadir context | ACWR como input a fit:volume-ramp |
| Estancamiento | `pred:stagnation-detected` | Sugerencia cambiar variante o volumen |
| Deload timing | Alimenta fit:deload-due con fecha real | Mejora la regla con datos históricos |

## 4. UI

| Módulo | Ubicación | Formato |
|---|---|---|
| 1RM por ejercicio | Fitness → Progreso | Card con 1RM estimado + confianza |
| Recovery forecast | Fitness → Hoy | Banner junto al chip WHOOP |
| Injury risk | Fitness → Hoy | Badge semáforo (verde/amarillo/rojo) |
| Progress/stagnation | Fitness → Progreso | Gráfico de tendencia + alertas |
| Deload timer | Fitness → Hoy | Chip "Deload en X semanas" |

## 5. FASES DE IMPLEMENTACIÓN

| Fase | Qué | Sesiones |
|---|---|---|
| P1 | M1 OneRMPredictor (puro + tests + UI en Progreso) | 1 |
| P2 | M3 InjuryRisk (puro + tests + badge en Hoy) | 1 |
| P3 | M2 RecoveryForecaster (puro + tests + banner en Hoy) | 1-2 |
| P4 | M4 ProgressTracker + M5 DeloadTimer | 1-2 |
| P5 | Integración con motor de reglas (3-4 nuevas reglas) | 1 |
| Total | | **5-7 sesiones** |

## 6. LIMITACIONES (honestidad §0.1)

- **Sin datos suficientes** (<2 semanas de historial): todas las predicciones devuelven "insuficiente data" — nunca inventar
- **1RM estimado ≠ 1RM real**: ±5% de error en el mejor caso; marcar siempre como "estimado"
- **Banister model simplificado**: sin calibración individual (necesitaría 6+ semanas de datos para fit)
- **ACWR es bandera, no diagnóstico** (críticas estadísticas documentadas en Zouhal 2021)
- **Sin wearable**: HRV y sleep real no disponibles — predicciones de recuperación degradan a "solo RPE"
- **La app NO predice lesiones**: identifica factores de riesgo documentados y los informa
