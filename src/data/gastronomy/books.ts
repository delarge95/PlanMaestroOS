// src/data/gastronomy/books.ts - Libros de Referencia Gastronómica

import type { GastronomyBook } from './types';

export const initialBooks: GastronomyBook[] = [
  {
    id: 'bk-1',
    title: 'Salt, Fat, Acid, Heat',
    author: 'Samin Nosrat',
    summary: 'Los cuatro elementos fundamentales para dominar la ciencia del sabor y la cocción.',
    myNotes: 'Fundamental entender el balance de ácido para cortar grasas pesadas en carnes.'
  },
  {
    id: 'bk-2',
    title: 'The Food Lab: Better Home Cooking Through Science',
    author: 'J. Kenji López-Alt',
    summary: 'Explicación científica de reacciones químicas en la cocina (Maillard, emulsiones).',
    myNotes: 'Excelente guía para temperaturas de cocción de proteínas.'
  }
];
