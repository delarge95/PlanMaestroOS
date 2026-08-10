/**
 * Security utility to validate dynamic embed URLs (e.g., Notion, YouTube)
 * Enforces HTTPS and whitelists specific domains.
 */
export function isValidEmbedUrl(url: string | null | undefined): boolean {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const allowedDomains = [
      'notion.so',
      'notion.site',
      'notion.com',
      'v1.embednotion.com',
      'youtube.com',
      'youtu.be',
    ];

    return allowedDomains.some((domain) => {
      return parsed.hostname === domain || parsed.hostname.endsWith('.' + domain);
    });
  } catch (e) {
    return false;
  }
}
