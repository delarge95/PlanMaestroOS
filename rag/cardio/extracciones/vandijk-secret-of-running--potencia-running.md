# The Secret of Running (van Dijk & van Megen) — Potencia en running, zonas y técnica

> Digest desde `biblioteca/extracciones/vandijk-secret-of-running.md` (extracción de chat recuperada por AG-BIB).
> Libro orientado a running con potenciómetro (Stryd). Complementa a Daniels (prescripción por ritmo/VDOT) con el ancla de potencia. Parafrasis; citas capítulo/página del libro.

## Modelo físico y economía (reglas `running_model_core`, `specific_energy_cost_running`)

- P = c·m·v + 0.5·ρ·cdA·(v+vw)²·v + (i/100)·m·g·v; c estándar = 0.98 kJ/kg/km (RE ≈ 201 ml O₂/kg/km; c = 0.004875·RE); cdA estándar 0.24 m² (~0.20 en pack; ~0.18 ideal pacers); ρ ≈ 1.226 kg/m³ (15 °C) — Caps. 11–15, pp. 68–97; Caps. 12/20/36/65 (explicit). Variación individual ±10%.
- Relación potencia-VO₂: P/m = 0.08125·VO₂ — Cap. 20, pp. 122–125 (explicit). Puente directo entre %FTP y %VO2max.
- t = E/P (ejemplo maratón: 2961 kJ / 235 W ≈ 3:30); eficiencia neta ~25% — Caps. 7–8, pp. 48–55 (explicit).
- Fatiga: potencia sostenible decae con la duración (Riegel exponente −0.07 por defecto) — regla `riegel_power_time_curve` (explicit).

## FTP de corredor y zonas por potencia (reglas `ftp_vo2max_relation`, `ftp_test_10min`, `power_training_zones`)

- FTP ≈ 0.072 × VO2max (ml/kg/min) en W/kg (VO2max 51 → 3.67 W/kg) — Cap. 20, pp. 122–125 (explicit).
- Test 10 min: FTP = potencia media específica de 10 min máximos ÷ 1.13; repetir cada 6–8 semanas — Cap. 66, pp. 396–399 (explicit).
- Zonas van Dijk (%FTP run): Z0 60–70; Z1 70–80; Z2 80–90; Z3 90–100; Z4 100–110; Z5 110–150; Z6 >150 — Cap. 66, pp. 397–399 (explicit). ⚠️ Escala DISTINTA a Coggan bici (Z2 bici 56–75%): en running el FTP se alcanza antes por el coste elástico; no mezclar escalas entre deportes.
- HR: zonas por potencia > precisión que HR; HRmax ≈ 208 − 0.7×edad (regla `max_heart_rate_estimation`, Cap. 21) (explicit).

## Volumen y sesiones (reglas `weekly_volume_progression`, `hit_running_protocol`, `hill_sprint_training`)

- Progresión máx +5–10% por MES (no por semana); corredor normal hasta ~50–80 km/sem con 1 sesión intensa; maratón: ~80 km/sem y sesión larga 25–30 km — Caps. 4–5, pp. 33–40; Cap. 60, p. 349 (explicit).
- HIT 20 s/10 s (ratio 2:1), ~30 min totales — Cap. 5 p. 40; Cap. 34 p. 199 (explicit). Alternativa corta al HIT por ciclos de Wilkins (bici).
- Sprints en cuesta: 10–20 × 100 m (o 200–400 m), recuperación bajando — Cap. 5, p. 40 (explicit).

## Técnica de carrera (reglas `cadence_economy_target`, `stride_length_speed_relation`, `gct_interpretation`)

- Cadencia objetivo ≥180 spm reduce el coste de vuelo (menor altura de vuelo); monitorear c = (P/m)/v — Caps. 37/39, pp. 212–235 (explicit). Cambios graduales; no sobre-alargar zancada.
- speedKmh = zancada_m × cadencia_spm × 60/1000 — Caps. 37–38 (explicit).
- GCT ≈ stepLength/speed×3600 (0.8 m a 12 km/h ≈ 240 ms); no reducir artificialmente sin subir velocidad — Cap. 38, pp. 220–227 (explicit).

## Integración Cardio

- Usar como fuente de la capa "potencia en running" (test FTP 10 min, zonas %FTP run) cuando el usuario tenga Stryd/potenciómetro; Daniels sigue siendo la autoridad de prescripción por ritmo (matriz de autoridad: daniels priority 1 running-prescripción, vandijk priority 1 running-potencia).
- `ftp_vo2max_relation` + `power_training_zones` nutren presets max-speed/HIT de running por potencia.
- ⚠️ Hill factor inconsistente entre Cap. 14 (45.6+1.1622·i) y Cap. 48 (45.6+1.622·i): usar Cap. 14, marcado para revisión.
