// src/utils/security.ts - Reusable Security Validation Utilities

const ALLOWED_EMBED_DOMAINS = [
  'notion.so',
  'notion.site',
  'notion.com',
  'v1.embednotion.com',
  'youtube.com',
  'www.youtube.com',
  'youtube-nocookie.com',
  'www.youtube-nocookie.com',
  'youtu.be',
  'vimeo.com',
  'player.vimeo.com',
];

/**
 * Validates third-party dynamic iframe URLs against strict domain and HTTPS protocol requirements.
 */
export function isValidEmbedUrl(urlString?: string | null): boolean {
  if (!urlString) return false;
  try {
    const url = new URL(urlString);
    if (url.protocol !== 'https:') return false;

    const hostname = url.hostname.toLowerCase();
    return ALLOWED_EMBED_DOMAINS.some(
      (domain) => hostname === domain || hostname.endsWith('.' + domain)
    );
  } catch {
    return false;
  }
}
