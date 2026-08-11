// src/data/contracts/expansionContracts.ts - Contratos Agnósticos de Expansión per Documento 07

// === 1. TESIS / TWINSIGHT ===
export interface TechnicalPerformanceMetric {
  id: string;
  device: string; // e.g. "Meta Quest 2", "NVIDIA RTX 3060 Desktop", "Chrome Android Low-End"
  scene: string; // e.g. "Escena Industrial X500 6.5M polys"
  buildVersion: string; // e.g. "v1.0.4-webgl"
  fps: number;
  verticesCount: number;
  ttiMs: number; // Time to Interactive in ms
  measurementMethod: string; // e.g. "Unity Profiler + Chrome Performance DevTools"
  measuredAtIso: string;
}

export interface ThesisMilestone {
  id: string;
  title: string;
  chapterNumber: number;
  status: 'Planificado' | 'EnProgreso' | 'EnRevisión' | 'Aprobado';
  deliverableRepoUrl?: string;
  metrics: TechnicalPerformanceMetric[];
}

export interface UsabilityMetric {
  id: string;
  testGroup: string;
  methodology: string;
  completionRatePercent: number;
  dateIso: string;
}

// === 2. IDIOMAS (ALEMÁN A1 & INGLÉS TÉCNICO) ===
export interface VocabularyItem {
  id: string;
  language: 'de' | 'en';
  cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'Technical';
  term: string;
  translationEs: string;
  exampleSentence: string;
  grammarCategory: 'Nomen' | 'Verb' | 'Adjektiv' | 'Phrase';
  licenseSource: string;
}

export interface ReviewCard {
  id: string;
  vocabId: string;
  nextReviewDateIso: string;
  intervalDays: number;
  easeFactor: number;
  repetitionsCount: number;
}

export interface PracticeAttempt {
  id: string;
  timestampIso: string;
  targetSkill: 'Reading' | 'Writing' | 'Listening' | 'Speaking' | 'Grammar';
  userText: string;
  feedbackText: string;
  errorCategory?: 'ArticleGender' | 'VerbConjugation' | 'WordOrder' | 'VocabularyChoice';
}

export interface LanguageAiTutorContract {
  targetLanguage: 'de' | 'en';
  cefrLevel: 'A1' | 'Technical';
  allowedSources: string[];
  feedbackMode: 'selected_errors_only';
  approvalRequired: true;
  prohibitGeneratedProtectedAudio: true;
}

// === 3. GASTRONOMÍA ===
export interface RecipeLibraryItem {
  id: string;
  title: string;
  sourceUrl?: string;
  originalSummary: string;
  prepTimeMinutes: number;
  ingredients: string[];
  userNotes: string;
  licenseNote: 'Personal notes and public metadata link';
}

export interface MealPlannerItem {
  id: string;
  dishName: string;
  repeatableFrequency: 'Semanal' | 'Quincenal' | 'Ocasional';
  estimatedCostUsd: number;
  dietaryCategory: 'Proteico' | 'Vegetales' | 'Balanceado';
}

// === 4. ACADEMIA, CURSOS Y BECAS ===
export interface AcademicOpportunity {
  id: string;
  institution: string;
  programTitle: string;
  type: 'Beca' | 'Master' | 'Certificación' | 'Curso';
  deadlineIso: string;
  requirements: string[];
  fundingAmount?: string;
  status: 'Investigando' | 'DocumentosEnProceso' | 'Enviado' | 'Admitido' | 'Rechazado';
}

// === 5. NOTICIAS E INVESTIGACIÓN ===
export interface ResearchDigestItem {
  id: string;
  title: string;
  sourceName: string;
  sourceUrl: string;
  publishedDateIso: string;
  keyTakeaway: string;
  relevanceTags: string[];
}
