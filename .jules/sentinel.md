## 2026-09-29 - Secure Third-Party Embed Validation and Sandboxing

**Vulnerability:** Dynamic iframe components (`SecondBrainInspector`, `YouTubePlayer`) loaded user-controlled or dynamic external URLs into `<iframe>` elements without protocol enforcement, domain whitelisting, or iframe sandboxing.
**Learning:** Allowing arbitrary URLs in iframes without validation allows potential cross-site script injection, open redirect vulnerabilities, or unauthorized protocol execution.
**Prevention:** Always validate third-party dynamic embed URLs using `isValidEmbedUrl` to enforce HTTPS and domain whitelisting, and set restrictive iframe `sandbox` attributes (`sandbox="allow-scripts allow-same-origin allow-presentation allow-forms"`).
