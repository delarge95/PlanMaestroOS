# Sentinel Security Journal

## 2026-10-01 - Dynamic Embed URL Validation and Restrictive Sandbox Parameters
**Vulnerability:** Untrusted user input or persisted local storage strings used as iframe source URLs (`src`) without protocol/domain verification could allow dynamic iframe injection, phishing, or unauthorized script execution (`javascript:`, `data:`).
**Learning:** React components (`SecondBrainInspector`, `YouTubePlayer`) accepted external links for live Notion embeds and video players without restricting protocol or hostname.
**Prevention:** Always validate third-party dynamic embed URLs using `isValidEmbedUrl` (requiring `https:` and domain whitelisting) and enforce restrictive `sandbox="allow-scripts allow-same-origin allow-popups allow-forms"` attributes on `<iframe>` tags.
