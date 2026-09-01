// src/utils/security.ts - Security utilities for input validation and safe rendering

const DEFAULT_ALLOWED_EMBED_DOMAINS = [
  'notion.so',
  'notion.site',
  'notion.com',
  'v1.embednotion.com',
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'www.youtube-nocookie.com',
  'vimeo.com',
  'player.vimeo.com'
];

/**
 * Validates that an embed URL uses HTTPS protocol and originates from a trusted domain.
 * Helps prevent XSS, SSRF, and untrusted domain embedding via dynamic iframe components.
 */
export function isValidEmbedUrl(url: string | null | undefined, customAllowedDomains?: string[]): boolean {
  if (!url || typeof url !== 'string') return false;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:') return false;

    const allowed = customAllowedDomains || DEFAULT_ALLOWED_EMBED_DOMAINS;
    const hostname = parsed.hostname.toLowerCase();

    return allowed.some((domain) => hostname === domain || hostname.endsWith(`.${domain}`));
  } catch {
    return false;
  }
}
