# The Renaissance Kitchen — Extracción Completa de Principios Culinarios y Macros

> **sourceId:** `rp-renaissance-kitchen`
> **Título:** The Renaissance Kitchen Cookbook (Lori Shaw & Renaissance Periodization)
> **Editorial:** Renaissance Periodization, 2017 · 125 páginas
> **PDF:** `D:\Downloads\RP Training programs\RP-TheRenaissanceKitchen.pdf`
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22

---

## 1) Metadatos

- **Libro:** The Renaissance Kitchen Cookbook
- **Autora:** Lori Shaw (RP Nutrition Coach & Competidora Figure)
- **Disciplina:** Gastronomía para composición corporal / Cocina alta en proteína / Ajuste modular de macronutrientes (Cutting / Massing / Maintenance)
- **Población objetivo:** Atletas en plantillas RP, levantadores en déficit o superávit calórico, preparadores de comidas (meal prep)
- **Alcance de esta sección:**
  - Filosofía culinaria RP: alta saciedad, densidad de proteína magra y sustituciones inteligentes de grasas y azúcares (pp. 1–10).
  - Recetario estructurado por categorías de macronutrientes:
    - Fuentes Principales de Proteína Magra (Pescados blancos, salmón, aves, carne magra, claras, yogur griego) (pp. 11–50).
    - Guarniciones de Carbohidratos y Opciones Peri-Entrenamiento (Arroces, patatas, avenas, pastas de legumbres) (pp. 51–75).
    - Verduras, Hortalizas y Sopas de Volumen (Sopas de espárragos, kale chips, ensaladas crujientes) (pp. 76–95).
    - Postres y Snacks Altos en Proteína (Mousse proteico, galletas de avena y suero, smoothies) (pp. 96–124).
  - Desglose estricto de macronutrientes por porción (Proteína en g, Carbohidratos en g, Grasas en g, Calorías totales en kcal).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `nutritionRecipe`)

```typescript
export interface RPRecipeMacroProfileContract {
  recipeId: string;
  recipeName: string;
  category: 'lean_protein_main' | 'carb_side' | 'high_volume_veggie' | 'healthy_fat' | 'high_protein_treat';
  servingsCount: number;
  macrosPerServing: {
    proteinGrams: number;
    carbGrams: number;
    fatGrams: number;
    caloriesKcal: number;
  };
  cookingMethod: 'baking' | 'pan_sear_low_oil' | 'slow_cooker' | 'air_fry_roast';
  dietPhaseSuitability: ('aggressive_cut' | 'moderate_cut' | 'maintenance' | 'mass_gain')[];
}
```

---

## 3) Reglas cuantitativas y principios culinarios

### Regla: `rp-high-protein-low-fat-culinary-substitutions`
- **id:** `rp-high-protein-low-fat-culinary-substitutions` | **tipo:** gastronomía / composición corporal
- **descripción:** Pautas de sustitución culinaria para maximizar la densidad proteica y reducir calorías vacías:
  - **Sustitución de Cremas y Nata:** Empleo de **yogur griego 0% o 2%** en lugar de crema agria, nata o mayonesa para salsas cremosas (aumenta proteína en $+10\text{--}15\text{ g}$ por porción reduciendo grasa en un $-80\%$).
  - **Control de Aceites de Cocción:** Uso de pulverizadores de aceite en aerosol (1–2 segundos = $\sim 1\text{--}2\text{ g}$ de grasa vs 1 cucharada sopera = $14\text{ g}$ de grasa / $120\text{ kcal}$).
  - **Quesos Reducidos en Grasa:** Empleo exclusivo de quesos al 2% o "part-skim" para aportar sabor reduciendo el aporte de grasas saturadas a la mitad.
- **confianza:** `explicit`
- **capítulo/página:** Introduction & Culinary Guidelines, pp. 5–8.

---

## 4) Integración en Plan Maestro OS

1. **Base de Datos de Recetas (`src/data/recipes/`):**
   - Conectar las 60 recetas de Lori Shaw con el generador de planes de comida RP para sincronizar macros de corte o volumen.
2. **Motor de Sustituciones de Ingredientes:**
   - Implementar el catálogo de sustitutos bajos en grasa para optimizar recetas de usuarios en déficit calórico agresivo.
