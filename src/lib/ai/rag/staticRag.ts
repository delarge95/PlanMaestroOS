// src/lib/ai/rag/staticRag.ts - RAGs Fijos (Conocimiento Estático Licenciable)

export interface StaticRagDocument {
  id: string;
  domain: 'fitness' | 'idiomas' | 'clinico' | 'proyectos';
  sourceName: string;
  chapterOrSection: string;
  pageNumber?: number;
  summaryContent: string;
}

export const staticRagDatabase: StaticRagDocument[] = [
  {
    id: 'rag-fit-1',
    domain: 'fitness',
    sourceName: 'Overcoming Gravity 2nd Ed (Resumen propio)',
    chapterOrSection: 'Capítulo 4: Programación de Fuerza Corporal',
    pageNumber: 112,
    summaryContent: 'Rango de hipertrofia y fuerza relativa: 6-12 repeticiones con tempo controlado y descansos de 2 a 3 minutos entre series de trabajo.'
  },
  {
    id: 'rag-fit-2',
    domain: 'fitness',
    sourceName: 'Overcoming Tendonitis (Resumen propio)',
    chapterOrSection: 'Protocolos de Isometría para Tendinopatía Patelar',
    pageNumber: 45,
    summaryContent: 'Mantener contracciones isométricas de 45 segundos al 70% MVIC para analgesia inmediata del tendón patelar.'
  },
  {
    id: 'rag-lang-1',
    domain: 'idiomas',
    sourceName: 'Grammatik Aktiv A1-B1 (Notas sintácticas)',
    chapterOrSection: 'Unidad 12: Wechselpräpositionen',
    pageNumber: 88,
    summaryContent: 'Las 9 preposiciones mixtas usan Akkusativ para movimiento dirigido (Wohin?) y Dativ para posición fija (Wo?).'
  },
  {
    id: 'rag-clin-1',
    domain: 'clinico',
    sourceName: 'Resumen Clínico de Protocolos de Desbloqueo',
    chapterOrSection: 'Sección 2: Estrategia de 10 minutos',
    summaryContent: 'Ante bloqueo severo por parálisis por análisis, forzar un micro-bloque de 10 min seguido de decisión binaria: continuar o soltar sin penalización.'
  }
];

export function queryStaticRag(domain: string, query: string): StaticRagDocument[] {
  return staticRagDatabase.filter(
    (doc) => doc.domain === domain && doc.summaryContent.toLowerCase().includes(query.toLowerCase())
  );
}
