// src/utils/security.ts

/**
 * Whitelisted domains allowed for iframe embeds across the application.
 */
const DEFAULT_ALLOWED_EMBED_DOMAINS = [
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
 * Validates whether a given URL is safe to embed in an iframe.
 * Enforces HTTPS protocol and domain whitelist check to prevent
 * XSS, sensitive data leakage, or embedding untrusted external origins.
 */
export function isValidEmbedUrl(
  url: string | null | undefined,
  allowedDomains: string[] = DEFAULT_ALLOWED_EMBED_DOMAINS
): boolean {
  if (!url || typeof url !== 'string') {
    return false;
  }

  const trimmed = url.trim();
  if (!trimmed) {
    return false;
  }

  try {
    const parsed = new URL(trimmed);

    // Require HTTPS protocol for secure iframe embeds
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();

    return allowedDomains.some((domain) => {
      const cleanDomain = domain.toLowerCase();
      return hostname === cleanDomain || hostname.endsWith(`.${cleanDomain}`);
    });
  } catch {
    return false;
  }
}
