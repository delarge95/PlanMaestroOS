---
trigger: model_decision
description: Glob *.{ts,tsx,astro} + Model Decision (data, RAG, rules-engine tasks)
---

# Rule: Astro/React/TS & data integrity
Activation: Glob *.{ts,tsx,astro} + Model Decision (data, RAG, rules-engine tasks).

- TypeScript strict: no `any` without inline justification; pure functions for rules/logic (no DOM in lib code); Zustand consumed via selectors.
- Follow the repo's existing Astro 5 + React 19 component patterns; no new framework patterns without a ticket.
- Contracts: no breaking change without versioning (e.g. userState.v1.ts) + migration note; every contract ships with tests (target >=90% lines on new contract modules).
- Data integrity: every number shown in UI traces to ruleId/sourceRef (docId + chapter/section/page); knowledge entries carry evidenceTier (meta-analysis > RCT > observational > expert book).
- RAG: rag/<domain>.json in the v4 format via the CORE builder; chunked with metadata; stable sourceIds from biblioteca/MANIFEST.md never change once created.
- Persistence: via the CORE storage adapter (IndexedDB); if it is not merged yet, document any localStorage keys used, for migration. No scattered ad-hoc storage.
- Clinical surfaces: every suggestion carries disclaimer + referral; no medical-device framing; clinical rules never proactive outside their relevant context.
- Public pages (AG-PORT territory): no invented metrics or URLs; explicit placeholders only.