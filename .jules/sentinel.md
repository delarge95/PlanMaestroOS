# Sentinel Security Journal

## 2025-09-13 - Dynamic Iframe Embed Security Validation and Sandboxing
**Vulnerability:** Unvalidated third-party embed URLs (e.g., Notion, YouTube, Vimeo) rendered directly in iframes without HTTPS validation or `sandbox` attributes, exposing potential XSS or clickjacking vectors if malicious URLs were provided or stored in state.
**Learning:** React components accepting dynamic embed URLs should explicitly validate protocol (HTTPS) and match hostname against a trusted domain whitelist before rendering.
**Prevention:** Use a central `isValidEmbedUrl` helper before rendering dynamic content in iframes and enforce restrictive `sandbox` permissions (`sandbox="allow-scripts allow-same-origin allow-presentation"`).
