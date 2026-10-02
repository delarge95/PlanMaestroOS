# Sentinel Security Journal

## 2026-10-02 - Whitelist Domain & Protocol Validation for Dynamic iFrame Embeds
**Vulnerability:** User-provided URLs in `SecondBrainInspector` were loaded directly into `<iframe>` elements without protocol or domain validation, allowing potential XSS via `javascript:`/`data:` URIs or phishing via untrusted external domains.
**Learning:** Browsers do not restrict iframe sources by default unless protocol checks and strict domain matching are enforced in application code. Domain string checks must inspect hostnames carefully to prevent domain-prefix/suffix spoofing (e.g., `notion.so.evil.com`).
**Prevention:** Use `isValidEmbedUrl` in `src/utils/security.ts` to validate all third-party dynamic iframe URLs against an explicit HTTPS whitelist and add restrictive `sandbox` attributes to iframe elements.
