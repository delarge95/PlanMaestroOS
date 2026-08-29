---
trigger: always_on
---

# Rule: Agent session protocol (activation: ALWAYS ON)

1. SESSION START: state which agent you are (AG-XXX). Read docs/agents/PLAN_MULTIAGENTE.md (section 0, your ficha, section 1.2), your STATUS doc if it exists, and your open tickets in docs/agents/tickets.md.
2. GIT: git checkout agent/<your-branch>; sync with main as the current wave rules specify; npm install if needed.
3. SCOPE: work your ficha's current phase in its declared order unless the user explicitly redirects. Declare the phase and item you are working on.
4. TICKETS BEFORE FEATURES: answer your assigned tickets before new feature work (mandatory for AG-CORE; good practice for all).
5. DEFINITION OF DONE (PR): astro check 0 errors, npm test green, domain validators green, tests for new contracts/logic, CHANGELOG note of which contracts/data became available to other domains.
6. FOREIGN REQUESTS: if the user's request falls in another agent's territory, say so, open the ticket, and do only your part.
7. EXTRACTION TASKS (heavy PDFs): follow the section-by-section extraction workflow (/gemini-extraction). Paraphrase always, cite chapter/page on every claim, mark inconsistencies with a warning — never fill gaps by guessing.