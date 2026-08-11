// src/data/gastronomy/recipes.ts - Recetas con Redacción Propia (Sin Copyright Copiado)

import type { Recipe } from './types';

export const initialRecipes: Recipe[] = [
  {
    id: 'rec-1',
    title: 'Pechuga de Pollo Salteada con Verduras & Arroz Integral',
    cuisine: 'Saludable / Fitness',
    difficulty: 'baja',
    cost: 'económica',
    timeMinutes: 20,
    ingredients: [
      { name: 'Pechuga de pollo picada en cubos', quantity: '200g' },
      { name: 'Brócoli y zanahoria salteados', quantity: '150g' },
      { name: 'Arroz integral cocido', quantity: '150g' },
      { name: 'Aceite de oliva', quantity: '1 cdta' }
    ],
    steps: [
      'Salpimentar el pollo y saltear a fuego medio-alto durante 6 minutos hasta dorar.',
      'Añadir las verduras al sartén y cocinar 4 minutos manteniendo la textura firme.',
      'Servir junto con el arroz integral caliente.'
    ],
    macros: { kcal: 520, protein: 48, carbs: 55, fat: 10 },
    tags: ['Alto en proteína', 'Rápido', 'Post-entreno'],
    sourceName: 'Receta propia ajustada a macros de hipertrofia',
    sourceUrl: 'https://fitapp.local/recipes/chicken-rice',
    myNotes: 'Perfecta para el almuerzo post-gym. Se puede preparar en lote para 3 días.'
  },
  {
    id: 'rec-2',
    title: 'Bowl de Salmón al Horno con Quinoa y Aguacate',
    cuisine: 'Mediterránea',
    difficulty: 'media',
    cost: 'media',
    timeMinutes: 25,
    ingredients: [
      { name: 'Filete de salmón fresco', quantity: '180g' },
      { name: 'Quinoa cocida', quantity: '120g' },
      { name: 'Aguacate en rodajas', quantity: '1/2 unidad' },
      { name: 'Semillas de sésamo', quantity: '1 cdta' }
    ],
    steps: [
      'Hornear el salmón a 200°C durante 12-15 minutos con pimentón y limón.',
      'Montar la base de quinoa en el bowl.',
      'Disponer el salmón horneado y el aguacate, decorando con sésamo.'
    ],
    macros: { kcal: 610, protein: 42, carbs: 40, fat: 28 },
    tags: ['Grasas saludables', 'Omega 3', 'Antiinflamatorio'],
    sourceName: 'Adaptación propia de dieta mediterránea',
    myNotes: 'Usar salmón salvaje para mejor perfil lipídico.'
  }
];
