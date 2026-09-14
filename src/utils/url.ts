// src/utils/url.ts - Safe base URL resolver for GitHub Pages and relative navigation
export function withBase(path: string): string {
  if (!path) return '#';

  const trimmedPath = path.trim();
  const lowerPath = trimmedPath.toLowerCase();

  // Prevent DOM XSS via dangerous URI schemes (e.g. javascript:, data:, vbscript:)
  if (
    lowerPath.startsWith('javascript:') ||
    lowerPath.startsWith('data:') ||
    lowerPath.startsWith('vbscript:')
  ) {
    return '#';
  }

  if (trimmedPath.startsWith('http://') || trimmedPath.startsWith('https://') || trimmedPath.startsWith('#')) {
    return trimmedPath;
  }

  const cleanPath = trimmedPath.replace(/^\//, '');
  const rawBase = import.meta.env.BASE_URL || '/';
  const baseUrl = rawBase.replace(/\/$/, '');

  return baseUrl ? `${baseUrl}/${cleanPath}` : `/${cleanPath}`;
}
