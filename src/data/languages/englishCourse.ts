// src/data/languages/englishCourse.ts - Tracks Empresarial y Técnico de Inglés
// Expansión canónica AG-EN Ciclo 1 (4 Unidades completas)
// PRESERVA las lecciones originales les-en-1 y les-en-2 (Regla de oro §0.9)

import type { LanguageCourse } from './types';
import { englishTechnicalVocabulary } from './english/vocabulary';
import { englishScenarios, englishStarAnswers, businessVocabulary } from './english/scenarios';
import { technicalCollocations, workplacePhrasalVerbs, formalVsInformalPairs, falseFriendsTechESEN } from './english/precision';

export const englishCourse: LanguageCourse = {
  id: 'english-pro',
  language: 'en',
  title: 'Inglés Profesional — Empresarial & Técnico (B2/C1)',
  units: [
    {
      id: 'u-tech',
      order: 1,
      title: 'Unidad 1: Vocabulario Técnico Especializado (3D, Graphics, Web & AI)',
      lessons: [
        {
          id: 'les-en-2',
          order: 1,
          title: 'Shader Performance & Memory Optimization Specs',
          kind: 'theory',
          estimatedMinutes: 25,
          content: [
            'Key technical terms: Draw calls, Frame time (ms), Texture streaming, Quad occupancy, Shader instruction count.',
            'Expressing performance: "Reducing texture passes decreased frame latency by 15ms."',
            'GPU instancing allows rendering thousands of identical objects in a single batch, avoiding CPU dispatch bottlenecks.'
          ],
          exercises: [
            {
              id: 'ex-en-2',
              type: 'fill_in_blank',
              prompt: 'Optimizing HLSL code reduced the total instruction ______ (count/number).',
              correctAnswer: 'count'
            },
            {
              id: 'ex-en-tech-1',
              type: 'multiple_choice',
              prompt: 'What rendering technique renders multiple identical meshes in a single draw call?',
              options: ['GPU Instancing', 'Frustum Culling', 'Mipmapping'],
              correctAnswer: 'GPU Instancing'
            },
            {
              id: 'ex-en-tech-2',
              type: 'fill_in_blank',
              prompt: 'Discarding objects outside the camera frustum is called ______ culling.',
              correctAnswer: 'frustum'
            }
          ]
        },
        {
          id: 'les-en-tech-web-ai',
          order: 2,
          title: 'Web Architecture, Hydration & AI Tooling Terminology',
          kind: 'theory',
          estimatedMinutes: 20,
          content: [
            'Web engineering terminology: Bundle size, Code splitting, Hydration, Dead code elimination (Tree shaking).',
            'AI & Automation: Fine-tuning, Vector embeddings, RAG knowledge ingestion, Token budget, Inference latency.',
            'Describing systems: "Our SSR pipeline delivers interactive HTML with sub-second First Contentful Paint (FCP)."'
          ],
          exercises: [
            {
              id: 'ex-en-web-1',
              type: 'multiple_choice',
              prompt: 'Which term describes attaching JavaScript event listeners to server-rendered HTML markup?',
              options: ['Hydration', 'Transpilation', 'Rasterization'],
              correctAnswer: 'Hydration'
            },
            {
              id: 'ex-en-ai-1',
              type: 'fill_in_blank',
              prompt: 'Vector ______ (embeddings/tokens) represent semantic relationships as high-dimensional coordinates.',
              correctAnswer: 'embeddings'
            }
          ]
        },
        {
          id: 'les-en-tech-vocab-review',
          order: 3,
          title: 'Technical Glossary Review (128 Items Bank)',
          kind: 'vocabulary',
          estimatedMinutes: 15,
          content: [
            'Explore the 128 curated technical vocabulary terms across Real-Time Graphics, Unity/3D, Web Development, and AI Engineering.',
            'Use Spaced Repetition (SR) to commit definitions and authentic real-world engineering examples to long-term memory.'
          ],
          exercises: []
        }
      ]
    },
    {
      id: 'u-emp',
      order: 2,
      title: 'Unidad 2: Business English & Escenarios de Negocio Ágiles',
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
            },
            {
              id: 'ex-en-pitch-2',
              type: 'multiple_choice',
              prompt: 'How do you idiomatically express capacity to take on work in tech teams?',
              options: ['I do not have bandwidth', 'I do not have capacity of brain', 'I have no space'],
              correctAnswer: 'I do not have bandwidth'
            }
          ]
        },
        {
          id: 'les-en-agile-meetings',
          order: 2,
          title: 'Agile Ceremonies: Standups, Sprint Planning & Blocker Management',
          kind: 'speaking',
          estimatedMinutes: 25,
          content: [
            'Daily Standup Structure: 1) Yesterday I wrapped up [Task]. 2) Today I am tackling [Task]. 3) No blockers on my end / I am blocked on [API].',
            'Sprint Planning: Challenging estimates politely: "Committing to both might stretch our bandwidth too thin."',
            'Scoping: "I suggest we descope the secondary features to safeguard our core delivery milestone."'
          ],
          exercises: [
            {
              id: 'ex-en-agile-1',
              type: 'multiple_choice',
              prompt: 'What is the correct term for an impediment that stops task progress in daily standups?',
              options: ['Blocker', 'Problematic', 'Inconvenient'],
              correctAnswer: 'Blocker'
            },
            {
              id: 'ex-en-agile-2',
              type: 'order_sentence',
              prompt: 'Order the standup update: [I] [wrapped] [Yesterday] [up] [propeller] [the] [logic]',
              options: ['Yesterday I wrapped up the propeller logic'],
              correctAnswer: 'Yesterday I wrapped up the propeller logic'
            }
          ]
        },
        {
          id: 'les-en-reviews-negotiation',
          order: 3,
          title: 'Code Reviews, Disagreeing Diplomatically & Salary Negotiation',
          kind: 'speaking',
          estimatedMinutes: 25,
          content: [
            'Constructive PR feedback: "I left a non-blocking suggestion on line 45 regarding texture caching."',
            'Diplomatic disagreement: "I see your point regarding speed, but have we considered the maintenance trade-off?"',
            'Salary opener: "Based on market benchmarks for remote technical roles, I am targeting a base range of $3,500 to $4,500 USD."'
          ],
          exercises: [
            {
              id: 'ex-en-rev-1',
              type: 'fill_in_blank',
              prompt: 'A balance achieved between two competing technical features is called a ______-off.',
              correctAnswer: 'trade'
            },
            {
              id: 'ex-en-sal-1',
              type: 'multiple_choice',
              prompt: 'Which phrase is professional and idiomatic for stating compensation targets?',
              options: ['I am targeting a base range of $4,000 USD', 'I want to win $4,000 USD', 'My wish is $4,000 USD'],
              correctAnswer: 'I am targeting a base range of $4,000 USD'
            }
          ]
        }
      ]
    },
    {
      id: 'u-precision',
      order: 3,
      title: 'Unidad 3: Precisión C1 — Collocations, Phrasals & Falsos Amigos',
      lessons: [
        {
          id: 'les-en-collocations-phrasals',
          order: 1,
          title: 'Technical Collocations & Workplace Phrasal Verbs',
          kind: 'theory',
          estimatedMinutes: 20,
          content: [
            'Collocations: "Heavy lifting" (computational work), "Dead code elimination", "Strike a balance", "Granular control".',
            'Workplace Phrasals: "Drill down into" (investigate details), "Roll back" (revert deployment), "Scale out" (horizontal scaling).',
            'Use precise vocabulary to avoid vague phrasing in architecture design documents.'
          ],
          exercises: [
            {
              id: 'ex-en-colloc-1',
              type: 'multiple_choice',
              prompt: 'Which collocation means finding an acceptable middle ground between constraints?',
              options: ['Strike a balance', 'Hit a middle', 'Find a bridge'],
              correctAnswer: 'Strike a balance'
            },
            {
              id: 'ex-en-phrasal-1',
              type: 'fill_in_blank',
              prompt: 'Let us drill ______ (down/deep) into the profiler metrics to locate the bottleneck.',
              correctAnswer: 'down'
            }
          ]
        },
        {
          id: 'les-en-false-friends-pitfalls',
          order: 2,
          title: 'False Friends & Common Spanish-English Cognate Traps',
          kind: 'theory',
          estimatedMinutes: 20,
          content: [
            'Actual vs Current: "Actual" means real / existing in fact. For "actual" (español), use "Current" or "Present".',
            'Compromise vs Commitment: "Compromise" implies conceding or risk. For "compromiso" (dedication/agreement), use "Commitment".',
            'Library vs Bookstore: A software "library" is code; in Spanish, "librería" is a bookstore.',
            'Eventual vs Occasional: "Eventual" means happening at an unspecified future time, NOT occasionally.'
          ],
          exercises: [
            {
              id: 'ex-en-ff-1',
              type: 'fill_in_blank',
              prompt: 'The ______ (current/actual) build version is v1.4.2 (meaning "versión actual").',
              correctAnswer: 'current'
            },
            {
              id: 'ex-en-ff-2',
              type: 'multiple_choice',
              prompt: 'How do you say "cumplimos nuestro compromiso del sprint"?',
              options: ['We met our sprint commitment', 'We fulfilled our sprint compromise', 'We did our compromise'],
              correctAnswer: 'We met our sprint commitment'
            }
          ]
        },
        {
          id: 'les-en-formal-register',
          order: 3,
          title: 'Formal vs. Informal Register in Engineering Teams',
          kind: 'writing',
          estimatedMinutes: 15,
          content: [
            'Elevating register: "Commence / Initiate" vs "Kick off / Start"; "Investigate" vs "Look into"; "Resolve" vs "Fix".',
            'Polite requests: "Could you please clarify the acceptance criteria?" vs "Explain this story."',
            'Client communications benefit from formal diction, while internal Slack messages use conversational phrasing.'
          ],
          exercises: [
            {
              id: 'ex-en-reg-1',
              type: 'multiple_choice',
              prompt: 'What is the formal professional equivalent of "look into the bug"?',
              options: ['Investigate the defect', 'See the bug', 'Check out the problem'],
              correctAnswer: 'Investigate the defect'
            }
          ]
        }
      ]
    },
    {
      id: 'u-star',
      order: 4,
      title: 'Unidad 4: Banco de Respuestas Técnicas STAR (Basadas en Doc-23)',
      lessons: [
        {
          id: 'les-en-star-1-webgl',
          order: 1,
          title: 'STAR 1: WebGL 60 FPS Optimization & Performance Tuning',
          kind: 'speaking',
          estimatedMinutes: 25,
          content: [
            'Source: doc-23 §4 (TwinSight X500 Deep-Dive) & §7 (Technical Challenges).',
            'Situation: Low-tier laptops dropped to 22 FPS with 1200+ draw calls and 15s loading times.',
            'Task: Achieve stable 60 FPS in browser with <25MB download and zero camera stutter.',
            'Action: Blender CAD cleanup (-75% polys), normal baking, GPU instancing, texture atlasing, and lazy loading.',
            'Result: Rock-solid 60 FPS, draw calls reduced by 80% (<180), and load time under 4 seconds.'
          ],
          exercises: [
            {
              id: 'ex-en-star1-1',
              type: 'multiple_choice',
              prompt: 'In the STAR 1 action, what technique reduced unique draw calls by grouping identical meshes?',
              options: ['GPU Instancing and Material Batching', 'CPU Multithreading', 'Software Occlusion'],
              correctAnswer: 'GPU Instancing and Material Batching'
            }
          ]
        },
        {
          id: 'les-en-star-2-cad',
          order: 2,
          title: 'STAR 2: CAD-to-Realtime Automated Asset Pipeline',
          kind: 'speaking',
          estimatedMinutes: 25,
          content: [
            'Source: doc-23 §1 & §4 (CAD-to-Realtime Optimization Workflow).',
            'Situation: 450MB parametric CAD assemblies contained microscopic internal geometry that crashed game engines.',
            'Task: Create a lossless, repeatable transformation pipeline preserving engineering visual fidelity.',
            'Action: Authored Python scripts in Blender to strip unseen internal volumes, fix non-manifold edges, and align pivot points matching the engineering BOM.',
            'Result: Transformed 450MB CAD data into a lightweight 18MB real-time asset hierarchy supporting interactive cross-sections.'
          ],
          exercises: [
            {
              id: 'ex-en-star2-1',
              type: 'fill_in_blank',
              prompt: 'The pipeline transformed an unwieldy 450MB CAD dataset into a ______ (18MB/100MB) real-time model.',
              correctAnswer: '18MB'
            }
          ]
        },
        {
          id: 'les-en-star-3-ara',
          order: 3,
          title: 'STAR 3: AI Tooling, Ingestion & Systems Thinking',
          kind: 'speaking',
          estimatedMinutes: 25,
          content: [
            'Source: doc-23 §2 & §6 (ARA Framework & Systems Automation).',
            'Situation: Manual research and ingestion of hundreds of technical papers was slow and error-prone.',
            'Task: Build a structured research automation framework (ARA Framework) in Python.',
            'Action: Developed automated parsing with strict schema validation against TypeScript contracts and deterministic prompt structures.',
            'Result: 10x throughput acceleration, ingestion of 100+ sources into RAG knowledge bases with zero transcription errors.'
          ],
          exercises: [
            {
              id: 'ex-en-star3-1',
              type: 'multiple_choice',
              prompt: 'What was the primary quantified throughput benefit of the automated ingestion framework?',
              options: ['Over 10x acceleration', '2x faster', '50% reduction'],
              correctAnswer: 'Over 10x acceleration'
            }
          ]
        }
      ]
    }
  ]
};

export { englishTechnicalVocabulary, englishScenarios, englishStarAnswers, businessVocabulary };
export { technicalCollocations, workplacePhrasalVerbs, formalVsInformalPairs, falseFriendsTechESEN };
