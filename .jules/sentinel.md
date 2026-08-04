# Sentinel Security Journal 🛡️

Only entries for critical security learnings are logged here to avoid routine noise.

## 2026-08-04 - [Defense in Depth: Dynamic Iframe Validation and Sandboxing]
**Vulnerability:** Weak security boundaries for third-party embeds allowed potentially unvalidated/unsafe URLs to load in the Notion dynamic embed iframe, coupled with missing `sandbox` isolation attributes on both Notion and YouTube embeds.
**Learning:** Modern SPAs that allow users to customize external embeds must validate both dynamic inputs and stored state (e.g., from `localStorage`) against a strict domain whitelist and protocol (HTTPS) to prevent SSRF-like UI injection or phishing vectors.
**Prevention:** Always restrict frame capabilities using strict `sandbox` policies (e.g., `allow-scripts allow-same-origin allow-forms allow-popups`) and robust hostname matching (`parsed.hostname === domain || parsed.hostname.endsWith('.' + domain)`) to prevent domain spoofing.
