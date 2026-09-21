// src/utils/security.ts - Utility functions for URL and Embed security validation

const DEFAULT_ALLOWED_EMBED_DOMAINS = [
  'notion.so',
  'www.notion.so',
  'notion.site',
  'www.notion.site',
  'notion.com',
  'www.notion.com',
  'v1.embednotion.com',
  'youtube.com',
  'www.youtube.com',
  'youtube-nocookie.com',
  'www.youtube-nocookie.com',
  'youtu.be',
  'vimeo.com',
  'www.vimeo.com',
  'player.vimeo.com'
];

/**
 * Validates if a dynamic embed URL is secure (uses HTTPS protocol and matches allowed domain whitelist).
 */
export function isValidEmbedUrl(url: string | null | undefined, customAllowedDomains?: string[]): boolean {
  if (!url || typeof url !== 'string') {
    return false;
  }

  const trimmedUrl = url.trim();
  if (!trimmedUrl) {
    return false;
  }

  try {
    const parsed = new URL(trimmedUrl);

    // Enforce HTTPS protocol
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const allowed = customAllowedDomains ?? DEFAULT_ALLOWED_EMBED_DOMAINS;
    const hostname = parsed.hostname.toLowerCase();

    return allowed.some((domain) => hostname === domain || hostname.endsWith(`.${domain}`));
  } catch {
    return false;
  }
}
