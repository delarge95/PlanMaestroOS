<!-- chunk
id: nutri-rp-culinary-philosophy-high-satiety
topic: recipes-macros
tags: culinary-philosophy, high-satiety, lean-protein-density, fat-sugar-substitution, meal-prep, diet-phases
section: Introduction & Culinary Philosophy, pp. 1-10
entities: nutrient:protein, meal:meal-prep, diet:cutting, diet:massing, diet:maintenance
rules: 
-->
Filosofía culinaria RP (The Renaissance Kitchen Cookbook por Lori Shaw & Renaissance Periodization, pp. 1–10): Diseñada para atletas que siguen plantillas RP, levantadores en déficit o superávit calórico y preparadores de comidas (meal prep). El enfoque central radica en maximizar la saciedad mediante una elevada densidad de proteína magra, un control estricto y sustitución inteligente de grasas y azúcares añadidos, y el ajuste modular de macronutrientes por porción adaptado a las distintas fases dietéticas: déficit agresivo (aggressive cut), déficit moderado (moderate cut), mantenimiento (maintenance) o ganancia de masa (mass gain).

<!-- chunk
id: nutri-rp-high-protein-low-fat-culinary-substitutions
topic: recipes-macros
tags: culinary-substitutions, fat-reduction, greek-yogurt, cooking-spray, reduced-fat-cheese, macro-density
section: Introduction & Culinary Guidelines, pp. 5-8
entities: nutrient:protein, nutrient:fat, food:greek-yogurt, food:cooking-spray, food:cheese
rules: nutri-rp-high-protein-low-fat-culinary-substitutions
-->
Pautas de sustitución culinaria RP para maximizar la densidad proteica y reducir calorías vacías (pp. 5–8):
1) Sustitución de Cremas y Nata: Empleo de yogur griego 0% o 2% en lugar de crema agria, nata o mayonesa para salsas cremosas (aumenta la proteína en +10 a 15 g por porción reduciendo la grasa en un -80%).
2) Control de Aceites de Cocción: Uso de pulverizadores de aceite en aerosol (1 a 2 segundos de disparo = ~1 a 2 g de grasa vs 1 cucharada sopera = 14 g de grasa y 120 kcal).
3) Quesos Reducidos en Grasa: Empleo exclusivo de quesos al 2% o "part-skim" para aportar sabor reduciendo el aporte de grasas saturadas a la mitad (50% de reducción).

<!-- chunk
id: nutri-rp-lean-protein-sources-and-cooking-methods
topic: protein
tags: lean-protein, white-fish, salmon, poultry, lean-meat, egg-whites, greek-yogurt, cooking-methods
section: Lean Protein Main Sources, pp. 11-50
entities: nutrient:protein, food:white-fish, food:salmon, food:poultry, food:lean-meat, food:egg-whites, food:greek-yogurt
rules: 
-->
Fuentes principales de proteína magra RP (pp. 11–50): Clasificación de recetas bajo la categoría 'lean_protein_main' centradas en pescados blancos, salmón, aves, carne magra, claras de huevo y yogur griego. Métodos de cocción prioritarios: horneado (baking), salteado en sartén bajo en aceite (pan sear low oil), cocción lenta (slow cooker) y freidora de aire o asado (air fry roast). Cada porción cuenta con un desglose estricto de macronutrientes: proteína en g, carbohidratos en g, grasas en g y calorías totales en kcal.

<!-- chunk
id: nutri-rp-carb-sides-and-peri-workout-sources
topic: recipes-macros
tags: carbohydrates, carb-sides, peri-workout, rice, potatoes, oats, legume-pasta, glycogen
section: Carbohydrate Sides & Peri-Workout Options, pp. 51-75
entities: nutrient:carbohydrates, food:rice, food:potatoes, food:oats, food:legume-pasta, meal:peri-workout
rules: 
-->
Guarniciones de carbohidratos y opciones peri-entrenamiento RP (pp. 51–75): Categoría 'carb_side' diseñada para sincronizar la ingesta de carbohidratos con las demandas de las sesiones de entrenamiento y modular el balance energético en fases de corte, mantenimiento o volumen. Fuentes primarias: arroces, patatas, avenas y pastas de legumbres. Permite ajustar con exactitud los gramos de carbohidratos y calorías totales por porción.

<!-- chunk
id: nutri-rp-high-volume-veggies-and-satiety-soups
topic: recipes-macros
tags: high-volume, vegetables, satiety, fiber, volume-eating, asparagus, kale, salads, cutting
section: Vegetables, Greens & Volume Soups, pp. 76-95
entities: food:vegetables, food:asparagus, food:kale, meal:soup, diet:cutting
rules: 
-->
Verduras, hortalizas y sopas de volumen RP (pp. 76–95): Categoría 'high_volume_veggie' enfocada en preparaciones de muy baja densidad energética y alto volumen y fibra para maximizar la saciedad mecánica y gástrica, prioritarias en fases de déficit calórico moderado o agresivo (cutting). Incluye recetas estructuradas como sopas de espárragos, kale chips horneados y ensaladas crujientes sin aliños grasos.

<!-- chunk
id: nutri-rp-high-protein-treats-and-desserts
topic: protein
tags: high-protein-treats, protein-desserts, whey-protein, protein-mousse, oat-cookies, smoothies, adherence
section: High Protein Treats & Snacks, pp. 96-124
entities: nutrient:protein, food:whey-protein, food:oats, meal:dessert, meal:smoothie, meal:snack
rules: 
-->
Postres, snacks y dulces altos en proteína RP (pp. 96–124): Categoría 'high_protein_treat' desarrollada para asegurar la adherencia dietética sin comprometer el balance de macronutrientes. Opciones formuladas con proteína de suero (whey), claras y avena, tales como mousse proteico, galletas de avena y suero, y smoothies altos en proteína, con desglose cuantitativo por porción de gramos de proteína, carbohidratos, grasas y kcal.

<!-- chunk
id: nutri-rp-recipe-macro-profile-contract-and-integration
topic: recipes-macros
tags: recipe-contract, macronutrient-profile, serving-size, cooking-methods, diet-suitability, meal-planning
section: Contratos TypeScript e Integración Plan Maestro OS, pp. 1-125
entities: nutrient:protein, nutrient:carbohydrates, nutrient:fat, metric:calories, diet:cutting, diet:massing, diet:maintenance
rules: 
-->
Modelo de contrato de perfil de macronutrientes RP (`RPRecipeMacroProfileContract`) e integración en Plan Maestro OS: Estructura de datos para recetas culinarias con los campos: recipeId (string), recipeName (string), category ('lean_protein_main' | 'carb_side' | 'high_volume_veggie' | 'healthy_fat' | 'high_protein_treat'), servingsCount (number), macrosPerServing (proteinGrams, carbGrams, fatGrams, caloriesKcal), cookingMethod ('baking' | 'pan_sear_low_oil' | 'slow_cooker' | 'air_fry_roast') y dietPhaseSuitability (['aggressive_cut', 'moderate_cut', 'maintenance', 'mass_gain']). Se integra con la base de datos de recetas (60 recetas de Lori Shaw en `src/data/recipes/`) y el motor de sustituciones de ingredientes bajos en grasa.

<!-- stats: 7 chunks, 12 entidades cubiertas -->
