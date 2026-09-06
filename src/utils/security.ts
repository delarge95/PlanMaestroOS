// src/utils/security.ts - Reusable security validation utilities

/**
 * Validates whether a given URL is safe for dynamic iframe embedding.
 * Enforces HTTPS protocol and domain whitelist (Notion, YouTube, Vimeo).
 */
export function isValidEmbedUrl(urlStr?: string | null): boolean {
  if (!urlStr || typeof urlStr !== 'string') {
    return false;
  }

  try {
    const url = new URL(urlStr);

    // Strictly require HTTPS protocol
    if (url.protocol !== 'https:') {
      return false;
    }

    const hostname = url.hostname.toLowerCase();

    // Allowed domains list
    const allowedExactDomains = [
      'v1.embednotion.com',
      'player.vimeo.com',
      'youtu.be',
      'www.youtu.be'
    ];

    if (allowedExactDomains.includes(hostname)) {
      return true;
    }

    // Allowed domain suffixes (e.g., .notion.so, .notion.site, .notion.com, .youtube.com, .vimeo.com)
    const allowedSuffixes = [
      'notion.so',
      'notion.site',
      'notion.com',
      'youtube.com',
      'vimeo.com'
    ];

    return allowedSuffixes.some((domain) =>
      hostname === domain || hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}
