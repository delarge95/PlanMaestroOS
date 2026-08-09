# Sentinel's Security Journal 🛡️

This journal documents critical security learnings, vulnerability patterns specific to this codebase, and reusable architectural security strategies.

## 2025-03-09 - Securing Dynamic Client-Side Iframe Embeds
**Vulnerability:** The application featured interactive workspaces allowing users to input and load arbitrary iframe embeds (e.g., Notion pages/databases or YouTube technique videos) without protocol enforcement, strict domain whitelisting, or iframe sandboxing. This created a high-risk vector for Open Redirect, Clickjacking/Frame-Busting, phishing, and Cross-Site Scripting (XSS) if an untrusted domain was injected via local storage manipulation or user input.
**Learning:** React/Astro client-side dynamic embeds can easily bypass standard static analysis tools. Relying on simple string parsing of URLs is insufficient; exact subdomain and hostname matching using a secure robust parser is necessary. Additionally, default iframe configurations are overly permissive, allowing unrestricted script execution and parent window interaction.
**Prevention:**
1. Always parse all dynamic third-party URLs using the native `URL` constructor to enforce strict `https:` protocol and check hostnames against an exact-match or proper subdomain-match whitelist.
2. Never render raw user-provided input URLs directly inside an `iframe`'s `src` attribute without prior validation.
3. Always include restrictive `sandbox` attributes on all third-party `iframe` tags (e.g., `sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"`) to restrict execution capabilities and enforce the principle of least privilege.
