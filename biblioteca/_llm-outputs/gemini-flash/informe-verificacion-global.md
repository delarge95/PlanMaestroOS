# INFORME DE AUDITORÍA Y VERIFICACIÓN EXHAUSTIVA DE TAREAS

## 1. Módulo Goethe-Zertifikat A1 (`ag-de-goethe-a1-simulacros.json`)
- **Título:** Goethe-Zertifikat A1 (Start Deutsch 1) — Módulo de Simulacros
- **Nivel:** A1.1 | **Total Simulacros:** 2
- **Puntuación Máxima:** 100 pts (Aprobación: 60%)

### 🔹 Auditoría de `simulacro1` (Goethe-Zertifikat A1 — Übungssatz 1)
- **Hören:** 15/15 preguntas (Teil 1: 6, Teil 2: 4, Teil 3: 5) — ✅ OK
  - Integridad de reactivos Hören: ✅ 100% completos
- **Lesen:** 15/15 preguntas (Teil 1: 5, Teil 2: 5, Teil 3: 5) — ✅ OK
- **Schreiben:** Formulario con 5/5 campos (10 pts) + Redacción con 3/3 puntos clave y rúbrica desglosada (15 pts) — ✅ OK
  - Conteo de palabras de Musterlösung: 38 palabras (rango objetivo: ~30 palabras).
- **Sprechen:** Teil 1 (6 prompts + 2 preguntas examinador) + Teil 2 (4 tarjetas temáticas) + Teil 3 (4 tarjetas de objetos/peticiones) — ✅ OK

### 🔹 Auditoría de `simulacro2` (Goethe-Zertifikat A1 — Übungssatz 2)
- **Hören:** 15/15 preguntas (Teil 1: 6, Teil 2: 4, Teil 3: 5) — ✅ OK
  - Integridad de reactivos Hören: ✅ 100% completos
- **Lesen:** 15/15 preguntas (Teil 1: 5, Teil 2: 5, Teil 3: 5) — ✅ OK
- **Schreiben:** Formulario con 5/5 campos (10 pts) + Redacción con 3/3 puntos clave y rúbrica desglosada (15 pts) — ✅ OK
  - Conteo de palabras de Musterlösung: 36 palabras (rango objetivo: ~30 palabras).
- **Sprechen:** Teil 1 (6 prompts + 2 preguntas examinador) + Teil 2 (4 tarjetas temáticas) + Teil 3 (4 tarjetas de objetos/peticiones) — ✅ OK

==================================================
## 2. Variantes de Día Tipo Nutricional (`ag-nutri-dia-tipo-variantes.json`)
- **Targets de Referencia:** 2400 kcal | Proteína: 154.0g | Carbohidratos: 280.0g | Grasa: 74.0g

### 🔹 Verificación Matemática: Variante Omnívora
  - **Comida 1: Desayuno / Primer Pulso Proteico:** 556 kcal | P: 38.0g, C: 65.0g, G: 16.0g | Leucina: 3.1g (Umbral ≥2.7g: ✅ Cumple)
  - **Comida 2: Almuerzo / Carga Previa:** 676 kcal | P: 44.0g, C: 80.0g, G: 20.0g | Leucina: 3.8g (Umbral ≥2.7g: ✅ Cumple)
  - **Comida 3: Peri-Entrenamiento (Pre + Post-Esfuerzo Inmediato):** 504 kcal | P: 32.0g, C: 85.0g, G: 4.0g | Leucina: 3.4g (Umbral ≥2.7g: ✅ Cumple)
  - **Comida 4: Cena / Síntesis Proteica Nocturna:** 666 kcal | P: 40.0g, C: 50.0g, G: 34.0g | Leucina: 3.3g (Umbral ≥2.7g: ✅ Cumple)
  - **Totales Calculados por Suma de Grupos de Alimentos:**
    - Energía: **2402 kcal** (Target: 2400 kcal — Delta: 2 kcal) ✅ EXACTO
    - Proteína: **154.0 g** (Target: 154.0 g — Delta: 0.0 g) ✅ EXACTO
    - Carbohidratos: **280.0 g** (Target: 280.0 g — Delta: 0.0 g) ✅ EXACTO
    - Grasas: **74.0 g** (Target: 74.0 g — Delta: 0.0 g) ✅ EXACTO

### 🔹 Verificación Matemática: Variante Vegetariana
  - **Comida 1: Desayuno / Primer Pulso Proteico Vegetal-Lácteo:** 556 kcal | P: 38.0g, C: 65.0g, G: 16.0g | Leucina: 3.2g (Umbral ≥2.7g: ✅ Cumple)
  - **Comida 2: Almuerzo / Matriz Legumbre-Cereal Complementaria:** 676 kcal | P: 44.0g, C: 80.0g, G: 20.0g | Leucina: 3.3g (Umbral ≥2.7g: ✅ Cumple)
  - **Comida 3: Peri-Entrenamiento (Aislado Vegetal + Carbohidrato Rápido):** 504 kcal | P: 32.0g, C: 85.0g, G: 4.0g | Leucina: 3.0g (Umbral ≥2.7g: ✅ Cumple)
  - **Comida 4: Cena / Concentrado Proteico y Fibra Digestiva:** 666 kcal | P: 40.0g, C: 50.0g, G: 34.0g | Leucina: 3.2g (Umbral ≥2.7g: ✅ Cumple)
  - **Totales Calculados por Suma de Grupos de Alimentos:**
    - Energía: **2402 kcal** (Target: 2400 kcal — Delta: 2 kcal) ✅ EXACTO
    - Proteína: **154.0 g** (Target: 154.0 g — Delta: 0.0 g) ✅ EXACTO
    - Carbohidratos: **280.0 g** (Target: 280.0 g — Delta: 0.0 g) ✅ EXACTO
    - Grasas: **74.0 g** (Target: 74.0 g — Delta: 0.0 g) ✅ EXACTO

==================================================
## 3. Auditoría Anti-Slop (`auditoria-chunks-r1.md`)
- **Fuentes Auditadas:** 10 fuentes cuantitativas de alta densidad.
- **Chunks Analizados Individualmente:** 28 chunks.