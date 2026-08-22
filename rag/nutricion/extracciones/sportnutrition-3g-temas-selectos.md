# Sport Nutrition (3G E-learning) — TEMAS SELECTOS (ch2, ch4, ch5, ch6) (pp. 55–296)

## 1) Metadatos
- Libro: *Sport Nutrition*, 3G E-learning/Bibliotex, e-book 2022. Fuente S1 (complementaria, expert-book recopilado).
- Extracción local. Solo pasajes con valor no cubierto por S2/S3.

## 2) Contratos y entidades
- `proteinDistributionInterval` (cada 3–5 h), `carbRangeGrams` (rango poblacional general).

## 3) Reglas cuantitativas (solo las que aportan algo distinto o corroboración simple)

| id sugerida | Regla | Valores | Condiciones | Confianza | Cita |
|---|---|---|---|---|---|
| `nutri-protein-distribution-3-5h` | Distribuir proteína de calidad a lo largo del día **cada 3–5 horas** y tras sesiones clave | cada 3–5 h | atletas | explicit | ch4 p.151 |
| `nutri-protein-window-30min-2h` | Ventana post-entreno recomendada: **entre 30 min y 2 h** | 0.5–2 h | post-entreno | explicit | ch4 p.151 |
| `nutri-protein-total-range` | Rango total proteico deportivo: **1.2–2.0 g/kg/día** ("los más recientes") | 1.2–2.0 g/kg | atletas | explicit | ch4 p.150 |
| `nutri-protein-seniors` | Mayores: 1.0–1.3 g/kg/día (sin entrenamiento) | 1.0–1.3 g/kg | mayores sedentarios | explicit | ch4 p.169 |
| `nutri-protein-absorption-rate` | El tracto digestivo absorbe ~10 g de aminoácidos por hora (una comida normal se absorbe completa en horas) | ~10 g AA/h | fisiología | explicit | ch4 p.165 |
| `nutri-leucine-2.5g-study` | Estudio citado: EAA con **2.5 g de leucina** post-ejercicio mejora síntesis proteica | 2.5 g leucina | estudio citado | explicit | ch4 p.168 |
| `nutri-cho-general-range` | Rango CHO población general: 45–65% de energía (225–325 g en dieta de 2000 kcal) | 45–65% | población general | explicit | ch2 pp.60–61 |
| `nutri-weightloss-monitor-protein` | En pérdida: vigilar proteína (cantidad, calidad y timing) y evitar restricción energética severa | — | déficit | qualitative | ch6 pp.286–287 |
| `nutri-weightloss-meal-timing` | En pérdida: distribuir comidas/snacks a lo largo del día y alrededor del ejercicio | — | déficit | qualitative | ch6 p.289 |

## 4–7) N/A

## 8) Integración en Plan Maestro OS
- La regla de distribución cada 3–5 h es la base de las franjas del día tipo (desayuno / peri-entreno / comida / cena).
- Esta fuente NO es canónica: el validador exige que toda cifra de S1 que alimente UI esté corroborada por S2 o S3 (así ocurre con 1.2–2.0 g/kg: dentro de la envolvente NSCA 1.0–2.7 y Maughan 1.2–1.8).
