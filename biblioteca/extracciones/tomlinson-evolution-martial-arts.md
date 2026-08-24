# Evolution of Martial Arts in Combat Sports — Extracción Completa de Técnicas y Tácticas

> **sourceId:** `tomlinson-evolution-martial-arts`
> **Título:** The Evolution of Martial Arts in Combat Sports (Stuart Tomlinson)
> **Editorial:** Warrior Collective / Crowood Press, 2020 · 296 páginas
> **PDF:** `D:\Downloads\Libros\Tomlinson-EvolutionOfMartialArtsInCombatSports.pdf`
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22

---

## 1) Metadatos

- **Libro:** The Evolution of Martial Arts in Combat Sports
- **Autor:** Stuart Tomlinson (Fundador de Warrior Collective)
- **Disciplina:** Artes marciales mixtas (MMA) / Striking (Muay Thai, Kickboxing holandés, Boxeo, Karate) / Grappling (BJJ, Lucha, Judo)
- **Población objetivo:** Peleadores de MMA, practicantes de artes marciales, entrenadores de combate y desarrolladores del grafo de habilidades de lucha
- **Alcance de esta sección:**
  - **Striking Tradicional vs Moderno en MMA:** Integración de la postura de Muay Thai (Liam Harrison: low kicks devastadores, teep y captura de patadas) vs estilo holandés "Vos Gym" (Ivan Hippolyte: combinaciones de boxeo fluido culminando en low kick potente al muslo) (pp. 73–98).
  - **Karate dinámico y control de distancia para MMA (Jamie Goulding):** Patadas en tijera/oblicuas a la rodilla, blitz de puños, desplazamiento lineal evasivo y ataques desde guardia invertida/southpaw (pp. 99–112).
  - **Muay Thai creativo y clinch (Paul Karpowicz & Damien Trainor):** Codos voladores, Superman elbow, barridos desde el clinch y control cervical doble (ploom) (pp. 113–150).
  - **Fundamentos de boxeo y ángulos en la jaula (Barry Robinson):** Juego de pies "A-System", control de la línea central y salidas en ángulo de $45^\circ$ tras combinaciones (pp. 151–190).
  - **Grappling moderno y juego de sumisiones:** Transiciones de derribo de lucha libre a pasajes de guardia de BJJ y ataques a extremidades inferiores (leg locks: heel hooks, kneebars) (pp. 191–296).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `skillsGraph`)

```typescript
export type CombatDiscipline = 'muay-thai' | 'dutch-kickboxing' | 'karate-mma' | 'boxing-footwork' | 'bjj-grappling' | 'wrestling-clinch';

export interface MartialTechniqueContract {
  techniqueId: string;
  discipline: CombatDiscipline;
  expertCoach: string; // ej. 'Liam Harrison' | 'Ivan Hippolyte' | 'Barry Robinson'
  targetArea: 'head' | 'liver-body' | 'lead-thigh-low-kick' | 'calf' | 'joint-knee-elbow';
  setupMechanism: 'feint-jab-to-low-kick' | 'parry-and-angle-counter' | 'off-balancing-kuzushi-sweep' | 'level-change-takedown';
  defensiveCountermeasure: string;
}
```

---

## 3) Reglas cuantitativas y tácticas

### Regla: `dutch-kickboxing-hand-to-leg-combination-rule`
- **id:** `dutch-kickboxing-hand-to-leg-combination-rule` | **tipo:** táctica de striking / combinación
- **descripción:** El sistema holandés (Ivan Hippolyte / Vos Gym) utiliza combinaciones de 3 a 5 golpes de puño de alto volumen dirigidos a la cabeza (ej. Jab-Cross-Hook izquierdo al hígado) con el objetivo biomecánico de forzar al oponente a levantar su guardia y cargar el peso corporal sobre su pierna adelantada.
- **remate devastador:** En el momento exacto en que la pierna adelantada del rival está fija soportando peso (incapaz de chequear/bloquear), se descarga un **low kick derecho a la inserción distal del cuádriceps / nervio femoral**, maximizando la transferencia de fuerza cinética y daño acumulativo.
- **confianza:** `explicit`
- **capítulo/página:** Sección Dutch Kickboxing, pp. 87–96.

### Regla: `calf-kick-peroneal-nerve-impact`
- **id:** `calf-kick-peroneal-nerve-impact` | **tipo:** biomecánica de impacto / parálisis transitoria
- **descripción:** El *calf kick* (patada baja a la pantorrilla lateral, Liam Harrison) impacta contra el **nervio fibular común** al cruzar el cuello de la fíbula.
- **consecuencia:** 2 a 4 impactos plenos con la espinilla provocan una neuropraxia aguda transitoria con parálisis de los músculos dorsiflexores del pie (**pie caído inmediato / pérdida total del apoyo en la jaula**), inutilizando la movilidad del rival sin requerir la energía de una patada alta a la cabeza.
- **confianza:** `explicit`
- **capítulo/página:** Sección Muay Thai, pp. 79–84.

---

## 4) Integración en Plan Maestro OS

1. **Grafo de Habilidades de Combate (`src/data/skills/combat/`):**
   - Incorporar las 10 técnicas de bajo retroceso de Liam Harrison y las combinaciones de boxeo-patada de Ivan Hippolyte en el módulo de deportes de contacto.
2. **Evaluación de Condicionamiento Físico para MMA:**
   - Mapear las demandas metabólicas intermitentes de los asaltos de 3x5 o 5x5 min en la periodización del entrenamiento de resistencia especial.
