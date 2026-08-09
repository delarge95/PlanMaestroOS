// src/utils/security.ts - Secure dynamic embed validation utility
// Enforces HTTPS and strictly matches trusted Notion & YouTube domains to prevent XSS, phishing, and open redirect risks.

export function isValidEmbedUrl(urlStr: string): boolean {
  if (!urlStr) return false;

  try {
    const url = new URL(urlStr);

    // Enforce HTTPS protocol
    if (url.protocol !== 'https:') {
      return false;
    }

    const hostname = url.hostname.toLowerCase();

    // Whitelist of trusted domains for dynamic embeds (Notion and YouTube)
    const trustedDomains = [
      'notion.so',
      'notion.site',
      'notion.com',
      'v1.embednotion.com',
      'youtube.com',
      'youtu.be'
    ];

    // Ensure hostname is exactly a trusted domain or a proper subdomain of it
    const isTrusted = trustedDomains.some((domain) => {
      return hostname === domain || hostname.endsWith('.' + domain);
    });

    return isTrusted;
  } catch (error) {
    // In case of invalid URL structure, fail securely
    return false;
  }
}
