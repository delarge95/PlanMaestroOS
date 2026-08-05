## 2026-08-05 - Insecure Dynamic Embeds (Iframes)
**Vulnerability:** Third-party iframe embeds without strict origin/protocol validation or restrictive sandbox permissions.
**Learning:** Dynamic user/stored inputs utilized directly in iframe `src` attributes without checking that the scheme is `https:` and the host matches a strict whitelist allows malicious actors to mount phishing/redirection attacks, or execute untrusted code in the application's context.
**Prevention:**
1. Enforce HTTPS protocol and strict domain whitelisting (e.g. `notion.so`, `notion.site`, `notion.com`, `v1.embednotion.com`, `youtube.com`, `youtu.be`) on all dynamically rendered iframe source URLs.
2. Provide fallback or security warning UI when invalid URLs are detected.
3. Apply restrictive `sandbox` attributes (`allow-scripts allow-same-origin ...`) to prevent the framed document from navigating the top window or running unsolicited dangerous actions.
