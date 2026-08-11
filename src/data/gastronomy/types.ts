// src/data/gastronomy/types.ts - Modelo de datos oficial para Gastronomía

export type Recipe = {
  id: string;
  title: string;
  sourceUrl?: string;
  sourceName?: string;
  ingredients: { name: string; quantity: string }[];
  steps: string[];
  cuisine: string;
  difficulty: 'baja' | 'media' | 'alta';
  cost: 'económica' | 'media' | 'alta';
  timeMinutes: number;
  macros?: { kcal: number; protein: number; carbs: number; fat: number };
  tags: string[];
  myNotes?: string;
};

export type SavedItem = {
  id: string;
  url: string;
  platform: 'fb' | 'ig' | 'yt' | 'other';
  title: string;
  category: string;
  savedAt: string;
  status: 'queue' | 'processed' | 'discarded';
};

export type GastronomyBook = {
  id: string;
  title: string;
  author: string;
  summary: string;
  myNotes: string;
};

export type Chef = {
  id: string;
  name: string;
  specialty: string;
  url: string;
};
