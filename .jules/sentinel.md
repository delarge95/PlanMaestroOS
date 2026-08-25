## 2025-02-25 - Dynamic Embed URL Validation and Sandbox Restrictions

**Vulnerability:**
Third-party dynamic iframe components (`SecondBrainInspector`, `YouTubePlayer`, `ThenxGuideDatabase`) were rendering user-supplied or stored iframe embed URLs without protocol or domain validation, allowing potential XSS/open-redirect via `javascript:` or untrusted HTTP origins, and missing restrictive `sandbox` attributes on `<iframe>` elements.

**Learning:**
Relying solely on partial string matching (e.g. `.includes('vimeo.com')`) for embed URLs allows malicious bypasses if the substring appears in path/query components of untrusted origins. Furthermore, iframes rendering dynamic third-party content require strict domain whitelisting and minimal `sandbox` permissions to prevent privilege escalation.

**Prevention:**
Validate all embed URLs using `isValidEmbedUrl` (enforcing `https:` protocol and checking hostname against a strict domain whitelist) and always apply explicit `sandbox` attributes (e.g., `sandbox="allow-scripts allow-same-origin allow-presentation allow-forms"`) to dynamic `<iframe>` elements.
