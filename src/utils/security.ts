// src/utils/security.ts — Reusable security validation utilities

export const DEFAULT_ALLOWED_EMBED_DOMAINS = [
  'notion.so',
  'notion.site',
  'notion.com',
  'v1.embednotion.com',
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'vimeo.com',
  'player.vimeo.com',
];

/**
 * Validates that an embed URL uses HTTPS protocol and matches an allowed domain.
 */
export function isValidEmbedUrl(
  url: string | null | undefined,
  allowedDomains: string[] = DEFAULT_ALLOWED_EMBED_DOMAINS
): boolean {
  if (!url || typeof url !== 'string') return false;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:') return false;

    const hostname = parsed.hostname.toLowerCase();
    return allowedDomains.some((domain) => {
      const cleanDomain = domain.toLowerCase();
      return hostname === cleanDomain || hostname.endsWith(`.${cleanDomain}`);
    });
  } catch (_err) {
    return false;
  }
}
