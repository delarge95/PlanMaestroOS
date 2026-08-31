// src/utils/security.ts - Security utilities for input validation and sanitization

const ALLOWED_EMBED_DOMAINS = new Set([
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
]);

/**
 * Validates whether a given URL is a safe HTTPS embed URL matching trusted domains.
 * Prevents XSS, javascript: URI injection, open redirect, and malicious iframe embedding.
 */
export function isValidEmbedUrl(rawUrl?: string | null): boolean {
  if (!rawUrl || typeof rawUrl !== 'string') return false;

  const trimmed = rawUrl.trim();
  if (!trimmed) return false;

  try {
    const parsed = new URL(trimmed);

    // Only allow secure HTTPS protocol
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();

    // Check exact domain match or direct domain whitelist membership
    if (ALLOWED_EMBED_DOMAINS.has(hostname)) {
      return true;
    }

    // Check subdomain matching for trusted domains (e.g., sub.notion.site)
    for (const domain of ALLOWED_EMBED_DOMAINS) {
      if (hostname.endsWith('.' + domain)) {
        return true;
      }
    }

    return false;
  } catch {
    // Malformed URL
    return false;
  }
}
