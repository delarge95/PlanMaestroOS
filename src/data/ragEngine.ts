import ragIndex from './rag_index.json';

export interface RAGSearchResult {
  id: string;
  title: string;
  source: string;
  type: 'document' | 'rule' | 'routine' | 'career_audit' | 'clinical_module' | 'german';
  content: string;
  matchScore: number;
}

export function searchRAG(query: string): RAGSearchResult[] {
  if (!query || query.trim().length === 0) return [];
  
  const q = query.toLowerCase().trim();
  const terms = q.split(/\s+/).filter((t: string) => t.length > 2);
  const results: RAGSearchResult[] = [];

  // Search career audit documents index
  for (const doc of ragIndex.career_docs) {
    let score = 0;
    const titleMatch = doc.title.toLowerCase();
    const excerptMatch = (doc.excerpt || '').toLowerCase();

    for (const term of terms) {
      if (titleMatch.includes(term)) score += 5;
      if (excerptMatch.includes(term)) score += 2;
    }

    if (score > 0) {
      results.push({
        id: doc.id,
        title: `${doc.filename} - ${doc.title}`,
        source: doc.filename,
        type: 'career_audit',
        content: doc.excerpt || doc.title,
        matchScore: score
      });
    }
  }

  // Search sources
  for (const src of ragIndex.sources) {
    let score = 0;
    const t = src.title.toLowerCase();
    const d = src.description.toLowerCase();

    for (const term of terms) {
      if (t.includes(term)) score += 5;
      if (d.includes(term)) score += 2;
    }

    if (score > 0) {
      results.push({
        id: src.id,
        title: src.title,
        source: src.path,
        type: 'document',
        content: src.description,
        matchScore: score
      });
    }
  }

  // Sort by match score descending
  results.sort((a, b) => b.matchScore - a.matchScore);
  return results.slice(0, 15);
}

export function getRagData() {
  return ragIndex;
}
