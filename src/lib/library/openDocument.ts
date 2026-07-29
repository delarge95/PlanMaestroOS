// src/lib/library/openDocument.ts - Safe document opener & base URL resolver
import type { LibraryDocument } from '../../data/library/types';

/**
 * Resolves relative asset paths safely for deployment environments like GitHub Pages.
 */
export function libraryAssetUrl(path: string): string {
  if (!path) return '#';
  const cleanPath = path.replace(/^\//, '');
  const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  return `${baseUrl}/${cleanPath}`;
}

/**
 * Opens a library document in a new tab if openable.
 */
export function openLibraryDocument(doc: LibraryDocument): { ok: boolean; reason?: string } {
  if (!doc.isOpenable || !doc.openUrl) {
    return { ok: false, reason: 'unavailable' };
  }

  if (doc.access === 'repo-public' && doc.openUrl) {
    const fullUrl = libraryAssetUrl(doc.openUrl);
    window.open(fullUrl, '_blank', 'noopener,noreferrer');
    return { ok: true };
  }

  return { ok: false, reason: 'unavailable' };
}
