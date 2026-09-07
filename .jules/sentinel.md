## 2026-09-07 - Dynamic Iframe URL Validation & Sandboxing
**Vulnerability:** Dynamic user inputs or external dataset links rendered directly in `<iframe>` elements without protocol/domain allowlist checks or `sandbox` attributes, exposing potential XSS or untrusted site embedding risks.
**Learning:** React components displaying external Notion pages or video guides (YouTube, Vimeo) allowed unvalidated URL schemes (such as `http:` or `javascript:`) and arbitrary domains to be set and rendered in iframes.
**Prevention:** Always validate third-party dynamic embed URLs using `isValidEmbedUrl` to enforce HTTPS and whitelist allowed domains (`notion.so`, `youtube.com`, `vimeo.com`, etc.), while enforcing restrictive `sandbox` parameters on iframe tags.
