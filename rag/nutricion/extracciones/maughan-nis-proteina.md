# Maughan — Nutrition in Sport — PROTEÍNA (ch10, Lemon) (pp. 133–152)

## 1) Metadatos
- Libro: *Nutrition in Sport*, Vol. VII Encyclopaedia of Sports Medicine (IOC Medical Commission), ed. R.J. Maughan, Blackwell Science, 2000.
- Capítulo: 10 "Effects of Exercise on Protein Metabolism" (P.W.R. Lemon), pp. 133–152 (PDF 151–170, offset −18).
- Población: atletas de fuerza y resistencia; estudios citados mayoritariamente en varones (el propio texto advierte que faltan datos en mujeres, p.144).
- Extracción: local (PyMuPDF, texto). Confianza alta en cifras (texto limpio).

## 2) Contratos y entidades
- `proteinIntakeGPerKg` (g·kg⁻¹·día⁻¹) — métrica central del dominio nutrición.
- `population`: `strength | endurance | general-fitness | deficit` — condiciona el rango aplicable.
- Puente con motor de reglas: regla de tipo `nutrition` con `appliesWhen.population` + `appliesWhen.goal`.

## 3) Reglas cuantitativas (parafraseadas, cita exacta)

| id sugerida | Regla | Valores | Condiciones | Confianza | Cita |
|---|---|---|---|---|---|
| `nutri-protein-strength-range` | Ingesta óptima de proteína para atletas de fuerza | **1.7–1.8 g/kg/día** | atletas fuerza, varones (datos limitados en mujeres) | explicit | ch10 p.144 |
| `nutri-protein-endurance-range` | Ingesta óptima para atletas de resistencia | **1.2–1.4 g/kg/día** | atletas resistencia | explicit | ch10 p.144 |
| `nutri-protein-rda-insufficient` | La RDA actual (0.8 g/kg/día) es inadecuada para físicamente activos | RDA 0.8 g/kg/día insuficiente | personas activas | explicit | ch10 p.144 |
| `nutri-protein-supplement-unnecessary` | La suplementación no es necesaria si la energía total es adecuada: 1.2–1.8 g/kg se alcanzan con dieta | 1.2–1.8 g/kg/día vía alimento | energía total suficiente (ej.: 5000 kcal con 10% proteína ≈ 1.8 g/kg en 70 kg) | explicit | ch10 p.145 |
| `nutri-protein-nitrogen-balance-studies` | Estudios de balance nitrogenado usaron 1.0–2.7 g/kg/día sin daño | rango estudiado 1.0–2.7 g/kg/día | varones entrenados | explicit | ch10 p.133 (fig) |
| `nutri-protein-no-benefit-high` | >1.3–1.4 g/kg/día no mejora el rendimiento muscular según la evidencia citada | umbral 1.3–1.4 g/kg/día | rendimiento agudo (no hipertrofia a largo plazo — el propio texto reconoce límites) | inferred | ch10 p.144 |

## 4) Estructuras anatómicas — N/A (dominio nutrición)
## 5) Habilidades y progresiones — N/A
## 6) Cues técnicos — N/A

## 7) Rehab/prehab — N/A (sin dietas terapéuticas; ver limitaciones AG-NUTRI)

## 8) Integración en Plan Maestro OS
- Mejor uso: rango de proteína por población para el target diario del módulo nutrición. **Conflicto declarado**: NSCA 4ª ed (2016, pp. 183/190) da 1.4–1.7 g/kg para fuerza y 1.8–2.7 en déficit — más moderno y específico; el validador debe preferir NSCA en fuerza y registrar el conflicto. Maughan 1.7–1.8 queda como corroboración de rango alto.
- Qué NO hacer: no prescribir aminoácidos individuales (el texto desaconseja suplementos de AA individuales hasta probar seguridad, p.145).
- Recomendación a AG-FIT: la sesión de fuerza del usuario determina `population=strength` para estas reglas.
