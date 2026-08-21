## 2026-02-21 - Secure Dynamic Embed Validation and Restrictive Sandbox Enclosure

**Vulnerability:** Dynamic `iframe` embeds in components (`SecondBrainInspector`, `YouTubePlayer`, `ThenxGuideDatabase`) accepted arbitrary dynamic URLs without HTTPS scheme enforcement, domain whitelisting, or restrictive `sandbox` attributes, posing XSS, open redirect, and frame-hijacking risks.

**Learning:** Component inputs and local storage references that drive `iframe.src` were rendered directly without domain validation or iframe sandbox restrictions.

**Prevention:** Always validate third-party dynamic iframe URLs using `isValidEmbedUrl()` to enforce HTTPS and trusted domain whitelist matching, and apply restrictive `sandbox` attributes (e.g. `sandbox="allow-scripts allow-same-origin allow-presentation allow-forms"`) to all embedded content.
