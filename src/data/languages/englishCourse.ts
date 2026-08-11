// src/data/languages/englishCourse.ts - Tracks Empresarial y Técnico de Inglés

import type { LanguageCourse } from './types';

export const englishCourse: LanguageCourse = {
  id: 'english-pro',
  language: 'en',
  title: 'Inglés Profesional — Empresarial & Técnico',
  units: [
    {
      id: 'u-emp',
      order: 1,
      title: 'Empresarial: Entrevistas & Pitch Profesional',
      lessons: [
        {
          id: 'les-en-1',
          order: 1,
          title: 'Elevator Pitch & High-Impact Self Introduction',
          kind: 'speaking',
          estimatedMinutes: 20,
          content: [
            'Structure your introduction using Past (experience) + Present (current role) + Future (goals with the company).',
            'Use action verbs: "Architected", "Engineered", "Optimized", "Spearheaded".',
            'Keep sentences crisp and active: "I developed a digital twin pipeline" instead of "I was involved in..."'
          ],
          exercises: [
            {
              id: 'ex-en-1',
              type: 'multiple_choice',
              prompt: 'Which action verb is best for leading a project?',
              options: ['Spearheaded', 'Did', 'Looked after'],
              correctAnswer: 'Spearheaded'
            }
          ]
        }
      ]
    },
    {
      id: 'u-tech',
      order: 2,
      title: 'Técnico: Shaders, 3D & AI Terminology',
      lessons: [
        {
          id: 'les-en-2',
          order: 1,
          title: 'Shader Performance & Memory Optimization Specs',
          kind: 'theory',
          estimatedMinutes: 25,
          content: [
            'Key technical terms: Draw calls, Frame time (ms), Texture streaming, Quad occupancy, Shader instruction count.',
            'Expressing performance: "Reducing texture passes decreased frame latency by 15ms."'
          ],
          exercises: [
            {
              id: 'ex-en-2',
              type: 'fill_in_blank',
              prompt: 'Optimizing HLSL code reduced the total instruction ______ (count/number).',
              correctAnswer: 'count'
            }
          ]
        }
      ]
    }
  ]
};
