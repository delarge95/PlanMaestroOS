// src/utils/url.ts - Safe base URL resolver for GitHub Pages and relative navigation
export function withBase(path: string): string {
  if (!path) return '#';

  const trimmed = path.trim();
  const lower = trimmed.toLowerCase();

  // Sanitize dangerous URI schemes to prevent DOM XSS vulnerabilities
  if (
    lower.startsWith('javascript:') ||
    lower.startsWith('data:') ||
    lower.startsWith('vbscript:')
  ) {
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
