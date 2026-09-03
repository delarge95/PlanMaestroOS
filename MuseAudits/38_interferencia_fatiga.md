# 38 — Interferencia concurrente + presupuesto global de fatiga

> Sin esto, el generador multiobjetivo (Gemini-05 §5) suma cualidades gratis y quema
> al usuario. Todo computable, citado, display-first. Código: `impl/rules/fatigue.ts`.

## 38.1 Presupuesto único: RPE×min semanal por dominio

Cada sesión aporta `load = RPE_medio × minutos` a su dominio
(fuerza, skills, cardio, mma, baile, movilidad). Techo semanal total por defecto:
**2500** (inferred, ajustar con 4 semanas de datos reales; la regla se autocalibra:
si adherencia <70% dos microciclos, techo −15%).

## 38.2 Reglas de interferencia (citan literatura de `biblioteca/`)

- I1 cardio-fuerza: cardio intenso (RPE≥7) <6h antes/después de fuerza → warning
  "separa o cambia a Zona 2" (AMPK/mTOR, citar Daniels+Haff al curar).
- I2 skills frescos: skills (planche/front lever/muscle-up) programados tras fatiga
  (load acumulado día >60% techo) → warning "mueve skills al inicio o a mañana".
- I3 skills al fallo: cualquier skill con RPE 10 registrado → violation
  "skills nunca al fallo: técnica primero" (Low OG2).
- I4 MMA/baile con costo: sesiones mma/baile/movilidad >45 min suman a su dominio
  Y al total (no existen sesiones gratis).
- I5 descarga: 3 microciclos sobre MAV o 1 sobre MRV → semana descarga −50%.

## 38.3 Split semanal de referencia (7 días, suma ≤ techo)

Lun push+planche · Mar pierna+movilidad · Mié Zona 2+core · Jue pull+front lever ·
Vie MMA potencia · Sáb danza/deload activo · Dom descanso+review.
Cada día trae: foco, tiers (skill/fuerza/hipertrofia/prehab), RPE objetivo y load
estimado. El generador (futuro) instancia este esqueleto con el calendario real;
hoy basta como `WorkoutTemplate` + reglas I1-I5 que lo protegen.
