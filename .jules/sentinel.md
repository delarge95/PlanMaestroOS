## 2025-05-18 - Restricting Dynamic Third-Party Iframe Embeds
**Vulnerability:** Dynamic components rendering third-party iframes (e.g., Notion, YouTube, Vimeo embeds) accepted arbitrary URLs without HTTPS enforcement or domain whitelisting, and lacked restrictive iframe `sandbox` attributes.
**Learning:** Accepting user-provided or unvalidated embed URLs in iframes opens risks of cross-site scripting (XSS), phishing, or unauthorized top-frame navigation if embedded pages are untrusted or un-sandboxed.
**Prevention:** Always validate third-party embed URLs using a domain whitelist and HTTPS check (`isValidEmbedUrl`), and apply restrictive `sandbox` parameters (such as `allow-scripts allow-same-origin allow-popups allow-presentation`) to all `<iframe>` elements.
