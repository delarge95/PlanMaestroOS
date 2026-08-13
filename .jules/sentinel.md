# Sentinel's Journal: Critical Security Learnings

## 2025-02-18 - Secure Dynamic Iframe Embeds Pattern
**Vulnerability:** Unrestricted and unvalidated iframe embeds allow arbitrary HTML/JavaScript injection, phishing, open redirects, or SSRF-like behavior if users paste malicious URLs into inputs (e.g., Notion integration workspace inputs or dynamic YouTube/Vimeo links).
**Learning:** Lacking domain validation and sandbox restrictions on `iframe` components exposes the application's users to malicious third-party content. Even if the platform appears safe, any input field allowing URL customization that renders in an iframe is a high-risk vector.
**Prevention:**
1. Always enforce HTTPS protocol for dynamic URLs.
2. Validate foreign URLs against a strict whitelist of hostnames (e.g., Notion, YouTube, Vimeo) using a robust utility like `isValidEmbedUrl`.
3. Apply restrictive `sandbox` attributes (`allow-scripts allow-same-origin allow-presentation allow-popups`) to limit the permissions of foreign frames.
