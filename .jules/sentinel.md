## 2025-05-18 - Dynamic Iframe Embed URL Validation and Sandboxing

**Vulnerability:**
Components accepting external or user-provided embed URLs (`SecondBrainInspector`, `YouTubePlayer`, `ThenxGuideDatabase`) rendered `<iframe src={...}>` without validating the scheme (allowing non-HTTPS or `javascript:` URLs), without domain whitelisting, and without restrictive `sandbox` attributes.

**Learning:**
User input for iframe URLs in client components could allow framing untrusted origins or arbitrary script execution if malicious URLs were entered or loaded from local storage.

**Prevention:**
Always pass dynamic embed URLs through `isValidEmbedUrl()` (which strictly checks HTTPS and whitelisted domains like Notion, YouTube, and Vimeo) and apply restrictive `sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"` attributes to iframe elements.
