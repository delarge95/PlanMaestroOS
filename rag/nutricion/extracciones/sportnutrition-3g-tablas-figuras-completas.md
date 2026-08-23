# Sport Nutrition 3G (2022) — Extracción Completa de Tablas y Figuras (G1 a G3)

> **sourceId:** `sportnutrition-3g-2022`
> **Sección:** Tablas y Figuras Clave del Plan de Extracción Gemini (G1 a G3)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Publicación:** 3G E-Learning / Bibliotex (2022)

---

## 1) Metadatos

- **Libro:** Sport Nutrition
- **Año y Editorial:** 2022 / 3G E-Learning FZ LLC (Bibliotex)
- **Disciplina:** Nutrición deportiva contemporánea / Periodización de carbohidratos / Disponibilidad energética y RED-S
- **Alcance de esta sección:**
  - **G1 (ch1 §1.4.2, pp. 34–37 / PDF 50–53):** Pautas contemporáneas de la comida pre-evento, índice glucémico (IG) y vaciamiento gástrico.
  - **G2 (ch2, pp. 60–61 / PDF 76–77):** Rangos de ingesta diaria de carbohidratos periodizados según la carga horaria y volumen de entrenamiento ($g/kg/día$).
  - **G3 (ch5, pp. 214–224 / PDF 230–240):** Ecuaciones de Gasto Energético Total (TEE = BMR + TEF + EAT + NEAT), Efecto Térmico de los Alimentos por macronutriente y el umbral crítico de **Disponibilidad Energética (EA / RED-S)**.

---

## 2) Tablas y Figuras Cuantitativas

### 2.1 G2: Tabla de Periodización de Carbohidratos Diarios (pp. 60–61)

| Carga de Entrenamiento | Volumen / Duración Diaria | Ingesta Diaria de CHO ($g/kg/día$) | Objetivo Fisiológico |
|---|---|---|---|
| **Baja Intensidad / Habilidad / Descanso** | $<45\text{ a }60\text{ min/día}$ (técnica o recuperación) | $3.0\text{ a }5.0\text{ g/kg}$ | Mantenimiento del glucógeno basal sin sobrecarga calórica |
| **Moderada (Programa estándar de fitness/fuerza)** | $\sim 1\text{ hora/día}$ de intensidad moderada | $5.0\text{ a }7.0\text{ g/kg}$ | Reposición completa del glucógeno utilizado en la sesión |
| **Alta (Programa de resistencia / doble sesión)** | $1.0\text{ a }3.0\text{ horas/día}$ de alta intensidad | $6.0\text{ a }10.0\text{ g/kg}$ | Prevención de la depleción progresiva del glucógeno muscular y hepático |
| **Extrema (Atletas de élite / ultramaratón)** | $>4.0\text{ a }5.0\text{ horas/día}$ | $8.0\text{ a }12.0\text{ g/kg}$ | Límite fisiológico de absorción y resíntesis energética |

---

### 2.2 G3: Componentes del Gasto Energético Total y Disponibilidad Energética (pp. 214–224)

#### Componentes del Gasto Energético Total (TEE):
- **Tasa Metabólica Basal / Reposo (BMR / RMR):** $60\%\text{ a }75\%$ del TEE (energía para homeostasis de órganos vitales).
- **Efecto Térmico de los Alimentos (TEF):** $\sim 8\%\text{ a }10\%$ del TEE global:
  - *Proteínas:* **$20\%\text{ a }30\%$** de la energía ingerida se gasta en su digestión y síntesis proteica (el macronutriente más termogénico).
  - *Carbohidratos:* **$5\%\text{ a }10\%$**.
  - *Grasas:* **$0\%\text{ a }3\%$**.
- **Termogénesis de la Actividad Física (EAT + NEAT):** $15\%\text{ a }30\%$ del TEE (altamente variable).

---

### 2.3 Regla: `energy-availability-reds-threshold`
- **id:** `energy-availability-reds-threshold` | **tipo:** fisiología metabólica / salud del atleta
- **descripción:** La Disponibilidad Energética (Energy Availability - EA) representa la cantidad de energía dietética disponible para los procesos fisiológicos vitales del organismo tras restar el gasto calórico del ejercicio, normalizada por la Masa Libre de Grasa (FFM):
  $$\text{Disponibilidad Energética}\ (\text{EA}) = \frac{\text{Ingesta Energética Diaria}\ (\text{kcal}) - \text{Gasto Energético del Ejercicio}\ (\text{kcal})}{\text{Masa Libre de Grasa (FFM)}\ (\text{kg})}$$
- **umbrales cuantitativos clínicos:**
  - **$\text{EA} \ge 45\text{ kcal/kg FFM/día}$ (Óptima):** Mantiene la función tiroidea ($T_3$), reproductiva/gonadal, salud ósea (osteocalcina), síntesis proteica e inmunidad intactas.
  - **$\text{EA} = 30\text{ a }45\text{ kcal/kg FFM/día}$ (Subóptima):** Zona de reducción de peso corporal bajo supervisión; adaptaciones menores.
  - **$\text{EA} < 30\text{ kcal/kg FFM/día}$ (Baja Disponibilidad Energética / LEA):** Umbral crítico que desencadena el síndrome de **Deficiencia Energética Relativa en el Deporte (RED-S)**: amenorrea/hipogonadismo, pérdida de densidad mineral ósea (osteopenia/fracturas por estrés), depresión del sistema inmune, caída del metabolismo basal ($T_3$ reversa) y pérdida de rendimiento.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 5, pp. 218–224.

---

## 3) Integración en Plan Maestro OS

1. **Calculadora de Disponibilidad Energética (EA):**
   - Incorporar `energy-availability-reds-threshold` para alertar automáticamente a usuarios en déficit calórico agresivo si su EA estimada desciende por debajo de los $30\text{ kcal/kg FFM/día}$.
2. **Motor de Periodización de Nutrición:**
   - Modular la recomendación diaria de carbohidratos en función del volumen de entrenamiento planificado en el calendario semanal (G2).
