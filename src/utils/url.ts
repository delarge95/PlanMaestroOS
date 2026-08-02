// src/utils/url.ts - Safe base URL resolver for GitHub Pages and relative navigation
export function withBase(path: string): string {
  if (!path) return '#';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('#')) {
    return path;
  }

  const cleanPath = path.replace(/^\//, '');
  const rawBase = import.meta.env.BASE_URL || '/';
  const baseUrl = rawBase.replace(/\/$/, '');

  return baseUrl ? `${baseUrl}/${cleanPath}` : `/${cleanPath}`;
}
