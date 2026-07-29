// src/data/library/types.ts - Library Data Contract per User Specification
export type LibraryCategory = 'source' | 'plan' | 'document';
export type LibraryDomain = 'fitness' | 'clinical' | 'career' | 'german' | 'general';

export type LibraryDocument = {
  id: string;
  title: string;
  category: LibraryCategory;
  domain?: LibraryDomain;
  mimeType: 'application/pdf' | 'text/markdown' | 'text/plain';
  description?: string;
  author?: string;
  year?: number;
  tags?: string[];
  access: 'repo-public' | 'private-storage' | 'local-import';
  openUrl?: string;
  storageKey?: string;
  isOpenable: boolean;
};
