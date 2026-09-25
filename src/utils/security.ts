// src/utils/security.ts - Utility functions for security validation

const ALLOWED_EMBED_DOMAINS = [
  'notion.so',
  'www.notion.so',
  'notion.site',
  'www.notion.site',
  'notion.com',
  'www.notion.com',
  'v1.embednotion.com',
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'vimeo.com',
  'player.vimeo.com',
];

/**
 * Validates whether a given URL is safe to be embedded in an iframe.
 * Enforces HTTPS protocol and validates against an allowed domain whitelist.
 */
export function isValidEmbedUrl(url: string | null | undefined): boolean {
  if (!url || typeof url !== 'string') return false;

  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();
    return ALLOWED_EMBED_DOMAINS.some(domain =>
      hostname === domain || hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}
