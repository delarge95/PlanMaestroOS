// src/utils/url.ts - Safe base URL resolver for GitHub Pages and relative navigation
export function withBase(path: string): string {
  if (!path) return '#';

  const trimmed = path.trim();
  if (/^(javascript|data|vbscript):/i.test(trimmed)) {
    return '#';
  }

  if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('#')) {
    return trimmed;
  }

  const cleanPath = trimmed.replace(/^\//, '');
  const rawBase = import.meta.env.BASE_URL || '/';
  const baseUrl = rawBase.replace(/\/$/, '');

  return baseUrl ? `${baseUrl}/${cleanPath}` : `/${cleanPath}`;
}
