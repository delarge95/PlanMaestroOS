## 2026-07-31 - [Iframe Security and Input Validation]
**Vulnerability:** Arbitrary user-supplied URL injection inside iframes (via the SecondBrainInspector's Notion integration). An attacker or malicious input could render arbitrary external websites, potentially leading to phishing, clickjacking, or session hijacking.
**Learning:** Third-party embeds like Notion or YouTube must always restrict allowed schemes to secure ones (e.g., HTTPS), enforce strict whitelist checks on domains, and use highly restrictive `sandbox` attributes to limit iframe capability (disallowing `allow-top-navigation` or `allow-modals` where possible).
**Prevention:**
- Enforce strict scheme validation (`https:`).
- Match the parsed domain against a strict whitelist (e.g., `notion.so`, `notion.site`, `notion.com`, `v1.embednotion.com`, and `youtube.com`).
- Add robust `sandbox` attributes to all dynamic embeds.
