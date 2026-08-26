# Sentinel Security Journal

## 2026-03-31 - Dynamic Embed URL Validation & Sandbox Restrictions

**Vulnerability:** Third-party iframe embeds (`YouTubePlayer`, `SecondBrainInspector`, `ThenxGuideDatabase`) accepted unvalidated iframe URLs (including user-entered URLs in `SecondBrainInspector`) without protocol/domain whitelisting or sandbox isolation. This created risks of cross-site scripting (XSS), phishing via frame injection, or malicious protocol handlers (e.g., `javascript:` links).

**Learning:** Third-party integration components in single-page apps often allow user or dynamic inputs for embed URLs without strict origin validation. Standard `iframe` tags without restrictive `sandbox` attributes grant embedded content full script access and potential navigation capabilities.

**Prevention:** Always validate embed URLs using a strict HTTPS scheme and explicit domain whitelist (`isValidEmbedUrl`), and apply restrictive `sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"` attributes to all dynamic `iframe` elements.
