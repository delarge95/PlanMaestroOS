# Sentinel Security Journal

Your journal is NOT a log - only add entries for CRITICAL security learnings.

## 2026-07-30 - Iframe Injection and Open Redirect Vulnerability in Second Brain Integration
**Vulnerability:** The Notion Embedded live inspector feature allowed arbitrary user input URLs to be loaded directly into an `iframe` without any domain restrictions, sanitization, or sandboxing attributes. This allowed open iframe redirection to malicious domains, potentially leading to phishing, session hijacking, or script execution within the application container context.
**Learning:** The feature was designed to support user-customizable Notion page embedding, but treated the input URL as trusted, bypassing validation on protocol and domain authority. Third-party embeds should always be restricted to a strict allowlist of trusted origins, and sandboxed as a baseline.
**Prevention:**
- Implement a rigid URL domain validation helper (e.g., using a secure allowlist of trusted domains like `notion.so`, `notion.site`, `notion.com`, and `v1.embednotion.com`).
- Add the `sandbox` attribute with minimal required permissions to any dynamic `iframe` (e.g., `sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"`).
- Sanitise and validate any URL retrieved from persistent storage (`localStorage`) before rendering it inside the application DOM.
