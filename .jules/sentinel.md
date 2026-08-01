# Sentinel Security Journal

## 2026-08-01 - Unvalidated Dynamic Iframe Embeds
**Vulnerability:** The Notion Second Brain integration iframe in `SecondBrainInspector.tsx` accepted dynamically inputted URLs from `localStorage` or direct input and rendered them without any protocol verification, domain whitelisting, or sandboxing. This could allow loading malicious URLs or execution of insecure content.
**Learning:** Storing and loading URLs dynamically without filtering them against a strict whitelist can lead to clickjacking, phishing, and cross-site scripting (XSS) in some environments. Unsandboxed iframes have excessive permissions that can compromise the application's overall security boundaries.
**Prevention:** Implement strict input validation using the `URL` API to enforce `https:` protocol and only permit an approved domain whitelist (`notion.so`, `notion.site`, `notion.com`, `v1.embednotion.com`). Apply the `sandbox` attribute to restrict iframe actions (`allow-scripts allow-same-origin allow-popups allow-forms`).
